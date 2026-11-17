---
title: Undirstöður undir veggjunum
summary: Settu plötu á jörðu, undirstöðuveggi með plötu, skriðkjallara eða kjallara undir byggingu með einum smelli; sökklar eru mældir út frá veggjunum og fjölda hæða, og undirstaðan fylgir þegar veggirnir færast.
keywords: undirstaða, sökkull, plata á jörðu, þykkur jaðar, einsteypt plata, undirstöðuveggur, stöpulveggur, skriðkjallari, kjallari, kjallaraveggur, frost, steypa, breidd sökuls
from: c0e20172
---

## Hvað þú gerir

Gefðu byggingunni undirstöðu sem passar við veggina. BimCraft fylgir ytri hlið veggjanna, mælir sökla út frá gerð veggjanna og hversu margar hæðir standa á þeim, og býr undirstöðuna til aftur í hvert sinn sem veggirnir breytast.

## Settu undirstöðu

1. Á kótanum þar sem veggirnir standa á henni (venjulega sá fyrsti), opnaðu {{ui:Smíð}} og veldu {{ui:Undirstaða}}.
2. Veldu gerðina:
   - **Plata á jörðu**: 4" steypt plata þar sem efri brúnin er gólfið, með þykkum jaðri undir veggjunum.
   - **Undirstöðuveggir og plata**: undirstöðuveggir upp að gólfi á sökklum, með plötu innan þeirra.
   - **Skriðkjallari**: undirstöðuveggir sem enda undir gólfgrindinni, á sökklum, án plötu.
   - **Kjallari**: undirstöðuveggir í fullri hæð á sökklum, með kjallaraplötu, undir gólfgrindinni.
3. Bentu inn í bygginguna: sökklarnir birtast strikaðir með stærð sinni. Smelltu.

Að smella á byggingu sem þegar hefur undirstöðu velur hana, svo þú getir breytt henni í stað þess að bæta við annarri.

## Breyttu henni

Veldu undirstöðuna (smelltu inni í byggingunni með {{ui:Undirstaða}}, eða smelltu á einhvern hluta hennar í 3D-sýninni eða líkantrénu) og breyttu henni í **Eiginleikum**: gerðinni, breidd og dýpt sökulsins, hversu djúpt undirhlið sökulsins er, þykkt veggjanna, hversu langt undir gólfinu veggirnir stoppa, hæð kjallarans og þykkt plötunnar. Sérhver breyting er eitt skref í afturköllun.

Stærðir merktar **auto** koma frá veggjunum: sökklar 12", 15" eða 23" breiðir fyrir eina, tvær eða þrjár hæðir á plötu eða undirstöðuveggjum, 18", 22" eða 27" yfir skriðkjallara eða kjallara, og 4" breiðari undir múr- eða steypuveggjum. Sláðu inn stærð til að stilla þína eigin; sláðu inn `0` til að fara aftur í auto.

:::warning
Sjálfvirku stærðirnar eru merktar sjálfgefin gildi fyrir dæmigerð léttbyggð hús, ekki verkfræði. Hönnuður eða verkfræðingur athugar sökla, dýpt og veggi með tilliti til jarðvegs, frostdýptar og álags.
:::

## Það sem er vistað

Undirstaða er vistuð sem IFC-einingasamsetning („Foundation“) úr sökli (eða þykkum jaðri plötu), undirstöðuvegg og plötu eftir því sem gerðin krefst, öll úr steypu, hvert með sitt magn: lengdir, breidd, hæðir, flatarmál og rúmmál, tilbúið fyrir magntökur.

## Góð að vita

- Færðu, bættu við eða eyddu veggjum og undirstaðan undir þeim er búin til aftur; teiknaðu veggi á kótanum fyrir ofan og sökklarnir fyrir neðan breikka fyrir aukahæðina.
- {{key:Delete}} fjarlægir valda undirstöðu með öllum hlutum sínum.
- Með landi staðarins í líkaninu (sjá [Land staðarins, byggingarplan og hellulögn](topic:terrain)) fara undirstöðuveggir og sökklar skriðkjallara niður með því í 8" þrepum.
- Sökklar undir innveggjum eru ekki gerðir ennþá.
