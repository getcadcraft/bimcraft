---
title: Sakrij, izoluj i prikaži providno elemente
summary: Izaberite nekoliko elemenata, sakrijte ih, prikažite samo njih ili prikažite njih sa svim ostalim providnim, pa vratite sve na mesto.
keywords: sakrij, izoluj, providno, providnost, duh, rendgen, prikaži sve, otkrij, izbor više elemenata, višestruki izbor, Ctrl klik, Shift klik, vidljivost
from: 97e98b8c
---

## Šta ćete uraditi

Očistite prikaz do onoga što gledate: sakrijte elemente koji smetaju, prikažite samo one koje ste izabrali, ili zadržite sve ostalo na ekranu kao blagi obris da i dalje znate gde ste.

## Koraci

1. Otvorite IFC model. Pogledajte [Otvorite IFC model i razgledajte ga u 3D](topic:open-ifc-model).
2. Kliknite element da ga izaberete. Da izaberete još, držite {{key:Mod}} ili {{key:Shift}} i kliknite svaki. Klik na već izabrani element na taj način ga ponovo uklanja iz izbora.
3. Otvorite {{ui:Prikaži}} na alatnoj traci i izaberite šta želite, ili pritisnite njegov taster:
   - {{ui:Sakrij}} ({{key:H}}) sakriva izabrane elemente.
   - {{ui:Izoluj}} ({{key:I}}) prikazuje samo izabrane elemente.
   - {{ui:Providno}} ({{key:T}}) prikazuje izabrane elemente kakvi jesu, a sve ostalo providno.
4. Kliknite {{ui:Prikaži sve}} u istom meniju, ili pritisnite {{key:Shift+H}}, da ponovo prikažete svaki element.
5. Da odsečete sve oko izabranih elemenata, umesto toga kliknite {{ui:Kutija preseka oko izbora}} u istom meniju, ili pritisnite {{key:Shift+X}}. Pogledajte [Presecite IFC model ravni preseka](topic:section-plane).

## Šta treba da vidite

- Uz nekoliko izabranih elemenata, {{ui:Svojstva}} kaže koliko ih je i navodi ih po klasi. Kliknite jedan sam da vidite njegova svojstva.
- Sakriveni elementi ne mogu da se izaberu: klik pogađa ono što je iza njih.
- Providni elementi takođe ne mogu da se izaberu, pa možete kliknuti direktno kroz zidove do onoga što ste izolovali.
- Ivice se sakrivaju zajedno sa elementom i postaju blede zajedno sa njim.
- Sakrivanje, izolovanje i providnost ostaju kakvi jesu dok menjate, postavljate stavke iz biblioteke ili presecate model ravni preseka. Otvaranje drugog modela ponovo prikazuje sve.

## Česte greške

- **Stavke menija su zasivljene.** Ništa nije izabrano. Prvo kliknite element; pokažite na stavku da pročitate zašto ne može da radi.
- **Izoluj je prikazalo zid koji sam sakrio.** Izolovanje prikazuje tačno ono što ste izabrali, sakriveno ili ne.
- **Nedostaje ceo sprat.** To je lista {{ui:Spratovi}}, a ne {{ui:Prikaži sve}}: ponovo štiklirajte sprat.

## Dalje

- [Prikažite i sakrijte spratove, prostore i ivice](topic:storeys-and-spaces)
- [Presecite IFC model ravni preseka](topic:section-plane)
