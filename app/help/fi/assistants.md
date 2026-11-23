---
title: Anna tekoälyavustajan työskennellä mallisi kanssa
summary: Ota avustajat käyttöön Asetuksissa, jotta tietokoneellasi oleva avustaja voi etsiä kohteita, lukea niiden ominaisuuksia, eristää ne näkymässä ja piirtää seinät, ovet, ikkunat, lattiat, tasot ja akselit CadCraft Studion kautta. Pois päältä, kunnes otat ne käyttöön.
keywords: tekoäly, avustaja, mcp, skripti, automaatio, studio, etsi kohteita, eristä, ominaisuudet, oikeudet, katkaise yhteys, toiminta, piirrä seinät, lisää ovet, lisää ikkunat, tasot, akselit, lattiat, kumoa, tallenna, komentorivi, cli, ilman ikkunaa, käytä tekoälyavustajien kanssa
from: 66d72742
---

## Mitä opit

Miten annat tekoälyavustajalle (millä tahansa MCP:tä puhuvalla avustajalla) pääsyn avoinna olevaan IFC-malliin ja piirtämään siihen, mitä se voi ja ei voi tehdä ja miten sen saa pysäytettyä.

## Mitä avustaja voi tehdä BimCraftissa

| Se pyytää | Mitä tapahtuu | Tarvitsee |
|---|---|---|
| Etsi kohteita | Se saa luettelon kohteista luokan, kerroksen, nimen tai ominaisuuden arvon mukaan, kuten **Etsi** tekee | Lukeminen |
| Lue ominaisuuksia | Se saa yhden kohteen attribuutit, tyypin, ominaisuusjoukot ja määrät, kuten **Ominaisuudet** ne näyttää | Lukeminen |
| Kuvaile malli, luettele seinät | Se saa tasot, seinät, ovet, ikkunat, huoneet, lattiat, akselistot ja pilarit sekä kunkin seinän päät, tyypin ja korkeuden | Lukeminen |
| Eristä, tee läpinäkyväksi, piilota tai näytä | 3D-näkymä muuttuu kuin olisit käyttänyt {{ui:Näytä}}-valikkoa | Näkymän muuttaminen ja piirtäminen |
| Piirrä seinät, ovet, ikkunat, lattiat, tasot tai akselilinjat | Malli muuttuu kuin olisit käyttänyt {{ui:Piirrä}}-työkaluja: seinät liittyvät toisiinsa, ja huoneet, lattiat ja katot seuraavat | Näkymän muuttaminen ja piirtäminen |
| Vaihda nimi tai ominaisuuden arvo | Yhden kohteen Nimi, Kuvaus, Objektityyppi tai Tunniste, tai yhden ominaisuuden arvo. Arvo, jonka se jakaa muiden kohteiden kanssa, kopioidaan sille ensin. Tyypin arvo muuttuu vain, kun avustaja sanoo niin, koska jokainen saman tyypin kohde seuraa sitä | Näkymän muuttaminen ja piirtäminen |
| Siirrä, poista, muuta seinät, ovet ja ikkunat | Kohteet siirtyvät tai poistuvat yhdessä niitä isännöivien kohteiden kanssa. Piirrä-työkaluilla piirretyt seinät muuttuvat päiden tai tyypin mukaan, ovet ja ikkunat paikan, koon tai tyypin mukaan, ja huoneet ja liitokset seuraavat | Näkymän muuttaminen ja piirtäminen |
| Määritä, järjestä ja lue aikataulu | ”Ovien aikataulu kerroksittain, palonkestävyys ja kalusteet”: avustaja nimeää aikataulun, sen sarakkeet (ominaisuus tai tunniste muuttuu sarakkeeksi) ja ryhmittelyn. BimCraft täyttää aikataulun mallista ja asettelee sen, ja se, mitä avustaja ei määritellyt, otetaan toimiston standardista. Asetus liittyy Aikataulut-luetteloosi. Jokainen takaisin saatu rivi nimeää kohteensa, joten avustaja voi valita ne | Lukeminen lukemiseen; näkymän muuttaminen ja piirtäminen asetuksen tallentamiseen |
| Vie aikataulu | CSV, Excel tai sarkaineroteltu teksti liitettäväksi Google Sheetsiin (mitään ei lähetetä Googlelle) | Vienti |
| Lue ja aseta huonepinnat | Pintatyypit, kunkin huoneen lattian, seinän ja katon pinta, vyöhykkeet. Pinta-alat, laattamäärät ja alustan tilavuudet tulevat sen jälkeen pinta-aikatauluista | Lukeminen; asettamiseen näkymän muuttaminen ja piirtäminen |
| Valitse kohteita, kumoa oman toiminnon vaiheet | Kohteet valitaan näkymästä, ja sen viimeinen vaihe perutaan | Näkymän muuttaminen ja piirtäminen |
| Tallenna | Uusi IFC-tiedosto kaikilla muutoksilla, kuten {{ui:Tallenna IFC-tiedostona}} sen tekee (alkuperäistä ei koskaan muuteta) | Tallennus |
| Vie USD | Avoimet mallit OpenUSD-muodossa (.usda, .usdc tai .usdz), kuten työkalurivin {{ui:USD}} ne kirjoittaa | Vienti |
| Renderöi kuva, aja renderointijono | Kuva 3D-näkymästä, kuten {{ui:Renderöi}}-valintaikkuna sen tekee renderöinnin asetuksilla, ellei avustaja pyydä muita. Tai laadukkaita kuvia, jotka lisätään valintaikkunan jonoon ja renderöidään peräkkäin (jono vaatii WebGPU:n). Mallin mikään ei muutu ([Renderöi kuva](topic:render)) | Vienti |

