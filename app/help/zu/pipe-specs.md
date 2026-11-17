---
title: Izinkombandlela zepayipi, amavalvu, amadampha kanye nemindeni yabakhiqizi
summary: Setha izinkombandlela zakho zepayipi (amathebula osayizi anempahla, ukuhlangana kanye nokuqina), ogcinwa kufayela lemodeli; faka amavalvu, isihlungi kanye namadampha emigqeni; bese ulethe imodeli yevalvu noma yesisetshenziswa somkhiqizi njengomndeni onamaphothi okuxhuma.
keywords: inkombandlela yepayipi, izinkombandlela zepayipi, inkombandlela yokwakha, ipayipi elenziwe ngokwakho, ithebula losayizi, ithubhu, ithubhu yokuhlanzeka, insimbi engagqwali, ishejuli, ububanzi bangaphandle, ukhulu wodonga, ububanzi bangaphakathi, ukuqina, izinga lokucindezela, csv, json, ngenisa, hambisa, ishidi, umgaqo, bpe, din, en 10357, en 10255, ivalvu, amavalvu, ivalvu yebhathafula, ivalvu yokulinganisa, ivalvu yokulawula, isihlungi, idampha, idampha levolumu, idampha lomlilo, oem, umkhiqizi, umenzi, umndeni, imindeni, amaphothi, ukuxhuma, step, obj, gltf, ifc, iradiyetha, ikhonvekhtha, ipaneli yokushisa, umphathi womoya, isikhishi, igridi
from: bc2f7c4e
---

## Okuzokwenza

Dweba ipayipi ngenkombandlela yakho ngokwakho esikhundleni samathebula asekhona ensimbi, ethusi nepulasitiki, faka amavalvu namadampha emigqeni, bese ufaka imodeli yomkhiqizi enamaphothi lapho amapayipi axhuma khona.

:::note
Isisekelo sokudweba nokuhlanganisa. Inkombandlela yepayipi igcina izinombolo ozithayipha noma oziletha: hlola yonke ithebula ngendinganiso yephrojekthi yakho. Amavalvu, izihlungi namadampha asemathulini ayizimo ezibonakalayo ezilinganiswa ngomugqa, hhayi ubude bomkhiqizi noma bendinganiso yevalvu.
:::

## Setha inkombandlela yepayipi

1. Vula {{ui:Dweba}}, vula {{ui:Ukwakhiwa}} bese ukhetha {{ui:Izinkombandlela zepayipi}}. Iqhosha elifanayo likhona ebhareni lethuluzi lePayipi.
2. Khetha {{ui:Okusha}}, noma qala ngefayela, ukunamathisela noma inkombandlela yesampula (ngezansi).
3. Thayipha igama layo, umgaqo noma isethenjwa elilandelwayo, impahla kanye nohlobo lwesiphetho noma lokuxhuma.
4. Thayipha umugqa owodwa ngosayizi ngamunye: igama losayizi, ububanzi bangaphandle kanye nodonga, ngamamillimitha. Thayipha ububanzi bangaphakathi esikhundleni sodonga uma yilokho onakho: enye iyagcwaliswa. I-DN, izinga lokucindezela kanye nesisindo kuyinketho.
5. Okuzikhethela: ukuqina ngamamillimitha (ukubalwa kokwehla kwengcindezi kuyasisebenzisa), ubukhulu bokufaka insulation okuqala ngabo imigqa emisha, umugqa we-elbow njengesilinganiso sobubanzi bangaphandle, uma inkombandlela inama-tee nama-reducer, kanye nombala wayo wokuqala ku-3D.
6. Thikha izinsizakalo okufanele imigqa emisha iqale kule nkombandlela, njengamanzi apholile.
7. Khetha {{ui:Gcina kumodeli}}.

Inkombandlela, noma osayizi bayo, akukwazi ukususwa ngenkathi kukhona umugqa odwetshwe kuyo. Ukushintsha izinombolo zosayizi kudweba kabusha imigqa yalowo sayizi.

## Sebenzisa kabusha inkombandlela kwenye imodeli

- {{ui:Hambisa njenge-.json}} igcina inkombandlela ekhethiwe njengefayela elincane; {{ui:Hambisa konke}} igcina zonke izinkombandlela zemodeli. {{ui:Ngenisa ifayela}} ziyafunda futhi.
- {{ui:Hambisa njenge-.csv}} igcina ithebula losayizi lespredishithi. {{ui:Ngenisa ifayela}} ifunda futhi i-`.csv`.
- {{ui:Namathisela imigqa}} ithatha ithebula elikopishwe kusipredishithi. Umugqa wokuqala uqamba amakholomu: `Size`, `OD` kanye `Wall` (noma `ID`), kanye ngokuzikhethela `DN`, `Pressure`, `Weight`. Umugqa owodwa ngosayizi ngamunye. Izinombolo ziyamamillimitha ngaphandle uma ukhetha amayintshi noma iseli libhala iyunithi yalo (`0.065 in`).

## Izinkombandlela zesampula

{{ui:Engeza inkombandlela yesampula}} yengeza enye yalezi emodelini yakho njengekhophi oyingalungisa:

| Isampula | Osayizi |
|---|---|
| ASME BPE tube | 1/4" kuya ku-6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 kuya ku-DN200 |
| EN 10255 steel tube, medium series | DN15 kuya ku-DN150 |
| EN 10255 steel tube, heavy series | DN15 kuya ku-DN125 |

