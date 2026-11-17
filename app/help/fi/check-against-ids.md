---
title: Tarkista malli asiakkaan IDS:ää vasten
summary: Lataa saamasi .ids-tiedosto ja näet Ongelmat-luettelossa jokaisen elementin, joka ei täytä sitä, ennen kuin toimitat IFC-tiedoston.
keywords: ids, information delivery specification, buildingsmart, vaatimukset, toimitus, tarkistus, validointi, laadunvarmistus, eir, bep, ominaisuus, luokitus, materiaali, hankinta
from: 7b960222
---

## Mitä teet

IDS (Information Delivery Specification, buildingSMART-standardi) on luettelo siitä, mitä IFC-tiedoston on sisällettävä: mitkä luokat, mitkä ominaisuudet ja mitkä arvot, luokitukset, materiaalit ja missä kohteiden tulee sijaita. Asiakkaat ja julkiset hankinnat lähettävät sen työn mukana. BimCraft tarkistaa avoimen IFC-mallin sitä vasten ja luettelee jokaisen elementin, joka jää alle vaatimusten.

## Vaiheet

1. Avaa IFC-malli.
2. Avaa vasemmasta paneelista kohdan {{ui:Mallintarkastukset}} alta {{ui:Tarkista IDS:ää vasten}} tai valitse valikosta {{ui:Tarkista IDS:ää vasten…}} (valikkotyylisi mukaan).
3. Napsauta {{ui:Lataa .ids-tiedosto…}} ja valitse tiedosto. Mitään ei lähetetä.
4. Lue tulos: jokainen määritys merkittynä {{ui:Läpäisee}} tai {{ui:Hylätty}} ja kuinka monelle elementille se koskee.
5. Avaa Ongelmat ({{key:Ctrl+Shift+M}}) ja napsauta hylättyä kohtaa, jolloin elementti valitaan ja näkymä zoomaa siihen.

## Mitä näet

- Yksi varoitus jokaisesta elementistä ja vaatimuksesta, jota se ei täytä. Varoituksessa on määrityksen nimi, mitä IDS vaatii ja mitä elementillä on.
- Vaatimus, jota mikään mallin kohde ei vastaa, on oma varoituksensa.
- Tarkistusraportti (Ongelmat-luettelossa) alkaa IDS:stä: sen nimi, versio, tekijä sekä kunkin määrityksen sovellettavien, läpäisseiden ja hylättyjen kohteiden määrät.

## Hyvä tietää

- IFC säilyttää vain viittauksen IDS:ään (nimen, otsikon, version ja tiivisteen), ei itse IDS:ää: asiakkaan IDS voi olla luottamuksellinen, ja IFC menee muille ihmisille. IDS pysyy tämän selaimen mallin rinnalla, joten kun avaat tallennetun IFC:n uudelleen täällä, se tarkistetaan uudelleen. IDS:n lataaminen tai unohtaminen on yksi vaihe, jonka voi kumota.
- Jos avaat mallin toisella tietokoneella tai toisessa selaimessa, Ongelmat näyttää huomautuksen, ettei IDS:ää löytynyt. Lataa se uudelleen tarkistaaksesi.
- Jos haluat lähettää IDS:n IFC-tiedoston mukana, kytke Asetuksissa BimCraft-välilehdeltä päälle {{ui:Säilytä IDS IFC:n sisällä}} ennen kuin lataat sen.
- Jokainen muokkaus, kumoaminen ja uudelleentekeminen tarkistetaan hetken kuluttua uudelleen.
- Arvot verrataan IDS-tavalla: teksti täsmälleen (isot ja pienet kirjaimet ratkaisevat), luvut SI-yksiköissä pienellä toleranssilla (pituudet metreissä, joten millimetreissä oleva malli muunnetaan ensin).
- Määritys, joka on kirjoitettu toiselle IFC-versiolle (esimerkiksi IFC2X3, kun malli on IFC4), tarkistetaan silti, ja tulos kertoo siitä.
- Jos IDS-tiedostossa on virheitä, jotka IDS-tarkastus merkitsisi, valintaikkuna luettelee ne, ja niissä olevat määritykset hylätään.
- Voit hyväksyä hylkäyksen perustelulla kuten minkä tahansa ongelman. Hyväksyntä pysyy voimassa, niin kauan kuin elementin arvot pysyvät samoina.

- IDS:n mallit (patterns) luetaan koko arvona. Alussa oleva `^` ja lopussa oleva `$` tulkitaan myös "koko arvoksi", kuten useimmat IDS-tiedostot niitä tarkoittavat.

## Seuraavaksi

- [Tarkista malli yleisten ongelmien varalta](topic:model-checks)
- [Muuta seinää tai ovea](topic:change-a-wall-or-door)
