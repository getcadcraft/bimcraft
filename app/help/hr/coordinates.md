---
title: Koordinate u BimCraft
summary: Gdje radite: položaj pokazivača u tlocrtu i 3D prikazu, razina na kojoj ste, ishodište projekta i geodetska točka lokacije.
keywords: koordinate, gdje sam, položaj, pokazivač, očitanje, x y z, razina, etaža, ishodište projekta, ishodište, bazna točka, geodetska točka, lokacija, koordinate karte, istok, sjever, georeferenciranje, jedinice, lokacija
from: 84df5245
---

## Što ćete raditi

Na prvi pogled saznajte u kojoj razini crtate, koliko je pokazivač udaljen od ishodišta projekta i gdje je geodetska točka lokacije.

## Gdje se prikazuju brojevi

- **Iznad 3D prikaza** (dolje desno, uz ViewCube): pomaknite pokazivač preko modela. Okvir prikazuje razinu na kojoj je točka i koliko je visoko iznad poda te razine, zatim njezine **X, Y i Z**. Iznad praznog prostora prikazuje točku na podu najniže razine.
- **U tlocrtu** (dolje desno, dok je {{ui:Draw}} uključeno): razinu koju tlocrt prikazuje i visinu njezina poda te **X i Y** pokazivača dok je iznad tlocrta.
- Kada datoteka ima kartografsku pretvorbu (izvezena je s koordinatama karte), oba okvira dodaju **istočne i sjeverne koordinate** na mreži karte, u {{ui:Units}} koju ste odabrali (uz njih uvijek piše mjerna jedinica; stope i palci prikazuju se kao decimalne stope). Crtež (DWG ili DXF) zadržava svoje jedinice: njegovo očitanje pokazivača ih navodi i nikad se ne pretvara.

Svaki X, Y i Z mjeri se od **ishodišta projekta**, u {{ui:Units}} odabranoj na alatnoj traci (stope i palci, palci, decimalne stope, milimetri, centimetri ili metri). Pozitivna Y os pokazuje prema sjeveru modela, što nije uvijek pravi sjever. Istočne i sjeverne koordinate karte slijede isti izbor (stope i palci prikazuju se kao decimalne stope); kada je jedinica sustava karte drugačija od one koju ste odabrali, ona se navodi u zagradama iza brojeva, na primjer *(US survey stope)*, tako da geodet može vidjeti u čemu je sam sustav zapisan.

## Dvije oznake

- **Ishodište projekta** (crveni krug s križićem): točka 0, 0, 0 od koje se mjere sve koordinate u modelu.
- **Geodetska točka** (plavi krug s trokutom): referentna točka lokacije za koju su dane njezina zemljopisna širina, dužina i nadmorska visina ili njezine koordinate karte. U 3D prikazu usmjerite pokazivač na nju da pročitate gdje se nalazi.

Kada se lokacija nalazi na ishodištu projekta, kao u novoj zgradi nacrtanoj ovdje, jedna oznaka prikazuje oboje. Kliknite gumb s križićem u bilo kojem okviru da sakrijete ili prikažete oznake; BimCraft pamti vaš izbor u ovom pregledniku.

## Što biste trebali vidjeti

- Brojevi se mijenjaju dok se pokazivač pomiče, a okvir u tlocrtu imenuje razinu koju ste odabrali na popisu razina.
- Oznake ostaju na mjestu dok kružite, pomičete prikaz i zumirate.

:::tip
Da pročitate zemljopisnu širinu i dužinu točke, koristite {{ui:Measure}} › {{ui:Location}}: pogledajte [Mjerenje udaljenosti, površina ploha i lokacija u 3D](topic:measure).
:::

:::touch
Na zaslonu osjetljivom na dodir 3D okvir ne prikazuje ništa dok ne upotrijebite miš ili olovku: prstom se pomiče prikaz.
:::
