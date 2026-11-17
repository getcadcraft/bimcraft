---
title: Desenvolupa una massa d'edifici a partir d'un estudi d'emplaçament
summary: Preneu una massa d'edifici estudiada a la vista d'emplaçament de CivilCraft i desenvolupeu-la en nivells, murs i forjats, amb la posició de l'emplaçament al mapa conservada.
keywords: massa, massa d'edifici, modelatge de masses, estudi d'emplaçament, desenvolupa, CivilCraft, lliura, nivells, murs, forjats, petjada, georeferència, IFC
from: 557b94d1
---

La vista d'emplaçament de CivilCraft pot dibuixar masses d'edifici sobre una parcel·la i provar-les contra el terreny, els límits que escriviu i el sol. **Desenvolupa a BimCraft** hi obre BimCraft en una pestanya nova amb les masses; **Masses com a IFC** les desa com a fitxer que obriu aquí de la manera habitual. En qualsevol dels dos casos, cada massa arriba com a emplaçament, un edifici amb un nivell per planta, i un bloc (la massa en si) que porta les seves xifres.

## Desenvolupa una massa

1. Escolliu una massa a la vista 3D. Propietats mostra el seu ús, plantes i alçada de planta, petjada, àrea bruta de sòl, com s'assenta sobre el pendent, i la seva parcel·la.
2. Feu clic a **Desenvolupa aquesta massa**.

En un únic pas de desfer, cada nivell d'aquest edifici rep murs al voltant de la petjada (la petjada és la cara exterior dels murs; cada mur puja fins al nivell de sobre, i el superior fa una planta d'alçada) i un forjat sota tot l'edifici. El bloc se substitueix, i l'edifici conserva les xifres de l'estudi al conjunt de propietats `CadCraft_SiteMass`, marcat com a desenvolupat. No hi ha coberta: una coberta depèn del disseny.

## La posició de l'emplaçament

Un fitxer de CivilCraft s'escriu en la unitat de longitud del projecte i, quan el projecte de CivilCraft tenia un sistema de coordenades, el porta com a conversió de mapa del projecte. Desenvolupar una massa no hi toca, de manera que l'edifici es queda on diu el mapa.
