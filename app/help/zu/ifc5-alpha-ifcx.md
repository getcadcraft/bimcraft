---
title: Vula futhi uthumele amafayela e-IFC5 alpha (IFCX)
summary: Inketho yelabhu ye-ifomethi yefayela le-IFC5 alpha (.ifcx): vula ifayela nezendlalelo zalo, bone okungaxhunyiwe ukuhlolwa ngokufunda, futhi uthumele amamodeli avulekile. Ifomethi isashintsha, ngakho funda kuqala.
keywords: ifc5, ifcx, alpha, buildingsmart, json, izingqimba, isikimu, ilabhu, izilinganiso, qto, thumela, ngenisa
from: cffe1669
---

I-IFC5 alpha (ifayela elinesifaki {{ui:.ifcx}}) iyifomethi i-buildingSMART isaklama. Ayiphelele: amafayela, nendlela esiwafunda ngayo, angashintsha. Yingakho lokhu kuyinketho yelabhu futhi kudingeka ukufunda kuqala.

## Yivule

1. Khetha {{ui:Settings}}, bese isigaba se-{{ui:IFC5 alpha (IFCX)}} sethebhu ye-BimCraft.
2. Faka itiki ku-{{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

Icima ngokuzenzakalelayo. Lapho icimile, ifayela le-.ifcx ayamukelwa, kanye nomlayezo osho lapha. {{ui:Open IFC5 alpha (.ifcx)…}} nenkinobho ye-{{ui:IFC5 alpha}} yokuthumela ivela uma ivuliwe.

## Vula

- Khetha ifayela le-.ifcx nge-{{ui:Open a file or folder}} (ishintsha imodeli evuliwe, ngemva kombuzo ojwayelekile wokuhlela), noma
- khetha {{ui:Open IFC5 alpha (.ifcx)…}} bese ukhetha amafayela amaningi ndawonye: ifayela, izingqimba zalo, namafayela esikimu alingenisa. Uma imodeli sele ivuliwe, ifayela **lengezwa ecaleni kwayo**; u-x ohlwini lwemodeli uyalisusa futhi, okuyinto ehlehlisayo.

Ifayela le-IFCX libala ama-node (indlela, izingane zawo, lokho alifakwayo, izimpawu zawo). Amafayela amaningi angachaza i-node efanayo: ifayela elilandelayo (ungqimba) lishintsha izimpawu zelangaphambili, nengane ye-null iyasusa ingane. I-BimCraft iyawahlanganisa, bese idweba umphumela njengemodeli encane ye-IFC4: iphrojekthi, indawo, isakhiwo, izitezi nezinto ezinamagama, izigaba, izici, izilinganiso, imibala nemeshi.

Akukho okulandwa kunethiwekhi. Amafayela esikimu alingenisa ifayela (isibonelo `ifc@v5a.ifcx`) asetshenziswa kuphela uma uwakhethe ndawonye nefayela; ngaphandle kwalokho umbiko uyasho lokho futhi izimpawu ziyafundwa ngaphandle kokuhlolwa kohlobo.

### Umbiko

Ngemva kokuvula, umbiko ubala okutholwe ukufunda: idatha engahambisani nesikimu sayo, amafayela esikimu angaphansiwe, nezimpawu ezingenayo incazelo ye-IFC lapha. Izimpawu ezingenamephu zihlala **zigcinwe** emodelini, azilahlwa, futhi zibhalwa kabusha lapho uthumela.

## Okuba yini

| Kwifayela le-IFCX | Ku-BimCraft |
|---|---|
| I-node enohlobo lwe-IFC (iphrojekthi, indawo, isakhiwo, isitezi, udonga …) | I-elementi ye-IFC4 efanayo; uhlobo lokufunda okungakwazi ukulwazi luba yi-building element proxy |
| Igama i-node elinalo ngaphansi komzali wayo | Igama lento |
| Izimpawu ezinohlobo lobukhulu (Length, Area, Volume, Mass …) | Isethi yezilinganiso ye-IFC4 ebizwa ngokuthi `Qto_IFCX` (amasethi ezilinganiso ze-IFC4 ahlala njengamasethi `Qto_*` e-IFC4) |
| Ezinye izimpawu zezici | Isethi yezici ebizwa ngokuthi `Pset_IFCX` |
| Izimpawu zemeshi nokuguqula | Onxantathu bento kanye nendawo yayo; imeshi engabonakali ayidwetshwa |
| Umbala, ukungaqinile, impahla, ukuhlelwa | Isitayela sokuphela, impahla nokuhlelwa kwento |

Amayunithi athathwa njengamamitha, nge-Z iphezulu: i-alpha ithi amayunithi azobhalwa kamuva.

## Thumela

Khetha {{ui:IFC5 alpha}} kumthamo wamathuluzi, funda isaziso, bese ukhetha {{ui:Export .ifcx}}. Ifayela linekhanda lethu (umbhali CadCraft, inguqulo ifcx_alpha) futhi lisho ngokwalo ukuthi yifomethi ye-alpha. Imodeli ngayinye ibhalwa ezixhumanweni zayo zefayela, ngamamitha, namagama, izigaba, amasethi wezici, izilinganiso (njengezimpawu nohlobo lwazo), imibala nonxantathu. Izingqimba nokuthola kubhalwa kuhlanganiswe. Hlola ifayela kuhlelo olulithumela kulo.

## Imingcele

- Ijometri egobile (amajika, izindawo) ayifundwa: onxantathu bemeshi kuphela.
- Iminyango namawindi akhiwe ngaphakathi kwesidonga ahlelwa esitezini; udonga abavela kulo alixhunyiwe.
- Amasethi we-IFC4 `Qto_*` agcinwa njengamaqembu ezimpawu ezingezethu (`cadcraft::qto::…`); isikimu esijwayelekile se-alpha sinamagama ambalwa kuphela ezilinganiso.
- Ifomethi ingashintsha phansi kwethu; ifayela elenziwe namuhla lingangafundeki kusasa.
