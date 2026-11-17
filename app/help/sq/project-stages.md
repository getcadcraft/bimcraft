---
title: Fazat e projektit, nga kërkesa te udhëzimet në terren
summary: Fillo nga një kërkesë me sipërfaqet synim dhe shiko nëse plotësohen ose mungojnë ndërsa vizaton, krahaso opsionet e konceptit me të, lidh specifikimet dhe detajet me llojet, shqyrto vizatimet e punishtores dhe regjistro udhëzimet e terrenit për elementët.
keywords: kërkesë, tabela e hapësirave, sipërfaqe synim, plotësuar, mungon, dhoma, opsione koncepti, opsione, masa, buxhet, specifikim, specifikime, detaj, detaj ndërtimi, lloj, vizatim punishtores, shqyrtim, miro, rishiko, udhëzim në terren, rishikim, shkak, terren, fazë
from: 0a49b852
---

## Çfarë do të bësh

Përshkon fazat e projektit në një panel të vetëm: shkruan kërkesën e klientit si dhoma me sipërfaqe synim, krahason opsionet e konceptit me të, mban specifikimin dhe detajet e ndërtimit me llojet për të cilët janë, shqyrton vizatimet e punishtores ndërsa kthehen nga punëtorët dhe regjistron udhëzimet e terrenit për elementët që ndryshojnë.

## Hapat

1. Në panelin e majtë hap **Fazat e projektit**, pastaj **Kërkesa**.
2. Ngjit dhomat, një për rresht: `Living; 1; 30` do të thotë një dhomë me 30 m². Numri i dhomave mund të mungojë. Zgjidh **Shto dhomat**. Plotëso klientin, vendin, buxhetin, tolerancën dhe programin, pastaj **Ruaj kërkesën**.
3. Vizato muret. Çdo dhomë që formojnë muret, me emrin e dhomës së kërkesës (një numër pas tij, si "Dhoma e gjumit 2", injorohet), llogaritet. **Tabela e hapësirave** shfaq **Plotësuar**, **Mungon**, **Tepër** ose **Nuk është vizatuar**, me diferencën në m².
4. Për të filluar një projekt të ri në këtë mënyrë zgjidh **Fillo një projekt të ri nga kërkesa**. Hapet një model i ri, nga një nga shabllonet e ruajtura nëse zgjedh një, dhe kërkesa vendoset si hapi i parë i tij.
5. Hap **Opsionet krahasuar me kërkesën**. Çdo opsion masash i mbajtur në model vizatohet në të njëjtën shkallë me sipërfaqen bruto, atë që kërkon kërkesa dhe sa dhoma të kërkesës përshtaten. **Vendos kërkesën këtu** i vendos dhomat në katet e opsionit, nga më i ulëti, dhe thotë çfarë nuk përshtatet. Kostoja vjen vetëm nga tabela e çmimeve të projektit; pa rresht përkatës shfaq "Pa çmim".
6. Hap **Llojet, specifikimet dhe detajet**. Çdo lloj muri, dyeri, dritareje dhe dysheme tregon nëse ka tekst specifikimi, detajet e lidhura me të, dhe ku specifikimi, tabelat dhe fletët nuk përputhen. **Lidh një detaj** shton një skedar DetailCraft ose CadCraft, një adresë, ose një fletë të këtij modeli.
7. Hap **Vizatimet e punishtores**. Zgjidh elementët që mbulon një vizatim punishtores në model, pastaj **Prano**. Përdor **Miro**, **Me shënime** ose **Rishiko** me emrin dhe shënimin e shqyrtuesit. **Ridorëzuar** krijon revizionin e radhës të të njëjtit regjistrim dhe ruan historikun e shqyrtimit. Gjendja shkruhet edhe te çdo element.
8. Hap **Udhëzimet në terren**. Zgjidh elementët, jepi shkakun dhe çfarë do të bëjë me koston dhe kohën me fjalët e tua, pastaj **Regjistro**. Pasi një çështje të jetë regjistruar, **Shpjego ndryshimet që nga kjo çështje** thotë cilët elementë të ndryshuar mbulon një udhëzim dhe cilët ndryshuan pa asnjë regjistrim.

## Mirë për t'uditur

- Çdo hap është një **Zhbëj**. Asgjë nuk refuzohet: një kërkesë që nuk plotësohet, një lloj që nuk përputhet me tekstin e tij, ose një vizatim punishtores i vonuar është paralajmërim ose shënim te **Problem**.
- Dhomat e kërkesës janë hapësira pa mure. Ato kanë një synim, jo një sipërfaqe të vizatuar, kështu që tabelat e dhomave dhe COBie nuk i numërojnë si dhoma të vizatuara.
- Një plan vendos dhomat në kate vetëm sipas sipërfaqes. Nuk vizaton mure.
- Teksti i specifikimit shkruhet në **Dokumentet** nga modeli. Këtu krahasohet vetëm me përmasat e vetë modelit: nuk shkruhet asnjë klauzolë standardi për ty.
- Vizatimet e punishtores dhe udhëzimet në terren janë regjistra në të njëjtin historik me panelin **Çështjet dhe rishikimet**, kështu që të dy panelet i shfaqin.
- Gjendja e një vizatimi punishtores është veti e çdo elementi (`CadCraft_ShopDrawing`), dhe një udhëzim në terren është `CadCraft_SiteInstruction`, kështu që **Kërko** dhe **Ngjyros sipas vetisë** mund t'i përdorin.
- Shenjat e verifikuara në terren (Faza 7) gjenden te **Vetitë**, nën **Verifikimi**.
