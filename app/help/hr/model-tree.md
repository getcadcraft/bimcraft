---
title: Snalaženje pomoću stabla modela
summary: Pregledajte IFC model po projektu, lokaciji, zgradi, etaži i prostoru, s elementima grupiranima po vrsti; kućicama prikažite i sakrijte, kliknite redak za odabir, dvaput kliknite za zumiranje.
keywords: stablo modela, stablo, struktura, prostorna struktura, preglednik, obris, navigator, etaža, razina, pod, prostor, soba, grupa, klasa, sakrij, prikaži, odaberi, odabir, zumiraj
from: 69de4ab7
---

## Što ćete učiniti

Vidite kako je model složen i dođete do bilo kojeg elementa bez traženja u 3D prikazu: zgradu, njezine etaže, prostore na svakoj etaži i elemente u njima, grupirane po vrsti (zidovi, vrata, ploče…).

## Koraci

1. Otvorite IFC model. {{ui:Model tree}} lijevo se otvara do etaža.
2. Kliknite strelicu pored retka da ga otvorite ili zatvorite. Etaža sadrži najprije svoje prostore, zatim svoje elemente po vrsti s brojem njih. Element sastavljen od dijelova, kao stubište, sadrži svoje dijelove.
3. Odznačite kućicu retka da sakrijete sve u njemu; označite je da ponovno prikažete. Kućica s crticom znači da je prikazan samo dio onoga što je u njoj.
4. Kliknite ime retka da odaberete ono što on predstavlja: jedan element ili svaki element u grupi, etaži ili prostoru. {{key:Mod}}+klik dodaje ih odabiru ili ih iz njega uklanja.
5. Kliknite gumb {{ui:i}} pored etaže, prostora ili zgrade da vidite njezina vlastita svojstva.
6. Dvaput kliknite redak da zumirate do njega.

## Što biste trebali vidjeti

- Kada odaberete element u 3D prikazu, stablo se otvara do njega i označava ga.
- Skriveni elementi su precrtani. Kućice stabla i {{ui:Show}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) rade zajedno: vidi [Sakrivanje, izoliranje i prozirnost elemenata](topic:hide-and-isolate).
- Elementi koje model ne smješta ni u jednu etažu nalaze se u grupi na kraju, **Nije u prostornoj strukturi**.
- Duga grupa prikazuje 200 redaka odjednom; kliknite **Prikaži više** ispod nje za ostatak.

## Tipke

S fokusom na imenu retka: {{key:Up}} i {{key:Down}} pomiču, {{key:Right}} otvara, {{key:Left}} zatvara ili ide gore, {{key:Space}} označava kućicu, {{key:Enter}} odabire.

## Česte pogreške

- **Kućica etaže je označena, ali ništa se ne prikazuje.** Popis {{ui:Storeys}} ispod stabla sam isključuje cijele etaže: označite ih i tamo.
- **Redak ništa ne odabire.** Neki redci, poput praznog prostora, nemaju elemente koji se mogu nacrtati; statusna traka to kaže.

## Dalje

- [Brisanje, izrezivanje, kopiranje i lijepljenje elemenata zgrade](topic:edit-elements)
- [Prikaz i skrivanje etaža, prostora i bridova](topic:storeys-and-spaces)
