---
title: Rad sa slojevima i listovima
summary: Uključujte i isključujte slojeve crteža, prebacujte se između prostora modela i listova te razumijete kako listovi prikazuju model kroz svoje viewporte.
keywords: slojevi, uključivanje sloja, zamrzni, odmrzni, listovi, layouti, papirni prostor, kartice, viewporti, upravitelj slojeva, la
from: a9a16b53
---

## Što ćete raditi

Očistite prikaz zauzetog crteža isključivanjem slojeva, zatim pogledajte listove crteža jedan po jedan.

## Koraci: slojevi

1. Otvorite DWG ili DXF crtež.
2. Pronađite popis {{ui:Slojevi}} lijevo. Svaki sloj ima potvrdni okvir, uzorak boje i naziv.
3. Odznačite sloj da sakrijete sve na njemu.
4. Kliknite {{ui:Sve isključeno}} da sakrijete svaki sloj.
5. Označite samo slojeve koje želite vidjeti.
6. Kliknite {{ui:Sve uključeno}} da ponovno prikažete sve.

## Što biste trebali vidjeti

Slojevi nestaju i ponovno se pojavljuju odjednom, na {{ui:Model}} i na svakom listu. Slojevi koji su isključeni ili zamrznuti u samom crtežu počinju neoznačeni.

## Koraci: listovi

1. Pogledajte red kartica iznad crteža: {{ui:Model}}, zatim svaki list po nazivu.
2. Kliknite karticu lista.
3. Pogledajte list: papir leži na tamnijoj podlozi, a svaki viewport prikazuje svoj dio modela u vlastitom mjerilu i kutu.
4. Uvećajte viewport da pročitate detalj. Zumirate list, a ne viewport, pa se cijeli list pomiče zajedno.
5. Kliknite {{ui:Prilagodi}} ili dvaput kliknite da ponovno vidite cijeli list.

## Kako ovdje rade listovi

List (layout, odnosno papirni prostor) sadrži zaglavlje crteža i viewporte koji gledaju u prostor modela. BimCraft crta svaki viewport odrezan po svom rubu, u vlastitom mjerilu i zakretu, i skriva slojeve zamrznute u tom viewportu. Prvi viewport svakog lista je sam list i ne crta se dvaput.

## Česte pogreške

- **Očekivanje da će promjene slojeva biti spremljene.** Postavke slojeva utječu samo na prikaz, dok ne otvorite drugu datoteku.
- **Očekivanje upravljanja slojevima po viewportu.** Popis {{ui:Slojevi}} prebacuje sloj svugdje. Slojevi koje crtež zamrzne u jednom viewportu ostaju zamrznuti tamo.
- **Traženje pretraživanja slojeva ili stanja slojeva.** Još nije izrađeno. Popis je u redoslijedu crteža.
- **Očekivanje rada unutar viewporta.** Nema se što aktivirati: BimCraft samo prikazuje list. Upotrijebite {{ui:Model}} za izravni pogled na prostor modela.
