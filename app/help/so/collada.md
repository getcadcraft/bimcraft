---
title: Dhoofi moodelka sida Collada ama Google Earth
summary: Qor moodelada IFC ee furan fayl Collada (.dae) oo loogu talagalay Blender iyo barnaamijyada 3D kale, ama xirmo Google Earth (.kmz) oo lagu dhigay meesha uu ku yaal khariidadda.
keywords: collada, dae, kmz, kml, google earth, blender, dhoofin, geolocation, georeference, latitude, longitude, goob, barnaamijyada 3d
from: 81cfec09
---

{{ui:Collada}} ee qalabka (ama {{ui:Dhoofi Collada (.dae, .kmz)…}} ee liiska Fayl ee hababka menu iyo ribbon) wuxuu qoraa waxa furan oo ah Collada 1.4.1: moodel kasta oo la muujinayo, iyo moodelada isku xidhan meelaha aad dhigtay.

## Dhoofin

1. Dooro {{ui:Collada}}.
2. Dooro qaabka:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Waxaa lagu soo bandhigaa kaliya marka moodelku leeyahay goob.
3. Dooro doorashooyinka, kadibna {{ui:Dhoofi}}. Faylka ayaa la soo dejiyaa, saftarka xaaladdana wuxuu sheegayaa inta walxood ee gashay.

| Doorasho | Waxa ay samayso |
|---|---|
| {{ui:Write the location into the file}} | Wuxuu ku daraa latitude, longitude, dhererka iyo jihada bilowga faylka .dae |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, ama {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Meelaha waa la geliyaa mana aha (caadi ahaan waa la ka reebaa) |
| {{ui:Include hidden elements}} | Walxaha aad qarisay ayaa sidoo kale la qoraa (caadi ahaan waxa la qoraa oo keliya waxa aad aragto) |

## Waxa ku jira faylka

| Moodelka dhexdiisa | Faylka Collada dhexdiisa |
|---|---|
| Dhismaha, dabaqyada | Nodes ku jira midba kan kale, dabaqyada sida ay u kala horreeyaan kor-u-kac; walxaha aan dabaq lahayn ee ku jira "Unplaced" |
| Walax kasta | Hal node oo leh mesh u gaar ah, lagu magacaabay sida moodelka (magaciisa, haddii kale nooceeda iyo tag-keeda) |
| Nooca, GlobalId, nooca hore loo qeexay | Node-ka extra data-diisa (profile IFC), magaca saxda ah (profile ModelCraft) |
| Midabka | Agabyo, oo leh hufnaan |
| Cabbirrada iyo dhidibbada | Mitir, Z sare. Heerka 0 ee moodelka hore wuxuu ku yaalaa dhererka 0 |

Moodelku wuxuu ku sii jiraa meel u dhow bilowga dhulka, si barnaamijyada ku shaqeeya saxnaan hoose ay u muujiyaan iyada oo aan gariirin. ModelCraft wuxuu qoraa faylashiisa Collada isla qoraaga, wuxuuna furaa faylashan iyada oo magacyada walxahooda la hayo.

## Goobta ka timaadda

Moodelka hore ayaa siiya goobta, si la mid ah sida {{ui:Qiyaas}} u xisaabiso latitude iyo longitude-ka dhibic:

- Beddel khariidad (IFC4 IfcMapConversion, ama property sets IFC2X3) iyada oo loo marayo nidaamka isku-xirka moodelka. Nidaamka aad moodelka u dooratay ayaa ka mudan kan faylku magacaabo.
- Haddii kale, latitude iyo longitude-ka goobta (qiyaas: waa wanaagsan tahay marka goobta oo dhan la eegayo).

Jihada waa la cabbiraa, ma aha mid la male-awaaleeyo: waxay tixgelinaysaa jiifka khariidadda, waqooyiga run ah iyo isu-soo-dhowaanta meridianka khariidadda. Si aad moodel goob u siiso, isticmaal {{ui:Bilowga khariidadda…}} oo ku jira {{ui:Qiyaas}}.

## Barnaamijyada kale

- **Google Earth** wuxuu akhrinayaa .kmz: moodelku wuxuu u muuqdaa goobtiisa, oo loo rogay waqooyiga. .dae fudud ma leh meel uu Google Earth ka akhrin karo goob; isticmaal .kmz.
- **Blender** (4.x iyo ka hor): File, Import, Collada (.dae). Walax kasta waxay u timaadaa sida shay gaar ah oo leh agabkeeda. Goobta waxaa lagu kaydiyay extra data-da faylka, taas oo Blender aan akhrin. Blender 5.0 wuu iska tirtiray importer-kiisii Collada ee dhismaha ku jiray; halkaas isticmaal {{ui:USD}} ama dhoofinta glTF, ama fur .dae ee Blender 4.5 oo kaydi .blend.

Tijaabooyinkeennu waxay hubiyaan fayl kasta iyadoo la barbardhigayo qaabka Collada 1.4.1, waxayna dib u akhriyaan akhristaha Collada ee madaxbannaan. Ma aanay furin Blender ama Google Earth.
