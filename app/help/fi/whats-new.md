---
title: Uutta versioissa 0.8 ja 0.8.1
summary: BimCraft lisää rakennuksessa kulkevat ihmiset, huoneakustiikan, jonka voi kuulla, tulvan, tuulen ja maanjäristyksen toiston, viidenkymmenen vuoden elinkaarinäkymän, tarkistukset IDS:ää vasten, tunnisteet ja luettelot, siirrä-, kohdista- ja jaa-toiminnot, kuvat pohjapiirroksen alla, seinät skannauksesta, paneelipiirustukset, aurinkosähkön, split- ja VRF-järjestelmät, putki- ja kaapelimitoituksen, betonin ja maanjäristyksen tarkistukset, minkä tahansa karttaprojektion, renderöintimoottorin valinnan ja Studion kumoamisen; 0.8.1 korjaa valintanauhan asettelun harmaat työkalut.
keywords: uutta, mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, evakuointi, ihmiset, jonot, akustiikka, jälkikaiunta, impulssivaste, tulva, tuuli, maanjäristys, vaara, elinkaari, käyttöikä, ids, tunnisteet, luettelot, siirrä, kohdista, jaa, kuva, tausta, skannaus seinille, sijainti CivilCraftista, paneelipiirustukset, runko, aurinko, pv, split, vrf, puhallinkonvektori, putkimitoitus, kaapelisilta, valaistus, betoni, maanjäristys, skannauksen vertailu, epsg, projektio, asiakirjat, pohja, hiili, kustannus, energyplus, renderöintimoottori, avaa sovelluksessa, usd, glb, unreal, kumoa, lisäosat, pcf, symbolit, kasvit, jäljitys, kynät, valintanauha, projektiselain, asettelu
from: 87b03056
---

Tämä kertoo muutokset versioissa BimCraft 0.8 (2026-11-01) ja 0.8.1 (2026-11-02) verrattuna versioon 0.7. BimCraft voi nyt vastata kysymyksiin rakennuksesta ja testata sitä ihmisten, äänen, veden, tuulen ja maanjäristysten avulla sekä piirtää sitä useammilla työkaluilla; 0.8.1 on korjausjulkaisu.

## Uutta

### Rakennuksen testaus

- **Ihmiset rakennuksessa.** Vasemman paneelin osio {{ui:Ihmiset rakennuksessa}} kuljettaa poistumisen tai tavallisen päivän saapumiset huoneidesi, ovien ja portaiden läpi. Näet jonot kohdissa, joissa rakennus kapenee, pisimmän kävelymatkan ulospääsyyn kustakin huoneesta ja sen, kuinka kauan viimeiseltä henkilöltä kestää. Merkitse oven kohdalta {{ui:Suljettu}} nähdäksesi, mitä muuttuu, ja valitse {{ui:Näytä henkilöt 3D-näkymässä}} seurataksesi kulkijoita. Havainnot menevät kohtaan Ongelmat. Karkea väkijoukkomalli suunnittelupäätöksiin, ei paloturvallisuustodistus. Katso [Vie ihmiset rakennuksen läpi](topic:people-in-the-building).
- **Huoneakustiikka, ja sen voi kuulla.** Osio {{ui:Huoneakustiikka}} antaa kunkin huoneen jälkikaiunta-ajan oktaavikaistoittain (Sabine ja Eyring) huoneen koon ja valitsemiesi pintojen perusteella. Oman tavoitteesi kanssa se kertoo, kuinka paljon absorptiota tarvitaan sen saavuttamiseen. {{ui:Toista tässä huoneessa}} toistaa äänen, taputuksen, näppäiltyjä nuotteja tai oman äänitiedostosi huoneelle lasketun impulssivasteen kautta. Absorptioarvot ovat tyypillisiä julkaistuja arvoja, jotka voit korvata. Katso [Huoneakustiikka](topic:room-acoustics).
- **Tulvan, tuulen ja maanjäristyksen toisto.** {{ui:Vaaran toisto}} toistaa veden nousun huoneiden läpi, tuulenpaineen kullakin kerroksella ja maanjäristyksen, joka ravistelee kerroksia, pohjapiirroksella tai julkisivulla aikaliukusäätimen kanssa. Yksinkertaiset mallit ja niiden oletukset ovat paneelissa; kyse ei ole määräystarkistuksesta. Katso [Toista tulva, tuuli tai maanjäristys](topic:hazard-playback).
- **Mikä kuluu viidessäkymmenessä vuodessa.** {{ui:Elinkaarinäkymä}} luettelee ikkunat, ovet, pinnoitteet ja katon, kullekin käyttöiän, vuodet, jolloin ne uusitaan, ja kun kirjoitat yksikköhinnan, vuosikohtaiset kustannukset ja niiden nykyarvon. {{ui:Tallenna aikataulu (CSV)}} kirjoittaa sen tiedostoon. Käyttöiät ovat suunnittelulukuja. Katso [Katso, mikä kuluu viidessäkymmenessä vuodessa](topic:life-cycle-view).
- **Betonin ja maanjäristyksen tarkistukset.** Välilehden {{ui:Analyysi}} lohkot {{ui:Betonisauvat}} ja {{ui:Seismiset kuormat}} tarkistavat betonipalkit ja -pilarit standardin ACI 318-19 mukaan ja laskevat vastaavat vaakavoimat standardin ASCE 7-22 mukaan jäykillä lattioilla kerrossiirtymineen. Insinöörin tarkistettavaksi. Katso [Tarkista betonisauvat ja laadi seismiset kuormat](topic:concrete-and-seismic).

