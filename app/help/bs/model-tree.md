---
title: Snalaženje kroz stablo modela
summary: Pregledaj IFC model po projektu, lokaciji, zgradi, spratu i prostoru, s elementima grupisanim po vrsti; štikliraj polja za prikaz i skrivanje, klikni red za odabir, dvaput klikni za zumiranje.
keywords: stablo modela, stablo, struktura, prostorna struktura, pregledač, pregled, navigator, nivo, sprat, pod, prostor, prostorija, grupa, klasa, sakrij, prikaži, odaberi, zumiraj
from: 69de4ab7
---

## Šta ćeš uraditi

Vidi kako je model sastavljen i dođi do bilo kog elementa bez traženja u 3D: zgradu, njene spratove, prostore na svakom spratu i elemente u njima, grupisane po vrsti (zidovi, vrata, ploče…).

## Koraci

1. Otvori IFC model. {{ui:Stablo modela}} s lijeve strane se otvara do spratova.
2. Klikni strelicu pored reda da ga otvoriš ili zatvoriš. Sprat prvo sadrži svoje prostore, a zatim elemente po vrsti sa brojem. Element sastavljen od dijelova, kao stepenice, sadrži svoje dijelove.
3. Odštikliraj polje reda da sakriješ sve u njemu; štikliraj ga da ga ponovo prikažeš. Polje s crticom znači da je prikazan samo dio onoga što je u njemu.
4. Klikni ime reda da odabereš ono što predstavlja: jedan element, ili svaki element u grupi, spratu ili prostoru. {{key:Mod}}+klik ih dodaje u odabir ili uklanja.
5. Klikni dugme {{ui:i}} pored sprata, prostora ili zgrade da vidiš njegova svojstva.
6. Dvaput klikni red da zumiraš do njega.

## Šta bi trebalo da vidiš

- Kad odabereš element u 3D pogledu, stablo se otvori do njega i označi ga.
- Skriveni elementi su precrtani. Polja stabla i {{ui:Prikaži}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) rade zajedno: vidi [Sakrij, izoliraj i vidi kroz elemente](topic:hide-and-isolate).
- Elementi koje model ne smješta ni u jedan sprat nalaze se u grupi na kraju, **Nije u prostornoj strukturi**.
- Duga grupa prikazuje 200 redova odjednom; klikni **Prikaži više** ispod nje za ostatak.

## Tipke

Kad je ime reda u fokusu: {{key:Up}} i {{key:Down}} pomjeraju, {{key:Right}} otvara, {{key:Left}} zatvara ili ide gore, {{key:Space}} štikla polje, {{key:Enter}} odabire.

## Česte greške

- **Polje sprata je štiklirano, ali ništa se ne prikazuje.** Lista {{ui:Spratovi}} ispod stabla sama isključuje cijele spratove: štikliraj i tamo.
- **Red ne odabire ništa.** Neki redovi, poput praznog prostora, nemaju elemenata koji se mogu nacrtati; statusna linija to kaže.

## Dalje

- [Izbriši, izreži, kopiraj i zalijepi elemente zgrade](topic:edit-elements)
- [Prikaži i sakrij spratove, prostore i ivice](topic:storeys-and-spaces)
