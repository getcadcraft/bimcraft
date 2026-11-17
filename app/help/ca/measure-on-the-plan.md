---
title: Mesura sobre la planta
summary: Fes clic a dos punts de la planta d'un nivell per llegir la distància i les diferències en X i Y, encadena més clics per obtenir un total acumulat, i no es guarda res al model.
keywords: mesura, planta, distància, cota, cinta, total acumulat, encadena, dx, dy, recta, pas, extrems de murs, eixos de quadrícula, columnes, comprova una longitud
from: 7235633f
---

## Què faràs

Comprovar una longitud a la planta d'un nivell, com l'amplada d'una habitació o la distància entre dos eixos de quadrícula, sense afegir res al model. Per mesurar a la vista 3D, vegeu [Mesura distàncies, àrees de cara i ubicacions en 3D](topic:measure).

## Passos

1. Mostra la planta del nivell que vols: {{ui:Planta}} per a la planta sola, o {{ui:Divideix}}.
2. Al grup {{ui:Dibuixa}}, fes clic a {{ui:Mesura}}. Amb només la planta visible pots prémer {{key:M}} en el seu lloc.
3. Fes clic al primer punt. Els punts s'ajusten a murs, eixos de quadrícula i columnes.
4. Fes clic al segon punt. Una línia de cota mostra la distància, i la línia d'estat dona la distància amb les diferències X i Y.
5. Per continuar mesurant, fes clic a un tercer punt. Cada tram es mesura i el total s'hi suma.
6. Mantén {{key:Shift}} mentre fas clic per mantenir el tram recte respecte a l'anterior.
7. Prem {{key:Esc}} per netejar la mesura, o tria una altra eina.

## Notes

- No s'escriu res al model, i la cota desapareix quan la netejes. Per a cotes que es mantenen, vegeu [Conjunts de murs i cotes de referència](topic:wall-assemblies).
- Amb la vista 3D en pantalla, {{key:M}} continua sent Mesura 3D. {{key:Shift+M}} és Mou.
- La distància usa la unitat de visualització que vas triar a {{ui:Configuració}}.
