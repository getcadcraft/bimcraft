---
title: Tarkista malli yleisten ongelmien varalta
summary: Etsi elementit, joista puuttuu tarvitsemasi ominaisuus, kahdesti käytetyt GlobalId-tunnisteet, kerroksettomat elementit ja toistensa päälle pinotut kopiot.
keywords: tarkistus, mallintarkastus, validointi, laadunvarmistus, laatu, puuttuva ominaisuus, pakollinen, kaksoiskappale, globalid, guid, kerros, pinottu, päällekkäisyys
from: 4d835513
---

## Mitä teet

Tarkista malli ennen kuin luovutat sen eteenpäin: ongelmat, jotka rikkovat luettelot, määrät ja muiden käyttämät ohjelmistot.

## Vaiheet

1. Avaa IFC-malli.
2. Avaa {{ui:Mallintarkastukset}} vasemmasta paneelista.
3. Kohdassa {{ui:Pakolliset ominaisuudet}} on jo yksi sääntö (mikä tahansa luokka, Nimi). Vaihda sen luokka (tai {{ui:Mikä tahansa luokka}}) ja ominaisuus tai napsauta {{ui:Lisää ominaisuus}} lisätäksesi toisen säännön. x-painike poistaa yhden säännön. Elementti ei täytä sääntöä, jos ominaisuus puuttuu tai on tyhjä. Säännöt säilyvät tässä selaimessa kaikille malleille.
4. Napsauta {{ui:Suorita tarkastukset}}.
5. Napsauta tulosta, jolloin nuo elementit valitaan ja niihin zoomataan.

## Mitä näet

- **Puuttuva pakollinen ominaisuus**: jokainen sääntö ja elementit, joilta sille ei ole arvoa.
- **GlobalId käytetty kahdesti**: elementit, jotka jakavat saman GlobalId-tunnisteen. Muut ohjelmat käsittelevät niitä yhtenä elementtinä.
- **Ei kerrosta**: elementit, joiden muotoa mikään kerros ei sisällä.
- **Kopiot päällekkäin**: saman luokan ja tyypin elementit, joilla on sama muoto samassa paikassa. Ne lasketaan määrissä kahdesti.

Jokainen tulosten rivi on painike: napsauta sitä, jolloin nuo elementit valitaan ja niihin zoomataan. Kunkin tarkistuksen luetteloon tulee vain 50 ensimmäistä ryhmää. Samat löydökset näkyvät myös kohdassa {{ui:Ongelmat}}.

## Hyvä tietää

- Kun useita malleja on auki, tarkistukset koskevat aktiivista mallia. Katso [Katso useita IFC-malleja yhdessä](topic:several-models).
- Muokkauksen jälkeen aja tarkistukset uudelleen.
- {{ui:Ongelmat}}-paneelissa ongelman sanamuodon pituudet, pinta-alat ja tilavuudet noudattavat työkalurivillä valittua {{ui:Yksiköt}}-asetusta. Esimerkiksi ovi, jonka koko on 800 mm, näkyy jalkoina ja tuumina muodossa 2'-7 1/2". Vaihda yksikkö, niin paneeli muotoilee sanamuodot uudelleen.

## Seuraavaksi

- [Tarkasta malli: tilat, tunnisteet, LOD, törmäykset ja rajapinnat](topic:audit-the-model)
- [Etsi elementtejä luokan, nimen tai ominaisuuden mukaan](topic:find)
- [Poista, leikkaa, kopioi ja liitä elementit](topic:copy-paste)
