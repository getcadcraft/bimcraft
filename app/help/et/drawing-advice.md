---
title: Joonistusnõuanne: ebatavalised mõõdud luuakse hoiatusega
summary: BimCraft teeb seda, mida palud. Tavapärasest erinev mõõt muutub hoiatuseks paneelil Probleemid; see ei takista kunagi joonistamist ega salvestamist.
keywords: nõuanne, hoiatus, probleemid, keeldutud, ei joonistu, liiga väike, liiga kitsas, miinimum, piir, trepi laius, astmik, astmepind, post, rambi, ukse suurus, ruudustiku joon, tasandi kõrgus, katuseaken, spiraaltrepp, platvormi kalle, lühike sein, ilma takistusteta
from: 20090130
---

## Mida teete

Joonista või muuda mõõtu, mis ei ole tavaline, ja vaata, kus BimCraft sellest teavitab.

## Sammud

1. Joonista või muuda elementi nii, nagu soovid, näiteks trepp, mis on 400 mm lai.
2. BimCraft teeb selle nii, nagu palusid.
3. Ava ülaribal {{ui:Probleemid}}. Jaotise **Joonistusnõuanne** all on hoiatus, mis nimetab elemendi, sinu antud mõõdu ja tavapärase vahemiku.
4. Klõpsa hoiatusel, et elemendi valida. Muuda mõõtu, kui see oli eksitus, või jäta nii: hoiatust võib kinnitada, põhjusega või ilma.

## Mis on nõuanne

Need olid varem keelatud. Nüüd luuakse need, igaüks hoiatusega:

- **Trepid**: kitsamad kui 500 mm või laiemad kui 5 m; astmed väljaspool 100–300 mm; astmepinnad väljaspool 150–600 mm.
- **Spiraaltrepid**: post väljaspool 40–400 mm; astmed, mis on käiguliinil alla 100 mm sügavad.
- **Postid**: alla 50 mm läbimõõduga või alla 300 mm kõrged.
- **Rambid**: alla 300 mm laiad.
- **Uksed ja aknad**: alla 100 mm laiad või kõrged.
- **Ruudustikujooned**: alla 100 mm pikad.
- **Seinad**: sein, mis jääb alla 50 mm pikkuseks, näiteks lõikamise tõttu.
- **Tasandid**: alla 1 m või üle 100 m kõrged (uus hoone, poolitatud tasandid, tasandi kõrgus).
- **Katuseaknad**: laiad väljaspool 600 mm kuni 12 m, esiseina väljaspool 300 mm kuni 4 m, ülekanne üle 1 m, seinad väljaspool 50–400 mm.
- **Hoone alused**: külgkalded väljaspool 1:1 kuni 10:1.

## Mis on endiselt keelatud

Ainult see, mida ei saa ehitada või leida, igaüks sõnumiga, mis ütleb, miks:

- Mõõt alla 10 mm (sein alla 1 mm): ehitada pole midagi.
- Katuseaken, mis ei ole laiem kui kaks korda selle seina paksus: selle kaks külgseina ühtiksid.
- Hoone alus, mille külgkalded on järsemad kui 0.1:1 (see on tugimüür) või lamedamad kui 100:1 (pinnamuutus läheks lõputult edasi).
- Midagi, mis ei mahu sinna, kuhu paigutasid, kontuur, mis lõikub iseendaga, või element, mis ei ole enam mudelis.

## Hea teada

- Nõuanne arvutatakse mudelist, nii et see on taas olemas, kui avad faili hiljem, ning see kaob, kui mõõt on parandatud.
- Mudelikontrollid, regulatsioonipaketid ja IDS-kontrollid loetlevad ainult seda, mida leiavad. Miski paneelil {{ui:Probleemid}} ei takista joonistamist ega salvestamist.
- Tavapärased vahemikud on üldine praktika, mitte ehitusnorm. Normi jaoks lisa lisandmoodul Ehitusnõuded ja vali oma asukoht.

## Edasi

- [Mudeli kontrollimine levinud probleemide suhtes](topic:model-checks)
- [Trepid ja piirded](topic:stairs-and-railings)
