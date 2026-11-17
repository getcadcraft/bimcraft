---
title: Paketat për klientin, raportet e fazës dhe krahasimi i opsioneve
summary: Bëni një paketë për klientin ose një raport faze nga modeli, me opsionet e masës të krahasuara sipas sipërfaqes dhe kostos, sipërfaqet e kateve, vizatimet me revizionet e tyre dhe historia e çështjeve. Çdo shifër mban elementët që qëndrojnë pas saj.
keywords: paketë për klientin, prezantim, raport faze, raport, krahasim opsionesh, opsione, krahaso opsionet, sipërfaqe dhe kosto, kosto për opsion, pa çmim, masë, sipërfaqe katesh, listë vizatimesh, historia e çështjeve, shifra, shifra të lidhura
from: f6679bf5
---

## Çfarë do të bëni

Bëni një paketë për klientin ose një raport faze nga modeli siç është tani, dhe krahasoni opsionet e masës të mbajtura krah për krah sipas sipërfaqes dhe kostos.

## Hapat

1. Në panelin e majtë hapni **Paketa për klientin dhe raporti i fazës**.
2. Zgjidhni **Hap në Dokumente** pranë Paketës për klientin ose Raportit të fazës. Dokumenti shfaqet te Dokumentet nga modeli, ku mund ta ndryshoni tekstin.
3. Në pamjen paraprake, klikoni një shifër për të zgjedhur elementët që qëndrojnë pas saj.
4. Zgjidhni **Ndërto paketën**. Ruhet një zip: dokumenti si PDF, një foto e pamjes 3D, dhe `figures.csv`, që liston çdo shifër me GlobalIds të elementeve të saj.

## Fushat

Mund t'i përdorni këto në çdo dokument.

| Fusha | Çfarë shfaq |
|---|---|
| `{{stage}}` | Faza e projektit nga detajet e vizatimit. |
| `{{options}}` | Opsionet e masës të mbajtura, krah për krah: katet, lartësia, gjurma, sipërfaqja bruto e kateve, mbështjellësi dhe kosto. |
| `{{areas}}` | Sipërfaqja e kateve sipas nivelit, nga dhomat. |
| `{{sheets}}` | Fletët me revizionin ku qëndron secila dhe kur u lëshua herën e fundit. |
| `{{issues}}` | Historia e çështjeve dhe regjistri i ndryshimeve të vizatimeve. |
| `{{changes}}` | Çfarë ka ndryshuar që nga lëshimi i fundit, fletë për fletë. |

## Si llogaritet kosto e opsioneve

Kostoja vjen vetëm nga tabela e çmimeve të projektit tuaj (Energjia/Kosto, kosto 5D). Asgjë nuk vlerësohet për ju.

- Një rresht çmimi e çmon një opsion vetëm kur klasat e tij emërtojnë `IfcBuildingElementProxy`.
- Sipërfaqja e katit çmohet nga një rresht që fjalët e tij emërtojnë përdorimin e opsionit, si zyra. Pa të, përdoret një rresht me fjalët sipërfaqe bruto e katit ose masë ndërtese. Një rresht sipas m² përdor sipërfaqen bruto të katit. Një rresht sipas m³ përdor vëllimin.
- Mbështjellësi (perimetri herë lartësia) çmohet nga një rresht me fjalën mbështjellës ose fasadë.
- Një opsion pa rresht të përputhshëm shfaq **Pa çmim**. Një totali shfaqet vetëm kur çdo pjesë e kërkuar ka çmim.

## Gjëra të dobishme

- Mbajeni opsionet me **Mbaje si opsion** në listën e masave të programit të dhomave. Shihni Opsionet e masës.
- Një PDF nuk mund të zgjedhë elementë. Jashtë BimCraft, `figures.csv` mban lidhjen nga çdo shifër te elementët e saj.

## Ende nuk është ndërtuar

- Fletët dhe pamjet e vizatuara nuk vendosen brenda dokumentit. Paketa mban vetëm një foto të pamjes 3D.
