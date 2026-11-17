---
title: Geo-tixgelinta projection kasta
summary: U sheeg BimCraft nidaamka khariidadda ee isku xirka moodelka, liiska EPSG oo dhan, aagga UTM kasta, ama projection aad naftaadu qeexdo, oo isticmaal Booska, lakabyada khariidadda iyo daruuraha dhibcaha.
keywords: projection, nidaamka isku xirka, crs, epsg, utm, aagga utm, projection gaar ah, proj4, proj string, prj, wkt, geo-tixgelin, geo-tixgelinta, beddelka khariidadda, ifcprojectedcrs, dhigistayda, latitude, longitude, easting, northing, lambert, gauss-kruger, state plane, gridka qaranka
from: 6894c1f2
---

Qorshooyin qaarkood waxaa lagu sawiraa nidaam khariidad oo aan ku jirin liiska gaaban: aag UTM, gridka qaranka, ama projection qof qoray sida qeexid qoraal. {{ui:Qiyaas}} › {{ui:Nidaamka isku xirka…}} wuxuu kuu ogolaanayaa inaad sheegto nidaamka moodelku isticmaalo.

## Dooro nidaamka moodelka

1. Fur moodelka, dooro {{ui:Qiyaas}}, kadibna {{ui:Nidaamka isku xirka…}}.
2. Ku qor sanduuqa raadinta. Mid kasta oo kuwan ka mid ah ayaa shaqeeya:
   - lambar EPSG: `32633` ama `EPSG:2277`;
   - aagga UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - erayo ka mid ah magaca: `lambert 93`, `mga zone 56`, `texas central`;
   - qeexid projection: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, oo lagu dari karo magac hore (`My grid = +proj=…`);
   - qoraalka fayl `.prj`, ama isticmaal {{ui:Soo rar fayl .prj…}}.
3. Dooro natiijo, kadibna {{ui:Isticmaal nidaamkan}}.

Doorashadu waxay ku kaydsantaa moodelka (property set oo magiciisu yahay `CadCraft_CRS` ee mashruuca), sidaas awgeed way dib u furmaysaa moodelka. Kaydi moodelka si aad u ilaaliso. {{ui:Ka saar moodeelka}} wuxuu ku laabanayaa waxa faylku sheegayo.

Haddii qeexidkaaga uu siiyo isku xirka isku mid ah ee nidaam EPSG liistaan ah, BimCraft waa sheegaa oo wuxuu isticmaalaa koodkaas; marka nidaamyo liis ah oo badan ay isku mid yihiin xisaabta, waxay magacaabaan kuwa kale sidoo kale.

## Dhigistayda

Qeexid aad ku dhejiso ama fayl `.prj` aad soo rarto waa la ilaalin karaa {{ui:Ku hay Dhigistayda}}. Liiskaasi wuxuu ku jiraa qalabkan (browserkan) waxaana lagu soo bandhigaa mar xigta markaad furto doorashada.

## Waxa isticmaala

- {{ui:Qiyaas}} › {{ui:Booska}} wuxuu beddelaa barta la doortay latitude iyo longitude iyada oo loo marayo nidaamka moodelka. Waqti hore wuxuu joogsan jiray markii faylku magacaabo nidaamka khariidadda oo aan lahayn koodka EPSG; hadda, marka doorasho la kaydiyay, wuxuu siiyaa jawaabta.
- Lakabyada khariidadda ee hoosta moodelka waxay isticmaalaan isla nidaamka. Daruur dhibco ama fayl dhul oo nidaam kale ku jira ayaa lagu soo bandhigaa kan moodelka (eeg hoos).
- {{ui:Dejinta}} › {{ui:BimCraft}} › {{ui:Booska}} › {{ui:Dooro nidaam kale…}} wuxuu dejiyaa waxa {{ui:Booska}} sidoo kale sheegayo: latitude iyo longitude nidaam geographic kasta oo liistaan ah, ama easting iyo northing nidaam projected kasta, oo ka sokow kan moodelka.

## Moodel aan weli khariidadda ku jirin

Haddii faylku aanu lahayn beddel khariidad, doorashada nidaamka waxay furtaa {{ui:Dhig moodeelkan khariidadda}}. Waxaad ka furi kartaa sidoo kale {{ui:Qiyaas}} › {{ui:Bilowga khariidadda…}}.

1. Ku sii bilowga moodelka sida easting iyo northing nidaamka, ama qor latitude iyo longitude oo dooro {{ui:Ku beddel eastings iyo northings}}.
2. Ku sii jiifka ilaa waqooyiga gridka (degrees, saacadda ka soo horjeedda; 0 wuxuu ka dhigan yahay in Y axis-ka moodelka uu u jeedo waqooyiga gridka) iyo dhererka bilowga.
3. Miisaanku wuxuu bilaabmaa farqiga unit-ka ee moodelka iyo khariidadda (0.001 moodel millimitir ah oo ku yaal grid metir ah). Beddel kaliya haddii aad u baahan tahay factor isku dhafan oo dhulka ilaa gridka.
4. Dooro {{ui:Dhig khariidadda}}. Hal tallaabo oo lagu soo noqdo wuxuu qoraa IfcProjectedCRS iyo IfcMapConversion (IFC4). Moodelka laftiisu ma dhaqaaqo.

