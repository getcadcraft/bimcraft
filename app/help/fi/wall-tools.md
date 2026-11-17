---
title: Seinämuodot, jako, siirtymä, venytys ja lukitus
summary: Piirrä seinät suorakulmiona, monikulmiona, kaarena, valittuja viivoja pitkin tai alueen ääriviivan ympärille; jaa niitä, poista osia, siirrä ne, venytä laatikolla, kohdista ja lukitse toisiinsa, mittaan tai akselistoon. Jokainen muutos pitää seinät liitettyinä ja on yksi kumoamisvaihe.
keywords: vaihda tyyppi, muuta tyyppiä, tyypin vaihto, mitä siirtyi, LOD, kehitystaso, liitostyyli, viistoliitos, päittäisliitos, suorista pää, seinien liitokset, seuraava, kulkee läpi, estä liitos, salli liitos, tason tärkeysjärjestys, ydin, prioriteetti, liitoskohta, suorakulmio, kierretty suorakulmio, monikulmio, kirjoitettu, ympäri piirretty, kaari, keskipiste, tangenttikaari, valitse viivat, jäljitys, ääriviiva, taikasauva, jako, jako aukolla, aukko, poista osuus, yhdistä uudelleen, siirtymä, kopio, laatikkovenytys, venytys, kohdistus, lukko, rajoite, lukitse mittaan, muokkaa mittaa, akselisto, lukitse akselistoon, siirrä akselia, sijoitussiirtymä, liitos pois, vapaa seisova, kasvata alkaen, mittaa alkaen, keskiviiva, sisäpinta, ulkopinta, irrota liitos, alt
from: 5b7d2f75
---

## Mitä teet

Tee ja muuta seiniä Seinä-työkalun reseptien avulla. Jokainen niistä päättyy samalla tavalla kuin seinän piirtäminen nurkkapisteittäin: nurkat liittyvät itsestään, liitokset tallentuvat tiedostoon, ja koko muutos on yksi vaihe **Muutokset**-kohdassa, jonka {{ui:Kumoa}} peruu. Seinät säilyttävät identiteettinsä: jaettu, siirretty tai venytetty seinä on yhä sama seinä, ovineen, ikkunoineen ja mittoineen.

## Piirrä suorakulmio, monikulmio tai kaari

Kun {{ui:Piirrä}} on päällä, avaa {{ui:Muodot}} Piirrä-ryhmässä (tai valitse muoto seinärivin **Muoto**-luettelosta). Seinärivillä näkyvät seinätyyppi, piirustusviite, ulkopuoli ja yläreuna, kuten {{ui:Seinä}}-työkalussa. Napsauta sitten tai kirjoita pisteet (x,y · @dx,dy · @pituus<kulma · pituus osoittimen suuntaan):

- **Suorakulmio**: kaksi vastakkaista kulmaa. Neljä seinää, neljä liitettyä nurkkaa, yksi vaihe.
- **Kierretty suorakulmio**: missä ensimmäinen sivu alkaa ja päättyy (se määrää sen kääntymisen ja pituuden), sitten kolmas napsautus toiselle sivulle.
- **Monikulmio**: keskipiste, sitten kulma (**Kirjoitettu**) tai sivun keskikohta (**Ympäri piirretty**). Aseta ensin **Sivuja** (3–64).
- **Kaari, keskipiste**: keskipiste, alku (joka määrää säteen), loppu. **Kiertosuunta**: lyhyempi tapa, vastapäivään tai myötäpäivään. Kolme neljännestä ympyrästä yli kulkeva kaari piirretään kahtena seinänä.
- **Tangenttikaari**: napsauta seinän päätä ja sitten kohtaa, johon kaari päättyy. Kaari lähtee seinän päästä seinän omaan suuntaan.

Suljettu muoto saa ulkopuolensa ulospäin. Kun piirrät **Ulkopinta** tai **Sisäpinta** -tilassa, napsauttamasi pinta on se, joka pysyy paikallaan.

