---
title: Mitä uutta versiossa 0.9
summary: Seinämuodot, jako, siirtymä, venytys ja lukitus akselistoon, tasot maanpinnan alle, akselistomitat ja mittaus pohjapiirroksessa, kaksoiskopioidut näkymät työtyyleineen ja kynätauluineen, Raportoi luokkana, Collada- ja Google Earth -vienti, Scan to BIM, tuuli- ja maanjäristysanalyysi sekä hartsitulostuksen lisäosat.
keywords: mitä uutta, 0.9, julkaisutiedot, seinämuodot, suorakulmio, monikulmio, kaari, valitut viivat, ääriviiva, siirtymä, liitos, laatikkovenytys, kohdistus ja lukitus, seinän jako, aukko, liitä uudelleen, lukitus akselistoon, kasvata alkaen, mittaa alkaen, lisää kerros alapuolelle, kellari, tasokomento, akselimitat, mittaus pohjapiirroksessa, työtyyli, kaksoiskopio näkymästä, kynätaulukko, raportoi luokkana, mittakaava, svg-tuonti, sijoita pohjapiirrokseen, sijoita malliin, collada, dae, kmz, google earth, scan to bim, tuulikuorma, maanjäristys, äärellisten elementtien, dokumenttipaneeli, hartsitulostus, mitä uutta, muutosloki, 0.8, 0.8.1, versio, uudet ominaisuudet, evakuointi, ihmiset, jonot, akustiikka, jälkikaiunta, impulssivaste, tulva, tuuli, maanjäristys, vaara, elinkaari, käyttöikä, ids, tunnisteet, luettelot, siirrä, kohdista, jaa, kuva, tausta, skannaus seinille, sivusto civilcraftista, paneelipiirustukset, rungotus, aurinko, aurinkosähkö, vrf, puhallinkela, putkimitoitus, kaapelihylly, valaistus, betoni, skannauksen vertailu, epsg, projektio, asiakirjat, malli, hiilijalanjälki, kustannus, energyplus, renderointimoottori, avaa sovelluksessa, usd, glb, unreal, kumoa, lisäosat, pcf, symbolit, kasvit, jäljitys, kynät, valintanauha, projektiselain, asettelu
from: 5624fe88
---

Tämä on se, mikä muuttui BimCraft 0.9:ssä verrattuna versioon 0.8.1. Kaksi suurta teemaa ovat oikea seinätyökalu ja näkymät, jotka toimivat niin kuin suurten BIM-ohjelmien käyttäjät odottavat. Niiden lisäksi tulevat Collada-vienti, avustajat, jotka voivat sijoittaa sähkölaitteita, Scan to BIM sekä tuuli-, maanjäristys- ja äärellisten elementtien laskenta {{ui:Analyysi}}-välilehdellä.

## Uutta

### Seinät

