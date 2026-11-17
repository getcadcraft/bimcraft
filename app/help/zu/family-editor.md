---
title: Hlela umndeni
summary: Shintsha amapharamitha omndeni, amafomula nezinhlanganyelo, bonisa izingxenye ngephrameter ye-Yes / No, sika futhi uhlanganise izinto eziqinile, unike izixhumi zamapayipi namadakhithi, bese ubona umphumela udwetshwe kusuka ku-IFC ozoyigcina.
keywords: umhleli womndeni, hlela umndeni, iphrameter, amapharamitha, ifomula, amafomula, ukubonakala, yes no, into eqinile, izinto eziqinile, ibhokisi, ukuphuma, ukuphuma, ukuzungeza, iphrofayili, i-arc, boolean, ama-boolean, sika, hlanganisa, umphathi, izibambo, indawo yomsebenzi, isikethi, umndeni omusha, isixhumi, izixhumi, uxhumano, ipayipi, idakhithi, ukukhipha, amanzi okuhlinzeka
from: 1ab31c10
---

## Vula umhleli

Vula umndeni (iqembu le-**Families** lesilawuli sephrojekthi, noma {{ui:Build}} › {{ui:Families…}}) bese uchofoza {{ui:Edit the family}}. Ukuqala ngaphandle kwalutho, chofoza {{ui:New family}}: uninike igama, uchaze ukuthi yini (umnyango, iwindi, impahla, into ethile noma okunye) futhi, ngomnyango noma iwindi, ukuthi ipulani lalo nesandla salo kusuka kuphi. Umhleli uvula umndeni onamapharamitha ambalwa nento eyodwa eqinile.

Ukuhlela umndeni wokuqala kugcina izinguquko zakho kule modeli kuphela. Ezinye izimodeli zigcina okuqala njengoba kunjalo.

Akukho okushintsha kumodeli kuze kuchofozwe {{ui:Save the family}}. Umhleli unokuhlehlisa nokuphinda wenze wawo (izinkinobho zomcibisholo eduze negama, noma {{key:Mod+Z}} no-{{key:Mod+Y}}); ukugcina kuyisinyathelo esisodwa kokuhlehlisa kwemodeli.

## Amapharamitha

Ithebhu ethi {{ui:Parameters}} idwebela amapharamitha omndeni: igama, uhlobo kanye nokuzenzakalelayo. Izinhlobo: **Length** (mamilimitha), **Angle** (amadigri), **Number**, **Whole number**, **Yes / No**, **Pen** (1–16), kanye nezintathu ezigcina amagama esikhundleni sezinombolo: **Text**, **Material** (enye yezinto zephrojekthi) kanye **Fill** (ukugcwala kwepulani). Amagama awasetshenziswa kumafomula; ayakhela into eqinile (i-**Material** yayo), agcwalise ingxenye yesimbonakalo, noma aphrinte njenge `{Name}` embhalweni wesimbonakalo. Ibhokisi elithi **Per element** lenza iphrameter into ngayinye ezibekayo ngokwayo esikhundleni sosayizi wayo.

- **Ifomula** yenza iphrameter ilandele ezinye, njengokuthi `Width / 30` noma `if(Width > 1200, 2, 1)`. Ubude kumafomula buyamamilimitha, noma bhala iyunithi: `3'`, `6in`, `50cm`.
- Ukubiza kabusha iphrameter kuyibiza kabusha kuwo wonke amafomula namasimu asetshenziswa kuwo. Iphrameter esasetshenziswa ayikwazi ukususwa.
- **Material** yento eqinile ithatha umbala wento yephrojekthi (noma iphrameter ye-Material), **Shown at** iyifihla emazingeni ancane wemininingwane, futhi **Repeat** yenza amakhophi: inani (inombolo noma iphrameter yenombolo ephelele, 1 kuya ku-200) nesinyathelo phakathi kwawo ku-x, y no-z. Into eqinile ephindwayo iba umugqa wamapuleti, amabha noma izimbobo; esikelweni, amakhophi asikwa ndawonye.
- Umnyango noma iwindi lomndeni nawo lithola amagama amabili kusuka odongeni lwalo: `WallThickness` no-`Face` (1 noma −1, uhlangothi umnyango ogingqa kulo).

## Izinto eziqinile

Ithebhu ethi {{ui:Solids}} idwebela izinto eziqinile. Engeza ibhokisi, i-extrusion, i-revolve noma i-sweep:

| Into eqinile | Okusethayo |
|---|---|
| Ibhokisi | amakona amabili: x0 kuya ku-x1, y0 kuya ku-y1, z0 kuya ku-z1 |
| Extrusion | iphrofayili endizeni yokusebenza (ipulani, ingaphambili noma eceleni), lapho indiza ikhona, nokujula |
| Revolve | iphrofayili, i-axis endizeni, nangle kuya ku-360° |
| Sweep | indlela yamaphoyinti nomsakazo (induku noma irela) |

