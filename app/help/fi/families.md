---
title: Perheet ja niiden koot
summary: Ovet, ikkunat ja kalusteet tulevat perheinä. Perheen jokainen koko on yksi tyyppi IFC-tiedostossa, joten tyyppiluettelo pysyy BimCraft-ohjelmassa lyhyenä, kun muut ohjelmat lukevat tavallisia tyyppejä.
keywords: perhe, perheet, tyyppi, tyypit, koko, koot, ovityyppi, ikkunatyyppi, kaluste, pöytä, hylly, kaappi, uusi koko, monista, sijoita perhe, perhetiedosto, ccfamily, ifc-kirjasto, projektikirjasto, ryhmä, näkyvyys, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Mikä perhe on

Perhe on yhdenlainen asia useassa koossa: yksi kääntyvä ovi, joka on 32, 36 ja 42 tuumaa leveä, tai pöytä, joka tulee pitkänä ja lyhyenä. BimCraft-ohjelmassa perhe näkyy kerran, ja sen koot ovat sen alla. Pitkää tyyppilistaa ei tarvitse selata.

IFC:ssä ei ole perheitä. Tiedostossa jokainen koko on tavallinen tyyppi (ovityyppi, ikkunatyyppi, kalustetyyppi ja niin edelleen), ja perhe on ryhmä, joka listaa sen koot. Muut BIM-ohjelmat lukevat tyypit ja ryhmän sellaisinaan. BimCraft lukee perheen takaisin niistä.

## Mistä ne löytyvät

- Projektiselaimen **Perheet**-ryhmä listaa tämän mallin perheet, kunkin koot ja sijoitettujen määrän. Niiden alla ovat **Lähtöperheet**: Ovi- ja Ikkuna-työkalujen ovet ja ikkunat sekä pöytä, hyllykkö ja alakaappi.
- {{ui:Build}} › {{ui:Families…}} näyttää saman luettelon ikkunassa.
- Napsauta perhettä avataksesi sen. Näet sen koot, kunkin koon arvot ja kuinka monta elementtiä kukin koko käyttää.

## Ovet ja ikkunat

Ovi- ja Ikkuna-työkalut listaavat kyseisen lajin perheet, ja niiden vieressä on **kokoluettelo**. Valitse koko, tai kirjoita **W** ja **H**. Leveys ja korkeus, jota mikään koko ei vielä vastaa, luo perheelle uuden koon, kun sijoitat oven. Saman kokoiset ovet jakavat yhden tyypin.

{{ui:Properties}}-kohdassa valitun oven tai ikkunan **Perhe** ja **Koko** näkyvät. Valitse toinen koko luettelosta, tai kirjoita uusi leveys tai korkeus. {{ui:Open the family}} avaa perheen, johon ovi tai ikkuna kuuluu.

Jokaisen oven tai ikkunan karmi seuraa oman seinänsä paksuutta, kuten ennen perheitä. Koon tyyppi säilyttää myös oven piirtämisen 140 mm seinään niille ohjelmille, jotka lukevat tyyppejä.

## Uusi koko tästä perheestä

1. Avaa perhe.
2. Kohdassa **Uusi koko tästä perheestä** kirjoita sen arvot (Leveys, Korkeus ja perheen muut parametrit) ja halutessasi nimi. Ilman nimeä koko nimetään arvojensa mukaan.
3. Napsauta {{ui:Make the size}}.

Kahdella koolla ei voi olla samoja arvoja. **Nimeä uudelleen** muuttaa koon nimen. **Poista** poistaa koon, jota kukaan ei käytä. **Valitse** valitsee sen kokoisten elementtien.

## Sijoita kalusteita

1. {{ui:Build}} › {{ui:Place family}}, tai {{ui:Place}} perheen ikkunassa.
2. Valitse palkista perhe ja sen koko.
3. Napsauta pohjakuvaa sijoittaaksesi kalusteen kerrokselle. Paina {{key:R}} kääntääksesi sitä 90° ennen napsautusta. {{key:Esc}} lopettaa.

Sijoitetun kalusteen {{ui:Properties}} näyttävät sen koon, paikan ja kääntökulman. {{key:Delete}} poistaa kalusteen. Jokainen saman kokoinen kalustekappale jakaa koon muodon, joten perheen muuttaminen muuttaa niitä kaikkia.

## Koot taulukosta

{{ui:Sizes from a table…}} perheen ikkunassa lukee CSV-tiedoston (pilkku, puolipiste tai sarkain). Ensimmäinen rivi nimeää sarakkeet: parametrin nimi tai otsikko ja valinnaisesti `Name`. Pituudet ovat millimetrejä, ellei kirjoita yksikköä (`1.2 m`, `36 in`). Kyllä / Ei -sarakkeet hyväksyvät arvot yes, no, true, false, 1 tai 0. Parametri ilman saraketta säilyttää oletusarvonsa. Jokainen rivi tulee kooksi yhtenä kumottavana vaiheena. Jo olemassa oleva koko ohitetaan. Yksi rivi, jota ei voi lukea tai jota perhe ei voi piirtää, hylkää koko taulukon ja nimeää rivinsä. Enintään 200 riviä ja 1 MB. {{ui:Save the sizes as a table}} kirjoittaa saman taulukon takaisin.

