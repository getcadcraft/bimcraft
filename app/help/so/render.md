---
title: Samee sawir moodelka
summary: Samee sawir maalinta ah oo ka mid ah muuqaalka 3D: samada, qorrax meeshii latitude-ka goobtu ka dhigayso, hooska jilicsan, daaqadaha muraayadda; WebGPU-ga, path traced kaarka garaafyada oo leh samooyin, kamarad, isku-darka iftiinka, grading, hoos iyo safka rendarka.
keywords: render, preset, presets, scene preset, gudaha, dibadda, muuqaalka goynta, habeen, hal riix, rendering, path tracing, path traced, ray tracing, global illumination, reflections, refraction, tayo sare, sawir, photo, photoreal, realistic, picture, image, png, still, sky, sun, daylight, shadows, soft shadows, ambient occlusion, glass, windows, metal, materials, exposure, brightness, overcast, dusk, studio, presentation, visualization, webgpu, denoise, physical sky, hdri, ies, depth of field, panorama, white balance, light mixing, render elements, exr, 16-bit png, fog, caustics, render queue
from: beb74cc7
---

{{ui:Render}} toolbar-ka ku jira wuxuu sameeyaa sawir muuqaalka 3D ah oo u eg maalinta: samada, qorrax meeshii latitude-ka goobtu ka dhigayso, hooska jilicsan, iftiin ka yimaada samada oo dhan oo xoogsada geeska, iyo midab u eg muraayad ama bir. Moodelka iyo faylka lama beddelo.

## Sawirka muuqaalka

