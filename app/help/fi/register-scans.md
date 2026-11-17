---
title: Rekisteröi useita skannauksia yhdeksi
summary: Aseta eri paikoista otetut skannaukset yhteiseen koordinaatistoon valittujen pistepariensa tai kirjoitettujen kohteiden avulla, hienosäädä ICP:llä, tallenna rekisteröinti projektina ja vie rekisteröity pilvi LAS- tai E57-muodossa.
keywords: rekisteröinti, rekisteröi, skannaukset, pistepilvi, icp, iteratiivinen lähin piste, kohteet, pistepari, jäykkä muunnos, kohdistus, yhdistä, e57, las, skannauksesta BIM:iin
from: e8e270db
---

## Mitä teet

Useat saman paikan skannaukset (kukin omasta skannerin asemastaan) alkavat omissa koordinaateissaan. Rekisteröi ne: anna jokaiselle skannaukselle yksi sijoitus, jotta ne kaikki ovat yhdessä koordinaatistossa, tallenna se projektina ja kirjoita rekisteröity pilvi yhdeksi LAS- tai E57-tiedostoksi.

## Sijoita skannaukset

1. Avaa valintaikkuna ({{ui:Rekisteröi skannaukset…}} aloitusikkunassa tai {{ui:Näytä}} › {{ui:Rekisteröi skannaukset…}} kun malli on auki). {{ui:Lisää skannauksia…}} ottaa LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- tai XYZ-tiedostoja, tai voit pudottaa ne valintaikkunaan. Skannaukset, joilla on eri yksiköt, hylätään huomautuksella: muunna yksi ensin.
2. Valitse {{ui:Siirrettävä skannaus}} ja {{ui:Aseta vasten}}. Kuva näyttää jokaisen skannauksen koordinaatistossa sellaisena kuin se nyt on, kukin omalla värillään: {{ui:Pohjakuva}}, {{ui:Edestä}} tai {{ui:Sivu}}. Vedä siirtääksesi, käytä rullaa zoomataksesi.
3. **Pistepareittain.** Napsauta {{ui:Valitse pari}}, sitten pistettä siirrettävällä skannauksella ja samaa paikkaa toisella skannauksella (kulma, kohde tai pilarin jalka). Tee tämä vähintään kolme kertaa pisteillä, jotka eivät ole samalla suoralla ja ovat etäällä toisistaan. Napsauta {{ui:Aseta pareilla}}: skannaus sijoitetaan pienimmän neliösumman sovituksella, ja **Jäljellä** näyttää, kuinka paljon kukin pari yhä eroaa. Pari, jolla on suuri luku, on huono valinta: poista se rististä ja sijoita uudelleen.
4. **Kohteittain.** Jos pisteen todelliset koordinaatit tunnetaan (mitatut kohteet), napsauta {{ui:Valitse ja anna sitten kohde}}, napsauta pistettä sen skannauksessa ja kirjoita kohteen X, Y ja Z riville. Parit ja kirjoitetut kohteet voi sekoittaa vapaasti.

## Hienosäädä ICP:llä

Parit antavat karkean sijoituksen. {{ui:Tarkenna}} siirtää skannausta, kunnes sen pinnat osuvat toisen skannauksen pintoihin: ensin **piste pisteeseen**, sitten **piste tasoon**. Taulukko listaa jokaisen vaiheen virheineen ja sen, kuinka monta pistettä täsmäsi; sen yläpuolella oleva rivi piirtää virheen laskun. {{ui:Pysäytä}} lopettaa ajon käynnissä olevan vaiheen jälkeen ja säilyttää saavutetun. {{ui:Kumoa}} palauttaa koko ajon (tai viimeisen sijoituksen), ja {{ui:Palauta}} asettaa skannauksen takaisin tiedostokoordinaatteihinsa.

Pitääkseen kannettavan nopeana ICP työskentelee harvennetulla osuudella pisteitä ({{ui:Käytetyt pisteet}}, 5,000–60,000) ja jättää huomiotta osumat, jotka ovat kauempana kuin {{ui:Suurin yhdistämisetäisyys}} (oletuksena 5% skannauksen koosta, pienenee asettuessa). Se tarvitsee ensin karkean sijoituksen: skannaukset, jotka tuskin menevät päällekkäin, ilmoittavat, ettei niitä voi yhdistää. Pinnat, jotka ovat vain tasaisia tai vain suoria, eivät voi kiinnittää sijaintia omaa suuntaansa pitkin; lisää siinä tapauksessa pareja.

## Tallenna ja vie

- {{ui:Tallenna projekti}} kirjoittaa pienen `.ccscans.json`-tiedoston: jokaisen skannauksen nimen, koon ja sen ensimmäisten 64 KB:n sormenjäljen sekä muunnoksensa. Siinä ei ole pisteitä. {{ui:Avaa projekti…}} löytää skannaustiedostot niiden viitteiden perusteella (tiedostot täytyy ensin lisätä) ja palauttaa jokaisen muunnoksen.
- {{ui:Vie LAS}} ja {{ui:Vie E57}} kirjoittavat yhden tiedoston, jossa on jokainen skannaus rekisteröidyssä paikassaan. Alkuperäisiin pisteisiin ei kirjoiteta uudelleen; muunnos sovelletaan viennin yhteydessä. Kun {{ui:Lue jokainen piste tiedostoista}} on päällä, jokainen tiedosto luetaan uudelleen jokaiselle pisteelle (enintään 20 miljoonaa per skannaus). Kun se on pois, kirjoitetaan vain katselimessa näkyvät pisteet.
- {{ui:Näytä rekisteröity pilvi}} (BimCraft) kirjoittaa LAS-tiedoston ja avaa sen 3D-näkymässä mallin rinnalla, kuten minkä tahansa pilven.

:::note
Mitään ei ladata. Rekisteröinti toimii tiedostojen omissa yksiköissä ja säilyttää millimetrit: LAS kirjoitetaan sopivalla mittakaavalla (aina 0.1 mm:iin asti), E57 kaksoistarkkuudella. Koordinaatisto siirtyy LAS-tiedostoon vain silloin, kun jokainen skannaus nimeää saman EPSG-koodin. E57-kirjoittaja on oma; sen tiedostot tarkistetaan lukemalla ne takaisin tällä lukijalla ja libE57Formatilla.
:::
