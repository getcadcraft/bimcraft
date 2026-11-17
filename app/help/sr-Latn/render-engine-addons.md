---
title: Dodavanje motora za renderovanje pomoću dodatka
summary: Šta dodatak može da doda na listu motora u dijalogu Renderuj, dozvola koju mu treba za pokretanje programa i šta Studio proverava i pita.
keywords: dodatak, addon, motor, motor za renderovanje, programer, engine.run, dozvola, program, skripta, potpisano, studio, api
from: 06295376
---

Dodatak (Podešavanja › Dodaci) može da doda motor na listu motora u {{ui:Render}}. Potpuni tekst za autore dodataka je odeljak 16 specifikacije dodatka; ukratko:

- Dodatak registruje motor sa identifikatorom koji počinje njegovim sopstvenim, nazivom, opcionalnim podešavanjima i **ili** programom koji se pokreće **ili** funkcijom u JavaScriptu koja crta sliku.
- Motor koji pokreće program treba dozvolu **`engine.run`**, prikazanu pre instalacije i u Podešavanjima. Radi samo u Studiju; u pregledaču se prikazuje kao datoteka za čuvanje.
- Dodatak navodi program (samo naziv datoteke, nikad ljusku), skriptu koja je **unutar potpisanog dodatka** i argumente od rezervisanih mesta i običnih reči. Studio pronalazi program ili te jednom pita da ga pokažeš.
- Kad dodatak prvi put pokrene program, **Studio te pita u svom dijalogu**: koji dodatak, koji program i da skripta može sve što program može. Dozvoli samo dodatku kome veruješ. Tvoj odgovor se pamti za taj dodatak i program.
- Paket (scena kao USD i datoteka podešavanja, uz glTF datoteku kad je dodatak traži) i skripta dodatka idu u novu privremenu fasciklu, program se pokreće tamo, a slika se vraća označena nazivom motora iz dodatka.

:::note
Dodaci mogu da dodaju motore za renderovanje samo iz API-ja dodataka 1.4. Primer rada za otvoreni alat za renderovanje iz komandne linije nalazi se u sopstvenom repozitorijumu; u tom renderovaču još nije pokrenut.
:::