Jokainen avustajan tekemä muutos on yksi vaihe **Muutokset**-luettelossa, nimeltään ”Avustaja: …” (esimerkiksi ”Avustaja: lisää 4 seinää”). Siksi {{key:Mod+Z}} perii koko sen toiminnon, ja näet, kenen vaihe se oli. Ikkunassa se ei voi avata tiedostoja: sinä avaat mallin, ja avustaja työskentelee avoinna olevan kanssa.

## Ota käyttöön

Avustajat yhdistyvät BimCraftiin tietokoneellasi olevan CadCraft Studion kautta. Pelkällä selaimella ei ole siihen pääsyä.

1. Avaa {{ui:Asetukset}} ja valitse **BimCraft**-välilehti.
2. Kohdassa **Avustajat** rastita **Anna tekoälyavustajien ja skriptien käyttää BimCraftia**.
3. **Lukeminen** on valittu puolestasi. Rastita myös **Muuta näkymää ja piirrä**, jos avustaja saa eristää ja piilottaa kohteita sekä piirtää, ja **Tallennus**, jos se saa tallentaa mallin uutena tiedostona.
4. Yhdistä avustaja Studiossa. Studio näyttää osoitteen ja asetukset, jotka liitetään avustajaan.

## Kun avustaja on yhdistetty

Oikean paneelin yläreunassa näkyy huomautus siitä, mikä avustaja on yhdistetty ja mitä se voi tehdä. Napsauta {{ui:Katkaise yhteys}} lopettaaksesi istunnon heti. Avustajan on yhdistettävä uudelleen, jotta se voi jatkaa.

**Toiminta**-luettelo kohdassa **Avustajat** Asetuksissa näyttää kaikki avustajan kutsut uusimmasta vanhimpaan ja kertoo, onnistuiko kutsu.

:::tip
Kysy tavallisin sanoin, esimerkiksi ”eristä ulkoseinät tasolta 1”, ”mitkä ovet puuttuu palonkestävyys?” tai ”piirrä 6 x 4 metrin huone tasolle 1 ja ovi etelän seinään”. Avustaja etsii kohteet ja näyttää ne näkymässäsi tai piirtää ne.
:::

## Ilman ikkunaa: skriptit ja komentorivi

Samat piirustustyökalut toimivat IFC-tiedostoilla kansioissa, jotka nimeät, ilman avointa ikkunaa. CadCraftin MCP-palvelin ja komentorivi voivat aloittaa uuden rakennuksen tai avata IFC-tiedoston, kuvailla sitä, lisätä seinät, ovet, ikkunat, lattiat, tasot ja akselilinjat, kumota ne ja tallentaa uutena `.ifc`-tiedostona. Neljä muuta työkalua sopii skripteihin: `ifc_batch` suorittaa enintään 200 muokkausvaihetta yhtenä kokonaisuutena (kaikki tai ei mitään: yksi kumoaminen perii koko erän, ja hylätty vaihe kumoaa loput ja nimeää vaiheen); `ifc_describe` luettelee tasot ja jokaisen seinän ovineen ja ikkunoineen; `ifc_render_png` kirjoittaa mallista tasavarjostetun tarkistuskuvan ilman ikkunaa (ei materiaaleja, tekstuureja tai varjoja); `usd_export` kirjoittaa `.usda`-, `.usdc`- tai `.usdz`-tiedoston. Komentorivillä `cadcraft bim script.json --from model.ifc -o out.ifc` suorittaa vaiheiden skriptin, ja `--usd`, `--png` ja `--plan` kirjoittavat saman ajon USD-tiedoston, kuvan tai pohjakuvan. Päätät itse, mitä kansioita avustaja saa käyttää ja saako se muuttaa tai tallentaa mitään.

## Poista käytöstä

Poista rasti kohdasta **Anna tekoälyavustajien ja skriptien käyttää BimCraftia**. Jokainen avustaja katkaistaan heti, ja asetus säilyy seuraavaa kertaa varten.

## Katso myös

- [Reseptit tekoälyavustajille](common:assistants-recipes): toimivia esimerkkejä, joista kukin kertoo, mitä työkaluja se kutsuu.
- [Etsi kohteita luokan, nimen tai ominaisuuden mukaan](topic:find)
- [Piilota, eristä ja tee kohteista läpinäkyviä](topic:hide-and-isolate)
- [BimCraftin asetukset](topic:settings)
