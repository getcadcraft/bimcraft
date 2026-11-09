---
title: Datoteke, ki jih BimCraft odpre in shrani
summary: Vsak format, ki ga BimCraft odpre, kaj ohrani, kaj shrani, kam gredo shranjene datoteke in kaj se spremeni med brskalniki ter ko ste brez povezave.
keywords: formati, odpri, shrani, izvozi, prenesi, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, naloži, zasebnost, velikost datoteke
from: a7275dbf
---

BimCraft bere datoteke na vašem računalniku, v zavihku brskalnika. **Nič se ne naloži** v CadCraft ali kamor koli drugam. Ko shranjujete, BimCraft brskalniku ponudi novo datoteko za prenos; nikoli ne prepiše datoteke, ki ste jo odprli.

## Kaj odpre

| Format | Končnice | Kaj dobite |
|---|---|---|
| IFC | `.ifc` | Model v 3D, etaže, števila elementov in lastnosti vsakega elementa. Imena, oznake in posamezne vrednosti lastnosti je mogoče spremeniti. |
| Datoteke projektov in družin | `.rvt` `.rfa` `.rte` `.rft` | Kartica datoteke: različica, gradnja, skupno delo, podatki o projektu, parametri družine, povezane datoteke in predogledna slika. Brez 3D. |
| DWG | `.dwg` | Risba v 2D: prostor modela, vsak list, sloji, povezane risbe, slike in pogled tiska. Tudi prostor modela v 3D. Preverjene so datoteke od AutoCAD 2000 do 2018. |
| DXF | `.dxf` | Enako kot DWG. |
| STEP | `.step` `.stp` | Del, kos opreme ali model dobavitelja (AP203, AP214, AP242) v 3D: vsako telo postane en element (gradbeni element nadomestni objekt) majhnega modela IFC na eni etaži, prebran kot trikotniki v pravi velikosti, sestav z vsakim delom tam, kjer ga datoteka postavi. Od tam naprej deluje kot vsak IFC: lastnosti, prerezi, merjenje, shrani kot IFC. Barve in drevo sestava se ne preberejo. |
| Oblaki točk | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Posnetek v 3D pogledu, ob modelu ali samostojno: glejte [Prikaz oblaka točk poleg modela](topic:point-clouds). |
| Paket projekta | `.ccbundle.zip` | Model s pogledi, postavitvami in skupinami lastnosti: glejte [Odpiranje paketa projekta](topic:open-project-bundle). |
| Mapa | katera koli | Poročilo o vsakem modelu, risbi in paketu projekta v njej. Vsak IFC, model, risba ali paket v poročilu se odpre s klikom. |

[Kaj BimCraft prebere iz posameznega formata](topic:file-formats) podrobneje opisuje.

BimCraft ugotovi, kaj je datoteka, po prvih bajtih in ne le po imenu, zato se projektna datoteka z nenavadno končnico vseeno odpre kot kartica datoteke.

### Ni odprto

- `.ifczip` in `.ifcxml`: BimCraft javi „.ifczip še ni podprt. Model shranite ali izvozite kot navadno datoteko .ifc.“ Razpakirajte `.ifczip` (vsebuje navadno `.ifc`) ali ga znova izvozite kot navaden IFC.
- Risbe DGN so navedene v poročilu mape, vendar se ne odprejo.
- PDF, slike in pisarniške datoteke se same ne odprejo. Slike se uporabijo kot slike v DWG, {{ui:Zgradba}} › {{ui:Iz risbe …}} pa pretvori strani PDF ali skeniranja v stene: glejte [Stene iz niza načrtov](topic:walls-from-plans).

## Kaj shrani

| Kliknete | Dobite | Kje |
|---|---|---|
| {{ui:Shrani kot IFC}} | Novo datoteko IFC z vašimi urejanji, poimenovano „*izvirno ime* (edited).ifc“ | Mapa za prenose v vašem brskalniku |
| {{ui:Prenesi CSV}} v razporedu opreme | CSV z elementi s seznama, poimenovan „*ime risbe* equipment.csv“ | Mapa za prenose v vašem brskalniku |

