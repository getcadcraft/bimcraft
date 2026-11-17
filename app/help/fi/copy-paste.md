---
title: Kopioi, liitä ja monista kirjaston kohteet
summary: Kopioi sijoitettu kirjaston kohde ja liitä se napsautettuun paikkaan, alkuperäisen viereen tai toiseen malliin; kopioi muiden elementtien ominaisuudet tekstinä; kumoa ja tee uudelleen.
keywords: kopioi, liitä, monista, leikepöytä, liitä samaan paikkaan, leikkaa, poista, valitse kaikki, kumoa, tee uudelleen, muokkausvalikko, lisää, kirjaston kohde, sijoitus, toisto, matriisi
from: 6ac15931
---

## Mitä teet

Lisää kopioita kohteesta, jonka olet jo sijoittanut: toinen työpöytä, rivi allasyksiköitä. Tämä aihe koskee **sijoitettuja kirjaston kohteita**, eli BimCraftin mallilleen kirjoittamia elementtejä: yhden niistä voi liittää mihin tahansa malliin, myös toiseen välilehteen. Seinät, ovet ja kaikki muut elementit kopioidaan, leikataan, liitetään ja poistetaan samalla tavalla omassa mallissaan: katso [Poista, leikkaa, kopioi ja liitä rakennuselementit](topic:edit-elements).

Komennot ovat mallin yläpuolella olevalla työkalurivillä: {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}} ja {{ui:Lisää}}, sekä valikko, jossa ovat {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}} ja {{ui:Poista valinta}}. Komento, jota ei voi juuri nyt suorittaa, on harmaana; osoita sitä nähdäksesi syyn, tai napsauta sitä, jolloin tilarivi kertoo syyn.

## Vaiheet

1. Avaa IFC-malli, jossa on kirjaston kohde, tai sijoita ensin yksi. Katso [Sijoita laitteet ja kalusteet kirjastosta](topic:place-from-library).
2. Napsauta kohdetta 3D-näkymässä. Sen ominaisuuksissa näkyy **Kirjaston kohde** -ruutu.
3. Napsauta {{ui:Kopioi}} tai paina {{key:Mod+C}}.
4. Napsauta {{ui:Liitä}} tai paina {{key:Mod+V}}. Sijoituspalkki aukeaa, ja osoittimen perässä liikkuu läpinäkyvä laatikko, joka on käännetty kuten alkuperäinen.
5. Paina {{key:R}} kääntääksesi sitä 90°, {{key:Tab}} tartuttaaksesi sen selkäpuolen seinään tai kirjoita X ja Y sijoituspalkkiin.
6. Napsauta kohtaa, johon kopio menee. Jokainen napsautus sijoittaa uuden kopion; lopeta painamalla {{key:Esc}}.
7. Napsauta {{ui:Tallenna IFC-tiedostona}} ladataksesi mallin muokatun kopion.

## Liitä samaan paikkaan

{{ui:Lisää}}, {{ui:Liitä samaan paikkaan}} tai {{key:Mod+Shift+V}} liittää ilman napsautusta samaan X- ja Y-kohtaan samalla tavalla käännettynä:

- **Samaan malliin, samaan kerrokseen**: kaksi kohdetta täsmälleen samassa paikassa ei olisi hyödyksi, joten kopio menee aivan alkuperäisen viereen: yhden kohteen leveys lisättynä 100 mm:llä kohteen omaa leveyssuuntaa pitkin. Liitä samaan paikkaan uudelleen uudesta kopiosta, niin saat rivin.
- **Toiseen kerrokseen tai toiseen malliin**: täsmälleen sama X, Y ja kääntö. BimCraft käyttää kerrosta, jolla on sama nimi; jos sellaista ei ole, käytetään lähintä korkeudella olevaa. Tilarivi kertoo, mikä.

## Monista

{{ui:Lisää}}, {{ui:Monista}} tai {{key:Mod+D}} kopioi valitun kohteen ja aloittaa sen liittämisen heti: yksi vaihe kahden sijaan.

## Toiseen malliin tai toiseen välilehteen

Kopioitu säilyy tässä selaimessa, joten voit avata toisen IFC-mallin tai BimCraft-sovelluksen toisessa välilehdessä ja liittää kopion sinne. Toinen malli tarvitsee kirjaston kohteen itsensä: BimCraft-sovelluksella se on, kun kohde on sijoitettu, vaihdettu tilalle tai päivitetty tässä välilehdessä. Aiemmassa istunnossa sijoitetun kohteen voi liittää uudelleen vain omaan malliinsa; toisessa mallissa sijoita se {{ui:Kirjasto}}-välilehdeltä.

## Mitä pitäisi näkyä

- Kopio mallissa valittuna, samalla kirjaston kohteella, lisenssillä, laitetiedoilla, määrällä ja muistiinpanolla kuin alkuperäinen, sekä **seuraavalla vapaalla kohdenumerolla**. Muuta numeroa Ominaisuudet-kohdasta `CadCraft_Placement`-kohdan alta.
- Muutosluettelossa lukee ”Sijoitettu: *kohde* (kohde *n*)”. {{key:Mod+Z}} kumoaa sen; {{key:Mod+Y}} tekee sen uudelleen.

## Hyvä tietää

- Kopiot jakavat alkuperäisen tyypin, joten kaikki käyttävät yhtä geometriajoukkoa, aivan kuten saman kohteen sijoittaminen kahdesti.
- {{ui:Kumoa}} ja {{ui:Tee uudelleen}} koskevat kaikkia muutoksia: muokattuja arvoja, sijoituksia, liittämisiä, vaihtoja ja päivityksiä. Uudelleen tekeminen palauttaa sijoituksen samaan paikkaan; uusi muutos tyhjentää sen, mitä voitiin tehdä uudelleen.
- Piirustuksen 2D-näkymässä ei ole mitään valittavaa, joten mitään ei voi kopioida. Muokkaa piirustusta painikkeella {{ui:Muokkaa CadCraftissa}}, kun se näkyy.

## Yleiset virheet

- **{{ui:Liitä}} kertoo, että elementit ovat peräisin toisesta mallista.** Viimeksi kopioit rakennuselementin tai useita elementtejä: ne liitetään vain omaan malliinsa. Valitse yksi sijoitettu kirjaston kohde ja kopioi se.
- **{{ui:Liitä}} kertoo, että kopio on peräisin toisesta mallista ilman kirjaston kohdetta.** Sijoita kohde kerran tämän välilehden {{ui:Kirjasto}}-välilehdeltä, kopioi se ja liitä.
- **{{key:Mod+C}} kopioi sivun tekstiä.** Sivulla oli valittuna teksti. Napsauta ensin mallia.

## Liittyvät aiheet

- [Näppäimet ja hiiri](topic:keyboard#edit)
- [BimCraft-asetukset](topic:settings)
