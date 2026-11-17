---
title: Dodatki, ki jih uporablja vaša datoteka
summary: BimCraft v IFC datoteki beleži, kateri dodatki so vanjo zapisali, in ob odpiranju ponudi, da dodate tiste, ki manjkajo.
keywords: dodatek, addon, ta datoteka uporablja, manjkajoč dodatek, trusscraft, knjižnica, zapis, cadcraft_addons
from: 9d9500d8
---

## Kaj počne

Ko dodatek zapiše v model (nosilno konstrukcijo ali potek cevi), BimCraft zabeleži dodatek in njegovo različico na IFC projektu, v naboru lastnosti CadCraft_AddOns. Zapis se shrani v istem koraku razveljavitve kot sprememba dodatka, zato razveljavitev spremembe odstrani tudi zapis. Drugi programi nabor lastnosti prezrejo; to, kar je dodatek narisal, ostane v datoteki v vsakem primeru.

## Koraki

1. Odprite IFC datoteko, ki ji je pomagal nastati dodatek.
2. Če dodatek, ki ga datoteka uporablja, ni vklopljen, nad modelom je opomba, ki pove, kateri so, z gumbom za dodajanje iz vašega računa knjižnice.
3. Dodajte jih ali zaprite opombo. Model se odpre v vsakem primeru.

## Pogoste napake

- **Opomba se ne prikaže.** V tem zavihku niste prijavljeni v svoj račun ali datoteka nima zapisa (nastala je pred zapisi ali z drugim programom).
- **Seznam sprememb pravi „undefined“.** Popravljeno: oznake zdaj prikažejo ime dodatka.

## Naprej

- [Postavite opremo in pohištvo iz knjižnice](topic:place-from-library)
