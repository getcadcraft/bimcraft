---
title: Oboji elemente prema svojstvu
summary: Oboji svaki element prema vrijednosti jednog svojstva, kao što su klasa, tip, sprat, materijal, ocjena otpornosti na požar ili trošak, pročitaj legendu, klikni vrijednost da prikažeš samo te elemente i spasi boje kao shemu za upotrebu na drugim modelima.
keywords: boja, boje, boji, legenda, pametni prikaz, izgled, svojstvo, tip, materijal, otpornost na požar, filter, izoluj, tema, vrijednosti, shema, shema boja, spasi boje, ponovna upotreba, tim, json, uzorak
from: f081d343
---

## Šta ćete uraditi

Na prvi pogled vidite kako je svojstvo raspoređeno po modelu: koji su zidovi vanjski, koji materijali se gdje koriste, koji elementi nemaju ocjenu otpornosti na požar. Svaki element uzima boju svoje vrijednosti, a legenda kaže šta svaka boja znači i koliko elemenata ima tu boju.

## Koraci

1. Otvori IFC model.
2. Klikni karticu {{ui:Boja}} desno.
3. Odaberi svojstvo sa liste. Prva pripadaju svakom elementu ({{ui:Klasa}}, {{ui:Tip}}, {{ui:Sprat}}, {{ui:Materijal}}, {{ui:Naziv}}…); ostala dolaze iz skupova svojstava i skupova količina modela, pod nazivom skupa. Broj iza svakog označava koliko elemenata ga ima.
4. Pročitaj legendu: boju, vrijednost i koliko elemenata je ima.
5. Klikni vrijednost da prikažeš samo te elemente. Drži {{key:Mod}} i klikni da dodaš još vrijednosti. Pritisni {{key:Shift+H}} da ponovo prikažeš sve.
6. Klikni {{ui:Isključeno}} da se vratiš na vlastite boje modela.

## Šta treba da vidite

- Do sedam vrijednosti dobija svoju boju, najčešća vrijednost prva. Više vrijednosti od toga dijele jednu sivu boju i navedene su kao **ostale vrijednosti**.
- Broj sa mnogo različitih vrijednosti dijeli se na šest jednakih opsega, od svijetle (niske) do tamne (visoke).
- Elementi bez svojstva su blijedo sivi i navedeni su kao **Bez vrijednosti**, tako da se obojeni elementi ističu.
- Boje se mijenjaju sa Papir i Model i ostaju dok uređujete model.
- Svojstvo tipa važi za svaki element tog tipa; kada element ima vlastitu vrijednost za isto svojstvo, vlastita vrijednost ima prednost.

## Promijeni boje i sačuvaj ih kao shemu

- Klikni uzorak vrijednosti u legendi da odabereš drugu boju za nju. Model se odmah ponovo boji.
- {{ui:Spasi shemu}} preuzima boje kao malu `.json` datoteku nazvanu po svojstvu, na primjer `Class colors.json`.
- Na drugom modelu ili na računaru kolege kliknite {{ui:Otvori shemu…}} i odaberite tu datoteku. Svaka vrijednost iz sheme dobija svoju boju, pa je ista ocjena otpornosti na požar ili sistem isti boje u svakom modelu.
- Vrijednost koju shema nema biva obojena sivo i navedena kao „nije u shemi“; vrijednosti iz sheme koje ovaj model nema ostaju navedene sa 0, tako da vidite cijelu shemu.
- Shema čuva svoje boje u obje teme. Odabir svojstva na listi kreće ponovo od automatskih boja.

## Česte greške

- **„Ovaj model nema … vrijednosti.“** Shema je sačuvana za svojstvo koje ovaj model nema (na primjer drugi naziv skupa svojstava). Otvorite shemu napravljenu za ovu vrstu modela ili odaberite svojstvo sa liste.

- **Svojstvo nedostaje na listi.** Nijedan element sa oblikom u modelu ga nema. Svojstva samih spratova i prostora nisu navedena.
- **Sve je iste boje.** Svi elementi imaju istu vrijednost, ili nijednu: pogledajte brojeve u legendi.

## Dalje

- [Sakrij, izoluj i prikaži kroz elemente](topic:hide-and-isolate)
- [Snađi se uz stablo modela](topic:model-tree)
