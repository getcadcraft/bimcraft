---
title: Tiedostot, jotka BimCraft avaa ja tallentaa
summary: Kaikki BimCraftin avaamat muodot, mitä kustakin säilyy, mitä se tallentaa, minne tallennetut tiedostot menevät ja mikä muuttuu selainten välillä ja offline-tilassa.
keywords: muodot, avaa, tallenna, vie, lataa, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, lähetä, yksityisyys, tiedostokoko
from: a1f0161b
---

BimCraft lukee tiedostot tietokoneeltasi selaimen välilehdessä. **Mitään ei lähetetä** CadCraftille tai kenellekään muulle. Kun tallennat, BimCraft antaa selaimelle uuden ladattavan tiedoston; se ei koskaan kirjoita avaamasi tiedoston päälle.

## Mitä se avaa

| Muoto | Tiedostopäätteet | Mitä saat |
|---|---|---|
| IFC | `.ifc` | Malli 3D:nä, kerrokset, rakennusosien määrät ja jokaisen rakennusosan ominaisuudet. Nimiä, tunnisteita ja yksittäisiä ominaisuusarvoja voi muuttaa. |
| Projekti- ja perhetiedostot | `.rvt` `.rfa` `.rte` `.rft` | Tiedostokortti: julkaisu, koontiversio, yhteistyö, projektin tiedot, perheen parametrit, linkitetyt tiedostot ja esikatselukuva. Ei 3D:tä. |
| DWG | `.dwg` | Piirustus 2D:nä: mallitila, kaikki arkit, tasot, linkitetyt piirustukset, kuvat ja tulostusnäkymä. Mallitila myös 3D:nä. Tarkistetut muodot ovat AutoCAD 2000:sta 2018:aan. |
| DXF | `.dxf` | Sama kuin DWG. |
| STEP | `.step` `.stp` | Osa, laite tai toimittajan malli (AP203, AP214, AP242) 3D:nä: jokaisesta kiintokappaleesta tulee yksi rakennusosa (rakennusosan sijaiskappale) pieneen IFC-malliin yhdellä kerroksella, luettuna kolmioina todellisessa koossaan; kokoonpano kaikkine osineen siellä, minne tiedosto ne sijoittaa. Siitä eteenpäin se toimii kuten mikä tahansa IFC: ominaisuudet, leikkaukset, mittaus, tallennus IFC-tiedostona. Värejä ja kokoonpanopuuta ei lueta. |
| Pistepilvet | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skannaus 3D-näkymässä mallin vieressä tai yksinään: katso [Näytä pistepilvi mallin vieressä](topic:point-clouds). |
| Projektipaketti | `.ccbundle.zip` | Malli näkymineen, asetteluineen ja ominaisuusryhmineen: katso [Avaa projektipaketti](topic:open-project-bundle). |
| Kansio | mikä tahansa | Raportti kaikista sen malleista, piirustuksista ja projektipaketeista. Mikä tahansa raportin IFC-malli, piirustus tai paketti avautuu napsauttamalla. |

[Mitä BimCraft lukee kustakin muodosta](topic:file-formats) käy asiaan tarkemmin.

BimCraft päättelee tiedoston tyypin sekä sen ensimmäisistä tavuista että nimestä, joten epätavallisella päätteellä varustettu projektitiedosto avautuu silti tiedostokorttina.

### Ei avata

- `.ifczip` ja `.ifcxml`: BimCraft sanoo "Tiedostotyyppiä .ifczip ei vielä tueta. Tallenna tai vie malli tavallisena .ifc-tiedostona." Pura `.ifczip` (se sisältää tavallisen `.ifc`-tiedoston) tai vie malli uudelleen tavallisena IFC:nä.
- DGN-piirustukset luetellaan kansioraportissa, mutta ne eivät avaudu.
- PDF-tiedostot, kuvat ja toimisto-ohjelmien tiedostot eivät avaudu sellaisenaan. Kuvia käytetään kuvina DWG:n sisällä, ja {{ui:Rakenna}} › {{ui:Piirustuksesta…}} muuttaa PDF:n tai skannauksen sivut seiniksi: katso [Seinät pohjakuvasarjasta](topic:walls-from-plans).

## Mitä se tallentaa

| Napsautat | Saat | Minne |
|---|---|---|
| {{ui:Tallenna IFC-tiedostona}} | Uusi IFC-tiedosto muutoksinesi, nimeltään "*alkuperäinen nimi* (edited).ifc" | Selaimen latauskansio |
| {{ui:Lataa CSV}} laiteluettelossa | CSV-tiedosto luettelon kohteista, nimeltään "*piirustuksen nimi* equipment.csv" | Selaimen latauskansio |

