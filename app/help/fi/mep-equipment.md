---
title: MEP-laitteet liitäntäporteilla
summary: Sijoita yleisiä ilmanvaihtokoneita, puhaltimia, pumppuja, kattiloita, vedenlämmittimiä, päätelaitteita, diffuusoreita, ritilöitä ja säiliöitä, joiden koot annat itse, kukin putki- ja kanavaliitännöillä, joihin muut reitit liittyvät.
keywords: mep, laite, laitteet, ilmanvaihtokone, ahu, puhallin, linjapuhallin, pumppu, kattila, vedenlämmitin, päätelaite, vav, diffuusori, ritilä, säiliö, portti, portit, liitäntä, suutin, kaulan koko, lvi, ilmastointi, putkitus, mekaniikka, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Mitä teet

Sijoita laitteet putkiesi ja kanaviesi päihin. Jokainen kappale on yleinen muoto, jonka koot annat itse, ja sen liitännät ovat **portteja**: kohdat, joihin putki tai kanava liittyy, mikä järjestelmä, mihin suuntaan virtaus kulkee ja mikä koko. Portista piirretyt putket ja kanavat saavat sen koon ja järjestelmän sekä pysyvät siihen kiinni: katso [Liitä putket ja kanavat laitteisiin](topic:mep-connections).

:::note
Tämä on piirtämisen ja koordinoinnin apuväline, jonka mitoittaa insinööri. Laite ei ole valmistajan tuote: siinä ei ole kapasiteetteja, painoja eikä valmistajien liitäntäkokoja. Tuo valmistajan malli MEP-ohjelmastasi IFC-muodossa, kun sitä tarvitset.
:::

## Sijoita kappale

1. Kytke {{ui:Piirrä}} päälle, avaa {{ui:Koontiversio}} ja valitse {{ui:Laitteet}}.
2. Valitse palkista laji ja kirjoita sen koot. Jokainen laji kysyy omansa:

| Laji | Kirjoitat | Sen portit |
|---|---|---|
| Ilmanvaihtokone | pituus, leveys, korkeus; tulo- ja poistoaukot; patterin putken koko ja järjestelmä; lauhdeveden koko | tulokanava ulos, paluukanava sisään, patteri sisään ja ulos, lauhdeveden poisto |
| Linjapuhallin | halkaisija, pituus, järjestelmä | kanava sisään ja ulos |
| Pumppu | putken koko, järjestelmä | tulo ja ulostulo |
| Kattila | pituus, leveys, korkeus, putken koko, kaasuputken koko, savukanavan halkaisija | lämmityksen menoputki ulos ja paluu sisään, kaasu sisään, savukanava ulos |
| Vedenlämmitin | halkaisija, korkeus, putken koko, kaasu tai sähkö | kylmävesi sisään, lämminvesi ulos (ja kaasu sisään sekä savukanava, kun se polttaa kaasua) |
| Päätelaite | pituus, leveys, korkeus, pyöreä tulo, ulostulon leveys ja korkeus | tuloilma sisään ja ulos |
| Diffuusori | pinta, kaula, järjestelmä | sen kaula (ilma sisään) |
| Ritilä | pinnan leveys ja korkeus, kaulan leveys ja korkeus, järjestelmä | sen kaula (ilma ulos paluu- tai poistokanavaan) |
| Säiliö | halkaisija, korkeus, putken koko, järjestelmä | tulo ylhäällä, ulostulo lähellä pohjaa |
| Lämpöpatteri | pituus, korkeus, syvyys, putken koko, järjestelmä | menovirtaus sisään toisen pään yläosasta, paluu ulos toisen pään alaosasta |
| Konvektori / paneelilämmitin | pituus, korkeus, syvyys, putken koko, järjestelmä | menovirtaus sisään toisessa päässä, paluu ulos toisessa |
| Valmistajan perhe | perhe (katso [Putkien määritteet, venttiilit, säätöpellit ja valmistajien perheet](topic:pipe-specs)) | portit, jotka sen perheelle on annettu |

3. Aseta **Sijainti**, jalan korkeus tasosta. Diffuusorin tai ritilän korkeus on sen pinta: kirjoita kattokorkeus.
4. Kirjoita **Tunniste**, jos haluat sellaisen (`AHU-1`); saman lajin seuraava kappale saa seuraavan numeron.
5. Vie osoitin pohjapiirrokselle: pohjanjälki ja sen portit seuraavat sitä. Paina {{key:R}} kääntääksesi 90°. Napsauta, mihin se menee.

Putkikoot ovat teräsputkien nimelliskokoja (ASME B36.10M). Pumpusta piirretty putki toisesta materiaalista saa saman nimelliskoon omassa materiaalissaan.

## Muuta tai poista

Valitse se pohjapiirroksesta tai 3D-näkymästä. Ominaisuudet näyttää kaikki kirjoittamasi koot, tunnisteen, X:n, Y:n, korkeuden ja kääntökulman sekä jokaisen portin: sen koon, järjestelmän, mihin suuntaan virtaus kulkee ja onko siihen kytketty jotain. Jokainen muutos on yksi vaihe kohdassa {{ui:Kumoa}}; portteihinsa kiinnitetyt reitit liikkuvat mukana. {{key:Delete}} poistaa kappaleen; siihen kiinnitetyt reitit jäävät paikalleen, ja liitosten tarkistus listaa ne.

## IFC-tiedostossa

Jokainen laji tallennetaan omana IFC-luokkanaan: IfcUnitaryEquipment (ilmanvaihtokone), IfcFan (puhallin), IfcPump (pumppu), IfcBoiler (kattila; vedenlämmitin on IfcBoiler-tyyppiä water, ja sen objektityyppi on "Water heater"), IfcAirTerminalBox (päätelaite), IfcAirTerminal (diffuusori, ritilä) ja IfcTank (säiliö). Tyyppi on yhteinen kaikille saman lajin kappaleille, ja koot ovat mukana. IFC2X3-tiedostot saavat IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal ja IfcFlowStorageDevice vastaavilla tyypeillä. Jokainen portti on IfcDistributionPort, joka on sijoitettu liitäntään kohdalleen, osoittaa ulospäin ja kantaa virtaussuunnan ja järjestelmän; muut ohjelmat lukevat, mikä reitti liittyy mihinkin porttiin. Kappale liittyy kunkin porttinsa järjestelmään ja kantaa mukanaan kaikki kirjastokohteiden ominaisuusjoukot, jotka jokaisella sijoitetulla kirjastokohteella on.
