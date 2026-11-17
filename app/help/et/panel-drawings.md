---
title: Paneelijoonised puitkonstruktsioonist või kergterasest
summary: Raami mudeli seinad, põrandad ja katused paneelidena puitkonstruktsioonist või kergterasest, vaata iga vahepostitust, rõhtpalki, päist, tala ja sarikat mõõtkavas ning salvesta lõikenimekiri CSV-na ja tööjoonised PDF-ina.
keywords: paneel, karkass, tööjoonis, lõikenimekiri, kergteras, terasvahepost, LGS, puit, tala, sarik, päis, laovaru, PDF
from: c09f916e
---

## Paneelide avamine

Vali menüüst {{ui:Versioon}} käsk {{ui:Paneelijoonised}} (või kirjuta {{cmd:PANELS}}). Loend sisaldab iga joonistatud seina, iga põrandat ja iga katust mudelis, igaühel märkeruut. Seinad tulevad koos oma uste ja akendega avadena. Põrand on raamitud ümber oma ääriku ristkülikuna, tala jookseb lühemat teed. Katus on raamitud viilkatusena üle oma seinte ääriku, katuse kaldega; loend ütleb seda, sest vaalkatus või keeruline katus ei ole viilkatus.

## Materjal, suurus ja vahe

Vali {{ui:Materjal}}: **Puit** või **Kergteras**. Terasosad on C-vahepostid, mis on nimetatud sügavuse ja paksuse järgi (näiteks C92-1.2), ning rõhtpalkide jaoks on tala. {{ui:Elemendi mõõt}} valib ühe suuruse igale märgitud paneelile; või jäta see vaikeväärtusele, et võtta iga paneeli liigi vaikeväärtused. {{ui:Vahe}} on vahe vahepostide, talade või sarikate vahel. Need on algväärtused, mille sina seadistad. Need ei ole koodikontroll: kas selle sammuga vahepost kannab seda seina ja kas päis kannab seda ava, on koodi tabelite (Ehitusnõuete lisandmoodulis on IRC) ja sinu insenerii asi.

## Mida saad

Esimene märgitud paneel joonistatakse dialoogis mõõtkavas koos mõõtudega. {{ui:Lõikenimekiri (CSV)}} salvestab iga paneeli osad märgi, mõõdu ja pikkuse järgi ning laovaru pikkused, mida nende jaoks osta. {{ui:Tööjoonised (PDF)}} salvestab ühe A3-lehe iga paneeli kohta, kus iga osa on märgitud ja on oma lõikenimekiri. {{ui:Joonis (SVG)}} salvestab esimese paneeli joonisena. Kõik, mida karkassikood ei suuda raamida (ava liiga lähedal seina otsale, päis, mis ei mahu rõhtpalkide alla, osa, mis on pikem kui kõige pikem laovaru), loetletakse ka jaotises Probleemid ja dialoogis.

## Mida see ei tee

Paneelid on joonised, mis tehakse mudelist alati, kui küsid: mudelisse midagi ei kirjutata, seega nad vastavad sellele alati. Karkassi panemiseks mudelisse elementidena kasuta puitseinte, põrandate ja katuste jaoks {{ui:Karkass}}.
