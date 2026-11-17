---
title: Dona forma a un mur: adjunta, perfil, inclinació i obertures
summary: Adjunta la part superior d'un mur a una coberta, un forjat o un sostre, dona-li el seu propi contorn d'alçat, inclina'l o talla-hi una obertura sense porta ni finestra, a Propietats, en un alçat o una secció, a la vista de la cara del mur o en 3D; cada canvi és un sol pas de desfer.
keywords: adjunta, adjunta a dalt, adjunta a la base, coberta, forjat, sostre, pinyó, perfil, edita el perfil, contorn d'alçat, escalonat, pretil, inclinació, inclinat, inclina, pendent, cònic, doble inclinació, obertura, obertura al mur, forat, passant, sense porta, nanses, alçat, secció, 3D, vista de la cara, mur corbat, copia
from: f558b269
---

## Què faràs

Canvia la forma d'un mur per sobre i per sota de la seva planta: la seva part superior pot seguir una coberta, un forjat o un sostre; pot tenir el seu propi contorn vist de costat; pot estar inclinat; i pot tenir obertures sense cap porta ni finestra. La planta del mur, les seves cantonades i la seva línia de localització es queden tal com estaven.

## On ho pots fer

- **Propietats**: amb {{ui:Dibuixa}} i {{ui:Selecciona}} activats, fes clic en un mur que hagis dibuixat. **Propietats** mostra les files del mur i després **Forma**, on tot s'escriu.
- **Un alçat o una secció**: el llapis del navegador de projecte ({{ui:Edita en aquesta vista}}) obre la vista; tria-hi un mur i arrossega les seves nanses. Consulta «En un alçat o una secció» més avall.
- **La vista de la cara del mur**: {{ui:Murs}} › {{ui:Edita el perfil}}, i després fes clic al mur a la planta. Funciona per a qualsevol mur, també per a un que cap alçat no mira de cara, i per a un mur corbat (es mostra desplegat).
- **La planta i la vista 3D**: les quatre ordres de {{ui:Murs}} (grup Edita): {{ui:Adjunta dalt / base}}, {{ui:Edita el perfil}}, {{ui:Inclinació}} i {{ui:Obertura al mur}}. Consulta «A la planta i en 3D» més avall.

Sigui quina sigui la manera que triïs, és el mateix canvi: un pas a **Canvis**, i {{ui:Desfés}} el desfà.

Els murs rectes i els corbats admeten totes les eines de Forma. En un mur corbat, les distàncies segueixen el seu arc.

## Adjunta la part superior o la base

- **Adjunta a dalt**: tria una coberta, un forjat o un sostre. La part superior del mur segueix la cara inferior del que has triat, recta per sobre de cada cantonada del mur. Sota una coberta a dues aigües, un mur té una part superior inclinada, i on la coberta canvia de pla (un carener o un ràfec de cantó) la part superior del mur es doblega amb ella.
- **Adjunta a la base**: tria un forjat o un sostre. La base del mur segueix la seva cara superior.
- Allà on no hi ha res per sobre (o per sota) d'una part del mur, aquella part manté l'alçada pròpia del mur.
- El vincle es manté: si canvies la pendent o el voladís de la coberta, o l'alçada del sostre, els murs adjunts la segueixen en el mateix pas.
- Tria **Alçada pròpia** per desfer el vincle.

## Edita el perfil

{{ui:Edita el perfil…}} obre el contorn del mur vist de costat:

