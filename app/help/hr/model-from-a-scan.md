---
title: Model iz skeniranja
summary: Kratki vodič od laserskog skena do zidova: otvorite oblak točaka uz novu zgradu, poravnajte ga s razinom i ocrtajte njegove zidove na tlocrtu.
keywords: skeniranje, lasersko skeniranje, oblak točaka, izvedeno stanje, postojeća zgrada, snimanje, ocrtavanje, skeniranje u BIM, model iz skeniranja, isječak, poravnaj, okomito, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Što ćete učiniti

Nacrtajte postojeću zgradu prema njezinom laserskom skenu: zidovi tamo gdje ih skeniranje prikazuje, na pravoj razini, okomito jedan na drugi.

## Koraci

1. **Zgrada za crtanje.** {{ui:File}} › {{ui:New building}}, s onoliko etaža koliko zgrada ima (etaže možete dodati kasnije, vidi [Lokacija, zgrada na njoj i njezine etaže](topic:site-building-and-levels)). {{ui:Draw}} se uključuje.
2. **Skeniranje.** {{ui:Show}} › {{ui:Point cloud}} i odaberite datoteku (LAS, LAZ, E57, PLY, PCD, PTX ili XYZ: vidi [Prikaz oblaka točaka uz model](topic:point-clouds)). Oblak se prikazuje u 3D prikazu, a tlocrt prikazuje njegov **isječak**: skenirane točke 1200 mm (4 ft) iznad razine, kao točkice. To je visina na kojoj se zidovi, vrata i prozori najbolje vide.
3. **Poravnajte ga s razinom.** Otvorite izbornik {{ui:Scan}} na traci modela i kliknite {{ui:Align its floor to this level}}: oblak se pomiče gore ili dolje dok se pod koji je skeniran ne nađe na prikazanoj razini. Provjerite da isječak sada presijeca zidove.
4. **Okomito prema zgradi.** {{ui:Scan}} › {{ui:Turn it square to the building}} okreće oblak tako da zidovi u njegovom isječku idu uzduž osi tlocrta, pa se zidovi koje crtate uz držanje {{key:Shift}} poravnavaju sa skenom. Okreće se oko sredine zidova koje je pronašao, pa stabla ili zid susjeda uhvaćen u isječku ne zakreću skeniranje s mjesta. Najprije poravnajte pod: tada isječak presijeca zidove.
5. **Ocrtajte zidove.** Odaberite {{ui:Wall}} i klikajte duž točkica: alat se hvata za skenirane točke (oznaka hvatanja je mali romb) kao i za zidove koje ste već nacrtali. Zid se crta na svojoj središnjoj liniji, pa kliknite po sredini dvaju redova točkica koje zid ostavlja; debljinu upišite tako da prvo odaberete vrstu zida. Zatim dodajte vrata i prozore tamo gdje isječak pokazuje praznine.
6. **Sljedeća etaža.** Na popisu etaža u tlocrtu odaberite etažu iznad: isječak slijedi visinu presjeka te etaže. Ponovno poravnajte pod s tom razinom samo ako se podovi skeniranja ne nalaze tamo gdje su vaše etaže.

## Što biste trebali vidjeti

- Isječak se mijenja kada mijenjate etažu, a deblji isječak ({{ui:Scan}} › {{ui:Slice thickness}}) prikazuje više točaka tamo gdje je skeniranje rijetko.
- {{ui:Scan}} › {{ui:Undo the alignment}} vraća oblak na mjesto na kojem je bio kada se otvorio. Poravnavanje pomiče oblak samo u prikazu: ne sprema se u IFC datoteku, a zidovi koje ste nacrtali ostaju na mjestu. Poravnanje ide s oblakom kada mijenjate {{ui:Place}} ili {{ui:Units}}, ili kada otvorite drugi model.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} sakriva ili prikazuje točkice.

:::tip
Veliki skenovi: tlocrt crta do 60.000 točaka isječka, a 3D prikaz nekoliko milijuna točaka cijelog oblaka, obje ravnomjerno odabrane kroz skeniranje, pa velika datoteka ostaje brza. Za ocrtavanje u aplikaciji za crtanje koristite {{ui:Trace in CadCraft}} na traci oblaka.
:::
