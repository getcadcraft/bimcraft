---
title: Redacte a especificación desde o modelo
summary: Unha sección de especificación para cada tipo de muro, porta, xanela, piso e acabado en uso, cos seus datos lidos do modelo e co seu propio texto, feita como PDF ou documento Word.
keywords: especificación, especificación técnica, debuxos de obra, fase 5, documentos de construción, sección, tipo de muro, tipo de porta, tipo de xanela, acabado, clasificación, uniclass, omniclass, masterformat, documento, pdf, word, docx, cuadros
from: a6acc6d4
---

## Que vai facer

Obteña unha especificación que segue o modelo: unha sección para cada tipo que de verdade está no edificio, cada unha coa súa composición e as súas cantidades lidas do modelo, e o texto que escriba para ela.

## Pasos

1. Active {{ui:Debuxar}}, abra **Cuadros** no panel esquerdo e faga clic en **Especificación**.
2. O diálogo lista unha sección para cada tipo de muro, tipo de porta, tipo de xanela, piso e acabado de cuarto en uso. Baixo cada epígrafe están os seus **datos**, lidos do modelo: grosor, as capas unha por unha, o nivel de desenvolvemento, as dimensións, cantos son e canta superficie ocupan. Unha sección cuxos elementos levan un código de clasificación amosa o código no seu epígrafe.
3. Escriba o texto da especificación na caixa baixo unha sección. **Seleccionar os seus elementos** amosa a que se refire a sección.
4. Faga clic en **Gardar**. É un paso en Desfacer, e o texto consérvase no ficheiro do edificio.
5. Abra **Documentos desde o modelo**, escolla a plantilla **Especificación** e faga clic en **Vista previa**; despois gárdeo como PDF, Word ou Markdown. Consulte [Documentos desde o modelo](topic:documents-from-the-model).

## Os cuadros de debuxos de obra como documento

A plantilla **Cuadros de debuxos de obra** imprime os cuadros de portas, xanelas e acabados directamente desde o modelo, na súa disposición de oficina. Na súa propia plantilla escriba `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, ou o nome dunha configuración gardada, por exemplo `{{schedule Door schedule by floor}}`. `{{specification}}` imprime a especificación.

## Cousas que cómpre saber

- Os datos son do modelo. Cambian cando cambia o modelo; o seu texto non.
- BimCraft non escribe cláusula de ningunha norma nin texto de ningún fabricante. Unha sección sen texto imprime «Aínda non se escribiu texto de especificación».
- O texto escrito para un tipo que xa non está no modelo consérvase e aparece listado en «Texto para tipos que xa non están no modelo».
- Para cambiar un tipo xenérico por unha composición concreta, consulte [Ferramentas de muros](topic:wall-tools) (Cambiar tipo).
