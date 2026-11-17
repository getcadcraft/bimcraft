---
title: Obojite elemente prema svojstvu
summary: Obojite svaki element prema vrijednosti jednog svojstva, npr. klasi, tipu, etaži, materijalu, požarnoj otpornosti ili trošku, pročitajte legendu, kliknite vrijednost da prikažete samo te elemente i spremite boje kao shemu za druge modele.
keywords: boja, boja prema, legenda, pametni prikaz, izgled, svojstvo, tip, materijal, požarna otpornost, filtar, izoliraj, tema, vrijednosti, shema, shema boja, spremi boje, ponovna uporaba, tim, json, uzorak boje
from: f081d343
---

## Što ćete učiniti

Na prvi pogled vidite kako je svojstvo raspoređeno po modelu: koji su zidovi vanjski, koji se materijali gdje koriste, koji elementi nemaju požarnu otpornost. Svaki element poprima boju svoje vrijednosti, a legenda kaže što znači svaka boja i koliko elemenata ima tu boju.

## Koraci

1. Otvorite IFC model.
2. Kliknite karticu {{ui:Boja}} s desne strane.
3. Odaberite svojstvo s popisa. Prva svojstva pripadaju svakom elementu ({{ui:Klasa}}, {{ui:Tip}}, {{ui:Etaža}}, {{ui:Materijal}}, {{ui:Naziv}}…); ostala dolaze iz skupova svojstava i skupova količina modela, pod nazivom skupa. Broj iza svakog je koliko elemenata ga ima.
4. Pročitajte legendu: boja, vrijednost i koliko elemenata ima tu vrijednost.
5. Kliknite vrijednost da prikažete samo te elemente. Držite {{key:Mod}} i kliknite da dodate još vrijednosti. Pritisnite {{key:Shift+H}} da ponovno prikažete sve.
6. Kliknite {{ui:Isključeno}} da se vratite na vlastite boje modela.

## Što biste trebali vidjeti

- Do sedam vrijednosti dobiva svoju boju, najčešća vrijednost prva. Više vrijednosti od toga dijele jednu sivu boju, popisanu kao **ostale vrijednosti**.
- Broj s mnogo različitih vrijednosti dijeli se na šest jednakih raspona, od svijetlog (nisko) do tamnog (visoko).
- Elementi bez tog svojstva su blijedosivi, popisani kao **Bez vrijednosti**, da se obojeni ističu.
- Boje se mijenjaju s prostorom Papir i Model te ostaju dok uređujete model.
- Svojstvo tipa vrijedi za svaki element tog tipa; kada element ima vlastitu vrijednost za isto svojstvo, vrijedi njegova vlastita vrijednost.

## Promijenite boje i spremite ih kao shemu

- Kliknite uzorak boje vrijednosti u legendi da odaberete drugu boju. Model se odmah ponovno oboji.
- {{ui:Spremi shemu}} preuzima boje kao malu `.json` datoteku nazvanu prema svojstvu, npr. `Class colors.json`.
- Na drugom modelu ili na računalu kolege kliknite {{ui:Otvori shemu…}} i odaberite tu datoteku. Svaka vrijednost u shemi dobiva svoju boju, pa je ista ocjena požarne otpornosti ili isti sustav u svakom modelu iste boje.
- Vrijednost koju shema nema bojana je sivo i popisana kao „nije u shemi“; vrijednosti iz sheme koje ovaj model nema ostaju popisane s 0, pa vidite cijelu shemu.
- Shema čuva boje u obje teme. Odabir svojstva na popisu kreće ponovno od automatskih boja.

## Česte pogreške

- **„Ovaj model nema vrijednosti …“.** Shema je spremljena za svojstvo koje ovaj model nema (npr. drugi naziv skupa svojstava). Otvorite shemu napravljenu za ovu vrstu modela ili odaberite svojstvo na popisu.

- **Svojstvo nedostaje na popisu.** Nijedan element s oblikom u modelu ga nema. Svojstva samih etaža i prostora nisu popisana.
- **Sve je iste boje.** Svaki element ima istu vrijednost ili nijednu: pogledajte brojke u legendi.

## Dalje

- [Sakrijte, izolirajte i prozirno prikažite elemente](topic:hide-and-isolate)
- [Snađite se uz stablo modela](topic:model-tree)
