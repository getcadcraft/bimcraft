---
title: Deure en vensters
summary: Plaas deure en vensters in mure wat jy geteken het: wys na 'n muur, sien die swaai en die afstande na die hoeke, klik; die muuropening sny homself uit.
keywords: deur, deure, venster, vensters, opening, swaai, skarnier, hand, draai om, skuifdeur, sakdeur, garagedeur, dubbele deur, uitswaaivenster, enkelhangvenster, dubbelhangvenster, skuiwer, vaste venster, vensterbank, latei, vou-kassiedeur, Franse deure, skuurdeur, syvensters, ingangsdeur, uitswaaier, beeldvenster, boonlig
from: 4d8ac009
---

## Wat jy gaan doen

Plaas deure en vensters in mure wat jy geteken het ([Teken mure](topic:draw-walls)). Wys na 'n muur en die deur of venster wys waar dit sou gaan, watter kant dit swaai en hoe ver dit van elke hoek af is. Klik, en die opening sny homself uit die muur in die plan en in 3D.

## Plaas 'n deur

1. Met {{ui:Draw}} aan, klik {{ui:Door}} (of druk {{key:D}}).
2. Kies die tipe: **Enkelswaaideur**, **Dubbelswaaideur**, **Skuifdeur**, **Sakdeur**, **Garagedeur**, **Vou-kassiedeur**, **Franse deure**, **Skuurdeur (op die muur)** of **Ingangsdeur met syvensters**. Die gewone grootte vul **W** en **H**; kies 'n ander uit die grootte-lys langsaan, of tik ander, byvoorbeeld `2'-8"` of `800`. Die lys bied ook die deurfamilies van hierdie model aan (sien [Families en hul groottes](topic:families)).
3. Wys na 'n muur. Die deur se simbool volg die wyser langs die muur, en die afstand vanaf elke punt van daardie muurvlak wys op die plan.
4. Die deur swaai na die kant van die muur waar die wyser is. Druk {{key:H}} (of klik {{ui:Flip}}) om die skarniere aan die ander punt te sit.
5. Klik. Die deur is geplaas en die gereedskap bly aan vir die volgende een. Wys na die middel van 'n muur en die deur sentreer homself.

Om dit op 'n presiese afstand te plaas, wys na die muur naby die hoek waarvandaan jy meet, tik die afstand (byvoorbeeld `2'` of `600`) en druk {{key:Enter}}. Die afstand loop vanaf die naaste punt van die muurvlak tot by die deur se rand.

## Plaas 'n venster

1. Klik {{ui:Window}} (of druk {{key:N}}).
2. Kies die tipe: **Vaste venster**, **Enkelhangvenster**, **Dubbelhangvenster**, **Uitswaaivenster**, **Skuifvenster**, **Uitswaaier**, **Beeldvenster** of **Boonlig**, en sy **W**, **H** en **Vensterbank** (die hoogte van die onderkant van die venster bo die vloer).
3. Wys na 'n muur en klik, of tik 'n afstand en druk {{key:Enter}} soos vir deure. 'n Venster sit aan die buitekant van die muur.

## Skuif, draai om, skrap

- Met {{ui:Select}} aan, sleep 'n deur of venster langs sy muur. Sleep dit na 'n ander muur om dit daarheen te skuif.
- {{key:Delete}} skrap die gekose deure en vensters; die muur sluit weer.
- Om 'n muur te skuif of te skrap, skuif of skrap wat daarin is. Wanneer 'n muur se begin langs sy eie lyn beweeg, hou sy deure en vensters hul plek.
- {{ui:Undo}} en {{ui:Redo}} neem elke plasing, skuif of skrap heen en weer terug.

## Wat geweier word

- **Dit pas nie in daardie muur nie.** Die deur of venster is breër as die muur, of sou by sy einde uitsteek. Probeer 'n korter breedte of 'n langer muur.
- **Dit is hoër as die muur.** Die vensterbank plus die hoogte is bo die bopunt van die muur.

## Wat gestoor word

Elke deur of venster is 'n IFC-deur of -venster met sy grootte, werking (byvoorbeeld enkelswaai links), sy grootte se tipe (een tipe vir elke grootte van sy familie), `Pset_DoorCommon` of `Pset_WindowCommon` en basishoeveelhede, en vul 'n IFC-opening in sy muur. Die muur se netto sy-oppervlakte en volume laat die opening uit. Ander BIM-programme maak dit as 'n deur in 'n muur oop.

## Goed om te weet

- Die plan wys deure oop by 90° met hul swaai, skuifdeure as twee panele, sakdeure wat in die muur skuif, garagedeure as 'n gestreepte lyn bokant, en vensters met hul raam- en glaslyne.
- Die breedte is die totale breedte van die raam; die deurblad is die breedte minus die twee kosyne.
- Om getekende deure en vensters te kopieer is nog nie gebou nie: plaas nog een.

## Kelder-nooduitgangvenster en -put

Kies **Kelder-nooduitgang met put** in die venstertipe-lys. Dit begin as 'n 36 × 48 duim uitswaaivenster met 'n vensterbank 36 duim bo die vloer. Die put is aan die muur se buitekant, met minstens 48 duim vry breedte, 36 duim uitsteek, en 'n onderkant 6 duim onder die vensterbank. Dit verskyn as gestreepte lyne in die plan en as drie oop-bokant kante in 3D. Die put is deel van die venster se IFC-liggaam, so stoor, skuif, verander grootte of skrap van die venster neem dit saam. Verandering van grootte hou minstens 6 duim langs elke kosyn.

Dit is modelleringstandaarde, nie 'n sertifisering van uitgangsnakoming nie. Kontroleer die vervaardiger se werklike vrye opening, plaaslike vereistes, grond, dreinering en enige vereiste leer-afstand afsonderlik. Putdiepte en -hoogte is vooraf ingestelde afmetings; hulle volg nie die terrein nie.
