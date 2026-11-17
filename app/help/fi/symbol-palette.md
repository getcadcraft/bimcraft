---
title: Symbolipaletti
summary: Etsi sähkö- ja LVI-symbolit nimen tai kuvan perusteella, merkitse käyttämäsi suosikeiksi ja sijoita ne pohjapiirrokseen yhdellä napsautuksella.
keywords: symbolipaletti, symbolipalkin painike, seinään kiinnittyminen, symbolit, sähkösymbolit, LVI-symbolit, LVI-pohjapiirros, WC, wc-istuin, käsienpesuallas, allas, kylpyamme, suihku, lattiakaivo, puhdistusaukko, letkuhana, vedenlämmitin, venttiili, porttiventtiili, kylmä vesi, lämmin vesi, jätevesi, tuuletus, viivatyyli, suosikit, haku
from: 67f20bc0
---

## Mitä teet

Avaa yksi paneeli, joka listaa sähkösymbolit ja LVI-pohjapiirrossymbolit kuvineen ja nimineen, löydä haluamasi ja sijoita se pohjapiirrokseen. Mitään ei tarvita internetistä: symbolit tulevat sovelluksen mukana.

## Avaa ja sijoita symboli

1. Avaa malli ja valitse {{ui:Koontiversio}} › {{ui:Symbolipaletti}} (kirjoitettu komento: SYMBOLS). Sama painike on Piirrä-palkin Työkalut-valikossa ja työkalurivin Kirjasto-ryhmässä nimellä **Symbolit**.
2. Valitse joukko: **Sähkö** tai **LVI**, tai **Kaikki joukot**. Kirjoita hakukenttään, jotta luettelo kapenee. Voit hakea nimellä tai lyhenteellä (WC, CW, HB).
3. Napsauta symbolia. Pohjapiirros on valmis sijoittamaan sen.
   - **Sähkö**-symboli käynnistää Sähkö-työkalun valitulla laitteella, joten kaikki [Sähköpohjapiirros](topic:electrical-plan)-sivulla kerrottu pätee: napsauta pohjapiirrosta, yksi kumoamisvaihe.
   - **LVI**-symboli käynnistää pohjapiirrossymbolityökalun. Napsauta pohjapiirrosta. Seinällä oleva laite (WC-istuin, käsienpesuallas, kylpyamme, allas, letkuhana) kiinnittyy lähimpään seinäpintaan selkä seinää vasten. Lattiakaivot, venttiilit, vedenlämmitin ja viivatyylit menevät sinne, minne napsautat.
4. Paina {{key:R}} kääntääksesi symbolia 90 astetta ({{key:Shift}}+{{key:R}} kääntää sen toiseen suuntaan), tai kirjoita kulma **Kierto**-kenttään asetuspalkissa. Lopeta painamalla {{key:Esc}}.

Seinään kiinnittynyt laite tai letkuhana muistaa seinänsä: kun seinä siirretään, symboli siirtyy sen mukana (sama pinta, sama etäisyys seinää pitkin) samassa kumoamisvaiheessa. Jos poistat seinän, symboli jää paikalleen ja Ongelmat-luettelo kertoo ”menetti seinänsä”; siirrä symboli tai poista se. Seinistä erillään sijoitetut symbolit eivät ole kiinni missään.

Jokainen sijoittamasi symboli on yksi kumoamisvaihe. Sijoitettu symboli on IFC-tiedostossa pohjapiirroksen merkintä omalla tunnisteellaan (WC1, WC2 ja niin edelleen). Valitse se, jos haluat muuttaa sen tunnistetta tai kiertoa **Ominaisuudet**-kohdassa, tai paina {{key:Delete}}.

## Mitä LVI-joukossa on

Laitteet (WC-istuin, pisuaari, käsienpesuallas, kylpyamme, suihku, keittiöallas, yksi allas), lattiakaivo, lattian ja seinän puhdistusaukot, letkuhana, seinähydrantti, vedenlämmitin, venttiilit (porttiventtiili, kuristusventtiili, pallo-, takaisku-, läppä- ja paineenalennusventtiili) sekä viivatyylit lyhenteineen: kylmä vesi (CW), lämmin vesi (HW), lämminvesikierto (HWR), jätevesi (W), tuuletus (V), hulevesi (SD) ja kaasu (G). Piirrokset skaalautuvat pohjapiirroksen mukana, joten ne säilyttävät kokonsa tulostetulla arkilla. Viivatyyli on lyhyt pätkä, jolla tyyli näytetään pohjapiirroksessa; piirrä varsinaiset putkilinjat putkityökaluilla.

