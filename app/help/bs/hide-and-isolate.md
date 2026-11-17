---
title: Sakrij, izoliraj i prikaži prozirno elemente
summary: Izaberi više elemenata, sakrij ih, prikaži samo njih ili ih prikaži zajedno s ostalim prozirnim, pa vrati sve.
keywords: sakrij, izoliraj, prozirno, providno, duh, rendgen, prikaži sve, ponovo prikaži, izaberi više, višestruki izbor, Ctrl klik, Shift klik, vidljivost
from: 97e98b8c
---

## Šta ćeš uraditi

Očisti pogled na ono što gledaš: sakrij elemente koji smetaju, prikaži samo one koje si izabrao, ili ostavi sve ostalo na ekranu kao blijedi obris da i dalje znaš gdje si.

## Koraci

1. Otvori IFC model. Pogledaj [Otvori IFC model i razgledaj ga u 3D](topic:open-ifc-model).
2. Klikni element da ga izabereš. Da izabereš još, drži {{key:Mod}} ili {{key:Shift}} i klikni svaki. Klik na već izabrani element na taj način ga ponovo izbacuje iz izbora.
3. Otvori {{ui:Prikaži}} na traci alata i izaberi šta želiš, ili pritisni njegov taster:
   - {{ui:Sakrij}} ({{key:H}}) sakriva izabrane elemente.
   - {{ui:Izoliraj}} ({{key:I}}) prikazuje samo izabrane elemente.
   - {{ui:Prozirno}} ({{key:T}}) prikazuje izabrane elemente kakvi jesu, a sve ostalo prozirno.
4. Klikni {{ui:Prikaži sve}} u istom meniju, ili pritisni {{key:Shift+H}}, da ponovo prikažeš svaki element.
5. Da odsječeš sve oko izabranih elemenata, umjesto toga klikni {{ui:Presječna kutija oko odabira}} u istom meniju, ili pritisni {{key:Shift+X}}. Pogledaj [Presijeci IFC model ravninom presjeka](topic:section-plane).

## Šta treba da vidiš

- Kad je izabrano više elemenata, {{ui:Svojstva}} kaže koliko ih je i navodi ih po klasi. Klikni jedan posebno da vidiš njegova svojstva.
- Sakriveni elementi se ne mogu izabrati: klik pogodi ono što je iza njih.
- Prozirni elementi se također ne mogu izabrati, pa možeš kliknuti pravo kroz zidove do onoga što si izolirao.
- Ivice se sakrivaju zajedno sa svojim elementom i postaju blijede s njim.
- Sakrivanje, izolacija i prozirnost ostaju kakvi jesu dok uređuješ, postavljaš stavke biblioteke ili presijecaš model ravninom presjeka. Otvaranje drugog modela prikazuje sve ponovo.

## Česte greške

- **Stavke menija su posivjele.** Ništa nije izabrano. Prvo klikni element; pokaži na stavku da pročitaš zašto ne može da djeluje.
- **Izolacija je prikazala zid koji sam sakrio.** Izolacija prikazuje tačno ono što si izabrao, sakriveno ili ne.
- **Cijeli sprat nedostaje.** To je lista {{ui:Spratovi}}, a ne {{ui:Prikaži sve}}: označi sprat ponovo.

## Dalje

- [Prikaži i sakrij spratove, prostorije i ivice](topic:storeys-and-spaces)
- [Presijeci IFC model ravninom presjeka](topic:section-plane)
