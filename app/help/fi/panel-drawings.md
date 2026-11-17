---
title: Paneelipiirustukset puu- tai kevytteräsrakenteelle
summary: Kehystä mallin seinät, lattiat ja katot paneeleiksi puusta tai kevytteräksestä, näe jokainen pystytolppa, koolaus, ylipalkki, palkki ja parras mittakaavassa, ja tallenna leikkausluettelo CSV-tiedostona sekä valmistuspiirustukset PDF-tiedostona.
keywords: paneeli, runkotyö, valmistuspiirustus, leikkausluettelo, kevytteräs, teräspystytolppa, LGS, puu, palkki, parras, ylipalkki, varastopituus, PDF
from: c09f916e
---

## Avaa paneelit

Valitse {{ui:Paneelipiirustukset}} {{ui:Koontiversio}}-valikosta (tai kirjoita {{cmd:PANELS}}). Luettelossa on jokainen piirretty seinä, jokainen lattia ja jokainen katto mallissa, kukin valintaruudulla. Seinissä ovet ja ikkunat ovat aukkoina. Lattia kehystetään suorakulmioksi sen ulkoreunan ympärille, ja palkit kulkevat lyhyempään suuntaan. Katto kehystetään harjakatoksi seinien ulkoreunan ylle katon kaltevuudella. Luettelo kertoo tämän, koska aumakatto tai monimutkainen katto ei ole harjakatto.

## Materiaali, koko ja jako

Valitse {{ui:Material}}: **Puu** tai **Kevytteräs**. Teräsosat ovat C-pystytolppia, joiden nimi kertoo syvyyden ja paksuuden (esimerkiksi C92-1.2), ja koolausta varten on ratakisko. {{ui:Sauvan koko}} valitsee yhden koon kaikille valituille paneeleille, tai jätä se oletukseksi, jolloin kunkin paneelityypin oletukset käytetään. {{ui:Jako}} on pystytolppien, palkkien tai parrasten välinen etäisyys. Nämä ovat lähtöarvoja, jotka asetat itse. Ne eivät ole rakennusmääräystarkistus: se, kantaako tietyllä jaolla oleva pystytolppa seinää ja kantaako ylipalkki tietyn jänteen, kuuluu rakennusmääräysten taulukoihin (Rakennusmääräykset-lisäosassa on IRC) ja suunnittelijallesi.

## Mitä saat

Ensimmäinen valittu paneeli piirretään mittakaavassa valintaikkunaan mittoineen. {{ui:Leikkausluettelo (CSV)}} tallentaa jokaisen paneelin osat merkinnän, koon ja pituuden mukaan sekä varastopituudet, jotka ostetaan. {{ui:Valmistuspiirustukset (PDF)}} tallentaa yhden A3-sivun jokaista paneelia kohden, jokainen osa merkittynä ja sen leikkausluettelo mukana. {{ui:Piirustus (SVG)}} tallentaa ensimmäisen paneelin piirustuksena. Kaikki, mitä kehystyskoodi ei voi kehystää (aukko liian lähellä seinän päätä, ylipalkki, joka ei mahdu koolausten alle, osa, joka on pidempi kuin pisin varastopituus), luetellaan myös **Ongelmat**-kohdassa.

## Mitä se ei tee

Paneelit ovat piirustuksia, jotka tehdään mallista aina, kun pyydät niitä: mallin sisään ei kirjoiteta mitään, joten ne vastaavat aina mallia. Jos haluat kehystyksen malliin sauvoina, käytä puuseinille, -lattioille ja -katoille {{ui:Rungotus}}-toimintoa.
