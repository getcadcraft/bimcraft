---
title: Csövek és légcsatornák ellenőrzése a szerkezettel
summary: Futtassa a csövek és légcsatornák kész ütközéshalmazait a falakkal, födémekkel, gerendákkal és oszlopokkal, keresse meg azokat a vezetékeket, amelyek a szigetelésüknél és a megadott résnél közelebb futnak a szerkezethez, és sorolja fel a vezetékekhez szükséges nyílásokat CSV-ben és BCF-ben.
keywords: mep, ütközés, ütközésvizsgálat, koordináció, szerkezet, falak, födémek, gerendák, oszlopok, szabad távolság, puha ütközés, szigetelés, rés, nyílás, áttörés, védőcső, magfúrás, építési munka, bcf, csv
from: 2d597f01
---

## Mit fog tenni

Ellenőrizze, hogy a gépészet illeszkedik-e az épülethez: mi fut bele a szerkezetbe, mi halad túl közel hozzá, és hol kell lyukat fúrni a falakba és födémekbe. Nyissa meg a bal panelben az {{ui:Ütközésvizsgálat}} részt; a **Csövek és légcsatornák a szerkezettel** szakasz a szokásos vizsgálat alatt van.

## Kemény ütközések

A két halmazlista most a **Csövek és légcsatornák**, **Falak**, **Födémek és tetők**, **Gerendák**, **Oszlopok** és **Szerkezet** (mind a négy) elemeket is felkínálja, mindegyikben a darabszámmal. Kattintson a {{ui:Csövek és légcsatornák × szerkezet}} gombra az első és az utolsó kiválasztásához és a vizsgálat futtatásához; vagy válasszon ki bármely párt maga, és kattintson a {{ui:Futtatás}} gombra. Lásd: [Ütközések vizsgálata](topic:clash-check).

## Szabad távolságok

Néhány vezetéknek hely kell körülötte: a szigetelésének, valamint hely a munkának vagy a védőcsőnek.

1. Adja meg a csőszakasz vagy légcsatorna-szakasz **Szigetelés** vastagságát a Tulajdonságokban (ehhez nem rajzol semmit).
2. Írja be a **Rés a csövek és légcsatornák körül** (mm) mezőbe az Ütközésvizsgálatban.
3. Kattintson a {{ui:Szabad távolságok ellenőrzése}} gombra: minden olyan rész, amely közelebb van egy falhoz, födémhez, gerendához vagy oszlophoz, mint a szigetelése plusz a rés, listába kerül, a tényleges és a kívánt távolsággal. Egy sorra kattintva a kettő megtekinthető.

A falon vagy födémen áthaladó rész nem szabad távolság, hanem nyílás; ott kerül felsorolásra.

## Szükséges nyílások

Kattintson a {{ui:Szükséges nyílások}} gombra. Ahol egy szakasz tengelyvonala falon vagy födémen halad át, a BimCraft felsorolja a szükséges nyílást: kerek csőnél vagy légcsatornánál kör alakút, egyéb esetben téglalapot, akkorát, mint a szakasz külső mérete, plusz kétszer a szigetelése, plusz kétszer a rés, és középre igazítva ott, ahol a szakasz átmegy. Egy sorra kattintva a szakasz és a fal vagy födém megtekinthető.

- {{ui:Nyílások CSV-ként}}: soronként egy nyílás: a szakasz, annak mérete és szigetelése, a nyílás mérete, az elem, amelyen áthalad, és annak GlobalId-je, a szint, a középpont X, Y és Z koordinátája, valamint az, hogy a szakasz mennyire halad át rajta.
- {{ui:Nyílások BCF-problémákként}}: nyílásonként egy probléma, egy rá irányuló kamerával és a kiválasztott szakasszal és elemmel, a szerkezeti mérnök programja számára.

:::note
Semmi sincs kivágva: a nyílások a méretezőknek szóló lista. A rés értékét kézzel kell megadni; egyetlen előírás sem mondja meg, mekkora legyen egy nyílás. A gerendák és oszlopok ütközések, nem nyílások: hogy egy cső átmehet-e rajtuk, a szerkezeti mérnök dönt.
:::
