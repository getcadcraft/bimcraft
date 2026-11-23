---
title: Uutta versiossa 0.9 (aiemmin)
summary: Seinämuodot, jako, siirtymä, venytys ja lukitus ruudukkoon, tasot maanpinnan alapuolella, akselistojen mitoitus ja mittaus pohjakuvassa, kaksoisnäkymät työskentelytapoineen ja kynätaulukoineen, Raportoi luokkana, Collada- ja Google Earth -vienti, Skannaus BIM-malliksi, tuuli- ja seisminen analyysi sekä hartsitulostuksen lisäosat.
keywords: uutta 0.9, aiempi julkaisu, uutta, 0.9, julkaisutiedot, seinämuodot, suorakulmio, monikulmio, kaari, valitse viivat, ääriviivan jäljitys, siirtymä, liitos, laatikkovenytys, kohdista ja lukitse, jaa seinä, aukko, liitä uudelleen, lukitse ruudukkoon, kasvata alkaen, mittaa alkaen, lisää taso alapuolelle, kellari, tasokomento, akselien mitoitus, mittaus pohjakuvassa, työskentelytapa, kaksoiskopio, oma kopio, linkitetty näkymä, kynätaulukko, tulosta sellaisena kuin näkyy, raportoi luokkana, kirjoita mittakaava, tuo svg, sijoita pohjakuvaan, sijoita malliin, collada, dae, kmz, google earth, skannaus BIM-malliksi, tuulikuorma, seisminen, elementtimenetelmä, asiakirjapaneeli, hartsitulostus, muutosloki, 0.8, 0.8.1, versio, uudet ominaisuudet, evakuointi, ihmiset, jonot, akustiikka, kaiku, impulssivaste, tulva, tuuli, maanjäristys, vaara, elinkaari, ids, tunnisteet, aikataulut, siirrä, kohdista, jaa tasaisesti, kuva, tausta, skannauksesta seinät, paneelipiirustukset, runko, aurinko, pv, vrf, puhallinyksikkö, putkimitoitus, kaapelikouru, valaistus, betoni, vertaa skannaus, epsg, projektio, asiakirjat, mallipohja, hiilijalanjälki, kustannus, renderointimoottori, avaa sovelluksessa, usd, glb, unreal, kumoa, lisäosat, pcf, symbolit, kasvit, jäljitä, kynät, valintanauha, projektiselain, asettelu
from: 816df7f8
---

Tämä on se, mikä muuttui BimCraft 0.9:ssä verrattuna versioon 0.8.1:een. Kaksi suurta teemaa ovat kunnollinen seinätyökalu ja näkymät, jotka toimivat niin kuin suurten BIM-ohjelmien käyttäjät odottavat. Niiden ympärillä ovat Collada-vienti, avustajat, jotka osaavat sijoittaa sähkölaitteita, Skannaus BIM-malliksi sekä tuuli-, seisminen ja elementtimenetelmäanalyysi {{ui:Analyysi}}-välilehdellä.

## Uutta

### Seinät

