---
title: Yhdistä kahden henkilön muokkaukset yhdeksi malliksi
summary: Anna git, Fossil tai Mercurial yhdistää kaksi muokattua kopiota samasta IFC-mallista kohde kohteelta, jotta kaksi ihmistä voi piirtää samaan rakennukseen ja yhdistää työnsä.
keywords: yhdistäminen, merge, git, fossil, mercurial, versionhallinta, ristiriita, kolmisuuntainen, cadcraft merge, gitattributes, ifc, globalid, tiimi, kaksi kopiota, haarat
from: 50733df8
---

Kaksi ihmistä ottaa kopion samasta rakennuksesta, toinen piirtää itäisen siiven ja toinen läntisen, ja myöhemmin kopiot on yhdistettävä yhdeksi. Jos ne koskivat eri kohteisiin, ohjelma voi tehdä yhdistämisen ihmisen sijaan.

## Mikä tekee sen mahdolliseksi

Jokaisella seinällä, ovella, kerroksella, huoneella ja ominaisuusjoukolla IFC-tiedostossa on GlobalId, joka ei koskaan muutu. Yhdistäminen etsii kohteet tuon tunnuksen perusteella, ei tiedoston antaman numeron (`#123`) perusteella, koska numerot muuttuvat, kun ohjelma tallentaa. Kohteisiin liittyvät osat, joilla ei ole omaa tunnusta (sijoitukset, muodot, yksiköt), verrataan niiden sisällön perusteella.

Molempien kopioiden on oltava samaa IFC-versiota (2x3, 4 tai 4.3). Yhdistäminen säilyttää tiedostosi sellaisena kuin se on, sen järjestyksen ja numerot, ja lisää siihen uuden sisällön, joten yhdistämisen git-diff näyttää vain sen, mitä yhdistäminen muutti.

## Asennus

Git tarvitsee kaksi riviä kerran tietovarastoa kohti:

```
# .gitattributes
*.ifc merge=cadcraft

# kerran kullakin tietokoneella
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ilman gitiä aja `cadcraft merge <base> <ours> <theirs>`. Fossil ja Mercurial ottavat samat kolme tiedostoa omassa yhdistystyökalun asetuksessaan. Mitään ei lähetetä; kaikki toimii tietokoneellasi.

## Säännöt

- Attribuutti, joka muuttui vain toisella puolella, otetaan. Sama muutos molemmilla puolilla otetaan kerran.
- Sama attribuutti muutettu kahdella tavalla (sama kerros nimettiin uudelleen kahdella tavalla) on **ristiriita**: sinun puolesi säilyy ja raportti listaa molemmat. Avaa tulos ja korjaa se käsin.
- Luettelo (kerroksen seinät, ominaisuusjoukon ominaisuudet) yhdistyy joukkona: se, minkä kumpi tahansa puoli lisäsi, säilyy, ja se, minkä kumpi tahansa poisti, poistetaan. Kaksi ihmistä, jotka lisäävät kumpikin seiniä samaan kerrokseen, eivät ole ristiriidassa.
- Kohde, joka lisättiin kummalla tahansa puolella, säilyy muotonsa ja ominaisuuksiensa kanssa. Poistettu toisella puolella ja koskematon toisella: poistettu. Poistettu toisella puolella ja muutettu toisella: poistettu, ja siitä ilmoitetaan.
- Tiedoston aikaleima ja tekijä sekä kunkin kohteen omistajahistoria säilyvät sinun omanasi.

Geometria yhdistetään kokonaisena: seinän muoto tulee yhdeltä puolelta, eikä sitä koskaan sekoiteta pisteittäin. Pakattuja IFC- ja IFCX-tiedostoja ei yhdistetä. Yhdistämisen jälkeen avaa tulos BimCraftissa ja katso Ongelmat-paneeli ennen tallentamista.
