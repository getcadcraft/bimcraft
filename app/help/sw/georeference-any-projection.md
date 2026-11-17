---
title: Georeferensi kwa makadirio yoyote
summary: Mwambie BimCraft ni mfumo gani wa ramani unaotumika kwa kuratibu za modeli, kutoka orodha nzima ya EPSG, eneo lolote la UTM, au makadirio unayoyafafanua mwenyewe, kisha uutumie kwa Mahali, tabaka za ramani na wingu la nukta.
keywords: makadirio, mfumo wa kuratibu, crs, epsg, utm, eneo la utm, makadirio maalum, proj4, kamba ya proj, prj, wkt, georeferensi, ramani, ifcprojectedcrs, makadirio yangu, latitudo, longitudo, easting, northing, lambert, gauss-kruger, state plane, gridi ya taifa
from: 6894c1f2
---

Baadhi ya mipango imechorwa kwenye mfumo wa ramani usio kwenye orodha fupi: eneo la UTM, gridi ya taifa, au makadirio ambayo mtu aliyaandika kama ufafanuzi wa maandishi. {{ui:Measure}} › {{ui:Coordinate system…}} inakuwezesha kusema modeli inatumia lipi.

## Chagua mfumo kwa modeli

1. Fungua modeli, chagua {{ui:Measure}}, kisha {{ui:Coordinate system…}}.
2. Andika kwenye kisanduku cha utafutaji. Yoyote kati ya haya inafanya kazi:
   - namba ya EPSG: `32633` au `EPSG:2277`;
   - eneo la UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - maneno kutoka jina: `lambert 93`, `mga zone 56`, `texas central`;
   - ufafanuzi wa makadirio: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, kwa hiari na jina mbele yake (`My grid = +proj=…`);
   - maandishi ya faili ya `.prj`, au tumia {{ui:Load a .prj file…}}.
3. Chagua matokeo, kisha {{ui:Use this system}}.

Chaguo linahifadhiwa kwenye modeli (seti ya sifa iitwayo `CadCraft_CRS` kwenye mradi), kwa hiyo linafunguka upya pamoja na modeli. Hifadhi modeli ili kuliweka. {{ui:Take it off the model}} inarudisha kile faili inachosema.

Ikiwa ufafanuzi wako unatoa kuratibu sawa na mfumo ulioorodheshwa wa EPSG, BimCraft inasema hivyo na inatumia msimbo huo; mifumo kadhaa iliyoorodheshwa ikishiriki hesabu hiyo hiyo, inataja nyingine pia.

## Makadirio Yangu

Ufafanuzi unaoubandika au `.prj` unaoupakia unaweza kuhifadhiwa kwa {{ui:Keep in My projections}}. Orodha iko kwenye kifaa hiki (kivinjari hiki) na inatolewa wakati ujao utakapofungua kichagua.

## Kinachotumia

- {{ui:Measure}} › {{ui:Location}} hugeuza nukta iliyochaguliwa kuwa latitudo na longitudo kupitia mfumo wa modeli. Ilikuwa ikisimama na onyo faili ilipotaja mfumo wake wa ramani bila msimbo wa EPSG; sasa, pale chaguo limehifadhiwa, inatoa jibu.
- Tabaka za ramani chini ya modeli zinatumia mfumo ule ule. Wingu la nukta au faili ya ardhi kwenye mfumo mwingine inatolewa ile ya modeli (tazama hapa chini).
- {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}} › {{ui:Choose another system…}} huweka kile {{ui:Location}} pia inachoripoti: latitudo na longitudo kwenye mfumo wowote wa kijiografia ulioorodheshwa, au easting na northing kwenye mfumo wowote wa makadirio, pamoja na zile za modeli yenyewe.

## Modeli isiyo kwenye ramani bado

Ikiwa faili haina ubadilishaji wa ramani, kuchagua mfumo kunafungua {{ui:Place this model on the map}}. Unaweza pia kuifungua kutoka {{ui:Measure}} › {{ui:Map origin…}}.