- **Piirrä kokonaisia muotoja.** Ota käyttöön {{ui:Piirrä}} ja avaa {{ui:Muodot}} Piirrä-ryhmästä (tai valitse muoto seinärivin **Muoto**-luettelosta): suorakulmio, kierretty suorakulmio, 3–64 sivun monikulmio, kaari keskipisteen mukaan, tangenttikaari, seinät valittuja viivoja pitkin tai seinät suljetun alueen ympärille, jonka napsautat sisältä. Suorakulmio on neljä seinää, neljä liitettyä nurkkaa ja yksi kumoamisvaihe. Katso [Seinämuodot, jako, siirtymä, venytys ja lukitus](topic:wall-tools).
- **Aseta ennen piirtämistä, muuta jälkeenpäin.** Seinärivillä on {{ui:Siirtymä}} ja {{ui:Liitos}} (poista rasti piirtääksesi vapaasti seisovia seiniä). Jälkeenpäin käytä {{ui:Siirtymä}}-, {{ui:Laatikkovenytys}}- ja {{ui:Kohdista ja lukitse}} -toimintoja piirrettyihin seiniin. Siirretty tai venytetty seinä säilyttää ovensa, ikkunansa ja mittansa. Jokainen resepti on yksi kumoamisvaihe.
- **Leikkaa seiniä.** {{ui:Jaa}}, {{ui:Aukko}}, {{ui:Vapaat päät}}, {{ui:Poista osuus}} ja {{ui:Yhdistä uudelleen}} leikkaavat seinän napsautuksella tai siinä, missä toinen seinä risteää. Ovensa läpi tehty leikkaus evätään. Katso [Seinämuodot, jako, siirtymä, venytys ja lukitus](topic:wall-tools).
- **Lukitse seinät akselistoon.** Valitse akselistoa pitkin kulkeva seinä ja rastita {{ui:Lukitse ruudukkoon}} kohdassa {{ui:Ominaisuudet}}. Kun {{ui:Akselisto}}-työkalu on päällä, kirjoita etäisyys kohtaan {{ui:Siirrä}} valitulle viivalle: lukitut seinät seuraavat yhdessä vaiheessa.
- **Muoto yhdelle seinälle.** Seinän {{ui:Ominaisuudet}}-kohdassa voit kiinnittää sen yläreunan tai alareunan kattoon, lattiaan tai alakattoon, muokata sen julkisivun ääriviivaa, kallistaa sitä tai leikata seinäaukon ilman ovea tai ikkunaa. Katso [Seinän muoto](topic:wall-shape).
- **Pituus kertoo, mikä pää pysyy.** {{ui:Kasvata alkaen}} määrää, pysyvätkö alku, loppu vai keskikohta paikallaan, kun muutat pituutta.
- **Pituus ja pohjapiirroksen mitta täsmäävät.** {{ui:Mittaa alkaen}} (keskiviiva, sisäpinta tai ulkopinta) ohjaa sekä pituuskenttää että pohjapiirroksen seinämittoja. Se alkaa keskiviivalta, joten pohjapiirroksen seinämitat lukevat nyt keskiviivaa, missä ne aiemmin lukivat ulkopintaa. Muuta sitä seinärivillä, {{ui:Ominaisuudet}}-kohdassa tai Asetukset › {{ui:BimCraft}} › {{ui:Seinät}}.

### Tasot, akselistot ja mittaus

- **Lisää kerros alapuolelle.** {{ui:Lisää kerros alapuolelle}} {{ui:Tasot}}-paneelissa lisää tason alimman alle, yhtä korkean kuin se, negatiiviseen korkeuteen (Taso -1, Taso -2). Mikään muu ei siirry. {{ui:Lisää tasoja…}} hyväksyy nyt negatiiviset korkeudet. Kun kirjoitat komentoriville LEVEL, LEVELS, STOREY tai STOREYS, avautuu {{ui:Lisää tasoja…}}, ja valikoissa ja valintanauhan välilehdillä on {{ui:Tasot}}-painike. Katso [Tontit, rakennukset ja tasot](topic:site-building-and-levels).
- **Akselistomitat pohjapiirroksessa.** Kun {{ui:Akselisto}}-työkalu on päällä, rastita {{ui:Mitoitus}} piirtääksesi naapuriviivojen välin ja kokonaiskoon kuplien ulkopuolelle jokaisen tason pohjapiirrokseen. Katso [Akselistomitoitus](topic:grid-dimensions).
- **Mittaus pohjapiirroksessa.** {{ui:Mittaa}} Piirrä-ryhmässä antaa etäisyyden sekä X- ja Y-erot kahden napsautuksen välillä. Mitään ei tallenneta malliin. Katso [Mittaus pohjapiirroksessa](topic:measure-on-the-plan).
- **Useiden pilarien muokkaus kerralla.** Valitse pilareita seinän kanssa, niin valinta luettelee kunkin lajin {{ui:Säilytä vain nämä}} -painikkeella. Yksi napsautus säilyttää pilarit ja näyttää niiden yhteiset kentät.
- **Yksi näyttöyksikkö kaikkialla.** Koordinaatit, mittaukset, leikkaukset, arkkien mittakaavat, kehyksen välilehden kuormat ja tulokset sekä Ongelmat-teksti seuraavat valitsemaasi yksikköä. Viennit pysyvät SI-yksiköissä.

### Näkymät, arkit ja tulostus

