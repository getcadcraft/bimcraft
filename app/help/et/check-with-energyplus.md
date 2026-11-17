---
title: Küte ja jahutuse kontroll EnergyPlusiga
summary: Kirjuta mudel EnergyPlusi failina või käivita EnergyPlus versioon 26.2.0 sellel brauseris ja võrdle selle projekteerimiskoormusi kiire küte- ja jahutusabiga. Teine arvamus varajasele projekteerimisele, mitte nõuetele vastavuse arvutus.
keywords: energyplus, energiasimulatsioon, projekteerimispäev, küttekoormus, jahutuskoormus, ilmafail, epw, idf, soojusmahtuvus, aastane energia, simuleeri
from: b82a5bf2
---

## Mida sa teed

Paneel **Kontroll EnergyPlusiga** kirjutab avatud mudeli EnergyPlusi sisendfailina (IDF): iga ruum on oma tsoon, seinad, põrandad, katused ja aknad koos oma U-väärtustega, õhuvahetus ning ideaalne küte ja jahutus. Saad alati **salvestada selle faili** ja käivitada selle oma EnergyPlusis.

Kui seadistad ka mootori, saab paneel simuleerida kohapeal ja loetleb EnergyPlusi projekteerimisküte ja -jahutuse kiire abi kõrval, ruumi kaupa.

See on projekteerimisabi. Energianõuded, sertifitseerimine ja load vajavad heakskiidetud tööriista ja selle nõutud kliimaandmeid ning tulemuse peab üle vaatama isik, kes selle eest vastutab.

## Seadista mootor

BimCraft ei sisalda EnergyPlusit. See on suur WebAssembly-järk (umbes 6 MB pakitud, plus 4,6 MB andmefail), seega majutad selle ise ja kirjutad selle aadressi paneelile. Leht laadib selle alles siis, kui vajutad simuleerimisnuppu, mitte kunagi käivitusel. Aadress peab olema https, selle saidi tee või localhost.

## Projekteerimispäevad või aasta

- **Simuleeri projekteerimispäevi** ei vaja ilmafaili. See käivitab külma talvepäeva ilma päikeseta ja kuuma selge suvepäeva temperatuuridel, mis on vahekaardi Päevavalgus küte- ja jahutussisendites, ning annab iga ruumi koormuse vattides.
- **Simuleeri aastat** vajab EPW-formaadis ilmafaili, mille valid. See lisab samadest sisenditest inimesed, valgustid ja seadmed (alati sees, sest ajakava ei ole välja mõeldud) ning annab iga ruumi küttele ja jahutusele kuluva energia kWh-des. Ilmafailidel on oma litsentsid, seega kasuta ainult sellist, mida võid kasutada.

## Soojusmahtuvus

Märgi linnuke **Anna teadaolevate kihtidega seintele soojusmahtuvus**. Seinad, katused ja põrandad, mille materjalikihid on teada, kirjutatakse kihtide kaupa, tihedus ja erisoojus võetakse lühikesest materjalinimede tabelist tüüpilistest väärtustest. Kihid võetakse esmalt väljastpoolt, failis loetletud järjekorras. Kihtideta elemendid jäävad oma U-väärtusega ilma massita.

## Võrdluse lugemine

Kaks meetodit vastavad veidi erinevatele küsimustele. Kiire abi säilitab iga elemendi; EnergyPlusi fail keskmistab iga ruumi U-väärtused pinnatüübi järgi. Kui ruumi projekteerimisküte erineb üle 15 %, loetletakse see märkusena ⚠ paneelis koos mõlema arvuga. Jahutus erineb projekteerimise tõttu rohkem: kiire abi arvutab tippkoormuse päikesest ühel kuupäeval, EnergyPlus mõõtmestab oma projekteerimispäeva järgi.
