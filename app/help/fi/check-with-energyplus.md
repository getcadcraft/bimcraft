---
title: Tarkista lämmitys ja jäähdytys EnergyPlus-ohjelmalla
summary: Kirjoita malli EnergyPlus-tiedostona tai aja siitä selaimessa EnergyPlus-versio 26.2.0 ja vertaa sen mitoituskuormia pikaapuun lämmitykselle ja jäähdytykselle. Toinen mielipide varhaiseen suunnitteluun, ei määräystenmukaisuuslaskenta.
keywords: energyplus, energiasimulointi, mitoituspäivä, lämmityskuorma, jäähdytyskuorma, säätiedosto, epw, idf, lämpömassa, vuosienergia, simuloi
from: b82a5bf2
---

## Mitä teet

Paneeli **Tarkista EnergyPlus-ohjelmalla** kirjoittaa avoimen mallin EnergyPlus-syötetiedostona (IDF): yksi vyöhyke per huone, seinät, lattiat, katot ja ikkunat U-arvoineen, ilmanvaihto sekä ihanteellinen lämmitys ja jäähdytys. Voit aina **tallentaa tiedoston** ja ajaa sen omassa EnergyPlus-ohjelmassasi.

Jos asennat myös moottorin, paneeli voi simuloida paikan päällä ja luetella EnergyPlus-ohjelman mitoituslämmityksen ja -jäähdytyksen pikaapun rinnalla, huone huoneelta.

Tämä on suunnittelun apuväline. Energiamääräykset, sertifiointi ja luvat vaativat hyväksytyn työkalun ja sen vaatiman ilmastodatan, ja tuloksen tarkistaa henkilö, joka siitä vastaa.

## Aseta moottori

BimCraft ei sisällä EnergyPlus-ohjelmaa. Se on suuri WebAssembly-versio (noin 6 MB pakattuna sekä 4.6 MB datatiedosto), joten isännöit sen itse ja kirjoitat sen osoitteen paneeliin. Sivu lataa sen vasta, kun painat simulointipainiketta, ei koskaan käynnistyksen yhteydessä. Osoitteen on oltava https, polku tällä sivustolla tai localhost.

## Mitoituspäivät tai vuosi

- **Simuloi mitoituspäivät** ei tarvitse säätiedostoa. Se ajaa kylmän talvipäivän ilman aurinkoa ja kuuman, kirkkaan kesäpäivän Päivänvalo-välilehden lämmitys- ja jäähdytyssyötteiden lämpötiloilla ja raportoi jokaisen huoneen kuorman wateina.
- **Simuloi vuosi** tarvitsee valitsemasi säätiedoston EPW-muodossa. Se lisää ihmiset, valot ja laitteet samoista syötteistä (aina päällä, koska aikataulua ei keksitä) ja raportoi jokaisen huoneen lämmitys- ja jäähdytysenergian kWh-yksikössä. Säätiedostoilla on omat lisenssinsä, joten käytä sellaista, jonka käyttöön sinulla on oikeus.

## Lämpömassa

Valitse **Anna seinille, joilla on tunnetut kerrokset, lämpömassa**, niin seinät, katot ja lattiat, joiden materiaalikerrokset tunnetaan, kirjoitetaan kerros kerrokselta. Tiheys ja ominaislämpö otetaan lyhyestä taulukosta tyypillisiä arvoja materiaalin nimen perusteella. Kerrokset otetaan ulkoa sisään tiedoston luettelemassa järjestyksessä. Elementit ilman kerroksia pysyvät U-arvossaan ilman massaa.

## Vertailun lukeminen

Kaksi menetelmää vastaavat hieman eri kysymyksiin. Pikaapu pitää jokaisen elementin; EnergyPlus-tiedosto keskiarvoistaa kunkin huoneen U-arvot pintatyypin mukaan. Yli 15 %:n ero huoneen mitoituslämmityksessä luetellaan huomautuksena ⚠-paneelissa molempine lukuineen. Jäähdytys eroaa suunnittelun vuoksi enemmän: pikaapu laskee huipun auringosta yhdeltä päivältä, ja EnergyPlus mitoittaa omalla mitoituspäivällään.
