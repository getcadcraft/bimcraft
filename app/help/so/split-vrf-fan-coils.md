---
title: Unitiyada split, VRF iyo fan coil
summary: Dhig unitiyada gudaha ee darbi, kaasad iyo tuubo-duct, unitiyada dibada ee single-split iyo VRF, isku-xidhka refnet iyo fan coil 2-pipe ama 4-pipe, mid walba oo leh xidhiidhkiisa refrigerant, biyo, condensate iyo duct, oo sawir line set-yada u dhexeeya oo cabirkooda ka qaad miis aad beddeli karto.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variable refrigerant flow, heat pump, indoor unit, outdoor unit, condensing unit, wall mounted, high wall, cassette, ducted, concealed, fan coil, fcu, 2-pipe, 4-pipe, refnet, branch joint, y joint, line set, lineset, refrigerant, liquid line, gas line, suction line, acr, copper, condensate, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Waxa aad samayn doontaa

Dhig unitiyada nidaamka split, multi-split ama VRF iyo fan coil-kiisa moodelka, kadibna ku xidh line set-yada: khad dareere iyo khad gaas oo naxaas ACR ah, oo lagu xiro dekedaha unitiyada. Unitiyadu waxay u shaqeeyaan sida qaybaha kale ee [MEP equipment with ports](topic:mep-equipment): isla bar-ka, Sifooyinka, dekedaha iyo [connections](topic:mep-connections).

:::note
Tani waa qalab qoraal-diyaarin iyo isku-duubid. Unitiyadu waa qaabab guud ah oo cabbirkooda ku salaysan qiimayaasha aad qortid, ma aha alaabta wax soo saare gaar ah. Cabbirrada tuubooyinkooda waxay ka yimaadaan miis ah **tusaale caadi ah** oo loogu talagalay qalabka R410A iyo R32, ma aha wax soo saare gaar ah: buugga rakibidda ee soo saaraha unitiga ayaa go'aaya cabbirrada dhabta ah, iyo xariiqyada dheer ama farqiga sare ee dhererka ayaa beddelaya. Beddel miiska, ama ku qor cabbirrada, si ay ula mid noqdaan unitiyada aad isticmaasho.
:::

## Dhig unit

1. Shid {{ui:Draw}}, fur {{ui:Build}} oo dooro {{ui:Equipment}}.
2. Dooro nooca oo dejiso qiimayaashiisa:

| Nooca | Waxaad dejisaa | Dekedaheeda |
|---|---|---|
| Unitiga gudaha ee split, darbi | awoodda, khadka dareeraha iyo gaasta, dherer, qoto, joog, cabbirka condensate | refrigerant dareere iyo gaas, biyo-dhigista condensate (dhinaca midig, ee darbiga u dhow) |
| Unitiga gudaha ee split, kaasad | awoodda, khadka dareeraha iyo gaasta, panel, jidh, joog, cabbirka condensate | refrigerant dareere iyo gaas, biyo-dhigista condensate (hal dhinac, ee sare u dhow) |
| Unitiga gudaha ee split, duct | awoodda, khadka dareeraha iyo gaasta, dherer, ballac, joog, furitaanka bixinta iyo soo celinta, cabbirka condensate | duct bixin ka baxda, duct soo celin ku gala, refrigerant dareere iyo gaas, biyo-dhigista condensate |
| Unitiga dibada ee split | awoodda, khadka dareeraha iyo gaasta, ballac, qoto, joog | refrigerant dareere iyo gaas (dhinaca midig) |
| Unitiga dibada ee VRF | awoodda, khadka dareeraha iyo gaasta, ballac, qoto, joog | refrigerant dareere iyo gaas (hore, hoose) |
| Isku-xidhka refnet | khadka dareeraha ama gaasta, culeyska laan kasta, tuubada laba dhamaadka kasta | galka, laanta A, laanta B |
| Unitiga fan coil | 2-pipe ama 4-pipe, dherer, ballac, joog, furitaanka bixinta iyo soo celinta, tuubada coil-ka iyo nidaamka, tuubada kulaylka, cabbirka condensate | duct bixin ka baxda, duct soo celin ku gala, coil gal iyo bax, kulayl gal iyo bax (4-pipe), biyo-dhigista condensate |

3. Deji **At**: joogga saldhigga unitiga ka sarreeya heerka. Saldhigga unitiga darbiga waa dhinaca hoose (inta badan 2100 mm); kan kaasadda waa wejigeeda ee saqafka; kan refnet-ka waa joogga xariiqda dhexe ee tuubadiisa.
4. Riix meesha uu tagayo ({{key:R}} wuxuu leexiyaa 90°).

