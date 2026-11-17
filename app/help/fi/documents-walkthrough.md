---
title: "Asiakirjat ja revisiot (holvi)"
summary: "Vaihe vaiheelta yhden oikean työn läpi: aseta IFC-mallien projektikansio hallintaan, kuittaa malli ulos, muuta sitä, kuittaa se sisään muistiinpanon kanssa, lähetä tarkastettavaksi, hyväksy ja julkaise, katso historia ja käyttäjät, mitä toinen henkilö näkee tiedoston ollessa lukittuna ja miten se toimii pilvikansioiden kanssa."
keywords: holvi, asiakirjat, läpikäynti, opas, uloskuittaus, sisäänkuittaus, revisio, julkaisu, hyväksyminen, lukitus, historia, missä käytetään, ifc, malli, pilvikansio, projektikansio, kaksi ihmistä, jaettu kansio
from: 0a753f25
---

## Mitä teet

Olet Ana, ja työskentelet Riverside clinic -projektissa kollegasi Benin kanssa. Projektin IFC-mallit ovat yhdessä kansiossa, johon te molemmat pääsette (jaettu asema, synkronoitu kansio tai pilvikansio). Lopuksi yksi tiedosto on kulkenut ensimmäisestä kopiostaan julkaistuksi revisioksi **A**, on muutettu uudelleen revisioksi **B.1**, olet nähnyt, kuka teki mitäkin, ja olet nähnyt, mitä Ben näkee, kun pidät tiedostoa.

Kaikki säilytetään piilotetussa kansiossa `.ccvault` tiedostojesi vieressä: ei palvelinta, eikä mitään lähetetä (pilvikansio on poikkeus, katso viimeinen vaihe). Kaikki painikkeet ja säännöt yhdessä paikassa löytyvät aiheesta *Asiakirjat: uloskuittaus, revisiot ja julkaisu*, jos sovelluksesi sen sisältää.

## 1. Määritä projektikansio

1. Valitse aloitusnäytössä {{ui:Avaa kansio}}-painikkeen vierestä {{ui:Asiakirjat}}, tai **Tiedosto**-valikosta {{ui:Asiakirjat…}}.
2. Valitse {{ui:Valitse projektikansio}} ja valitse kansio, jossa projektin IFC-mallit ovat. (Projektikansiot toimivat Studiossa ja selaimissa, jotka voivat avata kansion, kuten Chrome ja Edge. Muissa selaimissa paneeli kertoo siitä.)
3. Valitse **Sinä:**-kohdan vierestä {{ui:Muutos}} ja kirjoita nimesi, `Ana` (jos kysytään, myös tämän tietokoneen nimi). Paneelissa lukee nyt *Sinä: Ana, koneella* ja tietokoneesi nimi. Nimesi kirjataan kaikkeen, mitä teet.
4. Valitse {{ui:Aloita holvi tässä kansiossa}} ja kirjoita projektin nimi, `Riverside clinic`. Paneelissa lukee *Holvi aloitettu: Riverside clinic.*

## 2. Ota tiedosto hallintaan

1. Avaa **Tiedostot holvin ulkopuolella** ja valitse {{ui:Lisää}} tiedoston `models/House.ifc` vierestä.
2. Se ilmestyy kohtaan **Holvin tiedostot** revisiona **A.1**, tilassa **Työn alla**. A.1 on sen ensimmäinen kopio; holvi säilyttää kopion jokaisesta revisiosta.

## 3. Kuittaa ulos, muuta, kuittaa sisään

1. Valitse {{ui:Avoin}} tiedoston `models/House.ifc` vierestä. Malli avautuu BimCraft-sovellukseen ja paneeli sulkeutuu, jotta näet sen. Avaa paneeli uudelleen kohdasta {{ui:Asiakirjat}}.
2. Avaa paneeli uudelleen ja valitse {{ui:Kuittaa ulos}}. Rivillä lukee nyt **Kuitattu ulos sinulle**. Kansioon `.ccvault/locks` on luotu lukitustiedosto; kukaan muu ei voi kuitata tätä tiedostoa ulos, ennen kuin kuittaat sen sisään.
3. Muuta mallia: siirrä seinää, lisää ovi. Tallennus hylätään, ellei malli ole kuitattu ulos sinulle, ja kertoo syyn; Tallenna nimellä toimii aina omalle kopiollesi.
4. Avaa paneeli, valitse {{ui:Kuittaa sisään}} ja kirjoita, mitä muuttui (`Siirsin oven`). Paneeli kertoo *kuitattu sisään versiona A.2*. Projektikansion tiedosto on nyt se malli, jonka avasit, ja lukitus on poistunut. Sisäänkuittaus ilman muutosta säilyttää revision.

Jos muutat mielesi, {{ui:Kumoa uloskuittaus}} palauttaa tiedoston ilman uutta revisiota.

## 4. Tarkastus ja julkaisu

1. Valitse {{ui:Lähetä tarkastettavaksi}}. Tila muuttuu tilaan **Tarkastettavana** ja tiedosto on vain luku -tilassa.
2. Ennen hyväksymistä valitse {{ui:Projektin asetukset}}, luettele, kuka saa hyväksyä (yksi nimi riviä kohti), esimerkiksi `Ben` ja `Carla`, ja rastita sääntö, että hyväksyjän on oltava muu kuin tekijä. Valitse {{ui:Tallenna asetukset}}. Nyt holvi itse estää muut.
3. Ben (tai Carla) valitsee {{ui:Hyväksy}} ja kirjoittaa hyväksyjän nimen. Tila muuttuu tilaan **Julkaistu**, revisio muuttuu revisioksi **A**, ja mukana ovat *hyväksyjä* ja nimi. Julkaistu tiedosto on vain luku -tilassa. {{ui:Lähetä takaisin}} olisi palauttanut sen tilaan Työn alla syyn kanssa.

