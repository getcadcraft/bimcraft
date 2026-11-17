---
title: Arvioi päivänvalo kussakin huoneessa
summary: Jokaisen huoneen keskimääräinen päivänvalokerroin ikkunoistaan, sisäpinnoistaan ja niiden näkemästä taivaasta, taivaan kulma mitattuna mallista. Varhaisen suunnittelun arvio, ei simulaatio eikä määräysten tarkistus.
keywords: päivänvalo, päivänvalokerroin, keskimääräinen päivänvalokerroin, ADF, pystysuuntainen taivaskomponentti, VSC, lämpökuorma, aurinko, g-arvo, ruudukko, jaettu vuo, taivaskomponentti, sisäisesti heijastunut komponentti, luonnonvalo, ikkuna, lasitus, taivaskulma, varjostus, parveke, räystäs, heijastavuus, läpäisevyys, varhainen suunnittelu, analyysi, huoneet, tilat
from: 5f300a78
---

Välilehti {{ui:Päivänvalo}} oikeassa paneelissa laskee jokaisen huoneen **keskimääräisen päivänvalokertoimen**: kuinka suuri osa ulkona olevan pilvisen taivaan valosta saavuttaa huoneen keskimäärin, prosentteina. Se lukee avoimen IFC-mallin huoneet (tilat) ja ikkunat. Mallia ei muuteta eikä mitään lähetetä.

:::warning
Kaikki tässä välilehdessä on **suunnittelun apuväline, ei vaatimustenmukaisuuslaskenta**: julkaistuilla menetelmillä tehtyjä varhaisen suunnittelun arvioita, **ei simulaatio** eikä **tarkistus rakentamismääräyksiä tai standardia vastaan**. BS EN 17037, LEED, BREEAM ja energiamääräykset edellyttävät paikkakunnan ilmastoa käyttävää päivänvalosimulaatiota; käytä niihin päivänvalosimulointiohjelmaa.
:::

## Laskenta

1. Avaa IFC-malli, jossa on huoneet (tilat) ja ikkunoita. Täällä piirretyissä malleissa on huone jokaisen suljetun seinäjoukon sisällä.
2. Avaa {{ui:Päivänvalo}}-välilehti ja napsauta {{ui:Laske}}.
3. Jokainen huone näyttää päivänvalokertoimensa ja luokan: alle 2 %, 2–5 % tai 5 % tai enemmän. Napsauta huonetta nähdäksesi sen pinnat sekä jokaisen ikkunan pinta-alan ja taivaskulman; huone ja sen ikkunat valitaan mallista.

Kun muutat lähtöarvoa, luvut seuraavat heti; mallia muutettuasi napsauta {{ui:Laske uudelleen}}. {{ui:CSV}} tallentaa jokaisen huoneen luvuineen ja käytetyt lähtöarvot.

## Kaava

Keskimääräinen päivänvalokerroin (%) = T × Ag × θ × M ÷ (A × (1 − R²)), summattuna huoneen ikkunoiden yli (Littlefairin kaava, jota käyttävät BRE 209, BS 8206-2 ja CIBSE LG10):

- **T**, lasin valon läpäisevyys (aluksi 0.7: käytä valmistajan arvoa).
- **Ag**, lasitettu pinta-ala: kunkin ikkunan pinta-ala (sen kokonaisleveys × korkeus, muuten sen koko mallissa) × **lasitusosuus** (aluksi 0.75: loput on karmia).
- **θ**, ikkunan näkemän taivaan kulma asteina (alla).
- **M**, kunnossapitokerroin lasin likaantumiselle (aluksi 1).
- **A**, huoneen kaikki sisäpinnat: lattia, seinät, katto ja ikkunat, otettuna huoneen oman muodon mukaan.
- **R**, niiden keskimääräinen heijastavuus pinta-alalla painotettuna: lattia 0.2, seinät 0.5, katto 0.7 aluksi; lasi lasketaan arvolla 0.1.

## Miten taivaskulma mitataan

Jokaista ikkunaa varten BimCraft leikkaa mallin ikkunaa vastaan kohtisuoralla pystytasolla ikkunalasin ulkopinnasta ja katsoo horisontista suoraan ylös: kaikki, mihin leikkaus osuu ikkunan edessä (vastapäätä oleva rakennus, parveke tai ulkonema yllä, räystäät), peittää osan tuosta 90°:sta. θ on jäljelle jäävä osa. Itse ikkuna ja seinä, jossa se on, jätetään pois. Mittaus tehdään viidestä kohdasta ikkunan leveyden yli ja otetaan keskiarvo, joten keskellä edessä oleva ohut pylväs ottaa oman osuutensa, ei koko taivasta.

Rakennus, joka on 8.5 m ikkunan keskikohdan yläpuolella ja 9.9 m päässä, peittää 40.65° (kulma, jonka tangentti on 8.5 ÷ 9.9), jolloin θ = 49.35°.

## Kunkin ikkunan pystysuuntainen taivaskomponentti

