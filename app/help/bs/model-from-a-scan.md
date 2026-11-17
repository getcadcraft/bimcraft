---
title: Model iz skeniranja
summary: Kratak vodič od laserskog skena do zidova: otvori oblak tačaka pored nove zgrade, poravnaj ga s nivoom i ucrtaj zidove na osnovi.
keywords: skeniranje, laserski sken, oblak tačaka, izvedeno stanje, postojeća zgrada, geodetsko snimanje, ucrtavanje, sken u BIM, model iz skena, presjek, poravnanje, okomitost, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Šta ćeš uraditi

Ucrtaj postojeću zgradu iz njenog laserskog skena: zidove tamo gdje ih sken pokazuje, na pravom nivou, okomite jedan na drugi.

## Koraci

1. **Zgrada za crtanje.** {{ui:Datoteka}} › {{ui:Nova zgrada}}, sa onoliko nivoa koliko zgrada ima (nivoe možeš dodati kasnije, vidi [Teren, zgrada na njemu i njeni nivoi](topic:site-building-and-levels)). {{ui:Crtanje}} se uključuje.
2. **Sken.** {{ui:Prikaži}} › {{ui:Oblak tačaka}} i odaberi datoteku (LAS, LAZ, E57, PLY, PCD, PTX ili XYZ: vidi [Prikaz oblaka tačaka pored modela](topic:point-clouds)). Oblak se prikazuje u 3D pogledu, a osnova prikazuje njegov **presjek**: skenirane tačke 1200 mm (4 feet) iznad nivoa, kao tačkice. To je visina na kojoj se zidovi, vrata i prozori najbolje vide.
3. **Poravnaj s nivoom.** Otvori meni {{ui:Skeniraj}} u traci modela i klikni {{ui:Poravnaj njegov pod s ovim nivoom}}: oblak se pomjera gore ili dolje dok pod koji je skeniran ne legne na prikazani nivo. Provjeri da sada presjek siječe zidove.
4. **Pravo prema zgradi.** {{ui:Skeniraj}} › {{ui:Okreni ga pravo prema zgradi}} okreće oblak tako da zidovi u njegovom presjeku idu duž osa osnove, pa se zidovi koje crtaš uz držanje {{key:Shift}} poklapaju sa skenom. Okreće se oko sredine zidova koje je pronašao, tako da drveće ili zid susjeda uhvaćen u presjeku ne odmakne sken u stranu. Prvo poravnaj pod: tada presjek siječe zidove.
5. **Ucrtaj zidove.** Odaberi {{ui:Zid}} i klikni duž tačkica: alat se hvata za skenirane tačke (oznaka hvatanja je mali romb) kao i za zidove koje si već nacrtao. Zid se crta po svojoj središnjoj liniji, pa klikni po sredini dva reda tačkica koje zid ostavlja; debljinu upiši tako što prvo odabereš tip zida. Zatim dodaj vrata i prozore tamo gdje presjek pokazuje praznine.
6. **Sljedeći nivo.** Odaberi nivo iznad na listi nivoa osnove: presjek prati visinu presjeka nivoa. Ponovo poravnaj pod s tim nivoom samo ako podovi na skenu nisu tamo gdje su tvoji nivoi.

## Šta bi trebalo da vidiš

- Presjek se mijenja kad mijenjaš nivo, a deblji presjek ({{ui:Skeniraj}} › {{ui:Debljina presjeka}}) prikazuje više tačaka tamo gdje je sken redak.
- {{ui:Skeniraj}} › {{ui:Poništi poravnanje}} vraća oblak na mjesto na kojem je bio kad je otvoren. Poravnanje pomjera oblak samo u prikazu: ne čuva se u IFC datoteci, a zidovi koje si nacrtao ostaju na mjestu. Poravnanje ide uz oblak kad promijeniš {{ui:Postavi}} ili {{ui:Jedinice}}, ili kad otvoriš drugi model.
- {{ui:Skeniraj}} › {{ui:Prikaži presjek na osnovi}} sakriva ili prikazuje tačkice.

:::tip
Veliki skenovi: osnova crta do 60,000 tačaka presjeka, a 3D pogled nekoliko miliona tačaka cijelog oblaka, obje birane ravnomjerno kroz sken, pa veliki fajl ostaje brz. Ako želiš da ucrtavaš u aplikaciji za crtanje, koristi {{ui:Ucrtaj u CadCraft}} na traci oblaka.
:::
