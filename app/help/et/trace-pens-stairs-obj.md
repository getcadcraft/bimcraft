---
title: Tasandi jälgimine, pliiatsid vaate kaupa, trepi visand ja OBJ avamine
summary: Näita teist tasandit plaani all katkovoonjoonena ja joonda see; anna seintele, ustele ja akendele üks vaates oma pliiats; joonista kõnnijoon trepi saamiseks ja ava Wavefront OBJ-võrk.
keywords: jälgimisviide, varjatud, alusjoonis, pliiats, joonepaksus, joonetüüp, ülekirjutus, trepp, visand, vahetasand, OBJ, võrk, import, Wavefront
from: 333ebbde
---

## Tasandi jälgimine

Vali menüüst {{ui:Build}} {{ui:Trace}} ja seejärel vaade loendist: teise korruse plaan, korruse lae plaan või väljalõige (lõigatud selle väljalõike järgi). Selle seinad, postid ja põrandad näidatakse plaanil, mida joonistad, katkovoonjoonena. Liiguta seda klõpsates viitel baaspunkti ja seejärel kohta, kuhu see punkt peaks jõudma, või sisesta X, Y ja nurk (see pöörleb ümber oma keskpunkti). {{ui:Reset}} paneb selle tagasi, {{ui:Hide}} eemaldab selle. See on ainult viide: midagi ei saa seda valida, seda ei printida ega salvestata IFC-sse. BimCraft mäletab seda iga korruse jaoks selles brauseris.

## Pliiatsid vaate kaupa

Vali {{ui:Pens}}. Ütle, milleks pliiats on: kõik seinad, kõik uksed, kõik aknad, valitud elemendi tüüp või valitud elemendid. Vali joonepaksus, joon (tahke, katkendlik, punktiirjoon) ja värv, seejärel {{ui:Apply}}. Muudatus kehtib ainult selle korruse plaanile. Valik tühistab tüübi ja tüüp tühistab kogu kategooria. {{ui:Clear all}} eemaldab need. Need jäävad alles selles brauseris. Märgi **Pliiatsivärvid 3D-s**, et värvilised pliiatsid värvitaksid mudelit 3D-vaates (joonepaksus ja katkestus kuuluvad joonele, seega 3D-s näha on ainult värv); eemalda linnuke, et tagasi minna. {{ui:Print}} joonistab need plaani PDF-ile: paksus skaleerub ekraanilt (vaikimisi seinapliiats 1,75 pikslit on 0,5 mm), katkestused jäävad katkestusteks ja värv prinditakse paberi teema väärtusena.

## Trepp visandist

Vali {{ui:Sketch stair}} ja klõpsa kõnnijoone nurki, alumine astmeast esimesena. Üks joon on sirge trepp, kaks täisnurga all kohtuvat joont on L ja kolm joont (üles, üle, tagasi) on U. Vahetasandi joonistamiseks vajuta {{key:L}}: klõpsa selle nurki ja vajuta {{key:Enter}}; selle lühem külg määrab trepi laiuse. Trepi paigutamiseks vajuta {{key:Enter}}. Iga astmepind arvutatakse sinu joone pikkuse ja tõusude arvu järgi, mida kõrgus nõuab. Pärast seda on see tavaline trepp: muuda seda jaotises Omadused ning trepikoda ja käsipuud järgivad.

Märgi tööriista reas **Tee perekonnaks** (või vajuta {{key:F}}) enne {{key:Enter}} vajutamist, et paigutada trepp hoopis perekonnana (sirge, L- või U-trepp). See tuleb sisse ühe elemendina ja avaneb perekonna redaktoris koos laiuse, astmepinna, kogukõrguse, igas marsis olevate astmete ning U-trepi vahega parameetritena, nii et saad lisada suurusi, plaanisümbolit või kuumpunkte. Astmed ja tõusu kõrgus tulenevad neist. Sellel ei ole käsipuid ega trepikoda: need kuuluvad tavalise trepi juurde.

## OBJ avamine

Ava `.obj`-fail nagu iga teine fail. OBJ-l ei ole ühikuid, seega BimCraft loeb meetreid, Y üles, nagu enamik programme seda kirjutab. Iga objekt või grupp muutub üheks võrguelemendiks ühel korrusel ning seda saab seejärel vaadata, mõõta, lõigata, paigutada mudelisse ja salvestada IFC-na. Jooned, kõverad ja pinnad jäetakse välja ning olekuriba ütleb seda.

Objekt, mis on täpselt sirge prisma (suletud võrk kahe paralleelse, identse otsapinnaga ja nendega risti olevate tasaste külgedega: plaat, post, seinaplokk, auguga plaat), salvestatakse IFC-sse IFC enda ekstrueeritud tahkisena oma kontuuri ja sügavusega, mitte kolmnurkade loendina. Teised programmid loevad seda tõelise tahkisena, see jääb väikeseks ning selle sügavust ja kontuuri saab hiljem muuta. Olekuriba ütleb, mitu objekti sel viisil säilis. Kõik, mis ei ole täpselt prisma (koonilise kujuga, võrk, millel üks tipp on nihkunud, võrk, millel on vahe), jääb kolmnurkadeks. STEP-faili loetakse samal viisil.
