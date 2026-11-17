---
title: IFC-mudeli lõikamine lõiketasandiga
summary: Lõika 3D-mudelit ülevalt, eest või küljelt või säilita ainult lõikekasti või mitme kaldtahuga kasti sees olev osa, et näha sisse; liiguta lõiget lohistades või sisestades, pööra seda ja vali, mida lõige näitab.
keywords: lõige, lõiketasand, lõikekast, käepidemed, lohista, varu, valikukast, lõikamine, lõikekast, viil, plaanilõige, põrandaplaan, vaade, sisemus, interjöör, pööra, nihe, lõikemaht, astmeline lõige, L-kujuline, kallutus, kaldlõige, kaldtasand, lisatasand
from: 6315e71a
---

## Mida sa teed

Lõika IFC-mudel läbi ühe tasandiga, et näha sisse: ülalt plaani jaoks või eest või küljelt läbi hoone lõike.

## Sammud

1. Ava IFC-mudel. Vt [Ava IFC-mudel ja vaata ringi 3D-s](topic:open-ifc-model).
2. Klikki tööriistaribal {{ui:Lõige}} või vajuta {{key:X}}. Mudel lõigatakse poolel kõrgusel ja tööriistariba alla ilmub lõikeriba.
3. Vali, kust lõigata: {{ui:Ülemine}}, {{ui:Esi}} või {{ui:Külg}}. Esi ja Külg pööravad ka vaate, et lõiget vaadata.
4. Liiguta lõiget: lohista liugurit **Nihe** või sisesta kaugus meetrites kasti ja vajuta {{key:Enter}}. Võid sisestada ka millimeetreid, näiteks `1200 mm`.
5. Klikki {{ui:Pööra}}, et säilitada lõike teine pool.
6. Klikki lõikel olevat elementi, et näha selle omadusi.
7. Klikki {{ui:Väljas}}, klikki uuesti {{ui:Lõige}} või vajuta {{key:X}}, et lõige eemaldada.

## Lõikekast

Klikki samas ribas {{ui:Kast}}, et säilitada ainult kasti sees olev. Igal {{ui:X}}, {{ui:Y}} ja {{ui:Z}} on kaks liugurit: kus kast algab ja kus lõpeb, meetrites mudeli servast. Väärtused kuvatakse nende kõrval.

- {{ui:Kast valiku ümber}} sobitab kasti valitud elementide ümber ja suumib nende peale. See jätab igale küljele 300 mm varu; muuda seda jaotises {{ui:Sätted}} › {{ui:BimCraft}} › {{ui:Varu valiku ümber}}.
- Kui elemendid on valitud, teeb {{ui:Näita}} › {{ui:Lõikekast valiku ümber}} või {{key:Shift+X}} sama ühe sammuga, isegi kui lõiget pole.
- **Käepidemed** kasti peal liigutavad seda hiirega: lohista tahu keskel olevat ruutu, et liigutada seda tahku, serva keskel olevat, et liigutada kahte selles kohtuvat tahku, või nurga oma, et liigutada kolme. Liugurid järgivad. {{ui:Ülemine}} korral liigutab nurk kasti plaanil, {{ui:Esi}} või {{ui:Külg}} korral vaates.
- {{ui:Kogu mudel}} avab kasti jälle kogu mudelile.
- {{ui:Ülemine}}, {{ui:Esi}} või {{ui:Külg}} viivad tagasi ühe tasandi juurde.

## Mitme kasti maht, kaldtahud ja lisatasandid

Kast ei ole alati vajalik kuju: astmeline lõige, L-kujuline tiib või lõige mööda seina, mis ei ole ruudustikuga risti.

1. Klikki jaotises {{ui:Kast}} nuppu {{ui:Lisa kast}}. Lõige säilitab nüüd selle, mis on **mis tahes** kastide sees, nii et kaks kasti moodustavad astmelise või L-kujulise mahu. Sellega kõrval olev loend ütleb, millist kasti liugurid muudavad ({{ui:Kast 1}}, {{ui:Kast 2}}…); {{ui:Eemalda see kast}} eemaldab valitu. Maht sisaldab kuni 8 kasti.
2. Ava {{ui:Kallutus ja tasandid}}, et kujundada valitud kast:
   - Vali {{ui:Tahk}} ja sisesta, kui palju see kummaleski kaldub, kraadides (kuni 80). Tahk pöördub oma keskpunkti ümber; teised tahud jäävad sinna, kuhu liugurid need panid. {{ui:Sirgista}} viib selle tagasi.
   - {{ui:Lisa tasand}} lõikab kasti veel ühe tasandiga. {{ui:Tahud}} on suund, kuhu eemaldatud pool on suunatud, kraadides X-st Y poole; {{ui:Kalle}} on see, kui palju see pöördub üles (0 vertikaalse tasandi puhul, 90 horisontaalse puhul); {{ui:Nihe}} on, kui kaugel tasand on kasti keskpunktist, meetrites. × eemaldab selle. Kast võtab kuni 6 lisatasandit.
