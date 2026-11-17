---
title: Vertaa skannausta malliin ja 4D-aikatauluun
summary: Arvioi jokainen mallin kohde suhteessa avoimeen pistepilveen (rakennettu, osittain, puuttuu, ei tavoitettu), näe rakennettu prosentti, väritä malli sen mukaan ja kun 4D-aikataulu on ladattu, listaa, mikä on jäljessä tai edellä 4D-päivänä.
keywords: skannaus, pistepilvi, edistyminen, valmiusaste, rakennettu, puuttuu, aikataulusta jäljessä, aikataulun edellä, 4D, työmaan edistyminen, poikkeama, toteutunut, laserskannaus, drooni, vertaa
from: 6fdc9003
---

Avaa IFC, avaa pistepilvi sen viereen (katso [Pistepilvet](topic:point-clouds)) ja aseta se mallin päälle. Osio {{ui:Vertaa skannausta malliin}} ilmestyy oikeaan paneeliin, kun pistepilvi on auki.

## Mitä se tekee

Paina {{ui:Vertaa}}. Jokainen mallin kohde arvioidaan pinnastaan, koska skanneri näkee pinnat. Kohteen laatikon kuusi pintaa jaetaan noin 20 cm:n soluihin. Solu lasketaan, kun skannauspiste on pinnasta {{ui:Toleranssi}}n sisällä (aluksi 50 mm). Paras suuri pinta lasketaan, joten seinää, joka on skannattu toiselta puolelta, ei rangaista sen toisesta puolesta.

- **Rakennettu**: vähintään 40 % pinnasta on nähty.
- **Osittain**: 10 %–40 %.
- **Puuttuu**: vähemmän kuin tuo, mutta skanni ulottuu kohteeseen (pisteitä 1.5 m:n säteellä).
- **Ei tavoitettu**: skanni ei ole koskaan käynyt siellä, joten siitä ei sanota mitään.

Rakennetuista ja osittain rakennetuista kohteista se antaa skannauspisteiden keskimääräisen poikkeaman mallin pinnasta ja kertoo, onko kohde paikallaan (toleranssin sisällä), lähellä (kolminkertaisen sisällä) vai poissa (sitä kauempana). Se näkee poikkeamia vain enintään viisi kertaa toleranssin verran: kohde, joka on rakennettu paikastaan sitä kauempana, luetaan puuttuvaksi.

Yhteenveto antaa rakennettujen osuuden prosentteina niistä kohteista, joihin skannaus ulottuu, lukumäärän ja tilavuuden mukaan. Osittain rakennettuja kohteita lasketaan erikseen, eikä niitä lisätä rakennettuihin.

## 4D-aikataulua vastaan

Kun 4D-aikataulu on ladattu (katso [4D-aikataulu](topic:4d-schedule)), tulos käyttää myös 4D-liukusäätimelle asetettua päivää. Kohteet, jotka ovat erääntyneet sinä päivänä eikä skannaus näytä rakennettuina, ovat **aikataulusta jäljessä**. Kohteet, jotka eivät vielä eräänny mutta ovat rakennettuja, ovat **edellä**. Aikataulusta jäljessä olevat kohteet luetellaan kohdassa {{ui:Ongelmat}}, ja taulukon voi suodattaa niihin. Ilman aikataulua mistään ei sanota, onko jäljessä tai edellä.

## Taulukko ja malli

Napsauta riviä valitaksesi kohteen. {{ui:Värjää malli}} maalaa kohteet vihreiksi (rakennettu), keltaisiksi (osittain), punaisiksi (puuttuu) tai harmaiksi (ei tavoitettu). {{ui:Omat värit}} palauttaa ne. {{ui:Tallenna CSV}} kirjoittaa taulukon. {{ui:Merkitse vastaavat kohteet kentällä tarkistetuiksi}} merkitsee kaikki kohteet, jotka on nähty rakennettuina ja toleranssin sisällä, kentällä tarkistetuiksi (LOD 500, menetelmä skannaus) yhdellä askelella, jonka voi kumota. Katso [Merkitse kohteet tarkistetuiksi tai kentällä tarkistetuiksi](topic:verification).

:::warning
Tämä vertaa kunkin kohteen laatikkoa skannauspisteisiin toleranssin sisällä. Se **ei ole mittaus, määrälaskenta eikä maksun perusta**. Skannattuun kohteeseen nähden piilossa oleva kohde (seinä verhouksen takana, laatta lattiapinnan alla) jakaa pintansa ja voi näyttää rakennetulta. Kaareva tai kalteva kohde on laatikoltaan runkoaan suurempi ja voi näyttää osittaiselta tai puuttuvalta. Tarkista lista ennen kuin toimit sen perusteella. Lupakommentit ja edistymismerkinnät eivät kuulu tähän: ne pysyvät sarakkeissa, joihin ne on kirjattu.
:::

Avustaja voi ajaa saman vertailun työkalulla {{ui:Vertaa skannausta malliin}}. Se ei muuta mallia mitenkään.
