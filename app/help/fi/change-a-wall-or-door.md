---
title: Muuta seinää, ovea tai ikkunaa
summary: Napsauta piirrettyä seinää, ovea tai ikkunaa ja muuta sen tyyppiä, kokoa, korkeutta tai paikkaa Ominaisuudet-paneelissa tai vedä sitä pohjapiirroksessa. Jokainen muutos on yksi kumoamisvaihe.
keywords: suorista, neliö, 90, suora kulma, vino, kulma, ortogonaali, huoneen koko, sisäpinta, ulkopinta, mittaa alkaen, siirtymä, kirjoitettu etäisyys, kaareva, kaari, kaaren korkeus, säde, sijaintiviiva, kohdistus, muuta, muokkaa, ominaisuudet, seinätyyppi, paksuus, pituus, korkeus, pohjan siirtymä, yläosa, kerros, käännä, ulkopuoli, oven koko, ikkunan koko, alapuite, etäisyys, siirrä, ote, vedä, vaihda tyyppi, useita
from: 63052d5d
---

## Mitä teet

Muutat piirtämääsi: valitse seinä, ovi tai ikkuna ja kirjoita uusi luku **Ominaisuudet**-paneeliin tai vedä se pohjapiirroksessa. Pohjapiirros ja 3D-näkymä seuraavat, kulmat liittyvät uudelleen, ja ovet ja ikkunat pysyvät seinissään.

## Seinän muuttaminen

1. Kun {{ui:Piirrä}} ja {{ui:Valitse}} ovat päällä, napsauta seinää pohjapiirroksessa (tai 3D-näkymässä).
2. **Ominaisuudet** näyttää ruudun seinän luvuilla. Muuta yhtä ja paina {{key:Enter}}:
   - **Seinätyyppi**: toinen aloitustyypeistä. Paksuus ja kerrokset muuttuvat sen mukana.
   - **Paksuus**: mikä tahansa paksuus. Tyyppi säilyttää muut kerroksensa, ja sen pääkerros (runkotolppa tai lohko) ottaa eron, esimerkiksi "Ulkoseinä 2×6, 200 mm".
   - **Mittaa alkaen**: **Keskilinja**, **Sisäpinta** tai **Ulkopinta**. **Pituus** ja **Huoneen koko** luetaan ja asetetaan siitä. Ulkopinta on se, mitä pohjapiirroksen mitat näyttävät.
   - **Pituus**: seinän pää siirtyy sen linjalla. Siihen liittyvä seinä siirtyy kohtisuoraan itseensä nähden ja säilyttää kulmansa.
   - **Huoneen koko** (kun huoneen poikki on yhdensuuntainen seinä): kirjoita haluamasi koko. Tämä seinä siirtyy kohtisuoraan, ja liittyneet seinät venyvät sen mukana.
   - **Siirrä kohtisuoraan**: kirjoita, kuinka kauas seinä siirretään kohtisuoraan itseensä nähden: tavallinen luku siirtää sen ulos, miinusluku sisään.
   - **Kulma liitettyyn seinään**: kulma seinään, joka on liitetty sen alkuun. Kirjoita 90 asettaaksesi sen suoraan. Seinä, johon ei ole liitetty mitään, näyttää **Suunnan**, asteina idästä.
   - {{ui:Suorista}}: kääntää tähän liitetyt seinät takaisin suoriin kulmiin sen suunnan mukaan, johon suurin osa niiden pituudesta on. Se toimii koko yhtenäisellä huoneella tai asettelulla, mistä tahansa seinästä valitsetkin. Seinä, joka on yli 10 astetta poikkeava suorasta kulmasta, jää ennalleen, joten 45 asteeseen asetettu on turvallinen. Yksi {{ui:Kumoa}} palauttaa kaiken.
   - **Seinän korkeus**: **Ylempään kerrokseen asti** seuraa sitä kerrosta. **Tasoon 3 asti** (ja mitä tahansa ylempää tasoa) tekee seinän, joka kulkee välissä olevien tasojen läpi; korkeuden kirjoittaminen asettaa, kuinka paljon yläreuna on sen tason alapuolella tai yläpuolella. **Kiinteä korkeus** säilyttää kirjoittamasi luvun. **Kulkee läpi** luettelee tasot, joita tällainen seinä kulkee: se piirretään niissä vaaleampana, huoneet siinä sulkeutuvat sitä vasten, ja ovia ja ikkunoita voi sijoittaa siihen näiden tasojen pohjapiirroksista. Sitä siirretään ja muokataan sillä tasolla, jolta se alkaa.
   - **Pohjan siirtymä**: kuinka korkealle tasosta seinä alkaa. Sen yläreuna pysyy paikallaan.
   - **Ulkopuoli**: {{ui:Käännä}} asettaa ulkokerrokset toiselle pinnalle.
   - **Sijaintiviiva**: **Keskilinja**, **Ulkopinta**, **Sisäpinta**, **Vasen pinta** tai **Oikea pinta**. Sen muuttaminen ei siirrä mitään. Myöhemmin, kun seinä paksunee (tyypin tai **Paksuuden** mukaan) tai sen ulkopuoli käännetään, sijaintiviiva pysyy paikallaan ja seinä kasvaa tai kääntyy sen ympärille. Suora seinä, joka kohtaa sen kulmassa, seuraa, joten kulma pysyy suljettuna. Valitun seinän sijaintiviiva piirretään pohjapiirroksessa katkoviivana. Valitse useita seiniä asettaaksesi sen kaikille.
   - **Kaaren korkeus** (kaarevat seinät): kuinka paljon keskikohta taipuu suorasta viivasta. 0 tekee siitä suoran; negatiivinen arvo taivuttaa toiselle puolelle. Säde näkyy sen vieressä.
