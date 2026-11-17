---
title: Seinärakenteet ja viitemitat
summary: Rakenna omia seinätyyppejä kerros kerrokselta selvällä ytimellä, pidä projektin materiaalikirjastoa ja mitoita pintoihin ja keskiviivoihin, jotka pysyvät kiinni seinässä, kun se muuttuu.
keywords: lod, kehitystaso, lod 200, lod 300, yleinen, seinärakenne, seinätyyppi, tasot, ydin, ydinpinta, ydinkeskiviiva, ilmarako, kalvo, tuulensuojakalvo, materiaalikirjasto, materiaalit, paksuus, viitemitta, mitoitus, assosiatiivinen, sijaintiviiva, vuoraus, runko, kipsilevy
from: 4ea8fbf5
---

## Mitä teet

Tee seinätyyppi, joka vastaa rakennettavaa seinää: vuoraus, levytys, 5½ tuuman runkoydin ja kipsilevy, tai tiili, ilmarako ja puurunkoinen seinä. Merkitse, mitkä tasot ovat ydintä, jotta mitoitus tai sijaintiviiva voi pitää ytimen paikallaan, kun sen ympärillä olevat pintakerrokset muuttuvat. Mitoita sitten seinät niihin pintoihin ja keskiviivoihin, joita tarkoitat.

## Tee seinätyyppi

1. Aloita rakennus tai avaa IFC-malli, ota käyttöön {{ui:Piirrä}} ja valitse työkalu {{ui:Seinä}}.
2. Valitse aloitustyyppi kohdasta {{ui:Seinätyyppi}} ja avaa {{ui:Seinärakenteet…}}. Aloitustyyppi avautuu kopiona; anna uudelle tyypille nimi.
3. Tasot kulkevat luettelon yläreunasta ulkopuolelta alareunasta sisäpuolelle. Valitse kunkin tason materiaali, kirjoita sen paksuus (projektin yksiköissä tai eksplisiittisinä, kuten `12.7 mm` tai `1/2"`), valitse sen tehtävä (pintakerros, alusta, rakenne, eristys, kalvo) ja rastita **Ydin**-tasot. Ytimen on oltava yhtenäinen ryhmä.
4. {{ui:Lisää kerros}} lisää tason, {{ui:Lisää rako}} lisää ilmaraon sen tuuletuksen kanssa (määrittelemätön, tuuletukseton, tuuletettu), ja {{ui:Lisää kalvo}} lisää tason ilman nimellispaksuutta, kuten tuulensuojakalvon. Nuolet siirtävät tasoa ulospäin tai sisäänpäin.
5. Esikatselu piirtää tasot mittakaavassa, ydin alleviivattuna ja numeroituna rivien mukaan, ja mitoittaa jokaisen tason, ytimen ja kokonaispaksuuden. {{ui:Tallenna tyyppi}}.

Uusi tyyppi on Seinä-työkalun luettelossa ja valitun seinän **Ominaisuudet**-kohdassa. Muokatun tyypin tallentaminen muuttaa jokaista seinää, joka sitä käyttää; {{ui:Monista tyyppi}} tekee erillisen tyypin ja antaa sen vain valituille seinille. Jokainen tallennus on yksi kumoamisvaihe yhdessä niiden seinien kanssa, joita se siirtää, niiden ovien ja ikkunoiden sekä riippuvien mittojen kanssa.

Ilmarako lisää leveyttä. Kalvo ei lisää mitään: se pysyy tyypissä, jotta luettelo löytää sen myöhemmin, eikä sitä lasketa seinän eikä ytimen paksuuteen. Ilmarakoa tai kalvoa ei koskaan lasketa kiinteäksi materiaaliksi. IFC2X3-muodossa tallennetussa tiedostossa kalvo säilyy tyypin tietueessa, mutta se jätetään pois fyysisistä materiaalitasoista.

## Merkitse tyyppi kehitystasollaan (LOD)

Tyyppi voi kertoa, kuinka pitkälle se on kehitetty. Muokkaimessa **Kehitystaso (LOD)** tarjoaa kiinteän asteikon 100, 200, 300, 350, 400 ja 500 tai **Ei asetettu**. Yleinen seinä (”Seinä 230 yleinen”) on LOD 100 tai 200; tarkka rakenne todellisine tasoineen (”230 savitiili, rapattu molemmilta puolilta”) on LOD 300 tai korkeampi. Merkinnän asetat itse: BimCraft ei laske sitä, eikä aloitustyypeillä ole merkintää.

