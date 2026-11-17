---
title: Tafatir qoys
summary: Beddel parameters, qaacidooyin iyo solids qoys, muuji qaybaha parameter Haa / Maya, goo oo isku xidh solids, siiso xidhiidhiyayaal biyaha iyo tuubooyinka hawada, oo arag natiijada loo sawiray IFC ee kaydin doonta.
keywords: tafatiraha qoysaska, tafatir qoys, parameter, parameters, qaacido, qaacidooyin, muuqaal, haa maya, solid, solids, sanduuq, extrusion, extrude, revolve, sweep, profile, arc, boolean, booleans, cut, join, difference, union, handle, handles, work plane, sketch, qoys cusub, xidhiidhiye, xidhiidhiyayaal, port, ports, xidhiidhiyaha tuubada, xidhiidhiyaha tuubada hawada, biyo-dhigga, biyo-gelinta
from: 1ab31c10
---

## Fur tafatiraha

Fur qoys (baaraha mashruuca **Qoysaska**, ama {{ui:Dhismaha}} › {{ui:Qoysaska…}}) oo riix {{ui:Wax ka beddel qoyska}}. Si aad wax aan waxba lahayn ka bilowdo, riix {{ui:Qoys cusub}}: siiso magac, sheeg waa maxay (albaab, daaqad, alaab, qalab ama wax kale) iyo, albaab ama daaqad ahaan, dooro bilowga qaabkiisa iyo gacantiisa. Tafatiraha wuxuu furmaa qoys leh dhowr parameter iyo hal solid.

Tafatirka bilowga ah wuxuu isbeddelladaada ku kaydiyaa moodeelkan oo keliya. Moodeelada kale waxay haystaan bilowga sida uu yahay.

Waxba ma beddelmo moodeelka ilaa aad riixdo {{ui:Kaydi qoyska}}. Tafatiraha wuxuu leeyahay ka noqo iyo mar kale oo gudaha ah (badhamada fallaadha ee magaca ku xigta, ama {{key:Mod+Z}} iyo {{key:Mod+Y}}); kaydinta waa hal tallaabo oo ku jirta ka noqoshada moodeelka.

## Parameters

Tab-ka {{ui:Cabbiraha}} wuxuu liistaa parameters-ka qoyska: magac, nooc iyo default. Noocyadu waa: **Dherer** (millimitir), **Xagal** (darajo), **Tiro**, **Tiro oo buuxa**, **Haa / Maya**, **Qalin** (1–16), iyo saddex oo qaata erayo halkii tirooyin: **Qoraal**, **Agab** (mid ka mid ah agabka mashruuca) iyo **Buuxin** (buuxinta qorshaha). Erayada lama isticmaalo qaacidooyinka; waxay midabeeyaan solid (**Agabkiisa**), buuxiyaan qayb calaamad, ama ku soo baxaan sida `{Name}` qoraalka calaamadda. Sanduuqa **Qalab kasta** wuxuu ka dhigaa parameter ay qalab kasta oo la dhigay iyada isu dejiso halkii cabbirka.

- **Qaacido** wuxuu ka dhigaa parameter inuu raaco kuwa kale, tusaale `Width / 30` ama `if(Width > 1200, 2, 1)`. Dherarka qaacidooyinka waa millimitir, ama qor unug: `3'`, `6in`, `50cm`.
- Magac beddelka parameter waxa uu beddelaa magaciisa qaacido kasta iyo goob kasta oo isticmaasha. Parameter weli la isticmaalayo ma la saari karo.
- **Agabka** solid wuxuu qaataa midabka agabka mashruuca (ama parameter Agab), **Muuqda marka** wuxuu qariyaa heerarka faahfaahinta ka liita, **Ku celi** wuxuu sameeyaa nuqullo: tiro (tiro ama parameter tiro oo buuxa, 1 ilaa 200) iyo tallaabada u dhexeysa x, y iyo z. Solid la celiyay waa safka alwaaxyada, go'yada ama godadka; haddii lagu jaro, nuqullada waxay wada jaraan.
- Qoys albaab ama daaqad ah wuxuu sidoo kale helaa laba magac darbigiisa: `WallThickness` iyo `Face` (1 ama −1, dhinaca uu albaabku ku rogmado).

## Solids

Tab-ka {{ui:Jirarka}} wuxuu liistaa solids. Ku dar sanduuq, extrusion, revolve ama sweep:

| Solid | Waxa aad dejiso |
|---|---|
| Box | laba geeskiisa: x0 ilaa x1, y0 ilaa y1, z0 ilaa z1 |
| Extrusion | profile ku yaal work plane (plan, front ama side), meesha diyaarka uu yaal, iyo qoto dheer |
| Revolve | profile, tiir oo diyaarka ku taal, iyo xagal ilaa 360° |
| Sweep | jid oo dhibcood ah iyo radius (ul ama jaranjaro) |

