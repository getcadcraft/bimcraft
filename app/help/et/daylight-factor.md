---
title: Hinda päevavalgust igas ruumis
summary: Iga ruumi keskmine päevavalguse faktor tema akende, sisepindade ja iga akna nähtava taeva järgi, taeva nurk mõõdetud mudelis. Varajase projekteerimise hinnang, mitte simulatsioon ega nõuete kontroll.
keywords: päevavalgus, päevavalguse faktor, keskmine päevavalguse faktor, adf, vertikaalne taevakomponent, vsc, päikesesoojus, päike, g-väärtus, ruudustik, jagatud voog, taevakomponent, siseselt peegeldunud komponent, loomulik valgus, aken, klaasistus, taeva nurk, takistus, varjutamine, rõdu, räästas, peegeldus, läbilaskvus, varajane projekteerimine, analüüs, ruumid, alad
from: 5f300a78
---

Paremal paneelil asuv vahekaart {{ui:Päevavalgus}} arvutab iga ruumi **keskmise päevavalguse faktori**: kui suur osa pilves taeva valgusest jõuab keskmiselt ruumi, protsendina. See loeb avatud IFC-mudeli ruume (alasid) ja aknaid. Mudelit ei muudeta ja midagi ei laadita üles.

:::warning
Kõik selles vahekaardis on **projekteerimise abivahend, mitte nõuetele vastavuse arvutus**: varajase projekteerimise hinnangud avaldatud meetoditega, **mitte simulatsioon** ja **mitte kontroll ehitusnormi ega standardi vastu**. BS EN 17037, LEED, BREEAM ja energianormid nõuavad päevavalguse simulatsiooni koha kliimaga; nende jaoks kasuta päevavalguse simulatsiooniprogrammi.
:::

## Arvuta

1. Ava IFC-mudel, millel on ruume (alasid) ja aknaid. Siin joonistatud mudelitel on ruum iga suletud seinakomplekti sees.
2. Ava vahekaart {{ui:Päevavalgus}} ja klõpsa {{ui:Arvuta}}.
3. Iga ruum näitab oma päevavalguse faktorit ja riba: alla 2 %, 2–5 %, 5 % või rohkem. Klõpsa ruumil, et näha tema pindu ning iga akna pindala ja taeva nurka; ruum ja tema aknad valitakse mudelis.

Kui muudad sisendit, järgnevad arvud kohe; pärast mudeli muutmist {{ui:Arvuta uuesti}}. {{ui:CSV}} salvestab iga ruumi koos tema arvude ja kasutatud sisenditega.

## Valem

Keskmine päevavalguse faktor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), liidetuna üle ruumi akende (Littlefairi valem, mida kasutavad BRE 209, BS 8206-2 ja CIBSE LG10):

- **T**, klaasi valguse läbilaskvus (alguseks 0,7: kasuta tootja arvu).
- **Ag**, klaasitud pindala: iga akna pindala (üldlaius × kõrgus, muidu mudelis olev suurus) × **klaasitud osa** (alguseks 0,75: ülejäänu on raam).
- **θ**, taevanurk, mida aken näeb, kraadides (allpool).
- **M**, hoolduskoefitsient klaasi mustuse jaoks (alguseks 1).
- **A**, iga ruumi sisepind: põrand, seinad, lagi ja aknad, võetud ruumi enda kujust.
- **R**, nende keskmine peegelduvus, kaalutud pindalaga: alguseks põrand 0,2, seinad 0,5, lagi 0,7; klaas arvestatakse kui 0,1.

## Kuidas taeva nurk mõõdetakse

Iga akna jaoks lõikab BimCraft mudelit vertikaalse tasandiga, mis on akna suhtes ristis ja pärineb klaasi välispinnalt, ning vaatab horisondilt otse üles. Kõik, mida lõige kohtab akna ees (vastas olev hoone, rõdu või räästas üleval, räästa serv), varjab osa sellest 90°-st. θ on see, mis alles jääb. Aken ise ja sein, kuhu see on paigutatud, jäetakse välja. Seda tehakse viies kohas üle akna laiuse ja võetakse keskmine, nii et õhuke post keset võtab oma osa, mitte kogu taevast.

Hoone, mis on akna keskpunktist 8,5 m kõrgemal ja 9,9 m kaugusel, varjab 40,65° (nurk, mille tangens on 8,5 ÷ 9,9), jättes θ = 49,35°.

## Vertikaalne taevakomponent igal aknal