**Awoodda** waa awoodda qaboojinta magaca ah ee unitiga, kW, oo Btu/h ayaa ku yaal dhinacaas. Haddii **Khadka dareeraha** iyo **Khadka gaasta** lagu tago **Miiska**, xidhiidhyada unitiga waxay qaadanayaan cabbirrada miiska awoodda hadda; dooro cabbir tuubo si aad u isticmaasho kan unitigaaga. Galka refnet-ka waxaa lagu cabbiraa laanta labadaba wadajir, laan kasta waxaa lagu cabbiraa culaysheeda ay leedahay.

Dekedaha refrigerant-ka waxay shaqeeyaan labada jiho (pompe kulayl wuxuu shaqeeyaa jihada kasta). Biyo-dhigista condensate waa cabbir tuubo oo siddeed la mid ah biyo-dhigista kale.

## Sawir line set

1. Dooro laba qaybood ({{key:Shift}}+riix kan labaad): unit dibada iyo unit gudaha (single split), ama unit dibada iyo refnet, refnet iyo unit gudaha, ama laba refnet (VRF).
2. Fur {{ui:Build}} oo dooro {{ui:Line set}}.

BimCraft wuxuu sawiraa socodka dareeraha iyo gaasta u dhexeeya dekedahooda xor ah, laga bilaabo dekad kasta ilaa heer wadaag ah, oo naxaas ACR ah ku jira (coil la qalajiyey ilaa 1-5/8 in, tuubo la jiidey ka weyn), oo waa hal tallaabo oo {{ui:Undo}}. Refnet-ku wuxuu qaataa khadkiisa keliya: galka wuxuu ka galaa dhinaca dibada, laanta ka baxaa oo u socota unitiyada gudaha. Socod kasta waxay qaadataa cabbirka dhamaadkiisa hoose (unitiga gudaha, ama galka refnet-ka); meesha dhamaadka kale ee dekeddiisa ay tahay cabbir kale, {{ui:Check connections}} ayaa soo bandhigta, halkaas ayaa reducer-ku ku qasban yahay. Labo unit gudaha waxay u baahan yihiin refnet u dhexeeya.

Socodyada markii dambe u guuri sida tuubo kasta; dhamaadkooda waxay sii joogaan dekedaha. Socodyada u dhexeeya dabaqyada waxaa lagu sawiraa {{ui:Pipe}}: tuubo laga bilaabo dekedda refrigerant-ka waxay qaadataa nidaamkeeda, naxaaska ACR iyo cabbirkeeda.

## Beddel miiska line set-ka

Fur {{ui:Build}} oo dooro {{ui:Line set sizes}}. Safka kasta wuxuu sheegaa: ilaa awoodan (kW), tuubadan dareeraha iyo tuubadan gaasta.

| Ilaa | Dareere | Gaas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Kuwani waa qiimayaasha bilowga ah, ee caadiga ah. Beddel safka, ku dar ama ka saar safafka oo dooro {{ui:Save}}: miiska waxaa lagu hayaa moodelka, sidaas darteed qof kasta oo ku shaqeeya faylka wuxuu isticmaalaa, {{ui:Undo}} ayaa soo celisa. {{ui:Use the typical values}} wuxuu soo celiyaa miiska bilowga ah. Tuubooyinka hore loo dhigay waxay sii hayn dekedahooda ilaa aad beddesho.

## Faylka IFC

Unitiyada gudaha iyo dibada ee nidaamyada split iyo VRF waa IfcUnitaryEquipment oo nooca SPLITSYSTEM, nooca objectka ayaa sheegaya kan ah ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fan coil waa IfcUnitaryEquipment oo nooca AIRHANDLER ah, nooca objectka "Fan coil unit": IFC4 ma leh nooc fan coil ah, fan, coil iyo filter ee qol keliya waxay ku habboon yihiin AIRHANDLER. Isku-xidhka refnet waa IfcPipeFitting oo nooca JUNCTION ah ("Refnet joint"). Faylalka IFC2X3 waxay helaan IfcEnergyConversionDevice iyo IfcFlowFitting oo nooacyada u dhigma.

Dekedaha iyo socodyada refrigerant-ka waxay ku jiraan nidaamyada REFRIGERATION (mid khadyada dareeraha, mid khadyada gaasta), condensate-na nidaamka DRAINAGE. Socodyada ACR waxaa lagu magacaabaa dhexroorka dibadda. Miiska line set-ka waa property set CadCraft_HvacLineSets ee mashruuca.

Eeg sidoo kale: [MEP equipment with ports](topic:mep-equipment), [Connect pipes and ducts to equipment](topic:mep-connections) iyo [Pipes and ducts](topic:pipes-and-ducts).
