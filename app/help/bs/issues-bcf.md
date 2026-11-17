---
title: Problemi i BCF datoteke
summary: Spasite pogled na model kao problem — kameru, izabrane elemente, sakrivene elemente, presjek — podijelite ga kao BCF datoteku sa drugim alatima za koordinaciju, i otvorite njihove BCF datoteke da vidite njihove probleme.
keywords: bcf, bcfzip, problem, problemi, tema, pogled, izvještaj o koliziji, koordinacija, komentar, snimak, otvori bcf, spasi bcf, izvoz, uvoz
from: 2a6cf201
---

## Šta ćete uraditi

Ukažite na problem u modelu i zadržite pogled koji ga prikazuje, zatim ga proslijedite u BCF datoteci, formatu koji čitaju i pišu drugi alati za koordinaciju.

## Koraci

1. Otvorite IFC model i postavite pogled: okrenite ga ka njemu, izaberite uključene elemente, sakrijte ono što smeta, presijecite ga ravninom ili kutijom presjeka.
2. Kliknite karticu {{ui:Problemi}} desno, zatim {{ui:Novi problem iz ovog pogleda}}.
3. Upišite naslov, i komentar ako želite; izaberite status; unesite svoje ime ili e-poštu (kada ste prijavljeni, ime vašeg računa se popunjava; vidi [BimCraft postavke](topic:settings#your-name-on-issues)). Kliknite {{ui:Napravi problem}}.
4. Kliknite {{ui:Prikaži}} na problemu da se njegov pogled vrati.
5. Kliknite {{ui:Spasi BCF}} da preuzmete sve probleme kao jednu `.bcf` datoteku.
6. Da vidite probleme koje je neko drugi napravio, kliknite {{ui:Otvori BCF…}} i izaberite njihovu `.bcf` ili `.bcfzip` datoteku.

## Šta biste trebali vidjeti

- Svaki problem na listi sa slikom svog pogleda, naslovom, statusom, autorom i datumom.
- {{ui:Prikaži}} vraća kameru, izabrane elemente, ono što je sakriveno (ili jedine prikazane stvari) i presjek. Elementi se nalaze po njihovom GlobalId u svakom otvorenom modelu; statusna linija kaže ako neki nedostaju.
- Ravnina ili kutija presjeka iz drugog alata se prikazuje kada se poklapa sa osama modela; nagnute ili dodatne ravnine se vraćaju kao zapremina presjeka (do 6 ravni). Problem zadržava prvu kutiju zapremine od više kutija.

## Korisno znati

- Datoteka je BCF 2.1 i zadržava pogled u koordinatama samog modela, pa drugi alati postavljaju kameru na isto mjesto.
- Problemi ostaju u ovoj kartici dok ih ne spasite. Otvaranje drugog modela zadržava listu; otvorite model na koji se problemi odnose prije nego ih prikažete.
- Paralelna (ortogonalna) kamera iz drugog alata se prikazuje perspektivnom kamerom ovog pregledača, odmaknutom tako da isti dio modela ispuni pogled.

## Česte greške

- **Prikaži je pomjerio kameru na čudno mjesto.** Problem je napravljen na drugom modelu ili sa drugim koordinatama. Prvo otvorite pravi model.
- **Datoteka se ne otvara.** Nije BCF zip ili je oštećena; statusna linija kaže zašto.

## Dalje

- [Sakrivanje, izolovanje i gledanje kroz elemente](topic:hide-and-isolate)
- [Presijecanje IFC modela ravninom presjeka](topic:section-plane)
