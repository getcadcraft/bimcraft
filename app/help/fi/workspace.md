---
title: BimCraftin näyttö
summary: Kierros jokaiseen palkkiin, paneeliin ja painikkeeseen näytön nimellä sekä siihen, miten näyttö muuttuu eri tiedostotyypeillä.
keywords: näyttö, asettelu, paneelit, työkalurivi, käyttöliittymä, kierros, ominaisuudet-paneeli, selain, sovelluspalkki
from: 2eb01ec2
---

BimCraftin näytön yläreunassa on palkki ja sen alla kolme aluetta: vasemmalla paneeli, keskellä esitysalue ja oikealla {{ui:Ominaisuudet}}-paneeli. Se, mitä kussakin alueella näkyy, riippuu avaamastasi kohteesta: IFC-mallista, projekti- tai perhetiedostosta, piirustuksesta tai kansiosta.

## Sovelluspalkki

Ylhäällä oleva ohut palkki kuuluu CadCraft-sivustolle, ei BimCraftille itselleen. Vasemmalta oikealle:

- CadCraft-tunnus: vie CadCraftin etusivulle.
- Sovelluksen nimi ja versiovalikko. Henkilökunnan versiossa se näyttää, mitä koontiversiota ajat, ja antaa vaihtaa julkaistuun versioon.
- {{ui:Tietoja: BimCraft}}: sovelluksen sivu sivustolla.
- {{ui:Asetukset}}: BimCraftin omat asetukset ja kaikille sovelluksille yhteiset. Katso [BimCraftin asetukset](topic:settings).
- {{ui:Koko näyttö}}: vaihtaa näyttötilaa. Katso alla kohta [Näyttötilat](topic:workspace#screen-modes).
- {{ui:Paperi}} ja {{ui:Malli}}: vaalea ja tumma teema. 3D-näkymä ja 2D-piirustukset seuraavat valitsemaasi teemaa.

## Vasen paneeli

Vasen paneeli alkaa aina osiolla **Avaa tiedosto tai kansio**:

- Pudotusalue, {{ui:Valitse tiedosto tai pudota tiedosto tai kansio tähän}}. Napsauta sitä valitaksesi yhden tiedoston tai pudota siihen (tai mihin tahansa sivulla) tiedosto tai kansio.
- {{ui:Avaa kansio}}: valitse koko projektikansio. Katso [Avaa koko projektikansio](topic:open-project-folder).
- {{ui:Viimeisimmät kansiot}}: näkyy Chromessa ja Edgessä, kun olet avannut kansion kansiovalitsimella tai pudottamalla sen. Napsauta {{ui:Avaa uudelleen}} ja kansion nimeä avataksesi sen uudelleen tai pientä × unohtaaksesi sen.

Sen alla osioita ilmestyy tilanteen mukaan:

| Osio | Milloin näkyy | Mitä siinä on |
|---|---|---|
| {{ui:Muutokset}} | IFC-malli on auki | Tallentamattomat muokkauksesi, uusin ensin, sekä {{ui:Kumoa}} ja {{ui:Tallenna IFC-tiedostona}} |
| {{ui:Tiedosto}} | Malli tai tiedostokortti on auki | Tietoja tiedostosta: koko, skeema tai julkaisu, projekti, tekijä, rakennusosien määrä |
| {{ui:Piirustus}} | DWG tai DXF on auki | Muoto, yksiköt, kohteiden ja tasojen määrät, arkit, linkitetyt piirustukset, laitteet |
| {{ui:Kansio}} | Kansio on auki | Tiedostojen ja mallien määrät, koko, löydetyt ongelmat |
| {{ui:Takaisin kansioon}} | Avasit tiedoston kansiosta | Palaa kansioraporttiin |
| {{ui:Tasot}} | Piirustus on auki | Valintaruutu jokaiselle tasolle sekä {{ui:Kaikki päällä}} ja {{ui:Kaikki pois}} |
| {{ui:Kerrokset}} | IFC-malli on auki | Valintaruutu jokaiselle kerrokselle, ylin kerros ensin |
| {{ui:Rakennusosat}} | IFC-malli on auki | Kuinka monta kutakin lajia olevaa rakennusosaa mallissa on (30 yleisintä) |

## Esitysalue

Näytön keskellä näkyy avattu tiedosto.

- **Tyhjä**: "Avaa rakennusmalli." sekä {{ui:Valitse tiedosto}} ja {{ui:Avaa kansio}} ja lyhyt kuvaus kustakin muodosta.
- **IFC-malli**: 3D-näkymä, jonka yläreunassa on työkalurivi nimetyissä ryhmissä kuten CadCraft-piirto-ohjelmassa, kunkin työkalun kuvake nimensä yläpuolella: {{ui:Näkymä}} ({{ui:Sovita}}, {{ui:Ylhäältä}}, {{ui:Edestä}}, {{ui:Sivu}}, {{ui:Särmät}}, {{ui:Tilat}}); {{ui:Muokkaa}} ({{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}} ja {{ui:Lisää}}, katso [Kopioi, liitä ja monista kirjaston kohteita](topic:copy-paste)); {{ui:Malli}} ({{ui:Yksiköt}} ja {{ui:Piirrä}}); {{ui:Kirjasto}} ({{ui:Kirjasto}}, {{ui:Laitteet}}, {{ui:Päivitykset}}, {{ui:Tekijätiedot}}); {{ui:Tarkastus}} ({{ui:Näytä}}, {{ui:Leikkaus}}, {{ui:Kävely}}, {{ui:Mittaa}}; katso [Leikkaa IFC-malli leikkaustasolla](topic:section-plane)); ja {{ui:Tuloste}} (renderöinti, reaaliaikainen näkymä, VR, viennit, maalaus ja tallennetut näkymät). Kun {{ui:Piirrä}} on päällä, sen alla oleva Piirrä-palkki näyttää samanlaiselta: {{ui:Näkymä}} (taso ja pohjakuvan laji), {{ui:Piirrä}}, {{ui:Muokkaa}} ja {{ui:Kirjasto}}. Näkymäkuutio on oikeassa alakulmassa. Katso [Avaa IFC-malli ja katsele ympärillesi 3D:nä](topic:open-ifc-model). Kohdassa {{ui:Asetukset}}, {{ui:Yleiset}} valitaan, näytetäänkö näissä painikkeissa kuvakkeet, nimet vai molemmat, ja näytetäänkö ryhmien nimet; napsauta työkaluriviä hiiren oikealla painikkeella järjestääksesi sen työkalut ja ryhmät. Matalassa ikkunassa työkalurivi pudottaa nimet kuvakkeiden alta.
- **Projekti- tai perhetiedosto**: tiedostokortti, jossa on esikatselukuva, projektin tiedot ja linkitetyt tiedostot. Katso [Lue projekti- tai perhetiedosto](topic:read-rvt-file).
- **DWG tai DXF**: välilehtirivi ({{ui:Malli}}, sitten yksi jokaiselle arkille, sitten {{ui:Laitteet}}, kun piirustuksessa on merkittyjä laitteita, {{ui:3D}}, {{ui:Sovita}} ja {{ui:Tulostusnäkymä}}), piirustus ja reaaliaikaiset X- ja Y-koordinaatit nurkassa. Katso [Katsele DWG- tai DXF-piirustusta](topic:view-dwg) ja [Katso DWG- tai DXF-piirustus 3D:nä](topic:dwg-in-3d).
- **Kansio**: kansioraportti, jossa on {{ui:Aloita tästä}}-ruutu sekä taulukot malleista, linkeistä, IFC-malleista ja piirustuksista. Katso [Avaa koko projektikansio](topic:open-project-folder).

Esitysalueen alareunan **tilarivi** kertoo, mitä BimCraft tekee ("Luetaan mallia…", "Rakennetaan geometriaa: 1200 / 5400 rakennusosaa") ja mikä meni pieleen, punaisella, kun jokin epäonnistuu. Onnistumisviestit häipyvät muutaman sekunnin kuluttua.

## Ominaisuudet-paneeli

Oikea paneeli näyttää:

- IFC-mallille: napsauttamasi rakennusosan nimen, tyypin, tunnisteen, GlobalId:n ja kaikki ominaisuusjoukot. Muutettavissa olevat arvot näyttävät painikkeilta. Katso [Ominaisuudet-paneelin kentät](topic:properties-panel).
- Piirustukselle: miten liikut, piirustuksen linkitetyt piirustukset ja kuvat sekä se, löytyikö kukin, ja luettelon asioista, jotka ovat **Ei vielä piirretty**.
- Tiedostokortille tai kansiolle: lyhyen huomautuksen siitä, mitä avata seuraavaksi.

## Pienellä näytöllä

Kun ikkuna on kapeampi kuin kannettavan näyttö, BimCraft pinoaa alueensa: esitysalue ylös ja paneelit sen alle. Vieritä sivua päästäksesi paneeleihin. Puhelimessa ne muodostavat yhden sarakkeen, tabletilla kaksi.

## Näyttötilat

Sovelluspalkin {{ui:Koko näyttö}} -painike tai {{key:Ctrl+Shift+F}} kaikilla alustoilla vaihtaa kolmen tilan välillä:

1. Normaali.
2. Koko näyttö, palkit yhä näkyvissä.
3. Koko näyttö niin, että sovelluspalkki on piilotettu. Vie osoitin yläreunaan tai napauta siellä, niin palkki tulee takaisin.

Palaa normaaliin painamalla {{key:Esc}}. Selaimissa, joissa ei ole koko näytön tukea (kuten iPhonessa), vaihdetaan vain normaalin ja piilotettujen palkkien välillä.

## Liittyvää

- [Näppäimet ja hiiri](topic:keyboard)
- [Tiedostot, jotka BimCraft avaa ja tallentaa](topic:files)
