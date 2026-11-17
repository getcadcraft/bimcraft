---
title: Työskentely kahden BIM-ohjelman välillä
summary: Lähetä malli yhdestä BIM-ohjelmasta toiseen IFC-muodon kautta BimCraft-ohjelman välissä, säilytä sen GlobalId:t, ominaisuusjoukot ja luokitukset, aseta molemmat ohjelmat samoille ominaisuuksille ja katso, mitä palasi.
keywords: ifc, edestakainen kierros, yhteentoimivuus, globalid, guid, ominaisuusjoukot, psets, luokitukset, jaetut parametrit, ominaisuuksien kartoitus, kääntäjä, bcf, koordinointi, vaihto
from: 9f224176
---

## Mitä teet

Siirrät mallin BIM-ohjelmasta toiseen, esimerkiksi Revit-ohjelmasta Archicad-ohjelmaan ja takaisin, IFC-muodon kautta. BimCraft on välissä tarkistamassa, lisäämässä ja raportoimassa, mikä selvisi. Kummankaan ohjelman omaa tiedostomuotoa ei lueta: kaikki kulkee IFC-muodossa.

## Mitä BimCraft säilyttää

Kun muutat mallia BimCraft-ohjelmassa ja napsautat {{ui:Tallenna IFC-tiedostona}}, jokainen rivi, jota et muuttanut, kirjoitetaan takaisin täsmälleen samanlaisena. Siis:

- **GlobalId:t** pysyvät samoina, ja toinen ohjelma voi yhdistää jokaisen elementin siihen, minkä se lähetti.
- **Ominaisuusjoukot** ja niiden arvot säilyvät, paitsi muuttamasi arvot.
- **Luokitukset** pysyvät kiinnitettyinä elementteihinsä.

## Aseta molemmat ohjelmat samoille ominaisuuksille

1. Avaa malli BimCraft-ohjelmassa (ja projektikokonaisuus, jos sinulla on sellainen: sen ominaisuusryhmät lisätään).
2. Avaa vasemmassa paneelissa {{ui:Kahden BIM-ohjelman välillä}}.
3. Lataa kohdassa **Ominaisuuksien kartoitus** se, mitä kukin ohjelma tarvitsee:
   - {{ui:Jaetut parametrit}}: jaettujen parametrien tiedosto. Lataa se Revit-ohjelmassa kohdasta Manage › Shared Parameters ja lisää parametrit tarvitsemiinsa luokkiin.
   - {{ui:IFC-viennin ominaisuusjoukot}}: käyttäjän määrittelemän ominaisuusjoukon tiedosto. Valitse se Revit-ohjelman IFC-vientiasetuksissa käyttäjän määrittelemissä ominaisuusjoukoissa, jotta viety IFC kantaa samat joukko- ja ominaisuusnimet.
   - {{ui:Kartoitustaulukko (CSV)}}: jokainen ominaisuus IFC-joukkoineen ja nimineen, tyyppeineen sekä vastaavat nimet kussakin ohjelmassa. Archicad-ohjelman kartoitustiedostot eivät ole julkaistu muoto, joten aseta sen IFC-kääntäjä ja ominaisuuksien hallinta tästä taulukosta käsin.
   - {{ui:Kartoitustiedosto}}: koko kartoitus yhtenä tiedostona, säilytettäväksi projektin kanssa.

Standardijoukot (Pset_ ja Qto_) jätetään pois jaettujen parametrien tiedostosta: molemmat ohjelmat kirjoittavat ne omista tiedoistaan.

## Lähetä malli ja tuo se takaisin

1. Vie IFC ensimmäisestä ohjelmasta säilyttäen GlobalId:t (Revit: "Store the IFC GUID in an element parameter after export" päällä).
2. Avaa se BimCraft-ohjelmassa, tarkista se ({{ui:Model checks}}, {{ui:Clash check}}), lisää havainnot ({{ui:Issues}}, BCF), muuta arvoja tarvittaessa ja napsauta {{ui:Tallenna IFC-tiedostona}}.
3. Avaa tallennettu IFC toisessa ohjelmassa, työskentele sen kanssa ja vie IFC sieltä säilyttäen GlobalId:t (Archicad-ohjelman kääntäjä: "Global Unique Identifiers: Keep existing").
4. Palaa BimCraft-ohjelmaan, avaa lähetetty malli ja lisää takaisin tullut malli ({{ui:Lisää malli}} kohdassa Mallit).
5. Kohdassa {{ui:Kahden BIM-ohjelman välillä}} valitse **Lähti** ja **Palasi** ja napsauta {{ui:Tee raportti}}.

## Lue raportti

- **Elementit**: kuinka monta palasi samalla GlobalId:llä, kuinka monta puuttuu ja kuinka monta on uutta. Elementit, joilla on uusi GlobalId, näkyvät yhtenä puuttuvana ja yhtenä uutena: toinen ohjelma ei säilyttänyt sitä.
- **IFC-luokka muuttui**: elementit, jotka palasivat toisenlaisena elementtinä.
- **Ominaisuusarvot säilyivät**: osuus arvoista, jotka palasivat muuttumattomina. Alla oleva luettelo näyttää ominaisuudet, joissa on eniten muuttuneita tai puuttuvia arvoja.
- **Luokitukset**: säilyneet, muuttuneet (sama järjestelmä, toinen koodi) tai puuttuvat.

{{ui:Lataa raportti (CSV)}} antaa jokaisen ominaisuuden laskurit. Jos haluat nähdä, mitkä elementit siirtyivät tai muuttivat muotoaan, käytä {{ui:Compare versions}}-toimintoa samoille kahdelle mallille.

:::note
BimCraft ei aja kumpaakaan ohjelmaa. Se, mitkä asetukset kantavat arvon perille, riippuu kunkin ohjelman IFC-asetuksista: raportti näyttää, mitä oikeasti palasi, joten kokeile asetusta, vie uudelleen ja vertaa.
:::

## Havainnot kulkevat BCF-muodossa

Havainnot, jotka nostat BimCraft-ohjelmassa, viedään BCF-muodossa ({{ui:Issues}}), jonka molemmat ohjelmat voivat lukea BCF-työkaluillaan, joten kysymys elementistä tavoittaa toisessa ohjelmassa työskentelevän henkilön näkymineen.

Katso myös [Avaa projektikokonaisuus](topic:open-project-bundle), [Projektitiedostosta BimCraft-ohjelmaan IFC-muodon kautta](topic:rvt-to-ifc) ja [Vertaa kahta mallin versiota](topic:compare-versions).
