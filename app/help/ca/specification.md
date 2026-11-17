---
title: Escriu l'especificació a partir del model
summary: Una secció d'especificació per a cada tipus de paret, porta, finestra, forjat i acabat en ús, amb les seves dades llegides del model i el vostre propi text, feta en PDF o en document Word.
keywords: especificació, espec, plànols d'execució, fase 5, documents de construcció, secció, tipus de paret, tipus de porta, tipus de finestra, acabat, classificació, uniclass, omniclass, masterformat, document, pdf, word, docx, quadres
from: a6acc6d4
---

## Què hi fareu

Obteniu una especificació que segueix el model: una secció per a cada tipus que hi ha realment a l'edifici, cadascuna amb la seva composició i les quantitats llegides del model, i el text que escriviu per a ella.

## Passos

1. Activeu {{ui:Dibuixa}}, obriu **Quadres** al tauler de l'esquerra i cliqueu **Especificació**.
2. El diàleg llista una secció per a cada tipus de paret, de porta, de finestra, de forjat i d'acabat de sala en ús. Sota cada encapçalament hi ha les seves **dades**, llegides del model: gruix, les capes una per una, el nivell de desenvolupament, mides, el nombre i la quantitat. Una secció els elements de la qual porten un codi de classificació mostra el codi a l'encapçalament.
3. Escriviu el text de l'especificació a la caixa sota una secció. **Selecciona els seus elements** mostra a què fa referència la secció.
4. Cliqueu **Desa**. És un pas de Desfés, i el text es guarda al fitxer de l'edifici.
5. Obriu **Documents del model**, trieu la plantilla **Especificació**, cliqueu **Previsualitza** i després deseu-la en PDF, Word o Markdown. Vegeu [Documents del model](topic:documents-from-the-model).

## Els quadres de plànols d'execució com a document

La plantilla **Quadres de plànols d'execució** imprimeix els quadres de portes, finestres i acabats directament del model, amb la maquetació del vostre despatx. A la vostra pròpia plantilla escriviu `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, o el nom d'una configuració desada, per exemple `{{schedule Door schedule by floor}}`. `{{specification}}` imprimeix l'especificació.

## Bon que saber

- Les dades són del model. Canvien quan canvia el model; el vostre text no.
- BimCraft no escriu cap clàusula de cap norma ni cap text de cap fabricant. Una secció sense text s'imprimeix com a "Encara no s'ha escrit cap text d'especificació."
- El text escrit per a un tipus que ja no és al model es conserva i es llista sota "Text per a tipus que ja no hi són al model".
- Per canviar un tipus genèric per una composició específica, vegeu [Eines de paret](topic:wall-tools) (Canvia el tipus).