3. Kus maht lõikab läbi tahkude, täidetakse lõikepinnad nagu varem, samuti seal, kus kaks kasti astmel kohtuvad.

:::tip
Kui kontuur kaob ja midagi ei jää alles, ei jäta kallutused või tasandid selle kasti sisse midagi; riba ütleb seda. Kalluta tahk tagasi või muuda tasandi nihet.
:::

## Hoone, mis on oma asukohas pööratud

Paljud mudelid asetavad hoone failiteljestiku suhtes nurga alla (tõeline põhjasuund, jagatud koordinaadid). Kui seinad kulgevad nurga all, algab uus lõige hoonega risti: {{ui:Esi}}, {{ui:Külg}} ja kast kulgevad mööda selle enda seinu ning {{ui:Hoone suhtes ristkülikus}} lõikeribal on sisse lülitatud. Klikki sellel, et saada mudeli teljed, ja uuesti, et naasta tagasi (olekurida ütleb, kui palju hoone on pööratud). Kui **Sätted › BimCraft › Hoone, mis on oma asukohas pööratud › Nagu paigutatud asukohas**, algavad lõiked ja vaated selle asemel mudeli telgedest. Vt [Sätted](topic:settings).

## Mida peaksid nägema

- **Ülemine** säilitab lõike alla jääva, nii et vaatad ruumidesse alla. Nihe mõõdetakse üles mudeli põhjast.
- **Esi** säilitab lõike taga oleva, nähtuna eest; **Külg** säilitab selle taga oleva, nähtuna küljelt. Nihe mõõdetakse mudeli esiküljest või küljest.
- Õhuke värviline kontuur näitab, kus tasand asub.
- Kus tasand lõikab läbi seina, plaadi või muu tahke, täidetakse lõikepind tumeda värviga, nagu joonistatud lõige. {{ui:Täide}} riba peal lülitab selle välja ja sisse.
- Vaatekuubik paremas alanurgas pöörab mudelit, et lõiget vaadata igalt poolt.
- Klikkimine valib selle, mida näed: eemaldatud osa ei saa valida.

## Levinud vead

- **Midagi ei muutunud.** Lõige võib olla katuse kohal või mudelist väljas. Lohista liugurit või sisesta väiksem nihe.
- **Nihe hüppas tagasi.** Mudelist kaugemal olev kaugus viiakse selle lõppu ja olekurida ütleb seda.
- **Probleem näitab ainult osa minu mahust.** Probleem (BCF) säilitab ühe kasti oma kaldtahkude ja tasanditega: mahu esimese kasti. Olekurida ütleb seda, kui probleemi loood.
- **Lõige on õõnes.** {{ui:Täide}} riba peal on väljas: klikki seda, et täita seinte, plaatide ja muude tahkude lõikepinnad.
- **Täidetud lõige on laiguline või jätab tüki välja.** Täitmiseks on vaja suletud tahkusid; element, mille kuju failis ei ole suletud (üksik leht, puulehestik), jäetakse täitmata, selle asemel et üle värvida. Eri värvi osadest koosnev element (raam ja selle klaas) täidetakse, kui selle osad moodustavad kokku suletud kuju.
- **Kus on lõikeriba?** See asub selle 3D-vaate ülaosas, mida ta lõikab: 3D-poolel jaotises {{ui:Jaga}} ja joonistusriba all, kui on ainult {{ui:Plaan}}. Lühikeses vaates kerib see.

## Edasi

- [Korruste, ruumide ja servade näitamine ja peitmine](topic:storeys-and-spaces)
- [Vaata DWG- või DXF-joonist 3D-s](topic:dwg-in-3d) — 3D-joonistel on sama lõiketasand
