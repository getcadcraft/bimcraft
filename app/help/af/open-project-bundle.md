---
title: Maak 'n projekbundel oop
summary: 'n Projekbundel is een zip met 'n model, sy aansigte, sy uitlegte en sy eienskapgroepe. Maak dit oop, wys 'n aansig met sy verdieping en lae, maak 'n uitleg oop, en sien eienskappe in die projek se eie groepe.
keywords: bundel, projekbundel, ccbundle, zip, aansigte, aansigkaart, uitlegte, uitlegboek, laagkombinasie, eienskapgroepe, standaarde, pln, sjabloon
from: b5b86e8f
---

## Wat jy gaan doen

Maak 'n **projekbundel** (`.ccbundle.zip`) oop en werk met die projek soos dit georganiseer was: sy aansigte, sy uitlegte en sy eienskapgroepe, bo-op die model.

'n Bundel bevat:

- die model as IFC,
- die uitlegte as PDF en DWG,
- 'n lys van wat IFC uitlaat: die aansigte (elk met sy verdieping, laagkombinasie en skaal), die uitlegte en die tekeninge wat daarop geplaas is, eienskapdefinisies in hul groepe, klassifikasies, en standaarde soos lae, pennestelle, lynsoorte, vulsels, oppervlaktes en samestellings.

Bundels word geskryf deur 'n oopbronskrip wat binne Archicad loop en Archicad self vir hierdie lyste vra. BimCraft lees nooit `.pln`- of `.tpl`-lêers direk nie; sien [Maak .pln- en .pla-projeklêers oop](topic:pln-project-files).

## Maak 'n bundel

Die skrip is 'n voorskou: dit is nog nie op elke Archicad-weergawe getoets nie. Kry dit van [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Jy benodig Archicad 24 of later en Python 3.8 of later; niks anders hoef geïnstalleer te word nie.

1. Stoor `archicad_bundle.py` in 'n vouer, byvoorbeeld `C:\cc-bundle`.
2. Maak in Archicad die projek oop en maak 'n publiseerstel met die naam presies **CadCraft bundle**: die 3D-aansig as IFC, elke uitleg as PDF, en elke uitleg weer as DWG, gepubliseer na lêers op skyf in een plat vouer.
3. Met die projek oop, voer `python archicad_bundle.py --probe --out .` een keer uit. Dit lees net, en skryf `probe.json`.
4. Voer `python archicad_bundle.py --out . --translator "IFC4 Reference View"` uit (gebruik die IFC-vertaler wat jy gekies het). Archicad publiseer die stel en die skrip skryf `<project>.ccbundle.zip`.

As publisering deur die skrip misluk, publiseer die stel met die hand en voer `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` uit. Die repository se README bevat elke opsie. As iets nie deurkom nie, open 'n kwessie daar en heg `probe.json` aan.

## Maak 'n bundel oop

1. Klik {{ui:Kies 'n lêer}}, of sleep die `.ccbundle.zip` op BimCraft. In 'n vouer wat jy met {{ui:Maak 'n vouer oop}} oopgemaak het, word bundels onder **Projekbundels** gelys; klik op een volgens naam.
2. Die model maak oop soos enige IFC, en die **Projekbundel**-afdeling verskyn links, onder die lêer se feite.

Niks word opgelaai nie: die bundel word op jou rekenaar gelees, een lêer op 'n slag, sodat 'n groot model nie twee keer gekopieer word nie.

## Wys 'n aansig

Onder **Aansigte** word aansigte gegroepeer volgens die vouers wat hulle in die projek gehad het. Klik op 'n aansig se naam:

- **'n Vloerplan** wys slegs sy verdieping, van bo gesien.
- **Sy laagkombinasie** verberg die elemente op die lae wat daardie kombinasie verberg. Die statuslyn sê hoeveel elemente dit verberg het.
- **Sy skaal** word langs die naam en in die statuslyn gewys.
- **'n 3D-aansig** wys elke verdieping.

Om alles weer te wys, gebruik {{ui:Wys alles}} in {{ui:Wys}} en merk elke verdieping aan.

:::note
BimCraft vind die lae deur die IFC-lêer se laagtoekennings. As die IFC sonder hulle uitgevoer is, verberg 'n laagkombinasie niks nie, en die statuslyn sê 0 elemente verborge.
:::

## Maak 'n uitleg oop

Onder **Uitlegte** wys elke uitleg sy nommer, naam, papiergrootte en die aansigte wat daarop geplaas is.

- **PDF** stoor die uitleg se PDF uit die bundel.
- **DWG** maak die uitleg se tekening in die 2D-aansig oop. Klik op enige aansig om terug na die model te keer.
- **Maak oop in …** stuur die uitleg se lêer na die program wat daarop werk, in 'n nuwe oortjie: die PDF na MarkupCraft, die DWG na CadCraft. Dit wys slegs waar daardie program langs BimCraft oop is. Die lêer word uit die bundel gelees soos die oortjie laai, en niks word opgelaai nie.

'n Uitleg met nie een van hulle nie, sê **Geen lêer in die bundel**.

## Sien eienskappe in die projek se groepe

Kies 'n element. **Eienskapgroepe** wys sy eienskappe onder die groepe wat die projek gedefinieer het, gepaar deur die eienskapstel en naam wat die definisie vir IFC gee, of andersins deur sy naam. Die res bly in {{ui:Eienskappe}} soos gewoonlik. **Eienskapdefinisies** lys elke definisie met sy groep, tipe en IFC-naam.

## Standaarde en notas

- **Standaarde** tel die lae, laagkombinasies, pennestelle, lynsoorte, vulsels, oppervlaktes, samestellings en materiale in die bundel.
- **Notas** lys wat die skrip nie uit daardie weergawe van Archicad kon kry nie, enige veld wat BimCraft nie kon lees nie, en enige lêer wat die bundel noem maar nie hou nie.

## Foutoplossing

- **"… is 'n zip, maar nie 'n projekbundel nie."** Die zip het geen `manifest.json` nie. Pak dit uit en maak die `.ifc` binne oop.
- **"… is 'n nuwer projekbundel as wat hierdie BimCraft lees."** Werk BimCraft by.
- **"… hou nie die model wat sy manifes noem nie."** Die zip is te vroeg afgesny of gewysig. Maak die bundel weer.
- **'n Aansig wys elke verdieping.** Sy verdieping is nie in die model se IFC nie (die statuslyn sê so). Kontroleer dat die IFC-uitvoer daardie verdieping ingesluit het.

Sien ook [Werk tussen twee BIM-programme](topic:two-bim-programs) en [Wat BimCraft uit elke formaat lees](topic:file-formats).
