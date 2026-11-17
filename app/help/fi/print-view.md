---
title: Tarkista piirustus tulostusnäkymässä
summary: Vaihda DWG tai DXF tulostusnäkymään nähdäksesi sen mustana valkoisella viivanpaksuuksineen ja ilman tasoja, jotka eivät koskaan tulostu.
keywords: tulostus, plottaus, esikatselu, plotin esikatselu, viivanpaksuus, mustavalkoinen, musta ja valkoinen, defpoints, ei plottausta
from: 1a59c23e
---

## Mitä teet

Katso, miltä arkki näyttää paperilla ennen tulostusta ohjelmasta, joka sen teki: mustana valkoisella, viivanpaksuudet todellisessa leveydessään ja ilman tasoja, jotka on asetettu olemaan tulostumatta.

## Vaiheet

1. Avaa DWG- tai DXF-piirustus.
2. Napsauta arkkivälilehteä piirustuksen yläpuolella.
3. Napsauta {{ui:Tulostusnäkymä}} välilehtien lopussa tai paina {{key:P}}.
4. Zoomaa yksityiskohtaan verrataksesi raskaita ja kevyitä viivoja.
5. Napsauta {{ui:Tulostusnäkymä}} uudelleen tai paina {{key:P}} palataksesi normaaleihin väreihin.

## Mitä pitäisi näkyä

- Valkoinen paperi harmaalla pöydällä, jokainen viiva ja teksti mustana teemasta riippumatta.
- Viivanpaksuudet: arkilla jokainen paksuus piirretään todellisessa leveydessään paperilla, joten 0.5 mm:n viiva on kaksi kertaa niin paksu kuin 0.25 mm:n viiva missä tahansa zoomauksessa. Viiva ei koskaan piirry ohuemmin kuin sen näyttöpaksuus.
- Tasot, jotka on asetettu olemaan tulostumatta, ja DEFPOINTS-taso ovat piilossa.
- {{ui:Tulostusnäkymä}}-painike pysyy painettuna. Tulostusnäkymä pysyy päällä, kun vaihdat arkkia tai avaat toisen piirustuksen, kunnes kytket sen pois.

{{ui:Malli}}-tilassa tulostusnäkymä käyttää vain näyttöpaksuuksia (ohuet viivat yhden pikselin, paksummat hieman paksumpina), koska mallitilalla ei ole paperikokoa.

## Yleisiä virheitä

- **Odotetaan tulostuvan.** Tulostusnäkymä on esikatselu. Tulostus ja PDF-vienti eivät ole vielä käytössä BimCraftissa; tulosta piirustus ohjelmasta, joka sen teki.
- **Odotetaan kynäkarttoja.** Kynätaulukoita ja plottauksen tyylien värejä ei lueta. Kaikki on tavallista mustaa.
- **P-näppäin kirjoittaessa.** {{key:F}} ja {{key:P}} eivät tee mitään, kun kirjoitat kenttään tai kun laitelistaus näkyy.