## Seinät jo olemassa oleviin viivoihin

- **Valitse viivat**: napsauta viivaa, ja seinä menee sen päälle. Paina {{key:Tab}} (tai pidä {{key:Shift}} painettuna napsauttaessasi), jolloin koko päästä päähän liittyvä viivaketju otetaan mukaan. Viivat ovat tämän näkymän piirtoviivoja, jäljitysviite ja akselilinjat.
- **Jäljitä ääriviiva**: napsauta alueen sisältä, jonka rajaavat nämä viivat tai seinät. Seinät kiertävät napsautuksen ympärillä olevan pienimmän alueen.

## Aseta ennen piirtämistä: siirtymä ja liitos

Seinärivillä on kaksi lisäkenttää, joita käyttävät {{ui:Seinä}}-työkalu ja muodot:

- **Siirtymä**: seinät piirretään tämän verran napsauttamastasi viivasta: + sen vasemmalle puolelle, − oikealle, nähtynä piirtämissuunnasta.
- **Liitos**: poista rasti, jos haluat piirtää vapaasti seisovia seiniä. Niiden päät saavat **Estä liitos** -tilan ja pysyvät vapaina minne tahansa ne menevätkin (katso [Muuta seinää](topic:change-a-wall-or-door)).

## Jako, osan poisto, liittäminen

Avaa {{ui:Seinät}} Muokkaa-ryhmässä.

- **Jaa** ({{ui:Jaa}}): napsauta seinää kohdasta, josta se pitäisi leikata, tai kirjoita etäisyys sen alusta. Lähellä seinää, joka risteää siinä, leikkaus tarttuu kohtaan, jossa ne kohtaavat. Kaksi osaa ovat samaa tyyppiä ja pysyvät liitettyinä päästä päähän. **Aukko** jättää leikkauksen keskelle tuon mittaisen välin. **Vapaat päät** antaa leikkauksen päille sen sijaan Estä liitos -tilan (Asetukset › BimCraft › Seinät › **Kun seinä jaetaan** määrää, mikä on valittuna aluksi). Ovi tai ikkuna kulkee osan mukana, jossa se on; sen läpi tehty leikkaus evätään.
- **Poista osuus** ({{ui:Poista osuus}}): napsauta kohtaa, josta osa alkaa, ja kohtaa, jossa se päättyy. Osassa oleva ovi lähtee sen mukana.
- **Yhdistä uudelleen** ({{ui:Yhdistä uudelleen}}): napsauta yhden seinän kahta osaa (samalla viivalla, samaa tyyppiä). Ne muuttuvat jälleen yhdeksi seinäksi, ensimmäisen napsauttamasi nimellä, molempien osien ovineen.

## Liitostyyli, Estä liitos, tason tärkeysjärjestys

Avaa {{ui:Seinät}} Muokkaa-ryhmässä.

