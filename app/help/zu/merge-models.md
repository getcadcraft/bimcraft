---
title: Hlanganisa ukuhlelwa kwabantu ababili kumodeli eyodwa
summary: Vumela i-git, i-Fossil noma i-Mercurial ukuhlanganisa amakhophi amabili ahleliwe emodeli efanayo ye-IFC ngento ngento, ukuze abantu ababili badwebe esakhiweni esisodwa bese bahlanganisa umsebenzi wabo.
keywords: hlanganisa, git, fossil, mercurial, ukulawula inguqulo, ukungqubuzana, izindlela ntathu, cadcraft merge, gitattributes, ifc, globalid, ithimba, amakhophi amabili, amagatsha
from: 50733df8
---

Abantu ababili bathatha ikhophi yesakhiwo esifanayo, omunye adwebe ingxenye yempumalanga, omunye eyentshonalanga, bese kamuva amakhophi kudingeka abe okunye. Uma babe bathinte izinto ezahlukene, uhlelo lungakwenza esikhundleni somuntu.

## Okwenza kusebenze

Yonke udonga, umnyango, izinga, igumbi kanye nesethi yezici ku-IFC ine-GlobalId engashintshi. Ukuhlanganisa kubheka izinto ngalo id, hhayi ngenombolo efayela iyinika (`#123`), ngoba izinombolo ziyashintsha uma uhlelo lulondoloza. Izingxenye ezincike ekintu ezingenayo i-id yazo (izindawo, imilo, izinyunithi) ziqhathaniswa ngokuthi ziqukethe ini.

Amakhophi womabili kumele abe inguqulo efanayo ye-IFC (2x3, 4 noma 4.3). Ukuhlanganisa kugcina ifayela lakho njengoba lilunjalo, ukulandelana kwalo nezinombolo zalo, bese kungeza okusha, ngakho i-git diff yokuhlanganisa ikhombisa okuguqulwe ukuhlanganisa kuphela.

## Setha

I-Git idinga imigqa emibili kanye ngesitoreji ngasinye:

```
# .gitattributes
*.ifc merge=cadcraft

# kanye, kukhompyutha ngayinye
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ngaphandle kwe-git, qhuba `cadcraft merge <base> <ours> <theirs>`. I-Fossil ne-Mercurial zithatha amafayela amathathu afanayo kusetha yazo yesisetshenziswa sokuhlanganisa. Akukho okulayishwayo; konke kusebenza kukhompyutha yakho.

## Imithetho

- Isici esishintshe ohlangothini olulodwa kuphela siyathathwa. Ushintsho olufanayo ohlangothini lombili luthathwa kanye.
- Isici esishintshwe ngezindlela ezimbili (izinga elifanayo elilungiswe ngezindlela ezimbili) ngukungqubuzana: uhlangothi lwakho luhlala futhi umbiko ubhala bobabili. Vula umphumela ulungise ngesandla.
- Uhlu lwezinto (udonga ezingeni, izici zesethi) luhlanganiswa njengesethi: okwengezwe nganoma yiluphi uhlangothi kuyagcinwa, nokususwe nganoma yiluphi uhlangothi kuyasuswa. Abantu ababili abengeza amadonga ezingeni elifanayo abaphikisani.
- Into eyengezwe nganoma yiluphi uhlangothi iyagcinwa, nomumo wayo nezici zayo. Isusiwe ohlangothini olulodwa futhi ingashintshiwe kolunye: iyasuswa. Isusiwe ohlangothini olulodwa futhi ishintshwe kolunye: iyasuswa, futhi iyabikwa.
- Isikhathi nomlobi wefayela, kanye nomlando womnikazi wento ngayinye, kuhlala kwakho.

Imilo ihlanganiswa ngokuphelele: umumo wodonga uvela ohlangothini olulodwa, akuxutshwa ngephoyinti ngephoyinti. Amafayela e-IFC nawe-IFCX afakwe ku-zip ayahlanganiswa. Ngemva kokuhlanganisa, vula umphumela ku-BimCraft ubheke iphaneli {{ui:Izinkinga}} ngaphambi kokuthi ulondoloze.
