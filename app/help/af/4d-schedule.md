---
title: Speel 'n bouskedule op die model
summary: Maak 'n taaklys as 'n CSV oop, koppel elke taak aan elemente volgens 'n eienskap, en beweeg deur die datums om te sien wat gebou is, wat aan die gang is en wat nog nie begin het nie.
keywords: 4d, skedule, bousekwensie, tydlyn, fasering, program, gantt, take, datums, simulasie, vordering, gebou, csv, stadium, fase, werkspakket, wbs, groep
from: 1b985a64
---

## Wat jy gaan doen

Kyk hoe die gebou opgaan: elke taak in jou skedule gekoppel aan die elemente wat dit bou, dag vir dag gewys.

## Stappe

1. Maak 'n IFC-model oop en maak {{ui:4D-skedule}} oop in die linkerpaneel.
2. Klik {{ui:Laai 'n sjabloon af}} vir 'n taaklys met 'n week per verdieping, en verander dit in 'n sigblad. Of skryf jou eie.
3. Klik {{ui:Maak 'n taaklys oop…}} en kies die CSV.
4. Sleep die datumskuiwer, of klik {{ui:Speel}}.

## Die taaklys

'n CSV met 'n kopreël en die kolomme **Task**, **Start**, **Finish**, **Field** en **Value**. Kommas of kommapunte werk albei.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Vlak 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Dak | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Dak | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Skryf datums as JJJJ-MM-DD.
- 'n Ry koppel die taak aan elke element waarvan die **Field** presies daardie **Value** het. Die veld is 'n eienskap soos Storey, Class, Name, Type, Material, Tag of GlobalId, of enige eienskap wat as sy stel en naam geskryf is: `Pset_WallCommon.FireRating`.
- Herhaal 'n taak op meer rye, met dieselfde datums, om meer elemente daaraan te koppel.

## Fases en werkspakkette

Voeg 'n **Stage**-kolom, 'n **Package**-kolom, of albei by, om take in fases en werkspakkette te groepeer. Phase en WBS werk ook as kolomname.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Vlak 1-vloer | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Struktuur | Raamwerk |
| Vlak 1-mure | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Struktuur | Raamwerk |
| Deure | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Afwerking | Skrynwerk |

- 'n Taak behoort aan een fase en een pakket. As 'n latere ry van dieselfde taak 'n ander noem, word daardie ry met sy lynnommer gelys en uitgelaat.
- Dieselfde pakketnaam in twee fases is twee pakkette.

Wanneer die lys groepe het, verskyn 'n {{ui:Wys}}-lys bo die datum. Kies 'n fase of 'n pakket en dit speel as een:

- die skuiwer en {{ui:Speel}} loop van die groep se eerste begin tot sy laaste einde,
- slegs die groep se take word gelys en geverf, en alles buite die groep is deurskynend,
- die lyn onder die lys sê hoeveel van sy take op daardie datum klaar, aan die gang en nog kom is,
- {{ui:Kies sy elemente}} kies elke element van die groep, vir {{ui:Wys}}, {{ui:Snit}} of 'n skedule.

Kies **Elke taak** om die hele skedule weer te sien.

## Wat jy behoort te sien

- **Gebou**: elemente waarvan al die take klaar is, in hul eie kleure.
- **Aan die gang**: elemente met 'n taak wat daardie dag aan die gang is, in oker. 'n Taak is aan die gang vanaf sy begindatum tot en met sy einddatum.
- **Nog nie begin nie**: deurskynend.
- Elemente in geen taak bly soos hulle is. Die lys wys hoeveel elemente elke taak gevind het. Rye wat nie gelees kon word nie, of niks gevind het nie, word met hul lynnommers gelys.

## Skakels, die Gantt-grafiek en MS Project

- Maak 'n Microsoft Project XML-lêer (`.xml`) of 'n CSV met 'n `Predecessors`-kolom oop. Skakels kan eindig-na-begin, begin-na-begin, eindig-na-eindig of begin-na-einde wees, elk met 'n voorsprong of vertraging in dae.
- Onder die taaklys teken die Gantt-grafiek elke taak as 'n balk, met pyle vir die skakels. Take op die kritieke pad is rooi. 'n Skakellus of 'n voorganger wat nie bestaan nie, word in die paneel gelys.
- {{ui:Stoor as MS Project XML}} en {{ui:Stoor CSV met skakels}} skryf die skedule terug met sy skakels.

## Volgende

- [Vind elemente volgens klas, naam of eienskap](topic:find)
- [Kleur elemente volgens 'n eienskap](topic:color-by-property)
