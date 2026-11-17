---
title: Zbrajanje količina, popis elemenata i specifikacija prostorija
summary: Prebrojite elemente i zbrojite njihove dužine, površine, zapremine ili bilo koje numeričko svojstvo, grupisano po bilo kom svojstvu; ili popišite jedan red po elementu; ili napravite specifikaciju prostorija s površinama i zapreminama. Svaki se preuzima kao CSV.
keywords: količina, količine, predmjer i predračun, ukupno, zbir, specifikacija, boq, qto, csv, grupiši po, broj, dužina, površina, zapremina, prostorije, sobe, specifikacija prostorija, specifikacija površina, popis elemenata
from: e2e7210c
---

## Šta ćete uraditi

Dobiti ukupne vrijednosti iz modela: dužine zidova po spratu, broj vrata po tipu, zapreminu ploča po materijalu, cijenu svake zone.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Ukupne količine}} u lijevom panelu.
3. U {{ui:Broj}} izaberite {{ui:Svi elementi}} ili samo izabrane.
4. Pod {{ui:Grupiši po}} izaberite svojstvo, kao što je {{ui:Klasa}}. Kliknite {{ui:Dodaj grupu}} da podijelite dalje, do tri, na primjer po {{ui:Sprat}}.
5. Pod {{ui:Saberi}} označite brojeve za zbrajanje. Skupovi količina modela su na početku označeni.
6. Kliknite {{ui:Preuzmi CSV}} da otvorite tabelu u tabelarnom programu.

## Šta treba da vidite

- Red po grupi s brojem elemenata i svakim zbirom, i red ukupno.
- Elementi bez vrijednosti se broje ali ne doprinose zbiru. Kad se to desi, CSV dodaje kolonu "izostavljeno" pored zbira da vidite koliko ih je.
- Brojevi su u jedinicama datoteke, kako ih datoteka čuva, često milimetri za dužine.

## Jedan red po elementu ili prostorije

Promijenite {{ui:Prikaži}}:

- **Jedan red po elementu**: svaki element u svom redu, sa svojstvima pod {{ui:Kolone}} i brojevima pod {{ui:Saberi}}. CSV počinje GlobalId-em svakog elementa. Kliknite prvu vrijednost u redu da izaberete taj element.
- **Prostorije**: svaka soba s brojem, nazivom, spratom, površinom i zapreminom, i njihovi zbirovi. Površine i zapremine dolaze iz količina prostora onako kako ih datoteka navodi. Kad datoteka nema ništa, mjere se iz oblika prostora u m² i m³ i prikazuju kurzivom; CSV kaže koja je koja.

## Dalje

- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Obojite elemente po svojstvu](topic:color-by-property)

## Infrastruktura (IFC 4.3)

Izaberite **Infrastruktura (IFC 4.3)** u listi prikaza da vidite puteve, pruge, mostove i pomorske radove zbrojene po klasi i tipu, s dužinom, površinom i zapreminom koje datoteka sama navodi. Količina koju datoteka ne navodi ostaje prazna, nikad se ne računa. **Pošalji količine infrastrukture u TakeoffCraft** sačuva datoteku `.quantities.json` koju TakeoffCraft otvara kao tipizirane količine.
