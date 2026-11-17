---
title: Varijante mase uporedo
summary: Čuvajte nekoliko varijanti mase u istom modelu, jednu učinite tekućom, provjerite je prema građevinskim linijama i služnostima lokacije, uvezite masu iz ModelCraft i razradite izabranu varijantu u zidove i podove.
keywords: masa, varijanta, varijante, skup varijanti, shema, koncept, koncepcijski dizajn, faza 2, alternative, uporedi varijante, tekuća varijanta, masa zgrade, guranje i povlačenje, modelcraft, civilcraft, bruto površina poda, tlocrt, zapremina, razrada mase, služnost, građevinska linija, povlačenje
from: 69a01459
---

## Šta ćete uraditi

Čuvajte varijante mase koncepta u jednom modelu umjesto u zasebnim datotekama: nekoliko masa zgrada uporedo, jedna od njih je **tekuća varijanta**, a ostale se čuvaju za poređenje.

Varijanta mase je masa zgrade: obris podignut na visinu, s određenim brojem spratova. To još nisu zidovi. Možete čuvati koliko god želite, grupisanih u **skupove varijanti** (varijante jednog skupa su međusobne alternative).

## Čuvanje varijante

1. Otvorite {{ui:Program prostorija u masu}}, unesite program prostorija i obris, i izaberite {{ui:Pronađi opcije}}.
2. Izaberite jednu od navedenih varijanti.
3. Pod {{ui:Varijante mase u modelu}}, upišite naziv za {{ui:Skup varijanti}} ako ga želite, pa izaberite {{ui:Zadrži odabranu varijantu}}.

Varijanta se pojavljuje u modelu kao masa zgrade i na listi, sa svojim spratovima, tlocrtom, bruto površinom poda i zapreminom. Ništa se ne gradi. Sačuvajte drugu na isti način.

Prva varijanta skupa je njegova tekuća varijanta. Svaki korak je jedan korak poništavanja.

## Tekuća varijanta

Jedna varijanta svakog skupa je tekuća. To znači dvije stvari:

- **Njeni spratovi se računaju kao površine poda zgrade.** Tekuća varijanta ima jedan prostor po spratu koji nosi bruto površinu tog sprata, pa sve što čita površine poda vidi važeću varijantu i nijednu drugu.
- **Provjerava se prema lokaciji.** Ako je van granice lokacije, preko građevinske linije ili na služnosti, upozorenje s njenim imenom pojavljuje se u {{ui:Problemi}}. To je samo upozorenje: ništa se ne odbija. Varijante koje nisu tekuće se ne provjeravaju.

Izaberite {{ui:Postavi kao tekuću}} na drugoj varijanti da je promijenite.

{{ui:Sakrij varijante koje nisu tekuće}} skriva ostale u 3D pogledu. To važi samo za ovaj pretraživač i ne čuva se u datoteci.

## Masa iz ModelCraft

U ModelCraft, {{ui:Izvezi}} › {{ui:Masa u BimCraft…}} šalje svaku grupu ili komponentu kao jednu varijantu. BimCraft otvara datoteku s navedenim varijantama.

Da ih uvedete u model koji je već otvoren, izaberite {{ui:Dodaj varijante mase iz datoteke}} i izaberite `.ifc` datoteku. Njene mase ulaze kao varijante jednog skupa, u jednom koraku poništavanja, stojeći tamo gdje su modelirane. Datoteka masa zgrada iz CivilCraft radi isto.

Varijanta označena kao „(oblik pojednostavljen)“ u ModelCraft nije bila obična uspravna kocka (uvlači se, nagnuta je ili nije zatvorena). Njena masa ovdje je obris njene osnove podignut na visinu. Njene površine poda i zapremina izmjerene su iz samog tijela.

## Razrada izabrane varijante

Izaberite {{ui:Razradi}} na varijanti. Ona postaje nivoi (dodani do broja spratova), zidovi oko njenog obrisa na svakom spratu i ploča poda na svakom, u jednom koraku poništavanja. Varijanta napušta listu; ostale varijante ostaju kakve jesu. Krova još nema.

{{ui:Preimenuj}} mijenja naziv varijante, a {{ui:Ukloni}} je izbacuje iz modela. Uklanjanje tekuće varijante čini prvu sljedeću varijantu tog skupa tekućom.

## Šta biste trebali vidjeti

- Svaka sačuvana varijanta kao blok u 3D pogledu i red na listi.
- „(tekuća)“ pored jedne varijante svakog skupa.
- Upozorenje u {{ui:Problemi}} kada tekuća varijanta prelazi granicu lokacije, građevinsku liniju ili služnost.

## Dobro je znati

- U IFC datoteci varijanta je element proxy zgrade sa skupom svojstava `CadCraft_SiteMass` (njen skup varijanti, naziv varijante i je li tekuća su u tom skupu). Spratovi tekuće varijante su prostori tipa `MassingFloor`. Drugi programi čitaju proxy kao generički element.
- Čuvanje varijante nikad ne dodaje nivoe; razrada hoće.
- Asistent može navesti sačuvane varijante, sačuvati jednu, učiniti jednu tekućom, preimenovati, razraditi ili ukloniti.
