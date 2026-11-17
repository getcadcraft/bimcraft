---
title: Seinakujud, lõikamine, nihe, venitus ja lukustus
summary: Joonista seinad ristkülikuna, hulknurgana, kaarena, valitud joontele või kinnisele kontuurile; lõika neid, eemalda tükk, nihuta, venita kastiga, joonda ja lukusta üksteise, mõõdu või ruudustiku joone külge. Iga muudatus hoiab seinad ühendatuna ja on üks samm tagasivõtmiseks.
keywords: vaheta tüüp, muuda tüüpi, ümbertüpimine, mis liikus, lod, arendusaste, ühendusstiil, lõikamine, miitri, otsaga, ristiga lõika, seinte ühendused, järgmine, läbib, keela ühendus, luba ühendus, kihi prioriteet, südamik, prioriteet, ühenduskoht, ristkülik, pööratud ristkülik, hulknurk, sisse kirjutatud, ümber kirjutatud, kaar, keskpunkt, puutuv kaar, valitud jooned, jälgi, kontuur, võlupulk, lõika, jaga, vahe, vabad otsad, kustuta lõik, ühenda uuesti, nihe, koopia, kasti venitus, valik, venita, joonda, lukusta, lukk, mõõdu lukustus, ruudustik, lukusta ruudustikku, nihuta ruudustiku joont, paigutusnihe, vabalt seisev, kasva algusest, mõõda algusest, telgjoon, sisepind, välispind, eraldamine, alt
from: 5b7d2f75
---

## Mida sa teed

Muuda ja joonista seinu seinatööriista retseptidega. Iga retsept lõpeb nii nagu seina joonistamine nurkadest: nurgad ühenduvad iseenesest, ühendused salvestatakse faili ning kogu muudatus on üks samm **Muudatustes**, mille {{ui:Võta tagasi}} tagasi võtab. Seinad säilitavad oma identiteedi: sein, mida lõikad, nihutad või venitad, on ikka sama sein koos oma uste, akende ja mõõtudega.

## Joonista ristkülik, hulknurk või kaar

Kui {{ui:Joonista}} on sisse lülitatud, ava rühmas Joonista {{ui:Kujud}} (või vali kuju seinarea **Kuju** loendist). Seinarida näitab seinatüüpi, joonistusviidet, välisküljt ja ülaosa, nagu {{ui:Sein}} tööriista puhul. Seejärel klõpsa või sisesta punktid (x,y · @dx,dy · @pikkus<nurk · pikkus osuti suunas):

- **Ristkülik**: kaks vastasnurka. Neli seina, neli nurgaühendust, üks samm.
- **Pööratud ristkülik**: kus esimene külg algab ja lõpeb (see määrab pöörde ja pikkuse), seejärel kolmas klõps teisele küljele.
- **Hulknurk**: keskpunkt, seejärel nurk (**Sisse kirjutatud**) või külje keskpunkt (**Ümber kirjutatud**). Määra kõigepealt **Külgi** (3 kuni 64).
- **Kaar, keskpunkt**: keskpunkt, algus (see määrab raadiuse), lõpp. **Suund**: lühem tee, vastupäeva või päripäeva. Kolme veerandi ringi ulatuv kaar joonistatakse kahe seinana.
- **Puutuv kaar**: klõpsa seina lõpule ja seejärel kohale, kus kaar lõpeb. Kaar väljub seina lõpust seina enda suunas.

Suletud kuju välispind jääb väljapoole. Kui joonistad **Välispinnale** või **Sisepinnale**, on see pind, millel klõpsad, see, mis jääb paigale.

## Seinad olemasolevatele joontele

- **Vali jooned**: klõpsa joont ja sein läheb sinna. Vajuta {{key:Tab}} (või hoia klõpsamise ajal all {{key:Shift}}), et võtta kogu ahel, mis on ühendatud otsast otsa. Jooned on selle vaate joonistusjooned, jälgimisviide ja ruudustiku jooned.
- **Jälgi kontuuri**: klõpsa sees alal, mille piiravad need jooned või seinad. Seinad lähevad ümber väikseima ala, mis klõpsu ümber on.

## Enne joonistamist: nihe ja ühendus

Seinarea juures on veel kaks välja, mida kasutavad {{ui:Sein}} tööriist ja kujud:

