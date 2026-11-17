---
title: Habitacions, forjats, falsos sostres i cobertes
summary: Les habitacions apareixen quan els murs les tanquen; doneu a una habitació o a tot l'edifici un forjat i un fals sostre, i poseu una coberta a quatre aigües o a dues aigües sobre els murs. Tot això se segueix quan els murs es mouen.
keywords: habitació, habitacions, espai, àrea, perímetre, forjat, llosa, base del forjat, fals sostre, coberta, coberta a quatre aigües, coberta a dues aigües, pendent, voladís, ràfec, carener, vall, 6/12
from: 1fb1813c
---

## Què fareu

Acabeu l'estructura de l'edifici. Les habitacions surten soles dels murs; els forjats, els falsos sostres i la coberta es fan amb un clic cadascun. Com que es calculen a partir dels murs, se segueixen quan els murs es mouen.

## Habitacions

Cada espai tancat per murs dibuixats és una habitació. Apareix tan bon punt l'últim mur el tanca, amb un número (101, 102 … a la primera planta, 201 … a la següent) i un nom (**Habitació 1**, **Habitació 2** …), i la seva àrea es mostra al centre del plànol.

- Amb {{ui:Selecciona}} activat, feu clic dins d'una habitació per triar-la. A **Propietats** canvieu el **Nom** (per exemple `Cuina`) i el **Número**; es mostren la seva àrea i el seu perímetre.
- Si suprimiu un mur entre dues habitacions, passen a ser-ne una; si dibuixeu un mur que travessa una habitació, se'n fan dues. Una habitació conserva el seu nom i número mentre els murs que la envolten es mouen.
- Una habitació no es pot suprimir per si sola: és l'espai que formen els murs.

Les àrees es mesuren dins de les cares dels murs. Les habitacions es desen com a espais IFC amb la superfície del terra, el perímetre, l'alçada i el volum, perquè els quadres els puguin llegir (vegeu [Suma quantitats, llista elements i fes un quadre d'espais](topic:quantity-totals)).

## Forjats

1. Feu clic a {{ui:Forjat}}.
2. Trieu **Aquesta habitació** o **Tot l'edifici**, el **Tipus** (entarimat de fusta o llosa de formigó) i el gruix.
3. Assenyaleu dins d'una habitació (o en qualsevol punt de l'edifici). Es ressalta el que cobriria el forjat, amb la seva àrea.
4. Feu clic. La part superior del forjat és el nivell de la planta; baixa pel seu gruix. Un forjat de tot l'edifici arriba fins a les cares exteriors dels murs.

## Falsos sostres

1. Feu clic a {{ui:Fals sostre}}.
2. Trieu **Aquesta habitació** o **Tot l'edifici**, i la seva **Alçada** per sobre del terra.
3. Assenyaleu dins i feu clic.
4. Per veure'l des de baix, amb la seva quadrícula i els llums, canvieu el plànol a la seva planta del sostre: vegeu [Vistes, rangs de visualització i els vostres propis fulls](topic:views-and-sheets).

## Una coberta

1. A la planta on els murs sostenen la coberta, feu clic a {{ui:Coberta}}.
2. Escriviu el **Pendent** com a pujada sobre 12 (`6/12`) o en graus (`30`), i el **Voladís**.
3. Trieu els **Extrems**: **Coberta a quatre aigües** (tots els costats tenen pendent), **Frontons als costats curts** o **Frontons als costats llargs** (un edifici de quatre costats), o **Coberta d'un sol vessant**.
4. Assenyaleu dins de l'edifici: el ràfec i el carener es mostren al plànol. Feu clic.

La coberta reposa sobre els murs, a la planta de sobre, i la seva cara inferior arriba a la cara exterior dels murs. Els frontons es omplen amb un mur de frontó tan gruixut com el mur de sota. Un edifici en forma d'L, de T o de U rep una coberta a quatre aigües les ales de la qual es troben en valls.

## Canvieu-les

Seleccioneu un forjat, un fals sostre o una coberta (a la vista 3D, a l'arbre del model, o una coberta fent clic dins del seu contorn a la planta de sobre) i canvieu-lo a **Propietats**: el tipus de forjat, el gruix i quant sobresurt la part superior per sobre del nivell; l'alçada, el gruix i el **Patró** d'un fals sostre (la quadrícula que dibuixa el plànol del sostre: cap, 600 × 600, 600 × 1200, 2' × 2' o 2' × 4'); el pendent, el voladís, els extrems i el gruix d'una coberta. Cada canvi és un sol pas per desfer.

## Doneu un tipus a un forjat, fals sostre o coberta amb capes

Un forjat, un fals sostre i una coberta poden tenir un **tipus**, com un mur: una composició amb nom de capes, cadascuna amb el seu material i el seu gruix real.

- **Quan es col·loca.** Les eines Forjat, Fals sostre, Coberta i Dibuixa forjat tenen una llista **Tipus** a la seva fila. **Cap tipus** el col·loca com abans, amb el seu propi gruix. Un tipus el col·loca amb el mateix gruix que sumen les seves capes.
- **Més endavant.** Trieu el forjat, el fals sostre o la coberta i escolliu **Tipus** a Propietats. L'element continua sent el mateix: el seu lloc, la seva habitació i les seves dades es mantenen, i no es torna a dibuixar res. Només canvien el tipus, el gruix i el material. Així un element de fase d'esbós es converteix en un de desenvolupat: canvieu el seu tipus genèric per un de real.
- **Edita el tipus…** obre l'editor de tipus: capes de **dalt** cap avall, el nucli, la funció de cada capa i l'etiqueta LOD del tipus. Desar canvia tots els elements del tipus en un sol pas, i un Desfés el torna enrere. Canviar un tipus inicial desa una còpia com a tipus propi.
- Mentre un element té un tipus, el seu **Gruix** és el del tipus i no es pot escriure. Trieu un altre tipus, o **Cap tipus**, per canviar-lo.

Els tipus inicials són un tipus **genèric** per a cada cas (una capa del material genèric, etiquetada LOD 200) i dos de compostos (etiquetats LOD 300): un forjat de jàssers de fusta i un de formigó amb morter de regularització; una coberta de fusta i una coberta plana de formigó; un fals sostre de placa de guix i un fals sostre suspès de rajoles. Són valors de partida, no construccions provades: reviseu les capes abans de confiar-hi.

El quadre **Capes: àrea i volum** llista cada capa de cada tipus en ús; vegeu [Quadres, dimensions i PDF](topic:plan-schedules-and-pdf). Els tipus de forjat, de coberta i de fals sostre viatgen entre projectes en un paquet de tipus o com a element de la Biblioteca; vegeu [Paquets de tipus](topic:type-packs).

## Bones de saber

- Moure, afegir o suprimir murs torna a fer les habitacions, els forjats, els falsos sostres i la coberta que hi ha a sobre.
- Una coberta s'adapta a qualsevol contorn. Per donar a cada mur el seu propi pendent, frontó o vessant, una peça elevada, un fris i un sofit, o per dibuixar un sol pla de coberta, vegeu [Cobertes: un pendent per a cada mur, frontons, vessants i plans de coberta](topic:roofs).
- {{key:Delete}} suprimeix el forjat, el fals sostre o la coberta triats.
