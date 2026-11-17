---
title: Pritja e një modeli IFC me një plan prerjeje
summary: Prit modelin 3D nga sipër, përpara ose anash, ose mbaj vetëm atë që është brenda një kutie prerjeje ose një vëllimi me disa kuti me faqe të pjerrëta, për të parë brenda; zhvendos prerjen me tërheqje ose shkrim, kthe, dhe zgjidh çfarë tregon prerja.
keywords: prerje, plan prerjeje, kuti prerjeje, doreza, tërheqje, zgjerim, kuti përzgjedhjeje, pritje, plan pritjeje, planimetri, fasadë, brenda, e brendshme, kthe, zhvendosje, vëllim prerjeje, prerje me shkallë, në formë L, pjerrësi, prerje e pjerrët, plan i pjerrët, plan shtesë
from: 6315e71a
---

## Çfarë do të bësh

Prit një model IFC me një plan për të parë brenda: nga sipër për një planimetri, ose nga përpara ose anash për një prerje përmes ndërtesës.

## Hapat

1. Hap një model IFC. Shih [Hap një model IFC dhe shiko rreth në 3D](topic:open-ifc-model).
2. Kliko {{ui:Prerje}} në shirit, ose shtyp {{key:X}}. Modeli preket në gjysmë të lartësisë, dhe shfaqet një shirit nën shiritin e veglave.
3. Zgjidh nga ku të presësh: {{ui:Sipër}}, {{ui:Para}} ose {{ui:Anësore}}. Para dhe Anësore e kthejnë edhe pamjen për të parë prerjen.
4. Zhvendos prerjen: tërhiq rrëshqitësin **Zhvendosja**, ose shkruaj një distancë në metra te kutia dhe shtyp {{key:Enter}}. Mund të shkruash edhe milimetra, për shembull `1200 mm`.
5. Kliko {{ui:Kthe}} për të mbajtur anën tjetër të prerjes.
6. Kliko një element te prerja për të parë vetitë e tij.
7. Kliko {{ui:Joaktiv}}, kliko {{ui:Prerje}} përsëri, ose shtyp {{key:X}} për ta hequr prerjen.

## Një kuti prerjeje

Kliko {{ui:Kuti}} në të njëjtin shirit për të mbajtur vetëm atë që është brenda një kutie. Secili nga {{ui:X}}, {{ui:Y}} dhe {{ui:Z}} ka dy rrëshqitës: ku fillon kutia dhe ku mbaron, në metra nga skaji i modelit. Vlerat shfaqen pranë tyre.

- {{ui:Kuti rreth zgjedhjes}} i përshtat kutinë rreth elementeve që zgjodhe dhe zmadhon te ata. Lë 300 mm hapësirë në çdo anë; ndryshoje te {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Hapësirë rreth zgjedhjes}}.
- Me elementet e zgjedhura, {{ui:Shfaq}} › {{ui:Kuti prerjeje rreth zgjedhjes}} ose {{key:Shift+X}} bën të njëjtën gjë në një hap, edhe kur nuk ka prerje aktive.
- **Dorezat** te kutia e zhvendosin me kursor: tërhiq një katror në mes të një faqeje për ta zhvendosur atë faqe, një në mes të një brinje për të zhvendosur dy faqet që takohen aty, ose një në një cep për të zhvendosur tri. Rrëshqitësit ndjekin. Te {{ui:Sipër}} një cep e zhvendos kutinë në planimetri, te {{ui:Para}} ose {{ui:Anësore}} në fasadë.
- {{ui:I gjithë modeli}} e hap kutinë përsëri për të gjithë modelin.
- {{ui:Sipër}}, {{ui:Para}} ose {{ui:Anësore}} kthehen në një plan të vetëm.

## Një vëllim me disa kuti, faqe të pjerrëta dhe plane shtesë

Një kuti nuk është gjithmonë forma që të duhet: një prerje me shkallë, një krah në formë L, ose një prerje përgjatë një muri që nuk është pingul me rrjetën.

1. Te {{ui:Kuti}}, kliko {{ui:Shto një kuti}}. Prerja tani mban atë që është brenda **çdo** kutie, kështu dy kuti bëjnë një vëllim me shkallë ose në formë L. Lista pranë tij thotë cilën kuti ndryshojnë rrëshqitësit ({{ui:Kuti 1}}, {{ui:Kuti 2}}…); {{ui:Hiq këtë kuti}} heq të zgjedhurën. Një vëllim mban deri në 8 kuti.
2. Hap {{ui:Pjerrësia dhe planet}} për të formuar kutinë e zgjedhur:
   - Zgjidh një {{ui:Faqja}} dhe shkruaj sa e prirë është, në çdo drejtim, në gradë (deri 80). Faqja rrotullohet rreth mesit të saj; faqet e tjera qëndrojnë aty ku i vendosin rrëshqitësit. {{ui:Drejto}} e kthen përsëri.
   - {{ui:Shto një plan}} e pret kutinë me një plan shtesë. {{ui:Faqet}} është drejtimi nga i cili shikon ana e prerë, në gradë nga X drejt Y; {{ui:Pjerrësia}} është sa kthehet lart (0 për një plan vertikal, 90 për një plan horizontal); {{ui:Zhvendosja}} është sa larg është plani nga mesi i kutisë, në metra. × e heq. Një kuti merr deri në 6 plane shtesë.
