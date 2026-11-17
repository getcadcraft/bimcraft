---
title: Ratkaise törmäykset kunkin alan korjauksilla
summary: Törmäystuloksista Ehdota korjauksia -lista kertoo jokaisen törmäyksen kohdalla, mitä kukin ala voisi tehdä: kanava kierretään palkin alta, putki siirretään sivuun, pilaria siirretään, palkkiin tehdään aukko. Jokainen korjaus kokeillaan mallin kopiolla kompromisseineen, jotta voit hyväksyä tai hylätä sen. Hyväksytyt korjaukset tulevat yhtenä kumoamisvaiheena.
keywords: törmäys, törmäyksen korjaus, ratkaise törmäykset, koordinointi, ehdota korjauksia, kiertäminen, ohitus, siirto, kanava, putki, kaapelihylly, palkki, pilari, aukko, holkki, kompromissi, ala, rakenne, mekaaninen, putkitus, sähkö, arkkitehtuuri, avustaja
from: f7bafdd9
---

## Mitä teet

Muutat törmäyslistan päätöksiksi. Jokainen ala (rakenne, mekaaninen, putkitus, sähkö ja arkkitehtuuri) ehdottaa korjauksia vain omille elementeilleen, jokainen ehdotus tarkistetaan mallin kopiolla, ja sinä valitset.

## Vaiheet

1. Aja ensin törmäystarkistus. Katso [Tarkista törmäykset](topic:clash-check) ja [Tarkista putket ja kanavat rakennetta vastaan](topic:mep-against-structure).
2. Tulosten alla napsauta {{ui:Ehdota korjauksia}}. **Ehdotetut korjaukset** -paneeli aukeaa mallin viereen.
3. Jokaiselle törmäykselle näet kunkin alan ehdotukset, paras ensin. Jokainen rivi kertoo, mitä se tekee, ja sen kompromissit: ratkaiseeko se törmäyksen, kuinka monta uutta törmäystä se aiheuttaa, mitä sääntöjä se rikkoo, kuinka paljon reittiä se lisää tai kuinka pitkälle se siirtää, kuinka monta liitintä on sekä kustannuspisteet.
4. Napsauta {{ui:Näytä}} nähdäksesi elementit 3D:ssä. Napsauta haluamaasi korjausta kohdasta {{ui:Hyväksy}} (yksi per törmäys) tai valitse {{ui:Hylkää}}.
5. Alareunan rivi kertoo, mitä kaikki hyväksytyt korjauksesi tekevät yhdessä: kuinka monta törmäystä ratkaistaan, kuinka monta jää ja tuleeko uusia.
6. Napsauta {{ui:Käytä hyväksytyt korjaukset (yksi kumoamisvaihe)}}. Törmäystarkistus ajetaan uudelleen. {{ui:Kumoa}} palauttaa ne kaikki kerralla.

## Mitä kukin ala saa tehdä

- **Mekaaninen** (kanavat, lämmitys- ja jäähdytysputket): kiertää yli tai alle sillä haaralla, joka osuu, nostaa tai laskee koko reittiä, siirtää sivuun ja tekee suorakulmaisesta kanavasta litteämmän samalla poikkipinta-alalla.
- **Putkitus** (vesi, viemärit, kaasu, palo): samat siirrot, paitsi että painovoimaviemäriä ei koskaan kierretä. Se voi siirtyä vain kokonaisena säilyttäen kaltevuutensa.
- **Sähkö** (kaapelihyllyt ja suojaputket): samat siirrot. Hyllyn yläpuolella on pidettävä 150 mm vapaata tilaa kaapelin asentamista varten.
- **Rakenne**: pilarin siirto (enintään 300 mm) tai palkin pinnan tai laatan aukko reitille, joka kulkee sen läpi. Jokaisen rakenteellisen korjauksen kohdalla todetaan, että rakennesuunnittelija hyväksyy sen.
- **Arkkitehtuuri**: holkki seinään reitille, joka kulkee sen läpi, tai seinän siirto, jonka tiedetään olevan kantamaton.

## Mitä näet

- Säännön rikkovat korjaukset on merkitty: alle 25 mm:n rako johonkin muuhun, alle 2,100 mm:n vapaan korkeuden raja, palkin pinnan aukko, joka on suurempi kuin 40 % palkin syvyydestä tai liian lähellä sen päitä, tai palkki, jonka jänneväli muuttuisi.
- BimCraft voi tehdä osan korjauksista malliin: reitit, jotka piirsit Putki- ja Kanava-työkaluilla, ja piirtämäsi pilarit. Muut korjaukset merkitään **Vain neuvo**. Niiden hyväksyminen lisää havainnon Havainnot-välilehdelle.

## Hyvä tietää

- Korjaukset tulevat sovelluksen sisäisistä säännöistä. Niihin ei käytetä tekoälyä.
- Jos liität avustajan (katso [Anna tekoälyavustajan työskennellä mallisi kanssa](topic:assistants)), se voi lukea törmäykset ja lisätä omia ehdotuksiaan yhdelle alalle avoimeen paneeliin. Ne tarkistetaan samalla tavalla, ne on merkitty avustajan nimellä, eikä mitään muuteta ennen kuin hyväksyt ja käytät ne.
- Kopio tarkistetaan laatikoilla jokaisen elementin ja jokaisen reittihaaran ympärillä, joten vino reitti voi näyttää törmäyksen, jota törmäystarkistus ei näyttäisi. Aja törmäystarkistus uudelleen korjausten käytön jälkeen: se on viimeinen sana.
- Rajat (kuinka pitkälle reitti voi siirtyä, kuinka korkealle kierto voi nousta ja rako) ovat paneeliin kirjoitettuja oletuksia.

## Seuraavaksi

- [Havainnot ja BCF-tiedostot](topic:issues-bcf)
- [Piirrä putki- ja kanavareittejä](topic:pipes-and-ducts)
