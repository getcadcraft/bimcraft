---
title: Ruumi kajanemisaja kontrollimine ja selle kuulamine
summary: Kajanemisaeg oktaavribade kaupa iga ruumi kohta (Sabine ja Eyring) selle mõõtmete ja viimistluste järgi, sinu enda sihtväärtus ning hääl, plaks või muusika, mis esitatakse ruumi arvutatud impulsivastuse kaudu.
keywords: akustika, kajanemine, kajanemisaeg, rt60, sabine, eyring, neeldumine, kaja, heli, kuulamine, impulsivastus, kõne, klassiruum, kontor, vaip, lae plaat, müra
from: 16996cbb
---

Vasakpoolse paneeli jaotis {{ui:Ruumi akustika}} arvutab, kui kaua heli igas ruumis kõlab. See loeb iga ruumi põrandapinna, kõrguse, seinad, uksed ja aknad avatud IFC-mudelist. Mudelit ei muudeta.

## Vali viimistlused

Kui mudel ütleb, mis pinda katab, loeb ruum selle sisse: iga seina tüübi sisemise kihi (kipsi, krohvi, tellise, betooni ja plokkide puhul on materjal teada), põranda liigi (puit või betoon) ning selle, kas lagi on plaaditud. Iga valiku kõrval olev silt ütleb, kas see pärineb mudelist, on vaikeväärtus või sinu valik; muu viimistluse valimine asendab selle. Mida mudel ei ütle, jääb vaikeväärtuseks. Neeldumistegurid on **tüüpilised avaldatud väärtused**; kui sul on toote katsetulemused, asenda need nendega. Sisesta **sihtväärtus** (pikim keskmise sagedusega kajanemisaeg, mida soovid) ning iga sellest ületav ruum on hoiatus koos neeldumisega, mis selle alla toob.

## Tabeli lugemine

Kajanemisaeg on esitatud vahemikus 125 Hz kuni 4 kHz. Sabine sobib elavatele ruumidele ja Eyring surnud ruumidele; rida, mis on märgitud *Kasutatud*, kasutab Eyringi, kui keskmine neeldumine on üle 0.2. Õhu neeldumine on arvesse võetud (see lühendab suurte ruumide kõrgeid ribasid). See on statistiline mudel: eeldatakse, et heli levib ühtlaselt, seega on pikad või lamedad ning väga väikesed ruumid ligikaudsed, ning mööblit, inimesi ja avatud uksi ei arvestata.

## Kuulamine

{{ui:Esita selles ruumis}} esitab hääle (tehtud siin), plaksu, näpitud noodid või **sinu enda helifaili** (see jääb sinu arvutisse) läbi ruumi jaoks arvutatud impulsivastuse: otsene heli, selle suuruse kasti esimesed peegeldused ja saba, mis taandub iga riba ruumi enda kajanemisajaga. {{ui:Esita kuivalt}} esitab sama heli samal tasemel ilma ruumita. Impulsivastuse või ruumis oleva heli saad salvestada WAV-failidena. See kõlab nagu sama suuruse ja viimistlusega ruum, mitte nagu ükski päris ruum.

## Inimesed ja mööbel

Sisesta **inimeste arv selles ruumis**, et lisada nende neeldumine. Mudelis olev mööbel (diivanid, voodid, toolid, lauad, riidekapid, nime järgi leitud) lisab oma neeldumise. Arvud on karmid planeerimisväärtused, ümardatud; olulise ruumi puhul asenda need mõõtmistega.

## Allikas ja kuulaja

Jaotises {{ui:Allikas ja kuulaja}} vajuta {{ui:Aseta allikas}} või {{ui:Aseta kuulaja}} ja klikki ruumi plaanil. Esitatud heli kuuldakse siis sealt: otsene heli saabub pärast vahemaad ning kaja osa on selle vahemaa jaoks sobival tasemel. Tühjenda mõlemad, et naasta vahemaa kasti juurde.

## Ebaühtlane neeldumine ja ruumi moodid

Jaotises {{ui:Ebaühtlane neeldumine (kastikujuline ruum)}} sisesta ruum kastina ning vali selle põrand, lagi ja seinte viimistlused. Tabel lisab Sabine'ile ja Eyringile Fitzroy ja Arau-Puchadesi: need käsitlevad kolme vastasasetsevate pindade paari eraldi, nii et vaipkattega ruumi kõva lage ei loeta liiga lühikeseks. Kui paarid erinevad palju, ütleb märkus, millisele usaldada. Tabeli all loetleb **Ruumi moodid** kasti madalaimad seisulained ning sageduse, millest allpool on ruumil eraldi moodid, mitte ühtlane heliväli. Need on kastikujulise ruumi ennustused, planeerimisabi, mitte mõõtmine.

## Ühikud

Ruumide pindalad, kõrgused, mahud ja vahemaad kuvatakse valitud {{ui:Ühikud}}-s (ruut- ja kuupjalad, tollid, millimeetrid, sentimeetrid või meetrid). Arvutus ise jääb SI-ühikutesse; muutub ainult kuvamine. Ajad (sekundites), sagedused ja tasemed jäävad samaks.
