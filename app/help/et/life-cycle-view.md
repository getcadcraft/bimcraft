---
title: Vaata, mis kulub 50 aasta jooksul
summary: Mudelis olevad aknad, uksed, viimistlused ja katus, nende kasutusiga, aastad, mil iga osa asendatakse, ning kulu aasta kaupa ja selle nüüdisväärtus, kui sisestad ühiku hinna.
keywords: elutsükkel, kasutusiga, asendamine, hooldus, maksumus, nüüdisväärtus, diskonto, inflatsioon, 50 aastat, aknad, värv, katus, viimistlused, kogu eluiga
from: 1b849545
---

Vasakpaneeli jaotis {{ui:Elutsükli vaade}} loetleb, mis mudelis on ja mis kulub, ning millal see uuendatakse uuringuperioodi jooksul (esialgu 50 aastat). Mudelit ei muudeta.

## Loe seda

Iga osa näitab oma kogust (mõõdetud mudelist: akna pindala, välis- ja siseuksed, välisseina viimistlus, siseseina värv, põranda ja lae viimistlus, katuse projektsiooniala, trepid), **eluiga aastates** ja **ühiku hinda**. Osa asendatakse oma eluea, kahekordse eluea jne järel, kui see jääb enne uuringu lõppu: 30-aastane aken 50-aastases uuringus asendatakse üks kord, 30. aastal. Eluead on tüüpilised planeerimisnäitajad: muuda need vastama oma toodetele ja kliimale. Kulu ei ole eeldatud; sisesta see, et näha raha aasta kaupa, kogusummat ja selle nüüdisväärtust. Soovi korral lisa diskontomäär ja inflatsioonimäär.

{{ui:Salvesta ajakava (CSV)}} kirjutab komponendid ja aastad. Torud, kanalid, juhtmestik ja seadmed on samuti loetletud (vt allpool).

## Torud, kanalid, juhtmestik ja seadmed

- **Torud ja kanalid** on iga joonistatud lõigu meetrid. **Seadmed** (pumbad, ventilaatorid, ventiilid, terminalid, armatuur, pistikupesad, lülitid, kilbid ja muud asjad, mida vahekaart Varad jälgib) loetakse liigi järgi, igal liigil on planeerimise eluiga. Üksus, mille enda *kasutusiga* on määratud vahekaardil Varad, on oma real selle eluea järgi, ja kui sellel on paigaldamise kuupäev, algab see oma vanusest: 16-aastane pump 10-aastase elueaga on kohe asendamisel, seejärel iga kümne aasta järel.
- **Juhtmestik** on **hinnang**: plaanil mõõdetud kaugus kilbist mööda iga vooluahela seadmeid, lähimast alustades, korrutatud 1,25-ga marsruudi arvestamiseks. Mudel ei joonista kaablit, seega kontrolli seda oma koguste arvestusega.
- Eluead on planeerimisnäitajad, mida tuleb üle vaadata, mitte allikas.

## Süsinik iga asendusdetaili kohta

Märgi ära {{ui:Arvesta iga asendusdetaili sisemist süsinikku}}. Uus aken, uks, trepp, katus, toru või seadmetükk arvestatakse selle süsinikuga, mida mudeli sama liigi elemendid kannavad (vahekaardi Süsinik tegurid, ühiku kohta). Osa, millel ei ole elementi ega tegurit, nagu värv, viimistlused ja juhtmestik, näitab kriipsu ja on loetletud. Vana osa eluea lõppu ja selle asendamise tööd ei arvestata.
