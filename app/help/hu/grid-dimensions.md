---
title: Rács méretezése
summary: A szomszédos rácsvonalak távolságának és a teljes rácsméretnek a megjelenítése minden szint alaprajzán, az IFC-ben mentve, és a vonalak változásakor a rácsot követve.
keywords: rács, rácsméretek, méretezés, távolság, mezők, teljes méret, buborékok, oszlopháló, alaprajz, rajzlap
from: aaea5d08
---

## Mit fog csinálni

A rácsvonalak közötti távolságot és a rács teljes méretét helyezi el az alaprajzokon, a buborékokon túl, hogy az ezekből készült rajzlapok is tartalmazzák a méreteket. Először rácsra van szükség: lásd [Rácsok és oszlopok](topic:grids-and-columns).

## Lépések

1. Nyissa meg egy szint alaprajzát, majd kattintson a {{ui:Rács}} gombra a rácseszköz bekapcsolásához. Megjelenik a rácsbeállítások sora.
2. Jelölje be a {{ui:Méretek}} jelölőnégyzetet. A szomszédos számozott vonalak közötti távolság és a szomszédos betűs vonalak közötti távolság, valamint mindkét irányban a teljes méret megjelenik az alaprajzon.
3. Válasszon másik szintet: ugyanezek a méretek megjelennek annak alaprajzán is.
4. Mozgasson egy vonalat, nevezzen át egyet vagy adjon hozzá újat. A méretek követik a rácsot.
5. A méretek eltávolításához szüntesse meg a {{ui:Méretek}} jelölőnégyzet bejelölését.

## Megjegyzések

- Minden módosítás egy visszavonási lépés: a {{key:Mod+Z}} visszavonja.
- A beállítás a rácsszal együtt az IFC-ben van mentve, a lapokra helyezett alaprajzok pedig tartalmazzák a méreteket.
- Ha a modellben nincs módosítható rács (másik programból érkezett fájl rácsa itt nem módosítható), az állapotsor ezt írja: „Nincs módosítható rács.”