- **Piirrä kokonaisia muotoja.** Avaa {{ui:Piirrä}}-kohdasta {{ui:Muodot}} (tai valitse muoto seinärivin Muoto-luettelosta) saadaksesi suorakulmion, kierretyn suorakulmion, 3–64 sivun monikulmion, kaaren keskipisteen mukaan, tangenttikaaren, seinät valituille viivoille tai seinät suljetun alueen ympärille, jonka sisään napsautat. Suorakulmio on neljä seinää, joissa on neljä liitettyä kulmaa ja yksi kumoamisvaihe. Katso [Seinämuodot, jako, siirtymä, venytys ja lukitus](topic:wall-tools).
- **Aseta ennen piirtämistä, muuta jälkikäteen.** Seinärivillä on {{ui:Siirtymä}} ja {{ui:Liitos}} (poista rasti piirtääksesi vapaasti seisovia seiniä). Myöhemmin käytä piirretyille seinille {{ui:Siirtymä}}, {{ui:Laatikkovenytys}} ja {{ui:Kohdista ja lukitse}}. Siirretty tai venytetty seinä säilyttää ovensa, ikkunansa ja mittansa. Jokainen resepti on yksi kumoamisvaihe.
- **Leikkaa seinät.** {{ui:Jaa}}, {{ui:Aukko}}, {{ui:Vapaat päät}}, {{ui:Poista osuus}} ja {{ui:Yhdistä uudelleen}} leikkaavat seinän napsautuksella tai kohdassa, jossa toinen seinä ylittää sen. Leikkaus oven läpi hylätään. Katso [Seinämuodot, jako, siirtymä, venytys ja lukitus](topic:wall-tools).
- **Lukitse seinät akselilinjoihin.** Valitse akselilinjalla oleva seinä ja rastita {{ui:Lukitse ruudukkoon}} kohdassa {{ui:Ominaisuudet}}. Kun akselisto-työkalu on päällä, kirjoita valitulle viivalle etäisyys kenttään {{ui:Siirrä}}, ja lukitut seinät seuraavat yhdellä kumoamisvaiheella.
- **Muokkaa yhtä seinää.** Yhden seinän {{ui:Ominaisuudet}}-kohdassa voit kiinnittää sen yläreunan tai alareunan kattoon, lattiaan tai alakattoon, muokata sen korkeusprofiilia, kallistaa sitä tai leikata seinään aukon ilman ovea tai ikkunaa. Katso [Seinän muoto](topic:wall-shape).
- **Pituus kertoo, mikä pää pysyy.** {{ui:Kasvata alkaen}} määrittää, pysyykö alku, loppu vai keskikohta paikallaan pituutta muutettaessa.
- **Pituus ja pohjakuvan mitta täsmäävät.** {{ui:Mittaa alkaen}} (keskiviiva, sisäpinta tai ulkopinta) ohjaa sekä Pituus-kenttää että pohjakuvan seinämittoja. Se alkaa keskiviivalta, joten pohjakuvan seinämitat näyttävät nyt keskiviivan, missä ne aiemmin näyttivät ulkopinnan. Muuta sitä seinärivillä, {{ui:Ominaisuudet}}-kohdassa tai {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Seinät}}.

### Tasot, akselistot ja mittaus

- **Lisää taso alapuolelle.** {{ui:Lisää taso alapuolelle}} {{ui:Tasot}}-paneelissa lisää tason alimman alle. Uusi taso on yhtä korkea kuin alin, ja sen korkeus on negatiivinen (Taso -1, Taso -2). Mikään muu ei siirry. {{ui:Lisää tasoja…}} hyväksyy nyt negatiiviset korkeudet. Kun komentoriville kirjoitetaan LEVEL, LEVELS, STOREY tai STOREYS, avautuu {{ui:Lisää tasoja…}}, ja valikoissa sekä valintanauhan välilehdissä on {{ui:Tasot}}-painike. Katso [Tontit, rakennukset ja tasot](topic:site-building-and-levels).
- **Akselistojen mitoitus pohjakuvassa.** Kun {{ui:Akselisto}}-työkalu on päällä, rastita {{ui:Mitoitus}} piirtääksesi naapurilinjojen välin ja kokonaiskoon kuplien ulkopuolelle jokaisen tason pohjakuvaan. Katso [Mitoita akselisto](topic:grid-dimensions).
- **Mittaa pohjakuvassa.** {{ui:Mittaa}} {{ui:Piirrä}}-ryhmässä antaa etäisyyden sekä X- ja Y-erot kahden napsautuksen välillä. Mitään ei tallenneta malliin. Katso [Mittaus pohjakuvassa](topic:measure-on-the-plan).
- **Muuta useita pilareita kerralla.** Valitse pilareita yhdessä seinän kanssa, ja valinta luettelee jokaisen lajin {{ui:Säilytä vain nämä}}-valinnalla. Yksi napsautus säilyttää pilarit ja näyttää niiden yhteiset kentät.
- **Yksi näyttöyksikkö kaikkialla.** Koordinaatit, mitat, leikkaukset, arkkien mittakaavat, kehysvälilehden kuormat ja tulokset sekä Ongelmat-teksti seuraavat valitsemaasi yksikköä. Viennit pysyvät SI-yksiköissä.

### Näkymät, arkit ja tulostus