Tiro kasta waxay noqon kartaa tiro la qoray ama qaacido parameters. Solid kasta wuxuu leeyahay midab iyo **Muuqda marka**: ka daa banaan si ay had iyo jeer u muuqato, ama magac Haa / Maya parameter (ama qor isbarbardhig sida `Shelves >= 3`) si ay markaa keliya u muuqato. Taasi waa parameter muuqaal.

### Sawir profile

Profile-ka extrusion ama revolve waxa lagu sawiraa work plane-kiisa hoosta preview-ka:

- Riix warqadda si aad dhibic ugu darto kan la doortay ka dib.
- Jiid dhibic si aad u dhaqaajiso. Dhibcuhu waxay ku xidhmaan grid-ka; hay {{key:Shift}} si aad u dhigto si xor ah.
- Riix labajaran yar oo ku yaal qayb si aad dhibic halkaas ugu darto. {{key:Shift}}+riix qaybtaas waxay ka dhigaysaa arc (riix mar kale si aad u doorato dhinaca kale, kadibna toos).
- Laba jeer riix dhibic si aad u tirtirto.

Dhibcaha godan parameters ayaa dejiya: ku beddel miiska, ha jiidin.

## Booleans

Tab-ka {{ui:Boolean}} wuxuu ka jaraa solid-ka labaad solid-ka koowaad, ama wuu isku xidhaa. Natiijada Boolean waa la jari karaa ama mar kale la isku xidhi karaa. Solid la isticmaalay Boolean waxaa lagu sawiraa qayb ka mid ah oo keliya.

Marka solid-ka labaad uu qariyo parameter Haa / Maya, kan koowaad waa la hayaa sidiisa; marka kan koowaad qarinayo, natiijadu waa la qariyaa.

## Calaamadda qorshaha

Tab-ka {{ui:Calaamadda qorshaha}} wuxuu sawiraa waxa qorshuhu muujiyo qoyskan halkii goynta solids-kiisa: xariiqyo, rectangles, goobo, xagal, poligon iyo qoraal, oo ku salaysan axes-ka qoyska. Qayb kasta waxay leedahay **qalin** (1–16, qaacido ama parameter Qalin), **buuxin** (ma jiro, adag, diagonal, isku-jarran, konkreet, insulation, dhulka, ama parameter Buuxin), **muuqda marka** qaacido, **gobolka jarista** millimitir kor ka sare saldhigga (qayb si buuxda loo sawiro goynta qorshaha ay ku jirto, si fiican hoos uga hoosaysa, si dashed ka sarreysa: kabbaad kor ka goynta wuxuu muujinayaa dashed), heerka faahfaahinta, iyo ku celinta. Qoraalku wuxuu magacaabi karaa parameters sida `{Name}`. **Qorshuhu wuxuu muujinayaa: Goynta solids-ka** wuxuu hayaa qorshaha oo jarayo solids-ka halka calaamaddu ku sii jirto qoyska. Barnaamijyada kale waxay calaamadda akhrinayaan sida footprint-ka qoyska (xariiqyo iyo qaabab; qoraalku wuxuu ku sii jiraa BimCraft oo keliya).

## Qoysaska gudaha ku jira

Tab-ka {{ui:Qoysaska gudaha ku jira}} wuxuu qoys kale gudaha ku dhigayaa: lug miis ku jirta, gacan albaab ku jirta. Dooro qoyska, kadibna meesha uu ku yaal (x, y, z), inta uu rogmo (rubuc-wareeg oo keliya: 0, 90, 180, 270), goorta uu muuqdo, iyo qiyamka uu helo, mid kasta safka: `Height = Height - 40`. Markii qoyska gudaha la kaydiyo, qoyskan waa la sawiraa mar kale; qoys ay haysato qoys kale looma tirtiri karo; qoys isagu naftiisa ma hayn karo, xataa iyada oo marineysa qoys kale, isku-dhididda waxay ku joogsataa afar heer.

## Dhibcaha taabta

Dhibic taabta waa dhibic ama geesha aad jiidto si aad u beddesho parameter. Tab-ka {{ui:Dhibcaha taabta}} ku dar mid, dooro jihada uu ku jiido iyo parameter-ka tirada uu beddelo, oo ku qor booskiisa isla qaacidooyinka solids-ka. Preview-ka, dooro **Dhibcaha taabta** hoosta handles si aad u jiido. Elementi la dhigay qorshaha (dooro **Dooro**) dhibcaha x iyo y waxay u muuqdaan sida gacanta; jiid mid, elementigu wuxuu qaataa cabbirka dhibicdaas dhigaysa, iyada oo marinaya qaacidooyinka ku dhex jira; hal Undo ayaa celinaysa. Dhibic taabta ma beddeli karto parameter la wada maamulo, Haa / Maya ama erey.

Muuqaalka 3D isla dhibcahaas waxay u muuqdaan sida gacmo ku dhex jira elementiga la doortay, dhibcaha kor-hoos (axis z) ayaa halkaas muuqda, taasoo qorshuhu aan sawiri karin. Dooro elementiga, jiid gacan dhinaceeda axis-ka, oo sii dheji: elementigu wuxuu qaataa cabbirka dhibicdaas dhigaysa, hal tallaabo oo ka noqo. Gacmaha waa la qariyaa marka sanduuqa qaybta uu shidan yahay, sababta oo ah wuxuu isticmaalaa isla gacmaha.

