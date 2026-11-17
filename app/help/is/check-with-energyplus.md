---
title: Athuga hita og kælingu með EnergyPlus
summary: Skrifaðu líkanið sem EnergyPlus-skrá, eða keyrðu EnergyPlus 26.2.0 á því í vafranum, og berðu hönnunarálag þess saman við fljótlegu hita- og kælihjálpina. Önnur skoðun fyrir snemma hönnun, ekki útreikningur til samræmis.
keywords: energyplus, orkuhermun, hönnunardagur, hitaálag, kælingarálag, veðurskrá, epw, idf, varmamassi, árleg orka, hermun
from: b82a5bf2
---

## Hvað þú gerir

Spjaldið **Athuga með EnergyPlus** skrifar opna líkanið sem EnergyPlus-inntaksskrá (IDF): eitt svæði fyrir hvert herbergi, veggina, gólfin, þökin og gluggana með U-gildum sínum, loftskipti og hugsjónakyndingu og kælingu. Þú getur alltaf **vistað þá skrá** og keyrt hana í þinni eigin EnergyPlus.

Ef þú setur líka upp vélina getur spjaldið hermt á staðnum og sýnir hönnunarhitun og -kælingu EnergyPlus við hliðina á þeirri fljótlegu, herbergi fyrir herbergi.

Þetta er hönnunarhjálp. Orkureglur, vottanir og leyfi þurfa viðurkennt tól og þau veðurgögn sem það krefst, og niðurstaðan þarf yfirferð hjá þeim sem ber ábyrgð á henni.

## Setja upp vélina

BimCraft ber ekki EnergyPlus með sér. Það er stór WebAssembly-smíð (um 6 MB þjappað, auk 4.6 MB gagnaskrár), þannig að þú hýsir hana sjálf og slærð inn slóð hennar í spjaldið. Síðan hleður henni aðeins þegar þú ýtir á hermihnapp, aldrei við ræsingu. Slóðin verður að vera https, slóð á þessari síðu eða localhost.

## Hönnunardagar eða heilt ár

- **Herma hönnunardaga** þarfnast ekki veðurskrár. Hún keyrir kaldan vetrardag án sólar og heitan, bjartan sumardag við hitastigin í hita- og kæliinntakinu á flipanum Dagsbirta, og sýnir álag hvers herbergis í vöttum.
- **Herma heilt ár** þarfnast veðurskrár á EPW-sniði sem þú velur. Hún bætir við fólki, ljósum og búnaði úr sömu inntökum (alltaf á, þar sem engin áætlun er fundin upp) og sýnir hita- og kælingarorku hvers herbergis í kWh. Veðurskrár bera sín eigin leyfi, þannig að notaðu eina sem þú mátt nota.

## Varmamassi

Hakaðu við **Gefa veggjum með þekkt lög varmamassa** og veggir, þök og gólf sem hafa þekkt efnislög eru skrifuð lag fyrir lag, með eðlismassa og varmarýmd teknum úr stuttri töflu um dæmigerð gildi eftir heiti efnis. Lögin eru tekin utan frá fyrst, í þeirri röð sem skráin telur þau. Hlutir án laga haldast með U-gildi sínu án massa.

## Að lesa samanburðinn

Aðferðirnar tvær svara örlítið ólíkum spurningum. Fljótlega hjálpin heldur öllum hlutum; EnergyPlus-skráin jafnar U-gildi hvers herbergis eftir tegund yfirborðs. Munur yfir 15 % í hönnunarhitun herbergis er skráður sem athugasemd í ⚠-spjaldinu, með báðum tölunum. Kæling er mismunandi meira að hönnun: fljótlega hjálpin reiknar hámark út frá sólinni á einni dagsetningu, en EnergyPlus miðar við eigin hönnunardag.
