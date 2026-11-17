---
title: Kontrollo një vizatim në pamjen e printimit
summary: Kalo një DWG ose DXF në pamjen e printimit për ta parë me të zi mbi të bardhë, me trashësitë e vijave dhe pa shtresat që nuk printohen kurrë.
keywords: printim, plotim, paraparje, paraparje plotimi, trashësi vijash, monokrome, e zi dhe e bardhë, defpoints, pa plotim
from: 1a59c23e
---

## Çfarë do të bësh

Shiko si do të duket një fletë në letër përpara se ta printosh nga programi që e krijoi: e zezë mbi të bardhë, trashësitë e vijave në madhësinë e tyre reale, dhe pa shtresat që janë vendosur të mos printohen.

## Hapat

1. Hap një vizatim DWG ose DXF.
2. Kliko një skedë fletë mbi vizatim.
3. Kliko {{ui:Print view}} në fund të skedave, ose shtyp {{key:P}}.
4. Zmadho një detaj për të krahasuar vijat e trasha dhe të holla.
5. Kliko {{ui:Print view}} përsëri, ose shtyp {{key:P}}, për t'u kthyer te ngjyrat normale.

## Çfarë duhet të shohësh

- Letër e bardhë mbi një tavolinë gri, çdo vijë dhe tekst me të zi, pavarësisht temës.
- Trashësitë e vijave: në një fletë çdo trashësi vizatohet në gjerësinë e saj reale në letër, kështu që një vijë 0.5 mm është dy herë më e trashë se një vijë 0.25 mm në çdo zmadhim. Një vijë nuk vizatohet kurrë më hollë se trashësia e saj në ekran.
- Shtresat e vendosura të mos printohen, dhe shtresa DEFPOINTS, fshihen.
- Butoni {{ui:Print view}} mbetet i shtypur. Pamja e printimit mbetet e ndezur kur ndërron fletët ose hap një vizatim tjetër, deri sa ta fikësh.

Në {{ui:Model}}, pamja e printimit përdor vetëm trashësitë e ekranit (vijat e holla një piksel, ato më të trasha pak më të trasha), sepse hapësira e modelit nuk ka madhësi letre.

## Gabimet e zakonshme

- **Pritja se do të printohet.** Pamja e printimit është një paraparje. Printimi dhe eksporti PDF nuk janë të integruara në BimCraft ende; printo nga programi që e krijoi vizatimin.
- **Pritja e stileve të plotimit.** Tabelat e penave dhe ngjyrat e stileve të plotimit nuk lexohen. Gjithçka është e zezë e thjeshtë.
- **Shtypja e P ndërsa shkruan.** {{key:F}} dhe {{key:P}} nuk bëjnë asgjë ndërsa shkruan në një fushë, ose kur tabela e pajisjeve është e hapur.
