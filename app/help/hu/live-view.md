---
title: Az élő nézet
summary: A modell mellett lévő panel valós idejű megjelenésben, nappal, árnyékokkal és visszaverődő fénnyel mutatja a modellt, és követi minden módosítását; járjon be benne, és állítsa be a napszakot és a hónapot.
keywords: élő nézet, valós idő, valós idejű, valós idejű renderelés, bejárás, séta, első személy, bemutató, ügyfél, második képernyő, második ablak, monitor, napszak, nap, évszak, hónap, árnyékok, környezeti elzáródás, tükröződések, visszaverődő fény, globális megvilágítás, webgpu, webgl
from: ea5c02bf
---

Az élő nézet a modellt valós idejű megjelenésben mutatja: az eget és a napot a telephelye helyéről és dátumából, a nap árnyékait, az Ön által az elemekre adott festékeket és anyagokat, a lámpákat, valamint a falakról és padlókról visszaverődő fényt. Követi, amit csinál: ha elforgatja a 3D nézetet, ez is elfordul, ha módosítja a modellt, egy pillanattal később megmutatja a változást. Semmi sem töltődik fel.

Ugyanazt a jelenetet, festékeket, lámpákat és napot rajzolja, mint a [Kép renderelése](topic:render); kész képhez azt használja.

## Megnyitás

1. Nyisson meg egy modellt, és válassza a {{ui:Élő nézet}} gombot az eszköztárban. A panel az alkalmazás fölött nyílik meg, jobb alul.
2. Húzza a címsorát a mozgatáshoz, a sarkát húzva nagyítsa.
3. Az {{ui:Élő nézet új ablakban}} (a mellette lévő gomb) vagy a panelben lévő {{ui:Új ablak}} a panelt saját ablakba helyezi, második képernyőhöz. Ha a böngésző blokkolja a felugró ablakokat, panelként nyílik meg.
4. A {{ui:Bezárás}} bezárja.

## A vezérlők

| Vezérlő | Mit tesz |
|---|---|
| {{ui:A nézet követése}} | Be: az élő nézet oda néz, ahová a 3D nézet. A bejárás kikapcsolja |
| {{ui:Bejárás}} | Bejárás a modellben (lent) |
| {{ui:Gravitáció}} | Bejárás közben: áll a padlókon és mászik a lépcsőn. Ki: repülés |
| {{ui:Idő}} | A napszak órája. A nap mozog, ahogy húzza |
| {{ui:Hónap}} | A hónap, hogy lássa a napot télen és nyáron |
| {{ui:Minőség}} | {{ui:Ennek a számítógépnek}}, vagy {{ui:Alacsony}}, {{ui:Közepes}} vagy {{ui:Magas}} |

Az alsó sor megmondja, mi rajzolja a nézetet (WebGPU vagy WebGL 2), a minőséget és a visszaverődő fényt.

## Bejárás a modellben

1. Fordítsa a 3D nézetet oda, ahol állni szeretne, és válassza a {{ui:Bejárás}} gombot. A nézet szemmagassága alatti padlón áll, 1,6 m magasan.
2. Kattintson az élő nézetre, majd használja a {{key:W}} {{key:A}} {{key:S}} {{key:D}} billentyűket vagy a nyílbillentyűket. A futáshoz tartsa lenyomva a {{key:Shift}} billentyűt. Húzással nézzen körül.
3. A 40 cm-ig terjedő lépcsőfokokra felmászik (ezek a lépcsők); ennél magasabb akadály a fal. A falak megállítják, és mentén csúszik.
4. A {{ui:Gravitáció}} kikapcsolt állapotában repül: a {{key:E}} felfelé, a {{key:Q}} lefelé visz.
5. Az {{key:Esc}} leállítja a bejárást.

## Visszaverődő fény

A napos falról a padlóra visszaverődő fény, és a szoba sötétebb belseje a háttérben, minden processzormagon számítódik. Míg dolgozik, az alsó sor ezt mutatja: {{ui:Visszaverődő fény: 40 %}}; ha kész, a nézet átveszi. Módosítás után újra kezdődik.

:::note
Ez egy közelítés az élő nézethez, nem renderelt kép: a pontok közötti apró részletek a hozzájuk közeli pontok visszaverődő fényét kapják.
:::

:::note
A böngészők eltérőek. Ahol a böngészőben van WebGPU, az élő nézet azt használja; máshol WebGL 2-t használ, és ugyanúgy néz ki. Ha egyik sincs, a panel ezt jelzi.
:::
