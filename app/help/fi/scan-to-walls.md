---
title: Seinät ja ovet puhelimen tai laserskannauksesta
summary: Muuta huoneen skannaus ehdotetuiksi seinimiksi, oviksi ja huoneiksi, jotka hyväksyt yksi kerrallaan.
keywords: skannaus, puhelinskannaus, lidar, pistepilvi, seinät skannauksesta, ovet skannauksesta, huoneskannaus, ply, e57, las, obj, ehdota
from: a4ef0f10
---

## Mitä se tekee

Kun skannaus on auki (pistepilvi, kuten PLY, E57 tai LAS, tai verkko, kuten OBJ), BimCraft leikkaa skannauksen pohjakuvan korkeudelta, kääntää sen suoraksi rakennukseen nähden ja etsii pitkiä, ohuita pistejonoja: ne ovat seiniä. Yhden suoran kahden jonon välinen, oven leveyden verran oleva aukko muuttuu yhdeksi seinäksi, jossa on ovi. Tilan sulkevat seinät muodostavat huoneen.

Mitään ei piirretä ennen hyväksymistä. Seinät ja ovet tulevat ehdotuslistana (ne ovat Ehdota-tilan muutoksia): säilytä oikeat, hylkää muut, ja kaikki säilytetty piirretään yhdessä kumoamisvaiheessa. Huoneet ilmestyvät itsestään.

## Mitä se tarkistaa

Sulkeutumattomat seinät, seinäjonot, jotka ovat lyhyempiä kuin seinän paksuus, ja oven kokoinen aukko ilman ympäröivää seinää ilmoitetaan ongelmina sijaintinsa kanssa, jotta voit tarkastella skannausta siinä kohdassa.

## Vahvistamaton, kunnes tarkistettu

Skannauksesta hyväksytyt seinät, ovet ja huoneet on merkitty vahvistamattomiksi: pohjakuvassa on katkoviivalaatikko ja ”?”-merkki, kunnes merkitset ne tarkistetuiksi. Katso [Merkitse elementit tarkistetuiksi tai kenttävahvistetuiksi](topic:verification).

## Mitä se ei voi tehdä

- Se löytää seinät, jotka kulkevat kahteen kohtisuoraan suuntaan. Vinoa tai kaarevaa seinää ei löydetä.
- Yksi kerros kerrallaan. Ikkunoita ei löydetä (ikkuna on aukko vain, kun leikkaus on ikkunalaudan korkeudella).
- Sitä on kokeiltu luoduilla huoneskannauksilla ja verkoilla, ei vielä oikeilla puhelinskannauksilla. Ei tiedetä, miten hyvin se toimii oikeassa skannauksessa (pitkän kävelyn aikana kertyvä siirtymä, seiniä vasten olevat huonekalut, lasi, auki olevat ovet), ja sen säätäminen oikeilla skannauksilla on seuraava vaihe. Tarkista jokainen ehdotus skannausta vasten ennen hyväksymistä.
