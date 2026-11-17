---
title: Alapozás a falak alatt
summary: Talajra fektetett födém, talapzatfalas födém, kúszótér vagy pince egyetlen kattintással az épület alá; a talpalapok a falakból és a szintek számából méreteződnek, és az alapozás a falak mozgásakor követi azokat.
keywords: alapozás, talpalap, talajra fektetett födém, megvastagított szél, monolit födém, alapfal, kúszótér, pince, pincefal, fagy, beton, talpalap szélessége
from: c0e20172
---

## Mit fog csinálni

Adjon az épületnek a falaihoz illő alapozást. A BimCraft a falak külső oldalát követi, a talpalapok méretét a falfajtából és a rájuk támaszkodó szintek számából határozza meg, és valahányszor a falak változnak, újra elkészíti az alapozást.

## Alapozás elhelyezése

1. Azon a szinten, amelyen a falak állnak (általában az elsőn), nyissa meg a {{ui:Build}} menüt, és válassza az {{ui:Alap}} lehetőséget.
2. Válassza ki a fajtát:
   - **Talajra fektetett födém**: egy 4"-es betonlemez, amelynek felső széle a padló, a falak alatt megvastagított széllel.
   - **Alapfalak és födém**: alapfalak a padlóig, talpalapokon, belül födémmel.
   - **Kúszótér**: alapfalak, amelyek a padlószerkezet alatt megállnak, talpalapokon, födém nélkül.
   - **Pince**: teljes magasságú alapfalak talpalapokon, pincefödémmel, a padlószerkezet alatt.
3. Mutasson az épület belsejébe: a talpalapok szaggatott vonallal, méretükkel együtt jelennek meg. Kattintson.

Ha egy épületnek már van alapozása, arra kattintva kijelöli azt, így a meglévőt módosíthatja, ahelyett hogy másodikat adna hozzá.

## Módosítás

Jelölje ki az alapozást (kattintson az épületre az {{ui:Alap}} eszközzel, vagy kattintson bármely részére a 3D-nézetben vagy a modellfában), majd módosítsa a **Tulajdonságokban**: a fajtát, a talpalap szélességét és mélységét, azt, hogy a talpalap alsó széle milyen mélyen van, a falvastagságot, azt, hogy a falak mennyivel a padló alatt állnak meg, a pince magasságát és a födém vastagságát. Minden módosítás egy visszavonási lépés.

Az **auto** jelölésű méretek a falakból származnak: a talpalapok szélessége 12", 15" vagy 23" egy, két vagy három szint esetén födémen vagy alapfalakon, 18", 22" vagy 27" kúszótér vagy pince felett, és 4"-rel szélesebb falazott vagy betonfalak alatt. Adjon meg egy méretet a sajátjának beállításához; a `0` beírásával visszatér az automatikushoz.

:::warning
Az automatikus méretek jelölt alapértelmezések tipikus könnyűszerkezetes házakhoz, nem mérnöki számítások. Egy tervező vagy mérnök ellenőrzi a talpalapokat, a mélységeket és a falakat a talaj, a fagyhatár és a terhelések szempontjából.
:::

## Mi kerül mentésre

Az alapozás IFC-elemösszeállításként („Foundation”) kerül mentésre, amely a fajtájának megfelelően talpalapból (vagy a födém megvastagított széléből), alapfalból és födémből áll, mindegyik betonból, és mindegyiknek megvannak a mennyiségei: hosszak, szélességek, magasságok, területek és térfogatok, a mennyiségkimutatásokra készen.

## Jó tudni

- A falak mozgatása, hozzáadása vagy törlése után a rájuk épülő alapozás újra elkészül; ha a felső szinten falakat rajzol, az alsó talpalapok a többlet szint miatt szélesednek.
- A {{key:Delete}} billentyű a kijelölt alapozást minden részével együtt törli.
- Ha a modellben szerepel a telek terepe (lásd [A telek terepe, az épület alapsíkja és a burkolatok](topic:terrain)), az alapfalak és a kúszóteres talpalapok 8"-os lépcsőkben lépcsőznek vele.
- A belső falak alatti talpalapokat még nem készítjük el.
