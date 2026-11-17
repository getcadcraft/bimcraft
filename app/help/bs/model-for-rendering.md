---
title: Pošalji model u program za renderovanje
summary: Snimi ono što 3D pogled prikazuje kao glTF model (.glb) s njegovim materijalima, teksturama i svjetiljkama, za programe za renderovanje i vizuelizaciju koji čitaju glTF.
keywords: glb, gltf, gl transmission format, izvoz, renderovanje, render, vizuelizacija, u stvarnom vremenu, archviz, materijali, teksture, svjetiljke, svjetla, resurs, prilagođeni resurs
from: e62d57dc
---

{{ui:For rendering}} na alatnoj traci snima ono što 3D pogled prikazuje kao jedan **.glb** fajl (glTF 2.0, otvoreni format Khronos Group-a). Programi za renderovanje koji čitaju glTF otvore ga s materijalima i svjetiljkama modela; Twinmotion navodi glTF i GLB među fajlovima geometrije koje uvozi i zadržava njihova svjetla (Epicova dokumentacija, „Importing geometry in Twinmotion”): koristi {{ui:For rendering}} i uvezi .glb tamo. Ništa se ne šalje: fajl se pravi na ovom računaru.

## Snimanje

1. Otvori IFC model i podesi 3D pogled: sakrij spratove, elemente ili povezane modele koje ne želiš, i [oboji materijale](topic:paint-materials) koje želiš da vidiš.
2. Klikni {{ui:For rendering}} (ili ukucaj `GLB`).
3. Fajl se preuzima kao „<ime modela>.glb”. Statusna traka kaže koliko trouglova, materijala i svjetiljki sadrži.

## Šta fajl nosi

- **Geometriju** svakog elementa koji 3D pogled prikazuje, u metrima, s Y osom prema gore (glTF-ove vlastite ose). Jedan objekat po spratu i materijalu, nazvan „Nivo 1 — Cigla, crvena”, pa u programu za renderovanje možeš izabrati materijal i zamijeniti ga svojim.
- **Materijale:** svaku boju s izgledom koji si izabrao za nju u [Renderu](topic:render) (mat, saten, sjajno, metal, staklo…), i svaki obojeni materijal iz biblioteke s njegovom bojom, hrapavošću i **teksturom** (njena slika je u fajlu, skalirana na stvarnu veličinu: cigla je veličine cigle). Staklo je providno.
- **Svjetiljke:** svaku svjetiljku koja je uključena u Renderuj › Svjetiljke, kao tačkasto ili reflektorsko svjetlo, sa svojom svjetlinom (lumeni pretvoreni u kandele), bojom i uglom snopa.
- **Gdje je lokacija:** geografska širina i dužina lokacije upisane su u fajl radi reference. Programi za renderovanje imaju vlastito sunce: upiši mjesto u njima.

## Šta izostavlja

- Presjek (cijeli elementi idu unutra) i elementi prikazani providno (izostavljeni su).
- Objekti element po element (umjesto toga jedan objekat po spratu i materijalu), IFC svojstva, bump mape, sačuvani pogledi i snimljene šetnje.
- Ivice i pozadina.

## Enscape i drugi renderi-dodaci

Enscape radi unutar drugog programa za dizajn i nema fajl koji bi otvorio cijeli projekat. Dva načina:

- Otvori **IFC** model (Datoteka › Spasi) u programu u kojem Enscape radi; većina ih čita IFC. Boje dolaze s njim; materijali iz biblioteke dolaze kao svoje boje.
- Uvedi **mali dio** (namještaj, armaturu) kao prilagođeni resurs: prvo ga izoliraj, pa klikni {{ui:For Enscape (.gltf)}}. Enscape-ova biblioteka prilagođenih resursa navodi .gltf, .obj i .fbx fajlove, ne .glb, pa ovo dugme snima istu scenu kao jedan samostalan **.gltf** (binarni podaci i slike su unutar fajla; ne treba ništa drugo kopirati uz njega). Enscape preporučuje male resurse (ispod oko 20,000 trouglova).

:::note
U CadCraft Studiju isti glTF fajl (i USD fajl) može se snimiti iz {{ui:Render}} › Motor › **glTF fajl** / **USD fajl**, ili otvoriti direktno u programu na ovom računaru: vidi [Otvaranje scene u drugom programu](topic:render-open-in). Dodatak ili živa veza za Enscape ili Twinmotion nije napravljena. Formati FBX i Datasmith nemaju objavljenu specifikaciju, pa ih BimCraft ne piše; glTF je otvoreni put.
:::
