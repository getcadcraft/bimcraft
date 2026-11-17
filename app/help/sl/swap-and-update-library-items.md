---
title: Zamenjava postavljenega elementa in posodobitev elementov knjižnice
summary: Zamenjajte en postavljeni element knjižnice z drugim, ohranite njegovo mesto in številko elementa ter v knjižnici preverite novejše različice vsega v modelu.
keywords: zamenjaj, nadomesti, zamenjava, posodobi, novejša različica, preveri posodobitve, knjižnica, umaknjeno, sprememba licence, številka elementa
from: 8bdfe01d
---

## Kaj boste naredili

Premislite si glede elementa, ne da bi ga spet premaknili, in ohranite elemente knjižnice v modelu aktualne.

## Zamenjajte en element

1. Kliknite postavljeni element knjižnice v modelu.
2. V {{ui:Properties}} kliknite {{ui:Swap item…}} v polju **Element knjižnice**. Odpre se zavihek {{ui:Library}}.
3. Poiščite novi element in kliknite njegovo kartico.
4. Kliknite {{ui:Zamenjaj … s tem}}.

Element ohrani svoje mesto, obrat, etažo, številko elementa, količino in opombe. Njegov tip, oblika in podatki o elementu se spremenijo v novi element. Elementi, postavljeni na enak način, delijo en tip, kot pri postavitvi.

Element, ki ima različice (glejte [Postavitev in zamenjava elementa knjižnice z različicami](topic:library-variants)), ob zamenjavi na vrhu zavihka {{ui:Library}} našteje svoje druge različice: po en klik na vsako.

Ko je novi element druge vrste, na primer umivalnik namesto mize, se razred elementa IFC spremeni, da ustreza (tu iz elementa pohištva v sanitarni terminal), tako da ga drugi programi pravilno razvrstijo. Ostane isti element z istim GlobalId, zato povezave nanj še delujejo. {{key:Mod+Z}} povrne stari razred s starim elementom.

## Preverite posodobitve

1. Kliknite {{ui:Updates}} na orodni vrstici (ali {{ui:Check for updates}} v polju elementa knjižnice).
2. Preberite seznam: vsak element knjižnice v modelu z različico v modelu, zadnjo različico in stanjem: **Aktualno**, **Novejša različica**, **Umaknjeno** ali **Ni najdeno**. Pove tudi, kaj se je spremenilo (geometrija, podatki, licenca ali popravek).
3. Kliknite {{ui:Update}} v vrstici ali {{ui:Posodobi vse}}.

## Kaj boste videli

- „Posodobljenih postavitev: *n*. Mesta, številke elementov, količine in opombe so ohranjene.“
- „Posodobljeno: *element*“ v seznamu sprememb. {{key:Mod+Z}} razveljavi vsako.

## Dobro je vedeti

- Preveriti je mogoče samo elemente, ki prihajajo iz knjižnice. Elementi iz datotek nimajo id-ja knjižnice.
- Ko se je licenca spremenila, kopija, ki ste jo že postavili, obdrži licenco, s katero je prišla, dokler je ne posodobite.
- Element s stanjem **Umaknjeno** se ne ponuja za nove postavitve. Element, umaknjen zaradi avtorskih pravic, ni mogoče prenesti; zamenjajte ga z {{ui:Swap item…}}.
- Postavljena različica ostane ta različica, če novejša različica elementa še vedno vsebuje to različico; sicer prevzame privzeto različico elementa.
- Preverjanje pošlje samo id-je elementov in različice, nikoli vašega modela.
