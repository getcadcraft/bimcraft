---
title: Barvanje materialov na stene, tla in strehe
summary: Elementom dodelite material, kot so opeka, obloga, skodle, les ali ploščice, za ves element ali za eno stran; shranjen je v IFC in prikazan na upodobljenih slikah.
keywords: barvanje, barvaj, material, materiali, zaključek, zaključki, tekstura, opeka, obloga, skodle, kritina, les, kamen, ploščica, beton, omet, trava, prod, steklo, kovina, stran stene, notranja, zunanja, zaključek tal, prostor, slog površine
from: fbfed676
---

{{ui:Barvaj}} na orodni vrstici odpre knjižnico materialov čez pogled 3D: opeka in bloki, obloge, kritine, les, kamen, ploščice, beton, omet, teren, steklo in kovina.

## Barvanje elementov

1. Kliknite {{ui:Barvaj}}.
2. Kliknite material.
3. Kliknite elemente v pogledu 3D. Vsak klik pobarva element, na katerega kliknete.

Za barvanje več naenkrat jih najprej izberite (s klikom, {{key:Ctrl}}+klikom ali [iskanjem](topic:find)), nato kliknite material: vsak izbrani element ga prevzame v enem koraku.

Element takoj prikaže barvo materiala v pogledu 3D. Njegova tekstura se prikaže v [upodobljeni sliki](topic:render). {{key:Esc}} ali {{ui:Zapri}} konča barvanje.

## Barvanje ene strani

Izberite {{ui:Samo kliknjena stran}}, nato kliknite stran, ki jo želite: zunanjost stene v oblogi in njeno notranjost v drugem zaključku, zgornjo stran tal v lesu, spodnja stran pa ostane, kot je. Preostali del elementa obdrži svoj material.

Stran je določena iz lastnih smeri elementa, zato ostane ista stran, ko element premaknete ali zasukate.

Za barvanje tal sobo za sobo dajte vsaki sobi lastna tla ({{ui:Risanje}} › {{ui:Tla}} › **Ta prostor**, glejte [Prostori, tla, stropi in strehe](topic:floors-and-roofs)), nato pobarvajte zgornjo stran vsakih tal.

## Odstranitev materiala

Kliknite črtasti vzorec ({{ui:Brez materiala}}), nato kliknite element. Vsak material na njem, vključno s stranmi, odide.

## V datoteki

Barvanje spremeni IFC (vsak korak posebej, {{key:Ctrl+Z}} ga razveljavi) in ostane navaden IFC:

- vsak pobarvan element dobi nabor lastnosti `CadCraft_Render`, ki navaja njegov material, in po eno lastnost za vsako pobarvano stran;
- njegovo telo dobi slog površine z barvo materiala, tako da jo drugi programi BIM prikažejo. V IFC4 slog navaja tudi teksturo.

Ko BimCraft preoblikuje steno, ki ste jo pobarvali (na primer premaknete njen konec), stena ohrani svoj material in svojo barvo, v BimCraftu, na slikah in v drugih programih.

:::note
Teksture riše sam BimCraft: delujejo brez povezave in so brezplačne za katero koli uporabo (CC0). Vaše lastne slikovne teksture še niso izdelane.
:::

## Teksture v pogledu 3D

Pobarvana opečna stena pokaže svoje opeke, lesena tla svoje deske, v njihovi pravi velikosti, takoj ko je barva nanešena. Odkljukajte **Pokaži teksture v pogledu 3D** v paleti Barvaj, če želite videti ravne barve (zelo velik model jih sam izklopi in to pove). Barvanje po lastnosti vedno prikaže svoje barve. Teksture riše program, zato se ničesar ne prenaša, upodobitve in datoteka glTF pa jih vsebujejo ne glede na to.
