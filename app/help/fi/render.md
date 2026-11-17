---
title: Renderöi mallista kuva
summary: Tee päivänvalokuva 3D-näkymästä: taivas, aurinko kohteen leveyspiirin mukaan, pehmeät varjot, lasi-ikkunat; korkealla laadulla WebGPU:lla polunseurannalla näytönohjaimella, taivaineen, kameroineen, valojen sekoituksella, sävytyksellä, sumulla ja renderöintijonolla.
keywords: renderöinti, esiasetus, esiasetukset, näkymän esiasetus, sisätila, ulkotila, leikkausnäkymä, yö, yksi napsautus, renderöinti, polunseuranta, säteenseuranta, globaali valaistus, heijastukset, taittuminen, korkea laatu, valokuva, fotorealistinen, realistinen, kuva, kuva, png, still, taivas, aurinko, päivänvalo, varjot, pehmeät varjot, ympäristön okkluusio, lasi, ikkunat, metalli, materiaalit, valotus, kirkkaus, pilvinen, hämärä, studio, esitys, visualisointi, webgpu, kohinanpoisto, fyysinen taivas, hdri, ies, syväterävyys, panoraama, valkotasapaino, valojen sekoitus, renderointielementit, exr, 16-bittinen png, sumu, kaustikat, renderointijono
from: beb74cc7
---

{{ui:Renderöi}}-painike työkalupalkissa tekee 3D-näkymästä kuvan, joka näyttää päivänvalolta: taivas, aurinko siinä, missä kohteen leveyspiiri sen asettaa, pehmeät varjot, koko taivaasta tuleva valo, joka tummentaa nurkat, ja värit, jotka voivat näyttää lasilta tai metallilta. Mallia ja tiedostoa ei muuteta.

## Renderöi näkymä

