---
title: Mblidh sasitë, listo elementët dhe planifiko hapësirat
summary: Numëro elementët dhe mblidh gjatësitë, sipërfaqet, vëllimet ose çdo vlerë numerike, të grupuara sipas çdo vetie; listo një rresht për element; ose planifiko hapësirat me sipërfaqet dhe vëllimet e tyre. Secili shkarkohet si CSV.
keywords: sasi, sasitë, llogaritje sasish, totale, shumë, planifikim, tabelë, lista e materialeve, boq, qto, csv, grupo sipas, numëro, gjatësi, sipërfaqe, vëllim, hapësira, dhoma, tabelë dhomash, tabelë sipërfaqesh, listë elementesh
from: e2e7210c
---

## Çfarë do të bësh

Nxirr totale nga një model: gjatësitë e mureve për kat, numrat e dyerve për tip, vëllimin e soletës për material, koston e çdo zone.

## Hapat

1. Hap një model IFC.
2. Hap {{ui:Quantity totals}} në panelin e majtë.
3. Te {{ui:Count}}, zgjidh {{ui:Every element}} ose vetëm ata të zgjedhur.
4. Nën {{ui:Group by}}, zgjidh një veti, si {{ui:Class}}. Kliko {{ui:Add a group}} për ta ndarë më tej, deri në tre, për shembull sipas {{ui:Storey}}.
5. Nën {{ui:Add up}}, shëno numrat për t'i mbledhur. Sasitë e modelit janë të shënuara si fillim.
6. Kliko {{ui:Download CSV}} për ta hapur tabelën në një fletëllogaritëse.

## Çfarë duhet të shohësh

- Një rresht për grup me sa elemente ka dhe çdo total, dhe një rresht total.
- Elementët pa vlerë numërohen por nuk shtojnë asgjë. Kur ndodh kjo, CSV shton një kolonë "lënë jashtë" pranë totalit, që të shohësh sa janë.
- Numrat janë në njësitë e skedarit, ashtu siç i ruan skedari, shpesh milimetra për gjatësitë.

## Një rresht për element, ose hapësirat

Ndrysho {{ui:Show}}:

- **Një rresht për element**: çdo element në rreshtin e vet, me vetitë nën {{ui:Columns}} dhe numrat nën {{ui:Add up}}. CSV fillon me GlobalId-në e secilit element. Kliko vlerën e parë të një rreshti për të zgjedhur atë element.
- **Hapësirat**: çdo dhomë me numrin, emrin, katin, sipërfaqen dhe vëllimin e saj, dhe totalet e tyre. Sipërfaqet dhe vëllimet vijnë nga sasitë e hapësirës, siç i deklaron skedari. Kur skedari nuk ka, ato maten nga forma e hapësirës në m² dhe m³ dhe shfaqen me të pjerrëta; CSV thotë cila është cila.

## Më tej

- [Gjej elementët sipas klasës, emrit ose vetisë](topic:find)
- [Ngjyros elementët sipas një vetie](topic:color-by-property)

## Infrastrukturë (IFC 4.3)

Zgjidh **Infrastructure (IFC 4.3)** në listën e pamjeve për të parë rrugët, hekurudhat, urat dhe punimet detare të totaluara sipas klasës dhe tipit, me gjatësinë, sipërfaqen dhe vëllimin që vetë skedari i deklaron. Një sasi që skedari nuk e deklaron lihet bosh, kurrë nuk llogaritet. **Dërgo sasitë e infrastrukturës në TakeoffCraft** ruan një skedar `.quantities.json` që TakeoffCraft e hap si sasi të tipizuara.
