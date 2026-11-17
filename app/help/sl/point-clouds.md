---
title: Prikaz oblaka točk poleg modela
summary: Odprite lasersko skeniranje (LAS, LAZ, E57, PLY, PCD, PTX, PTS ali XYZ) v 3D pogledu samostojno ali z modelom IFC, ga obarvajte, izrežite tanek rez skozenj, merite do njegovih točk in ga predajte risalnemu programu, da po njem zarišete dejansko stanje (as-built) črt.
keywords: oblak točk, lasersko skeniranje, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, dejansko stanje, as-built, as built, geodetska izmera, registracija, rez, rez tlorisa, lovljenje, meri, zariši, sken v bim
from: d0a3e740
---

## Kaj boste naredili

Oglejte si lasersko skeniranje stavbe ob njenem modelu: preverite, ali je zgrajeno skladno z načrtom, merite med skeniranimi točkami in izrežite tanek rez, iz katerega berete stene, vrata in stebre.

## Koraki

1. Odprite oblak: {{ui:Odprto}} datoteko `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ali `.xyz` ali jo spustite na stran (glejte temo o formatih oblakov točk, kaj prinese vsak in kaj izvoziti iz lastne programske opreme skenerja). Če je model odprt, se oblak pridruži modelu v 3D pogledu; odpiranje oblaka nikoli ne zapre modela ali njegovih neshranjenih sprememb. Brez modela se oblak odpre sam.
2. Pod orodno vrstico se prikaže vrstica oblaka. Pove, koliko točk je prikazanih in koliko jih ima datoteka.
3. Izberite {{ui:Barva po}}: lastne barve datoteke (če jih je skener shranil), {{ui:Višina}}, {{ui:Jakost}}, {{ui:Razred}} (razredi LiDAR, kot so tla, rastje in stavbe) ali {{ui:Ena barva}}. {{ui:Velikost}} naredi točke večje ali manjše.
4. Kliknite {{ui:Tloris}} pod {{ui:Rez}}, da ohranite samo tanek pas 1.2 m nad najnižjo točko, gledan od zgoraj: stene, odprtine vrat in stebri so videti kot tloris. {{ui:Spredaj}} in {{ui:Bok}} izrežeta pokončne pasove za pogled in prerez. Pas premaknete z {{ui:Pri}}, spremenite pa {{ui:Debelina}} (v metrih). {{ui:Izklopljeno}} znova prikaže cel oblak.
5. Kliknite {{ui:Meri}} na orodni vrstici. Kazalec se prilepi na točke oblaka (oznaka pove "oblak točk"), tako da lahko merite od stene do stene v rezu ali od elementa modela do skena. Oglišče ali rob modela v dosegu ima vedno prednost.
6. Z {{ui:Meri}} › {{ui:Lokacija}} točka oblaka pokaže svojo zemljepisno širino in dolžino iz lastnega koordinatnega sistema oblaka, če ga datoteka navede.
7. {{ui:Skrij}} za trenutek skrije oblak; {{ui:Odstrani}} ga vzame ven. {{ui:Pokaži}} › {{ui:Oblak točk}} skrije ali prikaže vrstico.

## Kam gre oblak

{{ui:Postavi}} v vrstici pove, kako se oblak ujema z modelom:

- **Koordinate modela**: številke oblaka so modelove lastne (sken, registriran v koordinate načrta).
- **Kartografske koordinate**: model ima kartografsko pretvorbo (IfcMapConversion) in je oblak v istem projiciranem sistemu: oblak je postavljen prek nje. Če navajata različna sistema, to pove vrstica stanja.
- **Središče na modelu**: kadar nobena možnost oblaka ne postavi blizu modela, gre njegova sredina na sredino modela, najnižja točka pa na tla modela. Izberite drugo možnost, da to preglasite.

Kadar datoteka ne navaja svojih enot, BimCraft prebere metre in v vrstici ponudi {{ui:Enote}}.

## Sledenje dejanskim črtam

Kliknite {{ui:Zariši v CadCraft}}, da oblak predate risalnemu programu v novem zavihku. Odpre se pod risbo, kjer vam rez tlorisa in lovljenje objektov omogočata, da narišete stene čez skeniranje. Glejte temo CadCraft o oblakih točk.

## Koliko točk

Sken lahko vsebuje na stotine milijonov točk. BimCraft prebere vsako točko enkrat in obdrži enakomeren delež za risanje: {{ui:Pokaži}} v vrstici določi, koliko (1, 2, 5 ali 10 milijonov). Več točk potrebuje več pomnilnika in hitrejšo grafično kartico. Števila po razredu LiDAR veljajo za vse točke v datoteki.

:::note
Datoteke se berejo na tem računalniku; nič se ne naloži. LAS 1.0–1.4 in LAZ se beresta (datoteke LAZ do 1 GB, med branjem v pomnilniku); E57 datoteke do 6 milijonov točk in 512 MB za zdaj (večji skeni: izvozite LAS ali LAZ); PLY, PCD in PTX v celoti; besedilni oblaki so `x y z`, z barvnima (`r g b`) in jakostnima stolpcema, kadar so prisotni.
:::

## Več skenov

Skeni, posneti z različnih položajev, se lahko registrirajo v en okvir, izboljšajo z ICP in izvozijo kot en LAS ali E57: glejte [Registrirajte več skenov v enega](topic:register-scans).
