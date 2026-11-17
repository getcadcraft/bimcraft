---
title: Sakrij, izoliraj i učini elemente prozirnima
summary: Odaberite nekoliko elemenata, sakrijte ih, prikažite samo njih ili ih prikažite dok su svi ostali prozirni, zatim vratite sve.
keywords: sakrij, izoliraj, prozirno, prozirnost, duh, rendgen, prikaži sve, otkrij, odaberi više, višestruki odabir, ctrl klik, shift klik, vidljivost
from: 97e98b8c
---

## Što ćete učiniti

Očistite prikaz do onoga što gledate: sakrijte elemente koji smetaju, prikažite samo one koje ste odabrali ili zadržite sve ostalo na ekranu kao blijedi obris da i dalje znate gdje ste.

## Koraci

1. Otvorite IFC model. Pogledajte [Otvaranje IFC modela i razgledavanje u 3D](topic:open-ifc-model).
2. Kliknite element da ga odaberete. Da odaberete još, držite {{key:Mod}} ili {{key:Shift}} i kliknite svaki. Klik na već odabrani element na taj način ga ponovno uklanja.
3. Otvorite {{ui:Prikaži}} na alatnoj traci i odaberite što želite ili pritisnite njegovu tipku:
   - {{ui:Sakrij}} ({{key:H}}) sakriva odabrane elemente.
   - {{ui:Izoliraj}} ({{key:I}}) prikazuje samo odabrane elemente.
   - {{ui:Prozirno}} ({{key:T}}) prikazuje odabrane elemente kakvi jesu, a sve ostalo prozirno.
4. Kliknite {{ui:Prikaži sve}} u istom izborniku ili pritisnite {{key:Shift+H}} da ponovno prikažete svaki element.
5. Da odrežete sve oko odabranih elemenata, umjesto toga kliknite {{ui:Kutija presjeka oko odabira}} u istom izborniku ili pritisnite {{key:Shift+X}}. Pogledajte [Rezanje IFC modela ravninom presjeka](topic:section-plane).

## Što biste trebali vidjeti

- Uz nekoliko odabranih elemenata, {{ui:Svojstva}} kaže koliko ih je i navodi ih po klasi. Kliknite jedan na zasebno da vidite njegova svojstva.
- Skriveni elementi ne mogu se odabrati: klik pogodi ono što je iza njih.
- Prozirni elementi također se ne mogu odabrati, pa možete kliknuti ravno kroz zidove do onoga što ste izolirali.
- Rubovi se sakrivaju s elementom i postaju blijedi s njim.
- Skrivanje, izoliranje i prozirnost ostaju kakvi jesu dok uređujete, postavljate stavke knjižnice ili režete model ravninom presjeka. Otvaranje drugog modela prikazuje sve ponovno.

## Česte pogreške

- **Stavke izbornika su posivljele.** Ništa nije odabrano. Najprije kliknite element; pokažite na stavku da pročitate zašto ne može djelovati.
- **Izoliranje je prikazalo zid koji sam sakrio.** Izoliranje prikazuje točno ono što ste odabrali, skriveno ili ne.
- **Nedostaje cijela etaža.** To je popis {{ui:Etaže}}, a ne {{ui:Prikaži sve}}: ponovno označite etažu.

## Sljedeće

- [Prikaz i skrivanje etaža, prostora i rubova](topic:storeys-and-spaces)
- [Rezanje IFC modela ravninom presjeka](topic:section-plane)
