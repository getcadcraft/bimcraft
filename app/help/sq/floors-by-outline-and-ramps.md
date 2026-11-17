---
title: Dysheme me çdo formë, hapje dhe rampa
summary: Vizato një dysheme ose pllakë sipas konturit të saj (një ballkon, një konzolë, një pjatformë), prit hapje në të dhe vizato rampa me pjatformat e tyre.
keywords: dysheme, pllakë, kontur, ballkon, konzolë, pjatformë, terracë, hapje dysheme, vrimë, shaft, boshllëk, rampë, pjerrësi, rampë e aksesueshme, rampë për karrige me rrota, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Çfarë do të bësh

Bëj dysheme që nuk ndjekin dhomat, si një ballkon përtej mureve, dhe vizato rampa midis niveleve.

## Vizato një dysheme sipas konturit të saj

1. Ndiz {{ui:Vizato}}, zgjidh nivelin, pastaj {{ui:Ndërtimi}} › {{ui:Dysheme sipas kufirit}}.
2. Te rreshti nën mjete, zgjidh llojin (pllakë betoni ose dysheme druri), përdorimin (dysheme ose pjatformë), trashësinë dhe ku është maja e saj mbi nivel (0 = në nivel me dyshemenë e katit; një vlerë negative e vendos më poshtë).
3. Kliko qoshet. Mjeti ngjitet te muret, vijat e rrjetës dhe kryqëzimet e tyre; mbaj {{key:Shift}} për ta mbajtur një skaj katror. Gjatësia e çdo skaji dhe sipërfaqja shfaqen ndërsa punon. {{key:Backspace}} heq qoshen e fundit.
4. Kliko përsëri qoshen e parë, kliko dy herë, ose shtyp {{key:Enter}} për të përfunduar.

## Prit një hapje

Kliko dyshemenë (në pamjen 3D, ose konturin e saj në plan), pastaj te {{ui:Vetitë}} kliko {{ui:Shto një hapje}} dhe kliko qoshet e hapjes brenda dyshemesë, duke e përfunduar si më sipër. {{ui:Vetitë}} e dyshemesë listojnë hapjet e saj, secilën me {{ui:Fshi}}, dhe sipërfaqen e saj pa to.

## Vizato një rampë

1. Zgjidh {{ui:Ndërtimi}} › {{ui:Rampë}}. Vendos gjerësinë e saj, dhe nëse shkon **te niveli sipër** ose **lart një ngritje** që shkruan.
2. Zgjidh si vendoset: **sipas pjerrësisë** (1:12 në fillim; rampa është aq e gjatë sa kërkon ngritja) ose **sipas gjatësisë** (klikimi yt i dytë vendos gjatësinë, dhe pjerrësia ndjek).
3. Kliko këmbën e rampës (mesin e skajit të saj të poshtëm), pastaj kliko drejtimin lart. Pamja paraprake tregon gjatësinë, segmentet dhe pjerrësinë e saj.

Një ngritje mbi 30 inç (760 mm) ndahet në segmente me një pjatformë 5 këmbësh (1525 mm) midis tyre. Këto janë vlera të zakonshme planifikimi, jo kodi yt: kontrollo rregullat aty ku ndërton. Një rampë më e pjerrët se 1:12 shënohet te {{ui:Vetitë}} e saj.

## Çfarë duhet të shohësh

- Çdo dysheme, hapje dhe rampë është një hap: {{key:Mod+Z}} e kthen mbrapsht.
- Në plan, kontura e një dysheme të vizatuar (një hapje vizatohet e kryqëzuar), dhe kontura e një rampe, segmentet, pjatformat dhe një shigjetë lart me pjerrësinë e saj.
- Vetitë për një dysheme të vizatuar (lloji, përdorimi, trashësia, maja, sipërfaqja, hapjet) dhe për një rampë (gjerësia, maja, ngritja, pjerrësia ose gjatësia); {{key:Delete}} heq secilën.
- Një rampë për në nivelin sipër ndjek atë nivel kur ndryshon lartësia e tij.
- Në skedarin IFC: një dysheme e vizatuar është një pllakë (IfcSlab, një dysheme ose një pjatformë) me hapjet e prera (IfcOpeningElement); një rampë është IfcRamp e formuar nga segmente të pjerrëta (IfcRampFlight) dhe pllaka pjatformash, me pjerrësinë dhe gjerësinë e saj.

:::note
Dysheme të vizatuara kësaj mënyre qëndrojnë aty ku i vizatove. Dysheme të bëra me {{ui:Dysheme}} ndjekin dhomat kur lëvizin muret: shih [Dhoma, dysheme, tavane dhe çati](topic:floors-and-roofs).
:::
