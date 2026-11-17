---
title: Egy modell közös szerkesztése a Live TeamWork funkcióval
summary: Mi változik a BimCraftban, amikor a CadCraft Studióból indított Live TeamWork munkamenetben dolgozik: mindenki szerkesztései ugyanazon az IFC-modellen, a saját visszavonás, és csatlakozás böngészőből ugyanazon a hálózaton.
keywords: live, live teamwork, studio live, együtt, közös munka, munkamenet, live megosztás, csatlakozás, ifc, tulajdonságok, átnevezés, kurzor, mutató, egymás látása, nevek, szín, kijelölés, visszavonás, házigazda
from: 32061b72
---

## Mit fog megtanulni

Mi történik egy IFC-modellel, amikor többen egyszerre szerkesztik. A CadCraft Studio indítja és csatlakoztatja a Live TeamWork munkamenetet (Megosztás, Csatlakozás); ez az oldal magáról a modellről szól.

## Mindenki egyszerre szerkeszt

A házigazda modellje eljut mindenkihez, aki csatlakozik. Nevezze át az elemeket, módosítsa a tulajdonságértékeiket, helyezzen el, cseréljen ki vagy távolítson el könyvtári elemeket és elemeket a megszokott módon. Az Ön szerkesztései azonnal megjelennek; mások szerkesztései egy pillanattal azután, hogy elvégezték őket. Ha egy szerkesztés megváltoztatja, amit lát (elem elhelyezése vagy eltávolítása), a BimCraft újrarajzolja a modellt, és megtartja a nézetét.

- **Két személy változtat ugyanazon az elemen:** a későbbi módosítás nyer a modell ugyanazon sorában. Több elem által megosztott tulajdonságkészletet a szerkesztett elemhez másolunk, ahogy mindig, így a többi elem megtartja az értékeit.
- **Egy elem, amelyet valaki éppen eltávolított,** már nem szerkeszthető: az Ön szerkesztését visszavonjuk, és az állapotsor megmondja, miért.
- Minden személy új sorai a modellben saját számokat kapnak, így két ember soha nem kap ugyanolyan számot.

## Látják egymást

A munkamenetben mindenkinek saját színe van. A 3D nézetben mindenki mutatóját nyíl jelzi a saját színében, a nevével mellette, azon az elemen, amelyre mutat, és szaggatott keret a saját színében minden általa kijelölt elem körül.

A mutatók, nevek és kijelölések csak a munkamenetre vonatkoznak: soha nem mentődnek a fájlba, és soha nem kerülnek senki visszavonási előzményei közé. Simán csúsznak oda, ahol az adott személy tart, így lassú kapcsolaton is simák maradnak.

## A visszavonás a saját munkáját vonja vissza

A {{ui:Visszavonás}} visszavonja az Ön utolsó szerkesztését, mások szerkesztéseit érintetlenül hagyja. Ha valaki azóta ugyanazt módosította, semmi sem vonódik vissza, és az állapotsor megmondja, ki.

## Csatlakozás böngészőből

Egy Studio nélküli munkatárs a házigazda kódja alatt megjelenő képet telefonnal, táblagéppel vagy számítógéppel is beolvashatja, ha ugyanazon a hálózaton van. A BimCraft böngészőben nyílik meg, és amint a házigazda beengedi, megnyitja a házigazda modelljét. A meghívó hivatkozással más hálózatról is csatlakozhat valaki: a házigazdának az alkalmazáshoz Team Cloud Plan licencelt hely kell, mindenki más díjmentesen csatlakozik, a hivatkozás pedig csak addig működik, amíg a házigazda munkamenete nyitva van.

## A munkamenet vége

Csak a házigazda menti a modellt. Mindenki más egy nem mentett másolatot tart meg: ha meg szeretné tartani, mentse IFC-ként.

:::note
Csak a jelenetben lévő első modell van megosztva. Munkamenet közben másik fájl megnyitása a munkamenetet abban az ablakban hagyja.
:::
