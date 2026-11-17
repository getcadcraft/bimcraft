---
title: Qalabka MEP oo leh dekado
summary: Dhig qalabka hawo-maamule guud, dabbaalada, mishiinnada, dhuxul-kululeeyaasha, kulul-biyoodka, cutubyada terminal-ka, diffuser-yada, grille-yada iyo taangiyada, oo cabbirkoodu yahay qiimaha aad qortid, mid kastaana leh xidhiidhyada tuubooyinka iyo tuubada hawada ee kale ay ku xirtaan.
keywords: mep, qalabka, hawo-maamule, ahu, dabbaal, dabbaal dhexe, mishiin, dhuxul-kululeeye, kulul-biyood, cutubka terminal-ka, vav, diffuser, grille, register, taangi, dekad, dekadaha, xidhiidh, afka, cabbirka afka, hvac, plumbing, mechanical, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Waxaad samaynaysaa

Dhig qalabka dhammaadka tuubooyinkaaga iyo tuubada hawada. Qalab kasta waa qaab guud oo cabbirkiisa lagu go'aaminayo qiyamka aad qortay, xidhiidhyadiisana waa **dekado**: halka tuubo ama tuubo hawo ku xirmaan, nidaamka, jihada socodka, iyo cabbirka. Tuubooyinka iyo tuubada hawada ee laga bilaabo dekad waxay qaadaan cabbirkeeda iyo nidaamkeeda oo waxay ku xirnaanayaan: eeg [Ku xidh tuubooyinka iyo tuubada hawada qalabka](topic:mep-connections).

:::note
Tani waa caawin naqshadeed iyo isku-duubni, injineer ayaa cabbirka sameeya. Qalabku ma aha alaab soo saare gaar ah: ma jiro awood, miisaan, ama cabbirro xidhiidh oo soo saare. Soo geli moodeel soo saare ah oo ka yimid barnaamijkaaga MEP sida IFC marka aad u baahan tahay.
:::

## Dhig qalab

1. Shid {{ui:Sawir}}, fur {{ui:Dhismaha}} oo dooro {{ui:Qalabka}}.
2. Bar-ka, dooro nooca oo qor cabbirkiisa. Nooc kasta wuxuu weydiiyaa midiisa:

| Nooca | Waxaad qortaa | Dekadihiisa |
|---|---|---|
| Hawo-maamule | dherer, ballac, joog; furitaanka soo-bixinta iyo soo-celinta; cabbirka tuubada dabbaalka iyo nidaamkeeda; cabbirka biyo-dhigga | tuubo hawo soo-bixin ka baxda, tuubo hawo soo-celin gasha, dabbaalka gal iyo ka bax, biyo-dhigga |
| Dabbaal dhexe | dhexroor, dherer, nidaam | tuubo hawo gal iyo ka bax |
| Mishiin | cabbirka tuubada, nidaamka | gal iyo ka bax |
| Dhuxul-kululeeye | dherer, ballac, joog, cabbirka tuubada, cabbirka gaasta, dhexroorka qoorta | soo-bixinta kululaynta ka baxda iyo soo-celinta gasha, gaasta gal, qoorta ka bax |
| Kulul-biyood | dhexroor, joog, cabbirka tuubada, gaas ama koronto | biyo qabow gal, biyo kulul ka bax (iyo gaas gal iyo qoor marka uu gaas gubo) |
| Cutubka terminal-ka | dherer, ballac, joog; furitaanka wareega ee dhexroorka; furitaanka hawada gal iyo ka bax | hawada gal iyo ka bax |
| Diffuser | wejiga, qoorta, nidaamka | qoorteeda (hawo gal) |
| Grille | ballaca iyo dhererka wejiga, ballaca iyo dhererka qoorta, nidaamka | qoorteeda (hawo ka bax oo loo wareego tuubada soo celinta ama ka bixinta) |
| Taangi | dhexroor, joog, cabbirka tuubada, nidaamka | gal sare, ka bax hoose |
| Radiator | dherer, joog, qoto, cabbirka tuubada, nidaamka | socod gal dhamaadka sare ee hal dhinac, soo-celin ka bax dhamaadka hoose ee dhinaca kale |
| Dhuxul-kululeeye / convector | dherer, joog, qoto, cabbirka tuubada, nidaamka | socod gal hal dhamaad, soo-celin ka bax dhamaadka kale |
| Qoyska soo saaraha | qoyska (eeg [Cabbirrada tuubada, valve-yada, damper-yada iyo qoysaska soo saaraha](topic:pipe-specs)) | dekadaha uu qoyskiisu siiyay |

3. Deji **At**, dhererka saldhigiisa ee ka sarreeya heerka. Dhererka diffuser-ka ama grille-ka waa wejigiisa: qor dhererka saqafka.
4. Qor **Tag** haddii aad rabto (`AHU-1`); qalabka nooca isku mid ah ee xiga wuxuu helayaa lambarka xiga.
5. Qorshaha ku dhaqaaji muraayadda: aasaaska iyo dekadihiisu way kula socdaan. Taabo {{key:R}} si aad 90° ugu rogto. Guji meesha uu tagayo.

Cabbirrada tuubada waa cabbirrada tuubada birta ah (ASME B36.10M). Tuubo laga bilaabo mishiin agab kale ah waxay qaadaa isla cabbirka magaca ah agabkeeda.

## Beddel ama ka saar

Dooro qalabka qorshaha ama muuqaalka 3D. {{ui:Sifooyinka}} wuxuu muujinayaa cabbir kasta aad qortay, tag-kiisa, X, Y, dhererka iyo wareegga, iyo dekad kasta: cabbirkeeda, nidaamkeeda, jihada socodka, iyo in wax lagu xidhay ama maya. Isbeddel kasta waa hal tallaabo oo {{ui:Ka noqo}}; socodyada ku xiran dekadihiisa waa wada guuraan. {{key:Delete}} wuu tirtiraa; socodyada ku xiran ayaa sii joogi doona, Hubinta xidhiidhka ayaa liistaa.

## Faylka IFC

Nooc kasta waxaa loo kaydiyaa sida fasalkiisa IFC: IfcUnitaryEquipment (hawo-maamule), IfcFan (dabbaal dhexe), IfcPump (mishiin), IfcBoiler (dhuxul-kululeeye; kulul-biyoodu waa IfcBoiler oo nooca biyo ah oo leh object type "Water heater"), IfcAirTerminalBox (cutubka terminal-ka), IfcAirTerminal (diffuser, grille) iyo IfcTank, oo nooc la wadaago qalab kasta oo nooca isku mid ah iyo cabbirro. Faylalka IFC2X3 waxay helaan IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal iyo IfcFlowStorageDevice oo leh noocyada u habboon. Dekad kasta waa IfcDistributionPort oo lagu dhigay meesha xidhiidhku joogo, wejigiisu dibadda u jeedo, leh jihada socodka iyo nidaamka; barnaamijyada kale waxay akhrin karaan socodka ku xirnaan doona dekadda. Qalabku wuxuu ku biiraa nidaamka dekad kasta, wuxuuna qaadaa xirmooyinka sifooyinka ee alaab maktabadeed kasta oo la dhigay.
