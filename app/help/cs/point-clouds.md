---
title: Zobrazení mračna bodů vedle modelu
summary: Otevřete laserový sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS nebo XYZ) v 3D pohledu samostatně nebo s modelem IFC, obarvěte ho, vytvořte tenký řez, měřte k jeho bodům a předejte ho kreslicí aplikaci k obtažení skutečného provedení.
keywords: mračno bodů, laserový sken, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, skutečné provedení, zaměření, registrace, řez, půdorysný řez, uchopení, měření, obtažení, sken na bim
from: d0a3e740
---

## Co uděláte

Prohlédnete si laserový sken budovy vedle jejího modelu: ověříte, zda skutečné provedení odpovídá návrhu, změříte vzdálenosti mezi naskenovanými body a vytvoříte tenký řez, ze kterého čtete stěny, dveře a sloupy.

## Postup

1. Otevřete mračno: {{ui:Otevřený}} soubor `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` nebo `.xyz`, nebo ho přetáhněte na stránku (co každý formát přináší a co exportovat ze softwaru skeneru, viz téma o formátech mračen bodů). Je-li model otevřený, mračno se připojí k modelu ve 3D pohledu; otevření mračna nikdy nezavře model ani jeho neuložené změny. Bez modelu se mračno otevře samostatně.
2. Pod panelem nástrojů se objeví lišta mračna. Ukazuje, kolik bodů se zobrazuje a kolik jich soubor obsahuje.
3. Zvolte {{ui:Obarvit podle}}: vlastní barvy souboru (pokud je skener uložil), {{ui:Výška}}, {{ui:Intenzita}}, {{ui:Třída}} (třídy LiDARu, například země, vegetace a budova), nebo {{ui:Jedna barva}}. {{ui:Velikost}} zvětší nebo zmenší body.
4. Klikněte na {{ui:Půdorys}} pod {{ui:Řez}}, aby zůstal jen tenký pás 1.2 m nad nejnižším bodem, pohled shora: stěny, otvory dveří a sloupy se čtou jako půdorys. {{ui:Zepředu}} a {{ui:Z boku}} vytvoří svislé pásy pro pohledy a řezy. Pás posunete pomocí {{ui:Ve výšce}} a změníte {{ui:Tloušťka}} (metry). {{ui:Vypnuto}} zobrazí celé mračno znovu.
5. Klikněte na {{ui:Měřit}} na panelu nástrojů. Kurzor se přichytí k bodům mračna (popisek říká „{{ui:Mračno bodů}}“), takže můžete měřit od stěny ke stěně v řezu, nebo od prvku modelu ke skenu. Roh nebo hrana modelu v dosahu má přednost.
6. S {{ui:Měřit}} › {{ui:Poloha}} dá bod mračna zeměpisnou šířku a délku ze souřadnicového systému mračna, pokud soubor nějaký uvádí.
7. {{ui:Skrýt}} mračno dočasně skryje; {{ui:Odebrat}} ho vyjme. {{ui:Zobrazit}} › {{ui:Mračno bodů}} skryje nebo zobrazí lištu.

## Kam mračno patří

{{ui:Umístit}} v liště říká, jak mračno sedí na modelu:

- **Souřadnice modelu**: číselné hodnoty mračna jsou souřadnice modelu (sken zaregistrovaný do souřadnic návrhu).
- **Mapové souřadnice**: model má mapovou konverzi (IfcMapConversion) a mračno je ve stejném zobrazení: mračno se umístí jejím prostřednictvím. Pokud oba názvy uvádějí různé systémy, stavový řádek to řekne.
- **Vystředěno na model**: když ani jedna volba neumístí mračno blízko modelu, jeho střed se položí na střed modelu a jeho nejnižší bod na podlahu modelu. Jinou volbou to lze přepsat.

Pokud soubor neuvádí své jednotky, BimCraft je čte jako metry a na liště nabídne {{ui:Jednotky}}.

## Obtažení skutečného provedení

Klikněte na {{ui:Obtáhnout v CadCraft}} a předejte mračno kreslicí aplikaci v nové kartě. Otevře se pod výkresem, kde půdorysný řez a uchopení k objektům umožní nakreslit stěny nad sken. Viz téma o mračnech bodů v CadCraftu.

## Kolik bodů

Sken může obsahovat stovky milionů bodů. BimCraft přečte každý bod jednou a pro vykreslení si ponechá rovnoměrný podíl: {{ui:Zobrazit}} na liště nastavuje, kolik (1, 2, 5 nebo 10 milionů). Více bodů vyžaduje více paměti a rychlejší grafickou kartu. Počty podle třídy LiDARu se počítají ze všech bodů v souboru.

:::note
Soubory se čtou na tomto počítači; nic se nenahrává. Čtou se LAS 1.0–1.4 a LAZ (soubory LAZ až 1 GB, během čtení držené v paměti); soubory E57 až 6 milionů bodů a 512 MB zatím (větší skeny: exportujte LAS nebo LAZ); PLY, PCD a PTX celé; textová mračna jsou ve tvaru `x y z`, s barevnými sloupci (`r g b`) a sloupci intenzity, pokud jsou přítomny.
:::

## Více skenů

Skeny pořízené z různých pozic lze zaregistrovat do jednoho rámce, zpřesnit pomocí ICP a exportovat jako jeden LAS nebo E57: viz [Registrace více skenů do jednoho](topic:register-scans).