- **Työtyyli.** {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Työskentelytapa}} valitsee, saako jokainen näkymä omat merkintänsä ja kynätaulukkonsa vai jakaako ne. Katso [Työtyyli, kopioidut näkymät, kynät paperilla, Raportoi luokkana ja mallipohjat](topic:working-style).
- **Kopioi näkymä.** Pohjapiirrokset, kattopohjat, kutsut, julkisivut ja leikkaukset voi kopioida nimellä {{ui:Oma kopio}} tai {{ui:Linkitetty}}; {{ui:Tee oma kopio}} tekee linkitetystä itsenäisen. Katso [Työtyyli, kopioidut näkymät, kynät paperilla, Raportoi luokkana ja mallipohjat](topic:working-style).
- **Tulosta sellaisena kuin näkyy tai kynätaulukon kautta.** Kynän ohitukset säilytetään IFC:ssä näkymän mukana, ja arkit ja PDF:t piirtävät ne kuten näyttö. Sama aihe kattaa kynätaulukot.
- **Raportoi luokkana.** {{ui:Raportoi luokkana}} Ominaisuudet-kohdassa kirjoittaa laatan, joka on piirretty tienä, seinän paneelina tai katon rampina IFC:hen valitsemanasi luokkana, ja laskee sen niin luetteloissa, määrissä, Etsi-toiminnossa, Värin mukaan -toiminnossa ja Ongelmissa.
- **Muokkaa julkisivuissa ja leikkauksissa.** Piirrä ja siirrä seiniä, aukkoja, tasoja, mittoja ja merkintöjä suoraan julkisivussa tai leikkauksessa omilla arkkikoillasi ja otsikkolohkoillasi. Katso [Muokkaus julkisivuissa ja leikkauksissa](topic:edit-in-elevations).
- **Arkit.** Jokainen arkki voi olla vaaka- tai pystysuuntainen. {{ui:Kirjoita mittakaava}} -kenttä on jokaisen sijoitetun näkymän mittakaavaluettelon vieressä (1:64, 2:1, 1/4" = 1'). Sijoitettua piirustusta voi vetää tai siirtää nuolinäppäimillä, ja {{ui:Muodot…}} › {{ui:Tuo SVG…}} muuttaa oman arkkisuunnittelusi otsikkolohkoksi, jonka kentät kirjoitetaan arkkikohtaisesti.
- **Kirjastokrediitit arkilla.** Piirustussarja, jossa on kirjastokohteita, saa Kirjastokrediitit-luettelon, jonka voi sijoittaa mille tahansa arkille. Katso [Kirjastokrediitit](topic:library-credits).

### Kirjasto: sijoittaminen

- **Sijoittaminen seuraa näkymää.** Pohjanäkymässä Kirjasto näyttää {{ui:Sijoita pohjapiirrokseen}}; 3D:ssä se näyttää {{ui:Sijoita malliin}}; jaetussa näkymässä se näyttää jakopainikkeen, jonka pääpainikkeena on {{ui:Sijoita pohjapiirrokseen}}. Molemmat tavat kirjoittavat saman IFC-elementin. Voit myös vetää Kirjasto-kortin pohjapiirrokseen tai 3D-näkymään; kynällä tai sormella paina ja pidä, sitten vedä. Katso [Sijoita kirjastosta](topic:place-from-library).

### Tiedostot ja tekoälyavustajat

- **Collada ja Google Earth.** {{ui:Collada}} työkalurivillä ({{ui:Tiedosto}}-valikko valikkotyyleissä) kirjoittaa .dae-tiedoston tai .kmz-tiedoston, joka sijoitetaan kartalle siihen kohtaan, missä malli on. Katso [Vie malli Collada-muodossa tai Google Earthiin](topic:collada).
- **Avustajat voivat sijoittaa sähkölaitteita.** Yhdistetyllä avustajallasi on uusia työkaluja laitteiden lisäämiseen, luetteluun, muuttamiseen ja poistamiseen sekä valojen asettamiseen. Avustajat ovat pois päältä, kunnes kytket ne päälle {{ui:Asetukset}}-kohdassa. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Scan to BIM (lisäosa).** Oletuksena pois, ja se tarvitsee Pistepilvet-lisäosan. Se ehdottaa lattioita, seiniä, ovia ja ikkunoita skannauksesta, ja jokaiselle on mitattu poikkeama; hyväksyminen on yksi kumoamisvaihe.

### Analyysi

- **Tuulen ja maanjäristyksen sivutiedot.** {{ui:Analyysi}}-välilehdellä: tuulikuormat ASCE 7-10 tai 7-16 -standardin mukaan jäykälle suljetulle rakennukselle, jossa jokaisella kerroksella on voima kuormitustapauksina, sekä maanjäristyksen sivutiedot USGS-haulla ja suunnittelukäyrä.
- **Rakenteellinen jatko ja äärelliset elementit.** Betonitarkistukset ACI 318-19:n mukaan, ekvivalentit vaakavoimat ASCE 7-22:n mukaan, kerrosnäkymät, laatat ja seinät levyinä sekä kuormayhdistelmät ASCE 7:stä ja EN 1990:stä. Oma äärellisten elementtien moottorimme tekee kuoria, tetraedreja ja modaalianalyysin. Katso [Tarkista betonisauvat ja tee maanjäristyskuormat](topic:concrete-and-seismic) ja [Rungon analyysi](topic:frame-analysis).

### Muut lisäosat ja asiakirjat

- **Sisävalaistus (lisäosa).** Sijoittaa valaisimet ja kirjoittaa luksiarvot numeroina kunkin tason pohjapiirrokseen, mukana häikäisyarvio ja tulostettava raportti.
- **Asiakirjapaneeli.** {{ui:Tiedosto}} › {{ui:Asiakirjat…}} sisältää ottamisen ja palauttamisen lukitustiedostolla, tarkistuskirjaimet, julkaisutilat ja historian.
- **Alueet ja teräs.** Etelä-Afrikan piirustus- ja rakennusmääräyspaketit Säännöt-lisäosassa sekä 976 Ison-Britannian teräskokoa yhteisessä profiilitaulukossa.
- **Ilmaiset hartsitulostuksen lisäosat.** Viipalointi, tuet ja alusta, valotustesti sekä GOO-, SL1-, Chitubox- ja Anycubic-tiedostomuodot; kaikki oletuksena pois päältä.

## Kaikissa sovelluksissa

- Painikkeen tai säätimen päällä oleva ohjevihje näkyy (Bootstrap-vihje).
- Tyhjän piirustusalueen aloitusvihjeessä on sulkemispainike; BimCraft muistaa, että se suljettiin.
- Paneelin välilehtirivi, joka ei mahdu, vierii nyt leikkautumisen sijaan.
- Kun asiakirja on auki, selainvälilehdessä lukee ”<asiakirja> - BimCraft | CadCraft”.
- {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Asettelu}}: asettelut ovat pudotusvalikko, jossa on kaksirivisiä valintoja.
- Kieliluettelo kohdassa {{ui:Asetukset}} tarjoaa enemmän kieliä kuin versiossa 0.8; muut kuin englanti ovat koneellisia luonnoksia.

