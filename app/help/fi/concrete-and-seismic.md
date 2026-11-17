---
title: Tarkasta betonisauvat ja laske seismiset kuormat
summary: Aseta avatun IFC-mallin betonipalkkien ja -pilarien raudoitus, tarkasta ne ACI 318-19 -standardin mukaan, laske jäykillä lattioilla ekvivalentit vaakavoimat ASCE 7-22 -standardin mukaan ja näe kerroksen siirtymä. Apuväline insinöörin tarkistettavaksi.
keywords: betoni, raudoitettu betoni, ACI 318, ACI 318-19, raudoitus, palkki, pilari, leikkaus, sidokset, seisminen, maanjäristys, ekvivalentti vaakavoima, ELF, ASCE 7-22, siirtymä, kerroksen siirtymä, lattiat, jäykkä levy, kerrospaino, käyttöaste, rakenteellinen, insinööri, analyysi
from: 2f342e72
---

{{ui:Betonisauvat}}- ja {{ui:Seismiset kuormat}}-lohkot {{ui:Analyysi}}-välilehdellä tarkastavat avoimen IFC-mallin raudoitetut betonipalkit ja -pilarit sekä laskevat maanjäristyksen sivuttaisvoimat rungon lattioille. Ne ovat samat lohkot kuin DetailCraft-ohjelmassa, ajettuna {{ui:Analyysi}}-välilehden analyysin jälkeen, ja ne tallennetaan IFC-tiedostoon muiden analyysiasetusten kanssa.

:::warning
Tulokset ovat **insinöörin tarkistettavaksi**: apuväline, kunnes insinööri on sen tarkistanut. Betonitarkastukset käyttävät ensimmäisen kertaluvun voimia (pilaria kehässä, jonka sanot sivusiirtymättömäksi, mitoitetaan sen suurennetulle momentille), ilman sivusiirtymän suurennusta, ilman vääntömitoitusta, ilman seismistä detaljointia (ACI-luku 18) ja ilman sidosten detaljointia. Seismisissä kuormissa ei ole redundanssikerrointa, pystysuuntaista seismistä vaikutusta, vääntövahvistusta eikä P-delta-vaikutuksia. **Tuulikuormia ei ole toteutettu**: standardin tuulilukuja ei ole projektin viitesivuilla.
:::

## Mitä BimCraft lukee

Analyysi lukee mallin palkit, pilarit ja vinot tukisauvat profiileineen (katso [Analysoi rakenteellinen runko](topic:frame-analysis)). {{ui:Betonisauvat}}-lohko luettelee jokaisen niiden käyttämän poikkileikkauksen. Paina {{ui:Aseta betoniksi…}} poikkileikkaukselle, joka on betonia: BimCraft ottaa suorakulmion profiilin pinta-alasta ja jäykkyydestä (leveys b ja korkeus h, joita voi sen jälkeen muuttaa). Poikkileikkaus, joka ei ole lähellä suorakulmiota (valssattu teräsprofiili), antaa koon, joka pitää korjata, tai se jätetään rauhaan.

Betoniksi asetettu poikkileikkaus ja jokainen elementti, jonka materiaalin nimi on betoni, analysoidaan betonina: E = 4700 √f′c, 2400 kg/m³, ja oletuksena **halkeilleina poikkileikkauksina** (pilarit 0.70 Ig, palkit 0.35 Ig; ACI 318-19 taulukko 6.6.3.1.1(a)). Valitse {{ui:Bruttopoikkileikkaukset}}, jos haluat poistaa tämän käytöstä. Ilman näitä asetuksia malli analysoidaan täsmälleen kuten ennen.

## Raudoitus, yhdistelmät, tarkistus

Anna kunkin poikkileikkauksen suojabetoni, yläraudat, alaraudat ja sivuraudat (tai pilarin häkki) sekä sidokset. Aseta f′c, fy, fyt ja K sekä sivusiirtymä tai sivusiirtymättömyys. Anna kuormitustapauksille niiden laji, paina {{ui:Tee yhdistelmät}} (ASCE 7 §5.3.1) ja sitten {{ui:Tarkasta betoni}}: jokaiselle sauvalle tulee käyttöaste, ja se värjätään mallissa. Kapasiteetin ylittävät sauvat ja kerroksen siirtymä, joka ylittää rajansa, luetellaan kohdassa {{ui:Ongelmat}} kohtineen. Napsauta yhtä valitaksesi elementin.

## Lattiat ja seismiset kuormat

{{ui:Seismiset kuormat}}-lohkossa {{ui:Etsi kerrokset}} ottaa tasot, joissa kaksi tai useampi palkki kohtaa. Jokaisesta tulee jäykkä levy. {{ui:Ota painot kuormitustapauksista}} lukee kunkin lattian seismisen painon tapauksista, joille annat kertoimen. Täytä SDS, SD1, S1, R, Ie, Cd, TL, järjestelmä ja riskiluokka ja paina sitten {{ui:Tee seismiset kuormitustapaukset}} (ASCE 7-22 12.8: jakso, pohjaleikkausvoima, jakautuminen lattioille ylöspäin, 5 %:n satunnainen vääntö). Kerroksen voimat ja siirtymätarkistus (12.12) näkyvät ajon jälkeen. Sama jakso ja kerroksen jäykkyys syöttävät maanjäristyksen kohdassa [Toista tulva, tuuli tai maanjäristys](topic:hazard-playback), kun valitset lähteeksi analyysirungon.

Betonilaatat ja -seinät muuttuvat analyysissä levyiksi, ja {{ui:Laatan raudoitus}}-lohko laskee niiden tarvitseman teräksen metriä kohden. Kunkin tarkistuksen yksityiskohdat ovat DetailCraft-ohjelman samannimisessä aiheessa.
