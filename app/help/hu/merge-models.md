---
title: Két ember egy modellen végzett szerkesztéseinek egyesítése
summary: Engedje, hogy a git, a Fossil vagy a Mercurial objektumonként egyesítsen két szerkesztett másolatot ugyanarról az IFC-modellről, így két ember dolgozhat ugyanazon az épületen, és egyesítheti a munkáját.
keywords: egyesítés, merge, git, fossil, mercurial, verziókezelés, konfliktus, háromutas, cadcraft merge, gitattributes, ifc, globalid, csapat, két másolat, ágak
from: 50733df8
---

Két ember ugyanannak az épületnek másolatát veszi ki: az egyik a keleti szárnyon, a másik a nyugatin dolgozik, később pedig a két másolatból egy lesz. Ha különböző objektumokon dolgoztak, egy program el tudja végezni a személy helyett.

## Mi teszi ezt lehetővé

Minden fal, ajtó, szint, helyiség és tulajdonságkészlet egy IFC-fájlban olyan GlobalId-vel rendelkezik, amely sosem változik. Az egyesítés az objektumokat ezen az azonosítón keresi, nem a fájl által adott számon (`#123`), mert a számok mentéskor változnak. Az objektumhoz tartozó, saját azonosítóval nem rendelkező részeket (elhelyezések, alakzatok, mértékegységek) azok tartalma alapján hasonlítja össze.

Mindkét másolatnak ugyanolyan IFC-verziójúnak kell lennie (2x3, 4 vagy 4.3). Az egyesítés a fájlt olyannak tartja meg, amilyen, a sorrendjével és a számaival együtt, és hozzáadja, ami új, így az egyesítés git diff-je csak azt mutatja, amit az egyesítés megváltoztatott.

## Beállítás

A gitnek egy tárolóhoz két sor kell, egyszer:

```
# .gitattributes
*.ifc merge=cadcraft

# egyszer, minden számítógépen
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git nélkül futtassa a `cadcraft merge <base> <ours> <theirs>` parancsot. A Fossil és a Mercurial ugyanazt a három fájlt veszi át a saját egyesítőeszköz-beállításában. Semmi sem töltődik fel; minden a számítógépen fut.

## A szabályok

- Egy tulajdonság, amelyet csak az egyik oldalon változtattak meg, átvétetik. Ugyanaz a változtatás mindkét oldalon egyszer kerül át.
- Ugyanazt a tulajdonságot kétféleképpen módosították (ugyanazt a szintet kétféleképpen nevezték át): ez **konfliktus**. A helyi oldal marad, a jelentés pedig mindkettőt felsorolja. Nyissa meg az eredményt, és kézzel javítsa ki.
- Egy dolgokból álló lista (egy szint falai, egy készlet tulajdonságai) halmazként egyesül: megmarad, amit bármelyik oldal hozzáadott, és eltávolításra kerül, amit bármelyik oldal eltávolított. Két ember, aki ugyanabba a szintbe egyaránt falakat ad hozzá, nem kerül konfliktusba.
- Bármelyik oldalon hozzáadott objektum megmarad az alakjával és a tulajdonságaival. Az egyik oldalon eltávolítva, a másikon érintetlenül: eltávolítva. Az egyik oldalon eltávolítva, a másikon módosítva: eltávolítva, és jelentve.
- A fájl időbélyege és szerzője, valamint minden objektum tulajdonostörténete a helyi oldalé marad.

A geometria egészben egyesül: egy fal alakja az egyik oldalról jön, sosem keveredik pontonként. A tömörített IFC- és IFCX-fájlok nem egyesülnek. Egyesítés után nyissa meg az eredményt a BimCraftban, és mentés előtt nézze meg a {{ui:Problémák}} panelt.
