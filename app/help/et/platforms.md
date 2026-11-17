---
title: Brauserid, seadmed ja mälu
summary: Mis erineb BimCraftis Chrome'i, Edge'i, Firefoxi ja Safari vahel, Macis, Windowsis ja Linuxis, hiire, puuteplaadi või puuteekraaniga ning kui suurt faili see võib võtta.
keywords: brauser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tahvelarvuti, telefon, puuteekraan, puuteplaat, mälu, suured failid, webgl, jõudlus
from: fd8acba1
---

BimCraft töötab Chrome'i, Edge'i, Firefoxi ja Safari viimastes versioonides Macil, Windowsil ja Linuxil. 3D-vaade vajab WebGL-i, mida iga praegune brauser toetab. Vaata [Brauserid ja arvutid](common:browsers), mida rakendused üldiselt vajavad.

## Kausta avamine

| Brauser | {{ui:Ava kaust}} teeb järgmist | Kausta lohistamine | {{ui:Hiljuti avatud kaustad}} |
|---|---|---|---|
| Chrome, Edge | Brauseri kaustavalija, seejärel küsimus „Kas lasta saidil faile vaadata?“: klõpsa **Vaata faile** | Avaneb ilma küsimata | Jah, valitud või lohistatud kaustade puhul |
| Firefox | Süsteemi kaustavalija | Avaneb ilma küsimata | Ei |
| Safari | Süsteemi kaustavalija, nupuga **Laadi üles** (midagi ei laadita üles) | Avaneb ilma küsimata | Ei |

Taustal: Chrome ja Edge kasutavad File System Access valijat ja suudavad kausta meeles pidada. Firefox ja Safari kasutavad vanemat kaustavalijat, mis annab kõik kausta failid korraga ja mida ei saa meelde jätta. Lohistatud kausta loetakse igas brauseris kirje haaval.

:::chromium
Brave ja mõned teised Chromiumi brauserid lülitavad kaustavalija välja. BimCraft kasutab siis süsteemi kaustavalijat, ja brauser võib küsida „Kas laadida *n* faili sellele saidile üles?“. Midagi ei laadita üles; failid lähevad ainult vahekaardile. Kausta lohistamine väldib küsimust.
:::

## Mac, Windows ja Linux

- Kiirklahvid, mis on kirjutatud {{key:Mod+S}} ja {{key:Mod+Z}}, on Macil Command ja Windowsil ning Linuxil Ctrl.
- {{key:Ctrl+Shift+F}} (ekraanirežiimid) on Control igal platvormil, sealhulgas Macil.
- Failidialoogid ja allalaadimiste kaust on sinu süsteemi enda.

## Hiir, puuteplaat ja puuteekraan

| Sisend | 3D-vaade | 2D-joonistus |
|---|---|---|
| Hiir | Vasak lohistus pöörab, parem lohistus nihutab, rullik suumib, klõps valib | Igasugune lohistus nihutab, rullik suumib, topeltklõps mahutab |
| Puuteplaat | Klõpsa ja lohista pöörab; {{key:Shift}} või {{key:Mod}} ja lohistus nihutab; kahe sõrmega kerimine või näpistus suumib | Klõpsa ja lohista nihutab; kahe sõrmega kerimine või näpistus suumib |
| Puuteekraan | Üks sõrm pöörab, kaks sõrme näpistavad ja nihutavad, puudutus valib | Üks sõrm nihutab; näpistussuumi veel ei ole; puuduta {{ui:Mahuta}} |

Macis on puuteplaadil parem klõps kahe sõrmega klõps (või Control-klõps). Vaata [Klahvid, hiired ja puuteplaadid](common:keys).

Tahvelarvutid ja telefonid saavad avada üksikuid faile ja neid vaadata, kuid ekraan on väike, paljud mobiilsed brauserid ei saa kaustu valida ja suured mudelid ei pruugi nende mällu mahtuda. Arvuti töötab kõige paremini.

## Suured failid ja mälu

Kõik, mida BimCraft loeb, elab brauseri vahekaardi mälus. See, kui palju vahekaart võib kasutada, sõltub rohkem brauserist ja sinu arvutist kui BimCraftist.

| Fail | Kui palju loetakse | Mida oodata |
|---|---|---|
| IFC | Kogu fail ja selle põhjal ehitatud 3D-geomeetria | Suurus sõltub arvutist ja brauserist; mitme sajast megabaidist mudel võib sülearvutile liiga olla. Üle 1.5 miljoni kolmnurga puhul servad lülitatakse välja |
| Projekti- ja perekonnafailid | Umbes 40 KB kuni 100 KB, olenemata suurusest | Isegi väga suured keskmudelid avanevad hetkega, ka võrgudraivilt |
| DWG ja DXF | Kogu fail | Väga suured joonised näitavad „This drawing is very large; only part of it is shown.“ |
| Kaustad | Failinimekiri ja paar kilobaiti mudeli kohta | Kuni 20 000 faili |

Kui vahekaardi mälu saab otsa, näitab brauser oma veateadet (näiteks „Aw, Snap!“ Chrome'is). Sulge teised vahekaardid, laadi BimCraft uuesti ja proovi uuesti, või kasuta arvutit, millel on rohkem mälu.

## Seotud

- [Võrgus ja võrguta](topic:online-offline)
- [Tõrkeotsing](topic:troubleshooting)