- **Liitostyyli**: napsauta nurkkaa, jossa kaksi suoraa seinää päättyy. Jokainen napsautus siirtyy seuraavaan tyyliin: **Viistoliitos** (molemmat päät leikataan sisäkulmasta ulkokulmaan kulkevalle viivalle; jokainen nurkka alkaa näin), **Päittäisliitos** (yksi seinä kulkee läpi toisen ulkopintaan asti, joka pysähtyy sen sivuun) ja **Suorista pää** (kuten päittäisliitos, ja läpi kulkeva seinä päättyy suoraan; suorassa kulmassa se näyttää päittäisliitokselta). **Seuraava** tai {{key:Tab}} tekee toisesta seinästä sen, joka kulkee läpi. Palkin **Tyyli**-luettelo näyttää viimeksi napsauttamasi nurkan. Samat kaksi valintaa ovat yhden seinän **Ominaisuudet**-kohdassa: **Liitostyyli alussa / lopussa** ja **Kulkee läpi**. Jokainen muutos on yksi vaihe **Muutokset**-kohdassa. Pohjapiirros, 3D-kappale, huoneet ja määrät seuraavat.
- T-liitoksessa seinä, jonka sivuun toinen osuu, kulkee aina läpi. Kun kaksi seinää risteää, napsautus (tai **Jatkuva risteyksessä** Ominaisuudet-kohdassa) kertoo, kumpi on jatkuva; se määrää, minkä seinän tasot piirretään risteyksen läpi.
- Tyyli kuuluu liitokseen: se pysyy, kun seinät siirtyvät, ja katoaa vain liitoksen mukana (seinä poistetaan, jaetaan tuosta päästä tai päähän asetetaan Estä liitos). Kaari-seinän kanssa tai kun kolme tai useampi seinä kohtaa, nurkka pysyy viistoliitoksena. Liian terävä kulma (alle noin 30 astetta) tai liian loiva (yli noin 150 astetta) palautuu myös viistoliitokseksi.
- **Estä liitos**: napsauta lähellä seinän päätä. Tuo pää vapautuu: se ei liity mihinkään, minne seinä tahansa menee, kunnes napsautat sitä uudelleen. Vapaat päät on merkitty rastilla, kun työkalu on päällä. Sama kytkin on Ominaisuudet-kohdassa nimellä **Liitos alussa / Liitos lopussa**.
- **Tason tärkeysjärjestys**: kun tasolliset seinät kohtaavat, vahvempi taso katkaisee heikomman, joten ytimet liittyvät ytimiin ja pintakerros pysähtyy vahvemman tason viereen. Jokaisella tasolla on prioriteetti 0–999; oletuksena se tulee tason tehtävästä (rakenne 800, alusta 600, eristys 400, kalvo 300, pintakerros 200, ilmarako 100). {{ui:Tason tärkeysjärjestys}} avaa seinärakenteen, jossa **Prioriteetti**-sarake asettaa tason oman numeron. Saman prioriteetin tasot pysähtyvät toisiinsa, ja viiva piirretään vain eri materiaalien välille. Näet sen pohjapiirroksissa **Keskitason** tai **Tarkan** yksityiskohtatason ollessa päällä, nurkissa, T-liitoksissa ja kahden suoran seinän risteyksissä; Asetukset › BimCraft › Seinät › **Siisti seinätasot, kun seinät kohtaavat** kytkee sen pois. Se muuttaa vain seinien sisällä piirrettäviä viivoja: seinien ääriviivat ja määrät pysyvät liitostyylin antamina.

## Vaihda monen seinän tyyppi

Luonnospohjapiirroksista työpiirustuksiin siirtyminen on enimmäkseen tyypin vaihtamista: yleinen seinä muuttuu tarkaksi rakenteeksi. Mitään ei piirretä uudelleen.

1. Valitse seinät (yksi tai useita {{key:Ctrl}}- tai {{key:Shift}}-näppäimellä).
2. Paina Ominaisuudet-kohdassa Seinätyypin alla **Vaihda tyyppi…** (tai avaa {{ui:Seinät}} Muokkaa-ryhmässä ja valitse {{ui:Vaihda tyyppi}}, joka avaa saman luettelon). Luettelo avautuu Ominaisuudet-kohdan sisään, valittujen seinien omaan lohkoon. Se ei ole valintaikkuna eikä peitä mitään: pohjapiirros, 3D-näkymä ja valinta toimivat yhä, kun se on auki, ja se seuraa valitsemiasi seiniä.
3. Luettelo näyttää jokaisen seinätyypin paksuuden ja LOD-merkinnän, esimerkiksi ”Seinä 230 yleinen, LOD 200” ja ”230 savitiili, rapattu molemmilta puolilta, LOD 300”. Valittujen seinien nykyiset tyypit on merkitty. Kirjoita kohtaan **Etsi** kaventaaksesi: nimi, paksuus tai `lod 300`.
4. Napsauta tyyppiä. Jokainen valittu seinä muuttuu siihen yhdessä vaiheessa, joten yksi {{ui:Kumoa}} peruu koko vaihdon. Pieni x sulkee luettelon.

