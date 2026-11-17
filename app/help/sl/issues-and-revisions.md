---
title: Zadeve, revizije in dnevnik sprememb risb
summary: Zabeležite vsak komplet listov, ki ga oddate, si oglejte, kaj se je od tedaj spremenilo na vsakem listu in elementu, ter hranite navodila za gradbišče, delavniške risbe in povezane modele pri ustrezni zadevi.
keywords: zadeva, izdan komplet, oddan komplet, oddaja, revizija, revizije, kaj se je spremenilo, od zadeve, dnevnik sprememb, dnevnik sprememb risb, seznam risb, pošiljka, navodilo za gradbišče, delavniška risba, povezani model, razpis, gradnja, posnetek, primerjaj
from: 4c732832
---

## Kaj boste naredili

Zabeležite zadevo: kateri listi so bili izdani, kdaj, za kateri namen in pri kateri reviziji vsak. Pozneje vprašajte, kaj se je spremenilo od te zadeve. Navodila za gradbišče in vrnjene delavniške risbe hranite pri zadevi.

## Koraki

1. V levi plošči odprite **Zadeve in revizije**.
2. Izberite **Zabeleži zadevo**. Revizija je predlagana (A, nato B; oštevilčena, na primer P1, se šteje navzgor). Izberite, za kaj je izdana, kdo jo dobi, datum in liste. Ko je nastavljena faza projekta, namen sledi njej. Ko ima paket za dovoljenje seznam podpornih dokumentov, so liste, povezane s tem seznamom, označene samodejno.
3. Pustite označeno **Shrani tudi kopijo modela, kakor je bil izdan**, da model ostane točno tak, kot je bil oddan. Kopija se prenese; njeno ime, velikost in SHA-256 se shranijo pri zadevi.
4. Izberite **Zabeleži to zadevo**. List, ki se je spremenil od zadnje izdaje, dobi novo revizijo. List, ki se ni spremenil, ohrani svojo revizijo. Naslovna glava vsakega lista prikazuje njegovo revizijo.
5. Če želite videti, kaj se je spremenilo, izberite **Spremembe od** ob zadevi. Vsak list je označen kot Enako ali Spremenjeno, z elementi, ki so bili na njem dodani, spremenjeni in odstranjeni. Kliknite število, da izberete te elemente.
6. Izberite **Dodaj zapis** za navodilo za gradbišče, delavniško risbo, komplet označb, povezani model ali opombo. Izberite zadevo, na katero se nanaša. Izbrana datoteka se zabeleži po imenu, velikosti in SHA-256; datoteka ostane tam, kjer je.
7. **Dnevnik sprememb risb** prikazuje eno vrstico za vsak list in en stolpec za vsako zadevo. **Prenesi dnevnik sprememb (CSV)** ga shrani z zadevami in zapisi.
8. **Shrani zgodovino zadev** zapiše datoteko `.issues.json`. MarkupCraft, TakeoffCraft in DetailCraft jo preberejo z **Preberi zgodovino zadev**.

## Dobro je vedeti

- Zgodovina je hranjena v datoteki IFC (nabor lastnosti `CadCraft_Issues` na projektu). Drugi programi jo prezrejo.
- List šteje kot spremenjen, ko se spremeni njegova lastna nastavitev ali ko se spremeni element, ki ga prikazuje: tloris prikazuje svojo etažo, pogled ali prerez ves model, tabela vrat ali oken pa svoja vrata ali okna.
- Element šteje kot spremenjen, ko se spremeni lastnost, njegov položaj, velikost ali oblika.
- Če želite videti natanko, katera lastnost se je spremenila, odprite shranjeno kopijo izdanega modela z **Primerjaj različice**.
- Odstranitev zadeve ohrani njene zapise, brez zadeve. Vsak korak lahko razveljavite z {{ui:Razveljavi}}.
- Model z več kot 60.000 elementi ne hrani zapisa vsakega elementa pri zadevi. Listi se še vedno primerjajo.

## Še ni izdelano

- Listi se ne shranijo kot PDF skupaj z zadevo.
- Revizijski oblak se ne riše na lastnih listih programa BimCraft. Oblake zabeležite v MarkupCraft pri zadevi.
