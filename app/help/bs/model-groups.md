---
title: Grupe modela
summary: Od odabranih elemenata napravi jednu imenovanu grupu, ponovo je postavi na drugo mjesto i promijeni jednu kopiju, pa će se promijeniti sve.
keywords: grupa, grupa modela, grupisanje, razgrupisanje, instanca, kopija, ponavljanje, tipična jedinica, polje, stan, uredi grupu, IfcGroup
from: 121c5027
---

## Šta ćeš uraditi

Grupiši tipično polje, postavi ga nekoliko puta i promijeni svaku kopiju mijenjajući jednu.

## Gdje je alat

- Rasporedi s trakom: {{ui:Arhitektura}} › **Model** › {{ui:Grupa modela}}.
- Klasični raspored: traka za crtanje › meni {{ui:Prostorije}} › Grupa modela.

## Koraci

1. Sa alatom {{ui:Odaberi}} odaberi elemente: klikni jedan, pa Ctrl+klik ili Shift+klik na ostale.
2. Odaberi {{ui:Grupa modela}}. Odmah postaju grupa. Prvo upiši {{ui:Naziv grupe}} u polje da je imenuješ, ili ga upiši poslije da je preimenuješ.
3. Pritisni {{ui:Postavi drugu}} i klikni gdje kopija treba stati: njen donji lijevi ugao ide na mjesto klika.
4. Promijeni bilo koju kopiju: pomjeri kraj zida, promijeni veličinu vrata, izbriši stub. Svaka druga kopija grupe mijenja se u istom koraku, a jedno poništavanje vraća sve.
5. Dok je alat {{ui:Grupa modela}} aktivan, klik na element odabire cijelu njegovu grupu.

## Ostale stvari koje možeš

- {{ui:Dodaj odabrane}}: dodaj još elemenata u grupu koju si zadnju odabrao.
- {{ui:Razgrupiši}}: ova kopija ponovo postaje obični elementi. Ostale kopije ostaju grupa.
- Pomjeri cijelu kopiju alatom {{ui:Pomjeri}}: to je ista grupa na novom mjestu; ostale se ne pomjeraju.
- Izbriši elemente jedne kopije i ta kopija nestaje.

## Šta može biti u grupi

Zidovi sa svojim vratima i prozorima, stubovi i nacrtani podovi mogu se ponovo postaviti i ostati isti. Grupa može sadržati i druge elemente, ali tada se još ne može ponovo postaviti; u redu u listi piše zašto.

Kopije se pomjeraju, ne okreću niti zrcale.

## U IFC-u

Grupa je IfcGroup sa IfcRelAssignsToGroup vezom ka svojim članovima, koji ostaju obični zidovi, stubovi i podovi. Svaka kopija jedne grupe nosi isti identifikator definicije.

## Još nije napravljeno

- Okretanje ili zrcaljenje kopije.
- Stepenice, krovovi, podovi prostorija i stavke iz biblioteke u grupi koja se ponovo postavlja.
- Profil zida, nagib i otvori u zidu ne prenose se na kopije.
- Grupe unutar grupa.

Vidi i [Pomjeri, poravnaj i rasporedi](topic:move-align-distribute).
