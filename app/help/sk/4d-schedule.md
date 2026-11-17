---
title: Prehranie harmonogramu výstavby na modeli
summary: Otvorte zoznam úloh ako CSV, prepojte každú úlohu s prvkami podľa vlastnosti a prechádzajte dátumami, aby ste videli, čo je postavené, čo je rozpracované a čo ešte nie je začaté.
keywords: 4d, harmonogram, postupnosť výstavby, časová os, etapizácia, program prác, gantt, úlohy, dátumy, simulácia, priebeh, postavené, csv, etapa, fáza, pracovný balík, wbs, skupina
from: 1b985a64
---

## Čo budete robiť

Sledujte, ako budova rastie: každá úloha vo vašom harmonograme je prepojená s prvkami, ktoré buduje, a zobrazená deň po dni.

## Postup

1. Otvorte model IFC a v ľavom paneli otvorte {{ui:4D schedule}}.
2. Kliknite na {{ui:Download a template}} pre zoznam úloh s jedným týždňom na podlažie a upravte ho v tabuľkovom procesore. Alebo napíšte vlastný.
3. Kliknite na {{ui:Open a task list…}} a vyberte CSV.
4. Potiahnite posuvník dátumu alebo kliknite na {{ui:Play}}.

## Zoznam úloh

CSV so riadkom hlavičky a stĺpcami **Task**, **Start**, **Finish**, **Field** a **Value**. Môžu sa použiť čiarky aj bodkočiarky.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Podlažie 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Strecha | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Strecha | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Áno |

- Dátumy zapisujte vo formáte RRRR-MM-DD.
- Riadok prepojí úlohu s každým prvkom, ktorého **Field** má presne túto **Value**. Pole je vlastnosť, ako Storey, Class, Name, Type, Material, Tag alebo GlobalId, alebo akákoľvek vlastnosť zapísaná ako jej sada a názov: `Pset_WallCommon.FireRating`.
- Úlohu opakujte na viacerých riadkoch s rovnakými dátumami, aby ste k nej prepojili viac prvkov.

## Etapy a pracovné balíky

Pridajte stĺpec **Stage**, stĺpec **Package** alebo oba, aby ste úlohy zoskupili do etáp a pracovných balíkov. Phase a WBS fungujú tiež ako názvy stĺpcov.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Doska podlažia 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Konštrukcia | Nosná konštrukcia |
| Steny podlažia 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Konštrukcia | Nosná konštrukcia |
| Dvere | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Dokončovacie práce | Stolárske práce |

- Úloha patrí do jednej etapy a jedného balíka. Ak neskorší riadok tej istej úlohy uvedie iný, tento riadok sa uvedie s číslom riadku a vynechá sa.
- Ten istý názov balíka v dvoch etapách sú dva balíky.

Ak zoznam obsahuje skupiny, nad dátumom sa zobrazí zoznam {{ui:Show}}. Vyberte etapu alebo balík a prehrá sa ako jeden celok:

- posuvník a {{ui:Play}} bežia od prvého začiatku skupiny po jej posledný koniec,
- zobrazia sa a sfarbia len úlohy skupiny a všetko mimo skupiny je priehľadné,
- riadok pod zoznamom uvádza, koľko jej úloh je k danému dátumu hotových, rozpracovaných a ešte nezačatých,
- {{ui:Select its elements}} vyberie každý prvok skupiny, pre {{ui:Show}}, {{ui:Section}} alebo tabuľku.

Vyberte **Všetky úlohy**, aby ste znova videli celý harmonogram.

## Čo by ste mali vidieť

- **Postavené**: prvky, ktorých všetky úlohy sú dokončené, vo svojich vlastných farbách.
- **Rozpracované**: prvky s úlohou prebiehajúcou v daný deň, v okrovej farbe. Úloha prebieha od dátumu začiatku až po dátum konca.
- **Nezačaté**: priehľadné.
- Prvky bez úlohy zostanú, ako sú. Zoznam ukazuje, koľko prvkov každá úloha našla. Riadky, ktoré sa nedali prečítať alebo nenašli nič, sú uvedené s číslami riadkov.

## Väzby, Ganttov diagram a MS Project

- Otvorte súbor Microsoft Project XML (`.xml`) alebo CSV so stĺpcom `Predecessors`. Väzby môžu byť koniec–začiatok, začiatok–začiatok, koniec–koniec alebo začiatok–koniec, každá s predstihom alebo oneskorením v dňoch.
- Pod zoznamom úloh Ganttov diagram kreslí každú úlohu ako pruh so šípkami pre väzby. Úlohy na kritickej ceste sú červené. Slučka väzieb alebo predchádzajúca úloha, ktorá neexistuje, je uvedená v paneli.
- {{ui:Save as MS Project XML}} a {{ui:Save CSV with links}} zapíšu harmonogram späť aj s jeho väzbami.

## Ďalej

- [Nájdenie prvkov podľa triedy, názvu alebo vlastnosti](topic:find)
- [Sfarbenie prvkov podľa vlastnosti](topic:color-by-property)