1. Hagaaji muuqaalka 3D sida aad rabto sawirka: wareeji iyo zoom, qari dabaqyada ama walxaha aadan rabin inay muuqdaan, oo dooro [goyn](topic:section-plane) haddii sawirku u baahan yahay goyn.
2. Guji {{ui:Render}} toolbar-ka.
3. Dooro {{ui:Scene}} haddii kan la riixay uusan ahayn kan aad rabto (eeg [Scene presets](topic:render#scene-presets-a-good-picture-in-one-click)), dooro {{ui:Size}}, kadibna guji {{ui:Render}} wada-hadalka.

   Sawirku wuu buuxmaa intuu sameynayo oo wuu nadiifaa tallaabo kasta marka ay dhammaato. {{ui:Stop}} (ama {{key:Esc}}) wuu joojiyaa hore, wuxuuna ilaaliyaa sawirka ilaa hadda.

4. Guji {{ui:Save}} si aad PNG ugu soo dejiso, ama {{ui:Save as}} qaab kale (eeg [Sawirka kaydi](topic:render#save-the-picture)). Waxa loo magac-daraa sida faylka moodelka.

:::tip
Bilow {{ui:Draft}} oo ku jira {{ui:The view's size}} si aad u hubiso kameradda, kadibna samee {{ui:Good}} ama {{ui:Best}} cabbir weyn oo sawirka dhammaadka ah.
:::

## Scene presets: sawir fiican hal guji

Qaybta sare ee wada-hadalka waxaa ku jira afar badhan oo {{ui:Scene}}. Mid kasta wuxuu dejiyaa samada, iftiinka, dhulka, khadadka geesaha, tayada iyo qorrax hal guji oo keliya, sidaas darteed ma jirto wax lagu baro sawirka ugu horreeya. Guji mid, kadibna {{ui:Render}}.

| Scene | Waxa uu dejiyo | Waxa loo isticmaalo |
|---|---|---|
| {{ui:Exterior}} | Samada oo cad, qorraxda moodelka, dhulka oo furan | Dhismaha dibadda |
| {{ui:Interior}} | Samada daruur (iftiin siman, midhaha qorraxda ma jiraan), nus istobbis oo iftiin badan | Muuqaal ka yimaada qol |
| {{ui:Section view}} | Studio cad, dhul ma jiro, khadadka geesaha ee rendarka degdega ah | Moodel ay goyn gooyso |
| {{ui:Night}} | Qorraxdu way dhacday (habeen dhexe xilliga jiilaalka nuska dunida ee goobta), iftiin nus istobbis oo badan | Nalalka oo moodelka iftiimiya. Nal la'aan sawirku waa mugdi |

- {{ui:Pick for this view}} wuu kuu doortaa: {{ui:Section view}} marka goyn la shido, {{ui:Interior}} marka kamaraddu moodelka gudihiisa ku jirto, haddii kale {{ui:Exterior}}. Markii ugu horreysay ee aad furto wada-hadalka, si toos ah ayuu kaas ku bilaabmaa.
- Dejinta oo dhan ayaa hoosta ku jirta waana la beddeli karaa. Markaad mid beddesho, scene-ka la dejiyey ma riixna, sariirta hoose waxay sheegaysaa in dejintu tahay tiinkaaga. Mar kale guji scene-ka si qiimayaasha u soo celiso.
- Scene ma taabto injinka, habka, cabbirka, agabka, kameradda ama nalalka.

:::note
Scene-yadu waxay siiyaan qiimayaal isku mid ah ModelCraft iyo BimCraft. Sida sawirka dhammaadka u muuqdo waxay ku xirantahay moodelkaaga iyo kaarka garaafyadaada.
:::

## Waxa sawirka ku muuqda

Waxa muuqaalka 3D ku muuqda oo adag: walxaha qarsan iyo kuwa hufan ayaa laga reebay; dabaqyada qarsan iyo moodelada qarsan ayaa laga reebay; qolalku waxay muuqdaan kaliya marka {{ui:Spaces}} shidan tahay. Goyn ama sanduuq goyn ayaa sawirka goynaya sida muuqaalka uu goynayo. Walxuhu midabkooda u muuqdaan: midabka ku salaysan sifada (tab-ka {{ui:Color}}) lama isticmaalo.

## Dejinta

| Dejin | Waxa uu sameeyo |
|---|---|
| {{ui:Size}} | Cabbirka muuqaalka, laba jeer cabbirka muuqaalka, Full HD, 4K ama labajibbaaran |
| {{ui:Mode}} | {{ui:Degdeg}}, ama {{ui:Tayo sare (path traced)}} (hoos) oo leh {{ui:Time limit}} |
| {{ui:Quality}} | Imisa marxaladood (ama tayo sare, samples) ayaa celcelis la qaadaa: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Marxaladaha badan waxay siiyaan hooska iyo xuduudaha jilicsan, laakiin way qaadataan wakhti badan |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} ama {{ui:White studio}} (background cad oo fudud) |
| {{ui:Sun}} | 21-ka June, saacadda 15:00, latitude-ka faylku siiyo goobtiisa (IfcSite), oo loo rogay waqooyiga dhabta ah ee moodelka. Calaamadi {{ui:Use another date and time for this picture}} waqti kale |
| {{ui:Brightness}} | Iftiin badan ama madow badan, istobbis (stops) ahaan |
| {{ui:Ground under the model}} | Dhul ku yaal meesha ugu hoose ee moodelka, kaas oo qaata hooska oo ku dhammaada xadka dhulka |
| {{ui:Draw edges}} | Geesaha walxaha ayuu khad khafiif ah ku sawiraa sawirka dushiisa |

Markii qorraxdu hoos uga dhacdo xadka dhulka waqtiga la doortay, waa habeen: samada way madowdaa oo nalalka moodelka ayaa iftiimiya.

## Nalalka

Dhamaan qalabka iftiinka ee moodelka waa nal sawirka gudihiisa: qalabka ku jira faylka IFC (IfcLightFixture, ama element loo calaamadiyay qalab iftiin), oo ay ku jiraan kuwa aad ka soo dhigtay maktabadda. Mid kasta wuxuu iftiin ka siiyaa hoos ka dhow qalabka. Marka faylku siiyo wattage-ka qalabka, iftiinkiisu wuxuu ka raacaa; haddii kale waa 800 lumens, cadaan diirran.

Dialog-ka wuxuu nalalka hoos ku liistaa {{ui:Lamps}}: ka saar mid si aad u demiso, ama ku qor iftiinkiisa lumens. Isbeddelladan waxay ku kaydsamaan IFC-ga (property set-ka `CadCraft_Light` ee qalabka, halkaas oo aad ku beddeli karto Properties), {{key:Ctrl+Z}} ayaa dib u celiya.

Marka faylku aan waxba sheegin meesha goobtu tahay, qorraxda waxaa lagu dhigaa 40° waqooyi, wadahadalkuna wuu sheegaa. Waqtigu waa saacadda goobta, oo lagu xisaabinayo longitude-kiisa, sidaas darteed hal saac ayaa khaldan karta meelaha saacadaha kala duwan lagu dejiyo.

Dejimahan waxay ku kaydsamaan browser-kan sawirka xiga. Ma kaydsana faylka IFC.

## Muraayadda iyo agabyada kale

Hoos {{ui:Materials}}, midab kasta oo shaashadda ku jira wuxuu leeyahay muuqaal: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} ama {{ui:Frosted glass}}. Midabyada faylka IFC ka dhigaya kuwo muuqda (tusaale, daaqadaha muraayadda) waxay ka bilaabmaan {{ui:Glass}}.

:::note
Habka {{ui:Degdeg}}, muraayadda iyo biraha waxay muujiyaan samada, ma aha qaybta kale ee moodelka, iftiinkuna ma gudbo muraayadda. Habka {{ui:Tayo sare (path traced)}} ee hoose labadaba wuu sameeyaa.
:::

## Tayo sare

Dooro {{ui:Mode}} › {{ui:Tayo sare (path traced)}} sawir raacaa iftiinka sida kamaraddu u aragto:

- iftiinku wuxuu ka dhabbaqaa dusha u dhexeeya, sidaas darteed qol iftiin ka yimaada daaqad ama nal ayaa wareegga oo dhan lagu iftiimiyaa, midabkuna wuu u gudbaa jaarrada;
- muraayaddu waa muraayad run ah: iftiinku wuu foorsadaa, oo wuxuu muujiyaa qaybta kale ee moodelka;
- biraha iyo dusha dhalaalaysa waxay muujiyaan qaybta kale ee moodelka;
- panelada iftiinka waxay u iftiimaan sida panel, hooska jilicsan.

Waa aad uga gaabisa {{ui:Degdeg}}: marxaladda kasta waxay mar kale raacaa iftiinka pixel kasta. Sawirku wuxuu ku bilaabmaa dhibco-dhibco oo wuu cadaadaa markii samples-ku isku kordhaan, sidaas darteed bilow cabbir yar ({{ui:Cabbirka muuqaalka}}, {{ui:Draft}}) oo dooro {{ui:Time limit}}: markii ay dhammaato, sawirka hadda jira ayaa la ilaaliyaa. {{ui:Stop}} ayaa sidoo kale ilaaliya. Marxaladda koowaad waxay sugaysaa intii browser-ku diyaarinayo path tracer-ka.

Haddii browser-ku leeyahay WebGPU, path tracer-ku waa kan CadCraft u gaar ah oo kaarka garaafyada ku shaqeeya; khadka hoose ee sawirka ayaa sheegta. Markii {{ui:Stop}} ama xadka waqtiga la dhammeeyo, {{ui:Resume}} wuxuu sii wadaa isla sawirkaas ilaa uu helo samples-kiisa oo dhan; beddelka dejin ama riixida mar kale {{ui:Render}} wuxuu bilaabaa mar kale. Haddii WebGPU aan jirin, sawirka path traced waxaa lagu sameeyaa WebGL (khadku wuu sheegaa), {{ui:Resume}} ma muuqdo.

:::linux
Firefox iyo inta badan Chrome ee Linux weli ma lahan WebGPU, sidaas darteed tayo sare halkaas WebGL ayuu isticmaalaa.
:::

Habkan geesaha lama sawiro, tusaha ayaa muujiya midabka iyo roughness-ka, laakiin ma muujiyo bumps; goynta waxaa lagu sameeyaa moodelka ka hor inta sawirku bilaabmo.

{{ui:Denoise (clears the grain left after the samples)}} waa shidan tahay default: markii sawirku dhammaado ama la joojiyo, dhibcaha hadhay waxaa nadiifiya shabakad neural ah oo loo sameeyay (Intel Open Image Denoise, shabakaddii la daabacay, oo lagu shaqeeyo kombiyuutarkaaga: kaarka garaafyada, haddii kale processor-ka). {{ui:Muuji}} › {{ui:The picture before denoising}} wuxuu muujiyaa sida loo rendaray.

## Samooyinka hawada iyo profile-yada iftiinka kaarka garaafyada

WebGPU-ga, tayo sare waxay leedahay laba samo oo dheeraad ah:

- {{ui:Physical sky}} wuxuu iftiinka maalinta ka xisaabiyaa dhererka qorraxda: buluug qoto dheer madaxa kor, bar cad horizon-ka, iyo qorrax u kululeysa oo yaraysa markay hoos u dhacdo. {{ui:Haze}} wuxuu ka dhex maraa maalin aad u cad (2) ilaa mid hoos u ceeryaan (10).
- {{ui:Sky picture (HDRI)}} wuxuu nalalka moodelka ku iftiimiyaa sawir panorama oo goob dhab ah. {{ui:Choose a picture…}} wuxuu qaataa fayl equirectangular `.hdr` ama `.exr`; {{ui:Wareeji}} wuxuu moodelka ku wareejiyaa, {{ui:Iftiinka sawirka}} wuxuu ka dhigaa mid iftiin badan ama madow badan. Sawirku wuxuu leeyahay qorraxdiisa, sidaas darteed qorraxda moodelka lama daro. Waxay ku kaydsantahay oo keliya inta bogga furan; markii dib loo furo, mar kale dooro.

Nal kasta oo ku jira liiska {{ui:Lamps}} wuxuu qaadan karaa profile iftiin oo soo saaraha: {{ui:Profiilka IES…}} wuxuu akhriyaa fayl IES (LM-63), nalkana iftiinkiisu wuxuu u tuurayaa sida qalabkaas u sameeyo (downlight dhuuban, wall washer). Nal kasta oo magacaas leh ayaa isticmaala, nalkuna wuxuu hayaa iftiinkiisa. Guji magaca profile-ka si aad u joojiso isticmaalka.

Daaqadaha muraayad cad ayaa caawiya in iftiinka samada uu galo qolka.

Habka {{ui:Degdeg}} iyo WebGL path tracer-ku waxay muujiyaan {{ui:Physical sky}} iyo {{ui:Sky picture (HDRI)}} sidii samo cad, waxayna iska indha tiraan profile-yada iftiinka.

## Kameradda

{{ui:Camera}} wuxuu sawirka u diyaariyaa sida sawir sawir ah:

- {{ui:Exposure}}: ku hay {{ui:Jiifka iftiinka}}, ama dooro {{ui:Dejinta kameradda}} oo deji {{ui:Furka (f-stop)}}, {{ui:Xawaaraha shutter-ka}} iyo {{ui:ISO}} sida kamarad: EV ee ku xiga waa exposure value-ka caadiga ah. f/16 ee 1/100 s iyo ISO 100 waxay la mid tahay maalin qorrax leh; goob mugdi ah waxay rabtaa aperture ballaaran, shutter gaabis ah ama ISO sare. Tani qaab kasta way shaqeeyaa.
- {{ui:Qoto-dheerta muuqaalka}} wuxuu dhigaa wax ka dhow ama ka fog {{ui:Masaafada diiradda (m)}} oo ku dhigaa sida lens-ka f-stop-kaas ah; (ka tag madhan si aad ugu diiradayso waxa dhexe ee muuqaalka ku jira). {{ui:Qaabka furka}} wuxuu iftiinka aan diirada lahayn siinayaa qaab wareeg ama qaab fiino leh.
- {{ui:Muuqaal laba-barood ah (khadadka toosan ayaa toosan ku sii jira)}} wuxuu kameradda sinaysiiyaa oo sawirka wareejiyaa, sida lens-ka tilt-shift ee naqshadaha, si darbiyadu u foororin markaad madaxa kor u qaaddo ama hoos u eegto dhismaha.
- {{ui:Isku-dheelitirka cadaanka}} wuxuu go'aaminayaa midabka iftiinka ee cad u muuqda: hoose (tusaale 3000 K) nalalka diirran, sare hooska iyo maalmaha daruuraha.
- {{ui:Mashruuca}}: {{ui:360° panorama}} wuxuu sameeyaa sawir 2:1 ah oo ah wax kasta oo kamarad ku wareegsan, oo loogu talagalay muuqaal-akhristayaasha panorama; {{ui:Panorama stereo 360°}} wuxuu isku dhejiyaa panorama bidix iyo midig oo loogu talagalay madax-dhegta; {{ui:Kuubka khariidadda (6 wejiyo)}} wuxuu sameeyaa lix muuqaal labajibbaaran oo grid 3 × 2 ah. Ballaadhka waxa uu ka yimaadaa {{ui:Size}}.

Mashruuca, qoto-dheerta muuqaalka, muuqaal laba-barood ah iyo isku-dheelitirka cadaanka waxay u baahan yihiin path tracer-ka kaarka garaafyada (WebGPU), sidaas darteed waxay muuqdaan kaliya {{ui:Tayo sare (path traced)}}.

## Sawirka dhammaystir

{{ui:Sawir}} wuxuu sawirka tayo sare u qiimeeyaa sida sawir, oo dejin kasta sawirka dhammaadka ah isla markiiba wuu beddelaa, iyada oo aan mar kale rendarin:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (sida hore), {{ui:AgX}} (jilicsan, midabka wuu ilaaliyaa iftiin aad u sarreeya), {{ui:Filmic}} (qalooc film oo jilicsan) ama {{ui:Standard}} (fudud, iftiinka aad u sarreeya wuxuu noqdaa cad).
- {{ui:Contrast}} iyo {{ui:Highlight compression}} (dib u soo celinaya faahfaahinta qaybaha aad u iftiinka badan).
- {{ui:Bloom}} (wehel jilicsan oo ku wareegsan nalalka iftiinka badan), {{ui:Glare}} oo leh {{ui:Glare streaks}} (xariiqyada xiddigta ee barta ugu iftiinka badan) iyo {{ui:Vignette}} (geesaha madow).
- {{ui:Colour table (.cube)…}} wuxuu ku dabaqaa grade midab oo ka yimid fayl `.cube`, oo leh {{ui:Colour table strength}}; sida sawirka samada, waxay ku kaydsantahay oo keliya inta bogga furan.

## Sawirka kaydi

{{ui:Save as}} oo ku xiga {{ui:Save}} wuxuu doortaa faylka: {{ui:PNG}}, {{ui:JPEG}} ama {{ui:WebP}} wadaagid ahaan (JPEG iyo WebP kaliya meesha browser-ku qori karo), iyo ka dib rendar tayo sare oo kaarka garaafyada ku jira, sidoo kale:

- {{ui:PNG, 16 bits}}: sawirka grade-ka leh oo leh tallaabooyin khafiif ah oo midabka ah, loogu talagalay daabacaadda ama wax-ka-beddelka dambe.
- {{ui:EXR, every layer (32-bit float)}}: sawirka sida la rendaray (iftiin khadka ah, grade la'aan) oo leh render element kasta iyo koox iftiin kasta sidii layer gaar ah, loogu talagalay barnaamijyada compositing-ka.
- {{ui:Render file (.ccrender, to grade again later)}}: wax kasta oo wadahadalku u baahan yahay si dib loo isku dhejiyo oo loo grade-ayo sawirka. {{ui:Open a render file…}} wuu soo celiyaa, isku-darkiisa iyo gradekiisa, iyada oo aan dib loo rendarin.

## Isku-dar iftiinka rendar ka dib

Shid {{ui:Light mixing (change each light's colour and brightness after the render)}} ka hor intaadan riixin {{ui:Render}}. Sawirka markii uu dhammaado (ama la joojiyo), {{ui:Isku qas sawirka}} wuxuu liistaa iftiinkiisa kooxo ahaan: samada, qorraxda, iyo nalalka magacooda (nal kasta oo magac isku mid leh waa hal koox). Koox kasta dami, midab sii, ama ka dhig mid iftiin badan ama madow badan, sawirkuna isla markiiba wuu beddelaa, iyada oo aan dib loo rendarin. {{ui:Kaydi isku-darka}} wuxuu ilaaliyaa isku-darka magac hoose si mar dambe dib loo doorto; {{ui:Sida la rendaray}} wuxuu dib ugu celiyaa sawirkii la sameeyay. {{ui:Save}} wuxuu kaydiyaa sawirka la isku daray.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} wuxuu qaybaha sawirka sidoo kale ilaaliyaa. {{ui:Muuji}} wuxuu beddelaa muuqaalka mid ka mid ah: midabka dusha (albedo), normals, depth, diffuse, specular iyo iftiinka gudbaya (mid toosan iyo mid dadban midkiiba), wixii iftiin ka soo baxa iyo samada, iyo midab kasta oo walax kasta ama agab kasta si loo sameeyo masks.

Labadaba layers dheeraad ah ayay kaarka garaafyada ku hayaan. Cabbirrada waaweyn kaarka garaafyadu waxa laga yaabaa inaysan lahayn meel; wada-hadalku wuu sheegaa, cabbir yar ayaa shaqeysa.

## Hoos, qiiq, dhawaaq iyo caustics

Kuwan waxay ku jiraan {{ui:Hoos, qiiq iyo dhawaaq}} waxayna shaqeeyaan {{ui:Tayo sare (path traced)}} kaarka garaafyada; injinada kale ayaa ka reebaya.

- {{ui:Hoos iyo uumi}} wuxuu buuxiyaa hawada ilaa dhererka mid oo ah uumi ay qorraxda, samada iyo nalalku iftiimiyaan. {{ui:How far you can see, in meters}} wuxuu dejiyaa qaro-dhumuc ahaan (qiyaastii 100 m waa uumi khafiif ah, 20 m waa hoos qaro weyn), {{ui:Fog height above the ground, in meters}} waa meesha ay ku dhammaanayso, {{ui:Light shafts}} waa intee ka iftiimaa uumida xagga iftiinka. Iftiinka qorraxda wuxuu ka baxaa sare hoosta, sidaas darteed meelaha qorraxdu ka soo gasho daaqad ama u dhexeyso dhismayaasha waxaad u aragtaa sida xariiqyo iftiin.
- {{ui:Smoke or cloud}} wuxuu ku daraa hal mugga qiiq ama daruur oo lagu iftiimiyo sida hooska. {{ui:Nooca}} waa {{ui:Daruur}}, {{ui:Tiirka qiiqa}} ama {{ui:Faylka mugga (.ccvol)}}, oo ah qaabka grid-ka u gaarka ah CadCraft. {{ui:Faahfaahin}} iyo {{ui:Kala duwanaansho}} waxay beddelaan daruur ama tiir la sameeyey; {{ui:Cabbirka dhinaca ugu dheer, mitir ahaan (0 = cabbirka moodelka)}}, {{ui:Dhaqaaji X (m)}}, {{ui:Dhaqaaji Y (m)}}, {{ui:Dhaqaaji Z (m)}} iyo {{ui:Wareeji}} ayaa meesha dhigaya (wuxuu ka bilaabmaa dhexda moodelka); {{ui:Dhumucda}} wuxuu ka dhigaa mid qaro weyn; {{ui:Iftiin hore}} wuxuu ka dhigaa mid iftiin badan xagga iftiinka; {{ui:Midab}} wuu midabeeyaa. Faylka mugga waxaa lagu kaydiyaa oo keliya inta bogga furan, sida sawirka samada.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} ma siiyo samples dheeraad ah pixel-ada oo degay. {{ui:Dhawaaqa la aqbalo}} waa intee dhawaaq ayaa hadhaa markii pixel-ku joogsado. Khadka hoose ee sawirka wuxuu sheegaa intee sample ah pixel kasta helay celcelis ahaan.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} wuxuu raacaa iftiinka nalalka iyo qorraxda, sidaas darteed dhibcaha iftiinka ee hoos ka muuqda kubbad muraayad ama iftiinka muraayadda ee derbiga ayaa u soo baxa nadiif halkii ay ka ahaan lahaayeen dhibco-dhibco. Waa la damiyaa intii hoos, qiiq, isku-dar iftiin ama render elements ay shidan yihiin, waana loogu talagalay sawirrada, ma aha sawirrada 360°.

## Safka rendarka

{{ui:Render queue}} wada-hadalka: {{ui:Ku dar sawirkan safka}} wuxuu ilaaliyaa dejinta sawirka iyo muuqaalkiisa, {{ui:Bilow safka}} wuxuu rendarayaa waxa sugaya, mid mid, kombiyuutarkan. Xidhista bogga waxay ilaalisaa safka; fur isla moodelka si aad u sii socoto. {{ui:Save}} wuxuu soo dejiyaa mid dhammaaday; {{ui:Ka saar}} iyo {{ui:Nadiifi kuwii dhammaaday}} ayaa liiska nadiifiya. Safku wuxuu rendarayaa tayo sare, sidaas darteed wuxuu u baahan yahay WebGPU.

## Intee bay qaadataa

Sawirka kombiyuutarkaaga, kaarka garaafyadiisa ayuu sameeyaa; wax lama soo shubo. Waqtigu wuxuu kordhaa marka marxaladaha iyo pixel-ada la kordhiyo: {{ui:Ugu fiican}} wuxuu leeyahay 16 jeer marxaladaha {{ui:Qabyo}}, sawir 4K wuxuu leeyahay qiyaastii afar jeer pixel-ada Full HD. Moodelada waaweyn marxalad kasta way qaadataan.
