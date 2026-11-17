---
title: Pikat për vendosje dhe kontrollet si të ndërtuar
summary: Numëro vendet nga të cilat ekipi vendos nyjet nga modeli — qendrat e kolonave, skajet e mureve, bulonat e ankorimit, manikat, çdo element që zgjedh — shkruaji për një stacion total, dhe lexo pastaj pikat si të ndërtuara të ekipit dhe shiko çfarë është jashtë.
keywords: pika vendosjeje, vendosje, vendos, shënim në terren, stacion total, rilevim, skedar pikash, csv, txt, pnezd, penzd, xyz, veri, lindje, kotë, si e ndërtuar, si-ndërtuar, kontroll, tolerancë, devijim, bulona ankorimi, qendrat e kolonave, skajet e mureve, manika, koordinatat e rilevimit, konvertim harte
from: acea9606
---

Tab-i {{ui:Pikat}} në të djathtë krijon pikat që një ekip i vendos në terren nga modeli i hapur, dhe kontrollon pikat që mat më pas.

## Krijo pikat

1. Hap një model IFC dhe tab-in {{ui:Pikat}}.
2. Zgjidh çfarë vendoset: **qendrat e kolonave** (baza e vijës qendrore të çdo kolone), **skajet e mureve** (të dy skajet e boshtit të çdo muri, në bazë), **bulonat e ankorimit**, **manikat** (elementët emri ose tipi i të cilëve thotë manikë) dhe **elementët e zgjedhur** (çdo një në pikën e vendosjes së tij — zgjidhi ata te pamja më parë).
3. Zgjidh numrin e parë dhe një prefiks, koordinatat, njësitë, kolonat dhe skedarin:
   - **Modeli**: koordinatat e vetë skedarit. **Rrjeta e rilevimit**: rrjeta hartore e gjeoreferencës së modelit (shfaqet vetëm kur IFC ka një konvertim hartor), në metra ose në njësinë që zgjedh.
   - Kolonat **PNEZD** (pikë, veri, lindje, kotë, përshkrim), **PENZD** ose **XYZ**; **CSV** (presje) ose **TXT** (tab).
4. Shtyp {{ui:Krijo pikat}}: lista i shfaq ato dhe pamja i shënon me blu. {{ui:Shkarko pikat}} shkruan skedarin.

Pikat vijnë në një renditje të caktuar — sipas llojit, pastaj në rreshta përgjatë planit — kështu që krijimi i tyre përsëri nga i njëjti model jep të njëjtët numra. Skedari është ai që hap CivilCraft dhe që shkruan EXPORTPOINTS i CadCraft: një pikë për rresht, tre dhjetore, një përshkrim në thonjëza kur përmban presje.

## Kontrollo pikat e si të ndërtuara

Kur ekipi kthen atë që matën, zgjidh një **tolerancë** në milimetra dhe si të çiftohen pikat — sipas **numrit të pikës** (i mbajtën numrat e tu) ose sipas **gjuajtjes më të afërt** — dhe shtyp {{ui:Lexo pikat e ndërtuara…}}. Lexo skedarin në të njëjtat njësi dhe koordinata që shkrove.

Çdo pikë projekti është pastaj **brenda** tolerancës, **jashtë** saj, **e pamatur**, dhe çdo gjuajtje që askush nuk e kërkoi është **shtesë**. Tabela jep ndryshimet në njësinë që zgjedh në shirit, me ft të shfaqura si in dhjetore (ndërtuar minus projekt: lindje, veri, lartësi, dhe distanca në plan); pamja i shënon çdo pikë me jeshile ose të kuqe me një vijë drejt gjuajtjes, dhe me gri kur nuk është matur. {{ui:Raporti (CSV)}} shkruan krahasimin e plotë.

Asgjë këtu nuk e ndryshon modelin. Ende nuk janë të gatshme: vendosja nga skajet e pllakave, nga kryqëzimet e rrjetës ose nga hapjet e krijuara për ty, dhe dërgimi i pikave direkt te një instrument — për këtë përdor skedarin.
