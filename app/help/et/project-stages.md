---
title: Projekti etapid lähteülesandest objektijuhisteni
summary: Alusta lähteülesandest sihtpindadega ja vaata joonistamise ajal, kas need täituvad; võrdle selle järgi kontseptsioonivariante, seo spetsifikatsioonid ja detailid tüüpidega, vaata üle tootmisjoonised ning registreeri objektijuhised elementide kohta.
keywords: lähteülesanne, ruumiloend, sihtpind, täidetud, puudu, ruumid, kontseptsioonivariandid, variandid, mahtlahendus, eelarve, spetsifikatsioon, spets, detail, ehitusdetail, tüüp, tootmisjoonis, ülevaatus, kinnita, esita uuesti, objektijuhis, redaktsioon, põhjus, objekt, etapp
from: 0a49b852
---

## Mida sa teed

Töötle projekti etappe ühes paneelis: koosta kliendi lähteülesanne ruumidena koos sihtpindadega, võrdle kontseptsioonivariante selle järgi, hoia spetsifikatsioon ja ehitusdetailid nende tüüpidega, vaata üle tootmisjoonised, kui need tulevad tagasi tööstustelt, ning registreeri objektijuhised elementide kohta, mida need muudavad.

## Sammud

1. Ava vasakpoolses paneelis **Projekti etapid** ja seejärel **Lähteülesanne**.
2. Kleebi ruumid, üks rida ühe ruumi kohta: `Living; 1; 30` tähendab ühte ruumi pinnaga 30 m². Arvu võib jätta välja. Vali **Lisa ruumid**. Täida klient, asukoht, eelarve, tolerants ja ajakava ning vali **Salvesta lähteülesanne**.
3. Joonista seinad. Iga seinte moodustatud ruum, millel on lähteülesande ruumi nimi (sellele järgnev number, nagu „Magamistuba 2“, ei lähe arvesse), arvestatakse. **Ruumiloend** näitab olekut **Täidetud**, **Puudu**, **Üle** või **Joonistamata** ning erinevust m² ühikutes.
4. Uue projekti selle meetodiga alustamiseks vali **Alusta uut projekti lähteülesandest**. Avaneb uus mudel, mille aluseks on üks sinu salvestatud mallidest, kui valid mõne, ning lähteülesanne lisatakse selle esimese sammuna.
5. Ava **Variandid lähteülesande järgi**. Iga mudelis hoitud mahtlahendus joonistatakse ühel mõõtkaval koos brutopinnaga, lähteülesande nõudega ja sellega, mitu lähteülesande ruumi sinna mahub. **Paiguta lähteülesanne siia** paigutab ruumid variandi korrustele, kõige madalamalt alustades, ja ütleb, mis ei mahu ära. Maksumus tuleb ainult projekti hinnatabelist; kui vastavat rida pole, on kirjas „Hind puudub“.
6. Ava **Tüübid, spetsifikatsioonid ja detailid**. Iga seina-, ukse-, akna- ja põrandatüüp näitab, kas sellel on spetsifikatsioonitekst, seotud detailid ning kohad, kus spetsifikatsioon, loendid ja lehed ei ühti. **Seo detail** lisab DetailCraft- või CadCraft-faili, aadressi või selle mudeli lehe.
7. Ava **Tootmisjoonised**. Vali mudelist elemendid, mida tootmisjoonis katab, ja vali **Võta vastu**. Kasuta **Kinnita**, **Märkustega** või **Muuda** koos ülevaataja nime ja märkusega. **Esitatud uuesti** loob sama kirje järgmise redaktsiooni ja säilitab ülevaatuse ajaloo. Olek kirjutatakse ka igale elemendile.
8. Ava **Objektijuhised**. Vali elemendid, too oma sõnadega välja põhjus ning mõju maksumusele ja ajale ning vali **Registreeri see**. Pärast probleemi registreerimist näitab **Selgita selle probleemi järel tehtud muudatusi**, millised muudetud elemendid on mingi juhisega kaetud ja millised muutusid ilma registreerimata.

## Hea teada

- Iga samm on võimalik tagasi võtta käsuga **Võta tagasi**. Midagi ei keelata: lähteülesande nõuet mittetäitev ruum, oma tekstiga mittevastav tüüp või hilinenud tootmisjoonis on hoiatus või märkus paneelis **Probleemid**.
- Lähteülesande ruumid on ruumid ilma seinteta. Neil on sihtväärtus, mitte joonistatud pind, seega ei loe ruumiloendid ega COBie neid joonistatud ruumidena.
- Paigutus paigutab ruumid korrustele ainult pinna järgi. Seinu see ei joonista.
- Spetsifikatsioonitekst kirjutatakse dokumentides, mis koostatakse mudelist. Siin võrreldakse seda ainult mudeli enda mõõtudega; standardi punkti ei kirjutata sinu eest kunagi.
- Tootmisjoonised ja objektijuhised on kirjed samas ajaloos, mis paneelil **Probleemid ja redaktsioonid**, seega näevad mõlemad paneelid neid.
- Tootmisjoonise olek on iga elemendi omadus (`CadCraft_ShopDrawing`) ja objektijuhis on `CadCraft_SiteInstruction`, seega saab neid kasutada funktsioonides **Otsi** ja **Värvi omaduse järgi**.
- Objektil kontrollitud märgised (etapp 7) on omaduste all jaotises **Kontroll**.
