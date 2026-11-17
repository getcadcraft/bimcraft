---
title: Väritä kohteet ominaisuuden mukaan
summary: Väritä jokainen kohde yhden ominaisuuden arvon mukaan, esimerkiksi luokan, tyypin, kerroksen, materiaalin, palonkestävyyden tai kustannuksen mukaan. Lue selite, napsauta arvoa, niin näet vain ne kohteet, ja tallenna värit väriteemana käytettäväksi muissa malleissa.
keywords: väri, värit, väritä, selite, älykäs näkymä, ulkoasu, ominaisuus, tyyppi, materiaali, palonkestävyys, suodatin, eristä, teema, arvot, väriteema, värien tallennus, uudelleenkäyttö, tiimi, json, väripala
from: f081d343
---

## Mitä teet

Näet yhdellä silmäyksellä, miten ominaisuus jakautuu mallissa: mitkä seinät ovat ulkoseiniä, mitä materiaaleja on missäkin, mitkä elementit eivät saa palonkestävyysarvoa. Jokainen kohde saa arvonsa värin, ja selite kertoo, mitä kukin väri tarkoittaa ja montako kohdetta siihen kuuluu.

## Vaiheet

1. Avaa IFC-malli.
2. Napsauta oikealla olevaa {{ui:Väri}}-välilehteä.
3. Valitse luettelosta ominaisuus. Ensimmäiset kuuluvat jokaiseen kohteeseen ({{ui:Luokka}}, {{ui:Tyyppi}}, {{ui:Kerros}}, {{ui:Materiaali}}, {{ui:Nimi}}…); loput tulevat mallin ominaisuusjoukoista ja määräjoukoista joukon nimen alla. Jokaisen perässä oleva luku kertoo, montako kohdetta sillä on.
4. Lue selite: väri, arvo ja kohteiden määrä.
5. Napsauta arvoa, niin näet vain nuo kohteet. Lisää arvoja pitämällä {{key:Mod}} pohjassa ja napsauttamalla. Näytä kaikki uudelleen painamalla {{key:Shift+H}}.
6. Palaa mallin omiin väreihin napsauttamalla {{ui:Pois}}.

## Mitä pitäisi näkyä

- Enintään seitsemällä arvolla on oma värinsä, yleisin ensin. Sitä useammat arvot saavat yhteisen harmaan ja luetellaan nimellä **muut arvot**.
- Luku, jolla on paljon eri arvoja, jaetaan kuuteen yhtä suureen väliin, vaaleasta (matala) tummaan (korkea).
- Kohteet, joilta ominaisuus puuttuu, ovat vaaleanharmaita ja luetellaan nimellä **Ei arvoa**, jotta värilliset erottuvat.
- Värit vaihtuvat Paperi- ja Malli-teemoilla ja pysyvät, kun muokkaat mallia.
- Tyypin ominaisuus pätee jokaiseen kyseisen tyypin kohteeseen. Jos kohteella on saman ominaisuuden oma arvo, oma arvo voittaa.

## Vaihda värejä ja säilytä ne väriteemana

- Napsauta arvon väripalaa selitteessä valitaksesi sille toisen värin. Malli maalataan heti uudelleen.
- {{ui:Tallenna väriteema}} lataa värit pienenä `.json`-tiedostona, jonka nimi tulee ominaisuuden mukaan, esimerkiksi `Class colors.json`.
- Toisessa mallissa tai tiimikaverin tietokoneella napsauta {{ui:Avaa väriteema…}} ja valitse tiedosto. Jokainen teeman arvo saa värinsä, joten sama palonkestävyys tai järjestelmä on samanvärinen joka mallissa.
- Teemassa olematon arvo maalataan harmaalla ja luetellaan nimellä "ei teemassa". Teemassa olevat arvot, joita tässä mallissa ei ole, pysyvät luettelossa arvolla 0, jotta koko teema näkyy.
- Väriteema säilyttää värinsä molemmissa teemoissa. Kun valitset ominaisuuden luettelosta, lähdetään taas automaattisista väreistä.

## Yleisiä virheitä

- **"Tässä mallissa ei ole … arvoja."** Väriteema on tallennettu ominaisuudelle, jota tässä mallissa ei ole (esimerkiksi toisella ominaisuusjoukon nimellä). Avaa tälle mallityypille tehty teema tai valitse ominaisuus luettelosta.
- **Ominaisuus puuttuu luettelosta.** Mallissa ei ole yhtään muotoa omaavaa kohdetta, jolla se olisi. Kerrosten ja tilojen omia ominaisuuksia ei luetella.
- **Kaikki ovat samanvärisiä.** Kaikilla kohteilla on sama arvo tai ei arvoa lainkaan. Katso selitteen määrät.

## Seuraavaksi

- [Piilota, eristä ja läpinäkyvä elementti](topic:hide-and-isolate)
- [Etsi tiesi mallipuulla](topic:model-tree)
