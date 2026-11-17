---
title: Rúmmálsvalkostir hlið við hlið
summary: Geymdu nokkra rúmmálsvalkosti í sama líkani, veldu einn sem núverandi valkost, athugaðu hann við byggingarlínur og kvaðir lóðarinnar, taktu inn rúmmál úr ModelCraft og þróaðu valinn valkost í veggi og gólf.
keywords: rúmmál, massi, valkostur, valkostir, valkostasafn, tillaga, hugmynd, hugmyndahönnun, stig 2, aðrir kostir, bera saman valkosti, núverandi valkostur, byggingarrúmmál, ýta toga, modelcraft, civilcraft, brúttóflatarmál gólfs, grunnflötur, rúmmál, þróa rúmmál, kvöð, afturdráttur, byggingarlína
from: 69a01459
---

## Hvað þú gerir

Geymdu rúmmálsvalkosti hugmyndar í einu líkani í stað sér skráa: nokkur byggingarrúmmál hlið við hlið, eitt þeirra er **núverandi valkostur** og hinir geymdir til samanburðar.

Rúmmálsvalkostur er byggingarrúmmál: útlínur hækkaðar í hæð, með ákveðnum fjölda hæða. Þetta eru ekki veggir ennþá. Þú getur geymt eins marga og þú vilt, flokkaða í **valkostasöfn** (valkostir í sama safni eru aðrir kostir hver við annan).

## Geyma valkost

1. Opnaðu {{ui:Rýmisáætlun í massa}}, skrifaðu rýmisáætlunina og útlínurnar og veldu {{ui:Finna valkosti}}.
2. Veldu einn af valkostunum sem eru taldir upp.
3. Undir {{ui:Rúmmálsvalkostir í líkaninu}} skrifaðu nafn fyrir {{ui:Valkostasafn}} ef þú vilt, og veldu {{ui:Geyma valda valkostinn}}.

Valkosturinn birtist í líkaninu sem byggingarrúmmál og í listanum, með hæðum sínum, grunnfleti, brúttóflatarmáli gólfs og rúmmáli. Ekkert er byggt. Geymdu annan á sama hátt.

Fyrsti valkostur safns er núverandi valkostur þess. Hvert skref er eitt afturkallsskref.

## Núverandi valkostur

Einn valkostur í hverju safni er sá núverandi. Það þýðir tvennt:

- **Hæðir hans telja sem gólfflatarmál byggingarinnar.** Núverandi valkostur hefur eitt rými á hæð sem ber brúttóflatarmál þeirrar hæðar, þannig að allt sem les gólfflatarmál sér þann valkost sem gildir og engan annan.
- **Hann er athugaður við lóðina.** Ef hann stendur utan lóðarmarka, yfir byggingarlínu eða á kvöð, birtist aðvörun sem nefnir hann í {{ui:Vandamál}}. Þetta er aðeins aðvörun: ekkert er hafnað. Valkostir sem eru ekki núverandi eru ekki athugaðir.

Veldu {{ui:Gera núverandi}} á öðrum valkosti til að breyta því.

{{ui:Fela valkosti sem eru ekki núverandi}} felur hina í þrívíddarsýninni. Það gildir aðeins fyrir þennan vafra og er ekki vistað í skránni.

## Rúmmál úr ModelCraft

Í ModelCraft sendir {{ui:Flytja út}} › {{ui:Rúmmál í BimCraft…}} hvern hóp eða íhlut sem einn valkost. BimCraft opnar skrána með valkostunum á listanum.

Til að flytja þá inn í líkan sem þegar er opið, veldu {{ui:Bæta rúmmálsvalkostum við úr skrá}} og veldu `.ifc`-skrána. Rúmmál hennar koma inn sem valkostir í safni, í einu afturkallsskrefi, og standa þar sem þau voru teiknuð. Skrá með byggingarrúmmálum frá CivilCraft virkar á sama hátt.

Valkostur merktur „(lögun einfölduð)“ var ekki einfaldur uppréttur kassi í ModelCraft (hann dregst inn, hallar eða er ekki lokaður). Rúmmál hans hér er útlína grunnsins hækkuð í hæð hans. Gólfflatarmál þess og rúmmál eru þau sem mæld eru úr sjálfu fastaefninu.

## Þróa valinn valkost

Veldu {{ui:Þróa}} á valkosti. Hann verður að hæðum (bætt við upp að fjölda hæða hans), veggjum umhverfis útlínur hans á hverri hæð og gólfplötu á hverri, í einu afturkallsskrefi. Valkosturinn hverfur af listanum; hinir valkostirnir eru eins og þeir voru. Þak er ekki enn til.

{{ui:Endurnefna}} breytir nafni valkosts, {{ui:Fjarlægja}} tekur hann úr líkaninu. Ef núverandi valkosti er fjarlægður verður fyrsti hinna í safninu núverandi.

## Hvað þú ættir að sjá

- Hvern geymdan valkost sem blokk í þrívíddarsýninni og röð á listanum.
- „(núverandi)“ við einn valkost í hverju safni.
- Aðvörun í {{ui:Vandamál}} þegar núverandi valkostur fer yfir lóðarmörk, byggingarlínu eða kvöð.

## Gott að vita

- Í IFC-skránni er valkostur byggingarþáttur-staðgengill (building element proxy) með eiginleikasafninu `CadCraft_SiteMass`. Valkostasafn hans, heiti valkostarins og hvort hann er núverandi eru í því safni. Hæðir núverandi valkostar eru rými af gerðinni `MassingFloor`. Önnur forrit lesa staðgengilinn sem almennan þátt.
- Að geyma valkost bætir aldrei við hæðum; að þróa hann gerir það.
- Aðstoðarmaður getur sýnt geymda valkosti, geymt einn, gert einn að núverandi, endurnefnt, þróað eða fjarlægt hann.