{{ui:Arvuta}} mõõdab ka igale aknale, mida see näeb kogu taevast: sama vertikaalse lõike, pööratud igasse suunda üle akna esiküljel (iga 2°, ühelt küljelt teisele), nii et kõrvalhoone, lamell või sügav laud võtab oma osa. Sellest arvutab BimCraft **vertikaalse taevakomponendi (VSC)**: kui palju pilves taeva valgusest jõuab klaasini, protsendina sellest, mida saaks avatud lame katus. Aken, mille ees pole midagi, saab **39,6 %**, mis on vertikaalsel aknal kõige rohkem. Pikk hoone, mis tõuseb akna kohal 25° nurga all, jätab umbes **27 %**, mida Ühendkuningriigi juhend (BRE 209) kasutab reeglina. Iga akna detailis näidatakse selle VSC-d ja **takistuse nurka** (kui kõrgele asjad tõusevad otse selle ees).

Taevas on CIE standardne pilves taevas, mis on otse üleval kolm korda heledam kui horisondil, ja lõige on täpne: midagi ei proovita.

## Päike läbi akende kuupäeval

Ava {{ui:Päike läbi akende kuupäeval}} ja vali kuupäev. BimCraft jälgib päikest sel päeval veerandtundide kaupa ja liidab iga akna kohta soojuse, mille päike toob läbi klaasi:

- **otsene päike**, kui see on akna ees ja midagi mudelis ei varja seda (sama täpne lõige, pööratud päikese poole: rõdu, mis varjab keskpäevast kõrget suvist päikest, laseb madalat talvist päikest sisse);
- **taeva valgus** klaasil, miinus see, mida aken ei näe;
- valgus **maapinnalt** (selle peegelduvus: alguseks 0,2);
- kõik läbi klaasi **g-väärtuse** (osa päikeseenergiast, mille see läbi laseb: alguseks 0,6; kasuta tootja arvu) ja selle klaasitud osa.

Iga ruum näitab päeva koguhulka kWh-des ja tippu vattides koos ajaga; ruumi detail joonistab päeva graafikuna. Taevas on selge Hottel'i mudeli järgi (Duffie & Beckman, *Solar Engineering of Thermal Processes*), suvise või talvise arvuga koha ja hooaja jaoks ning ala kõrguse järgi; päikese asukoht tuleb NOAA-lt. Ala laiuskraad ja pikkuskraad tulevad IFC ala küljest ning põhjasuund mudeli tõelisest põhjast; kui mudelil ala pole, sisesta laiuskraad ja pikkuskraad käsitsi. Kellaajad on standardajas (suveaega pole) ajavööndis, mille sisestad, muidu selles, mida pikkuskraad soovitab.

Mida see jätab välja: pilved (see on selge päev), klaasi väiksem läbilaskvus madalatel nurkadel, raamid, mis varjavad klaasi, žaluusid ning seda, mida seinad ja katus neelavad. Sama vahekaardi jahutushinnang kasutab tippu.

## Päevavalguse faktor ruudustikul

Ava {{ui:Päevavalguse faktor ruudustikul}} ja {{ui:Arvuta ruudustik}}: BimCraft paneb iga ruumi põrandale ruudustiku töötasandi kõrgusel (alguseks 0,85 m), pool meetrit seintest sisse, ja arvutab päevavalguse faktori igas punktis **BRE jagatud voo meetodil**:

- **taevakomponent**: hajutatud pilves taevas, mida punkt näeb läbi iga akna ava, miinus raamid;
- **väliselt peegeldunud komponent**: see, mida punkt näeb läbi akna väljaspool asuvatest hoonetest, mis helendavad kümnendiku taevast nende taga (muuda takistuse heledust, kui need on palju heledamad või tumedamad);
- **siseselt peegeldunud komponent**: ruumis hüppav valgus, ruumi pindadest ja nende peegelduvusest, akende pindalast ja sellest, kui palju on neid väljas (BRE valem, kus klaasi läbilaskvus on selle asemel, mida see eeldas: selge klaas).

Iga ruum näitab oma keskmist, madalaimat punkti ja seda, kui suur osa sellest saab 2 % või rohkem; ruumi detail joonistab plaani, kus iga punkt on värvitud oma päevavalguse faktori järgi ja aknad on punased. Et igas arvutis oleks kiire, saab ruum kõige rohkem **400 punkti**: suures ruumis kasvab vahe, et mahutuda (sisesta vahe, et valida ise).

## Mida see välja jätab

- Katuseaknad (lamedad või kaldus klaas) on loetletud, aga arvesse ei võeta: siin olevad valemid on seinaakende jaoks.
- Aknad, millel pole taga ruumi (näiteks saal ilma alata), on loetletud eraldi.
- Akende servad (ava võetakse välispinnalt), läige, päikesetunnid ja kliimapõhine päevavalgus. BS EN 17037, LEEDi või BREEAMi jaoks kasuta päevavalguse simulatsiooniprogrammi.
- Riba piirid pärinevad vanemast Briti juhendist (BS 8206-2) ja neid näidatakse suunisena, mitte kunagi läbimise ega läbikukkumisena.
