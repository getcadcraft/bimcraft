---
title: Tontti, sen rakennus ja sen tasot
summary: Piirrä tontin ääriviiva, sijoita ja käännä rakennus tontille, lisää tasoja annettuihin korkeuksiin tai jaa rakennuksen korkeus, ja piirrä valitsemallesi tasolle.
keywords: tontti, tonttikartta, rakennusviiva, etäisyys, servituutti, käyttöoikeus, tieoikeus, kiinteistöraja, kiinteistö, rajaus, rakennuksen sijoittaminen, kierrä rakennusta, sijoita rakennus, tasot, kerrokset, lisää tasoja, jaa korkeus, kerroskorkeus, IfcSite, IfcBuilding, IfcBuildingStorey, tilarakenne
from: 48d10c1e
---

## Mitä teet

Luo IFC-mallin osat, jotka pitävät kaiken muun: tontti, sen rakennus ja rakennuksen tasot.

Malli on järjestetty **tonttiin**, joka sisältää **rakennuksen**, joka sisältää **tasonsa** (kerroksensa); seinät, lattiat ja kaikki muu kuuluu tasoon. {{ui:Tiedosto}} › {{ui:Uusi rakennus}} luo kaikki kolme. Muualta tuleva malli, jossa on rakennus mutta ei tonttia, saa tontin, kun piirrät ensimmäisen kerran: rakennus sijoitetaan siihen, missä se jo oli.

## Piirrä tontti

1. Kytke {{ui:Piirrä}} päälle ja valitse {{ui:Koontiversio}} › {{ui:Tontti}}.
2. Napsauta tontin kulmia (työkalu tarttuu kuten Seinä-työkalu). Napsauta ensimmäistä kulmaa uudelleen, kaksoisnapsauta tai paina {{key:Enter}} lopettaaksesi. {{key:Backspace}} poistaa kulman.
3. Rivi näyttää tontin pinta-alan. Piirrä tontti uudelleen muuttaaksesi sitä.

Jokaisen tason pohjakuva näyttää tontin ääriviivan kiinteistörajana.

## Sijoita rakennus tontille

Kun {{ui:Tontti}} on päällä, kirjoita rakennuksen **X** ja **Y** tontilla ja sen **Kierto** asteina, tai napsauta {{ui:Sijoita rakennus napsautuksella}} ja napsauta kohtaa, johon rakennuksen origo tulee. Kaikki rakennuksessa (tasot, seinät, ruudukot, kaikki mitä piirsit) liikkuu sen mukana; tontti ja sen ääriviiva pysyvät paikallaan. Pohjakuvat näyttävät jokaisen tason yhä suorassa rakennukseen nähden.

## Rakennusviivat ja servituutit

Rakennusviivat ja servituutit (käyttöoikeudet, tieoikeudet) piirretään tontille rajoitteina. Ne **varoittavat, eivät estä**: seinä niiden yli piirretään pyytämäsi mukaan, ja Ongelmat-kohtaan ilmestyy varoitus, jossa mainitaan seinä ja viiva tai servituutti. Siirrä seinä takaisin, ja varoitus poistuu. Varoituksen voi hyväksyä perustelulla (esimerkiksi viranomaisen myöntämä poikkeus).