Jokainen seinä säilyttää sijaintiviivansa. Keskiviivallinen seinä kasvaa molempiin suuntiin; seinä, jonka sijaintiviiva on pinta, säilyttää sen pinnan ja kasvaa toiseen suuntaan, ja siihen liittyvät seinät seuraavat nurkissa. Seinään lukitut seinät seuraavat sitä myös. Ovet ja ikkunat pysyvät seinissään ja leikataan uudelleen uudelle paksuudelle.

Vaihdon jälkeen luettelo näyttää **Mitä siirtyi**: kuinka monta seinää muuttui ja mihin, paksuus ja LOD ennen ja jälkeen, seinät, jotka siirtyivät sivuttain sijaintiviivansa säilyttämiseksi, liitetyt seinät, jotka seurasivat, ovet ja ikkunat, jotka sijoitettiin uudelleen, ja jokainen huone, jonka pinta-ala muuttui, ennen ja jälkeen. Tilarivi kertoo saman yhdellä rivillä. Raportti vain kertoo; se ei koskaan pysäytä vaihtoa. Ominaisuudet › Seinätyyppi -kohdan valinta tekee saman vaihdon ja antaa saman raportin.

Kaksi asiaa pysäyttää vaihdon, jolloin mitään ei muuteta: ovi tai ikkuna, joka ei enää mahtuisi seinään (seinä lyhenee, kun nurkka seuraa; tee ovesta kapeampi tai siirrä sitä nurkasta poispäin ensin), ja lukko, jonka vaihto rikkoisi (seinä, joka on lukittu akselilinjaan keskiviivallaan, kun sen sijaintiviiva on pinta; poista lukitus tai aseta sijaintiviiva takaisin keskiviivalle).

BimCraftiin liitetty avustaja voi tehdä saman vaihdon (työkalut `wall_types_list` ja `walls_swap_type`) ja saa saman raportin takaisin.

Tyypin LOD-merkinnän asettaa seinärakenteen muokkain: katso [Seinärakenteet](topic:wall-assemblies).

## Siirtymä ja laatikkovenytys

- **Siirtymä**: napsauta seinää ja sitten puolta, jolle se siirretään, tai kirjoita etäisyys. Seinä siirtyy kohtisuoraan itseään vasten ja siihen liitetyt seinät venyvät. Valitse **Kopioi**, jolloin saat yhdensuuntaisen kopion (se ei ole liitettynä alkuperäiseen).
- **Laatikkovenytys**: napsauta laatikon kahta kulmaa, sitten pistettä, josta siirretään, ja pistettä, johon siirretään. Jokainen laatikon sisällä oleva seinän pää siirtyy; kokonaan sisällä oleva seinä siirtyy ja siihen törmäävät seinät tulevat mukaan; laatikon ylittävät seinät venyvät.

## Muokkaa mittaa ja lukitse se

Valitse viitemitta (Merkitse › {{ui:Viitemitta}}) ja kirjoita sen arvo **Ominaisuudet**-kohtaan: toisen viitteensä seinä siirtyy kohtisuoraan itseään vasten, ensimmäinen viite pysyy ja liitetyt seinät seuraavat. Valitse **Lukitse tämä mitta** pitääksesi arvon: kun jompikumpi seinä siirtyy myöhemmin, toinen seuraa. Lukittua arvoa ei voi kirjoittaa päälle, ennen kuin poistat rastin.

## Kohdista ja lukitse

