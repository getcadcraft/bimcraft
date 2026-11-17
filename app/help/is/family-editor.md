---
title: Breyta fjölskyldu
summary: Breyttu breytum, formúlum og búkum fjölskyldu, sýndu hluta eftir Já / Nei breytu, skerðu og tengdu búka, gefðu henni tengipunkta fyrir pípur og loftstokka, og sjáðu niðurstöðuna teiknaða úr IFC-skránni sem hún verður vistuð í.
keywords: ritill fjölskyldu, breyta fjölskyldu, breyta, breytur, formúla, formúlur, sýnileiki, já nei, búkur, búkar, kassi, útdráttur, draga út, snúningur, braut, prófíll, bogi, boole-aðgerð, skera, sameina, mismunur, sameining, handfang, handföng, vinnuflötur, skissa, ný fjölskylda, tengipunktur, tengipunktar, tengi, píputengipunktur, loftstokkstengipunktur, frárennsli, vatnsveita
from: 1ab31c10
---

## Opna ritilinn

Opnaðu fjölskyldu (úr **Fjölskyldur** í verkefnavafranum, eða {{ui:Smíð}} › {{ui:Fjölskyldur…}}) og smelltu á {{ui:Breyta fjölskyldunni}}. Til að byrja frá engu smellirðu á {{ui:Ný fjölskylda}}: gefðu henni heiti, segðu hvað hún er (hurð, gluggi, húsgögn, innrétting eða eitthvað annað) og, fyrir hurð eða glugga, hvaða byrjunarhurð grunntákn hennar og opnunarstefna koma úr. Ritillinn opnast á fjölskyldu með nokkrum breytum og einum búk.

Ef þú breytir byrjunarfjölskyldu geymast breytingarnar aðeins í þessu líkani. Önnur líkön halda byrjunarfjölskyldunni eins og hún er.

Ekkert í líkaninu breytist fyrr en þú smellir á {{ui:Vista fjölskylduna}}. Ritillinn hefur sína eigin afturköllun og endurgerð (örvahnappana við heitið, eða {{key:Mod+Z}} og {{key:Mod+Y}}); vistun er eitt skref í afturköllun líkansins.

## Breytur

Flipinn {{ui:Breytur}} telur upp breytur fjölskyldunnar: heiti, tegund og sjálfgefið gildi. Tegundirnar eru: **Lengd** (millimetrar), **Horn** (gráður), **Tala**, **Heiltala**, **Já / Nei**, **Penni** (1–16), og þrjár sem geyma orð í stað talna: **Texti**, **Efni** (eitt af efnum verkefnisins) og **Fylling** (grunntáknfylling). Orð eru ekki notuð í formúlum; þau lita búk (**Efni** hans), fylla hluta táknsins, eða prentast sem `{Name}` inni í texta táknsins. Reiturinn **Á hvern hlut** gerir breytu að því sem hver staðsettur hlutur stillir fyrir sjálfan sig í stað stærðar sinnar.

- **Formúla** lætur breytu fylgja öðrum, til dæmis `Width / 30` eða `if(Width > 1200, 2, 1)`. Lengdir í formúlum eru millimetrar, eða skrifaðu einingu: `3'`, `6in`, `50cm`.
- Endurnefning breytu endurnefnir hana í hverri formúlu og reit sem notar hana. Breytu sem er enn í notkun er ekki hægt að fjarlægja.
- **Efni** búks tekur lit efnis verkefnisins (eða efnisbreytu), **Birt við** felur hann við grófari smáatriðastig, og **Endurtaka** býr til afrit: fjöldi (tala eða heiltölubreyta, 1 til 200) og bilið á milli þeirra í x, y og z. Endurtekinn búkur er röð af borðum, stöngum eða götum; sé hann notaður í skurði skera afritin saman.
- Hurða- eða gluggafjölskylda fær einnig tvö heiti frá vegg sínum: `WallThickness` og `Face` (1 eða −1, sú hlið sem hurðin sveiflast til).

## Búkar

Flipinn {{ui:Búkar}} telur upp búkana. Bættu við kassa, útdrætti, snúningi eða braut:

| Búkur | Það sem þú stillir |
|---|---|
| Kassi | tvö horn hans: x0 til x1, y0 til y1, z0 til z1 |
| Útdráttur | prófíl á vinnuplani (grunnmynd, framhlið eða hliðarmynd), hvar planið er og dýpt |
| Snúningur | prófíl, ás á planinu og horn allt að 360° |
| Braut | braut punkta og radíus (stöng eða handrið) |

