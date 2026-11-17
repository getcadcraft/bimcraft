---
title: Revizija modela: prostorije, oznake, LOD, sudari i sučelja
summary: Pokrenite gotove provjere za prostorije bez naziva, nedostajuće oznake, elemente ispod razine razvoja koju traži faza projekta, sudare između disciplina i LOD 350 sučelja. Samo savjet: ništa se ne blokira.
keywords: revizija, provjera, prostorija bez naziva, nedostajuća oznaka, oznaka, lod, razina razvoja, prekretnica, faza, sudar, disciplina, koordinacija, sučelje, lod 350, otvor, nadvoj, greda, prolaz, zaštitna cijev, cijev, kanal, problemi, izvještaj o provjeri, savjetodavno
from: cc83a14d
---

## Što ćete učiniti

Pregledajte cijeli model odjednom prije izdavanja. Revizija pokreće gotove skupove pravila i stavlja nalaze u popis {{ui:Problems}} kao savjet. Ništa se ne blokira: nalaz ispravljate ili prihvaćate s razlogom, kao i svaki drugi problem.

## Koraci

1. Otvorite {{ui:Model checks}} › {{ui:Audit}} u lijevoj ploči, ili {{ui:Tools}} › {{ui:Audit the model…}} (upisano: `AUDIT`).
2. Odaberite {{ui:Project stage}}. To je ista faza kao u pojedinostima crteža.
3. Označite skupove pravila koje treba pokrenuti.
4. Kliknite {{ui:Run the audit}}.
5. Pročitajte redak za svaki skup pravila, zatim otvorite {{ui:Open the Problems list}}. Klik na nalaz odabire njegov element.
6. {{ui:The check report}} preuzima izvještaj: svaki nalaz, tko je što prihvatio i zašto, te skupove pravila koji su se pokrenuli.

## Skupovi pravila

- **Prostorije bez naziva**: prostorija bez naziva ili koja se još zove kako ju je program nazvao („Room 3“).
- **Nedostajuće oznake**: vrata ili prozor bez oznake, prostorija bez broja, električni uređaj bez oznake.
- **Elementi ispod LOD-a faze**: svaki zid, pod, strop, krov, vrata i prozor čiji je LOD niži od onoga što faza traži. Element čita LOD oznaku svog tipa; element provjeren na terenu ima LOD 500. Elementi bez oznake broje se u jednoj napomeni jer se ne mogu provjeriti.
- **Sudari između disciplina**: elementi dviju disciplina (arhitektura, konstrukcija, strojarstvo, vodovod, elektrotehnika, prema IFC klasi) koji se međusobno sijeku. Krov koji naliježe na svoje zidove ne broji se.
- **LOD 350 sučelja**: svaka vrata i prozor nalaze se u otvoru svog zida, otvor stane unutar zida, dva otvora se ne preklapaju, otvor širi od granice ima nadvoj ili gredu (element iznad njega ili napomenu na vratima ili prozoru), a cijev, kanal ili kabelski nosač koji prolazi kroz zid ili ploču ima otvor tamo. Nalazi se broje po paru disciplina.
- **Prepoznati elementi koje nitko nije provjerio**: zidovi, vrata, prozori i prostorije očitani iz PDF-a, skena ili crteža koji su još neprovjereni. Pogledajte [Označite elemente kao provjerene ili provjerene na terenu](topic:verification).

## LOD koji svaka faza traži

Otvorite {{ui:The LOD each stage asks for}} da vidite ili promijenite tablicu.

:::note
Tablica i širina nadvoja početne su vrijednosti CadCraft. Nisu preuzete iz standarda: projekt postavlja LOD po fazi u svom planu BIM izvedbe. Postavite svoje. Ured može postaviti tablicu za sve u Postavke › Default Policies › Audit; promjena u odjeljku Audit ostaje na ovom računalu.
:::

## Dobro je znati

- Nadvoj se može zabilježiti umjesto modeliranja: odaberite vrata ili prozor i ispunite {{ui:Lintel or header note}} pod {{ui:Verification}} u Svojstvima.
- Cijev koja prolazi kroz stvarni otvor ne presijeca nijednu plohu i ne prijavljuje se. Ona koja je modelirana ravno kroz zid se prijavljuje.
- Provjera sudara zaustavlja se nakon nekoliko sekundi na vrlo velikom modelu i to kaže. Za potpunu provjeru dvaju odabranih skupova upotrijebite [Pronađite sudare između elemenata](topic:clash-check).
- Ponovno pokrenite reviziju nakon promjene modela. Prihvaćeni nalazi ostaju prihvaćeni dok se njihovi brojevi ne mijenjaju.
- Revizija čita model. Ne zamjenjuje koordinacijski pregled odgovornih osoba.

## Dalje

- [Provjerite model na uobičajene probleme](topic:model-checks)
- [Pronađite sudare između elemenata](topic:clash-check)
- [Označite elemente kao provjerene ili provjerene na terenu](topic:verification)
