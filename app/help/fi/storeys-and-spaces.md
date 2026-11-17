---
title: Näytä ja piilota kerrokset, tilat ja särmät
summary: Kytke kerrokset pois päältä nähdäksesi rakennuksen sisälle, näytä huoneet ja tilat sekä kytke särmäviivat päälle ja pois.
keywords: kerrokset, tasot, lattiat, piilota, eristä, huoneet, tilat, ifcspace, särmät, näkyvyys, leikkaus
from: b838dcc0
---

## Mitä teet

Katso IFC-mallin sisälle kytkemällä pois kerrokset sen yläpuolella, jota haluat tarkastella. Näytä sitten huoneet ja tilat ja kytke särmäviivat pois siistimpää ulkoasua varten.

## Vaiheet: tarkastele yhtä kerrosta

1. Avaa IFC-malli. Katso [Avaa IFC-malli ja tutustu siihen 3D-näkymässä](topic:open-ifc-model).
2. Etsi vasemmalla oleva {{ui:Kerrokset}}-luettelo. Ylin kerros on ensimmäinen, kuten leikkauskuvaa luetaan katolta alaspäin.
3. Poista valinta katolta ja jokaiselta kerrokselta, joka on tarkastelemasi kerroksen yläpuolella.
4. Napsauta {{ui:Ylhäältä}} katsoaksesi alas kyseiselle kerrokselle.
5. Valitse kerrokset uudelleen, jotta ne palaavat näkyviin.

## Mitä pitäisi näkyä

Jokainen kerros, jonka valinnan poistat, katoaa heti kaikkine kohteineen. Luettelossa näkyvät vain kerrokset, joissa on jotain näkyvää. Kohteet, joita ei ole liitetty mihinkään kerrokseen, ryhmitellään luettelon alareunaan nimellä **Ei kerroksella**. Sijaintialueen kohteet ja jotkin kalusteet päätyvät usein sinne.

## Vaiheet: näytä huoneet ja tilat

1. Napsauta {{ui:Tilat}}-painiketta mallin yläpuolisessa työkalurivissä. Painike jää painetuksi.
2. Katso mallia: huoneet ja tilat näkyvät vaaleina, läpinäkyvinä tilavuuksina.
3. Napsauta tilaa lukeaksesi sen ominaisuudet, kuten nimen, numeron ja pinta-alan, oikealta.
4. Napsauta {{ui:Tilat}}-painiketta uudelleen piilottaaksesi ne.

Tilat piilotetaan, kun malli avataan, koska muuten ne peittäisivät seinät ja lattiat.

## Vaiheet: särmät

1. Napsauta {{ui:Särmät}}-painiketta kytkeäksesi ohuet särmäviivat pois päältä.
2. Napsauta sitä uudelleen kytkeäksesi ne takaisin päälle.

Hyvin suurissa malleissa (yli 1.5 miljoonaa kolmiota) painike on harmaana, ja vihjeenä lukee ”Särmät ovat pois päältä hyvin suurille malleille”. Tämä säästää muistia.

## Yleiset virheet

- **Kerroksen valinnan poistaminen mutta osan näkeminen siitä.** Elementti kuuluu siihen kerrokseen, jonka vientiohjelma on sille määrittänyt. Korkea seinä tai porras kuuluu usein vain alimpaan kerrokseensa, joten se jää näkyviin, kun yläkerros piilotetaan, tai katoaa alemman kerroksen mukana.
- **Kerrosten piilottaminen sisäpuolen näkemiseksi.** Leikkauslaatikko on usein nopeampi: katso [Leikkaa IFC-malli leikkaustasolla](topic:section-plane#a-section-box). Voit myös poistaa valinnan {{ui:Mallipuu}}-rivien kohdalta (katso [Löydä tiesi mallipuun avulla](topic:model-tree)).
- **Tilan napsauttaminen seinän läpi.** Napsautus valitsee lähimmän näkyvän pinnan. Piilota yläkerros tai vaihda {{ui:Ylhäältä}}-näkymään ja napsauta sitten.
- **Kerrosten nimet näyttävät oudoilta.** BimCraft näyttää tiedostoon tallennetut kerrosten nimet. Jos ne ovat muotoa ”Level 1” tai pelkkä numero, sen kirjoitti vientiohjelma.
