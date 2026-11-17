---
title: A fájlja által használt bővítmények
summary: A BimCraft az IFC-fájlban jelöli, mely bővítmények írtak bele, és megnyitáskor felajánlja a hiányzókat.
keywords: bővítmény, addon, ezt a fájlt használja, hiányzó bővítmény, trusscraft, könyvtár, rögzítés, cadcraft_addons
from: 9d9500d8
---

## Mit tesz

Ha egy bővítmény ír a modellbe (például egy rácsos tartó vagy egy csőszakasz), a BimCraft rögzíti a bővítményt és annak verzióját az IFC-projekten, a CadCraft_AddOns tulajdonságkészletben. A rögzítés ugyanabban a visszavonási lépésben íródik, mint a bővítmény saját változása, így a változás visszavonásakor a rögzítés is visszakerül. Más programok figyelmen kívül hagyják a tulajdonságkészletet; amit a bővítmény rajzolt, mindkét esetben a fájlban marad.

## Lépések

1. Nyisson meg egy IFC-fájlt, amelynek létrehozásában bővítmény segédkezett.
2. Ha egy általa használt bővítmény nincs bekapcsolva, a modell fölötti megjegyzés megmondja, melyek azok, és van egy gomb, amellyel a Könyvtár-fiókjából hozzáadhatja őket.
3. Adja hozzá őket, vagy zárja be a megjegyzést. A modell mindkét esetben megnyílik.

## Gyakori hibák

- **Nem jelenik meg megjegyzés.** Ebben a lapon nincs bejelentkezve a fiókjába, vagy a fájl nem tartalmaz rögzítést (rögzítések előtt készült, vagy más program készítette).
- **A változáslistán „undefined” látszik.** Javítva: a címkék most már a bővítmény nevét mutatják.

## Tovább

- [Berendezések és bútorok elhelyezése a könyvtárból](topic:place-from-library)