- **Línia superior**: files de **Al llarg** (la distància des de l'inici del mur) i **Alçada** (per sobre de la base del mur). Tres files 0 / 3000, 2500 / 4500, 5000 / 3000 fan un pinyó en un mur de 5 m.
- **Línia inferior**: deixa-la buida per a una base de nivell, o dona files per a un mur sobre una fonamentació escalonada.
- {{ui:Afegeix un punt}} afegeix una fila, {{ui:Suprimeix}} en treu una. {{ui:Utilitza aquest perfil}} l'aplica; {{ui:Torna a recte}} el treu.

Cada línia recorre el mur una sola vegada, des del seu inici fins al seu final; una línia que torna sobre si mateixa, o una part superior que baixa fins a la base, es rebutja. Si hi ha també una part superior adjunta, s'usa la més baixa de les dues.

## Inclina el mur

**Inclinació**: **Vertical**, **Inclinat** (les dues cares s'inclinen cap al mateix costat, el gruix es manté) o **Doble inclinació** (cada cara té el seu angle propi: un mur que es fa més prim o més gruixut a mesura que puja). Escriu els graus des de la vertical; un angle positiu s'inclina cap a l'esquerra del mur, vist des del seu inici. El mur es queda on està dibuixat a la base; els murs units a ell no s'inclinen amb ell.

## Obertures sense porta ni finestra

{{ui:Afegeix obertura}} talla un forat de 900 d'amplada al mig del mur. La seva fila a **Obertures** fixa **Des de l'inici**, **Amplada**, **Ampit** (des del nivell) i **Alçada**; {{ui:Suprimeix}} la treu. L'obertura travessa tot el mur, les quantitats del mur la deixen de costat, i la planta mostra un buit on arriba a l'alçada de tall de la planta. Quan l'inici del mur llisca al llarg de la seva línia, l'obertura manté la seva posició; un canvi que la deixaria fora del mur es rebutja.

## En un alçat o una secció

Obre la vista amb el llapis del navegador de projecte. Amb {{ui:Selecciona i mou}} activat:

- **Perfil**: fes clic en un mur que mira cap a la vista. La seva línia superior i inferior es tornen blaves, amb una nansa quadrada a cada punt i un punt al mig de cada tram.
  - Arrossega un quadrat per moure aquell punt (els dos punts extrems només es mouen amunt i avall).
  - Arrossega un punt per moure tot el tram amunt o avall.
  - Fes doble clic a una línia (o clic dret) per afegir-hi un punt; {{ui:Afegeix un punt (superior)}} i {{ui:Afegeix un punt (inferior)}} n'afegeixen un al mig del tram més llarg.
  - Fes clic a un quadrat i prem Suprimeix (o clic dret sobre ell) per treure aquell punt. {{ui:Torna a recte}} treu el perfil.
  - Amb un punt triat, escriu el seu **Al llarg** i la seva **Alçada** a la franja sota la barra d'eines.
- **Adjunta**: la franja té les llistes **Adjunta a dalt** i **Adjunta a la base** pel mur triat. O bé usa l'eina {{ui:Adjunta a dalt}} o {{ui:Adjunta a la base}}: fes clic al mur o als murs, i després a la coberta, al forjat o al sostre, mostrats com a caixes discontínues. Tots els murs triats s'adjunten en un sol pas.
- **Obertures**: amb l'eina {{ui:Obertura al mur}}, arrossega un rectangle a la cara d'un mur. De tornada a {{ui:Selecciona i mou}}, arrossega una obertura per moure-la, arrossega una de les seves vuit nanses per canviar-ne la mida, escriu **Des de l'inici**, **Amplada**, **Ampit** i **Alçada** a la franja, o prem Suprimeix per treure-la.
- **Inclinació**: un mur que la vista segueix (vist de cap, com una secció que el travessa, o en un alçat des del seu extrem) també es pot fer clic. Arrossega l'anella superior per inclinar-lo, o tria **Vertical**, **Inclinat** o **Doble inclinació** a la franja i escriu els angles.

Les mides s'ajusten a 10 mm; escriu un valor per a qualsevol cosa més fina. Un mur corbat es pot editar en un alçat mentre discorre en una sola direcció per la vista; la seva vista de cara funciona sempre.

## A la planta i en 3D

Obre {{ui:Murs}} al grup Edita:

- {{ui:Adjunta dalt / base}}: tria **Adjunta a dalt** o **Adjunta a la base** a la fila de l'eina. Fes clic al mur o als murs (a la planta o a la vista 3D), i després a allò al que s'adjunten: en 3D fes clic a la coberta, al forjat o al sostre mateix; a la planta fes clic a un punt sota ells (quan n'hi ha més d'un, una llista pregunta quin).
- {{ui:Edita el perfil}}: a la planta, fes clic en un mur per obrir la seva vista de cara. En 3D, fes clic en un mur: els seus punts de perfil tenen nanses; arrossega-n'una al pla del mur.
- {{ui:Inclinació}}: fes clic en un mur (planta o 3D) i escriu quant s'inclina.
- {{ui:Obertura al mur}}: a la planta, fes clic en un mur on va l'obertura; la seva **Amplada**, **Alçada** i **Ampit** són a la fila de l'eina. En 3D, fes clic en una cantonada a la cara del mur, i després a la cantonada oposada. Amb un mur triat en 3D, les seves obertures tenen nanses: les cantonades canvien la mida, i el mig les mou.

Les nanses 3D són les de la vista 3D, de manera que esperen mentre la caixa de secció mostra les seves pròpies nanses.

## A la planta

Un mur inclinat es dibuixa on la planta el talla (a 1200 per sobre del nivell tret que la vista digui una altra cosa): el seu contorn es desplaça tant com s'inclina a aquella alçada, i una doble inclinació és més ampla o més estreta allà. El seu contorn al terra es dibuixa amb les línies fines del que queda per sota del tall. Les cantonades, les nanses i les cotes del mur es mantenen a la seva base.

## Còpies

{{ui:Copia aquesta planta…}} i Mou amb **Copia** porten amb ells el perfil, la inclinació i les obertures del mur. Un mur adjunt a un forjat o sostre s'adjunta al forjat o sostre copiat del nivell nou; una adjunció a una coberta no es copia amb el nivell (les cobertes no es copien). Una còpia al mateix nivell continua adjunta a la mateixa coberta, forjat o sostre.

## Al fitxer

Un mur amb forma s'escriu com un sòlid facetat (IfcFacetedBrep), que altres programes llegeixen tal com es dibuixa; la seva configuració és al mur (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Una obertura és un IfcOpeningElement dins del mur, sense res que l'ompli.

## Encara no implementat

- Un perfil amb voladissos o forats al contorn (fes servir obertures per als forats).
- En 3D: afegir o treure punts de perfil, i la inclinació amb una anella (usa la vista de cara del mur, un alçat o una secció, o escriu-ne els valors).
- {{ui:Desplaçament}} amb Copia activada no copia la forma ni les obertures del mur (Mou amb Copia sí que ho fa).
- Les capes d'un mur inclinat no es dibuixen a les plantes Mitjana i Fina (sí que es dibuixa el seu contorn).
- Obertures que no són rectangles.
