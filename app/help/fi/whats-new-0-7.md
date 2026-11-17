---
title: Mitä uutta versiossa 0.7 (aiemmin)
summary: BimCraft lisää seinät useiden tasojen läpi ja Kopioi tämä taso -toiminnon, seinät PDF:stä ja skannauksista, omat seinärakenteet, rikkaammat perheet, LVI- ja sähkölaitteet liitäntöineen, törmäysjoukot ja putkiosat, kohdeasiakirjat, COBien ja anturilukemat, taivaan ja auringon, päivänvalon akselistossa sekä lämmitys- ja jäähdytystehot, skannausten rekisteröinnin, reaaliaikanäkymän ja polunseurannan näytönohjaimella, STEP- ja USD-tuen, kirjastomuunnelmat sekä lisää tekoälyavustajille.
keywords: mitä uutta 0.7, aiempi julkaisu, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, seinät useiden tasojen läpi, kopioi tämä taso, pdf, skannaus, jäljitys, seinät pohjapiirroksista, seinärakenteet, tasot, ydin, kalvo, viitemitat, materiaalikirjasto, näyttöyksiköt, näkymätyyli, rungotus, lattiapalkit, perheet, parametrit, pohjapiirroksen symboli, kuumat kohdat, toisto, yksityiskohtataso, sisäkkäiset perheet, csv-koot, elementtikohtainen, laitteet, liitännät, yhteydet, selvitykset, aukot, putkiosat, putkiosa-arkit, työmaahitsi, kanavan katkaisuluettelo, asiakirjat, cobie, anturit, mqtt, reaaliaikasyöte, pystysuora taivaskomponentti, auringon lämpökuorma, päivänvalo ruudukko, lämmitys, jäähdytys, kuormat, u-arvo, rekisteröi skannaukset, icp, e57, reaaliaikanäkymä, polunseuranta, webgpu, kohinanpoisto, fyysinen taivas, valojen sekoitus, renderointijono, koneesi, step, usd, projektipaketti, kehitä massa, muunnelmat, avustajat, lisäosa-api, kasvi, sähkö, mitoitustarkastukset
from: ef226539
---

Tämä on se, mitä muuttui BimCraft 0.7:ssä verrattuna versioon 0.6. Lista on ryhmitelty alueittain, tärkeimmät ensin.

## Uutta

### Rakennuksen piirtäminen

