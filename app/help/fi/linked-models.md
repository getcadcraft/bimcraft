---
title: Linkitä muita malleja koordinointia varten
summary: Näytä toinen IFC-malli omasi rinnalla viittauksena (ei koskaan yhdistettynä), sijoita se jaettujen koordinaattien, karttakoordinaattien tai kahden pisteen avulla, tartu siihen piirtäessäsi ja lataa se uudelleen, kun sen tiedosto muuttuu.
keywords: linkki, linkitetty malli, viittaus, xref, koordinointi, federointi, rakenne, LVIS, konsultti, jaetut koordinaatit, maastomittaus, karttakoordinaatit, lataa uudelleen, poista lataus, asiakirjaviittaus, IfcDocumentReference
from: 3e0f1eab
---

## Mitä teet

Piirrä konsultin mallia (rakenne, talotekniikka, olemassa oleva rakennus) kopioimatta mitään omaan tiedostoosi.

**Linkitetty malli** näkyy 3D-näkymässä ja leikkautuu pohjakuvissasi, mutta sitä ei koskaan muuteta eikä tallenneta omaan malliisi. Mallisi säilyttää vain linkin: tiedoston nimen ja sen, mihin se sijoittuu.

## Linkitä malli

1. Klikkaa vasemman paneelin {{ui:Linkitetyt mallit}}-osiossa {{ui:Linkitä malli…}} ja valitse IFC-tiedosto. Se näkyy heti, ja sen rivillä lukee **Näytetään**.
2. Valitse kohdassa {{ui:Sijoitus}}, minne se sijoittuu:
   - **Jaetut koordinaatit** (oletus): sen koordinaatit ovat omiasi, kuten silloin, kun molemmat mallit on asetettu samasta origosta.
   - **Karttakoordinaatit**: molempien tiedostojen karttakoordinaatit asettavat ne kohdalleen. Molemmissa on oltava karttamuunnos; BimCraft kertoo, jos jollakin sellaista ei ole.
   - **Kahden pisteen kautta…**: klikkaa piste linkitetystä mallista ja sitten kohta omassa mallissasi, ja toinen pari perään. Linkkiä siirretään ja käännetään (pystyakselin ympäri), jotta se sopii.
3. Jokainen linkin ja sijoituksen muutos on yksi vaihe: {{key:Mod+Z}} kumoaa sen.

## Työskentely linkin kanssa

- Pohjakuvat näyttävät linkitetyn mallin leikattuna tason leikkauskorkeudelta ohuina viivoina, ja {{ui:Seinä}}-työkalu sekä muut piirtotyökalut tarttuvat sen kulmiin ja reunoihin.
- Valitse sen elementtejä 3D-näkymässä lukeaksesi niiden ominaisuudet. Linkitettyä mallia ei muokata, joten sen valintanappi kohdassa {{ui:Mallit}} on pois päältä.
- **Tiedosto muuttui?** Kun selain voi seurata tiedostoa (tiedosto, joka on avattu tiedostovalitsimella, tai Studiossa), BimCraft lataa linkin itse uudelleen muutaman sekunnin kuluttua siitä, kun tiedosto on tallennettu uudelleen, ja kertoo siitä. Muuten klikkaa {{ui:Lataa uudelleen}}.
- {{ui:Poista lataus}} piilottaa linkin ja vapauttaa muistin; linkki säilyy mallissasi. {{ui:Lataa…}} näyttää sen uudelleen. Valitset tiedoston itse, koska selain ei voi avata tiedostoa pelkällä nimellä.
- ×-painike poistaa linkin mallistasi.

## Mitä pitäisi näkyä

- IFC-tiedostossasi: IfcDocumentReference jokaiselle linkille (tiedoston nimi), liitettynä projektiin, ja sen sijainti projektin ominaisuusjoukossa CadCraft_Links. Kun avaat mallisi uudelleen, sen linkit on listattu tilassa **Ei ladattu**, kunnes lataat ne.

:::note
Törmäystarkistukset, vertailu ja haku voivat käyttää ladattua linkkiä kuten mitä tahansa avointa mallia: katso [Tarkastele useita IFC-malleja yhdessä](topic:several-models).
:::
