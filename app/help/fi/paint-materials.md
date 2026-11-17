---
title: Maalaa materiaaleja seinille, lattioille ja katoille
summary: Anna elementeille materiaali, kuten tiili, verhous, kattomateriaali, puu tai laatta, koko elementille tai yhdelle puolelle. Materiaali tallentuu IFC-tiedostoon ja näkyy renderöidyissä kuvissa.
keywords: maalaa, materiaali, materiaalit, pintakäsittely, tekstuuri, tiili, verhous, kattomateriaali, puu, kivi, laatta, betoni, rappaus, maanpinta, lasi, metalli, seinän puoli, sisäpuoli, ulkopuoli, lattian pinta, huone, pintatyyli
from: fbfed676
---

{{ui:Maalaa}}-painike työkalurivillä avaa materiaalikirjaston 3D-näkymän päälle: tiili ja tiiliseinät, verhous, kattomateriaalit, puu, kivi, laatta, betoni, rappaus, maanpinta, lasi ja metalli.

## Maalaa elementtejä

1. Napsauta {{ui:Maalaa}}.
2. Napsauta materiaalia.
3. Napsauta elementtejä 3D-näkymässä. Jokainen napsautus maalaa napsauttamasi elementin.

Maalataksesi monta kerralla valitse ne ensin (napsauttamalla, {{key:Ctrl}}+napsautus tai [haulla](topic:find)) ja napsauta sitten materiaalia: jokainen valittu elementti saa sen yhdellä askeleella.

Elementti näyttää materiaalin värin 3D-näkymässä heti. Sen tekstuuri näkyy [renderöidyssä kuvassa](topic:render). {{key:Esc}} tai {{ui:Sulje}} lopettaa maalaamisen.

## Maalaa yksi puoli

Valitse {{ui:Vain napsautettu puoli}} ja napsauta haluamaasi puolta: seinän ulkopuoli verhouksella ja sisäpuoli toisella pinnalla, lattian yläpinta puulla ja alapinta ennallaan. Muu osa elementistä säilyttää materiaalinsa.

Puoli määräytyy elementin omien suuntien mukaan, joten se pysyy samana puolena, kun siirrät tai käännät elementtiä.

Maalataksesi lattiat huone kerrallaan anna jokaiselle huoneelle oma lattia ({{ui:Piirrä}} › {{ui:Lattia}} › **Tämä huone**, katso [Huoneet, lattiat, alakatot ja katot](topic:floors-and-roofs)) ja maalaa sitten kunkin lattian yläpinta.

## Poista materiaali

Napsauta raidallista väriruutua ({{ui:Ei materiaalia}}) ja napsauta sitten elementtiä. Kaikki sen materiaalit, myös puolten, poistuvat.

## Tiedostossa

Maalaaminen muuttaa IFC-tiedostoa (yksi askel kerrallaan, {{key:Ctrl+Z}} kumoaa sen) ja pysyy tavallisena IFC:nä:

- jokainen maalattu elementti saa ominaisuusjoukon `CadCraft_Render`, joka nimeää sen materiaalin, ja yhden ominaisuuden jokaiselle maalatulle puolelle;
- sen runko saa pintatyylin, jossa on materiaalin väri, joten muut BIM-ohjelmat näyttävät värin. IFC4:ssä tyyli nimeää myös tekstuurin.

Kun BimCraft muokkaa maalaamaasi seinää (esimerkiksi siirrät sen päätä), seinä säilyttää materiaalinsa ja värinsä BimCraft-ohjelmassa, kuvissa ja muissa ohjelmissa.

:::note
Tekstuurit piirtää BimCraft itse: ne toimivat offline-tilassa ja ovat vapaasti käytettävissä mihin tahansa (CC0). Omia kuvatekstuureja ei ole vielä toteutettu.
:::

## Tekstuurit 3D-näkymässä

Maalattu tiiliseinä näyttää tiilensä ja puulattia lautansa todellisessa koossaan heti, kun maali on paikallaan. Poista valinta kohdasta **Näytä tekstuurit 3D-näkymässä** Maalaa-paletissa, jos haluat nähdä tasaiset värit (hyvin suuri malli kytkee ne itse pois ja kertoo siitä). Väritys ominaisuuden mukaan näyttää aina omat värinsä. Ohjelma piirtää tekstuurit itse, joten mitään ei ladata, ja renderöinnit sekä glTF-tiedosto sisältävät ne kummassakin tapauksessa.
