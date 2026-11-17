---
title: Kirjoita erittely mallista
summary: Yksi erittelyosio jokaiselle seinä-, ovi-, ikkuna-, lattia- ja pinnoitetyypille, joka on käytössä. Sen tiedot luetaan mallista ja teksti on omasi, ja tuloksena on PDF- tai Word-asiakirja.
keywords: erittely, erittelyt, työpiirustukset, vaihe 5, rakennussuunnitelmat, osio, seinätyyppi, ovityyppi, ikkunatyyppi, pinnoite, luokitus, Uniclass, Omniclass, MasterFormat, asiakirja, PDF, Word, DOCX, luettelot
from: a6acc6d4
---

## Mitä teet

Hanki erittely, joka seuraa mallia: osio jokaiselle tyypille, joka todella on rakennuksessa. Jokaisen osion rakenne ja määrät luetaan mallista, ja siihen kirjoitat oman tekstisi.

## Vaiheet

1. Kytke {{ui:Piirrä}} päälle, avaa **Luettelot** vasemmasta paneelista ja napsauta **Erittely**.
2. Valintaikkuna listaa yhden osion jokaiselle seinä-, ovi-, ikkuna-, lattia- ja huonepinnoitetyypille, joka on käytössä. Otsikoiden alla ovat sen **tiedot**, jotka luetaan mallista: paksuus, kerrokset yksi kerrallaan, kehitystaso, mitat, kappalemäärä ja määrä. Osio, jonka elementeillä on luokituskoodi, näyttää koodin otsikossaan.
3. Kirjoita erittelyteksti osion alla olevaan laatikkoon. **Valitse sen elementit** näyttää, mistä osio kertoo.
4. Napsauta **Tallenna**. Se on yksi vaihe kumoamisessa, ja teksti säilyy rakennustiedostossa.
5. Avaa **Asiakirjat mallista**, valitse **Erittely**-malli ja napsauta **Esikatselu**, ja tallenna se PDF:nä, Wordinä tai Markdownina. Katso [Asiakirjat mallista](topic:documents-from-the-model).

## Työpiirustusluettelot asiakirjana

**Työpiirustusluettelot**-malli tulostaa ovi-, ikkuna- ja pinnoiteluettelot suoraan mallista omassa toimistoasettelussasi. Kirjoita omaan malliisi `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` tai tallennetun asetuksen nimi, esimerkiksi `{{schedule Door schedule by floor}}`. `{{specification}}` tulostaa erittelyn.

## Hyvä tietää

- Tiedot ovat mallin. Ne muuttuvat, kun malli muuttuu; teksti ei muutu.
- BimCraft ei kirjoita standardin kohtaa eikä valmistajan tekstiä. Osio ilman tekstiä tulostuu muodossa ”Erittelytekstiä ei ole vielä kirjoitettu.”
- Tyypille kirjoitettu teksti, jota ei enää ole mallissa, säilytetään ja luetellaan kohdassa ”Teksti tyypeille, joita ei enää ole mallissa”.
- Vaihtaaksesi yleisen tyypin tiettyyn kokoonpanoon, katso [Seinätyökalut](topic:wall-tools) (Vaihda tyyppi).
