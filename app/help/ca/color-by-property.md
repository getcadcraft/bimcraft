---
title: Pinta els elements segons una propietat
summary: Pinta cada element segons el valor d'una propietat, com ara la classe, el tipus, la planta, el material, la resistència al foc o el cost; llegiu la llegenda, cliqueu un valor per mostrar només aquests elements i deseu els colors com a esquema per usar en altres models.
keywords: color, colour, color segons, llegenda, vista intel·ligent, aparença, propietat, tipus, material, resistència al foc, filtre, aïlla, tema, valors, esquema, esquema de colors, desa els colors, reutilitza, equip, json, mostra de color
from: f081d343
---

## Què hi fareu

Veureu d'un cop d'ull com es reparteix una propietat pel model: quins murs són exteriors, quins materials s'usen on, quins elements no tenen resistència al foc. Cada element pren el color del seu valor, i la llegenda diu què vol dir cada color i quants elements en tenen.

## Passos

1. Obriu un model IFC.
2. Cliqueu la pestanya {{ui:Color}} a la dreta.
3. Trieu una propietat a la llista. Les primeres pertanyen a cada element ({{ui:Classe}}, {{ui:Tipus}}, {{ui:Planta}}, {{ui:Material}}, {{ui:Nom}}…); la resta vénen dels conjunts de propietats i dels conjunts de quantitats del model, sota el nom del conjunt. El nombre que hi ha després de cada una és quants elements en tenen.
4. Llegiu la llegenda: un color, el valor i quants elements en tenen.
5. Cliqueu un valor per mostrar només aquests elements. Mantingueu premuda {{key:Mod}} i cliqueu per afegir més valors. Premeu {{key:Shift+H}} per mostrar-ho tot de nou.
6. Cliqueu {{ui:Desactivat}} per tornar als colors propis del model.

## Què hauríeu de veure

- Fins a set valors reben cadascun el seu color, començant pel més comú. Els que sobrin comparteixen un mateix gris, llistats com a **altres valors**.
- Un nombre amb molts valors diferents es divideix en sis intervals iguals, del clar (baix) al fosc (alt).
- Els elements sense la propietat són gris pàl·lid, llistats com a **Sense valor**, perquè els coloreats destaquin.
- Els colors canvien amb Paper i Model, i es mantenen mentre editeu el model.
- La propietat d'un tipus compta per a cada element d'aquell tipus; quan un element té el seu propi valor per a la mateixa propietat, guanya el valor propi.

## Canvia els colors i desa'ls com a esquema

- Cliqueu la mostra de color d'un valor a la llegenda per triar-ne un altre. El model es torna a pintar a l'instant.
- {{ui:Desa l'esquema}} baixa els colors com un petit fitxer `.json` amb el nom de la propietat, per exemple `Class colors.json`.
- En un altre model, o a l'ordinador d'un company, cliqueu {{ui:Obre l'esquema…}} i trieu aquest fitxer. Cada valor de l'esquema rep el seu color, de manera que la mateixa resistència al foc o el mateix sistema tenen el mateix color en tots els models.
- Un valor que l'esquema no té es pinta de gris i es llista com a "no és a l'esquema"; els valors de l'esquema que aquest model no té es mantenen llistats amb 0, perquè pugueu veure tot l'esquema.
- Un esquema guarda els seus colors en tots dos temes. Triar una propietat a la llista torna a partir dels colors automàtics.

## Errors habituals

- **"Aquest model no té valors de …".** L'esquema s'ha desat per a una propietat que aquest model no té (un altre nom de conjunt de propietats, per exemple). Obriu un esquema fet per a aquest tipus de model, o trieu una propietat a la llista.

- **Falta una propietat a la llista.** Cap element amb forma del model la té. Les propietats de les plantes i dels espais en si no es llisten.
- **Tot és del mateix color.** Tots els elements tenen el mateix valor, o cap: mireu els recomptes de la llegenda.

## Següent

- [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate)
- [Orienteu-vos amb l'arbre del model](topic:model-tree)
