---
title: A szkennelés összevetése a modellel és a 4D-ütemtervvel
summary: Minden modellelemet összevet egy megnyitott pontfelhővel (megépült, részben megépült, hiányzik, nem érte el), megmutatja a megépült százalékot, ennek megfelelően színezi a modellt, és 4D-ütemterv betöltése esetén felsorolja, mi van lemaradásban vagy előrehaladásban a 4D-nap szerint.
keywords: szkennelés, pontfelhő, előrehaladás, készültségi százalék, megépült, hiányzik, ütemterv szerint lemaradt, ütemterv előtt, 4D, helyszíni előrehaladás, eltérés, kivitelezés szerinti, lézeres szkennelés, drón, összevetés
from: 6fdc9003
---

Nyissa meg az IFC-modellt, nyisson mellé egy pontfelhőt (lásd: [Pontfelhők](topic:point-clouds)), és helyezze el a modellen. A {{ui:A szkennelés összevetése a modellel}} szakasz a jobb oldali panelen jelenik meg, amíg pontfelhő van megnyitva.

## Mit csinál

Nyomja meg az {{ui:Összehasonlítás}} gombot. A modell minden elemét a felülete alapján ítéli meg, mert a szkenner azt látja. A doboz hat lapját körülbelül 20 cm-es cellákra osztja; egy cella akkor számít, ha egy szkenpont a lap {{ui:Tűréshatár}}án belül van (kezdetben 50 mm). A legjobb nagy felület számít, így az egyik oldalról szkennelt falat nem bünteti a másik oldala.

- **Megépült**: a felületének legalább 40%-a látszik.
- **Részben**: 10% és 40% között.
- **Hiányzik**: ennél kevesebb, de a szkenner eléri az elemet (az elemtől 1,5 m-en belüli pontok).
- **Nem érte el**: a szkenner sosem járt ott, így róla nem mondunk semmit.

A megépült és a részben megépült elemeknél megadja a szkenpontok átlagos eltérését a modell felületétől, és megmondja, hogy az elem a helyén van-e (a tűréshatáron belül), közel van-e (háromszoros tűréshatáron belül), vagy eltér (ennél távolabb). Csak az ötszörös tűréshatárig látja az eltéréseket: az ennél messzebb épült elem hiányzónak látszik.

Az összegzés a szkenner által elért elemek közül adja meg a megépült százalékot darabszám és térfogat szerint. A részben megépült elemeket külön számolja, és nem adja hozzá a megépültekhez.

## A 4D-ütemterv szerint

Ha 4D-ütemterv be van töltve (lásd: [4D-ütemterv](topic:4d-schedule)), az eredmény a 4D-csúszkán beállított napot is figyelembe veszi: azok az elemek, amelyeknek addig a napig esedékesnek kellene lenniük, de a szkenner nem mutatja megépültnek, **lemaradásban** vannak; azok, amelyek még nem esedékesek, de megépültek, **előrehaladásban** vannak. A lemaradt elemek a {{ui:Problémák}} alatt szerepelnek, és a táblázat erre szűrhető. Ütemterv nélkül nem mondunk semmit a lemaradásról vagy az előrehaladásról.

## A táblázat és a modell

Kattintson egy sorra az elem kijelöléséhez. A {{ui:Modell színezése}} gomb zölddel (megépült), borostyánsárgával (részben), pirossal (hiányzik) vagy szürkével (nem érte el) festi az elemeket; a {{ui:Saját színek}} visszaállítja őket. A {{ui:CSV mentése}} kiírja a táblázatot. A {{ui:Egyező elemek megjelölése terepen ellenőrzöttként}} minden olyan elemet, amelyet megépültnek és a tűréshatáron belül láttak, terepen ellenőrzöttként jelöl (LOD 500, módszer: szkennelés), egy lépésben, amelyet vissza lehet vonni. Lásd: [Elemek megjelölése ellenőrzöttként vagy terepen ellenőrzöttként](topic:verification).

:::warning
Ez az elemek dobozát a tűréshatáron belüli szkenpontokkal hasonlítja össze. **Nem felmérés, nem mennyiségkimutatás és nem fizetés alapja.** Egy elem, amely egy szkennelt elem mögött van (falburkolat mögötti fal, padlóburkolat alatti födém), ugyanazt a felületet osztja, és megépültnek látszhat; a görbe vagy lejtős elemnek a teste kisebb a dobozánál, így részben megépültnek vagy hiányzónak látszhat. Nézze meg a listát, mielőtt intézkedik. Az engedélyezési megjegyzések és a haladási jegyzetek nem részei ennek: azokban az oszlopokban maradnak, ahol tartja őket.
:::

Egy asszisztens ugyanezt az összevetést futtathatja a {{ui:A szkennelés összevetése a modellel}} eszközzel; ez nem változtat semmit a modellen.