- **Nihe**: seinad joonistatakse nii kaugele klõpsatud joonest: + selle vasakule, − selle paremale, vaadatuna nii, nagu joonistad.
- **Ühendus**: eemalda linnuke, et joonistada vabalt seisvaid seinu. Nende otstele tuleb **Keela ühendus** ja nad jäävad vabaks, kuhu iganes lähevad (vt [Muuda seina](topic:change-a-wall-or-door)).

## Lõika, eemalda tükk, ühenda uuesti

Ava {{ui:Seinad}} rühmas Muuda.

- **Jaga**: klõpsa seinal kohta, kus see peaks lõigatud olema, või sisesta kaugus selle algusest. Seina läbiva teise seina lähedal kinnitub lõige sinna, kus nad kohtuvad. Kaks osa on sama tüüpi ja jäävad otsast otsa ühendatuks. {{ui:Vahe}} jätab lõike keskele selle pikkusega tühiku. {{ui:Vabad otsad}} annab lõigatud otstele hoopis Keela ühendus (Sätted › BimCraft › {{ui:Seinad}} › **Kui sein jagatakse** määrab, milline on algul märgitud). Uks või aken läheb selle osaga, milles see seisab; läbi selle lõikamine lükatakse tagasi.
- **{{ui:Kustuta lõik}}**: klõpsa kohta, kus tükk algab, ja kohta, kus see lõpeb. Tükis olev uks läheb koos sellega.
- **{{ui:Ühenda uuesti}}**: klõpsa ühe seina kahel osal (joonel, sama tüüp). Need muutuvad taas üheks seinaks, esimesena klõpsatud osa nimega, koos mõlema osa ustega.

## Ühendusstiil, keelatud ühendus, kihi prioriteet

Ava {{ui:Seinad}} rühmas Muuda.

- **Ühendusstiil**: klõpsa nurka, kus kaks sirget seina lõppevad. Iga klõps läheb järgmisse stiili: **Miitri** (mõlemad otsad lõigatakse joonele sisemisest nurgast välimiseni, millega iga nurk algab), **Otsaga** (üks sein jookseb läbi teise välispinnani, mis peatub selle küljel) ja **Ristiga lõika** (nagu otsaga, ja läbi jooksev sein lõpeb ristiga; täisnurga all näeb see välja nagu otsaga). **Järgmine** või {{key:Tab}} teeb teise seina läbi jooksvaks. Ribal olev loend **Stiil** näitab viimati klõpsatud nurka. Samad kaks valikut on ühe seina **Omadustes**: **Ühendusstiil algusel / lõpus** ja **Läbib**. Iga muudatus on üks samm **Muudatustes**. Plaan, 3D-keha, ruumid ja kogused järgivad.
- T-ühenduses jookseb alati läbi see sein, mille külg on puudutatud. Kui kaks seina ristuvad, ütleb klõps (või **Pidev ristumiskohas** Omadustes), kumb kahest on pidev; see otsustab, kumma seina kihid joonistatakse läbi ristumiskoha.
- Stiil kuulub ühendusele: see jääb alles, kui seinad liiguvad, ja kaob ainult siis, kui ühendus kaob (sein kustutatakse, sellel otsal lõigatakse või otsale tuleb Keela ühendus). Nurk kõvera seinaga või kohas, kus kohtub kolm või enam seina, jääb miitriks. Liiga terav nurk (alla umbes 30 kraadi) või liiga lame (üle umbes 150) langeb samuti tagasi miitriks.
- **Keela ühendus**: klõpsa seina otsa lähedal. See ots vabastatakse: ta ei ühenda midagi, kuhu iganes sein läheb, kuni klõpsad seda uuesti. Vabad otsad on tööriista sisselülitatud olekus märgitud ristiga. Sama lüliti on Omadustes **Ühenda algusel / lõpus**.
- **Kihi prioriteet**: kus kihtidega seinad kohtuvad, lõikab tugevam kiht nõrgema, nii et südamikud ühenduvad südamikega ja viimistlus peatub tugevama kihi vastu. Igal kihil on prioriteet 0 kuni 999; vaikimisi tuleb see kihi funktsioonist (konstruktsioon 800, alus 600, isolatsioon 400, membraan 300, viimistlus 200, õhupilu 100). {{ui:Kihi prioriteet}} avab seinakoosta, kus veerg **Prioriteet** seab kihi enda arvu. Sama prioriteediga kihid peatuvad üksteise vastu ja joon joonistatakse ainult erinevate materjalide vahele. Seda näed plaanidel detailsusega Keskmine või Peen, nurkades, T-ühendustes ja kahe sirge seina ristumistes; Sätted › BimCraft › {{ui:Seinad}} › **Puhasta seinakihid, kui seinad kohtuvad** lülitab selle välja. See muudab ainult seinte sees joonistatut: seinte kontuurid ja kogused jäävad nii, nagu ühendusstiil need annab.