Sérhver tala getur verið slegin tala eða tjáning með breytum. Hver búkur hefur lit og **Birt þegar**: skildu það autt til að birta hann alltaf, eða nefndu Já / Nei breytu (eða skrifaðu samanburð eins og `Shelves >= 3`) til að birta hann aðeins þá. Það er sýnileikabreyta.

### Teikna prófíl

Prófíl útdráttar eða snúnings er teiknað á vinnuplaninu undir forskoðuninni:

- Smelltu á teikniflötinn til að bæta punkti við á eftir þeim sem var valinn.
- Dragðu punkt til að færa hann. Punktar smella á rúðunet; haltu inni {{key:Shift}} til að setja þá frjálst.
- Smelltu á lítinn ferning á línustykki til að bæta punkti þar. {{key:Shift}}+smellur á hann gerir þann hluta að boga (smelltu aftur fyrir hina áttina, og síðan beint).
- Tvísmelltu á punkt til að fjarlægja hann.

Holir punktar eru stilltir með breytum: breyttu þeim í töflunni, ekki með drætti.

## Boole-aðgerðir

Flipinn {{ui:Boole-aðgerðir}} sker annan búkinn úr þeim fyrra, eða sameinar þá. Niðurstaða boole-aðgerðar má skera eða sameina aftur. Búkur sem er notaður í boole-aðgerð er aðeins teiknaður sem hluti hennar.

Þegar annar búkurinn er falinn af Já / Nei breytu sinni, helst sá fyrri eins og hann er; þegar sá fyrri er falinn, er niðurstaðan falin.

## Grunntákn

Flipinn {{ui:Grunntákn}} teiknar það sem grunnmyndin sýnir fyrir þessa fjölskyldu í stað skurðar búka hennar: línur, rétthyrninga, hringi, boga, marghyrninga og texta, á eigin ásum fjölskyldunnar. Hver hluti hefur **penna** (1–16, tjáningu eða Penni-breytu), **fyllingu** (engin, heil, skálínu, krossa, steypu, einangrun, jörð, eða Fylling-breytu), **sýnt af** tjáningu, **skurðsvið** í millimetrum yfir grunni sínum (hluti sem er teiknaður í fullri þykkt þegar skurður grunnmyndarinnar er innan hans, þunnur fyrir neðan hann, strikaður fyrir ofan hann: skápur fyrir ofan skurðinn birtist strikaður), smáatriðastig og endurtekningu. Texti getur vísað í breytur sem `{Name}`. **Grunnmyndin sýnir: Skurð búkanna** heldur grunnmyndinni í skurði búkanna á meðan táknið er áfram í fjölskyldunni. Önnur forrit lesa táknið sem fótspor fjölskyldunnar (línur og form; textinn helst í BimCraft).

## Fjölskyldur inni í

Flipinn {{ui:Fjölskyldur inni í}} setur aðra fjölskyldu inni í þessari: fót á borði, handfang á hurð. Veldu fjölskylduna, síðan hvar hún fer (x, y, z), hversu mikið hún er snúin (aðeins fjórðungssnúningar: 0, 90, 180, 270), hvenær hún er birt, og gildin sem hún fær, eitt í hverri línu eins og `Height = Height - 40`. Þegar innri fjölskyldan er vistuð er þessi teiknuð aftur; fjölskyldu sem önnur heldur utan um má ekki eyða; fjölskylda getur ekki haldið sjálfri sér, ekki einu sinni í gegnum aðra, og hreiðrun stoppar við fjögur stig.

## Virkir reitir

Virkur reitur er punktur eða brún sem þú dregur til að breyta breytu. Á flipanum {{ui:Virkir reitir}} bættu einum við, veldu ásinn sem hann dregst eftir og tölubreytuna sem hann breytir, og skrifaðu staðsetningu hans með sömu tjáningum og búkarnir. Í forskoðuninni velurðu **Virkir reitir** undir handföngunum til að draga þá. Á staðsettum hlut í grunnmyndinni (veldu hann með {{ui:Velja}}) sýna x- og y-virku reitirnir grip: dragðu einn og hluturinn tekur þá stærð sem setur reitinn þar, í gegnum allar formúlur þar á milli; ein afturköllun skilar honum aftur. Virkur reitur getur ekki breytt stýrðri breytu, Já / Nei eða orði.

