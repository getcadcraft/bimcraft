---
title: Oříznutí, prodloužení a spojení stěn
summary: Oříznete nebo prodloužíte stěny k jiné stěně a spojíte dvě stěny v bodě, kde se setkávají; každý krok je jeden krok, který lze vrátit zpět.
keywords: oříznout, prodloužit, roh, spojit, setkat, uklidit, konec stěny, roh stěny, zkrátit, zkrátit o, prodloužit o, upravit, TR
from: a6fb2e8b
---

## Co uděláte

Uklidíte stěny, které jste nakreslili: zkrátíte stěnu, která přesahuje přes jinou, prodloužíte tu, která nedosahuje, nebo uzavřete otevřený roh.

## Postup

1. Zapněte {{ui:Kreslení}} a v seznamu podlaží na půdorysu vyberte podlaží.
2. **Oříznutí nebo prodloužení ke stěně:** vyberte {{ui:Upravit}} › {{ui:Oříznout / prodloužit}}. Klikněte na stěnu, ke které se bude oříznout nebo prodlužovat (hranu), a pak na každou stěnu, kterou chcete změnit. Stěna, která přesahuje přes hranu, se ořízne k ní, a část, na kterou kliknete, je část, která zůstane; stěna, která nedosahuje, se prodlouží, dokud nenarazí na hranu. Hrana zůstane vybraná, takže můžete klikat na více stěn za sebou. Stiskněte {{key:Esc}} pro výběr jiné hrany.
3. **Spojení dvou stěn v rohu:** vyberte {{ui:Upravit}} › {{ui:Roh}}, klikněte na první stěnu a pak na druhou. Obě dojdou k bodu, kde se setkávají, a BimCraft roh uklidí. Když jedna stěna protíná druhou, část, na kterou jste klikli, zůstane.
4. Stiskněte {{key:Esc}} pro začátek znovu, nebo {{key:V}} pro návrat k {{ui:Vybrat}}.

## Co byste měli vidět

- Když ukazujete na stěnu, půdorys ukáže, kam by šla, již spojenou se stěnami, které potkává, a s novou délkou.
- Každá změna je jeden krok: {{key:Mod+Z}} ji vrátí zpět.
- Místnosti, podlahy, stropy, střechy a vše, co následuje stěny, se znovu vytvoří, jako po každé změně stěn. Místnost uzavřená rohem se objeví s číslem a plochou.
- Dveře nebo okno na odříznuté části se smažou spolu s ní.

## Dobré vědět

- Stěny se kreslí podle své osy, takže se ořezávají a prodlužují podél ní: stěna se setká s osou druhé stěny a spoj se upraví na tvar T nebo L.
- BimCraft řekne, proč to nedokáže: obě stěny jsou rovnoběžné, čára stěny prochází vedle druhé stěny, dveře nebo okno překáží (nejprve je přesuňte nebo smažte), nebo by ze stěny nezůstalo nic (méně než 1 mm). Stěna zkrácená pod 50 mm se vytvoří, s varováním v Problémech: viz [Rady k výkresu](topic:drawing-advice).
- Oříznout nebo prodloužit lze jen stěny nakreslené v BimCraftu.

Viz také [Kreslení stěn](topic:draw-walls) a [Změna stěny, dveří nebo okna](topic:change-a-wall-or-door).
