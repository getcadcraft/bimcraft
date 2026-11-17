---
title: Tecles i ratolí
summary: Totes les accions de tecla, ratolí, trackpad i tàctil a BimCraft, agrupades segons el que estàs mirant.
keywords: teclat, dreceres, tecles, ratolí, trackpad, tàctil, orbita, desplaça, zoom, amaga, aïlla, transparent, desfés, refés, copia, enganxa, duplica, desa, ajusta, vista d'impressió, escape, configuració, dibuixa, paret, porta, finestra, plànol
from: 5c6eedce
---

BimCraft té poques dreceres. La major part del treball es fa amb el ratolí i els taulells. Les dreceres escrites amb {{key:Mod}} fan servir Command en un Mac i Ctrl a la resta. Consulta [Tecles, ratolins i trackpads](common:keys) per veure com s'escriuen les tecles en aquesta ajuda.

## A tot arreu

| Tecla | Què fa |
|---|---|
| {{key:Ctrl+Shift+F}} | Canvia entre els modes de pantalla: normal, pantalla completa, pantalla completa amb les barres amagades. Ctrl a totes les plataformes, també en un Mac |
| {{key:Esc}} | Surt de la pantalla completa |
| {{key:Mod+,}} | Obre {{ui:Configuració}}. Consulta [Configuració de BimCraft](topic:settings) |
| {{key:Tab}} | Es mou entre botons, caselles de selecció i valors. Es pot arribar a cada control amb el teclat |

## Vista 3D (models IFC)

| Tecla o acció | Què fa |
|---|---|
| {{key:F}} | Ajusta tot el model, en vista de tres quarts (igual que {{ui:Ajusta}}) |
| {{key:Esc}} | Neteja la selecció, o para de col·locar o d'enganxar |
| Clic | Selecciona l'element sota el punter; fes clic a un fons buit per netejar |
| {{key:Mod}}+clic o {{key:Shift}}+clic | Afegeix un element a la selecció, o el treu |
| {{key:H}} | Amaga els elements seleccionats. Consulta [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate) |
| {{key:I}} | Mostra només els elements seleccionats (aïlla) |
| {{key:T}} | Mostra els elements seleccionats, i la resta transparent |
| {{key:Shift+H}} | Torna a mostrar tots els elements |
| {{ui:Recorre}} | Després {{key:W}} {{key:A}} {{key:S}} {{key:D}} o les fletxes per recórrer, {{key:Shift}} corre, arrossegar gira la mirada, {{key:Esc}} atura. Consulta [Recorre un model](topic:walk) |
| {{key:M}} | Mesura distàncies i àrees de cares. Consulta [Mesura distàncies, àrees de cares i ubicacions en 3D](topic:measure) |
| Arrossega amb el botó esquerre | Orbita |
| Arrossega amb el botó dret | Desplaça |
| {{key:Shift}} o {{key:Mod}} i arrossega amb el botó esquerre | Desplaça (pràctic en un trackpad) |
| Gira la roda del ratolí, o arrossega amb el botó del mig | Zoom |
| Desplaçament amb dos dits o pinça en un trackpad | Zoom |
| Un dit (tàctil) | Orbita; un toc selecciona |
| Dos dits (tàctil) | Pinça per fer zoom, mou junts per desplaçar |

| {{key:X}} | Pla de secció activat i desactivat. Consulta [Talla un model IFC amb un pla de secció](topic:section-plane) |
| {{key:Shift+X}} | Caixa de secció al voltant dels elements seleccionats, amb la sala configurada a Configuració |

No hi ha tecles per a {{ui:Superior}}, {{ui:Davant}} i {{ui:Lateral}}; fes servir els botons.

## Edició

Les mateixes ordres són a la barra d'eines: {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}}, {{ui:Enganxa}} i el menú {{ui:Més}}, que mostra cada tecla. Funcionen a la vista 3D d'un model IFC, no mentre escrius en un camp. Consulta [Copia, enganxa i duplica elements de la biblioteca](topic:copy-paste).

| Tecla | Què fa |
|---|---|
| {{key:Mod+Z}} | Desfà l'últim canvi |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Refà el que Desfés ha desfet |
| {{key:Mod+C}} | Copia els elements seleccionats (els seus noms i propietats també van al porta-retalls com a text) |
| {{key:Mod+X}} | Retalla els elements seleccionats: els copia i després els suprimeix |
| {{key:Mod+V}} | Enganxa el que has copiat: segueix el punter, fes clic on ha d'anar |
| {{key:Mod+Shift+V}} | Enganxa al mateix lloc: d'on venia un retall, o al costat dels originals després d'una còpia |
| {{key:Mod+D}} | Duplica: copia els elements seleccionats i comença a enganxar-los |
| {{key:Delete}} | Suprimeix els elements seleccionats, amb les seves parts i obertures. Consulta [Suprimeix, retalla, copia i enganxa elements de construcció](topic:edit-elements) |
| {{key:Mod+A}} | Selecciona tots els elements mostrats |
| {{key:Esc}} | No selecciona res |

