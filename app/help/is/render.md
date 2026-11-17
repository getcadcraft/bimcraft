---
title: Mynda mynd af líkaninu
summary: Gerðu dagsbirtumynd af þrívíðu sýninni: himinn, sólin á breiddargráðu staðarins, mjúkir skuggar, glerglugga; með WebGPU, geislarakning á skjákortinu með himnum, myndavél, ljósblöndun, litgreiningu, þoku og myndgerðarröð.
keywords: myndgerð, forstilling, forstillingar, senuforstilling, innandyra, utandyra, sniðsýn, nótt, einn smellur, myndgerð, geislarakning, heildarlýsing, speglun, ljósbrot, hágæði, ljósmynd, ljósmyndaraunsæi, raunsætt, mynd, myndskrá, png, kyrrmynd, himinn, sól, dagsbirta, skuggar, mjúkir skuggar, umhverfisskuggun, gler, gluggar, málmur, efni, útsetning, birta, skýjað, rökkur, stúdíó, kynning, sjónmyndun, webgpu, hreinsun, eðlisfræðilegur himinn, hdri, ies, dýptarskerpa, víðmynd, hvítjöfnun, ljósblöndun, myndgerðarþættir, exr, 16 bita png, þoka, birtuhrif, myndgerðarröð
from: beb74cc7
---

{{ui:Render}} á tækjastikunni býr til mynd af 3D-sýninni sem lítur út eins og dagsbirta: himinn, sólin þar sem breiddargráða staðarins setur hana, mjúkir skuggar, ljós frá öllum himninum sem dökkvar horn, og litir sem geta litið út eins og gler eða málmur. Líkanið og skráin eru ekki breytt.

## Myndgerðu sýnina

