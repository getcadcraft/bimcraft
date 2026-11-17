---
title: Paneļu rasējumi koka vai vieglā tērauda konstrukcijām
summary: Izveidojiet modeļa sienu, grīdu un jumtu karkasu kā paneļus koka vai vieglā tērauda konstrukcijā, redziet katru stenderi, rīmi, pārsedzi, lagu un spāri mērogā, un saglabājiet griešanas sarakstu kā CSV, bet darbnīcas rasējumus — kā PDF.
keywords: panelis, karkass, darbnīcas rasējums, griešanas saraksts, vieglais tērauds, tērauda stenderis, LGS, koks, lags, spāre, pārsedze, krājums, PDF
from: c09f916e
---

## Atvērt paneļus

Izvēlieties {{ui:Paneļu rasējumi}} izvēlnē {{ui:Būvējums}} (vai ierakstiet {{cmd:PANELS}}). Saraksts satur katru uzzīmēto sienu, katru grīdu un katru jumtu modelī, katram ar atzīmi. Sienas ar savām durvīm un logiem tiek rādītas kā atveres. Grīda tiek karkasēta kā taisnstūris ap savu kontūru, ar lagiem, kas iet īsāko virzienu. Jumts tiek karkasēts kā zelmu jumts pāri savu sienu kontūrai, ar jumta slīpumu; saraksts to norāda, jo četrslīpju vai sarežģīts jumts nav zelmu jumts.

## Materiāls, izmērs un solis

Izvēlieties {{ui:Materiāls}}: **Koks** vai **Vieglais tērauds**. Tērauda gabali ir C-stenderi, kas nosaukti pēc dziļuma un biezuma (piemēram, C92-1.2), ar sliedi rīmjiem. {{ui:Elementa izmērs}} izvēlas vienu izmēru katram atzīmētam panelim, vai atstājiet Noklusējums, lai izmantotu katra paneļa veida noklusējumus. {{ui:Solis}} ir attālums starp stenderiem, lagiem vai spārēm. Tās ir sākuma vērtības, ko iestatāt jūs. Tās nav konstrukciju pārbaude: vai stenderis ar šādu soli nes šo sienu un vai pārsedze nes šo atstarpi, nosaka būvnoteikumu tabulas (pievienojumā Būvnoteikumi ir IRC) un jūsu inženieris.

## Ko jūs iegūstat

Pirmais atzīmētais panelis tiek uzzīmēts dialogā mērogā, ar izmēriem. {{ui:Griešanas saraksts (CSV)}} saglabā katra paneļa gabalus pēc marķējuma, izmēra un garuma, kā arī krājuma garumus, ko nopirkt. {{ui:Darbnīcas rasējumi (PDF)}} saglabā vienu A3 lapu katram panelim, ar katru gabalu marķētu un tā griešanas sarakstu. {{ui:Rasējums (SVG)}} saglabā pirmo paneli kā rasējumu. Viss, ko karkasa kods atrod, ko nevar karkasēt (atvere pārāk tuvu sienas galam, pārsedze, kas nesaskan ar rīmjiem, gabals garāks par garāko krājuma garumu), tiek uzskaitīts arī Problēmās un dialogā.

## Ko tas nedara

Paneļi ir rasējumi, kas tiek izveidoti no modeļa, kad vien jūs to pieprasāt: modelī nekas netiek rakstīts, tāpēc tie vienmēr sakrīt ar to. Lai ievietotu karkasu modelī kā elementus, izmantojiet {{ui:Karkass}} koka sienām, grīdām un jumtiem.