1. Aseta 3D-näkymä niin kuin haluat kuvan: kierrä ja zoomaa, piilota kerrokset tai kohteet, joita et halua, ja aseta [leikkaus](topic:section-plane), jos kuvan pitää näyttää leikkaus.
2. Napsauta työkalupalkin {{ui:Renderöi}}-painiketta.
3. Valitse {{ui:Näkymä}}, jos painettu ei ole haluamasi (katso [Näkymän esiasetukset](topic:render#scene-presets-a-good-picture-in-one-click)), valitse {{ui:Koko}} ja napsauta valintaikkunassa {{ui:Renderöi}}.

   Kuva täyttyy renderoinnin edetessä ja tasoittuu jokaisella kierroksella. {{ui:Pysäytä}} (tai {{key:Esc}}) lopettaa sen aikaisin ja säilyttää kuvan siihen asti.

4. Napsauta {{ui:Tallenna}}, jolloin kuva ladataan PNG-tiedostona, tai {{ui:Tallenna nimellä}} muulle muodolle (katso [Tallenna kuva](topic:render#save-the-picture)). Se saa mallin tiedoston nimen.

:::tip
Aloita {{ui:Luonnos}}-laadulla kokoon {{ui:Näkymän koko}} kameran tarkistamiseksi, ja renderöi sitten {{ui:Hyvä}} tai {{ui:Paras}} suuremmassa koossa lopullista kuvaa varten.
:::

## Näkymän esiasetukset: hyvä kuva yhdellä napsautuksella

Valintaikkunan yläosassa on neljä {{ui:Näkymä}}-painiketta. Kukin asettaa taivaan, kirkkauden, maan, reunaviivat, laadun ja auringon yhdellä napsautuksella, joten ennen ensimmäistä kuvaa ei tarvitse oppia mitään. Napsauta yhtä ja sitten {{ui:Renderöi}}.

| Näkymä | Mitä se asettaa | Käyttöön |
|---|---|---|
| {{ui:Ulkona}} | Kirkas taivas, mallin oma aurinko, maa päällä | Rakennus ulkoa |
| {{ui:Sisätila}} | Pilvinen taivas (tasainen valo, ei kovia auringonläikkiä), puolen valotusaskeleen kirkkaampi | Näkymä huoneen sisältä |
| {{ui:Leikkausnäkymä}} | Valkoinen studio, ei maata, reunaviivat nopeassa renderöinnissä | Leikkauksen leikkaama malli |
| {{ui:Yö}} | Aurinko laskenut (keskiyö talvella kohteen pallonpuoliskolla), yhden valotusaskeleen kirkkaampi | Mallia valaisevat lamput. Ilman lamppuja kuva on pimeä |

- {{ui:Valitse näkymälle}} valitsee puolestasi: {{ui:Leikkausnäkymä}}, kun leikkaus on päällä, {{ui:Sisätila}}, kun kamera on mallin sisällä, muuten {{ui:Ulkona}}. Kun avaat valintaikkunan ensimmäisen kerran, se alkaa tästä itsestään.
- Kaikki asetukset pysyvät alla, ja niitä voi muuttaa. Kun muutat yhtä näkymän asettamaa asetusta, mitään painiketta ei ole enää painettuna, ja painikkeiden alla oleva rivi kertoo, että asetukset ovat omia. Napsauta näkymää uudelleen palauttaaksesi sen arvot.
- Näkymä ei koske moottoriin, muotoon, kokoon, materiaaleihin, kameraan tai lamppuihin.

:::note
Näkymät antavat samat arvot ModelCraftissa ja BimCraftissa. Valmis kuva riippuu mallistasi ja näytönohjaimestasi.
:::

## Mitä kuvassa näkyy

Se, mitä 3D-näkymä näyttää täytettynä: piilotetut ja läpinäkyvät kohteet, piilotetut kerrokset ja piilotetut mallit jätetään pois, ja huoneet näkyvät vain, kun {{ui:Tilat}} on päällä. Leikkaustaso tai leikkauslaatikko leikkaa kuvan samalla tavalla kuin näkymän. Kohteet näkyvät omilla väreillään: väritys ominaisuuden mukaan ({{ui:Väri}}-välilehti) ei ole käytössä.

## Asetukset

| Asetus | Mitä se tekee |
|---|---|
| {{ui:Koko}} | Näkymän koko, kaksinkertainen näkymän koko, Full HD, 4K tai neliö |
| {{ui:Muoto}} | {{ui:Nopea}} tai {{ui:Korkea laatu (polunseuranta)}} (alla) sen {{ui:Aikaraja}}-asetuksella |
| {{ui:Laatu}} | Kuinka monta kierrosta (tai korkealaatuisessa tilassa näytettä) keskiarvoistetaan: {{ui:Luonnos}} 16, {{ui:Hyvä}} 64, {{ui:Paras}} 256. Enemmän kierroksia antaa tasaisemmat varjot ja reunat ja vie kauemmin |
| {{ui:Taivas}} | {{ui:Kirkas taivas}}, {{ui:Pilvinen}}, {{ui:Hämärä}} tai {{ui:Valkoinen studio}} (tasainen valkoinen tausta) |
| {{ui:Aurinko}} | 21. kesäkuuta kello 15.00 leveyspiirillä, jonka tiedosto antaa kohteelleen (IfcSite), käännettynä mallin todelliseen pohjoiseen. Valitse {{ui:Käytä toista päivämäärää ja aikaa tälle kuvalle}} toiselle ajalle |
| {{ui:Kirkkaus}} | Vaaleampi tai tummempi askelin (valotusaskelin) |
| {{ui:Maa mallin alla}} | Maa mallin alimmassa pisteessä, joka ottaa varjot vastaan ja haalistuu horisonttiin |
| {{ui:Piirrä särmät}} | Piirtää kohteiden särmät ohuina viivoina kuvan päälle |

Kun aurinko on valitulla ajalla horisontin alapuolella, on yö: taivas tummuu ja mallin lamput valaisevat sen.

## Lamput

Jokainen valaisin mallissa on lamppu kuvassa: valaisimet IFC-tiedostossa (IfcLightFixture tai elementti, jonka tyyppi on valaisin), mukaan lukien kirjastosta sijoittamasi. Jokainen loistaa alas valaisimen alapuolelta. Kun tiedosto antaa valaisimen tehon, kirkkaus seuraa siitä; muuten se on 800 lumenia, lämmin valkoinen.

Valintaikkuna listaa lamput kohdassa {{ui:Lamput}}: poista valinta sammuttaaksesi yhden, tai kirjoita sen kirkkaus luumeneina. Nämä muutokset tallennetaan IFC-tiedostoon (valaisimen `CadCraft_Light`-ominaisuusjoukkoon, jossa voit muuttaa niitä myös Ominaisuudet-kohdassa), ja {{key:Ctrl+Z}} kumoaa ne.

Kun tiedosto ei kerro kohteen sijaintia, aurinko sijoitetaan 40° pohjoisen leveyspiirille, ja valintaikkuna kertoo sen. Aika on kohteen paikallinen kellonaika, joka lasketaan sen pituuspiiristä, joten se voi olla tunnin pielessä paikoissa, joissa kellot on asetettu eri tavalla.

Nämä asetukset säilyvät tässä selaimessa seuraavaa kuvaa varten. Niitä ei tallenneta IFC-tiedostoon.

## Lasi ja muut materiaalit

Kohdan {{ui:Materiaalit}} alla jokaisella näytön värillä on ulkonäkö: {{ui:Matta}}, {{ui:Satiini}}, {{ui:Kiiltävä}}, {{ui:Metalli}}, {{ui:Kiillotettu metalli}}, {{ui:Lasi}} tai {{ui:Himmeä lasi}}. IFC-tiedoston läpinäkyviksi tekemät värit (esimerkiksi ikkunalasitus) alkavat tilasta {{ui:Lasi}}.

:::note
{{ui:Nopea}}-muodossa lasi ja metalli heijastavat taivasta, eivät muuta mallia, eikä valo taitu lasin läpi. Alla oleva {{ui:Korkea laatu (polunseuranta)}}-muoto tekee molemmat.
:::

## Korkea laatu

Valitse {{ui:Muoto}} › {{ui:Korkea laatu (polunseuranta)}} kuvaa varten, joka seuraa valoa niin kuin kamera sen näkee:

- valo heijastuu pintojen välillä, joten ikkunan tai lampun valaisema huone valaistaan joka puolelta, ja värit valuvat naapureihinsa;
- lasi on todellista lasia: valo taittuu sen läpi ja se heijastaa mallia;
- metalli ja kiillotetut pinnat heijastavat muuta mallia;
- valopaneelit valaisevat paneelien tavoin, pehmeillä varjoilla.

Se on paljon hitaampi kuin {{ui:Nopea}}: jokainen kierros seuraa jokaisen pikselin valoa uudelleen. Kuva alkaa rakeisena ja selkeytyy, kun näytteitä kertyy, joten aloita pienestä ({{ui:Näkymän koko}}, {{ui:Luonnos}}) ja valitse {{ui:Aikaraja}}: kun se loppuu, kuva siihen asti säilyy. {{ui:Pysäytä}} säilyttää sen myös. Ensimmäinen kierros odottaa, kun selain valmistelee polunseurantaa.

Kun selaimessa on WebGPU, polunseuranta on CadCraftin oma ja toimii näytönohjaimella; kuvan alla oleva rivi kertoo sen. Pysäytyksen tai aikarajan jälkeen {{ui:Jatka}} jatkaa samaa kuvaa, kunnes sillä on kaikki näytteensä; asetuksen muuttaminen tai {{ui:Renderöi}}-painikkeen painaminen uudelleen aloittaa alusta. Ilman WebGPU:ta kuva lasketaan polunseurannalla WebGL:llä (rivi kertoo sen), eikä {{ui:Jatka}} ole tarjolla.

:::linux
Firefoxissa ja useimmissa Chrome-asennuksissa Linuxilla ei vielä ole WebGPU:ta, joten korkea laatu käyttää siellä WebGL:ää.
:::

Tässä muodossa reunoja ei piirretä, tekstuurit näyttävät värinsä ja karheutensa mutta eivät pinnan kuoppia ja kohoumia, ja leikkaus tehdään mallille ennen kuvan alkua.

{{ui:Poista kohina (poistaa näytteiden jälkeen jäävän rakeisuuden)}} on oletuksena päällä: kun kuva on valmis tai pysäytetty, jäljelle jäänyt rakeisuus poistetaan tätä varten tehdyllä neuroverkolla (Intel Open Image Denoise -julkaistu verkko, ajettuna omalla tietokoneellasi: näytönohjaimella, muuten prosessorilla). {{ui:Näytä}} › {{ui:Kuva ennen kohinan poistoa}} näyttää sen renderöitynä.

## Taivaat ja valoprofiilit näytönohjaimella

WebGPU:lla korkea laatu tarjoaa kaksi taivasta lisää:

- {{ui:Fyysinen taivas}} laskee päivänvalon auringon korkeudesta: syvän sinisen yläpuolella, vaalean vyön horisontissa, ja aurinko lämpenee ja himmenee matalalla. {{ui:Utu}} vaihtelee hyvin selkeästä päivästä (2) sameaan (10).
- {{ui:Taivaskuva (HDRI)}} valaisee mallin todellisen paikan panoraamakuvalla. {{ui:Valitse kuva…}} ottaa tasasuorakulmaisen (equirectangular) `.hdr`- tai `.exr`-tiedoston; {{ui:Käännä}} kääntää sen mallin ympäri, ja {{ui:Kuvan kirkkaus}} tekee siitä kirkkaamman tai tummemman. Kuvassa on oma aurinko, joten mallin aurinkoa ei lisätä. Se säilyy vain niin kauan kuin sivu on auki: sivun uudelleen avaamisen jälkeen valitse se uudelleen.

Jokainen lamppu {{ui:Lamput}}-luettelossa voi ottaa valmistajan valoprofiilin: {{ui:IES-profiili…}} lukee IES (LM-63) -tiedoston, ja lamppu heittää valonsa niin kuin kyseinen valaisin tekee (kapea alasvalaisin, seinäpesuri). Jokainen lamppu, jolla on sama nimi, käyttää sitä, ja lamppu säilyttää oman kirkkautensa. Napsauta profiilin nimeä lopettaaksesi sen käytön.

Kirkkaat lasi-ikkunat auttavat taivaan valoa löytämään tiensä huoneeseen.

{{ui:Nopea}}-muoto ja WebGL-polunseuranta näyttävät {{ui:Fyysisen taivaan}} ja {{ui:Taivaskuvan (HDRI)}} kirkkaana taivaana ja jättävät valoprofiilit huomiotta.

## Kamera

{{ui:Kamera}} asettaa kuvan kuin valokuvan:

- {{ui:Valotus}}: säilytä {{ui:Kirkkauden liukusäädin}}, tai valitse {{ui:Kameran asetukset}} ja aseta {{ui:Aukko (f-luku)}}, {{ui:Suljinaika}} ja {{ui:ISO}} kuten kameralla; niiden vieressä oleva EV on tavallinen valotusarvo. f/16 1/100 s:llä ja ISO 100:lla vastaa aurinkoista päivää; tummempi kohtaus tarvitsee leveämmän aukon, hitaamman suljinajan tai suuremman ISO:n. Tämä toimii kaikissa muodoissa.
- {{ui:Syväterävyys}} sumentaa sen, mikä on lähempänä tai kauempana kuin {{ui:Tarkennusetäisyys (m)}}, niin kuin tällaisen f-luvun objektiivi tekisi (jätä tyhjäksi, jos haluat tarkentaa näkymän keskelle). {{ui:Aukon muoto}} antaa tarkentamattomille kohokohdille pyöreän tai lamellimaisen muodon.
- {{ui:Kahden pisteen perspektiivi (pystyviivat pysyvät pystysuorina)}} tasaa kameran ja siirtää kuvaa, kuten arkkitehtuurin siirtolinssi tekee, joten seinät eivät kallistu, kun katsot rakennukseen ylös tai alas.
- {{ui:Valkotasapaino}} asettaa, mikä valonväri näkyy valkoisena: matalampi arvo (esimerkiksi 3000 K) lämpimälle lamppuvalolle, korkeampi varjoon ja pilvisiin päiviin.
- {{ui:Projektio}}: {{ui:360° panoraama}} tekee 2:1-kuvan kaikesta kameran ympärillä panoraamakatselimille; {{ui:360° stereopanoraama}} pinoaa vasemman ja oikean silmän panoraaman kuulokkeisiin; {{ui:Kuutiokartta (6 sivua)}} tekee kuusi neliön muotoista näkymää 3 × 2 -ruudukossa. Leveys tulee {{ui:Koko}}-asetuksesta.

Projektio, syväterävyys, kahden pisteen perspektiivi ja valkotasapaino tarvitsevat näytönohjaimen polunseurannan (WebGPU), joten ne näkyvät vain muodossa {{ui:Korkea laatu (polunseuranta)}}.

## Kuvan viimeistely

{{ui:Kuva}} sävyttää korkean laadun kuvan kuin valokuvan, ja jokainen säädin muuttaa valmista kuvaa heti ilman uutta renderöintiä:

- {{ui:Ilme (näkymämuunnos)}}: {{ui:ACES filmic}} (kuva kuten ennen), {{ui:AgX}} (pehmeämpi, säilyttää värin hyvin kirkkaassa valossa), {{ui:Filmic}} (lempeä filmikäyrä) tai {{ui:Vakio}} (tavallinen; kirkas valo leikkautuu valkoiseksi).
- {{ui:Kontrasti}} ja {{ui:Kirkkaiden alueiden pakkaus}} (palauttaa yksityiskohtia hyvin kirkkaisiin kohtiin).
- {{ui:Hehku}} (pehmeä hehku kirkkaan valon ympärillä), {{ui:Häikäisy}} sen {{ui:Häikäisysäteet}}-asetuksineen (tähtisäteet kirkkaimmista pisteistä) ja {{ui:Vinjetti}} (tummemmat nurkat).
- {{ui:Väritaulukko (.cube)…}} soveltaa värisävytyksen `.cube`-tiedostosta sen {{ui:Väritaulukon voimakkuus}}-asetuksella; kuten taivaskuva, se säilyy vain niin kauan kuin sivu on auki.

## Tallenna kuva

{{ui:Tallenna nimellä}} valitsee tiedoston {{ui:Tallenna}}-painikkeen vieressä: {{ui:PNG}}, {{ui:JPEG}} tai {{ui:WebP}} jakamista varten (JPEG ja WebP vain, jos selain osaa kirjoittaa ne). Korkealaatuisen renderöinnin jälkeen näytönohjaimella myös:

- {{ui:PNG, 16 bittiä}}: sävytetty kuva hienommin portain sävyjen välillä, tulostamista tai jatkomuokkausta varten.
- {{ui:EXR, jokainen kerros (32-bittinen liukuluku)}}: kuva renderöitynä (lineaarinen valo, ei sävytystä) jokaisen renderöintielementin ja valoryhmän ollessa omana kerroksenaan, yhdistelyohjelmiin.
- {{ui:Renderöintitiedosto (.ccrender, väritettäväksi myöhemmin uudelleen)}}: kaikki, mitä valintaikkuna tarvitsee kuvan sekoittamiseen ja sävyttämiseen uudelleen. {{ui:Avaa renderöintitiedosto…}} tuo sen takaisin sekoituksineen ja sävytyksineen ilman renderöintiä.

## Sekoita valot renderöinnin jälkeen

Kytke päälle {{ui:Valojen sekoitus (muuta kunkin valon väriä ja kirkkautta renderöinnin jälkeen)}} ennen kuin painat {{ui:Renderöi}}. Kun kuva on valmis (tai pysäytetty), {{ui:Sekoita kuva}} listaa sen valot ryhminä: taivas, aurinko ja lamput nimen mukaan (jokainen saman nimen lamppu on yksi ryhmä). Kytke ryhmä pois, anna sille väri tai tee se kirkkaammaksi tai tummemmaksi, ja kuva muuttuu heti ilman uutta renderöintiä. {{ui:Tallenna sekoitus}} säilyttää sekoituksen nimellä valittavaksi myöhemmin; {{ui:Kuten renderöity}} palauttaa kuvan sellaisena kuin se tehtiin. {{ui:Tallenna}} tallentaa sekoitetun kuvan.

{{ui:Renderöintielementit (albedo, normaalit, syvyys, diffuusi, kiilto, läpäisy, emissio, tunnukset)}} säilyttää kuvan osat myös. {{ui:Näytä}} vaihtaa näkymän johonkin niistä: pintavärit (albedo), normaalit, syvyys, diffuusi, kiilto ja läpäisevä valo (kukin suora ja epäsuora), se, mikä hohtaa, ja taivas sekä yhden värin per kohde tai per materiaali maskien tekemiseen.

Molemmat pitävät ylimääräiset kerrokset näytönohjaimella. Suurilla kooilla näytönohjaimessa ei välttämättä ole tilaa; valintaikkuna kertoo sen, ja pienempi koko toimii.

## Sumu, savu, kohina ja kaustikat

Nämä ovat kohdassa {{ui:Sumu, savu ja kohina}} ja toimivat {{ui:Korkea laatu (polunseuranta)}}-muodossa näytönohjaimella; muut moottorit jättävät ne pois.

- {{ui:Sumu ja utu}} täyttää ilman korkeuteen asti sumulla, jonka aurinko, taivas ja lamput valaisevat. {{ui:Kuinka kauas näkee, metreinä}} asettaa sen paksuuden (noin 100 m on kevyt utu, 20 m paksu sumu), {{ui:Sumun korkeus maan yläpuolella, metreinä}} on sen yläraja, ja {{ui:Valokeilat}} kertoo, kuinka paljon sumu hehkuu valoa kohti. Auringonvalo jättää sumun yläosasta, joten missä aurinko tulee ikkunasta tai rakennusten välistä, näet sen valokeiloina.
- {{ui:Savu tai pilvi}} lisää yhden savu- tai pilvitilavuuden, joka valaistaan kuten sumu. {{ui:Laji}} on {{ui:Pilvi}}, {{ui:Savupatsas}} tai {{ui:Tilavuustiedostosta (.ccvol)}}, CadCraftin oma ruudukkomuoto. {{ui:Tarkkuus}} ja {{ui:Vaihtelu}} muuttavat tehtyä pilveä tai patsasta; {{ui:Sen pisimmän sivun koko metreinä (0 = mallin koko)}}, {{ui:Siirrä X (m)}}, {{ui:Siirrä Y (m)}}, {{ui:Siirrä Z (m)}} ja {{ui:Käännä}} sijoittavat sen (se alkaa mallin keskeltä); {{ui:Paksuus}} tekee siitä tiheämmän, {{ui:Eteenpäinhehku}} tekee siitä kirkkaamman valoa kohti, ja {{ui:Väri}} sävyttää sen. Tilavuustiedosto säilyy vain niin kauan kuin sivu on auki, kuten taivaskuva.
- {{ui:Lopeta aikaisin, missä kuva on puhdas (mukautuva näytteenotto)}} ei anna enempää näytteitä pikseleille, jotka ovat tasaantuneet. {{ui:Hyväksyttävä kohina}} on se rakeisuus, joka jää jäljelle, kun pikseli pysähtyy. Kuvan alla oleva rivi kertoo, kuinka monta näytettä pikseli sai keskimäärin.
- {{ui:Kaustikat (lasin taittama tai peilien heijastama valo)}} seuraa valoa lampuista ja auringosta, joten kirkas laikku lasipallon alla tai peilin valo seinällä tulee puhtaana eikä rakeisena. Se on pois päältä, kun sumu, savu, valojen sekoitus tai renderöintielementit ovat päällä, ja se on tehty kuville, ei 360°-kuville.

## Renderöintijono

{{ui:Renderöintijono}} valintaikkunassa: {{ui:Lisää tämä kuva jonoon}} säilyttää kuvan asetukset ja näkymän, ja {{ui:Aloita jono}} renderöi odottavat kuvat yksi toisensa jälkeen tällä tietokoneella. Sivun sulkeminen säilyttää jonon; avaa sama malli jatkaaksesi. {{ui:Tallenna}} lataa valmiin kuvan; {{ui:Poista}} ja {{ui:Tyhjennä valmiit}} siistivät luettelon. Jono renderöi korkealaatuisena, joten se tarvitsee WebGPU:n.

## Kuinka kauan kestää

Kuva tehdään omalla tietokoneellasi näytönohjaimella; mitään ei ladata. Aika kasvaa kierrosten ja pikseleiden mukaan: {{ui:Paras}} on 16 kertaa niin monta kierrosta kuin {{ui:Luonnos}}, ja 4K-kuvassa on noin neljä kertaa Full HD:n pikselit. Suuret mallit vievät kauemmin per kierros.
