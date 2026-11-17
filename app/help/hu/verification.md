---
title: Elemek megjelölése ellenőrzöttként vagy helyszínen ellenőrzöttként
summary: A PDF-ből vagy szkennelésből olvasott elem addig ellenőrizetlen, amíg valaki nem ellenőrzi. Jelölje meg az elemeket ellenőrzöttként, vagy helyszínen ellenőrzöttként (LOD 500), megadva, ki, mikor és hogyan mérte, és adjon át egy as-built modellt, amely jelzi, melyik melyik.
keywords: ellenőrizetlen, ellenőrzött, helyszínen ellenőrzött, as built, as-built, lod 500, lezárás, átadás, helyszínen mért, mérőszalag, lézer, szkennelés, felmérés, meglévő épület, átalakítás, ellenőrzöttként megjelölés, ellenőrzés, 7. szakasz
from: df35d908
---

## Mit fog csinálni

Nyomon követheti, hogy a modellben mit nézett meg valóban valaki. Egy elemnek három jelölése lehet, vagy nincs jelölése:

- **Ellenőrizetlen**: a program PDF-ből, szkennelt rajzból, átrajzolt rajzból vagy pontfelhő-szkennelésből ismerte fel. Még senki nem ellenőrizte.
- **Ellenőrzött**: egy személy összehasonlította a forrásrajzzal.
- **Helyszínen ellenőrzött (LOD 500)**: egy személy helyszínen megmérte. Hogy ki, mikor és hogyan mérte, az elemhez együtt marad.
- **Nincs jelölés**: személy rajzolta. A modell nem állít semmit róla.

## Lépések

1. Válasszon ki egy elemet vagy többet (falakat, ajtókat, ablakokat, helyiségeket, bármilyen elemet).
2. A {{ui:Properties}} alatt nyissa meg az {{ui:Verification}} részt.
3. Írja be, ki ellenőrizte vagy mérte. A dátum a mai, hacsak nem módosítja.
4. Kattintson a {{ui:Mark as checked}} gombra. Helyszíni méréshez válassza ki, hogyan mérték (mérőszalag, lézeres távolságmérő, szkennelés, felmérés), majd kattintson a {{ui:Mark as field-verified (LOD 500)}} gombra.
5. A {{ui:Mark as unverified}} és a {{ui:Take the mark off}} visszaállítja az előző állapotot. Minden kattintás egy lépés, amelyet a teljes kijelölésre vissza lehet vonni.

A kijelölés gyors megjelöléséhez: {{ui:Tools}} › {{ui:Mark as checked}} (begépelve: `MARKCHECKED`) ellenőrzöttként jelöli meg a kijelölést, a nevével és a mai dátummal.

## Mit kell látnia

- Az alaprajzon egy ellenőrizetlen elem szaggatott keretet és „?” jelet kap; a helyszínen ellenőrzött elem pipát. A {{ui:Show verification marks in the plan}} jelölését az {{ui:Audit}} részben véve ki, elrejtheti őket.
- A {{ui:Schedules}} › {{ui:Verification}} felsorolja az összes megjelölt elemet a szintjével, állapotával, kivel, mikor, hogyan és honnan származik.
- Az ellenőrzés listázza az ellenőrizetlen elemeket, és a helyszínen ellenőrzött elemet LOD 500-ként számolja. Lásd [Modell ellenőrzése](topic:audit-the-model).

## Szkennelésből

Amikor a szkennelést összehasonlítja a modellel, a {{ui:Az egyező elemek megjelölése helyszínen ellenőrzöttként}} minden olyan elemet megjelöl, amelyet a szkennelés a tűréshatáron belül kivitelezettnek látott, a „scan” módszerrel és a tűréshatárral a megjegyzésben. Lásd [Szkennelés összehasonlítása a modellel](topic:compare-scan-with-model).

:::warning
Ez az összehasonlítás minden elem határoló dobozát szkennelési pontokkal párosítja. Ez nem felmérés. Olyan elemekhez használja, amelyeket szemmel is megnézett.
:::

## Az as-built modell és az átadási csomag

Az {{ui:Build the handover package}} gomb az {{ui:Assets}} lapon az as-built modellt a zip-be teszi, a következőkkel:

- egy nyilatkozat a projektről arról, hány elem helyszínen ellenőrzött, ellenőrzött, ellenőrizetlen és jelöletlen;
- `as-built/verified-elements.csv`: minden elem és helyiség az állapotával, kivel, mikor és hogyan;
- `as-built/as-built-drawings.pdf`: a rajzkészlet a jelenlegi állapotában;
- a rajzváltozási napló, ha a modellből már kiadott rajzkészletek vannak.

Lásd [Eszközök és karbantartás](topic:assets-and-maintenance).

## Hogyan tárolódik az IFC-ben

Minden megjelölt elem a `CadCraft_Verification` tulajdonságkészletet viseli: State, By, On, Method, Source, Note és LevelOfDevelopment (`LOD 500` helyszínen ellenőrzött állapotban). Ezek egyszerű szöveges tulajdonságok, így más programok is listázzák őket, és a Keresés, a Színezés tulajdonság szerint és a címkés kimutatások is használhatják. Az as-built összefoglaló a projekten lévő `CadCraft_AsBuilt` tulajdonságkészlet. A készlet nélküli elemet nem mérték helyszínen.

## Tovább

- [Falak tervsorozatból](topic:walls-from-plans)
- [Modell ellenőrzése](topic:audit-the-model)
