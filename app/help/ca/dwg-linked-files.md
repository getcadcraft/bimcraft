---
title: Trobar dibuixos enllaçats i imatges
summary: Mostreu els dibuixos enllaçats (xrefs) d'un dibuix i les imatges del caixetí, obrint-ne la carpeta o afegint els fitxers a mà.
keywords: xref, referència externa, dibuix enllaçat, adjuntar, superposició, imatge, fotografia, logotip, caixetí, xref que falta, etransmit, gestor de referències
from: 5593d4b1
---

## Què hi fareu

Feu complet un dibuix: mostreu els dibuixos als quals s'enllaça (referències externes, o xrefs) i les imatges que fa servir, com un logotip al caixetí.

## La manera fàcil: obrir la carpeta

1. Feu clic a {{ui:Obre una carpeta}} i trieu la carpeta que conté el dibuix i els seus enllaços, per exemple tota la carpeta `Cad` d'un projecte.
2. Al informe de la carpeta, desplaceu-vos fins a **Dibuixos CAD**.
3. Feu clic al dibuix.
4. Mireu el tauler {{ui:Propietats}} a la dreta, sota **Dibuixos enllaçats** i **Imatges**.

BimCraft busca cada dibuix enllaçat pel seu nom ("*nom*.dwg"), primer a la mateixa carpeta que el dibuix i després en qualsevol lloc de la carpeta que heu obert. Les imatges es troben de la mateixa manera, i també per un nom semblant: una exportació d'eTransmit o de Revit sovint hi afegeix el nom del projecte al davant, així que `logo.png` es troba com a `Tower-logo-5425051.png`.

## L'altra manera: afegir fitxers a mà

1. Obriu el dibuix per si sol.
2. A la dreta, sota **Dibuixos enllaçats**, feu clic a {{ui:Afegeix dibuixos enllaçats…}}. Sota **Imatges**, el botó és {{ui:Afegeix imatges…}}; tots dos obren el mateix selector.
3. Trieu els fitxers `.dwg` enllaçats i els fitxers d'imatge. Podeu triar-ne diversos alhora.
4. Espereu mentre BimCraft torna a obrir el dibuix amb ells.

## Què heu de veure

Cada dibuix enllaçat i cada imatge es llisten amb una etiqueta:

| Etiqueta | Vol dir |
|---|---|
| **Mostrat** | Trobat i dibuixat. El camí que hi ha sota indica d'on ve, o "afegit per vós". |
| **Mostrat, nom semblant** | Una imatge trobada per un nom semblant. Comproveu que és la correcta. |
| **No trobat** | No és a la carpeta ni als fitxers que heu afegit. Una imatge que falta es mostra com el seu marc buit. |
| **El TIFF no es pot mostrar en un navegador** | La imatge és un fitxer TIFF, que els navegadors no dibuixen. Deseu-la com a PNG amb el mateix nom i afegiu-la. |
| **No s'ha pogut llegir** | El fitxer s'ha trobat però no s'ha pogut obrir com a imatge. |

El tauler {{ui:Dibuix}} de l'esquerra mostra "*n* de *m* carregats" per als dibuixos enllaçats. Les capes dels dibuixos enllaçats apareixen a {{ui:Capes}} com a "*nom de l'enllaç*|*capa*".

## Errors habituals

- **Obrir només el dibuix.** "Aquest dibuix només mostra el seu propi contingut fins que s'hi afegeixen els dibuixos enllaçats. Obrint la carpeta sencera del projecte, es troben automàticament."
- **Obrir una carpeta massa petita.** Si els enllaços són en una carpeta germana, obriu la carpeta pare.
- **Enllaços reanomenats.** BimCraft fa coincidir els dibuixos enllaçats pel nom. Un enllaç reanomenat al disc no es troba; afegiu-lo a mà.
- **Enllaços d'enllaços.** BimCraft carrega els dibuixos als quals enllaça el dibuix obert. Els dibuixos enllaçats dins d'aquests no es busquen, així que normalment no es mostren en aquesta versió.
