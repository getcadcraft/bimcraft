---
title: Koordinatat në BimCraft
summary: Ku jeni duke punuar: pozicioni i treguesit në planimetri dhe në pamjen 3D, niveli ku ndodheni, origjina e projektit dhe pika e rilevimit të vendit.
keywords: koordinata, ku jam, pozicioni, treguesi, lexim, x y z, nivel, kat, origjina e projektit, origjina, pika bazë, pika e rilevimit, vendi, koordinata e hartës, lindore, veriore, georeferencim, njësitë, vendndodhja
from: 84df5245
---

## Çfarë do të bëni

Dijeni me një vështrim ku ndodheni në një model: në cilin nivel po vizatoni, sa larg është treguesi nga origjina e projektit dhe ku ndodhet pika e rilevimit të vendit.

## Ku shfaqen numrat

- **Mbi pamjen 3D** (poshtë djathtas, pranë kubit të pamjes): lëvizni treguesin mbi model. Kutia tregon nivelin ku ndodhet pika dhe sa lart është mbi dyshemenë e atij niveli, pastaj **X, Y dhe Z**. Mbi hapësirë boshe, lexon pikën në dyshemenë e nivelit më të ulët.
- **Në planimetri** (poshtë djathtas, ndërsa {{ui:Draw}} është e ndezur): niveli që shfaq planimetria dhe lartësia e dyshemesë së tij, si dhe **X dhe Y** të treguesit ndërsa ai është mbi planimetri.
- Kur skedari ka një konvertim hartë (është eksportuar me koordinata hartë), të dy kutitë shtojnë **koordinatat lindore dhe veriore** në rrjetën e hartës, në {{ui:Units}} që keni zgjedhur (gjithmonë me njësinë e shkruar pranë tyre; këmbët dhe inçët shfaqen si këmbë dhjetore). Një vizatim (DWG ose DXF) mban njësitë e veta: leximi i treguesit i emërton ato dhe nuk konvertohet kurrë.

Çdo X, Y dhe Z matet nga **origjina e projektit**, në {{ui:Units}} të zgjedhur në shiritin e veglave (këmbë dhe inç, inç, këmbë dhjetore, milimetra, centimetra ose metra). Y pozitiv tregon nga veriu i modelit, i cili jo gjithmonë është veriu i vërtetë. Koordinatat lindore dhe veriore të hartës ndjekin të njëjtën zgjedhje (këmbët dhe inçët shfaqen si këmbë dhjetore); kur njësia e vetë sistemit të hartës është ndryshe nga ajo që keni zgjedhur, ajo shkruhet në kllapa pas numrave, për shembull *(këmbë të rilevimit amerikan)*, që një gjeodet të shohë në çfarë njësie shkruhet vetë sistemi.

## Dy shenjuesit

- **Origjina e projektit** (rreth i kuq me kryq): pika 0, 0, 0 nga e cila matet çdo koordinatë në model.
- **Pika e rilevimit** (rreth blu me trekëndësh): pika referuese e vendit, për të cilën jepen gjerësia, gjatësia dhe lartësia gjeografike, ose koordinatat e hartës. Në pamjen 3D, drejtojeni treguesin mbi të për të lexuar ku ndodhet.

Kur vendi ndodhet mbi origjinën e projektit, si në një ndërtesë të re të vizatuar këtu, një shenjues shfaq të dyja. Klikoni butonin me kryq në çdo kuti për të fshehur ose shfaqur shenjuesit; BimCraft e mban mend zgjedhjen tuaj në këtë shfletues.

## Çfarë duhet të shihni

- Numrat ndryshojnë ndërsa treguesi lëviz, dhe kutia e planimetrisë emëron nivelin që keni zgjedhur në listën e niveleve.
- Shenjuesit qëndrojnë në vend ndërsa rrotulloni, lëvizni dhe zmadhoni pamjen.

:::tip
Për të lexuar gjerësinë dhe gjatësinë gjeografike të një pike, përdorni {{ui:Measure}} › {{ui:Location}}: shih [Mat distanca, sipërfaqe faqesh dhe vendndodhje në 3D](topic:measure).
:::

:::touch
Në një ekran me prekje, kutia 3D nuk shfaq asgjë derisa të përdorni miun ose stilolapsin: gishti lëviz pamjen.
:::
