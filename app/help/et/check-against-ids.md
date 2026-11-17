---
title: Mudeli kontrollimine kliendi IDS-i vastu
summary: Laadi sulle antud .ids-fail ja vaata enne IFC-faili üleandmist vahekaardil Probleemid kõiki elemente, mis sellele ei vasta.
keywords: ids, teabe edastamise spetsifikatsioon, buildingsmart, nõuded, üleandmine, kontroll, valideerimine, qa, eir, bep, omadus, klassifikatsioon, materjal, hankimine
from: 7b960222
---

## Mida sa teed

IDS (Information Delivery Specification, buildingSMART-i standard) on loend sellest, mida IFC peab sisaldama: millised klassid, millised omadused millise väärtusega, klassifikatsioonid, materjalid ning kus asjad peavad asuma. Kliendid ja riigihanked saadavad selle töö juurde. BimCraft kontrollib avatud IFC-mudelit selle vastu ja loetleb kõik elemendid, mis nõuetest puudu jäävad.

## Sammud

1. Ava IFC-mudel.
2. Ava vasakpoolsel paneelil {{ui:Kontrolli IDS-i vastu}}, jaotises {{ui:Mudeli kontrollid}}, või vali menüüst {{ui:Kontrolli IDS-i vastu…}} (sõltuvalt sinu menüü stiilist).
3. Klõpsa {{ui:Laadi .ids-fail…}} ja vali fail. Midagi ei laadita üles.
4. Loe tulemus: iga spetsifikatsioon koos märgiga {{ui:Läbi}} või {{ui:Ebaõnnestus}} ja selle, mitme elemendi kohta see kehtib.
5. Ava Probleemid ({{key:Ctrl+Shift+M}}) ja klõpsa ebaõnnestumisel, et valida element ja suumida sellele.

## Mida peaksid nägema

- Üks hoiatus iga elemendi ja nõude kohta, mida see ei täida, koos spetsifikatsiooni nimega, mida IDS nõuab ja mida elemendil on.
- Nõutav spetsifikatsioon, millele mudelis miski ei vasta, on eraldi üks hoiatus.
- Kontrolliaruanne (Probleemides) algab IDS-iga: selle pealkiri, versioon, autor ning iga spetsifikatsiooni rakendatud, läbitud ja ebaõnnestunud elementide arv.

## Hea teada

- IFC hoiab ainult viidet IDS-ile (nimi, pealkiri, versioon ja räsi), mitte IDS-i ennast: kliendi IDS võib olla konfidentsiaalne ning IFC läheb teistele inimestele. IDS jääb sellesse brauserisse mudeli kõrvale, nii et kui avad salvestatud IFC-faili siin uuesti, kontrollitakse seda uuesti. IDS-i laadimine või unustamine on üks samm, mida saab tagasi võtta.
- Kui fail avatakse teises arvutis või teises brauseris, kuvab Probleemid märkuse, et IDS-i ei leitud: laadi see uuesti, et kontrollida.
- Et saata IDS koos IFC-ga, lülita enne laadimist sisse {{ui:Hoia IDS IFC sees}} sätetes, vahelehel BimCraft.
- Iga muudatus, tagasivõtmine ja taastamine kontrollitakse hiljem uuesti.
- Väärtusi võrreldakse IDS-i viisil: tekst täpselt (suurtähed loevad), arvud SI-ühikutes väikese veapiiriga (pikkused meetrites, seega teisendatakse millimeetrites mudel esmalt).
- Spetsifikatsioon, mis on kirjutatud teise IFC-versiooni jaoks (näiteks IFC2X3, kui mudel on IFC4), kontrollitakse ikka; tulemus ütleb seda.
- Kui IDS-failis on vead, mida IDS-i audit märgiks, loetleb dialoog need; nende sees olevad spetsifikatsioonid ebaõnnestuvad.
- Ebaõnnestumise võid aktsepteerida koos põhjusega nagu iga probleemi. See jääb aktsepteerituks, kuni elemendi väärtused jäävad samaks.

- Mustrid IDS-is loetakse kogu väärtusena. `^` alguses ja `$` lõpus võetakse samuti kui "kogu väärtus", nagu enamik IDS-faile neid mõeldud on.

## Edasi

- [Kontrolli mudelit levinud probleemide suhtes](topic:model-checks)
- [Muuda seina või ust](topic:change-a-wall-or-door)