- **Rakennusviiva etäisyyksistä.** {{ui:Koontiversio}} › {{ui:Rakennusviiva}}, sitten {{ui:Etäisyydet}}: kirjoita, kuinka paljon viiva jää sisään kustakin tontin rajasta. Rajat numeroidaan pohjakuvaan, kun työkalu on päällä. Viiva lasketaan näistä etäisyyksistä ja seuraa tontin ääriviivaa, jos piirrät tontin uudelleen samalla määrällä rajoja. Etäisyydet ovat sinun: ne luetaan kiinteistörekisteristä tai asemakaavasta; BimCraft ei täytä niitä.
- **Piirretty rakennusviiva.** Kun {{ui:Rakennusviiva}} on päällä, napsauta sen pisteitä ja lopeta kaksoisnapsautuksella tai {{key:Enter}}. Lopeta ensimmäiseen pisteeseen suljettua viivaa varten: sisällä oleva alue on se, jonne saa rakentaa, ja seinästä, jonka jokin osa on sen ulkopuolella, annetaan varoitus. Avoin viiva varoittaa vain seinästä, joka ylittää sen.
- **Servituutti.** {{ui:Koontiversio}} › {{ui:Servituutti}}: valitse sen laji, kirjoita nimi, rekisteriviite ja leveys, napsauta sitten sen keskiviivaa ja lopeta (kaista) tai sulje se ensimmäiseen pisteeseen (alue). Seinästä, jonka jokin osa on sen päällä, annetaan varoitus jokaisella tasolla.
- Seinän pinta, joka on täsmälleen viivalla, on koskettava, ei ylittävä (toleranssi on 1 mm).
- Kunkin vaihtoehtosarjan nykyinen massoitteluvaihtoehto tarkistetaan samoin kuin seinät: rajan ulkopuolella oleva massa, rakennusviivan yli tai servituutilla oleva massa saa varoituksen. Katso [Massoitteluvaihtoehdot rinnakkain](topic:massing-options).
- Valitse yksi {{ui:Valitse}}-työkalulla muuttaaksesi sen nimeä, viitettä, lajia tai leveyttä, siirtääksesi sen tai poistaaksesi sen.

Nämä piirretään jokaisen tason pohjakuvaan, arkeille ja pohjakuvan PDF:ään: rakennusviivat katkoviivoina, servituutit pistekatkoina, kukin tekstillään. IFC-tiedostossa jokainen on merkintä (IfcAnnotation, tyyppi BuildingLine tai Servitude) tontilla, ja sen viiva on tavallinen käyrä, jonka muut ohjelmat voivat lukea. Tarkistus käyttää jokaisen seinän todellista ääriviivaa pohjakuvassa liitoksineen piirrettynä; kaareva seinä tarkistetaan omalla paksuudellaan keskiviivansa ympärillä.

## Lisää tasoja

{{ui:Tasot}}-paneelissa {{ui:Lisää taso päälle}} lisää yhden, {{ui:Lisää kerros alapuolelle}} lisää yhden alimman alle (kellarin, negatiivisessa korkeudessa). {{ui:Lisää tasoja…}} lisää useita kerralla:

- **Näihin korkeuksiin**: kirjoita korkeudet alimman tason yläpuolelle, pilkuilla erotettuina (esimerkiksi `12', 24', 36'`). Korkeudet, joissa on jo taso, ohitetaan.
- **Jaa rakennuksen korkeus**: kirjoita rakennuksen korkeus ja tasojen määrä. Olemassa olevat tasosi siirtyvät uusiin korkeuksiinsa alimmasta ylöspäin, puuttuvat lisätään, ja niiden yläpuolella olevat pysyvät paikallaan.

Seinät, jotka ulottuvat ylemmälle tasolle, seuraavat sitä, samoin pilarit ja rampit.

{{ui:Kopioi tämä taso…}} (samassa paneelissa) kopioi katsomallasi tasolla piirretyn toiselle tasolle tai uudelle tasolle ylhäällä, jolloin pohjakuva voi nousta rakennuksessa yhdellä askeleella. Katso [Piirrä seinät](topic:draw-walls).

## Piirrä tasolla

Jokainen {{ui:Piirrä}}-työkalu toimii pohjakuvan tasolistasta valitulla tasolla (tai {{ui:Tasot}}-paneelista valitulla): piirtämäsi kuuluu sille tasolle.

## Mitä pitäisi nähdä

- Jokainen näistä muutoksista on yksi vaihe: {{key:Mod+Z}} kumoaa sen.
- IFC-tiedostossa: tontti (IfcSite) ääriviivoineen ja pinta-aloineen, rakennus (IfcBuilding) sen päälle sijoitettuna ja tasot (IfcBuildingStorey) rakennuksessa.

Katso myös [BimCraftin koordinaatit](topic:coordinates) projektin origosta ja mittauspisteestä.