## Asetus elementtikohtaisesti

Parametri, joka on merkitty editorissa **Elementtikohtainen** (kyllä/ei-arvo, joka lisää poikkipuun, tarran tai materiaalin), ei kuulu kokoon. Kaksi saman kokoista ovea voi siis erota toisistaan. Valitse elementti, ja **Ominaisuudet** näyttää nämä parametrit. Kun muutat yhtä, elementti piirretään uudelleen omana muotonaan: kalusteet ja varusteet saavat oman muodon, ja ovet ja ikkunat tehdään uudelleen seinissään. Kun palautat kaikki oletusarvoihin, elementti palaa kokonsa muotoon.

## Yksityiskohtaisuus

{{ui:Build}} › {{ui:Families…}} › **Yksityiskohtaisuus** asettaa kaikille mallin perheille, mitä tallennetaan kappaleisiin ja piirretään pohjakuvasymboleihin. **Hieno** säilyttää kaiken. **Keskitaso** ja **Karkea** jättävät pois osat, jotka editori merkitsee hienommiksi, jolloin tiedostot ovat pienempiä ja näkymät nopeampia. **Automaattinen** tallentaa kaiken ja antaa arkin näkymän valita tason mittakaavan mukaan: 1:50 ja suuremmat hienolla tasolla, 1:100 keskitasolla ja 1:200 ja pienemmät karkealla tasolla. Tämä on yksi kumottava vaihe.

## Monista perhe

Tyhjästä ei tarvitse aloittaa. {{ui:Duplicate}} kopioi perheen parametreineen, kappaleineen ja kokoineen uudella nimellä. Muokkaa kopiota editorissa. Alkuperäinen pysyy ennallaan.

## Perhetiedostot

- {{ui:Save the family file}} tallentaa `.ccfamily.json`-tiedoston, jossa ovat perheen parametrit, kappaleet ja koot. Avaa se toisessa mallissa kohdasta {{ui:Open a family file…}} Perheet-ryhmässä.
- {{ui:Save as IFC}} tallentaa perheen pienenä IFC-tiedostona: sen kokojen tyypit ja ryhmän, jotka on määritelty IFC-projektikirjastolla. Muut ohjelmat avaavat sen tyyppijoukkona, ja BimCraft avaa sen takaisin perheenä.

Täällä avattu perhetiedosto luetaan datana ja tarkistetaan ennen kuin mitään kirjoitetaan. Perhe, jonka avain on jo mallissa, tulee erillisenä perheenä. Perhe, joka sisältää muita perheitä (katso editorin ohje kohdasta Sisällä olevat perheet), tuo ne mukanaan: tiedosto luettelee ne, ja malli säilyttää ne, jotka sillä on jo.

## Perheet kirjastossa

Avaa {{ui:Families…}} ja valitse {{ui:From the Library…}} nähdäksesi kirjastossa jaetut perheet. {{ui:Add to this project}} lukee perheen kuten perhetiedoston: BimCraft tarkistaa jokaisen kentän ennen kuin tekee mitään. Perhe tulee omana perheenään ja avautuu editorissa. Lisääminen on yksi kumottava vaihe. Jakaaksesi omasi käytä {{ui:Save all as a library}} ja lähetä tiedosto kirjastoon. Kirjaston henkilökunta julkaisee perhetiedoston komennolla, ja jokainen perhe on oma kohteensa koot mukanaan. Jos kirjastoon ei saada yhteyttä, luettelo kertoo sen, eikä mikään muutu.

## Muiden ohjelmien tyypit

Muiden ohjelmien tekemät tyypit näkyvät myös Perheet-ryhmässä. Ne on ryhmitelty arvauksen mukaan: elementtien nimien osan mukaan ennen ensimmäistä kaksoispistettä, tai tyyppinimien mukaan, jotka eroavat vain numeroiltaan. Perheikkuna kertoo, mitä arvausta se käytti. Tyypit luetellaan, ja niiden elementit voi valita, mutta niitä ei muokata täällä, koska niillä ei ole perheen reseptiä.

:::note
Lähtöovet ja -ikkunat piirretään täsmälleen kuten ennen perheitä. Ennen perheitä tehdyt tiedostot avautuvat muuttumattomina: niiden ovet ja ikkunat näkyvät perheensä alla käytössä olevine kokoineen, ja ne siirtyvät omaan kokoonsa ensimmäisen muutoskerran jälkeen.
:::

Katso myös [Perheen muokkaaminen](topic:family-editor) ja [Ovet ja ikkunat](topic:doors-and-windows).
