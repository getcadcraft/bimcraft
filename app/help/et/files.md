---
title: BimCraftis avatavad ja salvestatavad failid
summary: Iga vorming, mida BimCraft avab, mida ta säilitab, mida salvestab, kuhu salvestatud failid lähevad ning mis muutub brauseriti ja võrguühenduseta olekus.
keywords: vormingud, ava, salvesta, ekspordi, laadi alla, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, üleslaadimine, privaatsus, faili suurus
from: a1f0161b
---

BimCraft loeb faile sinu arvutist brauseriaknas. **Midagi ei laadita üles** CadCraftile ega kellelegi teisele. Kui salvestad, annab BimCraft brauserile uue faili allalaadimiseks. Ta ei kirjuta kunagi üle faili, mille avasid.

## Mida ta avab

| Vorming | Laiendid | Mida saad |
|---|---|---|
| IFC | `.ifc` | Mudel 3D-s, korrused, elementide arvud ja iga elemendi omadused. Nimesid, silte ja üksikuid omaduste väärtusi saab muuta. |
| Projekti- ja perefailid | `.rvt` `.rfa` `.rte` `.rft` | Failikaart: väljalase, versioon, töö jagamise režiim, projektiinfo, pereparameetrid, lingitud failid ja eelvaatepilt. 3D-d ei ole. |
| DWG | `.dwg` | Joonis 2D-s: mudeliruum, iga leht, kihid, lingitud joonised, pildid ja prindivaade. Mudeliruum ka 3D-s. Kontrollitud on AutoCAD 2000 kuni 2018 vormingud. |
| DXF | `.dxf` | Sama mis DWG. |
| STEP | `.step` `.stp` | Detail, seade või tarnija mudel (AP203, AP214, AP242) 3D-s: iga tahke saab ühe elemendi (hoone elemendi proxy) väikeses IFC-mudelis ühel korrusel, loetud kolmnurkadena oma tõelises suuruses, koost kõigi detailidega seal, kus fail need paigutab. Edasi töötab see nagu iga IFC: omadused, lõiked, mõõt, salvesta IFC-na. Värve ja koostepuud ei loeta. |
| Punktipilved | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skaneering 3D-vaates mudeli kõrval või eraldi: vaata [Näita punktipilve mudeli kõrval](topic:point-clouds). |
| Projektipakk | `.ccbundle.zip` | Mudel koos vaadete, paigutuste ja omaduste rühmadega: vaata [Ava projektipakk](topic:open-project-bundle). |
| Kaust | mis tahes | Aruanne iga mudeli, joonise ja projektipaki kohta selles. Iga aruandes olev IFC, mudel, joonis või pakk avaneb ühe klõpsuga. |

[Mida BimCraft igast vormingust loeb](topic:file-formats) selgitab üksikasjalikumalt.

BimCraft otsustab, mis fail on, vaadates nii selle esimesi baite kui ka nime. Seega avaneb ebatavalise laiendiga projektifail ikka failikaardina.

### Ei avane

- `.ifczip` ja `.ifcxml`: BimCraft ütleb: „.ifczip'i ei toetata veel. Salvesta või ekspordi mudel tavalise .ifc failina.“ Paki `.ifczip` lahti (see sisaldab tavalist `.ifc`-faili) või ekspordi uuesti tavalise IFC-na.
- DGN-joonised on loetletud kausta aruandes, kuid need ei avane.
- PDF-id, pildid ja kontoritööfailid ei avane iseseisvalt. Pilte kasutatakse DWG sees piltidena. {{ui:Versioon}} › {{ui:Joonisest…}} muudab PDF-i või skaneeritud plaani leheküljed seinteks: vaata [Seinad plaanikomplektist](topic:walls-from-plans).

## Mida ta salvestab

| Sa klõpsad | Saad | Kus |
|---|---|---|
| {{ui:Salvesta IFC-na}} | Uus IFC-fail sinu muudatustega, nimega "*algne nimi* (edited).ifc" | Sinu brauseri allalaadimiste kaust |
| {{ui:Laadi CSV alla}} seadmete loendis | CSV loendis olevatest kirjetest, nimega "*drawing name* equipment.csv" | Sinu brauseri allalaadimiste kaust |

