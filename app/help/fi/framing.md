---
title: Seinien, lattioiden ja kattojen runko
summary: Luo mallista pystyrimat, pohjapuut, yläpuut, ylityspalkit, lattiapalkit, parret tai ristikot ja säilytä ne mallin mukana. Ne tehdään uudelleen, kun seinät, aukot, lattiat tai katto muuttuvat, ja Puutavara-taulukko on leikkuulista.
keywords: TJI, I-palkki, palkin jänneväli, palkkitaulukko, lataa taulukko, runko, runkoaminen, pystyrima, rima, pohjapuu, yläpuu, ylityspalkki, kuningasrima, apurima, aukon reunapalkki, kynnys, tukipuu, nurkka, Kalifornian nurkka, T-liitos, lattiapalkki, reunapalkki, nauhapalkki, parsi, harjaparsi, laakson parsi, apuparsi, harjalauta, alakattopalkki, kurkkupuu, ristikko, puutavara, leikkuulista, board feet, 2x4, 2x6, jako, keskiöväli
from: 76d0ffb5
---

## Mitä teet

Rakenna rakennus piirtämiesi kohteiden mukaan. BimCraft asettelee pystyrimat, pohjapuut ja ylityspalkit seiniin, lattiapalkit lattioihin ja parret (tai ristikot) kattoon. Se mitoittaa ne nimettyjen oletustaulukoiden mukaan, säilyttää ne mallin mukana ja tekee ne uudelleen aina, kun niiden runko muuttuu. **Puutavara**-taulukko on leikkuulista.

## Rakenna

1. Valitse taso, avaa {{ui:Koontiversio}} ja valitse {{ui:Rungotus}}.
2. Valitse **jako** (16 in tai 24 in keskiöväli; 400 tai 600 mm), **kulmat** (kolmen rimaa tai Kalifornian), katoille **Parret** tai **Ristikot**, ja saavatko seinät **tukipuiden** rivin puolivälin korkeudelle. Lattioille valitse **Sahatavara** tai **TJI (alustava)** ja aseta palkkien suunta automaattiseksi, pohjakuvan X:ksi tai Y:ksi.
3. Napsauta **Rakenna kaikki seinät** tai napsauta yhtä seinää, lattiaa tai kattoa (tasolla, jolla katto on), jotta rakennetaan vain se.

Kytke **Näytä runko** pois päältä piilottaaksesi kaikki runkokappaleet kuten tason. **Läpinäkyvä** piilottaa runkoidut seinät, lattiat ja katot, jotta näet vain rungon.

## Mitä saat

- **Seinät**: alapuu (katkaistu ovien kohdalta), kaksinkertainen yläpuu, pystyrimat asettelun mukaan seinän alusta alkaen, kuningas- ja apurimat sekä ylityspalkki jokaisen oven ja ikkunan kohdalla, kiilarimat ylityspalkkien yläpuolella ja ikkunoiden alapuolella, karkea kynnys ikkunoiden alla, nurkat seinien kohdatessa (läpi kulkeva seinä ottaa nurkkarimat), kaksi tukirimaa, kun toinen seinä liittyy T-liitoksella, ja tukipuut rimojen välissä.
- **Lattiat**: oletuksena lattiapalkit lattian lyhyttä sivua pitkin tai valitsemasi pohjakuvan akselin mukaan; reunapalkit lattian reunan ympärillä; kaksinkertaiset tukipalkit ja ylityspalkit portaikon ympärillä. Portaikon läpi kulkevat palkit leikataan lyhyiksi (häntäpalkit). TJI-tila valitsee pienimmän listatun sarjan ja korkeuden, joka saavuttaa mitatun vapaan jänteen valitulla jaolla.
- **Katot**: tavalliset parret, jotka on leikattu suoraan kumpaankin räystääseen, apuparret, joissa aumat ja laaksot leikkaavat ne, aumaparret ja laaksoparret, harjalaudat, alakattopalkit pohjapuiden päällä sekä kurkkupuut, tai yksinkertaiset ristikot jaolla, yksi kappale kerrallaan.

## Muuta sitä

Valitse mikä tahansa runkokappale 3D-näkymästä tai mallipuusta. **Ominaisuudet** näyttää sen rungon: voit muuttaa jakoa, lattiapalkin lajia ja suuntaa, kulmia, tukipuita tai kattorunkoa. Seinien, ovien ja ikkunoiden siirtäminen tai lattian tai katon muuttaminen tekee rungon uudelleen itsestään.

Kappale, jonka asetit tarkoituksella, säilyy runkoa tehtäessä uudelleen: valitse se ja valitse **Säilytä tämä kappale, kun runko tehdään uudelleen**. Säilytetty kappale pysyy paikallaan. Kun sen ympärillä oleva runko muuttuu, se merkitään, jotta voit tarkistaa sen.

