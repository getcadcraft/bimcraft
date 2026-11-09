---
title: Failid, mida BimCraft avab ja salvestab
summary: Iga vorming, mida BimCraft avab, mida see säilitab, mida salvestab, kuhu salvestatud failid lähevad ning mis muutub brauseriti ja võrguühenduseta olekus.
keywords: vormingud, ava, salvesta, ekspordi, laadi alla, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, üleslaadimine, privaatsus, faili suurus
from: a7275dbf
---

BimCraft loeb faile sinu arvutist brauseri vahelehel. **Midagi ei laadita üles** CadCraftile ega kellelegi teisele. Salvestamisel annab BimCraft brauserile uue faili allalaadimiseks; see ei kirjuta kunagi üle faili, mille oled avanud.

## Mida see avab

| Vorming | Laiendid | Mida saad |
|---|---|---|
| IFC | `.ifc` | Mudel 3D-s, korrused, elementide arvud ja iga elemendi omadused. Nimesid, silte ja üksikuid omaduste väärtusi saab muuta. |
| Projekti- ja perekonnafailid | `.rvt` `.rfa` `.rte` `.rft` | Failikaart: väljalase, versioon, koostöö, projekti teave, perekonna parameetrid, seotud failid ja eelvaate pilt. Ilma 3D-ta. |
| DWG | `.dwg` | Joonis 2D-s: mudeliruum, iga leht, kihid, seotud joonised, pildid ja trükivaade. Ka mudeliruum 3D-s. Kontrollitud on vormingud AutoCAD 2000 kuni 2018. |
| DXF | `.dxf` | Sama mis DWG. |
| STEP | `.step` `.stp` | Detail, seade või tarnija mudel (AP203, AP214, AP242) 3D-s: iga tahke muutub üheks elemendiks (hoone elemendi proxy) väikeses IFC-mudelis ühel korrusel, loetakse kolmnurkadena õiges suuruses, koost kõigi detailidega sinna, kuhu fail need paigutab. Edasi töötab see nagu iga IFC: omadused, lõiked, mõõtmine, salvestamine IFC-na. Värve ega koostepuud ei loeta. |
| Punktipilved | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skannimine 3D-vaates, mudeli kõrval või iseseisvalt: vaata [Punktipilve kuvamine mudeli kõrval](topic:point-clouds). |
| Projektipakk | `.ccbundle.zip` | Mudel koos vaadete, paigutuste ja omaduste rühmadega: vaata [Projektipaki avamine](topic:open-project-bundle). |
| Kaust | mis tahes | Aruanne iga mudeli, joonise ja projektipaki kohta selles. Iga IFC, mudel, joonis või pakk aruandes avaneb klõpsuga. |

[Mida BimCraft igast vormingust loeb](topic:file-formats) kirjeldab üksikasjalikumalt.

BimCraft määrab faili tüübi nii nime kui ka faili esimeste baitide järgi, seega avaneb projektifail ebatavalise laiendiga ikkagi failikaardina.

### Ei avane

- `.ifczip` ja `.ifcxml`: BimCraft ütleb: „.ifczip ei ole veel toetatud. Salvesta või ekspordi mudel tavalise .ifc-failina.“ Paki `.ifczip` lahti (see sisaldab tavalist `.ifc`-faili) või ekspordi uuesti tavalise IFC-na.
- DGN-joonised on kaustaaruandes loetletud, kuid ei avane.
- PDF-id, pildid ja kontoritööfailid ei avane iseseisvalt. Pilte kasutatakse DWG sees pildina ning {{ui:Versioon}} › {{ui:Joonisest…}} muudab PDF-i või skannitud lehed seinteks: vaata [Seinad plaanikomplektist](topic:walls-from-plans).

## Mida see salvestab

| Klõpsad | Saad | Kuhu |
|---|---|---|
| {{ui:Salvesta IFC-na}} | Uus IFC-fail koos sinu muudatustega, nimega „*originaalnimi* (edited).ifc“ | Sinu brauseri allalaadimiste kaust |
| {{ui:Laadi CSV alla}} seadme ajakavas | CSV loendis olevatest üksustest, nimega „*joonise nimi* equipment.csv“ | Sinu brauseri allalaadimiste kaust |

