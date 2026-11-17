---
title: Comprova la reverberació d'una sala i escolta-la
summary: Temps de reverberació per banda d'octava de cada sala (Sabine i Eyring) a partir de la seva mida i acabats, un objectiu propi, i una veu, un aplaudiment o música reproduïts a través d'una resposta impulsiva calculada de la sala.
keywords: acústica, reverberació, temps de reverberació, rt60, sabine, eyring, absorció, eco, so, escoltar, resposta impulsiva, parla, aula, oficina, catifa, placa de sostre, soroll
from: 16996cbb
---

La secció {{ui:Acústica de sales}} del tauler de l'esquerra calcula quant de temps perdura el so a cada sala. Llegeix l'àrea de terra, l'alçada, els murs, les portes i les finestres de cada sala del model IFC obert. No es canvia res del model.

## Trieu els acabats

Quan el model indica què hi ha en una superfície, la sala ho llegeix: la capa interior del tipus de cada mur (es reconeixen el guix, l'enlluït, el maó, el formigó i el bloc), el tipus de terra (fusta o formigó) i si el sostre té placa. L'etiqueta al costat de cada opció indica si ve del model, és un valor per defecte o l'heu triat vosaltres; per canviar-ho, trieu un altre acabat. Tot el que el model no indica es queda amb el valor per defecte. Els coeficients són **valors publicats típics**; substituïu-los per les dades d'assaig d'un producte quan en tingueu. Escriviu un **objectiu** (la reverberació de freqüència mitjana més llarga que voleu) i qualsevol sala que el superi genera un avís, amb l'absorció que la faria baixar.

## Llegiu la taula

La reverberació es dona de 125 Hz a 4 kHz. Sabine és adequada per a sales vives i Eyring per a les mortes; la línia marcada com a *Usada* pren Eyring quan l'absorció mitjana és superior a 0.2. L'absorció de l'aire s'inclou (escurça les bandes altes en sales grans). És un model estadístic: suposa que el so es reparteix de manera uniforme, així que les sales llargues o planes i les molt petites són una guia aproximada, i no es comptabilitzen el mobiliari, les persones ni les portes obertes.

## Escolteu

{{ui:Reprodueix-lo en aquesta sala}} reprodueix una veu (feta aquí), un aplaudiment, notes puntejades o **el vostre propi fitxer de so** (es queda al vostre ordinador) a través d'una resposta impulsiva calculada per a la sala: el so directe, les primeres reflexions d'una caixa d'aquella mida i una cua que s'esvaeix amb el temps de reverberació propi de la sala en cada banda. {{ui:Reprodueix-lo sec}} reprodueix el mateix so al mateix nivell, sense la sala. Podeu desar la resposta impulsiva o el so de la sala com a fitxers WAV. Sona com una sala de la mida i l'acabat indicats, no com cap sala real.

## Persones i mobiliari

Escriviu el nombre de **persones en aquesta sala** per afegir-ne l'absorció. El mobiliari que conté el model (sofàs, llits, cadires, taules, armaris, identificats pel nom) hi afegeix la seva pròpia. Les xifres són valors aproximats de planificació, arrodonits; substituïu-los per mesures en una sala que sigui important.

## Font i oient

Sota {{ui:Font i oient}}, premeu {{ui:Col·loca la font}} o {{ui:Col·loca l'oient}} i feu clic al plànol de la sala. El so que reprodueixi se sent llavors des d'aquell punt: el so directe arriba després de la distància, i la part reverberant és al nivell corresponent a aquella distància. Netegeu-ho tot per tornar a la caixa de distància.

## Absorció irregular i modes de sala

Sota {{ui:Absorció irregular (habitació en caixa)}}, escriviu la sala com a caixa i trieu els acabats de terra, sostre i murs. La taula afegeix Fitzroy i Arau-Puchades a Sabine i Eyring: tracten els tres parells de superfícies oposades per separat, de manera que una sala amb catifa i sostre dur no es llegeix com a massa curta. Quan els parells difereixen molt, una nota indica en quin confiar. Sota la taula, **Modes de sala** llista les ones estacionàries més baixes de la caixa i la freqüència per sota de la qual la sala té modes separats, en lloc d'un camp sonor uniforme. Són prediccions per a una sala en forma de caixa, una eina de disseny i no una mesura.

## Unitats

Les àrees, alçades, volums i distàncies de les sales es mostren en les {{ui:Unitats}} que heu triat (peus quadrats i cúbics, polzades, mil·límetres, centímetres o metres). El càlcul en si es manté en SI; només canvia la visualització. Els temps (segons), les freqüències i els nivells no canvien.
