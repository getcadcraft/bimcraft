---
title: Renderovanje slike modela
summary: Napravi dnevnu sliku 3D pogleda: nebo, sunce na geografskoj širini tvog mesta, meke senke, staklene prozore; uz WebGPU, praćenje putanje na grafičkoj kartici sa nebom, kamerom, mešanjem svetla, gradiranjem, maglom i redom za renderovanje.
keywords: renderovanje, preset, presets, gotova scena, unutrašnjost, spoljašnost, pogled preseka, noć, jedan klik, renderovanje, praćenje putanje zraka, praćenje zraka, globalno osvetljenje, refleksije, refrakcija, visok kvalitet, fotografija, fotorealistično, realistično, slika, image, png, nepokretna slika, nebo, sunce, dnevna svetlost, senke, meke senke, ambijentalna okluzija, staklo, prozori, metal, materijali, izloženost, svetlina, oblačno, sumrak, studio, prezentacija, vizuelizacija, webgpu, uklanjanje šuma, fizičko nebo, hdri, ies, dubina oštrine, panorama, balans bele, mešanje svetla, elementi renderovanja, exr, 16-bitni png, magla, kaustika, red za renderovanje
from: beb74cc7
---

{{ui:Render}} na traci alata pravi sliku 3D pogleda koja izgleda kao dnevna svetlost: nebo, sunce tamo gde ga stavlja geografska širina mesta, meke senke, svetlo sa celog neba koje tamni uglove i boje koje mogu izgledati kao staklo ili metal. Model i datoteka se ne menjaju.

## Renderuj pogled

