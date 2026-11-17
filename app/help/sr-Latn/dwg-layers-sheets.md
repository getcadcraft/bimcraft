---
title: Rad sa slojevima i listovima
summary: Uključujte i isključujte slojeve crteža, prebacujte se između prostora modela i listova, i shvatite kako listovi prikazuju model kroz svoje prozore pogleda.
keywords: slojevi, uključi isključi sloj, zamrzni, odmrzni, listovi, rasporedi, prostor papira, kartice, prozori pogleda, upravljanje slojevima, la
from: a9a16b53
---

## Šta ćete uraditi

Očistite prikaz zauzetog crteža tako što ćete isključiti slojeve, pa zatim pogledajte listove crteža jedan po jedan.

## Koraci: slojevi

1. Otvorite DWG ili DXF crtež.
2. Pronađite listu {{ui:Slojevi}} levo. Svaki sloj ima polje za potvrdu, uzorak boje i ime.
3. Skinite potvrdu sa sloja da sakrijete sve na njemu.
4. Kliknite {{ui:Sve isključi}} da sakrijete svaki sloj.
5. Potvrdite samo slojeve koje želite da vidite.
6. Kliknite {{ui:Sve uključi}} da ponovo prikažete sve.

## Šta treba da vidite

Slojevi nestaju i ponovo se pojavljuju odjednom, na {{ui:Model}} i na svakom listu. Slojevi koji su isključeni ili zamrznuti u samom crtežu počinju bez potvrde.

## Koraci: listovi

1. Pogledajte red kartica iznad crteža: {{ui:Model}}, pa svaki list po imenu.
2. Kliknite karticu lista.
3. Pogledajte list: papir stoji na tamnijoj podlozi, a svaki prozor pogleda prikazuje svoj deo modela u sopstvenoj razmeri i rotaciji.
4. Zumirajte u prozor pogleda da čitate detalje. Zumirate list, a ne prozor pogleda, pa se ceo list pomera zajedno.
5. Kliknite {{ui:Uklopi}} ili dvaput kliknite da ponovo vidite ceo list.

## Kako listovi ovde rade

List (raspored ili prostor papira) sadrži naslovni blok i prozore pogleda koji gledaju u prostor modela. BimCraft crta svaki prozor pogleda isečen po njegovoj ivici, u sopstvenoj razmeri i rotaciji, i sakriva slojeve zamrznute u tom prozoru. Prvi prozor pogleda svakog lista je sam list i ne crta se dvaput.

## Česte greške

- **Očekivanje da se promene slojeva čuvaju.** Podešavanja slojeva utiču samo na prikaz, dok ne otvorite drugi fajl.
- **Očekivanje kontrole slojeva po prozoru pogleda.** Lista {{ui:Slojevi}} prebacuje sloj svuda. Slojevi koje je crtež zamrznuo u jednom prozoru pogleda ostaju zamrznuti tamo.
- **Traženje pretrage slojeva ili stanja slojeva.** Još nije napravljeno. Lista je u redosledu iz crteža.
- **Očekivanje da radite unutar prozora pogleda.** Nema šta da se aktivira: BimCraft samo prikazuje list. Koristite {{ui:Model}} da direktno gledate prostor modela.
