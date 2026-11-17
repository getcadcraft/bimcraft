---
title: Vypracujte hmotu budovy zo štúdie lokality
summary: Vezmite hmotu budovy preštudovanú v zobrazení lokality CivilCraft a vypracujte ju do podlaží, stien a podláh, pričom miesto lokality na mape zostane zachované.
keywords: hmota, hmota budovy, tvorba hmoty, štúdia lokality, vypracovať, CivilCraft, odovzdanie, podlažia, steny, podlahy, pôdorys, georeferencia, IFC
from: 557b94d1
---

Zobrazenie lokality v CivilCraft môže nakresliť hmoty budov na parcele a otestovať ich voči terénu, zadaným hraniciam a slnku. **Vypracovať v BimCraft** tam otvorí BimCraft na novej karte s hmotami; **Hmoty ako IFC** ich uloží ako súbor, ktorý tu otvoríte obvyklým spôsobom. Každá hmota sa dostane ako lokalita, budova s jednou úrovňou na každé podlažie, a jeden blok (samotná hmota), ktorý nesie jej čísla.

## Vypracovanie hmoty

1. Vyberte hmotu v 3D zobrazení. Vlastnosti ukážu jej použitie, počet podlaží a výšku podlažia, pôdorys, hrubú podlahovú plochu, ako sedí na svahu a jej parcelu.
2. Kliknite na **Vypracovať túto hmotu**.

V jednom kroku späť každé podlažie tejto budovy dostane steny okolo pôdorysu (pôdorys je vonkajšia plocha stien; každá stena ide až po podlažie nad ním a najvyššia má výšku jedného podlažia) a podlahu pod celou budovou. Blok sa nahradí a budova si ponechá čísla štúdie v sade vlastností `CadCraft_SiteMass`, označené ako vypracované. Strecha sa nevytvára: strecha závisí od návrhu.

## Miesto lokality

Súbor z CivilCraft sa zapisuje v dĺžkovej jednotke projektu a ak mal projekt v CivilCraft súradnicový systém, nesie ho ako prevod mapy projektu. Vypracovanie hmoty to nechá tak, takže budova zostane tam, kde ju mapa ukazuje.
