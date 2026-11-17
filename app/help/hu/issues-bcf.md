---
title: Problémák és BCF-fájlok
summary: Mentse a modell nézetét problémaként — kamera, kijelölt elemek, rejtett elemek, metszet —, ossza meg BCF-fájlként más koordinációs eszközökkel, és nyissa meg más eszközök BCF-fájljait, hogy lássa a problémáikat.
keywords: bcf, bcfzip, probléma, problémák, téma, nézőpont, ütközési jelentés, koordináció, megjegyzés, pillanatkép, BCF megnyitása, BCF mentése, exportálás, importálás
from: 2a6cf201
---

## Mit fog csinálni

Jelöljön meg egy problémát a modellben, tartsa meg a nézetet, amely mutatja, majd adja tovább BCF-fájlban, a formátumban, amelyet más koordinációs eszközök olvasnak és írnak.

## Lépések

1. Nyisson meg egy IFC-modellt, és állítsa be a nézetet: forgassa körbe, jelölje ki az érintett elemeket, rejtse el, ami útban van, vágja el metszősíkkal vagy dobozzal.
2. Kattintson a jobb oldali {{ui:Problémák}} fülre, majd az {{ui:Új probléma ebből a nézetből}} gombra.
3. Adjon meg címet, és ha szeretné, megjegyzést; válasszon állapotot; adja meg a nevét vagy e-mail-címét (bejelentkezve a fiók neve van kitöltve; lásd [A BimCraft beállításai](topic:settings#your-name-on-issues)). Kattintson a {{ui:Probléma létrehozása}} gombra.
4. Egy problémánál kattintson a {{ui:Megjelenítés}} gombra, hogy visszaálljon a nézete.
5. Kattintson a {{ui:BCF mentése}} gombra: minden problémát egyetlen `.bcf` fájlként tölt le.
6. Más által készített problémák megtekintéséhez kattintson a {{ui:BCF megnyitása…}} gombra, és válassza ki a `.bcf` vagy `.bcfzip` fájlt.

## Mit kell látnia

- Minden probléma a listában a nézetének képével, címével, állapotával, szerzőjével és dátumával.
- A {{ui:Megjelenítés}} visszaállítja a kamerát, a kijelölt elemeket, azt, ami el volt rejtve (vagy csak azt, ami látszott), és a metszetet. Az elemek GlobalId alapján kerülnek megkeresésre minden megnyitott modellben; az állapotsor jelzi, ha néhány hiányzik.
- Más eszköz metszősíkja vagy doboza akkor jelenik meg, ha a modell tengelyeivel egy vonalba esik; a megdöntött vagy további síkok metszettérfogatként állnak vissza (legfeljebb 6 sík). Több dobozból álló térfogat esetén a probléma az első dobozt tartja meg.

## Jó tudni

- A fájl BCF 2.1, és a nézetet a modell saját koordinátáiban tárolja, így más eszközök a kamerát ugyanarra a helyre teszik.
- A problémák mentésig ebben a fülön maradnak. Egy másik modell megnyitása megtartja a listát; a problémákhoz tartozó modellt nyissa meg, mielőtt megjelenítené őket.
- Más eszköz párhuzamos (ortogonális) kameráját ennek a megjelenítőnek a perspektivikus kamerájával mutatjuk, hátrébb húzva, hogy a modell ugyanazon része töltse ki a nézetet.

## Gyakori hibák

- **A Megjelenítés furcsa helyre mozgatta a kamerát.** A probléma másik modellen vagy más koordinátákkal készült. Előbb nyissa meg a megfelelő modellt.
- **A fájl nem nyílik meg.** Nem BCF zip, vagy sérült; az állapotsor megmondja, miért.

## Tovább

- [Elemek elrejtése, izolálása és átlátszóvá tétele](topic:hide-and-isolate)
- [IFC-modell vágása metszősíkkal](topic:section-plane)
