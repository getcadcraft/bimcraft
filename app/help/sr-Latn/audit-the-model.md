---
title: Revidirajte model: prostorije, oznake, LOD, kolizije i interfejsi
summary: Pokrenite spremne provere za neimenovane prostorije, nedostajuće oznake, elemente ispod nivoa razvoja koji traži faza projekta, kolizije između disciplina i interfejse LOD 350. Samo savet: ništa se ne blokira.
keywords: revizija, provera, neimenovana prostorija, nedostajuća oznaka, oznaka, lod, nivo razvoja, prekretnica, faza, kolizija, disciplina, koordinacija, interfejs, lod 350, otvor, nadvratnik, nadprozornik, prodor, čaura, cev, kanal, problemi, izveštaj o proveri, savetodavno
from: cc83a14d
---

## Šta ćete uraditi

Pregledajte ceo model odjednom pre nego što ga izdate. Revizija pokreće spremne skupove pravila i stavlja nalaze u spisak {{ui:Problemi}} kao savet. Ništa se ne blokira: popravite nalaz ili ga prihvatite uz razlog, kao i svaki drugi problem.

## Koraci

1. Otvorite {{ui:Provere modela}} › {{ui:Revizija}} u levom panelu, ili {{ui:Alatke}} › {{ui:Revidiraj model…}} (ukucano: `AUDIT`).
2. Izaberite {{ui:Faza projekta}}. To je ista faza kao u detaljima crteža.
3. Označite skupove pravila koje treba pokrenuti.
4. Kliknite {{ui:Pokreni reviziju}}.
5. Pročitajte red za svaki skup pravila, pa {{ui:Otvori spisak Problemi}}. Klik na nalaz bira njegov element.
6. {{ui:Izveštaj o proveri}} preuzima izveštaj: svaki nalaz, ko je šta prihvatio i zašto, i skupove pravila koji su se pokrenuli.

## Skupovi pravila

- **Neimenovane prostorije**: prostorija bez naziva, ili koja se još zove kako ju je program nazvao („Prostorija 3“).
- **Nedostajuće oznake**: vrata ili prozor bez oznake, prostorija bez broja, električni uređaj bez oznake.
- **Elementi ispod LOD-a faze**: svaki zid, pod, plafon, krov, vrata i prozor čiji je LOD ispod onog koji faza traži. Element čita oznaku LOD-a svog tipa; element proveren na terenu ima LOD 500. Elementi bez oznake se broje u jednoj napomeni, jer ne mogu da se provere.
- **Kolizije između disciplina**: elementi dve discipline (arhitektura, konstrukcija, mašinstvo, vodovod, elektro, po IFC klasi) koji se sudaraju. Krov koji naleže na svoje zidove se ne računa.
- **Interfejsi LOD 350**: svaka vrata i prozor sede u otvoru svog zida, otvor staje u zid, dva otvora se ne preklapaju, otvor širi od granice ima nadvratnik ili nadprozornik (element iznad njega, ili napomenu na vratima ili prozoru), a cev, kanal ili kablovski nosač koji prelazi zid ili ploču ima otvor na tom mestu. Nalazi se broje po paru disciplina.
- **Prepoznati elementi koje niko nije proverio**: zidovi, vrata, prozori i prostorije očitani iz PDF-a, skena ili crteža koji su još neprovereni. Videti [Označite elemente kao provereni ili verifikovane na terenu](topic:verification).

## LOD koji traži svaka faza

Otvorite {{ui:LOD koji traži svaka faza}} da vidite ili promenite tabelu.

:::note
Tabela i širina nadvratnika su početne vrednosti CadCraft-a. Nisu uzete iz standarda: projekat postavlja LOD po fazi u svom planu izvršenja BIM-a. Podesite ih na svoje. Kancelarija može da postavi tabelu za sve u Podešavanja › Opšte › Podrazumevane politike › Revizija; izmena u odeljku Revizija čuva se na ovom računaru.
:::

## Dobro je znati

- Nadvratnik može biti napomenom umesto modelovan: izaberite vrata ili prozor i popunite {{ui:Napomena o nadvratniku}} pod {{ui:Provera}} u Svojstvima.
- Cev koja prolazi kroz pravi otvor ne prelazi nijednu površinu i ne prijavljuje se. Ona koja je modelovana pravo kroz zid se prijavljuje.
- Provera kolizija prestaje posle nekoliko sekundi na vrlo velikom modelu, i to se kaže. Za punu proveru dva izabrana skupa koristite [Pronađi kolizije između elemenata](topic:clash-check).
- Pokrenite reviziju ponovo posle izmene modela. Prihvaćeni nalazi ostaju prihvaćeni dok se njihovi brojevi ne menjaju.
- Revizija čita model. Ne zamenjuje koordinacioni pregled ljudi odgovornih za to.

## Dalje

- [Proverite model zbog čestih problema](topic:model-checks)
- [Pronađi kolizije između elemenata](topic:clash-check)
- [Označite elemente kao provereni ili verifikovane na terenu](topic:verification)
