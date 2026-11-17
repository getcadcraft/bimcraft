---
title: Stěny a dveře z mobilního nebo laserového skenu
summary: Převeďte sken místnosti na navržené stěny, dveře a místnosti, které přijmete jednu po druhé.
keywords: sken, mobilní sken, lidar, mračno bodů, stěny ze skenu, dveře ze skenu, sken místnosti, ply, e57, las, obj, navrhnout
from: a4ef0f10
---

## Co to dělá

Když je otevřený sken (mračno bodů jako PLY, E57 nebo LAS, nebo síť jako OBJ), BimCraft jej řeže ve výšce půdorysu, natočí jej kolmo k budově a hledá dlouhé, tenké řady bodů: to jsou stěny. Mezera o šířce dveří mezi dvěma řadami na jedné přímce se stane jednou stěnou s dveřmi. Stěny, které uzavírají prostor, vytvoří místnost.

Dokud je nepřijmete, nic se nekreslí. Stěny a dveře přijdou jako seznam návrhů (jsou to změny v režimu Návrh): ponechte ty správné, ostatní odmítněte, a vše, co ponecháte, se nakreslí v jednom kroku zpět. Místnosti se objeví samy.

## Co kontroluje

Stěny, které se neuzavírají, úseky stěn kratší, než je stěna tlustá, a mezera velikosti dveří bez stěny kolem se hlásí jako Problémy s polohou, abyste se na sken v tom místě mohli podívat.

## Neověřeno, dokud nezkontrolujete

Stěny, dveře a místnosti, které přijmete ze skenu, jsou označeny jako neověřené: přerušovaný rámeček a "?" v půdorysu, dokud je neoznačíte jako zkontrolované. Viz [Označení prvků jako zkontrolovaných nebo ověřených na stavbě](topic:verification).

## Co nedokáže

- Najde stěny vedené ve dvou kolmých směrech. Šikmá nebo zakřivená stěna se nenajde.
- Jedno podlaží najednou. Okna se nenajdou (okno je mezera, jen když řez prochází ve výšce parapetu).
- Zkoušelo se na vygenerovaných skenech místností a sítích, zatím ne na skenech z reálného telefonu. Jak si vede na skutečném skenu (driftování při dlouhé chůzi, nábytek u stěn, sklo, otevřené dveře), se neví; ladění na skutečných skenech je další krok. Každý návrh před přijetím zkontrolujte proti skenu.
