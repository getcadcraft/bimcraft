---
title: Anna AI-avustajan työskennellä mallisi kanssa
summary: Ota avustajat käyttöön asetuksissa, jotta tietokoneesi avustaja voi löytää elementtejä, lukea niiden ominaisuuksia, eristää ne näkymässä sekä piirtää seiniä, ovia, ikkunoita, lattioita, tasoja ja ruudukoita CadCraft Studion kautta. Pois päältä, kunnes käynnistät sen.
keywords: ai, avustaja, mcp, skripti, automaatio, studio, etsi elementit, eristä, ominaisuudet, oikeudet, katkaise yhteys, toiminta, piirrä seiniä, lisää ovia, lisää ikkunoita, tasot, ruudukot, lattiat, kumoa, tallenna, komentorivi, cli, ilman ikkunaa, käyttö AI-avustajien kanssa
from: c5ee595b
---

## Mitä opit

Miten annat AI-avustajalle (mille tahansa avustajalle, joka puhuu MCP:tä) luvan katsoa avoinna olevaa IFC-mallia ja piirtää siihen, mitä se voi ja ei voi tehdä, ja miten pysäytät sen.

## Mitä avustaja voi tehdä BimCraftissa

| Se pyytää | Mitä tapahtuu | Tarvitsee |
|---|---|---|
| Etsi elementit | Se saa luettelon elementeistä luokan, kerroksen, nimen tai ominaisuusarvon mukaan, kuten **Etsi** tekee | Lue |
| Lue ominaisuudet | Se saa yhden elementin attribuutit, tyypin, ominaisuusjoukot ja määrät, kuten **Ominaisuudet** näyttää ne | Lue |
| Kuvaa malli, luettele seinät | Se saa tasot, seinät, ovet, ikkunat, huoneet, lattiat, ruudukot ja pilarit sekä jokaisen seinän päät, tyypin ja korkeuden | Lue |
| Eristä, läpinäkyvä, piilota tai näytä | 3D-näkymä muuttuu, kuten jos olisit käyttänyt {{ui:Näytä}}-valikkoa | Muuta näkymää ja piirrä |
| Piirrä seiniä, ovia, ikkunoita, lattioita, tasoja tai ruudukkoviivoja | Malli muuttuu, kuten jos olisit käyttänyt {{ui:Piirrä}}-työkaluja: seinät liittyvät, ja huoneet, lattiat ja katot seuraavat | Muuta näkymää ja piirrä |
| Muuta nimeä tai ominaisuusarvoa | Yhden elementin Nimi, Kuvaus, Objektityyppi tai Tunniste, tai yksi ominaisuusarvo. Arvo, jonka se jakaa muiden elementtien kanssa, kopioidaan sille ensin; tyypin arvo muuttuu vain, kun avustaja sanoo niin, koska jokainen saman tyypin elementti seuraa sitä | Muuta näkymää ja piirrä |
| Siirrä, poista, muuta seiniä, ovia ja ikkunoita | Elementit siirtyvät tai poistetaan niiden mukana, joissa ne ovat. {{ui:Piirrä}}-työkaluilla piirretyt seinät muuttuvat päiden tai tyypin mukaan, ovet ja ikkunat paikan, koon tai tyypin mukaan, ja huoneet ja liitokset seuraavat | Muuta näkymää ja piirrä |
| Aseta, järjestä ja lue luettelo | "Ovien luettelo kerroksittain, palonkestävyys ja rautatavarat": avustaja nimeää luettelon, sen sarakkeet (ominaisuus tai tunniste tulee sarakkeeksi) ja ryhmittelyn. BimCraft täyttää luettelon mallista ja asettelee sen, ja ottaa sen, mitä avustaja ei maininnut, toimiston standardista. Asetelma liittyy {{ui:Luettelot}}-listaasi. Jokainen sen palauttama rivi nimeää elementtinsä, joten avustaja voi valita ne | Lue lukemiseen; Muuta näkymää ja piirrä asetelman tallentamiseen |
| Vie luettelo | CSV, Excel tai sarkaimilla erotettu teksti liitettäväksi Google Sheetsiin (mitään ei lähetetä Googlelle) | Vie |
| Lue ja aseta huoneiden viimeistelyt | Viimeistelytyypit, kunkin huoneen lattia-, seinä- ja kattoviimeistely, vyöhykkeet; alat, laattamäärät ja alustan tilavuudet tulevat sitten viimeistelyluetteloista | Lue; asettamiseen Muuta näkymää ja piirrä |
| Valitse elementit, kumoa oma vaiheensa | Elementit valitaan näkymästä; sen viimeisin vaihe kumotaan | Muuta näkymää ja piirrä |
| Tallenna | Uusi IFC-tiedosto, jossa on kaikki muutokset, kuten {{ui:Tallenna IFC-tiedostona}} sen tekee (alkuperäistä ei koskaan muuteta) | Tallenna |
| Vie USD | Avoimet mallit OpenUSD-muodossa (.usda, .usdc tai .usdz), kuten työkalurivin {{ui:USD}} kirjoittaa sen | Vie |
| Renderöi kuva, aja renderijono | Kuva 3D-näkymästä, kuten {{ui:Renderöi}}-valintaikkuna tekee renderiasetuksillasi, ellei se pyydä muita, tai laadukkaita kuvia valintaikkunan jonoon, joka renderöidään peräkkäin (jono tarvitsee WebGPU:n). Mallissa ei muutu mitään ([Renderöi kuva](topic:render)) | Vie |

