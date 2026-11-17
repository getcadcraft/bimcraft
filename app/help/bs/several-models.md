---
title: Pregled više IFC modela zajedno
summary: Dodajte više IFC datoteka na scenu, na primjer arhitekturu, konstrukciju i instalacije, pogledajte ih u istim koordinatama, pomjerite jedan, sakrijte jedan i odaberite koji uređujete.
keywords: objedinjavanje, objedinjeni model, više modela, više datoteka, kombinovanje, preklapanje, koordinacija, disciplina, konstrukcija, MEP, instalacije, pomak, pomjeri model, aktivni model, dodaj model
from: df0efbbf
---

## Šta ćete uraditi

Pogledajte modele različitih disciplina na jednom mjestu: model arhitekte zajedno s konstrukcijskim modelima i modelima instalacija. Svaki ostaje svoja datoteka; BimCraft ih samo prikazuje zajedno.

## Koraci

1. Otvorite prvi IFC model na uobičajen način.
2. U {{ui:Modeli}} lijevo kliknite {{ui:Dodaj model…}} i odaberite jednu ili više IFC datoteka. Svaka se pojavljuje na listi i u 3D prikazu.
3. Odznačite model da ga sakrijete; označite ga da ga ponovo prikažete.
4. Ako model dođe na pogrešno mjesto (druga geodetska tačka), kliknite {{ui:Pomjeri}} ispod njega, upišite koliko ga pomjeriti duž X, Y i Z u metrima, i kliknite {{ui:Primijeni}}.
5. Model s tačkom je onaj koji uređujete. Kliknite tačku drugog modela da uredite taj.
6. Kliknite × pored modela da ga izvadite sa scene.

## Otvorite modele tima

Kada je otvoreni model oblak datoteka u timskom projektu, ispod liste se pojavljuje {{ui:Otvori modele tima}}. Otvara ostale IFC modele projekta pored ovog, svaki pomjeren za pomak koji je postavio projekat. Modeli sakriveni od vas ostaju van i broje se; model koji projekat okreće otvara se bez okretanja i također se broji; datoteke koje nisu IFC (npr. DWG) preskaču se i imenuju u statusnoj liniji. Model koji je već otvoren nikad se ne otvara dvaput. Dugme je skriveno za datoteku koja nije u timskom projektu.

## Šta treba da vidite

- Svaki model u koordinatama prvog modela, kako ga datoteka postavlja. Modeli izvezeni iz istog projekta poravnaju se bez pomjeranja bilo čega.
- Odabir elementa modela koji ne uređujete prikazuje njegova svojstva samo za čitanje, uz {{ui:Uredi taj model}} za prebacivanje.
- {{ui:Stablo modela}}, {{ui:Spratovi}}, {{ui:Boja}}, lista {{ui:Promjene}}, postavljanje stavki iz biblioteke i {{ui:Spasi kao IFC}} svi rade na modelu koji uređujete. Sakrivanje, izolovanje, prozirnost i {{ui:Odaberi sve}} rade kroz sve modele.
- {{ui:Spasi kao IFC}} preuzima model koji uređujete, samo s njegovim promjenama.

## Česte greške

- **Model je daleko ili ga nema.** Njegova datoteka koristi druge koordinate. Koristite {{ui:Uklopi}} da ga nađete, pa {{ui:Pomjeri}} da ga postavite na mjesto.
- **Izbriši ili Kopiraj je zasivljeno na odabranom elementu.** On pripada drugom modelu: prvo se prebacite na njega.
- **Otvaranje datoteke pomoću Odaberi datoteku zamijenilo je sve.** To pokreće novu scenu. Koristite {{ui:Dodaj model…}} da dodate datoteke u postojeću.

## Dalje

- [Sakrivanje, izolovanje i prozirnost elemenata](topic:hide-and-isolate)
- [Bojenje elemenata prema svojstvu](topic:color-by-property)
