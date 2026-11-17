---
title: Alçats interiors
summary: Fes un full que mostri les quatre parets d'una sala vistes des de dins, amb cotes i etiquetes, i desa'l com a PDF.
keywords: alçat interior, sala, paret, armari, cuina, alçat, full, PDF, cota, etiqueta, espai, A-501
from: 1e3a70a8
---

## Què faràs

Tria una sala i obtindràs un full que mostra les seves quatre parets tal com les veuries estant dins. Està pensat per a cuines, banys i qualsevol sala on necessitis veure els armaris, les portes i les finestres de cada paret.

## Fes el full

1. Tria la sala. Al plànol, amb {{ui:Dibuixa}} activat, fes clic dins de la sala. A la vista 3D o a l'arbre del model, tria l'espai (un IfcSpace).
2. A **Propietats**, fes clic a {{ui:Alçats interiors…}}.
3. El diàleg s'obre amb el full.
4. Fes clic a {{ui:Baixa el PDF}} per desar-lo. El fitxer es diu "<file> — Alçats interiors — <room>.pdf" i és un PDF vectorial.
5. Fes clic a {{ui:Tanca}} quan hagis acabat.

## Què mostra el full

El full té quatre vistes, en dues files de dues, a una mateixa escala: la més gran de les escales normalitzades que hi cap. Són **Paret nord**, **Paret est**, **Paret sud** i **Paret oest**. El caixetí porta el número de full A-501, el títol "Alçats interiors — " amb el número i el nom de la sala, el projecte i la data.

Cada vista es talla pel mig de la sala i mira la paret d'aquell costat. Les parets laterals, i tot el que hi ha tallat en elles, com una finestra, es mostren com a poché gris de tall al voltant de la vista. La vista s'atura just després de la cara de la paret, de manera que no es veu res que hi ha darrere de la paret.

Cada vista du:

- l'amplada de la sala sota seu, de cara interior a cara interior;
- l'alçada de la sala al costat, des del terra fins al nivell superior;
- una etiqueta quadrada a cada porta i una etiqueta hexagonal a cada finestra d'aquella paret, amb la seva marca (D1, W1 i així successivament);
- una etiqueta circular amb el número d'element a cada element de la biblioteca col·locat davant d'aquella paret: armaris, accessoris i equipament.

:::note
Les vistes es generen cada vegada que obres el diàleg a partir del model, de manera que sempre hi coincideixen. Mou un armari i després torna a obrir el diàleg.
:::

## Als teus propis fulls

Cada paret de cada sala també és una vista que pots posar en un full que facis tu: al navegador del projecte, fes clic a {{ui:Nou full}} i, després, sota **Alçats interiors**, afegeix "101 Cuina — Paret nord" i les altres. Ve amb les mateixes cotes i etiquetes.

## Encara no implementat

Alçats interiors al conjunt de dibuixos generat (surten de les **Propietats** de la sala o dels teus propis fulls), sales que no són majoritàriament rectangulars (la vista apareix quadrada a cada costat de la caixa de la sala), dibuix, notes o cotes pròpies sobre ells, i triar quines parets es mostren. Consulta [Encara no implementat](topic:not-built-yet).
