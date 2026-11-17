---
title: Pregled više IFC modela zajedno
summary: Dodajte još IFC datoteka u prizor, poput arhitekture, konstrukcije i instalacija, pogledajte ih u istim koordinatama, pomaknite jedan, sakrijte jedan i odaberite koji uređujete.
keywords: federiranje, federacija, federirani model, više modela, više datoteka, kombiniranje, preklapanje, koordinacija, disciplina, konstrukcija, instalacije, mep, odmak, pomakni model, aktivni model, dodaj model
from: df0efbbf
---

## Što ćete napraviti

Pogledajte modele različitih disciplina na jednom mjestu: model arhitekta s konstrukcijskim i instalacijskim modelima unutar njega. Svaki ostaje vlastita datoteka; BimCraft ih samo prikazuje zajedno.

## Koraci

1. Otvorite prvi IFC model kao i obično.
2. U {{ui:Modeli}} lijevo kliknite {{ui:Dodaj model…}} i odaberite jednu ili više IFC datoteka. Svaka se pojavljuje na popisu i u 3D prikazu.
3. Odznačite model da ga sakrijete; označite ga da ga ponovno prikažete.
4. Ako model dođe na krivo mjesto (druga geodetska točka), kliknite {{ui:Pomakni}} ispod njega, upišite koliko ga pomaknuti duž X, Y i Z u metrima, i kliknite {{ui:Primijeni}}.
5. Model s točkom je onaj koji uređujete. Kliknite točku drugog modela da uredite taj.
6. Kliknite × pored modela da ga uklonite iz prizora.

## Otvorite modele tima

Kad je otvoreni model oblak datoteka u timskom projektu, ispod popisa se pojavljuje {{ui:Otvori modele tima}}. Otvara ostale IFC modele projekta uz ovaj, svaki pomaknut za odmak koji je projekt postavio. Modeli skriveni od vas ostaju izvan i broje se; model koji projekt okreće otvara se neokrenut i također se broji; datoteke koje nisu IFC (npr. DWG) preskaču se i navedene su u statusnom retku. Model koji je već otvoren nikad se ne otvara dvaput. Gumb je skriven za datoteku koja nije u timskom projektu.

## Što biste trebali vidjeti

- Svaki model u koordinatama prvog modela, kako ga datoteka smješta. Modeli izvezeni iz istog projekta poravnaju se bez pomicanja.
- Odabir elementa modela koji ne uređujete prikazuje njegova svojstva samo za čitanje, uz {{ui:Uredi taj model}} za prebacivanje.
- {{ui:Stablo modela}}, {{ui:Etaže}}, {{ui:Boja}}, popis {{ui:Promjene}}, postavljanje stavki iz knjižnice i {{ui:Spremi kao IFC}} rade na modelu koji uređujete. Sakrivanje, izoliranje, prozirnost i {{ui:Odaberi sve}} rade na svim modelima.
- {{ui:Spremi kao IFC}} preuzima model koji uređujete, samo s njegovim promjenama.

## Česte pogreške

- **Model je daleko ili nedostaje.** Njegova datoteka koristi druge koordinate. Upotrijebite {{ui:Prilagodi}} da ga pronađete, zatim {{ui:Pomakni}} da ga postavite na mjesto.
- **Izbriši ili Kopiraj je zasivljeno na odabranom elementu.** Element pripada drugom modelu: prvo se prebacite na njega.
- **Otvaranje datoteke s {{ui:Odaberi datoteku}} zamijenilo je sve.** To pokreće novi prizor. Upotrijebite {{ui:Dodaj model…}} da dodate datoteke postojećem.

## Dalje

- [Sakrivanje, izoliranje i prozirnost elemenata](topic:hide-and-isolate)
- [Bojanje elemenata prema svojstvu](topic:color-by-property)