Druge stvari se shranijo tam, kjer nastanejo, vsaka v svoji temi: {{ui:USD}} ([Izvoz modela v USD](topic:usd)), {{ui:Collada}} (.dae in Google Earth .kmz: [Izvoz modela v Collada ali za Google Earth](topic:collada)), .glb za {{ui:Za upodobitev}}, upodobljene slike, listi in načrti kot PDF, razporedi in seznami kot CSV, zadeve BCF, preglednica COBie, datoteke družin in registrirani posnetki kot LAS ali E57. BimCraft ne shranjuje DWG, DXF ali datotek projektov in nikoli ne spremeni datotek, ki ste jih odprli.

:::chromium
Chrome in Edge shranjujeta prenose v mapo, nastavljeno v njunih nastavitvah, običajno Prenosi. Če želite, da vas vsakič vpraša, kam shraniti posamezno datoteko, v nastavitvah prenosov brskalnika vklopite „Ask where to save each file before downloading“.
:::

:::firefox
Firefox shranjuje v mapo Prenosi, razen če ste v nastavitvah izbrali „Always ask you where to save files“.
:::

:::safari
Safari shranjuje v Prenose, razen če v **Safari > Settings > General > File download location** izberete drugo mapo.
:::

## Ponovno shranjevanje

Vsako shranjevanje prenese celoten model z **vsemi urejanji od odprtja**, ne le urejanj po zadnjem shranjevanju. Seznam {{ui:Spremembe}} se po vsakem shranjevanju znova izprazni, zato ne morete razveljaviti prek shranjevanja. Če želite začeti znova od izvirnika, ponovno odprite izvirno datoteko.

## Velike datoteke in pomnilnik

- Datoteke **IFC** se v celoti preberejo v pomnilnik zavihka, geometrija 3D pa vzame še več pomnilnika. Model, velik nekaj sto megabajtov, je lahko preveč za prenosnik. Nad 1,5 milijona trikotnikov se robovi izklopijo, da se prihrani pomnilnik („Robovi so izklopljeni za zelo velike modele“).
- Datoteke **projektov** se ne berejo v celoti. BimCraft prebere le majhne dele, ki jih potrebuje, približno od 40 KB do 100 KB, ne glede na to, kako velika je datoteka, zato se centralni model 500 MB na omrežnem pogonu odpre v trenutku.
- Datoteke **DWG in DXF** se preberejo v celoti. Zelo velika risba prikaže „Ta risba je zelo velika; prikazan je samo del.“
- **Mape** do 20.000 datotek se odprejo. Preberejo se le nekaj kilobajtov, ki jih potrebuje vsaka kartica modela.

Za več glejte [Brskalniki, naprave in pomnilnik](topic:platforms).

## Na spletu in brez povezave

Odpiranje datotek nikoli ne potrebuje interneta. En bralnik se naloži s spletnega mesta, ko ga prvič potrebujete: pogon IFC, ob prvem odprtju modela IFC („Zaganjanje pogona IFC…“). Bralnika DWG in DXF sta del aplikacije.

:::offline
Brez povezave ste. Če gumb v vrstici aplikacije pravi {{ui:Pripravljeno za delo brez povezave}}, se vsak format odpre kot običajno. Če ne, se model IFC ne more odpreti, razen če je bil v tem zavihku že odprt: najprej ponovno vzpostavite povezavo. Glejte [Na spletu in brez povezave](topic:online-offline).
:::

Če želite BimCraft uporabljati brez povezave, med povezavo v vrstici aplikacije kliknite {{ui:Shrani za delo brez povezave}} in počakajte na {{ui:Pripravljeno za delo brez povezave}}. Shranjena kopija je velika približno 33 MB; vključuje pogon IFC, zato se modeli IFC odprejo tudi brez povezave. [Delo brez povezave](common:offline) na splošno pojasnjuje shranjene kopije.

## Shranjevanje v oblak

Shranjevanje v oblak še ni na voljo. Urejene kopije shranjujte na svoj računalnik ali na strežnik datotek vaše pisarne, kot shranjujete katero koli drugo datoteko. Glejte [Vaše datoteke](common:your-files).
