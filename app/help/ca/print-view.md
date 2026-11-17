---
title: Revisa un dibuix en vista d'impressió
summary: Canvieu un DWG o DXF a la vista d'impressió per veure'l en negre sobre blanc, amb els seus gruixos de línia i sense les capes que mai no s'imprimeixen.
keywords: impressió, traçat, previsualització, previsualització de traçat, gruixos de línia, gruix de línia, monocrom, blanc i negre, defpoints, no imprimeix
from: 1a59c23e
---

## Què farà

Veure com quedarà un full sobre paper abans d'imprimir-lo des del programa que l'ha creat: negre sobre blanc, amb els gruixos de línia a la seva amplada real, i sense les capes configurades per no imprimir-se.

## Passos

1. Obriu un dibuix DWG o DXF.
2. Feu clic a una pestanya de full sobre el dibuix.
3. Feu clic a {{ui:Vista d'impressió}} al final de les pestanyes, o premeu {{key:P}}.
4. Feu zoom en un detall per comparar les línies gruixudes i les fines.
5. Torneu a fer clic a {{ui:Vista d'impressió}}, o premeu {{key:P}}, per tornar als colors normals.

## Què hauríeu de veure

- Paper blanc sobre un escriptori gris, cada línia i text en negre, sigui quin sigui el tema.
- Gruixos de línia: en un full, cada gruix es dibuixa a la seva amplada real sobre paper, de manera que una línia de 0.5 mm és el doble de gruixuda que una de 0.25 mm a qualsevol zoom. Una línia mai no es dibuixa més fina que el seu gruix de pantalla.
- Les capes configurades per no imprimir-se i la capa DEFPOINTS queden amagades.
- El botó {{ui:Vista d'impressió}} es manté premut. La vista d'impressió continua activa quan canvieu de full o obriu un altre dibuix, fins que la desactiveu.

A {{ui:Model}} la vista d'impressió només usa gruixos de pantalla (les línies fines d'un píxel, i les més gruixudes una mica més gruixudes), perquè l'espai model no té mida de paper.

## Errors habituals

- **Esperar que s'imprimeixi.** La vista d'impressió és només una previsualització. Imprimir i exportar a PDF encara no estan integrats a BimCraft; imprimiu des del programa que ha fet el dibuix.
- **Esperar estils de traçat.** Les taules de plomes i els colors dels estils de traçat no es llegeixen. Tot és negre pla.
- **Prémer P mentre escriviu.** {{key:F}} i {{key:P}} no fan res mentre escriviu en un camp, o mentre es mostra el quadre d'equips.
