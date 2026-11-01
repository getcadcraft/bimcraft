---
title: Koordinate u BimCraft-u
summary: Gdje radite: položaj pokazivača u planu i 3D prikazu, nivo na kojem ste, ishodište projekta i geodetska tačka lokacije.
keywords: koordinate, gdje sam, položaj, pokazivač, očitavanje, x y z, nivo, sprat, ishodište projekta, ishodište, bazna tačka, geodetska tačka, koordinate karte, istočne, sjeverne, georeferenciranje, jedinice, lokacija
from: 84df5245
---

## Šta ćete uraditi

Na prvi pogled saznati gdje se nalazite u modelu: na kojem nivou crtate, koliko je pokazivač udaljen od ishodišta projekta i gdje se nalazi geodetska tačka lokacije.

## Gdje se prikazuju brojevi

- **Iznad 3D prikaza** (dolje desno, pored kocke pogleda): pomjerite pokazivač preko modela. Okvir prikazuje nivo na kojem je tačka i koliko je visoko iznad poda tog nivoa, zatim **X, Y i Z**. Iznad praznog prostora očitava tačku na podu najnižeg nivoa.
- **Na planu** (dolje desno, dok je uključeno {{ui:Draw}}): nivo koji plan prikazuje i visinu njegovog poda, te **X i Y** pokazivača dok je iznad plana.
- Kada datoteka ima kartografsku konverziju (izvezena je s koordinatama karte), oba okvira dodaju **istočne i sjeverne koordinate** na kartografskoj mreži, u jedinicama {{ui:Units}} koje ste izabrali (uz broj je uvijek napisana jedinica; stope i inči prikazuju se kao decimalne stope). Crtež (DWG ili DXF) zadržava svoje jedinice: njegovo očitavanje pokazivača ih navodi i nikada se ne preračunavaju.

Svaka vrijednost X, Y i Z mjeri se od **ishodišta projekta**, u jedinicama {{ui:Units}} izabranim na traci s alatima (stope i inči, inči, decimalne stope, milimetri, centimetri ili metri). Pozitivna Y osa pokazuje prema sjeveru modela, koji nije uvijek pravi sjever. Istočne i sjeverne koordinate karte prate isti izbor (stope i inči prikazuju se kao decimalne stope). Kada se jedinica kartografskog sistema razlikuje od izabrane, ona se navodi u zagradi iza brojeva, na primjer *(US survey feet)*, kako bi geodeta vidio u kojoj je jedinici zapisan sam sistem.

## Dva markera

- **Ishodište projekta** (crveni krug s krstom): tačka 0, 0, 0 od koje se mjere sve koordinate u modelu.
- **Geodetska tačka** (plavi krug s trouglom): referentna tačka lokacije, za koju su date njena geografska širina, dužina i kota ili njene koordinate karte. U 3D prikazu usmjerite na nju da vidite gdje se nalazi.

Kada lokacija leži na ishodištu projekta, kao u novoj zgradi nacrtanoj ovdje, jedan marker prikazuje oba. Kliknite dugme nišana u bilo kojem okviru da sakrijete ili prikažete markere; BimCraft pamti vaš izbor u ovom pregledaču.

## Šta biste trebali vidjeti

- Brojevi se mijenjaju dok pomjerate pokazivač, a okvir plana navodi nivo koji ste izabrali u listi nivoa.
- Markeri ostaju na mjestu dok rotirate, pomjerate pogled i zumirate.

:::tip
Da pročitate geografsku širinu i dužinu tačke, koristite {{ui:Measure}} › {{ui:Location}}: pogledajte [Mjerenje udaljenosti, površina ploha i lokacija u 3D](topic:measure).
:::

:::touch
Na ekranu osjetljivom na dodir 3D okvir ne prikazuje ništa dok ne koristite miš ili olovku: prst pomjera prikaz.
:::