1. Stilltu 3D-sýnina eins og þú vilt hafa myndina: snúðu og aðdráttu, fela kóta eða hluta sem þú vilt ekki, og settu [sniðlínu](topic:section-plane) ef myndin á að sýna skurð.
2. Smelltu á {{ui:Render}} á tækjastikunni.
3. Veldu {{ui:Scene}} ef sú sem er ýtt á er ekki sú sem þú vilt (sjá [Senuforstillingar](topic:render#scene-presets-a-good-picture-in-one-click)), veldu {{ui:Size}}, og smelltu svo á {{ui:Render}} í glugganum.

   Myndin fyllist meðan hún er mynduð og verður mýkri með hverri umferð. {{ui:Stop}} (eða {{key:Esc}}) lýkur henni snemma og heldur myndinni eins og hún er orðin.

4. Smelltu á {{ui:Save}} til að sækja hana sem PNG, eða {{ui:Save as}} fyrir annað snið (sjá [Vista myndina](topic:render#save-the-picture)). Hún fær nafn líkansins.

:::tip
Byrjaðu með {{ui:Draft}} í {{ui:The view's size}} til að athuga myndavélina, og myndgerðu síðan {{ui:Good}} eða {{ui:Best}} í stærri stærð fyrir lokamyndina.
:::

## Senuforstillingar: góð mynd með einum smelli

Efst í glugganum eru fjórir {{ui:Scene}}-hnappar. Hver þeirra stillir himininn, birtuna, jörðina, útlínulínurnar, gæðin og sólina með einum smelli, þannig að ekkert þarf að læra áður en fyrsta myndin er gerð. Smelltu á einn, og svo á {{ui:Render}}.

| Sena | Hvað hún stillir | Notaðu hana fyrir |
|---|---|---|
| {{ui:Exterior}} | Heiðskírt, sól líkansins sjálfs, jörð kveikt | Bygginguna utan frá |
| {{ui:Interior}} | Skýjaður himinn (jöfn birta, engir harðir sólarblettir), hálfu ljósopi bjartari | Sýn innan úr herbergi |
| {{ui:Section view}} | Hvítt stúdíó, engin jörð, útlínulínur í hraðri myndgerð | Líkan sem sniðið sker |
| {{ui:Night}} | Sólin niðri (miðnætti um miðjan vetur á þeim helmingi jarðar sem staðurinn er á), einu ljósopi bjartari | Lampa sem lýsa líkaninu. Án lampa er myndin dökk |

- {{ui:Pick for this view}} velur fyrir þig: {{ui:Section view}} þegar skurður er í gangi, {{ui:Interior}} þegar myndavélin er inni í líkaninu, annars {{ui:Exterior}}. Í fyrsta skipti sem þú opnar gluggann byrjar hann svona af sjálfu sér.
- Allar stillingar eru fyrir neðan og hægt er að breyta þeim. Þegar þú breytir einni stillingu sem senan setur, er engum hnappi ýtt inn og línan undir hnöppunum segir að stillingarnar séu þínar eigin. Smelltu á senuna aftur til að setja gildi hennar aftur.
- Sena breytir ekki vélinni, stillingu {{ui:Mode}}, stærðinni, efnunum, myndavélinni eða lömpunum.

:::note
Senurnar gefa sömu gildi í ModelCraft og BimCraft. Hvernig fullgerð myndin lítur út fer eftir líkaninu þínu og skjákortinu þínu.
:::

## Hvað sést á myndinni

Það sem 3D-sýnin sýnir sem fast efni birtist líka; faldir og gegnsæir hlutir, faldir kótar og falin líkön eru skilin út, og rými sjást aðeins þegar {{ui:Spaces}} er kveikt. Sniðplan eða sniðkassi sker myndina eins og það sker sýnina. Hlutir birtast í eigin litum: litun eftir eiginleika (flipinn {{ui:Color}}) er ekki notuð.

## Stillingar

| Stilling | Hvað hún gerir |
|---|---|
| {{ui:Size}} | Stærð sýnarinnar, tvöföld stærð sýnarinnar, Full HD, 4K eða ferningur |
| {{ui:Mode}} | {{ui:Fast}}, eða {{ui:High quality (path traced)}} (að neðan) með {{ui:Time limit}} sínum |
| {{ui:Quality}} | Hversu margar umferðir (eða, í hágæðum, sýnishorn) eru meðaltalaðar: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Fleiri umferðir gefa mýkri skugga og brúnir og taka lengri tíma |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} eða {{ui:White studio}} (einfaldur hvítur bakgrunnur) |
| {{ui:Sun}} | 21. júní kl. 15:00 á breiddargráðunni sem skráin gefur fyrir staðinn sinn (IfcSite), snúið að raunverulegu norðri líkansins. Hakaðu við {{ui:Use another date and time for this picture}} fyrir annan tíma |
| {{ui:Brightness}} | Ljósara eða dekkra, í þrepum (ljósopum) |
| {{ui:Ground under the model}} | Jörð á lægsta punkti líkansins sem tekur við skuggunum og dofnar út í sjóndeildarhringinn |
| {{ui:Draw edges}} | Teiknar brúnir hlutanna grannt yfir myndina |

Þegar sólin er undir sjóndeildarhringnum á völdum tíma er nótt: himinninn verður dökkur og lampar líkansins lýsa það.

## Lampar

Sérhver ljósabúnaður í líkaninu er lampi í myndinni: búnaðirnir í IFC-skrá (IfcLightFixture, eða hlutur sem er af gerðinni ljósabúnaður), þar með taldir þeir sem þú setur inn úr safninu. Hver lýsir niður frá rétt fyrir neðan búnaðinn. Þegar skráin gefur afl búnaðarins fylgir birta hans því; annars er hún 800 lúmen, hlýtt hvítt ljós.

Glugginn sýnir lampana undir {{ui:Lamps}}: taktu hakið af einum til að slökkva á honum, eða skrifaðu birtu hans í lúmenum. Þessar breytingar eru vistaðar í IFC-skránni (eiginleikasafninu `CadCraft_Light` á búnaðinum, þar sem þú getur líka breytt þeim í Eiginleikum), og {{key:Ctrl+Z}} afturkallar þær.

Þegar skráin segir ekkert um hvar staður hennar er, er sólin sett á 40° norður og glugginn segir það. Tíminn er staðartími staðarins, reiknaður út frá lengdargráðu hans, þannig að hann getur verið klukkustund af þar sem klukkur eru stilltar öðruvísi.

Þessar stillingar eru geymdar í þessum vafra fyrir næstu mynd. Þær eru ekki vistaðar í IFC-skránni.

## Gler og önnur efni

Undir {{ui:Materials}} hefur hver litur á skjánum útlit: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} eða {{ui:Frosted glass}}. Litir sem IFC-skráin gerir gegnsæja (til dæmis gler í gluggum) byrja sem {{ui:Glass}}.

:::note
Í {{ui:Fast}}-stillingu endurkasta gler og málmur himninum, ekki restinni af líkaninu, og ljós brotnar ekki í gegnum gler. {{ui:High quality (path traced)}}-stillingin hér að neðan gerir bæði.
:::

## Hágæði

Veldu {{ui:Mode}} › {{ui:High quality (path traced)}} fyrir mynd sem fylgir ljósinu eins og myndavél sér það:

- ljós endurkastast milli yfirborða, þannig að herbergi sem er lýst í gegnum glugga, eða af lampa, er lýst allt í kring og litir lekja yfir á nágrannana;
- gler er alvöru gler: ljós brotnar í gegnum það og það endurspeglar líkanið;
- málmur og fágaðir fletir endurspegla restina af líkaninu;
- ljósplötur lýsa eins og plötur, með mjúkum skuggum.

Hún er miklu hægari en {{ui:Fast}}: hver umferð rekur ljós fyrir hvern pixla aftur. Myndin byrjar kornótt og hreinsast þegar sýnishornin hlaðast saman, þannig að byrjaðu smátt ({{ui:The view's size}}, {{ui:Draft}}) og veldu {{ui:Time limit}}: þegar hann rennur út er myndin sem komin er geymd. {{ui:Stop}} geymir hana líka. Fyrsta umferðin bíður meðan vafrinn býr geislarakningarvélina undir.

Þar sem vafrinn hefur WebGPU er geislarakningin okkar eigin og keyrir á skjákortinu; línan undir myndinni segir það. Eftir {{ui:Stop}} eða tímamörkin heldur {{ui:Resume}} áfram með sömu mynd þar til hún hefur öll sýnin sín; að breyta stillingu eða ýta aftur á {{ui:Render}} byrjar upp á nýtt. Án WebGPU er myndin geislarökuð með WebGL í staðinn (línan segir það) og {{ui:Resume}} er ekki boðið.

:::linux
Firefox og flestar Chrome-uppsetningar á Linux hafa ekki WebGPU enn, þannig að hágæði notar WebGL þar.
:::

Í þessari stillingu eru brúnir ekki teiknaðar, áferðir sýna lit sinn og grófleika en ekki hnúða sína, og skurður er gerður á líkaninu áður en myndin hefst.

{{ui:Denoise (clears the grain left after the samples)}} er kveikt sjálfgefið: þegar myndin er tilbúin, eða stöðvuð, er kornið sem eftir er hreinsað af tauganeti sem er búið til í þessu skyni (Intel Open Image Denoise, birt net, keyrt á þinni eigin tölvu: á skjákortinu, annars á örgjörvanum). {{ui:Show}} › {{ui:The picture before denoising}} sýnir hana eins og hún var mynduð.

## Himnar og ljósprófílar á skjákortinu

Með WebGPU eru tveir himnar til viðbótar í hágæðum:

- {{ui:Physical sky}} reiknar dagsbirtuna út frá hæð sólarinnar: djúpblátt yfir höfði, fölt belti við sjóndeildarhringinn, og sól sem verður hlýrri og dekkri eftir því sem hún lækkar. {{ui:Haze}} fer frá mjög skýrum degi (2) til móðukennds (10).
- {{ui:Sky picture (HDRI)}} lýsir líkaninu með víðmynd af raunverulegum stað. {{ui:Choose a picture…}} tekur `.hdr`- eða `.exr`-skrá með jöfnu rétthyrndu varpi; {{ui:Turn}} snýr henni í kringum líkanið og {{ui:Picture brightness}} gerir hana ljósari eða dekkri. Myndin ber sína eigin sól, þannig að sól líkansins er ekki bætt við. Hún er geymd aðeins meðan síðan er opin: eftir enduropnun þarftu að velja hana aftur.

Sérhver lampi í listanum {{ui:Lamps}} getur tekið við ljósprófíl framleiðanda: {{ui:IES profile…}} les IES-skrá (LM-63) og lampinn varpar þá ljósi eins og búnaðurinn gerir (þröngur niðurljósi, veggskolari). Allir lampar með því nafni nota hana, og lampinn heldur eigin birtu. Smelltu á heiti prófílsins til að hætta að nota hann.

Gluggar úr tæru gleri hjálpa ljósi himinsins að rata inn í herbergi.

{{ui:Fast}}-stillingin og WebGL-geislarakningin sýna {{ui:Physical sky}} og {{ui:Sky picture (HDRI)}} sem heiðskíran himin og hunsa ljósprófíla.

## Myndavélin

{{ui:Camera}} setur myndina upp eins og ljósmynd:

- {{ui:Exposure}}: haltu {{ui:Brightness slider}}, eða veldu {{ui:Camera settings}} og stilltu {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} og {{ui:ISO}} eins og á myndavél; EV-gildið við hliðina er venjulegt lýsingargildi. f/16 við 1/100 s og ISO 100 passar við sólríkan dag; dekkri sena vill víðara ljósop, hægari lokunarhraða eða hærra ISO. Þetta virkar í hverri stillingu.
- {{ui:Depth of field}} þokar það sem er nær eða fjær en {{ui:Focus distance (m)}} eins og linsa með því ljósopi myndi gera (skildu hann eftir auðan til að fókusa á það sem er í miðri sýninni); {{ui:Aperture shape}} gefur ófókuseruðum birtum kringlótta eða blaðaða lögun.
- {{ui:Two-point perspective (vertical lines stay vertical)}} jafnar myndavélina og færir myndina, eins og arkitektúrlinsa með hliðrun gerir, þannig að veggir hallast ekki þegar þú lítur upp eða niður á byggingu.
- {{ui:White balance}} ákveður hvaða ljóslit sýnir sem hvítt: lægra (til dæmis 3000 K) fyrir hlýtt lampaljós, hærra fyrir skugga og skýjaða daga.
- {{ui:Projection}}: {{ui:360° panorama}} gerir 2:1 mynd af öllu í kringum myndavélina fyrir víðmyndaskoðara; {{ui:360° stereo panorama}} stafla vinstra- og hægra-auga víðmynd fyrir höfuðtól; {{ui:Cube map (6 faces)}} gerir sex ferningsmyndir í 3 × 2 neti. Breiddin kemur frá {{ui:Size}}.

Varpun, dýptarskerpa, tvípunkta sjónarhorn og hvítjöfnun þurfa geislarakningarvélina á skjákortinu (WebGPU), þannig að þær birtast aðeins í {{ui:High quality (path traced)}}.

## Ljúktu myndinni

{{ui:Picture}} litar hágæðamyndina eins og ljósmynd, og hver stjórn breytir fullgerðu myndinni í einu, án þess að mynda aftur:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (myndin eins og áður), {{ui:AgX}} (mýkri, heldur lit í mjög björtu ljósi), {{ui:Filmic}} (mild filmuferill) eða {{ui:Standard}} (látlaust; bjart ljós verður hvítt).
- {{ui:Contrast}} og {{ui:Highlight compression}} (dregur fram smáatriði í mjög björtum hlutum).
- {{ui:Bloom}} (mjúkur ljómi í kringum bjart ljós), {{ui:Glare}} með {{ui:Glare streaks}} (stjörnugeislar frá björtustu punktunum) og {{ui:Vignette}} (dekkri horn).
- {{ui:Colour table (.cube)…}} setur litgreiningu úr `.cube`-skrá, með {{ui:Colour table strength}} sínum; eins og himnamynd er hún geymd aðeins meðan síðan er opin.

## Vista myndina

{{ui:Save as}} við hliðina á {{ui:Save}} velur skrána: {{ui:PNG}}, {{ui:JPEG}} eða {{ui:WebP}} til deilingar (JPEG og WebP aðeins þar sem vafrinn getur skrifað þau), og eftir hágæða myndgerð á skjákortinu einnig:

- {{ui:PNG, 16 bits}}: litaða myndin með fínni þrepum milli tóna, fyrir prentun eða frekari vinnslu.
- {{ui:EXR, every layer (32-bit float)}}: myndin eins og hún var mynduð (línulegt ljós, engin litun) með hvern myndgerðarþátt og ljóshóp sem sitt eigið lag, fyrir samsetningarforrit.
- {{ui:Render file (.ccrender, to grade again later)}}: allt sem glugginn þarf til að blanda og lita myndina aftur. {{ui:Open a render file…}} sækir hana aftur, með blöndu sinni og litun, án þess að mynda aftur.

## Blandaðu ljósunum eftir myndgerðina

Kveiktu á {{ui:Light mixing (change each light's colour and brightness after the render)}} áður en þú ýtir á {{ui:Render}}. Þegar myndin er tilbúin (eða stöðvuð) listar {{ui:Mix the picture}} ljós hennar í hópa: himininn, sólina, og lampana eftir heiti (sérhver lampi með sama heiti er einn hópur). Slökktu á hópi, gefðu honum lit, eða gerðu hann ljósari eða dekkri, og myndin breytist í einu, án þess að mynda aftur. {{ui:Save mix}} geymir blönduna undir nafni til að velja aftur síðar; {{ui:As rendered}} fer aftur í myndina eins og hún var gerð. {{ui:Save}} vistar blönduðu myndina.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} geymir hluta myndarinnar líka. {{ui:Show}} skiptir sýninni yfir í einn þeirra: yfirborðslitina (albedó), eðlisvigrana, dýptina, dreifða, spegluðu og gegnumsendu ljósið (hvert beint og óbeint), það sem glóir og himininn, og lit á hvern hlut eða efni til að búa til grímur.

Hvort tveggja geymir auka lög á skjákortinu. Við stórar stærðir gæti skjákortið ekki haft pláss; glugginn segir það og minni stærð virkar.

## Þoka, reykur, kornun og birtuhrif

Þetta er í {{ui:Fog, smoke and noise}} og virkar í {{ui:High quality (path traced)}} á skjákortinu; hinar vélarnar sleppa því.

- {{ui:Fog and haze}} fyllir loftið upp að ákveðinni hæð með móðu sem sólin, himinninn og lampar lýsa. {{ui:How far you can see, in meters}} ákveður hversu þykk hún er (um 100 m er létt móða, 20 m þykk þoka), {{ui:Fog height above the ground, in meters}} er þar sem hún endar, og {{ui:Light shafts}} er hversu mikið móðan glóir í átt að ljósinu. Sólarljós yfirgefur þokuna efst, þannig að þar sem sól skín í gegnum glugga eða á milli bygginga sérðu hana sem ljósgeisla.
- {{ui:Smoke or cloud}} bætir einu rúmmáli af reyk eða skýi við, lýstu eins og þokan. {{ui:Kind}} er {{ui:Cloud}}, {{ui:Smoke column}} eða {{ui:From a volume file (.ccvol)}}, grindarsnið CadCraft. {{ui:Detail}} og {{ui:Variation}} breyta gerðu skýi eða súlu, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} og {{ui:Turn}} staðsetja það (það byrjar í miðju líkansins), {{ui:Thickness}} gerir það þéttara, {{ui:Forward glow}} gerir það bjartara í átt að ljósinu, og {{ui:Color}} litar það. Rúmmálsskrá er geymd aðeins meðan síðan er opin, eins og himnamynd.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} gefur ekki fleiri sýnishorn þeim pixlum sem eru orðnir stöðugir. {{ui:Noise to accept}} er hversu mikið korn er eftir þegar pixill hættir. Línan undir myndinni segir hversu mörg sýnishorn pixill fékk að meðaltali.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} rekur ljós frá lömpum og sólinni, þannig að bjarti flöturinn undir glerkúlu eða ljós spegils á vegg kemur hreinn út en ekki kornóttur. Það er slökkt meðan þoka, reykur, ljósblöndun eða myndgerðarþættir eru kveiktir, og það er gert fyrir myndir, ekki 360° myndir.

## Myndgerðarröðin

{{ui:Render queue}} í glugganum: {{ui:Add this picture to the queue}} geymir stillingar myndarinnar og sýnina, og {{ui:Start the queue}} myndgerir það sem bíður, eitt á eftir öðru, á þessari tölvu. Ef þú lokar síðunni helst röðin; opnaðu sama líkan til að halda áfram. {{ui:Save}} sækir fullgerða mynd; {{ui:Remove}} og {{ui:Clear finished}} taka til í listanum. Röðin myndgerir í hágæðum, þannig að hún þarf WebGPU.

## Hversu langan tíma þetta tekur

Myndin er gerð á þinni eigin tölvu, af skjákortinu; ekkert er hlaðið upp. Tíminn vex með umferðunum og pixlunum: {{ui:Best}} hefur 16 sinnum fleiri umferðir en {{ui:Draft}}, og 4K-mynd hefur um fjórum sinnum fleiri pixla en Full HD. Stór líkön taka lengri tíma á hverja umferð.
