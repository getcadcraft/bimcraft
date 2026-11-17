---
title: Etsi tiesi mallipuulla
summary: Selaa IFC-mallia projektin, tontin, rakennuksen, kerroksen ja tilan mukaan, elementit ryhmiteltyinä lajeittain. Rastiruutuja ruksaamalla näytät ja piilotat, rivin napsautus valitsee sen ja kaksoisnapsautus zoomaa siihen.
keywords: mallipuu, puu, rakenne, tilarakenne, selain, jäsennys, navigaattori, kerros, taso, lattia, tila, huone, ryhmä, luokka, piilota, näytä, valitse, valinta, zoomaa
from: 69de4ab7
---

## Mitä tehdään

Katso, miten malli on koostettu, ja pääse mihin tahansa elementtiin etsimättä sitä 3D-näkymästä: rakennus, sen kerrokset, kunkin kerroksen tilat ja niiden elementit ryhmiteltyinä lajeittain (seinät, ovet, laatat…).

## Vaiheet

1. Avaa IFC-malli. {{ui:Mallipuu}} vasemmalla avautuu kerroksiin asti.
2. Napsauta rivin vieressä olevaa nuolta avataksesi tai sulkeaksesi sen. Kerroksessa on ensin sen tilat, sitten sen elementit lajeittain ja niiden lukumäärä. Osista koostuva elementti, kuten portaat, sisältää omat osansa.
3. Poista rivin ruudun rasti piilottaaksesi kaikki siinä olevat; aseta rasti takaisin näyttääksesi ne uudelleen. Ruutu, jossa on viiva, tarkoittaa, että vain osa siinä olevista on näkyvissä.
4. Napsauta rivin nimeä valitaksesi, mitä se tarkoittaa: yksi elementti tai kaikki elementit ryhmässä, kerroksessa tai tilassa. {{key:Mod}}+napsautus lisää ne valintaan tai poistaa ne valinnasta.
5. Napsauta kerroksen, tilan tai rakennuksen vieressä olevaa {{ui:i}}-painiketta nähdäksesi sen omat ominaisuudet.
6. Kaksoisnapsauta riviä zoomataksesi siihen.

## Mitä pitäisi näkyä

- Kun valitset elementin 3D-näkymästä, puu avautuu siihen asti ja merkitsee sen.
- Piilotetut elementit ovat yliviivattuja. Puun ruudut ja {{ui:Näytä}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) toimivat yhdessä: katso [Piilota, eristä ja tee läpinäkyviksi elementit](topic:hide-and-isolate).
- Elementit, joita malli ei sijoita mihinkään kerrokseen, ovat lopussa ryhmässä **Ei tilarakenteessa**.
- Pitkä ryhmä näyttää kerrallaan 200 riviä; muut saat napsauttamalla sen alla olevaa **Näytä lisää**.

## Näppäimet

Kun rivin nimi on kohdistettuna: {{key:Up}} ja {{key:Down}} liikuttavat, {{key:Right}} avaa, {{key:Left}} sulkee tai siirtyy ylös, {{key:Space}} rastittaa ruudun ja {{key:Enter}} valitsee.

## Yleisiä virheitä

- **Kerroksen ruutu on rastitettu, mutta mitään ei näy.** {{ui:Kerrokset}}-luettelo puun alla kytkee kokonaisia kerroksia itsestään pois päältä: rastita myös se siellä.
- **Rivi ei valitse mitään.** Joillakin riveillä, kuten tyhjällä tilalla, ei ole piirrettäviä elementtejä; tilarivi kertoo sen.

## Seuraavaksi

- [Poista, leikkaa, kopioi ja liitä rakennuselementit](topic:edit-elements)
- [Näytä ja piilota kerrokset, tilat ja reunat](topic:storeys-and-spaces)