1. Postavi 3D pogled kako želiš da slika izgleda: orbitiraj i zumiraj, sakrij spratove ili elemente koje ne želiš, i postavi [presek](topic:section-plane) ako slika treba da pokaže presek.
2. Klikni {{ui:Render}} na traci alata.
3. Izaberi {{ui:Scene}} ako pritisnuta nije ona koju želiš (vidi [Gotove scene](topic:render#scene-presets-a-good-picture-in-one-click)), izaberi {{ui:Size}}, pa klikni {{ui:Render}} u dijalogu.

   Slika se popunjava dok se renderuje i postaje glatkija sa svakim prolazom. {{ui:Stop}} (ili {{key:Esc}}) prekida rano i zadržava sliku do tog trenutka.

4. Klikni {{ui:Save}} da je preuzmeš kao PNG, ili {{ui:Save as}} za drugi format (vidi [Čuvanje slike](topic:render#save-the-picture)). Dobija ime po datoteci modela.

:::tip
Počni sa {{ui:Draft}} na {{ui:The view's size}} da proveriš kameru, pa renderuj {{ui:Good}} ili {{ui:Best}} u većoj veličini za konačnu sliku.
:::

## Gotove scene: dobra slika jednim klikom

Na vrhu dijaloga su četiri dugmeta {{ui:Scene}}. Svako postavlja nebo, svetlinu, tlo, linije ivica, kvalitet i sunce jednim klikom, pa nema šta da se nauči pre prve slike. Klikni jedno, pa {{ui:Render}}.

| Scena | Šta postavlja | Za šta se koristi |
|---|---|---|
| {{ui:Exterior}} | Vedro nebo, sunce modela, tlo uključeno | Zgrada spolja |
| {{ui:Interior}} | Oblačno nebo (ravnomerna svetlost, bez oštrih sunčevih mrlja), pola blende svetlije | Pogled iznutra prostorije |
| {{ui:Section view}} | Bela studijska pozadina, bez tla, linije ivica u brzoj slici | Model presečen presekom |
| {{ui:Night}} | Sunce dole (ponoć sredinom zime za hemisferu na kojoj je mesto), za jednu blendu svetlije | Svetiljke koje osvetljavaju model. Bez svetiljki slika je tamna |

- {{ui:Pick for this view}} bira umesto tebe: {{ui:Section view}} kad je presek uključen, {{ui:Interior}} kad je kamera unutar modela, inače {{ui:Exterior}}. Prvi put kad otvoriš dijalog počinje ovako sam od sebe.
- Svako podešavanje ostaje ispod i može da se menja. Kad promeniš neko podešavanje, scena prestaje da bude pritisnuta i red ispod dugmadi kaže da su podešavanja tvoja. Klikni scenu ponovo da vrati njene vrednosti.
- Scena ne dira motor, režim, veličinu, materijale, kameru ni svetiljke.

:::note
Scene daju iste vrednosti u ModelCraft i BimCraft. Kako gotova slika izgleda zavisi od modela i tvoje grafičke kartice.
:::

## Šta se vidi na slici

Ono što 3D pogled prikazuje kao puno: skriveni i prozirni elementi, skriveni spratovi i skriveni modeli se izostavljaju, a prostorije se prikazuju samo kad je {{ui:Spaces}} uključeno. Ravan preseka ili kutija preseka seče sliku kao što seče pogled. Elementi se prikazuju u svojim bojama: bojenje po svojstvu (kartica {{ui:Color}}) se ne koristi.

## Podešavanja

| Podešavanje | Šta radi |
|---|---|
| {{ui:Size}} | Veličina pogleda, dvostruka veličina pogleda, Full HD, 4K ili kvadrat |
| {{ui:Mode}} | {{ui:Fast}}, ili {{ui:High quality (path traced)}} (dole) sa svojim {{ui:Time limit}} |
| {{ui:Quality}} | Koliko prolaza (ili, u visokom kvalitetu, uzoraka) se usrednjava: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Više prolaza daje glađe senke i ivice, ali traje duže |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} ili {{ui:White studio}} (obična bela pozadina) |
| {{ui:Sun}} | 21. jun u 15:00 na geografskoj širini koju datoteka navodi za njeno mesto (IfcSite), okrenuto ka pravom severu modela. Označi {{ui:Use another date and time for this picture}} za drugo vreme |
| {{ui:Brightness}} | Svetlije ili tamnije, u koracima (blendama) |
| {{ui:Ground under the model}} | Tlo na najnižoj tački modela koje prima senke i stapa se sa horizontom |
| {{ui:Draw edges}} | Crta ivice elemenata tanko preko slike |

Kad je sunce ispod horizonta u izabrano vreme, nastupa noć: nebo tamni, a svetiljke modela ga osvetljavaju.

## Svetiljke

Svaka svetiljka u modelu je lampa na slici: svetiljke u IFC datoteci (IfcLightFixture, ili element tipa svetiljke), uključujući i one koje postavljaš iz biblioteke. Svaka svetli nadole od tačke tik ispod svetiljke. Kad datoteka navodi snagu svetiljke, njena svetlina sledi iz nje; inače je 800 lumena, topla bela.

Dijalog navodi svetiljke pod {{ui:Lamps}}: isključi jednu da je ugasiš, ili upiši njenu svetlinu u lumenima. Ove promene se čuvaju u IFC-u (skup svojstava `CadCraft_Light` svetiljke, gde ih možeš menjati i u Svojstvima), a {{key:Ctrl+Z}} ih opoziva.

Kad datoteka ne kaže ništa o tome gde je mesto, sunce se postavlja na 40° severne širine i dijalog to kaže. Vreme je lokalno vreme mesta, izračunato iz njegove geografske dužine, pa može biti za sat pogrešno tamo gde su satovi podešeni drugačije.

Ova podešavanja se čuvaju u ovom pregledaču za sledeću sliku. Ne čuvaju se u IFC datoteci.

## Staklo i ostali materijali

Pod {{ui:Materials}}, svaka boja na ekranu ima izgled: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} ili {{ui:Frosted glass}}. Boje koje IFC datoteka čini prozirnim (na primer, zastakljenje prozora) počinju kao {{ui:Glass}}.

:::note
U režimu {{ui:Fast}}, staklo i metal odbijaju nebo, a ne ostatak modela, i svetlost ne prelama kroz staklo. Režim {{ui:High quality (path traced)}} dole radi oboje.
:::

## Visok kvalitet

Izaberi {{ui:Mode}} › {{ui:High quality (path traced)}} za sliku koja prati svetlost onako kako je vidi kamera:

- svetlost se odbija između površina, pa je soba osvetljena kroz prozor ili lampom osvetljena sa svih strana, a boje se prelivaju na susede;
- staklo je pravo staklo: svetlost kroz njega se prelama, a ono odražava model;
- metal i polirane površine odbijaju ostatak modela;
- svetlosni paneli osvetljavaju kao paneli, sa mekim senkama.

Mnogo je sporiji od {{ui:Fast}}: svaki prolaz ponovo prati svetlost za svaki piksel. Slika počinje zrnasta i čisti se kako se uzorci sabiraju, pa počni malo ({{ui:The view's size}}, {{ui:Draft}}) i izaberi {{ui:Time limit}}: kad istekne, zadržava se slika do tog trenutka. {{ui:Stop}} je takođe zadržava. Prvi prolaz čeka dok pregledač priprema praćenje putanje zraka.

Kad pregledač ima WebGPU, praćenje putanje zraka je CadCraftovo i radi na grafičkoj kartici; red ispod slike to kaže. Posle {{ui:Stop}} ili isteka vremena, {{ui:Resume}} nastavlja istu sliku dok ne dobije sve uzorke; promena podešavanja ili ponovni pritisak na {{ui:Render}} počinje ispočetka. Bez WebGPU slika se prati pomoću WebGL-a (red to kaže), a {{ui:Resume}} se ne nudi.

:::linux
Firefox i većina Chrome podešavanja na Linuxu još nemaju WebGPU, pa visok kvalitet tamo koristi WebGL.
:::

U ovom režimu ivice se ne crtaju, teksture pokazuju svoju boju i hrapavost, ali ne i ispupčenja, a presek se pravi na modelu pre početka slike.

{{ui:Denoise (clears the grain left after the samples)}} je uključeno podrazumevano: kad je slika gotova ili zaustavljena, zrnastost koja je ostala briše neuronska mreža napravljena za to (objavljena mreža Intel Open Image Denoise, pokrenuta na tvom računaru: na grafičkoj kartici, inače na procesoru). {{ui:Show}} › {{ui:The picture before denoising}} prikazuje je onako kako je renderovana.

## Nebo i profili svetla na grafičkoj kartici

Uz WebGPU, visok kvalitet ima još dva neba:

- {{ui:Physical sky}} računa dnevnu svetlost iz visine sunca: duboko plavo iznad glave, bleda traka pri horizontu i sunce koje postaje toplije i tamnije kako se spušta. {{ui:Haze}} ide od veoma čistog dana (2) do maglovitog (10).
- {{ui:Sky picture (HDRI)}} osvetljava model panoramskom slikom pravog mesta. {{ui:Choose a picture…}} uzima `.hdr` ili `.exr` datoteku sa ekvirektangularnom projekcijom; {{ui:Turn}} je okreće oko modela, a {{ui:Picture brightness}} je čini svetlijom ili tamnijom. Slika nosi sopstveno sunce, pa se sunce modela ne dodaje. Čuva se samo dok je stranica otvorena: posle ponovnog otvaranja izaberi je ponovo.

Svaka svetiljka na listi {{ui:Lamps}} može da dobije proizvođačev profil svetla: {{ui:IES profile…}} čita IES (LM-63) datoteku, a svetiljka tada baca svetlo onako kako to ta armatura radi (uska ugradna svetiljka, zidni osvetljivač). Svaka svetiljka sa tim nazivom koristi ga, a svetiljka zadržava svoju svetlinu. Klikni naziv profila da prestaneš da ga koristiš.

Prozori od bistrog stakla pomažu svetlu neba da nađe put u prostoriju.

Režim {{ui:Fast}} i WebGL praćenje putanje zraka prikazuju {{ui:Physical sky}} i {{ui:Sky picture (HDRI)}} kao vedro nebo i ignorišu profile svetla.

## Kamera

{{ui:Camera}} postavlja sliku kao fotografiju:

- {{ui:Exposure}}: zadrži {{ui:Brightness slider}} ili izaberi {{ui:Camera settings}} i postavi {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} i {{ui:ISO}} kao na fotoaparatu; EV pored njih je uobičajena vrednost ekspozicije. f/16 na 1/100 s i ISO 100 odgovara sunčanom danu; tamnija scena traži širu blendu, sporiji zatvarač ili veći ISO. Ovo radi u svakom režimu.
- {{ui:Depth of field}} zamućuje ono što je bliže ili dalje od {{ui:Focus distance (m)}} kao što bi to uradio objektiv te f-blende (ostavi prazno da fokus bude na onome što je u sredini pogleda); {{ui:Aperture shape}} daje rasfokusiranim odsjajima okrugao ili lamelast oblik.
- {{ui:Two-point perspective (vertical lines stay vertical)}} poravnava kameru i pomera sliku, kao što to radi arhitektonski tilt-shift objektiv, pa zidovi ne krive kad gledaš gore ili dole u zgradu.
- {{ui:White balance}} određuje koja boja svetla se prikazuje kao bela: niža (na primer 3000 K) za toplo svetlo svetiljki, viša za hlad i oblačne dane.
- {{ui:Projection}}: {{ui:360° panorama}} pravi sliku 2:1 svega oko kamere za panoramske pregledače; {{ui:360° stereo panorama}} slaže levu i desnu panoramu za naočare; {{ui:Cube map (6 faces)}} pravi šest kvadratnih pogleda u mreži 3 × 2. Širina dolazi iz {{ui:Size}}.

Projekcija, dubina oštrine, perspektiva sa dve tačke i balans bele zahtevaju praćenje putanje zraka na grafičkoj kartici (WebGPU), pa se prikazuju samo u {{ui:High quality (path traced)}}.

## Završi sliku

{{ui:Picture}} gradira sliku visokog kvaliteta kao fotografiju, a svaka kontrola menja gotovu sliku odmah, bez ponovnog renderovanja:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (slika kao ranije), {{ui:AgX}} (mekše, čuva boju u veoma jakom svetlu), {{ui:Filmic}} (blaga filmska kriva) ili {{ui:Standard}} (prosto, jako svetlo se seče na belo).
- {{ui:Contrast}} i {{ui:Highlight compression}} (vraća detalje u veoma svetlim delovima).
- {{ui:Bloom}} (mekan sjaj oko jakog svetla), {{ui:Glare}} sa svojim {{ui:Glare streaks}} (zraci zvezda od najsvetlijih tačaka) i {{ui:Vignette}} (tamniji uglovi).
- {{ui:Colour table (.cube)…}} primenjuje gradiranje boja iz `.cube` datoteke, sa svojom {{ui:Colour table strength}}; kao slika neba, čuva se samo dok je stranica otvorena.

## Čuvanje slike

{{ui:Save as}} pored {{ui:Save}} bira datoteku: {{ui:PNG}}, {{ui:JPEG}} ili {{ui:WebP}} za deljenje (JPEG i WebP samo gde pregledač može da ih upiše), a posle renderovanja visokog kvaliteta na grafičkoj kartici i:

- {{ui:PNG, 16 bits}}: gradirana slika sa finijim koracima između nijansi, za štampu ili dalju obradu.
- {{ui:EXR, every layer (32-bit float)}}: slika kako je renderovana (linearno svetlo, bez gradiranja) sa svakim elementom renderovanja i grupom svetla kao sopstvenim slojem, za programe za kompoziciju.
- {{ui:Render file (.ccrender, to grade again later)}}: sve što dijalogu treba da ponovo meša i gradira sliku. {{ui:Open a render file…}} je vraća, sa njenim mešanjem i gradiranjem, bez renderovanja.

## Mešanje svetla posle renderovanja

Uključi {{ui:Light mixing (change each light's colour and brightness after the render)}} pre nego što pritisneš {{ui:Render}}. Kad je slika gotova (ili zaustavljena), {{ui:Mix the picture}} navodi njena svetla po grupama: nebo, sunce i svetiljke po nazivu (svaka svetiljka sa istim nazivom je jedna grupa). Isključi grupu, daj joj boju ili je učini svetlijom ili tamnijom, pa se slika menja odmah, bez ponovnog renderovanja. {{ui:Save mix}} čuva mešanje pod nazivom da ga kasnije izabereš; {{ui:As rendered}} vraća sliku kakva je bila napravljena. {{ui:Save}} čuva izmešanu sliku.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} takođe čuva delove slike. {{ui:Show}} prebacuje pogled na jedan od njih: boje površina (albedo), normale, dubinu, difuzno, spekularno i propušteno svetlo (svako direktno i indirektno), šta svetli i nebo, i boju po objektu ili po materijalu za pravljenje maski.

Oba čuvaju dodatne slojeve na grafičkoj kartici. Na velikim veličinama kartici može da nedostaje mesta; dijalog to kaže i manja veličina radi.

## Magla, dim, šum i kaustika

Ovo je u {{ui:Fog, smoke and noise}} i radi u {{ui:High quality (path traced)}} na grafičkoj kartici; ostali motori ih izostavljaju.

- {{ui:Fog and haze}} puni vazduh do jedne visine maglom koju osvetljavaju sunce, nebo i svetiljke. {{ui:How far you can see, in meters}} određuje koliko je gusta (oko 100 m je lagana izmaglica, 20 m gusta magla), {{ui:Fog height above the ground, in meters}} je gde se završava, a {{ui:Light shafts}} je koliko magla svetli prema izvoru svetla. Sunčeva svetlost izlazi iz magle na njenom vrhu, pa tamo gde sunce prolazi kroz prozor ili između zgrada vidiš snopove svetla.
- {{ui:Smoke or cloud}} dodaje jednu zapreminu dima ili oblaka osvetljenu kao magla. {{ui:Kind}} je {{ui:Cloud}}, {{ui:Smoke column}} ili {{ui:From a volume file (.ccvol)}}, CadCraftov sopstveni format mreže. {{ui:Detail}} i {{ui:Variation}} menjaju napravljen oblak ili stub, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} i {{ui:Turn}} ga postavljaju (počinje u sredini modela), {{ui:Thickness}} ga zgušnjava, {{ui:Forward glow}} ga čini svetlijim prema izvoru svetla, a {{ui:Color}} ga boji. Datoteka zapremine se čuva samo dok je stranica otvorena, kao i slika neba.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} ne daje više uzoraka pikselima koji su se smirili. {{ui:Noise to accept}} je koliko zrnastosti ostaje kad piksel stane. Red ispod slike kaže koliko je uzoraka piksel dobio u proseku.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} prati svetlost iz svetiljki i sunca, pa svetla mrlja ispod staklene kugle ili odsjaj ogledala na zidu izlazi čista umesto zrnasta. Isključena je dok su magla, dim, mešanje svetla ili elementi renderovanja uključeni, a napravljena je za slike, a ne za 360° slike.

## Red za renderovanje

{{ui:Render queue}} u dijalogu: {{ui:Add this picture to the queue}} zadržava podešavanja i pogled slike, a {{ui:Start the queue}} renderuje ono što čeka, jedno za drugim, na ovom računaru. Zatvaranje stranice čuva red; otvori isti model da nastaviš. {{ui:Save}} preuzima gotovu sliku; {{ui:Remove}} i {{ui:Clear finished}} sređuju listu. Red renderuje u visokom kvalitetu, pa treba WebGPU.

## Koliko traje

Slika se pravi na tvom računaru, na grafičkoj kartici; ništa se ne otprema. Vreme raste sa prolazima i pikselima: {{ui:Best}} ima 16 puta više prolaza nego {{ui:Draft}}, a 4K slika ima oko četiri puta više piksela nego Full HD. Veliki modeli traju duže po prolazu.
