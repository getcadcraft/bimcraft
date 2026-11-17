---
title: Avaa koko projektikansio
summary: Osoita BimCraft projektikansioon nähdäksesi kaikki mallit, niiden varmuuskopiot ja linkit kerralla. Aloita tästä -ruutu ehdottaa, mihin tiedostoon kannattaa tarttua.
keywords: kansio, hakemisto, projektikansio, verkkoasema, palvelin, aloita tästä, mikä tiedosto, varmuuskopiot, linkit, viitteet, viimeisimmät kansiot, vedä kansio
from: 16fbdce2
---

## Mitä teet

Avaa koko projektikansio, esimerkiksi työtä varten saamasi kansio, ja anna BimCraftin selvittää: mitkä mallit siellä ovat, mitkä kopiot ovat varmuuskopioita, mikä linkittyy mihinkin, mitkä tiedostot ovat vaurioituneet ja mikä tiedosto todennäköisimmin halutaan avata.

Luetaan vain kunkin mallikortin tarvitsemat muutamat kilotavut, joten verkkoasemalla tai synkronoidussa pilvikansiossa oleva kansio käy.

## Vaiheet

:::chromium
1. Napsauta vasemmalla olevaa {{ui:Avaa kansio}}-painiketta (tai tyhjän näytön keskeltä).
2. Valitse avautuvassa ikkunassa projektikansio ja napsauta **Valitse** (tai **Lataa** tai **Avaa**, järjestelmästäsi riippuen).
3. Napsauta **Näytä tiedostot**, kun selain kysyy ”Saako sivusto näyttää tiedostot?”. Tämä antaa välilehdelle vain luku-oikeuden kansioon; mitään ei lähetetä.
4. Odota, kun tilarivi laskee: ”Luetteloidaan kansiota: … tiedostoa”, sitten ”Tarkistetaan Revit-tiedostoja: …/…”.
:::

:::firefox
1. Napsauta vasemmalla olevaa {{ui:Avaa kansio}}-painiketta (tai tyhjän näytön keskeltä).
2. Valitse avautuvassa ikkunassa projektikansio ja vahvista. Firefox saattaa kysyä, saako sivu lukea kansion tiedostot; ne pysyvät silti tietokoneellasi.
3. Odota, kun tilarivi sanoo ”Luetaan kansiota: … tiedostoa”, sitten ”Tarkistetaan Revit-tiedostoja: …/…”.
:::

:::safari
1. Napsauta vasemmalla olevaa {{ui:Avaa kansio}}-painiketta (tai tyhjän näytön keskeltä).
2. Valitse avautuvassa ikkunassa projektikansio ja napsauta **Lataa**. Sanasta huolimatta mikään ei poistu Macistasi: tiedostot vain annetaan välilehdelle.
3. Odota, kun tilarivi sanoo ”Luetaan kansiota: … tiedostoa”, sitten ”Tarkistetaan Revit-tiedostoja: …/…”.
:::

Voit myös **vetää kansion** {{pick:mac=Finder|windows=Resurssienhallinta|linux=käyttämäsi tiedostonhallinta}} sivulle. Vedetty kansio avautuu ilman käyttöoikeuskyselyä kaikissa selaimissa.

## Mitä näet

Kansioraportti täyttää keskialueen:

- Kansion nimi, mallien, CAD-piirustusten, IFC-mallien ja tiedostojen määrät sekä kokonaiskoko.
- Punaiset tai keltaiset huomautukset, jos tiedostoja on puutteellisia tai linkitettyjä tiedostoja puuttuu kansiosta.
- {{ui:Aloita tästä}}-ruutu: tiedosto, jonka BimCraft ehdottaa avattavaksi, ja syyt.
- **Mallit**: yksi rivi kutakin mallia kohden, ja sen varmuuskopiot ryhmiteltynä sen alle.
- **Linkitetyt ja viitatut tiedostot**, **IFC-mallit**, **CAD-piirustukset** ja **Sivuun siirretyt**, jos kansiossa on niitä.

Vasemmalla oleva {{ui:Kansio}}-paneeli tiivistää raportin; **Ongelmat** sanoo ”Ei mitään”, kun jokainen kopio on kunnossa.