### Tarkistus ja raportointi

- **Tarkista IDS:ää vasten.** Lataa asiakkaan antama `.ids`-tiedosto ja näet kohdassa Ongelmat jokaisen elementin, joka ei täytä sitä, ennen kuin toimitat IFC-tiedoston. Avaa {{ui:Tarkista IDS:ää vasten}} kohdasta {{ui:Mallintarkastukset}}. Katso [Tarkista malli asiakkaan IDS:ää vasten](topic:check-against-ids).
- **Tunnisteet ja luettelot.** Määritä omat tunnisteet, aseta ne monelle elementille kerralla ja laadi luetteloita, joiden sarakkeet, suodattimet ja ryhmät lukevat niitä; tunnisteet säilyvät IFC-tiedostossa. Katso [Tunnisteet ja luettelot](topic:tags-and-schedules).
- **Asiakirjat mallista.** {{ui:Asiakirjat mallista}} täyttää määrittelypohjan avoimesta IFC-tiedostosta ja tallentaa sen PDF-tiedostona, Word-asiakirjana tai Markdownina. Katso [Asiakirjat mallista](topic:documents-from-the-model).
- **Vertaa skannausta malliin.** Kun pistepilvi on avoinna, {{ui:Vertaa}} arvioi kunkin elementin rakennetuksi, osittain rakennetuksi, puuttuvaksi tai ei vielä tavoitetuksi ja näyttää rakennetun osuuden prosentteina. Katso [Vertaa skannausta malliin](topic:compare-scan-with-model).
- **Hiili ja kustannus.** Hiili-paneeli laskee yhteen rakennusmateriaalien kantahiilen muokattavissa olevasta kerrointaulukosta, ja Kustannus-paneeli jakaa hinnat 4D-aikataululle. Mukana tulevat kertoimet ovat yleisiä ja merkitty tarkistamattomiksi. Katso [Kantahiili ja kustannukset](topic:embodied-carbon-and-5d-cost).
- **Mikä tahansa karttaprojektio.** {{ui:Mittaa}} › {{ui:Koordinaattijärjestelmä…}} ottaa EPSG-numeron, UTM-vyöhykkeen, nimen tai oman projektiomääritelmän. Katso [Georeferointi mihin tahansa projektioon](topic:georeference-any-projection).

### Piirtäminen ja muokkaus

