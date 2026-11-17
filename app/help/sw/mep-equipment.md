---
title: Vifaa vya MEP vyenye milango ya muunganisho
summary: Weka vifaa vya jumla vya kushughulikia hewa, feni, pampu, boiler, hita za maji, vitengo vya vituo, diffuser, grille na matangi vilivyopimwa kwa thamani unazoandika, kila kimoja kikiwa na miunganisho ya mabomba na mifereji ambayo njia nyingine huunganishwa nayo.
keywords: mep, vifaa, kitengo cha kushughulikia hewa, ahu, feni, feni ya ndani ya mstari, pampu, boiler, hita ya maji, kitengo cha kituo, vav, diffuser, grille, rejista, tanki, mlango, milango, muunganisho, pua, ukubwa wa shingo, hvac, mabomba, mitambo, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Utakachofanya

Weka vifaa mwishoni mwa mabomba na mifereji yako. Kila kipande ni umbo la jumla lililopimwa kwa thamani unazoandika, na miunganisho yake kama **milango**: mahali bomba au mfereji unapojiunga nacho, mfumo gani, mtiririko unaenda upande gani, na ukubwa gani. Mabomba na mifereji inayochorwa kutoka kwenye mlango huchukua ukubwa na mfumo wake na kubaki imewekwa kwake: tazama [Unganisha mabomba na mifereji kwenye vifaa](topic:mep-connections).

:::note
Hii ni zana ya kuchora na kuratibu, iliyopimwa na mhandisi. Vifaa hivi si bidhaa ya mtengenezaji: hakuna uwezo, uzito wala ukubwa wa miunganisho ya mtengenezaji. Leta modeli ya mtengenezaji kutoka programu yako ya MEP kama IFC pale unapoihitaji.
:::

## Weka kipande

1. Washa {{ui:Chora}}, fungua {{ui:Muundo}} na uchague {{ui:Vifaa}}.
2. Katika upau, chagua aina na uandike ukubwa wake. Kila aina inataka yake:

| Aina | Unaandika | Milango yake |
|---|---|---|
| Air handler | urefu, upana, kimo; fursa za usambazaji na kurudisha; ukubwa wa bomba la koili na mfumo; ukubwa wa condensate | mfereji wa usambazaji nje, mfereji wa kurudisha ndani, koili ndani na nje, mfereji wa kutolea condensate |
| Inline fan | kipenyo, urefu, mfumo | mfereji ndani na nje |
| Pump | ukubwa wa bomba, mfumo | ingizo na kutoka |
| Boiler | urefu, upana, kimo, ukubwa wa bomba, ukubwa wa gesi, kipenyo cha moshi | usambazaji wa kupasha joto nje na kurudisha ndani, gesi ndani, moshi nje |
| Water heater | kipenyo, kimo, ukubwa wa bomba, gesi au umeme | maji baridi ndani, maji moto nje (na gesi ndani na bomba la moshi inapochoma gesi) |
| Terminal unit | urefu, upana, kimo, ingizo la duara, upana na kimo cha kutoka | hewa ya usambazaji ndani na nje |
| Diffuser | uso, shingo, mfumo | shingo yake (hewa ndani) |
| Grille | upana na kimo cha uso, upana na kimo cha shingo, mfumo | shingo yake (hewa nje kwenda mfereji wa kurudisha au wa kutolea) |
| Tank | kipenyo, kimo, ukubwa wa bomba, mfumo | ingizo juu, kutoka karibu na chini |
| Radiator | urefu, kimo, kina, ukubwa wa bomba, mfumo | mtiririko ndani juu ya ncha moja, kurudi nje chini ya ncha nyingine |
| Convector / panel heater | urefu, kimo, kina, ukubwa wa bomba, mfumo | mtiririko ndani ncha moja, kurudi nje ncha nyingine |
| Manufacturer's family | familia (tazama [Vipimo vya bomba, vali, damper na familia za watengenezaji](topic:pipe-specs)) | milango ambayo familia yake ilipewa |

3. Weka **At**, kimo cha msingi wake juu ya ngazi. Kimo cha diffuser au grille ni uso wake: andika kimo cha dari.
4. Andika **Tagi** ukitaka moja (`AHU-1`); kipande kijacho cha aina hiyo hiyo kinapata namba inayofuata.
5. Sogeza kielekezi juu ya mpango: alama ya msingi na milango yake inafuata. Bonyeza {{key:R}} kuzungusha kwa digrii 90. Bofya mahali inapokwenda.

Ukubwa wa mabomba ni ukubwa wa mabomba ya chuma (ASME B36.10M). Bomba linalochorwa kutoka pampu yenye nyenzo nyingine huchukua ukubwa uleule wa kawaida katika nyenzo yake.

## Badilisha au ondoa

Chagua kwenye mpango au kwenye mwonekano wa 3D. {{ui:Sifa}} inaonyesha kila ukubwa uliouandika, tagi yake, X, Y, kimo na mzunguko, na kila mlango: ukubwa wake, mfumo, mtiririko unaenda upande gani, na kama kitu kimeunganishwa. Kila mabadiliko ni hatua moja ya {{ui:Tendua}}; njia zilizowekwa kwenye milango yake husogea nayo. {{key:Delete}} huondoa; njia zilizowekwa kwake zinabaki, na ukaguzi wa miunganisho unaziorodhesha.

## Katika faili ya IFC

Kila aina huhifadhiwa kama darasa lake la IFC: IfcUnitaryEquipment (air handler), IfcFan (feni), IfcPump (pampu), IfcBoiler (boiler; hita ya maji ni IfcBoiler ya aina ya maji yenye aina ya kitu "Water heater"), IfcAirTerminalBox (kitengo cha kituo), IfcAirTerminal (diffuser, grille) na IfcTank (tanki), pamoja na aina inayoshirikiwa na kila kipande cha aina moja na ukubwa wake. Faili za IFC2X3 hupata IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal na IfcFlowStorageDevice pamoja na aina zinazolingana. Kila mlango ni IfcDistributionPort iliyowekwa mahali muunganisho ulipo, ukitazama nje, pamoja na mwelekeo wake wa mtiririko na mfumo wake; programu nyingine husoma njia gani inaunganishwa na mlango gani. Kipande kinajiunga na mfumo wa kila mlango wake, na kinabeba seti za vipengee vya maktaba ambazo kila kipengee cha maktaba kilichowekwa kinazo.
