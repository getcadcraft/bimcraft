---
title: Merkitse elementit tarkistetuiksi tai työmaalla vahvistetuiksi
summary: PDF:stä tai skannauksesta luettu elementti on vahvistamaton, kunnes se tarkistetaan. Merkitse elementit tarkistetuiksi tai työmaalla vahvistetuiksi (LOD 500) ja kirjaa, kuka mittasi, milloin ja miten. Luovuta toteutusmalli, josta näkyy, mikä on mitä.
keywords: vahvistamaton, vahvistettu, tarkistettu, työmaalla vahvistettu, toteutusmalli, LOD 500, luovutus, mitattu työmaalla, mittanauha, laser, skannaus, mittaus, olemassa oleva rakennus, muutos, merkitse tarkistetuksi, varmennus, vaihe 7
from: df35d908
---

## Mitä teet

Pidä kirjaa siitä, mitä mallissa joku on oikeasti tarkastanut. Elementillä on yksi kolmesta merkinnästä tai ei merkintää:

- **Vahvistamaton**: ohjelma tunnisti sen PDF:stä, skannatusta piirustuksesta, jäljitetystä piirustuksesta tai pistepilven skannauksesta. Ketään ei ole vielä tarkistanut sitä.
- **Tarkistettu**: henkilö vertasi sitä piirustukseen, josta se tuli.
- **Työmaalla vahvistettu (LOD 500)**: henkilö mittasi sen työmaalla. Kuka, milloin ja miten, tallennetaan elementin yhteyteen.
- **Ei merkintää**: henkilön piirtämä. Malli ei väitä siitä mitään.

## Vaiheet

1. Valitse yksi elementti tai useita (seinät, ovet, ikkunat, huoneet, mikä tahansa elementti).
2. Avaa Ominaisuudet-paneelissa {{ui:Verification}}.
3. Kirjoita, kuka tarkisti tai mittasi elementin. Päivämäärä on tämä päivä, ellet muuta sitä.
4. Napsauta {{ui:Mark as checked}}. Työmaamittausta varten valitse, miten mittaus tehtiin (mittanauha, laseretäisyysmittari, skannaus, kartoitus), ja napsauta {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} ja {{ui:Take the mark off}} palauttavat. Jokainen napsautus on yksi vaihe, jonka voi kumota koko valinnalle.

Valinnan nopeaan merkitsemiseen: {{ui:Tools}} › {{ui:Mark as checked}} (kirjoitettuna: `MARKCHECKED`) merkitsee sen tarkistetuksi tekijänsä toimesta tänään.

## Mitä pitäisi näkyä

- Pohjakuvassa vahvistamaton elementti on katkoviivakehys ja "?"; työmaalla vahvistetussa on rasti. Rasti piilotetaan poistamalla ruksi kohdasta {{ui:Show verification marks in the plan}} osiossa {{ui:Audit}}.
- {{ui:Schedules}} › {{ui:Verification}} luettelee jokaisen merkityn elementin kerroksineen, tilaineen, kenen, milloin, miten ja mistä se tuli.
- Tarkastus listaa vahvistamattomat elementit ja laskee työmaalla vahvistetun elementin LOD 500 -elementiksi. Katso [Tarkasta malli](topic:audit-the-model).

## Skannauksesta

Kun skannausta verrataan malliin, {{ui:Mark the matching elements as field-verified}} merkitsee jokaisen elementin, jonka skannaus näki toteutuneena toleranssin sisällä, menetelmänä "skannaus" ja toleranssin muistiinpanossa. Katso [Vertaa skannausta malliin](topic:compare-scan-with-model).

:::warning
Vertailu sovittaa kunkin elementin laatikon skannauspisteisiin. Se ei ole kartoitus. Käytä sitä elementeille, jotka olet myös itse tarkastanut.
:::

## Toteutusmalli ja luovutuspaketti

{{ui:Build the handover package}} välilehdellä {{ui:Assets}} laittaa toteutusmallin zip-tiedostoon, jossa on:

- projektiin merkintä siitä, kuinka monta elementtiä on työmaalla vahvistettu, tarkistettu, vahvistamaton ja merkitsemätön;
- `as-built/verified-elements.csv`: jokainen elementti ja huone tilansa, kenen, milloin ja miten;
- `as-built/as-built-drawings.pdf`: piirustussarja sellaisena kuin se nyt on;
- piirustusten muutosloki, kun mallista on julkaistu sarjoja.

Katso [Resurssit ja ylläpito](topic:assets-and-maintenance).

## Miten se säilytetään IFC:ssä

Jokainen merkitty elementti kantaa ominaisuusjoukkoa `CadCraft_Verification`: State, By, On, Method, Source, Note ja LevelOfDevelopment (`LOD 500`, kun elementti on työmaalla vahvistettu). Ne ovat tavallisia tekstiominaisuuksia, joten muut ohjelmat listaavat ne, ja Etsi, Väritä ominaisuuden mukaan sekä tunnistetaulukot voivat käyttää niitä. Toteutuksen tilaus on ominaisuusjoukko `CadCraft_AsBuilt` projektissa. Elementti ilman tätä joukkoa ei ole mitattu työmaalla.

## Seuraavaksi

- [Seinät piirustussarjasta](topic:walls-from-plans)
- [Tarkasta malli](topic:audit-the-model)
