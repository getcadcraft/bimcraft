---
title: Visszavonás az alkalmazások között a CadCraft Studio-ban
summary: A Studio-ban a BimCraft minden befejezett lépésről tájékoztatja a Studiót, így a Studio azt a lépést tudja visszavonni, amelyet utoljára abban az ablakban végzett, ahol dolgozott.
keywords: visszavonás, studio, alkalmazások között, projekt visszavonás, előzmények, napló, ablak
from: c66dd0c1
---

## Mit csinál

A CadCraft Studio-ban minden alkalmazásablak jelzi a Studiónak, amikor egy lépés befejeződik (például egy fal megrajzolása, vagy egy falkészlet elfogadása egy szkennelésből). A Studio ezeket a lépéseket abban a sorrendben tárolja, ahogyan dolgozott, és megkérheti azt az ablakot, amelyik a legutolsó lépést hozta létre, hogy vonja vissza, a saját visszavonási funkciójával. A BimCraftban a Ctrl+Z a BimCraft saját visszavonása marad, és erről is értesül a Studio.

## Tudnivalók

- A Studio csak akkor kéri egy ablaktól a visszavonást, ha annak visszavonási listája pontosan olyan, mint ahogyan a lépés hagyta. A mentés után (amely új módosításlistát indít), vagy miután a szerkesztett modellt átváltja, a BimCraft jelzi, hogy a lista megváltozott, és a Studio kihagyja ezt az ablakot. Semmi nem kényszerül ki.
- Egy alkalmazás hatásainak visszavonása egy másikban nincs megvalósítva.
- A Studio-n kívül semmi nem változik.
- A visszavonást kérő Studio-menüpont a Studio-buildhez tartozik; addig a lépések jelentésre kerülnek, de egyetlen menüpont sem használja őket.

## Tovább

- [Munka másokkal élőben](topic:work-live)
