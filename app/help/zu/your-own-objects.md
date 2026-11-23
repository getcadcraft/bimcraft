---
title: Letha izinto zakho namafayela omndeni emtapweni
summary: Funda amafayela omndeni (.rfa) namafayela e-IFC, DWG, DXF, glTF noma OBJ kwithebhu ye-Umtapo, uwabeke njengamanye amaembulo womtapo, bese uwagcina ezintweni zami, uhlu oluyimfihlo oluyena wedwa okubonayo.
keywords: rfa, umndeni, imindeni, umtapo womndeni, izinto zami, izinto zami, izinto ezizimele, umtapo ozimele, ngenisa izinto, okuqukethwe komkhiqizi, izinto ze-bim, into ye-ifc, gltf, obj, ibhulokhi ye-dwg, gcina, shintsha, fuduleka
from: 886261f8
---

## Okuzokwenza

Letha izinto osezinazo ku-BimCraft: umtapo womndeni ovela ku-Revit, okulandwa komkhiqizi nge-IFC noma nge-DWG, noma i-mesh evela komunye umklami. Ufunda ifayela ethebhini le-{{ui:Umtapo}}, ubeke into emodelini yakho njengesakhi esifanele se-IFC, futhi, uma ufuna ukuyisebenzisa futhi kamuva, uyigcine ku-{{ui:Izinto zami}}.

## Izinyathelo

