---
title: Xhuma imodeli kunoma yiluphi uhlelo lwemephu
summary: Tshela i-BimCraft ukuthi amakhoordinethi emodeli akuphi uhlelo lwemephu, kusuka ohlwini lwe-EPSG oluphelele, nanoma yiziphi izindawo ze-UTM, noma uhlelo oluchazwe nguwe, bese usebenzisa lowo kwi-Indawo, izendlalelo zemephu namafu amaphoyinti.
keywords: iphrojekthi, uhlelo lwamakhoordinethi, crs, epsg, utm, izone ye-utm, uhlelo lwezifiso, proj4, umugqa we-proj, prj, wkt, georeference, ukuguqulwa kwemephu, ifc projected crs, amaprojekthi ami, ububanzi, ubude, easting, northing, lambert, gauss-kruger, state plane, national grid
from: 6894c1f2
---

Amanye amapulani adwetshwe ohlelweni lwemephu olungafakiwe ohlwini olufushane: izone ye-UTM, igridi kazwelonke, noma iphrojekthi ethile ebhalwe njengencazelo yombhalo. {{ui:Linganisa}} › {{ui:Uhlelo lwezixhumanisi…}} ikuvumela ukuthi usho ukuthi imodeli isebenzisa uhlelo oluphi.

## Khetha uhlelo lwemodeli

1. Vula imodeli, khetha {{ui:Linganisa}}, bese {{ui:Uhlelo lwezixhumanisi…}}.
2. Thayipha ebhokisini lokusesha. Noma yiziphi zalezi ziyasebenza:
   - inombolo ye-EPSG: `32633` noma `EPSG:2277`;
   - izone ye-UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - amagama asegameni: `lambert 93`, `mga zone 56`, `texas central`;
   - incazelo yephrojekthi: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, ngaphambili kwayo kungabekwa igama (`My grid = +proj=…`);
   - umbhalo wefayela le-`.prj`, noma sebenzisa {{ui:Layisha ifayela .prj…}}.
3. Khetha umphumela, bese {{ui:Sebenzisa lolu hlelo}}.

Ukukhetha kugcinwa kwimodeli (isethi yezici ebizwa `CadCraft_CRS` kwiphrojekthi), ukuze kuvuleke kanye nemodeli. Gcina imodeli ukuze uyigcine. {{ui:Yisusa emodelini}} ibuyela kokushiwo yifayela.

Uma incazelo yakho inikeza amakhoordinethi afanayo nohlelo olulodwa lwe-EPSG oluhlwini, i-BimCraft iyasho futhi isebenzise leyo khodi; uma uhlelo oluningi oluhlwini lunezibalo ezifanayo, nazo ziyabizwa.

## Amaprojekthi ami

Incazelo oyiphastayo noma i-`.prj` oyilayishayo ingagcinwa nge-{{ui:Gcina kuMaprojekta ami}}. Uhlu lutholakala kule divayisi (kulesi sibonisi) futhi lunikezwa ngesikhathi esilandelayo ovula isikhethi.

## Okusebenzisa kwakho

- {{ui:Linganisa}} › {{ui:Indawo}} iguqula iphoyinti elikhethiwe libe ububanzi nobude ngohlelo lwemodeli. Ngaphambili yayima ngesaziso uma ifayela libiza uhlelo lwemephu ngaphandle kwekhodi ye-EPSG; manje, uma ukukhetha kulondolozwe, inikeza impendulo.
- Izendlalelo zemephu ngaphansi kwemodeli zisebenzisa uhlelo olufanayo. Ifu lamaphoyinti noma ifayela lendawo ohlelweni olwehlukile lithola olwemodeli (bheka ngezansi).
- {{ui:Izilungiselelo}} › {{ui:BimCraft}} › {{ui:Indawo}} › {{ui:Khetha olunye uhlelo…}} isetha okubikwa yi-{{ui:Indawo}} futhi: ububanzi nobude ohlelweni lwejografi olulodwa oluhlwini, noma i-easting ne-northing kunoma yiluphi uhlelo olukhishwe, ngaphezu kohlelo lwemodeli.

## Imodeli engakabekwa emephwini

Uma ifayela lingenayo ukuguqulwa kwemephu, ukukhetha uhlelo kuvula {{ui:Beka le modeli kwimephu}}. Ungayivula nakusuka {{ui:Linganisa}} › {{ui:Umsuka wemephu…}}.