Lawa mathebula ngobubanzi bangaphandle nodonga okunikezwa amakhasi amabili noma ngaphezulu wabahlinzeki abashicilelwe ngalesi sitandade futhi avumelana ngawo. Awathathwanga kwizitandade ngokwazo. Osayizi abanikezwa ikhasi elilodwa baphuthelwe. Isampula ngasinye likhombisa amakhasi womthombo wayo futhi limakwe ngokuthi "check against your project standard". Ayinikezwa ukuqina, izinga lokucindezela noma isisindo.

## Dweba umugqa kwinkombandlela

1. Khetha {{ui:Ipayipi}}. Umugqa wokuqala ngesistimu oyikhethile kwinkombandlela uyaqala kuyo. Kwayo yonke enye imigqa, khetha inkombandlela ohlwini lwezimpahla: izinkombandlela zibhalwa ngemuva kwezimpahla zakhiwe ngaphakathi njenge "Spec: igama".
2. Uhlu losayizi manje lubamba losayizi balowo mugqa kuphela. Khetha elilodwa bese udweba umugqa.

Ukuze ufake umugqa kwinkombandlela kamuva, wukhethe bese ushintsha **Impahla yokwakha** ku-Properties (Izici). Usayizi wawo ube wusayizi weNkombandlela oseduze kakhulu ngobubanzi bangaphandle.

Ku-faela ye-IFC ipayipi lithwala igama lenkombandlela, umgaqo, impahla, ukuhlangana kanye nezilinganiso (`CadCraft_PipeSpec` kanye `Pset_PipeSegmentTypeCommon`, kwipayipi nakuhlobo lwalo).

Ukubalwa kosayizi kanye nokwehla kwengcindezi kufunda ububanzi bangaphakathi benkombandlela. Uma inkombandlela inokuqina, ukuhwaqeka komugqa kubalwa ngalo (Darcy-Weisbach); uma kungenjalo, kusetshenziswa okuzenzakalelayo kokubalwa.

## Amavalvu, isihlungi namadampha

1. Khetha {{ui:Ivalvu}} bese ukhetha uhlobo ebhareni: isango (gate), ibhola (ball), ibhathafula (butterfly), iglobe (globe), ukuhlola (check), ukulinganisa (balancing) noma ukulawula (control), noma isihlungi, kumapayipi; idampha levolumu noma idampha lomlilo, kumapayipi omoya.
2. Chofoza emgqeni lapho okuya khona. Umugqa unqunywa ezungeze lona, bese zombili izinhlangothi ziyahlala zixhumekile. Lithatha usayizi womugqa futhi lihamba nomugqa.

Ezicini zomugqa zibala ngayinye ngayinye nge-{{ui:Susa}}; umugqa uyavala futhi.

Ukubalwa kokwehla kwengcindezi kubala ukulahleka kokuxhuma kumavalvu we-gate, ball, globe nowe-check kuphela. Ezinye izinhlobo, amadampha kanye nemindeni yabakhiqizi azengezi ukulahleka lapho: yenza ukuhlola kwakho ngokwakho. Zibalwa ku-schedule ethi **Izixhumi namavalvu** nakumbala wokuthatha, futhi zibhalwa ku-IFC njengamavalvu, isihlungi (i-strainer) namadampha anamaphothi amabili axhunyiwe.

## Imodeli yomkhiqizi njengomndeni

1. Vula {{ui:Ukwakhiwa}} bese ukhetha {{ui:Imindeni}}, bese {{ui:Ngenisa imodeli}}. Amafayela e-IFC, STEP, OBJ, STL, glTF kanye nezinto ze-Library ayafundwa. Ku-OBJ kanye ne-STL, setha iyunithi yefayela kanye ne-axis ephezulu kuqala.
2. Ku-dayalogi yamaphothi, thayipha igama, umenzi kanye nenombolo yemodeli.
3. Khetha ukuthi uyofakwa **Emugqeni** (ivalvu, isihlungi noma idampha) noma ube **Izinsiza**, kanye nokuthi ibhalwa njani.
4. Mnike amaphothi ayo. Ngamunye unegama, ipayipi noma ipayipi lomoya, insiza, usayizi ngamamillimitha (ububanzi bangaphandle bepayipi), usayizi wenkombandlela yakho njengoba uwubiza, uhlobo lokuphela, indawo yawo kanye nendlela ebheka ngayo. {{ui:Esiqondweni}} ubeka iphoyinti endaweni ephakathi yohlangothi lwebhokisi lemodeli. Ukubukeka okuncane okuphezulu kubonisa amaphothi.
5. Khetha {{ui:Londoloza umndeni emodelini}}.

Umndeni ofakwa emugqeni udinga amaphothi amabili kuphela abheke kwezinye ngaphandle, emgqeni owodwa. Khetha wona ohlwini lwethuluzi leValvu bese uchofoza emgqeni: ufakwa ubude bawo bona bese amapayipi axhuma kumaphothi awo.

Umndeni awukaze welulwe. Uma amaphothi awo engafani nosayizi womugqa, uyatshelwa lapho ufakwa, futhi {{ui:Hlola ukuxhumana}} uyawudweba.

Umndeni wezinsiza ufakwa nge-{{ui:Izinsiza}}, uhlobo **Umndeni womkhiqizi**. Amapayipi namapayipi omoya ayaxhuma kumaphothi awo.

{{ui:Landela njengento yeLibrary}} igcina umndeni namaphothi awo njengefayela ongalithumela ku-Library.

## Iradiyetha namakhonvekhtha

{{ui:Izinsiza}} futhi inezinhlobo **Iradiyetha** kanye **Ikhonvekhtha / ipaneli yokushisa**: izimbiza ezijwayelekile ezinokuxhuma kokugeleza nokubuya kwamanzi okushisa. Bona [Izinsiza ze-MEP ezinamaphothi](topic:mep-equipment).
