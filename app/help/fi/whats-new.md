---
title: Uutta versiossa 0.7
summary: BimCraft lisää seinät useiden kerrosten läpi ja Kopioi tämä taso -toiminnon, seinät PDF-tiedostoista ja skannauksista, omat seinärakenteet, rikkaammat perheet, MEP-laitteet porteilla, törmäysjoukot, aukot ja putkiosat, omaisuuden asiakirjat, COBie- ja anturilukemat, taivaan, auringon, päivänvalon ruudukossa sekä lämmitys- ja jäähdytystehot, skannausten rekisteröinnin, reaaliaikanäkymän ja polunseurannan näytönohjaimella, STEP- ja USD-tuen, kirjastojen variantit sekä lisää tekoälyavustajille.
keywords: mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, seinät useissa kerroksissa, kopioi tämä taso, pdf, skannaus, jäljitys, seinät pohjakuvista, seinärakenteet, ydin, kalvo, viitemitat, materiaalikirjasto, näyttöyksiköt, näkymätyyli, rungotus, lattiapalkit, perheet, parametrit, pohjakuvan symboli, aktiiviset kohdat, toisto, yksityiskohtaisuustaso, sisäkkäiset perheet, CSV-koot, elementtikohtainen, laitteet, portit, liitännät, vapaat tilat, aukot, putkiosat, putkiosa-arkit, työmaahitsi, kanavan katkaisuluettelo, asiakirjat, cobie, anturit, mqtt, reaaliaikainen syöte, pystysuuntainen taivaskomponentti, auringonlämpökuorma, päivänvalo-ruudukko, lämmitys, jäähdytys, kuormat, u-arvo, rekisteröi skannaukset, icp, e57, reaaliaikanäkymä, polunseuranta, webgpu, kohinanpoisto, fyysinen taivas, valon sekoitus, renderointijono, koneesi, step, usd, projektipaketti, kehitä massa, variantit, avustajat, lisäosa-api, laitos, sähkö, mitoitustarkastukset
from: 5c27b80a
---

Tämä on muuttunut BimCraftissa 0.7 verrattuna versioon 0.6. Luettelo on ryhmitelty alueittain, tärkeimmät ensin.

## Uutta

### Rakenna rakennus