- **Työskentelytapa.** {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Työskentelytapa}} valitsee, onko jokaisella näkymällä omat merkinnät ja kynätaulukot vai jaetaanko ne. Katso [Työskentelytapa, kaksoisnäkymät, kynät paperilla, Raportoi luokkana ja mallipohjat](topic:working-style).
- **Kopioi näkymä.** Pohjakuvat, kattosuunnitelmat, kutsut, julkisivut ja leikkaukset voidaan kopioida nimellä {{ui:Oma kopio}} tai {{ui:Linkitetty}}. {{ui:Tee oma kopio}} tekee linkitetystä kopiosta itsenäisen. Katso [Työskentelytapa, kaksoisnäkymät, kynät paperilla, Raportoi luokkana ja mallipohjat](topic:working-style).
- **Tulosta sellaisena kuin näkyy tai kynätaulukon kautta.** Kynäkorjaukset säilytetään IFC:ssä näkymän mukana, ja arkit sekä PDF-tiedostot piirtävät ne samoin kuin näyttö. Sama aihe kattaa kynätaulukot.
- **Raportoi luokkana.** {{ui:Raportoi luokkana}} kohdassa {{ui:Ominaisuudet}} kirjoittaa tieksi piirretyn laatan, paneeliksi piirretyn seinän tai rampiksi piirretyn katon IFC:hen valitsemasi luokan mukaan. Se laskee kohteen niin aikatauluissa, määrissä, {{ui:Etsi}}-toiminnossa, väritys-toiminnossa ja Ongelmissa.
- **Muokkaa julkisivuissa ja leikkauksissa.** Piirrä ja siirrä seinät, aukot, tasot, mitat ja merkinnät suoraan julkisivussa tai leikkauksessa omilla arkkikoillasi ja piirustusotsikoillasi. Katso [Muokkaa julkisivuissa ja leikkauksissa](topic:edit-in-elevations).
- **Arkit.** Jokainen arkki voi olla vaaka- tai pystysuuntainen. Jokaisen sijoitetun näkymän mittakaavaluettelon vieressä on {{ui:Kirjoita mittakaava}}-ruutu (1:64, 2:1, 1/4" = 1'). Voit vetää sijoitetun piirroksen paikalleen tai siirtää sitä pienin askelin nuolinäppäimillä. {{ui:Muodot…}} › {{ui:Tuo SVG…}} muuttaa oman arkkisuunnitelmasi piirustusotsikoksi, jonka kentät kirjoitetaan arkkikohtaisesti.
- **Kirjaston tekijätiedot arkilla.** Piirrossarja, jossa on Kirjasto-kohteita, saa Kirjaston tekijätiedot -aikataulun, jonka voit sijoittaa mille tahansa arkille. Katso [Kirjaston tekijätiedot](topic:library-credits).

### Kirjasto: sijoittaminen

- **Sijoitus seuraa näkymää.** Pohjakuvanäkymässä Kirjasto näyttää {{ui:Sijoita pohjakuvaan}}-painikkeen, 3D-näkymässä {{ui:Sijoita malliin}}-painikkeen, ja jaetussa näkymässä jaetun painikkeen, jonka pääasia on {{ui:Sijoita pohjakuvaan}}. Molemmat tavat kirjoittavat saman IFC-elementin. Voit myös vetää Kirjaston kortin pohjakuvaan tai 3D-näkymään. Kynällä tai sormella paina ensin pitkään ja vedä sitten. Katso [Sijoita Kirjastosta](topic:place-from-library).

### Tiedostot ja avustajat

- **Collada ja Google Earth.** {{ui:Collada}} työkalurivillä (Tiedosto-valikossa valikkotyyleissä) kirjoittaa .dae-tiedoston tai .kmz-tiedoston, joka sijoitetaan mallin kohdalle kartalle. Katso [Vie malli Colladana tai Google Earthille](topic:collada).
- **Avustajat voivat sijoittaa sähkölaitteita.** Yhdistetty avustajasi saa uusia työkaluja laitteiden lisäämiseen, luetteloimiseen, muuttamiseen ja poistamiseen sekä valaisimien asettamiseen. Avustajat pysyvät pois päältä, kunnes otat ne käyttöön {{ui:Asetukset}}-kohdassa. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Skannaus BIM-malliksi (lisäosa).** Oletuksena pois päältä, ja vaatii Pistepilvet-lisäosan. Se ehdottaa skannauksesta lattiat, seinät, ovet ja ikkunat, ja jokaisen kohdalla mitatun poikkeaman. Hyväksyminen on yksi kumoamisvaihe.

### Analyysi

- **Tuulen ja maanjäristyksen kohdedata.** {{ui:Analyysi}}-välilehdellä: tuulikuormat ASCE 7-10- tai 7-16-standardin mukaan jäykälle, suljetulle rakennukselle, ja kullekin kerrokselle voima kuormitustapauksena. Lisäksi seisminen kohdedata USGS-hakuun ja suunnittelun spektri.
- **Rakenteellinen jatkotarkastelu ja elementtimenetelmä.** Betonitarkistukset ACI 318-19:n mukaan, ekvivalentit vaakavoimat ASCE 7-22:n mukaan, kerrossiirtymä, laatat ja seinät levyinä sekä kuormitusyhdistelmät ASCE 7:stä ja EN 1990:stä. Oma elementtimenetelmämoottorimme tekee kuoret, tetraedrit ja moodianalyysin. Katso [Tarkista betonisauvat ja laadi seismiset kuormat](topic:concrete-and-seismic) ja [Kehysanalyysi](topic:frame-analysis).

### Muut lisäosat ja asiakirjat

- **Sisävalaistus (lisäosa).** Sijoittaa valaisimet ja kirjoittaa luksiarvot numeroina kunkin tason pohjakuvaan, mukana häikäisyarvio ja tulostettava raportti.
- **Asiakirjapaneeli.** {{ui:Tiedosto}} › {{ui:Asiakirjat…}} sisältää ulos- ja sisäänkuittauksen lukitustiedostolla, revisiokirjaimet, julkaisutilat ja historian.
- **Alue- ja teräsosat.** Etelä-Afrikan piirustus- ja rakennusmääräyspaketit Määräykset-lisäosassa sekä 976 Ison-Britannian teräskokoa yhteisessä profiilitaulukossa.
- **Ilmaiset hartsitulostuksen lisäosat.** Viipalointiohjelma, tuet ja alusta, valotustesti sekä tiedostomuodot GOO, SL1, Chitubox ja Anycubic. Kaikki ovat oletuksena pois päältä.

## Kaikissa sovelluksissa

- Painikkeen tai säätimen päällä viipyminen näyttää Bootstrap-vihjeen.
- Tyhjän piirtoalueen aloitusvihjeessä on sulkupainike, ja BimCraft muistaa, että se suljettiin.
- Paneelin välilehtirivi, joka ei mahdu, vierittyy nyt sen sijaan, että se leikkautuisi.
- Kun asiakirja on auki, selainvälilehdessä lukee ”<asiakirja> - BimCraft | CadCraft”.
- {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Asettelu}}: asettelut ovat pudotusvalikko kaksirivisistä valinnoista.
- Asetusten kielivalikossa on enemmän kieliä kuin versiossa 0.8. Muut kuin englanninkieliset ovat koneluonnoksia.

