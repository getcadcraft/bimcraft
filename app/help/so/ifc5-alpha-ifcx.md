---
title: Fur oo dhoofi faylasha IFC5 alpha (IFCX)
summary: Ikhtiyaar tijaabo ah oo ku saabsan qaabka faylka IFC5 alpha (.ifcx): fur fayl oo leh lakabyadiisa, arag waxa akhrintu aysan hubin karin, oo dhoofi moodeelada furan. Qaabku weli waa isbeddelayaa, marka hore akhri.
keywords: ifc5, ifcx, alpha, buildingsmart, json, lakab, schema, tijaabo, tirooyin, qto, dhoofin, soo gelin
from: cffe1669
---

IFC5 alpha (faylka dhamaadkiisu yahay {{ui:.ifcx}}) waa qaabka faylka buildingSMART weli naqshadaysa. Ma aha mid dhammaystiran: faylasha, iyo sida aannu u akhrinno, way isbedeli karaan. Taasi waa sababta tani u tahay ikhtiyaar tijaabo iyo sababta akhrintu marka hore timaado.

## Shid

1. Dooro {{ui:Dejinta}}, kadibna qaybta {{ui:IFC5 alpha (IFCX)}} ee tab-ka BimCraft.
2. Calaamee {{ui:IFC5 alpha (IFCX) - qaabku weli way isbeddelaysaa; akhri marka hore}}.

Waa la damiyaa caadi ahaan. Intuu damiga yahay, fayl .ifcx waa la diidaa jumlad tilmaamaysa halkan. {{ui:Fur IFC5 alpha (.ifcx)…}} iyo badhanka dhoofinta {{ui:IFC5 alpha}} ayaa muuqda marka uu shidan yahay.

## Fur

- Dooro fayl .ifcx adigoo isticmaalaya {{ui:Fur fayl ama gal}} (wuxuu beddelaa moodeelka furan, kadib su'aasha caadiga ah ee wax-beddelka), ama
- dooro {{ui:Fur IFC5 alpha (.ifcx)…}} oo dooro dhowr fayl oo wada: faylka, lakabyadiisa, iyo faylasha schema-ta uu soo dhoofiyo. Haddii moodeel horay loo furay, faylka **waxaa lagu daraa dhinacisa**; calaamadda x ee liiska moodeelka ayaa ka saaraa mar kale, taas oo ah ka noqod.

Faylka IFCX wuxuu liistaa nodes (jid, carruurtiisa, waxa dhaxla, sifooyinkiisa). Fayloodo badan ayaa sharxi kara isla node-ka: fayl dambe (lakab) ayaa ka sarreeya sifooyinka fayl hore, carruur null ahna waa ka saartaa carruur. BimCraft wuu isku daraa, kadibna natiijada wuxuu u muujiyaa moodeel yar oo IFC4 ah: mashruuc, goob, dhismo, dabaqyo iyo walxo leh magacyo, fasallo, sifooyin, tirooyin, midabo iyo meshes.

Waxba internet-ka laga soo qaadan. Faylasha schema-ta uu faylku soo dhoofiyo (tusaale `ifc@v5a.ifcx`) waxaa loo isticmaalaa oo keliya haddii aad faylka la dooratay; haddii kale warbixintu wuu sheegaa, sifooyinkana waa la akhriyaa iyada oo aan nooca la hubin.

### Warbixinta

Furitaanka ka dib, warbixinta ayaa liisteysa waxa akhrintu heshay: xog aan waafaqsanayn schema-tiisa, faylasha schema-ta aan la siin, sifooyin aan macno IFC ku lahayn halkan. Sifooyinka aan mapping lahayn waa la **hayaa** moodeelka, looma tuuro, waxaana dib loo qoraa marka la dhoofiyo.

## Waxa noqda waxa

| Faylka IFCX | BimCraft |
|---|---|
| Node leh fasal IFC (mashruuc, goob, dhismo, dabaq, derbi …) | Walxda IFC4 ee ku habboon; fasal aan akhrintan garanayn wuxuu noqdaa building element proxy |
| Magaca node-ku leeyahay hoosta waalidkiisa | Magaca walxda |
| Sifooyin leh nooc tiro (Length, Area, Volume, Mass …) | Hal set oo tiro IFC4 ah oo lagu magacaabay `Qto_IFCX` (tirooyinka IFC4 waxay ku sii jiraan IFC4 `Qto_*` sets) |
| Sifooyinka kale ee hantida | Hal property set oo lagu magacaabay `Pset_IFCX` |
| Sifooyinka mesh iyo transform | Saddexagallada walxda iyo meeleynta; meshes aan muuqan lama sawirin |
| Midabka, opacity-ga, agabka, kala-soocidda | Surface style, agabka iyo kala-soocidda walxda |

Unugyada waxa loo qaataa inay yihiin mitir, Z oo kor u jeeda: alfa wuxuu sheegayaa in unugyada dambe la qori doono.

## Dhoofin

Guji {{ui:IFC5 alpha}} qalabka sare, akhri qoraalka, kadibna guji {{ui:Dhoofi .ifcx}}. Faylku wuxuu leeyahay madasheen (header) keena (qoraaga CadCraft, nooca ifcx_alpha) waana uu isagu sheegaa inuu yahay qaabka alfa. Moodel kasta waxa lagu qoraa isku-xidhka faylkiisa (coordinates) oo mitir ah, oo leh magacyo, fasallo, property sets, tirooyin (sifooyin leh nooceeda), midabo iyo saddexagallo. Lakabyada iyo dhaxalka waa la qoraa oo la fidiyey. Faylka hubi barnaamijka aad u dirto.

## Xadka

- Joogitada qalloocan (curves, surfaces) lama akhrin: waxaa la akhriyaa oo keliya mesh-yada saddexagallada ah.
- Albaabada iyo daaqadaha ku dhex jira derbi waxay ku yaalaan dabaqa; derbigii ay ka yimaadeen lama xidhin.
- Magacyada set-yada tirooyinka IFC4 `Qto_*` waxa loo haynayaa sida kooxo sifo gaar ah (`cadcraft::qto::…`); qaabka alfa ee caadiga ah wuxuu leeyahay magacyo tiro oo yar oo keliya.
- Qaabku wuu isbedeli karaa annaga oo aan ogaanin; faylka maanta la sameeyey berri ma akhriyi karo.
