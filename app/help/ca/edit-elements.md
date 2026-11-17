---
title: Suprimeix, retalla, copia i enganxa elements de l'edifici
summary: Selecciona parets, portes, mobiliari o qualsevol altre element d'un model IFC; suprimeix-los, retalla'ls, o copia'ls i enganxa'ls on cliqueu, al mateix lloc o en una altra planta.
keywords: suprimeix, elimina, esborra, retalla, copia, enganxa, duplica, mou, selecciona-ho tot, tria-ho tot, element de l'edifici, paret, porta, finestra, escala, obertura, desfés
from: d9eec37f
---

## Què fareu

Canvieu el contingut d'un model IFC: traieu els elements que no voleu, copieu una paret o un conjunt de mobiliari a un altre lloc, o moveu elements retallant-los i enganxant-los. Cada canvi és un pas que podeu desfer, i desar escriu un fitxer nou, de manera que l'original es manté tal com estava.

## Passos

1. Obriu un model IFC. Vegeu [Obre un model IFC i mira'l en 3D](topic:open-ifc-model).
2. Seleccioneu el que voleu canviar: feu clic en un element, manteniu premuda {{key:Mod}} o {{key:Shift}} i feu clic per seleccionar-ne més, o premeu {{key:Mod+A}} ({{ui:Més}}, {{ui:Selecciona-ho tot}}) per seleccionar tots els elements que es mostren.
3. Després:
   - **Suprimeix:** premeu {{key:Delete}}, o bé {{ui:Més}}, {{ui:Suprimeix}}.
   - **Copia:** premeu {{key:Mod+C}} o feu clic a {{ui:Copia}}.
   - **Retalla:** premeu {{key:Mod+X}}, o bé {{ui:Més}}, {{ui:Retalla}}. Els elements desapareixen, i després els podeu enganxar.
4. Per enganxar, premeu {{key:Mod+V}} o feu clic a {{ui:Enganxa}}. Una caixa transparent de la mida de l'element copiat segueix el punter a la planta triada a la barra de col·locació. Premeu {{key:R}} per girar-la 90°, i després feu clic on ha d'anar. Cada clic col·loca una altra còpia; premeu {{key:Esc}} per aturar-ho.
5. O premeu {{key:Mod+Shift+V}} ({{ui:Més}}, {{ui:Enganxa al mateix lloc}}): després d'un retall, els elements tornen exactament al lloc on eren; després d'una còpia, la còpia va just al costat dels originals.
6. Feu clic a {{ui:Desa com a IFC}} per baixar el model editat.

## Què s'hi inclou amb un element

- **Peces:** una escala s'emporta els seus trams, un mur cortina els seus panells, i qualsevol cosa formada per peces se les emporta totes.
- **Obertures:** una paret s'emporta les obertures fetes en ella. En suprimir una porta o una finestra també se n'emporta l'obertura que omplia, de manera que la paret es tanca, com passa en un programa d'autoria. En suprimir una paret dibuixada a BimCraft també se suprimeixen les seves portes i finestres i es tornen a unir les parets que queden. En suprimir una paret d'un fitxer fet en un altre lloc, les seves portes i finestres es queden on eren.
- **Dades:** una còpia té el mateix tipus, materials, conjunts de propietats i quantitats que l'original, i un GlobalId nou. Si més endavant canvieu un valor de la còpia, l'original no es modifica.
- **Els elements de biblioteca** mantenen les seves dades de biblioteca; una còpia rep el següent número d'element lliure, i un element retallat que torna a ser enganxat conserva el seu.

## Què hauríeu de veure

- "Suprimit: …" o "Enganxat: …" a la llista {{ui:Canvis}}. {{key:Mod+Z}} desfà l'últim canvi; {{key:Mod+Y}} el torna a aplicar.
- Després d'una supressió, la línia d'estat indica quantes peces i quantes obertures també han desaparegut.
- Els elements enganxats queden seleccionats, de manera que podeu tornar a enganxar-los al mateix lloc per fer una fila, o suprimir-los.

## Bon a saber

- Les còpies usen la mateixa geometria que l'original (IFC permet que els elements la comparteixin), de manera que el fitxer creix molt poc.
- Els elements de l'edifici s'enganxen al model del qual es van copiar, dins de la mateixa pestanya. Per usar elements de biblioteca col·locats en un altre model, copieu un element cada vegada: vegeu [Copia, enganxa i duplica elements de biblioteca](topic:copy-paste).
- Les plantes, els espais, els edificis i el solar no es poden suprimir ni copiar. Seleccioneu-hi els elements que contenen. Una sala dibuixada a BimCraft prové de les parets que la envolten: suprimiu una paret per unir dues sales.
- Les parets, portes i finestres dibuixades amb les eines pròpies de paret, porta i finestra de BimCraft encara no es poden copiar, retallar ni duplicar; la línia d'estat ho indica. Dibuixeu-les de nou. La supressió sí que funciona.
- Copiar també posa els noms i les propietats del que heu copiat al porta-retalls, com a text, per enganxar-lo en un full de càlcul o en un correu electrònic.

## Errors habituals

- **{{ui:Suprimeix}} està en gris.** No hi ha res seleccionat, o només hi ha plantes o espais. Situeu-hi el punter per llegir-ne el motiu.
- **Enganxar diu que els elements vénen d'un altre model.** Heu obert un altre model des que els vau copiar. Obriu de nou el primer model i copieu-los-hi.
- **La còpia enganxada és en una altra planta.** El camp {{ui:Planta}} de la barra de col·locació decideix on va; trieu la planta abans de fer clic.

## Relacionat

- [Amaga, aïlla i fes transparents elements](topic:hide-and-isolate)
- [Tecles i ratolí](topic:keyboard#edit)