Inombolo ngayinye ingaba yinombolo ebhalwe noma isiphrofaji samapharamitha. Into ngayinye eqinile inombala kanye ne-**Shown when**: yishiye ingenalutho ukuze ibonakale njalo, noma uqamba iphrameter ye-Yes / No (noma ubhale ukuqhathanisa njengo `Shelves >= 3`) ukuze ibonakale kuphela lapho. Lokho kuyiphrameter yokubonakala.

### Dweba iphrofayili

Iphrofayili ye-extrusion noma ye-revolve idwetshwa endizeni yayo yokusebenza ngaphansi kokubuka kwangaphambili:

- Chofoza ephepheni ukuze wengeze iphoyinti ngemva kwelikhethiwe.
- Hudula iphoyinti ukuze liyishintshe. Amaphoyinti ahlanganyela egridini; bamba {{key:Shift}} ukuze uwamise ngokukhululekile.
- Chofoza isikwele esincane esingxenyeni yomugqa ukuze wengeze iphoyinti lapho. {{key:Shift}}+chofoza kuyo ukuze lowo mugqa wenze i-arc (chofoza futhi ukuze uye ngakolunye uhlangothi, bese ulinganisa).
- Chofoza kabili iphoyinti ukuze uliyise.

Amaphoyinti angenalutho asethwa ngamapharamitha: shintsha kuthebhu, hhayi ngokuhudula.

## Ama-Boolean

Ithebhu ethi {{ui:Booleans}} isika into yesibili ngaphandle kwayokuqala, noma iyihlanganise. Umphumela we-Boolean ungasikwa noma uhlanganiswe futhi. Into eqinile esetshenziswa ku-Boolean idwetshwa njengengxenye yakhona kuphela.

Uma into yesibili ifihlwe yiphrameter yayo ye-Yes / No, eyokuqala igcinwa njengoba injalo; uma eyokuqala ifihliwe, umphumela uyafihlwa.

## Isimbonakalo sepulani

Ithebhu ethi {{ui:Plan symbol}} idweba okubonisa ipulani ngalo mndeni esikhundleni sesikwa sezinto eziqinile: imigqa, amakhonco, izindilinga, ama-arc, izinxantathu nombhalo, ezindizeni zomndeni ngokwawo. Ingxenye ngayinye inophenkili (**pen**) (1–16, ukuvezwa noma iphrameter ye-Pen), **fill** (akukho, okuqinile, okuchazwe, okuqandekile, ukhonkolo, insulation, umhlabathi, noma iphrameter ye-Fill), **shown by** ukuvezwa, **cut range** ngamamilimitha phezu kwesisekelo sayo (ingxenye edwetshwe ngobukhulu obugcwele uma ukusika kwepulani kusenkabeni yayo, incane ngaphansi kwayo, idashi ngaphezulu kwayo; ikhabhinethi ephezu kokusika ibonakala idashi), izinga lemininingwane nokuphindwa. Umbhalo ungabiza amapharamitha njenge `{Name}`. **The plan shows: The cut of the solids** igcina ukusika kwezinto eziqinile kupulani ngenkathi isimbonakalo sisalokhu emndenini. Ezinye izinhlelo zifunda isimbonakalo njengendawo womndeni (imigqa nezimo; umbhalo usala ku-BimCraft).

## Imindeni engaphakathi

Ithebhu ethi {{ui:Families inside}} ifaka omunye umndeni kulo: umlenze wetafula, isibambo somnyango. Khetha umndeni, bese ubhala lapho uwuya khona (x, y, z), ukuthi uphenduleke kangakanani (ama-quarter turn kuphela: 0, 90, 180, 270), ukuthi ubonakala nini, nezinkomba olizithola, elinye ngomugqa ngamunye njengokuthi `Height = Height - 40`. Ukugcina umndeni ongaphakathi kudwetsha lo mndeni kabusha; umndeni obanjwe ngomunye awukwazi ukususwa; umndeni awukwazi ukubamba wona, nakancane ngomunye, futhi ukuhlanganyela kuyama emazingeni amane.

## Amahotspot

I-hotspot iphoyinti noma imiphetho oyihudulayo ukuze ushintshe iphrameter. Ku-{{ui:Hotspots}} engeza eyodwa, khetha i-axis ehudulwa kuyo kanye nephrameter yenombolo eyishintshayo, bese ubhala indawo yayo ngamafomula afanayo nezinto eziqinile. Ekubukeni kwangaphambili, khetha **Hotspots** ngaphansi kwezibambo ukuze uzihudule. Esinsizeni esimiswe kupulani (khetha ngo-{{ui:Select}}) ama-hotspot x no-y abonakala njengezibambo: hudula elilodwa bese into ithatha usayizi ofaka i-hotspot lapho, ngaphezu kwanoma yiziphi ifomula phakathi kwawo; okukodwa kokuHlehlisa kuyibuyisela. I-hotspot ayikwazi ukushintsha iphrameter elawulwayo, i-Yes / No noma igama.

