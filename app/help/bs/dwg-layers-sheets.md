---
title: Rad sa slojevima i listovima
summary: Uključujte i isključujte slojeve crteža, prebacujte se između prostora modela i listova, i shvatite kako listovi prikazuju model kroz svoje prozore prikaza.
keywords: slojevi, uključivanje sloja, isključivanje sloja, zamrzavanje, odmrzavanje, listovi, rasporedi, prostor papira, kartice, prozori prikaza, upravljač slojevima, la
from: a9a16b53
---

## Šta ćete raditi

Očistite prikaz zauzetog crteža isključivanjem slojeva, pa zatim pogledajte listove crteža jedan po jedan.

## Koraci: slojevi

1. Otvorite DWG ili DXF crtež.
2. Pronađite listu {{ui:Slojevi}} lijevo. Svaki sloj ima kvadratić za označavanje, uzorak boje i naziv.
3. Odznačite sloj da sakrijete sve na njemu.
4. Kliknite {{ui:Sve isključi}} da sakrijete svaki sloj.
5. Označite samo slojeve koje želite vidjeti.
6. Kliknite {{ui:Sve uključi}} da ponovo sve prikažete.

## Šta treba da vidite

Slojevi nestaju i ponovo se pojavljuju odjednom, na {{ui:Model}} i na svakom listu. Slojevi koji su isključeni ili zamrznuti u samom crtežu počinju neoznačeni.

## Koraci: listovi

1. Pogledajte red kartica iznad crteža: {{ui:Model}}, pa svaki list po nazivu.
2. Kliknite karticu lista.
3. Pogledajte list: papir stoji na tamnijoj podlozi, a svaki prozor prikaza prikazuje svoj dio modela u svojoj razmjeri i rotaciji.
4. Zumirajte prozor prikaza da čitate detalje. Zumirate list, a ne prozor, pa se cijeli list pomjera zajedno.
5. Kliknite {{ui:Uklopi}} ili dvaput kliknite da ponovo vidite cijeli list.

## Kako ovdje rade listovi

List (raspored, ili prostor papira) sadrži naslovni blok i prozore prikaza koji gledaju u prostor modela. BimCraft crta svaki prozor prikaza odsječen po njegovoj ivici, u njegovoj razmjeri i rotaciji, i sakriva slojeve zamrznute u tom prozoru. Prvi prozor prikaza svakog lista je sam list i ne crta se dvaput.

## Česte greške

- **Očekivanje da se promjene slojeva spašavaju.** Postavke slojeva utiču samo na prikaz, dok ne otvorite drugu datoteku.
- **Očekivanje kontrole sloja po prozoru prikaza.** Lista {{ui:Slojevi}} prebacuje sloj svuda. Slojevi koje je crtež zamrznuo u jednom prozoru prikaza ostaju zamrznuti tamo.
- **Traženje pretrage slojeva ili stanja slojeva.** Još nije izrađeno. Lista je u redoslijedu crteža.
- **Očekivanje rada unutar prozora prikaza.** Nema šta da se aktivira: BimCraft samo prikazuje list. Koristite {{ui:Model}} da direktno pogledate prostor modela.
