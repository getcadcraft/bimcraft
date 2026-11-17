---
title: Kaustaraport: rollid, olekud ja lingid
summary: Iga silt kaustaraportis, mida see tähendab ja kuidas valitakse soovitus „Alusta siit”.
keywords: kaustaraport, rollid, olek, täielik, poolik, loetamatu, lingitud, taust, stardifail, keskne, perekond, ainult varukoopiad, alusta siit, lingi olek
from: b35bdd10
---

## Koopia olek

Iga mudeli koopia, nii põhifail kui ka nummerdatud varukoopiad, saab päise kontrolli.

| Silt | Tähendus |
|---|---|
| **Täielik** | Faili päis ja register mahuvad faili sisse |
| **Poolik** | Fail on lühem kui oma register ütleb: see katkes kopeerimise, üleslaadimise või sünkroonimise ajal või on pilvefail, mis on endiselt „ainult võrgus” |
| **Loetamatu** | Fail ei ole korrektne liitfail või seda ei saanud lugeda |

Veerus **Olek** näitab mudel **Täielik**, kollase „*n* poolik”, kui vähemalt üks koopia on halb, kuid mõni teine on terve, või punase **Poolik**, kui ükski koopia pole terve.

## Varukoopiad

Failid nimega `Nimi.0001.rvt`, `Nimi.0002.rvt` jne on nummerdatud varukoopiad failist `Nimi.rvt`. Need on rühmitatud oma mudeli alla, uusimad ees, jaotises **Kõik … koopiad**. Kaart loetakse põhifailist, kui see on täielik, muidu uusimast täielikust varukoopiast („uusim täielik”).

## Rollid

Kuvatakse mudeli nime all kaldkirjas.

| Roll | Tähendus |
|---|---|
| Lingitud *teise mudeli* poolt: taust | Kaustas on teine mudel, mis seda linkib, seega on see tõenäoliselt kellegi teise taustmudel, näiteks konsultandi mudel |
| Stardi- või nimetu fail | Nimi nagu Blank, Template, Default, Untitled või Project1: lähtepunkt või fail, mida pole korralikult nimetatud |
| Keskmudel | Töölõigatud keskmudel. Töö tehakse kohalikus koopias, mitte siin |
| Perekond (detail) | `.rfa` või `.rft` fail: komponent, mitte projekt |
| Ainult varukoopiad | Põhifail on kadunud ja alles on ainult nummerdatud varukoopiad |

## Kuidas valitakse „Alusta siit”

BimCraft rakendab arutluskäiku, nagu kogenud kasutaja teeks:

1. Kandidaadid on loetavad projektifailid (`.rvt`, `.rte`), mida teine mudel ei lingi ega mis pole stardifailid.
2. Keskmudelid ja ainult varukoopiatega mudelid loevad ainult siis, kui paremat pole.
3. Kandidaatidest võidab hiljuti viimati salvestatud.

Kastis on loetletud põhjused ning hoiatatakse, kui ilmselge valik on kahjustatud, kui teised mudelid on taustamudelid ja kui valik on keskmudel. See on parim hinnang; kontrolli seda selle inimesega, kes projektiga viimati töötas.

## Lingi olek

| Silt | Tähendus |
|---|---|
| **Selles kaustas** | Leitud salvestatud suhtelisel teel või salvestatud täieliku tee lõpust kausta sees |
| **Leitud sama nimega** | Ei ole oma teel, kuid kaustas on sama nimega fail. Kontrolli, et see on õige |
| **Teegifail** | Märksõnade või koostekoodide tabel. Need tulevad programmiga igas arvutis kaasa |
| **Pole selles kaustas** | Ei leitud kausta seest kuskilt |

Veerg **Leitud lingid** jaotises **Mudelid** näitab, mitu mudeli lingist leiti, võrreldes nendega, mida kaustas oodati (teegifaile ei loeta).

## Kõrvale pandud

| Rida | Tähendus |
|---|---|
| Revit’i hooldekaustad (ei loeta) | Kaustad `*_backup`, `*_log` ja `Revit_temp`, samuti peidetud kaustad ja `__MACOSX` |
| Lukk-, logi- ja varukoopia jäägid | Failid `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` ja `.slog` |
| Muud failid | Kõik muu (esimesed 40 on nimetatud) |
