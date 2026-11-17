---
title: Dodavanje motora za render dodatkom
summary: Što dodatak može dodati na popis Motor u dijaloškom okviru Render, dopuštenje koje mu treba za pokretanje programa te što Studio provjerava i pita.
keywords: dodatak, addon, motor, motor za render, razvojni programer, engine.run, dopuštenje, program, skripta, potpisan, studio, api
from: 06295376
---

Dodatak (Postavke › Dodaci) može dodati motor na popis Motor u {{ui:Render}}. Cijeli tekst za autore dodataka nalazi se u odjeljku 16 specifikacije dodatka; ukratko:

- Dodatak registrira motor s identifikatorom koji počinje njegovim vlastitim prefiksom, zatim s nazivom, neobaveznim postavkama i **ili** programom koji se pokreće **ili** funkcijom u JavaScriptu koja crta sliku.
- Motor koji pokreće program treba dopuštenje **`engine.run`**, koje se prikazuje prije instalacije i u Postavkama. Radi samo u Studiju; u pregledniku se prikazuje kao datoteka za spremanje.
- Dodatak navodi program (samo naziv datoteke, nikad ljusku), skriptu koja je **unutar potpisanog dodatka** i argumente sastavljene od oznaka mjesta i običnih riječi. Studio pronalazi program ili vas jednom zamoli da ga pokažete.
- Prvi put kad dodatak pokrene program, **Studio vas pita u vlastitom dijaloškom okviru**: koji dodatak, koji program i da skripta može učiniti sve što program može. Dopustite to samo dodatku kojem vjerujete. Vaš odgovor se pamti za taj dodatak i program.
- Paket (scena kao USD i datoteka postavki, s glTF datotekom kad to dodatak traži) i skripta dodatka idu u novu privremenu mapu, program se pokreće tamo i slika se vraća označena nazivom motora dodatka.

:::note
Dodaci mogu dodavati motore za render samo od API-ja dodatka 1.4. Primjer za naredbeni renderer otvorenog koda nalazi se u vlastitom repozitoriju; u tom rendereru još nije pokrenut.
:::
