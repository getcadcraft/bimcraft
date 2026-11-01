---
title: Koordinate u BimCraft-u
summary: Gde ste: položaj pokazivača u planu i 3D prikazu, nivo na kome se nalazite, početak projekta i tačka premera lokacije.
keywords: koordinate, gde sam, položaj, pokazivač, očitavanje, x y z, nivo, sprat, početak projekta, početak, osnovna tačka, tačka premera, lokacija, kartografske koordinate, istočna, severna, georeferenca, jedinice
from: 84df5245
---

## Šta ćete uraditi

Na prvi pogled saznajte gde se nalazite u modelu: na kom nivou crtate, koliko je pokazivač udaljen od početka projekta i gde se nalazi tačka premera lokacije.

## Gde se prikazuju brojevi

- **Iznad 3D prikaza** (dole desno, pored kocke pogleda): pomerite pokazivač preko modela. Okvir prikazuje nivo na kome je tačka i koliko je visoko iznad poda tog nivoa, a zatim **X, Y i Z**. Iznad praznog prostora prikazuje tačku na podu najnižeg nivoa.
- **Na planu** (dole desno, dok je {{ui:Draw}} uključeno): nivo koji plan prikazuje i visinu njegovog poda, kao i **X i Y** pokazivača dok je iznad plana.
- Kada datoteka ima kartografsku konverziju (izvezena je sa kartografskim koordinatama), oba okvira dodaju **istočne i severne koordinate** na kartografskoj mreži, u {{ui:Units}} koje ste izabrali (uz brojeve uvek stoji oznaka jedinice; stope i inči se prikazuju kao decimalne stope). Crtež (DWG ili DXF) zadržava sopstvene jedinice: njegovo očitavanje pokazivača ih navodi i nikada se ne preračunavaju.

Sve vrednosti X, Y i Z mere se od **početka projekta**, u {{ui:Units}} izabranim na traci alata (stope i inči, inči, decimalne stope, milimetri, centimetri ili metri). Pozitivna osa Y pokazuje ka severu modela, što nije uvek pravi sever. Istočne i severne koordinate karte prate isti izbor (stope i inči se prikazuju kao decimalne stope). Kada je jedinica kartografskog sistema drugačija od one koju ste izabrali, ona se navodi u zagradi iza brojeva, na primer *(US survey feet)*, da geodeta vidi u kojoj jedinici je zapisan sam sistem.

## Dve oznake

- **Početak projekta** (crveni krug sa krstom): tačka 0, 0, 0 od koje se mere sve koordinate u modelu.
- **Tačka premera** (plavi krug sa trouglom): referentna tačka lokacije, za koju su date njena geografska širina, dužina i kota, ili kartografske koordinate. U 3D prikazu usmerite pokazivač na nju da biste očitali gde se nalazi.

Kada se lokacija nalazi na početku projekta, kao u novoj zgradi nacrtanoj ovde, jedna oznaka prikazuje obe. Kliknite dugme sa nišanom u bilo kom okviru da sakrijete ili prikažete oznake. BimCraft pamti vaš izbor u ovom pregledaču.

## Šta treba da vidite

- Brojevi se menjaju dok se pokazivač pomera, a okvir na planu navodi nivo koji ste izabrali na listi nivoa.
- Oznake ostaju na mestu dok orbitirate, pomerate i zumirate pogled.

:::tip
Da biste očitali geografsku širinu i dužinu tačke, koristite {{ui:Measure}} › {{ui:Location}}: pogledajte [Merenje rastojanja, površina lica i lokacija u 3D](topic:measure).
:::

:::touch
Na ekranu osetljivom na dodir 3D okvir ne prikazuje ništa dok ne upotrebite miš ili olovku: prst umesto toga pomera pogled.
:::