## Korjattu

- **Siirto toimii portailla** sekä rampeilla, kaiteilla, kattotasoilla, vapaasti seisovilla laitteilla, kuvilla ja poluilla.
- **Seinän vetäminen ei enää vääristä huonetta.** Keskiotteella seinä siirtyy neliöön itsensä kanssa, ja sen kulmat liukuvat liitettyjä seiniä pitkin. Vanhaa vapaata siirtoa varten pidä {{key:Mod}} pohjassa. {{ui:Suorista}} palauttaa 90 asteen kulman.
- **Paksuuden tai tyypin muutos liitossolmussa** pitää nyt kulman suljettuna L-, T- ja kolmen seinän solmussa sekä kaarevan seinän vieressä.
- **Ryhmän huoneiden siirto tai kopiointi** pitää ryhmän ulkopuoliset liitetyt seinät liitettyinä.
- **Uudelleen tekeminen säilyttää seinämitan tunnuksen.**
- **Seinän valinta, kun Piirrä on pois päältä,** ei enää aiheuta virhettä Ominaisuuksissa.
- **Renderöinti siirtyy WebGL:ään**, kun GPU ei käynnisty, eikä pysähdy.
- **EnergyPlus-tarkistus** voidaan taas kytkeä päälle.
- **Asiakirjat avautuu keskitettynä valintaikkunana.** {{key:Esc}}, X tai napsautus himmennetyn sivun päällä sulkee sen.
- **{{ui:Pohjakuva}}-, {{ui:Jaa}}- ja {{ui:3D}}-painikkeet näkyvät** heti, kun malli on auki, eikä vasta kun Piirrä on kerran käännetty päälle.

## Rajoitukset

