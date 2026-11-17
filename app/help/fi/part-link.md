---
title: Lähetä elementti PartCraftiin ja tuo se takaisin
summary: Valitse tuki, kannake, kaide tai laite, suunnittele se osana PartCraftissa rakennuksen ympärillä ja hyväksy uusi muoto takaisin malliin.
keywords: partcraft, osa, lähetä, linkki, elementti, tuki, kannake, aita, kaide, laite, suunnittelu, kierto, hyväksy, muuttunut, osalinkit
from: 4ce2f449
---

## Mitä teet

Suunnittelet yhden rakennuksen elementin osana: lähetät sen PartCraftiin, muutat sitä siellä (leikkaat, lisäät, poraat, muutat kokoa) ja tuot uuden muodon takaisin malliin.

## Vaiheet

1. Valitse yksi elementti mallista: yleinen elementti, laite, pilari, palkki, kaide tai kaluste.
2. Valitse työkalurivillä {{ui:Osalinkit}} ja sitten {{ui:Lähetä PartCraftiin}}. PartCraft avautuu uudessa välilehdessä, ja elementti on siinä osana. Enintään 3 m:n etäisyydellä olevat elementit piirretään sen viereen harmaina, jotta voit suunnitella osan paikallaan. Niitä ei voi muuttaa siellä.
3. Muuta osaa PartCraftissa. Valitse PartCraftissa {{ui:Tiedosto}} › {{ui:Vie}} › {{ui:Tallenna takaisin BimCraftiin}}. Voit tallentaa takaisin niin monta kertaa kuin haluat.
4. BimCraftissa {{ui:Osalinkit}}-painike näyttää lukumäärän, ja kortti listaa elementin kohdassa {{ui:Muuttunut PartCraftissa}}. Koon ja tilavuuden muutos kuvataan sanoin.
5. Valitse {{ui:Näytä}} tarkastellaksesi elementtiä ja sitten {{ui:Hyväksy}}, jotta elementti saa uuden muodon, tai {{ui:Säilytä omani}}, jolloin se jää ennalleen.

## Mitä pitäisi näkyä

- Hyväksyminen on yksi kumoamisvaihe. Elementti säilyttää paikkansa, GlobalId-tunnuksensa, tyyppinsä, materiaalinsa ja ominaisuutensa. Vain sen runko korvataan.
- Elementille lisätään ominaisuusjoukko {{ui:CadCraft_PartLink}}, jossa ovat linkki, sen tila ja revisio.
- {{ui:Lähetä uudelleen}} avaa saman elementin PartCraftissa uudelleen samaan linkkiin.

## Hyvä tietää

- Seinät, laatat, katot, ovet, ikkunat, portaat, rampit ja tilat piirretään rakennustyökaluilla ääriviivasta, ja ne rakennetaan uudelleen jokaisen muutoksen jälkeen. Toisen sovelluksen runko kirjoittaisi niiden päälle, joten ne hylätään perusteluineen.
- Muoto palautuu verkkona (IFC-tessellointina), ei osan muotoelementteinä. Osan historia säilyy PartCraftissa.
- Jos elementti muuttui mallissa lähettämisen jälkeen, kortti kertoo siitä ennen hyväksymistä. Hyväksyminen korvaa nämä muutokset.
- Mitään ei ladata palvelimelle. Molemmat sovellukset ovat saman sivuston sivuja, ja ne siirtävät elementin toisilleen tässä selaimessa. Molempien täytyy olla auki samassa selaimessa.
- Elementin täytyy sulkeutua kiintokappaleeksi PartCraftissa. Elementti, jonka muodossa on suuria aukkoja, hylätään, ja PartCraft ilmoittaa avoimien särmien määrän.
- Hyväksymistä varten tee elementin sisältävästä mallista aktiivinen malli.
