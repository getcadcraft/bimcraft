---
title: Muundo wa wingu la pointi: unafunguka nini, na nini cha kuhamisha
summary: Faili zipi za skani ya laser zinafunguka kwenye mwonekano wa 3D, zipi ni muundo wa kampuni ya kichanganuzi, na nini cha kuhamisha kutoka kwenye programu ya kichanganuzi ili skani ifunguke hapa.
keywords: wingu la pointi, skani ya laser, skani, muundo, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, usafirishaji, haiwezi kufungua, haisomeki
from: 1e985f01
---

## Kinachofunguka hapa

Zifungue kwa {{ui:Wazi}} au kwa kuziangusha kwenye ukurasa (tazama mada kuhusu kuonyesha wingu la pointi pembeni ya modeli):

| Muundo | Kiendelezi | Kinachosomwa |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pointi, rangi, ukubwa wa mwanga, madarasa ya LiDAR, mfumo wa kuratibu. LAZ hadi 1 GB. |
| E57 | `.e57` | Kila skani kwenye faili, kila moja ikiwekwa kwa mkao wake; rangi, au ukubwa wa mwanga faili ikikosa rangi. Picha zilizo kwenye faili zinaachwa (imeelezwa). Hadi pointi milioni 6 na 512 MB kwa sasa: hamisha skani kubwa zaidi kama LAS au LAZ. |
| PLY | `.ply` | Maandishi na binary (mpangilio wa baiti zote mbili): x y z za vertex, rangi na ukubwa wa mwanga. Nyuso zinaachwa (imeelezwa). |
| PCD | `.pcd` | Maandishi na binary: x y z, rangi zilizofungwa au tofauti, ukubwa wa mwanga. Faili za PCD zilizobanwa bado hazisomwi: zihifadhi kama binary au maandishi. |
| PTX | `.ptx` | Skani moja au zaidi, kila moja ikiwekwa na mabadiliko yake yenyewe; pointi ambazo kichanganuzi hakikupima zinaachwa. Mita. |
| PTS, XYZ | `.pts`, `.xyz` | Maandishi: x y z, pamoja na ukubwa wa mwanga na rangi safu hizo zikiwepo. |

## Faili zinazosomwa na programu ya kichanganuzi pekee

Baadhi ya faili za skani ni muundo wa kampuni ya kichanganuzi, bila maelezo yaliyochapishwa na bila msomaji wazi. BimCraft haiwezi kuzisoma, na kuzifungua huonyesha kadi inayoeleza ni nini na cha kufanya. Hamisha skani kutoka programu ya kampuni kama E57 au LAS (au PTX, PTS), kisha ufungue faili iliyohamishwa.

| Faili | Kiendelezi | Ihamishe kutoka |
|---|---|---|
| Mradi wa ReCap | `.rcp` | ReCap: fungua mradi na uuhamishe. Mradi unaelekeza tu kwenye skani zake, kwa hiyo kunakili `.rcp` peke yake hakutoi pointi. |
| Skani ya ReCap | `.rcs` | ReCap: fungua mradi ambao skani ni yake na uuhamishe. |
| Skani ya FARO | `.fls` | FARO SCENE. |
| Skani ya Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skani ya Trimble | `.tzf` | Trimble RealWorks au Trimble Business Center. |
| Skani ya Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Usafirishaji ukiomba muundo, LAS au LAZ huhifadhi kila kitu BimCraft inachoonyesha (rangi, ukubwa wa mwanga, madarasa na mfumo wa kuratibu) kwenye faili ndogo zaidi.
:::

## Kwa nini faili hizi hazisomwi

Miundo hiyo haijachapishwa, na njia pekee ya kuisoma ni maktaba ya programu ya kampuni husika, chini ya masharti yake. BimCraft husoma miundo inayoweza kusomwa kwa msimbo wake yenyewe kwenye kompyuta yako pekee, kwa hiyo skani haihitaji kutumwa popote ili kufunguliwa.
