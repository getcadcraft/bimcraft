---
title: Pošaljite model programu za renderovanje
summary: Sačuvajte ono što 3D prikaz pokazuje kao glTF model (.glb) sa njegovim materijalima, teksturama i svetiljkama, za programe za renderovanje i vizualizaciju koji čitaju glTF.
keywords: glb, gltf, format prenosa gl-a, izvoz, renderovanje, render, vizualizacija, u realnom vremenu, archviz, materijali, teksture, svetiljke, svetla, sredstvo, prilagođeno sredstvo
from: e62d57dc
---

{{ui:Za renderovanje}} na traci alata čuva ono što 3D prikaz pokazuje kao jednu **.glb** datoteku (glTF 2.0, otvoreni format Khronos Group-e). Programi za renderovanje koji čitaju glTF je otvaraju sa materijalima i svetiljkama modela. Twinmotion navodi glTF i GLB među datotekama geometrije koje uvozi i zadržava njihova svetla (Epic-ova dokumentacija, „Importing geometry in Twinmotion“): koristite {{ui:Za renderovanje}} i uvezite .glb tamo. Ništa se ne šalje: datoteka se pravi na ovom računaru.

## Čuvanje

1. Otvorite IFC model i podesite 3D prikaz: sakrijte spratove, elemente ili povezane modele koje ne želite, i [obojite materijale](topic:paint-materials) koje želite da vidite.
2. Kliknite {{ui:Za renderovanje}} (ili ukucajte `GLB`).
3. Datoteka se preuzima kao „<model name>.glb“. Statusna traka kaže koliko trouglova, materijala i svetiljki sadrži.

## Šta datoteka nosi

- **Geometrija** svakog elementa koji 3D prikaz pokazuje, u metrima, sa Y osom gore (sopstvene ose glTF-a). Jedan objekat po spratu i materijalu, nazvan „Level 1 — Brick, red“, da u programu za renderovanje izaberete materijal i zamenite ga svojim.
- **Materijali:** svaka boja sa izgledom koji ste izabrali za nju u [Renderuj](topic:render) (mat, saten, sjajan, metal, staklo…), i svaki obojeni materijal iz biblioteke sa svojom bojom, hrapavošću i **teksturom** (njena slika je u datoteci, skalirana na svoju stvarnu veličinu: cigla je veličine cigle). Staklo je providno.
- **Svetiljke:** svaka svetiljka koja je uključena u Renderuj › Svetiljke, kao tačkasto ili reflektorsko svetlo, sa svojom svetlošću (lumeni pretvoreni u kandele), bojom i uglom snopa.
- **Gde je lokacija:** geografska širina i dužina lokacije upisane su u datoteku radi informacije. Programi za renderovanje imaju sopstveno sunce: unesite mesto u njima.

## Šta izostavlja

- Presek (celi elementi ulaze) i elementi prikazani kao providni (izostavljaju se).
- Objekti element po element (umesto toga jedan po spratu i materijalu), IFC svojstva, bump mape, sačuvani pogledi i snimljene šetnje.
- Ivice i pozadina.

## Enscape i drugi renderi kao dodaci

Enscape radi unutar drugog programa za projektovanje i nema datoteku koju bi otvorio ceo projekat. Dva načina:

- Otvorite **IFC** modela (Datoteka › Sačuvaj) u programu u kojem radi Enscape; većina ih čita IFC. Boje dolaze sa njim; materijali iz biblioteke dolaze kao svoje boje.
- Uvezite **mali deo** (nameštaj, armatura) kao prilagođeno sredstvo: prvo ga izolujte, pa kliknite {{ui:Za Enscape (.gltf)}}. Biblioteka prilagođenih sredstava Enscape-a navodi .gltf, .obj i .fbx datoteke, ne .glb, pa ovo dugme čuva istu scenu kao jednu samostalnu **.gltf** datoteku (binarni podaci i slike su unutra; uz nju nema ništa drugo da se kopira). Enscape preporučuje mala sredstva (ispod oko 20.000 trouglova).

:::note
U CadCraft Studio-u isti glTF fajl (i USD datoteka) može se sačuvati iz {{ui:Renderuj}} › Pogon › **glTF datoteka** / **USD datoteka**, ili otvoriti direktno u programu na ovom računaru: videti [Otvorite scenu u drugom programu](topic:render-open-in). Dodatak ili direktna veza za Enscape ili Twinmotion nije napravljena. Formati FBX i Datasmith nemaju objavljenu specifikaciju, pa ih BimCraft ne piše; glTF je otvoreni put.
:::
