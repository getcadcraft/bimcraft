---
title: Spoolovi čeličnih cijevi i listovi spoolova
summary: Razrežite dionicu čelične cijevi sa sučeljenim zavarom na spoolove najveće duljine i na terenske zavare koje postavite, numerirajte ih i preuzmite list spoola za svaki spool (3D prikaz, duljine rezova, fitinzi, zavari, sastavnica) kao PDF i CSV; kanali dobivaju popis rezanja ravnih komada.
keywords: spool, spoolovi, list spoola, izometrija, izrada, prefabrikacija, terenski zavar, radionički zavar, sučeljeni zavar, duljina reza, popis rezanja, sastavnica, bom, čelična cijev, raspored 40, broj linije, popis rezanja kanala, komadi kanala
from: 539f51de
---

## Što ćete raditi

Dionicu čelične cijevi pretvarate u komade koje radionica zavari, a monter ugradi: spoolove koji nisu duži od duljine koju odaberete, razdvojene tamo gdje postavite terenske zavare, a svaki sa svojim listom.

Na spoolove se reže samo **čelična cijev sa sučeljenim zavarom** (dimenzije ASME B36.10M, koljena na dugom radijusu ASME B16.9). Spojevi bakra, PVC-a i PEX-a nisu sučeljeni zavari, pa njihove dionice nemaju spoolove.

## Rezanje dionice na spoolove

1. Odaberite dionicu čelične cijevi. U **Svojstvima** označite **Razreži na spoolove**.
2. **Najdulji spool**: najveća duljina središnje linije koju jedan spool smije imati (za početak 6 m, otprilike 20 ft).
3. **Broj linije**: dio broja svakog spoola. Nova dionica sa spoolovima dobiva sljedeći slobodan broj svog sustava.

Spoolovi se numeriraju duž dionice od njezine prve točke: `CHW-12-S01`, `CHW-12-S02` … (sustav, broj linije, spool). Spool raste dio po dio; dio koji bi ga učinio predugim počinje sljedeći, a ravna duljina dulja od spoola reže se tamo gdje je spool pun.

## Postavljanje terenskih zavara

1. Otvorite {{ui:Izgradnja}} i odaberite {{ui:Terenski zavar}}.
2. Kliknite na cijev sa spoolom gdje ide terenski zavar. Unutar ravne dionice cijev se tu reže; unutar fitinga ili ventila zavar se pomiče na bliži spoj.

**Svojstva** navode terenske zavare dionice, svaki s {{ui:Ukloni}}. Svaka promjena je jedan korak {{ui:Poništi}}.

## Listovi spoolova

U **Svojstvima** dionice sa spoolovima:

- {{ui:Listovi spoolova (PDF)}}: jedna stranica po spoolu. Lijevo, spool u izometrijskom prikazu pod 30°: njegovi ravni dijelovi numerirani, radionički zavari kao točke, terenski zavari označeni FW, i sjever tlocrta. Desno, broj spoola, dimenzija, raspored i duljina, zatim njegove **duljine rezova**, **fitinzi**, **zavari** (radionički sučeljeni zavar na svakom spoju unutar spoola, terenski zavar tamo gdje spool dolazi do sljedećeg) te njegova **sastavnica** s težinom cijevi (težina ravnih krajeva prema ASME B36.10M).
- {{ui:Popis spoolova (CSV)}}: isto, blok po spoolu.

:::note
Duljine rezova su od kraja do kraja kako su nacrtane: ne odbija se zazor korijena ni dodatak za zavar. Koljena su na dugom radijusu B16.9; T-komadi, redukcije i ventili su opći, dimenzionirani prema cijevi, a ne prema B16.9 ili proizvođaču, i list to navodi. Težine fitinga nisu navedene. Pomoćni alat za crtanje i koordinaciju, dimenzioniran od strane inženjera.
:::

## U IFC datoteci

Svaki dio dionice sa spoolovima nosi **CadCraft_Spool** s njegovim SpoolId, dionicom, brojem spoola u dionici te mjestom gdje počinje i završava duž dionice. Dionica zadržava svoja pravila (najdulji spool, terenski zavari, broj linije) u vlastitom skupu, pa se spoolovi vraćaju isti kad se datoteka ponovno otvori.

## Kanali: popis rezanja

Otvorite {{ui:Izgradnja}} i kliknite {{ui:Popis rezanja kanala}}: CSV ravnih komada kanala po sustavu, obliku i dimenziji, pri čemu se svaka ravna duljina reže na komade **Duljine komada** iz trake za kanale (za početak 1500 mm, otprilike 5 ft), i ostatak. Samo duljine: bez šavova, debljina lima i spojnica.
