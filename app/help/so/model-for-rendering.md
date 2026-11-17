---
title: Dir moodelka barnaamijka rendarka
summary: Keydi waxa muuqaalka 3D muujinayo sida moodel glTF (.glb) oo leh agabkiisa, teksaarkiisa iyo nalalkiisa, loogu talagalay barnaamijyada rendarka iyo muujinta ee akhrisa glTF.
keywords: glb, gltf, gl transmission format, dhoof, rendar, rendering, muuqaal, waqtiga dhabta ah, archviz, agabka, teksaarka, nalalka, hanti, hanti gaar ah
from: e62d57dc
---

{{ui:Ee soo bandhigga}} safka toolbar-ka wuxuu keydiyaa waxa muuqaalka 3D muujinayo hal fayl **.glb** (glTF 2.0, qaabka furan ee Khronos Group). Barnaamijyada rendarka ee akhrisa glTF waxay ku furaan agabkiisa iyo nalalkiisa; Twinmotion wuxuu liistaa glTF iyo GLB marka faylasha geometry-ga uu soo dhoofiyo, wuxuuna ilaaliyaa nalalkooda (dokumentiga Epic, "Importing geometry in Twinmotion"): isticmaal {{ui:Ee soo bandhigga}} oo halkaas soo dhoof .glb. Waxba lama soo dirin: faylku kombiyuutarkan ayuu ka sameeyaa.

## Keydi

1. Fur moodelka IFC oo deji muuqaalka 3D: qari dabaqyada, elementiyada ama moodeelada xiriira ee aadan rabin, oo [rinji agabka](topic:paint-materials) aad rabto inaad aragto.
2. Guji {{ui:Ee soo bandhigga}} (ama qor `GLB`).
3. Faylku wuxuu soo degayaa magaca "<model name>.glb". Status bar-ku wuxuu sheegayaa tirada saddex-geesoodka, agabka iyo nalalka uu hayo.

## Waxa faylku qaadaa

- **Geometry** ee elementi kasta oo muuqaalka 3D muujinayo, meetarro ku qoran, Y oo kor u socda (dhidibada glTF ee u gaarka ah). Hal shay dabaq kasta iyo agab kasta, oo magacyada ah "Level 1 — Brick, red", si aad agabka barnaamijka rendarka ugu doorato oo aad ugu beddesho midka u gaarka ah.
- **Agabka:** midab kasta oo leh muuqaalka aad u dooratay [Rendar](topic:render) (matte, satin, glossy, metal, glass…), iyo agab kasta oo maktabad ah oo la rinjiyey leh midabkiisa, roughness iyo **teksaarkiisa** (sawirkiisa wuxuu ku jiraa faylka, cabbir u dhigan cabbirkiisa dhabta ah: laba-dhagax waa cabbirka laba-dhagax). Muraayadda way ka muuqataa.
- **Nalalka:** dhammaan nalalka iftiinka ee lagu daray Rendar › Lamps oo shidan, sida nalka dhibcaha ama nalka xagal, oo leh iftiinkooda (lumen oo loo beddelay candela), midabkooda iyo xagasha ifka.
- **Meesha goobta:** latitude-ka iyo longitude-ka goobta ayaa lagu qoray faylka tixraac ahaan. Barnaamijyada rendarku waxay leeyihiin qorraxdooda; ku qor goobta gudaheeda.

## Waxa uu ka tago

- Gooyada qaybta (elementiyada oo dhan ayaa galaya) iyo elementiyada muuqda si dhalaalaya (waa la ka tagayaa).
- Elementi-elementi objects (hal shay dabaq kasta iyo agab kasta bedelkiisa), IFC properties, bump maps, muuqaallada la keydiyay iyo socodyada la duubay.
- Edges iyo background.

## Enscape iyo rendarrada plug-in

Enscape wuxuu ku shaqeeyaa barnaamij naqshadeed kale oo ma leh fayl lagu furi karo mashruuc oo dhan. Laba siyaabood:

- Fur moodelka **IFC** (File › Save) barnaamijka uu Enscape ku shaqeeyo; intooda badan waxay akhriyaan IFC. Midabyada way yimaadaan; agabka maktabada waxay yimaadaan sida midabkooda.
- Soo geli **qayb yar** (alaab guri, qalab) sida hanti gaar ah: marka hore kala soo saar, kadibna guji {{ui:Enscape ee (.gltf)}}. Maktabada hantida gaarka ah ee Enscape waxay liistaa faylal .gltf, .obj iyo .fbx, ma aha .glb, sidaas darteed badhankan wuxuu keydiyaa isla muuqaalka sida **.gltf** oo keligiis ah (xogta binary iyo sawirrada faylka ayey ku jiraan; ma jiro wax kale oo lagu wada koobiyeeyo). Enscape wuxuu talinayaa hanti yar (ka yar qiyaastii 20,000 saddex-geesood).

:::note
CadCraft Studio-ga isla faylka glTF (iyo faylka USD) waxa laga keydin karaa {{ui:Rendar}} › Engine › **Faylka glTF** / **Faylka USD**, ama si toos ah loogu furi karaa barnaamij kombiyuutarkan ku jira: eeg [Fur muuqaalka barnaamij kale](topic:render-open-in). Plug-in ama xidhiidh toos ah oo Enscape ama Twinmotion ah lama dhisin. Qaababka FBX iyo Datasmith looma qoro sifo la daabacay, sidaas darteed BimCraft ma qoro; glTF waa jidka furan.
:::
