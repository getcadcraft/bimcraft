---
title: Jakelut, revisiot ja piirustusten muutosloki
summary: Kirjaa jokainen jaettu arkkisarja, katso mitä muuttui siitä lähtien jokaisella arkilla ja elementillä, ja pidä työmaaohjeet, valmistuspiirustukset ja linkitetyt mallit siihen jakeluun, johon ne kuuluvat.
keywords: jakelu, jaettu sarja, toimitettu sarja, toimitus, revisio, revisiot, mitä muuttui, jakelun jälkeen, muutosloki, piirustusten muutosloki, piirustusrekisteri, saatekirje, työmaaohje, valmistuspiirustus, linkitetty malli, tarjouspyyntö, rakentaminen, tilannekuva, vertaa
from: 4c732832
---

## Mitä teet

Kirjaat jakelun: mitkä arkit lähtivät, mihin tarkoitukseen, minkä päivän, kukin omassa revisiossaan. Myöhemmin kysyt, mitä muuttui jakelun jälkeen. Pidät työmaaohjeet ja palautuneet valmistuspiirustukset kirjattuina jakeluun.

## Vaiheet

1. Avaa vasemmassa paneelissa **Jakelut ja revisiot**.
2. Valitse **Kirjaa jakelu**. Revisio ehdotetaan (A, sitten B; numeroitu revisio, kuten P1, kasvaa). Valitse jakelun tarkoitus, vastaanottaja, päivämäärä ja arkit. Kun projektivaihe on asetettu, tarkoitus seuraa sitä. Kun lupapaketissa on luettelo tukeavista asiakirjoista, luettelon arkit valitaan puolestasi.
3. Jätä **Tallenna myös mallin jaettu kopio** valituksi, jotta malli säilyy täsmälleen sellaisena kuin se lähti. Kopio ladataan; sen nimi, koko ja SHA-256 tallennetaan jakeluun.
4. Valitse **Kirjaa tämä jakelu**. Arkki, joka muuttui edellisen jakelun jälkeen, saa uuden revision. Arkki, joka ei muuttunut, säilyttää revisionsa. Jokaisen arkin piirustusotsikko näyttää sen revision.
5. Nähdäksesi, mitä muuttui, valitse jakelun vierestä **Muutokset siitä lähtien**. Jokainen arkki näyttää joko Sama tai Muuttunut, ja sillä lisätyt, muutetut ja poistetut elementit. Napsauta lukumäärää valitaksesi nämä elementit.
6. Valitse **Lisää tietue** työmaaohjeelle, valmistuspiirustukselle, merkintäsarjalle, linkitetylle mallille tai muistiinpanolle. Valitse jakelu, jota se koskee. Valitsemasi tiedosto kirjataan nimensä, kokonsa ja SHA-256:n perusteella; tiedosto pysyy paikallaan.
7. **Piirustusten muutosloki** näyttää yhden rivin jokaiselle arkille ja yhden sarakkeen jokaiselle jakelulle. **Lataa muutosloki (CSV)** tallentaa sen jakeluineen ja tietueineen.
8. **Tallenna jakeluhistoria** kirjoittaa `.issues.json`-tiedoston. MarkupCraft, TakeoffCraft ja DetailCraft lukevat sen kohdasta **Lue jakeluhistoria**.

## Hyödyllistä tietoa

- Historia säilytetään IFC-tiedoston sisällä (ominaisuusjoukko `CadCraft_Issues` projektissa). Muut ohjelmat jättävät sen huomiotta.
- Arkki lasketaan muuttuneeksi, kun sen oma asetus muuttui tai kun jokin elementti, jonka se näyttää, muuttui: pohjakuva näyttää kerroksensa, julkisivu tai leikkaus koko mallin ja ovi- tai ikkunaluettelo sen ovet tai ikkunat.
- Elementti lasketaan muuttuneeksi, kun ominaisuus, sen sijainti, koko tai muoto muuttui.
- Nähdäksesi tarkalleen, mikä ominaisuus muuttui, avaa jaetun mallin tallennettu kopio ja käytä **Vertaa versioita** -toimintoa.
- Jakelun poistaminen säilyttää sen tietueet ilman jakelua. Jokainen vaihe on yksi {{ui:Kumoa}}.
- Malli, jossa on yli 60 000 elementtiä, ei säilytä tietoa jokaisesta elementistä jakelun kanssa. Arkit vertaillaan silti.

## Ei vielä toteutettu

- Arkkeja ei tallenneta PDF-tiedostoina jakelun kanssa.
- Revisiopilveä ei piirretä BimCraftin omille arkeille. Kirjaa pilvet MarkupCraftissa jakelua vastaan.
