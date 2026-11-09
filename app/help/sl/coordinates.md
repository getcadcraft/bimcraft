---
title: Koordinate v BimCraftu
summary: Kje delate: položaj kazalca v tlorisu in 3D pogledu, nivo, na katerem ste, izhodišče projekta in točka geodetskega posnetka lokacije.
keywords: koordinate, kje sem, položaj, kazalec, odčitek, x y z, nivo, etaža, izhodišče projekta, izhodišče, izhodiščna točka, točka posnetka, lokacija, koordinate na karti, vzhodna, severna, georeferenciranje, enote, lokacija
from: 84df5245
---

## Kaj boste naredili

Na prvi pogled veste, kje ste v modelu: na katerem nivoju risate, kako daleč je kazalec od izhodišča projekta in kje je točka geodetskega posnetka lokacije.

## Kje se prikazujejo številke

- **Nad 3D pogledom** (spodaj desno, ob kocki pogleda): premaknite kazalec nad model. Okence prikaže nivo, na katerem je točka, in kako visoko je nad tlemi tega nivoja, nato **X, Y in Z**. Nad praznim prostorom prikaže točko na tleh najnižjega nivoja.
- **Na tlorisu** (spodaj desno, medtem ko je vklopljeno {{ui:Risanje}}): nivo, ki ga tloris prikazuje, in višino njegovih tal ter **X in Y** kazalca, medtem ko je nad tlorisom.
- Če ima datoteka preslikavo na karto (izvožena je bila s koordinatami karte), obe okenci dodata **vzhodno in severno koordinato** na mreži karte, v izbranih {{ui:Enote}} (vedno z zapisano enoto poleg njih; čevlji in palci se prikažejo kot decimalni čevlji). Risba (DWG ali DXF) ohrani svoje enote: odčitek kazalca jih navede in se nikoli ne pretvorijo.

Vsaka vrednost X, Y in Z je merjena od **izhodišča projekta**, v {{ui:Enote}}, izbranih na orodni vrstici (čevlji in palci, palci, decimalni čevlji, milimetri, centimetri ali metri). Pozitivna Y os kaže proti severu modela, ki ni vedno pravi sever. Vzhodne in severne koordinate na karti sledijo isti izbiri (čevlji in palci se prikažejo kot decimalni čevlji); kadar je enota sistema karte drugačna od izbrane, je navedena v oklepaju za številkami, na primer *(US survey feet)*, da geodet vidi, v čem je zapisan sam sistem.

## Dva označevalca

- **Izhodišče projekta** (rdeč krog s križem): točka 0, 0, 0, od katere so merjene vse koordinate v modelu.
- **Točka posnetka** (moder krog s trikotnikom): referenčna točka lokacije, za katero so podani njena zemljepisna širina, dolžina in višina ali njene koordinate na karti. V 3D pogledu usmerite kazalec vanjo, da odčitate, kje je.

Kadar lokacija leži na izhodišču projekta, kot pri novi stavbi, narisani tukaj, en označevalec prikazuje oba. Kliknite gumb z nitnim križem v katerem koli okencu, da skrijete ali prikažete označevalce; BimCraft vašo izbiro shrani v tem brskalniku.

## Kaj morate videti

- Številke se spreminjajo, ko se kazalec premika, okence tlorisa pa navede nivo, ki ste ga izbrali na seznamu nivojev.
- Označevalci ostanejo na mestu, medtem ko krožite, pomikate in povečujete pogled.

:::tip
Za odčitek zemljepisne širine in dolžine točke uporabite {{ui:Meri}} › {{ui:Lokacija}}: glejte [Merjenje razdalj, površin ploskev in lokacij v 3D](topic:measure).
:::

:::touch
Na zaslonu na dotik okence 3D ne prikaže ničesar, dokler ne uporabite miške ali peresa: prst premika pogled.
:::
