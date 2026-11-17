---
title: Katused: kalle igale seinale, frontoonid, pulpetid ja katusetasandid
summary: Määra iga katuse all oleva sein kaldeks, frontooniks või puudumiseks, kasuta vaalkatuse, viilkatuse ja pulpeti eelseadeid, tõsta katust ringpalgi kõrgusega, lisa räästalaud ja räästalagi ning joonista üksikuid katusetasandeid kohtades, kus automaatne katus ei sobi.
keywords: muuda katust, redigeeri katust, valitud katus, katuse omadused, võta katus tagasi, katus, kalle, seina kaupa, frontoon, frontooni ots, pulpetkatus, lean-to, vaalkatus, org, harjajoon, ringpalgi kõrgus, kand, räästalaud, räästalagi, räästas, serv, ulatus, katusetasand, verandakatus, lukarn, frontoonlukarn, pulpetlukarn
from: 096084a7
---

## Mida sa teed

Kuju katus seintest, mis selle all on. Iga sein saab oma seade, nii et üks katus võib olla esiküljel vaalkatus, otstes frontoonidega ja tagaküljel toetuda kõrgemale seinale tasaselt. Verandale või mis tahes pinnale, mida automaatne katus ei suuda teha, joonista katusetasand selle nurkadest.

## Katuse paigaldamine

1. Korrusel, mille seinad katust kannavad, klõpsa {{ui:Katus}}.
2. Sisesta **Kalle** (`6/12`, või kraadid nagu `30`) ja **Ulatus**.
3. Vali eelseade: **Vaalkatus**, **Frontoonid lühematel külgedel**, **Frontoonid pikematel külgedel** või **Pulpet** (kõige lähem külg kursorile on madal räästas; teised küljed on frontoonid).
4. Jäta **Räästalaud ja räästalagi** märgituks, et saada kastis räästas koos räästalauaga, või eemalda märge paljaks katuseservaks.
5. Osuta hoone sisse: räästas, harja, vaalud ja orud kuvatakse plaanil. Klõpsa.

Töötab iga kontuur: L-, T-, U- ja plussikujud, nurgad ja väljalõiked. Vaalud, harjad ja orud leitakse seal, kus katusetasandid kohtuvad.

## Üks sein korraga

Vali katus (korrusel seinte kohal, klõpsa selle kontuuri sees) ja vaata jaotist **Iga sein** rubriigis **Omadused**. Rea kohale osutamine märgib selle seina plaanil.

- **Kaldega**: seina kohal on kaldu katusetasand. Sisesta selle enda kalle selle kõrvale, näiteks `12/12` järsud otsad `6/12` katusel.
- **Frontooni ots**: katus lõpeb selle seina kohal vertikaalse otsaga, sein täidetakse katuseni ja katus ulatub sellest üle **frontooni ulatuse** võrra.
- **Puudub (lõpeb tasa)**: katus lõpeb selle seina juures ilma ulatuseta ja ilma frontoonseinata, kõrgema seina vastas oleva katuse jaoks.

Ülaosas olev loend **Otsad** määrab kõik seinad korraga; **Määra seinti** ilmub siis, kui seinad enam eelseadele ei vasta.

## Muuda juba paigaldatud katust

Vali katus ja **Omadused** näitab samu sätteid, mis katusetööriistal: **Kalle**, **Ulatus**, **Frontooni ulatus**, **Ringpalgi kõrgus**, **Räästalaua kõrgus**, **Kastis räästas** ja **Paksus**. Iga muudatus näitub kohe plaanil ja 3D-vaates, koos samade kontrollidega nagu tööriistal (80 kraadi või rohkem kallet ei lubata, samuti sätet, millest ei saa katust teha). Sisesta väärtus ja vajuta {{key:Enter}}, või lahku kastist.

