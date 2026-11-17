---
title: Liitä putket ja kanavat laitteisiin
summary: Aloita tai lopeta putki tai kanava portissa, jolloin se saa portin koon ja järjestelmän ja pysyy kiinni siinä, ja tarkista sitten liitännät: avoimet portit, koko- ja järjestelmäristiriidat sekä reitit ilman lähdettä.
keywords: mep, liitä, liitäntä, liitokset, portti, portit, avoin portti, kokoristiriita, järjestelmäristiriita, lähde, tarkista liitokset, kiinteä, seuraa, siirrä laitetta, ifcrelconnectsports, koordinointi
from: 29144fb0
---

## Mitä teet

Liitä reitit laitteisiin, jotta malli on yksi yhtenäinen järjestelmä: pumpun ulostulo siihen putkeen, joka siitä lähtee, ja diffuusorin kaula sen haaran kanavaan. Anna sen jälkeen BimCraftin listata, mikä ei ole kiinni toisissaan.

## Piirrä portista

1. Valitse {{ui:Putki}} tai {{ui:Kanava}}.
2. Vie osoitin laitteen porttiin (pienet ympyrät; avoin portti piirretään varoitusvärillä). Osoitin tarttuu siihen ja sanoo **portissa**.
3. Napsauta: reitti alkaa portin korkeudelta ja **saa sen koon ja järjestelmän** (putki saa myös järjestelmän tavallisen materiaalin). Tilarivi kertoo, mitä se otti.
4. Piirrä eteenpäin kuten tavallisesti. Reitin päättäminen toiseen porttiin kiinnittää myös sen pään.

Reitin pää portissa on **kiinteä** siihen: jos siirrät tai käännät laitetta (kohdassa Ominaisuudet), reitin pää liikkuu mukana; jos muokkaat reittiä, pää pysyy portissa. Reitin muut kulmat pysyvät paikallaan, joten suuren siirron jälkeen ensimmäinen osuus voi irrota portista vinosti: siirrä myös seuraava kulma.

## Tarkista liitännät

Avaa {{ui:Koontiversio}} ja napsauta {{ui:Tarkista liitokset}}. Palkin alla oleva luettelo näyttää:

| Rivi | Mitä se tarkoittaa |
|---|---|
| Portti ei ole kytketty | Laitteessa on liitäntä, johon ei ole piirretty mitään |
| Ei mitään päässä | Reitti päättyy ilmaan |
| Liitetyt portit eri kokoisia | Tietyn kokoinen reitti kohtaa portin tai reitin, jonka koko on toinen, ilman supistusta (putken nimelliskoko, kanavan muoto ja sivut) |
| Liitetyt portit eri järjestelmiä | Esimerkiksi paluukanava tulodiffuusorissa |
| Putki liitetty kanavaan | Kaksi eri lajin liitäntää kohtaavat |
| Ei laitetta sen verkossa, joka sitä syöttää | Mikään, mihin reitti on liitetty, kuinka pitkän matkan päässä tahansa, ei ole ulostuloa. Viemäriä, sadevettä ja tuuletuksia tämä ei koske: niiden vesi tulee kalusteista |
| Kiinni portissa laitteessa, joka ei ole enää mallissa | Laite on poistettu; piirrä pää uudelleen tai poista reitti |

Virheet tulevat ensin. Napsauta riviä valitaksesi, mitä se nimeää. {{ui:Sulje}} piilottaa luettelon. Tarkistus lukee mallin sellaisena kuin se on piirretty: se tarkistaa liitännät ja koot, ei koskaan virtauksia, paineita tai tasapainotusta.
