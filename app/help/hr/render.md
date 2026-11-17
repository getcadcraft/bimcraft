---
title: Renderirajte sliku modela
summary: Napravite dnevnu sliku 3D pogleda: nebo, sunce na zemljopisnoj širini lokacije, meke sjene, staklene prozore; s WebGPU-om path tracing na grafičkoj kartici s nebom, kamerom, miješanjem svjetla, gradacijom, maglom i redom za render.
keywords: render, predložak, predlošci, predložak scene, interijer, eksterijer, pogled presjeka, noć, jedan klik, renderiranje, path tracing, path traced, ray tracing, globalno osvjetljenje, refleksije, refrakcija, visoka kvaliteta, fotografija, fotorealistično, realistično, slika, png, nebo, sunce, dnevna svjetlost, sjene, meke sjene, ambijentalna okluzija, staklo, prozori, metal, materijali, ekspozicija, svjetlina, oblačno, sumrak, studio, prezentacija, vizualizacija, webgpu, uklanjanje šuma, fizičko nebo, hdri, ies, dubinska oštrina, panorama, ravnoteža bijele, miješanje svjetla, elementi rendera, exr, 16-bitni png, magla, kaustike, red za render
from: beb74cc7
---

{{ui:Render}} na alatnoj traci pravi sliku 3D pogleda koja izgleda kao dnevna svjetlost: nebo, sunce tamo gdje ga zemljopisna širina lokacije stavlja, meke sjene, svjetlo s cijelog neba koje potamni kutove te boje koje mogu izgledati kao staklo ili metal. Model i datoteka se ne mijenjaju.

## Renderirajte pogled

