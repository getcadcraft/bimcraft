---
title: Etsi linkitetyt piirustukset ja kuvat
summary: Näytä piirustuksen linkitetyt piirustukset (viitteet) ja piirustuskehyksen kuvat avaamalla sen kansio tai lisäämällä tiedostot käsin.
keywords: xref, ulkoinen viittaus, linkitetty piirustus, liitä, peitto, kuva, logo, piirustuskehys, puuttuva xref, etransmit, viitteiden hallinta
from: 5593d4b1
---

## Mitä teet

Tee piirustuksesta täydellinen: näytä piirustukset, joihin se linkittyy (ulkoiset viitteet eli xref-viitteet), ja kuvat, joita se käyttää, kuten logon piirustuskehyksessä.

## Helppo tapa: avaa kansio

1. Napsauta {{ui:Open a folder}} ja valitse kansio, jossa piirustus ja sen linkit ovat, esimerkiksi hankkeen koko `Cad`-kansio.
2. Vieritä kansioraporttia kohtaan **CAD-piirustukset**.
3. Napsauta piirustusta.
4. Katso oikealla olevaa {{ui:Properties}}-paneelia kohdissa **Linkitetyt piirustukset** ja **Kuvat**.

BimCraft etsii jokaisen linkitetyn piirustuksen sen nimellä ("*nimi*.dwg"), ensin samasta kansiosta kuin piirustus ja sitten mistä tahansa avaamasi kansion sisältä. Kuvat etsitään samalla tavalla, ja myös samankaltaisella nimellä: eTransmit- tai Revit-vienti lisää usein hankkeen nimen eteen, joten `logo.png` löytyy nimellä `Tower-logo-5425051.png`.

## Toinen tapa: lisää tiedostot käsin

1. Avaa piirustus yksinään.
2. Oikealla, kohdassa **Linkitetyt piirustukset**, napsauta {{ui:Add linked drawings…}}. Kohdassa **Kuvat** painike on {{ui:Add pictures…}}; molemmat avaavat saman valitsimen.
3. Valitse linkitetyt `.dwg`-tiedostot ja kuvatiedostot. Voit valita useita kerralla.
4. Odota, kun BimCraft avaa piirustuksen uudelleen niiden kanssa.

## Mitä pitäisi näkyä

Jokainen linkitetty piirustus ja kuva luetellaan tunnisteella:

| Tunniste | Tarkoittaa |
|---|---|
| **Näytetään** | Löydetty ja piirretty. Sen alla oleva polku kertoo, mistä, tai "lisätty käsin". |
| **Näytetään, samankaltainen nimi** | Kuva löydettiin samankaltaisella nimellä. Tarkista, että se on oikea. |
| **Ei löytynyt** | Ei kansiosta eikä lisäämistäsi tiedostoista. Puuttuva kuva näkyy tyhjänä kehyksenä. |
| **TIFF ei näy selaimessa** | Kuva on TIFF-tiedosto, jota selaimet eivät piirrä. Tallenna se PNG-muodossa samalla nimellä ja lisää se. |
| **Ei voitu lukea** | Tiedosto löytyi, mutta sitä ei voitu avata kuvana. |

{{ui:Drawing}}-paneeli vasemmalla näyttää linkitettyjen piirustusten osalta "*n* / *m* ladattu". Linkitettyjen piirustusten tasot näkyvät kohdassa {{ui:Layers}} muodossa "*linkin nimi*|*taso*".

## Yleisiä virheitä

- **Avataan vain piirustus.** ”Tämä piirustus näyttää vain oman sisältönsä, kunnes sen linkitetyt piirustukset lisätään. Koko hankekansion avaaminen löytää ne automaattisesti.”
- **Avataan liian pieni kansio.** Jos linkit ovat sisarkansiossa, avaa emokansio.
- **Uudelleen nimetyt linkit.** BimCraft yhdistää linkitetyt piirustukset nimen perusteella. Levyllä uudelleen nimettyä linkkiä ei löydetä; lisää se käsin.
- **Linkkien linkit.** BimCraft lataa avoimen piirustuksen linkittämät piirustukset. Niiden sisällä linkitettyjä piirustuksia ei etsitä, joten ne eivät yleensä näy tässä versiossa.
