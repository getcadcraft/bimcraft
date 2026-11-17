---
title: Ovet ja ikkunat
summary: Aseta ovia ja ikkunoita piirrettyihin seiniin: osoita seinää, näe aukeamissuunta ja etäisyydet kulmiin, napsauta; seinän aukko leikkaa itsensä.
keywords: ovi, ovet, ikkuna, ikkunat, aukko, aukeamissuunta, saranat, käsi, kääntö, liukuovi, tasku-ovi, autotallin ovi, kaksilehtinen ovi, ranka-ikkuna, liukuikkuna, kiinteä ikkuna, alareuna, yläpalkki, taitto-ovi, komeron ovi, ranskalaiset ovet, navettaovi, sivuvalot, sisäänkäynnin ovi, markiisi-ikkuna, kuvaikkuna, yläikkuna
from: 4d8ac009
---

## Mitä teet

Aseta ovia ja ikkunoita seiniin, jotka olet piirtänyt ([Piirrä seinät](topic:draw-walls)). Osoita seinää, ja ovi tai ikkuna näyttää, mihin se menisi, mihin suuntaan se aukeaa ja kuinka kaukana se on kustakin kulmasta. Napsauta, ja aukko leikkaa itsensä ulos seinästä pohjapiirroksessa ja 3D:ssä.

## Sijoita ovi

1. Kun {{ui:Piirrä}} on päällä, napsauta {{ui:Ovi}} (tai paina {{key:D}}).
2. Valitse tyyppi: **Yksilehtinen ovi**, **Kaksilehtinen ovi**, **Liukuovi**, **Tasku-ovi**, **Autotallin ovi**, **Taittokomeron ovi**, **Ranskalaiset ovet**, **Navettaovi (seinässä)** tai **Sisäänkäynnin ovi sivuvaloilla**. Sen tavallinen koko täyttää kentät **W** ja **H**; valitse toinen sen vieressä olevasta kokoluettelosta tai kirjoita muita, esimerkiksi `2'-8"` tai `800`. Luettelo tarjoaa myös tämän mallin ovien perheitä (katso [Perheet ja niiden koot](topic:families)).
3. Osoita seinää. Oven symboli seuraa osoitinta seinän pituudella, ja etäisyys kummastakin pinnan päästä näkyy pohjapiirroksessa.
4. Ovi aukeaa sille puolelle seinää, jolla osoitin on. Paina {{key:H}} (tai napsauta {{ui:Käännä}}) siirtääksesi saranat toiseen päähän.
5. Napsauta. Ovi sijoitetaan, ja työkalu pysyy päällä seuraavaa varten. Kun osoitat seinän keskikohtaa, ovi keskittyy itse.

Sijoittaaksesi oven tarkalleen tietylle etäisyydelle, osoita seinää lähellä kulmaa, josta mittaat, kirjoita etäisyys (esimerkiksi `2'` tai `600`) ja paina {{key:Enter}}. Etäisyys kulkee seinäpinnan lähemmästä päästä oven reunaan.

## Sijoita ikkuna

1. Napsauta {{ui:Ikkuna}} (tai paina {{key:N}}).
2. Valitse tyyppi: **Kiinteä ikkuna**, **Yksiripustusikkuna**, **Kaksiripustusikkuna**, **Kääntöikkuna**, **Liukuikkuna**, **Markiisi-ikkuna**, **Kuvaikkuna** tai **Yläikkuna**, sekä sen **W**, **H** ja **Alareuna** (ikkunan alareunan korkeus lattiasta).
3. Osoita seinää ja napsauta, tai kirjoita etäisyys ja paina {{key:Enter}} kuten ovissa. Ikkuna istuu seinän ulkopuolella.

## Siirrä, käännä, poista

- Kun {{ui:Valitse}} on päällä, vedä ovea tai ikkunaa pitkin seinää. Vedä toiselle seinälle siirtääksesi sen sinne.
- {{key:Delete}} poistaa valitut ovet ja ikkunat; seinä sulkeutuu.
- Seinän siirto tai poisto siirtää tai poistaa siinä olevat asiat. Kun seinän alku liikkuu omalla suoralla, sen ovet ja ikkunat säilyttävät paikkansa.
- {{ui:Kumoa}} ja {{ui:Tee uudelleen}} vievät jokaisen sijoituksen, siirron ja poiston taaksepäin ja eteenpäin.

## Mitä hylätään

- **Se ei mahdu seinään.** Ovi tai ikkuna on seinää leveämpi, tai se työntyisi sen päästä ulos. Kokeile lyhyempää leveyttä tai pidempää seinää.
- **Se on seinää korkeampi.** Alareuna plus korkeus on seinän yläreunan yläpuolella.

## Mitä tallennetaan

Jokainen ovi tai ikkuna on IFC-ovi tai -ikkuna, jolla on koko, toiminta (esimerkiksi yksilehtinen, vasemmalle aukeava), kokotyyppi (yksi tyyppi kutakin perheensä kokoa kohden), `Pset_DoorCommon` tai `Pset_WindowCommon` ja perusmäärät; se täyttää IFC-aukon seinässään. Seinän nettosivupinta-ala ja tilavuus jättävät aukon pois. Muut BIM-ohjelmat avaavat sen ovena seinässä.

## Hyvä tietää

- Pohjapiirros näyttää ovet 90° auki aukeamissuuntineen, liukuovet kahtena paneelina, tasku-ovet liukumassa seinään, autotallin ovet katkoviivana yläpuolella ja ikkunat karmi- ja lasiviivoineen.
- Leveys on karmin kokonaisleveys; ovilehti on leveys vähennettynä kahden pielen verran.
- Piirrettyjen ovien ja ikkunoiden kopiointi ei ole vielä toteutettu: sijoita toinen.

## Kellarin pelastusikkuna ja kuoppa

Valitse **Kellarin pelastusikkuna kuopalla** ikkunatyyppiluettelosta. Se alkaa 36 × 48 tuuman kääntöikkunana, jonka alareuna on 36 tuumaa lattiasta. Kuoppa on seinän ulkopuolella, ja sen vapaa leveys on vähintään 48 tuumaa, ulkonema 36 tuumaa ja pohja 6 tuumaa alareunan alapuolella. Se näkyy pohjapiirroksessa katkoviivoina ja 3D:ssä kolmena avoimena sivuna. Kuoppa on osa ikkunan IFC-runkoa, joten ikkunan tallennus, siirto, koon muutos tai poisto vie sen mukanaan. Koon muutos säilyttää vähintään 6 tuuman tilan kummankin pielen vieressä.

Nämä ovat mallinnuksen oletuksia, eivät pelastusmääräysten mukaisuustodistus. Tarkista valmistajan todellinen vapaa aukko, paikalliset vaatimukset, maanpinta, salaojitus ja mahdolliset tarvittavat tikkaat erikseen. Kuopan syvyys ja korkeus ovat esiasetettuja mittoja; ne eivät seuraa maastoa.
