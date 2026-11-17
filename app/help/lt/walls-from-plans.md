---
title: Sienos iš planų rinkinio (PDF ar skenavimas)
summary: Paverskite PDF puslapius ar nuskenuotą brėžinį sienomis, durimis ir langais, po vieną aukštą kiekvienam puslapiui, puslapį laikant po kiekvienu planu.
keywords: pdf, planai, planų rinkinys, skenavimas, nuskenuotas brėžinys, tiff, sekimas, sienos iš pdf, sienos iš skenavimo, aukštai, puslapiai, mastelis, durys, langai, atsidarymas, palanga, pagrindas
from: b70d9db7
---

## Ką darysite

Pradėkite modelį nuo planų, kurie turite popieriuje: PDF (nubrėžtas linijomis arba skenavimas PDF viduje) ar skenavimas (PNG, JPEG, TIFF su vienu ar daugeliu puslapių). Kiekvienas puslapis tampa vieno aukšto sienomis, durimis ir langais.

## Žingsniai

1. Įjunkite {{ui:Braižymas}}. Pasirinkite {{ui:Versija}} › {{ui:Iš brėžinio…}}, tada {{ui:Pasirinkite brėžinį…}} ir pasirinkite PDF ar skenavimą.
2. **Puslapiai ir aukštai.** Kiekvienas puslapis išvardytas su tuo, kas jis yra (**linijų brėžinys** arba **paveikslėlis (susektas)**), ir aukštu, į kurį jis eina: vienu iš jūsų turimų aukštų, **nauju aukštu virš kitų** arba **praleisti šį puslapį**. Puslapiai priskiriami jūsų aukštams eilės tvarka; bet kurį iš jų pakeiskite.
3. **Mastelis.** PDF atveju nurodykite, kaip jis nubrėžtas (**1 : 100**, **1 : 50**…). Visiems kitiems atvejams arba kai nežinote, pasirinkite **iš žinomo atstumo**: peržiūroje spustelėkite du matmens ar mastelio juostos galus, tada įveskite tikrą atstumą. Visi puslapiai naudoja vieną mastelį.
4. Pasirinkite **sienos tipą** ir **naujo aukšto aukštį**. Palikite pažymėtą **Laikyti kiekvieną puslapį po jo aukšto planu**, kad matytumėte kiekvieną puslapį plonomis linijomis po jo planu.
5. Eilutė po pasirinkimais parodo, kiek sienų, durų ir langų bus sukurta ir kiek aukštų. Spustelėkite {{ui:Sukurti juos}}.

## Kaip ji skaito puslapį

- **Sienos** atsiranda iš lygiagrečių linijų porų, nutolusių ne daugiau kaip 600 mm (abu sienos paviršiai); siena yra tokio storio, koks yra tarpas. Brūkšniavimas ir raidės praleidžiami.
- **Durys ir langai.** Sienos tarpas (nuo 500 iki 2600 mm), šalia kurio nubrėžtas durų atsidarymas, yra durys, prikabintos prie vieno tarpo galo ir atsidarančios į atsidarymo pusę. Tarpas ar siena su palangės linijomis yra langas. Tarpas be nieko yra durys iki 1300 mm ir langas virš to.
- **Skenavimas** pirmiausia ištiesinamas, jei buvo nuskenuotas įstrižai (dialogas tai nurodo), paverčiamas juodai baltu, išvalomas nuo dėmių ir susekamas; **PDF puslapis, kuris yra paveikslėlis**, pirmiausia nubraižomas, o po to apdorojamas taip pat. Sekimas randa kiekvieno brūkšnio centrą ir pritaiko jam tiesias linijas bei lankus; jis nenaudoja tinklo ir neturi mokyto modelio.
- **Kambariai** atsiranda savaime iš uždarų kontūrų, kuriuos sudaro sienos. Kai PDF turi tekstą, kambarys gauna pavadinimą iš jame esančių raidžių (didžiausių; matmuo, mastelis ar lapo numeris nėra pavadinimas). Skenavime teksto nėra, todėl jų kambariai išlaiko programos suteiktus pavadinimus.
- **Viskas, perskaityta iš puslapio, pažymima kaip nepatikrinta**: kiekviena siena, durys, langas ir kambarys turi brūkšninį rėmelį ir „?“ plane, kol jūs jį patikrinsite. Pažymėkite tai, ką patikrinote, ir naudokite {{ui:Įrankiai}} › {{ui:Pažymėti kaip patikrintą}}. Žr. [Pažymėti elementus kaip patikrintus ar lauke patvirtintus](topic:verification).

## Ką turėtumėte matyti

- Sienos, durys, langai ir kambariai kiekviename aukšte, ir visi nauji aukštai, kaip vienas žingsnis: {{key:Mod+Z}} atšaukia viską.
- Kiekvienas puslapis kaip plonos linijos po jo aukšto planu, išvardytas {{ui:Versija}} › {{ui:Iš brėžinio…}} su {{ui:Pašalinti}}.

:::note
Tai, ką davė linijos, su puslapio tikslumu. Skenavimas gali prarasti silpną sieną, sujungti dvi labai arti esančias sienas arba rasti sieną dėmėje; atsidarymas, kurio brėžinyje nėra, tarpą paverčia paprastomis durimis. Prieš pasikliaudami patikrinkite kiekvieną aukštą pagal puslapį ir ištaisykite, kas neteisinga, su {{ui:Siena}}, {{ui:Durys}} ir {{ui:Langas}} įrankiais.
:::
