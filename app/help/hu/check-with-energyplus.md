---
title: Fűtés és hűtés vizsgálata energetikai szimulációval
summary: Írja ki a modellt EnergyPlus-fájlként, vagy futtassa rajta az EnergyPlus 26.2.0 verziót a böngészőben, és hasonlítsa össze tervezési terheléseit a gyors fűtési és hűtési segédlettel. Második vélemény a korai tervezéshez, nem megfelelőségi számítás.
keywords: energyplus, energiaszimuláció, tervezési nap, fűtési terhelés, hűtési terhelés, időjárási fájl, epw, idf, hőtömeg, éves energia, szimuláció
from: b82a5bf2
---

## Mit fog csinálni

A **Vizsgálat EnergyPlusszal** panel a megnyitott modellt EnergyPlus-bemeneti fájlként (IDF) írja ki: minden helyiség egy zóna, a falak, padlók, tetők és ablakok U-értékükkel, a légcsere, valamint az ideális fűtés és hűtés. Ezt a fájlt bármikor **elmentheti**, és futtathatja a saját EnergyPlusában.

Ha a motort is beállította, a panel helyben tud szimulálni, és helyiségenként a gyors segédlet tervezési fűtési és hűtési értékei mellett az EnergyPlus tervezési értékeit is felsorolja.

Ez tervezési segédeszköz. Az energetikai előírásokhoz, tanúsításhoz és engedélyekhez jóváhagyott eszköz és az általa megkövetelt klímaadatok kellenek, az eredményt pedig annak kell átnéznie, aki felelősséget vállal érte.

## Motor beállítása

A BimCraft nem tartalmazza az EnergyPlust. Ez egy nagy WebAssembly-build (kb. 6 MB tömörítve, plusz egy 4,6 MB-os adatfájl), ezért saját magának kell üzemeltetnie, és a címét be kell írnia a panelbe. Az oldal csak akkor tölti be, amikor megnyomja a szimuláció gombját, sosem induláskor. A címnek https-sel kezdődőnek, ezen a webhelyen belüli útvonalnak vagy localhostnak kell lennie.

## Tervezési napok vagy egy év

- **Tervezési napok szimulálása** időjárási fájl nélkül is működik. Egy hideg, napsütés nélküli téli napot és egy forró, derült nyári napot futtat a Nappali fény fül fűtési és hűtési bemeneteiben megadott hőmérsékleteken, és helyiségenként wattban adja meg a terhelést.
- **Egy év szimulálása** egy kiválasztott, EPW formátumú időjárási fájlt igényel. Ehhez ugyanazokból a bemenetekből személyeket, világítást és berendezéseket ad hozzá (mindig bekapcsolva, mert nem talál ki menetrendet), és helyiségenként kWh-ban adja meg a fűtési és hűtési energiát. Az időjárási fájlok saját licencekkel rendelkeznek, ezért csak olyat használjon, amelynek használatára jogosult.

## Hőtömeg

Jelölje be a **Hőtömeg adása az ismert rétegekkel rendelkező falaknak** négyzetet: ekkor azok a falak, tetők és padlók, amelyek anyagrétegei ismertek, rétegenként kerülnek kiírásra, a sűrűséget és a fajhőt pedig egy rövid, anyagnév szerinti tipikus értéktáblázatból veszi. A rétegeket a külső oldaltól kezdve, abban a sorrendben veszi, ahogy a fájl felsorolja őket. A rétegek nélküli elemek U-értékükkel, tömeg nélkül maradnak.

## Az összehasonlítás olvasása

A két módszer kissé eltérő kérdésre válaszol. A gyors segédlet minden elemet megtart; az EnergyPlus-fájl helyiségenként a felület fajtája szerint átlagolja az U-értékeket. Ha egy helyiség tervezési fűtése 15%-nál nagyobb mértékben tér el, a ⚠ panelben megjegyzésként jelenik meg, mindkét értékkel együtt. A hűtés tervezésből adódóan jobban eltér: a gyors segédlet a napsugárzásból számítja a csúcsot egy adott napra, az EnergyPlus pedig a saját tervezési napjára méretez.
