---
title: Amafayela avulwa futhi agcinwa yi-BimCraft
summary: Yonke ifomethi evulwa yi-BimCraft, okugcinayo, lapho amafayela alondolozwa khona, nokushintsha phakathi kwamabrawuza nalapho ungaxhunyiwe.
keywords: amafomethi, vula, gcina, thumela, landa, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, layisha, ubumfihlo, usayizi wefayela
from: a7275dbf
---

I-BimCraft ifunda amafayela ekhompyutheni yakho, ethebhini lesiphequluli. **Akukho okulayishwa** ku-CadCraft noma kunoma ubani omunye. Lapho ulondoloza, i-BimCraft inikeza isiphequluli ifayela elisha ukuze lilandwe; ayisoze ibhale phezu kwefayela owalivula.

## Okuvulayo

| Ifomethi | Izandiso | Okuthola |
|---|---|---|
| IFC | `.ifc` | Imodeli ku-3D, izitezi, inani lezinto nezici zento ngayinye. Amagama, amathegi kanye nezinani zezici ezisodwa zingashintshwa. |
| Amafayela ephrojekthi nomndeni | `.rvt` `.rfa` `.rte` `.rft` | Ikhadi lefayela: ukukhishwa, ukwakhiwa, ukusebenzisana ngokwabelana, ulwazi lwephrojekthi, amapharamitha omndeni, amafayela axhunyiwe nesithombe sokubuka. Akukho 3D. |
| DWG | `.dwg` | Umdwebo ku-2D: indawo yemodeli, lonke ishidi, izingqimba, imidwebo exhunyiwe, izithombe nombono wokuphrinta. Indawo yemodeli nayo ku-3D. Amafomethi kusuka ku-AutoCAD 2000 kuya ku-2018 yiwo ahlolwe. |
| DXF | `.dxf` | Okufanayo ne-DWG. |
| STEP | `.step` `.stp` | Ingxenye, isiqephu sezinsiza noma imodeli yomhlinzeki (AP203, AP214, AP242) ku-3D: isolidi ngasinye siba yinto eyodwa (building element proxy) emodelini omncane we-IFC esiteziwini esisodwa, ifundwa njengamatriyangula ngosayizi wayo wangempela, isakhiwo esinazo zonke izingxenye lapho ifayela zibeka khona. Isebenza njenganoma yiliphi i-IFC kusukela lapho: izici, izigaba, ukukala, gcina njenge-IFC. Imibala nomuthi wesakhiwo akufundwa. |
| Amapoyinti ephoyinti | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Isikena ku-3D, eduze kwemodeli noma sodwa: bona [Bonisa i-point cloud eduze kwemodeli](topic:point-clouds). |
| Ibhanoli yephrojekthi | `.ccbundle.zip` | Imodeli nemibono yayo, izakhiwo namaqembu ezici: bona [Vula ibhanoli yephrojekthi](topic:open-project-bundle). |
| Ifolda | noma yiluphi | Umbiko wawo wonke amamodeli, imidwebo namabhanoli aphakathi kwayo. Noma yiliphi i-IFC, imodeli, umdwebo noma ibhanoli embikweni ivulwa ngokuchofoza kanye. |

[Okufundwa yi-BimCraft kusuka kwifomethi ngayinye](topic:file-formats) kuchaza kabanzi.

I-BimCraft ikhetha ukuthi yini ifayela ngokubheka ama-byte okuqala walo kanye negama lalo, ngakho ifayela lephrojekthi elinesandiso esingavamile livula njengekhadi lefayela.

### Akuvulwa

- `.ifczip` ne `.ifcxml`: I-BimCraft ithi ".ifczip akusasekelwa okwamanje. Gcina noma uthumele imodeli njengefayela elilula le-.ifc." Khipha i-`.ifczip` (iqukethe `.ifc` elula) noma uthumele kabusha njenge-IFC elula.
- Imidwebo ye-DGN ibhalwe embikweni wefolda kodwa ayivuleki.
- I-PDF, izithombe namafayela ehhovisi akuvuleki ngokwawo. Izithombe zisetshenziswa njengezithombe ngaphakathi kwe-DWG, futhi {{ui:Ukwakhiwa}} › {{ui:Kusuka emdwebeni…}} iguqula amakhasi e-PDF noma i-scan ibe izindonga: bona [Izindonga kusuka kusethi yamaplani](topic:walls-from-plans).

## Okulondolozayo

| Uchofoza | Uthola | Kuphi |
|---|---|---|
| {{ui:Gcina njenge-IFC}} | Ifayela elisha le-IFC elinezinguquko zakho, eligcinwe njenge-"*original name* (edited).ifc" | Ifolda yokulanda yesiphequluli sakho |
| {{ui:Landa i-CSV}} ohlwini lwezinsiza | I-CSV yezinto esizindeni, egcinwe njenge-"*drawing name* equipment.csv" | Ifolda yokulanda yesiphequluli sakho |

