---
title: Úrræðaleit
summary: Skilaboð sem BimCraft birtir, hvað veldur þeim og hvað á að gera, við opnun skráa, mappa, 3D-líkana, teikninga og breytinga.
keywords: vandamál, villa, virkar ekki, get ekki opnað, mistókst, ófullkomin, skemmd, hæg, hrun, auð, vantar, skilaboð, hjálp
from: 1e5a79fc
---

Skilaboð birtast í stöðustikunni neðst á sviðinu, með rauðum lit þegar eitthvað mistókst. Finndu skilaboðin hér fyrir neðan.

## Opna skrár

**"*name* is not an IFC, RVT, RFA, DWG or DXF file."**
BimCraft þekkti ekki skrána. Athugaðu endinguna og hvort skráin sé ekki tóm. PDF-skrár, myndir og skrifstofuskjöl opnast ekki.

**".ifczip is not supported yet. Save or export the model as a plain .ifc file."** (líka fyrir `.ifcxml`)
Taktu `.ifczip` upp (það er venjuleg zip-skrá sem geymir `.ifc`) eða fluttu út venjulega IFC-skrá.

**"… is a project file BimCraft does not read yet."**
Þetta er `.pln`, `.pla`, `.tpl` eða `.bpn` skrá. Fluttu út IFC eða DWG úr henni og opnaðu það: sjá [Opna .pln- og .pla-verkefnaskrár](topic:pln-project-files).

**"This IFC file could not be read."**
IFC-skráin er skemmd eða er ekki raunveruleg IFC. Opnaðu hana í textaritli: raunveruleg IFC-skrá byrjar á `ISO-10303-21;`. Fluttu hana út aftur.

**"This file is incomplete: it is … MB, but its own index points to data at least … MB in. …"**
Verkefnis- eða fjölskylduskránni var skorin af við afritun, upphleðslu eða samstillingu. Skrá í skýjadrifi sem er „aðeins á netinu" lítur eins út. Skrá sem er opnuð ein og sér opnast enn, með þessum skilaboðum efst á kortinu og „Sýni það sem náðist; afritaðu upprunalegu skrána aftur fyrir allt líkanið.": kortið sýnir aðeins þá hluta sem hvert bæti er í skránni, og telur hina upp undir **Ekki í skránni**. Gerðu skrána aðgengilega án nettengingar í skýjadrifinu, eða afritaðu upprunalegu skrána aftur, og opnaðu hana aftur. Í möppu sýnir BimCraft nýjasta fullkomna öryggisafritið í staðinn.

**"… The file's own list of contents is in the missing part too, so nothing in it can be opened."**
Skránni var skorið svo snemma að ekki einu sinni efnisyfirlitið er þar. Ekkert er hægt að endurheimta úr þessu afriti. Afritaðu upprunalegu skrána aftur og opnaðu hana aftur.

**"This compound file has no BasicFileInfo stream, so it is not a Revit file."**
Skráin er samsett skrá af annarri gerð (gömul skrifstofuskjöl nota sama ílát). Athugaðu hvort þú valdir rétta skrá.

**"Still working on the last one…"**
BimCraft er enn upptekið við fyrri skrána eða möppuna. Bíddu þar til stöðustikan er búin, og reyndu síðan aftur.

**The file chooser greys out my file.**
Skráarvalið býður aðeins `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` og `.dxf`. Dragðu aðrar skrár inn á síðuna í staðinn, og BimCraft segir þér hvort það geti lesið þær.

## Opna möppur

**"This folder has more than 20,000 files. Pick a smaller folder, such as one project."**
Þú valdir möppu of ofarlega, eins og heilt drif. Veldu eina verkefnamöppu.

**"The browser did not give access to *name*. Choose it again with Open a folder."**
Þú smelltir á {{ui:Opna aftur}} á nýlegri möppu og heimild vafrans var hafnað eða er runnin út. Veldu möppuna aftur, eða dragðu hana inn.

**The browser says it will "upload" files.**
Það er eigið orðalag vafrans fyrir það að afhenda skrár til síðunnar. BimCraft sendir þær ekki neitt. Dragðu möppuna inn til að losna við spurninguna.

**Nothing happens on a phone or tablet.**
Mörg farsímavafrar geta ekki valið möppur. Opnaðu einstakar skrár, eða notaðu tölvu.

## IFC-vélin hleðst í fyrsta skipti

**The status line stays on "Starting the IFC engine…", or shows an error such as "Failed to fetch".**
IFC-vélin náðist ekki í. Þú gætir verið án nettengingar, eða eldveggur eða efnisblokkari er að stöðva hana.

:::offline
Þú ert án nettengingar. Ef hnappurinn í forritastikunni segir ekki {{ui:Tilbúið án nettengingar}}, var IFC-vélin aldrei vistuð í þessum vafra. Tengdu aftur, opnaðu skrána aftur, og smelltu síðan á {{ui:Vista til notkunar án nettengingar}} svo hún virki án nettengingar næst. Sjá [Á netinu og án nettengingar](topic:online-offline).
:::

:::online
Endurhladdu síðuna og reyndu aftur. Á vinnunetinu skaltu biðja upplýsingatæknideildina um að leyfa `.wasm`-skrár síðunnar.
:::

## Vista til notkunar án nettengingar

**The button says {{ui:Could not save}}.**
Sumar skrár náðust ekki í, venjulega vegna þess að tengingin rofnaði. Athugaðu tenginguna og smelltu aftur á hnappinn. Eldra afrit án nettengingar er geymt þar til nýtt er fullbúið.