## Korjattu

- **Siirto toimii portailla** sekä kaiteilla, rampeilla, kattotasoilla, vapaasti seisovilla laitteilla, kuvilla ja poluilla.
- **Seinän vetäminen ei enää vinouta huonetta.** Keskiote siirtää seinän kohtisuoraan itseään vasten, ja sen kulmat liukuvat liitettyjä seiniä pitkin. Pidä {{key:Mod}} painettuna vanhaa vapaata siirtoa varten; {{ui:Suorista}} palauttaa 90 asteen kulman.
- **Tyypin tai paksuuden muutos liitoskohdassa** säilyttää nurkan suljettuna L:ssä, T:ssä, kolmen seinän solmussa ja kaarevan seinän vieressä.
- **Liitettyjen seinien siirto tai kopiointi ryhmänä** säilyttää ryhmän ulkopuoliset liitetyt seinät liitettyinä.
- **Redo säilyttää seinämitan identiteetin.**
- **Seinän valitseminen, kun Piirrä on pois päältä,** ei enää aiheuta virhettä Ominaisuudet-kohdassa.
- **Renderöinti siirtyy WebGL:ään,** kun näytönohjain ei käynnisty, eikä pysähdy.
- **EnergyPlus-tarkistuksen** voi taas kytkeä päälle.
- **Asiakirjat avautuu keskitettynä valintaikkunana.** {{key:Esc}}, X tai napsautus himmennetylle sivulle sulkee sen.
- **{{ui:Pohjakuva}}-, {{ui:Jaa}}- ja {{ui:3D}}-painikkeet näkyvät**, kun malli on auki, eikä vasta kun Piirrä on kerran ollut päällä.

## Rehellisyys rajoista