Muut asiat tallennetaan siellä, missä ne tehdään, kukin omassa aiheessaan: {{ui:USD}} ([Vie malli USD-muodossa](topic:usd)), .glb-tiedosto ({{ui:Renderöintiä varten}}), renderöidyt kuvat, arkit ja pohjakuvat PDF-tiedostoina, luettelot CSV-tiedostoina, BCF-havainnot, COBie-taulukko, perhetiedostot ja rekisteröidyt skannaukset LAS- tai E57-tiedostoina. BimCraft ei tallenna DWG-, DXF- eikä projektitiedostoja, eikä se koskaan muuta avaamiasi tiedostoja.

:::chromium
Chrome ja Edge tallentavat lataukset asetuksissaan määritettyyn kansioon, yleensä Lataukset. Jos haluat, että sinulta kysytään joka kerta, minne tallennetaan, ota käyttöön lataus-asetuksista "Kysy, minne kukin tiedosto tallennetaan ennen lataamista".
:::

:::firefox
Firefox tallentaa Lataukset-kansioon, ellet aseta asetuksista valintaa "Kysy aina, minne tiedostot tallennetaan".
:::

:::safari
Safari tallentaa Lataukset-kansioon, ellet valitse toista kansiota kohdasta **Safari > Asetukset > Yleiset > Ladattujen tiedostojen sijainti**.
:::

## Tallennus toisen kerran

Jokainen tallennus lataa koko mallin **kaikkine muutoksineen sen jälkeen, kun avasit sen**, ei vain edellisen tallennuksen jälkeen tehtyjä muutoksia. {{ui:Muutokset}}-luettelo on jokaisen tallennuksen jälkeen taas tyhjä, joten tallennuksen yli ei voi kumota. Voit aloittaa alusta avaamalla alkuperäisen tiedoston uudelleen.

## Suuret tiedostot ja muisti

- **IFC**-tiedostot luetaan kokonaan välilehden muistiin, ja 3D-geometria vie lisää muistia. Muutaman sadan megatavun malli voi olla kannettavalle liikaa. Yli 1,5 miljoonan kolmion mallissa särmät kytketään pois muistin säästämiseksi ("Särmät ovat pois päältä erittäin suurissa malleissa").
- **Projektitiedostoja** ei lueta kokonaan. BimCraft lukee vain tarvitsemansa pienet osat, noin 40-100 kt tiedoston koosta riippumatta, joten 500 Mt:n keskusmalli verkkoasemalla avautuu hetkessä.
- **DWG- ja DXF**-tiedostot luetaan kokonaan. Hyvin suuri piirustus näyttää viestin "Tämä piirustus on hyvin suuri; vain osa siitä näytetään."
- **Kansioita** avautuu 20 000 tiedostoon asti. Luetaan vain ne muutama kilotavu, jonka kukin mallikortti tarvitsee.

Lisää tietoa: [Selaimet, laitteet ja muisti](topic:platforms).

## Online ja offline

Tiedostojen avaaminen ei koskaan vaadi internetiä. Yksi lukija ladataan sivustolta ensimmäisellä tarvekerralla: IFC-moottori, kun avaat IFC-mallin ensimmäisen kerran ("Käynnistetään IFC-moottoria…"). DWG- ja DXF-lukijat ovat osa sovellusta.

:::offline
Olet offline-tilassa. Jos sovelluspalkin painikkeessa lukee {{ui:Offline valmis}}, kaikki muodot avautuvat tavalliseen tapaan. Jos ei, IFC-mallia ei voi avata, ellei yksi ole jo avattu tässä välilehdessä: muodosta ensin yhteys uudelleen. Katso [Online ja offline](topic:online-offline).
:::

Jos haluat käyttää BimCraftia ilman yhteyttä, napsauta sovelluspalkissa {{ui:Tallenna offline-käyttöön}}, kun olet online-tilassa, ja odota, kunnes lukee {{ui:Offline valmis}}. Tallennettu kopio on noin 33 Mt; se sisältää IFC-moottorin, joten IFC-mallit avautuvat myös offline-tilassa. [Työskentely offline-tilassa](common:offline) selittää tallennetut kopiot yleisesti.

## Pilvitallennus

Pilvitallennus ei ole vielä käytettävissä. Tallenna muokatut kopiosi omalle tietokoneellesi tai toimistosi tiedostopalvelimelle kuten mitä tahansa muuta tiedostoa. Katso [Tiedostosi](common:your-files).