- Mitään ei ole tulostettu oikealla laitteistolla. Hartsituet ovat uusia eivätkä ole todistettuja.
- Tuuli-, seisminen, betoni- ja elementtimenetelmän tulokset ovat insinöörin tarkistusapuja, tarkistettu suljettujen kaavojen avulla, ei todellista rakennusta vastaan.
- Skannaus BIM-malliksi testattiin synteettisellä rakennuksella, ei todellisella skannauksella, ja se löytää vain suorakulmaisia huoneita.
- Collada-tiedostoa ei ole avattu täällä Blenderissä eikä Google Earthissa.
- Valaistusarvio on tarkistettu omaa jäljitystämme vastaan, ei muita valaistusohjelmia vastaan.
- Etelä-Afrikan luvut eivät ole vahvistettuja.
- Seinäliitostyylit (tyssäys, viisto, neliöinti) ja kerrosten prioriteetti eivät ole toteutettuja. Kulmat viistetään.
- Muut kielet kuin englanti ovat koneluonnoksia.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Aiemmat muutokset ovat tämän sivun alaosassa olevissa versioiden 0.8 ja 0.8.1 muistiinpanoissa.

## Aiemmin: 0.8 ja 0.8.1

Tämä on se, mikä muuttui BimCraft 0.8:ssa (2026-11-01) ja 0.8.1:ssä (2026-11-02) verrattuna versioon 0.7. BimCraft osaa nyt vastata kysymyksiin rakennuksesta ja testata sitä ihmisten, äänen, veden, tuulen ja maanjäristysten kanssa sekä piirtää sitä useammilla työkaluilla. 0.8.1 on korjausjulkaisu.

### Uutta

**Testaa rakennus**

- **Ihmiset rakennuksessa.** {{ui:Ihmiset rakennuksessa}}-osio vasemmassa paneelissa kuljettaa poistumisen tai tavallisen päivän saapumiset huoneidesi, ovien ja portaiden läpi. Näet jonot kohdissa, joissa tila kapenee, pisimmän kävelymatkan poistumiseen kustakin huoneesta ja sen, kuinka kauan viimeinen henkilö kulkee. Rastita {{ui:Suljettu}} ovessa nähdäksesi, mikä muuttuu, ja rastita {{ui:Näytä henkilöt 3D-näkymässä}} seurataksesi kulkijoita. Havainnot menevät Ongelmiin. Tämä on karkea väkimallinnus suunnittelupäätöksiin, ei palokatselmus. Katso [Kuljeta ihmiset rakennuksen läpi](topic:people-in-the-building).
- **Huoneakustiikka ja kuuntelu.** {{ui:Huoneakustiikka}}-osio antaa kunkin huoneen kaikuajan oktaavikaistoittain (Sabine ja Eyring) huoneen koosta ja valitsemistasi pinnoista. Oman tavoitteesi kanssa se kertoo, kuinka paljon absorptiota tarvittaisiin sen saavuttamiseksi. {{ui:Toista tässä huoneessa}} toistaa puheen, taputuksen, näppäiltyjä säveliä tai oman äänitiedostosi huoneelle lasketun impulssivasteen läpi. Absorptioarvot ovat tyypillisiä julkaistuja arvoja, jotka voit korvata. Katso [Huoneakustiikka](topic:room-acoustics).
- **Tulva-, tuuli- ja maanjäristystoisto.** {{ui:Vaaran toisto}} toistaa veden nousun huoneisiin, tuulenpaineen kullakin kerroksella ja maanjäristyksen, joka ravistelee kerroksia. Toisto tapahtuu pohjakuvassa tai julkisivussa aikaliukusäätimellä. Yksinkertaiset mallit oletuksineen ovat paneelilla; kyse ei ole rakennusmääräyksen tarkistuksesta. Katso [Toista tulva, tuuli tai maanjäristys](topic:hazard-playback).
- **Mikä kuluu viidenkymmenen vuoden aikana.** {{ui:Elinkaarinäkymä}} luettelee ikkunat, ovet, pinnoitteet ja katon, kullakin käyttöiän ja vuodet, jolloin ne vaihdetaan. Kun kirjoitat yksikköhinnan, se näyttää kustannukset vuosittain ja niiden nykyarvon. {{ui:Tallenna aikataulu (CSV)}} kirjoittaa sen ulos. Käyttöiät ovat suunnittelulukuja. Katso [Katso, mikä kuluu viidenkymmenen vuoden aikana](topic:life-cycle-view).
- **Betoni- ja seismiset tarkistukset.** {{ui:Betonisauvat}}- ja {{ui:Seismiset kuormat}}-lohkot {{ui:Analyysi}}-välilehdellä tarkistavat betonipalkit ja -pilarit ACI 318-19:n mukaan ja laativat ekvivalentit vaakavoimat ASCE 7-22:n mukaan jäykille lattioille, kerrossiirtymineen. Insinöörin tarkistettavaksi. Katso [Tarkista betonisauvat ja laadi seismiset kuormat](topic:concrete-and-seismic).

