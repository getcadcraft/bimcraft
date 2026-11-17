---
title: Split-, VRF- ja ventilaatorkonvektorseadmed
summary: Paiguta seinale, kassetina ja kanalitega paigaldatavad siseseadmed, üksik-split- ja VRF-välisseadmed, refnet-liitmikud ning 2- või 4-torulised ventilaatorkonvektorid, igaühe külmaine-, vee-, kondensaadi- ja kanaliühendustega, ning joonista nende vahele liinikomplektid, mille mõõtmed tulevad muudetavast tabelist.
keywords: split, mini split, minisplit, multi split, vrf, vrv, muutuva külmainevooluga süsteem, soojuspump, siseseade, välisseade, kondensaatorseade, seinale paigaldatav, kõrgseina, kassett, kanalitega, peidetud, ventilaatorkonvektor, fcu, 2-torulised, 4-torulised, refnet, harujaotus, Y-liitmik, liinikomplekt, lineset, külmaine, vedelikuliin, gaasiliin, imiliin, acr, vask, kondensaat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Mida sa teed

Paiguta split- või mitme-split-süsteemi ja VRF-süsteemi seadmed ning nende ventilaatorkonvektorid mudelisse ja ühenda need liinikomplektidega: vedelik- ja gaasiliin ACR-vasest, kinnitatud seadmete portidele. Seadmed toimivad nagu kõik teised [MEP-seadmed portidega](topic:mep-equipment): sama riba, Omadused, pordid ja [ühendused](topic:mep-connections).

:::note
See on joonistamise ja koordineerimise abivahend. Seadmed on üldised kujundid, mille mõõtmed määravad sisestatud väärtused, mitte tootja tooted. Nende torude suurused tulevad **tüüpilisi näidisväärtusi** sisaldavast tabelist, mis kehtib R410A- ja R32-seadmetele, mitte ühegi tootja andmetele. Tegelikud mõõtmed määrab seadme tootja paigaldusjuhend; pikad torustikud ja suured kõrguste erinevused muudavad neid. Muuda tabelit või sisesta suurused, et need vastaksid sinu kasutatavatele seadmetele.
:::

## Seadme paigutamine

1. Lülita sisse {{ui:Joonista}}, ava {{ui:Versioon}} ja vali {{ui:Seadmed}}.
2. Vali tüüp ja seadista selle väärtused:

| Tüüp | Seadistad | Selle pordid |
|---|---|---|
| Split-siseseade, seinale | võimsus, vedelik- ja gaasiliin, pikkus, sügavus, kõrgus, kondensaadi suurus | külmaine vedelik ja gaas, kondensaadi äravool (parempoolsel otsal, seina lähedal) |
| Split-siseseade, kassett | võimsus, vedelik- ja gaasiliin, paneel, korpus, kõrgus, kondensaadi suurus | külmaine vedelik ja gaas, kondensaadi äravool (ühel küljel, ülaosa lähedal) |
| Split-siseseade, kanalitega | võimsus, vedelik- ja gaasiliin, pikkus, laius, kõrgus, tarne- ja tagastusava, kondensaadi suurus | tarnekanal välja, tagastuskanal sisse, külmaine vedelik ja gaas, kondensaadi äravool |
| Split-välisseade | võimsus, vedelik- ja gaasiliin, laius, sügavus, kõrgus | külmaine vedelik ja gaas (parempoolsel küljel) |
| VRF-välisseade | võimsus, vedelik- ja gaasiliin, laius, sügavus, kõrgus | külmaine vedelik ja gaas (ees, madal) |
| Refnet-liitmik | vedelik- või gaasiliin, iga haru koormus, toru igas otsas | sisend, haru A, haru B |
| Ventilaatorkonvektor | 2- või 4-torune, pikkus, laius, kõrgus, tarne- ja tagastusava, mähise toru ja süsteem, küttetoru, kondensaadi suurus | tarnekanal välja, tagastuskanal sisse, mähis sisse ja välja, küte sisse ja välja (4-torune), kondensaadi äravool |

3. Määra **Kõrgusel**: seadme aluse kõrgus tasandist. Seinaseadme alus on selle alumine külg (sageli 2100 mm); kassetil on see tema esikülg laes; refnet-liitmikul on see toru keskjoone kõrgus.
4. Klõpsa kohale, kuhu see läheb ({{key:R}} pöörab seda 90°).