## Vaheta mitme seina tüüpi

Mustandplaanidelt töödjoonisteni minek on enamasti tüübi muutmine: üldine sein muutub konkreetseks ülesehituseks. Midagi ei pea uuesti joonistama.

1. Vali seinad (üks või mitu koos {{key:Ctrl}} või {{key:Shift}}).
2. Omadustes vajuta seintüübi all **Vaheta tüüp…** või ava {{ui:Seinad}} rühmas Muuda ja vali {{ui:Vaheta tüüp}} (see avab sama loendi). Loend avaneb Omadustes valitud seinte enda plokis. See ei ole dialoog ega kata midagi: plaan, 3D-vaade ja valik töötavad edasi, kui see on lahti, ning see järgib seinu, mida valid.
3. Loend näitab iga seintüüpi koos paksuse ja LOD-märgisega, näiteks „Wall 230 generic, LOD 200“ ja „230 clay brick, plastered both sides, LOD 300“. Valitud seinte praegused tüübid on märgitud. Kitsenda, kirjutades väljale **Otsi**: nimi, paksus või `lod 300`.
4. Klõpsa tüübil. Iga valitud sein muutub selleks ühe sammuga, nii et üks {{ui:Võta tagasi}} võtab kogu vahetuse tagasi. Väike x sulgeb loendi.

Iga sein säilitab oma asukojajoone. Seina, mis on telgjoonel, kasvab mõlemale poole; seina, mille asukojajoon on pind, jääb see pind alles ja kasvab teist pidi, ning sellega ühinenud seinad järgivad nurkades. Vahetatud seinale lukustatud seinad järgivad seda samuti. Uksed ja aknad jäävad oma seintesse ja lõigatakse uue paksuse jaoks uuesti.

Pärast vahetust näitab loend **Mis liikus**: mitu seina muutus ja millele, paksus ja LOD enne ning pärast, seinad, mis liikusid küljele, et säilitada asukojajoon, ühinenud seinad, mis järgisid, uksed ja aknad, mis võeti uuesti kasutusele, ning iga ruum, mille pindala muutus, koos pindalaga enne ja pärast. Olekuriba ütleb sama ühel real. Aruanne ainult näitab; see ei peata kunagi vahetust.

Kaks asja peatavad vahetuse, siis ei muudeta midagi: uks või aken, mis enam seina ei mahu (sein muutub lühemaks, kui nurk järgib; tee uks kitsamaks või liiguta see nurgast eemale enne), ja lukk, mida vahetus rikuks (sein, mis on ruudustiku joonele lukustatud oma telgjoonega, kui selle asukojajoon on pind; eemalda lukk või pane asukojajoon tagasi telgjoonele).

Ühendatud BimCraftiga assistent saab sama vahetuse teha (tööriistad `wall_types_list` ja `walls_swap_type`) ning saab sama aruande tagasi.

Tüübi LOD-märgis seatakse seintüübi redaktoris: vt [Seinakoosted](topic:wall-assemblies).

## Nihe ja kasti venitus

- **Nihe**: klõpsa seinal, seejärel küljel, kuhu see nihutada, või sisesta kaugus. Sein liigub iseenda suhtes risti ja sellega ühinenud seinad venivad. Märgi **Kopeeri**, et saada paralleelne koopia (see ei ole ühendatud originaaliga).
- **Kasti venitus**: klõpsa kasti kahel nurgal, seejärel punktil, millest liigutada, ja punktil, kuhu liigutada. Iga seina ots kastis liigub; täielikult kasti sees olev sein liigub ja selle sisse surutud seinad tulevad kaasa; kasti ristuvad seinad venivad.

