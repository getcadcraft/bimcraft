---
title: BimCraft-asetukset
summary: Valitse, näkyvätkö huoneet ja tilat, piirretäänkö särmät ja mihin näkymään malli avautuu, ja aloita sijoittaminen seinätartunta päällä.
keywords: asetukset, mieltymykset, vaihtoehdot, tilat, huoneet, IfcSpace, särmät, viivat, suorituskyky, suuri malli, avautuva näkymä, kamera, ylänäkymä, seinätartunta, tartunta
from: 4416e64f
---

Avaa {{ui:Asetukset}} sovelluspalkin hammasrattaalla tai {{key:Mod+,}}-pikanäppäimellä. Ensimmäinen välilehti, {{ui:BimCraft}}, sisältää tälle sovellukselle kuuluvat asetukset; {{ui:Yleinen}} sisältää ne asetukset, jotka kaikki CadCraft-sovellukset jakavat (teema, työkalurivi, paneelit). BimCraftin asetukset ovat vain tässä sovelluksessa: muutat niitä täällä, ja tämä selain muistaa ne. {{ui:Palauta BimCraft-asetukset}} valintaikkunan alareunassa palauttaa ne sekä yhteiset asetukset alkutilaansa.

## Valikot, pikanäppäimet ja hiiri

Valikkotyyli (BimCraftin oma työkalurivi, kotisuunnittelun valikkorivi, BIM-valintanauha tai piirtämisen komentorivi), omat pikanäppäimet ja valikot sekä se, mitä rulla ja hiiren painikkeet tekevät. Katso [Valikot, pikanäppäimet ja hiiri](topic:menus-keys-and-mouse).

## Kun malli avautuu

- **Näytä huoneet ja tilat** (alussa pois päältä): huoneet ja tilat ovat läpinäkyviä laatikoita, jotka voivat peittää niiden takana olevat seinät, joten ne ovat alussa piilossa. {{ui:Tilat}}-painike mallin yläpuolella kytkee ne yhä päälle ja pois avoimelle mallille.
- **Särmät**: {{ui:Särmät päällä}} (alkuasetus) piirtää särmäviivat, jotka antavat piirustusmaisen ilmeen. {{ui:Vain pienet mallit}} piirtää ne vain malleille, joissa on alle 300 000 kolmiota, mikä pitää suuret mallit nopeampina kääntää. {{ui:Särmät pois}} aloittaa jokaisen mallin ilman niitä. {{ui:Särmät}}-painike vaihtaa niitä yhä avoimelle mallille. Yli 1,5 miljoonan kolmion malleilla särmät ovat aina pois.

## Piirustukset avautuvat

DWG- tai DXF-piirustus näkyy ensin niin, että {{ui:3D (nopein)}} (alkuasetus) piirtää nopeasti jopa suuren piirustuksen, tai {{ui:Malli (2D)}} avaa tasaisen mallitilan näkymän. Piirustuksen yllä olevat välilehdet vaihtavat milloin tahansa {{ui:Malli}}-, arkki- ja {{ui:3D}}-näkymän välillä. Piirustus, jossa ei ole mitään mallitilassa, tai selain, joka ei osaa näyttää 3D:tä, avautuu aina 2D:nä.

## Avautuva näkymä

Kamera, jolla malli avautuu: {{ui:Sovita}} (alkuasetus, koko malli nurkasta), {{ui:Ylhäältä}}, {{ui:Edestä}} tai {{ui:Sivu}}. Mallin yläpuolella olevat painikkeet vaihtavat näkymää milloin tahansa.

**Rakennus käännettynä tontillaan**: monet mallit tulevat niin, että rakennus on kulmassa tiedoston akseleihin nähden (mittaus- tai yhteiskoordinaateissa). {{ui:Suoraan rakennukseen nähden}} (alkuasetus) näyttää tällaisen rakennuksen suorassa: {{ui:Sovita}}, {{ui:Ylhäältä}}, {{ui:Edestä}}, {{ui:Sivu}}, näkymäkuution sivut ja jokainen uusi leikkaus seuraavat sen seiniä, ja näkymäkuution kompassi osoittaa yhä mallin pohjoiseen. {{ui:Sellaisena kuin tontille sijoitettu}} säilyttää tiedoston akselit. Rakennus, jonka seinät kulkevat akselien suuntaisesti, näyttää samalta kummallakin tavalla.

