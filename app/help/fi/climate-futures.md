---
title: "Ilmastotulevaisuudet: tulva, kuumuus ja metsäpalo vuosina 2050 ja 2080"
summary: Aja tulva, energiavuosi ja metsäpalon seulonta uudelleen tulevalla ilmastolla (skenaariot SSP2-4.5 ja SSP5-8.5, vuodet 2050 ja 2080) ilmastodatapaketista, esitettynä nykyhetken rinnalla.
keywords: ilmasto, ilmastonmuutos, tulevaisuus, 2050, 2080, ssp, cmip6, skenaario, merenpinnan nousu, tulva, kuumuus, säätiedosto, epw, morph, energyplus, metsäpalo, maastopalo, palosää
from: 224ecd08
---

Ilmastoluvut tulevat **datapaketista**, eivät itse sovelluksesta. Kytke {{ui:Ilmastotulevaisuudet}}-lisäosa päälle kohdassa Asetukset › Lisäosat tai lataa oma paketti tiedostona {{ui:Ilmastotulevaisuus}}-lohkossa.

:::warning
Lisäosan mukana tuleva paketti on **näyte**: kolme paikkaa (Denver, Miami, Johannesburg), yksi ilmastomalli ja viisi vuotta jokaisella 20 vuoden jaksolla. Se on olemassa työkalujen kokeilemiseen, **ei suunnitteluun**. Paneeli sanoo sen lihavoituna, kun sitä käytetään. Täysi paketti (monta mallia, kaikki vuodet, enemmän paikkoja) rakennetaan komennolla `tools/climate/build-pack.mjs` NASA:n NEX-GDDP-CMIP6-datasta.
:::

## Valitse tulevaisuus

Vasemman paneelin {{ui:Vaaran toisto}}-kohdassa valitse **Skenaario** (SSP2-4.5, keskitie, tai SSP5-8.5, suuret päästöt) ja **Vuosi** (2050 tarkoittaa 2041-2060, 2080 tarkoittaa 2071-2090; molemmat verrattuna vuosiin 1995-2014). **Paikka** on paketin paikka, joka on lähinnä mallin tonttia (IfcSite-leveys- ja pituusaste), tai se, jonka valitset. Kaukana kaikista paikoista käytetään paketin globaaleja keskimääräisiä muutoksia, ja paneeli kertoo siitä.

## Tulva: nykyhetki tulevan rinnalla

Kun skenaario on valittu, aseta **Tulvatyyppi**: rannikko (lisää merenpinnan nousun), joki tai rankkasade (syvempi sateisimman päivän sademäärän muutoksen verran) tai molemmat. Paina Suorita: tulva toistuu kuten ennenkin, ja taulukko näyttää nykyisen ja tulevan tulvan rinnakkain (veden taso, kastuvat huoneet, syvin vesi). Oletukset on listattu sen alla:

- rannikon taso nousee koko merenpinnan nousun verran; myrskyaaltoa ja aaltoja ei muuteta;
- joen virtaama nousee suoraan suhteessa sateisimman päivän sademäärään, ja syvyys seuraa virtaamaa potenssiin 0.6 (Manningin yhtälö leveälle uomalle);
- kaksi osaa lisätään yksinkertaisesti toisiinsa.

## Lämpö: tuleva säätiedosto

Valitse laji {{ui:Kuumuus: tuleva säätiedosto}}, valitse nykyhetken `.epw`-säätiedosto ja paina {{ui:Tee tuleva säätiedosto}}. Tiedosto morfataan kuukausi kerrallaan julkaistulla siirto- ja venytysmenetelmällä (Belcher, Hacker ja Powell 2005): kuukauden keskiarvo lämpenee paketin muutoksen verran, kuumat iltapäivät päivittäisen maksimin muutoksen verran ja kylmät yöt päivittäisen minimin muutoksen verran. Suhteellinen kosteus muuttuu paketin muutoksen verran, ja kastepiste lasketaan uudelleen. Paine ja tuuli pysyvät ennallaan. Taulukko vertaa keski- ja huippulämpötiloja, 0.4 %:n jäähdytys- ja 99.6 %:n lämmitysmitoituslämpötiloja, tunteja 30 °C:ssa ja 35 °C:ssa sekä asteluvuita.

{{ui:Tallenna tuleva säätiedosto}} tallentaa sen; {{ui:Käytä energiatarkistuksessa}} antaa sen EnergyPlus-tarkistukselle (Energia-välilehti). Tuleva tiedosto on sama tyypillinen vuosi, vain lämpimämpänä: se ei lisää uusia helleaaltoja.

## Energiavuosi: nykyhetki tulevan rinnalla

Energia-välilehden EnergyPlus-tarkistuksessa (oma lisäosansa, oman moottorisi kanssa) valitse nykyhetken säätiedosto, sitten skenaario ja vuosi sen {{ui:Ilmastotulevaisuus}}-lohkossa ja paina {{ui:Simuloi vuosi: nykyhetki ja tulevaisuus}}. Vuosi ajetaan nykyhetken tiedostolla ja sen morfatulla tulevaisuudella, ja jokaisen huoneen lämmitys ja jäähdytys luetellaan rinnakkain.

## Metsäpalolle altistuminen (vain seulonta)

Valitse laji {{ui:Metsäpalolle altistuminen (vain seulonta)}}: lähin kasvillisuus, rinne siitä rakennukseen ja etäisyys siihen. Tulos on kaista erittäin matalasta äärimmäiseen, nykyhetken ja tulevaisuuden osalta.

:::warning
**Vain seulonta.** Tämä on meidän oma suhteellinen asteikkomme sen selvittämiseen, tarvitseeko paikka kunnollisen metsäpaloarvion. Se ei ole rakennusmääräysluokitus eikä bushfire attack level -luokitus. Se kertoo kasvillisuuden painokertoimen, rinnekertoimen (tuli kaksinkertaistaa nopeutensa noin joka 10 asteen ylämäessä, laskettuna enintään 20 asteeseen asti), etäisyyskertoimen (10 m jaettuna etäisyydellä, enintään 1) ja paketin palosään indeksin muutoksen.
:::

## Mistä luvut tulevat

- **Lämpötila, kosteus, auringonpaiste, sademäärä, palosää:** NASA NEX-GDDP-CMIP6, päivittäin tarkennettu CMIP6-mallituotos. Kunkin mallin tuotos on lisenssin CC BY 4.0 alla. Palosään muutos on Canadian Fire Weather Index laskettuna päivä kerrallaan mallin säästä (päivittäisellä kosteudella keskipäivän kosteuden sijaan).
- **Merenpinnan nousu:** IPCC AR6:n globaali keskiarvo (ei paikallinen; maan nousua tai laskua siinä ei ole), ellei paketti sisällä paikallisia lukuja.
- Paketti nimeää lähteensä, lisenssinsä ja päivämääränsä, ja paneeli näyttää ne.