Muu salvestatakse seal, kus see tehakse. Igaüks on oma teemas: {{ui:USD}} ([Ekspordi mudel USD-na](topic:usd)), .glb {{ui:Renderdamiseks}}, renderdatud pildid, lehed ja plaanid PDF-ina, loendid ja nimekirjad CSV-na, BCF-probleemid, COBie-tabel, perefailid ja registreeritud skannid LAS- või E57-vormingus. BimCraft ei salvesta DWG-, DXF- ega projektifaile ning ta ei muuda kunagi faile, mille avasid.

:::chromium
Chrome ja Edge salvestavad allalaadimised kausta, mis on nende sätetes määratud, tavaliselt Allalaadimised. Selleks, et küsida iga kord, kuhu salvestada, lülita brauseri allalaadimise sätetes sisse valik „Enne allalaadimist küsi, kuhu iga fail salvestada“.
:::

:::firefox
Firefox salvestab Allalaadimiste kausta, välja arvatud juhul, kui seadsid sätetes valiku „Always ask you where to save files“ (küsi alati, kuhu failid salvestada).
:::

:::safari
Safari salvestab kausta Allalaadimised, välja arvatud juhul, kui valid **Safari > Sätted > Üldine > Faili allalaadimise asukoht** all mõne muu kausta.
:::

## Salvestamine teist korda

Iga salvestamine laadib alla kogu mudeli koos **kõigi muudatustega alates avamisest**, mitte ainult pärast viimast salvestust. {{ui:Muudatused}} loend algab pärast iga salvestust uuesti tühjana, seega ei saa salvestuse taha tagasi võtta. Algusest alustamiseks ava originaalfail uuesti.

## Suured failid ja mälu

- **IFC**-failid loetakse täielikult vahelehe mällu ning 3D-geomeetria võtab peale veel mälu. Mitme sadade megabaitide mudel võib sülearvutile liiga olla. Üle 1.5 miljoni kolmnurga lülitatakse servad mälu säästmiseks välja („Edges are off for very large models“ ehk „Servad on väga suurte mudelite puhul välja lülitatud“).
- **Projektifailid** ei loeta täielikult. BimCraft loeb ainult väikseid osi, mida vajab, umbes 40 KB kuni 100 KB sõltumata faili suurusest. Nii avaneb 500 MB keskmudel võrgukettal hetkega.
- **DWG ja DXF** failid loetakse täielikult. Väga suur joonis näitab teksti „This drawing is very large; only part of it is shown.“ (Joonis on väga suur; näidatakse ainult osa sellest.)
- **Kaustu** avatakse kuni 20 000 failiga. Loetakse ainult need paar kilobaiti, mida iga mudelikaart vajab.

Vaata lisaks [Brauserid, seadmed ja mälu](topic:platforms).

## Võrgus ja võrguühenduseta

Faili avamiseks ei ole kunagi internetti vaja. Üks lugeja laaditakse saidilt esimest korda, kui seda vaja läheb: IFC-mootor, esimesel korral, kui avad IFC-mudeli („IFC-mootori käivitamine…“). DWG- ja DXF-lugejad on rakenduse osad.

:::offline
Oled võrguühenduseta. Kui rakenduse ribal olev nupp ütleb {{ui:Valmis ka võrguta}}, avanevad kõik vormingud nagu tavaliselt. Kui mitte, ei saa IFC-mudelit avada enne, kui ühendus taastub, välja arvatud juhul, kui see on sellel vahelehel juba avatud. Vaata [Võrgus ja võrguühenduseta](topic:online-offline).
:::

Et kasutada BimCraftit ilma ühenduseta, klõpsa rakenduse ribal {{ui:Salvesta võrguks}}, kui oled võrgus, ja oota {{ui:Valmis ka võrguta}}. Salvestatud koopia on umbes 33 MB. See sisaldab IFC-mootorit, nii et IFC-mudelid avanevad ka võrguta. [Töö võrguühenduseta](common:offline) selgitab salvestatud koopiaid üldiselt.

## Pilvesalvestus

Pilvesalvestus ei ole veel saadaval. Salvesta muudetud koopiad oma arvutisse või kontori failiserverisse, nagu iga muu faili. Vaata [Sinu failid](common:your-files).