:::note
Nämä ovat yleisiä LVI-pohjapiirroksen käytäntöjä, jotka on piirretty meidän toimestamme. Niitä ei ole sertifioitu standardien ISO 4067-1 tai ASME Y32.4 mukaan. Ne on verrattu julkisiin piirustusselitteisiin ja koulutusmateriaaleihin (luettelo on joukon lähdemerkinnöissä, jotka kertovat, missä vastaamme niitä ja missä eroamme). Ne eivät ole kopioita mistään tuotteesta, ja ne ovat vapaasti käytettävissä (Apache-2.0). Piirustusjoukot vaihtelevat, joten tarkista oman projektisi selite. Nämä ovat pohjapiirroksen symboleja, eivät LVI-suunnitelma: ne eivät mitoita putkia eivätkä tarkista määräyksiä.
:::

## Suosikit ja näppäimistö

- Napsauta symbolin tähteä (tai paina symbolin kohdalla {{key:F}}) pitääksesi sen suosikkina. Suosikit listataan ensimmäisinä ja pysyvät tässä selaimessa. **Vain suosikit** näyttää vain ne.
- {{key:Down}} hakukentästä siirtää kohteisiin. Nuolinäppäimet, {{key:Home}} ja {{key:End}} liikkuvat niiden välillä, {{key:Enter}} valitsee kohdistetun symbolin ja {{key:Esc}} sulkee paletin.
- Puhelimessa paletti on arkki ruudun alareunassa. Se väistyy, kun valitset symbolin, jotta näet pohjapiirroksen. Avaa se uudelleen Koontiversio-valikosta tai asetuspalkin **Paletti**-painikkeesta.

:::tip
Jos tiedosto käyttää symbolijoukkoa, jota tämä versio ei sisällä, pohjapiirros näyttää symbolin paikalla laatikon ja Ongelmat-luettelo listaa sen.
:::

## Linkitä sijoitettu elementti symboliin

Kirjaston valaisin on 3D-elementti, mutta sähkökaaviossa se näkyy symbolinaan. Sijoitat sen **kerran** ja linkität sen:

1. Valitse Koontiversio › **Symbolilinkki** (tai kirjoita SYMBOLLINK). Vasempaan paneeliin avautuu Symbolilinkki-osio.
2. Valitse sijoitetut elementit pohjapiirroksesta tai 3D-näkymästä. Osio kertoo, kuinka monta on valittu ja mihin ne on linkitetty.
3. Valitse **Symboli** (mistä tahansa symbolijoukosta: Sähkö, LVI) ja valitse **Linkitä**.

Elementti on edelleen yksi elementti, ja jokainen luettelo laskee sen kerran:

- **3D** näyttää aina sen rungon.
- Pohjapiirros näyttää sen pohjapiirrosmuodon kuten ennenkin.
- Pohjapiirros, jonka **Tämä näkymä näyttää linkitetyt elementit** -asetus on **Niiden symboli (palvelujen asettelu)**, näyttää symbolin paikallaan. Symbolin napsauttaminen valitsee elementin. Valinta säilyy kyseiselle näkymälle (tason pohjapiirrokselle, sen kattosuunnitelmalle tai huomautukselle) tiedostossa.

**Kierrä symbolia 90°** kääntää symbolin elementtiään vastaan. **Poista linkki** poistaa linkin, mutta elementti jää. **Linkitetyt symbolit** -luettelo listaa jokaisen linkitetyn elementin kerran sen kerroksen ja huoneen kanssa, jossa se on.

Ei vielä toteutettu: näkymän valinta arkilla on sen tason pohjapiirroksen valinta, jota arkki näyttää. Sähkö-työkalulla sijoitetut laitteet ovat symboleja jokaisessa pohjapiirroksessa kuten ennenkin.
