---
title: MEP-seadmed portidega
summary: Aseta üldised õhutöötlusseadmed, ventilaatorid, pumbad, katlad, veesoojendid, terminaliseadmed, difuusorid, restid ja mahutid sinu sisestatud väärtuste järgi, igaühel torude ja kanalite ühendused, millega teised lõigud ühenduvad.
keywords: mep, seadmed, õhutöötlusseade, ahu, ventilaator, kanalventilaator, pump, katel, veesoojendi, terminaliseade, vav, difuusor, rest, register, mahuti, port, pordid, ühendus, otsik, kaela mõõt, hvac, sanitaartehnika, mehaanika, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Mida teed

Aseta seadmed torude ja kanalite otsa. Iga tükk on üldine kuju, mille mõõdud sisestad sina, ja tema ühendused on **portidena**: kus toru või kanal ühineb, milline süsteem, mis suunas vool liigub ja mis mõõt. Pordilt joonistatud torud ja kanalid võtavad tema mõõdu ja süsteemi ning jäävad sellega kinnitatuks: vt [Ühenda torud ja kanalid seadmetega](topic:mep-connections).

:::note
See on projekteerimise ja koordineerimise abivahend, mille mõõtmestab insener. Seade ei ole tootja toode: ei ole võimsusi, kaalusid ega tootjate ühendusmõõte. Kui vajad tootja mudelit, too see oma MEP-programmist IFC-na.
:::

## Paiguta tükk

1. Lülita sisse {{ui:Joonista}}, ava {{ui:Versioon}} ja vali {{ui:Seadmed}}.
2. Ribal vali liik ja sisesta mõõdud. Iga liik küsib omi:

| Liik | Sa sisestad | Tema pordid |
|---|---|---|
| Õhutöötlusseade | pikkus, laius, kõrgus; tarne- ja tagasivooluavad; mähise toru mõõt ja süsteem; kondensaadi mõõt | tarnekanal välja, tagasivoolukanal sisse, mähis sisse ja välja, kondensaadi äravool |
| Kanalventilaator | läbimõõt, pikkus, süsteem | kanal sisse ja välja |
| Pump | toru mõõt, süsteem | sisend ja väljund |
| Katel | pikkus, laius, kõrgus, toru mõõt, gaasi mõõt, suitsutoru läbimõõt | küttevarustus välja ja tagasivool sisse, gaas sisse, suits välja |
| Veesoojendi | läbimõõt, kõrgus, toru mõõt, gaas või elekter | külm vesi sisse, kuum vesi välja (ja gaas sisse ning suitsutoru, kui ta põletab gaasi) |
| Terminaliseade | pikkus, laius, kõrgus, ümar sisend, väljundi laius ja kõrgus | tarneõhk sisse ja välja |
| Difuusor | esi, kael, süsteem | tema kael (õhk sisse) |
| Rest | esi laius ja kõrgus, kaela laius ja kõrgus, süsteem | tema kael (õhk välja tagasivoolu- või väljatõmbekanalisse) |
| Mahuti | läbimõõt, kõrgus, toru mõõt, süsteem | sisend ülal, väljund lähedal all |
| Radiaator | pikkus, kõrgus, sügavus, toru mõõt, süsteem | vool sisse ühe otsa ülaosas, tagasivool välja teise otsa all |
| Konvektor / paneelküttekeha | pikkus, kõrgus, sügavus, toru mõõt, süsteem | vool sisse ühes otsas, tagasivool välja teises |
| Tootja perekond | perekond (vt [Torude spetsifikatsioonid, ventiilid, siibrid ja tootjate perekonnad](topic:pipe-specs)) | pordid, mis perekonnale anti |

3. Määra väli **At**, tema aluse kõrgus korruse kohal. Difuusori või resti kõrgus on tema esi: sisesta lae kõrgus.
4. Sisesta **Silt** (Tag), kui soovid (`AHU-1`); järgmine sama liigi tükk saab järgmise numbri.
5. Liiguta osuti plaanile: jalajälg ja selle pordid järgnevad. Vajuta {{key:R}}, et pöörata 90°. Kliki kohta, kuhu ta läheb.

Toru mõõdud on terasest torude nimimõõdud (ASME B36.10M). Pumbast teises materjalis joonistatud toru võtab sama nimimõõdu oma materjalis.

## Muuda või eemalda

Vali ta plaanilt või 3D-vaatest. {{ui:Omadused}} näitab kõiki sisestatud mõõte, tema silti, X-i, Y-i, kõrgust ja pööret ning iga porti: selle mõõtu, süsteemi, suunda, kuhu vool liigub, ja kas midagi on ühendatud. Iga muudatus on üks samm {{ui:Võta tagasi}}; tema portidele kinnitatud lõigud liiguvad kaasa. {{key:Delete}} eemaldab ta; tema küljes olnud lõigud jäävad alles ja ühenduste kontroll loetleb need.

## IFC-failis

Iga liik salvestub oma IFC-klassina: IfcUnitaryEquipment (õhutöötlusseade), IfcFan, IfcPump, IfcBoiler (katel; veesoojendi on IfcBoiler tüübiga water ja objektitüübiga „Water heater“), IfcAirTerminalBox (terminaliseade), IfcAirTerminal (difuusor, rest) ja IfcTank, tüübiga, mis on ühine kõigile sama liigi tükkidele, ja mõõtmetega. IFC2X3-failid saavad IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal ja IfcFlowStorageDevice vastavate tüüpidega. Iga port on IfcDistributionPort, paigutatud sinna, kus ühendus on, suunatud välja, koos vooluga suuna ja süsteemiga; teised programmid loevad, milline lõik millise pordiga ühendub. Tükk ühineb iga oma pordi süsteemiga ja kannab kõiki komplekte, mida igal paigutatud raamatukogu elemendil on.
