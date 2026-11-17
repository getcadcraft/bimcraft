---
title: Shiko një vizatim DWG ose DXF në 3D
summary: Kalo hapësirën e modelit të një vizatimi në 3D për të parë kotat, trashësinë, sipërfaqet 3D, rrjetat dhe blloqet, rrotullo rreth tij, kliko një objekt për të parë vetitë e tij, dhe shiko çfarë nuk është vizatuar ende.
keywords: 3d, dwg, dxf, vizatim, hapësira e modelit, rrotullim, orbitë, prerje, plan prerjeje, shtrirje, zgjedhje, vetitë, atributet, dorezë, kota, trashësia, zgjatim, 3dface, polyface, rrjet, polivijë 3d, blloqe, pamje, perspektivë, paralele, shtrirja, acis, trupa
from: a0c6cd17
---

## Çfarë do të bësh

Shiko hapësirën e modelit të një vizatimi në 3D. Vijat dhe polivijat qëndrojnë në lartësitë e tyre reale, objektet me trashësi ngrihen si mure, dhe sipërfaqet 3D, rrjetat dhe blloqet 3D shfaqen si sipërfaqe që mund t'i rrotullosh. Fletët mbeten 2D.

## Hapat

1. Hap një DWG ose DXF. Shih [Shiko një vizatim DWG ose DXF](topic:view-dwg). Hapet në 3D, përveç nëse {{ui:Cilësimet}} › BimCraft › **Vizatimet hapen në** thotë {{ui:Model (2D)}}.
2. Nga 2D, kliko {{ui:3D}} në shiritin mbi vizatim, ose shtyp {{key:3}}.
3. Prit pak herën e parë: rreshti i statusit thotë "Po ndërtohet vizatimi në 3D…", pastaj sa vija dhe sipërfaqe shfaq.
4. Rrotullo, lëviz dhe zmadho (shih tabelën më poshtë).
5. Kliko një pamje në shiritin e dytë: {{ui:Iso}}, {{ui:Sipër}}, {{ui:Poshtë}}, {{ui:Para}}, {{ui:Prapa}}, {{ui:Majtas}} ose {{ui:Djathtas}}.
6. Kliko {{ui:Perspektivë}} për të kaluar midis një pamjeje perspektive dhe një pamjeje paralele.
7. Kliko {{ui:Shtrirja}} ose shtyp {{key:F}} për ta parë përsëri gjithë vizatimin.
8. Kliko {{ui:3D}} përsëri, shtyp {{key:3}}, ose kliko {{ui:Modeli}} ose një skedë fletë për t'u kthyer në 2D.

## Çfarë duhet të shohësh

- Hapësira e modelit në 3D, Z lart, me ngjyrat e vetë vizatimit. Sipërfaqet janë një nuancë më të çelura se skajet e tyre.
- Shtresat që fik te {{ui:Shtresat}} zhduken edhe nga pamja 3D.
- Në të djathtë: numri i vijave dhe sipërfaqeve, madhësia e vizatimit në X, Y dhe Z, **Vetëm në pamjen 2D** dhe **Nuk është vizatuar ende**.

## Pres me një plan prerjeje

Kliko {{ui:Prerje}} te shiriti 3D, ose shtyp {{key:X}}. Shiriti nën të funksionon si për modelet IFC (shih [Prit një model IFC me një plan prerjeje](topic:section-plane)): prit nga {{ui:Sipër}}, {{ui:Para}} ose {{ui:Anësore}}, tërhiq ose shkruaj zhvendosjen — këtu në njësitë e vetë vizatimit — dhe {{ui:Kthe}} për të mbajtur anën tjetër. Çfarë plani pret e heq nuk mund të zgjidhet. Kthimi në 2D e heq prerjen.

## Shiko vetitë e një objekti

Kliko një objekt në pamjen 3D. Ai merr ngjyrën e zgjedhjes dhe {{ui:Vetitë}} tregon çfarë thotë skedari për të: llojin, shtresën, ngjyrën, llojin e vijës dhe doreza, pastaj të dhënat e vet, si fillimi, fundi dhe gjatësia e një vije, qendra dhe rrezja e një rrethi, qoshet e një sipërfaqeje 3D, ose blloku, pika e futjes, shkalla, rrotullimi dhe vlerat e atributeve të një reference blloku.

