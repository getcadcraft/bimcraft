---
title: Atidaryti projekto paketą
summary: Projekto paketas – tai vienas zip failas su modeliu, jo vaizdais, maketais ir savybių grupėmis. Atidarykite jį, rodykite vaizdą su jo aukštu ir sluoksniais, atidarykite maketą ir peržiūrėkite savybes projekto grupėse.
keywords: paketas, projekto paketas, ccbundle, zip, vaizdai, vaizdų žemėlapis, maketai, maketų knyga, sluoksnių derinys, savybių grupės, standartai, pln, šablonas
from: b5b86e8f
---

## Ką darysite

Atidarykite **projekto paketą** (`.ccbundle.zip`) ir dirbkite su projektu taip, kaip jis buvo sutvarkytas: jo vaizdais, maketais ir savybių grupėmis, kartu su modeliu.

Paketas talpina:

- modelį kaip IFC,
- maketus kaip PDF ir DWG,
- sąrašą to, ko IFC neperduoda: vaizdus (kiekvieną su jo aukštu, sluoksnių deriniu ir mastelių), maketus ir juose išdėstytus brėžinius, savybių aprašus jų grupėse, klasifikacijas ir standartus, pvz., sluoksnius, pieštukų rinkinius, linijų tipus, užpildus, paviršius ir kompozitus.

Paketus kuria atvirojo kodo scenarijus, veikiantis Archicad viduje, kuris šiuos sąrašus gauna tiesiai iš Archicad. BimCraft niekada tiesiogiai neskaito `.pln` ar `.tpl` failų; žr. [Atidaryti .pln ir .pla projekto failus](topic:pln-project-files).

## Sukurti paketą

Scenarijus yra peržiūra: jis dar nebandytas visose Archicad versijose. Gaukite jį iš [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Reikia Archicad 24 ar naujesnės versijos ir Python 3.8 ar naujesnės; nieko daugiau įdiegti nereikia.

1. Įrašykite `archicad_bundle.py` į aplanką, pavyzdžiui, `C:\cc-bundle`.
2. Archicad atidarykite projektą ir sukurkite leidybos rinkinį, pavadintą tiksliai **CadCraft bundle**: 3D vaizdas kaip IFC, kiekvienas maketas kaip PDF ir kiekvienas maketas dar kartą kaip DWG, paskelbti failais diske viename plokščiame aplanke.
3. Su atidarytu projektu vieną kartą paleiskite `python archicad_bundle.py --probe --out .`. Jis tik skaito ir įrašo `probe.json`.
4. Paleiskite `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (naudokite IFC vertimo įrankį, kurį pasirinkote). Archicad paskelbia rinkinį, o scenarijus įrašo `<project>.ccbundle.zip`.

Jei paskelbimas per scenarijų nepavyksta, paskelbkite rinkinį rankiniu būdu ir paleiskite `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Visas parinktis rasite saugyklos README. Jei kažkas neperduodama, atidarykite pranešimą ten ir pridėkite `probe.json`.

## Atidaryti paketą

1. Spustelėkite {{ui:Pasirinkti failą}} arba įvilkite `.ccbundle.zip` į BimCraft. Aplanke, kurį atidarėte su {{ui:Atidaryti aplanką}}, paketai rodomi skiltyje **Projekto paketai**; spustelėkite vieną pagal pavadinimą.
2. Modelis atsidaro kaip bet koks IFC, o kairėje, po failo duomenimis, atsiranda skyrius **Projekto paketas**.

Nieko neįkeliama: paketas skaitomas jūsų kompiuteryje, po vieną failą, todėl didelis modelis nekopijuojamas du kartus.

## Rodyti vaizdą

Skiltyje **Vaizdai** vaizdai grupuojami pagal aplankus, kuriuos jie turėjo projekte. Spustelėkite vaizdo pavadinimą:

- **Aukšto planas** rodo tik jo aukštą, žiūrint iš viršaus.
- **Jo sluoksnių derinys** paslepia elementus sluoksniuose, kuriuos tas derinys slepia. Būsenos eilutėje nurodoma, kiek elementų buvo paslėpta.
- **Jo mastelis** rodomas šalia pavadinimo ir būsenos eilutėje.
- **3D vaizdas** rodo visus aukštus.

Kad vėl rodytumėte viską, naudokite {{ui:Rodyti visus}} skiltyje {{ui:Rodyti}} ir pažymėkite kiekvieną aukštą.

:::note
BimCraft sluoksnius randa per IFC failo sluoksnių priskyrimus. Jei IFC eksportuotas be jų, sluoksnių derinys nieko nepaslepia, o būsenos eilutėje rašoma: paslėpta elementų: 0.
:::

## Atidaryti maketą

Skiltyje **Maketai** kiekvienas maketas rodo savo numerį, pavadinimą, popieriaus dydį ir jame išdėstytus vaizdus.

- **PDF** įrašo maketo PDF iš paketo.
- **DWG** atidaro maketo brėžinį 2D vaizde. Spustelėkite bet kurį vaizdą, kad grįžtumėte prie modelio.
- **Atidaryti …** siunčia maketo failą programai, kuri su juo dirba, naujame skirtuke: PDF – į MarkupCraft, DWG – į CadCraft. Rodoma tik tada, kai ta programa atidaryta šalia BimCraft. Failas skaitomas iš paketo, kai skirtukas įkeliamas, ir nieko neįkeliama.

Maketas, kuriame nėra nei vieno, rodo **Pakete nėra failo**.

## Peržiūrėti savybes projekto grupėse

Pasirinkite elementą. **Savybių grupės** rodo jo savybes pagal grupes, kurias apibrėžė projektas; atitikimas nustatomas pagal savybių rinkinį ir pavadinimą, kuriuos aprašas nurodo IFC, arba kitu atveju pagal pavadinimą. Likusios savybės lieka skiltyje {{ui:Savybės}}, kaip įprastai. **Savybių aprašai** rodo kiekvieną aprašą su jo grupe, tipu ir IFC pavadinimu.

## Standartai ir pastabos

- **Standartai** suskaičiuoja paketo sluoksnius, sluoksnių derinius, pieštukų rinkinius, linijų tipus, užpildus, paviršius, kompozitus ir medžiagas.
- **Pastabos** rodo, ką scenarijus negalėjo gauti iš tos Archicad versijos, bet kurį lauką, kurio BimCraft neperskaitė, ir bet kurį failą, kurį paketas nurodo, bet neturi.

## Trikčių šalinimas

- **„… yra zip, bet ne projekto paketas.“** Zip faile nėra `manifest.json`. Išpakuokite jį ir atidarykite viduje esantį `.ifc`.
- **„… yra naujesnis projekto paketas nei tas, kurį skaito šis BimCraft.“** Atnaujinkite BimCraft.
- **„… neturi modelio, kurį nurodo jo manifestas.“** Zip failas nutrauktas arba pakeistas. Sukurkite paketą iš naujo.
- **Vaizde rodomi visi aukštai.** Jo aukšto nėra modelio IFC (būsenos eilutėje tai nurodoma). Patikrinkite, ar IFC eksportas apėmė tą aukštą.

Taip pat žr. [Darbas tarp dviejų BIM programų](topic:two-bim-programs) ir [Ką BimCraft skaito iš kiekvieno formato](topic:file-formats).
