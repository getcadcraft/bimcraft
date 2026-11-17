---
title: Épülettömeg kidolgozása telektanulmányból
summary: Vegyen át egy épülettömeget a CivilCraft telepnézetéből, és dolgozza ki szintekké, falakká és padlókká, a telep térképi helyét megtartva.
keywords: tömeg, épülettömeg, tömegformálás, telektanulmány, kidolgozás, CivilCraft, átadás, szintek, falak, padlók, alapterület, georeferálás, IFC
from: 557b94d1
---

A CivilCraft telepnézete épülettömegeket rajzolhat a telken, és tesztelheti őket a talajhoz, a megadott korlátokhoz és a napfényhez képest. A **Kidolgozás a BimCraftban** új lapon megnyitja a BimCraftot a tömegekkel; a **Tömegek IFC-ként** egy fájlba menti őket, amelyet itt a szokásos módon megnyithat. Mindkét esetben minden tömeg egy telekként, egy épületként érkezik meg, amelynek minden emeletéhez egy szint tartozik, és egy blokként (maga a tömeg), amely a saját számait viseli.

## Tömeg kidolgozása

1. Válasszon ki egy tömeget a 3D nézetben. A Tulajdonságok megmutatja a rendeltetését, az emeleteket és az emeletmagasságot, az alapterületet, a bruttó szintterületet, a lejtőn való elhelyezkedését és a telkét.
2. Kattintson a **Tömeg kidolgozása** gombra.

Egyetlen visszavonható lépésben az épület minden szintjére fal kerül az alapterület köré (az alapterület a falak külső síkja; minden fal a fölötte lévő szintig ér, a legfelső egy emeletnyi magas), és egy padló az egész épület alá. A blokk helyére az épület megőrzi a tanulmány számait a `CadCraft_SiteMass` tulajdonságkészletben, kidolgozottként megjelölve. Tető nincs: a tető a tervtől függ.

## A telek helye

A CivilCraft fájlja a projekt saját hosszúsági mértékegységében íródik, és ha a CivilCraft projektjének volt koordináta-rendszere, azt a projekt térképi átalakításaként hordozza. A tömeg kidolgozása ezt nem érinti, így az épület ott marad, ahol a térkép szerint van.