**Tarkista ja raportoi**

- **Tarkista IDS:ää vasten.** Lataa asiakkaan antama `.ids`-tiedosto ja näe Ongelmissa jokainen kohde, joka ei sitä täytä, ennen kuin toimitat IFC:n. Avaa {{ui:Tarkista IDS:ää vasten}} kohdasta {{ui:Mallintarkastukset}}. Katso [Tarkista malli asiakkaan IDS:ää vasten](topic:check-against-ids).
- **Tunnisteet ja aikataulut.** Määritä omat tunnisteet, aseta ne monille kohteille kerralla ja tee aikatauluja, joiden sarakkeet, suodattimet ja ryhmittelyt lukevat niitä. Tunnisteet säilytetään IFC:ssä. Katso [Tunnisteet ja aikataulut](topic:tags-and-schedules).
- **Asiakirjat mallista.** {{ui:Asiakirjat mallista}} täyttää määritysmallipohjan avoimesta IFC:stä ja tallentaa sen PDF-, Word- tai Markdown-muodossa. Katso [Asiakirjat mallista](topic:documents-from-the-model).
- **Vertaa skannausta malliin.** Kun pistepilvi on auki, {{ui:Vertaa}} arvioi kunkin kohteen rakennetuksi, osittain rakennetuksi, puuttuvaksi tai saavuttamattomaksi ja näyttää rakennetun prosentin. Katso [Vertaa skannausta malliin](topic:compare-scan-with-model).
- **Hiilijalanjälki ja kustannus.** Hiili-paneeli laskee sisäisen hiilen yhteen muokattavasta kertoimien taulukosta, ja Kustannus-paneeli jakaa hinnat 4D-aikatauluun. Mukana tulevat kertoimet ovat yleisiä ja merkitty tarkistamattomiksi. Katso [Sisäinen hiili ja kustannus](topic:embodied-carbon-and-5d-cost).
- **Mikä tahansa karttaprojektio.** {{ui:Mittaa}} › {{ui:Koordinaattijärjestelmä…}} ottaa EPSG-numeron, UTM-vyöhykkeen, nimen tai oman projektiomäärityksesi. Katso [Georeferointi mihin tahansa projektioon](topic:georeference-any-projection).

**Piirrä ja muokkaa**

- **Siirrä, kohdista ja jaa tasaisesti.** {{ui:Koontiversio}}-kohdassa {{key:Shift+M}} aloittaa siirron (tavallinen {{key:M}} on yhä {{ui:Mittaa}}). Siirto kopioi {{key:C}}-näppäimellä kulkiessaan, jokainen vaihe on yksi kumoaminen, ja se kulkee Live-istunnossa TeamWorkin kautta. Katso [Siirrä, kopioi, kohdista ja jaa tasaisesti](topic:move-align-distribute).
- **Kuvat pohjakuvan alla.** {{ui:Koontiversio}} › {{ui:Kuva}} sijoittaa PNG-, JPEG- tai WebP-kuvan tason pohjakuvan alle tai pystytasolle. Aseta mittakaava kahdella pisteellä ja siirrä, käännä, haalenna ja lukitse. MarkupCraftissa kopioitu alue liitetään arkkinsa mittakaavassa. Katso [Aseta kuva pohjakuvan alle](topic:pictures-as-backgrounds).
- **Seinät skannauksesta.** Kun skannaus on auki, seinät, ovet ja huoneet tulevat ehdotuksina, jotka säilytät tai hylkäät yksi kerrallaan yhdellä kumoamisvaiheella. Löytyvät vain kahteen kohtisuoraan suuntaan kulkevat seinät. Katso [Muuta skannaus seinikseksi](topic:scan-to-walls).
- **Jäljitys, kynät ja luonnosportaat.** {{ui:Jäljitä}} näyttää toisen tason katkoviivoin pohjakuvan alla. {{ui:Kynät}} antaa seinille, ovi- ja ikkunakohteille oman viivanpaksuuden yhdessä näkymässä, ja {{ui:Luonnostele portaat}} muuttaa kävelylinjan portaiksi. Wavefront OBJ -verkko avautuu. Katso [Jäljitä taso, kynät ja porras luonnoksesta](topic:trace-pens-stairs-obj).
- **Rakennukset osoitteen ympärillä.** CivilCraftin Osoite kohteeksi -toiminnon löytämät rakennukset ja tontti tulevat ehdotuksina. Rastita ne, jotka haluat lisätä. Katso [Aloita CivilCraftin kohteesta](topic:site-from-civilcraft).
- **Paneelipiirustukset.** {{ui:Koontiversio}} › {{ui:Paneelipiirustukset}} rajaa seinät, lattiat ja katot puusta tai kevyestä teräksestä ja tallentaa sahausluettelon CSV-tiedostona sekä valmistuspiirustukset PDF-tiedostona. Lähtöarvot, eivät rakenteellinen suunnittelu. Katso [Paneelipiirustukset](topic:panel-drawings).
- **Symbolipaletti ja kasvit.** {{ui:Koontiversio}} › {{ui:Symbolipaletti}} löytää sähkö- ja LVI-symbolit nimen mukaan. {{ui:Kasvit}}-lähde {{ui:Kirjasto}}-kohdassa luettelee noin 400 kasvia pohjakuvasymboleineen. Katso [Symbolipaletti](topic:symbol-palette) ja [Sijoita kasvi](topic:plant-list).

