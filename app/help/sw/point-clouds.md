---
title: Onyesha wingu la pointi pembeni ya modeli
summary: Fungua skani ya laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS au XYZ) kwenye mwonekano wa 3D peke yake au pamoja na modeli ya IFC, ipake rangi, kata kipande chembamba ndani yake, pima hadi pointi zake, na uikabidhi kwa programu ya michoro ili kufuatilia mistari ya as-built.
keywords: wingu la pointi, skani ya laser, skani, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, kama ilivyojengwa, usajili, kipande, kukata mpango, kunasa, pima, fuatilia, skani hadi bim
from: d0a3e740
---

## Utakachofanya

Tazama skani ya laser ya jengo pembeni ya modeli yake: angalia kama kilichojengwa kinalingana na usanifu, pima kati ya pointi zilizoskaniwa, na kata kipande chembamba kusoma kuta, milango na nguzo.

## Hatua

1. Fungua wingu: {{ui:Wazi}} faili ya `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` au `.xyz`, au iangushe kwenye ukurasa (tazama mada ya miundo ya wingu la pointi kwa kile kila moja huleta, na cha kuhamisha kutoka programu ya kichanganuzi). Modeli ikiwa wazi, wingu hujiunga na modeli kwenye mwonekano wa 3D; kufungua wingu hakufungi modeli wala mabadiliko yake ambayo hayajahifadhiwa. Bila modeli, wingu hufunguka peke yake.
2. Upau wa wingu huonekana chini ya upau wa zana. Unaonyesha pointi ngapi zinaonekana na faili ina ngapi.
3. Chagua {{ui:Rangi kwa}}: rangi za faili yenyewe (kichanganuzi kikiziweka), {{ui:Kimo}}, {{ui:Ukubwa wa mwanga}}, {{ui:Darasa}} (madarasa ya LiDAR kama ardhi, mimea na jengo) au {{ui:Rangi moja}}. {{ui:Ukubwa}} hufanya pointi kuwa kubwa au ndogo.
4. Bofya {{ui:Mpango}} chini ya {{ui:Kipande}} ili kubakiza tu mkanda mwembamba wa 1.2 m juu ya pointi ya chini kabisa, ukiangalia kutoka juu: kuta, nafasi za milango na nguzo zinasomeka kama mpango wa ghorofa. {{ui:Mbele}} na {{ui:Upande}} hukata mikanda wima kwa miinuko na sehemu. Sogeza mkanda kwa {{ui:Kwa}}, na ubadilishe {{ui:Unene}} (mita). {{ui:Zima}} huonyesha wingu lote tena.
5. Bofya {{ui:Pima}} kwenye upau wa zana. Kielekezi kinanasa kwenye pointi za wingu (lebo inasema "wingu la pointi"), kwa hiyo unaweza kupima kutoka ukuta hadi ukuta kwenye kipande, au kutoka kipengele cha modeli hadi skani. Kona au ukingo wa modeli ulio karibu bado unashinda.
6. Kwa {{ui:Pima}} › {{ui:Mahali}}, pointi ya wingu inatoa latitudo na longitudo kutoka mfumo wa kuratibu wa wingu wenyewe, wakati faili inautaja.
7. {{ui:Ficha}} huficha wingu kwa muda; {{ui:Ondoa}} hulitoa kabisa. {{ui:Onyesha}} › {{ui:Wingu la pointi}} huficha au kuonyesha upau.

## Wingu linakwenda wapi

{{ui:Weka}} kwenye upau inaeleza wingu linavyolingana na modeli:

- **Viwianishi vya modeli**: namba za wingu ni za modeli yenyewe (skani iliyosajiliwa kwenye viwianishi vya usanifu).
- **Viwianishi vya ramani**: modeli ina ubadilishaji wa ramani (IfcMapConversion) na wingu liko kwenye mfumo ule ule uliopangwa: wingu huwekwa kupitia huo. Mifumo miwili ikitajwa tofauti, mstari wa hali utasema hivyo.
- **Katikati ya modeli**: wakati hakuna chaguo linaloliweka wingu karibu na modeli, katikati yake huwekwa katikati ya modeli na pointi yake ya chini kabisa kwenye sakafu ya modeli. Chagua chaguo jingine kubatilisha.

Faili isipobainisha vipimo vyake, BimCraft husoma mita na hutoa {{ui:Vipimo}} kwenye upau.

## Fuatilia mistari ya as-built

Bofya {{ui:Fuatilia katika CadCraft}} kukabidhi wingu kwa programu ya michoro kwenye kichupo kipya. Hufunguka huko chini ya mchoro, ambapo kipande cha mpango na kunasa kitu kinakuwezesha kuchora kuta juu ya skani. Tazama mada ya CadCraft kuhusu wingu la pointi.

## Pointi ngapi

Skani inaweza kuwa na pointi mamia ya mamilioni. BimCraft husoma kila pointi mara moja na kubakiza sehemu sawa ya pointi za kuchora: {{ui:Onyesha}} kwenye upau huweka idadi (milioni 1, 2, 5 au 10). Pointi zaidi zinahitaji kumbukumbu zaidi na kadi ya picha ya kasi zaidi. Idadi kwa kila darasa la LiDAR ni ya pointi zote kwenye faili.

:::note
Faili husomwa kwenye kompyuta hii; hakuna kinachopakiwa. LAS 1.0–1.4 na LAZ husomwa (faili za LAZ hadi 1 GB, zikishikiliwa kwenye kumbukumbu wakati zinasomwa); faili za E57 hadi pointi milioni 6 na 512 MB kwa sasa (skani kubwa zaidi: hamisha LAS au LAZ); PLY, PCD na PTX kikamilifu; wingu za maandishi ni `x y z`, pamoja na safu za rangi (`r g b`) na ukubwa wa mwanga zikiwepo.
:::

## Skani kadhaa

Skani zilizochukuliwa kutoka nafasi tofauti zinaweza kusajiliwa kuwa fremu moja, kuboreshwa kwa ICP na kuhamishwa kama LAS au E57 moja: tazama [Sajili skani kadhaa kuwa moja](topic:register-scans).
