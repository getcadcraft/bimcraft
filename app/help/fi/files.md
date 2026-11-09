---
title: Tiedostot, jotka BimCraft avaa ja tallentaa
summary: Jokainen muoto, jonka BimCraft avaa, mitä se säilyttää, mitä se tallentaa, minne tallennetut tiedostot menevät ja mikä muuttuu selainten välillä ja offline-tilassa.
keywords: muodot, avaa, tallenna, vie, lataa, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, lähetä, yksityisyys, tiedoston koko
from: a7275dbf
---

BimCraft lukee tiedostoja tietokoneeltasi selainvälilehdessä. **Mitään ei lähetetä** CadCraftille eikä kenellekään muulle. Kun tallennat, BimCraft antaa selaimelle uuden tiedoston ladattavaksi; se ei koskaan kirjoita avaamasi tiedoston päälle.

## Mitä se avaa

| Muoto | Tiedostopäätteet | Mitä saat |
|---|---|---|
| IFC | `.ifc` | Malli 3D-muodossa, kerrokset, elementtien määrät ja jokaisen elementin ominaisuudet. Nimiä, tunnisteita ja yksittäisiä ominaisuusarvoja voi muuttaa. |
| Projekti- ja perhetiedostot | `.rvt` `.rfa` `.rte` `.rft` | Tiedostokortti: julkaisu, koonti, jaettu työskentely, projektitiedot, perheparametrit, linkitetyt tiedostot ja esikatselukuva. Ei 3D-näkymää. |
| DWG | `.dwg` | Piirustus 2D-muodossa: mallitila, jokainen arkki, tasot, linkitetyt piirustukset, kuvat ja tulostusnäkymä. Myös mallitila 3D-muodossa. Tarkistetut muodot ovat AutoCADin versiot 2000–2018. |
| DXF | `.dxf` | Sama kuin DWG. |
| STEP | `.step` `.stp` | Osa, laitteen osa tai toimittajan malli (AP203, AP214, AP242) 3D-muodossa: jokainen kiintokappale tulee yhdeksi elementiksi (building element proxy) pienen IFC-mallin yhteen kerrokseen. Se luetaan kolmioina todellisessa koossaan, ja kokoonpano näkyy jokaisen osan kanssa siinä paikassa, johon tiedosto sen sijoittaa. Sen jälkeen se toimii kuten mikä tahansa IFC: ominaisuudet, leikkaukset, mittaus, tallennus IFC-tiedostona. Värejä ja kokoonpanopuuta ei lueta. |
| Pistepilvet | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skannaus 3D-näkymässä mallin vieressä tai yksinään: katso [Näytä pistepilvi mallin vieressä](topic:point-clouds). |
| Projektipaketti | `.ccbundle.zip` | Malli näkymineen, asetteluineen ja ominaisuusryhmineen: katso [Avaa projektipaketti](topic:open-project-bundle). |
| Kansio | mikä tahansa | Raportti jokaisesta mallista, piirustuksesta ja projektipaketista kansiossa. Jokainen raportin IFC-, malli-, piirustus- tai pakettitiedosto avautuu napsautuksella. |

[Mitä BimCraft lukee kustakin muodosta](topic:file-formats) käsitellään tarkemmin.

BimCraft päättelee, mikä tiedosto on, katsomalla sen ensimmäisiä tavuja sekä nimeä. Siksi projektitiedosto, jonka pääte on epätavallinen, avautuu silti tiedostokorttina.

### Ei avata

- `.ifczip` ja `.ifcxml`: BimCraft ilmoittaa: ”.ifczip ei ole vielä tuettu. Tallenna tai vie malli tavallisena .ifc-tiedostona.” Pura `.ifczip` (se sisältää tavallisen `.ifc`-tiedoston) tai vie malli uudelleen tavallisena IFC-tiedostona.
- DGN-piirustukset luetellaan kansioraportissa, mutta niitä ei avata.
- PDF-tiedostot, kuvat ja toimistotiedostot eivät avaudu itsestään. Kuvia käytetään DWG-tiedoston sisällä kuvina, ja {{ui:Koontiversio}} › {{ui:Piirustuksesta…}} muuttaa PDF- tai skannaustiedoston sivut seinämiksi: katso [Seinät piirustussarjasta](topic:walls-from-plans).

## Mitä se tallentaa

| Napsautat | Saat | Minne |
|---|---|---|
| {{ui:Tallenna IFC-tiedostona}} | Uusi IFC-tiedosto muokkauksineen nimellä ”*alkuperäinen nimi* (edited).ifc” | Selaimesi latauskansio |
| {{ui:Lataa CSV}} laiteluettelossa | CSV-tiedosto luettelon kohteista nimellä ”*piirustuksen nimi* equipment.csv” | Selaimesi latauskansio |

