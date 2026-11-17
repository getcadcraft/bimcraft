---
title: Zobrazenie mračna bodov vedľa modelu
summary: Otvorte laserový sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS alebo XYZ) v 3D zobrazení samostatne alebo s modelom IFC, sfarbite ho, vyrežte tenký rez, merajte na jeho body a odovzdajte ho kresliacemu programu na obkreslenie skutočného stavu.
keywords: mračno bodov, laserový sken, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, skutočný stav, as-built, as built, zameranie, prerez, rez pôdorysu, uchopenie, meranie, obkreslenie, sken na bim
from: d0a3e740
---

## Čo urobíte

Pozriete si laserový sken budovy vedľa jej modelu: skontrolujete, či sa postavené zhoduje s návrhom, odmeriate vzdialenosti medzi naskenovanými bodmi a vyrežete tenký rez, z ktorého čítate steny, dvere a stĺpy.

## Postup

1. Otvorte mračno: {{ui:Open}} súbor `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` alebo `.xyz`, alebo ho presuňte na stránku (pozri tému o formátoch mračien bodov, kde je uvedené, čo každý prináša a čo exportovať zo softvéru skenera). Ak je model otvorený, mračno sa pridá k modelu v 3D zobrazení; otvorenie mračna nikdy nezatvorí model ani jeho neuložené zmeny. Bez modelu sa mračno otvorí samostatne.
2. Pod panelom nástrojov sa objaví lišta mračna. Zobrazuje, koľko bodov sa ukazuje a koľko ich má súbor.
3. Zvoľte {{ui:Color by}}: vlastné farby súboru (ak ich skener uložil), {{ui:Height}}, {{ui:Intensity}}, {{ui:Class}} (triedy LiDAR, napríklad zem, vegetácia a budova) alebo {{ui:One color}}. {{ui:Size}} zväčší alebo zmenší body.
4. Kliknite na {{ui:Plan}} pod {{ui:Slice}}, aby ostal iba tenký pás 1.2 m nad najnižším bodom, pozerané zhora: steny, otvory dverí a stĺpy sa čítajú ako pôdorys. {{ui:Front}} a {{ui:Side}} vyrežú zvislé pásy pre pohľady a rezy. Pás posuňte pomocou {{ui:At}} a zmeňte {{ui:Thickness}} (v metroch). {{ui:Off}} zobrazí celé mračno znova.
5. Kliknite na {{ui:Measure}} na paneli nástrojov. Kurzor sa prichytáva k bodom mračna (štítok hovorí „Mračno bodov“), takže môžete merať od steny k stene v reze alebo od prvku modelu ku skenu. Roh alebo hrana modelu v dosahu má stále prednosť.
6. S {{ui:Measure}} › {{ui:Location}} dá bod mračna zemepisnú šírku a dĺžku z vlastného súradnicového systému mračna, ak súbor nejaký uvádza.
7. {{ui:Hide}} na chvíľu skryje mračno; {{ui:Remove}} ho odstráni. {{ui:Show}} › {{ui:Point cloud}} skryje alebo zobrazí lištu.

## Kam mračno patrí

{{ui:Place}} na lište hovorí, ako mračno zodpovedá modelu:

- **Súradnice modelu**: čísla mračna sú vlastné čísla modelu (sken zaregistrovaný do súradníc návrhu).
- **Mapové súradnice**: model má mapovú konverziu (IfcMapConversion) a mračno je v rovnakom projektovanom systéme: mračno sa umiestni cez ňu. Ak obe uvádzajú iné systémy, stavový riadok to oznámi.
- **Vycentrované na model**: keď ani jedna možnosť neumiestni mračno blízko modelu, jeho stred pripadne na stred modelu a jeho najnižší bod na podlahu modelu. Ak to chcete prepísať, vyberte inú možnosť.

Ak súbor neuvádza svoje jednotky, BimCraft číta metre a na lište ponúkne {{ui:Units}}.

## Obkreslenie skutočného stavu

Kliknite na {{ui:Obkresliť v CadCraft}}, aby ste mračno odovzdali kresliacemu programu na novej karte. Otvorí sa tam pod výkresom, kde rez pôdorysu a uchopenie objektov umožnia kresliť steny nad skenom. Pozri tému o mračnách bodov v CadCraft.

## Koľko bodov

Sken môže mať stovky miliónov bodov. BimCraft prečíta každý bod raz a ponechá rovnomerný podiel na vykreslenie: {{ui:Show}} na lište nastaví, koľko ich bude (1, 2, 5 alebo 10 miliónov). Viac bodov potrebuje viac pamäte a rýchlejšiu grafickú kartu. Počty podľa triedy LiDAR sa počítajú zo všetkých bodov v súbore.

:::note
Súbory sa čítajú na tomto počítači; nič sa nenahráva. Čítajú sa LAS 1.0–1.4 a LAZ (súbory LAZ až do 1 GB, počas čítania držané v pamäti); súbory E57 zatiaľ až do 6 miliónov bodov a 512 MB (väčšie skeny: exportujte LAS alebo LAZ); PLY, PCD a PTX celé; textové mračná sú `x y z`, s farebnými (`r g b`) a intenzitnými stĺpcami, keď sú prítomné.
:::

## Viacero skenov

Skeny zachytené z rôznych pozícií sa dajú zaregistrovať do jedného rámca, spresniť pomocou ICP a exportovať ako jeden LAS alebo E57: pozri [Zaregistrovanie viacerých skenov do jedného](topic:register-scans).