Jokainen avustajan tekemä muutos on yksi vaihe **Muutokset**-listassa, nimeltään "Avustaja: …" (esimerkiksi "Avustaja: lisää 4 seinää"), joten {{key:Mod+Z}} kumoaa koko sen toiminnon, ja näet, kenen vaihe se oli. Ikkunassa avustaja ei voi avata tiedostoja: sinä avaat mallin, ja avustaja työskentelee avoimen mallin kanssa.

## Ota käyttöön

Avustajat tavoittavat BimCraftin CadCraft Studion kautta tietokoneellasi; tavallinen selain ei tarjoa pääsyä.

1. Avaa {{ui:Asetukset}} ja valitse **BimCraft**-välilehti.
2. Kohdassa **Avustajat** valitse **Anna AI-avustajien ja skriptien käyttää BimCraftia**.
3. **Lue** on valittu puolestasi. Valitse myös **Muuta näkymää ja piirrä**, jos avustaja saa eristää ja piilottaa elementtejä sekä piirtää, ja **Tallenna**, jos se saa tallentaa mallin uutena tiedostona.
4. Yhdistä avustaja Studiossa (Studio näyttää osoitteen ja asetukset, jotka liitetään siihen).

## Kun avustaja on yhdistetty

Oikean paneelin yläreunassa oleva huomautus kertoo, mikä avustaja on yhdistetty ja mitä se voi tehdä. Napsauta {{ui:Katkaise yhteys}} lopettaaksesi sen istunnon heti; sen on yhdistyttävä uudelleen jatkaakseen.

**Toiminta**, Asetukset-kohdan **Avustajat** alla, luettelee jokaisen avustajan tekemän kutsun, uusin ensin, ja kertoo, onnistuiko se.

:::tip
Kysy tavallisin sanoin, esimerkiksi "eristä ulkoseinät tasolla 1", "mitkä ovet puuttuvat palonkestävyyden?" tai "piirrä 6 x 4 metrin huone tasolle 1 oven kanssa etelän seinään". Avustaja löytää elementit ja näyttää ne näkymässäsi tai piirtää ne.
:::

## Ilman ikkunaa: skriptit ja komentorivi

Samat piirtotyökalut toimivat ilman avointa ikkunaa IFC-tiedostoissa kansioissa, jotka nimeät: CadCraftin MCP-palvelin ja komentorivi voivat aloittaa uuden rakennuksen tai avata IFC-tiedoston, kuvata sitä, lisätä seiniä, ovia, ikkunoita, lattioita, tasoja ja ruudukoita, kumota ja tallentaa sen uutena `.ifc`-tiedostona. Sinä päätät, mitä kansioita se saa käyttää ja saako se muuttaa tai tallentaa mitään.

## Pois päältä

Poista valinta kohdasta **Anna AI-avustajien ja skriptien käyttää BimCraftia**. Jokainen avustaja katkaistaan heti, ja asetus säilyy seuraavaa kertaa varten.

## Katso myös

- [Reseptejä tekoälyavustajille](common:assistants-recipes): toimivia esimerkkejä, joista jokainen kertoo kutsumansa työkalut.
- [Etsi elementit luokan, nimen tai ominaisuuden mukaan](topic:find)
- [Piilota, eristä ja tee elementit läpinäkyviksi](topic:hide-and-isolate)
- [BimCraftin asetukset](topic:settings)
