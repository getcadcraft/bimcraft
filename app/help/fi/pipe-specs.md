---
title: Putkimääritykset, venttiilit, pellit ja valmistajien perheet
summary: Luo omat putkimääritykset (kokotaulukot materiaalin, liitoksen ja karheuden kanssa), jotka säilytetään mallitiedostossa; sijoita venttiilit, suodatin ja pellit linjoille; ja tuo valmistajan venttiili- tai laitemalli perheenä liitäntäportteineen.
keywords: putkimääritys, putkimääritykset, putkiston määritys, putkiluokka, oma putki, kokotaulukko, tuubi, hygieeninen tuubi, ruostumaton, schedule, ulkohalkaisija, seinämänpaksuus, sisähalkaisija, karheus, paineluokka, csv, json, tuonti, vienti, taulukkolaskenta, standardi, bpe, din, en 10357, en 10255, venttiili, venttiilit, läppäventtiili, tasapainotusventtiili, säätöventtiili, suodatin, pelti, tilavuussäätöpelti, palopelti, oem, valmistaja, perhe, perheet, portit, liitäntä, step, obj, gltf, ifc, patteri, konvektori, paneelilämmitin, ilmanvaihtokone, diffuusori, ritilä
from: bc2f7c4e
---

## Mitä teet

Piirrä putkia omassa määrityksessäsi sisäänrakennettujen teräs-, kupari- ja muovitaulukoiden sijaan, sijoita venttiilejä ja peltejä linjoille, ja aseta valmistajan malli portteineen, joihin putket liittyvät.

:::note
Piirustus- ja koordinointiapu. Putkimääritys sisältää numerot, jotka kirjoitat tai tuot: tarkista jokainen taulukko projektisi standardia vasten. Sisäänrakennetut venttiilit, suodattimet ja pellit ovat kaaviomaisia muotoja, jotka on mitoitettu linjan mukaan, eivät valmistajan tai venttiilistandardin mittoja.
:::

## Luo putkimääritys

1. Ota {{ui:Draw}} käyttöön, avaa {{ui:Build}} ja valitse {{ui:Pipe specs}}. Sama painike on Putki-työkalun palkissa.
2. Valitse {{ui:New}}, tai aloita tiedostosta, leikepöydältä liitetystä taulukosta tai aloitusmäärityksestä (alla).
3. Kirjoita sen nimi, standardi tai viite, jota se noudattaa, materiaali sekä pää- tai liitostyyppi.
4. Kirjoita yksi rivi kutakin kokoa kohti: kokon nimi, ulkohalkaisija ja seinämä millimetreinä. Kirjoita sisähalkaisija seinämän sijaan, jos sinulla on se: toinen täydentyy. DN, paineluokka ja paino ovat valinnaisia.
5. Valinnaista: karheus millimetreinä (painehäviölaskenta käyttää sitä), eristyksen paksuus, jolla uudet linjat alkavat, kyynärpään säde ulkohalkaisijan kertoimena, onko määrityksessä T-haaroja ja supistimia, sekä oma väri 3D-näkymässä.
6. Valitse ne palvelut, joiden uusien linjojen tulisi alkaa tästä määrityksestä, esimerkiksi jäähdytetty vesi.
7. Valitse {{ui:Save in the model}}.

Määritykset tallennetaan mallitiedostoon. Jokainen, joka avaa tiedoston, saa ne, ja {{ui:Undo}} kumoaa muutoksen.

Määritystä tai sen yhtä kokoa ei voi poistaa, kun linja on piirretty sen mukaan. Kokon lukujen muuttaminen piirtää linjat uudelleen tuossa koossa.

## Käytä määritystä toisessa mallissa

- {{ui:Export .json}} tallentaa valitun määrityksen pienenä tiedostona; {{ui:Export all}} tallentaa mallin kaikki määritykset. {{ui:Import a file}} lukee ne takaisin.
- {{ui:Export .csv}} tallentaa kokotaulukon taulukkolaskentaa varten. {{ui:Import a file}} lukee myös `.csv`-tiedoston.
- {{ui:Paste rows}} ottaa taulukkolaskennasta kopioidun taulukon. Ensimmäinen rivi nimeää sarakkeet: `Size`, `OD` ja `Wall` (tai `ID`), ja valinnaisesti `DN`, `Pressure` ja `Weight`. Yksi rivi kutakin kokoa kohti. Luvut ovat millimetrejä, ellet valitse tuumia tai solu kirjoita omaa yksikköään (`0.065 in`).

## Aloitusmääritykset

{{ui:Lisää aloitusmääritys}} lisää mallisi yhden näistä kopiona, jota voit muokata:

| Aloitusmääritys | Koot |
|---|---|
| ASME BPE -tuubi | 1/4" – 6" |
| EN 10357 -sarja A -tuubi (DIN 11850, rivi 2) | DN10 – DN200 |
| EN 10255 teräsputki, keskisarja | DN15 – DN150 |
| EN 10255 teräsputki, raskas sarja | DN15 – DN125 |