Merkintä näkyy tyypin nimen vieressä Seinä-työkalun tyyppiluettelossa, seinän **Ominaisuudet**-kohdassa ja [Vaihda tyyppi](topic:wall-tools) -luettelossa. Vaihdon jälkeinen raportti kertoo, nousiko vai laskiko taso. Jotta näet sen **Seinät tyypeittäin** -luettelossa ja sen CSV-tiedostossa, rastita **Näytä kunkin seinätyypin LOD seinäluettelossa** kohdassa Asetukset › BimCraft › Seinät: luettelon viimeinen sarake, LOD, lisätään. Merkintä tallentuu IFC-tiedostoon tyypin mukana (tyypin `CadCraft_WallType`-ominaisuusjoukossa ominaisuutena `LOD` ja tyypin tietueessa), joten se on tiedostoa avattaessa taas paikallaan. Merkintä koskee toistaiseksi vain seinätyyppejä, ei yksittäisiä elementtejä eikä muita elementtityyppejä.

## Yleiset seinät luonnosvaiheeseen

Seinä-työkalun tyyppiluettelo alkaa kahdella **yleisellä** seinällä: **Yleinen seinä 200 mm (ulkoseinä)** ja **Yleinen seinä 100 mm (sisäseinä)**. Kumpikin on yhden tason yleismateriaalia, merkitty LOD 200. Käytä niitä, kun tiedät, minne seinät menevät, mutta et vielä sitä, mistä ne tehdään.

Seinä, jonka tyypin merkintä on **LOD 100** tai **LOD 200**, piirretään jokaisessa pohjapiirroksessa **yhtenä viivoitettuna nauhana** jokaisella yksityiskohtatasolla: ei tasoja eikä tasoviivoja. Näin on yleisten seinien ja jokaisen omamerkityn LOD 100 tai 200 -tyypin kanssa. Seinä on itsessään valmis: sillä on paksuus, ovet ja ikkunat, huoneet ja määrät.

Kehittääksesi sitä vaihda sen tyyppi (Muokkaa › Seinät › **Vaihda tyyppi** tai Tyyppi kohdassa Ominaisuudet). Seinää ei piirretä uudelleen: sama seinä saa uuden tyypin, ja raportti kertoo, mitä siirtyi. LOD 300 tai korkeammalla merkitty tyyppi piirretään tasoineen kuten ennenkin.

Piirtääksesi kaikki seinät tasoineen merkinnästä riippumatta: Asetukset › BimCraft › Seinät, poista rasti kohdasta **Piirrä LOD 100 tai LOD 200 -tyypin seinät yhtenä viivoitettuna nauhana**.

Aloitusovet ja -ikkunat ovat myös yleisiä tyyppejä (koko ja aukeamistapa, ei tuote). Kun **Näytä kunkin seinätyypin LOD seinäluettelossa** on päällä, Ovi- ja Ikkuna-luettelot näyttävät niille LOD 200.

## Anna tyypille määrälaskentatiedot

Seinätyypin muokkaimessa **Määrälaskentatiedot** kokoaa kerran tyypille sen, mitä kustannusarvioija tarvitsee seinästä: **yksikkö**, josta seinä rakennetaan (tiili tai harkko: nimi, pituus, korkeus ja leveys), **laasti** (nimi ja saumapaksuus) sekä **yksikköhinta** valuutan koodilla (kolme kirjainta, kuten USD, EUR tai ZAR) ja sen perusteella, mihin se kohdistuu: neliömetri tai neliöjalka seinän nettopinta-alaa, metri tai jalka seinän pituutta tai jokainen seinä. Kaikki on valinnaista.

Se tallennetaan tiedostoon tyypin mukana. Jokainen tyypin seinä raportoi sen: {{ui:Luettelot}} › **Seinätyypit: määrälaskentatiedot** luettelee yksikön, laastin, yksikköhinnan ja yksikköhinnan kerrottuna mitatulla määrällä, ja TakeoffCraftille annettu määrälaskenta kuljettaa sen tämän seinätyypin nimikkeessä. Muuta tyypistä, niin jokainen seinä seuraa.

Kolme kenttää lisää on tiilien tai harkkojen ja laastin laskemiseen:

- **Hukka yksiköistä, %** lisätään yksiköiden määrään. Jätä tyhjäksi, jolloin käytetään projektin mittausmenetelmän lukua, tai ei mitään, jos menetelmässä sellaista ei ole. Anna 0, jolloin hukkaa ei ole menetelmän sanomasta riippumatta.
- **Lisälaasti, %** on tiileen tehtyjä koloja tai reikiä varten, jotka ottavat laastia. Se lisätään laastitilavuuteen. Jätä tyhjäksi, jolloin lisälaastia ei ole.
- **Tasot, jotka on rakennettu tästä yksiköstä**: rastita jokainen taso, joka on tämän tiilen tai harkon kuori. Ilmarakoseinässä niitä on kaksi. Jos mitään ei ole rastitettu, lasketaan ydintasot.