1. Postavite 3D pogled kako želite da slika izgleda: rotirajte i zumirajte, sakrijte etaže ili elemente koje ne želite i postavite [presjek](topic:section-plane) ako slika treba pokazati rez.
2. Kliknite {{ui:Render}} na alatnoj traci.
3. Odaberite {{ui:Scene}} ako pritisnuta nije ona koju želite (vidi [Predlošci scene](topic:render#scene-presets-a-good-picture-in-one-click)), odaberite {{ui:Size}}, zatim kliknite {{ui:Render}} u dijaloškom okviru.

   Slika se popunjava dok se renderira i glađa je s svakim prolazom. {{ui:Stop}} (ili {{key:Esc}}) završava je ranije i zadržava dosadašnju sliku.

4. Kliknite {{ui:Save}} da je preuzmete kao PNG ili {{ui:Save as}} za drugi format (vidi [Spremanje slike](topic:render#save-the-picture)). Imenovana je po datoteci modela.

:::tip
Počnite s {{ui:Radno}} na {{ui:Veličina pogleda}} da provjerite kameru, zatim renderirajte {{ui:Dobro}} ili {{ui:Najbolje}} u većoj veličini za konačnu sliku.
:::

## Predlošci scene: dobra slika jednim klikom

Na vrhu dijaloškog okvira su četiri gumba {{ui:Scene}}. Svaki postavlja nebo, svjetlinu, tlo, rubne linije, kvalitetu i sunce jednim klikom, tako da nema što učiti prije prve slike. Kliknite jedan, zatim {{ui:Render}}.

| Scena | Što postavlja | Za što |
|---|---|---|
| {{ui:Exterior}} | Vedro nebo, sunce samog modela, tlo uključeno | Zgrada izvana |
| {{ui:Interior}} | Oblačno nebo (ravnomjerno svjetlo, bez oštrih sunčevih mrlja), za pola koraka svjetlije | Pogled iz prostorije |
| {{ui:Section view}} | Bijeli studio, bez tla, rubne linije u brzom renderu | Model prerezan presjekom |
| {{ui:Night}} | Sunce ispod horizonta (ponoć usred zime za polutku na kojoj je lokacija), za jedan korak svjetlije | Svjetiljke koje osvjetljuju model. Bez svjetiljki slika je tamna |

- {{ui:Pick for this view}} bira umjesto vas: {{ui:Section view}} kad je rez presjekom uključen, {{ui:Interior}} kad je kamera unutar modela, inače {{ui:Exterior}}. Prvi put kad otvorite dijaloški okvir počinje ovako sam od sebe.
- Svaka postavka ostaje dolje i može se promijeniti. Kad promijenite jednu, scena više nije postavljena, nijedan gumb nije pritisnut i redak ispod gumba kaže da su postavke vaše. Kliknite scenu ponovno da vrati njezine vrijednosti.
- Scena ne dira motor, način, veličinu, materijale, kameru ni svjetiljke.

:::note
Scene daju iste vrijednosti u ModelCraftu i BimCraftu. Kako konačna slika izgleda ovisi o vašem modelu i grafičkoj kartici.
:::

## Što se vidi na slici

Ono što 3D pogled prikazuje kao puno: skriveni i prozirni elementi, skrivene etaže i skriveni modeli ostaju izvan slike, a prostorije se prikazuju samo kad je {{ui:Spaces}} uključeno. Ravnina presjeka ili kutija presjeka reže sliku kao što reže pogled. Elementi se prikazuju u svojim bojama: bojanje po svojstvu (kartica {{ui:Color}}) se ne koristi.

## Postavke

| Postavka | Što radi |
|---|---|
| {{ui:Size}} | Veličina pogleda, dvostruka veličina pogleda, Full HD, 4K ili kvadrat |
| {{ui:Mode}} | {{ui:Fast}}, ili {{ui:High quality (path traced)}} (dolje) s njegovim {{ui:Time limit}} |
| {{ui:Quality}} | Koliko se prolaza (ili, u visokoj kvaliteti, uzoraka) uprosječuje: {{ui:Radno}} 16, {{ui:Dobro}} 64, {{ui:Najbolje}} 256. Više prolaza daje glađe sjene i rubove, ali traje dulje |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} ili {{ui:White studio}} (obična bijela pozadina) |
| {{ui:Sun}} | 21. lipnja u 15:00 na zemljopisnoj širini koju datoteka navodi za svoju lokaciju (IfcSite), okrenuto prema pravom sjeveru modela. Označite {{ui:Use another date and time for this picture}} za drugo vrijeme |
| {{ui:Brightness}} | Svjetlije ili tamnije, u koracima (stops) |
| {{ui:Ground under the model}} | Tlo na najnižoj točki modela, koje prima sjene i stapa se s horizontom |
| {{ui:Draw edges}} | Crta bridove elemenata tankom linijom preko slike |

Kad je sunce u zadanom vremenu ispod horizonta, nastupa noć: nebo potamni, a svjetiljke modela ga osvjetljuju.

## Svjetiljke

Svaka svjetiljka u modelu je svjetiljka na slici: rasvjetna tijela u IFC datoteci (IfcLightFixture ili element tipiziran kao rasvjetno tijelo), uključujući ona koja postavite iz knjižnice. Svaka svijetli odozdo, tik ispod tijela. Kad datoteka navodi snagu tijela, njegova svjetlina slijedi iz nje; inače je 800 lumena, topla bijela.

Dijaloški okvir navodi svjetiljke pod {{ui:Lamps}}: odznačite jednu da je isključite ili upišite njezinu svjetlinu u lumenima. Te se promjene spremaju u IFC (svojstveni skup `CadCraft_Light` tijela, gdje ih možete mijenjati i u Svojstvima), a {{key:Ctrl+Z}} ih poništava.

Kad datoteka ništa ne kaže o tome gdje je lokacija, sunce se postavlja na 40° sjeverno, a dijaloški okvir to navodi. Vrijeme je lokalno vrijeme lokacije, izračunato iz njezine geografske dužine, pa može biti za sat drugačije tamo gdje su satovi postavljeni drukčije.

Ove postavke se čuvaju u ovom pregledniku za sljedeću sliku. Ne spremaju se u IFC datoteku.

## Staklo i drugi materijali

Pod {{ui:Materials}} svaka boja na zaslonu ima izgled: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} ili {{ui:Frosted glass}}. Boje koje IFC datoteka čini prozirnima (na primjer, ostakljenje prozora) počinju kao {{ui:Glass}}.

:::note
U načinu {{ui:Fast}} staklo i metal odbijaju nebo, a ne ostatak modela, a svjetlo se ne lomi kroz staklo. Način {{ui:High quality (path traced)}} niže to radi oboje.
:::

## Visoka kvaliteta

Odaberite {{ui:Mode}} › {{ui:High quality (path traced)}} za sliku koja prati svjetlo onako kako ga kamera vidi:

- svjetlo se odbija između površina, pa je soba osvijetljena kroz prozor ili svjetiljkom osvijetljena sa svih strana, a boje prelaze na susjede;
- staklo je pravo staklo: svjetlo se lomi kroz njega i ono odražava model;
- metal i polirane površine odbijaju ostatak modela;
- svjetleće ploče svijetle kao ploče, s mekim sjenama.

Mnogo je sporije od {{ui:Fast}}: svaki prolaz ponovno prati svjetlo za svaki piksel. Slika na početku ima zrnatost i čisti se kako se uzorci zbrajaju, pa počnite malo ({{ui:Veličina pogleda}}, {{ui:Radno}}) i odaberite {{ui:Time limit}}: kad istekne, zadržava se dosadašnja slika. {{ui:Stop}} je također zadržava. Prvi prolaz čeka dok preglednik priprema path tracer.

Gdje preglednik ima WebGPU, path tracer je CadCraftov vlastiti i radi na grafičkoj kartici; redak ispod slike to kaže. Nakon {{ui:Stop}} ili isteka vremena {{ui:Resume}} nastavlja s istom slikom dok ne dobije sve uzorke; promjena postavke ili ponovni pritisak na {{ui:Render}} kreće ispočetka. Bez WebGPU-a slika se path tracea s WebGL-om (redak to kaže), a {{ui:Resume}} se ne nudi.

:::linux
Firefox i većina Chrome postavki na Linuxu još nemaju WebGPU, pa tamo visoka kvaliteta koristi WebGL.
:::

U ovom načinu rubovi se ne crtaju, teksture pokazuju svoju boju i hrapavost, ali ne i ispupčenja, a presjek se radi na modelu prije početka slike.

{{ui:Denoise (clears the grain left after the samples)}} je uključeno zadano: kad je slika gotova ili zaustavljena, preostala zrnatost se čisti neuronskom mrežom napravljenom za to (objavljena mreža Intel Open Image Denoise, pokrenuta na vašem računalu: na grafičkoj kartici, inače na procesoru). {{ui:Show}} › {{ui:The picture before denoising}} prikazuje je kako je renderirana.

## Nebo i profili svjetla na grafičkoj kartici

S WebGPU-om visoka kvaliteta ima još dva neba:

- {{ui:Physical sky}} računa dnevno svjetlo iz visine sunca: duboko plavo iznad glave, blijed pojas na horizontu i sunce koje postaje toplije i prigušenije kako se spušta. {{ui:Haze}} ide od vrlo čistog dana (2) do maglovitog (10).
- {{ui:Sky picture (HDRI)}} osvjetljuje model panoramskom slikom stvarnog mjesta. {{ui:Choose a picture…}} uzima datoteku `.hdr` ili `.exr` u equirectangular formatu; {{ui:Turn}} je okreće oko modela, a {{ui:Picture brightness}} je čini svjetlijom ili tamnijom. Slika nosi vlastito sunce, pa se sunce modela ne dodaje. Čuva se samo dok je stranica otvorena: nakon ponovnog otvaranja odaberite je ponovno.

Svaka svjetiljka na popisu {{ui:Lamps}} može primiti proizvođačev profil svjetla: {{ui:IES profile…}} čita IES (LM-63) datoteku, a svjetiljka tada baca svjetlo onako kako to tijelo radi (uska svjetiljka za usmjereno osvjetljenje, zidni perilac). Svaka svjetiljka s tim imenom koristi ga, a svjetiljka zadržava vlastitu svjetlinu. Kliknite ime profila da prestanete ga koristiti.

Prozori od čistog stakla pomažu svjetlu neba da nađe put u prostoriju.

Način {{ui:Fast}} i WebGL path tracer prikazuju {{ui:Physical sky}} i {{ui:Sky picture (HDRI)}} kao vedro nebo i ignoriraju profile svjetla.

## Kamera

{{ui:Camera}} postavlja sliku kao fotografiju:

- {{ui:Exposure}}: zadržite {{ui:Brightness slider}} ili odaberite {{ui:Camera settings}} i postavite {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} i {{ui:ISO}} kao na fotoaparatu; EV pored njih je uobičajena vrijednost ekspozicije. f/16 pri 1/100 s i ISO 100 odgovara sunčanom danu; tamnija scena traži širi otvor blende, sporiji zatvarač ili veći ISO. Ovo radi u svim načinima.
- {{ui:Depth of field}} zamućuje ono što je bliže ili dalje od {{ui:Focus distance (m)}}, kao što bi to učinio objektiv tog f-broja (ostavite prazno da se fokusira na ono što je u sredini pogleda); {{ui:Aperture shape}} daje istaknutim dijelovima izvan fokusa okrugli ili lamelasti oblik.
- {{ui:Two-point perspective (vertical lines stay vertical)}} izravnava kameru i pomiče sliku, kao što to radi arhitektonski tilt-shift objektiv, pa zidovi ne nagnu kad gledate prema gore ili dolje na zgradu.
- {{ui:White balance}} određuje koja boja svjetla se prikazuje kao bijela: niže (na primjer 3000 K) za toplo svjetlo svjetiljki, više za sjenu i oblačne dane.
- {{ui:Projection}}: {{ui:360° panorama}} pravi 2:1 sliku svega oko kamere za preglednike panorama; {{ui:360° stereo panorama}} slaže panoramu za lijevo i desno oko za naočale; {{ui:Cube map (6 faces)}} pravi šest kvadratnih pogleda u mreži 3 × 2. Širina dolazi iz {{ui:Size}}.

Projekcija, dubinska oštrina, perspektiva s dvije točke i ravnoteža bijele trebaju path tracer na grafičkoj kartici (WebGPU), pa se prikazuju samo u {{ui:High quality (path traced)}}.

## Dovršite sliku

{{ui:Picture}} gradira sliku visoke kvalitete kao fotografiju, a svaka kontrola mijenja gotovu sliku odmah, bez ponovnog renderiranja:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (slika kao prije), {{ui:AgX}} (mekše, čuva boju u vrlo jakom svjetlu), {{ui:Filmic}} (blaga filmska krivulja) ili {{ui:Standard}} (obično; jako svjetlo prelazi u bijelo).
- {{ui:Contrast}} i {{ui:Highlight compression}} (vraća detalj u vrlo svijetlim dijelovima).
- {{ui:Bloom}} (mekani sjaj oko jakog svjetla), {{ui:Glare}} s {{ui:Glare streaks}} (zrake od najsvjetlijih točaka) i {{ui:Vignette}} (tamniji kutovi).
- {{ui:Colour table (.cube)…}} primjenjuje gradaciju boja iz `.cube` datoteke, s njenom {{ui:Colour table strength}}; kao i slika neba, čuva se samo dok je stranica otvorena.

## Spremanje slike

{{ui:Save as}} pored {{ui:Save}} bira datoteku: {{ui:PNG}}, {{ui:JPEG}} ili {{ui:WebP}} za dijeljenje (JPEG i WebP samo tamo gdje preglednik to može zapisati), a nakon visoke kvalitete renderiranja na grafičkoj kartici i:

- {{ui:PNG, 16 bits}}: gradirana slika s finijim koracima između nijansi, za ispis ili daljnju obradu.
- {{ui:EXR, every layer (32-bit float)}}: slika kako je renderirana (linearno svjetlo, bez gradacije) sa svakim elementom rendera i grupom svjetla kao zasebnim slojem, za programe za kompozitiranje.
- {{ui:Render file (.ccrender, to grade again later)}}: sve što dijaloški okvir treba da ponovno miješa i gradira sliku. {{ui:Open a render file…}} je vraća, s njenim miješanjem i gradacijom, bez renderiranja.

## Miješanje svjetla nakon renderiranja

Uključite {{ui:Light mixing (change each light's colour and brightness after the render)}} prije nego pritisnete {{ui:Render}}. Kad je slika gotova (ili zaustavljena), {{ui:Mix the picture}} navodi njezina svjetla u grupama: nebo, sunce i svjetiljke prema imenu (svaka svjetiljka istog imena je jedna grupa). Isključite grupu, dajte joj boju ili je učinite svjetlijom ili tamnijom, i slika se odmah mijenja, bez ponovnog renderiranja. {{ui:Save mix}} zadržava miješanje pod imenom za kasniji odabir; {{ui:As rendered}} vraća sliku kako je nastala. {{ui:Save}} sprema miješanu sliku.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} čuva i dijelove slike. {{ui:Show}} prebacuje pogled na jedan od njih: boje površina (albedo), normale, dubinu, difuzno, zrcalno i propušteno svjetlo (svako izravno i neizravno), što svijetli i nebo te boju po objektu ili po materijalu za izradu maski.

Oba čuvaju dodatne slojeve na grafičkoj kartici. Na velikim veličinama grafička kartica možda nema mjesta; dijaloški okvir to kaže, a manja veličina radi.

## Magla, dim, šum i kaustike

Ovo se nalazi pod {{ui:Fog, smoke and noise}} i radi u {{ui:High quality (path traced)}} na grafičkoj kartici; drugi motori to izostavljaju.

- {{ui:Fog and haze}} ispunjava zrak do određene visine maglicom koju osvjetljuju sunce, nebo i svjetiljke. {{ui:How far you can see, in meters}} određuje koliko je gusta (oko 100 m je lagana izmaglica, 20 m gusta magla), {{ui:Fog height above the ground, in meters}} je gdje završava, a {{ui:Light shafts}} je koliko se magla sjaji prema svjetlu. Sunčeva svjetlost izlazi iz magle na njezinu vrhu, pa tamo gdje sunce prolazi kroz prozor ili između zgrada vidite snopove svjetla.
- {{ui:Smoke or cloud}} dodaje jedan volumen dima ili oblaka osvijetljen kao i magla. {{ui:Kind}} je {{ui:Cloud}}, {{ui:Smoke column}} ili {{ui:From a volume file (.ccvol)}}, CadCraftov vlastiti format mreže. {{ui:Detail}} i {{ui:Variation}} mijenjaju napravljeni oblak ili stup, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} i {{ui:Turn}} ga postavljaju (počinje u sredini modela), {{ui:Thickness}} ga čini gušćim, {{ui:Forward glow}} ga čini svjetlijim prema svjetlu, a {{ui:Color}} ga tonira. Volumen datoteka se čuva samo dok je stranica otvorena, kao i slika neba.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} ne daje više uzoraka pikselima koji su se smirili. {{ui:Noise to accept}} je koliko zrnatosti ostaje kad piksel stane. Redak ispod slike kaže koliko je uzoraka piksel dobio u prosjeku.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} prati svjetlo iz svjetiljki i sunca, pa svijetla mrlja ispod staklene kugle ili odsjaj zrcala na zidu izlazi čista umjesto zrnata. Isključena je dok su magla, dim, miješanje svjetla ili elementi rendera uključeni, a napravljena je za slike, a ne za 360° slike.

## Red za render

{{ui:Render queue}} u dijaloškom okviru: {{ui:Add this picture to the queue}} zadržava postavke i pogled slike, a {{ui:Start the queue}} renderira što čeka, jedno za drugim, na ovom računalu. Zatvaranje stranice čuva red; otvorite isti model da nastavite. {{ui:Save}} preuzima gotovu sliku; {{ui:Remove}} i {{ui:Clear finished}} čiste popis. Red se renderira u visokoj kvaliteti, pa treba WebGPU.

## Koliko traje

Slika se izrađuje na vašem računalu, na njegovoj grafičkoj kartici; ništa se ne učitava. Vrijeme raste s prolazima i pikselima: {{ui:Najbolje}} ima 16 puta više prolaza od {{ui:Radno}}, a 4K slika ima oko četiri puta više piksela od Full HD. Veliki modeli traju dulje po prolazu.