- Mitään ei tulostettu oikealla laitteistolla. Hartsituet ovat uusia ja testaamattomia.
- Tuuli-, maanjäristys-, betoni- ja äärellisten elementtien tulokset ovat insinöörin tarkistuksen apuvälineitä, verrattuna suljettuihin kaavoihin, ei oikeaan rakennukseen.
- Scan to BIM testattiin synteettisellä rakennuksella, ei oikealla skannauksella, ja se löytää vain suorakulmaisia huoneita.
- Collada-tiedostoa ei ole avattu täällä Blenderissä tai Google Earthissa.
- Valaistusarvio on tarkistettu omaa jäljitystämme vastaan, ei muita valaistusohjelmia vastaan.
- Etelä-Afrikan luvut eivät ole vahvistettuja.
- Seinän liitostyylit (päittäis-, viisto- ja suoristettu pää) sekä tason tärkeysjärjestys eivät ole vielä käytössä; kulmat ovat viistoliitoksia.
- Kielet muut kuin englanti ovat koneellisia luonnoksia.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Aiemmat muutokset ovat version 0.8 ja 0.8.1 muistiinpanoissa tämän sivun alla.

## Aiemmin: 0.8 ja 0.8.1

Tämä on se, mikä muuttui BimCraft 0.8:ssa (2026-11-01) ja 0.8.1:ssä (2026-11-02) verrattuna versioon 0.7. BimCraft voi nyt vastata kysymyksiin rakennuksesta ja testata sitä ihmisten, äänen, veden, tuulen ja maanjäristysten kanssa sekä piirtää sitä enemmillä työkaluilla. Versio 0.8.1 on korjausjulkaisu.

### Uutta

**Rakennuksen testaaminen**

- **Ihmiset rakennuksessa.** Vasemman paneelin {{ui:Ihmiset rakennuksessa}}-osio kulkee evakuoinnin tai tavallisen työpäivän saapumisten läpi huoneidesi, ovien ja porrasten kautta. Näet jonot kohdissa, joissa rakennus kapenee, pisimmän kävelymatkan uloskäynnille kustakin huoneesta ja kuinka kauan viimeinen henkilö kestää. Rastita ovessa {{ui:Suljettu}} nähdäksesi, mitä muuttuu, ja rastita {{ui:Näytä henkilöt 3D-näkymässä}} seurataksesi kulkijoita. Havainnot menevät Ongelmiin. Karkea väkijoukkomalli suunnittelupäätöksiin, ei palokatsastustodistus. Katso [Kävele ihmiset rakennuksen läpi](topic:people-in-the-building).
- **Huoneakustiikka ja sen kuuleminen.** {{ui:Huoneakustiikka}}-osio antaa kunkin huoneen jälkikaiunta-ajan oktaavikaistoittain (Sabine ja Eyring) sen koon ja valitsemiesi pintojen mukaan. Omalla tavoitteella se kertoo, kuinka paljon absorptiota tarvittaisiin sen täyttämiseksi. {{ui:Toista tässä huoneessa}} toistaa äänen, taputuksen, näppäillyt sävelet tai oman äänitiedostosi huoneelle lasketun impulssivasteen läpi. Absorptioarvot ovat tyypillisiä julkaistuja arvoja, jotka voit korvata. Katso [Huoneakustiikka](topic:room-acoustics).
- **Tulvan, tuulen ja maanjäristyksen toisto.** {{ui:Vaaran toisto}} toistaa veden nousua huoneissa, tuulen painetta kullakin kerroksella ja maanjäristyksen tärinää kerroksissa pohjapiirroksessa tai julkisivussa aikaliukusäätimellä. Yksinkertaiset mallit ja niiden oletukset paneelissa; ei rakennusmääräysten tarkistus. Katso [Toista tulva, tuuli tai maanjäristys](topic:hazard-playback).
- **Mikä kuluu viidessäkymmenessä vuodessa.** {{ui:Elinkaarinäkymä}} luettelee ikkunat, ovet, pinnat ja katon, kullakin käyttöiän, vaihtovuodet ja, kun kirjoitat yksikköhinnan, kustannukset vuosittain ja niiden nykyarvon. {{ui:Tallenna aikataulu (CSV)}} kirjoittaa sen ulos. Käyttöiät ovat suunnitteluarvoja. Katso [Katso, mikä kuluu viidessäkymmenessä vuodessa](topic:life-cycle-view).
- **Betoni- ja maanjäristystarkistukset.** {{ui:Betonisauvat}}- ja {{ui:Maanjäristyskuormat}}-lohkot {{ui:Analyysi}}-välilehdellä tarkistavat betonipalkit ja -pilarit ACI 318-19:n mukaan ja tekevät ekvivalentit vaakavoimat ASCE 7-22:n mukaan jäykillä lattioilla, kerrosnäytöllä. Insinöörin tarkistettavaksi. Katso [Tarkista betonisauvat ja tee maanjäristyskuormat](topic:concrete-and-seismic).