Yksikköhinta voi olla myös tilattua yksikköä kohti, tilattua 1000 yksikköä kohti tai laastin m³ kohti. Kun yksikössä on pituus ja korkeus, **Seinätyypit: määrälaskentatiedot** näyttää yhden kuoren yksiköt per m² (tai ft²), tilattavat yksiköt ja laastitilavuuden; kaavat ovat kohdassa [Tiilet, harkot ja laasti](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tyypillä on yksi yksikkö: kahta eri yksikön kuorta (tiilikuori ulkona ja harkkokuori sisällä) ei voi vielä laskea yhdelle tyypille.

## Pidä ydin paikallaan

Aseta seinän **Sijaintiviiva** kohdassa **Ominaisuudet** ytimen pinnaksi tai ydinkeskiviivaksi. Kun myöhemmin lisäät tai paksunnat pintakerroksen, viiva pysyy paikallaan ja seinä kasvaa sen ympäri; nurkassa siihen liittyvät seinät seuraavat, joten suorat nurkat pysyvät suljettuina.

## Projektin materiaalit

{{ui:Materiaalikirjasto…}} luettelee projektin materiaalit: nimi, luokka, paksuus, jolla taso alkaa, näyttöväri, leikkauksen täyttökuvio ja muistiinpanot. Kirjasto tallennetaan IFC-tiedostoon projektin mukana. Kun valitset tasolle materiaalin, taso saa materiaalin oletuspaksuuden, jonka voit sen jälkeen muuttaa; kirjaston muokkaaminen myöhemmin ei koskaan muuta jo piirrettyjen seinien kokoa. Voit myös luoda materiaalin tason materiaaliluettelosta kohdalla {{ui:+ Uusi materiaali…}}.

## Viitemitat

{{ui:Merkitse}} › {{ui:Viitemitta}}: valitse vaaka-, pysty- tai tasattu mitoitus ja viite: ulko- tai sisäpuolinen pintapinta, ulko- tai sisäpuolinen ydinpinta, seinän keskiviiva tai ydinkeskiviiva. Valitse ensimmäinen seinä, vaihda viite tarvittaessa, valitse toinen ja napsauta sitten kohtaa, johon mittaviiva menee. Kaksi viitettä samassa seinässä mittaa sen kokonaispaksuuden tai ydinpaksuuden. {{ui:Viitemitat…}} luettelee näkymän mitat, myös ne, jotka menettivät seinänsä, ja niille on Ominaisuudet, Sido viitteet uudelleen ja Poista.

### Mitoita koko pohjakuva säännöillä

{{ui:Merkitse}} › {{ui:Mitoita pohjapiirros…}} mitoittaa katselemasi kerrospohjan ulkoreunan: kokonaiskoon molempiin suuntiin ja rivin mittoja jokaista ulkoreunaa pitkin (seinien päät, reunaan osuvat seinät sekä niissä olevat ovet ja ikkunat), rivit sijoitetaan rakennuksen ulkopuolelle. Rastita halutut, lue lukumäärä ja napsauta sitten {{ui:Lisää mitat}}. Ne ovat tavallisia viitemittoja, joten ne seuraavat seiniä, kun seinät siirretään, ja voit valita, siirtää tai poistaa minkä tahansa niistä. Koko joukko on yksi kumoamisvaihe, eikä sen uudelleen ajaminen tee yhtään ylimääräistä.

Se mitoittaa vain ulkopuolen: rakennuksen sisäiset huoneet, kaarevat seinät ja seinät, jotka eivät ole suorassa kulmassa pohjapiirrokseen nähden, jätetään käsityökaluille, eikä akselilinjat ole seiniä, joten akselien välisiä mittoja ei tehdä tässä. Yhdistetty tekoälyavustajasi voi tehdä saman komennolla `plan_dimension`.

Mitta on kiinnitetty seiniin, ei näytön kohtaan: kun seinä siirtyy tai sen tyyppi muuttuu, arvo seuraa. Jos seinä poistetaan, mitta ilmoittaa, ettei sitä voi ratkaista, eikä se näytä lukua, ennen kuin sidot sen uudelleen tai kumoat. Pituuskenttä ottaa myös pohjapiirroksen koordinaatit, kuten `10',12'`, mittaviivalle tarkkaan kohtaan.

Mitat koskevat BimCraftin piirtämiä seiniä pohjanäkymissä. Ei vielä toteutettu: mitat leikkauksissa ja julkisivuissa, ovien, ikkunoiden ja muiden osien mitat sekä pohjassa ja leikkauksessa piirrettävät rakennetasot; katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).

## Katso myös

[Piirrä seiniä](topic:draw-walls), [Muuta seinää, ovea tai ikkunaa](topic:change-a-wall-or-door), [Ominaisuudet](topic:properties-panel).