## Mõõdu muutmine ja lukustamine

Vali viitemõõt ({{ui:Märgista}} › {{ui:Viitemõõt}}) ja sisesta selle väärtus **Omadustes**: teise viite sein liigub iseenda suhtes risti, esimene viide jääb paigale ning ühinenud seinad järgivad. Märgi **Lukusta see mõõt**, et väärtust hoida: kui hiljem mõni sein liigub, järgib teine. Lukustatud väärtust ei saa üle kirjutada enne, kui linnuke eemaldatakse.

## Joonda ja lukusta

{{ui:Joonda ja lukusta}}: klõpsa seina pinnal (või telgjoonel, seina keskosa lähedal) või ruudustiku joonel, seejärel selle seina pinnal, mis tuuakse sellele joonele. Sein liigub sellele risti. Märgi enne **Lukusta**, et nad joondatuna püsiksid: plaanil on näha lukk ja kui üks sein liigub, järgib teine. Seina **Omadused** loetleb selle **Lukud**, igaühega {{ui:Ava lukk}}-nupp.

## Lukusta seinad ruudustiku joontele

Vali sein, mis kulgeb mööda ruudustiku joont või mille ots on sellel, ja vali ruudustiku joon **Omadustes** › {{ui:Lukusta ruudustikku}}. Seejärel vali ruudustiku joon tööriistaga {{ui:Ruudustik}} ja sisesta kaugus väljale {{ui:Nihuta võrra}}: joon liigub risti iseendaga ning sellele lukustatud seinad järgivad koos oma ühinenud seintega ühe sammuga. Seina, mis on ruudustiku joonele lukustatud, ei saa sealt ise eemale liigutada (liiguta joont või ava seina lukk); ruudustiku joont, mis on pööratud nii, et lukustatud sein ei saa sellel risti püsida, lükatakse tagasi. Joone ümbernimetamine säilitab lukustuse; kustutamine eemaldab lukustuse.

## Pikkus: milline pool püsib ja mida see mõõdab

- **{{ui:Kasva algusest}}** (ühe seina Omadused): **Algus püsib** (lõpp liigub), **Lõpp püsib** (algus liigub) või **Keskpunkt püsib** (mõlemad otsad liiguvad poole võrra). Kui sisestad pikkust, märgib plaan punkti, mis püsib. Ots, mis liigub, lukustatud ühendusega sein liigub iseenda suhtes risti ja hoiab oma nurka.
- **{{ui:Mõõda algusest}}** (plaani mõõtmete kõrval, Omadustes ning menüüs Sätted › BimCraft › {{ui:Seinad}}): telgjoon, sisepind või välispind. Pikkuse väli ja plaani seinamõõdud loevad sama, nii et nad on kooskõlas. Algab telgjoonelt.
- Seina liigutamiseks ilma selle ühendusteta (need katkevad, sein säilitab oma identiteedi) hoia all {{key:Alt}}, lohistades selle keskmist käepidet.

## Hea teada

- Need retseptid on seinatööriista spetsifikatsiooni (lehed 4 kuni 9). Ühendusstiil ja kihi prioriteet on mõeldud sirgete seinte jaoks; kihi prioriteet näitub ainult plaanil (mitte lõigetes, vaadetes ega 3D-s, kus sein on üks keha), mitte kolme või enama seina sõlmedes, ning membraane ei kanta edasi.
- Ühenduse stiil salvestatakse IFC-faili selle kirjesse (`IfcRelConnectsPathElements` nimi, nt `CadCraft join L butt 1`), nii et teised programmid loevad ühenduse ikka ja vanem fail avaneb miitridega.
- Lukud ja ühendused salvestatakse IFC-faili (lukud `CadCraft_WallHolds` projektil, ühendused `IfcRelConnectsPathElements`), nii et need on olemas, kui faili uuesti avad.
- Kõverad seinad võib lõigata, uuesti ühendada ning neilt võib tüki välja võtta; neid ei nihutata ega lukustata.
- Vt ka [Joonista seinad](topic:draw-walls), [Muuda seina, ust või akent](topic:change-a-wall-or-door) ja [Seina kuju](topic:wall-shape).
