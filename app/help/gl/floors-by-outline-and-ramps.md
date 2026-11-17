---
title: Chans de calquera forma, ocos e rampas
summary: Debuxe un chan ou unha laxe polo seu contorno (un balcón, un voadizo, un descanso), faga ocos nel e debuxe rampas cos seus descansos.
keywords: chan, laxe, contorno, balcón, voadizo, descanso, tarima, oco, furado, pozo, baleiro, rampa, pendente, rampa accesible, rampa para cadeira de rodas, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## O que vai facer

Faga chans que non seguen os cuartos, como un balcón máis aló dos muros, e debuxe rampas entre niveis.

## Debuxar un chan polo seu contorno

1. Active {{ui:Debuxar}}, escolla o nivel e logo {{ui:Compilación}} › {{ui:Chan por contorno}}.
2. Na fila debaixo das ferramentas, escolla o tipo (laxe de formigón ou chan de madeira), o seu uso (chan ou descanso), o seu grosor e onde está a súa cara superior sobre o nivel (0 = ao nivel do chan do nivel; un valor negativo sitúao máis abaixo).
3. Faga clic nas esquinas. A ferramenta encaixa en muros, liñas da cuadrícula e nos seus cruzamentos; manteña premida {{key:Shift}} para manter un bordo en ángulo recto. A lonxitude de cada bordo e a superficie amósanse segundo avanza. {{key:Backspace}} desfai a última esquina.
4. Faga clic de novo na primeira esquina, faga dobre clic ou prema {{key:Enter}} para rematar.

## Facer un oco

Faga clic no chan (na vista 3D, ou no seu contorno na planta) e logo, en {{ui:Propiedades}}, faga clic en {{ui:Engadir un oco}} e logo nas esquinas do oco dentro do chan, rematando como antes. As {{ui:Propiedades}} do chan listan os seus ocos, cada un con {{ui:Eliminar}}, e a súa superficie sen eles.

## Debuxar unha rampa

1. Escolla {{ui:Compilación}} › {{ui:Rampa}}. Fixe o seu ancho, e se vai **ata o nivel superior** ou **subindo un desnivel** que escriba.
2. Escolla como se define: **por pendente** (1:12 para comezar; a rampa é tan longa como precise o desnivel) ou **por lonxitude** (o segundo clic fixa a lonxitude, e a pendente segue).
3. Faga clic no pé da rampa (o punto medio do bordo inferior) e logo faga clic no sentido de subida. A vista previa amosa a súa lonxitude, os seus tramos e a súa pendente.

Un desnivel de máis de 30 polgadas (760 mm) divídese en tramos cun descanso de 5 pés (1525 mm) entre eles. Estes son valores habituais de planificación, non o seu código: comprobe as normas do lugar onde constrúe. Unha rampa máis empinada que 1:12 sinálase nas {{ui:Propiedades}}.

## O que debe ver

- Cada chan, oco e rampa é un paso: {{key:Mod+Z}} desfai.
- Na planta, o contorno dun chan debuxado (un oco aparece cruzado), e o contorno dunha rampa, os seus tramos, os seus descansos e unha frecha de subida coa súa pendente.
- As propiedades dun chan debuxado (tipo, uso, grosor, cara superior, superficie, ocos) e dunha rampa (ancho, cara superior, desnivel, pendente ou lonxitude); {{key:Delete}} elimina calquera dos dous.
- Unha rampa ata o nivel superior segue ese nivel cando cambia a súa altura.
- No ficheiro IFC: un chan debuxado é unha laxe (IfcSlab, un chan ou un descanso) cos seus ocos recortados (IfcOpeningElement); unha rampa é un IfcRamp formado por tramos inclinados (IfcRampFlight) e laxes de descanso, coa súa pendente e o seu ancho.

:::note
Os chans debuxados deste xeito quedan onde os debuxou. Os chans feitos con {{ui:Chan}} seguen aos cuartos cando se moven os muros: vexa [Cuartos, chans, tetos e cubertas](topic:floors-and-roofs).
:::
