---
title: Tarkista törmäykset
summary: Etsi kohdat, joissa yhden joukon elementit törmäävät toisen joukon elementteihin, esimerkiksi kanavat palkkien läpi ja seinät laattoihin, yhdessä mallissa tai useiden välillä toleranssilla, ja tee törmäyksestä havainto.
keywords: törmäys, törmäyksen tunnistus, törmäystarkastus, kova törmäys, häiriö, yhteentörmäys, koordinointi, päällekkäisyys, toleranssi, LVI, rakenne
from: 9cb12346
---

## Mitä teet

Etsi kohdat, joissa kahden elementtijoukon elementit törmäävät toisiinsa, esimerkiksi kaikki palvelumallin osat rakennetta vastaan. Katso sitten jokainen kohta ja säilytä ne, joilla on merkitystä, havaintoina.

## Vaiheet

1. Avaa IFC-malli ja lisää muut {{ui:Lisää malli…}}-painikkeella, jos tarkistat useiden mallien välillä. Katso [Katso useita IFC-malleja yhdessä](topic:several-models).
2. Avaa vasemmasta paneelista {{ui:Törmäystarkistus}}.
3. Valitse kohdissa {{ui:Tarkasta}} ja {{ui:Vasten}} kaksi joukkoa: valitsemasi elementit, luokka (kaikista avoimista malleista), tallennettu hakujoukko (katso [Etsi elementit luokan, nimen tai ominaisuuden mukaan](topic:find)) tai kaikki.
4. Aseta metreissä, kuinka paljon päällekkäisyyttä jätetään huomiotta. 0.01 jättää huomiotta elementit, jotka vain koskettavat toisiaan.
5. Napsauta {{ui:Suorita}}. Tarkistus käy taustalla, ja {{ui:Peruuta}} pysäyttää sen.
6. Napsauta tulosta nähdäksesi sen: kaksi elementtiä valitaan ja näytetään, kaikki muu on läpinäkyvää, ja näkymä zoomaa niihin.
7. Napsauta tuloksen alla {{ui:Tee siitä havainto}} kirjoittaaksesi sen {{ui:Havainnot}}-välilehdelle. Katso [Havainnot ja BCF-tiedostot](topic:issues-bcf).

## Mitä näet

- Törmäykset luetellaan molempien elementtien nimineen (ja niiden tiedostoineen, kun useita malleja on auki) sekä siitä, kuinka syvällä ne ovat päällekkäin, syvin ensin.
- Pinnat, jotka vain koskettavat toisiaan, kuten seinä laatan päällä tai ovi aukossaan, eivät ole törmäyksiä.

## Hyvä tietää

- Tämä on perustason kova törmäystarkistus: elementit, joiden pinnat leikkaavat. Elementtiä, joka on kokonaan toisen sisällä (esimerkiksi seinään upotettu putki), ei vielä löydetä.
- Syvyys kertoo, kuinka paljon kahden elementin rajat menevät päällekkäin vähimmillään. Se on suuntaa antava, ei tarkka mitta.

## Seuraavaksi

- [Mittaa etäisyyksiä, pinta-aloja ja sijainteja 3D:ssä](topic:measure)
- [Piilota, eristä ja tee elementeistä läpinäkyviä](topic:hide-and-isolate)