**Tarkistus ja raportointi**

- **Tarkistus IDS:ää vasten.** Lataa asiakkaasi antama `.ids`-tiedosto ja näe jokainen elementti, joka ei täytä sitä, Ongelmissa ennen IFC:n toimittamista. Avaa {{ui:Tarkista IDS:ää vasten}} kohdassa {{ui:Mallintarkastukset}}. Katso [Tarkista malli asiakkaan IDS:ää vasten](topic:check-against-ids).
- **Tunnisteet ja luettelot.** Määrittele omat tunnisteesi, aseta ne monelle elementille kerralla ja tee luetteloita, joiden sarakkeet, suodattimet ja ryhmät lukevat niitä; tunnisteet säilyvät IFC:ssä. Katso [Tunnisteet ja luettelot](topic:tags-and-schedules).
- **Asiakirjat mallista.** {{ui:Asiakirjat mallista}} täyttää määritysmallin avoimesta IFC:stä ja tallentaa sen PDF-, Word- tai Markdown-muodossa. Katso [Asiakirjat mallista](topic:documents-from-the-model).
- **Skannauksen vertailu malliin.** Kun pistepilvi on auki, {{ui:Vertaa}} arvioi jokaisen elementin rakennetuksi, osittain rakennetuksi, puuttuvaksi tai saavuttamattomaksi ja näyttää rakennetun prosenttiosuuden. Katso [Vertaa skannausta malliin](topic:compare-scan-with-model).
- **Hiilijalanjälki ja kustannus.** Hiilipaneeli laskee yhteen sisältyvän hiilen muokattavasta kerroinliitteestä, ja Kustannus-paneeli jakaa hinnat 4D-aikatauluun. BimCraftin mukana tulevat kertoimet ovat yleisiä ja merkitty tarkistamattomiksi. Katso [Sisältyvä hiili ja kustannus](topic:embodied-carbon-and-5d-cost).
- **Mikä tahansa karttaprojektio.** {{ui:Mittaa}} › {{ui:Koordinaattijärjestelmä…}} hyväksyy EPSG-numeron, UTM-vyöhykkeen, nimen tai oman projektiomäärittelysi. Katso [Georeferointi mihin tahansa projektioon](topic:georeference-any-projection).

**Piirtäminen ja muokkaaminen**

- **Siirrä, kohdista ja jaa.** {{ui:Koontiversio}}-ryhmässä; {{key:Shift+M}} aloittaa Siirron (tavallinen {{key:M}} on yhä Mittaa). Siirto kopioi, kun painat {{key:C}}, jokainen vaihe on yksi kumoaminen, ja se kulkee Live TeamWork -istunnossa. Katso [Siirrä, kopioi, kohdista ja jaa](topic:move-align-distribute).
- **Kuvat piirustuksen alla.** {{ui:Koontiversio}} › {{ui:Kuva}} sijoittaa PNG-, JPEG- tai WebP-kuvan tason pohjapiirroksen alle tai pystytasolle. Aseta mittakaava kahdella pisteellä, ja siirrä, käännä, häivytä ja lukitse sitä. MarkupCraftissa kopioitu alue liitetään sen arkin mittakaavassa. Katso [Aseta kuva pohjapiirroksen alle](topic:pictures-as-backgrounds).
- **Seinät skannauksesta.** Kun skannaus on auki, seinät, ovet ja huoneet tulevat ehdotuksina, jotka säilytät tai hylkäät yksitellen, yhdessä kumoamisvaiheessa. Vain kahteen kohtisuoraan suuntaan olevat seinät löydetään. Katso [Muuta skannaus seinäksi](topic:scan-to-walls).
- **Jäljitys, kynät ja luonnoksesta portaat.** {{ui:Jäljitä}} näyttää toisen tason katkoviivoin pohjapiirroksen alla, {{ui:Kynät}} antaa seinille, ovet ja ikkunat omat viivapaksuutensa yhdessä näkymässä, ja {{ui:Luonnostele portaat}} muuttaa kävelyviivan portaiksi. Wavefront OBJ -verkko avautuu. Katso [Jäljitä taso, kynät ja portaat luonnoksesta](topic:trace-pens-stairs-obj).
- **Rakennukset osoitteen ympärillä.** CivilCraftin Osoite sivustoksi -toiminnon löytämät rakennukset ja tontti tulevat ehdotuksina; rastita ne, jotka lisäät. Katso [Aloita CivilCraftin sivustosta](topic:site-from-civilcraft).
- **Paneelipiirustukset.** {{ui:Koontiversio}} › {{ui:Paneelipiirustukset}} kehystää seinät, lattiat ja katot puusta tai kevytteräksestä ja tallentaa leikkuuluettelon CSV-tiedostona sekä työpiirustukset PDF-tiedostona. Lähtöarvoja, ei rakenteellinen suunnitelma. Katso [Paneelipiirustukset](topic:panel-drawings).
- **Symbolipaletti ja kasvit.** {{ui:Koontiversio}} › {{ui:Symbolipaletti}} löytää sähkö- ja putkisymboleja nimen perusteella; {{ui:Kirjasto}}-välilehden {{ui:Kasvit}}-lähde listaa noin 400 kasvia pohjapiirrossymboleineen. Katso [Symbolipaletti](topic:symbol-palette) ja [Sijoita kasvi](topic:plant-list).

