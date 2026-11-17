---
title: Gluggatjaldakerfi: glerveggir á neti, með milliprófílum
summary: Teiknaðu gluggatjaldakerfi eins og vegg eða leggðu það á flöt, og stilltu síðan netlínurnar og milliprófílana. Það er vistað sem IfcCurtainWall með rúðum sínum og milliprófílum.
keywords: gluggatjaldakerfi, gluggatjaldaveggur, gluggatjaldanet, milliprófíll, gleruppsetning, verslunarframhlið, glervegg, spjald, rúða, eftir fleti, flötur, massi, netlína, bil, prófíll, þverprófíll, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Hvað þú gerir

Býrð til glerjaðan vegg úr rúðum milli milliprófíla, breytir staðsetningu netlínanna og velur hvaða línur fá milliprófíl.

## Skref

1. Kveiktu á **Teikna** og opnaðu valmyndina **Smíði** (í borðaútliti: flipann Arkitektúr).
2. Veldu **Gluggatjaldakerfi**. Í línu þess stillirðu efri brún (hæðina fyrir ofan, eða hæð), línu með bili ákveðinna lengdar meðfram því, línu með bili ákveðinna lengdar upp eftir því (skildu eftir autt fyrir enga), hvort það fái milliprófíla og milliprófílsniðið.
3. Smelltu þar sem það byrjar og þar sem það endar, eins og þegar þú teiknar vegg. Shift heldur því ferhyrndu.
4. Til að breyta netinu velurðu **Gluggatjaldanet** og smellir á kerfið:
   - **Bæta við línu**: lóðrétt lína fer þar sem þú smellir. Fyrir lárétta hæðarlínu skaltu fyrst slá inn hæð hennar í **Í**.
   - **Færa línu**: smelltu á línuna, og síðan á staðinn þar sem hún á að fara.
   - **Fjarlægja línu**: smelltu á línuna.
   - **Stilla eftir bili**: sláðu inn bilið í **Hver**, og smelltu síðan á kerfið.
5. Til að breyta milliprófílum velurðu **Milliprófíll**, velur hvað hann vinnur á (lóðrétta línu sem þú smellir á, lárétta línu í ákveðinni hæð, jaðarinn, eða allar línur), velur **Setja milliprófíla** eða **Fjarlægja milliprófíla** og prófíl, og smellir síðan á kerfið.
6. Veldu kerfi til að sjá allt um það í **Eiginleikum**: hverja netlínu með staðsetningu sinni, hak fyrir milliprófílinn hennar og hnapp til að fjarlægja hann; bilið; jaðarinn; prófílinn; þykkt rúðanna.

## Eftir fleti

**Eftir fleti** býr til gluggatjaldakerfi á flötum fleti sem þú smellir á í 3D-sýninni. Línan þess hefur sömu net- og milliprófílstillingar.

- Það virkar á hvaða flötum fleti sem er á hvaða frumefni sem er sýnt í 3D-sýninni: massa, vegg, gólfi, þakfleti, súlu, staðsettum hlut. Flöturinn getur verið lóðréttur, hallandi eða láréttur.
- Kerfið tekur útlínu flatarins. Gafl eða önnur undarleg lögun sker rúðurnar og milliprófílana að henni.
- Það getur gert **vegg** í staðinn, meðfram fæti lóðrétts flatar og jafnhátt honum. Veggur hér stendur alltaf lóðrétt, þannig að hallandi eða lárétt flötur getur ekki tekið hann.
- Það býr ekki til þak. Þak í BimCraft er reiknað út frá útlínu hæðar og halla, ekki út frá stökum fleti.
- Bogaður flötur er margir litlir flatir fletir: einn smellur tekur einn þeirra.
- Flötur með götum í sér: kerfið þekur ytri útlínu flatarins.

## Hvernig er mælt

- **Brúttóflatarmál** er útlína kerfisins.
- **Glerflatarmál** er rúðurnar eins og þær eru gerðar: hver rúða missir hálfa breidd milliprófíls á hlið með netmilliprófíl og heila breidd við jaðarmilliprófíl.
- Lóðrétt milliprófíll gengur í gegn frá jaðri til jaðars. Lárétt milliprófíll stoppar við hvern lóðréttan milliprófíl og við jaðarinn. Jaðarmilliprófílar liggja innan útlínunnar; þar sem tveir mætast gengur sá sem er lóðréttari í gegn. Samskeyti eru skorin rétt, ekki gerð í horn.
- **Listar** eru með lista **Gluggatjaldakerfi** með þessum tölum þegar líkanið hefur eitt.

## Í IFC-skránni

IfcCurtainWall á sinni hæð, sem samanstendur af einu IfcPlate (gluggatjaldaspjald) fyrir hverja rúðu og einu IfcMember (milliprófíl) fyrir hvern hluta milliprófíls, hvert með sína eigin lögun, efni og grunnmagnsgögn.

## Gott að vita

- Hvaða stærð sem er er gerð eins og þú biður um. Aðeins útlína án flatarmáls er hafnað, því þá er ekkert að gera.
- Kerfi sem er teiknað eins og veggur heldur hæðinni sem það var teiknað með. Ef þú færir hæð síðar skaltu stilla hana aftur í Eiginleikum.
- Færitólið færir ekki gluggatjaldakerfi enn. Eyddu því og teiknaðu aftur, eða breyttu netinu á staðnum.
- {{ui:Afturkalla}} tekur til baka hvert skref: allt kerfið, eina netbreytingu, eina milliprófílsbreytingu.
