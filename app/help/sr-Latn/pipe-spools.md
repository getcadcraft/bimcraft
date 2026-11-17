---
title: Spulovi čeličnih cevi i listovi spulova
summary: Isecite deonicu čelične cevi za sučeono zavarivanje na spulove najveće dužine i na montažnim zavarima koje postavite, numerišite ih i preuzmite list za svaki spul (3D prikaz, dužine sečenja, fitinzi, zavari, spisak materijala) kao PDF i CSV; kanali dobijaju listu sečenja ravnih komada.
keywords: spul, spulovi, list spula, izometrija, izrada, predfabrikacija, montažni var, radionički var, sučeoni var, dužina sečenja, lista sečenja, spisak materijala, bom, čelična cev, raspored 40, broj linije, lista sečenja kanala, komadi kanala
from: 539f51de
---

## Šta ćete uraditi

Pretvorite deonicu čelične cevi u komade koje radionica zavari i montažer ugradi: spulovi ne duži od dužine koju izaberete, podeljeni tamo gde postavite montažne zavare, svaki sa svojim listom.

Samo **čelična cev za sučeono zavarivanje** deli se na spulove (dimenzije cevi ASME B36.10M, kolena ASME B16.9 dugog radijusa). Bakarni, PVC i PEX spojevi nisu sučeoni zavari, pa njihove deonice nemaju spulove.

## Isecite deonicu na spulove

1. Izaberite deonicu čelične cevi. U Svojstvima označite **Seci na spulove**.
2. **Najduži spul**: najveća dužina središnje linije koju jedan spul može imati (6 m, otprilike 20 ft, za početak).
3. **Broj linije**: deo svakog broja spula. Nova deonica sa spulovima dobija sledeći slobodni broj svog sistema.

Spulovi se numerišu duž deonice od njene prve tačke: `CHW-12-S01`, `CHW-12-S02` … (sistem, broj linije, spul). Spul raste deo po deo; deo koji bi ga učinio predugim počinje sledeći, a ravna dužina duža od spula seče se tamo gde je spul pun.

## Postavite montažne zavare

1. Otvorite {{ui:Build}} i izaberite {{ui:Montažni var}}.
2. Kliknite na cev sa spulovima gde ide montažni var. Unutar ravne dužine cev se tu seče; unutar fitinga ili ventila zavar se pomera do bližeg spoja.

Svojstva navode montažne zavare deonice, svaki sa {{ui:Remove}}. Svaka promena je jedan korak {{ui:Undo}}.

## Listovi spulova

U Svojstvima deonice sa spulovima:

- {{ui:Listovi spulova (PDF)}}: jedna strana po spulu. Levo, spul u izometrijskom prikazu pod 30°: njegove ravne dužine numerisane, radionički zavari kao tačke, montažni zavari obeleženi FW, i severni smer plana. Desno, broj spula, dimenzija, raspored i dužina, zatim njegove **dužine sečenja**, **fitinzi**, **zavari** (radionički sučeoni var na svakom spoju unutar spula, montažni var tamo gde se spoji s narednim spulom) i njegov **spisak materijala** s težinom cevi (ASME B36.10M, težina cevi s ravnim krajevima).
- {{ui:Lista spulova (CSV)}}: isti podaci, blok za svaki spul.

:::note
Dužine sečenja su od kraja do kraja kako su nacrtane: ne oduzima se zazor korena ni dodatak za zavar. Kolena su dugog radijusa B16.9; T-komadi, redukcije i ventili su opšti, dimenzionisani prema cevi, a ne prema B16.9 ili proizvođaču, i list to kaže. Težine fitinga nisu date. Alat za izradu nacrta i koordinaciju, koji dimenzioniše inženjer.
:::

## U IFC datoteci

Svaki deo deonice sa spulovima nosi **CadCraft_Spool** s njegovim SpoolId, deonicom, brojem spula u deonici, i mestom gde počinje i završava duž deonice. Deonica zadržava svoja pravila (najduži spul, montažni zavari, broj linije) u sopstvenom skupu, pa se spulovi vraćaju isti kada se datoteka ponovo otvori.

## Kanali: lista sečenja

Otvorite {{ui:Build}} i kliknite {{ui:Lista sečenja kanala}}: CSV ravnih komada kanala po sistemu, obliku i dimenziji, svaka ravna dužina isečena na komade **Dužina komada** u traci Kanal (1500 mm, otprilike 5 ft, za početak) i ono što ostane. Samo dužine: bez šavova, debljine lima ili priključaka.
