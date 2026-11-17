---
title: Pregled više IFC modela zajedno
summary: Dodaj još IFC datoteka u scenu, na primer arhitekturu, konstrukciju i instalacije, vidi ih u istim koordinatama, pomeri jedan, sakrij jedan i izaberi koji uređuješ.
keywords: federisanje, federisani model, više modela, više datoteka, spajanje, preklapanje, koordinacija, disciplina, konstrukcija, MEP, instalacije, pomak, pomeri model, aktivni model, dodaj model
from: df0efbbf
---

## Šta ćeš raditi

Pogledaj modele različitih disciplina na jednom mestu: model arhitekte sa konstrukcijskim i modelima instalacija u njemu. Svaki ostaje svoja datoteka; BimCraft ih samo prikazuje zajedno.

## Koraci

1. Otvori prvi IFC model kao obično.
2. U {{ui:Modeli}} levo klikni {{ui:Dodaj model…}} i izaberi jednu ili više IFC datoteka. Svaka se pojavljuje na listi i u 3D prikazu.
3. Odštikliraj model da ga sakriješ; štikliraj ga da ga ponovo prikažeš.
4. Ako model dođe na pogrešno mesto (druga geodetska tačka), klikni {{ui:Pomeri}} ispod njega, upiši koliko da ga pomeriš duž X, Y i Z u metrima, i klikni {{ui:Primeni}}.
5. Model sa tačkom je onaj koji uređuješ. Klikni tačku drugog modela da uređuješ taj.
6. Klikni × pored modela da ga izvučeš iz scene.

## Otvori modele tima

Kada je otvoreni model oblak datoteka u timskom projektu, ispod liste se pojavljuje {{ui:Otvori modele tima}}. Otvara ostale IFC modele projekta pored ovog, svaki pomeren za pomak koji je projekat postavio. Modeli sakriveni od tebe ostaju napolju i broje se; model koji projekat rotira otvara se neokrenut i takođe se broji; datoteke koje nisu IFC (na primer DWG) preskaču se i navode u statusnoj liniji. Model koji je već otvoren nikad se ne otvara dvaput. Dugme je sakriveno za datoteku koja nije u timskom projektu.

## Šta treba da vidiš

- Svaki model u koordinatama prvog modela, kako ga njegova datoteka postavlja. Modeli izvezeni iz istog projekta poravnavaju se bez pomeranja.
- Izbor elementa modela koji ne uređuješ prikazuje njegova svojstva samo za čitanje, uz {{ui:Uredi taj model}} za prebacivanje.
- {{ui:Stablo modela}}, {{ui:Spratovi}}, {{ui:Boja}}, lista {{ui:Izmene}}, postavljanje stavki iz biblioteke i {{ui:Sačuvaj kao IFC}} rade nad modelom koji uređuješ. Sakrivanje, izolovanje, providnost i {{ui:Izaberi sve}} rade nad svim modelima.
- {{ui:Sačuvaj kao IFC}} preuzima model koji uređuješ, samo sa njegovim izmenama.

## Česte greške

- **Model je daleko ili ga nema.** Njegova datoteka koristi druge koordinate. Koristi {{ui:Uklopi}} da ga nađeš, pa ga {{ui:Pomeri}} na mesto.
- **Izbriši ili Kopiraj su sivi na izabranom elementu.** Pripada drugom modelu: prvo prebaci na njega.
- **Otvaranje datoteke sa Izaberi datoteku zamenilo je sve.** Time počinje nova scena. Koristi {{ui:Dodaj model…}} da dodaš datoteke onoj koju imaš.

## Dalje

- [Sakrij, izoluj i učini providnim elemente](topic:hide-and-isolate)
- [Oboji elemente prema svojstvu](topic:color-by-property)
