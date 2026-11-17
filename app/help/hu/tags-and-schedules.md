---
title: Címkék és címkék szerinti kimutatások
summary: Határozzon meg saját címkéket (név, típus, megengedett értékek, osztályok), címkézzen sok elemet egyszerre, és készítsen kimutatásokat, amelyek oszlopai, szűrői és csoportjai a címkéket olvassák. A címkék az IFC-ben maradnak meg.
keywords: címkék, címke, címkézés, egyéni tulajdonságok, paraméterek, megosztott paraméterek, tulajdonságkészlet, pset, kimutatás, szűrő, csoportosítás, felületkezelés, tűzállóság, tömeges szerkesztés, csv
from: 9cc7c90d
---

## Mit fog csinálni

A címke saját tulajdonság, például *Felületkezelés* vagy *Tűzállóság*. Egyszer határozza meg a projekthez, egyszerre sok elemre állítsa be, és a BimCraft minden kimutatása olvashatja: itt a címkekimutatás, a {{ui:Mennyiségek}}, a Keresés, a Szín tulajdonság szerint és a [Dokumentumok a modellből](topic:documents-from-the-model).

## Lépések

1. Nyisson meg egy IFC-modellt, vagy kezdjen új épületet.
2. A bal panelen, a {{ui:Mennyiségek}} alatt nyissa meg a {{ui:Címkék}} részt.
3. Kattintson a {{ui:Címke hozzáadása}} gombra. Adjon neki nevet, válassza ki a típusát, és ha szeretné, sorolja fel a megengedett értékeket (vesszővel elválasztva) és azokat az osztályokat, amelyekre vonatkozik (`IfcDoor`, `IfcWall` …). Kattintson a {{ui:A címke hozzáadása}} gombra.
4. Jelölje ki az elemeket a modellben (a Keresés segít: egyszerre kiválaszthatja az összes ajtót).
5. A {{ui:A kijelölés címkézése}} alatt válasszon vagy írjon be egy értéket minden olyan címkéhez, amelyet be szeretne állítani, a többit hagyja úgy, ahogy van, és kattintson a {{ui:Alkalmazás a kijelölt … elemre}} gombra.
6. A {{ui:Címkekimutatás}} alatt jelölje be az oszlopokat, adjon szűrőket, válassza a {{ui:Csoportosítás}} lehetőséget, majd a {{ui:CSV letöltése}} gombot.

## Mit kell látnia

- A változáslistában egy lépés minden mentett definícióhoz és minden címkézéshez; a {{ui:Visszavonás}} visszavonja.
- Azok az elemek, amelyek osztálya nem szerepel a címke osztályai között, kimaradnak az adott címkéből, az állapotsor pedig megmondja, hányan.
- A címkekimutatás elemenként egy sort listáz, a kiválasztott mező szerint csoportosítva; a sor első cellájára kattintva válassza ki az elemet.
- A {{ui:Mennyiségek}} a címkéket a `CadCraft_Tags` alatt listázza, így ott összesítheti a területeket vagy darabszámokat címke szerint.

## Típusok

A típusok ugyanazok, mint a családparamétereké: Hossz (milliméter), Szög (fok), Szám, Egész szám, Igen / Nem, Toll (1–16), Szöveg, Anyag és Kitöltés. Az az érték, amely nem illik a típusához, vagy nem az egyik megengedett érték, üzenettel visszautasításra kerül, és semmi nem változik.

## Jó tudni

- Minden egyszerű IFC, így más programok is olvassák az értékeket: a definíciók a projekten lévő `CadCraft_TagDefs` tulajdonságkészletben vannak, az értékek minden elemen a `CadCraft_Tags` tulajdonságkészletben (címkénként egy tulajdonság). A hosszúságok a fájl hosszmértékegységében íródnak.
- Egy címke osztályai között az `IfcWall` a standard-case és az elemes falakat is magában foglalja.
- Egy címke átnevezése egy lépésben átnevezi az értékeit minden elemen. Egy címke eltávolítása csak a definícióját törli: a már beállított értékek egyszerű tulajdonságként megmaradnak az elemeken. Az eltávolításhoz előbb törölje őket (válassza a {{ui:Törlés}} lehetőséget).
- Még nincs elkészítve: a CadCraft tervezőalkalmazás címkéi (blokkattribútumok).