**Võimsus** on seadme nimiline jahutusvõimsus kW-des, kõrval Btu/h. Kui **Vedelikuliin** ja **Gaasiliin** on jäetud väärtusele **Tabelist**, võtavad seadme ühendused tabeli suurused selle võimsuse jaoks; vali torusuurus, et kasutada oma seadme enda omi. Refnet-liitmiku sisend on mõõdetud mõlema haru jaoks koos, iga haru oma koormuse järgi.

Külmainepordid töötavad mõlemas suunas (soojuspump töötab kumbas suunas). Kondensaadi äravool on torusuurus nagu iga äravool.

## Liinikomplekti joonistamine

1. Vali kaks osa ({{key:Shift}}+klõps teisele): välisseade ja siseseade (üksik-split), või välisseade ja refnet, refnet ja siseseade või kaks refnet-liitmikku (VRF).
2. Ava {{ui:Versioon}} ja vali {{ui:Liinikomplekt}}.

BimCraft joonistab vedelik- ja gaasitorud nende vabade portide vahel, igast pordist välja ja ühise kõrguseni, ACR-vasest (pehmeks lõõmutatud rull kuni 1-5/8 in, sellest suuremal tõmmatud toru), ühe sammuna, mille saab {{ui:Võta tagasi}} abil tagasi võtta. Refnet-liitmik võtab ainult oma liini: sisendisse välisseadme poolt ja haru kaudu välja siseseadmete suunas. Iga torustik võtab oma allavoolu otsa suuruse (siseseade või refneti sisend); kui teise otsa port on teist suurust, loetleb {{ui:Kontrolli ühendusi}} selle: just sinna läheb reduktor. Kaks siseseadet vajavad nende vahele refnet-liitmikku.

Torustikke saab hiljem liigutada nagu iga torustikku; nende otsad jäävad portidele. Torud tasandite vahel joonistatakse {{ui:Toru}}ga: toru, mis algab külmainepordist, võtab endale selle süsteemi, ACR-vase ja suuruse.

## Liinikomplekti tabeli muutmine

Ava {{ui:Versioon}} ja vali {{ui:Liinikomplekti suurused}}. Iga rida ütleb: kuni selle võimsuseni (kW), see vedelikutoru ja see gaasitoru.

| Kuni | Vedelik | Gaas |
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

Need on algsed, tüüpilised väärtused. Muuda rida, lisa või eemalda ridu ja vali {{ui:Salvesta}}: tabel salvestatakse mudelisse, nii et kõik faili kallal töötavad inimesed kasutavad seda, ning {{ui:Võta tagasi}} võtab selle tagasi. {{ui:Kasuta tüüpilisi väärtusi}} taastab algse tabeli. Juba paigutatud seadmed säilitavad oma pordid, kuni sa neid muudad.

## IFC-failis

Split- ja VRF-süsteemide siseseadmed ja välisseadmed on IfcUnitaryEquipment tüüpi SPLITSYSTEM; objektitüüp ütleb, milline (”Split indoor unit, wall-mounted”, ”Split indoor unit, ceiling cassette”, ”Split indoor unit, ducted”, ”Split outdoor unit”, ”VRF outdoor unit”). Ventilaatorkonvektor on IfcUnitaryEquipment tüüpi AIRHANDLER objektitüübiga ”Fan coil unit”: IFC4-s ei ole ventilaatorkonvektori tüüpi, ja ventilaator, mähis ja filter ühe ruumi jaoks kirjeldavad just AIRHANDLER-it. Refnet-liitmik on IfcPipeFitting tüüpi JUNCTION (”Refnet joint”). IFC2X3 failid saavad IfcEnergyConversionDevice ja IfcFlowFitting vastavate tüüpidega.

Külmainepordid ja torustikud on REFRIGERATION süsteemides (üks vedelikuliinidele, üks gaasiliinidele), kondensaat DRAINAGE süsteemis. ACR-torustikud on nimetatud välisläbimõõdu järgi. Liinikomplekti tabel on omadusehulk CadCraft_HvacLineSets projektil.

Vaata ka: [MEP-seadmed portidega](topic:mep-equipment), [Torude ja õhukanalite ühendamine seadmetega](topic:mep-connections) ja [Torud ja õhukanalid](topic:pipes-and-ducts).