Í þrívíddarsýninni sýna sömu virku reitir grip á völdum hlut, og þeir sem vísa upp og niður (ás z) birtast þar líka, sem grunnmyndin getur ekki teiknað. Veldu hlutinn, dragðu grip eftir ás hans og slepptu: hluturinn tekur þá stærð sem setur reitinn þar, sem eitt afturköllunarskref. Gripin eru falin meðan sniðkassinn er á, þar sem hann notar sömu grip.

## Tengipunktar

Fjölskyldur sem eru settar á gólf (húsgögn, innréttingar og aðrar) hafa flipann {{ui:Tengipunktar}}: punktana þar sem pípa eða loftstokkur tengist hlutnum, eins og á krana og niðurfalli vasks. Smelltu á {{ui:Bæta við tengipunkti}} og stilltu:

- **Tegund**: pípa eða loftstokkur, og **Kerfi** þess (kalt vatn, hreinlætisfrárennsli, innblástursloft…).
- **x**, **y** og **z**: hvar hann er, á ásum fjölskyldunnar. Eins og tölur búks getur hvert þeirra verið tala eða formúla af breytum, svo að tengipunkturinn færist með stærðinni.
- **Útgangsátt**: áttin sem pípa eða loftstokkur fer út um, eftir einum af ásum fjölskyldunnar (niðurfall undir vaski fer **Niður**).
- **Stærð (mm)**: nafnstærð pípunnar (DN) eða þvermál kringlótta loftstokksins.
- **Flæði**: **Inn** fyrir tengipunkt sem er fóðraður (krani), **Út** fyrir þann sem tæmir.

Forskoðunin teiknar hvern tengipunkt sem hring með ör í útgangsátt. Hurðir og gluggar hafa enga tengipunkta.

Fyrir pípulagningartæki velurðu hvaða tæki það er undir **Pípulagnatæki** (salerni, handlaug, eldhúsvaskur, sturta, þvottakar). Byrjunartækin segja það þegar.

Sérhver hlutur sem settur er úr fjölskyldunni fær tengipunkta sína sem tengi í IFC-skránni, og þeir eru búnir til aftur þegar hluturinn breytir stærð eða fjölskyldunni er vistuð. Forrit sem lesa IFC-kerfi sjá hvar hver pípa eða loftstokkur á heima.

## Forskoðunin og handföng hennar

Forskoðunin er fjölskyldan skrifuð sem IFC, með sama kóða og vistar hana í líkaninu, og teiknuð aftur. Það sem þú sérð er það sem önnur forrit fá. Undir henni stillir **Stærð sýnd** breytugildin sem forskoðunin notar.

**Handföng** eru punktar á forskoðuninni: **Stærðin** sýnir handfang fyrir Width, Depth og Height; **Valinn búkur** sýnir eitt á hverjum fleti búksins sem þú valdir. Dragðu handfang:

- á fleti sem breyta ræður, breytist stærðin sem sýnd er (formúlur fjölskyldunnar haldast);
- á fleti sem slegin tala ræður, breytist talan.

## Vistun

{{ui:Vista fjölskylduna}} yfirfer fjölskylduna, teiknar síðan hverja stærð hennar aftur og býr til alla hluti hennar aftur, sem eitt skref sem þú getur afturkallað. Ef stærð getur ekki verið teiknuð með breytingunni (til dæmis hefði búkur enga breidd í þeirri stærð), er ekkert vistað og ritillinn segir hvaða stærð.

Ef einhver annar vistaði sömu fjölskyldu meðan ritillinn þinn var opinn (í Live TeamWork-lotu, eða í öðrum glugga), hafnar {{ui:Vista fjölskylduna}} því og segir það í stað þess að skipta breytingu þeirra út fyrir þína. Lokaðu ritlinum, opnaðu fjölskylduna aftur til að sjá breytingu þeirra, og gerðu þína aftur.

:::note
Rúmfræðin er vistuð sem eigin búkar IFC: útdrættir, snúningar, sópaðar skífur og niðurstöður boole-aðgerða. Ekkert er breytt í lista yfir þríhyrninga, svo skrár haldast smáar og önnur forrit geta lesið formin sem form. Prófílar með bogum eru vistaðir með bogum í IFC4; IFC2X3 hefur engin bogastykki í prófíl, svo þar eru bogarnir vistaðir sem stuttir beinir bútar.
:::

Sjá einnig [Fjölskyldur og stærðir þeirra](topic:families).
