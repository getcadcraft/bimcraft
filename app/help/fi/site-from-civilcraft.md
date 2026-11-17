---
title: Naapurirakennukset ja tontti CivilCraftista
summary: Käytä CivilCraftin Osoite tontille -toiminnon löytämiä rakennuksia ja tonttia ehdotuksina ja lisää ne, jotka valitset.
keywords: tontti, osoite, kiinteistö, naapurit, ympäristö, civilcraft, ccsite, rakennukset, tontin ääriviiva, ehdotus
from: 3be9407b
---

## Mitä se tekee

CivilCraftissa Maastomalli › Lisää › Osoite tontille löytää avoimesta datasta osoitteen ympäriltä rakennukset, tontin, kaavoituksen, tulvavyöhykkeen ja maaperän. Sen ”Lähetä BimCraftiin ehdotuksina” -painike (tai ”Tallenna tontti tiedostona” ja avaa `.ccsite.json` tässä) tuo ne BimCraftiin. Mitään ei lisätä, ennen kuin sanot niin.

## Käyttö

1. Aloita tai avaa malli. Osoitepiste sijaitsee tasosi origossa.
2. Laatikko listaa jokaisen naapurirakennuksen ja tontin ruudulla. Poista valinta niistä, joita et halua.
3. Rakennukset, joiden korkeutta lähde ei antanut, käyttävät laatikon yläreunassa kirjoitettua korkeutta. Rakennus, joka antoi vain kerrosmäärän, lasketaan 3 m kerrokselta, ja laatikko kertoo sen.
4. Paina ”Lisää valitut”. Rakennukset muuttuvat seiniksi pohjapiirustustensa ympärille, yhtä korkeiksi kuin luetellaan, yhdellä kumoamisvaiheella. Tontista tulee tontin ääriviiva toisena kumoamisvaiheena.

Kaavoitus, tulvavyöhyke ja maaperä luetellaan vain tiedoksi; niitä ei piirretä.

## Mitä pitää tietää

- Ääriviivat ovat yhtä hyviä kuin avoin data: OpenStreetMap ja kuntien tonttitiedot eroavat paljon paikoittain. Tarkista tärkeät asiat mittauksella.
- Sijainnit ovat metreinä itään ja pohjoiseen osoitepisteestä tasaisella likiarvolla, hyvä muutaman metrin tarkkuus muutaman kilometrin sisällä.
- Tiedoilla on lähteidensä lisenssit (OpenStreetMap on ODbL); laatikko näyttää lähdemerkintärivin.
