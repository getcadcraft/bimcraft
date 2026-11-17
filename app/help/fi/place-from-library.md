---
title: Sijoita laitteita ja kalusteita kirjastosta
summary: Etsi kohde Kirjastosta, tiedostosta tai avoimesta piirustuksesta, sijoita se IFC-mallin kerrokselle haamuesikatselulla, käännä se, kiinnitä seinään ja tallenna.
keywords: siirrä, kierrä, vedä, kirjasto, librarycraft, sijoita, lisää, laite, laitteet, kaluste, kalusteet, lohko, perhe, kohde, luettelo, sisältö, kcl, csv, gltf, obj, rfa, dwg, IFC-tyyppi
from: 3dad5d4b
---

## Mitä teet

Sijoita kirjastokohde IFC-malliin: allas, työpöytä, tuoli. BimCraft kirjoittaa sen kunnolla IFC-elementtinä tyypillä, joten jokainen saman kohteen kopio jakaa yhden geometriajoukon, ja sen tiedot, kohdenumero ja lisenssi kulkevat mukana.

## Vaiheet

1. Avaa IFC-malli.
2. Napsauta oikealla {{ui:Library}}-välilehteä {{ui:Properties}}-välilehden vieressä, tai {{ui:Library}}-painiketta mallin yläpuolella olevassa työkalurivissä.
3. Valitse lähde:
   - **Sisäänrakennetut symbolit**: yleiset LVI-pohjakuvasymbolit, jotka kuuluvat BimCraftiin Apache-2.0-lisenssillä ja ovat käytettävissä offline-tilassa. Tarkista mitat ennen rakentamista. Sähkön pohjakuvasymboleille ja IFC-sähkölaitteille käytä **Koontiversio › Sähkö**.
   - **Kirjasto**: CadCraft-kirjasto tällä sivustolla. Julkiset kohteet eivät vaadi kirjautumista.
   - **Tämä tiedosto**: avoimen DWG- tai DXF-piirustuksen lohkot. Dynaaminen lohko, jossa on näkyvyystiloja, tarjotaan kerran per tila, nimettynä ”Sink: Double bowl”, ja kukin piirretään vain tämän tilan kohteilla.
   - **Tiedostot…**: DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- tai CSV-tiedosto tietokoneeltasi. Se luetaan tässä välilehdessä; mitään ei lähetetä.
   - **Muut syötteet**: toinen kirjasto, joka puhuu samaa syötemuotoa. Lisää sen osoite kerran; se tallennetaan tähän selaimeen.
4. Hae tai valitse luokka ja napsauta korttia. Kortti näyttää pohjakuvan esikatselun, nimen, valmistajan ja mallin, lisenssin ja version.
5. Napsauta {{ui:Sijoita pohjakuvaan}} (Pohjakuva-näkymässä) tai {{ui:Sijoita malliin}} (3D-näkymässä). Jaa-tilassa, jossa pohjakuva ja 3D-näkymä näkyvät molemmat, painike on jakopainike: sen pääasia on {{ui:Sijoita pohjakuvaan}}, ja sen oikeanpuoleinen nuoli avaa valikon, jossa on {{ui:Sijoita malliin}}. Tai vedä kortti tai kohteen tietojen kuva pohjakuvaan tai 3D-näkymään: kohde sijoitetaan siihen, mihin päästät irti. Kynällä tai sormella paina korttia hetki ja vedä sitten.
6. Valitse kerros sijoituspalkista. 3D-näkymässä sen yläpuolella olevat kerrokset piilotetaan sijoittaessa ja näkymä kääntyy ylhäältä; pohjakuvassa kuva näyttää jo kyseisen kerroksen. Jos valitset {{ui:Sijoita malliin}} pelkästä pohjakuvasta, 3D-näkymä avautuu sen viereen.
7. Siirrä osoitin mallin päälle: läpinäkyvä laatikko näyttää, mihin kohde menee.
8. Paina {{key:R}} kääntääksesi sen 90°. Paina {{key:Tab}} (tai {{ui:Seinätartunta}}) asettaaksesi sen takaosan lähimmän seinää vasten, huoneeseen päin.
9. Napsauta asettaaksesi. Tai kirjoita sijainti kenttiin **X, Y (mm)**, esimerkiksi `1200, 3400`, ja paina {{key:Enter}}.

Valaisin tai muu ylhäältä ripustettava kohde: aseta **Asennus** arvoon **Katossa**. Kohteen yläosa on silloin katon alapinnassa kohdalla (tai tason korkeudessa, jos kattoa ei ole). Kun pohjakuvanäkymässä on kattopohjakuva, **Asennus** alkaa arvosta **Katossa**.

10. Vastaa yhteen kysymykseen: **kohdenumero** (seuraava vapaa numero täytetään), määrä ja huomautus. Paina {{key:Enter}}.
11. Sijoita lisää, tai paina {{key:Esc}} lopettaaksesi.
12. Napsauta {{ui:Tallenna IFC-tiedostona}} ladataksesi muokatun kopion.

## Pohjakuva vai malli

Kirjaston sijoituspainike seuraa näkymää, jossa olet, ja vaihtuu heti, kun vaihdat näkymää ({{ui:Pohjakuva}}-, {{ui:Jaa}}- ja {{ui:3D}}-painikkeet, näppäimistö, tiedoston avaaminen). Pohjakuva näyttää yhden painikkeen, {{ui:Sijoita pohjakuvaan}}; 3D näyttää yhden painikkeen, {{ui:Sijoita malliin}}; Jaa näyttää jakopainikkeen, jonka pääasia on {{ui:Sijoita pohjakuvaan}} ja valikossa {{ui:Sijoita malliin}}. Molemmat tavat käyttävät samaa sijoituspalkkia ja kirjoittavat saman IFC-elementin: osoitin toimii toisella tavalla pohjakuvanäkymässä ja toisella 3D-näkymässä. Paina {{key:Esc}} milloin tahansa lopettaaksesi.

