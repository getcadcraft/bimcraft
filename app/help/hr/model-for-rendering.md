---
title: Slanje modela programu za render
summary: Spremite ono što 3D prikaz pokazuje kao glTF model (.glb) s materijalima, teksturama i svjetiljkama, za programe za render i vizualizaciju koji čitaju glTF.
keywords: glb, gltf, gl transmission format, izvoz, render, vizualizacija, stvarno vrijeme, archviz, materijali, teksture, svjetiljke, svjetla, imovina, prilagođena imovina
from: e62d57dc
---

{{ui:Za render}} na alatnoj traci sprema ono što 3D prikaz pokazuje kao jednu **.glb** datoteku (glTF 2.0, otvoreni format Khronos Group). Programi za render koji čitaju glTF otvaraju je s materijalima i svjetiljkama modela. Twinmotion navodi glTF i GLB među datotekama geometrije koje uvozi te zadržava njihova svjetla (Epicova dokumentacija, „Importing geometry in Twinmotion“): koristite {{ui:Za render}} i tamo uvezite .glb. Ništa se ne šalje na poslužitelj: datoteka se izrađuje na ovom računalu.

## Spremanje

1. Otvorite IFC model i postavite 3D prikaz: sakrijte etaže, elemente ili povezane modele koje ne želite, i [obojite materijale](topic:paint-materials) koje želite vidjeti.
2. Kliknite {{ui:Za render}} (ili upišite `GLB`).
3. Datoteka se preuzima kao „<naziv modela>.glb“. Statusna traka kaže koliko trokuta, materijala i svjetiljki sadrži.

## Što datoteka sadrži

- **Geometriju** svakog elementa koji 3D prikaz pokazuje, u metrima, s Y prema gore (vlastite osi glTF-a). Jedan objekt po etaži i materijalu, nazvan „Level 1 — Brick, red“, pa u programu za render možete odabrati materijal i zamijeniti ga vlastitim.
- **Materijale:** svaka boja s izgledom koji ste odabrali za nju u [Render](topic:render) (mat, saten, sjajno, metal, staklo…) te svaki obojeni materijal iz knjižnice s bojom, hrapavošću i **teksturom** (njezina slika je u datoteci, skalirana na stvarnu veličinu: cigla je veličine cigle). Staklo je prozirno.
- **Svjetiljke:** svaka rasvjetna armatura uključena u Render › Svjetiljke, kao točkasto ili reflektorsko svjetlo, sa svojom svjetlinom (lumeni pretvoreni u kandele), bojom i kutom snopa.
- **Gdje je lokacija:** zemljopisna širina i dužina lokacije zapisane su u datoteci radi pregleda. Programi za render imaju vlastito sunce: mjesto upišite u njima.

## Što izostavlja

- Presjek (cijeli elementi se uključuju) i elemente prikazane prozirno (izostavljaju se).
- Objekte po elementu (umjesto toga jedan objekt po etaži i materijalu), IFC svojstva, bump mape, spremljene poglede i snimljene šetnje.
- Rubove i pozadinu.

## Enscape i drugi renderi kao dodaci

Enscape radi unutar drugog programa za projektiranje i nema datoteku koju bi se otvorilo za cijeli projekt. Dva su načina:

- Otvorite **IFC** modela (Datoteka › Spremi) u programu u kojem radi Enscape; većina ih čita IFC. Boje dolaze; materijali iz knjižnice dolaze kao svoje boje.
- Donesite **mali dio** (namještaj, armaturu) kao prilagođenu imovinu: prvo ga izolirajte, zatim kliknite {{ui:Za Enscape (.gltf)}}. Knjižnica prilagođene imovine Enscapea navodi datoteke .gltf, .obj i .fbx, a ne .glb, pa ovaj gumb sprema istu scenu kao jednu samostalnu **.gltf** datoteku (binarni podaci i slike su unutar datoteke; ne treba kopirati ništa uz nju). Enscape preporučuje male imovine (ispod otprilike 20,000 trokuta).

:::note
U CadCraft Studiju istu glTF datoteku (i USD datoteku) može se spremiti iz {{ui:Render}} › Motor › **glTF datoteka** / **USD datoteka**, ili otvoriti izravno u programu na ovom računalu: pogledajte [Otvaranje scene u drugom programu](topic:render-open-in). Dodatak ili živa veza za Enscape ili Twinmotion nije izgrađena. Formati FBX i Datasmith nemaju objavljenu specifikaciju, pa ih BimCraft ne piše; glTF je otvoreni put.
:::
