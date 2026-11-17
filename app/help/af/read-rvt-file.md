---
title: Lees 'n projek- of familielêer
summary: Maak 'n .rvt-, .rfa-, .rte- of .rft-lêer oop en lees sy vrystelling, werkdeling, projekinligting, familieparameters, skakels en voorskouprent, sonder die program wat dit gemaak het.
keywords: rvt, rfa, rte, rft, projeklêer, familie, vrystelling, weergawe, watter weergawe, bou, werkdeling, sentraal, projekinligting, voorskou, duimnaelskets, skakels
from: df3600e1
---

## Wat jy gaan doen

Vind uit wat in 'n projek- of familielêer is sonder om dit in Revit oop te maak: watter vrystelling dit gestoor het, of dit werkverdeel is, die projekinligting, en waarna dit skakel. Nuttig wanneer 'n lêer van iemand anders kom en jy moet weet in watter vrystelling om dit oop te maak.

## Stappe

1. Klik {{ui:Kies 'n lêer}}.
2. Kies 'n `.rvt`-, `.rfa`-, `.rte`- of `.rft`-lêer.
3. Wag 'n oomblik. Die statuslyn sê "Lees die lêer…" en dan "Oopgemaak *lêernaam*".
4. Kyk na die boonste deel van die kaart: die voorskouprent wat in die lêer gestoor is, die soort lêer en die vrystelling waarin dit gestoor is, en die projeknaam.
5. Rol af om die afdelings van die kaart te lees.

## Wat jy behoort te sien

Die kaart in die middel, met hierdie afdelings wanneer die lêer hulle hou:

| Afdeling | Wat dit vir jou sê |
|---|---|
| Lêer | Lêernaam, grootte, soort (projek, projeksjabloon, familie of familiesjabloon), die vrystelling en bou waarin dit gestoor is, werkdeling, die sentrale model se pad, waar dit laas gestoor is, wie dit gestoor het, lokaal en dokument-GUID |
| Projekinligting | Die projek se eie velde, soos naam, nommer, kliënt, adres en status. Velde wat nog op hul nuwe-projek-standaarde staan, word weggelaat. |
| Familie, Familie: … | Vir 'n familie: sy naam, kategorie, vrystelling, laaste opdatering en sy parameters, groep vir groep |
| Gekoppelde en verwysde lêers | Elke gekoppelde model, CAD-skakel, prent en sleutelnotatietabel wat die lêer wys na, met sy gestoorde pad |

Aan die linkerkant herhaal die {{ui:File}}-paneel die sleutelfeite en voeg **Read** by: hoeveel van die lêer BimCraft werklik gelees het, gewoonlik ongeveer 40 KB van 'n lêer wat baie megagrepe groot is. Aan die regterkant sê die {{ui:Properties}}-paneel dat elementeienskappe die 3D-model nodig het.

## Waarom daar geen 3D is nie

Die 3D-model en die elemente binne 'n projeklêer word in 'n ongedokumenteerde formaat gestoor. BimCraft lees net die dele van die lêer wat gedokumenteer of duidelik leesbaar is: die lêerinligting, projekinligting, familiedata, die skakellys en die voorskouprent. Dit raai nie aan die res nie. Om die model in 3D te sien en elementeienskappe te lees, voer IFC uit vanaf die program wat die lêer gemaak het. Sien [Kry 'n projeklêer in 3D deur IFC](topic:rvt-to-ifc).

## Algemene foute

- **Verwag 3D.** Sien hierbo.
- **Skakels wys net hul gestoorde pad.** 'n Lêer wat op sy eie oopgemaak word, kan nie kontroleer of sy skakels bestaan nie. Maak eerder die gids oop waarin dit woon, en BimCraft merk elke skakel as gevind of nie: [Maak 'n hele projekgids oop](topic:open-project-folder).
- **"This file is incomplete…"** Die lêer is afgesny terwyl dit gekopieer, opgelaai of gesinchroniseer is. 'n Wolkaandrywerlêer wat nog "net aanlyn" is, doen dit ook. BimCraft maak dit steeds oop en wys net wat herwin is: 'n amberkleurige kennisgewing bo-aan die kaart, 'n **Herwin uit hierdie lêer**-afdeling wat die dele lys waarvan elke greep in die lêer is, en **Nie in die lêer nie** vir die res. Niks word ingevul vir die ontbrekende deel nie, so die vrystelling, voorskouprent of projekinligting kan ontbreek wanneer hulle na die afsnypunt gestoor is. As selfs die lêer se lys van inhoud afgesny is, kan niks oopgemaak word nie. Kopieer die oorspronklike weer en maak dit weer oop vir die volle lêer.
- **"No preview picture in this file".** Sommige lêers word sonder een gestoor. Dit is normaal.
- **Per ongeluk 'n rugsteun oopmaak.** Lêers wat soos `Tower.0004.rvt` genoem word, is genommerde rugsteune. Die gids oopmaak groepeer hulle met hul model.
