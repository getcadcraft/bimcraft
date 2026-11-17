---
title: Cobertes: un pendent per a cada mur, pinyons, cobertes d'una vessant i plans de coberta
summary: Poseu cada mur sota una coberta com a inclinat, pinyó o cap; useu els preestabliments de quatre aigües, pinyó i una vessant; aixequeu la coberta amb l'alçada de la carrera, afegiu fascia i sòfit, i dibuixeu plans de coberta individuals quan la coberta automàtica no encaixi.
keywords: canvia una coberta, edita una coberta, coberta seleccionada, propietats de la coberta, desfés coberta, coberta, pendent, per mur, pinyó, extrem de pinyó, una vessant, cadireta, vall, carener, alçada de la carrera, talò, fascia, sòfit, ràfec, vora lateral, voladís, pla de coberta, coberta de porxo, lluerna, lluerna de pinyó, lluerna d'una vessant
from: 096084a7
---

## Què aprendreu

Doneu forma a la coberta a partir dels murs que hi ha a sota. Cada mur té la seva pròpia configuració, així que una mateixa coberta pot ser a quatre aigües davant, amb pinyons als extrems i acabar plana contra un mur més alt al darrere. Per a un porxo o qualsevol cara que la coberta automàtica no pugui fer, dibuixeu un pla de coberta per les seves cantonades.

## Posa una coberta

1. Al nivell on els murs sostenen la coberta, feu clic a {{ui:Coberta}}.
2. Escriviu el **Pendent** (`6/12`, o graus com `30`) i el **Voladís**.
3. Trieu un preestabliment: **Coberta a quatre aigües**, **Pinyons als costats curts**, **Pinyons als costats llargs** o **Una vessant** (el costat més proper al punter és el ràfec baix; els altres costats són pinyons).
4. Deixeu **Fascia i sòfit** marcat per tenir ràfecs tancats amb una fascia, o desmarqueu-lo per a una vora de coberta sense res.
5. Apunteu a l'interior de l'edifici: el ràfec, el carener, les cadiretes i les valls es mostren al pla. Feu clic.

Funciona qualsevol contorn: formes en L, T, U i de creu, cantonades angulades i entrants. Les cadiretes, els careners i les valls es formen on es troben els plans de coberta.

## Un mur cada vegada

Trieu la coberta (al nivell per sobre dels murs, feu clic dins del seu contorn) i mireu sota **Cada mur** a **Propietats**. En apuntar una fila es marca aquest mur al pla.

- **Inclinat**: el mur té un pla de coberta inclinat a sobre. Escriviu-hi el seu propi pendent al costat, per exemple `12/12` per als extrems empinats d'una coberta de `6/12`.
- **Pinyó**: la coberta acaba en un extrem vertical sobre aquest mur, el mur s'omple fins a la coberta, i la coberta sobresurt del mur pel **Voladís del pinyó**.
- **Cap (acaba a ras)**: la coberta s'atura en aquest mur sense voladís ni mur de pinyó, per a una coberta contra un mur més alt.

La llista **Extrems** de dalt estableix tots els murs alhora; **Defineix per mur** es mostra quan els murs ja no coincideixen amb cap preestabliment.

## Canvieu una coberta que ja heu posat

Trieu la coberta i **Propietats** mostra les mateixes opcions que l'eina Coberta: **Pendent**, **Voladís**, **Voladís del pinyó**, **Alçada de la carrera**, **Alçada de la fascia**, **Ràfecs tancats** i **Gruix**. Cada canvi es mostra de seguida al pla i en 3D, amb les mateixes comprovacions que l'eina (es rebutja un pendent de 80 graus o més, i també una opció que no pot fer una coberta). Escriviu un valor i premeu {{key:Enter}}, o deixeu la casella.

Cada canvi és un pas de desfer. Diversos canvis a la mateixa casella, un darrere l'altre (escriviu `6/12`, després `7/12`, després `8/12`), s'uneixen en un sol pas, així que un {{key:Ctrl}}+{{key:Z}} restaura el que tenia la coberta abans de la sèrie; canviar una altra casella comença un pas nou.

## Alçada de la carrera, fascia i sòfit

- **Alçada de la carrera** és on els plans de coberta es troben amb l'exterior dels murs, mesurada des del terra del nivell. Deixeu-la en blanc perquè la coberta descansi sobre la part superior dels murs; escriviu un valor més gran per a un talò elevat.
- **Alçada de la fascia** és el tauler al llarg dels ràfecs i pujant per les vores laterals. Escriviu `0` per no tenir-ne.
- **Ràfecs tancats** posa un sòfit horitzontal sota cada ràfec, des del mur fins a la part posterior de la fascia.

Cada pla es troba amb el seu mur a l'alçada de la carrera, així que els murs amb pendents diferents mantenen una sola línia de carrera i els seus ràfecs acaben a alçades diferents, tal com s'estructurarien.

## Dibuixa un pla de coberta

1. Al nivell on es recolza el pla, obriu {{ui:Compilació}} i trieu {{ui:Pla de coberta}}.
2. Escriviu el **Pendent** i, si no és la part superior dels murs, l'**Alçada del ràfec**.
3. Feu clic a les cantonades. El primer costat que dibuixeu és el ràfec; el pla s'alça des d'allà cap a la resta de la forma.
4. Feu clic de nou a la primera cantonada, feu doble clic, o premeu {{key:Enter}} per acabar. {{key:Esc}} descarta les cantonades.

Un pla de coberta no segueix els murs. Trieu-lo al nivell de sobre (feu clic a dins) per canviar-ne el pendent, l'alçada del ràfec o el gruix, o premeu {{key:Delete}} per suprimir-lo.

## Afegeix una lluerna

1. Mostreu el nivell on és la coberta.
2. Obriu {{ui:Compilació}} i trieu {{ui:Lluerna}}.
3. A la fila d'opcions trieu **Tipus de lluerna** (**Pinyó** o **Una vessant**) i definiu **Amplada**, **Mur frontal** (l'alçada del mur frontal des de la part superior de la coberta fins al ràfec de la lluerna), **Pendent** i **Voladís**.
4. Feu clic en una cara de la coberta on ha d'anar el centre de la part frontal de la lluerna.

BimCraft construeix el mur frontal, dos murs laterals i la coberta de la lluerna, i la prolonga cap enrere fins que troba la coberta. Una lluerna de pinyó té dos plans que es troben en un carener. Una lluerna d'una vessant té un sol pla, que ha de ser menys empinat que la coberta. La coberta sota la lluerna es retalla. La lluerna segueix la coberta quan es mouen els murs.

Trieu-la per canviar-ne el tipus, l'amplada, el mur frontal, el pendent o el voladís a **Propietats**. {{key:Delete}} la suprimeix i torna a tancar la coberta. Ha de cabre en una sola cara de la coberta, lluny de les cadiretes, les valls i el carener, i només les cobertes fetes amb l'eina {{ui:Coberta}} admeten lluernes, no els plans de coberta dibuixats a mà. Encara no implementat: una finestra a la part frontal de la lluerna, i lluernes en plans de coberta dibuixats a mà.

## Què es desa

Les cobertes són cobertes IFC fetes d'una lloseta de coberta per pla, murs de pinyó, un element de fascia i un revestiment de sòfit. La coberta porta les longituds del carener, les cadiretes, les valls, els ràfecs i les vores laterals, i les seves àrees, per als amidaments. Un pla de coberta és una coberta IFC amb una sola lloseta.

:::tip
L'ordre Desfés desfà qualsevol canvi de coberta en un sol pas, inclòs un preestabliment que canvia tots els murs.
:::