- **Seinät useiden tasojen läpi.** Seinä-työkalun korkeusluettelo tarjoaa **Ylös asti** mitä tahansa ylempää tasoa, kuten Ominaisuudet tekee valitulle seinälle. Välissä olevien tasojen pohjapiirroksissa seinä näkyy vaaleampana, huoneet sulkeutuvat sitä vasten, ja ovia ja ikkunoita voi sijoittaa siihen näistä pohjapiirroksista; **Kulkee läpi** Ominaisuudet-kohdassa nimeää tasot, joiden läpi se kulkee. Katso [Muuta seinää, ovea tai ikkunaa](topic:change-a-wall-or-door#change-a-wall).
- **Kopioi tämä taso.** {{ui:Kopioi tämä taso…}} Tasot-paneelissa piirtää tason seinät niiden ovineen ja ikkunoineen sekä lattiat ja alakatot uudelleen toiselle tasolle tai uudelle tasolle sen päälle, yhdessä kumoamisvaiheessa; huoneet ilmestyvät itsestään. Katso [Piirrä seiniä](topic:draw-walls#levels).
- **Seinät PDF:stä tai skannauksesta.** {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} ottaa nyt vastaan PDF:n (viivapiirros tai sen sisällä oleva skannaus) tai skannatun pohjapiirroksen (PNG, JPEG, TIFF, useita sivuja): jokainen sivu muuttuu tason seinäksi, oviksi, ikkunoiksi ja huoneiksi, ja sivu säilyy pohjapiirroksen alla. Jäljitys ei käytä verkkoa eikä koulutettua mallia, ja tulos on sitä, mitä viivat antoivat: tarkista jokainen taso sivuaan vasten. Katso [Seinät pohjapiirrossarjasta](topic:walls-from-plans).
- **Omat seinärakenteet.** {{ui:Seinärakenteet…}} rakentaa seinätyypin kerros kerrokselta, ytimen, ilmaraot ja kalvot mukaan lukien, sekä mitoitetun esikatselun; {{ui:Materiaalikirjasto…}} säilyttää projektin materiaalit IFC:ssä; {{ui:Merkitse}} › {{ui:Viitemitta}} mittaa pintoihin ja ydinviivoihin ja seuraa seiniä, kun ne muuttuvat. Yhteisön osallistujalta Doc (drsurfbum). Katso [Seinärakenteet ja viitemitat](topic:wall-assemblies).
- **Näyttöyksiköt ja näkymän ohjaimet.** {{ui:Yksiköt}} työkalurivillä näyttää pituudet jalkoina ja tuumina, tuumina, desimaalijalkoina, millimetreinä, senttimetreinä tai metreinä mitoissa, luetteloissa, koordinaateissa, mittauksissa ja leikkauksissa. {{ui:Pohjakuva}}, {{ui:Jaa}} ja {{ui:3D}} ovat työkalurivillä, jakoa voi vetää (tai siirtää näppäimistöllä), {{ui:Varjostettu}}, {{ui:Särmät}} ja {{ui:Rautalanka}} ovat kuutionäkymän vieressä, ja katon kaltevuus, reunalauta ja alakatto muuttavat valittua kattoa heti. Yhteisön osallistujalta Joel (yisraelk). Katso [Piirrä seiniä](topic:draw-walls#levels).
- **Lattiapalkit jänteen mukaan.** {{ui:Rungotus}} voi asetella suunnitellut lattiapalkit (alustava) sekä sahatavaran; se valitsee pienimmän listatun sarjan ja korkeuden, joka ulottuu jänteen yli, 16" tai 24" keskiöväli kumpaankin suuntaan. Ne menevät IFC:hen ja katkaisuluetteloon. Ehdotus valmistajan julkaistusta taulukosta, ei laskelma. Myös Joelilta. Katso [Seinien, lattioiden ja kattojen rungotus](topic:framing).
- **Lisää sähkölaitteita.** {{ui:Sähkö}} lisää data-, puhelin- ja audiovideopistorasiat, valitsinkytkimen, ajastimen, termostaatin, savu- ja lämpöpalovaroittimet, hälytysnappulan ja sireenin, puhaltimen, energiamittarin ja alakeskuksen, kukin omana IFC-luokkanaan. Katso [Sähkösuunnitelma](topic:electrical-plan).

### Perheet

- **Perheet tekevät enemmän.** Parametrit voivat olla kokonaislukuja, tekstiä, materiaali, kynä tai täyttö. Perhe voi piirtää oman pohjapiirrossymbolinsa, toistaa kiinteän kappaleen, merkitä osia karkeampia yksityiskohtatasoja varten, sisältää muita perheitä (jalan pöydässä) ja siinä voi olla vedettäviä kuumia kohtia, myös pohjapiirroksessa sijoitetulla elementillä. Koot tulevat CSV-taulukosta, ja **Elementtikohtaisiksi** merkityt parametrit antavat kahden samankokoisen oven erota toisistaan. Katso [Muokkaa perhettä](topic:family-editor#plan-symbol) ja [Perheet ja niiden koot](topic:families#sizes-from-a-table).

### Putket, kanavat ja laitteet

- **Laitteet liitäntöineen.** {{ui:Koontiversio}} › {{ui:Laitteet}} sijoittaa yleisen ilmanvaihtokoneen, linjapuhaltimen, pumpun, kattilan, vesivaraajan, päätelaitteen, tuloilmaventtiilin, ritilän tai säiliön, mitoitettuna arvoilla, jotka kirjoitat, ja putki- ja kanavaliitännät liitäntöinä. Jokainen tallennetaan omana IFC-luokkanaan IFC-liitännöin. Katso [MEP-laitteet liitäntöineen](topic:mep-equipment).
- **Yhdistetyt linjat.** Liitännästä alkava putki tai kanava saa sen koon ja järjestelmän ja pysyy kiinteästi siinä kiinni: siirrä pumppua, ja sen putki seuraa. {{ui:Tarkista liitokset}} luettelee avoimet liitännät, irralliset päät, koko- ja järjestelmäristiriidat sekä linjat, joita ei syötä mikään. Katso [Yhdistä putket ja kanavat laitteisiin](topic:mep-connections).
- **Putket ja kanavat rakennetta vasten.** {{ui:Törmäystarkastus}} sisältää valmiit sarjat ja {{ui:Putket ja kanavat × rakenne}} yhdellä napsautuksella; {{ui:Tarkista vapaat tilat}} käyttää kunkin linjan eristettä sekä kirjoittamaasi rakoa; {{ui:Tarvittavat aukot}} luettelee kohdat, joissa linjat kulkevat seinien ja laattojen läpi, CSV- ja BCF-havaintoina. Mitään ei leikata. Katso [Tarkista putket ja kanavat rakennetta vasten](topic:mep-against-structure).
- **Teräsputken putkiosat.** Teräslinja leikataan numeroituihin putkiosiin enimmäispituudella ja sijoittamillesi {{ui:Työmaahitsi}}-kohdille. {{ui:Putkiosa-arkit (PDF)}} antaa sivun jokaisesta putkiosasta isometrisine näkymineen, katkaisupituuksineen, liittimineen, hitseineen ja osaluetteloineen, ja {{ui:Kanavan katkaisuluettelo}} luettelee suorat kanavapalat. Katso [Teräsputken putkiosat ja putkiosa-arkit](topic:pipe-spools).

Nämä ovat piirtämisen ja koordinoinnin apuvälineitä, insinöörin mitoittamia: ei virtauksia, paineita eikä tasapainotusta.

### Rakennuksen käyttö

- **Asiakirjat kohteittain.** {{ui:Resurssit}}-välilehti liittää käyttöohjeet, takuut, valokuvat ja piirustukset kohteeseen tiedostonimellä IFC:n vieressä tai verkko-osoitteella; IFC:hen menee vain linkki. Katso [Asiakirjat](topic:assets-and-maintenance#documents).
- **COBie-taulukko.** {{ui:Tallenna COBie-muodossa (.xlsx)}} kirjoittaa COBie 2.4 -luovutustyökirjan. Luettuna takaisin COBie-työkirja luettelee jokaisen muutoksen ennen yhtä {{ui:Käytä}}-vaihetta. Sitä ei ole vielä tarkistettu COBie-validaattorilla. Katso [COBie-taulukko](topic:assets-and-maintenance#cobie-spreadsheet).
- **Anturilukemat ja reaaliaikasyötteet.** Avaa lukemien CSV, tai {{ui:Yhdistä}} suoraan selaimesta omaan MQTT-välittäjääsi tai osoitteeseen, johon rakennusjärjestelmäsi vastaa: jokainen kohde näyttää viimeisimmän lukemansa ja kaavion, on väritetty mallissa ja merkitään, jos se on IFC:hen tallennettujen rajojen ulkopuolella. Lukemat pysyvät välilehdellä; salasanoja ei koskaan tallenneta. Katso [Anturilukemat](topic:assets-and-maintenance#sensor-readings) ja [Reaaliaikaiset lukemat](topic:assets-and-maintenance#live-readings).

### Päivänvalo ja energia

- **Taivas ja aurinko jokaisessa ikkunassa.** {{ui:Päivänvalo}}-välilehti antaa jokaiselle ikkunalle sen pystysuoran taivaskomponentin ja esteen kulman, seuraa aurinkoa päivämäärän läpi {{ui:Aurinko ikkunoista tiettynä päivänä}} -toiminnolla ja laskee {{ui:Päivänvalokerroin ruudukossa}} koko huoneen yli, piirrettynä sen pohjapiirrokseen. Katso [Ikkunan pystysuora taivaskomponentti](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Lämmitys- ja jäähdytystehot.** {{ui:Lämmitys- ja jäähdytystehot}} laskee kunkin huoneen lämpöhäviön, sen vuotuisen lämmityksen asteluvuista ja jäähdytyshuipun mallin rajoista ja kunkin elementin U-arvosta; siihen kirjoitettu U-arvo menee IFC:hen. Katso [Lämmitys- ja jäähdytystehojen arviointi](topic:heating-and-cooling-loads).

Molemmat ovat suunnittelun apuvälineitä julkaistuilla menetelmillä, eivät vaatimustenmukaisuuslaskelmia, ja jokainen paneeli sanoo niin.

### Skannaukset

- **Useiden skannausten rekisteröinti.** {{ui:Rekisteröi skannaukset…}} (aloituspaneelista tai {{ui:Näytä}}-valikosta) sijoittaa skannaukset yhteen kehykseen valittujen pistepareiden tai kirjoitettujen kohteiden avulla, tarkentaa ne ICP:llä ensin piste pisteeseen ja sitten piste tasoon, tallentaa rekisteröinnin pieneksi projektitiedostoksi ja kirjoittaa rekisteröidyn pistepilven yhdeksi LAS- tai E57-tiedostoksi. Katso [Rekisteröi useita skannauksia yhdeksi](topic:register-scans).

### Kuvat ja reaaliaikanäkymä

- **Reaaliaikanäkymä.** {{ui:Reaaliaikanäkymä}} työkalurivillä näyttää mallin reaaliaikaisessa ilmeessä 3D-näkymän vieressä, seuraten sitä ja jokaista muutosta, kävelyn, vuorokauden ajan ja kuukauden kanssa. {{ui:Reaaliaikanäkymä uudessa ikkunassa}} sijoittaa sen toiselle näytölle. Katso [Reaaliaikanäkymä](topic:live-view).
- **Polunseuranta näytönohjaimella.** WebGPU:lla {{ui:Renderöi}} › {{ui:Korkea laatu (polunseuranta)}} ajaa CadCraftin oman polunseurantamoottorin näytönohjaimella, voi pysähtyä ja {{ui:Jatka}}, ja kohina poistetaan lopussa. Ilman WebGPU:ta se käyttää WebGL-polunseurantaa kuten ennenkin. Katso [Korkea laatu](topic:render#high-quality).
- **Lisää Renderöinti-valintaikkunassa.** Näytönohjaimella, joten tarvitaan WebGPU: fyysinen taivas ja taivaskuvat, IES-valoprofiilit, kamera f-luvulla, syvyysterävyys, kaksipistenäkymä, valkotasapaino ja 360° panoraamat, viimeistellyn kuvan sävytys, valojen sekoitus ja renderointielementit renderoinnin jälkeen, sumu, savu ja kaustiikka, tallennus 16-bittisenä PNG-, EXR- tai renderointitiedostona sekä renderointijono. Katso [Taivaat ja valoprofiilit näytönohjaimella](topic:render#skies-and-light-profiles-on-the-graphics-card) ja [Renderointijono](topic:render#the-render-queue).
- **Koneesi.** {{ui:Asetukset}} › {{ui:BimCraft}} › {{ui:Renderointi}} › {{ui:Koneesi}} näyttää grafiikan, prosessorin ytimet ja muistin, jonka tämä selain antaa sovelluksen käyttää, sekä tason, josta renderöinti alkaa. Katso [Mihin koneesi renderöi](topic:your-machine).

### Tiedostot ja muut sovellukset

- **STEP-tiedostot aukeavat.** `.step`- tai `.stp`-osa, laitteisto tai toimittajan malli (AP203, AP214, AP242) avautuu pienenä IFC-mallina, jokainen kappale elementtinä, jota voi tarkastaa, leikata, mitata ja tallentaa IFC:nä. Värejä ja kokoonpanon osien nimiä ei vielä lueta. Katso [Tiedostot, joita BimCraft avaa ja tallentaa](topic:files#what-it-opens).
- **USD-vienti.** {{ui:USD}} työkalurivillä kirjoittaa avoimet mallit muodossa `.usda`, `.usdc` tai `.usdz`, jäsenneltynä kohteeseen, rakennukseen, kerrokseen ja alaan, jokaisen elementin IFC-luokalla, GlobalId:llä ja ominaisuuksilla. Katso [Vie malli USD-muodossa](topic:usd).
- **Massa CivilCraftista.** CivilCraftin työmaanäkymästä lähetetty rakennusmassa näyttää tutkimustensa luvut Ominaisuudet-kohdassa, ja {{ui:Kehitä tämä massa}} rakentaa siitä seinät jokaiselle tasolle ja lattian yhdellä kumoamisvaiheella. Katso [Kehitä rakennusmassa työmaatutkimuksesta](topic:develop-a-mass).
- **Kirjastokohteet muunnelmineen.** Kohteella, joka tulee useina muunnelmina, on {{ui:Variantti}}-valinta {{ui:Kirjasto}}-välilehdessä. Sijoitettu elementti säilyttää muunnelmansa IFC:ssä, {{ui:Vaihda kohde…}} luettelee muut muunnelmat, ja kopiot ja päivitykset säilyttävät sen. Katso [Sijoita ja vaihda muunnelmia sisältävä kirjastokohde](topic:library-variants).
- **Projektipaketit kansiossa.** {{ui:Avaa kansio}} luettelee `.ccbundle.zip`-tiedostot kohdassa {{ui:Projektipaketit}}, ja jokaisella paketin asettelulla on **Avaa sovelluksessa …**: PDF MarkupCraftiin, DWG CadCraftiin, uudessa välilehdessä. Katso [Avaa asettelu](topic:open-project-bundle#open-a-layout).

### Avustajat ja lisäosat

- **Lisää tekoälyavustajille.** Avustaja voi nyt nimetä elementit uudelleen ja asettaa ominaisuusarvoja, siirtää ja poistaa elementtejä, muuttaa seiniä, ovia ja ikkunoita, viedä USD:n sekä renderöidä kuvan tai ajaa renderointijonon; jokainen muutos on yksi kumoamisvaihe. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Lisäosat voivat rakentaa mallissa.** Lisäosa-API 1.1 antaa lisäosan tehdä mallissa muutoksen yhtenä kumoamisvaiheena (se kulkee Live TeamWork -yhteistyössä), lukea mallin sekä lukea putki- ja kanavalinjoja, liitäntöjä, laitteita ja putkiosia.
- **Plant-lisäosa** ({{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Lisäosat}} kytkee sen päälle; oletuksena pois): putkimääritykset tarkistettuna linjoja vasten, linjan isometriset piirustukset SVG- ja DXF-muodossa osaluettelon kanssa, yleiset prosessilaitteet suuttimineen mallissa, reititin kahden liitännän välillä ja tehtaan asettelun tarkistus. Piirtämisen apuväline, ei insinöörihyväksyntä; sen tekstit ovat vain englanniksi.

## Muuttunut

- **Ensimmäinen talo kannettavalla.** Kannettavan kokoisella näytöllä BimCraft käynnistyy pelkällä pohjapiirroksella. Piirrä-palkki on kapea paneeli, jonka vieressä pohjapiirros sovitetaan. Pohjapiirros ja 3D-näkymä palaavat näkyviin, kun piirustus poistuu niistä, 3D-näkymä rajaa koko talon kapeassa ruudussa, ja ovet ja ikkunat valitaan ennen mittaviivoja.
- **Kuvan tallentaminen.** Renderöinti-valintaikkunan **Tallenna PNG** on nyt {{ui:Tallenna}}, ja {{ui:Tallenna nimellä}} sen vieressä muille muodoille. Katso [Tallenna kuva](topic:render#save-the-picture).
- **{{ui:Analyysi}}-välilehdellä** on {{ui:Mitoitustarkastukset}}-lohko. Se tekee ASCE 7:n tai EN 1990:n kuormayhdistelmät tapauksillesi ja tarkistaa jokaisen valssatun teräs-I-profiilin (W, S, IPE, HEA tai HEB -koko profiilinimensä ja koonsa mukaan) AISC 360:n tai EN 1993-1-1:n mukaan ja näyttää, kuinka suuren osan kapasiteetistaan se käyttää. Se on apuväline, kunnes insinööri on tarkastanut sen; hitsatut profiilit ja muut poikkileikkaukset saavat tilan ”ei tarkistettu”. Katso [Mitoitustarkastukset](topic:frame-analysis#design-checks).

## Korjattu

- Tee uudelleen -toiminto epäonnistui vaiheen jälkeen, joka teki uuden perhekoon (”no size”). Jokainen vaihe luo nyt uudelleen saman IFC GlobalId:n tehtäessä, joten tee uudelleen toimii perheille ja jokaiselle muulle muutokselle.
- Kun kaksi henkilöä tallensi saman perheen (Live TeamWork -istunnossa tai kahdessa ikkunassa), toinen tallennus korvasi ensimmäisen muutoksen huomaamatta. Nyt se kieltäytyy ja kertoo, miten näet heidän muutoksensa ja teet omasi uudelleen.
- Mallia US survey -jaloissa luettiin 0.3048 m jalkaa kohden 0.3048006096 m sijaan, mikä siirsi jokaista karttaan sidottua IFC:tä US-jaloissa.
- Perhe-editori: sen sulkeminen ei enää siirrä näppäimistön kohdistusta sivulle, sen Tallenna pysyy näkyvissä puhelimessa, eikä sen kentät enää saa puhelinta zoomaamaan.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Yksiköt}} sisältää yhden luettelon pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle, tarkoilla kokoilla, jotka yksikköjen määritelmät antavat (US survey -jalka on oma yksikkönsä). Poista käytöstä yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse tähdellä, niin uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. BimCraftissa työkalurivin {{ui:Yksiköt}}-luettelo seuraa kytkimiä, tähti asettaa näyttöyksiköt, kunnes valitset ne työkalurivillä (aiempi valintasi säilyy), ja piirtotyökalujen pituuskentät ottavat minkä tahansa yksikön merkin, kuten `3.5 m` tai `10 US ft`. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka siistiytyvät.** {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahtuu näytölle enemmän (kosketusnäytöt ja puhelimet säilyttävät isot painikkeensa). Jokaisessa sivupaneelissa on ohut otsikkopalkki: vedä sitä kiinnittääksesi tai irrottaaksesi paneelin, pudota se toisen paneelin palkille jakaaksesi kehyksen välilehtinä, kiinnitä se liukumaan reunaan tai piilota ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat siirtyvät.** Vedä valintaikkunaa otsikkopalkista pois piirustuksen tieltä; se palaa sinne, mistä jätit sen. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Reseptit tekoälyavustajille.** Kymmenen valmista pyyntöä omalle avustajallesi (siivoa piirustus, tulosta sarja, tarkista piirustuksia, kysy malliin kysymyksiä, laske määrälaskenta yhteen, kokeile osan muunnelmaa …), kukin kutsuineen työkaluineen ja tarvittavine oikeuksineen, ja jokaisen testimme toistaa. Sovellukset eivät sisällä tekoälyä. Katso [Reseptit tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt kaikki sovellusten sanat luonnoksina, joita äidinkielinen puhuja ei ole vielä lukenut. Ohjeaiheet ovat englanniksi, muutama espanjaksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (tiedostoa järjestelmällesi ei vielä ole, verkkoa ei ole, allekirjoitus on virheellinen) eikä vain ”Valmis”. Se lakkaa tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **0.7:ää ei ole allekirjoitettu koodilla.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska varmenteen vahvistus ei ole vielä tullut läpi. Tarkista jokaisen tiedoston SHA-256 osoitteesta getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa ensimmäisellä kerralla napsauta CadCraft Studiota hiiren oikealla ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Yksiköt}} tallennetaan, mutta yksikään kenttä ei vielä lue niitä.
- Polunseuranta näytönohjaimella, Renderöinti-valintaikkunan lisäominaisuudet ja renderointijono vaativat WebGPU:n (ilman sitä korkea laatu käyttää WebGL-polunseurantaa). Reaaliaikanäkymä käyttää WebGPU:ta, jos selain tukee sitä, muuten WebGL 2:ta. Niitä on testattu täällä vain ohjelmistollisella näytönohjainkorvikkeella, ei vielä oikeilla näytönohjaimilla. Reaaliaikanäkymässä BimCraftissa ei ole hajotusta eikä jakamista (ModelCraftissa niitä on).
- Tallennetun kävelykierroksen renderöintiä videoksi ei ole rakennettu BimCraftiin.
- Mitoitustarkastukset: I-profiili, jonka IFC-profiilinimi ei ole W-, S-, IPE-, HEA- tai HEB-koko (tai jonka koko eroaa siitä), otetaan hitsattuna ja saa tilan ”ei tarkistettu”, samoin putket, kulmateräkset, kanavat, hoikat osat ja vääntö. Insinööri ei ole vielä tarkistanut tarkistuksia.
- Piirrettyjä elementtejä ei voi kopioida yksitellen, kääntää, peilata tai järjestää matriisiksi (kokonainen taso voidaan kopioida). Mukana ei ole jaettavaa seinää, Teksti-työkalua eikä verhoseinää. Ylemmällä tasolla alemman tason seinään osuva seinä ei leikkaudu tuon seinän 3D-kappaleeseen, ja luetteloissa ylemmän tason aukko on luettelossa oman seinänsä tasolla.
- Perheet: projektien välillä jaettua perhekirjastoa ei ole rakennettu. Perheitä ja kopioituja tasoja ei ole vielä avattu muissa BIM-ohjelmissa.
- MEP: laitteet ovat yleisiä (ei valmistajien tietoja); teräsputkiosien T-haarat ja supistukset ovat yleisiä, eivät ASME B16.9 -taulukosta; {{ui:Kirjasto}}-välilehdeltä sijoitettujen kohteiden liitäntöjä ei kirjoiteta IFC:hen; insinööri ei ole tarkastanut mitään.
- Plant-lisäosa ei vielä voi piirtää reititettyä linjaa malliin, numeroida putkiosia isometrisissä kuvissaan tai tarkistaa {{ui:Kirjasto}}-välilehdeltä sijoitettujen laitteiden asettelua.
- CivilCraftin kasvikirjaston kasveja ei voi vielä sijoittaa BimCraftin {{ui:Kirjasto}}-välilehdeltä.
- Energia: ei tuntikohtaista simulointia, ei ISO 52016-1 -menetelmää eikä ilmastotiedostoja. Resurssit: ei isännöityä kaksosta, joka säilyttäisi lukemia tai lähettäisi hälytyksiä, kun BimCraft on suljettu.
- Skannausten rekisteröintiä on kokeiltu testiskannauksilla, ei vielä oikean skannerin skannaussarjalla. E57-tiedostot avautuvat edelleen enintään 6 miljoonaan pisteeseen ja 512 MB:iin.
- Projektipaketit avautuvat vain BimCraftissa (muut sovellukset ottavat asettelun kohdassa **Avaa sovelluksessa …**), ja paketit sekä kahden ohjelman työkalupaketti on testattu korvikkeilla, ei vielä Archicadilla tai Revitillä itsessään.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).
