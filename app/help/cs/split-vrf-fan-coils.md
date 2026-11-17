---
title: Split, VRF a fan coil jednotky
summary: Umístěte nástěnné, kazetové a kanálové vnitřní jednotky, venkovní jednotky split a VRF, spojky refnet a fan coily se 2 nebo 4 trubkami, každou s přípojkami chladiva, vody, kondenzátu a vzduchotechniky, a nakreslete mezi nimi spojení chladiva dimenzovaná podle tabulky, kterou můžete změnit.
keywords: split, mini split, minisplit, multi split, vrf, vrv, proměnný průtok chladiva, tepelné čerpadlo, vnitřní jednotka, venkovní jednotka, kondenzační jednotka, nástěnná, vysoká stěna, kazetová, kanálová, skrytá, fan coil, fcu, 2trubková, 4trubková, refnet, odbočná spojka, y spojka, spojení chladiva, lineset, chladivo, kapalinové vedení, plynové vedení, sací vedení, acr, měď, kondenzát, hvac, vzt, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Co provedete

Umístěte jednotky systému split, multi-split nebo VRF a jeho fan coily do modelu a pak je spojte spojením chladiva: kapalinovým a plynovým vedením z měděné trubky ACR, připevněným k přípojkám jednotek. Jednotky fungují jako každé jiné zařízení s přípojkami v [MEP zařízení s přípojkami](topic:mep-equipment): stejná lišta, Vlastnosti, přípojky a [připojení](topic:mep-connections).

:::note
Toto je pomůcka pro kreslení a koordinaci. Jednotky jsou obecné tvary dimenzované podle hodnot, které zadáte; nejsou to výrobky žádného výrobce. Jejich velikosti trubek pocházejí z tabulky **typických příkladových hodnot** pro zařízení R410A a R32, ne od výrobce: skutečné velikosti určuje montážní návod výrobce jednotky a delší trasy nebo velké výškové rozdíly je změní. Změňte tabulku nebo zadejte velikosti tak, aby odpovídaly vašim jednotkám.
:::

## Umístění jednotky

1. Zapněte {{ui:Kreslení}}, otevřete {{ui:Sestavení}} a zvolte {{ui:Zařízení}}.
2. Zvolte druh a nastavte jeho hodnoty:

| Druh | Nastavíte | Jeho přípojky |
|---|---|---|
| Split vnitřní jednotka, nástěnná | výkon, kapalinové a plynové vedení, délku, hloubku, výšku, velikost kondenzátu | chladivo kapalina a plyn, odtok kondenzátu (na pravém konci, u stěny) |
| Split vnitřní jednotka, kazetová | výkon, kapalinové a plynové vedení, panel, tělo, výšku, velikost kondenzátu | chladivo kapalina a plyn, odtok kondenzátu (na jedné straně, u horní hrany) |
| Split vnitřní jednotka, kanálová | výkon, kapalinové a plynové vedení, délku, šířku, výšku, přívodní a odvodní otvory, velikost kondenzátu | výstup přívodního potrubí, vstup odvodního potrubí, chladivo kapalina a plyn, odtok kondenzátu |
| Split venkovní jednotka | výkon, kapalinové a plynové vedení, šířku, hloubku, výšku | chladivo kapalina a plyn (na pravé straně) |
| Venkovní jednotka VRF | výkon, kapalinové a plynové vedení, šířku, hloubku, výšku | chladivo kapalina a plyn (vpředu, nízko) |
| Spojka refnet | kapalinové nebo plynové vedení, zátěž každé větve, trubku na každém konci | vstup, větev A, větev B |
| Fan coil jednotka | 2 nebo 4 trubky, délku, šířku, výšku, přívodní a odvodní otvory, trubku a systém cívky, topnou trubku, velikost kondenzátu | výstup přívodního potrubí, vstup odvodního potrubí, vstup a výstup cívky, vstup a výstup topení (4 trubky), odtok kondenzátu |

3. Nastavte **Ve výšce**: výšku základny jednotky nad úrovní. Základna nástěnné jednotky je její spodní strana (často 2100 mm); u kazety je to její líc ve stropě; u spojky refnet je to výška osy její trubky.
4. Klikněte, kam jednotka patří ({{key:R}} ji otočí o 90°).