## Xidhiidhiyayaal

Qoysaska lagu dhigay dhulka (alaabta, qalabka iyo kuwa kale) waxay leeyihiin tab-ka {{ui:Xidhiidhiyayaal}}: dhibcaha tuubada ama tuubada hawada ay ku biirayaan elementiga, sida wadiga iyo godka ee biyo-qabowga iyo biyo-dhigga. Riix {{ui:Ku dar xidhiidhiye}} oo dejiso:

- **Nooca**: tuubo ama tuubada hawada, iyo **Nidaamkeeda** (biyo qabow, biyo-dhigga sanitary, hawo gelinta…).
- **x**, **y** iyo **z**: meesha uu yaal, axes-ka qoyska. Sida tirooyinka solid, mid kasta waxay noqon kartaa tiro ama qaacido parameters, si xidhiidhiyuhu u dhaqaaqo marka cabbirku beddelo.
- **Jihada baxa**: jihada tuubada ama tuubada hawada uga baxda, dhinac ka mid ah axes-ka qoyska (dhiigga hoosta wadiga waa **Hoos**).
- **Cabbirka (mm)**: cabbirka magaca tuubada (DN) ama dhexroorka tuubada hawada ee wareega ah.
- **Socod**: **Gal** xidhiidhiyaha la quudiyo (tusaale wadiga), **Bax** kan biyaha wax dhiiga.

Preview-ka wuxuu xidhiidhiye kasta u sawiraa wareeg oo fallaad ku jirta jihada baxa. Albaabbada iyo daaqadaha ma lahan xidhiidhiyayaal.

Qalab biyo-dhigga ah, dooro waa kee hoos **Qalabka biyo-dhigga** (musqulka, lavatory, saxanka jikada, shower, tuubada dharka). Qalabyada bilowga ah horay ayay u sheegaan.

Qalab kasta oo qoysaska laga dhigo wuxuu helaa xidhiidhiyayaashiisa sida portal-ka IFC, waxaana dib loo sameeyaa marka cabbirka uu beddelo ama qoyska la kaydiyo. Barnaamijyada akhrinaya nidaamyada IFC waxay arkaan meesha tuubada ama tuubada hawada ay ku haboon tahay.

## Preview iyo gacmahooda

Preview-ka waa qoyska oo loo qoray sida IFC, isla koodka uu moodeelka ku kaydiyo, oo dib loo sawiray. Waxa aad aragto waa waxa barnaamijyada kale helaan. Hoosteeda, **Cabbirka la muujiyo** wuxuu dejiyaa qiyamka parameters-ka preview-ku isticmaalo.

**Gacmaha** waa dhibcaha preview-ka: **Cabbirka** wuxuu muujiyaa gacmo Ballac, Qoto dheer iyo Dherer; **Solid-ka la doortay** wuxuu muujiyaa mid dhinac kasta oo solid-ka la doortay. Jiid gacan:

- dusha ay parameter dejiso, cabbirka la muujiyo wuu beddelmaa (qaacidooyinka qoyska way ilaaliyaan);
- dusha ay tiro la qoray dejiso, tirada ayaa beddelmaysa.

## Kaydinta

{{ui:Kaydi qoyska}} wuxuu hubiyaa qoyska, kadibna wuu dib u sawiraa cabbir kasta oo qoyska ah wuuna dib u sameeyaa elementi kasta, hal tallaabo oo aad ka noqon karto. Haddii cabbir aan lagu sawiri karin isbeddelkaas (tusaale solid-ka uu ballac eber ahaan ku yaali doono cabbirkaas), wax lama kaydiyo, tafatiraha wuxuu sheegaa cabbirka.

Haddii qof kale uu kaydiyey qoyskii isla markaa tafatirkaaga furnaa (Live TeamWork ama daaqad kale), {{ui:Kaydi qoyska}} wuu diidaa oo wuu sheegaa, halkii uu ku beddeli lahaa isbeddelkiisa kan aad. Xir tafatiraha, mar kale fur qoyska si aad isbeddelkooda u aragto, oo mar kale samee kaaga.

:::note
Geometry-ga waxa loo kaydiyaa sida solids-ka IFC: extrusions, revolves, diskiyada sweep-ka, iyo natiijooyinka Boolean. Waxba laguma beddelo liis xagal saddex-geesood ah, sidaas darteed faylashu way yaraadaan, barnaamijyada kale waxay akhrin karaan qaababka sida qaabab. Profiles-ka leh arc waxay kaydiyaan arc-yada IFC4 ku jira; IFC2X3 ma lahan arc-yo profile-ka ku jira, halkaasna arc-yada waxaa loo kaydiyaa qaybo toos ah oo gaaban.
:::

See also [Qoysaska iyo cabbirradooda](topic:families).