- Një referencë bllok zgjidhet si një e tërë, edhe bllokët e futur brenda saj.
- Një klikim disa piksele larg një vije zgjedh vijën.
- Mbaj {{key:Mod}} dhe kliko për të zgjedhur më shumë objekte, ose për të hequr një; {{ui:Vetitë}} i numëron atëherë sipas llojit.
- {{key:Esc}}, ose një klikim në hapësirë boshe, e pastron zgjedhjen.
- Objektet në shtresat që fike nuk mund të zgjidhen.

## Lëvizja

:::mouse
| Për | Bëje këtë |
|---|---|
| Rrotullim | Tërhiq me butonin e mesit, ose me butonin e majtë |
| Lëvizje | Tërhiq me butonin e djathtë, ose mbaj {{key:Shift}} dhe tërhiq |
| Zmadhim | Lëviz rrotullën; zmadhon drejt asaj që është nën treguesin |
| Shiko të gjitha | {{ui:Shtrirja}} ose {{key:F}} |
| Shiko nga një anë | Kliko një faqe, skaj ose qoshe të kubit të pamjes në këndin e poshtëm djathtas |
:::

Kubi i pamjes mund të zëvendësohet me një ikonë boshti, ose të fshihet, te {{ui:Cilësimet}}. Shih [Cilësimet e BimCraft](topic:settings).

:::mac mouse
Në një touchpad, rrëshqit me dy gishta për të rrotulluar, mbaj {{key:Shift}} dhe rrëshqit për të lëvizur, dhe shtrydh për të zmadhuar.
:::

:::touch
Tërhiq me një gisht për të rrotulluar. Shtrydh me dy gishta për të zmadhuar, dhe lëvizi bashkë për të lëvizur.
:::

## Çfarë vizatohet në 3D

| Në vizatim | Në 3D |
|---|---|
| Vijat, polivijat 3D | Në lartësitë e tyre reale |
| Polivijat, rrethet, harqet, elipset | Në planin e tyre, në kotën e tyre, të pjerrëta kur vizatimi i pjerr |
| Trashësia te vijat, polivijat, rrethet dhe harqet | Mure me atë lartësi; rrethet janë të mbyllura lart dhe poshtë |
| Sipërfaqe 3D, rrjete polyface, rrjete poligonale | Sipërfaqe të hijëzuara me skajet e tyre të dukshme |
| Blloqe | Të vendosur, të rrotulluar dhe të shkallëzuar në 3D, edhe bllokët e futur |
| Vijëzimet | Konturet e tyre |
| Vijë e thjeshtë 2D | E sheshtë, aty ku u vizatua |

## Vetëm në pamjen 2D

Teksti, teksti me disa rreshta dhe atributet e dukshme të blloqeve vizatohen në 3D, në planin dhe kotën e tyre, dhe një klikim mbi ta i zgjedh. Polivijat e gjera e tregojnë gjerësinë si një brez të sheshtë. Shënimet me shumë drejtime, imazhet dhe modelet e vijëzimit numërohen te **Vetëm në pamjen 2D**: shiko ato te skeda {{ui:Modeli}} ose te fletët.

## Nuk është vizatuar ende

Solidet dhe sipërfaqet e ruajtura si trupa ACIS (solide 3D, trupa, rajone dhe sipërfaqe) dhe rrjetat e nënndarë listohen te **Nuk është vizatuar ende** me sa janë. Ato anashkalohen, nuk merren me supozim.

## Gabimet e zakonshme

- **Gjithçka duket e sheshtë.** Vizatimi është 2D: vijat e tij nuk kanë lartësi. Kliko {{ui:Para}} për ta kontrolluar; një vizatim i sheshtë shfaqet si një vijë.
- **Një model solid nuk shfaq asgjë.** Solidet e bëra me një modelues solid janë trupa ACIS, të listuara te **Nuk është vizatuar ende**. Eksporto modelin si IFC ose si sipërfaqe 3D nga programi që e bëri.
- **Vizatimi është një grumbull i vogël në mes.** Diçka shumë larg në hapësirën e modelit, si një kopje e vjetër e një plani, e bën shtrirjen të madhe. Zmadho me rrotullën aty ku dëshiron të shikosh.

## Më pas

- [Puno me shtresat dhe fletët](topic:dwg-layers-sheets)
- [Prit një model IFC me një plan prerjeje](topic:section-plane)