**Putket, kanavat ja energia**

- **Jako, VRF ja puhallinyksiköt.** Sisä- ja ulkoyksiköt liitäntöineen sekä linjasarjat, mitoitettu tyypillisten esimerkkiarvojen taulukosta, jota voit muuttaa. Katso [Jako, VRF ja puhallinyksiköt](topic:split-vrf-fan-coils).
- **Laskelmat.** Laskelmat-paneeli tarkistaa syöttöputkien ja kanavien koot painehäviöineen, reitittää kaapelit kouruihin ja putkiin sekä näyttää niiden täyttöasteen. Lisäksi se laskee valaistuvuuden IES- tai EULUMDAT-tiedostoista. Oletukset on merkitty. Kirjoita oman määräyksesi arvot. Katso [Putki-, kanava-, kaapeli- ja valaistuslaskelmat](topic:mep-calculations).
- **PCF-tiedostot.** Putkityökalun **Vie PCF** kirjoittaa putkilinjat putkijännitys- ja isometriaohjelmille, ja luettu PCF-tiedosto piirtää putkensa. Katso [Putkikomponenttitiedostot](topic:piping-pcf).
- **Aurinkosähkö.** Asenna kenttiä katoille tai maahan, varjosta ne mallista, arvioi vuosienergia, tarkista jonot ja tee yksiviivakaavion data. Lähtömoduuli ja häviöt ovat yleisiä. Katso [Aurinkosähkö](topic:solar-pv).
- **EnergyPlus-tiedosto.** Paneeli ”Tarkista EnergyPlusilla” kirjoittaa mallin IDF-tiedostona, jonka voit ajaa omalla EnergyPlus-asennuksellasi. Selaimessa ajaminen vaatii version, jonka ylläpidät itse, ja osoitteen, jonka kirjoitat. BimCraft ei sisällä sitä. Katso [Tarkista lämmitys ja jäähdytys EnergyPlusilla](topic:check-with-energyplus).

**Kuvat ja tiedostot**

- **Valitse renderöintimoottori.** {{ui:Renderöi}}-valintaikkunassa on {{ui:Moottori}}-valinta. Kaksi sisäänrakennettua moottoria (Nopea ja Polkuseuranta) pysyvät oletuksena. **Avaa sovelluksessa** tallentaa näkymän USD- tai glTF-tiedostona ja Unreal-projektikansion .zip-tiedostona. CadCraft Studiossa lisäosa voi lisätä moottorin. Unreal-liitännäistä, joka avaa projektin, ei ole julkaistu. Katso [Valitse, mikä ohjelma piirtää kuvan](topic:render-engines).
- **Studion kumoaminen.** CadCraft Studion sisällä BimCraft kertoo Studiolle jokaisen valmistuneen vaiheen, jotta Studio voi kumota viimeisen vaiheesi siinä ikkunassa, jota käytit viimeksi. Katso [Kumoa sovellusten yli](topic:undo-across-apps).
- **Lisäosat tiedostossasi.** IFC kirjaa, mitkä lisäosat ovat kirjoittaneet siihen, ja tarjoaa puuttuvat, kun avaat sen. Katso [Lisäosat tiedostossasi](topic:add-ons-in-your-file).

