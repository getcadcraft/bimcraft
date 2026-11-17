---
title: Avaa projektikimppu
summary: Projektikimppu on yksi zip-tiedosto, jossa ovat malli, sen näkymät, asettelut ja ominaisuusryhmät. Avaa se, näytä näkymä kerroksineen ja tasoineen, avaa asettelu ja katso ominaisuudet projektin omissa ryhmissä.
keywords: kimppu, projektikimppu, ccbundle, zip, näkymät, näkymäkartta, asettelut, asettelukirja, tasoyhdistelmä, ominaisuusryhmät, standardit, pln, mallipohja
from: b5b86e8f
---

## Mitä teet

Avaa **projektikimppu** (`.ccbundle.zip`) ja työskentele projektin kanssa niin kuin se on järjestetty: sen näkymät, asettelut ja ominaisuusryhmät mallin päällä.

Kimppu sisältää:

- mallin IFC-muodossa,
- asettelut PDF- ja DWG-muodossa,
- luettelon siitä, mitä IFC jättää pois: näkymät (kukin kerroksineen, tasoyhdistelmineen ja mittakaavoineen), asettelut ja niille sijoitetut piirustukset, ominaisuusmääritykset ryhmineen, luokitukset sekä standardit, kuten tasot, kynäsarjat, viivatyypit, täytöt, pinnat ja komposiitit.

Kimput kirjoittaa avoimen lähdekoodin skripti, joka toimii Archicadin sisällä ja pyytää luettelot Archicadilta itseltään. BimCraft ei lue `.pln`- tai `.tpl`-tiedostoja suoraan; katso [Avaa .pln- ja .pla-projektitiedostot](topic:pln-project-files).

## Tee kimppu

Skripti on esikatseluversio: sitä ei ole vielä kokeiltu jokaisella Archicad-versiolla. Hae se osoitteesta [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Tarvitset Archicad 24:n tai uudemman ja Python 3.8:n tai uudemman; muuta ei tarvitse asentaa.

1. Tallenna `archicad_bundle.py` kansioon, esimerkiksi `C:\cc-bundle`.
2. Avaa projekti Archicadissa ja tee julkaisusarja, jonka nimi on täsmälleen **CadCraft bundle**: 3D-näkymä IFC-muodossa, jokainen asettelu PDF-muodossa ja jokainen asettelu uudelleen DWG-muodossa, julkaistuna levylle yhteen tasaiseen kansioon.
3. Kun projekti on auki, aja `python archicad_bundle.py --probe --out .` kerran. Se vain lukee ja kirjoittaa tiedoston `probe.json`.
4. Aja `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (käytä valitsemaasi IFC-kääntäjää). Archicad julkaisee sarjan, ja skripti kirjoittaa tiedoston `<project>.ccbundle.zip`.

Jos julkaiseminen skriptin kautta epäonnistuu, julkaise sarja käsin ja aja `python archicad_bundle.py --out . --no-publish --files <kansio>\*.ifc <kansio>\*.pdf <kansio>\*.dwg`. Tietovaraston README kertoo kaikki vaihtoehdot. Jos jokin ei tule mukaan, avaa siellä ilmoitus ja liitä mukaan `probe.json`.

## Avaa kimppu

1. Napsauta {{ui:Valitse tiedosto}}, tai pudota `.ccbundle.zip` BimCraft-ikkunaan. Kansiossa, jonka avasit {{ui:Avaa kansio}}-toiminnolla, kimput ovat luetteloituina kohdassa **Projektikimput**; napsauta yhtä nimeltä.
2. Malli avautuu kuten mikä tahansa IFC, ja vasemmalle, tiedoston tietojen alle, ilmestyy **Projektikimppu**-osio.

Mitään ei lähetetä: kimppu luetaan tietokoneella yksi tiedosto kerrallaan, joten suurta mallia ei kopioida kahdesti.

## Näytä näkymä

**Näkymät**-kohdassa näkymät ryhmitellään projektin kansioiden mukaan. Napsauta näkymän nimeä:

- **Pohjakuva** näyttää vain sen kerroksen ylhäältä nähtynä.
- **Sen tasoyhdistelmä** piilottaa elementit tasoilta, jotka yhdistelmä piilottaa. Tilarivi kertoo, kuinka monta elementtiä se piilotti.
- **Sen mittakaava** näkyy nimen vieressä ja tilarivillä.
- **3D-näkymä** näyttää kaikki kerrokset.

Näytä kaikki uudelleen käyttämällä {{ui:Näytä kaikki}}-toimintoa valikossa {{ui:Näytä}} ja valitsemalla kaikki kerrokset.

:::note
BimCraft löytää tasot IFC-tiedoston tasomääritysten kautta. Jos IFC on vietty ilman niitä, tasoyhdistelmä ei piilota mitään ja tilarivi sanoo: 0 elementtiä piilotettu.
:::

## Avaa asettelu

**Asettelut**-kohdassa jokaisessa asettelussa näkyy sen numero, nimi, paperikoko ja sille sijoitetut näkymät.

- **PDF** tallentaa asettelun PDF-tiedoston kimpusta.
- **DWG** avaa asettelun piirustuksen 2D-näkymään. Palaa malliin napsauttamalla mitä tahansa näkymää.
- **Avaa sovelluksessa …** lähettää asettelun tiedoston sen työstävään sovellukseen uuteen välilehteen: PDF MarkupCraft-sovellukseen, DWG CadCraft-sovellukseen. Painike näkyy vain, kun tuo sovellus on auki BimCraft-ikkunan vieressä. Tiedosto luetaan kimpusta välilehden latautuessa, eikä mitään lähetetä.

Asettelu, jolla ei ole kumpaakaan, sanoo **Kimpussa ei ole tiedostoa**.

## Näe ominaisuudet projektin ryhmissä

Valitse elementti. **Ominaisuusryhmät** näyttää sen ominaisuudet projektin määrittelemien ryhmien alla. Ne yhdistetään ominaisuusjoukon ja nimen perusteella, jonka määritelmä antaa IFC:lle, muuten nimen perusteella. Loput pysyvät {{ui:Ominaisuudet}}-kohdassa kuten tavallisesti. **Ominaisuusmääritykset** luettelee jokaisen määrityksen ryhmineen, tyyppineen ja IFC-nimineen.

## Standardit ja huomautukset

- **Standardit** laskee kimpun tasot, tasoyhdistelmät, kynäsarjat, viivatyypit, täytöt, pinnat, komposiitit ja materiaalit.
- **Huomautukset** luettelee, mitä skripti ei saanut tältä Archicad-versiolta, kentät, joita BimCraft ei voinut lukea, ja tiedostot, jotka kimppu nimeää mutta ei sisällä.

## Vianetsintä

- **”… on zip-tiedosto, mutta ei projektikimppu.”** Zip-tiedostosta puuttuu `manifest.json`. Pura se ja avaa siinä oleva `.ifc`.
- **”… on uudempi projektikimppu kuin tämä BimCraft lukee.”** Päivitä BimCraft.
- **”… ei sisällä mallia, jonka sen manifesti nimeää.”** Zip-tiedosto on katkaistu tai muokattu. Tee kimppu uudelleen.
- **Näkymä näyttää kaikki kerrokset.** Sen kerrosta ei ole mallin IFC-tiedostossa (tilarivi kertoo tämän). Tarkista, että IFC-vienti sisälsi kyseisen kerroksen.

Katso myös [Työskentely kahden BIM-ohjelman välillä](topic:two-bim-programs) ja [Mitä BimCraft lukee kustakin muodosta](topic:file-formats).