Hyväksyjän nimi on paneeliin kirjoitettu nimi; se on kirjaus siitä, kuka hyväksyi, ei todiste henkilöllisyydestä.

## 5. Uusi revisio

1. Julkaistulle tiedostolle valitse {{ui:Uusi revisio}}. Pidät sitä seuraavaa kirjainta varten.
2. Muuta sitä ja valitse sitten {{ui:Kuittaa sisään}}. Revisio on **B.1**, työn alla. Julkaise se samalla tavalla, ja siitä tulee **B**. {{ui:Kumoa uloskuittaus}} ennen ensimmäistä sisäänkuittausta jättää sen tasolle **A**.

Revisiokirjaimet kulkevat A, B … Z, AA, AB. Jos standardisi jättää joitakin kirjaimia pois, projektiasetus *Käytä ASME Y14.35 -järjestystä* ohittaa I, O, Q, S, X ja Z seuraavissa revisioissa.

## 6. Katso, mitä tapahtui

Valitse tiedoston nimi avataksesi sen tiedot:

- **{{ui:Historia}}**: jokainen tapahtuma, uusin ensin, kenen, millä tietokoneella ja milloin: *Kuitattu sisään A.2* Anan toimesta, *Julkaistu* Benin toimesta ja niin edelleen.
- **{{ui:Revisiot}}**: revisiotaulukko: jokainen säilytetty revisio päivämääränsä, sisäänkuittajansa, muistiinpanonsa ja hyväksyjänsä kanssa. Holvi säilyttää kopion kustakin kansiossa `.ccvault/revs`.
- **{{ui:Käyttää}}**: asiakirjat, joihin IFC-malli viittaa.
- **{{ui:Käyttäjät}}**: Käyttäjät-luettelo näyttää jokaisen holvin mallin, joka viittaa tähän tiedostoon.

## Mallit, jotka viittaavat muihin asiakirjoihin

IFC-malli, joka viittaa kansion muihin asiakirjoihin (piirustukset, luettelot), näyttää ne kohdassa **Käyttää**, ja jokainen niistä näyttää mallin kohdassa **Käyttäjät**. Kun sisäänkuittaat asiakirjan, näet, mitkä mallit viittaavat siihen.

## 7. Mitä Ben näkee, kun pidät tiedostoa

Kuittaa tiedosto nyt uudelleen ulos ja pyydä Beniä avaamaan sama projektikansio omalla tietokoneellaan ja avaamaan paneeli. Tiedoston rivillä lukee **Kuitattu ulos Anan toimesta** sinun tietokoneeltasi **alkaen** kellonajasta, eikä siinä ole {{ui:Kuittaa ulos}}-painiketta. Jos hän yrittää silti, holvi hylkää: lukitus on tiedosto, jonka järjestelmä ei tee kahdesti, joten kaksi ihmistä ei voi pitää tiedostoa molemmat, edes samassa sekunnissa, kun kansio on levyllä Studiossa. (Selaimessa kansio antaa vain parhaan yrityksen, ja paneeli kertoo siitä kohdassa **Kansio**.)

Jos Ana on poissa ja Ben tarvitsee tiedostoa, {{ui:Pura uloskuittaus}} vapauttaa sen. Hänen on kirjoitettava syy; se menee lokiin sen kanssa, kenen uloskuittaus se oli. Kun projektissa on listattu ylläpitäjät, vain he voivat. Uloskuittaus, joka on vanhempi kuin vanhentumisraja (oletuksena 14 päivää), merkitään *kauan*. Purkamisen jälkeen Anan myöhässä tuleva sisäänkuittaus hylätään, jotta te ette voi kirjoittaa toistenne päälle.

## 8. Pilvikansiot

Pilvikansio on projektikansio, joka säilytetään tiimisi pilvitallennuksessa, joten tiimi ei tarvitse jaettua asemaa. Studiossa, kun olet kirjautunut CadCraft-tiliisi, paneeli näyttää {{ui:Avaa pilvikansio}}-painikkeen {{ui:Valitse projektikansio}}-painikkeen vierestä. Valitse se ja valitse kansio, joka on listattu muodossa työtila / kansio. Työtilan omistaja luo kansion ensin, ja tiimin pilvitallennuksen on oltava otettu käyttöön. Kaikki yllä oleva toimii samalla tavalla; palvelin tekee lukituksen, joka on tiukka henkilöiden välillä. Jos et ole kirjautunut, paneeli pyytää kirjautumaan. Tavallisessa selainvälilehdessä pilvipainiketta ei tarjota; käytä Studiota.

## Kokeile

Tee yllä olevat kahdeksan vaihetta oikean tiedoston kopiolla. Kahden henkilön vaiheisiin tarvitset toisen henkilön tai kaksi ikkunaa kahdella nimellä. Jos kokeilet sitä oikealla jaetulla kansiolla, Yhteisön testaussivulla on tarkistus, joka kysyy juuri tätä, ja se ottaa tulokset vastaan.
