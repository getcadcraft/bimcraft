---
title: Hurðir og gluggar
summary: Settu hurðir og glugga í veggi sem þú hefur teiknað: bentu á vegg, sjáðu opnunarstefnuna og fjarlægðirnar að hornunum, smelltu; opið í veggnum sker sig sjálft út.
keywords: hurð, hurðir, gluggi, gluggar, opnun, opnunarstefna, lamir, hönd, snúa við, rennihurð, vasahurð, bílskúrshurð, tvöföld hurð, hjöruglugga, einfaldur rennigluggi, tvöfaldur rennigluggi, rennigluggi, fastur gluggi, gluggakisti, yfirlitur, fellihurð, skápahurð, franskar hurðir, hlöðuhurð, hliðargler, inngangshurð, fremgluggi, útsýnisgluggi, yfirgluggi
from: 4d8ac009
---

## Hvað þú gerir

Settu hurðir og glugga í veggi sem þú hefur teiknað ([Teikna veggi](topic:draw-walls)). Bentu á vegg og hurðin eða glugginn sýnir hvar hann myndi fara, í hvaða átt hann opnast og hversu langt er í hvert horn. Smelltu, og opið sker sig út úr veggnum á grunnmyndinni og í 3D.

## Setja hurð

1. Með {{ui:Teikna}} á, smelltu á {{ui:Hurð}} (eða ýttu á {{key:D}}).
2. Veldu gerðina: **Einföld hurð með opnun**, **Tvöföld hurð með opnun**, **Rennihurð**, **Vasahurð**, **Bílskúrshurð**, **Fellihurð í skáp**, **Franskar hurðir**, **Hlöðuhurð (á veggnum)** eða **Inngangshurð með hliðargleri**. Venjuleg stærð hennar fyllir **B** og **H**; veldu aðra úr stærðalistanum við hliðina, eða skrifaðu aðrar, til dæmis `2'-8"` eða `800`. Listinn býður líka upp á hurðarætt líkansins (sjá [Ættir og stærðir þeirra](topic:families)).
3. Bentu á vegg. Tákn hurðarinnar fylgir bendlinum eftir veggnum, og fjarlægðin frá hvorum enda þeirrar hliðar veggsins birtist á grunnmyndinni.
4. Hurðin opnast til þeirrar hliðar veggsins sem bendillinn er á. Ýttu á {{key:H}} (eða smelltu á {{ui:Snúa við}}) til að setja lamirnar á hinn endann.
5. Smelltu. Hurðin er sett og tólið er áfram virkt fyrir þá næstu. Bentu á miðju veggjar og hurðin miðar sig sjálf.

Til að setja hana í nákvæma fjarlægð skaltu benda á vegginn nálægt horninu sem þú mælir frá, slá inn fjarlægðina (til dæmis `2'` eða `600`) og ýta á {{key:Enter}}. Fjarlægðin nær frá nær enda veggflatarins að brún hurðarinnar.

## Setja glugga

1. Smelltu á {{ui:Gluggi}} (eða ýttu á {{key:N}}).
2. Veldu gerðina: **Fastur gluggi**, **Einfaldur lóðréttur gluggi**, **Tvöfaldur lóðréttur gluggi**, **Hjöruglugga**, **Rennigluggi**, **Útfellanlegur gluggi**, **Útsýnisgluggi** eða **Yfirgluggi**, og **B**, **H** og **Gluggakisti** (hæð botns gluggans fyrir ofan gólfið).
3. Bentu á vegg og smelltu, eða slærð inn fjarlægð og ýtir á {{key:Enter}} eins og fyrir hurðir. Gluggi situr utan á veggnum.

## Færa, snúa við, eyða

- Með {{ui:Velja}} á dragðu hurð eða glugga eftir vegg sínum. Dragðu hann á annan vegg til að færa hann þangað.
- {{key:Delete}} eyðir völdum hurðum og gluggum; veggurinn lokast aftur.
- Að færa eða eyða vegg færir eða eyðir því sem er í honum. Þegar upphaf veggs færist eftir eigin línu halda hurðir og gluggar sínum stað.
- {{ui:Afturkalla}} og {{ui:Endurgera}} taka hverja setningu, færslu eða eyðingu til baka og áfram.

## Það sem er hafnað

- **Passar ekki í þann vegg.** Hurðin eða glugginn er breiðari en veggurinn, eða myndi standa út af endanum á honum. Prófaðu styttri breidd eða lengri vegg.
- **Hann er hærri en veggurinn.** Gluggakisti auk hæðarinnar er fyrir ofan efri brún veggsins.

## Hvað er vistað

Hver hurð eða gluggi er IFC-hurð eða IFC-gluggi með stærð sinni, opnun (til dæmis einföld opnun vinstri), gerð stærðarinnar sinnar (ein gerð fyrir hverja stærð ættar sinnar), `Pset_DoorCommon` eða `Pset_WindowCommon` og grunnmagnsgögnum, og fyllir út IFC-op í veggnum sínum. Nettó flatarmál og rúmmál hliðar veggsins sleppa opinu. Önnur BIM-forrit opna hana sem hurð í vegg.

## Gott að vita

- Grunnmyndin sýnir hurðir opnar í 90° með opnunarstefnu sinni, rennihurðir sem tvö spjöld, vasahurðir sem renna inn í vegginn, bílskúrshurðir sem brotna línu yfir höfuð og glugga með ramma- og glerlínum sínum.
- Breiddin er heildarbreidd rammans; hurðarblaðið er breiddin að frádregnum tveimur stöfum.
- Afritun teiknaðra hurða og glugga er ekki smíðuð enn: settu annan.

## Neyðarútgangsgluggi í kjallara og brunnur

Veldu **Kjallaraneyðarútgangur með brunni** í lista yfir gerðir glugga. Hann byrjar sem 36 × 48 tommu hjöruglugga með gluggakistu 36 tommur yfir hæðinni. Brunnurinn er utan á veggnum, með að minnsta kosti 48 tommu breidd án hindrana, 36 tommu útskot og botn 6 tommur undir gluggakistunni. Hann birtist sem brotnar línur á grunnmynd og sem þrjár opnar hliðar í 3D. Brunnurinn er hluti af IFC-búk gluggans, þannig að vistun, færsla, stærðarbreyting eða eyðing gluggans tekur hann með sér. Stærðarbreyting heldur að minnsta kosti 6 tommum við hvern stafn.

Þetta eru líkanssjálfgefin gildi, ekki vottun á því að uppfylla kröfur um neyðarútgang. Athugaðu raunverulega frjálsa opnun framleiðandans, staðbundnar kröfur, landhalla, frárennsli og hvaða stiga sem krafist er sérstaklega. Dýpt og hæð brunnsins eru fyrirfram stilltar mál; þau fylgja ekki landslagi.
