---
title: Työskentelytapa, monistetut näkymät, kynät paperilla, Raportoi luokkana ja mallipohjat
summary: Valitse, miten BimCraft toimii työtapasi mukaan, monista mikä tahansa näkymä omana kopionaan tai linkitettynä, säilytä kynäasetukset tiedostossa ja tulosta näkymän mukaan tai kynätaulukon kautta, raportoi elementti toisena IFC-luokkana ja aloita projektit omista mallipohjistasi.
keywords: työskentelytapa, monista näkymä, monista, kopioi näkymä, riippuvainen näkymä, linkitetty näkymä, oma kopio, näkymäkopio, kynien ohitukset, kynät, viivanpaksuus, tulosta näkymän mukaan, kynätaulukko, piirtotyyli, ctb, yksivärinen, harmaasävy, raportoi luokkana, ifc-luokka, luokan muuttaminen, esimääritelty tyyppi, yleinen malli, laatta tienä, seinä paneelina, katto luiskana, projektin mallipohja, mallipohja, uusi mallipohjasta, tallenna mallipohjana, toimiston standardi
from: 231d98b0
---

## Mitä teet

Määritä BimCraft työtapasi mukaan, monista näkymiä, tulosta ne odottamallasi tavalla, laske elementit sellaisina kuin ne todella ovat ja aloita jokainen projekti toimiston mallipohjasta.

## Valitse työskentelytapa

1. Avaa {{ui:Asetukset}} ja BimCraft-välilehti. Etsi {{ui:Työskentelytapa}}.
2. Valitse yksi:
   - {{ui:Kukin näkymä omanaan}} (ensimmäinen vaihtoehto): monistettu näkymä kopioi merkintänsä, ja ne pysyvät sen näkymän omina; arkit tulostuvat näytön mukaan.
   - {{ui:Yhteiset merkinnät ja kynätaulukot}}: monistetut näkymät jakavat merkintänsä; tulostus kulkee kynätaulukon kautta.
3. Valinnan alla on neljä asiaa, jotka se asettaa. Muuta mitä tahansa yksittäin; tyyli näkyy sen jälkeen nimellä {{ui:Mukautettu}}.

Työskentelytapa tallennetaan tähän selaimeen, kuten työtilan asettelu. Mallipohja kuljettaa sen uusiin malleihin.

## Monista näkymä

1. {{ui:Projektiselain}}-ikkunassa jokaisella pohjakuvalla, kattopohjakuvalla, tarkennusmerkinnällä, julkisivulla ja leikkauksella on {{ui:Monista}}-painike (kaksi arkkia).
2. Nimeä kopio ja valitse, miten se toimii:
   - {{ui:Oma kopio}}: sen piirrokset, mitoitukset, rajaus, piilotetut elementit ja kynät kopioidaan ja pysyvät sen omina. Kumman tahansa näkymän muokkaaminen ei koskaan muuta toista, joten julkaistu arkki pysyy sellaisena kuin se julkaistiin.
   - {{ui:Linkitetty}}: se näyttää saman näkymän yhdellä merkintä- ja asetusjoukolla.
3. Kopio luetellaan kohdassa {{ui:Monistetut näkymät}}. Napsauta sitä avataksesi sen; pohjakuvan yläpuolella oleva palkki kertoo, että kyseessä on kopio, ja {{ui:Ylös}} vie takaisin alkuperäiseen näkymään.
4. Sen liukusäätöpainike avaa asetukset: nimen, {{ui:Näkymäalue}} (omalla kopiolla on oma), {{ui:Tee oma kopio}} linkitetylle kopiolle ja {{ui:Poista}}.

Pohjakuvien ja leikkausten kopiot menevät omille arkeilleen kuten näkymät, joista ne on tehty. Monistaminen on yksi kumoamisvaihe, ja kopiot säilytetään IFC-tiedostossa tarkennusmerkintöjen rinnalla.

## Kynät näkymän mukana ja tulostettuna näkymän mukaan