3. Jokainen muutos on yksi vaihe **Muutokset**-listassa; {{ui:Kumoa}} palauttaa sen.

## Seinän vetäminen pohjapiirroksessa

Kun yksi seinä on valittu, siinä näkyy kolme otetta: neliö kummassakin päässä ja ympyrä keskellä.

- Vedä päätä pidemmäksi, lyhyemmäksi tai kääntääksesi seinää. Se tarttuu kuten Seinä-työkalu, ja tarttuu kohtisuoraan toiseen päähänsä liitettyyn seinään, kun olet 3 asteen sisällä. {{key:Shift}} pitää sen pohjapiirroksen akseleilla.
- Vedettävässä päässä liitettyjen seinien kulmat säilyvät: niiden päät liukuvat omilla linjoillaan kohtaamaan seinän uuden linjan, joten mikään ei jää vinoon. Pidä {{key:Mod}} pohjassa vapaata vetoa varten (liitetyn seinän pää tulee mukanasi ja se seinä kääntyy), tai {{key:Alt}} katkaistaksesi liitokset tähän seinään.
- Vedä keskikohtaa siirtääksesi koko seinän kohtisuoraan itseensä nähden, mihin suuntaan tahansa vedät. Sen kulmat liukuvat liitettyjä seiniä pitkin, joten nämä seinät säilyttävät kulmansa.
- Pidä {{key:Mod}} pohjassa keskikohtaa vedettäessä vapaata siirtoa varten, kun haluat katkaista kulman. {{ui:Suorista}} palauttaa sen.
- Kun ote on pidettynä, kirjoita etäisyys ja paina {{key:Enter}} (tai päästä irti): seinä menee tarkalleen niin pitkälle, tavalla, jolla vedit. {{key:Esc}} peruuttaa siirron.
- Valittu kaareva seinä näyttää otteet päissään ja pyöreän otteen kaaren keskellä. Vedä pyöreää otetta taivuttaaksesi sitä.
- Ovet ja ikkunat pysyvät seinässä. Liian lyhyt seinä niiden pitämiseen hylätään viestillä "Se ei mahdu tuohon seinään."

## Oven tai ikkunan muuttaminen

1. Napsauta ovea tai ikkunaa pohjapiirroksessa.
2. **Ominaisuudet**-paneelissa: **Tyyppi** (toinen saman lajin ovi tai ikkuna), **Leveys**, **Korkeus**, **Alapuite** (ikkunat), **Alusta alkaen** ja **Lopusta** (etäisyys kummastakin seinäpinnan päästä sen reunaan), **Saranat** {{ui:Käännä}} (yksilehtiset ovet ja sakkikarmiikkunat; liukuovissa, taskuovissa, ladonovissa ja taitto-ovissa lukee sen sijaan **Aukeaa**; kiinteissä, riipuvissa ja kuvaikkunoissa sekä kaksoisovissa sitä ei ole), ja **Kääntyy** (ovet) tai **Karmin puoli** (ikkunat) {{ui:Käännä}}.
3. Tai vedä sitä pitkin seinää tai toiselle seinälle: katso [Ovet ja ikkunat](topic:doors-and-windows).

## Useiden muuttaminen kerralla

Valitse useita seiniä (tai useita ovia tai ikkunoita) {{key:Shift}}+napsautuksella tai {{key:Mod}}+napsautuksella. **Ominaisuudet** tarjoaa, mitä ne jakavat: **Vaihda tyyppi…**, korkeus ja koko. Yksi muutos asettaa ne kaikki, ja yksi {{ui:Kumoa}} palauttaa kaiken.

## Hyvä tietää

- Luvut näkyvät työkalurivin valitsemassa {{ui:Yksiköt}}-yksikössä.
- Muista ohjelmista tulevat seinät, ovet ja ikkunat näyttävät IFC-tietonsa **Ominaisuudet**-paneelissa kuten ennenkin, ilman tätä ruutua.
