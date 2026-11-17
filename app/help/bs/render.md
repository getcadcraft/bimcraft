---
title: Renderujte sliku modela
summary: Napravite dnevnu sliku 3D pogleda: nebo, sunce na geografskoj širini vašeg lokaliteta, meke sjene, staklene prozore; sa WebGPU, praćenje putanje na grafičkoj kartici sa nebom, kamerom, miješanjem svjetla, gradacijom, maglom i redom renderovanja.
keywords: renderuj, prednastavak, prednastavci, prednastavak scene, enterijer, eksterijer, pogled presjeka, noć, jedan klik, renderovanje, praćenje putanje, praćenje zraka, globalno osvjetljenje, refleksije, refrakcija, visoki kvalitet, fotografija, fotorealistično, realistično, slika, png, statična slika, nebo, sunce, dnevno svjetlo, sjene, meke sjene, ambijentalna okluzija, staklo, prozori, metal, materijali, izloženost, svjetlina, oblačno, sumrak, studio, prezentacija, vizualizacija, webgpu, uklanjanje šuma, fizičko nebo, hdri, ies, dubina polja, panorama, balans bijele, miješanje svjetla, elementi renderovanja, exr, 16-bitni png, magla, kaustike, red renderovanja
from: beb74cc7
---

{{ui:Renderuj}} na traci sa alatkama pravi sliku 3D pogleda koja izgleda kao dnevno svjetlo: nebo, sunce tamo gdje ga geografska širina lokaliteta stavlja, meke sjene, svjetlo sa cijelog neba koje tamni uglove, i boje koje mogu izgledati kao staklo ili metal. Model i datoteka se ne mijenjaju.

## Renderujte pogled