Muut asiat tallennetaan siellä, missä ne tehdään, kukin omassa aiheessaan: {{ui:USD}} ([Vie malli USD-muodossa](topic:usd)), {{ui:Collada}} ([Vie malli Colladana tai Google Earthiin](topic:collada): .dae ja Google Earthin .kmz), .glb-tiedosto {{ui:Renderöintiä varten}}, renderöidyt kuvat, arkit ja suunnitelmat PDF-muodossa, luettelot ja taulukot CSV-muodossa, BCF-havainnot, COBie-taulukko, perhetiedostot sekä rekisteröidyt skannaukset LAS- tai E57-muodossa. BimCraft ei tallenna DWG- eikä DXF-tiedostoja eikä projektitiedostoja, eikä se koskaan muuta avaamiasi tiedostoja.

:::chromium
Chrome ja Edge tallentavat lataukset selaimen asetuksissa määritettyyn kansioon, yleensä Lataukset-kansioon. Jos halutaan, että kysytään joka kerta, minne kukin tiedosto tallennetaan, ota selaimen latausasetuksista käyttöön ”Kysy, minne kukin tiedosto tallennetaan ennen lataamista”.
:::

:::firefox
Firefox tallentaa Lataukset-kansioon, ellei asetuksissa ole valittu ”Kysy aina, minne tiedostot tallennetaan”.
:::

:::safari
Safari tallentaa Lataukset-kansioon, ellei toista kansiota ole valittu kohdasta **Safari > Asetukset > Yleiset > Tiedostojen latauspaikka**.
:::

## Tallentaminen toisen kerran

Jokainen tallennus lataa koko mallin, jossa on **kaikki muokkaukset avaamisen jälkeen**, ei vain viimeisen tallennuksen jälkeen tehtyjä muokkauksia. {{ui:Muutokset}}-luettelo tyhjenee jokaisen tallennuksen jälkeen, joten tallennuksen yli ei voi kumota. Jos haluat aloittaa alkuperäisestä, avaa alkuperäinen tiedosto uudelleen.

## Suuret tiedostot ja muisti

- **IFC**-tiedostot luetaan kokonaan välilehden muistiin, ja 3D-geometria vie sen lisäksi muistia. Muutaman sadan megatavun malli voi olla liikaa kannettavalle tietokoneelle. Yli 1.5 miljoonan kolmion malleissa reunat kytketään pois muistin säästämiseksi (”Reunat ovat pois päältä hyvin suurissa malleissa”).
- **Projektitiedostoja** ei lueta kokonaan. BimCraft lukee vain tarvitsemansa pienet osat, noin 40 KB–100 KB tiedoston koosta riippumatta, joten 500 MB:n keskusmalli verkkoasemalla avautuu hetkessä.
- **DWG**- ja **DXF**-tiedostot luetaan kokonaan. Hyvin suuri piirustus näyttää ilmoituksen: ”Tämä piirustus on hyvin suuri; vain osa siitä näytetään.”
- **Kansioita**, joissa on enintään 20,000 tiedostoa, voi avata. Kustakin mallikortista luetaan vain muutama kilotavu.

Lisätietoja: katso [Selaimet, laitteet ja muisti](topic:platforms).

## Verkossa ja offline-tilassa

Tiedostojen avaaminen ei koskaan vaadi internetyhteyttä. Yksi lukija latautuu sivustolta ensimmäisen kerran, kun sitä tarvitaan: IFC-moottori, kun avaat IFC-mallin ensimmäisen kerran (”Käynnistetään IFC-moottoria…”). DWG- ja DXF-lukijat ovat osa sovellusta.

:::offline
Olet offline-tilassa. Jos sovelluspalkin painike sanoo {{ui:Offline valmis}}, jokainen muoto avautuu normaalisti. Jos ei, IFC-mallia ei voi avata, ellei sitä ole jo avattu tässä välilehdessä: yhdistä ensin uudelleen. Katso [Verkossa ja offline-tilassa](topic:online-offline).
:::

Jos haluat käyttää BimCraftia ilman yhteyttä, napsauta sovelluspalkin painiketta {{ui:Tallenna offline-käyttöön}} yhteyden ollessa päällä ja odota, että {{ui:Offline valmis}} tulee näkyviin. Tallennettu kopio on noin 33 MB; siihen kuuluu IFC-moottori, joten myös IFC-mallit avautuvat offline-tilassa. [Työskentely offline-tilassa](common:offline) selittää tallennetut kopiot yleisesti.

## Pilvitallennus

Pilvitallennus ei ole vielä käytettävissä. Tallenna muokatut kopiot omalle tietokoneellesi tai toimiston tiedostopalvelimelle, kuten mihin tahansa tiedostoon. Katso [Tiedostosi](common:your-files).
