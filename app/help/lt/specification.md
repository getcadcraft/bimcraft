---
title: Specifikacijos rašymas pagal modelį
summary: Po vieną specifikacijos skyrių kiekvienam naudojamam sienos, durų, langų, perdangos ir apdailos tipui, su faktais, nuskaitytais iš modelio, ir jūsų tekstu, sudaryta į PDF arba Word dokumentą.
keywords: specifikacija, specas, darbo brėžiniai, 5 etapas, statybos dokumentai, skyrius, sienos tipas, durų tipas, lango tipas, apdaila, klasifikacija, uniclass, omniclass, masterformat, dokumentas, pdf, word, docx, žiniaraščiai
from: a6acc6d4
---

## Ką darysite

Gaukite specifikaciją, kuri seka modelį: skyrių kiekvienam tipui, kuris iš tiesų yra pastate, kiekvieną su jo konstrukcija ir kiekiais, nuskaitytais iš modelio, ir tekstu, kurį jam parašote.

## Žingsniai

1. Įjunkite {{ui:Braižymas}}, kairiajame skydelyje atidarykite **Žiniaraščius** ir spustelėkite **Specifikacija**.
2. Dialogas rodo po vieną skyrių kiekvienam sienos tipui, durų tipui, lango tipui, perdangai ir naudojamai patalpos apdailai. Po kiekviena antrašte yra jos **faktai**, nuskaityti iš modelio: storis, sluoksniai vienas po kito, išvystymo lygis, matmenys, kiek jų ir kokia apimtis. Skyrius, kurio elementai turi klasifikacijos kodą, rodo kodą savo antraštėje.
3. Rašykite specifikacijos tekstą langelyje po skyriumi. **Pasirinkti jo elementus** parodo, ką skyrius apima.
4. Spustelėkite **Įrašyti**. Tai vienas žingsnis Anuliuoti, o tekstas išlaikomas pastato faile.
5. Atidarykite **Dokumentai iš modelio**, pasirinkite šabloną **Specifikacija** ir spustelėkite **Peržiūra**, tada įrašykite kaip PDF, Word arba Markdown. Žr. [Dokumentai iš modelio](topic:documents-from-the-model).

## Darbo brėžinių žiniaraščiai kaip dokumentas

Šablonas **Darbo brėžinių žiniaraščiai** spausdina durų, langų ir apdailos žiniaraščius tiesiai iš modelio jūsų biuro išdėstymu. Savo šablone įrašykite `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` arba išsaugoto nustatymo pavadinimą, pavyzdžiui, `{{schedule Door schedule by floor}}`. `{{specification}}` spausdina specifikaciją.

## Naudinga žinoti

- Faktai priklauso modeliui. Jie keičiasi, kai keičiasi modelis; jūsų tekstas – ne.
- BimCraft neįrašo jokios standarto normos ar gamintojo teksto. Skyrius be teksto spausdinamas su užrašu „Specifikacijos tekstas dar neparašytas.“
- Tekstas, parašytas tipui, kurio nebėra modelyje, išlaikomas ir įrašomas skyriuje „Tekstas tipams, kurių nebėra modelyje“.
- Norėdami pakeisti bendrinį tipą konkrečiai konstrukcijai, žr. [Sienų įrankiai](topic:wall-tools) (Pakeisti tipą).