Quan hi ha text seleccionat a la pàgina, {{key:Mod+C}} copia aquest text com de costum.

## Vista de planta (Dibuixa)

Funcionen mentre {{ui:Dibuixa}} està activat i no estàs escrivint en un camp. Consulta [Dibuixa parets](topic:draw-walls) i [Portes i finestres](topic:doors-and-windows).

| Tecla o acció | Què fa |
|---|---|
| {{key:V}} | {{ui:Selecciona}} |
| {{key:W}} | {{ui:Mur}} |
| {{key:D}} | {{ui:Porta}} |
| {{key:N}} | {{ui:Finestra}} |
| {{key:H}} | Amb {{ui:Porta}} o {{ui:Finestra}}: frontisses a l'altre extrem |
| {{key:Shift}} mentre dibuixes una paret | La manté a 0°, 90°, 180° o 270° |
| Dígits i les marques de peus i polzades (`'` i `"`) | Comença a escriure una longitud a la casella {{ui:Longitud}}; {{key:Enter}} la fa servir |
| {{key:Enter}}, {{key:Esc}}, clic dret o doble clic | Acaba la paret que dibuixes; {{key:Esc}} una altra vegada torna a {{ui:Selecciona}} |
| {{key:Delete}} | Suprimeix les parets, portes i finestres seleccionades; les parets que queden es tornen a unir |
| {{key:F}} amb el punter sobre el plànol | Ajusta el plànol |
| Gira la roda del ratolí | Fa zoom al voltant del punter |
| Arrossega amb el botó del mig o dret, o {{key:Space}} i arrossega | Desplaça; amb {{ui:Selecciona}} activat, un arrossegament simple també desplaça |
| Arrossega una porta o finestra amb {{ui:Selecciona}} | La mou al llarg de la seva paret, o a una altra paret |
| Dos dits (tàctil) | Pinça per fer zoom, mou junts per desplaçar |

## Col·locar i enganxar elements de la biblioteca

| Tecla | Què fa |
|---|---|
| {{key:R}} | Gira l'element 90° |
| {{key:Tab}} | Ajust a paret activat i desactivat: l'esquena de l'element va contra la paret més propera |
| {{key:Enter}} a **X, Y (mm)** | Col·loca a la posició escrita |
| {{key:Esc}} | Para de col·locar o d'enganxar |

## Edició de valors IFC

| Tecla | Què fa |
|---|---|
| {{key:Enter}} | Manté el valor que has escrit |
| {{key:Esc}} | Cancel·la i torna a posar el valor antic |
| Clic en un altre lloc | Manté el valor que has escrit |
| {{key:Mod+Z}} | Desfà l'últim canvi. Només mentre tinguis canvis sense desar i no estiguis escrivint en un camp |
| {{key:Mod+Y}} | Refà el que Desfés ha desfet |
| {{key:Mod+S}} | Desa com a IFC. Només mentre tinguis canvis sense desar; si no, s'obre l'ordre de desar del navegador |

Per editar només amb el teclat: prem {{key:Tab}} fins que un valor quedi ressaltat, i després prem {{key:Enter}} per començar a escriure.

## Dibuixos 2D (DWG i DXF)

| Tecla o acció | Què fa |
|---|---|
| {{key:F}} | Ajusta el dibuix o el full |
| {{key:P}} | Vista d'impressió activada i desactivada |
| Doble clic | Ajusta |
| Arrossega amb qualsevol botó | Desplaça |
| Gira la roda del ratolí | Zoom al punter |
| Desplaçament amb dos dits o pinça en un trackpad | Zoom al punter. El desplaçament amb dos dits no desplaça |
| Un dit (tàctil) | Desplaça. El zoom per pinça encara no està implementat per als dibuixos |

## Dibuixos en 3D

| Tecla o acció | Què fa |
|---|---|
| {{key:3}} | 3D activat i desactivat (també a la vista 2D) |
| {{key:F}} | Extensió: tot el dibuix |
| Arrossega amb el botó del mig o l'esquerre | Orbita |
| Arrossega amb el botó dret, o {{key:Shift}} i arrossega | Desplaça |
| Gira la roda del ratolí | Zoom cap al que hi ha sota el punter |
| Desplaçament amb dos dits en un trackpad | Orbita; amb {{key:Shift}}, desplaça |
| Pinça en un trackpad | Zoom |
| Un dit (tàctil) | Orbita |
| Dos dits (tàctil) | Pinça per fer zoom, mou junts per desplaçar |

{{key:F}}, {{key:P}} i {{key:3}} no fan res mentre escrius en un camp, mentre es mostra el quadre d'equipament, o quan mantens {{key:Mod}} o {{key:Alt}}.

## Fitxers

| Acció | Què fa |
|---|---|
| Arrossega un fitxer a la pàgina | L'obre |
| Arrossega una carpeta a la pàgina | L'obre com a carpeta de projecte, sense sol·licitud de permís |
