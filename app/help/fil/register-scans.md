---
title: I-register ang maraming scan sa iisa
summary: Ilagay sa iisang frame ang mga scan na kinuha mula sa iba't ibang posisyon, sa pamamagitan ng mga piniling pares ng punto o tinype na target, pinuhin ang mga ito gamit ang ICP, i-save ang registration bilang project, at i-export ang registered cloud bilang LAS o E57.
keywords: register, registration, scans, point cloud, icp, iterative closest point, targets, point pairs, rigid transform, align, merge, e57, las, scan to bim
from: e8e270db
---

## Ano ang gagawin mo

Ilang scan ng iisang lugar (bawat isa mula sa sariling posisyon ng scanner) ay nagsisimula sa sarili nilang coordinates. I-register ang mga ito: bigyan ang bawat scan ng isang placement para nasa iisang frame ang lahat, pagkatapos i-save bilang project, at isulat ang registered cloud bilang iisang LAS o E57 file.

## Ilagay ang mga scan

1. Buksan ang dialog ({{ui:Mag-register ng scans…}} sa start panel, o {{ui:Ipakita}} › {{ui:Mag-register ng scans…}} kapag bukas na ang model). {{ui:Magdagdag ng scans…}} ay tumatanggap ng LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ na file, o i-drop ang mga ito sa dialog. Tinatanggihan ang mga scan na magkaiba ang units, na may paalala: i-convert muna ang isa.
2. Piliin ang {{ui:Scan na ililipat}} at {{ui:Ilagay laban sa}}. Ipinapakita ng larawan ang bawat scan sa frame ayon sa kasalukuyang ayos nito, na may sariling kulay: {{ui:Plan}}, {{ui:Harap}} o {{ui:Side}}; i-drag para mag-pan, gamitin ang wheel para mag-zoom.
3. **Ayon sa point pairs.** I-click ang {{ui:Pumili ng pares}}, pagkatapos ang punto sa scan na ililipat, at ang parehong lugar sa ibang scan (isang kanto, target, o paanan ng column). Gawin ito nang hindi bababa sa tatlong beses, na may mga punto na hindi nasa iisang linya at magkalayo. I-click ang {{ui:Ilagay ayon sa pares}}: nakalagay ang scan sa pamamagitan ng least-squares fit, at ipinapakita ng **Natira** kung gaano pa kalayo ang bawat pares. Ang pares na may malaking numero ay maling pagpili: alisin ito gamit ang krus at ilagay ulit.
4. **Ayon sa target.** Kung kilala ang tunay na coordinates ng isang punto (mga surveyed target), i-click ang {{ui:Pumili, saka i-type ang target}}, i-click ang punto sa scan nito, at i-type ang X, Y at Z ng target sa row. Maaaring paghaluin nang malaya ang mga pares at tinype na target.

## Pinuhin gamit ang ICP

Ang mga pares ay nagbibigay ng magaspang na placement. Inilalipat ng {{ui:Pinuhin}} ang scan hanggang nakapatong ang mga surface nito sa surface ng kabilang scan: una **point to point**, pagkatapos **point to plane**. Inililista ng table ang bawat hakbang kasama ang error at kung ilang punto ang tumugma; ipinapakita ng linya sa itaas nito ang pagbaba ng error. Tinatapos ng {{ui:Itigil}} ang takbo pagkatapos ng kasalukuyang hakbang at itinatago ang naabot nito. Ibinabalik ng {{ui:I-undo}} ang buong takbo (o ang huling placement); ibinabalik ng {{ui:I-reset}} ang scan sa file coordinates nito.

Para mabilis sa laptop, gumagana ang ICP sa bahagi ng mga punto ({{ui:Points used}}, 5,000 hanggang 60,000) at hindi pinapansin ang mga tugmang mas malayo sa {{ui:Largest match distance}} (sa default ay 5% ng laki ng scan, lumiliit habang nagse-settle). Kailangan muna nito ng magaspang na placement: sinasabi ng mga scan na halos hindi nagka-overlap na hindi sila matutugma. Ang mga surface na patag lang o tuwid lang ay hindi kayang ayusin ang posisyon sa kahabaan nila; magdagdag ng pares sa ganoong kaso.

## I-save at i-export

- {{ui:I-save ang project}} ay nagsusulat ng maliit na `.ccscans.json` file: pangalan ng bawat scan, laki nito at fingerprint ng unang 64 KB, kasama ang transform nito. Walang punto ito. Hahanapin ng {{ui:Buksan ang project…}} ang scan files gamit ang mga reference na iyon (dapat naidagdag muna ang mga file) at ibabalik ang bawat transform.
- {{ui:I-export ang LAS}} at {{ui:I-export ang E57}} ay nagsusulat ng isang file na may bawat scan sa registered place nito. Hindi kailanman ini-rewrite ang mga punto sa orihinal; inilalapat ang transform sa paglabas. Kapag naka-on ang {{ui:Basahin ang bawat punto mula sa mga file}}, binabasa ulit ang bawat file para sa bawat punto (hanggang 20 milyon bawat scan); kapag naka-off, tanging ang mga punto na nakikita sa viewer ang isinusulat.
- {{ui:Ipakita ang registered cloud}} (BimCraft) ay nagsusulat ng LAS at binubuksan ito sa 3D view sa tabi ng model, gaya ng anumang cloud.

:::note
Walang ina-upload. Ginagawa ang registration sa sariling units ng mga file at pinananatili ang millimeters: isinusulat ang LAS na may scale na akma (hanggang 0.1 mm), at ang E57 ay may doubles. Naidadala ang coordinate system sa LAS kapag iisang EPSG code ang tinukoy ng bawat scan. Sariling writer namin ang E57 writer; sinusuri ito sa pamamagitan ng pagbasa ng mga file nito pabalik gamit ang reader na ito at ang libE57Format.
:::
