---
title: Mreže in stebri
summary: Postavite osi mreže z oštevilčenimi in črkovanimi mehurčki, po razmiku ali posamezno, vzdolž njih narišite stene in stebre ter jih vidite na tlorisih, pogledih in prerezih.
keywords: mreža, mreže, os mreže, stebrna mreža, os, osi, mehurček, linija mreže, konstrukcijska mreža, 1 2 3, A B C, steber, stebri, opora, drog, lovljenje, IfcGrid, IfcColumn
from: bf99a8f7
---

## Kaj boste naredili

Postavite stavbo na mrežo, nato narišite stene in postavite stebre vzdolž njenih osi.

## Postavitev celotne mreže

1. Vklopite {{ui:Draw}}, nato izberite {{ui:Build}} › {{ui:Grid}}.
2. Kliknite {{ui:Place a grid…}}. Povejte, koliko **oštevilčenih osi** (1, 2, 3 …) in **črkovanih osi** (A, B, C …) želite ter kako daleč narazen naj bodo. Vpišite en razmik ali več, ločenih z vejicami, za neenakomerna polja (na primer `20', 24', 20'`). {{ui:Past the last lines}} je, kako daleč vsaka os sega čez zunanje osi druge vrste, {{ui:Turned (degrees)}} pa zasuče celotno mrežo.
3. Kliknite {{ui:Place it}}, nato kliknite, kjer naj bo prvo presečišče (1 / A). Predogled sledi kazalcu.

Oštevilčene osi potekajo po tlorisu in so razporejene čez njega; črkovane osi potekajo čez tloris in so razporejene navzgor po njem. Pri črkah se I in O preskočita, kot na risbah, da ju ni mogoče zamenjati z 1 in 0.

## Narišite osi posamezno

Ko je orodje {{ui:Grid}} vklopljeno, kliknite, kjer se os začne, in kjer se konča. Dobi naslednjo oznako med osmi, vzdolž katerih teče (po 3 pride 4; po B pride C). Za zaustavitev pritisnite {{key:Esc}}.

## Spremenite os mreže

Ko je orodje {{ui:Grid}} vklopljeno, kliknite os, da jo izberete. Vpišite novo: {{ui:Label}} in pritisnite {{key:Enter}}, ali kliknite {{ui:Delete this line}} (ali pritisnite {{key:Delete}}). {{ui:Bubbles}}: mehurčki na obeh koncih, na začetku ali koncu vsake osi, ali nikjer. Vsaka sprememba je en korak: {{key:Mod+Z}} jo razveljavi.

## Risanje vzdolž mreže

Orodja za risanje, vključno z {{ui:Wall}} in {{ui:Column}}, se lovijo na osi mreže in na mesta, kjer se križajo (oznaka lovljenja je majhen krog s križem).

**Stebri:** izberite {{ui:Build}} › {{ui:Column}}, izberite obliko (pravokotna ali okrogla), velikost in ali steber sega **do etaže nad njim** ali na določeno višino, nato kliknite. Z možnostjo {{ui:At every grid crossing}} postavite steber na vsako presečišče, ki ga še nima. Kliknite steber, da spremenite njegovo obliko, velikost ali višino v {{ui:Properties}}; {{key:Delete}} ga odstrani. Stebri, ki segajo do etaže nad njimi, ji sledijo, ko se njena višina spremeni.

## Kaj boste videli

- Mreža na tlorisu vsake etaže, z mehurčkom in njegovo oznako na koncih vsake osi.
- Osi mreže v kompletu risb: na tlorisih ter na pogledih in prerezih, kjer je os vidna čelno, z mehurčkom nad stavbo. Glejte [Pogledi, prerezi in listi](topic:sheets).
- V datoteki IFC: ena mreža za stavbo (IfcGrid, njene oštevilčene osi v enem seznamu in črkovane v drugem), stebri pa kot IfcColumn z njihovo velikostjo, višino in količinami. Drugi programi BIM prikažejo oboje.

:::note
Mreža, ki je prišla v datoteki iz drugega programa, je prikazana in orodja se lovijo nanjo, njenih osi pa tukaj ni mogoče spremeniti.
:::
