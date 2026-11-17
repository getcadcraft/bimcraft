---
title: Helyiség utózengési idejének ellenőrzése és meghallgatása
summary: Utózengési idő oktávsávonként minden helyiséghez (Sabine és Eyring szerint), a méret és a felületek alapján, saját célértékkel, valamint hang, taps vagy zene lejátszása a helyiség számított impulzusválaszán keresztül.
keywords: akusztika, utózengés, utózengési idő, rt60, sabine, eyring, elnyelés, visszhang, hang, hallgatás, impulzusválasz, beszéd, osztályterem, iroda, szőnyeg, mennyezeti panel, zaj
from: 16996cbb
---

A bal oldali panel {{ui:Helyiségakusztika}} szakasza kiszámítja, mennyi ideig hallatszik még a hang az egyes helyiségekben. A megnyitott IFC-modellből beolvassa minden helyiség alapterületét, belmagasságát, falait, ajtóit és ablakait. A modell nem változik.

## Felületek kiválasztása

Ahol a modell megadja, mi van egy felületen, a helyiség azt használja: minden fal típusának belső rétegét (gipszkarton, vakolat, tégla, beton és blokk ismert), a padló anyagát (fa vagy beton), és azt, hogy van-e csempézett mennyezet. A választások melletti címke jelzi, hogy az adat a modellből, alapértelmezettként vagy az Ön választásaként származik; másik felület kiválasztásával felülírhatja. Ami a modellben nincs megadva, az alapértelmezett marad. Az együtthatók **tipikus, közzétett értékek**; ha van termék vizsgálati adata, cserélje le rájuk. Írjon be egy **célértéket** (a leghosszabb középfrekvenciás utózengési időt, amelyet elfogad), és a célérték fölötti helyiség figyelmeztetést kap, a csökkentéséhez szükséges elnyeléssel együtt.

## A táblázat olvasása

Az utózengési időt 125 Hz és 4 kHz között adjuk meg. A Sabine-képlet az élénk, visszhangos helyiségekhez, az Eyring-képlet a csillapított helyiségekhez való; a *Használt* sorban az Eyring szerepel, ha az átlagos elnyelés 0,2 felett van. A levegő elnyelését is figyelembe veszi (nagy helyiségekben lerövidíti a magas sávokat). Ez statisztikai modell: feltételezi, hogy a hang egyenletesen terjed, ezért a hosszú vagy lapos helyiségek és a nagyon kicsi helyiségek csak durva tájékoztatást adnak, a bútorokat, az embereket és a nyitott ajtókat pedig nem számolja.

## Hallgatás

A {{ui:Lejátszás ebben a helyiségben}} gomb egy hangot játszik le (itt készített beszédet, tapsot, pengetett hangokat vagy **saját hangfájlját**, amely a számítógépén marad) a helyiségre számított impulzusválaszon keresztül: a közvetlen hang, az adott méretű doboz első visszaverődései, és egy farok, amely az egyes sávokban a helyiség saját utózengési idejével halkul el. A {{ui:Lejátszás szárazon}} gomb ugyanazt a hangot ugyanazon a szinten, helyiség nélkül játssza le. Az impulzusválaszt vagy a helyiségben lévő hangot WAV-fájlként mentheti. Olyan hangzású, mint egy ilyen méretű és felületű helyiség, de nem hasonlít semmilyen valódi helyiségre.

## Emberek és bútorok

Írja be az **ebben a helyiségben tartózkodó személyek számát**, hogy hozzáadódjon az elnyelésük. A modellben szereplő bútorok (kanapék, ágyak, székek, asztalok, szekrények, név alapján felismerve) saját elnyelést adnak. A számok durva tervezési értékek, kerekítve; fontos helyiségnél mérésekkel cserélje le őket.

## Forrás és hallgató

A {{ui:Forrás és hallgató}} alatt nyomja meg a {{ui:Forrás elhelyezése}} vagy a {{ui:Hallgató elhelyezése}} gombot, majd kattintson a helyiség alaprajzára. A lejátszott hang innen hallatszik: a közvetlen hang a távolság után érkezik, az utózengő rész pedig az adott távolsághoz tartozó szinten van. A távolságmezőhöz való visszatéréshez töröljön mindkettőt.

## Egyenlőtlen elnyelés és helyiségmódusok

A {{ui:Egyenlőtlen elnyelés (dobozszoba)}} alatt adja meg a helyiséget dobozként, és válassza ki a padlójának, mennyezetének és falainak felületét. A táblázat a Sabine és Eyring mellé felveszi a Fitzroy- és az Arau-Puchades-képletet: ezek a három szemközti felületpárt külön kezelik, így egy szőnyeges helyiség kemény mennyezettel nem számítódik túl rövidnek. Ha a párok sokat térnek el, egy megjegyzés jelzi, melyiknek érdemes hinni. A táblázat alatt a **Helyiségmódusok** a doboz legalacsonyabb állóhullámait sorolja fel, és azt a frekvenciát, amely alatt a helyiségben külön módusok vannak az egyenletes hangtér helyett. Ezek egy dobozszoba előrejelzései, tervezési segédeszközök, nem mérések.

## Mértékegységek

A helyiségek területét, magasságát, térfogatát és távolságait az Ön által választott {{ui:Mértékegységek}} szerint jelenítjük meg (négyzetláb és köbláb, hüvelyk, milliméter, centiméter vagy méter). A számítás maga SI-egységekben marad; csak a megjelenítés változik. Az időértékek (másodperc), a frekvenciák és a szintek nem változnak.
