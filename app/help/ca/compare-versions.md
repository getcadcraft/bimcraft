---
title: Compara dues versions d'un model
summary: Obriu dues versions del mateix model IFC i vegeu quins elements s'han afegit, eliminat i canviat, emparellats pels seus GlobalId, amb un CSV de cada canvi.
keywords: compara, diff, diferència, versions, revisió, canvis, canviat, afegit, eliminat, mogut, globalid, guid, què ha canviat
from: cfca6971
---

## Què hi fareu

Vegeu què ha canviat entre el model que teníeu i el que us han enviat: quins elements són nous, quins han desaparegut, quins s'han mogut o han rebut nous valors de propietat.

## Passos

1. Obriu la versió més nova, després cliqueu {{ui:Afegeix un model…}} i trieu la més antiga. Vegeu [Veure diversos models IFC junts](topic:several-models).
2. A {{ui:Models}}, obriu {{ui:Compara versions}}.
3. Trieu la {{ui:Versió anterior}} i la {{ui:Versió més nova}}.
4. Cliqueu {{ui:Compara}}.
5. Cliqueu un element d'una llista per triar-lo i veure'n les propietats. Cliqueu {{ui:Baixa el CSV}} per obtenir tots els canvis, propietat per propietat.
6. Cliqueu {{ui:Neteja}} per tornar a la vista normal.

## Què hauríeu de veure

- Els elements **afegits** en blau, de la versió més nova.
- Els elements **eliminats** en vermell, de la versió més antiga.
- Els elements **canviats** en ocre, de la versió més nova, cadascun dient què ha canviat: propietats, un desplaçament amb quant de distància, o una forma nova.
- Tot el que és igual, transparent.

## Bon de saber

- Els elements s'emparellen pel seu GlobalId. Un programa que dona GlobalId nous en cada exportació fa que cada element aparegui com a eliminat i afegit de nou.
- Les posicions es comparen on són els models a l'escena. Si una versió s'ha mogut a propòsit, alineeu-les primer amb {{ui:Mou}} a {{ui:Models}}.
- Un GlobalId usat dues vegades en un mateix model queda fora de la comparació. [Comprova un model per detectar problemes habituals](topic:model-checks) els troba.

## Següent

- [Incidències i fitxers BCF](topic:issues-bcf)
- [Suma quantitats per propietat](topic:quantity-totals)
