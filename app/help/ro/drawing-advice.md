---
title: Sfaturi de desen: dimensiunile neobișnuite sunt create, cu avertisment
summary: BimCraft creează ce cereți. O dimensiune în afara celor obișnuite devine un avertisment în Probleme; nu vă oprește niciodată desenarea sau salvarea.
keywords: sfat, avertisment, probleme, refuzat, nu desenează, prea mic, prea îngust, minim, limită, lățime scară, contratreaptă, treaptă, stâlp, rampă, dimensiune ușă, linie de grilă, înălțime nivel, lucarnă, scară elicoidală, pantă platformă, perete scurt, fără blocaje
from: 20090130
---

## Scop

Desenați o dimensiune care nu este cea obișnuită și vedeți unde vă anunță BimCraft.

## Pași

1. Desenați sau modificați elementul așa cum doriți: de exemplu, o scară de 400 mm lățime.
2. BimCraft o creează așa cum ați cerut.
3. Deschideți {{ui:Problems}} în bara de sus. Sub **Sfaturi de desen** apare un avertisment care numește elementul, dimensiunea introdusă și intervalul obișnuit.
4. Faceți clic pe avertisment pentru a selecta elementul. Schimbați dimensiunea dacă a fost o greșeală sau lăsați-o: un avertisment poate fi acceptat, cu sau fără un motiv.

## Ce sunt sfaturile

Acestea erau refuzate înainte. Acum sunt create, fiecare cu un avertisment:

- **Scări**: mai înguste de 500 mm sau mai late de 5 m; contratrepte în afara intervalului 100–300 mm; trepte în afara intervalului 150–600 mm.
- **Scări elicoidale**: un stâlp în afara intervalului 40–400 mm; trepte mai adânci de 100 mm pe linia de mers.
- **Stâlpi**: mai subțiri de 50 mm în secțiune sau mai scurți de 300 mm.
- **Rampe**: mai înguste de 300 mm.
- **Uși și ferestre**: mai înguste sau mai joase de 100 mm.
- **Linii de grilă**: mai scurte de 100 mm.
- **Pereți**: un perete lăsat sub 50 mm lungime, de exemplu printr-o tăiere.
- **Niveluri**: sub 1 m sau peste 100 m înălțime (clădire nouă, niveluri decalate, înălțimea unui nivel).
- **Lucarne**: lățime în afara intervalului 600 mm–12 m, un perete frontal în afara intervalului 300 mm–4 m, un consol peste 1 m, pereți în afara intervalului 50–400 mm.
- **Platforme de clădire**: pante laterale în afara intervalului 1:1–10:1.

## Ce este refuzat în continuare

Doar ce nu poate fi construit sau găsit, fiecare cu un mesaj care explică motivul:

- O dimensiune sub 10 mm (un perete sub 1 mm): nu există nimic de construit.
- O lucarnă nu mai lată decât dublul grosimii peretelui ei: cei doi pereți laterali s-ar întâlni.
- O platformă de clădire cu pante laterale mai abrupte de 0,1:1 (acesta este un zid de sprijin) sau mai line de 100:1 (terasamentul ar continua la nesfârșit).
- Ceva care nu încape unde l-ați pus, un contur care se intersectează cu el însuși sau un element care nu mai este în model.

## De reținut

- Sfatul se calculează din model, așa că reapare când deschideți fișierul mai târziu și dispare când dimensiunea este corectată.
- Verificările modelului, pachetele de reglementări și verificările IDS listează doar ce găsesc. Nimic din {{ui:Problems}} nu vă oprește desenarea sau salvarea.
- Intervalele obișnuite reprezintă practica generală, nu un cod de construcție. Pentru un cod, adăugați suplimentul Building regulations și alegeți locația dumneavoastră.

## Continuare

- [Verificarea unui model pentru probleme frecvente](topic:model-checks)
- [Scări și balustrade](topic:stairs-and-railings)
