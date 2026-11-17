---
title: Čelični spulovi cijevi i listovi spulova
summary: Razrežite čeličnu sučeono zavarenu cijev na najduži spul i na montažne varove koje postavite, numerišite ih i preuzmite list za svaki spul (3D prikaz, dužine rezanja, fitinzi, varovi, spisak materijala) kao PDF i CSV; kanali dobijaju listu rezanja pravih komada.
keywords: spul, spulovi, list spula, izometrija, izrada, prefabrikacija, montažni var, radionički var, sučeoni var, dužina rezanja, lista rezanja, spisak materijala, bom, čelična cijev, specifikacija 40, broj linije, lista rezanja zračnih kanala, komadi kanala
from: 539f51de
---

## Šta ćete raditi

Pretvorite dionicu čelične cijevi u komade koje radionica zavari, a monter ugradi: spulovi nisu duži od dužine koju odaberete, podijeljeni su tamo gdje postavite montažne varove, a svaki ima vlastiti list.

Samo **čelična sučeono zavarena cijev** se reže na spulove (dimenzije cijevi ASME B36.10M, koljena u ASME B16.9 dugom radijusu). Bakar, PVC i PEX spojevi nisu sučeono zavareni, pa njihove dionice nemaju spulove.

## Rezanje dionice na spulove

1. Izaberite dionicu čelične cijevi. U Svojstvima označite **Razreži na spulove**.
2. **Najduži spul**: najveća dužina središnje linije koju jedan spul smije imati (na početku 6 m, oko 20 ft).
3. **Broj linije**: dio svakog broja spula. Nova dionica sa spulovima dobija sljedeći slobodni broj svog sistema.

Spulovi se numerišu duž dionice od njene prve tačke: `CHW-12-S01`, `CHW-12-S02` … (sistem, broj linije, spul). Spul raste dio po dio; dio koji bi ga učinio predugim počinje sljedeći, a prava dužina duža od spula siječe se tamo gdje je spul pun.

## Postavljanje montažnih varova

1. Otvorite {{ui:Verzija}} i izaberite {{ui:Montažni var}}.
2. Kliknite na cijev sa spulom gdje ide montažni var. Unutar prave dužine cijev se tu presijeca; unutar fitinga ili ventila var se pomjera na bliži spoj.

Svojstva navode montažne varove dionice, svaki uz {{ui:Ukloni}}. Svaka promjena je jedan korak {{ui:Poništi}}.

## Listovi spulova

U Svojstvima dionice sa spulovima:

- {{ui:Listovi spula (PDF)}}: jedna stranica po spulu. Lijevo, spul u izometrijskom prikazu od 30°: njegove prave dužine označene brojevima, radionički varovi kao tačke, montažni varovi označeni FW, i sjever plana. Desno, broj spula, dimenzija, specifikacija i dužina, zatim njegove **dužine rezanja**, **fitinzi**, **varovi** (radionički sučeoni var na svakom spoju unutar spula, montažni var gdje se spaja sa sljedećim spulom) i njegov **spisak materijala** s težinom cijevi (težina ASME B36.10M za glatke krajeve).
- {{ui:Lista spula (CSV)}}: isto, blok po spulu.

:::note
Dužine rezanja su od kraja do kraja kako je nacrtano: ne odbija se zazor korijena niti dodatak za var. Koljena su u B16.9 dugom radijusu; T-komadi, redukcije i ventili su opšti, dimenzionisani prema cijevi, a ne prema B16.9 ili proizvođaču, i list to navodi. Težine fitinga nisu date. Pomoćno sredstvo za izradu nacrta i koordinaciju, dimenzionisano od strane inženjera.
:::

## U IFC datoteci

Svaki dio dionice sa spulovima nosi **CadCraft_Spool** sa svojim SpoolId, dionicom, brojem spula u dionici i mjestom gdje počinje i završava duž dionice. Dionica zadržava svoja pravila (najduži spul, montažni varovi, broj linije) u vlastitom skupu, pa se spulovi vraćaju isti kad se datoteka ponovo otvori.

## Kanali: lista rezanja

Otvorite {{ui:Verzija}} i kliknite {{ui:Lista rezanja zračnih kanala}}: CSV pravih komada kanala po sistemu, obliku i dimenziji, svaka prava dužina razrezana na komade **Dužina komada** iz trake Zračni kanal (na početku 1500 mm, oko 5 ft), i ostatak. Samo dužine: bez spojeva, debljina lima ili priključaka.
