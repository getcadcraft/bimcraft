---
title: Problemi i BCF datoteke
summary: Sačuvajte prikaz modela kao problem — kameru, izabrane elemente, sakrivene i presek — podelite ga kao BCF datoteku sa drugim alatima za koordinaciju i otvorite njihove BCF datoteke da vidite njihove probleme.
keywords: bcf, bcfzip, problem, problemi, tema, pogled, izveštaj o sukobima, koordinacija, komentar, snimak, otvori bcf, sačuvaj bcf, izvoz, uvoz
from: 2a6cf201
---

## Šta ćete uraditi

Pokažite na problem u modelu, zadržite prikaz koji ga pokazuje, pa ga prosledite u BCF datoteci, formatu koji čitaju i pišu drugi alati za koordinaciju.

## Koraci

1. Otvorite IFC model i podesite prikaz: okrenite ga ka sebi, izaberite uključene elemente, sakrijte ono što smeta, presecite ga ravninom preseka ili kutijom.
2. Kliknite karticu {{ui:Problemi}} desno, pa {{ui:Novi problem iz ovog prikaza}}.
3. Ukucajte naslov, i komentar ako želite; izaberite status; unesite svoje ime ili e-poštu (kada ste prijavljeni, ime vašeg naloga se popunjava; pogledajte [Podešavanja BimCraft-a](topic:settings#your-name-on-issues)). Kliknite {{ui:Napravi problem}}.
4. Kliknite {{ui:Prikaži}} na problemu da se vrati njegov prikaz.
5. Kliknite **Sačuvaj BCF** da preuzmete sve probleme kao jednu `.bcf` datoteku.
6. Da vidite probleme koje je neko drugi napravio, kliknite {{ui:Otvori BCF…}} i izaberite njegovu `.bcf` ili `.bcfzip` datoteku.

## Šta treba da vidite

- Svaki problem na listi, sa slikom svog prikaza, naslovom, statusom, autorom i datumom.
- {{ui:Prikaži}} vraća kameru, izabrane elemente, ono što je sakriveno (ili jedine prikazane stvari) i presek. Elementi se nalaze po njihovom GlobalId u svakom otvorenom modelu; statusna linija kaže ako neki nedostaju.
- Ravan ili kutija preseka iz drugog alata prikazuje se kada se poklapa sa osama modela; nagnute ili dodatne ravni vraćaju se kao zapremina preseka (do 6 ravni). Problem zadržava prvu kutiju zapremine od više kutija.

## Dobro je znati

- Datoteka je BCF 2.1 i čuva prikaz u sopstvenim koordinatama modela, pa drugi alati postavljaju kameru na isto mesto.
- Problemi ostaju u ovoj kartici dok ih ne sačuvate. Otvaranje drugog modela čuva listu; otvorite model na koji se problemi odnose pre nego što ih prikažete.
- Paralelna (ortogonalna) kamera iz drugog alata prikazuje se perspektivnom kamerom ovog prikazivača, odmaknutom tako da isti deo modela ispuni prikaz.

## Česte greške

- **{{ui:Prikaži}} je pomerilo kameru na čudno mesto.** Problem je napravljen na drugom modelu ili sa drugim koordinatama. Prvo otvorite pravi model.
- **Datoteka se ne otvara.** Nije BCF zip ili je oštećena; statusna linija kaže zašto.

## Dalje

- [Sakrivanje, izdvajanje i providnost elemenata](topic:hide-and-isolate)
- [Presecanje IFC modela ravninom preseka](topic:section-plane)
