---
title: Skontrolovať potrubia a VZT potrubia voči konštrukcii
summary: Spustite hotové sady kolízií potrubí a VZT potrubí voči stenám, doskám, nosníkom a stĺpom, nájdite úseky bližšie ku konštrukcii, než je ich izolácia a odstup, a vypíšte otvory, ktoré úseky potrebujú cez steny a dosky, ako CSV a BCF.
keywords: mep, kolízia, kontrola kolízií, koordinácia, konštrukcia, steny, dosky, nosníky, stĺpy, odstup, mäkká kolízia, izolácia, medzera, otvor, otvory, prestup, chránička, jadro, stavebné práce, bcf, csv
from: 2d597f01
---

## Čo budete robiť

Zabezpečte, aby sa rozvody zmestili do budovy: čo zasahuje do konštrukcie, čo prechádza príliš blízko nej a kde sa v stenách a doskách potrebujú otvory. Otvorte {{ui:Kontrola kolízií}} v ľavom paneli; sekcia **Potrubie a VZT potrubie voči konštrukcii** je pod bežnou kontrolou.

## Tvrdé kolízie

Oba zoznamy sád teraz ponúkajú aj **Potrubie a VZT potrubie**, **Steny**, **Dosky a strechy**, **Nosníky**, **Stĺpy** a **Konštrukciu** (všetky štyri), s počtom prvkov v každej. Kliknite na {{ui:Potrubie a VZT potrubie × konštrukcia}}, aby sa vybrali prvý a posledný zoznam a spustila sa kontrola; alebo vyberte ľubovoľný pár sami a kliknite na {{ui:Spustiť}}. Pozri [Kontrola kolízií](topic:clash-check).

## Odstupy

Niektoré rozvody potrebujú okolo seba priestor: na izoláciu, na prácu alebo na chráničku.

1. Zadajte hrúbku **Izolácie** úseku potrubia alebo VZT potrubia vo Vlastnostiach (nič sa pre ňu nekreslí).
2. V kontrole kolízií zadajte **Medzeru okolo potrubí a VZT potrubí** (mm).
3. Kliknite na {{ui:Skontrolovať odstupy}}: každá časť, ktorá je bližšie k stene, doske, nosníku alebo stĺpu, než je jej izolácia plus medzera, sa vypíše s vzdialenosťou, ktorú má, a vzdialenosťou, ktorú chce. Kliknutím na riadok zobrazíte obe.

Časť, ktorá prechádza cez stenu alebo dosku, je otvor, nie odstup, a vypíše sa tam.

## Potrebné otvory

Kliknite na {{ui:Potrebné otvory}}. Ak stredová čiara úseku prechádza stenou alebo doskou, BimCraft vypíše otvor, ktorý potrebuje: okrúhly pre okrúhle potrubie alebo VZT potrubie, inak obdĺžnikový, s rozmermi vonkajšej veľkosti úseku plus dvojnásobok jeho izolácie plus dvojnásobok medzery, vycentrovaný na mieste, kde úsek prechádza. Kliknutím na riadok zobrazíte úsek a stenu alebo dosku.

- {{ui:Otvory ako CSV}}: jeden riadok na každý otvor s úsekom, jeho veľkosťou a izoláciou, veľkosťou otvoru, prvkom, cez ktorý prechádza, a jeho GlobalId, podlažím, súradnicami X, Y a Z stredu a tým, ako ďaleko úsek prechádza.
- {{ui:Otvory ako problémy BCF}}: jeden problém na každý otvor, s kamerou, ktorá naň smeruje, a vybratým úsekom a prvkom, pre program statika konštrukcie.

:::note
Nič sa nevyrezáva: otvory sú zoznam pre ľudí, ktorí ich navrhujú. Medzeru zadávate vy; žiadna norma neurčuje, aký veľký musí otvor byť. Nosníky a stĺpy sú kolízie, nie otvory: či môže potrubie cez ne prechádzať, je rozhodnutie statika.
:::
