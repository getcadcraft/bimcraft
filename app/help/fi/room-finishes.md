---
title: Huonepinnat ja pintaluettelot
summary: Kerro, mikä peittää kunkin huoneen lattian, seinät ja katon, lisää vyöhykkeitä, kuten laatoitettu roiskesuoja, ja hanki pintaluettelot huoneittain, seinittäin ja vyöhykkeittäin pinta-aloineen, laattamäärineen leikkauksineen ja alustan tilavuuksineen.
keywords: pinnoite, pinnoitteet, pintaluettelo, huonepinnat, lattiapinnoite, seinäpinnoite, kattopinnoite, listalauta, laatta, laatat, leikatut laatat, laattamäärä, hukka, alusta, lattiavalu, alustalevy, rappaus, vyöhyke, roiskesuoja, märkätila, sisustus, määrät
from: 8c30498c
---

## Mitä teet

Kerro BimCraftille kerran, millä kukin huone on viimeistelty. Pintaluettelot antavat sen jälkeen pinta-alat, tilattavat laatat ja alustan tilavuudet, ja ne muuttuvat mallin mukana.

## Vaiheet

1. Ota {{ui:Piirrä}} käyttöön, avaa vasemmasta paneelista **Luettelot** ja napsauta **Huonepinnat**.
2. Kohdassa **Pinnoitetyypit** napsauta **Lisää pinnoitetyyppi**. Anna sille nimi, laji (Laatta, Levy, Pinnoite tai Lauta) ja paksuus. Laatalle anna laatan pituus ja leveys, sauma sekä hukkavaranto prosentteina. Jos pinnoitteen alla on jotain (lattiavalu, alustalevy, rappauskerros), nimeä se kohdassa **Alusta** ja anna sen paksuus.
3. Kohdassa **Huoneet** valitse kunkin huoneen lattian, seinän ja katon pinnoite. Kirjoita listalaudan nimi ja korkeus, jos huoneessa on sellainen.
4. Kohdassa **Vyöhykkeet** napsauta **Lisää vyöhyke** huoneen osalle, jolle tulee toinen pinnoite:
   - **seinä**-vyöhyke on kaista kahden lattiasta mitatun korkeuden välissä (laatoitettu roiskesuoja korkeuden 0–1200 välillä, alaseinäpinnoite). Se on kaikilla huoneen seinillä, tai valitse mallista huoneen seiniä ja napsauta **Päällä**-painiketta rajataksesi sen niihin;
   - **lattia**- tai **katto**-vyöhyke on alue, jonka kirjoitat. Se vähennetään huoneen oman pinnoitteen alasta.
5. Napsauta **Tallenna**. Se on yksi kumoamisvaihe. Pituudet kirjoitetaan projektin yksiköissä.

## Luettelot

Luettelot-luetteloon tulee neljä kohtaa:

- **Pinnat huoneittain**: jokainen huone lattian, seinän ja katon pinnoitteineen, niiden pinta-aloineen sekä listalauta pituuksineen.
- **Pinnat seinittäin**: jokainen seinän osuus huoneen puolella ja se kaistale, jonka pinnoite peittää, pituuksineen, bruttopinta-aloineen, vähennyksineen, nettopinta-aloineen sekä laatoille kokonaiset laatat, leikatut laatat ja tilattavat laatat.
- **Pinnat vyöhykkeittäin**: jokainen vyöhyke pinnoitteineen, nettopinta-alineen, laattoineen ja alustan tilavuuksineen.
- **Pinnoitteiden määrät**: yksi rivi pinnoitetta kohti: nettopinta-ala, kokonaiset ja leikatut laatat, tilattavat laatat, alusta ja sen tilavuus sekä pinnoitteen oma tilavuus.

Ryhmittele, summaa, tallenna ja vie ne kuten mikä tahansa luettelo: katso [Luettelon asettelu, tallennus ja vienti](topic:schedule-layouts). Napsauta lukua valitaksesi, mistä se on peräisin: seinän vähennykset valitsevat sen ovet ja ikkunat.

## Miten pinnat mitataan

- **Seinät**: jokainen seinän osuus huoneen puolella; sen pituus huoneen suuntaan kerrottuna sillä korkeudella, jonka pinnoite peittää, vähennettynä kunkin oven ja ikkunan osalla tuon korkeuden sisällä. Huonetta matalampi seinä viimeistellään sen omaan yläreunaan asti. Projektin mittaustapa päättää, mitkä aukot ovat liian pieniä vähennettäviksi ([Luettelot](topic:plan-schedules-and-pdf)).
- **Lattiat ja katot**: huone seinäpintojen sisäpuolelta, vähennettynä siinä olevat saarekkeet.
- **Listalauta**: huoneen seinien pituus, vähennettynä ovien leveydellä.
- **Laatat**: asetetaan ruudukkona pinnan yhdestä kulmasta, laattojen väliin yksi sauma. Pintaan kokonaan osuva laatta on kokonainen laatta; osittain pinnalla oleva laatta (reunassa, aukon ympärillä) on leikattu laatta. Tilattavat laatat ovat kokonaiset ja leikatut yhteensä lisättynä hukkavarannolla, pyöristettynä ylöspäin. Jokainen leikattu laatta lasketaan uutena laattana: palasia ei käytetä uudelleen.
- **Alustan tilavuus**: nettopinta-ala kerrottuna alustan paksuudella.
- Lukumäärä, jonka merkintä on **≈**, lasketaan pinta-alasta eikä asetella laatta kerrallaan: pinta, josta on vähennetty kirjoitettu vyöhyke, tai hyvin suuri pinta.

## Hyvä tietää

- Pinnoitteet tallennetaan rakennustiedostoon (projektin ominaisuusjoukko `CadCraft_Finishes`). Jokaisella pinnoitteen saaneella huoneella on myös vakiomuotoinen IFC-ominaisuusjoukko `Pset_SpaceCoveringRequirements`, joten muut ohjelmat lukevat nimet.
- Laattakuvio alkaa kulmasta. Huoneen keskelle sijoitettua asettelua, kuviointia (kalanruoti, tiilisidos) ja palasten uudelleenkäyttöä ei lasketa.
- Kaareva seinä ja huoneen raja, joka ei ole seinä (huoneen erotin), luetellaan kohdassa **Muu raja** pituuksineen ilman aukkoja.
- Aiemmin ollut **Pinnat**-kohta luettelee seinätyyppien pinnoitekerrokset; **Kerrokset: pinta-ala ja tilavuus** luettelee jokaisen kerroksellisen tyypin jokaisen kerroksen. Tässä määritetyt huonepinnat ovat ne, jotka sovelletaan huoneeseen näiden päälle.
- Avustaja voi asettaa pinnoitteet puolestasi komennolla `finishes_set`: katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants).