1. Toa asili ya modeli kama eastings na northings kwenye mfumo, au andika latitudo na longitudo kisha uchague {{ui:Convert to eastings and northings}}.
2. Toa mzunguko kuelekea gridi ya kaskazini (digrii, kinyume cha saa; 0 inamaanisha mhimili Y wa modeli unaelekea gridi ya kaskazini) na urefu wa asili.
3. Kipimo kinaanza kwa tofauti ya kipimo kati ya modeli na ramani (0.001 kwa modeli ya milimita kwenye gridi ya mita). Badilisha tu kwa kipengele kilichounganishwa cha ardhi-hadi-gridi.
4. Chagua {{ui:Place on the map}}. Hatua moja ya kurudisha huandika IfcProjectedCRS na IfcMapConversion (IFC4). Modeli yenyewe haisogei.

Faili ya IFC2X3 haina huluki hizo mbili. BimCraft huandika namba zile zile kwa njia ambayo kiwango hicho kinaruhusu: seti za sifa za buildingSMART `ePSet_MapConversion` na `ePSet_ProjectedCRS` kwenye mradi, latitudo na longitudo ya tovuti, na kaskazini halisi. Kidirisha kinasema hivyo. Hifadhi modeli ili kuiweka.

## Modeli iliyo kwenye ramani tayari

Faili inapojiweka kwenye ramani tayari na ukichagua mfumo mwingine, BimCraft inauliza:

- {{ui:Only change what Location reports}} huhifadhi georeferensi ya faili yenyewe na kutumia chaguo lako kwa {{ui:Location}}, tabaka za ramani na wingu za nukta (namba za modeli basi zinasomwa kuwa ziko kwenye mfumo mpya).
- {{ui:Move the model to this system}} huandika upya georeferensi: asili inapitia makadirio (eastings, northings, urefu, mzunguko na kipimo), na IfcProjectedCRS (jina, datum, makadirio, eneo, kipimo) inaandikwa upya, kwa hiyo IFC iliyohifadhiwa inasema mfumo mpya. Mahali duniani yanabaki yale yale: asili inashikilia latitudo na longitudo zake. Vipengele ndani ya modeli havibadiliki kamwe; georeferensi tu ndiyo inabadilika.

Kidirisha kinaonyesha asili ya zamani na mpya kabla hujachagua. Kwenda huko na kurudi kunarudisha asili ndani ya milimita moja.

## Wingu la nukta na ardhi kwenye mfumo mwingine

Wingu au faili ya utafiti hubeba mfumo wake (LAS, LAZ, E57, GeoTIFF) au hakuna. Inapotofautiana na ule wa modeli, BimCraft inatoa {{ui:Reproject into the model's system}}. Nukta zinahamishwa kwa makundi (kwenye worker zinapokuwa nyingi, ili ukurasa ubaki unatumika), faili kwenye kompyuta yako haiguswi, na mstari wa hali unasema kilichofanyika. Fungua faili tena ili kurudi kwenye mfumo wake. Kwa wingu lililoshafunguliwa, {{ui:Reproject to the model…}} kwenye upau wa wingu hufanya vivyo hivyo.

Faili isipotaja mfumo wowote, BimCraft inauliza {{ui:Which system is this file in?}}: chagua kwa {{ui:Choose the system…}}, na jibu linakumbukwa kwa faili hiyo kwenye kifaa hiki. {{ui:Keep the file's own system}} huacha nukta kama zilivyo.

## Pale kitu kinapokadiriwa

Matatizo yanaorodheshwa kwenye kidirisha na kwenye paneli ya **Matatizo**, kamwe si kimya:

- Mahali nje ya eneo ambalo mfumo umetengenezewa: namba zinafanya kazi, lakini upotoshaji unaongezeka.
- Mabadiliko ya datum yanayohitaji faili ya gridi (NADCON, NTv2 na kadhalika) hayapatikani. Mifumo kwenye datum tofauti inahamishwa kwa mabadiliko yasiyo na gridi yaliyoorodheshwa na rejista ya EPSG, na matokeo ni ya makadirio kwa usahihi uliotajwa, ambao ujumbe unautoa kwa mita.
- Nukta isiyoweza kupangwa kwenye makadirio huachwa na kuhesabiwa; faili iliyozidi kikomo cha ukubwa hukataliwa, kikomo kikitajwa.

:::tip
Kuratibu za ramani zinahitaji ubadilishaji wa ramani. Faili isiyo nao huwekwa kwenye ramani kwa {{ui:Map origin…}}.
:::

:::note
Kuhama kati ya datums bila faili ya gridi ni sahihi hadi mita chache; matokeo ya Mahali yanasema kwa kiasi gani pale orodha inapojulikana.
:::
