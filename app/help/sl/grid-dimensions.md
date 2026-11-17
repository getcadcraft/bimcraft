---
title: Kotiranje mreže
summary: Prikaz razmika med sosednjimi osmi mreže in skupne velikosti mreže na tlorisu vsake etaže, shranjeno v IFC in sledi mreži, ko se osi spremenijo.
keywords: mreža, dimenzije mreže, kota, razmik, polja, skupna velikost, mehurčki, stebrna mreža, tloris, list
from: aaea5d08
---

## Kaj boste naredili

Na tlorise, za mehurčki, postavite razmik med osmi mreže in skupno velikost mreže, da listi, narejeni iz njih, nosijo kote. Najprej potrebujete mrežo: glejte [Mreže in stebri](topic:grids-and-columns).

## Koraki

1. Prikažite tloris etaže in kliknite {{ui:Grid}}, da vklopite orodje za mrežo. Prikaže se vrstica možnosti mreže.
2. Označite {{ui:Dimensions}}. Razmik med sosednjimi oštevilčenimi osmi in med sosednjimi črkovanimi osmi ter skupna velikost v obeh smereh se narišejo na tlorisu.
3. Izberite drugo etažo: enake kote se prikažejo na njenem tlorisu.
4. Premaknite os, preimenujte jo ali dodajte novo. Kote sledijo mreži.
5. Odznačite {{ui:Dimensions}}, da jih spet odstranite.

## Opombe

- Vsaka sprememba je en korak razveljavitve: {{key:Mod+Z}} jo razveljavi.
- Nastavitev se shrani v IFC skupaj z mrežo, tloris, postavljen na liste, pa nosi kote.
- Če model nima mreže, ki bi jo lahko spremenili (mreža, ki je prišla v datoteki iz drugega programa, tukaj ni spremenljiva), vrstica stanja pravi „Ni mreže za spremembo.“
