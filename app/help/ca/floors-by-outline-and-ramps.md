---
title: Forjats de qualsevol forma, obertures i rampes
summary: Dibuixeu un forjat o una llosa pel seu contorn (un balcó, un voladís, un replà), talleu-hi obertures i dibuixeu rampes amb els seus replans.
keywords: forjat, llosa, contorn, balcó, voladís, replà, plataforma, obertura de forjat, forat, pou, buit, rampa, pendent, rampa accessible, rampa per a cadira de rodes, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Què fareu

Feu forjats que no segueixen les habitacions, com un balcó més enllà dels murs, i dibuixeu rampes entre plantes.

## Dibuixa un forjat pel seu contorn

1. Activeu {{ui:Dibuixa}}, trieu la planta i després {{ui:Compilació}} › {{ui:Forjat per contorn}}.
2. A la fila sota les eines, trieu el tipus (llosa de formigó o forjat de fusta), l'ús (forjat o replà), el gruix i quant sobresurt la part superior per sobre del nivell (0 = al nivell del terra de la planta; un valor negatiu el baixa).
3. Feu clic als cantons. L'eina s'ajusta als murs, a les línies de quadrícula i a les seves interseccions; manteniu premuda {{key:Shift}} per mantenir una aresta a escaire. La longitud de cada aresta i l'àrea es mostren mentre dibuixeu. {{key:Backspace}} treu l'últim cantó.
4. Torneu a fer clic al primer cantó, feu doble clic o premeu {{key:Enter}} per acabar.

## Talla una obertura

Feu clic al forjat (a la vista 3D, o al seu contorn al plànol) i després, a {{ui:Propietats}}, feu clic a {{ui:Afegeix una obertura}} i després als cantons de l'obertura dins del forjat, acabant com s'ha indicat. La llista de {{ui:Propietats}} del forjat mostra les seves obertures, cadascuna amb {{ui:Suprimeix}}, i la seva àrea sense elles.

## Dibuixa una rampa

1. Trieu {{ui:Compilació}} › {{ui:Rampa}}. Definiu-ne l'amplada i si va **fins a la planta de sobre** o **amunt una alçada** que escriviu.
2. Trieu com es defineix: **per pendent** (1:12 com a punt de partida; la rampa té la longitud que requereix l'alçada) o **per longitud** (el segon clic defineix la longitud, i el pendent es deriva).
3. Feu clic al peu de la rampa (el punt mitjà de la seva vora inferior) i després feu clic en el sentit de pujada. La vista prèvia mostra la seva longitud, els seus trams i el seu pendent.

Una alçada de més de 30 in (760 mm) es divideix en trams amb un replà de 5 ft (1525 mm) entremig. Són valors habituals de planificació, no la vostra normativa: consulteu les normes del lloc on construïu. Una rampa més inclinada que 1:12 es marca a les seves {{ui:Propietats}}.

## Què hauríeu de veure

- Cada forjat, obertura i rampa és un sol pas: {{key:Mod+Z}} el desfà.
- Al plànol, el contorn d'un forjat dibuixat (una obertura es dibuixa creuada), i el contorn, els trams, els replans i una fletxa cap amunt amb el seu pendent d'una rampa.
- Propietats d'un forjat dibuixat (tipus, ús, gruix, part superior, àrea, obertures) i d'una rampa (amplada, part superior, alçada, pendent o longitud); {{key:Delete}} suprimeix qualsevol dels dos.
- Una rampa cap a la planta de sobre segueix aquesta planta quan canvia la seva alçada.
- Al fitxer IFC: un forjat dibuixat és una llosa (IfcSlab, un forjat o un replà) amb les seves obertures retallades (IfcOpeningElement); una rampa és un IfcRamp fet de trams inclinats (IfcRampFlight) i llosses de replà, amb el seu pendent i la seva amplada.

:::note
Els forjats dibuixats així es queden on els heu dibuixat. Els forjats fets amb {{ui:Forjat}} segueixen les habitacions quan els murs es mouen: vegeu [Habitacions, forjats, falsos sostres i cobertes](topic:floors-and-roofs).
:::
