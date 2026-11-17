---
title: Rakenteellisen rungon analysointi
summary: Palkkien, pilarien ja jäykisteiden voimat, tukireaktiot ja taipumat asettamiesi kuormitustapausten ja yhdistelmien mukaan, tallennettuina IFC-tiedostoon. Analyysiapu, ei mitoitustarkistus.
keywords: analyysi, yksiköt, jalat ja tuumat, näyttöyksikkö, rakenneanalyysi, mitoitustarkastukset, käyttöaste, valssattu, hitsattu, AISC 360, EN 1993-1-1, rungon analyysi, analyyttinen malli, jäykkyysmenetelmä, kuormat, kuormitustapaus, yhdistelmä, pysyvä kuorma, hyötykuorma, omapaino, reaktiot, taivutusmomentti, leikkausvoima, normaalivoima, taipuma, taipunut muoto, tuet, nivelellinen, jäykkä, vapautus, raportti, pdf, csv, craftscript, frame3d, palkit, pilarit, sauvat
from: b93b58c4
---

Oikeanpuoleinen {{ui:Analyysi}}-välilehti laskee avoimen mallin palkkien, pilarien ja jäykisteiden voimat, pilarien jalkojen reaktiot ja sauvojen taipumat antamillesi kuormille.

:::warning
Se on **analyysiapu, ei mitoitustarkistus**. Analyysi ei sovella mitään suunnittelustandardia: se ei mitoita sauvoja eikä tarkista kantokykyjä, eikä se valitse kuormakertoimia. Insinööri tarkistaa analyyttisen mallin, sen kuormat ja tuet ja päättää, mitä luvut tarkoittavat. Sen alla oleva {{ui:Mitoitustarkastukset}}-osa tarkistaa valssatut teräs-I-profiilit standardien AISC 360 tai EN 1993-1-1 mukaan. Se on apu, kunnes insinööri on tarkistanut sen: katso [Mitoitustarkastukset](topic:frame-analysis#design-checks).
:::

## Suorita

1. Avaa IFC-malli ja {{ui:Analyysi}}-välilehti.
2. Valitse näkymästä yksi tai useampi palkki, pilari tai jäykiste, valitse {{ui:Kuormitustapaus}}, {{ui:Kuorma}} ja {{ui:Suunta}}, kirjoita arvo ja paina {{ui:Lisää kuorma}}: kN/m sauvaa pitkin levitetylle kuormalle, kN pistekuormalle.
3. Paina {{ui:Suorita analyysi}}.

Taulukko listaa jokaisen sauvan suurimman normaalivoiman, leikkausvoimat, taivutusmomentit, vääntömomentin ja taipuman. Napsauta sauvan nimeä valitaksesi sen näkymässä. Alla ovat reaktiot. {{ui:Mallissa}} piirtää taipuneen muodon tai yhden suureen kaaviona kunkin sauvan viereen. Tulokset vanhenevat, kun malli muuttuu: suorita analyysi uudelleen.

Jokainen kuorma ja asetus on yksi muutos {{ui:Muutokset}}-luettelossa. {{ui:Kumoa}} palauttaa sen, ja {{ui:Tallenna IFC-tiedostona}} säilyttää ne tiedostossa (projektin `CadCraft_Analysis`-ominaisuusjoukossa), joten kun malli avataan täällä seuraavan kerran, sen kuormat ovat yhä tallella.

## Miten analyyttinen malli tehdään

- Jokainen IfcBeam-, IfcColumn- ja IfcMember-elementti, jonka muoto on yksi suora pursotus, muuttuu sauvaksi profiilinsa keskiviivalle. Sen poikkileikkausominaisuudet tulevat profiilista: I-, U-, L- ja T-muodot, suorakulmiot ja putket, ympyrät ja pyöreät putket tai mikä tahansa suljettu ääriviiva (tällöin vääntöjäykkyysvakio on arvio, ja siitä kerrotaan raportissa). Muu jätetään pois ja lasketaan.
- Mallissa palkit päättyvät pilarin pintaan ja istuvat lattian alle. Jokainen sauvan pää siirretään omalle linjalleen sen sauvan akselille, johon se liittyy, kun akseli on lähellä (noin poikkileikkausten koon sisällä), ja se sauva jaetaan siinä. Raportti kertoo, kuinka monta päätä siirtyi.
- **Pilarien jalat**, joiden alapuolella ei ole mitään, ovat tukia: jäykkä (alku) tai nivelellinen (pidetty paikallaan ja estetty kiertymästä, mutta vapaa kääntymään).
- **Palkkien päät** ovat jäykkiä tai niveltyjä {{ui:Palkkien päät ilman liitosta}} -säännön mukaan; **jäykisteet** (IfcMember) ovat nivelellisiä molemmista päistään. Valitse yksi sauva antaaksesi sen päille tai pilarin jalalle oman säännön.
- Materiaalit nimen perusteella: betoni (E = 30 GPa), puu (E = 11 GPa), muuten teräs (E = 200 GPa).

Jos runko voi liikkua taivuttamatta mitään (mekanismi), ajo pysähtyy ja kertoo, missä ja mihin suuntaan.

## Kuormitustapaukset, yhdistelmät, merkit ja raportti

Analyysi alkaa tapauksista **Pysyvä** (omapaino), **Hyötykuorma** ja **Pysyvä + hyötykuorma**. Lisää tapauksia ja yhdistelmiä suunnittelustandardisi vaatimilla kertoimilla. N > 0 on veto; My > 0 asettaa sauvan paikallisen −z-puolen vetoon (painovoimasta taipuva palkki on My > 0). {{ui:Raportti (PDF)}} ja {{ui:Raportti (CSV)}} sisältävät oletukset, poikkileikkaukset, tapaukset, reaktiot summineen, sauvavoimat, siirtymät ja verhokäyrän. {{ui:Vie CraftScriptinä}} kirjoittaa rungon PartCraftin skriptityötilaan, jossa kirjastofunktio `frame3d` ratkaisee sen luettavassa koodissa.

Menetelmä on suoran jäykkyysmenetelmä, lineaarinen ja ensimmäisen kertaluvun, ellei valitse *Toinen kertaluku (P-Delta)*. Menetelmä on tarkistettu oppikirjatapauksilla.

**Toinen kertaluku (P-Delta).** Valitse *Toinen kertaluku (P-Delta)* Suorita-painikkeen vieressä: jokainen yhdistelmä ratkaistaan uudelleen, kun sauvojen normaalivoimat vaikuttavat taipuneessa rungossa (jokainen sauva jaetaan neljään osaan, jotta sauvan taipuminen päiden välillä otetaan huomioon), kunnes normaalivoimat tasaantuvat. Tulosrivi kertoo kierrosten määrän ja sen, kuinka paljon heilahdus kasvoi. Momentit, taipumat, mitoitustarkastukset ja raportti käyttävät sitten näitä tuloksia. Rungon elastisen kriittisen kuorman yläpuolella ajo pysähtyy ja kertoo sen. Menetelmä on elastinen pienillä kierroilla ja vain taivutukselle, ilman jäykkyyden alennusta tai kuvitteellisia kuormia (ei sellaisenaan AISC:n suoraa analyysimenetelmää). Laatat, seinät ja jäykät lattiat pysyvät ensimmäisen kertaluvun mukaisina.

**Lattian paine laatoille.** Betonilaatoille (analyysi lukee laatan levyksi, kun sen materiaali on betoni) Kuormat-osassa on {{ui:Paine kaikille laatoille}}: kirjoita kN/m², valitse yllä oleva tapaus ja paina {{ui:Lisää laatoille}}. Paine levitetään alaspäin jokaiselle analyysin löytämälle laatalle, ja se listataan {{ui:Poista}}-linkillä. Se on yksi paine kaikille laatoille, ei yksi kullekin, eikä se ole määräyskuorma: kirjoita arvo, jonka insinööri antaa.

**Luonnolliset taajuudet (elementtimenetelmä).** Tulosten alla oleva {{ui:Elementtimenetelmä: luonnolliset taajuudet}} -osa löytää saman mallin alimmat muodot elementtimenetelmäkoneella: palkit päävapautuksineen, laatat ja seinät tasaisina nelisolmuisina kuorina, jäykät lattiat ja tuet. Valitse modien määrä (3, 6, 10 tai 20) ja laattaelementti (nelisolmuinen kuori paksuille tai ohuille laatoille, tai ohut laatta) ja paina {{ui:Etsi taajuudet}}. Taulukko antaa jokaisen modin taajuuden Hz:ssä, jakson sekunteina ja tehollisen modaalisen massan X-, Y- ja Z-suunnissa osuutena liikkuvasta massasta. {{ui:Näytä mallissa}} piirtää minkä tahansa modin samoin kuin taipunut muoto. Massa on materiaalin tiheys kerrottuna tilavuudella: kuormat eivät lisää massaa, eikä materiaalilla, jolla ei ole tiheyttä, ole massaa. Raportti (PDF, CSV) sisältää taulukon. Menetelmä on elastinen ja koskee vain pieniä siirtymiä, eikä siinä luoda maanjäristys- tai tuulikuormia mistään määräyksestä. Ei mitoitustarkistus: insinööri tarkistaa tulokset.

**Vastespektri, aikahistoria ja työntöanalyysi.** Taajuuksien alla on kolme osiota lisää, jotka käyttävät samaa elementtimallia. Kaikkien massa on materiaalin tiheys plus valitsemiesi tapausten alaspäin suuntautuvat kuormat, kukin kerrottuna kirjoittamallasi kertoimella (esimerkiksi Pysyvä kertoimella 1 ja Hyötykuorma sillä osuudella, jonka lasket massaksi).

{{ui:Vastespektri}} lukee kunkin modin antamastasi spektristä (jakso- ja kiihtyvyystaulukko tai ASCE 7 -muoto arvoista SDS, SD1 ja TL; painike {{ui:Käytä Seisminen-osion arvoja}} kopioi ne Seisminen-osiosta). Se yhdistää modit CQC-, SRSS-, kymmenen prosentin säännöllä tai itseisarvosummalla ja sitten X-, Y- ja Z-suunnat (100 % + 30 % tai SRSS). Se antaa pohjaleikkausvoiman, kerroskohtaiset sivusiirtymät, sauvojen päävoimat ja modi-taulukon, joka varoittaa, kun käytetyt modit kantavat alle 90 % massasta. Tulokset voi skaalata kertoimella tai aina itse kirjoittamaasi pohjaleikkausvoimaan asti; osio ei koskaan laske sitä pohjaleikkausvoimaa itse. Tuloksilla ei ole etumerkkiä.

{{ui:Aikahistoria}} ajaa maanliikkeen kiihtyvyyden modaalisella superpositiolla (tarkka tallenteen pisteiden välisille suorille) tai suoralla integroinnilla (Newmarkin keskimääräinen kiihtyvyys ja Rayleigh-vaimennus). Syöte on keksitty siniaalto tai pulssi (aina merkitty synteettiseksi), tallenne, jonka liität, tai tekstitiedosto, jonka avaat (aika ja kiihtyvyys, yksi kiihtyvyys riviä kohti askeleella, tai PEER-tyylinen tiedosto DT=-otsikolla; yksiköissä g tai m/s²). Se antaa kattosiirtymän ja pohjaleikkausvoiman ajan funktiona, kunkin kerroksen sivusiirtymän sekä sauvojen päävoimien verhokäyrän. Hyvin pitkän tallenteen mallit säilyttävät sen vain istunnon ajan.

{{ui:Työntöanalyysi}} työntää kattoa sivusuunnassa pienin askelin (kuvio kuten ensimmäinen modi tai tasainen), ja plastiset nivelet syntyvät sauvojen päihin, joilla on I-muoto. Nivel taipuu plastisella momentilla, joka pienenee normaalivoiman kasvaessa (lasketaan piirretystä muodosta, pyöristykset huomiotta). Kovettuminen on valinnainen, P-Delta on valinnainen, ja painovoimayhdistelmä voidaan soveltaa ensin. Se antaa kapasiteettikäyrän (pohjaleikkausvoima kattosiirtymää vastaan), ensimmäisen nivelen sekä kunkin nivelen tilan ja plastisen kierron. {{ui:Suorita epälineaarinen aikahistoria}} ajaa samat nivelet Aikahistoria-osion tallenteella pienissä malleissa. Nivelet syntyvät vain sauvojen päihin (aseta solmu sinne, missä nivelen pitää syntyä jänteen sisälle). Sauva, joka on vapautettu molemmista päistään, ei saa niveliä. Jäykisteiden myötääminen ja nurjahdus eivät ole mallinnettuja; laatat ja seinät pysyvät elastisina, eikä hyväksymiskriteerejä anneta. Ei mitoitustarkistus: insinööri tarkistaa tulokset. Asetukset tallennetaan mallin mukana, ja raportti sisältää taulukot.

Ei vielä toteutettu: nurjahdus, vastespektrin puuttuvan massan korjaus, tallenteen skaalaus, hyväksymiskriteerit niveliin (dynaaminen vaste on edellä), muut pinnakuormat kuin yksi paine kaikille laatoille, sauvojen siirrot, vain vetoa kestävät jäykisteet, seinät ja laatat rungossa sekä hitsattujen muotojen ja muiden kuin valssattujen I-profiilien mitoitustarkastukset. Katso [Ei vielä toteutettu](topic:not-built-yet).

## Yksiköt

Pituudet seuraavat työkalurivillä ({{ui:Yksiköt}}) valitsemaasi yksikköä kuten muu BimCraft: kuormien sijainnit, jotka kirjoitat ja näet ({{ui:Lähde}}, {{ui:Kohteeseen}}, {{ui:Kohdassa}}), solmukuormien ja reaktioiden pisteet, kerroskorkeudet kohdassa {{ui:Seisminen}}, sekä taipuma- ja siirtymäsarakkeet (jalat ja tuumat näyttävät nämä pienet pituudet desimaalituumina). Vaihda yksikkö milloin tahansa; välilehti piirtyy uudelleen. Voimat pysyvät kN:ssä ja kN·m:ssä. Raportti (PDF, CSV) ja CraftScript-tiedosto pysyvät millimetreissä, ja yksikkö on kirjoitettu niihin. Poikkileikkauskoot, tankohalkaisijat ja betonipeitteet kohdassa {{ui:Betoni}} pysyvät millimetreissä, kuten niiden nimi kertoo.

## Mitoitustarkastukset

{{ui:Mitoitustarkastukset}}-osa (sama kuin DetailCraftin) ottaa {{ui:Suunnittelustandardi}}-valinnan, ASCE 7 + AISC 360 tai EN 1990 + EN 1993-1-1, ja {{ui:Teräslaatu}}-valinnan. Anna jokaiselle kuormitustapaukselle sen laji (pysyvä, hyötykuorma, tuuli …) ja {{ui:Tee yhdistelmät}} kirjoittaa tapauksistasi standardin kuormitusyhdistelmät. Analyysi ajaa ne sitten kuten mitä tahansa yhdistelmää.

{{ui:Tarkasta sauvat}} tarkistaa sen jälkeen jokaisen **valssatun teräs-I-profiilin** DetailCraftin tarkistuksilla (veto, puristus nurjahduksen kanssa, taivutus sivuttais-kiertonurjahduksen kanssa, leikkaus, taivutus normaalivoiman kanssa, taipuma; lausekkeet ovat raportissa). Se näyttää, kuinka suuren osan kantokyvystään se käyttää, värikoodattuna mallissa. Se on **apu, kunnes insinööri on tarkistanut sen**.

**Mitkä sauvat tarkistetaan.** IFC-profiili ei kerro, onko teräs-I-muoto valssattu vai hitsattu. BimCraft kutsuu sitä valssatuksi vain, kun sen profiilinimi (tai elementin tyyppinimi) on AISC W- tai S-taulukon tai EN 10365 IPE-, HEA- tai HEB-taulukon koko (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **ja** tiedoston korkeus, leveys, uuma ja laippa vastaavat tuota kokoa 1 %:n tarkkuudella. Kaikki muut I-muodot (levypalkki, toiseen nimeen kirjoitettu koko tai muokattu koko) käsitellään hitsattuina ja palautuvat tilassa **ei tarkistettu**. Samoin käsitellään putket, kulmateräkset, U-profiilit ja muut poikkileikkaukset, hoikat osat ja vääntö. Tarkista nämä sauvat insinöörin kanssa.
