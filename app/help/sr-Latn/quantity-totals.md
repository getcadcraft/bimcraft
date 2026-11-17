---
title: Zbir količina, lista elemenata i specifikacija prostora
summary: Prebrojte elemente i saberite njihove dužine, površine, zapremine ili bilo koje numeričko svojstvo, grupisano po bilo kom svojstvu; ili prikažite jedan red po elementu; ili napravite specifikaciju prostora sa površinama i zapreminama. Svako se preuzima kao CSV.
keywords: količina, količine, predmer, zbirovi, zbir, specifikacija, predmer radova, boq, qto, csv, grupiši po, broj, dužina, površina, zapremina, prostori, prostorije, specifikacija prostorija, specifikacija površina, lista elemenata
from: e2e7210c
---

## Šta ćete uraditi

Dobijte zbirove iz modela: dužine zidova po spratu, broj vrata po tipu, zapreminu ploča po materijalu, cenu svake zone.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Ukupne količine}} u levom panelu.
3. U {{ui:Broj}}, izaberite {{ui:Svaki element}} ili samo izabrane.
4. Pod {{ui:Grupiši po}}, izaberite svojstvo, na primer {{ui:Klasa}}. Kliknite {{ui:Dodaj grupu}} da podelite dalje, do tri, na primer po {{ui:Sprat}}.
5. Pod {{ui:Saberi}}, označite brojeve za zbir. Skupovi količina modela su na početku označeni.
6. Kliknite {{ui:Preuzmi CSV}} da otvorite tabelu u tabelarnoj aplikaciji.

## Šta treba da vidite

- Red po grupi sa brojem elemenata i svakim zbirom, i red ukupno.
- Elementi bez vrednosti se broje, ali ništa ne dodaju. Kad se to dogodi, CSV dodaje kolonu „izostavljeno“ pored zbira, da vidite koliko ih je.
- Brojevi su u jedinicama same datoteke, kako ih datoteka čuva, često milimetri za dužine.

## Jedan red po elementu ili prostori

Promenite {{ui:Prikaži}}:

- **Jedan red po elementu**: svaki element u svom redu, sa svojstvima pod {{ui:Kolone}} i brojevima pod {{ui:Saberi}}. CSV počinje GlobalId-jem svakog elementa. Kliknite prvu vrednost u redu da izaberete taj element.
- **Prostori**: svaka prostorija sa svojim brojem, nazivom, spratom, površinom i zapreminom, i njihovim zbirovima. Površine i zapremine dolaze iz količina prostora kako ih datoteka navodi. Kad ih datoteka nema, mere se iz oblika prostora u m² i m³ i prikazuju kurzivom; CSV kaže šta je šta.

## Dalje

- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Obojite elemente prema svojstvu](topic:color-by-property)

## Infrastruktura (IFC 4.3)

Izaberite **Infrastruktura (IFC 4.3)** na listi prikaza da vidite puteve, pruge, mostove i pomorske radove zbirno po klasi i tipu, sa dužinom, površinom i zapreminom koje sama datoteka navodi. Količina koju datoteka ne navodi ostaje prazna i nikad se ne računa. **Pošalji količine infrastrukture u TakeoffCraft** čuva datoteku `.quantities.json` koju TakeoffCraft otvara kao tipizovane količine.
