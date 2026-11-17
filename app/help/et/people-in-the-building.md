---
title: Inimeste liikumine läbi hoone
summary: Evakuatsioon või tavapärane päeva saabumine läbi su ruumide, uste ja trepide, järjekordadega kohtades, kus hoone kitseneb, iga ruumi pikim tee väljapääsuni ja tulemused jaotises Probleemid. Jämedat rahvamassi mudel projekteerimisotsuste jaoks, mitte tuletõrjeohutuse tunnistus.
keywords: inimesed, evakuatsioon, väljapääs, pääs, läbitee pikkus, järjekord, rahvahulk, voog, ukse laius, trepp, saabumised, kitsaskoht, simulatsioon, viibijad, jalakäija, mis-kui, blokeeritud uks
from: 84aa8920
---

Jaotis {{ui:Inimesed hoones}} vasakul paneelil viib inimesed läbi avatud IFC-mudeli ruumide, uste ja trepi. Mudelis ei muudeta midagi ja midagi ei laadita üles.

:::warning
See on **projekteerimisabi, mitte tuletõrjeohutuse tunnistus**. See ei tea tulest, suitsust, paanikast, liikumispuudest ega sellest, mida nõue sinult nõuab. Piirangud on sinu: pikim tee väljapääsuni ja saadaolev aeg on numbrid, mille sisestad ise, ükski neist ei ole eeldatud.
:::

## Käivita

1. Ava mudel, kus on suletud ruumid ja uksed. Uks, millel on ruum ainult ühel pool, on väljapääs; uks kahe ruumi vahel ühendab need; trepp ühendab ruume oma otstes.
2. Vali **Evakuatsioon** (kõik kõnnivad väljapääsuni), **Saabumised** (kõik tulevad sisse ja kõnnivad ruumi) või **Vahetus** (ruumides viibijad lahkuvad, samal ajal tuleb sisse sama palju), ning põrandapind inimese kohta. Ruumid, mis on nimetatud koridori, trepi, fuajee või WC järgi, ei hoia kedagi.
3. Klõpsa {{ui:Käivita}}. Saad aja, millal viimane inimene on väljas (ja millal pool ning üheksa kümnendikku on), iga ukse ja trepi järjekorra, ruumi pikima kõnnitee ja plaani, mis mängib käivitust.

## Mis-kui

Märgi {{ui:Suletud}} tabelis uksel ja käivita uuesti: inimesed leiavad teise tee või ruumid, millel ei ole väljapääsu, loetletakse vigadena. Kaks korda laiem uks tühjendab ruumi palju kiiremini; tabel näitab, kus on järjekorrad.

## Kuidas see töötab

Iga ruum on ruudustik, nii et inimesed kõnnivad nurkade ümber, mitte läbi seinte. Kiirus langeb, kui ruum täitub (S = 1.4 (1 − 0.266 D) m/s, D inimestes ruutmeetri kohta). Uks laseb läbi 1.3 inimest sekundis iga meetri laiuse kohta, millest on maha arvatud 150 mm igal pool; trepp 1.0 ja aeglasem kõndimine. Inimesed ootavad esmatulija järjekorras. Käivituse number kordab täpselt sama käivitust.

Assistent saab sama asja käivitada: palu evakuatsiooni või iga ruumi pikimat kõnnitee väljapääsuni.

## Inimesed igas ruumis

Ava {{ui:Inimesed igas ruumis}}, et sisestada number ükskõik millise ruumi jaoks. Tühi lahter kasutab põrandapinna arvu (näidatud halliga); 0 tühjendab ruumi. Sinu numbreid kasutatakse käivituses ja need hoitakse selles brauseris.

## Vastuvoolu uste juures

Jaotises **Vahetus** kohtuvad väljuvad ja sisenevad inimesed samadel ustel. Kui uks lubab kellelgi minna vastassuunas vahetult viimase inimese järel, säilitab ta osa oma kiirusest (siin 0.8; see on eeldus, sest avaldatud väärtused erinevad), ja tabel loeb suunamuutused. Uks, mis muudab suunda sageli, on jaotises Probleemid märkusena.

## Trepid ja maandumised

Iga trepi maandumine maksab kõndijale ühe sekundi pööramise eest (eeldus). Sirge trepp ei too kaasa ühtegi; L- või U-kujuline trepp üht. Trepi kiirus tuleb ikka trepi astme laiusest.

## 3D-vaates

Märgi {{ui:Näita inimesi 3D-vaates}} ja kõndijad ilmuvad mudelisse kujudena, värvituna selle järgi, mida nad teevad, ja liiguvad, kui mängid käivitust. Mudelisse midagi ei lisata.