**The button says {{ui:Offline not available}}.**
Þessi gluggi getur ekki geymt afrit án nettengingar, til dæmis einkagluggi eða stýrð vinnutölva. Sjá [Vinna án nettengingar](common:offline).

**The button stays on "Saving *n* of *m*" for a while.**
Afrit BimCraft er um 11 MB, mest af því IFC-vélin. Hafðu flipann opinn þar til hann segir {{ui:Tilbúið án nettengingar}}.

**BimCraft opened offline but looks out of date.**
Vistaða afritið þitt er frá fyrri heimsókn. Þegar þú ert á netinu, smelltu á {{ui:Tilbúið án nettengingar}} og veldu {{ui:Vista aftur (sækja nýjustu útgáfu)}}.

## 3D-sýn

**The model is not where I expected, or it is tiny.**
Ýttu á {{key:F}} eða smelltu á {{ui:Passa}}. Passa rammar alltaf allt í líkaninu, þar með talið hæðir sem þú hefur afhakað og lausa hluti langt frá byggingunni, svo byggingin getur litið út fyrir að vera lítil. Þaðan geturðu aðdráttað.

**Clicking does not pick anything.**
Haltu músinni kyrri meðan þú smellir: lítið drag snýr um. Hlutir á afhökuðum hæðum er ekki hægt að velja. Með {{ui:Rými}} kveikt eru gegnsæ rými valin á undan því sem er inni í þeim.

**The {{ui:Edges}} button is greyed out: "Edges are off for very large models".**
Líkanið hefur fleiri en 1.5 milljón þríhyrninga. Brúnir eru látnar vera óvirkar til að spara minni.

**The tab turns slow, white, or shows the browser's crash page.**
Líkanið er of stórt fyrir minnið sem vafrinn gefur flipanum. Lokaðu öðrum flipum og endurhladdu. Fluttu út minna IFC: eitt hús, eina grein eða færri hæðir. Sjá [Vafrar, tæki og minni](topic:platforms).

**The 3D view stays blank.**
WebGL gæti verið slökkt eða lokað. Í stillingum vafrans skaltu kveikja á vélbúnaðarhröðun (eða grafíkhröðun) og endurræsa vafrann.

## Breyta IFC

**"Use a number."** Gildið er tölugildi. Skrifaðu einfalda tölu án eininga, eins og `2.4`.

**"Use a whole number."** Gildið er talning eða heiltala. Fjarlægðu aukastafina.

**"Only single-value properties can be edited."** Lista, upptalningar og magn er aðeins hægt að lesa.

**{{key:Mod+S}} opens the browser's "Save page" window.**
Engar óvistaðar breytingar eru til, svo BimCraft lét vafrann um takkann. Lokaðu glugganum.

**{{key:Mod+Z}} does nothing.**
Það virkar aðeins meðan þú átt óvistaðar breytingar og ert ekki að skrifa í reit. Eftir vistun er ekkert eftir til að afturkalla.

**The {{ui:Changes}} list still shows edits after I discarded them and opened a drawing or a folder.**
Þegar þú svarar spurningunni „Henda þeim?" með {{ui:Í lagi}} og opnar eitthvað annað en IFC-líkan, haldast gömlu breytingarnar í minni og {{ui:Vista sem IFC}} myndi samt vista þær. Til að byrja alveg upp á nýtt, opnaðu upprunalegu IFC-skrána aftur, eða endurhladdu síðuna.

**My edit changed more elements than I picked.**
Þú breyttir eiginleika í eiginleikasetti merktu „(gerð)". Gerðareiginleikar gilda um alla hluti gerðarinnar. Smelltu á {{ui:Afturkalla}}. Sjá [Breyta gerðareiginleika fyrir alla hluti gerðar](topic:type-vs-instance).

## Teikningar

**"*name* could not be read. It may be damaged, or saved in a format the reader does not handle yet (…)."**
Vistaðu teikninguna úr forritinu sem gerði hana sem eldri DWG (2018 eða eldri) eða sem DXF, og reyndu aftur.

**"This drawing has nothing to show."** or **"*name* is an empty drawing: it holds no lines, text or blocks."**
Teikningin er tóm, eða hefur aðeins hluti sem BimCraft teiknar ekki ennþá (sjá **Ekki teiknað ennþá** hægra megin).

**"This drawing is very large; only part of it is shown."**
BimCraft hætti að teikna til að halda sér viðbragðsfljótu. Slökktu á lögum sem þú þarft ekki, eða opnaðu þau blöð sem þú þarft úr minni teikningu.

**Parts of a sheet are missing.**
Tengdar teikningar gætu vantað: skoðaðu undir **Tengdar teikningar** hægra megin. Sjá [Finna tengdar teikningar og myndir](topic:dwg-linked-files). Lög gætu líka verið slökkt: smelltu á {{ui:Allt kveikt}}.

**A picture shows as an empty frame.**
Skráin fannst ekki, eða þetta er TIFF („TIFF cannot be shown in a browser"). Bættu við PNG- eða JPEG-afriti með {{ui:Bæta við myndum…}}.

**Scrolling on my trackpad zooms instead of moving the drawing.**
Svona virka teikningar í BimCraft. Smelltu og dragðu til að hliðra.

## Enn fastur

Lestu [Hvað er ekki smíðað ennþá](topic:not-built-yet): það sem þú ert að leita að er kannski ekki til í þessari útgáfu.