1. Vula imodeli ye-IFC, noma qala isakhiwo esisha.
2. Chofoza ithebhu ye-{{ui:Umtapo}} eduze kwe-{{ui:Izici}}.
3. Chofoza {{ui:Amafayela…}}, bese {{ui:Khetha ifayela…}}. Khetha ifayela elilodwa noma amafayela amaningi ngesikhathi esisodwa: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` noma `.csv`. Noma chofoza {{ui:Khetha ifolda…}} ukufunda ifolda yonke namafolda angaphakathi kuyo (kuya kumafayela angu-200 ngesikhathi esisodwa).
4. Chofoza ikhadi ukubona okufundiwe: ukubuka kwepulani, igama, umkhiqizi nomodeli, usayizi nezinsiza.
5. Chofoza {{ui:Beka epulanini}} noma {{ui:Beka emodelini}} ukuyibeka.
6. Ukuze uyisebenzise futhi kwamanye amaphrojekthi, chofoza {{ui:Londoloza ezintweni zami}}. Uma kufundwe amafayela amaningi, {{ui:Londoloza zonke ezintweni zami}} ayigcina ngesinyathelo esisodwa.
7. Kamuva, chofoza {{ui:Izinto zami}} ethebhini le-Umtapo ukuze uzithole. Ziyabekwa, ziyashintshwa futhi ziyavuselelwa njenganoma yisiphi isinto somtapo.

Amafayela afundwa kule thebhu. Akukho okulayishelwa kuze kukhethwe {{ui:Londoloza ezintweni zami}}.

## Okufundwa kusuka kuhlobo ngalunye lwefayela

| Ifayela | Okuzothola |
|---|---|
| IFC | Uhlobo ngalunye lwento njengento enesimo sayo sangempela se-3D, uhlobo lwe-IFC namasethi wezici |
| glTF, GLB, OBJ | Into eyodwa enesimo sayo sangempela se-3D njenge-mesh. Setha iyunithi nokuthi yiliphi icala elikhombe phezulu kuqala. |
| DWG, DXF | Ibhulokhi ngayinye njengento enomdwebo wayo wepulani nezici |
| Ifayela lomndeni (`.rfa`) | Igama lomndeni, uhlobo, umkhiqizi, imodeli, amapharamitha nezinhlobo zawo. **Hhayi isimo sawo se-3D:** ibhokisi lobubanzi, ukujula nobude bomndeni liyamela. |
| CSV | Into eyodwa ngomugqa ngayinye: igama, usayizi nedatha, idwetshwe njengebhokisi |

## Amafayela omndeni nesimo sawo se-3D

Isimo se-3D esisefayeleni le-`.rfa` sigcinwa ngefomethi engachazwanga, ngakho i-BimCraft ifunda idatha yomndeni futhi ayiqageli ijiyomethri yawo. Ikhadi liyasho: "Ijiyomethri ayifundiwe kulo mndeni; ibhokisi liyamela."

Ukuze uletha umndeni nesimo sawo sangempela, uwukhiphe ohlelweni olwawenza (Revit):

1. Vula umndeni, noma iphrojekthi enomndeni obekwe kuyo.
2. Khetha **File > Export > IFC**. Bona [izilungiselelo zokukhipha ezivulwa kahle lapha](topic:rvt-to-ifc).
3. Ku-BimCraft, funda ifayela le-`.ifc` nge-{{ui:Amafayela…}}. Uhlobo ngalunye lomndeni lufika njengento yalo, nesimo nama-property sets alo.

Abakhiqizi abaningi banikeza okulandwa nge-IFC noma nge-DWG ngasese kwefayela lomndeni. Lokho kufundeka ngqo.

## Izinhlobo zomndeni

Umndeni onezinhlobo eziningi ufika njengento eyodwa enesinqumo se-{{ui:Uhlobo}}, uhlobo olulodwa ngalunye. Uhlobo ngalunye lunamanani ahlukile phakathi kwezinhlobo, nebhokisi lalo uma uhlobo lunobubanzi nokujula. Umndeni onohlobo olulodwa uyinto evamile egcwele amanani alolohlobo.

Ezinye izindawo zigcina izinhlobo zazo ohlwini lwezinhlobo: ifayela le-`.txt` elinegama elifanayo elingaphansi kwefayela lomndeni. Khetha bobabili ndawonye, noma khetha ifolda, bese imigqa yohlu iba uhlobo.

## Idatha yomndeni esimweni sangempela

Uma ifolda inefayela lomndeni nefayela le-IFC, i-glTF noma i-OBJ elinegama elifanayo (`Chair.rfa` no-`Chair.ifc`), khetha bobabili ndawonye noma khetha ifolda. I-BimCraft yenza into eyodwa: ifayela lomndeni linikeza igama, umkhiqizi, imodeli, amapharamitha nezinhlobo, nelinye ifayela linikeza isimo sangempela se-3D. Izinothi zisho ukuthi isimo sivela kuphi. Isimo esisodwa sisetshenziswa kuzo zonke izinhlobo.

Uma ifayela lomndeni linesithombe elisindisiwe kulo, imininingwane yento ikhombisa leso sithombe ngaphansi komdwebo wepulani. Isithombe sikhonjiswa khona kuphela; asigcinwa nento.

## Izinto zami

{{ui:Izinto zami}} uhlu lwakho oluzimele kumtapo. Wena kuphela ubona okukuwo: akusemtapweni womphakathi, akusesakheni, futhi akukhonjiswa ku-ithimba lakho. Ilandela i-akhawunti yakho, ngakho izinto ezifanayo zikhona kwenye ikhompyutha uma usungene kumtapo.

- Kudingeka ungene kumtapo ukuze ugcine into. Bona [ngena kumtapo](topic:library-credits).
- Ukugcina into kuthumela into eyodwa ku-akhawunti yakho. Kuze kube yilapho, ihlala ekhompyutheni yakho.
- {{ui:Susa ezintweni zami}} isusa into ohlwini. Izikhopha ezisevele ezithombeni zomdwebo ziyahlala.
- Ukuze wabelane nento nabo bonke, yilayishe emtapweni womphakathi, ngaphansi kwelayisensi okhetha wena.

:::note
Izinto zami zisahlolwa futhi kungenzeka zingakavulwa ku-akhawunti yakho. Uma umthombo ungekho, noma kuthi "Izinto zami azikavulwa ku-akhawunti yale", ungafunda futhi ubeke amafayela akho nge-{{ui:Amafayela…}}; alondolozwa ngaphakathi kumodeli yakho.
:::

## Amaphutha ajwayelekile

- **Ukulindela isimo sangempela somndeni kwe-`.rfa`.** Idatha yayo kuphela ifundwa. Khipha i-IFC ukuze uthole isimo.
- **Izinto ezimbili lapho ulindele eyodwa.** Umndeni nefayela lesimo yahlanganiswa kuphela uma amagama afana ngokuphelele, ngaphandle kokuphela, futhi zisefolda eyodwa.
- **Imesh ifika ingaphindwe ngamakhulu ayinkulungwane noma ilele ngasohlangothini.** Setha {{ui:Amayunithi efayela}} no-{{ui:Eksi ephezulu ye-mesh}} ngaphansi kwe-{{ui:Amafayela…}} ngaphambi kokukhetha ifayela.
- **"Akukho datha yomndeni" kwifayela.** Lena iphrojekthi (`.rvt` egcinwe ngokuphela okwehlukile) noma ithemplethi yomndeni, hhayi umndeni. Bona [Funda ifayela lephrojekthi noma lomndeni](topic:read-rvt-file).
- **Ukugcina okuqukethwe ongavunyelwe ukukugcina.** Amanye amatheku akhokhelwayo awavumeli izikhopha ngaphandle kwesevisi yawo. Hlola imigomo yokuqukethwe ongakudalanga wena.
