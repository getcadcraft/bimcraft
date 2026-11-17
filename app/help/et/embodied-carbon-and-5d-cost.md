---
title: Sisseehitatud süsinik ja kulud ajagraafikul
summary: Liitke mudeli sisseehitatud süsinik kokku avatud, muudetavast teguritabelist ning jaotage hinnad 4D-ajagraafiku peale kulu- ja rahavoogude kõveraks. Mõlemad lähtuvad väärtustest, mille sisestate või impordite.
keywords: sisseehitatud süsinik, süsinik, co2, kgco2e, heitmed, teguritabel, epd, 5d, kulu, rahavoog, s-kõver, ajagraafiku kulu, hinnad, koguste arvestuse hinnad
from: 83e82840
---

## Sisseehitatud süsinik

Avage paneel **Carbon**. Iga elemendi kogus (maht, pindala või pikkus) korrutatakse tabelist võetud teguriga elutsükli mooduli kaupa: tootmisetapp on kohustuslik, transport ja jäätmed on valikulised. Kogusummad koondatakse materjali, klassi ja korruse järgi ning ruutmeetri kohta põrandapinda.

**Teguritabel on teie oma.** BimCraftiga kaasas tulevad read on üldised algväärtused õige suurusjärgu piires. Need ei pärine andmebaasist, on märgitud kontrollimata ja tuleb asendada allikaga, mida kasutate (EPD, riiklik andmebaas või teie ettevõtte andmed). Muutke ridu paneelis või importige ja eksportige tabel CSV- või JSON-vormingus. Lisatud read tühistavad sama ID-ga algväärtuse. Tabel salvestatakse mudelisse.

Elemente, millele vastet ei leidu või millel puudub kogus, loetakse probleemideks, mitte ei arvestata nulliga.

## Kulud 4D-ajagraafikul

Avage paneel **Cost** 4D-ajagraafiku kõrval. Andke sellele hinnad (sisestage need, importige CSV- või JSON-failina või tooge TakeoffCrafti read), seostage iga hind märksõnade abil mudeli materjalidega, ja see hinnastab iga ülesande elemendid. Ülesande kulu jaotatakse selle alguspäevast lõpupäevani (ühtlaselt või alguses või lõpus koormatuna) ja paneel joonistab kumulatiivse rahavoo kõvera päeva, nädala või kuu kaupa, kuvades kulu etappide ja pakettide kaupa ning planeeritu võrdluse ehitatuga kuupäeval. Väljund on CSV. Midagi ei hinnastata enne, kui annate hinnad: neid pole ühtegi kaasas.

## Valuuta

Hinnatabel võib öelda, mis valuutas hinnad on (kolm tähte, näiteks USD või EUR). Paneelil 5D on selleks kast, see hoitakse failis koos hindadega ning JSON-eksport kannab seda kaasa. Enne seda loodud tabel või tabel, kus jätsite selle tühjaks, ei oma valuutat: selle kulud kuvatakse USD-na, kestas vaikevaluutana, ning paneel ja jooksvad summad sellest teatavad. Valuutasid ei teisendata.
