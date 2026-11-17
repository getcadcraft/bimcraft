---
title: Luaj një orar ndërtimi mbi model
summary: Hap një listë detyrash si CSV, lidh çdo detyrë me elementet sipas një vetie, dhe lëviz nëpër datat për të parë çfarë është ndërtuar, çfarë është në punë dhe çfarë nuk ka filluar akoma.
keywords: 4d, orar, sekuencë ndërtimi, kronologji, fazim, programim, gantt, detyra, data, simulim, progres, ndërtuar, csv, fazë, paketë pune, wbs, grup
from: 1b985a64
---

## Çfarë do të bësh

Shiko ndërtesën duke u ngritur: çdo detyrë në orarin tënd e lidhur me elementët që ndërton, e shfaqur ditë për ditë.

## Hapat

1. Hap një model IFC dhe hap {{ui:Orari 4D}} në panelin e majtë.
2. Kliko {{ui:Shkarko një shabllon}} për një listë detyrash me një javë për kat, dhe ndrysho atë në një fletëllogari. Ose shkruaj tënden.
3. Kliko {{ui:Hap një listë detyrash…}} dhe zgjidh CSV-në.
4. Tërhiq rrëshqitësin e datës, ose kliko {{ui:Luaj}}.

## Lista e detyrave

CSV me rresht titulli dhe kolonat **Task**, **Start**, **Finish**, **Field** dhe **Value**. Presja ose pika-presja funksionojnë të dyja.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Niveli 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Çati | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Çati | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Shkruaj datat si YYYY-MM-DD.
- Një rresht e lidh detyrën me çdo element, fusha **Field** i të cilit ka saktësisht atë **Value**. Fusha është një veti si Storey, Class, Name, Type, Material, Tag ose GlobalId, ose çdo veti e shkruar me grupin dhe emrin e saj: `Pset_WallCommon.FireRating`.
- Përsërit një detyrë në më shumë rreshta, me të njëjtat data, për të lidhur më shumë elemente me të.

## Fazat dhe paketat e punës

Shto një kolonë **Stage**, një kolonë **Package**, ose të dyja, për të grupuar detyrat në faza dhe paketa pune. Phase dhe WBS funksionojnë edhe si emra kolonash.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Pllaka e Katit 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Struktura | Skeleti |
| Muret e Katit 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Struktura | Skeleti |
| Dyert | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Përfundimet | Marangozia |

- Një detyrë i përket një faze dhe një pakete. Nëse një rresht më pas i së njëjtës detyrë emëron një tjetër, ai rresht listohet me numrin e tij të rreshtit dhe lihet jashtë.
- I njëjti emër paketeje në dy faza janë dy paketa.

Kur lista ka grupe, mbi datën shfaqet një listë {{ui:Shfaq}}. Zgjidh një fazë ose një paketë dhe ajo luhet si një e vetme:

- rrëshqitësi dhe {{ui:Luaj}} ecin nga fillimi i parë i grupit deri te mbarimi i fundit,
- vetëm detyrat e grupit listohen dhe vizatohen, dhe çdo gjë jashtë grupit është transparente,
- rreshti nën listë thotë sa nga detyrat e grupit janë kryer, janë në punë dhe do të vijnë në atë datë,
- {{ui:Përzgjidh elementet e saj}} përzgjedh çdo element të grupit, për {{ui:Shfaq}}, {{ui:Prerje}} ose një tabelë.

Zgjidh **Çdo detyrë** për ta parë përsëri orarin e plotë.

## Çfarë duhet të shohësh

- **E ndërtuar**: elemente, të cilët kanë të gjitha detyrat e mbaruara, me ngjyrat e tyre.
- **Në punë**: elemente me një detyrë në punë atë ditë, në ngjyrë okër. Një detyrë është në punë nga data e fillimit deri te data e mbarimit.
- **Nuk ka filluar**: transparente.
- Elementet që nuk janë në asnjë detyrë qëndrojnë siç janë. Lista tregon sa elemente gjeti secila detyrë. Rreshtat që nuk mund të lexoheshin, ose që nuk gjetën asgjë, listohen me numrat e tyre të rreshtit.

## Lidhjet, diagrami Gantt dhe MS Project

- Hap një skedar Microsoft Project XML (`.xml`) ose një CSV që ka kolonën `Predecessors`. Lidhjet mund të jenë fund-në-fillim, fillim-në-fillim, fund-në-fund ose fillim-në-fund, secila me avancim ose vonesë në ditë.
- Nën listën e detyrave, diagrami Gantt vizaton çdo detyrë si shirit, me shigjeta për lidhjet. Detyrat në rrugën kritike janë të kuqe. Një lak lidhjesh ose një paraardhës që nuk ekziston listohet në panel.
- {{ui:Ruaj si XML të MS Project}} dhe {{ui:Ruaj CSV me lidhje}} e shkruajnë orarin përsëri me lidhjet e tij.

## Më tej

- [Gjej elemente sipas klasës, emrit ose vetisë](topic:find)
- [Ngjyros elemente sipas një vetie](topic:color-by-property)
