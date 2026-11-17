---
title: Mitoita putket ja kanavat, tarkista kaapelitäyttö ja valaistus
summary: Tarkista talousvesiputkien ja kanavien koot painehäviöineen, reititä kaapelit kaapelikouruissa ja suojaputkissa ja näe niiden täyttöaste sekä laske huoneiden valaistusvoimakkuus IES- tai EULUMDAT-tiedostoista. Oletukset on merkitty; kirjoita voimassa olevan normin arvot.
keywords: mitoitus, putkimitoitus, kanavamitoitus, painehäviö, kalustoyksiköt, tarve, Hunter, Hazen-Williams, nopeus, kitka, yhtä suuri kitka, puhaltimen paine, säätöpelti, kriittinen reitti, kaapelikouru, suojaputki, täyttö, kaapeliluettelo, ies, ldt, eulumdat, fotometria, valaistusvoimakkuus, lux, tasaisuus, valaistuslaskenta, tehotiheys, mep, laskelmat, ongelmat
from: 9cb90815
---

## Mitä teet

Piirrä putket, kanavat, kaapelikourut ja suojaputket tavalliseen tapaan, avaa sitten **Laskelmat**-paneeli. Jokainen välilehti lukee mallin, näyttää taulukon ja listaa virheet kohtaan {{ui:Ongelmat}} ⚠-paneelissa. Kun koko korjaisi ongelman, **Käytä kokoja** muuttaa reitit yhdellä kumoamisvaiheella.

Tämä on piirtämisen apuväline. Jokainen oletus on merkitty ruudulle, eikä mikään niistä ole normitaulukko: kirjoita luvut standardista, jonka mukaan suunnittelet, ja anna insinöörin, joka vastaa tuloksesta, tarkistaa se.

## Putket

1. Valitse **järjestelmä**-avain (kylmävesi on `cw`, lämminvesi `hw`).
2. Aseta suurin nopeus ja, jos haluat paineen tarkistettavan, paine lähteessä sekä pienin paine, jota kaluste tarvitsee.
3. Napsauta {{ui:Tarkasta}}.

Jokainen putki kantaa alapuolellaan olevien kalustoyksiköiden tarpeen. Tarve tulee käyrästä, jossa kalustoyksiköt on suhteutettu virtaamaan, Hunterin kuvaamalla tavalla. **Sisäänrakennettu käyrä on esimerkki, ei normitaulukko**; ongelmat kertovat tästä, kunnes kirjoitat oman käyrän. Kitka lasketaan Hazen–Williams-kaavalla, osat ovat häviökertoimia ja nousu maksaa 9.8 kPa metriltä. Kalusteen yksiköt tulevat sen tyypistä tai luvusta, jonka asetat avustajan työkalulla `loads_set`.

## Kanavat

Aseta järjestelmä, kitkahäviö (yhtä suuri kitka) tai nopeus sekä mahdolliset patterin, suodattimen tai äänenvaimentimen häviöt. Päätteet saavat ilmavirtansa diffuusorin `loads_set`-asetuksesta. Taulukko näyttää nopeuden ja kitkan osaa kohti, **puhaltimen paineen** kriittisellä reitillä ja paineen, jonka kunkin muun päätteen säätöpelti joutuu ottamaan vastaan. Sovitinhäviöt käyttävät pyöristettyjä oletuskertoimia, eivät sovitetietokantaa.

## Kaapelikourut ja suojaputket

Piirrä ne Kanava-työkalulla: järjestelmät **Kaapelikouru** ja **Suojaputki** tallentuvat kaapelikantajina, joten muut ohjelmat lukevat ne kouruina ja putkina. Kaapelit-välilehdessä liitä kaapeliluettelo (tunniste, ulkohalkaisija mm, määrä, mistä, mihin). `mistä` ja `mihin` ovat laitteen tunniste tai piste `x,y,z` millimetreinä. Kaapelit seuraavat lyhintä yhtenäistä reittiä kourujen ja putkien läpi; jokainen reitti näyttää täyttönsä suhteessa kirjoittamiisi rajoihin, ja luettelo tallentuu CSV-tiedostoksi, jossa pituus sisältää löysyysprosentin ja päät.

## Valaistus

Anna kullekin valaisimelle sen IES (LM-63)- tai EULUMDAT-tiedosto avustajan työkalulla `photometry_set`. Kirjoita tavoitteet, ruudukon väli ja työtason korkeus. Tulos on pelkästään **suora** valaistusvoimakkuus: ei keskinäisiä heijastuksia eikä varjoja, joten huoneessa se on alaraja.

## Palosprinklerit

Lisäosalla **Palosprinklerit** on oma välilehtensä; katso sen ohje.