Faylka IFC2X3 labadaba qaybood ma leh. BimCraft wuxuu qoraa tirooyinka isla sida caadigu oggolaado: property sets-ka buildingSMART `ePSet_MapConversion` iyo `ePSet_ProjectedCRS` ee mashruuca, latitude iyo longitude-ka goobta, iyo waqooyiga run. Wada-hadalku wuu sheegaa taas. Kaydi moodelka si aad u ilaaliso.

## Moodel horey khariidadda ugu jira

Marka faylku horey isu geliyo khariidadda oo aad dooratid nidaam kale, BimCraft wuu weydiiyaa:

- {{ui:Kaliya beddel waxa Location soo sheegta}} wuxuu ilaalinayaa geo-tixgelinta faylka oo isticmaalaa doorashadaada {{ui:Booska}}, lakabyada khariidadda iyo daruuraha dhibcaha (markaas tirooyinka moodelka waxaa loo akhriyaa inay ku jiraan nidaamka cusub).
- {{ui:Guuri moodelka nidaamkan}} wuxuu dib u qoraa geo-tixgelinta: bilowga wuxuu gudbaa projection-ka (eastings, northings, dhererka, jiifka iyo miisaanka) iyo IfcProjectedCRS (magaca, datum, projection, zone, unit) waa dib loo qoraa, sidaas IFC-ga la kaydiyay wuxuu sheegaa nidaamka cusub. Meesha dhulka ma beddelanayso: bilowgu wuxuu hayaa latitude iyo longitude-kiisii. Waxyaabaha moodelka gudihiisa ma beddelmaan; geo-tixgelinta kaliya.

Wada-hadalku wuxuu muujinayaa bilowga hore iyo kan cusub ka hor intaadan dooran. Dhaqaajinta tagista iyo soo noqoshada bilowga waxay soo celinaysaa dhex millimitir.

## Daruuro dhibcaha iyo dhulka nidaam kale

Daruur ama fayl sahan wuxuu leeyahay nidaamkiisa (LAS, LAZ, E57, GeoTIFF) ama midna. Markay ka duwan tahay kan moodelka, BimCraft wuxuu bixiyaa {{ui:Mashaariic dib u qorso nidaamka moodelka}}. Dhibcaha waa la dhaqaajiyaa qaybo (worker ku jira markay yihiin badan, si bogga u sii shaqeeyo), faylka kombiyuutarkaaga lama taabanayo, sadarka xaaladda wuxuu sheegaa waxa la sameeyay. Dib u fur faylka si aad ugu noqoto nidaamkiisii. Daruur horey u furan, {{ui:Dib u qor moodelka…}} ee baarka daruurta ayaa samaysa isla.

Haddii faylku aanu magacaabin nidaam, BimCraft wuxuu weydiiyaa {{ui:Faylkan nidaam ayuu ku jiraa?}}: dooro {{ui:Dooro nidaamka…}} oo jawaabta waa la xasuustaa faylkaas qalabkan. {{ui:Ku sii hay nidaamka faylka}} wuxuu ka tagaa dhibcaha sidooda.

## Marka wax qiyaas yihiin

Dhibaatooyinka waa la liistaa wada-hadalka iyo qaybta Dhibaatooyinka, weligood si aan la ogeysiin:

- Meel ka baxsan aagga ay nidaamku u sameysan yahay: tirooyinku way shaqeeyaan, laakiin fogaansho ayaa kordha.
- Wareejinta datum-ka oo u baahan fayl gridka (NADCON, NTv2 iyo kuwa la mid ah) lama heli karo. Nidaamyada datum kale waxaa loo dhaqaajiyaa iyadoo la adeegsanayo wareejinta aan gridka lahayn ee liiska EPSG uu sheego, natiijadana waa qiyaas ilaa saxnaanta la sheegay, oo fariintu meter ku sheegaysa.
- Dhibcaha aan la mari karin waa la reebaa oo la tiriyaa; faylka ka weyn xadka cabbirka waa la diidaa, xadka oo la sheegay.

:::tip
Isku xirka khariidadda wuxuu u baahan yahay beddel khariidadda. Fayl aan lahayn waxaa lagu dhigaa khariidadda {{ui:Bilowga khariidadda…}}.
:::

:::note
Dhaqaajinta u dhexeysa datum-yada iyada oo aan fayl grid-ka lahayn ayaa wanaagsan dhowr mitir; natiijada Booska waxay sheegtaa inta ay fogtahay marka katalogku ogyahay.
:::