1. Postavite 3D pogled kako želite da slika izgleda: orbitirajte i zumirajte, sakrijte spratove ili elemente koje ne želite, i postavite [presjek](topic:section-plane) ako slika treba da prikaže rez.
2. Kliknite {{ui:Renderuj}} na traci sa alatkama.
3. Odaberite {{ui:Scena}} ako pritisnuta nije ono što želite (vidi [Prednastavke scene](topic:render#scene-presets-a-good-picture-in-one-click)), izaberite {{ui:Veličina}}, zatim kliknite {{ui:Renderuj}} u dijalogu.

   Slika se popunjava dok se renderuje i postaje glađa sa svakim prolazom. {{ui:Zaustavi}} (ili {{key:Esc}}) prekida ranije i zadržava sliku do tog trenutka.

4. Kliknite {{ui:Spasi}} da je preuzmete kao PNG, ili {{ui:Spasi kao}} za drugi format (vidi [Spasite sliku](topic:render#save-the-picture)). Imenuje se po nazivu datoteke modela.

:::tip
Počnite sa {{ui:Nacrt}} na {{ui:Veličina pogleda}} da provjerite kameru, zatim renderujte {{ui:Dobro}} ili {{ui:Najbolje}} u većoj veličini za konačnu sliku.
:::

## Prednastavke scene: dobra slika jednim klikom

Na vrhu dijaloga su četiri dugmadi {{ui:Scena}}. Svako postavlja nebo, svjetlinu, tlo, linije ivica, kvalitet i sunce jednim klikom, tako da nema šta da se uči prije prve slike. Kliknite jedno, zatim {{ui:Renderuj}}.

| Scena | Šta postavlja | Za šta se koristi |
|---|---|---|
| {{ui:Eksterijer}} | Vedro nebo, sunce modela, tlo uključeno | Zgradu spolja |
| {{ui:Interijer}} | Oblačno nebo (ravnomjerno svjetlo, bez oštrih sunčanih mrlja), pola stopa svjetlije | Pogled iz prostorije |
| {{ui:Pogled presjeka}} | Bijeli studio, bez tla, linije ivica u brzom renderovanju | Model presječen presjekom |
| {{ui:Noć}} | Sunce ispod horizonta (ponoć u zimi za polovinu svijeta lokaliteta), jedan stop svjetlije | Svjetiljke koje osvjetljavaju model. Bez svjetiljki slika je tamna |

- {{ui:Odaberi za ovaj pogled}} bira umjesto vas: {{ui:Pogled presjeka}} kad je rez presjeka uključen, {{ui:Interijer}} kad je kamera unutar modela, inače {{ui:Eksterijer}}. Prvi put kad otvorite dijalog počinje ovako sam od sebe.
- Svaka postavka ostaje ispod i može se promijeniti. Kad promijenite jednu, scena više nije pritisnuta, nijedno dugme nije pritisnuto, i linija ispod dugmadi kaže da su postavke vaše. Kliknite scenu ponovo da vratite njene vrijednosti.
- Scena ne dira motor, oblik, veličinu, materijale, kameru ni svjetiljke.

:::note
Scene daju iste vrijednosti u ModelCraft i BimCraft. Kako gotova slika izgleda zavisi od vašeg modela i grafičke kartice.
:::

## Šta se vidi na slici

Ono što 3D pogled prikazuje kao puno: skriveni i prozirni elementi, skriveni spratovi i skriveni modeli se izostavljaju, a prostorije se prikazuju samo kad je {{ui:Prostorije}} uključeno. Ravan presjeka ili kutija presjeka presjecaju sliku kao što presijecaju pogled. Elementi se prikazuju u svojim bojama: bojenje po svojstvu (kartica {{ui:Boja}}) se ne koristi.

## Postavke

| Postavka | Šta radi |
|---|---|
| {{ui:Veličina}} | Veličina pogleda, dvostruko veličina pogleda, Full HD, 4K ili kvadrat |
| {{ui:Oblik}} | {{ui:Brzo}}, ili {{ui:Visoki kvalitet (praćenje putanje)}} (dolje) sa svojim {{ui:Vremensko ograničenje}} |
| {{ui:Kvalitet}} | Koliko prolaza (ili, u visokom kvalitetu, uzoraka) se usrednjava: {{ui:Nacrt}} 16, {{ui:Dobro}} 64, {{ui:Najbolje}} 256. Više prolaza daje glađe sjene i ivice, ali traje duže |
| {{ui:Nebo}} | {{ui:Vedro nebo}}, {{ui:Oblačno}}, {{ui:Sumrak}} ili {{ui:Bijeli studio}} (obična bijela pozadina) |
| {{ui:Sunce}} | 21. juni u 15:00 na geografskoj širini koju datoteka daje za njen lokalitet (IfcSite), okrenuto prema pravom sjeveru modela. Označite {{ui:Koristi drugi datum i vrijeme za ovu sliku}} za drugo vrijeme |
| {{ui:Svjetlina}} | Svjetlije ili tamnije, u koracima (stopima) |
| {{ui:Teren ispod modela}} | Tlo na najnižoj tački modela, koje prima sjene i prelazi u horizont |
| {{ui:Crtaj ivice}} | Crta ivice elemenata tankim linijama preko slike |

Kad je sunce ispod horizonta u odabrano vrijeme, nastupa noć: nebo tamni, a svjetiljke modela ga osvjetljavaju.

## Svjetiljke

Svaka svjetiljka u modelu je svjetiljka na slici: svjetiljke u IFC datoteci (IfcLightFixture, ili element tipiziran kao svjetiljka), uključujući one koje postavite iz biblioteke. Svaka svijetli odmah ispod svjetiljke. Kad datoteka daje snagu svjetiljke, njena svjetlina slijedi iz toga; inače je 800 lumena, topla bijela.

Dijalog nabraja svjetiljke pod {{ui:Svjetiljke}}: odznačite jednu da je isključite, ili upišite njenu svjetlinu u lumenima. Ove promjene se spašavaju u IFC (skup svojstava fiksture `CadCraft_Light`, gdje ih možete mijenjati i u Svojstvima), a {{key:Ctrl+Z}} ih poništava.

Kad datoteka ništa ne kaže o tome gdje je lokalitet, sunce se postavlja na 40° sjeverne širine, i dijalog to kaže. Vrijeme je lokalno vrijeme lokaliteta, izračunato iz njegove dužine, pa može biti sat razlike tamo gdje su satovi postavljeni drugačije.

Ove postavke se čuvaju u ovom pregledniku za sljedeću sliku. Ne spašavaju se u IFC datoteku.

## Staklo i drugi materijali

Pod {{ui:Materijali}}, svaka boja na ekranu ima izgled: {{ui:Mat}}, {{ui:Saten}}, {{ui:Sjajno}}, {{ui:Metal}}, {{ui:Polirani metal}}, {{ui:Staklo}} ili {{ui:Matirano staklo}}. Boje koje IFC datoteka čini prozirnim (na primjer staklo prozora) počinju kao {{ui:Staklo}}.

:::note
U režimu {{ui:Brzo}}, staklo i metal odsjaju nebo, a ne ostatak modela, i svjetlo se ne lomi kroz staklo. Režim {{ui:Visoki kvalitet (praćenje putanje)}} ispod to radi oboje.
:::

## Visoki kvalitet

Odaberite {{ui:Oblik}} › {{ui:Visoki kvalitet (praćenje putanje)}} za sliku koja prati svjetlo onako kako ga kamera vidi:

- svjetlo se odbija između površina, pa je soba osvijetljena kroz prozor ili svjetiljkom osvijetljena sa svih strana, a boje se prelivaju na susjede;
- staklo je pravo staklo: svjetlo se lomi kroz njega, a ono odražava model;
- metal i polirane površine odražavaju ostatak modela;
- svjetlosni paneli svijetle kao paneli, sa mekim sjenama.

Mnogo je sporije od {{ui:Brzo}}: svaki prolaz ponovo prati svjetlo za svaki piksel. Slika počinje zrnasta i čisti se kako se uzorci sabiraju, zato počnite malo ({{ui:Veličina pogleda}}, {{ui:Nacrt}}) i izaberite {{ui:Vremensko ograničenje}}: kad istekne, slika do tog trenutka se zadržava. {{ui:Zaustavi}} je također zadržava. Prvi prolaz čeka dok preglednik priprema praćenje putanje.

Gdje preglednik ima WebGPU, praćenje putanje je CadCraftovo vlastito i radi na grafičkoj kartici; linija ispod slike to kaže. Nakon {{ui:Zaustavi}} ili vremenskog ograničenja, {{ui:Nastavi}} nastavlja sa istom slikom dok ne dobije sve uzorke; promjena postavke ili ponovni pritisak na {{ui:Renderuj}} počinje ispočetka. Bez WebGPU slika se prati pomoću WebGL-a (linija to kaže), a {{ui:Nastavi}} se ne nudi.

:::linux
Firefox i većina Chrome postavki na Linuxu još nemaju WebGPU, pa visoki kvalitet tamo koristi WebGL.
:::

U ovom režimu ivice se ne crtaju, teksture pokazuju svoju boju i hrapavost ali ne i svoje reljefe, a presjek se pravi na modelu prije početka slike.

{{ui:Ukloni šum (briše zrnatost zaostalu nakon uzoraka)}} je uključeno po zadanoj postavci: kad je slika gotova, ili zaustavljena, zrnatost koja ostane briše neuronska mreža napravljena za to (objavljena mreža Intel Open Image Denoise, pokrenuta na vašem računaru: na grafičkoj kartici, inače na procesoru). {{ui:Prikaži}} › {{ui:Slika prije uklanjanja šuma}} prikazuje je kako je renderovana.

## Nebo i profili svjetla na grafičkoj kartici

Sa WebGPU visoki kvalitet ima još dva neba:

- {{ui:Fizičko nebo}} računa dnevno svjetlo iz visine sunca: duboko plavo iznad glave, blijedi pojas na horizontu, i sunce koje postaje toplije i slabije kako se spušta. {{ui:Zamućenje}} ide od veoma vedrog dana (2) do maglovitog (10).
- {{ui:Slika neba (HDRI)}} osvjetljava model panoramskom slikom stvarnog mjesta. {{ui:Odaberi sliku…}} uzima equirectangular `.hdr` ili `.exr` datoteku; {{ui:Okreni}} je okreće oko modela, a {{ui:Svjetlina slike}} je čini svjetlijom ili tamnijom. Slika nosi vlastito sunce, pa se sunce modela ne dodaje. Pamti se samo dok je stranica otvorena: nakon ponovnog otvaranja, odaberite je ponovo.

Svaka svjetiljka na listi {{ui:Svjetiljke}} može uzeti profil svjetla proizvođača: {{ui:IES profil…}} čita IES (LM-63) datoteku, a svjetiljka tada zrači svjetlo onako kako ta rasvjeta radi (uski downlight, zidni osvjetljivač). Svaka svjetiljka sa tim nazivom koristi ga, a svjetiljka zadržava svoju svjetlinu. Kliknite naziv profila da prestanete da ga koristite.

Prozori od čistog stakla pomažu svjetlu neba da nađe put u prostoriju.

Režim {{ui:Brzo}} i WebGL praćenje putanje prikazuju {{ui:Fizičko nebo}} i {{ui:Slika neba (HDRI)}} kao vedro nebo i ignorišu profile svjetla.

## Kamera

{{ui:Kamera}} postavlja sliku kao fotografiju:

- {{ui:Izloženost}}: zadržite {{ui:Klizač svjetline}}, ili odaberite {{ui:Postavke kamere}} i postavite {{ui:Otvor blende (f-broj)}}, {{ui:Brzina zatvarača}} i {{ui:ISO}} kao na fotoaparatu; EV pored njih je uobičajena vrijednost izloženosti. f/16 na 1/100 s i ISO 100 odgovara sunčanom danu; tamnija scena traži širi otvor, sporiji zatvarač ili veći ISO. Ovo radi u svakom režimu.
- {{ui:Dubina polja}} zamućuje ono što je bliže ili dalje od {{ui:Udaljenost fokusa (m)}}, kao što bi to uradilo sočivo tog f-broja (ostavite prazno da fokusirate na ono što je u sredini pogleda); {{ui:Oblik otvora}} daje van-fokusnim svjetlima okrugli ili lamelasti oblik.
- {{ui:Perspektiva s dvije tačke (vertikalne linije ostaju vertikalne)}} niveliše kameru i pomjera sliku, kao što to radi arhitektonski tilt-shift objektiv, tako da zidovi ne krive kad gledate gore ili dolje na zgradu.
- {{ui:Balans bijele}} određuje koja boja svjetla se prikazuje kao bijela: niža (na primjer 3000 K) za toplu svjetlost svjetiljki, viša za hlad i oblačne dane.
- {{ui:Projekcija}}: {{ui:360° panorama}} pravi sliku 2:1 svega oko kamere za panoramske preglednike; {{ui:360° stereo panorama}} slaže lijevu i desnu panoramu za naočale; {{ui:Kockasta mapa (6 ploha)}} pravi šest kvadratnih pogleda u mreži 3 × 2. Širina dolazi iz {{ui:Veličina}}.

Projekcija, dubina polja, perspektiva sa dvije tačke i balans bijele traže praćenje putanje na grafičkoj kartici (WebGPU), pa se prikazuju samo u {{ui:Visoki kvalitet (praćenje putanje)}}.

## Završna obrada slike

{{ui:Slika}} gradira sliku visokog kvaliteta kao fotografiju, i svaka kontrola mijenja gotovu sliku odmah, bez ponovnog renderovanja:

- {{ui:Izgled (transformacija pogleda)}}: {{ui:ACES filmski}} (slika kao prije), {{ui:AgX}} (mekše, čuva boju u veoma jakom svjetlu), {{ui:Filmski}} (nježna filmska kriva) ili {{ui:Standardni}} (obično, jako svjetlo se steže na bijelo).
- {{ui:Kontrast}} i {{ui:Kompresija svijetlih dijelova}} (vraća detalj u veoma svijetlim dijelovima).
- {{ui:Bloom}} (mekan sjaj oko jakog svjetla), {{ui:Odsjaj}} sa svojim {{ui:Zrake odsjaja}} (zrake zvijezda iz najsvjetlijih tačaka) i {{ui:Vinjeta}} (tamniji uglovi).
- {{ui:Tabela boja (.cube)…}} primjenjuje gradaciju boja iz `.cube` datoteke, sa svojom {{ui:Jačina tabele boja}}; kao i slika neba, pamti se samo dok je stranica otvorena.

## Spasite sliku

{{ui:Spasi kao}} pored {{ui:Spasi}} bira datoteku: {{ui:PNG}}, {{ui:JPEG}} ili {{ui:WebP}} za dijeljenje (JPEG i WebP samo tamo gdje preglednik može da ih piše), a nakon renderovanja visokog kvaliteta na grafičkoj kartici i:

- {{ui:PNG, 16 bita}}: gradirana slika sa finijim koracima između nijansi, za štampanje ili dalju obradu.
- {{ui:EXR, svaki sloj (32-bitni float)}}: slika kako je renderovana (linearno svjetlo, bez gradacije) sa svakim elementom renderovanja i grupom svjetla kao vlastitim slojem, za programe za kompoziciju.
- {{ui:Datoteka renderovanja (.ccrender, za kasnije ponovno gradiranje)}}: sve što dijalogu treba da ponovo miješa i gradira sliku. {{ui:Otvori datoteku renderovanja…}} je vraća, sa njenim miješanjem i gradacijom, bez renderovanja.

## Miješajte svjetla nakon renderovanja

Uključite {{ui:Miješanje svjetla (mijenja boju i svjetlinu svakog svjetla nakon renderovanja)}} prije nego pritisnete {{ui:Renderuj}}. Kad je slika gotova (ili zaustavljena), {{ui:Miješaj sliku}} nabraja njena svjetla u grupama: nebo, sunce, i svjetiljke po nazivu (svaka svjetiljka sa istim nazivom je jedna grupa). Isključite grupu, dajte joj boju, ili je učinite svjetlijom ili tamnijom, i slika se odmah mijenja, bez ponovnog renderovanja. {{ui:Spasi mješavinu}} čuva miješanje pod imenom za kasnije; {{ui:Kako je renderovano}} vraća sliku kakva je bila napravljena. {{ui:Spasi}} spašava miješanu sliku.

{{ui:Elementi renderovanja (albedo, normale, dubina, difuzno, spekularno, transmisija, emisija, ID-ovi)}} čuva i dijelove slike. {{ui:Prikaži}} prebacuje pogled na jedan od njih: boje površina (albedo), normale, dubinu, difuzno, spekularno i propušteno svjetlo (svako direktno i indirektno), šta svijetli i nebo, te boju po objektu ili po materijalu za pravljenje maski.

Oboje čuva dodatne slojeve na grafičkoj kartici. Na velikim veličinama grafička kartica možda nema mjesta; dijalog to kaže, a manja veličina radi.

## Magla, dim, šum i kaustike

Ovo je u {{ui:Magla, dim i šum}} i radi u {{ui:Visoki kvalitet (praćenje putanje)}} na grafičkoj kartici; ostali motori ih izostavljaju.

- {{ui:Magla i izmaglica}} puni vazduh do visine maglom koju osvjetljavaju sunce, nebo i svjetiljke. {{ui:Dokle vidiš, u metrima}} određuje koliko je gusta (oko 100 m je lagana izmaglica, 20 m gusta magla), {{ui:Visina magle iznad tla, u metrima}} je mjesto gdje se završava, a {{ui:Svjetlosni snopovi}} je koliko magla svijetli prema svjetlu. Sunčeva svjetlost napušta maglu na vrhu, pa tamo gdje sunce ulazi kroz prozor ili između zgrada vidite snopove svjetla.
- {{ui:Dim ili oblak}} dodaje jedan volumen dima ili oblaka osvijetljen kao magla. {{ui:Vrsta}} je {{ui:Oblak}}, {{ui:Dimni stub}} ili {{ui:Iz datoteke volumena (.ccvol)}}, CadCraftov vlastiti format mreže. {{ui:Detalj}} i {{ui:Varijacija}} mijenjaju napravljeni oblak ili stub, {{ui:Veličina njene najduže strane, u metrima (0 = veličina modela)}}, {{ui:Pomjeri X (m)}}, {{ui:Pomjeri Y (m)}}, {{ui:Pomjeri Z (m)}} i {{ui:Okreni}} ga postavljaju (počinje u sredini modela), {{ui:Debljina}} ga čini gušćim, {{ui:Sjaj prema naprijed}} ga čini svjetlijim prema svjetlu, a {{ui:Boja}} ga boji. Datoteka volumena se pamti samo dok je stranica otvorena, kao slika neba.
- {{ui:Zaustavi ranije tamo gdje je slika čista (adaptivno uzorkovanje)}} ne daje više uzoraka pikselima koji su se smirili. {{ui:Prihvatljiv šum}} je koliko zrnatosti ostaje kad piksel stane. Linija ispod slike kaže koliko je uzoraka piksel dobio u prosjeku.
- {{ui:Kaustike (svjetlost savijena staklom ili odbijena ogledalima)}} prati svjetlo iz svjetiljki i sunca, pa svijetla mrlja ispod staklene kugle ili svjetlo ogledala na zidu izlazi čisto umjesto zrnasto. Isključeno je dok su magla, dim, miješanje svjetla ili elementi renderovanja uključeni, i napravljeno je za slike, a ne za 360° slike.

## Red renderovanja

{{ui:Red renderovanja}} u dijalogu: {{ui:Dodaj ovu sliku u red}} zadržava postavke i pogled slike, a {{ui:Pokreni red}} renderuje ono što čeka, jedno po jedno, na ovom računaru. Zatvaranje stranice čuva red; otvorite isti model da nastavite. {{ui:Spasi}} preuzima gotov zadatak; {{ui:Ukloni}} i {{ui:Obriši završene}} sređuju listu. Red renderuje u visokom kvalitetu, pa treba WebGPU.

## Koliko traje

Slika se pravi na vašem računaru, na grafičkoj kartici; ništa se ne šalje. Vrijeme raste sa prolazima i pikselima: {{ui:Najbolje}} ima 16 puta više prolaza od {{ui:Nacrt}}, a 4K slika ima oko četiri puta više piksela od Full HD. Veliki modeli traju duže po prolazu.