- **Seinät useiden kerrosten läpi.** Seinätyökalun korkeusluettelo tarjoaa vaihtoehdon **Enintään**, mikä tahansa ylempi kerros, kuten Ominaisuudet tekee valitulle seinälle. Välissä olevien kerrosten pohjakuvat näyttävät seinän vaaleampana, huoneet liittyvät siihen kiinni, ja ovia ja ikkunoita voi sijoittaa siihen näistä pohjakuvista. **Kulkee läpi** Ominaisuudet-kohdassa nimeää kerrokset, joiden läpi seinä kulkee. Katso [Muuta seinää, ovea tai ikkunaa](topic:change-a-wall-or-door#change-a-wall).
- **Kopioi tämä taso.** {{ui:Copy this level…}}-toiminto Kerrokset-paneelissa piirtää kerroksen seinät ovineen ja ikkunoineen sekä lattiat ja katot uudelleen toiselle kerrokselle tai uudelle kerrokselle sen päälle yhdellä kumoamisvaiheella. Huoneet ilmestyvät itsestään. Katso [Piirrä seinät](topic:draw-walls#levels).
- **Seinät PDF-tiedostosta tai skannauksesta.** {{ui:Build}} › {{ui:From a drawing…}} ottaa nyt vastaan PDF-tiedoston (viivapiirros tai sen sisällä oleva skannaus) tai skannatun pohjakuvan (PNG, JPEG, TIFF, monta sivua). Jokainen sivu muuttuu kerroksen seinillä, ovilla, ikkunoilla ja huoneilla, ja sivu säilyy pohjakuvan alla. Jäljitys ei käytä verkkoa eikä koulutettua mallia, ja tulos on se, mitä viivat antoivat: tarkista jokainen kerros sivuaan vasten. Katso [Seinät pohjakuvasarjasta](topic:walls-from-plans).
- **Omat seinärakenteet.** {{ui:Wall assemblies…}} rakentaa seinätyypin kerros kerrokselta: ytimen, ilmavälit ja kalvot sekä mitoitetun esikatselun. {{ui:Material library…}} pitää projektin materiaalit IFC-tiedostossa. {{ui:Annotate}} › {{ui:Reference dimension}} mittaa pintoihin ja ydinviivoihin ja seuraa seiniä, kun ne muuttuvat. Yhteisön kehittäjältä Doc (drsurfbum). Katso [Seinärakenteet ja viitemitat](topic:wall-assemblies).
- **Näyttöyksiköt ja näkymän säätimet.** {{ui:Units}} työkalurivillä näyttää pituudet jalkoina ja tuumina, tuumina, desimaalijalkoina, millimetreinä, senttimetreinä tai metreinä mitoituksissa, luetteloissa, koordinaateissa, mittauksissa ja leikkauksissa. {{ui:Plan}}, {{ui:Split}} ja {{ui:3D}} ovat työkalurivillä. Jakoa voi vetää, tai sen voi siirtää näppäimistöllä. {{ui:Shaded}}, {{ui:Edges}} ja {{ui:Wireframe}} ovat kuutiokuvan vieressä, ja kattokaltevuus, räystäslauta ja alakatto muuttavat valittua kattoa heti. Yhteisön kehittäjältä Joel (yisraelk). Katso [Piirrä seinät](topic:draw-walls#levels).
- **Lattiapalkit jänteen mukaan.** {{ui:Framing}} voi laatia teolliset lattiapalkit (alustava) sekä sahatavaran, valiten pienimmän listatun sarjan ja korkeuden, joka kantaa jänteen, 16" tai 24" keskiöväli kumpaan suuntaan tahansa. Ne menevät IFC-tiedostoon ja katkaisuluetteloon. Ehdotus valmistajan julkaistusta taulukosta, ei rakennesuunnittelua. Myös Joelilta. Katso [Seinien, lattioiden ja kattojen rungotus](topic:framing).
- **Lisää sähkölaitteita.** {{ui:Electrical}} lisää tieto-, puhelin- ja audio-video-pistorasiat, valitsimen, ajastimen, termostaatin, savu- ja lämpöilmaisimet, hälytyspainikkeen ja sireenin, puhaltimen, energiamittarin ja alakeskuksen, kukin oman IFC-luokkansa. Katso [Sähköpohjakuva](topic:electrical-plan).

### Perheet

- **Perheet tekevät enemmän.** Parametrit voivat olla kokonaislukuja, tekstiä, materiaali, kynä tai täyttö. Perhe voi piirtää oman pohjakuvasymbolinsa, toistaa kiinteän kappaleen, merkitä osat karkeammille yksityiskohtaisuustasoille, sisältää muita perheitä (jalka pöydässä) ja aktiivisia kohtia, joita vedät, myös sijoitetulla elementillä pohjakuvassa. Koot tulevat CSV-taulukosta, ja **Elementtikohtainen**-merkityt parametrit antavat yhden kokoisille kahdelle ovelle erilaiset arvot. Katso [Muokkaa perhettä](topic:family-editor#plan-symbol) ja [Perheet ja niiden koot](topic:families#sizes-from-a-table).

### Putket, kanavat ja laitteet

- **Laitteet porteilla.** {{ui:Build}} › {{ui:Equipment}} sijoittaa yleisen ilmanvaihtokoneen, linjapuhaltimen, pumpun, kattilan, vesivaraajan, päätelaitteen, tulo-ilmalaitteen, ritilän tai säiliön. Koko määräytyy arvojen mukaan, jotka kirjoitat, ja putki- ja kanavaliitännät ovat portteja. Kukin tallennetaan omana IFC-luokkanaan IFC-porteilla. Katso [MEP-laitteet porteilla](topic:mep-equipment).
- **Liitetyt linjat.** Porttiin aloitettu putki tai kanava ottaa sen koon ja järjestelmän ja pysyy kiinni siinä: siirrä pumppu, ja sen putki seuraa. {{ui:Check connections}} luettelee avoimet portit, löysät päät, koko- ja järjestelmäristiriidat sekä linjat, joita mikään ei syötä. Katso [Yhdistä putket ja kanavat laitteeseen](topic:mep-connections).
- **Putket ja kanavat rakennetta vasten.** {{ui:Clash check}}-toiminnossa on valmiit joukot, ja {{ui:Pipes and ducts × structure}} tekee ne yhdellä napsautuksella. {{ui:Check clearances}} käyttää kunkin linjan eristystä ja kirjoittamaasi väliä. {{ui:Openings needed}} luettelee kohdat, joissa linjat kulkevat seinien ja laattojen läpi, CSV- ja BCF-havaintoina. Mitään ei leikata. Katso [Tarkista putket ja kanavat rakennetta vasten](topic:mep-against-structure).
- **Teräsputkien putkiosat.** Teräsputkilinja katkaistaan numeroituihin putkiosiin enintään tietyn pituuden mukaan ja sijoittamiisi {{ui:Field weld}}-kohtiin. {{ui:Spool sheets (PDF)}} antaa sivun kullekin putkiosalle isometrisen näkymän, katkaisupituudet, osat, hitsit ja osaluettelon. {{ui:Duct cut list}} luettelee suorat kanavakappaleet. Katso [Teräsputkien putkiosat ja putkiosa-arkit](topic:pipe-spools).

Nämä ovat piirtämisen ja koordinoinnin apuvälineitä, joiden koot määrittää insinööri: ei virtauksia, paineita eikä tasapainotusta.

### Rakennuksen käyttö

- **Asiakirjat omaisuuskohtaisesti.** {{ui:Assets}}-välilehti liittää käsikirjat, takuut, valokuvat ja piirustukset kohteeseen tiedostonimellä IFC-tiedoston viereen tai verkko-osoitteella. IFC-tiedostoon menee vain linkki. Katso [Asiakirjat](topic:assets-and-maintenance#documents).
- **COBie-taulukko.** {{ui:Save as COBie (.xlsx)}} kirjoittaa COBie 2.4 -luovutustyökirjan. Luettu COBie-työkirja listaa jokaisen muutoksen ennen yhtä {{ui:Apply}}-toimintoa. Sitä ei ole vielä tarkistettu COBie-validaattorilla. Katso [COBie-taulukko](topic:assets-and-maintenance#cobie-spreadsheet).
- **Anturilukemat ja reaaliaikaiset syötteet.** Avaa CSV-tiedosto, jossa on lukemia, tai {{ui:Connect}} suoraan selaimesta omaan MQTT-välittäjääsi tai osoitteeseen, johon rakennusjärjestelmäsi vastaa. Jokainen kohde näyttää viimeisimmän lukeman ja kaavion, saa värin mallissa ja merkitään, jos se ylittää IFC-tiedostoon tallennetut rajat. Lukemat pysyvät välilehdessä, eikä salasanoja tallenneta koskaan. Katso [Anturilukemat](topic:assets-and-maintenance#sensor-readings) ja [Reaaliaikaiset lukemat](topic:assets-and-maintenance#live-readings).

### Päivänvalo ja energia

- **Taivas ja aurinko jokaisessa ikkunassa.** {{ui:Daylight}}-välilehti antaa jokaiselle ikkunalle sen pystysuuntaisen taivaskomponentin ja esteen kulman. Se seuraa aurinkoa päivän läpi toiminnolla {{ui:Sun through the windows on a date}} ja laskee {{ui:Daylight factor on a grid}} -arvon kunkin huoneen yli, piirrettynä sen pohjakuvaan. Katso [Kunkin ikkunan pystysuuntainen taivaskomponentti](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Lämmitys- ja jäähdytystehot.** {{ui:Heating and cooling loads}} laskee kunkin huoneen lämpöhäviön, vuotuisen lämmityksen asteluvuista ja jäähdytyshuipun. Laskenta perustuu siihen, mikä mallissa rajaa huonetta, ja kunkin elementin U-arvoon. Siellä kirjoitettu U-arvo tallentuu IFC-tiedostoon. Katso [Lämmitys- ja jäähdytystehojen arviointi](topic:heating-and-cooling-loads).

Molemmat ovat suunnitteluapuja julkaistuilla menetelmillä, eivät vaatimustenmukaisuuslaskelmia, ja jokainen paneeli sanoo niin.

### Skannaukset

- **Useiden skannausten rekisteröinti.** {{ui:Register scans…}} (aloituspaneelissa tai {{ui:Show}}-kohdassa) sijoittaa skannaukset yhteiseen koordinaatistoon valittujen pistepareiden tai kirjoitettujen kohteiden avulla. Se tarkentaa niitä ICP-menetelmällä ensin piste pisteeseen ja sitten piste tasoon, tallentaa rekisteröinnin pienenä projektitiedostona ja kirjoittaa rekisteröidyn pistepilven yhdeksi LAS- tai E57-tiedostoksi. Katso [Rekisteröi useita skannauksia yhdeksi](topic:register-scans).

### Kuvat ja reaaliaikanäkymä

- **Reaaliaikanäkymä.** {{ui:Live view}} työkalurivillä näyttää mallin reaaliaikaisessa ilmeessä 3D-näkymän vieressä. Se seuraa mallia ja jokaista muutosta, ja siinä on kävely, vuorokaudenaika ja kuukausi. {{ui:Live view in a new window}} sijoittaa sen toiselle näytölle. Katso [Reaaliaikanäkymä](topic:live-view).
- **Polunseuranta näytönohjaimella.** WebGPU-tuen kanssa {{ui:Render}} › {{ui:High quality (path traced)}} ajaa CadCraftin oman polunseurantamoottorin näytönohjaimella. Sen voi pysäyttää ja jatkaa {{ui:Resume}}-toiminnolla, ja lopuksi kuva kohinanpoistetaan. Ilman WebGPU-tukea käytetään WebGL-polunseurantaa kuten ennenkin. Katso [Korkea laatu](topic:render#high-quality).
- **Lisää Renderointi-valintaikkunassa** (näytönohjaimella, joten se tarvitsee WebGPU-tuen): fyysinen taivas ja taivaskuvat, IES-valoprofiilit, kamera f-numeroineen, syvyysterävyys, kaksipisteperspektiivi, valkotasapaino ja 360°-panoraamat, lopullisen kuvan sävytys, valon sekoitus sekä renderoinnin jälkeiset renderoinnin elementit, sumu, savu ja kaustiikka, tallennus 16-bittisenä PNG:nä, EXR:nä tai renderointitiedostona sekä renderointijono. Katso [Taivaat ja valoprofiilit näytönohjaimella](topic:render#skies-and-light-profiles-on-the-graphics-card) ja [Renderointijono](topic:render#the-render-queue).
- **Koneesi.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} näyttää näytönohjaimen, prosessorin ytimet ja muistin, joita tämä selain antaa sovelluksen käyttää, sekä tason, josta renderointi alkaa. Katso [Millä koneesi renderoi](topic:your-machine).

### Tiedostot ja muut sovellukset

- **STEP-tiedostot avautuvat.** Tiedostot `.step` tai `.stp` (osa, laite tai toimittajan malli: AP203, AP214, AP242) avautuvat pieneksi IFC-malliksi. Jokainen kappale on elementti, jota voi tarkastella, leikata, mitata ja tallentaa IFC:nä. Värejä ja kokoonpanon osien nimiä ei vielä lueta. Katso [Tiedostot, joita BimCraft avaa ja tallentaa](topic:files#what-it-opens).
- **USD-vienti.** {{ui:USD}} työkalurivillä kirjoittaa avoimet mallit tiedostoina `.usda`, `.usdc` tai `.usdz`. Ne jäsennellään kohteen, rakennuksen, kerroksen ja alan mukaan, ja jokaisen elementin IFC-luokka, GlobalId ja ominaisuudet ovat mukana. Katso [Vie malli USD-muodossa](topic:usd).
- **Massa CivilCraftista.** CivilCraftin kohdenäkymästä lähetetty rakennusmassa näyttää tutkimuslukunsa Ominaisuudet-kohdassa. {{ui:Develop this mass}} rakentaa siitä seinät jokaiselle kerrokselle ja lattian yhdellä kumoamisvaiheella. Katso [Kehitä rakennusmassa kohdetutkimuksesta](topic:develop-a-mass).
- **Kirjastokohteet variantteineen.** Kohteella, joka tulee useina variantteina, on {{ui:Variant}}-valinta {{ui:Library}}-välilehdessä. Sijoitettu elementti säilyttää varianttinsa IFC-tiedostossa, {{ui:Swap item…}} luettelee muut variantit, ja kopiot ja päivitykset säilyttävät sen. Katso [Sijoita kohde ja vaihda sen varianttia](topic:library-variants).
- **Projektipaketit kansiossa.** {{ui:Open a folder}} luettelee `.ccbundle.zip`-tiedostot kohdassa {{ui:Project bundles}}. Jokaisella paketin asettelulla on **Avaa sovelluksessa …**: PDF MarkupCraft-sovellukseen, DWG CadCraft-sovellukseen, uudessa välilehdessä. Katso [Avaa asettelu](topic:open-project-bundle#open-a-layout).

### Avustajat ja lisäosat

- **Lisää tekoälyavustajille.** Avustaja voi nyt nimetä elementit uudelleen ja asettaa ominaisuuksien arvoja, siirtää ja poistaa elementtejä, muuttaa seiniä, ovia ja ikkunoita, viedä USD-tiedoston sekä renderoida kuvan tai ajaa renderointijonon. Jokainen muutos on yksi kumoamisvaihe. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Lisäosat voivat rakentaa mallissa.** Lisäosa-API 1.1 antaa lisäosan tehdä muutoksen mallissa yhtenä kumoamisvaiheena (muutos kulkee Live TeamWork -yhteistyössä), lukea mallin sekä lukea putki- ja kanavalinjat, portit, laitteet ja putkiosat.
- **Plant-lisäosa** ({{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}-kohdassa pois päältä, kunnes käännät sen päälle): putkimääritykset tarkistettuna linjoja vasten, linjan isometriset piirustukset SVG- ja DXF-muodossa osaluettelon kanssa, yleiset prosessilaitteet suuttimineen mallissa, reititin kahden portin välillä ja tehtaan asettelun tarkistus. Piirtämisen apuväline, ei suunnitteluhyväksyntä. Sen tekstit ovat vain englanniksi.

## Muutokset

- **Ensimmäinen talo kannettavalla.** Kannettavan tietokoneen näytöllä BimCraft käynnistyy pelkällä pohjakuvalla. Piirtopalkki on kapea paneeli, jonka vieressä pohjakuva sovitetaan. Pohjakuva ja 3D-näkymä palaavat näkyviin, kun piirustus poistuu niistä. 3D-näkymä kehystää koko talon kapeaan ruutuun, ja ovet ja ikkunat valitaan ennen mittaviivoja.
- **Kuvan tallentaminen.** **Tallenna PNG** Renderointi-valintaikkunassa on nyt {{ui:Save}}, ja {{ui:Save as}} on sen vieressä muille muodoille. Katso [Tallenna kuva](topic:render#save-the-picture).
- **Analyysi-välilehdellä** on {{ui:Design checks}} -osio. Se muodostaa ASCE 7:n tai EN 1990:n mukaiset kuormitusyhdistelmät tapauksillesi ja tarkistaa jokaisen valssatun teräs-I-profiilin (W-, S-, IPE-, HEA- tai HEB-koko profiilinimensä ja kokonsa mukaan) AISC 360:n tai EN 1993-1-1:n mukaan. Se näyttää, kuinka suuren osan kapasiteetistaan profiili käyttää. Se on apuväline, kunnes insinööri on tarkistanut sen. Hitsatut profiilit ja muut poikkileikkaukset saavat tekstin "ei tarkistettu". Katso [Mitoitustarkastukset](topic:frame-analysis#design-checks).

## Korjatut

- Tee uudelleen -toiminto epäonnistui vaiheen jälkeen, joka loi uuden perhekoon ("no size"). Jokainen vaihe luo nyt samat IFC GlobalId -tunnukset uudelleen tehtäessä, joten tee uudelleen toimii perheille ja kaikille muille muutoksille.
- Kun kaksi henkilöä tallensi saman perheen (Live TeamWork -istunnossa tai kahdessa ikkunassa), toinen tallennus korvasi ensimmäisen muutoksen hiljaa. Nyt se kieltäytyy ja kertoo, miten näet heidän muutoksensa ja teet omasi uudelleen.
- Malli US survey feet -yksiköissä luettiin 0.3048 m jalalle 0.3048006096 m:n sijaan. Tämä siirsi jokaista georeferoitua IFC-tiedostoa US-jaloissa kartalla.
- Perhe-editori: sen sulkeminen ei enää pudota näppäimistön kohdistusta sivulle, sen Tallenna pysyy näkyvissä puhelimella, eikä sen kentät enää saa puhelinta zoomaamaan.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} on yksi luettelo kullekin pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle, tarkoilla kokoilla, jotka yksiköiden määritelmät antavat (US survey feet on oma yksikkönsä). Poista käytöstä yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista. Merkitse yksikkö tähdellä, niin uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. BimCraftissa työkalurivin {{ui:Units}}-luettelo seuraa kytkimiä. Tähti asettaa näyttöyksiköt, kunnes valitset ne työkalurivillä (aiempi valintasi säilyy). Piirtotyökalujen pituuskentät hyväksyvät minkä tahansa yksikön merkin, kuten `3.5 m` tai `10 US ft`. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiivis asettelu ja paneelit, jotka siistiytyvät.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} mahduttaa näytölle enemmän. Kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa. Jokaisella sivupaneelilla on ohut otsikkopalkki: vedä sitä kiinnittääksesi tai irrottaaksesi paneelin, pudota se toisen paneelin palkkiin, jolloin ne jakavat yhden kehyksen välilehtinä, tai kiinnitä se liukumaan reunaan. Voit myös piilottaa paneelin ja tuoda sen takaisin reunasta. Katso [Järjestele paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat liikkuvat.** Vedä valintaikkunaa sen otsikkopalkista pois piirustuksen tieltä. Se palaa siihen, mihin jätit sen. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Reseptit tekoälyavustajille.** Kymmenen esimerkkipyyntöä omalle avustajallesi (siivoa piirustus, tulosta arkkisarja, tarkista piirustukset, kysy malliin kysymyksiä, laske määrälaskennan yhteissumma, kokeile osan varianttia ja muuta). Jokaisella on omat työkalunsa ja tarvittavat oikeutensa, ja testimme toistavat jokaisen. Sovellukset eivät sisällä tekoälyä. Katso [Reseptit tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt kaikki sovellusten sanat luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkistanut. Ohjeaiheet ovat englanniksi, muutama espanjaksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (tiedostoa järjestelmällesi ei vielä ole, ei verkkoa, virheellinen allekirjoitus), eikä vain ilmoita "Valmis". Se lakkaa myös tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska varmenteen vahvistus ei ole vielä valmis. Tarkista jokaisen tiedoston vieressä oleva SHA-256 osoitteessa getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:More info}} ja sitten {{ui:Run anyway}}. Macilla ensimmäisellä kerralla napsauta CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Open}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- Kulma- ja kaltevuusluettelot kohdassa {{ui:Units}} tallentuvat, mutta mikään ruutu ei vielä lue niitä.
- Polunseuranta näytönohjaimella, Renderointi-valintaikkunan lisäominaisuudet ja renderointijono tarvitsevat WebGPU-tuen (ilman sitä korkea laatu käyttää WebGL-polunseurantaa). Reaaliaikanäkymä käyttää WebGPU:ta, jos selain tukee sitä, muuten WebGL 2:ta. Niitä on testattu täällä vain ohjelmistollisella näytönohjainkorvikkeella, ei vielä oikeilla näytönohjaimilla. Reaaliaikanäkymässä BimCraftissa ei ole sirontaa tai jakamista (ModelCraftissa on).
- Tallennetun kävelykierroksen renderöintiä videoksi ei ole rakennettu BimCraftiin.
- Mitoitustarkastukset: I-profiili, jonka IFC-profiilinimi ei ole W-, S-, IPE-, HEA- tai HEB-kokoa (tai jonka koko poikkeaa siitä), otetaan hitsattuna ja palautuu tilassa "ei tarkistettu". Samoin käy putkille, kulmarautoille, kanavaraudoille, hoikille osille ja vääntörasitukselle. Kukaan insinööri ei ole vielä tarkistanut tarkistuksia.
- Piirrettyjä elementtejä ei voi kopioida yksitellen, kääntää, peilata tai monistaa matriisina (koko kerroksen voi kopioida). Jakavaa seinää, Teksti-työkalua tai verhoseinää ei ole. Ylemmän kerroksen seinä, joka kohtaa alemman kerroksen seinän, ei leikkaudu sen seinän 3D-runkoon. Luettelot listaavat ylemmän kerroksen aukon sen oman seinän kerroksen alle.
- Perheet: projektien välillä jaettua perhekirjastoa ei ole rakennettu. Perheitä ja kopioituja kerroksia ei ole vielä avattu muissa BIM-ohjelmissa.
- MEP: laitteet ovat yleisiä (ei valmistajien tietoja). Teräsputkiosien T-haarat ja reduktiot ovat yleisiä, eivät ASME B16.9 -taulukosta. {{ui:Library}}-välilehdeltä sijoitettujen kohteiden portteja ei kirjoiteta IFC-tiedostoon. Mitään ei ole insinöörin tarkistama.
- Plant-lisäosa ei vielä voi piirtää reititettyä linjaa malliin, numeroida putkiosia isometrisissä piirustuksissaan eikä tarkistaa kirjastosta sijoitettujen laitteiden asettelua.
- Laitoksia CivilCraftin laitoskirjastosta ei vielä voi sijoittaa BimCraftin {{ui:Library}}-välilehdeltä.
- Energia: ei tuntikohtaista simulointia, ei ISO 52016-1 -menetelmää eikä ilmastotiedostoja. Omaisuus: ei isännöityä digitaalista kaksosta, joka säilyttää lukemia tai lähettää hälytyksiä, kun BimCraft on suljettu.
- Skannausten rekisteröintiä on kokeiltu testiskannauksilla, ei vielä oikean skannerin skannausjoukolla. E57-tiedostot avautuvat yhä enintään 6 miljoonan pisteen ja 512 MB:n kokoisina.
- Projektipaketit avautuvat vain BimCraftissa (muut sovellukset ottavat asettelun vastaan **Avaa sovelluksessa …** -toiminnolla). Paketteja ja kaksiohjelmapakettia on testattu korvikkeilla, ei vielä itse Archicadilla tai Revitillä.

Muu on kohdassa [Mitä ei ole vielä rakennettu](topic:not-built-yet).
