---
title: Paquets per al client, informes d'etapa i comparació d'opcions
summary: Feu un paquet per al client o un informe d'etapa a partir del model, amb les opcions de volum comparades per àrea i cost, les superfícies de planta, els plànols amb les seves revisions i l'historial d'emissions. Cada xifra conserva els elements que hi ha darrere.
keywords: paquet per al client, presentació, informe d'etapa, informe, comparació d'opcions, opcions, comparar opcions, àrea i cost, cost per opció, sense tarifa, volum, superfícies de planta, llista de plànols, historial d'emissions, xifres, xifres enllaçades
from: f6679bf5
---

## Què hi fareu

Feu un paquet per al client o un informe d'etapa a partir del model tal com és ara, i compareu les opcions de volum conservades una al costat de l'altra per àrea i cost.

## Passos

1. Al panell de l'esquerra, obriu **Paquet per al client i informe d'etapa**.
2. Trieu **Obre a Documents** al costat de Paquet per al client o Informe d'etapa. El document apareix a Documents des del model, on podeu canviar-ne el text.
3. A la vista prèvia, cliqueu una xifra per seleccionar els elements que hi ha darrere.
4. Trieu **Construeix el paquet**. Es desa un sol zip: el document en PDF, una imatge de la vista 3D, i `figures.csv`, que llista cada xifra amb els GlobalId dels seus elements.

## Els camps

Podeu fer servir aquests en qualsevol document.

| Camp | Què imprimeix |
|---|---|
| `{{stage}}` | L'etapa del projecte a partir dels detalls del dibuix. |
| `{{options}}` | Les opcions de volum conservades, una al costat de l'altra: plantes, alçada, empremta, superfície bruta de planta, envolvent i cost. |
| `{{areas}}` | Superfície de planta per nivell, a partir de les sales. |
| `{{sheets}}` | Els plànols amb la revisió en què es troba cadascun i quan es va emetre per última vegada. |
| `{{issues}}` | L'historial d'emissions i el registre de canvis del dibuix. |
| `{{changes}}` | Què ha canviat des de l'última emissió, plànol per plànol. |

## Com es calculen les opcions

El cost només ve de la taula de preus del projecte (Energia/Cost, cost 5D). No se n'estima res per vosaltres.

- Una fila de preus només preu una opció quan les seves classes esmenten `IfcBuildingElementProxy`.
- La superfície de planta es preu amb una fila les paraules de la qual esmenten l'ús de l'opció, com oficina. Sense cap, s'usa una fila amb les paraules superfície bruta de planta o massa d'edifici. Una fila per m² usa la superfície bruta de planta. Una fila per m³ usa el volum.
- L'envolvent (perímetre per alçada) es preu amb una fila amb la paraula envolvent o façana.
- Una opció sense fila que coincideixi mostra **Sense tarifa**. Només es mostra un total quan cada part demanada té una tarifa.

## Bon de saber

- Conserveu les opcions amb **Mantén com a opció** a la llista de volums del programa de sales. Vegeu Opcions de volum.
- Un PDF no pot seleccionar elements. Fora de BimCraft, `figures.csv` porta l'enllaç de cada xifra cap als seus elements.

## Encara no implementat

- Els plànols i les vistes dibuixades no es col·loquen dins del document. El paquet només conté una imatge de la vista 3D.
