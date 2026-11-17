---
title: Nézetek és bejárások mentése
summary: Mentse a modell kameranézeteit névvel, térjen vissza hozzájuk, játssza le őket egymás után, és rögzítsen egy bejárást az épületen át, amelyet visszajátszhat.
keywords: nézetek, mentett nézetek, kamera, kamerák, nézőpont, jelenet, jelenetek, túra, bemutató, bejárás, bejárás (walkthrough), áthaladás, átsétálás, rögzítés, lejátszás, útvonal, animáció
from: 3af19a36
---

A {{ui:Nézetek}} gomb az eszköztáron a 3D-nézet kameráit a modell fájljában tárolja, így Ön és az, akinek elküldi, közvetlenül visszatérhet hozzájuk.

## Nézet mentése

1. Állítsa be a 3D-nézetet: forgassa, nagyítsa, rejtse el, amit nem szeretne.
2. Kattintson a {{ui:Nézetek}} gombra, írjon be egy nevet (vagy tartsa meg a felajánlottat), majd kattintson a {{ui:Nézet mentése}} gombra vagy nyomja meg az {{key:Enter}} billentyűt.

A listában már meglévő névvel mentve az a nézet frissül. Kattintson a nézet nevére, hogy visszatérjen hozzá; a kamera simán odaér.

A nyilak a sorrendet változtatják, a ceruza átnevez, a kuka töröl. Minden módosítás egy lépés, így a {{key:Ctrl+Z}} visszavonja.

## A nézetek lejátszása

A {{ui:Nézetek lejátszása}} a lista sorrendjében lép a következő nézetre, minden nézetnél egy pillanatra megállva. Az {{key:Esc}} vagy a {{ui:Leállítás}} gomb leállítja.

## Bejárás rögzítése

1. Kapcsolja be a [Séta](topic:walk) funkciót, és kezdjen el sétálni az épületben.
2. A {{ui:Nézetek}} alatt kattintson a {{ui:Bejárás rögzítése}} gombra.
3. Sétáljon a {{key:W}} {{key:A}} {{key:S}} {{key:D}} billentyűkkel, és az egérrel nézzen körbe.
4. Kattintson a {{ui:Rögzítés leállítása}} gombra. A bejárás „Walk 1” néven, a hosszával együtt mentődik.

Kattintson a bejárásra, hogy úgy játssza le, ahogyan végigment rajta. Az {{key:Esc}} megállítja.

## Bejárás renderelése videóként

Kattintson a bejárás melletti filmikonra. A videó párbeszédpanel a bejárás minden képkockáját kirajzolja az utoljára választott Renderelési beállításokkal, az itt megadott méretben, képkockasebességgel és minőségben. Mentse WebM vagy MP4 videóként, vagy ZIP-ként, képkockánként egy képpel. A képkockák ugyanannyi időt vesznek igénybe, mint a képek, ezért kezdje a {{ui:Gyors}} beállítással.

## Bejárás narrálása

Kattintson a bejárás melletti beszédbuborék ikonra. Minden elhangzott dologhoz írjon egy sort, és minden sort az időponttal kezdjen, amikor elkezdődik (`12`, `0:12` vagy `1:02.5`); az időpont nélküli sor a fölötte lévő után következik, a kimondásához szükséges idő után. Válassza ki a nyelvet; ha az ügyfél nézi, az ő nyelvén. A {{ui:Előnézet}} lejátssza a szöveget ezen a számítógépen lévő saját hangon, és feliratként mutatja; ugyanez történik, valahányszor a bejárás lejátszódik. A {{ui:Mentés a bejárással}} a narrációt a bejárással együtt az IFC-ben tartja.

A saját csatlakoztatott asszisztens megírhatja a narrációt: kérje meg, hogy nézze meg a bejárást és a mentett nézeteket, és az a megadott nyelven beállítja a sorokat, egyetlen visszavonási lépésként.

A renderelt videónak nincs saját hangja, mert a böngésző nem tudja rögzíteni a saját hangját. Mentse a feliratot (`.srt` vagy `.vtt`), és adja hozzá a videóhoz a videólejátszóban vagy szerkesztőben. A választható hangok a számítógéptől függenek; a telepített hang nélküli nyelv is kap feliratot.

## A fájlban

A nézetek és bejárások IFC-ben a projekten a `CadCraft_Views` tulajdonságkészletként vannak tárolva: sima IFC, amelyet más programok figyelmen kívül hagynak. Az első modell koordinátáiban vannak, így a modell újratöltése vagy egy másik modell hozzáadása után is illeszkednek.

:::tip
Mentett nézetből képet renderelni: lépjen a nézetre, majd kattintson a [Renderelés](topic:render) gombra.
:::
