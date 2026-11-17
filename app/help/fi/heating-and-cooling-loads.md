---
title: Arvioi lämmitys- ja jäähdytystehot
summary: Jokaisen huoneen lämpöhäviö, vuotuinen lämmitys astepäivien mukaan ja jäähdytyshuippu mallissa sen rajaavista kohteista ja kunkin rakennusosan U-arvosta; kaikki lähtötiedot näytetään. Suunnittelun apuväline, ei vaatimustenmukaisuuslaskelma.
keywords: energia, lämmitys, jäähdytys, lämpöhäviö, lämpökuorma, jäähdytyskuorma, U-arvo, lämmönläpäisykerroin, astepäivät, hdd, ilmanvaihto, ilmanvaihtokerrat, sisäiset lämpökuormat, auringonlämpö, lambda, lämmönjohtavuus, eristys, varhainen suunnittelu, analyysi, huoneet, tilat
from: ec312d20
---

Valitse välilehdessä {{ui:Päivänvalo}} ensin {{ui:Laske}}, avaa sen jälkeen {{ui:Lämmitys- ja jäähdytystehot}} ja napsauta {{ui:Laske tehot}}. Kullekin huoneelle saadaan **lämpöhäviö** kylmänä mitoituspäivänä, **vuotuinen lämmitys** ja **jäähdytyshuippu** kuumana päivänä. Mitään ei lähetetä, eikä mallissa muuteta mitään, ellet kirjoita U-arvoa.

:::warning
Tämä on **suunnittelun apuväline, ei vaatimustenmukaisuuslaskelma**: tasaisen tilan arvio, jonka kaikki lähtötiedot näkyvät ruudulla. Se **ei ole** ISO 52016-1 -menetelmä, ei simulaatio eikä energiatodistus; se ei mitoita kattiloita, lämpöpumppuja eikä jäähdyttimiä. Tarkista tulokset ja mitoita laitteet insinöörin kanssa.
:::

## Mikä rajaa kunkin huoneen

BimCraft löytää rajat itse mallista, joten minkä tahansa ohjelman IFC toimii (tilarajoja, joita jotkin ohjelmat vievät, ei tarvita). Jokaisesta huoneen oman pinnan osasta se katsoo suoraan ulospäin:

- ensimmäinen seinä, ikkuna, ovi, lattia, katto, pinnoite, verhoseinä tai palkki, johon se osuu, **rajaa** tätä osaa;
- heti tuon rakenteen takana joko **toinen huone** (lasketaan naapuriksi samassa lämpötilassa: ei häviötä), **ei mitään** (ulkona) tai, alimman tason lattian alla, **maaperä**;
- toisen huoneen avoin ovi lasketaan naapuriksi; osa, joka ei osu mihinkään (1.5 m sivusuunnassa tai alaspäin, 8 m ylöspäin), luetellaan huoneen alla ja jätetään pois.

Ikkunat ja ovet saavat koon IFC-tiedostosta (kokonaisleveys × korkeus) seinästä, jossa ne ovat. Napsauta taulukosta huonetta nähdäksesi jokaisen sitä rajaavan rakenteen pinta-alan, U-arvon ja sen, mistä U-arvo on peräisin.

## U-arvot

BimCraft käyttää kullekin rakenteelle seuraavassa järjestyksessä:

1. **IFC:n oma U-arvo** — `ThermalTransmittance` rakenteen yleisessä ominaisuusjoukossa (esimerkiksi `Pset_WallCommon`) tai sen tyypin vastaavassa. Useimmat suunnitteluohjelmat osaavat kirjoittaa sen.
2. **Sen materiaalikerrokset** — 1 ÷ (sisäpinnan lämpövastus + kunkin kerroksen paksuus ÷ sen lämmönjohtavuus λ + ulkopinnan lämpövastus), tavanomaisilla pintavastuksilla (0.13 ja 0.04 m²K/W seinille; 0.10 ylöspäin ja 0.17 alaspäin sisäpuolella). Lähtökohdaksi tyypillisiä lämmönjohtavuuksia (mineraalivilla 0.035, tiili 0.77, betoni 1.4…); kohdassa {{ui:Materiaalien lämmönjohtavuus}} kirjoita valmistajan arvo, ja kaikki näistä kerroksista lasketut U-arvot seuraavat sitä.
3. **Tyypillinen arvo** (seinät 0.3, katot 0.2, lattiat 0.25, ikkunat 1.4, ovet 1.6 W/m²K), merkitty sellaiseksi — kirjoita oma.

Huoneen tiedoissa kirjoitettu U-arvo tallentuu rakenteen yleiseen ominaisuusjoukkoon nimellä `ThermalTransmittance` (yksi vaihe; {{key:Mod+Z}} kumoaa sen). Jos useat rakenteet jakavat saman joukon (esimerkiksi yksi seinätyyppi), ne kaikki muuttuvat yhdessä, ja tilarivi kertoo, kuinka monta.

## Lämmitys

- **Lämpöhäviö** = Σ U × A × (sisä − ulko) kaikelle ulkoilmaan rajautuvalle + Σ U × A × (sisä − maa) maanvaraisille lattioille + 0.335 × ilmanvaihtokerrat tunnissa × huoneen tilavuus × (sisä − ulko). 0.335 Wh per m³ per kelvin on ilman tiheyden (1.2 kg/m³) ja ilman lämpökapasiteetin (1005 J/kgK) tulo.
- **Vuotuinen lämmitys** = (huoneen häviö astetta kohti ulkoilmaan rakenteiden ja ilman kautta sekä sen maahäviö skaalattuna samaan eroon) × **astepäivät** × 24 ÷ 1000, kWh:na. Kirjoita paikan astepäivät tai {{ui:Lue astepäivät CSV:stä…}} (yksi rivi päivää tai kuukautta kohti; kunkin rivin viimeinen luku lasketaan yhteen). Käytä astepäiviä lähteesi perustelämpötilalla: tuo perusta jo ottaa huomioon ihmisten, valaistuksen ja auringon ilmaisen lämmön.

## Jäähdytys

**Jäähdytyshuippu** = lämpö rakenteiden ja ilman kautta kesän mitoituslämpötilassa + ihmiset (lattia-ala henkilöä kohti × lämpö per henkilö) + valaistus ja laitteet per m² lattia-alaa + **aurinko**: kyseisen huoneen huippu kohdasta {{ui:Aurinko ikkunoista tiettynä päivänä}}. Laske aurinko ensin kuumana päivänä; siihen asti aurinko lasketaan nollaksi, ja osio kertoo sen. Osien huiput lasketaan yhteen, vaikka ne osuisivat eri tunneille, mikä yliarvioi hieman.

## Mitä se jättää pois

- ISO 52016-1 -menetelmän kuukausi- ja tuntilaskennat (maksullinen standardi), rakennuksen massaan varastoitunut lämpö, kylmäsillat, lämmitys- ja jäähdytysjärjestelmien suorituskyky sekä ilmastotiedostot.
- Vierekkäiset huoneet otetaan samaan lämpötilaan; lämmittämättömiä tiloja ei mallinneta.

Katso myös [Arvioi kunkin huoneen päivänvalo](topic:daylight-factor).
