---
title: Dodavanje motora renderovanja pomoću dodatka
summary: Šta dodatak može dodati na listu Motor u dijalogu Renderuj, dozvola koju mu treba za pokretanje programa, i šta Studio provjerava i pita.
keywords: dodatak, addon, motor, motor renderovanja, programer, engine.run, dozvola, program, skripta, potpisan, studio, api
from: 06295376
---

Dodatak (Postavke › Dodaci) može dodati motor na listu „Motor“ u {{ui:Renderuj}}. Potpuni tekst za autore dodataka je odjeljak 16 specifikacije dodataka; ukratko:

- Dodatak registruje motor sa identifikatorom koji počinje njegovim vlastitim, nazivom, opcionalnim postavkama i **ili** programom za pokretanje **ili** funkcijom u JavaScriptu koja crta sliku.
- Motor koji pokreće program treba dozvolu **`engine.run`**, koja se prikazuje prije instalacije i u Postavkama. Radi samo u Studiju; u pregledniku se prikazuje kao datoteka za spašavanje.
- Dodatak navodi program (običan naziv datoteke, nikada ljusku), skriptu koja je **unutar potpisanog dodatka**, i argumente sastavljene od zamjenskih oznaka i običnih riječi. Studio pronalazi program ili vas jednom pita da ga pokažete.
- Prvi put kad dodatak pokrene program, **Studio vas pita u svom vlastitom dijaloškom okviru**: koji dodatak, koji program, i da skripta može raditi sve što program može. Dozvolite to samo dodatku kojem vjerujete. Vaš odgovor se pamti za taj dodatak i program.
- Paket (scena kao USD i datoteka postavki, sa glTF datotekom kad dodatak to traži) i skripta dodatka idu u novu privremenu fasciklu, program se pokreće tamo, i slika se vraća označena nazivom motora dodatka.

:::note
Dodaci mogu dodavati motore renderovanja samo od API-ja dodataka 1.4. Primjer za renderer otvorenog koda sa komandne linije nalazi se u njegovom vlastitom repozitoriju; još nije pokrenut u tom rendereru.
:::
