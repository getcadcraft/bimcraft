---
title: Anyagok festése falakra, padlókra és tetőkre
summary: Adjon elemeknek anyagot, például téglát, homlokzati burkolatot, zsindelyt, fát vagy csempét, az egész elemre vagy annak egyik oldalára. Az IFC-ben mentődik, és a renderelt képeken látszik.
keywords: festés, anyag, anyagok, felület, textúra, tégla, homlokzati burkolat, zsindely, tetőfedés, fa, kő, csempe, beton, vakolat, fű, kavics, üveg, fém, fal oldala, belső, külső, padlóburkolat, helyiség, felületstílus
from: fbfed676
---

Az eszköztáron a {{ui:Festés}} gomb a 3D-nézet fölött megnyitja az anyagtárat: tégla és blokk, homlokzati burkolat, tetőfedés, fa, kő, csempe, beton, vakolat, talaj, üveg és fém.

## Elemek festése

1. Kattintson a {{ui:Festés}} gombra.
2. Kattintson egy anyagra.
3. Kattintson elemekre a 3D-nézetben. Minden kattintás a megkattintott elemet festi.

Több elem egyszerre festéséhez jelölje ki őket előbb (kattintással, {{key:Ctrl}}+kattintással vagy [kereséssel](topic:find)), majd kattintson az anyagra: minden kijelölt elem egy lépésben megkapja.

Az elem a 3D-nézetben azonnal az anyag színét mutatja. Textúrája a [renderelt képen](topic:render) jelenik meg. Az {{key:Esc}} vagy a {{ui:Bezárás}} gomb befejezi a festést.

## Csak egy oldal festése

Válassza a {{ui:Csak a megkattintott oldalt}} lehetőséget, majd kattintson a kívánt oldalra: egy fal külső oldalát homlokzati burkolattal, a belsejét más felülettel, egy padló felső részét fával, az alsó részét pedig változatlanul hagyva. Az elem többi része megtartja anyagát.

Az oldalt az elem saját irányai alapján határozza meg a rendszer, így elmozgatáskor vagy elforgatáskor is ugyanaz az oldal marad.

Padlók helyiségenkénti festéséhez adjon minden helyiségnek saját padlót ({{ui:Rajzolás}} › {{ui:Padló}} › **Ez a helyiség**, lásd: [Helyiségek, padlók, mennyezetek és tetők](topic:floors-and-roofs)), majd fesse meg minden padló felső részét.

## Anyag eltávolítása

Kattintson a csíkos színmintára ({{ui:Nincs anyag}}), majd az elemre. Az elemen lévő összes anyag eltűnik, az oldalak is.

## Az IFC-fájlban

A festés módosítja az IFC-t (mindegyik egy lépés, a {{key:Ctrl+Z}} visszavonja), és egyszerű IFC marad:

- minden megfestett elem kap egy `CadCraft_Render` tulajdonságkészletet, amely megnevezi az anyagát, valamint egy tulajdonságot minden megfestett oldalhoz;
- a testére az anyag színével rendelkező felületstílus kerül, így más BIM-programok is megmutatják a színt. Az IFC4 a stílusban a textúrát is megnevezi.

Amikor a BimCraft átalakít egy megfestett falat (például elmozdítja a végét), a fal megtartja anyagát és színét: a BimCraftban, a képeken és más programokban egyaránt.

:::note
A textúrákat maga a BimCraft rajzolja: működnek offline, és bármire szabadon felhasználhatók (CC0). A saját képtextúrák még nem készültek el.
:::

## Textúrák a 3D-nézetben

A megfestett téglafal a téglákat, a fapadló a deszkákat mutatja, valós méretükben, amint a festék rákerül. Szüntesse meg a **Textúrák megjelenítése a 3D-nézetben** jelölést a Festés palettán, hogy helyette egyszínű felületeket lásson. Nagyon nagy modell esetén ezek maguktól kikapcsolnak, és ezt közlik. A tulajdonság szerinti színezés mindig a saját színeit mutatja. A textúrákat a program rajzolja, így semmi sem töltődik le, és a renderek és a glTF-fájl minden esetben tartalmazzák őket.
