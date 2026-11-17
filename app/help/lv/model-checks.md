---
title: Modeļa pārbaude, lai atrastu biežākās problēmas
summary: Atrodiet elementus, kuriem trūkst nepieciešamās īpašības, GlobalId, kas izmantoti divreiz, elementus bez stāva un kopijas, kas sakrautas viena uz otras.
keywords: pārbaude, modeļa pārbaude, validācija, kvalitāte, trūkstoša īpašība, obligāts, dublikāts, globalid, guid, stāvs, sakrauts, pārklāšanās
from: 4d835513
---

## Ko darīsiet

Pārskatiet modeli, pirms to nododat tālāk: problēmas, kas traucē tabulām, daudzumiem un citu cilvēku programmatūrai.

## Soļi

1. Atveriet IFC modeli.
2. Kreisajā panelī atveriet {{ui:Modeļa pārbaudes}}.
3. Zem {{ui:Obligātās īpašības}} jau ir noteikums (jebkura klase, Name). Mainiet tā klasi (vai {{ui:Jebkura klase}}) un īpašību vai noklikšķiniet uz {{ui:Pievienot īpašību}}, lai pievienotu citu noteikumu; poga x noņem vienu. Elements neatbilst noteikumam, ja īpašība trūkst vai ir tukša. Noteikumi paliek šajā pārlūkprogrammā visiem modeļiem.
4. Noklikšķiniet uz {{ui:Palaist pārbaudes}}.
5. Noklikšķiniet uz rezultāta, lai atlasītu šos elementus un tuvinātu tiem.

## Ko vajadzētu redzēt

- **Trūkst obligātas īpašības**: katrs noteikums ar elementiem, kuriem tam nav vērtības.
- **GlobalId izmantots divreiz**: elementi, kas dala vienu GlobalId. Cita programmatūra tos uzskata par vienu elementu.
- **Nav stāva**: elementi ar formu, ko neaptver neviens stāvs.
- **Kopijas viena uz otras**: vienas klases un tipa elementi ar tādu pašu formu tajā pašā vietā; daudzumos tie tiek skaitīti divreiz.

Katra rezultāta rindiņa ir poga: noklikšķiniet uz tās, lai atlasītu šos elementus un tuvinātu tiem. Katras pārbaudes tikai pirmās 50 grupas ir uzskaitītas. Tās pašas atrastās problēmas parādās arī sadaļā {{ui:Problēmas}}.

## Noderīgi zināt

- Pārbaudes apskata aktīvo modeli, ja ir atvērti vairāki. Skatiet [Vairāku IFC modeļu apskate kopā](topic:several-models).
- Pēc rediģēšanas palaidiet pārbaudes vēlreiz.
- Sadaļā {{ui:Problēmas}} garumi, laukumi un tilpumi problēmas tekstā seko {{ui:Mērvienības}}, kas izvēlētas rīkjoslā ("800 mm" durvis tiek rādītas kā 2'-7 1/2" pēdās un collās). Mainot mērvienību, panelis tekstu pārraksta.

## Tālāk

- [Pārbaudiet modeli: telpas, birkas, LOD, sadursmes un saskarnes](topic:audit-the-model)
- [Atrodiet elementus pēc klases, nosaukuma vai īpašības](topic:find)
- [Dzēst, izgriezt, kopēt un ielīmēt elementus](topic:copy-paste)
