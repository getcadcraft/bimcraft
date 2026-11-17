---
title: Vafrar, tæki og minni
summary: Hvað er ólíkt í BimCraft milli Chrome, Edge, Firefox og Safari, á Mac, Windows og Linux, með mús, snertiborði eða snertingu, og hversu stóra skrá það ræður við.
keywords: vafri, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, spjaldtölva, sími, snerting, snertiborð, minni, stórar skrár, webgl, afköst
from: fd8acba1
---

BimCraft keyrir í nýjustu útgáfum af Chrome, Edge, Firefox og Safari, á Mac, Windows og Linux. Þrívíddarútsýnið þarf WebGL, sem allir nýir vafrar hafa. Sjá [Vafrar og tölvur](common:browsers) fyrir það sem forritin þurfa almennt.

## Opnun möppu

| Vafri | {{ui:Opna möppu}} gerir þetta | Að draga möppu inn | {{ui:Nýlegar möppur}} |
|---|---|---|---|
| Chrome, Edge | Valtæki vafrans fyrir möppur, síðan „Leyfa síðunni að skoða skrár?“: smelltu á **Skoða skrár** | Opnast án spurningar | Já, fyrir möppur sem valdar voru eða dregnar inn |
| Firefox | Valtæki kerfisins fyrir möppur | Opnast án spurningar | Nei |
| Safari | Valtæki kerfisins fyrir möppur, með **Hlaða upp** hnappi (ekkert er sent upp) | Opnast án spurningar | Nei |

Að baki: Chrome og Edge nota File System Access valtækið og geta munað möppuna. Firefox og Safari nota eldra möppuvalið, sem afhendir allar skrár í möppunni í einu og er ekki hægt að muna. Dregin mappa er lesin færslu fyrir færslu í öllum vöfrum.

:::chromium
Brave og sumir aðrir Chromium-vafrar slökkva á valtæki fyrir möppur. BimCraft notar þá valtæki kerfisins fyrir möppur í staðinn, og vafrinn gæti spurt „Hlaða upp *n* skrám á þessa síðu?“. Ekkert er sent upp; skrárnar fara aðeins í flipann. Að draga möppuna inn forðast spurninguna.
:::

## Mac, Windows og Linux

- Flýtileiðir skrifaðar {{key:Mod+S}} og {{key:Mod+Z}} eru Command á Mac og Ctrl á Windows og Linux.
- {{key:Ctrl+Shift+F}} (skjástillingar) er Control á öllum kerfum, líka á Mac.
- Skráavalmyndir og niðurhalsmappan eru kerfisins eigin.

## Mús, snertiborð og snerting

| Inntak | Þrívíddarútsýni | 2D-teikning |
|---|---|---|
| Mús | Vinstri-dráttur snýr, hægri-dráttur hliðrar, hjól aðdrátt, smellur velur | Hvaða drátt sem er hliðrar, hjól aðdrátt, tvísmellur passar |
| Snertiborð | Smelli-dráttur snýr; {{key:Shift}} eða {{key:Mod}} og dráttur hliðrar; tveggja fingra skrun eða klípa aðdrátt | Smelli-dráttur hliðrar; tveggja fingra skrun eða klípa aðdrátt |
| Snerting | Einn fingur snýr, tveir fingur klípa og hliðra, snerting velur | Einn fingur hliðrar; engin klípa-aðdráttur enn; snertu {{ui:Passa}} |

Á Mac snertiborði er hægrismellur tveggja fingra smellur (eða Control-smellur). Sjá [Lyklar, mýs og snertiborð](common:keys).

Spjaldtölvur og símar geta opnað stakar skrár og skoðað þær, en skjárinn er lítill, margir farsímavafrar geta ekki valið möppur, og stór líkön passa kannski ekki í minni þeirra. Tölva virkar best.

## Stórar skrár og minni

Allt sem BimCraft les býr í minni vafraflipans. Hversu mikið flipi getur notað ræðst af vafranum og tölvunni þinni, meira en af BimCraft.

| Skrá | Hversu mikið er lesið | Við hverju á að búast |
|---|---|---|
| IFC | Öll skráin, auk þrívíddarrúmfræðinnar sem byggð er úr henni | Það fer eftir tölvunni og vafranum; líkan af nokkrum hundruðum megabæta getur verið of mikið fyrir fartölvu. Yfir 1,5 milljón þríhyrninga eru brúnir slökktar |
| Verkefnis- og fjölskylduskrár | Um 40 KB til 100 KB, hver sem stærðin er | Jafnvel mjög stór aðalmiðlæg líkön opnast á augabragði, líka af netdrifi |
| DWG og DXF | Öll skráin | Mjög stórar teikningar sýna „This drawing is very large; only part of it is shown.“ |
| Möppur | Skráalistinn, auk nokkurra kílóbæta á líkan | Allt að 20.000 skrár |

Ef flipi klárar minnið birtir vafrinn sína eigin villusíðu („Aw, Snap!“ í Chrome, til dæmis). Lokaðu öðrum flipum, endurhlaðaðu BimCraft og reyndu aftur, eða notaðu tölvu með meira minni.

## Tengt

- [Á netinu og án nettengingar](topic:online-offline)
- [Úrræðaleit](topic:troubleshooting)