## Käytä Aloita tästä -ruutua

Ruutu nimeää yhden tiedoston ja kertoo syyn, esimerkiksi:

- ”Tämän kansion uusin tallennettu työ (3.3.2025).”
- ”*Consultant.rvt* on linkitetty muihin malleihin, joten se on taustatiedosto, ei muokattava tiedosto.”
- ”*Tower.rvt* näyttää ilmeiseltä valinnalta, mutta se on vaurioitunut; sen viimeinen kunnollinen kopio on …”
- ”Tämä on keskusmalli: avaa se Revitissä ”Create New Local” -toiminnolla ja työskentele paikallisessa kopiossa.”

1. Lue syyt.
2. Napsauta {{ui:Avaa sen kortti}} lukeaksesi tiedoston kortin, tai {{ui:Näytä luettelossa}} löytääksesi sen rivin kohdasta **Mallit**.
3. Tarkista ennen kuin luotat tiedostoon, kuka on viimeksi työstänyt projektia. Ruutu sanoo tämän myös: se on arvaus nimistä, päivämääristä ja linkeistä.

## Avaa tiedostoja raportista

1. Napsauta mallin nimeä avataksesi sen kortin. Kortti tarkistaa jokaisen linkin kansiota vasten.
2. Palaa napsauttamalla {{ui:Takaisin}} ja kortin yläreunan kansion nimeä (tai vasemmalla olevaa {{ui:Takaisin kansioon}}-toimintoa).
3. Napsauta mitä tahansa IFC-tiedostoa kohdassa **IFC-mallit** avataksesi sen 3D-näkymässä.
4. Napsauta mitä tahansa DWG- tai DXF-tiedostoa kohdassa **CAD-piirustukset** avataksesi sen 2D-näkymässä. Sen linkitetyt piirustukset ja kuvat löytyvät kansiosta automaattisesti.

## Avaa kansio uudelleen myöhemmin

:::chromium
Kansiot, jotka avasit {{ui:Avaa kansio}}-toiminnolla tai vetämällä, ovat vasemmalla luetteloituina kohdassa {{ui:Viimeisimmät kansiot}}. Napsauta {{ui:Avaa uudelleen}}-painiketta ja kansion nimeä avataksesi sen uudelleen valitsematta sitä. Selaimen uudelleenkäynnistyksen jälkeen Chrome tai Edge kysyy vielä kerran; valitse ”Salli joka käynnillä”, niin kysymistä ei enää tule. Luettelo säilytetään vain tässä selaimessa, eikä sitä lähetetä minnekään. Napsauta ×-merkkiä unohtaaksesi kansion.
:::

:::firefox safari
Tämä selain ei muista kansioita käyntien välillä. Valitse kansio uudelleen {{ui:Avaa kansio}}-toiminnolla tai vedä se sivulle.
:::

## Yleisiä virheitä

- **Liian ison kansion valitseminen.** Yli 20 000 tiedostoa: ”Tässä kansiossa on yli 20 000 tiedostoa. Valitse pienempi kansio, esimerkiksi yksi projekti.” Valitse projektikansio, älä koko asemaa.
- **Useiden projektien yläkansion valitseminen.** **Aloita tästä** -ruutu valitsee silloin projektien väliltä. Valitse yksi projekti.
- **Revitin omat kansiot näyttävät jäävän huomiotta.** Kansiot `*_backup`, `*_log` ja `Revit_temp` ovat huoltokansioita, ja ne luetellaan kohdassa **Sivuun siirretyt**, eivät lueta.
- **Mallin odottaminen avautuvan 3D-näkymässä kortilta.** Projektitiedosto on vain kortti. Avaa sen IFC-vienti.
- **Puhelimet ja tabletit.** Monet mobiiliselaimet eivät voi valita kansioita lainkaan. Käytä tietokonetta.

Katso [Tarkista kansio vaurioituneiden kopioiden, puuttuvien linkkien ja jätteiden varalta](topic:check-folder-health) ja [Kansioraportti: roolit, tilat ja linkit](topic:folder-roles).