Kubuka kwe-3D, ama-hotspot afanayo abonakala njengezibambo ento ekhethiwe, nama-hotspot aphezulu nasezansi (i-axis z) nawo ayabonakala lapho, lokho ipulani elingakwazi ukukudweba. Khetha into, hudula isibambo ngendlela ye-axis yaso bese uyeqa: into ithatha usayizi ofaka i-hotspot lapho, njengesinyathelo esisodwa sokuhlehlisa. Izibambo ziyafihlwa uma ibhokisi lesigaba livuliwe, njengoba lisebenzisa izibambo ezifanayo.

## Izixhumi

Imindeni ebekwe phansi (impahla, izinto ezilungiselelwe nezinye) inethebhu ethi {{ui:Connectors}}: amaphoyinti lapho ipayipi noma idakhithi lijoyina into, njengempompi nesifunda sesinki. Chofoza {{ui:Add a connector}} bese usetha:

- **Kind**: ipayipi noma idakhithi, kanye **System** yayo (amanzi abandayo, ukukhipha okungcolile, umoya wokuhlinzeka…).
- **x**, **y** no-**z**: lapho ikhona, ezindizeni zomndeni ngokwawo. Njengezinombolo zesinto eqinile, ngayinye ingaba yinombolo noma ifomula yamapharamitha, ukuze isixhumi sihambe nosayizi.
- **Way out**: indlela ipayipi noma idakhithi eliphuma ngayo, eduze kwe-axis yomndeni (ukukhipha ngaphansi kwesinki kuba **Down**).
- **Size (mm)**: usayizi wephayipi onyuliwe (DN) noma ububanzi bedakhithi elijikelezile.
- **Flow**: **In** kwesixhumi esinikezwayo (impompi), **Out** kwesikhipha (esikhipha).

Ukubuka kwangaphambili kudweba isixhumi ngasinye njengesongo nomcibisholo oqonda ngaphandle. Iminyango namawindi akunalo uxhumano.

Ngomsebenzi wamapayipi, khetha ukuthi yiyiphi ngaphansi kwe-**Plumbing fixture** (indlu yangasese, i-lavatory, isinki yekhishi, ishawa, ithangi lokugezela). Impahla ezenziwe ngaphambili zisho lokho ngokwazo.

Yonke into emiswe emndenini ithola izixhumi zayo njengamachweba kufayela le-IFC, futhi ziyadwetshwa kabusha uma into ishintsha usayizi noma umndeni ugcinwa. Izinhlelo ezifunda amasistimu e-IFC zibona ukuthi ipayipi nedakhithi ngalunye kufanele liyephi.

## Ukubuka kwangaphambili nezibambo zakho

Ukubuka kwangaphambili umndeni ophrintwe njenge-IFC, ngekhodi efanayo eyawugcina emodelini, bese udwetshwa kabusha. Okubonayo yikho ezinye izinhlelo zizokuthola. Ngaphansi kwakho, **Size shown** isetha amanani amapharamitha ukubuka kwangaphambili kuwasebenzisa.

**Izibambo** ziyizinhlamba ekubukeni kwangaphambili: **The size** ikhombisa izibambo zeWidth, Depth ne-Height; **The solid picked** ikhombisa enye ngayinye ngaphezu kohlangothi lwento oyikhethile. Hudula isibambo:

- ohlangothini oluhlelwe yiphrameter, usayizi okhonjisiwe uyashintsha (amafomula omndeni agcinwa);
- ohlangothini oluhlelwe yinombolo ebhaliwe, inombolo iyashintsha.

## Ukugcina

{{ui:Save the family}} ihlola umndeni, bese idweba wonke usayizi wawo futhi yenze wonke umuntu wawo kabusha, njengesinyathelo esisodwa osingahlehlisa. Uma usayizi ungadwetshwa ngoshintsho (isibonelo into eqinile ingaba nobubanzi obungenalutho kuleyo sayizi), akukho okugciniwe futhi umhleli usho ukuthi yiliphi usayizi.

Uma omunye umuntu egcine lo mndeni ngesikhathi umhleli wakho uvulekile (esikhathini se-Live TeamWork, noma kwenye iwindi), {{ui:Save the family}} iyenqaba iphinde ichaze lokho kunokuba ibhale ushintsho lwakho esikhundleni salokho. Vala umhleli, vula umndeni futhi ubone ushintsho lwakhe, bese wenza lwakho kabusha.

:::note
Ijiyomethri igcinwa njengezinto eziqinile zangempela ze-IFC: ama-extrusion, ama-revolve, amadiski ahudulwayo, nemiphumela ye-Boolean. Akukho okuguqulwa kube uhlu lwamatriyangela, ngakho amafayela ayancipha futhi ezinye izinhlelo zifunda izimo njengezimo. Iphrofayili enama-arc igcinwa namakhonco ku-IFC4; i-IFC2X3 ayinawo amakhonco ephrofayili, ngakho lapho ama-arc agcinwa njengezingcezu ezimfushane ezigqamile.
:::

Bheka futhi [Imindeni nosayizi bayo](topic:families).