- **Siirrä, kohdista ja jaa tasavälein.** Kohdassa {{ui:Koontiversio}}; {{key:Shift+M}} käynnistää Siirrä-toiminnon (tavallinen {{key:M}} on yhä Mittaa). Siirrä kopioi liikkuessa, kun painetaan {{key:C}}, jokainen vaihe on yksi kumoamisaskel, ja toiminto kulkee mukana Live TeamWork -istunnossa. Katso [Siirrä, kopioi, kohdista ja jaa tasavälein](topic:move-align-distribute).
- **Kuvat pohjapiirroksen alla.** {{ui:Koontiversio}} › {{ui:Kuva}} asettaa PNG-, JPEG- tai WebP-kuvan tason pohjapiirroksen alle tai pystytasolle. Aseta mittakaava kahdella pisteellä ja siirrä, kierrä, häivytä ja lukitse se. Alue, joka on kopioitu MarkupCraftilla, liitetään arkkinsa mittakaavassa. Katso [Aseta kuva pohjapiirroksen alle](topic:pictures-as-backgrounds).
- **Seinät skannauksesta.** Kun skannaus on avoinna, seinät, ovet ja huoneet tulevat ehdotuksina, jotka voit pitää tai hylätä yksi kerrallaan yhdellä kumoamisaskeleella. Löydetään vain seinät kahdessa kohtisuorassa suunnassa. Katso [Muuta skannaus seinämiksi](topic:scan-to-walls).
- **Jäljitys, kynät ja portaan luonnostelu.** {{ui:Jäljitä}} näyttää toisen tason katkoviivoin pohjapiirroksen alla, {{ui:Kynät}} antaa seinille, ovi- ja ikkunoille omat viivanpaksuutensa yhdessä näkymässä, ja {{ui:Luonnostele portaat}} muuttaa kävelyviivan portaaksi. Wavefront OBJ -verkko avautuu. Katso [Jäljitä taso, kynät ja portaat luonnoksesta](topic:trace-pens-stairs-obj).
- **Osoitteen ympärillä olevat rakennukset.** CivilCraftin toiminnon ”Osoite sijainniksi” löytämät rakennukset ja tontit tulevat ehdotuksina; valitse ne, jotka haluat lisätä. Katso [Aloita CivilCraftin sijainnista](topic:site-from-civilcraft).
- **Paneelipiirustukset.** {{ui:Koontiversio}} › {{ui:Paneelipiirustukset}} rungoittaa seinät, lattiat ja katot puusta tai kevytteräksestä ja tallentaa sahausluettelon CSV-tiedostona sekä valmistuspiirustukset PDF-tiedostona. Lähtöarvoja, ei rakenteellista suunnittelua. Katso [Paneelipiirustukset](topic:panel-drawings).
- **Symbolipaletti ja kasvit.** {{ui:Koontiversio}} › {{ui:Symbolipaletti}} löytää sähkö- ja LVI-symbolit nimen perusteella; {{ui:Kirjasto}}-lähteen {{ui:Kasvit}} luettelee noin 400 kasvia pohjapiirrossymboleineen. Katso [Symbolipaletti](topic:symbol-palette) ja [Sijoita kasvi](topic:plant-list).

### Putket, kanavat ja energia

- **Split-, VRF- ja puhallinkonvektorit.** Sisä- ja ulkoyksiköt liitäntöineen sekä johtosarjat mitoitettuna taulukosta, jossa on tyypillisiä esimerkkiarvoja ja jota voit muuttaa. Katso [Split-, VRF- ja puhallinkonvektorit](topic:split-vrf-fan-coils).
- **Laskelmat.** Laskelmat-paneeli tarkistaa syöttöputkien ja -kanavien mitoitukset painehäviön kanssa, reitittää kaapelit kaapelihyllyjä ja johtoputkia pitkin ja näyttää niiden täyttöasteen sekä laskee valaistusvoimakkuuden IES- tai EULUMDAT-tiedostoista. Oletukset on merkitty; syötä arvot omista määräyksistäsi. Katso [Putki-, kanava-, kaapeli- ja valaistuslaskelmat](topic:mep-calculations).
- **PCF-tiedostot.** Putkityökalun **Vie PCF** kirjoittaa putkiosuudet putkijännitys- ja isometrisiin ohjelmiin, ja takaisin luettu PCF-tiedosto piirtää putkensa. Katso [Putkikomponenttitiedostot](topic:piping-pcf).
- **Aurinkosähkö (PV).** Sovita paneelikenttiä katoille tai maahan, varjosta ne mallista, arvioi vuotuinen energia, tarkista sarjat ja laadi yksiviivakaaviodata. Aloitusmoduuli ja häviöt ovat yleisarvoja. Katso [Aurinkosähkö (PV)](topic:solar-pv).
- **EnergyPlus-tiedosto.** Paneeli ”Tarkista EnergyPlus” kirjoittaa mallin IDF-tiedostona, jotta se voidaan ajaa omassa EnergyPlus-ohjelmassasi. Ajo selaimessa vaatii koontiversion, jonka isännöit itse ja jonka osoitteen kirjoitat; BimCraft ei sisällä sitä. Katso [Tarkista lämmitys ja jäähdytys EnergyPlus-analyysillä](topic:check-with-energyplus).

### Kuvat ja tiedostot

- **Valitse renderöintimoottori.** {{ui:Renderöi}}-kohdassa on valinta {{ui:Moottori}}. Kaksi sisäänrakennettua moottoria (Fast ja Path tracer) pysyvät oletuksena. **Avaa sovelluksessa** tallentaa kohtauksen USD- tai glTF-tiedostona ja Unreal-projektikansion .zip-tiedostona; CadCraft Studio -ympäristössä lisäosa voi lisätä moottorin. Unreal-liitännäistä, joka avaa projektin, ei ole julkaistu. Katso [Valitse, mikä ohjelma piirtää kuvan](topic:render-engines).
- **Studion kumoaminen.** CadCraft Studio -ympäristössä BimCraft ilmoittaa jokaisesta valmiista vaiheesta Studio-ohjelmalle, jotta Studio voi kumota viimeisen vaiheesi siinä ikkunassa, jota käytit viimeksi. Katso [Kumoa sovellusten yli](topic:undo-across-apps).
- **Lisäosat tiedostossasi.** IFC-tiedosto kirjaa, mitkä lisäosat ovat kirjoittaneet siihen, ja tarjoaa puuttuvia lisäosia, kun avaat sen. Katso [Lisäosat tiedostossasi](topic:add-ons-in-your-file).

