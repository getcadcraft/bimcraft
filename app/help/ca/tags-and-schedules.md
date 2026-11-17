---
title: Etiqueta els elements i fes quadres per etiqueta
summary: Definiu les vostres pròpies etiquetes (un nom, un tipus, els valors permesos, quines classes), etiqueteu molts elements alhora i feu quadres amb columnes, filtres i agrupacions que llegeixen les etiquetes. Les etiquetes es guarden a l'IFC.
keywords: etiquetes, etiqueta, etiquetatge, propietats personalitzades, paràmetres, paràmetres compartits, conjunt de propietats, pset, quadre, filtre, agrupa per, acabat, classificació al foc, edició en bloc, csv
from: 9cc7c90d
---

## Què hi fareu

Una etiqueta és una propietat pròpia, com *Acabat* o *Classificació al foc*. La definiu una vegada per al projecte, l'assigneu a molts elements alhora, i tots els quadres de BimCraft la poden llegir: el quadre d'etiquetes aquí, {{ui:Quantitats}}, Cerca, Color per propietat i [Documents a partir del model](topic:documents-from-the-model).

## Passos

1. Obriu un model IFC, o comenceu un edifici nou.
2. Al tauler de l'esquerra, sota {{ui:Quantitats}}, obriu {{ui:Etiquetes}}.
3. Feu clic a {{ui:Afegeix una etiqueta}}. Doneu-li un nom, trieu-ne el tipus i, si voleu, escriviu els valors permesos (separats per comes) i les classes a les quals és per (`IfcDoor`, `IfcWall` …). Feu clic a {{ui:Afegeix l'etiqueta}}.
4. Seleccioneu els elements al model (la Cerca ajuda: en podeu triar totes les portes d'una vegada).
5. Sota {{ui:Etiqueta la selecció}}, trieu o escriviu un valor per a cada etiqueta que vulgueu definir, deixeu-ne les altres tal com estan, i feu clic a {{ui:Aplica a … elements seleccionats}}.
6. Sota {{ui:Quadre d'etiquetes}}, marqueu les columnes, afegiu filtres, trieu {{ui:Agrupa per}} i després {{ui:Baixa el CSV}}.

## Què hauríeu de veure

- Un pas a la llista de canvis per a cada definició desada i per a cada etiquetatge; {{ui:Desfés}} ho desfà.
- Els elements d'una classe per a la qual una etiqueta no és pensada queden fora d'aquella etiqueta, i la línia d'estat indica quants n'hi ha.
- El quadre d'etiquetes llista una fila per element, agrupada pel camp que heu triat; feu clic a la primera cel·la d'una fila per triar aquell element.
- {{ui:Quantitats}} llista les etiquetes sota `CadCraft_Tags`, de manera que hi podeu sumar àrees o recomptes per etiqueta.

## Tipus

Els tipus són la mateixa llista que els paràmetres de família: Longitud (mil·límetres), Angle (graus), Número, Nombre enter, Sí / No, Ploma (1–16), Text, Material i Farciment. Un valor que no encaixa amb el seu tipus, o que no és un dels valors permesos, es rebutja amb un missatge, i no canvia res.

## Bones coses a saber

- Tot és IFC simple, de manera que altres programes llegeixen els valors: les definicions són al conjunt de propietats `CadCraft_TagDefs` del projecte, i els valors, al conjunt de propietats `CadCraft_Tags` de cada element (una propietat per etiqueta). Les longituds s'escriuen en la unitat de longitud del fitxer.
- `IfcWall` a les classes d'una etiqueta també inclou els murs standard-case i els murs per elements.
- En canviar el nom d'una etiqueta, se'n canvien els valors a tots els elements en el mateix pas. Suprimir una etiqueta només suprimeix la seva definició: els valors ja assignats es queden als elements com a propietats simples. Esborreu-los primer (trieu {{ui:Neteja}}) per treure'ls.
- Les etiquetes de l'aplicació de delineació CadCraft (atributs de blocs) encara no estan implementades.