{{ui:Laske}} mittaa myös kunkin ikkunan osalta, mitä se näkee koko taivaasta: sama pystysuora leikkaus, käännettynä jokaiseen suuntaan ikkunan edessä (joka 2°, toiselta reunalta toiselle), joten sivulla oleva rakennus, lamelli tai syvä aukko ottaa oman osuutensa. Tästä BimCraft laskee **pystysuuntaisen taivaskomponentin (VSC)**: kuinka suuri osa pilvisen taivaan valosta saavuttaa lasin, suhteessa siihen, mitä avoin tasakatto saisi. Ikkuna, jonka edessä ei ole mitään, saa **39.6 %**, mikä on pystysuoran ikkunan enimmäisarvo; pitkä rakennus, joka kohoaa 25° ikkunan yläpuolelle, jättää noin **27 %**, luku, jota Britannian ohjeistus (BRE 209) käyttää peukalosääntönä. Huoneen tiedoissa jokaisen ikkunan kohdalla näkyy sen VSC ja sen **esteen kulma** (kuinka korkealle asiat kohoavat suoraan sen edessä).

Taivas on CIE:n standardi pilvinen taivas, joka on suoraan ylhäällä kolme kertaa kirkkaampi kuin horisontissa, ja leikkaus on tarkka: mitään ei näytteistetä.

## Aurinko ikkunoiden läpi tiettynä päivänä

Avaa {{ui:Aurinko ikkunoista tiettynä päivänä}} ja valitse päivä. BimCraft seuraa aurinkoa sinä päivänä neljännestunnin välein ja laskee yhteen kunkin ikkunan kautta lasin läpi tulevan auringon lämmön:

- **suora auringonvalo**, kun aurinko on ikkunan edessä eikä mikään mallissa peitä sitä (sama tarkka leikkaus, käännettynä aurinkoa kohti: parveke, joka varjostaa korkeaa kesäaurinkoa keskipäivällä, päästää matalan talviauringon sisään);
- **taivaan valo** lasilla, vähennettynä se, mitä ikkuna ei näe;
- maasta **heijastuva valo** (heijastavuus: aluksi 0.2);
- kaikki lasin **g-arvon** (aurinkoenergian osuus, jonka se päästää läpi: aluksi 0.6; käytä valmistajan arvoa) ja sen lasitusosuuden kautta.

Jokainen huone näyttää päivän summan kWh:na ja huippuarvonsa wateina kellonajan kanssa; huoneen tiedoissa päivä piirretään kaaviona. Taivas on selkeä Hottelin mallin mukaan (Duffie & Beckman, *Solar Engineering of Thermal Processes*), ja käytössä ovat paikan ja vuodenajan kesä- tai talvilukemat sekä kohteen korkeus; auringon sijainti on NOAA:n. Kohteen leveys- ja pituuspiiri tulevat IFC:n kohteesta ja pohjoinen mallin todellisesta pohjoisesta; jos mallissa ei ole kohdetta, kirjoita leveys- ja pituuspiiri. Kellonajat ovat normaaliaikaa (ei kesäaikaa) kirjoittamassasi aikavyöhykkeessä, muuten siinä, jonka pituuspiiri ehdottaa.

Jätetään pois: pilvet (päivä on selkeä), lasin vähäisempi läpäisy matalilla kulmilla, karmien varjostus lasilla, sälekaihtimet sekä seinien ja katon sitoma lämpö. Saman välilehden jäähdytysarvio käyttää huippuarvoa.

## Päivänvalokerroin ruudukolla

Avaa {{ui:Päivänvalokerroin ruudukolla}} ja {{ui:Laske ruudukko}}: BimCraft asettaa ruudukon jokaisen huoneen lattialle työtasokorkeudelle (aluksi 0.85 m), puoli metriä seinistä sisäänpäin, ja laskee päivänvalokertoimen jokaisessa pisteessä **BRE:n jaetun vuon menetelmällä**:

- **taivaskomponentti**: pilvinen taivas, jonka piste näkee kunkin ikkunan aukon kautta, vähennettynä karmit;
- **ulkoisesti heijastunut komponentti**: se, mitä piste näkee ikkunan kautta ulkopuolisista rakennuksista, jotka heijastavat kymmenesosan niiden takana olevasta taivaasta (muuta esteen kirkkautta, jos ne ovat paljon vaaleampia tai tummempia);
- **sisäisesti heijastunut komponentti**: huoneessa heijastuva valo huoneen pintojen ja heijastavuuksien, ikkunoiden pinta-alan ja sen mukaan, kuinka paljon niistä on ulkopuolella (BRE:n kaava, jossa lasin läpäisevyys on kirkkaan lasin sijasta, jota se oletti).

Jokainen huone näyttää keskiarvonsa, alimman pisteensä ja sen, kuinka suuri osa saa 2 % tai enemmän. Huoneen tiedoissa piirretään sen pohjapiirros, jokainen piste värjättynä päivänvalokertoimensa mukaan ja ikkunat punaisina. Jotta laskenta on nopea millä tahansa tietokoneella, huoneessa on enintään **400 pistettä**: suuressa huoneessa väli kasvaa sopimaan (kirjoita väli, jos haluat valita itse).

## Mitä jätetään pois

- Kattoikkunat (lasi tasaisena tai kaltevana) luetellaan mutta niitä ei lasketa: tässä käytetyt kaavat koskevat seinäikkunoita.
- Ikkunat, joiden takana ei ole huonetta (esimerkiksi aula ilman tilaa), luetellaan erikseen.
- Ikkunan syvennykset (aukko otetaan ulkopinnasta), häikäisy, auringonpaistetunnit ja ilmastoon perustuva päivänvalo. BS EN 17037:n, LEED:in tai BREEAM:n tarpeisiin käytä päivänvalosimulointiohjelmaa.
- Luokat ovat peräisin vanhemmasta brittiläisestä ohjeistuksesta (BS 8206-2), ja ne näytetään vain ohjeena, eivät koskaan hyväksymisenä tai hylkäyksenä.