Muid asju salvestatakse seal, kus need tehakse, igaüks oma teemas: {{ui:USD}} ([Mudeli eksportimine USD-na](topic:usd)), {{ui:Collada}} ([Mudeli eksportimine Collada-na või Google Earthi jaoks](topic:collada): .dae ja Google Earthi .kmz), {{ui:Renderdamiseks}} .glb-fail, renderdatud pildid, lehed ja plaanid PDF-ina, ajakavad ja loendid CSV-na, BCF-probleemid, COBie-tabel, perekonnafailid ning registreeritud skannid LAS- või E57-vormingus. BimCraft ei salvesta DWG-, DXF- ega projektifaile ning ei muuda kunagi avatud faile.

:::chromium
Chrome ja Edge salvestavad allalaadimised kausta, mis on määratud nende sätetes, tavaliselt Allalaadimised. Selleks, et igal korral küsitaks, kuhu salvestada, lülita brauseri allalaadimise sätetes sisse „Küsi enne iga faili allalaadimist, kuhu see salvestada“.
:::

:::firefox
Firefox salvestab Allalaadimiste kausta, välja arvatud juhul, kui oled sätetes seadistanud valiku „Küsi alati, kuhu failid salvestada“.
:::

:::safari
Safari salvestab kausta Allalaadimised, välja arvatud juhul, kui valid teise kausta jaotises **Safari > Sätted > Üldine > Faili allalaadimise asukoht**.
:::

## Teist korda salvestamine

Iga salvestamine laadib alla kogu mudeli **kõigi muudatustega alates avamisest**, mitte ainult viimase salvestuse järel tehtud muudatustega. Loend {{ui:Muudatused}} tühjeneb pärast igat salvestamist, seega ei saa salvestusest kaugemale tagasi võtta. Algusest alustamiseks ava originaalfail uuesti.

## Suured failid ja mälu

- **IFC**-failid loetakse brauseri vahelehe mällu täielikult ning 3D-geomeetria võtab lisaks mälu. Mõnesaja megabaidine mudel võib sülearvutile liiga olla. Üle 1,5 miljoni kolmnurga lülitatakse servad mälu säästmiseks välja („Servad on väga suurte mudelite puhul väljas“).
- **Projektifailid** ei loeta täielikult. BimCraft loeb ainult vajalikke väikeseid osi, umbes 40 KB kuni 100 KB, olenemata faili suurusest, seega avaneb 500 MB keskmudel võrguketta peal hetkega.
- **DWG- ja DXF-failid** loetakse täielikult. Väga suur joonis näitab teadet „Joonis on väga suur; näidatakse ainult osa sellest.“
- **Kaustad** kuni 20 000 failiga avanevad. Loetakse ainult paar kilobaiti, mida iga mudelikaart vajab.

Vaata lisaks [Brauserid, seadmed ja mälu](topic:platforms).

## Võrgus ja võrguühenduseta

Failide avamiseks ei ole vaja internetti. Üks lugeja laadib saidilt esimesel vajadusel: IFC-mootori, esimest korda, kui avad IFC-mudeli („IFC-mootor käivitub…“). DWG- ja DXF-lugejad on rakenduse osa.

:::offline
Oled võrguühenduseta. Kui rakenduse ribal olev nupp ütleb {{ui:Valmis ka võrguta}}, avaneb iga vorming tavapäraselt. Kui ei ütle, ei saa IFC-mudelit avada, välja arvatud juhul, kui see on selles vahelehes juba avatud: ühenda enne uuesti võrku. Vaata [Võrgus ja võrguühenduseta](topic:online-offline).
:::

Et BimCraftiga töötada ilma ühenduseta, klõpsa rakenduse ribal võrgus olles {{ui:Salvesta võrguks}} ja oota, kuni ilmub {{ui:Valmis ka võrguta}}. Salvestatud koopia on umbes 33 MB; see sisaldab IFC-mootorit, seega avanevad IFC-mudelid ka võrguta. [Töö võrguühenduseta](common:offline) selgitab salvestatud koopiaid üldiselt.

## Pilvesalvestus

Pilvesalvestus ei ole veel saadaval. Salvesta muudetud koopiad oma arvutisse või kontori failiserverisse, nagu iga muu faili puhul. Vaata [Sinu failid](common:your-files).