## TJI-lattiat ladatusta taulukosta

BimCraft ei sisällä palkkivalmistajan jänneväli­taulukoita, sillä ne ovat valmistajan omia ja muuttuvat jokaisen painoksen mukana. Valitse lattian runko, aseta **Lattiapalkit** arvoon **TJI (alustava)** ja valitse **Ominaisuudet**-kohdassa **Lataa taulukko…**: tiedosto muodossa `cadcraft-tji-table`, JSON tai CSV, joka on tehty valmistajan nykyisistä jänneväli­taulukoista. Se nimeää valmistajan, tuotteen, painoksen ja lähteen, ja listaa jokaiselle kuormitustapaukselle (hyötykuorma, pysyvä kuorma, taipumaraja, tukipituus) suurimman vapaan jänteen kullekin sarjalle ja korkeudelle kullakin jaolla.

- BimCraft ottaa lattian **vapaan jänteen**, valitsee matalimman korkeuden ja sen sisältä sarjan, jonka listattu jänne saavuttaa valitulle jaolle ja kuormitustapaukselle, ja rakentaa lattian sillä. Jos jänne tai jako on taulukon ulkopuolella, se sanoo sen eikä muuta mitään.
- Kuormat, taipumaraja, tukipituus, taulukko ja lause ”Alustava asettelun ohje; lopullinen valinta vaatii valmistajan taulukot ja hankkeen kuormat” tulostetaan **Puutavara**-taulukkoon, kirjoitetaan malliin rungon mukana ja listataan **Ongelmat**-paneelissa huomautuksena. Esimerkkitaulukko merkitään varoituksella.
- Kun **Rakennusmääräykset**-lisäosa on päällä, sen lattiapalkkisääntö lukee myös ladatun taulukon. Ilman taulukkoa TJI-palkit jätetään sen tarkistuksen ulkopuolelle, kuten ennenkin.
- Taulukko pysyy tässä selaimessa, kunnes tyhjennät sen tai lataat toisen. Tiedosto: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: in, ft, psf; tai `metric`: mm, m, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) ja `rows` (`series`, `depth`, `spans`: kullekin tapaus-id:lle jako ja suurin vapaa jänne, esimerkiksi `"16": "15-6"`). CSV:ssä samat tiedot ovat `# key = value` -riveinä, ja sen jälkeen `series,depth,case,spacing,span`.
- Kun taulukkoa ei ole ladattu, TJI-asettelu hylätään eikä mikään muutu: **Lataa TJI-taulukko: valmistajan taulukot ovat heidän omiaan, eikä niitä ole sisäänrakennettu.** Malli, joka on rungoitu vanhalla sisäänrakennetulla TJI-taulukolla (ennen tätä muutosta), säilyttää kaikki palkkinsa. Ominaisuudet ja Ongelmat kertovat, että taulukko tarvitaan, ja lattian voi rakentaa uudelleen, kun taulukko on ladattu. Sahatavarapalkit toimivat kuten ennenkin.

Tämä on asettelun ohjetta. Lopullinen palkkien valinta vaatii valmistajan taulukot, hankkeen kuormat ja insinöörin.

## Leikkuulista

Taulukot-paneelissa valitse **Puutavara**: jokainen runkokappale ryhmiteltynä koon ja ostettavan varastopituuden mukaan (kokonaiset 2 ft:n pituudet alkaen 8 ft:stä; 600 mm:n askeleet alkaen 2400 mm:stä, jos mitat ovat millimetreissä), kappalemäärä ja board feet. **CSV** lataa sen.

:::warning
Ylityspalkkien, palkkien, parsien ja alakattopalkkien koot tulevat nimetyistä oletustaulukoista tyypilliselle yksi- tai kaksikerroksiselle talolle, eivät laskelmista. **Ominaisuudet** kertoo, kun jänne tai aukko ylittää taulukon. Suunnittelija tai insinööri tarkistaa jänteet, kuormat ja liitokset.

TJI-asettelut käyttävät vain ladattua taulukkoa, joka on tehty valmistajan nykyisistä jänneväli­taulukoista. BimCraft ei toimita yhtään. Ehdotus ei tarkista tukipituuksia, pistekuormia, ulokkeita, reikiä, portaikon ylityspalkkeja eikä liitoksia, ja mallin I-muoto on kaaviomainen.
:::

## Mitä tallennetaan

Jokainen runkoitu seinä, lattia tai katto on IFC-elementtikokoonpano (”Rungotus”), joka koostuu IFC-sauvoista (pystyrimat, pohjapuut, parret, kurkkupuut, tukipuut, ristikot) ja palkeista (ylityspalkit, lattiapalkit, reunapalkit, harjalaudat). Kullakin on koko, pituus ja board feet.