3. Aty ku vëllimi pret trupa të ngurtë, faqet e prera mbushen si më parë, edhe aty ku dy kuti takohen në një shkallë.

:::tip
Nëse kontura zhduket dhe nuk mbetet asgjë, pjerrësitë ose planet nuk lënë asgjë brenda asaj kutie; shiriti e thotë. Ktheje mbrapsht një faqe të pjerrët ose ndrysho zhvendosjen e një plani.
:::

## Një ndërtesë e kthyer në vendin e saj

Shumë modele e vendosin ndërtesën me një kënd ndaj boshteve të skedarit (veriu i vërtetë, koordinata të përbashkëta). Kur muret kanë kënd, një prerje e re fillon pingul me ndërtesën: {{ui:Para}}, {{ui:Anësore}} dhe kutia shtrihen përgjatë mureve të veta, dhe {{ui:Drejt me ndërtesën}} në shiritin e prerjes është aktiv. Kliko për boshtet e modelit, dhe përsëri për t'u kthyer (vija e statusit thotë sa është kthyer ndërtesa). Me **Cilësimet › BimCraft › Një ndërtesë e kthyer në vendin e saj › Siç është vendosur në vend**, prerjet dhe pamjet fillojnë te boshtet e modelit. Shih [Cilësimet](topic:settings).

## Çfarë duhet të shohësh

- **Sipër** mban atë që është nën prerje, kështu shikon poshtë në dhoma. Zhvendosja matet lart nga fundi i modelit.
- **Para** mban atë që është pas prerjes, parë nga përpara; **Anësore** mban atë që është përtej saj, parë nga ana. Zhvendosja matet nga përpara ose ana e modelit.
- Një vijë e hollë me ngjyrë tregon ku është plani.
- Aty ku plani pret një mur, pllakë ose trup tjetër të ngurtë, faqja e prerjes mbushet me ngjyrë të errët, si një prerje e vizatuar. {{ui:Mbush}} në shirit e aktivizon ose e çaktivizon këtë.
- Kubi i pamjes në këndin e poshtëm djathtas e kthen modelin për të parë prerjen nga çdo anë.
- Klikimi zgjedh atë që shikon: çfarëdo që është prerë nuk mund të zgjidhet.

## Gabimet më të shpeshta

- **Asgjë nuk ndryshoi.** Prerja mund të jetë mbi çati ose jashtë modelit. Tërhiq rrëshqitësin, ose shkruaj një zhvendosje më të vogël.
- **Zhvendosja u kthye mbrapsht.** Një distancë jashtë modelit zhvendoset në skajin e tij, dhe vija e statusit e thotë.
- **Një problem tregon vetëm pjesë të vëllimit tim.** Një problem (BCF) mban një kuti me faqet dhe planet e saj të pjerrëta: kutinë e parë të një vëllimi. Vija e statusit e thotë kur e krijon problemin.
- **Prerja është e zbrazët.** {{ui:Mbush}} në shirit është joaktiv: kliko për të mbushur faqet e prera të mureve, pllakave dhe trupave të tjerë të ngurtë.
- **Një prerje e mbushur duket e njollosur ose humb një copë.** Mbushja kërkon trupa të mbyllur; një element, forma e të cilit në skedar nuk është e mbyllur (një fletë e vetme, gjethet e pemëve), lihet i pambushur në vend që të mbulohet. Një element i bërë nga pjesë me ngjyra të ndryshme (një kornizë dhe xhami i saj) mbushet kur pjesët e tij mbyllen së bashku.
- **Ku është shiriti i prerjes?** Ai ndodhet në krye të pamjes 3D që pret: në gjysmën 3D te {{ui:Ndaj}}, dhe nën shiritin e vizatimit te {{ui:Planimetri}} vetëm. Në një pamje të shkurtër lëviz.

## Tjetër

- [Shfaq dhe fshih katet, hapësirat dhe skajet](topic:storeys-and-spaces)
- [Shiko një vizatim DWG ose DXF në 3D](topic:dwg-in-3d) — vizatimet në 3D kanë të njëjtin plan prerjeje
