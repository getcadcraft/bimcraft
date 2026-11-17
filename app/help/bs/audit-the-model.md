---
title: Revizija modela: prostorije, oznake, LOD, kolizije i interfejsi
summary: Pokrenite gotove provjere za neimenovane prostorije, nedostajuće oznake, elemente ispod nivoa razvoja koji traži faza projekta, kolizije između disciplina i interfejse LOD 350. Samo savjet: ništa se ne blokira.
keywords: revizija, provjera, neimenovana prostorija, nedostajuća oznaka, oznaka, lod, nivo razvoja, prekretnica, faza, kolizija, disciplina, koordinacija, interfejs, lod 350, otvor, nadvoj, greda, prodor, zaštitna cijev, cijev, kanal, problemi, izvještaj o provjeri, savjetodavno
from: cc83a14d
---

## Šta ćete raditi

Pregledajte cijeli model odjednom prije izdavanja. Revizija pokreće spremne skupove pravila i stavlja što nađe u listu {{ui:Problemi}} kao savjet. Ništa se ne blokira: popravite nalaz ili ga prihvatite uz razlog, kao i svaki drugi problem.

## Koraci

1. Otvorite {{ui:Provjere modela}} › {{ui:Revizija}} u lijevom panelu, ili {{ui:Alati}} › {{ui:Revidiraj model…}} (ukucano: `AUDIT`).
2. Izaberite {{ui:Faza projekta}}. To je ista faza kao i u detaljima crteža.
3. Označite skupove pravila koje treba pokrenuti.
4. Kliknite {{ui:Pokreni reviziju}}.
5. Pročitajte red za svaki skup pravila, zatim {{ui:Otvori listu Problema}}. Klik na nalaz odabire njegov element.
6. {{ui:Izvještaj o provjeri}} preuzima izvještaj: svaki nalaz, ko je šta prihvatio i zašto, i skupove pravila koji su se pokrenuli.

## Skupovi pravila

- **Neimenovane prostorije**: prostorija bez naziva, ili koja se još zove kako ju je program nazvao („Room 3”).
- **Nedostajuće oznake**: vrata ili prozor bez oznake, prostorija bez broja, električni uređaj bez oznake.
- **Elementi ispod LOD-a faze**: svaki zid, pod, plafon, krov, vrata i prozor čiji je LOD ispod onoga što faza traži. Element čita oznaku LOD-a svog tipa; element provjeren na terenu je LOD 500. Elementi bez oznake broje se u jednoj napomeni, jer se ne mogu provjeriti.
- **Kolizije između disciplina**: elementi dvije discipline (arhitektura, konstrukcija, mašinstvo, vodovod, elektro, po IFC klasi) koji se sudaraju. Krov koji naliježe na svoje zidove se ne broji.
- **Interfejsi LOD 350**: svaka vrata i prozor stoje u otvoru svog zida, otvor staje unutar zida, dva otvora se ne preklapaju, otvor širi od granice ima nadvoj ili gredu (element iznad njega, ili napomenu na vratima ili prozoru), a cijev, kanal ili kablovska kaseta koja prelazi zid ili ploču ima otvor tu. Nalazi se broje po paru disciplina.
- **Prepoznati elementi koje niko nije provjerio**: zidovi, vrata, prozori i prostorije očitani iz PDF-a, skena ili crteža, a koji su još neprovjereni. Vidi [Označite elemente kao provjerene ili provjerene na terenu](topic:verification).

## LOD koji traži svaka faza

Otvorite {{ui:LOD koji traži svaka faza}} da vidite ili promijenite tabelu.

:::note
Tabela i širina nadvoja su početne vrijednosti CadCraft-a. Nisu preuzete iz standarda: projekat postavlja LOD po fazama u svom planu izvršenja BIM-a. Postavite ih na svoje. Kancelarija može postaviti tabelu za sve u Postavke › Default Policies › Audit; promjena u odjeljku Audit se čuva na ovom računaru.
:::

## Dobro je znati

- Nadvoj se može napomenuti umjesto modelirati: odaberite vrata ili prozor i popunite {{ui:Napomena o nadvoju ili gredi}} pod {{ui:Provjera}} u Svojstvima.
- Cijev koja prolazi kroz stvarni otvor ne siječe nijednu površinu i ne prijavljuje se. Ona koja je modelirana ravno kroz zid se prijavljuje.
- Provjera kolizija staje nakon nekoliko sekundi na vrlo velikom modelu, i to kaže. Za punu provjeru dva odabrana skupa koristite [Pronađi kolizije između elemenata](topic:clash-check).
- Pokrenite reviziju ponovo nakon što promijenite model. Prihvaćeni nalazi ostaju prihvaćeni dok se njihovi brojevi ne mijenjaju.
- Revizija čita model. Ne zamjenjuje koordinacioni pregled koji rade odgovorne osobe.

## Dalje

- [Provjerite model za česte probleme](topic:model-checks)
- [Pronađite kolizije između elemenata](topic:clash-check)
- [Označite elemente kao provjerene ili provjerene na terenu](topic:verification)