Iga muudatus on üks tagasivõtmise samm. Mitu muudatust sama kasti järjest (sisesta `6/12`, siis `7/12`, siis `8/12`) liituvad üheks sammuks, nii et üks {{key:Ctrl}}+{{key:Z}} võtab tagasi, mis katusel oli enne seeriat; teise kasti muutmine alustab uut sammu.

## Ringpalgi kõrgus, räästalaud ja räästalagi

- **Ringpalgi kõrgus** on koht, kus katusetasandid kohtuvad seinte välispinnaga, mõõdetuna korruse põrandast. Jäta tühjaks, et katus istuks seinte pealmisele servale; sisesta suurem väärtus tõstetud kanna jaoks.
- **Räästalaua kõrgus** on laud piki räästaid ja üles mööda viile. Sisesta `0`, kui laud puudub.
- **Kastis räästas** paneb iga räästa alla tasase räästalae, seinast kuni räästalaua tagaküljeni.

Iga tasand kohtub oma seinaga ringpalgi kõrgusel, seega säilitavad erineva kallega seinad ühe ringpalgijoone ja nende räästad lõpevad erinevatel kõrgustel, nagu need oleksid raamitud.

## Joonista katusetasand

1. Korrusel, mille seintel tasand asub, ava {{ui:Versioon}} ja vali {{ui:Katuse tasapind}}.
2. Sisesta **Kalle** ja, kui see ei ole seinte pealmine serv, **Räästa kõrgus**.
3. Klõpsa nurki. Esimene külg, mille joonistad, on räästas; tasand tõuseb sellest kuju ülejäänu suunas.
4. Klõpsa esimest nurka uuesti, topeltklõpsa või vajuta {{key:Enter}}, et lõpetada. {{key:Esc}} viskab nurgad ära.

Katusetasand ei järgi seinu. Vali see ülemiselt korruselt (klõpsa selle sees), et muuta selle kallet, räästa kõrgust või paksust, või vajuta {{key:Delete}}, et see eemaldada.

## Lisa lukarn

1. Näita korrust, millel katus on.
2. Ava {{ui:Versioon}} ja vali {{ui:Lukarn}}.
3. Valikute reas vali **Lukarni liik** (**Frontoon** või **Pulpet**) ja sea **Laius**, **Esiseina** (esiseina kõrgus katuse ülaosast lukarni räästani), **Kalle** ja **Ulatus**.
4. Klõpsa katuse pinnal kohta, kuhu lukarni esikülje keskpaik läheb.

BimCraft ehitab esiseina, kaks külgseina ja lukarni katuse ning viib selle tagasi, kuni see kohtub katusega. Frontoonlukarnil on kaks tasandit, mis kohtuvad harjas. Pulpetlukarnil on üks tasand, mis peab olema vähem järsk kui katus. Lukarni all olev katus lõigatakse ära. Lukarn järgib katust, kui seinad liiguvad.

Vali see, et muuta selle liiki, laiust, esiseina, kallet või ulatust jaotises **Omadused**. {{key:Delete}} eemaldab lukarni ja sulgeb katuse uuesti. See peab mahtuma ühele katusepinnale, eemal vaalust, orgudest ja harjast, ning lukarne võtavad vastu ainult {{ui:Katuse}} tööriistaga tehtud katused, mitte käsitsi joonistatud katusetasandid. Veel ehitamata: aken lukarni esikülje sees ja lukarnid käsitsi joonistatud katusetasanditel.

## Mis salvestatakse

Katused on IFC-katused, mis koosnevad ühest katuseplaadist tasandi kohta, frontoonseintest, ühest räästalaua liikmest ja ühest räästalae kattest. Katusel on oma haripunkti, vaalu, orgude, räästa ja viilude pikkused ning selle pindalad koguste arvestuseks. Katusetasand on IFC-katus ühe plaadiga.

:::tip
Tagasivõtmine võtab mis tahes katusemuudatuse ühe sammuga tagasi, sealhulgas eelseadet, mis muudab iga seina.
:::
