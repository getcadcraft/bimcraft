---
title: Seinte, põrandate ja katuste karkass
summary: Loo mudelist vahepostid, rõhttalad, ülalatid, talad, sarikad või fermid ja hoia need koos mudeliga; need tehakse uuesti, kui seinad, avad, põrandad või katus muutuvad, ja puitmaterjali loend on lõikenimekiri.
keywords: TJI, I-talad, talade ulatuste tabel, tabeli laadimine, karkass, vahepost, vahepostid, ülemine rõhttala, ülalatt, nurkpost, kõrvalpost, aknalaud, blokeerimine, nurk, California nurk, T-liide, talad, serv, servatala, sarikas, pooleldi sarikas, oru sarikas, lühike sarikas, harjalaud, lae talad, kinnitusvarras, fermid, puitmaterjal, lõikenimekiri, 2x4, 2x6, vahe, keskelt keskele
from: 76d0ffb5
---

## Mida teete

Karkassi hoone sellest, mida joonistasid. BimCraft paigutab vahepostid, rõhttalad ja ülalatid seintesse, talad põrandatesse ning sarikad (või fermid) katusesse, määrab nende suuruse vaiketabelitest, mis on märgistatud, hoiab need mudeliga koos ja teeb need uuesti, kui see, mida nad raamivad, muutub. Loend **Puitmaterjal** on lõikenimekiri.

## Karkassi loomine

1. Korrusel ava {{ui:Versioon}} ja vali {{ui:Karkass}}.
2. Vali **vahe** (16" või 24" keskelt keskele; 400 või 600 mm), **nurgad** (kolmepostiline või California), katuste puhul **Sarikad** või **Fermid** ning kas seintel on keskkõrgusel rida **blokeerimist**. Põrandate jaoks vali **Saetud puit** või **TJI (esialgne)** ning sea talade suund automaatseks, plaanil X või plaanil Y.
3. Klõpsa **Karkassi kõik seinad** või klõpsa ühte seina, põrandat või katust (katusel, millel katus seisab), et karkassida ainult see.

Lülita **Näita karkassit** välja, et peita kõik karkassitükid nagu kiht; **Läbipaistev** peidab seinad, põrandad ja katused, mis on karkassitud, nii et saad vaadata ainult karkassi.

## Mida saad

- **Seinad**: alumine rõhttala (lõigatud uste juures), topeltülemine rõhttala, vahepostid paigutuse järgi seina algusest, ülalatid ja ülalatt iga ukse ja akna juures, lühikesed postid ülalattide kohal ja aknalaudade all, jämedad aknalauad akende all, nurgad seinte kohtumiskohtades (läbiv sein võtab nurgapostid), kaks tugipostikut, kui teine sein liitub T-kujuliselt, ning blokeerimine vahepostide vahel.
- **Põrandad**: vaikimisi talad üle põranda lühema külje või mööda sinu valitud plaanitelge; servatalad ümber serva ning kahekordsed kõrvalpostid ja ülalatid trepiaugu ümber, talad läbi augu lõigatud lühikesed (saba-talad). TJI-režiim valib väikseima loetletud seeria ja sügavuse, mis katab mõõdetud vaba ulatuse valitud vahega.
- **Katused**: tavalised sarikad iga räästa suhtes ristis, puusa- ja oruservadel lõikavad pooleldi sarikad, puusa- ja orusarikad, harjalauad, lae talad rõhttaladel ja kinnitusvardad või lihtsad fermid vahega, üks tükk kaupa.

## Muuda seda

Vali mis tahes karkassitükk 3D-vaates või mudelipuus. Aken **Omadused** näitab selle karkassi: muuda vahet, põranda talade liiki ja suunda, nurki, blokeerimist või katuse karkassi. Seinte, uste ja akende liigutamine või põranda või katuse muutmine teeb karkassi automaatselt uuesti.

Et säilitada tükk, mille panid tahtlikult, kui karkass tehakse uuesti, vali see ja vali **Säilita see tükk karkassi uuestil koostamisel**. Säilinud tükk jääb oma kohale; kui selle ümber olev karkass muutub, on see märgitud, et saaksid kontrollida.

