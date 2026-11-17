---
title: Poista, leikkaa, kopioi ja liitä rakennusosia
summary: Valitse seinät, ovet, kalusteet tai muut elementit IFC-mallista; poista ne, leikkaa tai kopioi ja liitä ne sinne, mihin napsautat, samaan paikkaan tai toiselle kerrokselle.
keywords: poista, poistaa, pyyhi, leikkaa, kopioi, liitä, monista, siirrä, valitse kaikki, rakennusosa, seinä, ovi, ikkuna, portaat, aukko, kumoa
from: d9eec37f
---

## Mitä teet

Muokkaat IFC-mallin sisältöä: poistat elementit, joita et halua, kopioit seinän tai huonekalujoukon toiseen paikkaan tai siirrät elementtejä leikkaamalla ja liittämällä. Jokainen muutos on yksi askel, jonka voit kumota, ja tallentaminen kirjoittaa uuden tiedoston, joten alkuperäinen säilyy ennallaan.

## Vaiheet

1. Avaa IFC-malli. Katso [Avaa IFC-malli ja tutustu siihen 3D-näkymässä](topic:open-ifc-model).
2. Valitse, mitä muutat: napsauta elementtiä, pidä {{key:Mod}} tai {{key:Shift}} pohjassa ja napsauta lisää valitaksesi enemmän, tai paina {{key:Mod+A}} ({{ui:Lisää}}, {{ui:Valitse kaikki}}) valitaksesi kaikki näkyvät elementit.
3. Sitten:
   - **Poista:** paina {{key:Delete}} tai valitse {{ui:Lisää}}, {{ui:Poista}}.
   - **Kopioi:** paina {{key:Mod+C}} tai napsauta {{ui:Kopioi}}.
   - **Leikkaa:** paina {{key:Mod+X}} tai valitse {{ui:Lisää}}, {{ui:Leikkaa}}. Elementit poistuvat, ja voit liittää ne.
4. Liittääksesi paina {{key:Mod+V}} tai napsauta {{ui:Liitä}}. Kopioimasi kokoinen läpinäkyvä laatikko seuraa osoitinta kerroksella, joka on valittu sijoituspalkissa. Käännä sitä 90° painamalla {{key:R}} ja napsauta kohtaa, johon se menee. Jokainen napsautus sijoittaa uuden kopion; lopeta painamalla {{key:Esc}}.
5. Tai paina {{key:Mod+Shift+V}} ({{ui:Lisää}}, {{ui:Liitä samaan paikkaan}}): leikkauksen jälkeen elementit palaavat täsmälleen entiseen paikkaansa; kopioinnin jälkeen kopio tulee aivan alkuperäisten viereen.
6. Napsauta {{ui:Tallenna IFC-tiedostona}} ladataksesi muokatun mallin.

## Mitä elementin mukana kulkee

- **Osat:** portaiden mukana kulkevat niiden porrasosat ja verhoseinän mukana sen paneelit. Osista koostuva elementti vie kaikki osansa mukanaan.
- **Aukot:** seinä vie siihen leikatut aukot. Oven tai ikkunan poistaminen poistaa myös sen täyttämän aukon, jolloin seinä sulkeutuu, kuten suunnitteluohjelmassa. BimCraftissa piirretyn seinän poistaminen poistaa myös sen ovet ja ikkunat ja yhdistää jäljelle jääneet seinät uudelleen. Muualla tehdyn tiedoston seinän poistaminen jättää sen ovet ja ikkunat paikoilleen.
- **Tiedot:** kopiolla on sama tyyppi, materiaalit, ominaisuusjoukot ja määrät kuin alkuperäisellä, sekä uusi GlobalId. Kopion arvon myöhempi muuttaminen ei muuta alkuperäistä.
- **Kirjaston kohteet** säilyttävät kirjastotietonsa. Kopio saa seuraavan vapaan kohdenumeron, ja takaisin liitetty leikattu kohde säilyttää oman numeronsa.

## Mitä näet

- ”Poistettu: …” tai ”Liitetty: …” näkyy luettelossa {{ui:Muutokset}}. {{key:Mod+Z}} kumoaa viimeisimmän muutoksen; {{key:Mod+Y}} palauttaa sen uudelleen.
- Poiston jälkeen tilarivi kertoo, kuinka monta osaa ja aukkoa meni myös mukana.
- Liitetyt elementit ovat valittuina, joten voit liittää ne samaan paikkaan uudelleen rivin tekemiseksi tai poistaa ne.

## Hyvä tietää

- Kopiot käyttävät samaa geometriaa kuin alkuperäinen (IFC sallii elementtien jakaa sen), joten tiedosto kasvaa vain vähän.
- Rakennuselementit liitetään siihen malliin, josta ne kopioitiin, samaan välilehteen. Jos haluat käyttää sijoitettuja kirjaston kohteita toisessa mallissa, kopioi yksi kohde kerrallaan. Katso [Kopioi, liitä ja monista kirjaston kohteet](topic:copy-paste).
- Kerroksia, tiloja, rakennuksia ja tonttia ei voi poistaa tai kopioida. Valitse niiden sisältämät elementit. BimCraftissa piirretty huone muodostuu sitä ympäröivistä seinistä: poista seinä yhdistääksesi kaksi huonetta.
- Seiniä, ovia ja ikkunoita, jotka on piirretty BimCraftin omilla seinä-, ovi- ja ikkunatyökaluilla, ei voi vielä kopioida, leikata tai monistaa. Tilarivi kertoo tämän. Piirrä ne uudelleen. Poistaminen toimii.
- Kopioiminen laittaa myös kopioimiesi kohteiden nimet ja ominaisuudet leikepöydälle tekstinä, liitettäväksi taulukkolaskentaan tai sähköpostiin.

## Yleisiä virheitä

- **{{ui:Poista}} on harmaana.** Mitään ei ole valittu, tai valittuina ovat vain kerrokset tai tilat. Vie osoitin sen päälle lukeaksesi syyn.
- **Liittäminen sanoo, että elementit ovat toisesta mallista.** Olet avannut toisen mallin kopioinnin jälkeen. Avaa ensimmäinen malli uudelleen ja kopioi elementit siellä.
- **Liitetty kopio on toisessa kerroksessa.** Sijoituspalkin {{ui:Kerros}} päättää, minne kopio menee. Valitse kerros ennen napsauttamista.

## Aiheeseen liittyvää

- [Piilota, eristä ja tee elementit läpinäkyviksi](topic:hide-and-isolate)
- [Näppäimet ja hiiri](topic:keyboard#edit)
