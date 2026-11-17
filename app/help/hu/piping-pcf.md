---
title: Csővezeték küldése szilárdsági vagy izometrikus programba, és visszaolvasása (PCF)
summary: A modell csővezetékeinek kiírása PCF csőelem-fájlként, vagy szilárdsági- vagy izometrikus programból származó PCF-fájl beolvasása, és annak csöveinek futásként való megrajzolása.
keywords: pcf, csőelem-fájl, csőszilárdság, szilárdsági elemzés, izometrikus, izometria, export, import, csővezeték, üzem, acélcső, projekt áthelyezése, más szoftver
from: 24f91355
---

## Mit fog tenni

A PCF egy egyszerű szöveges fájl, amelyet szilárdsági- és izometrikus programok olvasnak és írnak. Minden csővezeték elemeit felsorolja a végpontjaikkal és az átmérőikkel (bore).

## Exportálás

1. Válassza a Cső eszközt. A beállítássor megjeleníti a **PCF exportálása** lehetőséget.
2. Kattintson rá. A modell minden csőfutása kiíródik: egyenes cső, könyök (90 fokos fordulat, egyébként ív), T-idom az elágazási ponttal, szűkítők és szelepek.
3. A fájl milliméterben íródik. Az átmérők névleges méretek milliméterben. Egy könyök középpontja a sarka, ahol a két szár találkozik.

PCF csak acél tompahegesztésű csőre íródik. Más anyagú futás is kiíródik, acél komponenskulcsokkal, és erről a Problémák panelen jelzés található.

## Importálás

1. Válassza a Cső eszközt, kattintson a **PCF importálása…** gombra, és válassza ki a fájlt.
2. Az egyenes csőtől a könyökökön, íveken, szelepeken és karimákon át minden egyetlen futás lesz az aktuális szinten. A méretváltás új futást kezd. Egy T-idom elágazása saját futássá válik, a T-idom középpontjánál kezdődve.
3. A modell maga rakja le a saját idomait. Szűkítőket és T-idomokat nem másol át: ezek ott jelennek meg, ahol különböző méretű futások vagy egy elágazás találkoznak.

:::note
A fájl magasságai az aktuális szinthez képest értendők. A terhelések, a rögzítések és maga a szilárdsági elemzés nincsenek a PCF-fájlban, ezért nem jönnek át.
:::

## Az átjött adatok ellenőrzése

- Csővezetékenként a csőhossz összessége egyezzen a forrásfájlban lévővel.
- A Problémák panel minden esetet egyszer sorol fel: az olyan könyököt, amelynek középpontja nem azonos távolságra van a két végétől, a hossz nélküli csövet és a nem szabványos átmérőt.

## Az IFC-fájlban már meglévő csővezeték

Ha egy IFC-fájl nyitva van, a **PCF exportálása** a saját csőszegmenseit, idomait és szelepeit is kiírja, az Ön által rajzolt futások mellé. Egy szegmens a végeit a portjaiból vagy a teste végeiből kapja. A port nélküli idom kimarad, és a Problémák panel ezt jelzi. Ha a modellben nincsenek rajzolt futások, az IFC-ből is lehet exportálni.

Importnál a fájlban lévő támaszok, elágazócsonkok (olet), karimák, tömítések és lezárók nem rajzolódnak meg. A Problémák panel mindegyikből megadja, hány darab maradt ki, így semmi nem tűnik el észrevétlenül.