## TJI-põrandad sinu laaditud tabelist

BimCraft ei sisalda talade tootjate ulatuste tabeleid (need kuuluvad tootjale ja muutuvad iga väljaandega). Vali põranda karkass, sea **Põrandatalad** väärtuseks **TJI (esialgne)** ja vali aknas **Omadused** **Laadi tabel…**: fail vormingus `cadcraft-tji-table`, JSON või CSV, mille koostasid tootja praegustest ulatuste tabelitest. See nimetab tootja, toote ja väljaande ning allika, kust arvud pärinevad, ja loetleb iga koormusjuhu kohta (elukoormus, alaline koormus, läbindi piir, toetuspikkus) iga seeria ja sügavuse suurima vaba ulatuse igas vahes.

- BimCraft võtab põranda **vaba ulatuse**, valib madalaima sügavuse ja selle piires seeria, mille loetletud ulatus katab selle vahe ja koormusjuhu jaoks, mille valisid, ning karkassib põranda selle järgi. Kui ulatus või vahe on tabelist väljas, ütleb see seda ega muuda midagi.
- Koormused, läbindi piir, toetuspikkus, tabel ja lause „Esialgne paigutusjuhend; lõplik valik vajab tootja tabeleid ja projekti koormusi” trükitakse puitmaterjali loendile, kirjutatakse mudelisse koos karkassiga ning need on loetletud paneelis **Probleemid** märkusena. Tabel, mis on märgitud näidisena, ütleb seda hoiatuses.
- Kui on sisse lülitatud lisandmoodul **Ehitusnõuded**, loeb selle põranda-talade reegel ka laaditud tabelit; ilma tabelita jäetakse TJI-talad selle kontrolli välja nagu varem.
- Tabel jääb sellesse brauserisse, kuni tühjendad selle või laadid teise. Fail: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: tollid, jalad, psf; või `metric`: mm, meetrid, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) ja `rows` (`series`, `depth`, `spans`: iga juhu id kohta vahe ja suurim vaba ulatus, näiteks `"16": "15-6"`). CSV-s on samad faktid read `# võti = väärtus`, seejärel `series,depth,case,spacing,span`.
- Kui tabelit ei ole laaditud, TJI paigutust ei võeta vastu ja midagi ei muutu: **Laadi TJI tabel: tootja tabelid on nende omad ega ole sisse ehitatud.** Mudel, mis on karkassitud varasema sisseehitatud TJI tabeliga (enne seda muudatust), säilitab kõik oma talad; Omadused ja Probleemid ütlevad, et tabel on vaja, ja põranda saab uuesti karkassida, kui laadid ühe. Massiivpuidust talad töötavad nagu varem.

See on paigutusjuhis. Lõplik talade valik vajab tootja tabeleid, projekti koormusi ja inseneri.

## Lõikenimekiri

Jaotises Loendid vali **Puitmaterjal**: iga karkassitükk rühmitatud suuruse ja ostetava varu pikkuse järgi (terved 2 jala pikkused alates 8 jalast; 600 mm sammud millimeetrites), koos tükkide arvu ja laudjalgadega. **CSV** laadib selle alla.

:::warning
Päise, talade, sarikate ja lae talade suurused tulevad märgistatud vaiketabelitest tavalise ühe- või kahekorruselise maja jaoks, mitte arvutustest. **Omadused** ütleb, kui ulatus või ava on oma tabelist väljas. Projekteerija või insener kontrollib ulatusi, koormusi ja liiteid.

TJI-paigutused kasutavad ainult sinu laaditud tabelit, mille koostasid tootja praegustest ulatuste tabelitest; BimCraft ei sisalda ühtegi. Soovitus ei kontrolli toetust, punktkoormusi, konsoole, auke, trepiaugu päiseid ega liiteid ning mudeli I-kuju on skemaatiline.
:::

## Mida salvestatakse

Iga karkassitud sein, põrand või katus on IFC-elemendi koostu („Framing”) IFC-elementidest (vahepostid, rõhttalad, sarikad, lae talad, blokeerimine, fermid) ja taladest (päised, talad, servad, harjalauad), igaüks oma suuruse, pikkuse ja laudjalgadega.
