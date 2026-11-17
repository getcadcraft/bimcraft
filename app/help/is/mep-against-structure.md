---
title: Athuga pípur og loftstokka gegn burðarvirki
summary: Keyrðu tilbúin árekstrasöfn pípa og loftstokka gegn veggjum, plötum, bitum og súlum, finndu lagnir sem eru nær burðarvirki en einangrun og bil leyfa, og listaðu göt sem lagnir þurfa í gegnum veggi og plötur sem CSV og BCF.
keywords: mep, árekstur, árekstrarathugun, samhæfing, burðarvirki, veggir, plötur, bitar, súlur, fjarlægð, mjúkur árekstur, einangrun, bil, gat, göt, gegnumgangur, hylsa, kjarni, byggingarvinna, bcf, csv
from: 2d597f01
---

## Það sem þú gerir

Gakktu úr skugga um að lagnirnar passi við bygginguna: hvað gengur inn í burðarvirkið, hvað liggur of nálægt því, og hvar veggi og plötur þarf að gata. Opnaðu {{ui:Árekstrarathugun}} í vinstra spjaldinu; hlutinn **Pípur og loftstokkar gegn burðarvirki** er undir venjulegu athuguninni.

## Harðir árekstrar

Settalistarnir bjóða nú einnig upp á **Pípur og loftstokka**, **Veggi**, **Plötur og þök**, **Bita**, **Súlur** og **Burðarvirki** (öll fjögur), ásamt því hve marga byggingarhluta hver heldur. Smelltu á {{ui:Pípur og loftstokkar × burðarvirki}} til að velja þann fyrsta og þann síðasta og keyra athugunina; eða veldu hvaða par sem er sjálf(ur) og smelltu á {{ui:Keyra}}. Sjá [Athuga árekstra](topic:clash-check).

## Fjarlægðir

Sumar lagnir þurfa rými í kringum sig: einangrun þeirra og pláss til að vinna eða fyrir hylsu.

1. Gefðu pípu- eða loftstokkslögn **Einangrunar**-þykkt sína í Eiginleikum (ekkert er teiknað fyrir hana).
2. Sláðu inn **Bil í kringum pípur og loftstokka** (mm) í Árekstrarathugun.
3. Smelltu á {{ui:Athuga fjarlægðir}}: hver hluti sem er nær vegg, plötu, bita eða súlu en einangrunin auk bilsins er listaður ásamt fjarlægðinni sem hann hefur og fjarlægðinni sem hann vill. Smelltu á línu til að sjá þessi tvö.

Hluti sem gengur í gegnum vegg eða plötu er gat, ekki fjarlægð, og er listaður þar í staðinn.

## Göt sem þarf

Smelltu á {{ui:Göt sem þarf}}. Þar sem miðlína lagnar fer í gegnum vegg eða plötu listar BimCraft gatið sem hún þarf: kringlótt fyrir kringlótta pípu eða loftstokk, annars rétthyrnt, jafnstórt ytri stærð lagnarinnar auk tvöfaldrar einangrunar auk tvöfalds bils, miðjað þar sem lögnin fer yfir. Smelltu á línu til að sjá lögnina og vegginn eða plötuna.

- {{ui:Göt sem CSV}}: ein lína fyrir hvert gat, með lögninni, stærð hennar og einangrun, stærð götsins, byggingarhlutann sem hún fer í gegnum og GlobalId hans, kótann, X, Y og Z miðju götsins og hve langt lögnin fer í gegnum það.
- {{ui:Göt sem BCF-atriði}}: eitt atriði fyrir hvert gat, með myndavél sem horfir á það og lögnina og hlutinn sem valdir eru, fyrir forrit burðarverkfræðingsins.

:::note
Ekkert er skorið: götin eru listi fyrir þá sem stærðarákvarða þau. Bilið ert þú sem slærð inn; engin regla segir hversu stórt gat þarf að vera. Bitar og súlur eru árekstrar, ekki göt: hvort pípa megi fara í gegnum eitt þeirra er ákvörðun burðarverkfræðingsins.
:::
