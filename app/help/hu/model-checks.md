---
title: Modell ellenőrzése gyakori problémákra
summary: Keresse meg a szükséges tulajdonság nélküli elemeket, a kétszer használt GlobalId-kat, a szint nélküli elemeket és az egymás tetején lévő másolatokat.
keywords: ellenőrzés, modellellenőrzés, érvényesítés, minőség, hiányzó tulajdonság, kötelező, duplikált, globalid, guid, szint, egymásra halmozott, átfedés
from: 4d835513
---

## Amit elvégez

Nézze át a modellt, mielőtt továbbadja: azokat a problémákat, amelyek megtörik a kimutatásokat, a mennyiségeket és mások szoftvereit.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. Nyissa meg a bal oldali panelen a {{ui:Modellellenőrzések}} részt.
3. A {{ui:Kötelező tulajdonságok}} alatt már van egy szabály (bármely osztály, Name). Módosítsa az osztályát (vagy a {{ui:Bármely osztály}} részt) és a tulajdonságát, vagy kattintson a {{ui:Tulajdonság hozzáadása}} gombra egy újabb szabályhoz; az x gomb eltávolít egyet. Az elem akkor nem felel meg a szabálynak, ha a tulajdonság hiányzik vagy üres. A szabályok ebben a böngészőben minden modellhez megmaradnak.
4. Kattintson az {{ui:Ellenőrzések futtatása}} gombra.
5. Kattintson egy eredményre, hogy kijelölje ezeket az elemeket, és ráközelítsen.

## Amit látnia kell

- **Hiányzó kötelező tulajdonság**: minden szabály, azokkal az elemekkel, amelyeknek nincs rá értékük.
- **Kétszer használt GlobalId**: azonos GlobalId-val rendelkező elemek. Más szoftverek egy elemként kezelik őket.
- **Nincs szinten**: olyan alakzatú elemek, amelyeket egyetlen szint sem tartalmaz.
- **Egymás tetején lévő másolatok**: azonos osztályú és típusú, azonos alakú, ugyanazon a helyen lévő elemek, amelyek kétszer számítanak a mennyiségekben.

Az eredmények minden sora gomb: kattintson rá az elemek kijelöléséhez és ráközelítéséhez. Minden ellenőrzésnél csak az első 50 csoport jelenik meg. Ugyanezek a megállapítások a {{ui:Problémák}} panelen is megjelennek.

## Jó tudni

- Több megnyitott modell esetén az ellenőrzések az aktív modellt vizsgálják. Lásd: [Több IFC-modell együtt megtekintése](topic:several-models).
- Módosítás után futtassa újra az ellenőrzéseket.
- A {{ui:Problémák}} panelen a problémák szövegében szereplő hosszúságok, területek és térfogatok az eszköztárban kiválasztott {{ui:Mértékegységek}} szerint jelennek meg (egy „800 mm”-es ajtó láb és hüvelyk mértékegységben 2'-7 1/2" lesz); ha a mértékegységet módosítja, a panel újraírja őket.

## Tovább

- [A modell auditálása: helyiségek, címkék, LOD, ütközések és csatlakozások](topic:audit-the-model)
- [Elemek keresése osztály, név vagy tulajdonság alapján](topic:find)
- [Elemek törlése, kivágása, másolása és beillesztése](topic:copy-paste)
