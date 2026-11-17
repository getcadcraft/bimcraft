---
title: Model iz skeniranja
summary: Kratak vodič od laserskog skena do zidova: otvorite oblak tačaka pored nove zgrade, poravnajte ga sa nivoom i ucrtajte zidove na planu.
keywords: skeniranje, laserski sken, oblak tačaka, izvedeno stanje, postojeća zgrada, geodetsko snimanje, ucrtavanje, sken u BIM, model iz skena, presek, poravnanje, pravougaono, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Šta ćete uraditi

Ucrtajte postojeću zgradu iz njenog laserskog skena: zidovi tamo gde ih sken pokazuje, na pravom nivou, pod pravim uglom jedan prema drugom.

## Koraci

1. **Zgrada za crtanje.** {{ui:File}} › {{ui:New building}}, sa onoliko nivoa koliko zgrada ima (nivoe možete dodati kasnije, pogledajte [Lokacija, zgrada na njoj i njeni nivoi](topic:site-building-and-levels)). {{ui:Draw}} se uključuje.
2. **Sken.** {{ui:Show}} › {{ui:Point cloud}} i izaberite datoteku (LAS, LAZ, E57, PLY, PCD, PTX ili XYZ: pogledajte [Prikaz oblaka tačaka pored modela](topic:point-clouds)). Oblak se prikazuje u 3D prikazu, a plan prikazuje njegov **presek**: skenirane tačke 1200 mm (4 feet) iznad nivoa, kao tačkice. To je visina na kojoj se zidovi, vrata i prozori najbolje vide.
3. **Poravnajte ga sa nivoom.** Otvorite meni {{ui:Scan}} na traci modela i kliknite {{ui:Align its floor to this level}}: oblak se pomera gore ili dole dok pod koji je skeniran ne sedne na prikazani nivo. Proverite da presek sada seče zidove.
4. **Okrenite ga paralelno sa zgradom.** {{ui:Scan}} › {{ui:Turn it square to the building}} okreće oblak tako da zidovi u njegovom preseku idu duž osa plana, pa se zidovi koje crtate uz držanje {{key:Shift}} poravnavaju sa skenom. Okreće se oko sredine zidova koje je pronašao, pa drveće ili zid komšije uhvaćen u preseku ne izbacuju skeniranje u stranu. Prvo poravnajte pod: tada presek seče zidove.
5. **Ucrtajte zidove.** Izaberite {{ui:Wall}} i kliknite duž tačkica: alat se hvata za skenirane tačke (oznaka hvatanja je mali romb) i za zidove koje ste već nacrtali. Zid se crta po svojoj središnjoj liniji, pa kliknite po sredini dva reda tačaka koje zid ostavlja; debljinu upišite tako što prvo izaberete tip zida. Zatim dodajte vrata i prozore tamo gde presek pokazuje praznine.
6. **Sledeći nivo.** Izaberite nivo iznad u listi nivoa na planu: presek prati visinu preseka nivoa. Poravnajte pod sa tim nivoom ponovo samo ako spratovi na skenu nisu tamo gde su vaši nivoi.

## Šta treba da vidite

- Presek se menja kad menjate nivo, a deblji presek ({{ui:Scan}} › {{ui:Slice thickness}}) prikazuje više tačaka tamo gde je sken redak.
- {{ui:Scan}} › {{ui:Undo the alignment}} vraća oblak tamo gde je bio kad je otvoren. Poravnanje pomera oblak samo u prikazu: ne čuva se u IFC datoteci, a zidovi koje ste nacrtali ostaju na mestu. Poravnanje ide sa oblakom kad promenite {{ui:Place}} ili {{ui:Units}} ili otvorite drugi model.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} sakriva ili prikazuje tačkice.

:::tip
Veliki skenovi: plan crta do 60.000 tačaka preseka, a 3D prikaz nekoliko miliona tačaka celog oblaka, obe ravnomerno izabrane kroz sken, pa velika datoteka ostaje brza. Za ucrtavanje u aplikaciji za crtanje koristite {{ui:Trace in CadCraft}} na traci oblaka.
:::