### Kaikissa sovelluksissa

- **Yhdistä tekoälysi.** Oma avustajasi voi ohjata BimCraftia Studio-yhteyden kautta ja vastata kysymyksiin mallista, esimerkiksi mitkä huoneet ovat tietyn alueen alla. Studio-ohjelmalla ei ole omaa tekoälyä. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} tarjoaa vaihtoehdot Rivitys, 2 riviä tai 1 rivi; Rivitys pysyy oletuksena.
- **Syöttölaitteet.** Kosketuslevyn, kynän, 3D-hiiren, ohjaimen ja MIDI-asetukset ovat kaikkien sovellusten yhteisiä.
- **Ongelmat ja Live.** Varoitusten paneeli ja Live-istunnot toimivat kuten ennen, ja yllä mainitut uudet tarkistukset syöttävät kohtaan Ongelmat.
- **Kielet.** 54 kieltä, joista kymmenen on uusia. Englannin lisäksi kielet ovat konekäännöksiä, joita äidinkielinen puhuja ei ole vielä lukenut; ohjeaiheet ovat enimmäkseen englanniksi.

## Korjattu versiossa 0.8.1

- **Valintanauhan ja projektiselaimen asettelu.** Lisää › Tuo CAD, Lisää › Kuva ja Hallinta › Projektin yksiköt sanoivat ”Ei vielä toteutettu BimCraft-sovelluksessa”. Kuva avaa kuvatyökalun, Tuo CAD avaa {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} -kohdan (DWG, DXF, PDF tai skannaus) ja Projektin yksiköt avaa {{ui:Asetukset}} › {{ui:Yleinen}} › {{ui:Yksiköt}}. Siirrä ja Kohdista käynnistävät vastaavat työkalut, Taso avaa {{ui:Lisää tasoja…}}, Vaiheet avaa Saneerausvaiheet-osion ja Materiaalit avaa materiaalikirjaston.
- **DWG-luokkaosio.** Se luettiin väärän tyyppisenä; korjattu BimCraft-sovelluksessa ja muissa DWG-tiedostoja lukevissa sovelluksissa.
- **Kieli käytön aikana.** Studio-ohjelma ja pakatut versiot voivat nyt vaihtaa kieltä ilman uudelleenkäynnistystä. Tätä ei ole vielä testattu jokaisella alustalla; kerro meille, jos kieli ei vaihdu.
- **Archicad-paketin skripti.** `archicad_bundle.py`, erillinen lataus, löytää nyt Archicadin polun, tarkkailee kansiota enintään 20 sekuntia ja yrittää uudelleen paketin vieressä.

## Ei vielä tässä versiossa

- **Turvallisuus- ja suunnittelun apuvälineet.** Ihmiset rakennuksessa -toiminnossa ei ole rakennusmääräyksen mukaista kulkumatkarajaa (kirjoitat rajan itse), eikä sitä ole tarkistettu käsin oikealla pohjapiirroksella. Akustiikan, elinkaaren ja vaaran luvut ovat suunnitteluarvoja, eivät määräystarkistusta.
- **Ilmastoskenaariot ja EnergyPlus.** Sisäänrakennettuja ilmastoskenaarioita ei ole: tulvaajoa varten voit ladata skenaariotiedoston. EnergyPlus-ajo selaimessa ei kuulu tähän julkaisuun.
- **Valintanauhan asettelu.** Materiaalien määrälaskenta pysyy tilassa ”Ei vielä toteutettu”, koska BimCraft-sovelluksessa ei ole materiaalimäärien luetteloa, ja 54 muulla harmaalla valintanauhan työkalulla ei ole vielä takanaan BimCraft-työkalua.
- **Allekirjoitus ja alustat.** Windows-asennusohjelmat ja macOS:n .dmg-tiedosto eivät ole allekirjoitettuja, joten SmartScreen näyttää {{ui:Lisätietoja}}, sitten {{ui:Suorita silti}}, ja macOS vaatii hiiren kakkospainikkeella napsautuksen ja sitten {{ui:Avaa}}. iPad- ja iPhone-koontiversiota ei ole koottu uudelleen versiolle 0.8.1.
- **Sivutestit.** Jotkut vanhemmat BimCraft-selaintestit epäonnistuvat yhä testisivullamme, kuten ennen versiota 0.8.1.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet). Aiemmat muutokset ovat kohdassa [Uutta versiossa 0.7](topic:whats-new-0-7).