**Kohdista ja lukitse**: napsauta seinän pintaa (tai keskiviivaa, lähellä seinän keskikohtaa) tai akselilinjaa, ja sitten seinän pintaa, joka tuodaan linjalle. Seinä siirtyy kohtisuoraan siihen. Valitse ensin **Lukitse**, jolloin ne pysyvät kohdistettuina: pohjapiirrokseen tulee riippulukko, ja kun toinen seinä siirtyy, toinen seuraa. Seinän Ominaisuudet luettelee sen **Lukot**, jokaisen **Avaa lukitus** -painikkeella.

## Lukitse seinät akselilinjoihin

Valitse seinä, joka kulkee akselilinjaa pitkin tai jonka pää on sen päällä, ja valitse akselilinja Ominaisuudet › **Lukitse ruudukkoon**. Valitse sitten akselilinja {{ui:Akselisto}}-työkalulla ja kirjoita etäisyys kohtaan {{ui:Siirrä}}: viiva siirtyy kohtisuoraan itseään vasten, ja siihen lukitut seinät seuraavat liitettyine seinineen yhdessä vaiheessa. Akselilinjaan lukittua seinää ei voi siirtää siitä pois itsekseen (siirrä viivaa tai avaa seinän lukitus); akselilinjaa, joka on käännetty niin, ettei lukittu seinä pysy siinä kohtisuorassa, ei hyväksytä. Akselilinjan uudelleen nimeäminen säilyttää lukituksen; sen poistaminen poistaa lukituksen.

## Pituus: mikä puoli pysyy ja mitä mitataan

- **Kasvata alkaen** (yhden seinän Ominaisuudet): **Alku pysyy** (loppu siirtyy), **Loppu pysyy** (alku siirtyy) tai **Keskikohta pysyy** (molemmat päät siirtyvät puolet). Kun kirjoitat pituuden, pohjapiirros merkitsee pisteen, joka pysyy. Päähän liitetty seinä, joka siirtyy, siirtyy kohtisuoraan itseään vasten ja säilyttää kulmansa.
- **Mittaa alkaen** (pohjapiirroksen mittojen vieressä, Ominaisuudet-kohdassa ja Asetukset › BimCraft › Seinät): keskiviiva, sisäpinta tai ulkopinta. Pituuskenttä ja pohjapiirroksen seinämitat lukevat saman, joten ne täsmäävät. Se alkaa keskiviivalta.
- Jos haluat siirtää seinää irti sen liitoksista (liitokset katkeavat, seinä säilyttää identiteettinsä), pidä {{key:Alt}} painettuna, kun vedät sen keskiotetta.

## Hyvä tietää

- Nämä reseptit ovat seinätyökalun määrittelyn (sivut 4–9) mukaisia. Liitostyyli ja tason tärkeysjärjestys on tehty suorille seinille; tason tärkeysjärjestys näkyy vain pohjapiirroksessa (ei leikkauksissa, julkisivuissa eikä 3D:ssä, joissa seinä on yksi kappale), ei kolmen tai useamman seinän solmuissa, eikä kalvoja huomioida.
- Liitoksen tyyli tallennetaan sen tietueeseen IFC-tiedostossa (`IfcRelConnectsPathElements`-suhteen nimi, esimerkiksi `CadCraft join L butt 1`), joten muut ohjelmat lukevat liitoksen yhä ja vanhempi tiedosto avautuu viistoliitoksilla.
- Lukot ja liitokset tallennetaan IFC-tiedostoon (lukot projektin `CadCraft_WallHolds`-ominaisuutena, liitokset `IfcRelConnectsPathElements`-suhteina), joten ne ovat paikallaan, kun avaat tiedoston uudelleen.
- Kaarevat seinät voi jakaa, liittää uudelleen ja poistaa niistä osan; niitä ei siirretä tai lukita.
- Katso myös [Piirrä seiniä](topic:draw-walls), [Muuta seinää, ovea tai ikkunaa](topic:change-a-wall-or-door) ja [Seinän muoto](topic:wall-shape).
