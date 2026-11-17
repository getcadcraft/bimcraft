---
title: Finndu leið þína með líkantrénu
summary: Skoðaðu IFC-líkan eftir verkefni, lóð, byggingu, hæð og rými, með hlutunum flokkuðum eftir gerð. Hakaðu í reiti til að sýna og fela, smelltu á röð til að velja, tvísmelltu til að aðdráttur.
keywords: líkantré, tré, uppbygging, rúmfræðileg uppbygging, vafri, yfirlit, leiðsögn, hæð, kóti, gólf, rými, hópur, flokkur, fela, sýna, velja, val, aðdráttur
from: 69de4ab7
---

## Hvað þú gerir

Sjáðu hvernig líkan er sett saman og komdu að hverjum hlut án þess að leita að honum í 3D: bygginguna, hæðir hennar, rýmin á hverri hæð og hlutina í þeim, flokkaða eftir gerð (veggir, hurðir, plötur…).

## Skref

1. Opnaðu IFC-líkan. {{ui:Líkantré}} vinstra megin opnast niður að hæðunum.
2. Smelltu á örina við röð til að opna hana eða loka. Hæð heldur rýmunum sínum fyrst, síðan hlutum sínum eftir gerð ásamt fjölda þeirra. Hlutur sem er gerður úr hlutum, eins og stigi, heldur hlutum sínum.
3. Afhakaðu reit raðar til að fela allt í henni; hakaðu aftur til að sýna það. Reitur með striki þýðir að aðeins hluti þess sem í henni er sést.
4. Smelltu á heiti raðar til að velja það sem hún stendur fyrir: einn hlut, eða alla hluti í hópi, hæð eða rými. {{key:Mod}}+smell bætir þeim við valið, eða tekur þá úr því.
5. Smelltu á hnappinn {{ui:i}} við hæð, rými eða byggingu til að sjá eigin eiginleika þess.
6. Tvísmelltu á röð til að aðdráttur að henni.

## Það sem þú ættir að sjá

- Þegar þú velur hlut í 3D-sýninni opnast tréð niður að honum og merkir hann.
- Falnir hlutir eru yfirstrikaðir. Reitir trésins og {{ui:Sýna}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) vinna saman: sjá [Fela, einangra og sjá í gegnum hluti](topic:hide-and-isolate).
- Hlutir sem líkanið setur ekki á neina hæð eru í hópi aftast, **Ekki í rúmfræðilegri uppbyggingu**.
- Langur hópur sýnir 200 raðir í einu; smelltu á **Sýna meira** undir honum til að sjá restina.

## Lyklar

Með fókus á heiti raðar: {{key:Up}} og {{key:Down}} færa, {{key:Right}} opnar, {{key:Left}} lokar eða fer upp, {{key:Space}} hakar reitinn, {{key:Enter}} velur.

## Algeng mistök

- **Reitur hæðar er hakaður en ekkert sést.** Listinn {{ui:Hæðir}} fyrir neðan tréð slekkur á heilum hæðum sjálfur: hakaðu þar líka.
- **Röð velur ekkert.** Sumar raðir, eins og tómt rými, hafa enga hluti sem hægt er að teikna; stöðulínan segir það.

## Næst

- [Eyddu, klipptu, afritaðu og límdu byggingarhluti](topic:edit-elements)
- [Sýndu og feldu hæðir, rými og jaðra](topic:storeys-and-spaces)
