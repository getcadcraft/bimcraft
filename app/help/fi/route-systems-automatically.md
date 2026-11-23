---
title: Reititä kanavat, viemärit, vesi- ja kylmäainelinjat automaattisesti
summary: Törmäystarkistuksessa BimCraft löytää reitin avoimen mallin ympäriltä kanaville, painovoimaiselle viemäröinnille, kylmä- ja lämminvedelle sekä jako- ja monijakoputkille kylmäaineelle. Linjat piirretään liittimineen yhdellä kumoamisvaiheella. Piirtämisen apuväline: koot, kaltevuudet ja tarkistukset tulevat ohjelman taulukoista ja kirjoittamistasi arvoista. Mikään tässä ei kerro, että suunnitelma täyttää määräyksen.
keywords: automaattireititys, reititä, reititä kanavat, reititä putket, viemäröinti, jätevesi, painovoima, pystylinja, tuuletus, vesilukko, vesi, lämminvesi, paluukierto, kierrätys, kylmäaine, jako, monijako, VRF, ekvivalenttipituus, haarasarja, Y-haara
from: 5841d513
---

## Mitä teet

Anna BimCraftin suunnitella linjaverkosto malliin jo sijoitettujen liittimien välille, seinien ja palkkien ympäri, ja tarkista se numeroilla, jotka näet.

## Vaiheet

1. Avaa malli ja törmäystarkistus. Kohdassa **Reititä kanavat automaattisesti** valitse ilmanvaihtokone ja sen päätteet, tai kohdassa **Reititä muut järjestelmät automaattisesti** valitse järjestelmä.
2. **Jätevesi painovoimalla.** Kirjoita poistoaukon sijainti ja, jos sinulla on, pystylinjojen sijainnit. Rastita **Reititä kaikki kerrokset kerralla** ottaaksesi mukaan jokaisen kerroksen, jossa on laitteita. Kunkin kerroksen viemärit liittyvät pystylinjaan omalla tasollaan, ja pystylinja kulkee korkeimman hanan yläpuolelta jalkaan asti. Paina {{ui:Reititä}}.
3. **Vesilukosta tuuletukseen.** Paneeli luettelee etäisyyden jokaisesta vesilukosta sen tuuletukseen. Kirjoita **Suurin etäisyys vesilukosta tuuletukseen** -kenttään määräyksesi sallima enimmäismitta. Yli menevä laite merkitään tekemättömäksi, ja ylitys näytetään millimetreinä. Rastita **Tuuletus pystylinjan kautta**, kun laitteissa ei ole omaa tuuletusnippaa. Etäisyys mitataan silloin pystylinjaan. BimCraft ei sisällä tähän määrätaulukkoa: kirjoitat luvun itse.
4. **Kylmä- ja lämminvesi.** Valitse lähde, kirjoita paine lähteessä ja paine, jota tarvitset laitteessa. Rastita **Lämmin vesi**, valitse lämmittimen kuuma liitin ja rastita **Paluukierto**. Paluulinja päättyy silloin lämmittimen **kuuma paluu** -liittimeen tai mihin tahansa muuhun valitsemaasi liittimeen. Muu liitin päättyy 150 mm lyhyemmäksi ja avoimena, jotta voit liittää sen itse.
5. **Jako, monijako ja VRF.** Valitse ulkoyksikkö, rastita sisäyksiköt ja kirjoita kunkin kapasiteetti. Kirjoita rajat valmistajan tiedoista. Kirjoita mutkan ja haarasarjan **ekvivalenttipituus** (valmistajan arvot). Pisin ja kokonaispituus tarkistetaan silloin ekvivalenttipituuksien mukaan.
6. Paina {{ui:Reititä}}. Paneeli kertoo, kuinka monta linjaa se piirsi, ja mitä se ei voinut tehdä ja miksi. {{ui:Kumoa}} perii kaiken yhdellä vaiheella.

## Mitä pitäisi näkyä

Putket, joissa on kulmat, T-haarat ja supistukset. Viemärit, jotka laskevat vähintään pienimmän kaltevuuden kokonsa mukaan. Tuuletusnipat laitteissa. Kylmäainelinjat nestelinjan ja kaasulinjan parina, jotka kääntyvät joka mutkassa samalla tavalla, ja haarasarja merkittynä kohtaan, josta haara lähtee päälinjasta.

## Hyvä tietää

- Kun viemäri liittyy toiseen viemäriin, malli piirtää T-haaran. Pohjakuva nimeää nämä kohdat 45 asteen Y-haaroiksi, jotta voit vaihtaa sovitteen.
- Lämmin vesi käyttää laitteen omaa kuumaa liitäntää, kun sen perheellä sellainen on. Ilman sitä käytetään 100 mm kylmän liittimen vieressä olevaa liitäntää.
- Kylmäainelinjat alkavat kunkin yksikön kahden liitännän välistä. Kun yksikön kaksi liitäntää ovat liian lähellä mutkaa varten, pari pysyy niiden välissä keskitettynä.
- Vesiverkko käyttää laskelmissa näkyviä kysyntäkäyrää ja kitkalukuja. Korvaa ne määräyksesi arvoilla, ennen kuin luotat paineisiin.
- Suuret talot voivat viedä puoli minuuttia tai enemmän, pääasiassa lämminvesiverkon takia.
- Tämä on piirtämisen apuväline. Pätevä henkilö tarkistaa koot, kaltevuudet, tuuletukset ja paineet voimassa olevaa määräystä vastaan.

## Seuraavaksi

[Tarkista törmäykset](topic:clash-check) · [Tarkista putket ja kanavat rakenteeseen nähden](topic:mep-against-structure) · [Putkien ja laitteiden väliset liitännät](topic:mep-connections)