## Kirjastokohteiden sijoittaminen

**Aloita seinätartunta päällä** (alussa pois päältä): kun kirjastokohteen sijoittaminen tai liittäminen alkaa, sen selkä tarttuu lähimpään seinään ja osoittaa huoneeseen päin. {{key:Tab}} tai {{ui:Seinätartunta}} sijoituspalkissa kytkee sen hetkeksi pois. Kerros ilman seiniä alkaa ilman sitä.

## Leikkauslaatikko

{{ui:Väljyys valinnan ympärillä}} on tila, jonka {{ui:Leikkauslaatikko valinnan ympärille}} jättää joka puolelle valittujen elementtien ympärille, millimetreinä: alussa 300, enintään 5000. Katso [Leikkaa IFC-malli leikkaustasolla](topic:section-plane).

## Sijainti

{{ui:Leveys- ja pituusaste järjestelmässä}} valitsee järjestelmän, jossa {{ui:Mittaa}} › {{ui:Sijainti}} näyttää leveys- ja pituusasteet: WGS 84 (EPSG:4326, alussa, kuten GPS ja verkkokartat käyttävät), {{ui:Tiedoston oma datum}} tai yksi seuraavista: ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 tai CGCS2000. Tiedoston oma karttajärjestelmä ja datum näkyvät aina myös. Katso [Mittaa etäisyydet, pintojen alat ja sijainnit 3D:ssä](topic:measure).

## Kulmanäyttö

Oikeaan alakulmaan 3D-näkymissä tulee (IFC-malli ja 3D:ksi vaihdettu piirustus): {{ui:Näkymäkuutio}} (alkuasetus), {{ui:Akselikuvake}} (pieni X, Y ja Z) tai {{ui:Ei mitään}}. Muutos tulee heti voimaan. 2D-piirustusnäkymässä ei koskaan ole kulmanäyttöä.

Näkymäkuutiossa napsauta sivua, särmää tai kulmaa katsoaksesi siltä puolelta, vedä kuutiota kiertääksesi sitä, vedä rengasta kääntääksesi, ja napsauta taloa palataksesi aloitusnäkymään.

## Nimesi havainnoissa

Kirjautuneena havainnoissa on tilisi nimi, eikä BimCraft kysy mitään: tämä kohta näyttää {{ui:Tililtäsi (<name>)}}. {{ui:Käytä toista nimeä}} avaa kentän toiselle nimelle, joka on voimassa, kunnes valitset {{ui:Käytä tilini nimeä}}. Uloskirjautuneena havaintolomake kysyy nimen kuten ennenkin. Katso [Havainnot ja BCF-tiedostot](topic:issues-bcf).

## Avustajat

**Anna tekoälyavustajille ja skripteille pääsy BimCraftiin** (alussa pois päältä) antaa tietokoneesi avustajalle pääsyn avoimeen malliin CadCraft Studion kautta: **Lue** etsii elementit ja lukee niiden ominaisuudet, **Muuta näkymää** eristää, piilottaa ja näyttää ne. **Toiminta** luettelee sen kutsut. Katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).

:::note
Muut asetukset tulevat voimaan, kun malli avautuu tai sijoittaminen alkaa. Jo auki oleva malli säilyttää ulkoasunsa, kunnes käytät työkalurivin painikkeita tai avaat sen uudelleen.
:::

## Liittyvää

- [Kopioi, liitä ja monista kirjastokohteet](topic:copy-paste)
- [Sijoita laitteet ja kalusteet kirjastosta](topic:place-from-library)
- [BimCraftin näkymä](topic:workspace)
- [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants)
