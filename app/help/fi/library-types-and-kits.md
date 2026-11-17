---
title: Symbolit, tyypit ja esineet, projektipohjat ja pikasarjat
summary: Kirjastossa on kolmenlaisia kohteita (symbolit, tyypit, esineet). Lisää tyyppi projektiisi, aloita projekti yhteisestä projektipohjasta, lisää pikasarja ja jaa omat projektipohjasi, tyyppisi ja sarjasi kirjaston lähetyssivun kautta.
keywords: kirjasto, symbolit, tyypit, esineet, tyyppi, seinätyyppi, lattiatyyppi, kattotyyppi, alakattotyyppi, projektipohja, pohja, pikasarja, sarja, jakaminen, lähetys, versio, muutosloki, LOD, luokitus, lisenssi, käytännön kokemuksia
from: e13b0e67
---

## Mitä teet

Etsit kirjastosta sen mukaan, mitä kohde on, lisäät tyypin projektiin, jota piirrät, aloitat uuden projektin jaetusta projektipohjasta ja jaat omat projektipohjasi, tyyppisi ja sarjasi.

## Kirjaston kolme kohdetyyppiä

- **Symbolit** ovat piirustuskäytäntöjä: vain 2D, piirretty merkintäkokoon, ryhmitelty alan mukaan.
- **Tyypit** kertovat, mistä elementti koostuu: sen kerrokset todellisella paksuudellaan, sen kehitystaso (LOD) ja luokituskoodi. Tyyppiä ei piirretä, vaan se lisätään projektiin.
- **Esineet** ovat fyysisiä kohteita, kuten ovia, ikkunoita, huonekaluja, kalusteita ja laitteita, joilla on pohjakuva ja 3D-runko todellisessa koossa.

{{ui:Kirjasto}}-välilehdessä valitse {{ui:Kirjasto}} ja käytä **Kohteen tyyppi** -valintaa, jolla näytetään Kaikki, Symbolit, Tyypit tai Esineet.

## Lisää tyyppi projektiisi

1. Valitse **Kohteen tyyppi** -kohdasta **Tyypit** ja avaa yksi.
2. Tarkista sen rakenne, LOD ja luokitus kuvan alla, valitse sitten {{ui:Lisää tähän projektiin}}.
3. Se lisätään seinä-, lattia-, katto- tai alakattotyyppinä, jolla voit piirtää. Jos samanniminen tyyppi on jo olemassa, uusi lisätään kopiona ja sinun tyyppisi säilyy ennallaan. Yksi {{ui:Kumoa}} poistaa sen.

## Projektipohjat ja pikasarjat

Valitse {{ui:Pikasarjat}} nähdäksesi, mitä ihmiset ovat jakaneet.

- **Projektipohja** on IFC-tiedosto, jossa on kerrokset, ruudukot, tyypit ja asetukset. {{ui:Tallenna omiin malleihin}} lisää sen kohtaan **Uusi rakennus**, osioon Aloita.
- **Pikasarja** on luettelo kirjaston kohteista. {{ui:Näytä pikasarjan kohteet}} luettelee ne kortteina, jotka voit sijoittaa.
- Jokaisella sarjalla on versio ja muutosloki, uusin ensin. Versio, joka alkaa 0:lla, on keskustelua varten; 1.0.0 on vain sille, minkä linjan omistaja on hyväksynyt.

## Jaa omasi

- **Projektipohja:** {{ui:Tallenna mallipohjana}}, valitse {{ui:Tee myös tiedosto jaettavaksi kirjastoon}}, lisää sen sisältö ja versio. Saat `.json`-tiedoston.
- **Pikasarja:** valitse {{ui:Pikasarjat}}-kohdassa Tee pikasarja tästä projektista. Se luettelee kirjastokohteet, joita projekti käyttää.
- **Tyyppi:** valitse {{ui:Tyyppipaketit}}-kohdassa yksi tyyppi ja valitse {{ui:Tallenna kirjastokohteeksi…}}.

Lähetä tiedosto kirjaston lähetyssivulla. Se kulkee saman tarkistuksen läpi kuin mikä tahansa kohde, ja valitset lisenssin siellä: jokainen kohde ilmoittaa lisenssinsä. Kohteilta pyydetään LOD-taso, IFC-luokka ja luokituskoodi (koodi, ei pelkkä nimi).

## Käytännön kokemuksia

Minkä tahansa kirjastokohteen sivulla kirjautuneet jäsenet voivat lisätä muistiinpanon: käytetty oikeassa projektissa, kokeiltu näytösprojektissa tai löytynyt ongelma. Kerro projektin laatu muutamalla sanalla ja jätä asiakkaiden nimet pois. Muistiinpano on julkinen eikä ole arvostelu: se ei muuta kohdetta.

## Hyödyllistä tietoa

- Sovelluksesta ei lähetetä mitään. Tiedostot tehdään tietokoneellasi ja lähetät ne itse.
- Pikasarja, joka on tehty projektipohjasta, sisältää IFC-tekstin täsmälleen tallennettuna. Tarkista se yksityisistä tiedoista ennen lähettämistä.
- CadCraft näyttää kirjastovälilehdessään symbolit ja esineet; tyypit ja projektipohjat ovat BimCraft-projekteja varten.
