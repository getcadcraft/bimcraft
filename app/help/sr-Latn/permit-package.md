---
title: Paket za dozvolu i prateća dokumenta nadležnog organa
summary: Prikupite proveru propisa, verovatne primedbe na pregled, model i spisak pratećih dokumenata nadležnog organa u jedan zip, sa svakim dokumentom povezanim sa listom ili specifikacijom koja ga zadovoljava.
keywords: postupak odobravanja, format podnošenja, potrebni crteži, veličina lista, format datoteke, primerci, paket propisa, dozvola, paket za dozvolu, podnošenje plana zgrade, odobravanje plana, zakonsko podnošenje, prateća dokumenta, kontrolna lista, nadležni organ, opština, grad, zahtev za planiranje, primedbe na pregled, nacionalni građevinski propisi, nedostajuća dokumenta
from: 47dd77ee
---

## Šta ćete uraditi

Napravite jedan zip za zakonsko podnošenje (kada spisak nadležnog organa dolazi iz paketa propisa, on takođe sadrži korake odobravanja i format podnošenja): naslovnu stranu, primedbe koje recenzent verovatno iznosi (napisane iz provera, a ne pogađane), izveštaj o propisima kada je dodatak Građevinski propisi uključen, model i spisak pratećih dokumenata koje vaš nadležni organ traži.

Ovo je vodič napravljen iz modela. Registrovani projektant i nadležni organ odlučuju šta se traži i šta se prihvata.

## Koraci

1. Sa otvorenim modelom, otvorite {{ui:Paket za dozvolu}} u levom panelu.
2. Ukucajte naziv projekta, adresu i podnosioca, i navedite svoje liste i obrasce, jedan po redu.
3. Pod {{ui:Prateća dokumenta}}, izaberite {{ui:Spisak nadležnog organa}}. Spiskovi dolaze iz paketa propisa: dodajte dodatak Građevinski propisi i označite paket za vaše mesto u Podešavanja › Građevinski propisi (paket može da sadrži pravila, postupak odobravanja, format podnošenja, konvencije za crteže i standardne napomene). Opšti spisak radi i bez toga.
4. Pročitajte spisak. Svaki dokument je {{ui:Povezano}} (sa listom i razlogom), {{ui:Dostavili ste vi}}, {{ui:Ne primenjuje se}} ili {{ui:Nedostaje}}.
5. Za papir koji sami dostavljate (obrazac, vlasnički list, potvrda o uplati) izaberite {{ui:Dostavio sam}}. Za stavku označenu „ako se primenjuje“ koja se ne primenjuje, izaberite {{ui:Ne primenjuje se ovde}}. Da sami povežete dokument sa listom, izaberite list.
6. Otvorite {{ui:Postupak odobravanja}} i {{ui:Format podnošenja}} ispod spiska da pročitate korake i šta treba predati (veličine listova, formate datoteka, primerke). Naknada ili rok se prikazuju samo kada izvor paketa to navodi, uz stranu i datum čitanja.
7. Kliknite {{ui:Napravi paket za dozvolu (zip)}}. Koraci i format su takođe na naslovnoj strani.

## Kako je dokument povezan

Dokument je povezan sa listom koji sadrži odgovarajuću vrstu prikaza (plan sprata, izgled, presek), sa listom koji sadrži odgovarajuću specifikaciju (specifikacija vrata, za specifikaciju vrata), ili sa listom čiji naslov to kaže (list nazvan „Situacioni plan“). Kada model ima redove, ali nijedan list ne sadrži specifikaciju, ili je teren nacrtan ali nijedan list nije naslovljen kao situacioni plan, stavka ostaje nedostajuća i kaže zašto.

## Dobro je znati

- **Nijedan spisak nadležnog organa nije proverio lokalni praktičar.** Svaki je pročitan iz objavljenog izvora koji navodi, na datumu koji pokazuje, i napisan našim rečima. Zahtevi se menjaju: proverite aktuelni spisak samog nadležnog organa.
- Ono što set još nedostaje, ili list koji nije veličine, orijentacije ili razmere koju paket traži, prikazuje se u listi Problema kao napomena. Napomene su savet: nikada ne zaustavljaju paket.
- Nedostajući dokumenti nikada ne zaustavljaju paket. Navode se na naslovnoj strani i u `04-supporting-documents.csv`.
- Spiskovi su podaci, a ne kod, unutar paketa propisa: Južna Afrika (Nacionalni građevinski propisi, propis A2), Kejptaun (sa dodatim regionom Južna Afrika iz Biblioteke), Engleska (nacionalni zahtevi za informacije), Portland u Oregonu, izmišljeni paket za nastavu i opšti spisak koji nije ničijeg nadležnog organa. Svako može da napiše paket za svoje mesto.
- Vaši izbori se čuvaju u modelu, pa su tu kada ga ponovo otvorite, a svaki je jedan korak koji možete opozvati.

Pogledajte takođe [Listovi](topic:sheets) i [Lokacija, zgrada na njoj i njeni nivoi](topic:site-building-and-levels).
