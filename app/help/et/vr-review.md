---
title: Mudeli ülevaatamine VR-peakomplektis
summary: Kõnni IFC-mudelis täissuuruses VR-peakomplektis: hüppa ringi, pöördu, mõõda, lõika lahti, pane BCF-probleeme koos pildiga, vaata mudelit lauaplaadina ja kohtu reaalajas seansi teistega.
keywords: vr, virtuaalreaalsus, peakomplekt, webxr, xr, immersiivne, quest, oculus, vive, index, pico, läbi kõndimine, läbikäik, teleporteerumine, disainiülevaatus, koordineerimine, ülevaatus, mõõda, lõige, probleem, probleemid, bcf, lauaplaat, mõõtkavaline mudel, kohalolek, avatarid, reaalajas, koos
from: 8994b36d
---

{{ui:VR}} tööriistaribal paneb sind VR-peakomplektiga mudelisse täissuuruses. Seisad seal, kus on 3D-vaate kaamera, põranda peal selle all, ja vaatad samas suunas. Peakomplekt näitab seda, mida näitab 3D-vaade: peidetud korrused, elemendid ja mudelid jäävad peidetuks ning värvitud materjalid tulevad kaasa. Midagi ei laadita üles: brauser joonistab selle sellel arvutil (või peakomplekti enda brauseris).

## Mida vajad

- Peakomplekti, mida brauser suudab juhtida (WebXR): iseseisva peakomplekti enda brauseri või Chrome'i või Edge'i arvutis, kuhu peakomplekt on ühendatud.
- IFC-mudel avatud turvalisel lehel (https), nagu see saidil on.

Kui peakomplekti pole, on {{ui:VR}} hall ja ütleb, miks.

## Alustamine

1. Seadista 3D-vaade sinna, kust alustada: ruumis või väljas, hoonet vaadates.
2. Klõpsa tööriistaribal {{ui:VR}}.
3. Pane peakomplekt pähe.

Menüü on sinu vasaku käe selja peal. Osuta sellele parema kontrolleriga ja vajuta päästikut, et valida nupp. (Ainult ühe käega hõljub menüü sinna, kust alustasid.)

## Liikumine

- **Hüpe:** käsus {{ui:Teisalda}} osuta põrandale ja vajuta päästikut; maandud sinna. Või lükka pulka ette, et sihtida, ja lase lahti, et hüpata. Maanduda saab ainult põrandatele, plaatidele ja maapinnale (ülespoole suunatud pindadele), mitte kunagi seinale.
- **Pööre:** lükka pulka vasakule või paremale: pöördud iga kord 30°.
- **Kõnd:** oma mängualas lihtsalt kõnni.

## Mõõtmine

Vali {{ui:Mõõda}}, siis vajuta päästikut kahel punktil. Kaugus kuvatakse nende vahel meetrites. Punkt nurga lähedal kinnitub nurgale.

## Lõika lahti

Vali {{ui:Lõige}} ja vajuta päästikut pinnal:

- seinal (või millelgi, mis pole põrand): kõik sinu ja selle pinna vahel lõigatakse ära, et näha sisse. See töötab kõige paremini väljast või üle ruumi;
- põrandal, ülevalt: plaanilõige 1,2 m selle põranda kohal, nii et seinad näitavad oma alumist osa.

{{ui:Tühjenda}} eemaldab lõike ja mõõtmised. Kui käivitamisel lõikab mudelit [lõiketasand](topic:section-plane), alustab peakomplekt sellega.

## Pane probleem

Vali {{ui:Probleem}} ja vajuta päästikut kohas, kus on probleem. Nummerdatud nööpnõel märgib selle ning probleem läheb vahekaardile {{ui:Probleemid}} BCF-teemana, koos pildiga, mida nägid, ja kaameraga, kus seisid, mudeli enda koordinaatides. Salvesta need koos ülejäänud [probleemidega](topic:issues-bcf) BCF-failina; teised koordineerimistööriistad avavad need samas vaates.

Lisa probleemile kommentaar pärast VR-ist lahkumist, vahekaardil Probleemid: peakomplektis kirjutamine ei ole veel loodud.

## Vaata lauaplaadi mudelina

{{ui:Lauaplaat}} kahandab mudeli nii, et see mahub sinu ees olevale lauale; kõnni ümber või pööra pulgaga. {{ui:Täissuurus}} paneb sind tagasi sinna, kus olid.

## Teistega koos, reaalajas

[Reaalajas seansis](topic:work-live) näeb VR-is olev inimene teisi kui pead ja kahte kätt nende oma värvis, koos nimega, ning punkti, kuhu igaüks osutab. Kõik muudatused, mida keegi teeb, jõuavad sinu peakomplekti hetkega. Lauaarvutis olevaid inimesi peakomplektis veel ei näidata.

## Lahku

Vali {{ui:Lahku VR-ist}} (või võta peakomplekt ära ja lõpeta seal). 3D-vaade ekraanil liigub sinna, kus su pea oli.

:::note
Testitud peakomplekti emulaatoriga, mitte veel igal peakomplektil. Suur mudel võib peakomplekti tõmmelda: peida enne vajamatud korrused või mudelid ([peida ja isoleeri](topic:hide-and-isolate)).
:::
