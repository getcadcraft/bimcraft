---
title: Atvaizdavimo variklio pridėjimas priedu
summary: Ką priedas gali pridėti į atvaizdavimo dialogo variklių sąrašą, kokį leidimą jam reikia programai paleisti ir ką Studio tikrina bei klausia.
keywords: priedas, addon, variklis, atvaizdavimo variklis, kūrėjas, engine.run, leidimas, programa, scenarijus, pasirašytas, studio, api
from: 06295376
---

Priedas (Parametrai › Priedai) gali pridėti variklį į {{ui:Atvaizduoti}} variklių sąrašą. Visas tekstas priedų autoriams yra priedo specifikacijos 16 skyrius; trumpai:

- Priedas užregistruoja variklį su id, kuris prasideda jo paties pavadinimu, pavadinimu, neprivalomais parametrais ir **arba** programa, kurią reikia paleisti, **arba** JavaScript funkcija, kuri piešia vaizdą.
- Variklis, kuris paleidžia programą, reikalauja leidimo **`engine.run`**, rodomo prieš įdiegiant ir Parametrų skiltyje. Jis veikia tik Studio; naršyklėje jis rodomas kaip failas, kurį reikia įrašyti.
- Priedas nurodo programą (paprastas failo pavadinimas, ne apvalkalas), scenarijų, kuris yra **pasirašytame priede**, ir argumentus, sudarytus iš žymeklių bei paprastų žodžių. Studio randa programą arba vieną kartą paprašo nurodyti jos kelią.
- Pirmą kartą, kai priedas paleidžia programą, **Studio klausia savo dialoge**: kuris priedas, kuri programa ir kad scenarijus gali daryti viską, ką gali programa. Leiskite tai tik priedui, kuriuo pasitikite. Jūsų atsakymas įsimenamas tam priedui ir programai.
- Paketas (scena kaip USD ir parametrų failas, o kai priedas to prašo, ir glTF failas) bei priedo scenarijus įdedami į naują laikinąjį aplanką, programa paleidžiama ten, o vaizdas grįžta pažymėtas priedo variklio pavadinimu.

:::note
Priedai gali pridėti atvaizdavimo variklius tik nuo priedų API 1.4 versijos. Pavyzdys su atvirojo kodo komandinės eilutės atvaizdavimo programa yra jos paties saugykloje; jis dar nebuvo paleistas toje programoje.
:::
