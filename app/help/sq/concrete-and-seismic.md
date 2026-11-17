---
title: Kontrollo elementët e betonit dhe bëj ngarkesat sizmike
summary: Konfiguro shufrat e trarëve dhe kolonave prej betoni të modelit të hapur, kontrolloji sipas ACI 318-19, bëj forcat ekuivalente anësore sipas ASCE 7-22 mbi dysheme të ngurta, dhe shiko zhvendosjen e katit. Një ndihmës për inxhinierin që kontrollon.
keywords: beton, beton i armuar, ACI 318, ACI 318-19, armaturë, trar, kolonë, prerje, lidhëse, sizmik, tërmet, forcë ekuivalente anësore, ELF, ASCE 7-22, zhvendosje, zhvendosje kati, dysheme, diafragmë e ngurtë, peshë kati, shfrytëzim, strukturor, inxhinier, analizë
from: 2f342e72
---

Blloqet {{ui:Concrete members}} dhe {{ui:Seismic loads}} te skeda {{ui:Analysis}} kontrollojnë trarët dhe kolonat prej betoni të armuar të IFC-së së hapur, dhe bëjnë forcat anësore të një tërmeti mbi dyshemetë e kornizës së saj. Janë të njëjtët blloqe si ato të DetailCraft, të ekzekutuara pas analizës së skedës {{ui:Analysis}}, dhe ruhen në IFC me cilësimet e tjera të analizës.

:::warning
Rezultatet janë **për kontroll nga një inxhinier**: një ndihmës derisa një inxhinier ta ketë shqyrtuar. Kontrollet e betonit përdorin forca të rendit të parë (një kolonë në një kornizë që e quani pa lëvizje zhvendosjeje projektohet për momentin e saj të zmadhuar), pa zmadhim të zhvendosjes, pa projektim përdredhjeje, pa detajim sizmik (kapitulli 18 i ACI) dhe pa detajim lidhësesh. Ngarkesat sizmike lënë jashtë faktorin e tepërt, efektin sizmik vertikal, zmadhimin nga përdredhja dhe efektet P-delta. **Ngarkesat nga era nuk janë ndërtuar**: kapitujt e erës të standardit nuk janë në faqet e referencës së projektit.
:::

## Çfarë lexon BimCraft

Analiza lexon trarët, kolonat dhe diagonalet e modelit me profilet e tyre (shih [Analizo kornizën strukturore](topic:frame-analysis)). Blloku {{ui:Concrete members}} liston çdo seksion që ato përdorin. Shtypni {{ui:Set up as concrete…}} te një seksion që është beton: BimCraft merr një drejtkëndësh nga sipërfaqja dhe ngurtësia e profilit (gjerësinë b dhe lartësinë h, të cilat mund t'i ndryshoni më pas), kështu që një seksion që nuk është afër një drejtkëndëshi (një formë çeliku e valcuar) jep një madhësi që duhet korrigjuar, ose lihet ashtu.

Një seksion i vendosur si beton, dhe çdo element me material të quajtur beton, analizohet si beton: E = 4700 √f′c, 2400 kg/m³, dhe si parazgjedhje me **seksione të plasaritura** (kolona 0.70 Ig, trarë 0.35 Ig; ACI 318-19 Tabela 6.6.3.1.1(a)). Zgjidhni {{ui:Gross sections}} për ta çaktivizuar atë. Pa këto cilësime, modeli analizohet ashtu si më parë.

## Shufra, kombinime, kontroll

Jepni mbulesën, shufrat e sipërme, të poshtme dhe anësore (ose një kafaz kolone) dhe lidhëset e secilit seksion; vendosni f′c, fy, fyt, K dhe lëvizje ose pa lëvizje zhvendosjeje. Jepni llojin e secilës ngarkesë, shtypni {{ui:Make combinations}} (ASCE 7 §5.3.1) dhe pastaj {{ui:Check concrete}}: çdo element merr një shfrytëzim, i ngjyrosur mbi model. Elementët mbi kapacitet dhe një zhvendosje kati mbi kufirin e vet listohen te {{ui:Problems}} me klauzolën e tyre; klikoni një të tillë për të zgjedhur elementin.

## Dysheme dhe ngarkesa sizmike

Te blloku {{ui:Seismic loads}}, {{ui:Find floors}} merr nivelet ku takohen dy ose më shumë trarë; secili bëhet një diafragmë e ngurtë. {{ui:Take weights from cases}} lexon peshën sizmike të çdo dyshemeje nga rastet të cilave u jepni një faktor. Plotësoni SDS, SD1, S1, R, Ie, Cd, TL, sistemin dhe kategorinë e rrezikut, pastaj {{ui:Make seismic cases}} (ASCE 7-22 12.8: periudha, forca bazë, shpërndarja lart në dysheme, 5 % përdredhje e rastësishme). Forcat e katit dhe kontrolli i zhvendosjes (12.12) shfaqen pas një ekzekutimi. E njëjta periudhë dhe ngurtësi kati ushqejnë tërmetin te [Luaj një përmbytje, erë ose tërmet](topic:hazard-playback), kur zgjidhni kornizën e analizës si burim të tij.

Pllakat dhe muret prej betoni bëhen pllaka në analizë, dhe blloku {{ui:Armatura e soletës}} llogarit çelikun që u duhet për metër. Detajet e çdo kontrolli janë në temën e DetailCraft me të njëjtin emër.
