---
title: Toka e parcelës, platforma e ndërtimit dhe shtresimi
summary: Sillni tokën në model nga pikat e rilevimit, izoipsat, një skanim LAS / LAZ, një GeoTIFF, një sipërfaqe LandXML (të CivilCraft) ose disa kota pikash; prisni platformën e ndërtimit të shtëpisë me pjerrësitë dhe gërmim / mbushje; vendosni rrugët hyrëse, shtigjet dhe oborret mbi të; dërgojeni te CivilCraft si LandXML.
keywords: terren, tokë, parcelë, topografi, rilevim, pika, PNEZD, izoipsa, LAS, LAZ, LiDAR, GeoTIFF, DEM, kota, kotë pike, pjerrësi, nivelim, platformë, platformë ndërtimi, gërmim, mbushje, punime dheu, dalje në terren, pjerrësi, rrugë hyrëse, shteg, oborr, shtresim, LandXML, CivilCraft
from: 208298d6
---

## Çfarë do të bëni

Vendosni shtëpinë në parcelën e saj. Toka bëhet pjesë e modelit: shfaqet në 3D, priten në prerje dhe fasada, dhe izoipsat shfaqen në planimetri. Mbi të gërmohet një platformë ndërtimi nën shtëpi, rrugët hyrëse dhe shtigjet ndjekin terrenin, dhe themelet zbresin së bashku me të.

## Sillni tokën

1. Hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Terren}}.
2. Ose:
   - **Hap një skedar rilevimi…**: pika rilevimi (PNEZD, PENZD ose thjesht gjatësi, gjerësi, kotë, të ndara me presje, tab ose hapësirë), izoipsa në DXF ose DWG (polivijë me kotën e tyre, polivijë 3D), një skanim LAS ose LAZ (pikat e tokës mbahen, të rrallëzuara në rreth një për metër katror), një rrjet kotash GeoTIFF ose ASCII, ose një sipërfaqe **LandXML** si ajo që eksporton CivilCraft (pikat dhe trekëndëshat e saj ruhen; kur skedari përmban disa sipërfaqe, BimCraft pyet cila është toka; njësitë e saj merren nga skedari). Zgjidhni njësitë e skedarit së pari (LandXML i ka vetë).
   - Ose shkruani një **Kotë pike** (nga dyshemeja e këtij niveli, pra `-1'` është një këmbë nën të) dhe klikoni pikat mbi planimetri, ndryshoni kotën dhe klikoni më shumë pika, pastaj **Krijo tokën**. Tri pika mjaftojnë për të filluar.

Koordinatat e rilevimit larg modelit (sistemi shtetëror, UTM) zhvendosen mbi shtëpi, dhe kotat vendosen që toka te shtëpia të jetë rreth 8" nën dyshemenë e parë. **Ngri tokën** te **Vetitë** e korrigjon këtë me çdo vlerë.

## Platforma e ndërtimit

1. Zgjidhni {{ui:Platformë ndërtimi}}.
2. Vendosni **Margjinën** rreth shtëpisë, sa **ulet platforma nën dysheme** (8" nën një soletë, më shumë nën një hapësirë të ulët) dhe **Pjerrësitë** deri te toka ekzistuese (`2:1` = dy këmbë jashtë për çdo këmbë lart ose poshtë).
3. Klikoni brenda shtëpisë.

Toka nivelohet nën shtëpi dhe deri te margjina, pastaj ngrihet në drejtim të yllit (gërmim) dhe zbret në anën e ulët (mbushje) derisa takohet me tokën ekzistuese. **Vetitë** e tokës dhe të platformës japin vëllimet e gërmimit dhe mbushjes. Nëse zhvendosni muret, platforma ndjek.

## Rrugët hyrëse, shtigjet dhe oborret

Zgjidhni {{ui:Shtresim}}, zgjidhni **Ec**, **Rrugë hyrëse** ose **Oborr**, dhe klikoni kthesat. Klikoni përsëri kthesën e parë, klikoni dy herë ose shtypni {{key:Enter}} për të përfunduar. Shtresimi ndjek nivelin e përfunduar; ndryshoni llojin ose trashësinë te **Vetitë**.

## Themelet zbresin sipas nivelit

Me tokën në model, muret themelore dhe themelet e hapësirës së ulët ndjekin atë: përgjatë çdo muri themeli mbetet në thellësinë e vet nën tokën jashtë, duke zbritur me hapa të plotë prej 8" aty ku toka ulet (shih [Themelet nën muret](topic:foundations)).

## Dërgojeni te CivilCraft

**LandXML për CivilCraft** (në rreshtin Terren, ose te **Vetitë** e tokës) shkarkon tokën ekzistuese dhe nivelin e përfunduar si skedar LandXML. Hapeni në CivilCraft për nivelim, drenazhim dhe punime dheu të vërteta.

## Gjëra të dobishme

- Toka kërkon një model IFC4, si çdo ndërtesë e re.
- Izoipsat shfaqen në planimetrinë e nivelit të tokës me intervalin e vendosur te **Vetitë** e tokës; çdo e pesta është më e trashë.
- Toka ruhet si element terreni IFC (një sipërfaqe e mbyllur me trekëndësha, që prerjet ta presin); platforma dhe shtresimi ruhen me të. Fshini tokën për të filluar përsëri — platforma dhe shtresimi i saj fshihen bashkë me të.
