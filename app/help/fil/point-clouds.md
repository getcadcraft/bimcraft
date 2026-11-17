---
title: Ipakita ang point cloud sa tabi ng model
summary: Buksan ang laser scan (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) sa 3D view nang mag-isa o kasama ang IFC model, kulayan ito, gupitin ng manipis na slice, sukatin hanggang sa mga punto nito, at ipasa sa drafting app para masubaybayan ang mga as-built na linya.
keywords: point cloud, laser scan, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, survey, registration, slice, plan cut, snap, sukatin, subaybayan, scan to bim
from: d0a3e740
---

## Ano ang gagawin mo

Tingnan ang laser scan ng isang gusali sa tabi ng model nito: suriin kung tugma ang naitayo sa disenyo, sukatin ang distansya sa pagitan ng mga naka-scan na punto, at gupitin ng manipis na slice para basahin ang mga pader, pinto at column.

## Mga hakbang

1. Buksan ang cloud: {{ui:Bukas}} ng file na `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz`, o i-drop ito sa pahina (tingnan ang topic tungkol sa mga format ng point cloud para sa dala ng bawat isa, at kung ano ang i-export mula sa sariling software ng scanner). Kapag may bukas na model, sasama ang cloud sa model sa 3D view; hindi kailanman isinasara ng pagbubukas ng cloud ang model o ang mga hindi pa na-save nitong pagbabago. Kung walang model, magbubukas ang cloud nang mag-isa.
2. Lalabas ang cloud bar sa ilalim ng toolbar. Sinasabi nito kung ilang punto ang nakikita at ilan ang nasa file.
3. Piliin ang {{ui:Kulayan ayon sa}}: ang sariling kulay ng file (kapag nakaimbak ito ng scanner), {{ui:Taas}}, {{ui:Intensity}}, {{ui:Class}} (mga LiDAR class gaya ng ground, vegetation at building) o {{ui:Isang kulay}}. Pinalalaki o pinaliliit ng {{ui:Laki}} ang mga punto.
4. I-click ang {{ui:Plan}} sa ilalim ng {{ui:Slice}} para panatilihin lang ang manipis na banda na 1.2 m sa itaas ng pinakamababang punto, tiningnan mula sa itaas: lalabas na parang floor plan ang mga pader, bukas ng pinto at column. Ang {{ui:Harap}} at {{ui:Side}} ay pumuputol ng patayong banda para sa elevation at section. Ilipat ang banda gamit ang {{ui:Sa}}, at baguhin ang {{ui:Thickness}} (meters). Ibinabalik ng {{ui:Naka-off}} ang buong cloud.
5. I-click ang {{ui:Measure}} sa toolbar. Dumidikit ang pointer sa mga punto ng cloud (sinasabi ng label na "point cloud"), kaya makakasukat ka mula pader hanggang pader sa slice, o mula sa elemento ng model hanggang sa scan. Nananaig pa rin ang kanto o gilid ng model na nasa abot.
6. Gamit ang {{ui:Measure}} › {{ui:Lokasyon}}, ang isang punto ng cloud ay nagbibigay ng latitude at longitude mula sa sariling coordinate system ng cloud, kapag may pangalan nito ang file.
7. Pansamantalang itinatago ng {{ui:Itago}} ang cloud; tinatanggal ito ng {{ui:Alisin}}. Ang {{ui:Ipakita}} › {{ui:Point cloud}} ay nagtatago o nagpapakita ng bar.

## Saan napupunta ang cloud

{{ui:Ilagay}} sa bar ang nagsasabi kung paano nakahanay ang cloud sa model:

- **Mga model coordinate**: ang mga numero ng cloud ay sa model mismo (scan na naka-register sa coordinates ng disenyo).
- **Mga map coordinate**: may map conversion ang model (IfcMapConversion) at nasa parehong projected system ang cloud: nailalagay ang cloud sa pamamagitan nito. Kung magkaiba ang pangalan ng dalawang system, sinasabi ito ng status line.
- **Nakasentro sa model**: kapag wala sa dalawa ang naglalagay ng cloud malapit sa model, ang gitna nito ay inilalagay sa gitna ng model at ang pinakamababang punto nito sa sahig ng model. Pumili ng ibang opsyon para i-override ito.

Kapag hindi sinasabi ng file ang units nito, binabasa ng BimCraft ang meters at nag-aalok ng {{ui:Units}} sa bar.

## Subaybayan ang as-built na mga linya

I-click ang {{ui:I-trace sa CadCraft}} para ipasa ang cloud sa drafting app sa bagong tab. Bubukas ito roon sa ilalim ng drawing, kung saan pinapayagan ka ng plan slice at object snap na gumuhit ng mga pader sa ibabaw ng scan. Tingnan ang CadCraft topic tungkol sa point clouds.

## Ilang punto

Ang scan ay maaaring maglaman ng daan-daang milyong punto. Binabasa ng BimCraft ang bawat punto nang minsan at nagtatabi ng pantay na bahagi nito para iguhit: itinatakda ng {{ui:Ipakita}} sa bar kung ilan (1, 2, 5 o 10 milyon). Mas maraming punto ay nangangailangan ng mas maraming memory at mas mabilis na graphics card. Ang bilang bawat LiDAR class ay mula sa bawat punto sa file.

:::note
Binabasa ang mga file sa computer na ito; walang ina-upload. Binabasa ang LAS 1.0–1.4 at LAZ (mga LAZ file hanggang 1 GB, hawak sa memory habang binabasa); mga E57 file hanggang 6 milyong punto at 512 MB sa ngayon (mas malalaking scan: i-export bilang LAS o LAZ); PLY, PCD at PTX nang buo; ang text cloud ay `x y z`, na may kulay (`r g b`) at intensity na mga column kapag nandoon ang mga ito.
:::

## Maraming scan

Ang mga scan na kinuha mula sa iba't ibang posisyon ay maaaring i-register sa iisang frame, pinuhin gamit ang ICP at i-export bilang iisang LAS o E57: tingnan ang [I-register ang maraming scan sa iisa](topic:register-scans).
