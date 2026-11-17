---
title: Snalaženje kroz stablo modela
summary: Pregledajte IFC model po projektu, lokaciji, zgradi, spratu i prostoru, sa elementima grupisanim po vrsti; štiklirajte polja da prikažete i sakrijete, kliknite red da izaberete, dvoklik da zumirate.
keywords: stablo modela, stablo, struktura, prostorna struktura, pregledač, pregled, navigator, sprat, nivo, pod, prostor, soba, grupa, klasa, sakrij, prikaži, izaberi, zumiraj
from: 69de4ab7
---

## Šta ćete uraditi

Vidite kako je model sastavljen i dođete do bilo kog elementa bez traženja u 3D prikazu: zgradu, njene spratove, prostore na svakom spratu i elemente u njima, grupisane po vrsti (zidovi, vrata, ploče…).

## Koraci

1. Otvorite IFC model. {{ui:Model tree}} levo se otvara do spratova.
2. Kliknite strelicu pored reda da ga otvorite ili zatvorite. Sprat prvo drži svoje prostore, pa svoje elemente po vrsti sa brojem. Element sastavljen od delova, kao stepenište, drži svoje delove.
3. Odštiklirajte polje reda da sakrijete sve u njemu; štiklirajte ga da ponovo prikažete. Polje sa crticom znači da je prikazan samo deo onoga što je u njemu.
4. Kliknite ime reda da izaberete ono što predstavlja: jedan element, ili svaki element u grupi, spratu ili prostoru. {{key:Mod}}+klik dodaje ih izboru ili ih uklanja iz njega.
5. Kliknite dugme {{ui:i}} pored sprata, prostora ili zgrade da vidite njegova sopstvena svojstva.
6. Dvoklik na red zumira do njega.

## Šta treba da vidite

- Kad izaberete element u 3D prikazu, stablo se otvara do njega i označava ga.
- Skriveni elementi su precrtani. Polja stabla i {{ui:Show}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) rade zajedno: pogledajte [Sakrivanje, izolovanje i prikaz kroz elemente](topic:hide-and-isolate).
- Elementi koje model ne smešta ni na jedan sprat nalaze se u grupi na kraju, **Nije u prostornoj strukturi**.
- Duga grupa prikazuje 200 redova odjednom; kliknite **Prikaži još** ispod nje za ostatak.

## Tasteri

Kad je ime reda u fokusu: {{key:Up}} i {{key:Down}} pomeraju, {{key:Right}} otvara, {{key:Left}} zatvara ili ide gore, {{key:Space}} štiklira polje, {{key:Enter}} bira.

## Česte greške

- **Polje sprata je štiklirano, a ništa se ne prikazuje.** Lista {{ui:Storeys}} ispod stabla sama isključuje cele spratove: štiklirajte ih i tamo.
- **Red ništa ne bira.** Neki redovi, kao prazan prostor, nemaju elemente koji se mogu nacrtati; statusna linija to kaže.

## Dalje

- [Brisanje, sečenje, kopiranje i lepljenje elemenata zgrade](topic:edit-elements)
- [Prikaz i skrivanje spratova, prostora i ivica](topic:storeys-and-spaces)
