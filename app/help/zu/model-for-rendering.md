---
title: Thumela imodeli kuhlelo lokurenda
summary: Londoloza okubonakala kumbono we-3D njengemodeli ye-glTF (.glb) enezinto zayo, izindwangu namabhoni, yezinhlelo zokurenda nezokubonisa ezifunda i-glTF.
keywords: glb, gltf, gl transmission format, thumela, ukurenda, ukubonisa, isikhathi sangempela, archviz, izinto, izindwangu, amabhoni, ukuvezwa, impahla, impahla yakho
from: e62d57dc
---

{{ui:Ukuze kurendrelwe}} kwithuluzi lamathuluzi longa okubonakala kumbono we-3D njengefayela elilodwa le-**.glb** (glTF 2.0, ifomethi evulekile evela ku-Khronos Group). Izinhlelo zokurenda ezifunda i-glTF ziyasivula ngezinto zemodeli namabhoni wayo; i-Twinmotion ibhala i-glTF ne-GLB phakathi kwamafayela ejiyometri ayawalayisha futhi igcina izibani zawo (incwadi yokusiza ye-Epic, "Importing geometry in Twinmotion"): sebenzisa {{ui:Ukuze kurendrelwe}} bese ungenisa i-.glb lapho. Akukho okulayishwayo: ifayela lenziwa kulesi sikhombisa-mbono.

## Londoloza

1. Vula imodeli ye-IFC bese usetha umbono we-3D: fihla izitezi, izinto noma amamodeli axhunyiwe ongawadingi, bese [upenta izinto](topic:paint-materials) ofuna ukuzibona.
2. Chofoza {{ui:Ukuze kurendrelwe}} (noma uthayipha `GLB`).
3. Ifayela liyalandwa njenge-"<igama lemodeli>.glb". Ibha yesimo ikhombisa ukuthi inama-triangle amangaki, izinto nezibani eziphethe.

## Okuphethwe yifayela

- **Ijiyometri** yazo zonke izinto umbono we-3D ozikhombisayo, ngamamitha, no-Y ephezulu (ama-axes we-glTF ngokwawo). Into eyodwa ngesitezi ngasinye nangomumo ngamunye, ibizwa ngokuthi "Level 1 — Brick, red", ukuze ukhethe impahla yokwakha kuhlelo lokurenda uyishintshe ngeyayo.
- **Impahla yokwakha:** umbala ngamunye ngesimo osikhethe kwi-[Render](topic:render) (matte, satin, glossy, metal, glass…), nendwangu ngayinye yelabhulali epenjiwe ngombala wayo, ukuqina kwayo nesithombe sayo sesihlobiso (isithombe sayo sifakwe ngosayizi wayo wangempela: ibhulokhi libe ngosayizi webhulokhi). Ingilazi iyabonakala.
- **Izibani:** yonke isibani esivulwe ku-Render › Izibani, njengomthombo wokukhanya owu-point noma owu-spot, nokukhanya kwayo (ama-lumen aguqulwa abe ama-candela), umbala nobubanzi bomkhondo wokukhanya.
- **Lapho isiza likhona:** ububanzi nobude besiza kubhalwa efayeleni ukuze kubhekiswe kuwo. Izinhlelo zokurenda zinelanga layazo: thayipha indawo lapho kuyo.

## Lokho okushiywayo

- Isigaba esinqunyiwe (izinto eziphelele ziyangena) nezinto ezibonakala ngokuzidlulisa (zishiywa).
- Izinto ngazinye njengezinto (into eyodwa ngesitezi nangomumo ngamunye kunalokho), izici ze-IFC, ama-bump map, imibono elondoloziwe nezinhambo ezirekhodiwe.
- Imiphetho nengemuva.

## Enscape nezinye izikhombimzimba zeplagi

I-Enscape isebenza ngaphakathi kolunye uhlelo lokuklama futhi ayinafayela lokuvula iprojekthi yonke. Izindlela ezimbili:

- Vula **i-IFC** yemodeli (Ifayela › Londoloza) kuhlelo i-Enscape esebenza kulo; eziningi zalezo zifunda i-IFC. Imibala iyafika; izinto zelabhulali zifika njengemibala yazo.
- Letha **ingxenye encane** (impahla, isixhobo) njengento yakho ye-custom asset: yihlukanise kuqala, bese uchofoza {{ui:Ye-Enscape (.gltf)}}. Ilabhulali yemipahla yokwenziwe ye-Enscape ibala amafayela .gltf, .obj no-.fbx, hhayi .glb, ngakho lolu cindezelo lulondoloza leso sigcawu njenge-**.gltf** eyodwa ezimele (idatha yebhinali nezithombe zingaphakathi kwefayela; akukho okunye okudingeka ukukopisha nayo). I-Enscape incoma izimpahla ezincane (ngaphansi kwama-triangle angu-20,000 cishe).

:::note
Ku-CadCraft Studio ifayela elifanayo le-glTF (nelifayela le-USD) lingalondolozwa nakusuka ku-{{ui:Renda}} › Injini › **ifayela le-glTF** / **ifayela le-USD**, noma livulwe ngqo kuhlelo oluselwini kule kompyutha: bona [Vula isigcawu kolunye uhlelo](topic:render-open-in). I-plug-in noma uxhumo olubukhoma lwe-Enscape noma lwe-Twinmotion alukakwakhiwa. Amafomethi e-FBX ne-Datasmith awanasipesifikhethi esishicilelwe, ngakho i-BimCraft ayiwabhali; i-glTF yindlela evulekile.
:::
