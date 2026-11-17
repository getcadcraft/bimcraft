---
title: Modell áttekintése VR-headsetben
summary: Járja be az IFC-modellt valós méretben VR-headsetben: ugorjon, forduljon, mérjen, vágja fel, helyezzen el BCF-problémákat képpel, nézze asztali modellként, és találkozzon az élő munkamenet többi résztvevőjével.
keywords: vr, virtuális valóság, headset, webxr, xr, immerzív, quest, oculus, vive, index, pico, bejárás, teleportálás, tervezési áttekintés, koordináció, áttekintés, mérés, metszet, vágás, probléma, problémák, bcf, asztali modell, léptékmodell, jelenlét, avatarok, élő, együtt
from: 8994b36d
---

A {{ui:VR}} gomb az eszköztáron VR-headsettel a modell belsejébe helyez, valós méretben. A kamera helyén, a lenti padlón állva, ugyanabba az irányba néz. A headset azt mutatja, amit a 3D-nézet: a rejtett szintek, elemek és modellek rejtve maradnak, és a festett anyagok megmaradnak. Semmi nem töltődik fel: a böngésző ezen a számítógépen (vagy a headset saját böngészőjében) rajzolja ki.

## Mire van szükség

- Olyan headset, amelyet a böngésző vezérelni tud (WebXR): egy önálló headset saját böngészője, vagy Chrome vagy Edge egy PC-n, csatlakoztatott headsettel.
- Egy megnyitott IFC-modell, biztonságos oldalon (https), ahogyan ez a webhelyen van.

Ha nincs headset, a {{ui:VR}} szürkén jelenik meg, és megmondja, miért.

## Indítás

1. Állítsa be a 3D-nézetet, ahonnan indulni szeretne: egy helyiségben, vagy kint, az épületet nézve.
2. Kattintson a {{ui:VR}} gombra az eszköztáron.
3. Tegye fel a headsetet.

A menü a bal kéz hátulján van. Mutasson rá a jobb kontrollerrel, és húzza meg a ravaszt egy gomb kiválasztásához. (Csak egy kézzel a menü ott lebeg, ahol kezdte.)

## Mozgás

- **Ugrás:** a {{ui:Mozgatás}} alatt mutasson egy padlóra, és húzza meg a ravaszt; oda érkezik. Vagy tolja előre a kart a célzáshoz, és engedje el az ugráshoz. Csak padlókra, födémekre és talajra (felfelé néző felületekre) érkezhet, soha nem falra.
- **Fordulás:** tolja a kart balra vagy jobbra: minden alkalommal 30°-ot fordul.
- **Séta:** a játéktérben egyszerűen sétáljon.

## Mérés

Válassza a {{ui:Mérés}} gombot, majd húzza meg a ravaszt két ponton. A távolság méterben jelenik meg közöttük. A sarok közeli pont a sarokhoz illeszkedik.

## Vágás

Válassza a {{ui:Metszet}} gombot, majd húzza meg a ravaszt egy felületen:

- egy falon (vagy bármin, ami nem padló): minden, ami a felület és Ön között van, kivágódik, hogy belásson. Ez kívülről vagy egy helyiségen át működik a legjobban;
- egy padlón, felülről: alaprajzi vágás 1,2 m-rel az adott padló fölött, hogy a falak alsó része látszódjon.

A {{ui:Törlés}} eltávolítja a vágást és a méréseket. Ha egy [metszősík](topic:section-plane) vág a modellbe az indításkor, a headset azzal indul.

## Probléma elhelyezése

Válassza a {{ui:Probléma}} gombot, majd húzza meg a ravaszt ott, ahol a probléma van. Egy számozott tű jelöli, a probléma pedig a {{ui:Problémák}} lapon BCF-témaként jelenik meg, azzal a képpel, amit látott, és a kamerával, ahol állt, a modell saját koordinátáiban. Mentse őket a többi [problémával](topic:issues-bcf) együtt BCF-fájlként; más koordinációs eszközök ugyanabban a nézetben nyitják meg.

A problémához a megjegyzést a VR elhagyása után, a Problémák lapon lehet hozzáfűzni: a headsetben való gépelés még nincs megvalósítva.

## Nézet asztali modellként

A {{ui:Asztali modell}} a modellt egy asztal méretére zsugorítja a headsetben: járjon körülötte, vagy forgassa a karral. A {{ui:Valódi méret}} visszaállítja az eredeti helyzetet.

## Másokkal, élőben

Egy [élő munkamenetben](topic:work-live) a VR-ben mindenki mást egy fejként és két kézként lát a saját színében, a nevével, és egy ponttal, ahová mutat. Bárki szerkesztése egy pillanaton belül eléri a headsetet. Az asztalnál ülők a headsetben még nem láthatók.

## Kilépés

Válassza a {{ui:Kilépés a VR-ból}} gombot (vagy vegye le a headsetet és ott zárja le). A képernyőn lévő 3D-nézet oda áll, ahol a feje volt.

:::note
Headset-emulátorral tesztelve, még nem minden headseten. Egy nagy modell akadozást okozhat a headsetben: rejtse el előbb a nem szükséges szinteket vagy modelleket ([elrejtés és izolálás](topic:hide-and-isolate)).
:::
