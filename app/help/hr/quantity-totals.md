---
title: Zbrajanje količina, popis elemenata i specifikacija prostora
summary: Brojite elemente i zbrajate njihove duljine, površine, volumene ili bilo koje numeričko svojstvo, grupirano po bilo kojem svojstvu; popišite jedan redak po elementu ili napravite specifikaciju prostora s površinama i volumenima. Svako se preuzima kao CSV.
keywords: količina, količine, predmjer, zbrojevi, zbroj, specifikacija, troškovnik, boq, qto, csv, grupiraj po, broji, duljina, površina, volumen, prostori, sobe, specifikacija soba, specifikacija površina, popis elemenata
from: e2e7210c
---

## Što ćete raditi

Izvući zbrojeve iz modela: duljine zidova po etaži, broj vrata po tipu, volumen ploča po materijalu, cijenu svake zone.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Zbrojevi količina}} u lijevom panelu.
3. U {{ui:Broji}} odaberite {{ui:Svaki element}} ili samo odabrane.
4. Pod {{ui:Grupiraj po}} odaberite svojstvo, npr. {{ui:Klasa}}. Kliknite {{ui:Dodaj grupu}} za daljnje dijeljenje, do tri, npr. po {{ui:Etaža}}.
5. Pod {{ui:Zbroji}} označite brojeve za zbrajanje. Skupovi količina modela su označeni na početku.
6. Kliknite {{ui:Preuzmi CSV}} da otvorite tablicu u tabličnom kalkulatoru.

## Što biste trebali vidjeti

- Redak po grupi s brojem elemenata i svakim zbrojem, te redak ukupno.
- Elementi bez vrijednosti se broje, ali ne dodaju ništa. Kad se to dogodi, CSV dodaje stupac „izostavljeno“ uz zbroj da vidite koliko ih je.
- Brojevi su u jedinicama datoteke, kako ih datoteka pohranjuje, često milimetri za duljine.

## Jedan redak po elementu ili prostori

Promijenite {{ui:Prikaži}}:

- **Jedan redak po elementu**: svaki element u svom retku, sa svojstvima pod {{ui:Stupci}} i brojevima pod {{ui:Zbroji}}. CSV počinje GlobalId-em svakog elementa. Kliknite prvu vrijednost u retku da odaberete taj element.
- **Prostori**: svaka soba s brojem, nazivom, etažom, površinom i volumenom, te njihovim ukupnima. Površine i volumeni dolaze iz količina prostora kako ih datoteka navodi. Kad datoteka nema ništa, mjere se iz oblika prostora u m² i m³ i prikazuju kurzivom; CSV kaže što je što.

## Dalje

- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Obojite elemente po svojstvu](topic:color-by-property)

## Infrastruktura (IFC 4.3)

Odaberite **Infrastruktura (IFC 4.3)** u popisu pogleda da vidite ceste, pruge, mostove i pomorske radove zbrojene po klasi i tipu, s duljinom, površinom i volumenom koje datoteka sama navodi. Količina koju datoteka ne navodi ostaje prazna, nikad se ne izračunava. **Pošalji količine infrastrukture u TakeoffCraft** sprema datoteku `.quantities.json` koju TakeoffCraft otvara kao tipizirane količine.
