---
title: Izinkambu zephaneli yezici
summary: Okusho ngayinkambu ngayinye ephaneli ye-Properties kanye nephaneli ye-File, Drawing ne-Folder, nokuthi yiziphi ongazishintsha.
keywords: izici, izinkambu, izici (attributes), globalid, guid, kopisha, kopisha inani, kopisha konke, csv, clipboard, inombolo yenkonzo, ithegi, uhlobo lwento, umugqa, express id, isethi yezici, pset, izinombolo, ischema, ephaneli yefayela
from: fe55b435
---

## Into ye-IFC

Phezulu kwephaneli ye-{{ui:Izici}} kukhonjwa uhlobo lwento ngaphandle kwesiqalo "Ifc" (isibonelo "Door", "WallStandardCase", "FurnishingElement") negama layo, noma "Akuqanjiwe".

| Inkambu | Incazelo | Iyashintsheka |
|---|---|---|
| Igama | Igama lento, ngokuvamile igama lomndeni nohlobo oluvela kumthumeli | Yebo |
| Uhlobo | Igama lohlobo lwento, uma inalo | Cha |
| Uhlobo lwento | Incazelo yohlobo ngombhalo ovulekile ezinye izithumeli ezizigcwalisayo | Yebo |
| Ithegi | Ithegi noma uphawu lwento; izithumeli eziningi zibhala i-ID yento lapha | Yebo |
| Incazelo | Umbhalo ovulekile | Yebo |
| GlobalId | Ikhodi ye-IFC yento engu-22 izinhlamvu, engaguquki, efanayo kuwo wonke ukuthunyelwa kwalento efanayo | Cha |
| Umugqa | Inombolo yomugqa (`#1234`) yento kulelo fayela le-IFC. Iyashintsha phakathi kokuthunyelwa | Cha |

Ngaphansi kuvela **amasethi ezici**, ahlelwe ngegama:

- Iseti ngayinye ivulwa futhi ivalwe lapho uchofoza igama layo. Ezintathu zokuqala zivulekile.
- Iseti emaka ngo "(type)" yohlobo lwento: "Inani lohlobo: ukushintsha lapha kusebenza kuzo zonke izinto zalolohlobo."
- Amasethi wezibalo (ubude, izindawo, amavolumu, izibalo, izisindo) afundeka kuphela.
- Izinhlu nezinani ezibalwayo zikhonjiswa, zifundeka kuphela.
- Amanani Yebo/Cha abonisa **Yebo** noma **Cha**.
- Izinombolo ziyazungezwa zibe izinkamba ezine ukuze zikhonjiswe. Ubude (inkambu yobude noma ubude bewuthi) bubonisa ngo-{{ui:Amayunithi}} akhethwe kuthuluzi, nomkhiqizo wabo ecaleni kwawo, futhi ungathayipha inani elisha kuleyo yunithi noma ngophawu olunye lweyunithi (2.4 m, 8'-0"): i-BimCraft ibhala inombolo yefayela yona ibuyele kuyo. Ezinye izinombolo zibonisa njengoba ifayela linazo.
- Inani elingenalutho libonisa *empty*. Inani eliguqulwe libe bold futhi linebha eluhlaza ecaleni kwalo.

## Kopisha inani

Inani ngalinye ku-{{ui:Izici}} linenkinobho encane yokukopisha ecaleni kwalo: chofoza ukuze ufake lelo nani ku-clipboard njengoba likhonjiwe, isibonelo i-GlobalId, inombolo yesisebenzi noma nanoma yiliphi inani leseti yezici. Ukukopisha akuqali ukuhlela.

Phezulu, {{ui:Kopisha konke}} ikopisha wonke amanani wento njengombhalo, iseti ngeseti, kanti {{ui:Kopisha njenge-CSV}} ikopisha njengemigqa yeqembu, izici nenani ukuze unamathisele kusipredishithi; amanani angenalutho ayagcinwa ukuze inkambu ngayinye ibe nomugqa. Lokhu kusebenza ngendlela efanayo kusinto yemodeli evulekile evela kwenye; uma kuvulekile amamodeli amaningi, i-CSV iqala ngekholomu ye-Model ebiza igama lefayela lawo.

## Ephaneli ye-File (IFC)

| Inkambu | Incazelo |
|---|---|
| File, Size | Ifayela olivulile nosayizi walo |
| Schema | Inguqulo ye-IFC, njengo-IFC2X3 noma IFC4 |
| Project | Igama lephrojekthi nelide |
| Phase | Isigaba sephrojekthi, uma umthumeli esibhalile |
| Exported from | Uhlelo olwathumela, kusuka ekhanda lefayela |
| Author | Umbhali ekhanda lefayela |
| Exported | Usuku nesikhathi ekhanda lefayela |
| Elements | Inani lezinto ezinesimo esidwetshiwe |
| Triangles | Inani lama-triangle akhiwa yizimo zazo; ikhalidi lokuthi imodeli inzima kangakanani |

## Ephaneli ye-File (amafayela ephrojekthi nomndeni)

| Inkambu | Incazelo |
|---|---|
| Kind | Iphrojekthi, Ithempulethi yephrojekthi, Umndeni noma Ithempulethi yomndeni |
| Saved in | Ukukhishwa okulondoloze ifayela okokugcina |
| Build | Ibhildi elinembile lalokho kukhishwa |
| Read | Yingakanani ingxenye yefayela i-BimCraft eyifundile, kusuka kubukhulu balo |

## Ephaneli ye-Drawing (DWG ne-DXF)

| Inkambu | Incazelo |
|---|---|
| Format | Ukukhishwa umdwebo olondolozwe ngakho, nekhodi yefomethi, njengo-AC1032 |
| Units | Amayunithi okungenisa womdwebo, uma esethiwe |
| Entities | Inani lezinto ezifundiwe |
| Layers | Inani lamalayiri |
| Sheets | Inani lamashidi (ama-layout), noma None |
| Linked drawings | Imidwebo exhunyiwe etholakele futhi elayishiwe |
| Equipment | Inani lemishini ethegiwe esemashidini |

## Ephaneli yefolda

| Inkambu | Incazelo |
|---|---|
| Folder, Files, Size | Ifolda evulekile, inani lamafayela alo nosayizi wawo wonke |
| Models | Amafayela ephrojekthi nomndeni, ngayinye nezikhulumi zayo zibalwa kanye |
| CAD drawings, IFC models | Inani ngalinye |
| Problems | Inani lamakhophi emodeli angaphelele noma angafundeki, noma None |