1. Nika umsuka wemodeli njenge-easting ne-northing ohlelweni, noma uthayipha ububanzi nobude bese ukhetha {{ui:Guqula ibe ama-easting nama-northing}}.
2. Nika ukujikeka ku-grid north (amadigri, ngokuphambene nokuzungeza kwamawashi; 0 kusho ukuthi i-Y axis yemodeli ibheka ku-grid north) nokuphakama komsuka.
3. Isikali siqala ngomehluko weyunithi phakathi kwemodeli nemephu (0.001 kwemodeli yamamilimitha ku-grid yamamitha). Shintsha kuphela uma kuyisibalo sesisekelo ku-grid esihlanganisiwe.
4. Khetha {{ui:Beka kwimephu}}. Isinyathelo esisodwa se-undo sibhala i-IfcProjectedCRS ne-IfcMapConversion (IFC4). Imodeli ngokwayo ayinyakazi.

Ifayela le-IFC2X3 alinazo zombili izinhlobo. I-BimCraft ibhala izinombolo ezifanayo ngendlela leso sethulo sivumela ngayo: amasethi ezici e-buildingSMART `ePSet_MapConversion` ne-`ePSet_ProjectedCRS` kwiphrojekthi, ububanzi nobude besayithi, nenyakatho yeqiniso. Ingxoxo iyasho lokho. Gcina imodeli ukuze uyigcine.

## Imodeli esevele emephwini

Uma ifayela selizibeka emephwini uma ukhetha uhlelo olunye, i-BimCraft iyabuza:

- {{ui:Shintsha okubikwa yi-Location kuphela}} igcina ukuxhumanisa kwemephu kwefayela futhi isebenzise ukukhetha kwakho ku-{{ui:Indawo}}, izendlalelo zemephu namafu amaphoyinti (izinombolo zemodeli sezifundwa njengezikhona kuhlelo olusha).
- {{ui:Hambisa imodeli kulolu hlelo}} ibhala kabusha ukuxhumanisa: umsuka udlula ku-projection (easting, northing, ukuphakama, ukujikeka nesikali) futhi i-IfcProjectedCRS (igama, i-datum, i-projection, izone, iyunithi) iyabhalwa kabusha, ngakho i-IFC egciniwe ithi uhlelo olusha. Indawo emhlabeni ihlala ifanayo: umsuka ugcina ububanzi nobude bawo. Izinto ngaphakathi kwemodeli azishintshi; kushintsha ukuxhumanisa kuphela.

Ingxoxo ibonisa umsuka omdala nomusha ngaphambi kokuthi ukhethe. Ukuhamba khona nokubuyela kubuyisela umsuka ngaphakathi kwemilimitha eyodwa.

## Amafu amaphoyinti nomhlaba ohlelweni olwehlukile

Ifu noma ifayela lokuhlola linohlelo lwalo (LAS, LAZ, E57, GeoTIFF) noma akunalo. Uma lihlukile kohlelo lwemodeli, i-BimCraft inikeza {{ui:Phrojekthela kabusha kuhlelo lwemodeli}}. Amaphoyinti ayahanjiswa ngamaqoqo (kwi-worker uma kukhulu, ukuze ikhasi lisasebenziseka), ifayela kukhompyutha yakho alithintwa, nomugqa wesimo uchaza okwenziwe. Vula ifayela futhi ukuze ubuyele kuhlelo lwalo. Kwifu elisevele livuliwe, {{ui:Phrojekthela kabusha kumodeli…}} ebhareni lefu yenza okufanayo.

Uma ifayela lingasho uhlelo, i-BimCraft iyabuza {{ui:Le fayela lisohlelweni oluphi lwamakhoordinethi?}}: khetha ngo-{{ui:Khetha uhlelo…}} futhi impendulo iyakhunjulwa kulelo fayela kule divayisi. {{ui:Gcina uhlelo lwefayela lwalo}} ushiya amaphoyinti njengoba enjalo.

## Lapho okuthile kungaphelele

Izinkinga zidwetshwa kwingxoxo nakuhlu lwe-{{ui:Izinkinga}}, hhayi ngokuthula:

- Indawo engaphandle kwendawo uhlelo olwenzelwe yona: izinombolo zisebenza, kodwa ukuphambuka kuyakhula.
- Ukushintshwa kwe-datum okudinga ifayela legridi (i-NADCON, i-NTv2 nezinye) akutholakali. Amahlelo e-datum ahlukile ahanjiswa ngokushintshwa okungelona igridi okudwetshwe ohlwini lwe-EPSG, futhi umphumela ucishe ufane nokunemba okushiwo, umlayezo unikeza kumamitha.
- Iphoyinti elingenakuqanjwa liyashiywa futhi libalwe; ifayela elidlula umkhawulo wosayizi linqatshelwa nomkhawulo ushiwo.

:::tip
Amakhoordinethi emephu adinga ukuguqulwa kwemephu. Ifayela elingenaso lihlanganiswa emephwini nge-{{ui:Umsuka wemephu…}}.
:::

:::note
Ukuhamba phakathi kwama-datum ngaphandle kwefayela legridi kuphelele kumamitha ambalwa; umphumela we-Indawo ushoo kuhle kangakanani uma ikhathalogi iyazi.
:::