**Kaikissa sovelluksissa**

- **Yhdistä tekoälysi.** Oma avustajasi voi ohjata BimCraftia Studion yhteyden kautta ja vastata kysymyksiin mallista, kuten siitä, mitkä huoneet ovat tietyn alueen alla. Studiolla ei ole omaa tekoälyä. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Työkalurivin rivit}} tarjoaa Rivitys, 2 riviä tai 1 rivi. Rivitys pysyy oletuksena.
- **Syöttölaitteet.** Kosketuslevyn, kynän, 3D-hiiren, ohjaimen ja MIDI-asetukset ovat kaikkien sovellusten yhteisiä.
- **Ongelmat ja Live.** Varoituspaneeli ja Live-istunnot toimivat kuten ennen, ja uudet tarkistukset syöttävät Ongelmia.
- **Kielet.** 54 kieltä, joista kymmenen on uusia. Muut kuin englanti ovat koneluonnoksia, joita äidinkielinen puhuja ei ole vielä lukenut. Ohjeaiheet ovat enimmäkseen englanniksi.

### Korjattu versiossa 0.8.1

- **Valintanauhan ja projektiselaimen asettelu.** Lisää › Tuo CAD, Lisää › Kuva ja Hallinta › Projektin yksiköt sanoivat ”Ei vielä toteutettu BimCraftissa”. Kuva avaa nyt Kuva-työkalun, Tuo CAD avaa {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} -toiminnon (DWG, DXF, PDF tai skannaus) ja Projektin yksiköt avaa {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Yksiköt}}. Siirrä ja Kohdista ajavat omat työkalunsa, Taso avaa {{ui:Lisää tasoja…}}, Vaiheet avaa peruskorjausvaiheiden osion ja Materiaalit avaa materiaalikirjaston.
- **DWG-luokkien osio.** Sitä luettiin väärän tyypin mukaan. Korjattu BimCraftissa ja muissa sovelluksissa, jotka lukevat DWG-tiedostoja.
- **Kielen vaihto ajon aikana.** Studio ja pakatut versiot voivat vaihtaa kieltä ilman uudelleenkäynnistystä. Tätä ei ole vielä testattu jokaisella alustalla. Kerro, jos kieli ei vaihdu.
- **Archicad-paketin skripti.** `archicad_bundle.py`, erillinen lataus, löytää nyt Archicadin polun, tarkkailee kansiota jopa 20 sekuntia ja yrittää uudelleen paketin viereltä.

### Ei vielä tässä versiossa

- **Turvallisuus- ja suunnittelun apuvälineet.** Ihmiset rakennuksessa -osiossa ei ole rakennusmääräyksen mukaista kulkumatkan rajaa, vaan rajan kirjoitat itse. Osiota ei ole tarkistettu käsin oikealla pohjakuvalla. Akustiikka-, elinkaari- ja vaaralukemat ovat suunnitteluarvoja, eivät määräystarkistusta.
- **Ilmastoskenaariot ja EnergyPlus.** Ei sisäänrakennettuja ilmastoskenaarioita: voit ladata skenaariotiedoston tulvaajoon. Selaimessa tapahtuva EnergyPlus-ajo ei kuulu tähän julkaisuun.
- **Valintanauhan asettelu.** Materiaalilaskenta pysyy tilassa ”Ei vielä toteutettu”, koska BimCraftissa ei ole materiaalimäärien luetteloa. Lisäksi 54 muuta harmaana näkyvää valintanauhan työkalua ei vielä ole taustalla.
- **Allekirjoitus ja alustat.** Windows-asennusohjelmat ja macOS:n .dmg-tiedostot ovat allekirjoittamattomia, joten SmartScreen näyttää {{ui:Lisätietoja}}, sitten {{ui:Suorita silti}}. macOS vaatii napsautuksen hiiren oikealla ja sitten {{ui:Avoin}}. iPad- ja iPhone-versiota ei rakennettu uudelleen versiolle 0.8.1.
- **Oikean sivun testit.** Joitakin vanhoja BimCraftin selaintestejä epäonnistuu testisivullamme, kuten ennen versiota 0.8.1.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Aiemmat muutokset ovat versiossa [Uutta versiossa 0.7](topic:whats-new-0-7).
