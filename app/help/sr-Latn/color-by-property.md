---
title: Boji elemente prema svojstvu
summary: Oboji svaki element prema vrednosti jednog svojstva, kao što su klasa, tip, sprat, materijal, ocena otpornosti na požar ili cena, pročitaj legendu, klikni vrednost da prikažeš samo te elemente i sačuvaj boje kao šemu za druge modele.
keywords: boja, boje, boji prema, legenda, pametni prikaz, izgled, svojstvo, tip, materijal, ocena otpornosti na požar, filter, izoluj, tema, vrednosti, šema, šema boja, sačuvaj boje, ponovna upotreba, tim, json, uzorak boje
from: f081d343
---

## Šta ćete uraditi

Vidite na prvi pogled kako je svojstvo raspoređeno po modelu: koji zidovi su spoljašnji, koji materijali su gde korišćeni, koji elementi nemaju ocenu otpornosti na požar. Svaki element uzima boju svoje vrednosti, a legenda kaže šta svaka boja znači i koliko elemenata ima tu boju.

## Koraci

1. Otvori IFC model.
2. Klikni karticu {{ui:Boja}} desno.
3. Izaberi svojstvo na listi. Prva su ona koja pripadaju svakom elementu ({{ui:Klasa}}, {{ui:Tip}}, {{ui:Sprat}}, {{ui:Materijal}}, {{ui:Naziv}}…); ostala dolaze iz skupova svojstava i skupova količina modela, pod nazivom skupa. Broj iza svakog je koliko elemenata ga ima.
4. Pročitaj legendu: boju, vrednost i koliko elemenata ima.
5. Klikni vrednost da prikažeš samo te elemente. Drži {{key:Mod}} i klikni da dodaš još vrednosti. Pritisni {{key:Shift+H}} da ponovo prikažeš sve.
6. Klikni {{ui:Isključeno}} da se vratiš na sopstvene boje modela.

## Šta treba da vidite

- Do sedam vrednosti dobija svoju boju, najčešća vrednost prva. Više vrednosti od toga dele jednu sivu boju, navedene kao **ostale vrednosti**.
- Broj sa mnogo različitih vrednosti je podeljen na šest jednakih opsega, od svetlog (nisko) do tamnog (visoko).
- Elementi bez svojstva su blago sivi, navedeni kao **Bez vrednosti**, da se obojeni elementi ističu.
- Boje se prilagođavaju za Papir i Model i ostaju dok uređujete model.
- Svojstvo tipa važi za svaki element tog tipa; kada element ima svoju vrednost za isto svojstvo, njegova vrednost važi.

## Promena boja i čuvanje kao šeme

- Klikni uzorak boje vrednosti u legendi da izabereš drugu boju. Model se odmah ponovo oboji.
- {{ui:Sačuvaj šemu}} preuzima boje kao mala `.json` datoteka nazvana po svojstvu, na primer `Class colors.json`.
- Na drugom modelu ili na računaru kolege kliknite {{ui:Otvori šemu…}} i izaberite tu datoteku. Svaka vrednost u šemi dobija svoju boju, pa isti ocena požara ili sistem ima istu boju u svakom modelu.
- Vrednost koju šema nema je obojena sivo i navedena kao „nije u šemi”; vrednosti iz šeme koje ovaj model nema ostaju navedene sa 0, da vidite celu šemu.
- Šema čuva boje u obe teme. Izbor svojstva na listi kreće od automatskih boja.

## Česte greške

- **„Ovaj model nema … vrednosti”.** Šema je sačuvana za svojstvo koje ovaj model nema (na primer drugi naziv skupa svojstava). Otvorite šemu napravljenu za ovu vrstu modela ili izaberite svojstvo na listi.

- **Svojstva nema na listi.** Nijedan element sa oblikom u modelu ga nema. Svojstva samih spratova i prostora nisu navedena.
- **Sve je iste boje.** Svi elementi imaju istu vrednost, ili nijednu: pogledajte brojeve u legendi.

## Dalje

- [Sakrij, izoluj i vidi kroz elemente](topic:hide-and-isolate)
- [Pronađi put kroz stablo modela](topic:model-tree)
