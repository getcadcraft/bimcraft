---
title: Elektriplaan
summary: Paiguta pistikud, lülitid, valgustid, andurid, ühenduskarbid ja jaotuskilbid plaanile samade sümbolitega, mis CadCrafti Elektri lisandmoodulil, seosta lülitid valgustitega, mida nad juhivad, ja loetle seadmed ning vooluringid loenditesse.
keywords: elekter, elektriplaan, pistik, pistikupesa, kahekordne pistik, lüliti, vahelüliti, dimmer, valgusti, laevalgusti, sisseehitatud valgusti, allavalgusti, liikumisandur, ühenduskarp, kilp, jaotuskilp, vooluring, koormus, vatt, amper, lüliti juhe, seadmeloend, kilbiloend
from: f7de1947
---

## Mida te teete

Joonistate mudelisse maja elektriplaani: pistikud, lülitid ja kilbid seintele, valgustid ja andurid laelle. Iga seade on IFC-faili reaalne elektrielement oma märgise, vooluringi ja koormusega ning lülitid mäletavad valgusteid, mida nad juhivad.

## Seadmete paigutamine

1. Avage korrusel {{ui:Build}} ja valige {{ui:Electrical}}.
2. Valige seade: pistikud (toide, andmed, telefon, heli-video), lülitid ja andurid (samuti termostaat ja taimer), valgustid, detektorid ja alarmid, ühenduskarp, kilp või alamkilp.
3. Kui teate, sisestage **Circuit** (vooluring) (mis tahes nimi: 1, 2, A-3). Jätke **Mounting height** (paigalduskõrgus) tühjaks, et kasutada selle seadme tavapärast kõrgust.
4. Klõpsake plaanil. Pistikud, lülitid ja kilbid paigutatakse lähima seina pinnale, suunatuna ruumi poole; valgustid, andurid ja ühenduskarbid paigutatakse lakke seal, kuhu klõpsate.

Seadmed saavad märgise juba paigutamisel: **R** pistikutele, **S** lülititele, **L** valgustitele, **M** liikumisanduritele, **J** ühenduskarpidele, **P** kilpidele. Seintel olevad seadmed liiguvad koos seinaga, kui seina teisaldate.

Eelistate pilte sirvida? Avage {{ui:Build}}-menüüst **Sümbolipalett**, et leida seade nime järgi, tähistada kasutatavad tärniga ja paigutada see ühe klõpsuga: vt [Sümbolipalett](topic:symbol-palette).

## Lülitite seostamine valgustitega

1. Valige lüliti (või liikumisandur) ja klõpsake jaotises **Properties** nuppu **Link lights**.
2. Klõpsake igal valgustil, mida see sisse lülitab. Seotud valgusti uuesti klõpsates eemaldate seose.
3. Vajutage {{key:Enter}} või klõpsake nuppu **Done**.

Plaan joonistab lülitist igale temale valgustile katkendliku kõvera. Valgusti jaotis **Properties** näitab, millised lülitid seda sisse lülitavad.

## Seadet ümbritsev ruum

Iga seade teab, millises ruumis ta asub. Seinal olev seade on selles ruumis, mille poole ta on suunatud; laeseade on selles ruumis, mille kohal ta on. Jaotises Properties näidatakse **Room**, ning loendis **Electrical devices** on veerg **Room** (number ja nimi, näiteks 101 Kitchen).

Teave hoitakse ajakohasena: kui ruumi ümber nimetate või ümber nummerdate, seadet teisaldate või seina teisaldate, järgib ruum muutust samas sammus. Seade, mis asub hoone välispinnal või ruumina arvestamata alal, teatab, et ta ei asu ruumis.

Ruum kirjutatakse ka faili seadme atribuudikomplekti `CadCraft_Location` (Room, RoomNumber, RoomName), nii et otsingut, värvimist atribuudi järgi ja märgisteloendit saab kasutada ning ka mõni muu programm. Plaanisümbolid ja sümboliga seotud elemendid saavad sama komplekti; vt [Sümbolipalett](topic:symbol-palette).

## Laske assistendil need paigutada

Kui assistent on ühendatud (**Sätted › Assistendid**, muudatused lubatud), saate seadmeid kirjeldada sõnadega: „pane pistik iga 2 m järel elutoa seinte äärde, 300 mm kõrgusele, vooluringile 3“ või „lisa laevalgusti koos lülitiga ukse juurde“. Assistent kasutab viit tööriista: `devices_add`, `device_change`, `lights_set`, `devices_delete` ja `devices_list`. Need loovad samad seadmed, mida loob Elektri tööriist, samadele seintele ja samade märkide, vooluringide, koormuste ja kõrgustega, ning iga käsk on üks tagasivõtmise samm.

Seade ei saa kunagi liiki, mida Elektri tööriistal pole: tundmatu liik lükatakse tagasi ja assistent saab loendi. Pistik või lüliti peab asuma seina pinnast 600 mm piires, nagu klõpsamine, muidu käsk lükatakse tagasi ja midagi ei paigutata. Vaikekõrgused on millimeetrites: 300 pistikutele, 1100 lülititele; laeseade rippub laelt.

## Vaatamine ja muutmine

Valige seade, et muuta selle märki, vooluringi, koormust (vattides) ja paigalduskõrgust. Valige mitu, et panna need kõik korraga ühele vooluringile. Ühe eemaldamiseks vajutage {{key:Delete}}; kustutatud valgusti eemaldatakse tema lülititelt.

Jaotises {{ui:Schedules}} valige **Electrical devices**, et näha iga seadet koos korruse, vooluringi, koormuse, kõrguse ja valgustitega, mida iga lüliti sisse lülitab, või **Circuits**, et näha iga vooluringi seadmeid, koguskoormust ja voolu. Mõlemad on ka joonisekomplekti loendilehel: vt [Vaated, lõiked ja lehed](topic:sheets).

:::note
Paigalduskõrgused ja koormused on planeerimise vaikeväärtused (pistik 16" kõrgusel ja 200 W, lüliti 48" kõrgusel, laevalgusti 60 W), mitte projekt: elektrik või insener määrab vooluringid ja kontrollib normide nõuetele vastavust.
:::

:::tip
Sümbolid on samad, mida CadCrafti Elektri lisandmoodul joonistab paigaldusplaanidele, nii et mõlema rakenduse plaan loetakse ühtmoodi.
:::