1. Ota {{ui:Piirrä}} käyttöön ja valitse {{ui:Kynät}}.
2. {{ui:Kohteelle}}-luettelossa näkyy nyt jokainen luokka: seinät, ovet ja ikkunat, laatat, katot, pilarit, portaat, huonekalut ja muut sekä piirrokset ja mitoitukset.
3. {{ui:Käytä}} säilyttää kynän IFC-tiedostossa näkymän kanssa, johon se on asetettu: pohjakuvan, kattopohjakuvan, tarkennusmerkinnän tai monistetun näkymän. Ennen versiota 0.9 tehdyt kynät säilytettiin selaimessa; {{ui:Säilytä nämä tiedostossa}} siirtää ne.
4. Arkit ja PDF piirtävät jokaisen kynän näytön mukaan.

Jos haluat tulostaa kynätaulukon kautta, aseta {{ui:Tulosta}}-kohta Kynät-rivillä arvoon {{ui:Kynätaulukon kautta}} ja valitse taulukko (väri, yksivärinen, harmaasävy) tai {{ui:Muokkaa kynätaulukkoa…}}: jokainen väri saa värin, viivanpaksuuden ja sävytyksen, jolla se tulostuu. Taulukko on CadCraftin piirtotyylitiedosto, joten {{ui:Tuo…}} ottaa vastaan CadCraft-sovelluksessa tehdyn taulukon ja {{ui:Vie}} antaa taulukon takaisin. Malli säilyttää oman valintansa; ilman valintaa ratkaisee työskentelytapa.

## Raportoi elementti toisena luokkana

Laatta, joka on piirretty tienä, seinä, jota käytetään paneelina, tai katto, joka on muotoiltu rampiksi: säilytä työkalu, jolla piirsit sen, ja raportoi se sellaisena kuin se on.

1. Valitse elementti ja avaa {{ui:Ominaisuudet}}. Avaa {{ui:Raportoi luokkana}}.
2. Kirjoita hakukenttään löytääksesi muotoon sopivan luokan, valitse se ja sen esimääritelty tyyppi. Omaa tyyppiä varten valitse USERDEFINED ja anna sille nimi.
3. {{ui:Käytä}} (yksi kumoamisvaihe). {{ui:Tyhjennä}} palauttaa raportoinnin piirrettyyn muotoon.

Muokkaat sitä yhä työkalulla, jolla piirsit sen. Tallennettu IFC kirjoittaa sen raportoituna luokkana, joten muut ohjelmat, {{ui:Määrät}}-määrälaskenta, Etsi, Väritä kohteen mukaan, mallintarkastukset ja {{ui:Ongelmat}} laskevat sen sellaiseksi. Luettelot jättävät paneeliksi raportoidun seinän pois seinäluettelosta, ja {{ui:Elementit raportoidun luokan mukaan}} listaa ne kaikki. Toimii IFC4- ja IFC2X3-tiedostoissa; luettelo tarjoaa vain ne luokat, jotka tiedoston IFC-versio tuntee. Ovet, ikkunat, portaat, huoneet ja tasot säilyttävät oman luokkansa.

## Tallenna projekti mallipohjana ja aloita siitä

1. Kun projekti on auki, napsauta {{ui:Tallenna mallipohjana}} {{ui:Tallenna}}-painikkeen vieressä.
2. Nimeä se. Rastita Lataa myös mallipohjatiedosto jakaaksesi sen IFC-tiedostona ja {{ui:Aloita uudet mallit siitä}} tehdäksesi siitä oletuksesi.
3. Mallipohja säilyttää tasot, näkymämallit ja näkymäasetukset, monistetut näkymät ja tarkennusmerkinnät, piirrokset, kynät ja kynätaulukon, tunnisteet, perheet ja tyypit, arkit, arkkikoot, piirustusotsikot ja työskentelytavan. Seinät, laatat, ovet ja kaikki muut mallin elementit jätetään pois.
4. Napsauta {{ui:Uusi rakennus}} ja valitse se kohdasta {{ui:Aloita kohteesta}}, tai valitse {{ui:Mallipohjatiedosto…}} saamasi mallipohja. Uudella projektilla on oma nimensä ja oma projektitunnus; kaikki muu on mallipohjan mukaista.

:::note
Mallipohjat säilytetään tässä selaimessa. CadCraft Studion kautta jaettuja tiimin mallipohjia ei ole vielä toteutettu: lähetä mallipohjatiedosto sen sijaan.
:::
