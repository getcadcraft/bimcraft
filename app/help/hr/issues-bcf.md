---
title: Teme i BCF datoteke
summary: Spremite pogled na model kao temu (kameru, odabrane elemente, skrivene elemente, presjek), podijelite ga kao BCF datoteku s drugim alatima za koordinaciju te otvorite njihove BCF datoteke da vidite njihove teme.
keywords: bcf, bcfzip, tema, teme, pogled kamere, izvješće o sudarima, koordinacija, komentar, snimka, otvori BCF, spremi BCF, izvoz, uvoz
from: 2a6cf201
---

## Što ćete napraviti

Pokažite na problem u modelu, zadržite pogled koji ga prikazuje, zatim ga proslijedite u BCF datoteci, formatu koji drugi alati za koordinaciju čitaju i pišu.

## Koraci

1. Otvorite IFC model i postavite pogled: zakrenite ga, odaberite uključene elemente, sakrijte što smeta, presiječite ga ravninom presjeka ili kutijom presjeka.
2. Kliknite karticu {{ui:Teme}} s desne strane, zatim {{ui:Nova tema iz ovog pogleda}}.
3. Upišite naslov i komentar ako želite; odaberite status; upišite svoje ime ili e-poštu (kada ste prijavljeni, ime vašeg računa se popunjava; vidi [Postavke programa BimCraft](topic:settings#your-name-on-issues)). Kliknite {{ui:Izradi temu}}.
4. Kliknite {{ui:Prikaži}} na temi da vratite njezin pogled.
5. Kliknite {{ui:Spremi BCF}} da preuzmete svaku temu kao jednu `.bcf` datoteku.
6. Da vidite teme koje je netko drugi izradio, kliknite {{ui:Otvori BCF…}} i odaberite njegovu `.bcf` ili `.bcfzip` datoteku.

## Što biste trebali vidjeti

- Svaka tema na popisu sa slikom svog pogleda, naslovom, statusom, autorom i datumom.
- {{ui:Prikaži}} vraća kameru, odabrane elemente, ono što je bilo skriveno (ili jedine prikazane stvari) i presjek. Elementi se pronalaze po svom GlobalId u svakom otvorenom modelu; redak statusa kaže ako neki nisu tu.
- Ravnina ili kutija presjeka iz drugog alata prikazuje se kada se poklapa s osima modela; nagnute ili dodatne ravnine vraćaju se kao volumen presjeka (do 6 ravnina). Tema zadržava prvu kutiju volumena od više kutija.

## Dobro je znati

- Datoteka je BCF 2.1 i pogled zadržava u vlastitim koordinatama modela, pa drugi alati postavljaju kameru na isto mjesto.
- Teme ostaju na ovoj kartici dok ih ne spremite. Otvaranje drugog modela zadržava popis; otvorite model na koji se teme odnose prije nego ih prikažete.
- Paralelna (ortogonalna) kamera iz drugog alata prikazuje se s perspektivnom kamerom ovog prikazivača, odmaknutom tako da isti dio modela ispunjava prikaz.

## Česte pogreške

- **Prikaži je pomaknulo kameru na čudno mjesto.** Tema je izrađena na drugom modelu ili s drugim koordinatama. Prvo otvorite pravi model.
- **Datoteka se ne otvara.** Nije BCF zip ili je oštećena; redak statusa kaže zašto.

## Dalje

- [Sakrivanje, izoliranje i prozirnost elemenata](topic:hide-and-isolate)
- [Presijecanje IFC modela ravninom presjeka](topic:section-plane)