Kortin vetämisellä ei ole omaa näppäintä: jakopainike tai tavallinen painike tekee saman näppäimistöllä.

## Siirrä tai käännä sijoitettua kohdetta

{{ui:Draw}}-tilassa valitse kohde pohjakuvasta. Neliönmuotoinen kahva näkyy sen lisäyskohdassa ja pyöreä kahva sen vieressä.

- Vedä kohdetta tai sen neliökahvaa siirtääksesi. Se tarttuu kuten Seinä-työkalu (seinien päät ja pinnat); {{key:Shift}} pitää sen suorassa suhteessa aiempaan paikkaansa.
- Vedä pyöreää kahvaa kääntääksesi sitä 15°:n askelin. Pidä {{key:Shift}} pohjassa 1°:n askelin.
- Paina {{key:R}} kääntääksesi sen 90°.
- **Ominaisuudet** (myös 3D-näkymässä): kirjoita **X**, **Y** ja **Kierto (°)**, tai napsauta **Käännä 90°**.

Jokainen siirto on yksi kumoamisaskel ja kulkee Live TeamWork -yhteistyön kautta. Kohde säilyttää kohdenumeronsa, kirjastotietonsa ja korkeutensa tasosta. Ei vielä toteutettu: vetäminen 3D-näkymässä.

## Mitä pitäisi nähdä

- Kohde mallissa valittuna, ja sen ominaisuudet oikealla: **Kirjaston kohde** -laatikko lisenssillään ja lähdemerkinnällään, sekä joukot `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` ja merkityistä piirustuksista `CadCraft_SourceAttributes`.
- ”Sijoitettu: *kohde* (kohdenumero *n*)” muutosluettelossa. {{key:Mod+Z}} kumoaa sen.
- Tilarivi: ”Sijoitettu *kohde* kohdenumerolla *n*.”

## Hyvä tietää

- Joillakin kohteilla on useita kokoja tai vaihtoehtoja: kortissa on silloin **Variantti**-valinta, ja valitsemasi sijoitetaan. Katso [Sijoita ja vaihda kirjastokohde, jossa on variantteja](topic:library-variants).
- Kohde ilman 3D-runkoa (2D-symboli) sijoitetaan väliaikaisella laatikolla; annat sen korkeuden, kun sitä kysytään.
- Lisää samaa: valitse sijoitettu kohde ja käytä {{ui:Copy}}- ja {{ui:Paste}}-painikkeita tai {{key:Mod+D}}. Katso [Kopioi, liitä ja monista kirjastokohteita](topic:copy-paste).
- Jos haluat, että jokainen sijoitus alkaa seinätartunta päällä, ota käyttöön **Aloita seinätartunta päällä** [BimCraftin asetuksissa](topic:settings).
- Mitat muunnetaan mallin omiin yksiköihin, mitkä ne ovatkin.
- **Entourage** (puut, pensaat, ihmiset, autot) on myös kirjastossa: hae sanoilla ”tree”, ”person” tai ”car”. Nämä piirtää CadCraft (CC0), ja ne säilyttävät värinsä sijoitettaessa (runko ruskea, lehdet vihreät, auton ikkunat läpinäkyvät), BimCraftissa ja muissa BIM-ohjelmissa. Ne näkyvät [renderöidyissä kuvissa](topic:render).
- IFC2X3-tiedostossa runko kirjoitetaan fasetoituna kappaleena; IFC4:ssä kolmioituna pintajoukkona. Molemmat avautuvat muissa IFC-työkaluissa.
- Piirustusta (DWG tai DXF) ei voi tallentaa täällä, joten kohteet sijoitetaan vain IFC-malleihin. Käytä **Tämä tiedosto** -lähdettä piirustuksella nähdäksesi, mitä sen lohkoista tulisi.

## Kohteet omalla kielellä

Kohteella voi olla nimi, kuvaus ja tyyppi muilla kielillä. Kun niitä on BimCraftin asetetulla kielellä (Asetukset › Yleiset › Kieli), kohteen sivu näyttää ne, ja sen alla on valmistajan antama nimi. **Sijoita** kirjoittaa nimen sinun kielelläsi malliin, joten {{ui:Laitteet}}-luettelo listaa sen niin. Kohde pysyy samana kohteena: päivitysten tarkistus ja vaihtaminen tapahtuvat itse kohteen mukaan, ei koskaan nimen mukaan. Kohteet, joilla ei ole käännöstä, säilyttävät omat sanansa.

## Yleisiä virheitä

- **Sijoituspainike puuttuu.** IFC-mallia ei ole auki. Avaa se ensin.
- **Haamu ei seuraa osoitinta.** Osoitin on mallin alueen ulkopuolella, tai kerroksen taso ei näy. Napsauta {{ui:Ylhäältä}}.
- **{{ui:Seinätartunta}} sanoo, ettei seiniä ole.** Kerroksessa ei ole seiniä IFC:ssä (jotkut viennit sijoittavat seinät toiseen kerrokseen). Valitse se kerros tai kirjoita X ja Y.
- **Tiedoston kohteet ovat väärän kokoisia.** Tiedostossa ei ole yksiköitä tai niissä on väärät yksiköt. Valitse yksiköt kohdassa {{ui:Tiedostot…}} ja lue tiedosto uudelleen.

:::tip
Samaa kohdetta sijoitettaessa kahdesti käytetään yhtä IFC-tyyppiä, joten mallissa, jossa on neljäkymmentä tuolia, tuoli tallennetaan kerran.
:::
