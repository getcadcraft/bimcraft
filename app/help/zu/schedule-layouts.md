---
title: Hlela, londoloza futhi uthumele uhlu
summary: Hlanganisa uhlu, unikeze izinkomba zamasamba nezamba eliphelele, engeza ikholomu efundwa kusuka empahleni, uyilondoloze njengesethi ngaphakathi kwefayela, bese uyithumela njengefayela le-spreadsheet (.xlsx), njengombhalo wokunamathisela kushidi le-inthanethi, noma njenge-CSV. Umgomo wehhovisi uyagcwalisa lokho uhlu olungakushongo.
keywords: ukuhlela uhlu, hlanganisa ngo, isamba esiphansi, isamba, izihloko, umgomo wehhovisi, izinqubomgomo ezizenzakalelayo, isethi yokusetha, uhlu lwemnyango ngesitezi, ukumelana nomlilo, izinsimbi zemnyango, ikholomu, ibha yezinhlobo, ukuhlanganisa, xlsx, incwadi yomsebenzi, ishidi le-inthanethi, namathisela, csv, thumela, izinto, khetha kusuka kuhlu, inani
from: 95dfd801
---

## Okuzokwenziwa

Guqula uhlu olujwayelekile libe lolo ihhovisi lakho elilukhipha: luhlanganiswe ngezitezi, ngohlobo noma ngamagumbi, nezinkomba zamasamba, nezikholomu ozidingayo, ngegama lalo. Bese uyithumela esheethini lesipredishithi. Yonke imigqa nawo wonke amanani asalazi izinto azivela kuzo.

## Izinyathelo

1. Vula {{ui:Draw}} bese uvula **Schedules** esiqeshini sakwesobunxele. Khetha uhlu, njengo **Doors**.
2. Phezu kwethebula, khetha **Group by** (ikholomu yohlu, njengo-Level noma Type, noma **No grouping**) ne-**Totals** (**No totals**, **One total**, noma **Subtotals and a total**). **As set** ishiya ukukhetha esethini elilondoloziwe noma komgomo wehhovisi.
3. Ukuze wengeze ikholomu efundwa ezintweni, thayipha igama lempahla noma legama lethegi ngaphansi kwethebula (njengo `FireRating`, `Pset_DoorCommon.FireRating` noma igama lethegi njengo `Ironmongery`) bese uchofoza **Add column**. I-BimCraft ifunda amasethi wezakhiwo wento kuqala, bese wohlobo lwayo. Uma kungekho nanye inani okwamanje iyakutshela; ikholomu igcwala yodwa inani lisethiwe.
4. Thayipha igama (njengo "Uhlu lwemnyango ngesitezi") bese uchofoza **Save as a set-up**. Isethi igcinwa efayeleni lesakhiwo ijoyine uhlu lwe-Schedules ngegama layo. Ilandela wonke ushintsho emodelini. **Remove this set-up** iyisusa. Kokubili kuyisinyathelo esisodwa ku-Undo.

## Chofoza inani ukukhetha lapho livela khona

Chofoza noma yimuphi umugqa, noma noma yiliphi inani elilodwa, ukuze ukhethe izinto ezingemuva kwawo ephlaneni nasekubukeni kwe-3D:

- umugqa ukhetha izinto zalowo mugqa;
- isamba esiphansi noma isamba esiphelele sikhetha konke okufakayo, nekhanda leqembu likhetha iqembu lalo;
- inani elinezinto zalo lizikhetha lezo: i-**Deductions** yohlobo lodonga ikhetha iminyango nemawindi alo, indawo yodonga yegumbi ikhetha izindonga zalo.

Okufanayo kusebenza kudokhumenti eyenziwe kusuka emodelini: ku-preview, chofoza inani lohlu.

## Ukuthumela

- **Download Excel** ilondoloza ifayela le-.xlsx. Ubude, izindawo, amavolumu nezinani ziyizinombolo zangempela ngeyunithi ikholomu eyibonisayo (amafidi namainchi asala engumbhalo). Ishidi lesibili, **Elements**, lihlu ngomugqa ngamunye oGlobalIds wezinto ezingemuva kwawo.
- **Copy for Google Sheets** ibeka uhlu ku-clipboard njengombhalo ohlukaniswe ngamathebhu. Ku-Google Sheet, chofoza iseli A1 bese unamathisela. **Open a new Google Sheet** ivula `sheets.new`, ikheli likaGoogle lesheet elingenalutho, kuakhawunti yakho yeGoogle. I-BimCraft ayingeni ngemvume kuGoogle futhi ayithumeli lutho lapho: ukunamathisela kungokwakho.
- **Download CSV** ilondoloza ithebula njengoba lihlelwe esikrinini.

## Umgomo wehhovisi

Ihhovisi lingasho kanye ukuthi amahlu alo ahlelwa kanjani: vula i-add-on ye-**Default Policies** ([Default Policies](topic:default-policies)) bese usetha, ku-**Settings › Global › Default Policies › Schedule layout (the office standard)**:

| Inqubomgomo | Yenzani |
|---|---|
| Group schedules by | Level, Type, Room noma ukungahlanganisi, kuwo wonke amahlu anale kholomu |
| Totals in schedules | Akukho samba, isamba esisodwa ekugcineni, noma isamba esiphansi ngaphansi kwelinye iqembu nesamba esiphelele |
| Schedule title | Iphethini, njengo `{project}: {schedule}` |
| Column headings | Njengoba kubhalwe, NGEZINHLAMVU EZINKULU noma Ngezinhlamvu Ezinkulu |

Umgomo usebenza kuwo wonke amahlu, noma ngubani owasethile: amahlu avamile aphaneli, isethi elondoloziwe, uhlu umsizi olusethayo, izimpendulo nezidwebo kudokhumenti. Isethi esho ukuhlanganisa, izamba noma isihloko sayo siyagcina lokho; umgomo ugcwalisa okusele. Iphaneli ikhombisa yiziphi izingxenye umgomo wehhovisi uzisethile. Izinqubomgomo zihamba nefayela le-Default Policies kanye nezinye.

## Okuhle ukwazi

- Isethi ibiza umthombo wayo wohlu namakholomu ayo; ayibambi zinombolo. Izinombolo zifundwa emodelini njalo lapho.
- Uhlu olungayona imigqa yezinto (izakhiwo zezindonga nencwadi yezinto) alunalo ilayawuti noma ukuthumela lapha.
- Umsizi ungakwenzela yonke lena: bheka [Vumela umsizi we-AI asebenze nemodeli yakho](topic:assistants).
