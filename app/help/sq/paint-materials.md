---
title: Lyej materiale mbi muret, dyshemetë dhe çatitë
summary: Jepu elementeve një material si tullë, sidinë, shingjë, dru ose pllakë, mbi të gjithë elementin ose mbi një anë, i ruajtur në IFC dhe i shfaqur në imazhet e renderuara.
keywords: lyerje, material, materiale, përfundim, përfundime, teksturë, tullë, sidinë, shingjë, çati, dru, gur, pllakë, beton, stuko, bar, zhavorr, qelq, metal, anë muri, brenda, jashtë, përfundim dyshemeje, dhomë, stil sipërfaqeje
from: fbfed676
---

{{ui:Lyej}} te shiriti i veglave hap bibliotekën e materialeve mbi pamjen 3D: tullë dhe blloqe, sidinë, çati, dru, gur, pllakë, beton, stuko, tokë, qelq dhe metal.

## Lyej elemente

1. Kliko {{ui:Lyej}}.
2. Kliko një material.
3. Kliko elemente në pamjen 3D. Çdo klikim lyen elementin që klikon.

Për t'i lyer shumë njëherësh, zgjidhi ato më parë (kliko, {{key:Ctrl}}+klik, ose një [kërkim](topic:find)), pastaj kliko materialin: çdo element i zgjedhur e merr brenda një hapi.

Elementi shfaq ngjyrën e materialit në pamjen 3D menjëherë. Tekstura e tij shfaqet në një [imazh i renderuar](topic:render). {{key:Esc}} ose {{ui:Mbyll}} e përfundon lyerjen.

## Lyej vetëm një anë

Zgjidh {{ui:Vetëm ana e klikuar}}, pastaj kliko anën që dëshiron: jashtë një muri në sidinë dhe brenda në një përfundim tjetër, ose sipërfaqja e sipërme e një dyshemeje në dru me pjesën e poshtme të lënë ashtu. Pjesa tjetër e elementit mban materialin e vet.

Një anë gjendet nga drejtimet e vetë elementit, kështu që mbetet e njëjta anë kur e zhvendos ose e rrotullon elementin.

Për të lyer dyshemetë dhomë për dhomë, jepi çdo dhome dyshemenë e vet ({{ui:Vizato}} › {{ui:Dysheme}} › **Kjo dhomë**, shih [Dhomat, dyshemetë, tavanet dhe çatitë](topic:floors-and-roofs)), pastaj lyej sipërfaqen e sipërme të çdo dyshemeje.

## Hiq një material

Kliko mostrën me vija ({{ui:Pa material}}), pastaj kliko elementin. Çdo material mbi të, përfshi anët, hiqet.

## Në skedar

Lyerja ndryshon IFC-në (një hap për secilin; {{key:Ctrl+Z}} e zhbën) dhe mbetet IFC e thjeshtë:

- çdo element i lyer merr grupin e vetive `CadCraft_Render`, që emëron materialin e tij, dhe një veti për çdo anë të lyer;
- trupi i tij merr një stil sipërfaqeje me ngjyrën e materialit, që programet e tjera BIM ta shfaqin ngjyrën. Në IFC4 stili emëron edhe teksturën.

Kur BimCraft ripunon një mur që ke lyer (p.sh. zgjat skajin e tij), muri mban materialin dhe ngjyrën e vet, në BimCraft, në imazhe dhe në programet e tjera.

:::note
Teksturat vizatohen nga vetë BimCraft: punojnë pa lidhje dhe janë falas për çdo përdorim (CC0). Teksturat e tua me imazh nuk janë ndërtuar ende.
:::

## Tekstura në pamjen 3D

Një mur tullë i lyer shfaq tullat e tij, një dysheme druri shfaq dërrasat e veta, në madhësinë e tyre reale, sapo të jetë lyer. Hiq shenjën te **Shfaq teksturat në pamjen 3D** në paletën Lyej për të parë ngjyra të thjeshta në vend të tyre (një model shumë i madh i fik vetë dhe e thotë këtë). Ngjyra sipas vetisë shfaq gjithmonë ngjyrat e veta. Teksturat vizatohen nga programi, kështu që asgjë nuk shkarkohet, dhe renderimet dhe skedari glTF i mbajnë ato gjithsesi.
