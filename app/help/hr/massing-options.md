---
title: Varijante masa jedna uz drugu
summary: Čuvajte više varijanti masa u istom modelu, postavite jednu kao trenutačnu, provjerite je prema građevinskim pravcima i služnostima lokacije, uvezite masu iz ModelCraft i razradite odabranu varijantu u zidove i podove.
keywords: masa, varijanta, varijante, skup varijanti, shema, koncept, idejno rješenje, faza 2, alternative, usporedba varijanti, trenutačna varijanta, masa zgrade, potisni/povuci, modelcraft, civilcraft, bruto površina, tlocrtna površina, volumen, razrada mase, služnost, građevinski pravac, povlačenje
from: 69a01459
---

## Što ćete raditi

Čuvajte varijante masa jednog koncepta u jednom modelu umjesto u odvojenim datotekama: više masa zgrade jedna uz drugu, jedna od njih je **trenutačna varijanta**, a ostale se čuvaju za usporedbu.

Varijanta mase je masa zgrade: obris podignut do visine, s određenim brojem etaža. To još nisu zidovi. Možete čuvati koliko god želite, grupirane u **skupove varijanti** (varijante jednog skupa su međusobne alternative).

## Sačuvajte varijantu

1. Otvorite {{ui:Prostorni program u masu}}, upišite prostorni program i obris, i odaberite {{ui:Pronađi opcije}}.
2. Odaberite jednu od navedenih varijanti.
3. Pod {{ui:Varijante masa u modelu}}, upišite naziv za {{ui:Skup varijanti}} ako ga želite, i odaberite {{ui:Zadrži odabranu varijantu}}.

Varijanta se pojavljuje u modelu kao masa zgrade i u popisu, s etažama, tlocrtnom površinom, bruto površinom i volumenom. Ništa se ne gradi. Drugu čuvate na isti način.

Prva varijanta skupa je njegova trenutačna varijanta. Svaki korak je jedan korak poništavanja.

## Trenutačna varijanta

Jedna varijanta svakog skupa je trenutačna. To znači dvije stvari:

- **Njezine etaže se broje kao površine etaža zgrade.** Trenutačna varijanta ima jedan prostor po etaži koji nosi bruto površinu te etaže, pa sve što čita površine etaža vidi varijantu koja vrijedi i nijednu drugu.
- **Provjerava se prema lokaciji.** Ako je izvan granice lokacije, preko građevinskog pravca ili na služnosti, upozorenje koje je imenuje pojavljuje se u {{ui:Problemi}}. To je samo upozorenje: ništa se ne odbija. Varijante koje nisu trenutačne se ne provjeravaju.

Odaberite {{ui:Postavi kao trenutačnu}} na drugoj varijanti da promijenite.

{{ui:Sakrij varijante koje nisu trenutačne}} sakriva ostale u 3D prikazu. To vrijedi samo za ovaj preglednik i ne sprema se u datoteku.

## Masa iz ModelCraft

U ModelCraft, {{ui:Izvezi}} › {{ui:Varijante masa u BimCraft…}} šalje svaku grupu ili komponentu kao jednu varijantu. BimCraft otvara datoteku s navedenim varijantama.

Za uvoz u već otvoreni model odaberite {{ui:Dodaj varijante masa iz datoteke}} i odaberite `.ifc` datoteku. Njezine mase ulaze kao varijante jednog skupa, u jednom koraku poništavanja, i stoje gdje su bile modelirane. Datoteka masa zgrada iz CivilCraft radi na isti način.

Varijanta označena s „(oblik pojednostavljen)“ nije bila jednostavan uspravan blok u ModelCraft (uvučena je, nagnuta ili nije zatvorena). Njezina masa ovdje je obris njene baze podignut do visine; njezine površine etaža i volumen su izmjereni iz samog tijela.

## Razradite odabranu varijantu

Odaberite {{ui:Razradi}} na varijanti. Ona postaje etaže (dodane do svog broja etaža), zidovi oko njezina obrisa na svakoj etaži i ploča poda na svakoj, u jednom koraku poništavanja. Varijanta napušta popis; ostale varijante ostaju kakve jesu. Krova još nema.

{{ui:Preimenuj}} mijenja naziv varijante, {{ui:Ukloni}} je izbacuje iz modela. Uklanjanje trenutačne varijante čini prvu sljedeću varijantu skupa trenutačnom.

## Što biste trebali vidjeti

- Svaka sačuvana varijanta kao blok u 3D prikazu i redak u popisu.
- „(trenutačna)“ uz jednu varijantu svakog skupa.
- Upozorenje u {{ui:Problemi}} kad trenutačna varijanta prelazi granicu lokacije, građevinski pravac ili služnost.

## Dobro je znati

- U IFC datoteci varijanta je proxy građevinskog elementa sa skupom svojstava `CadCraft_SiteMass` (njezin skup varijanti, naziv varijante i je li trenutačna nalaze se u tom skupu). Etaže trenutačne varijante su prostori tipa `MassingFloor`. Ostali programi čitaju proxy kao općeniti element.
- Čuvanje varijante nikad ne dodaje etaže; razrada da.
- Pomoćnik može navesti sačuvane varijante, sačuvati jednu, postaviti jednu kao trenutačnu, preimenovati, razraditi ili ukloniti jednu.