Nämä taulukot ovat ulko- ja seinämämittoja, jotka kaksi tai useampi julkaistu toimittajan sivu ilmoittaa standardille ja joista ne ovat yhtä mieltä. Ne eivät ole peräisin itse standardeista. Koot, joita vain yksi sivu antoi, on jätetty pois. Jokaisen aloitusmäärityksen lähdesivut näkyvät, ja se on merkitty ”tarkista projektisi standardia vasten”. Karheutta, paineluokkaa tai painoa ei anneta.

## Piirrä linja määrityksessä

1. Valitse {{ui:Pipe}}. Palvelu, jonka valitsit määrityksessä, alkaa siinä. Muille linjoille valitse määritys materiaalilistasta: määritykset ovat sisäänrakennettujen materiaalien jälkeen muodossa ”Määritys: nimi”.
2. Kokolista sisältää nyt vain tämän määrityksen koot. Valitse yksi ja piirrä linja.

Jos haluat siirtää linjan määritykseen myöhemmin, valitse se ja vaihda **Materiaali** kohdassa Ominaisuudet. Sen koosta tulee määrityksen lähin koko ulkohalkaisijan mukaan.

IFC-tiedostossa putkella on määrityksen nimi, standardi, materiaali, liitos ja mitat (`CadCraft_PipeSpec` ja `Pset_PipeSegmentTypeCommon`, putkella ja sen tyypillä).

Mitoitus- ja painehäviölaskelmat lukevat määrityksen sisähalkaisijaa. Kun määrityksessä on karheus, linjan kitka lasketaan sen avulla (Darcy-Weisbach); ilman sitä käytetään laskennan tavanomaista oletusarvoa.

## Venttiilit, suodatin ja pellit

1. Valitse {{ui:Valve}} ja valitse laji palkista: sulkuventtiili, palloventtiili, läppäventtiili, kuristusventtiili, takaiskuventtiili, tasapainotusventtiili tai säätöventtiili, tai suodatin putkille; tilavuussäätöpelti tai palopelti kanaville.
2. Napsauta linjaa, johon se menee. Linja katkaistaan sen ympäriltä, ja molemmat puolet pysyvät yhdistettyinä. Venttiili saa linjan koon ja liikkuu linjan mukana.

Linjan Ominaisuudet luettelevat jokaisen; {{ui:Remove}} poistaa sen, ja linja yhdistyy jälleen.

Painehäviölaskelma huomioi liitoshäviön vain sulku-, pallo-, kuristus- ja takaiskuventtiileille. Muut lajit, pellit ja valmistajien perheet eivät lisää häviötä siihen: huomioi ne omassa tarkistuksessasi. Ne lasketaan **Liitososat ja venttiilit** -luetteloon ja määrälaskentaan, ja ne kirjoitetaan IFC-tiedostoon venttiileinä, suodattimena (suodatin) ja peltinä, joissa on kaksi liitettyä porttia.

## Valmistajan malli perheenä

1. Avaa {{ui:Build}} ja valitse {{ui:Families}}, sitten {{ui:Import a model}}. Luetaan IFC-, STEP-, OBJ-, STL-, glTF- ja kirjaston kohde -tiedostot. OBJ- ja STL-tiedostoille aseta ensin tiedoston yksiköt ja ylöspäin osoittava akseli.
2. Portit-ikkunassa kirjoita nimi, valmistaja ja mallinumero.
3. Valitse, menekö malli **Linjalle** (venttiili, suodatin tai pelti) vai onko se **Laite**, ja mitä se kirjoitetaan.
4. Anna sille portit. Kullakin on nimi, putki tai kanava, palvelu, koko millimetreinä (putken ulkohalkaisija), määrityksesi mukainen nimellinen koko, päätetyyppi, sijainti ja suunta, johon se osoittaa. {{ui:Pinnalla}} asettaa portin mallin laatikon pinnan keskelle. Pieni päänäkymä näyttää portit.
5. Valitse {{ui:Save the family in the model}}.

Linjalle menevä perhe tarvitsee tasan kaksi porttia, jotka osoittavat poispäin toisistaan samalla suoralla. Valitse se Venttiili-työkalun luettelosta ja napsauta linjaa: se sijoitetaan omalla pituudellaan, ja putket liittyvät sen portteihin.

Perhettä ei koskaan venytetä. Jos sen portit eivät vastaa linjan kokoa, siitä kerrotaan sijoitettaessa, ja {{ui:Check connections}} luettelee sen.

Laiteperhe sijoitetaan {{ui:Equipment}}-työkalulla, lajina **Valmistajan perhe**. Putket ja kanavat tarttuvat sen portteihin.

{{ui:Download as a Library item}} tallentaa perheen portteineen tiedostoksi, jonka voit lähettää kirjastoon.

## Patterit ja konvektorit

{{ui:Equipment}}-valikossa on myös **Patteri** ja **Konvektori / paneelilämmitin**: yleisiä runkoja, joissa on menoliitäntä ja paluuliitäntä lämmitysvedelle. Katso [MEP-laitteet portteineen](topic:mep-equipment).
