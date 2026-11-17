---
title: Varijante mase jedna uz drugu
summary: Čuvajte više varijanti mase u istom modelu, postavite jednu kao tekuću, proverite je prema građevinskim linijama i službenostima lokacije, uvezite masu iz ModelCraft-a i razradite izabranu varijantu u zidove i podove.
keywords: masa, varijanta, varijante, skup varijanti, šema, koncept, koncepcijski projekat, faza 2, alternative, poređenje varijanti, tekuća varijanta, guranje i povlačenje, modelcraft, civilcraft, bruto površina, tlocrt, zapremina, razrada mase, služnost, građevinska linija, povlačenje
from: 69a01459
---

## Šta ćete uraditi

Čuvajte varijante mase jednog koncepta u jednom modelu, umesto u posebnim datotekama: više masa zgrade jedna uz drugu, jedna je **tekuća varijanta**, a ostale se čuvaju za poređenje.

Varijanta mase je masa zgrade: obris podignut do visine, sa određenim brojem spratova. Još nije zid. Možete čuvati koliko god želite, grupisane u **skupove varijanti** (varijante jednog skupa su međusobno alternative).

## Sačuvajte varijantu

1. Otvorite {{ui:Program prostorija u masu}}, upišite program prostorija i obris i izaberite {{ui:Pronađi opcije}}.
2. Izaberite jednu od navedenih varijanti.
3. Ispod {{ui:Varijante mase u modelu}}, upišite naziv za {{ui:Skup varijanti}} ako ga želite, i izaberite {{ui:Sačuvaj izabranu varijantu}}.

Varijanta se pojavljuje u modelu kao masa zgrade i u spisku, sa spratovima, tlocrtom, bruto površinom i zapreminom. Ništa se ne gradi. Sačuvajte drugu na isti način.

Prva varijanta skupa je njegova tekuća varijanta. Svaki korak je jedan korak opoziva.

## Tekuća varijanta

Jedna varijanta svakog skupa je tekuća. To znači dve stvari:

- **Njeni spratovi se računaju kao površine spratova zgrade.** Tekuća varijanta ima jedan prostor po spratu koji nosi bruto površinu tog sprata, pa sve što čita površine spratova vidi važeću varijantu i nijednu drugu.
- **Proverava se prema lokaciji.** Ako je van granice lokacije, preko građevinske linije ili na službenosti, upozorenje sa njenim imenom se pojavljuje u {{ui:Problemi}}. To je samo upozorenje: ništa se ne odbija. Varijante koje nisu tekuće se ne proveravaju.

Izaberite {{ui:Postavi kao tekuću}} na drugoj varijanti da promenite tekuću.

{{ui:Sakrij varijante koje nisu tekuće}} skriva ostale u 3D prikazu. To važi samo za ovaj pregledač i ne čuva se u datoteci.

## Masa iz ModelCraft-a

U ModelCraft-u, {{ui:Izvezi}} › {{ui:Masa u BimCraft…}} šalje svaku grupu ili komponentu kao jednu varijantu. BimCraft otvara datoteku sa navedenim varijantama.

Da biste ih uneli u model koji je već otvoren, izaberite {{ui:Dodaj varijante mase iz datoteke}} i izaberite `.ifc` datoteku. Njene mase ulaze kao varijante jednog skupa, u jednom koraku opoziva, i stoje tamo gde su modelovane. Datoteka sa masama zgrada iz CivilCraft-a radi na isti način.

Varijanta označena kao „(oblik pojednostavljen)" nije bila običan uspravan blok u ModelCraft-u (uvučena je, nagnuta ili nije zatvorena). Njena masa ovde je obris njene osnove podignut do visine; njene površine spratova i zapremina izmerene su iz samog tela.

## Razrada izabrane varijante

Izaberite {{ui:Razradi}} na varijanti. Ona postaje nivoi (dodaju se do broja njenih spratova), zidovi oko njenog obrisa na svakom spratu i ploča poda na svakom, u jednom koraku opoziva. Varijanta napušta spisak, a ostale ostaju kakve su bile. Krova još nema.

{{ui:Preimenuj}} menja naziv varijante, a {{ui:Ukloni}} je izbacuje iz modela. Uklanjanje tekuće varijante čini prvu sledeću varijantu tekućom.

## Šta treba da vidite

- Svaku sačuvanu varijantu kao blok u 3D prikazu i red u spisku.
- „(tekuća)" pored jedne varijante svakog skupa.
- Upozorenje u {{ui:Problemi}} kada tekuća varijanta pređe granicu lokacije, građevinsku liniju ili službenost.

## Dobro je znati

- U IFC datoteci varijanta je element proxy zgrade sa skupom svojstava `CadCraft_SiteMass` (njen skup varijanti, naziv varijante i da li je tekuća nalaze se u tom skupu). Spratovi tekuće varijante su prostori tipa `MassingFloor`. Drugi programi čitaju proxy kao generički element.
- Čuvanje varijante nikad ne dodaje nivoe; razrada da.
- Asistent može da navede sačuvane varijante, sačuva jednu, postavi jednu kao tekuću, preimenuje, razradi ili ukloni varijantu.