**Putket, kanavat ja energia**

- **Jako-, VRF- ja puhallinkelat.** Sisä- ja ulkoyksiköt liitäntöineen sekä linjasarjat, jotka on mitoitettu esimerkkiarvotaulukosta, jota voit muuttaa. Katso [Jako-, VRF- ja puhallinkelat](topic:split-vrf-fan-coils).
- **Laskelmat.** Laskelmat-paneeli tarkistaa syöttöputkien ja kanavien koon painehäviöllä, reitittää kaapelit kaapelihyllyihin ja putkiin ja näyttää niiden täyttöasteen sekä laskee valaistuksen IES- tai EULUMDAT-tiedostoista. Oletukset on merkitty; kirjoita oman normisi arvot. Katso [Putki-, kanava-, kaapeli- ja valaistuslaskelmat](topic:mep-calculations).
- **PCF-tiedostot.** Putkityökalun **Vie PCF** kirjoittaa linjat putkijännitys- ja isometrisiin ohjelmiin, ja takaisin luettu PCF-tiedosto piirtää putkensa. Katso [Putkikomponenttitiedostot](topic:piping-pcf).
- **Aurinkosähkö.** Sijoita kenttiä kattoihin tai maahan, varjosta ne mallista, arvioi vuosienergia, tarkista jonot ja tee yksiviivakaaviodata. Aloitusmoduuli ja häviöt ovat yleisiä. Katso [Aurinkosähkö](topic:solar-pv).
- **EnergyPlus-tiedosto.** Tarkista EnergyPlus-paneeli kirjoittaa mallin IDF-tiedostona ajettavaksi omalla EnergyPlus-asennuksellasi. Selaimessa ajaminen vaatii itse isännöimäsi version ja osoitteen, jonka kirjoitat; BimCraft ei sisällä sitä. Katso [Tarkista lämmitys ja jäähdytys EnergyPlusilla](topic:check-with-energyplus).

**Kuvat ja tiedostot**

- **Valitse renderointimoottori.** {{ui:Renderöi}}-valinnassa on {{ui:Moottori}}. Kaksi sisäänrakennettua moottoriamme (Nopea ja Polunseuranta) pysyvät oletuksena. {{ui:Avaa sovelluksessa}} tallentaa kohtauksen USD- tai glTF-tiedostona, ja Unreal-projektikansion .zip-tiedostona; CadCraft Studiossa lisäosa voi lisätä moottorin. Unreal-liitännäinen, joka avaa projektin, ei ole julkaistu. Katso [Valitse ohjelma, joka piirtää kuvan](topic:render-engines).
- **Studio-kumoaminen.** CadCraft Studiossa BimCraft kertoo Studiolle jokaisen valmistuneen vaiheen, jotta Studio voi kumota viimeisen vaiheesi siinä ikkunassa, jota viimeksi käytit. Katso [Kumoa sovellusten yli](topic:undo-across-apps).
- **Lisäosat mallissasi.** IFC kirjaa, mitkä lisäosat kirjoittivat siihen, ja tarjoaa puuttuvat, kun avaat sen. Katso [Lisäosat tiedostossasi](topic:add-ons-in-your-file).