Ezinye izinto zilondolozwa lapho zenziwa, ngamunye esihlokweni sawo: {{ui:USD}} ([Thumela imodeli njenge-USD](topic:usd)), {{ui:Collada}} (.dae kanye ne-.kmz ye-Google Earth: [Thumela imodeli njenge-Collada noma ye-Google Earth](topic:collada)), i-.glb {{ui:Ukuze kurendrelwe}}, izithombe ezirenderiwe, amashidi namaplani njenge-PDF, izinhlelo nezinhlu njenge-CSV, izinkinga ze-BCF, isipredishithi se-COBie, amafayela omndeni, nezikena ezibhalisiwe njenge-LAS noma i-E57. I-BimCraft ayilondolozi i-DWG, i-DXF noma amafayela ephrojekthi, futhi ayisoze ishintshe amafayela owavulayo.

:::chromium
Chrome ne-Edge zilondoloza okulandwayo efolda elisethwe kuzilungiselelo zazo, ngokuvamile i-Downloads. Ukuze ubuzwe lapho kulondolozwa ngayinye, vula "Ask where to save each file before downloading" ezilungisweni zokulanda zesiphequluli.
:::

:::firefox
I-Firefox ilondoloza ku-Downloads ngaphandle uma uyisethe ukuthi "Always ask you where to save files" ezilungisweni zayo.
:::

:::safari
I-Safari ilondoloza ku-Downloads ngaphandle uma ukhetha enye ifolda ngaphansi kwe-**Safari > Settings > General > File download location**.
:::

## Ukulondoloza okwesibili

Ukulondoloza ngakunye kulanda imodeli yonke **nazo zonke izinguquko ukusukela lapho uyivula**, hhayi izinguquko ezenziwe ngemva kokulondolozwa kwangaphambilini kuphela. Uhlu lwe-{{ui:Izinguquko}} luqala lube lungenalutho ngemva kokulondoloza ngakunye, ngakho awukwazi ukuhlehlisa ngaphambi kokulondolozwa. Ukuqala kabusha kusukela kumsuka, vula kabusha leyo fayela yokuqala.

## Amafayela amakhulu nenkumbulo

- **IFC** ifundwa iphela enkumbulweni yethebhu, futhi ijiyomethri ye-3D ithatha inkumbulo eyengeziwe. Imodeli yamamegabhayithi ambalwa ingaba kakhulu kulaptop. Ngaphezu kwamatriyangula ayizigidi ezingu-1.5, imiphetho iyavalwa ukuze kongiwe inkumbulo (imiphetho ivaliwe kumamodeli amakhulu kakhulu).
- **Amafayela ephrojekthi** awafundwa ngokuphelele. I-BimCraft ifunda kuphela izingxenye ezincane ezidingekayo, cishe ama-KB angu-40 kuya ku-100 nakuba ifayela likhulu kangakanani, ngakho imodeli eyinhloko engu-500 MB esendaweni yenethiwekhi ivula ngokushesha.
- **DWG ne-DXF** zifundwa ngokuphelele. Umdwebo omkhulu kakhulu ubonisa: "Lo mdwebo mkhulu kakhulu; kukhonjiswa ingxenye yawo kuphela."
- **Amafolda** kuze kube ngamafayela angu-20,000 avulwa. Kufundwa kuphela amakhilobhayithi ambalwa ekhadi ngalinye lemodeli adingayo.

Bona [Izisekeli, amadivayisi nenkumbulo](topic:platforms) ukuze uthole okwengeziwe.

## Ku-inthanethi nangaphandle kwe-inthanethi

Ukuvula amafayela akudingi i-inthanethi ngaso sonke isikhathi. Umfundi owodwa ulayisha kusuka esayithini ngokuqala lapho ukudinga: injini ye-IFC, ngokuqala lapho uvula imodeli ye-IFC koqala ("Iqalisa injini ye-IFC…"). Abafundi be-DWG ne-DXF yingxenye yohlelo.

:::offline
Awuxhunyiwe. Uma inkinobho yebha yohlelo ithi {{ui:Ilungele ukusetshenziswa ngaphandle kwe-inthanethi}}, yonke ifomethi ivuleka njengejwayelekile. Uma kungenjalo, imodeli ye-IFC ayikwazi ukuvuleka ngaphandle uma kade ivulwe kuleyo thebhu: xhuma kaqala. Bona [Ku-inthanethi nangaphandle kwe-inthanethi](topic:online-offline).
:::

Ukuze usebenzise i-BimCraft ngaphandle kokuxhumeka, chofoza {{ui:Londoloza ngaphandle kwe-inthanethi}} ebhareni lohlelo ngenkathi uxhumekile bese ulinda {{ui:Ilungele ukusetshenziswa ngaphandle kwe-inthanethi}}. Ikhophi elilondoloziwe lingu-cishe 33 MB; lifaka injini ye-IFC, ngakho namamodeli e-IFC avuleka ngaphandle. [Ukusebenza ngaphandle kwe-inthanethi](common:offline) kuchaza amakhophi alondoloziwe ngokujwayelekile.

## Ukulondoloza ku-cloud

Ukulondoloza ku-cloud akukatholakali okwamanje. Londoloza amakhophi wakho ahleliwe ekhompyutheni yakho noma kuseva yefayela yehhovisi lakho, njengoba ungenza nakunoma yifayela elinye. Bona [Amafayela akho](common:your-files).
