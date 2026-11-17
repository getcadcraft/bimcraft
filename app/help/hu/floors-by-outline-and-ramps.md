---
title: Tetszőleges alakú padlók, nyílások és rámpák
summary: Padló vagy födém rajzolása a körvonalával (erkély, konzol, pihenő), nyílások kivágása benne, valamint rámpák rajzolása a pihenőikkel együtt.
keywords: padló, födém, körvonal, erkély, konzol, pihenő, terasz, padlónyílás, lyuk, akna, üreg, rámpa, lejtő, akadálymentes rámpa, kerekesszékes rámpa, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Mit fog csinálni

Készítsen olyan padlókat, amelyek nem a helyiségeket követik, például a falakon túl kinyúló erkélyt, és rajzoljon rámpákat a szintek között.

## Padló rajzolása körvonal alapján

1. Kapcsolja be a {{ui:Rajzolás}} funkciót, válassza ki a szintet, majd a {{ui:Build}} › {{ui:Padló körvonallal}} lehetőséget.
2. Az eszköztár alatti sorban válassza ki a fajtát (betonlemez vagy fapadló), a használatát (padló vagy pihenő), a vastagságát, valamint azt, hogy a felső széle mennyivel van a szint felett (0 = a szint padlójával egy magasságban; a negatív érték lejjebb állítja).
3. Kattintson a sarkokra. Az eszköz a falakhoz, a rácsvonalakhoz és azok metszéspontjaihoz illeszkedik; a {{key:Shift}} billentyű lenyomva tartásával az él derékszögben marad. Minden él hossza és a terület a rajzolás közben látható. A {{key:Backspace}} billentyű visszavonja az utolsó sarkot.
4. A befejezéshez kattintson újra az első sarokra, kattintson duplán, vagy nyomja meg az {{key:Enter}} billentyűt.

## Nyílás vágása

Kattintson a padlóra (a 3D-nézetben, vagy az alaprajzon lévő körvonalán), majd a {{ui:Tulajdonságok}} között kattintson a {{ui:Nyílás hozzáadása}} gombra, és kattintson a padlón belül a nyílás sarkaira, a fentiek szerint befejezve. A padló {{ui:Tulajdonságok}} listája megjeleníti a nyílásait, mindegyik mellett {{ui:Törlés}} gombbal, valamint a területét nyílások nélkül.

## Rámpa rajzolása

1. Válassza a {{ui:Build}} › {{ui:Rámpa}} lehetőséget. Állítsa be a szélességét, és azt, hogy **a fölötte lévő szintig** vagy **felfelé egy beírt emelkedésig** menjen-e.
2. Válassza ki a beállítás módját: **lejtés szerint** (kezdetben 1:12; a rámpa annyi hosszú, amennyi az emelkedéshez szükséges), vagy **hossz szerint** (a második kattintás adja meg a hosszt, a lejtés pedig ehhez igazodik).
3. Kattintson a rámpa lábánál (az alsó élének közepén), majd kattintson a felfelé vezető irányba. Az előnézet mutatja a hosszát, a szakaszait és a lejtését.

A 30 hüvelyknél (760 mm) nagyobb emelkedést szakaszokra osztjuk, közöttük 5 lábas (1525 mm) pihenővel. Ezek gyakori tervezési értékek, nem az Ön szabályzata: az építés helyén ellenőrizze az előírásokat. Az 1:12-nél meredekebb rámpát a {{ui:Tulajdonságok}} között megjelöljük.

## Amit látnia kell

- Minden padló, nyílás és rámpa egy lépés: a {{key:Mod+Z}} visszavonja.
- Az alaprajzon a rajzolt padló körvonala (a nyílás áthúzva jelenik meg), valamint a rámpa körvonala, szakaszai, pihenői és egy felfelé mutató nyíl a lejtéssel.
- A rajzolt padló (fajta, használat, vastagság, felső szint, terület, nyílások) és a rámpa (szélesség, felső szint, emelkedés, lejtés vagy hossz) Tulajdonságai; mindkettő a {{key:Delete}} billentyűvel törölhető.
- A felső szintre vezető rámpa követi azt a szintet, amikor annak magassága változik.
- Az IFC-fájlban: a rajzolt padló IfcSlab (padló vagy pihenő), a kivágott nyílásaival együtt (IfcOpeningElement); a rámpa IfcRamp, lejtős szakaszokból (IfcRampFlight) és pihenőlemezekből áll, lejtésével és szélességével együtt.

:::note
Az így rajzolt padlók ott maradnak, ahol megrajzolta. A {{ui:Padló}} eszközzel készült padlók a falak mozgatásakor követik a helyiségeket: lásd [Helyiségek, padlók, mennyezetek és tetők](topic:floors-and-roofs).
:::