**Kaikissa sovelluksissa**

- **Yhdistä tekoälysi.** Oma avustajasi voi ohjata BimCraftia Studion yhteyden kautta ja vastata kysymyksiin mallista, kuten mitkä huoneet ovat tietyn alueen alla. Studiolla ei ole omaa tekoälyä. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Työkalurivin rivit}} tarjoaa Rivitys, 2 riviä tai 1 rivi; Rivitys on oletus.
- **Syötelaitteet.** Kosketuslevy, kynä, 3D-hiiri, ohjain ja MIDI-asetukset ovat yhteisiä kaikille sovelluksille.
- **Ongelmat ja Live.** Varoituspaneeli ja Live-istunnot toimivat kuten ennenkin, ja uudet tarkistukset syöttävät Ongelmat-listaa.
- **Kielet.** 54 kieltä, joista kymmenen on uusia. Muut kuin englanti ovat koneellisia luonnoksia, joita äidinkielinen puhuja ei ole vielä lukenut; ohjeaiheet ovat enimmäkseen englanniksi.

### Korjattu versiossa 0.8.1

- **Valintanauha ja projektiselaimen asettelu.** Lisää › Tuo CAD, Lisää › Kuva ja Hallinta › Projektin yksiköt sanoivat ”Ei vielä toteutettu BimCraftissa”. Kuva avaa nyt Kuva-työkalun, Tuo CAD avaa {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} (DWG, DXF, PDF tai skannaus) ja Projektin yksiköt avaa {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Yksiköt}}. Siirrä ja Kohdista suorittavat Siirto- ja Kohdistustyökalut, Taso avaa {{ui:Lisää tasoja…}}, Vaiheet avaa Saneerausvaiheet-osion ja Materiaalit avaa materiaalikirjaston.
- **DWG-luokkaosio.** Se luettiin väärin tyypiksi; korjattu BimCraftissa ja muissa DWG:tä lukevissa sovelluksissa.
- **Kieli ajon aikana.** Studio ja pakatut versiot voivat vaihtaa kieltä ilman uudelleenkäynnistystä. Tätä ei ole vielä testattu jokaisella alustalla; kerro, jos kieli ei vaihdu.
- **Archicad-pakettiskripti.** `archicad_bundle.py`, erillinen lataus, löytää nyt Archicadin polun, valvoo kansiota enintään 20 sekuntia ja yrittää uudelleen paketin vierellä.

### Ei vielä tässä versiossa

- **Turvallisuus- ja suunnitteluapuvälineet.** Ihmiset rakennuksessa -osiossa ei ole rakennusmääräyksen mukaista kulkumatkarajaa (sen kirjoitat itse), eikä sitä ole tarkistettu käsin oikealla pohjapiirroksella. Akustiikka-, elinkaari- ja vaaralukuja pidetään suunnittelun arvoina, ei määräystarkistuksena.
- **Ilmastoskenaariot ja EnergyPlus.** Sisäänrakennettuja ilmastoskenaarioita ei ole: voit ladata skenaariotiedoston tulvaajoa varten. Selaimessa ajettava EnergyPlus-ajo ei kuulu tähän julkaisuun.
- **Valintanauha.** Materiaalilaskenta pysyy ”Ei vielä toteutettu” -tilassa, koska BimCraftissa ei ole materiaalimäärien luetteloa, ja 54 muuta harmaana olevaa valintanauhatyökalua ei vielä ole BimCraftissa taustallaan.
- **Allekirjoitus ja alustat.** Windows-asennusohjelmat ja macOS:n .dmg ovat allekirjoittamattomia, joten SmartScreen näyttää {{ui:Lisätietoja}}, sitten {{ui:Suorita silti}}, ja macOS vaatii oikealla napsauttamisen ja sitten {{ui:Avaa}}. iPad- ja iPhone-versiota ei ole rakennettu uudelleen versiolle 0.8.1.
- **Oikean sivun testit.** Jotkin vanhemmat BimCraftin selaintestit epäonnistuvat testisivullamme, kuten ennen versiota 0.8.1.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Aiemmat muutokset ovat [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