**Výkon** je jmenovitý chladicí výkon jednotky v kW, vedle něj v Btu/h. Pokud necháte **Kapalinové vedení** a **Plynové vedení** na **Z tabulky**, přípojky jednotky převezmou velikosti z tabulky pro tento výkon; zvolte velikost trubky, chcete-li použít vlastní. Vstup spojky refnet je dimenzován pro obě větve dohromady, každá větev pro svou vlastní zátěž.

Přípojky chladiva fungují oběma směry (tepelné čerpadlo pracuje v obou směrech). Odtok kondenzátu je velikost trubky jako každý jiný odtok.

## Nakreslení spojení chladiva

1. Vyberte dva prvky (podržte {{key:Shift}} a klikněte na druhý): venkovní jednotku a vnitřní jednotku (jednoduchý split), nebo venkovní jednotku a spojku refnet, spojku refnet a vnitřní jednotku, nebo dvě spojky refnet (VRF).
2. Otevřete {{ui:Sestavení}} a zvolte {{ui:Spojení chladiva}}.

BimCraft nakreslí kapalinová a plynová vedení mezi jejich volnými přípojkami, z každé přípojky ven a nahoru do společné výšky, z měděné trubky ACR (žíhaná cívka do 1-5/8 in, tažená trubka nad tím), jako jeden krok {{ui:Zpět}}. Spojka refnet přijímá jen své vlastní vedení: do svého vstupu z venkovní strany a z větve směrem k vnitřním jednotkám. Každé vedení převezme velikost svého koncového úseku (vnitřní jednotky nebo vstupu spojky refnet); pokud má přípojka na druhém konci jinou velikost, {{ui:Zkontrolovat připojení}} ji vypíše: tam patří redukce. Dvě vnitřní jednotky potřebují mezi sebou spojku refnet.

Vedení pak přesouvejte jako každou jinou potrubní trasu; jejich konce zůstanou na přípojkách. Vedení mezi podlažími kreslete pomocí {{ui:Potrubí}}: potrubí začaté na přípojce chladiva převezme její systém, měď ACR a velikost.

## Změna tabulky spojení chladiva

Otevřete {{ui:Sestavení}} a zvolte {{ui:Velikosti spojení}}. Každý řádek říká: až do tohoto výkonu (kW), tuto kapalinovou trubku a tuto plynovou trubku.

| Až do | Kapalina | Plyn |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Toto jsou výchozí, typické hodnoty. Změňte řádek, přidejte nebo odeberte řádky a zvolte {{ui:Uložit}}: tabulka se uloží do modelu, takže ji používá každý, kdo pracuje se souborem, a {{ui:Zpět}} ji vrátí zpět. {{ui:Použít typické hodnoty}} vrátí výchozí tabulku. Již umístěné prvky si ponechají své přípojky, dokud je nezměníte.

## V souboru IFC

Vnitřní a venkovní jednotky systémů split a VRF jsou IfcUnitaryEquipment typu SPLITSYSTEM, přičemž typ objektu říká, která to je ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fan coil je IfcUnitaryEquipment typu AIRHANDLER s typem objektu "Fan coil unit": IFC4 nemá typ pro fan coil, a ventilátor, cívka a filtr pro jednu místnost přesně popisuje AIRHANDLER. Spojka refnet je IfcPipeFitting typu JUNCTION ("Refnet joint"). Soubory IFC2X3 dostanou IfcEnergyConversionDevice a IfcFlowFitting se shodnými typy.

Přípojky a vedení chladiva jsou v systémech REFRIGERATION (jeden pro kapalinová vedení, jeden pro plynová), kondenzát v systému DRAINAGE. Vedení ACR jsou pojmenována podle vnějšího průměru. Tabulka spojení chladiva je sada vlastností CadCraft_HvacLineSets v projektu.

Viz též [MEP zařízení s přípojkami](topic:mep-equipment), [Připojení potrubí a vzduchotechniky k zařízení](topic:mep-connections) a [Potrubí a vzduchotechnika](topic:pipes-and-ducts).
