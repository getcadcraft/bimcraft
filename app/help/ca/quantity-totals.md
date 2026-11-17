---
title: Suma quantitats, llista elements i fes el quadre d'espais
summary: Compteu elements i sumeu les seves longituds, àrees, volums o qualsevol propietat numèrica, agrupats per qualsevol propietat; o llisteu una fila per element; o feu el quadre dels espais amb les seves àrees i volums. Cadascun es baixa com a CSV.
keywords: quantitat, quantitats, amidament, totals, suma, quadre, quadre d'amidaments, qto, csv, agrupa per, recompte, longitud, àrea, volum, espais, sales, quadre de sales, quadre d'àrees, llista d'elements
from: e2e7210c
---

## Què farà

Obtenir totals d'un model: longituds de murs per planta, recompte de portes per tipus, volum de forjats per material, el cost de cada zona.

## Passos

1. Obriu un model IFC.
2. Obriu {{ui:Totals de quantitats}} al panell esquerre.
3. A {{ui:Recompte}}, trieu {{ui:Tots els elements}} o només els triats.
4. Sota {{ui:Agrupa per}}, trieu una propietat, com {{ui:Classe}}. Feu clic a {{ui:Afegeix un grup}} per dividir-ho més, fins a tres, per exemple per {{ui:Planta}}.
5. Sota {{ui:Suma}}, marqueu els números a totalitzar. Els conjunts de quantitats del model estan marcats inicialment.
6. Feu clic a {{ui:Baixa el CSV}} per obrir la taula en un full de càlcul.

## Què hauríeu de veure

- Una fila per grup amb quants elements té i cada total, i una fila de total.
- Els elements sense valor es compten però no sumen res. Quan passa, el CSV afegeix una columna "left out" al costat del total perquè vegeu quants són.
- Els números estan en les unitats del fitxer, tal com el fitxer les guarda, sovint mil·límetres per a les longituds.

## Una fila per element, o els espais

Canvieu {{ui:Mostra}}:

- **Una fila per element**: cada element a la seva fila, amb les propietats sota {{ui:Columnes}} i els números sota {{ui:Suma}}. El CSV comença amb el GlobalId de cada element. Feu clic al primer valor d'una fila per triar aquest element.
- **Espais**: cada sala amb el seu número, nom, planta, àrea i volum, i els seus totals. Les àrees i els volums provenen de les quantitats de l'espai tal com les indica el fitxer. Quan el fitxer no en té, es mesuren a partir de la forma de l'espai en m² i m³ i es mostren en cursiva; el CSV indica quin és quin.

## Següent

- [Cerca elements per classe, nom o propietat](topic:find)
- [Acoloreix elements per una propietat](topic:color-by-property)

## Infraestructura (IFC 4.3)

Trieu **Infraestructura (IFC 4.3)** a la llista de vistes per veure carreteres, ferrocarrils, ponts i obres marítimes totalitzats per classe i tipus, amb la longitud, l'àrea i el volum que el propi fitxer indica. Una quantitat que el fitxer no indica queda en blanc, mai no es calcula. **Envia les quantitats d'infraestructura a TakeoffCraft** desa un fitxer `.quantities.json` que TakeoffCraft obre com a quantitats tipades.
