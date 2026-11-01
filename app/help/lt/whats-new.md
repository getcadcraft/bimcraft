---
title: Kas naujo 0.7 versijoje
summary: BimCraft prideda sienas per kelis lygius ir Kopijuoti šį lygį, sienas iš PDF ir nuskaitymų, savas sienų konstrukcijas, turtingesnes šeimas, MEP įrangą su jungtimis, susidūrimų rinkinius, angas ir vamzdžių ruošas, turto dokumentus, COBie ir jutiklių rodmenis, dienos šviesą, saulę, dienos šviesos tinklelį ir šildymo bei vėsinimo apkrovas, nuskaitymų sulygiavimą, gyvąjį vaizdą ir kelio sekimą grafikos plokštėje, STEP ir USD, bibliotekos variantus bei dar daugiau dirbtinio intelekto asistentams.
keywords: kas naujo, release notes, pakeitimų žurnalas, pokyčiai, 0.7, versija, naujos funkcijos, sienos per lygius, kopijuoti šį lygį, pdf, nuskaitymas, sienos iš brėžinių, sienų konstrukcijos, sluoksniai, šerdis, membranos, orientaciniai matmenys, medžiagų biblioteka, ekrano vienetai, vaizdo stilius, karkasas, sijos, šeimos, parametrai, plano simbolis, karštosios vietos, pakartojimas, detalumo lygis, įdėtos šeimos, csv dydžiai, pagal elementą, įranga, jungtys, atstumai, angos, ruošos, ruošų brėžiniai, montažinis suvirinimas, ortakių pjovimo sąrašas, dokumentai, cobie, jutikliai, mqtt, tiesioginis srautas, vertikalus dangaus komponentas, saulės įkaitimas, dienos šviesos tinklelis, šildymas, vėsinimas, apkrovos, U vertė, sulygiuoti nuskaitymus, icp, e57, gyvasis vaizdas, kelio sekimas, webgpu, triukšmo mažinimas, fizinis dangus, šviesų maišymas, atvaizdavimo eilė, jūsų kompiuteris, step, usd, projekto paketas, masės išplėtimas, variantai, asistentai, priedų API, įrenginiai, elektra, projektavimo patikrinimai
from: 5c27b80a
---

Tai, kas pasikeitė BimCraft 0.7 versijoje, palyginti su 0.6. Sąrašas sugrupuotas pagal sritis, svarbiausi – pirmi.

## Nauja

### Pastato braižymas

- **Sienos per kelis lygius.** Sienos įrankio aukščio sąraše siūloma **Iki** bet kuris aukštesnis lygis, kaip ir Savybės siena pasirinktai sienai. Tarpinių lygių planuose siena rodoma šviesiau, patalpos prie jos prisiglaudžia, o į sieną iš tų planų galima įdėti duris ir langus; **Eina per** savybėse nurodo lygius, per kuriuos ji eina. Žr. [Pakeisti sieną, duris ar langą](topic:change-a-wall-or-door#change-a-wall).
- **Kopijuoti šį lygį.** {{ui:Kopijuoti šį lygį…}} lygių skydelyje dar kartą nubraižo lygio sienas su durimis ir langais, grindis bei lubas kitame lygyje arba naujame viršutiniame, vienu anuliavimo žingsniu; patalpos atsiranda savaime. Žr. [Braižyti sienas](topic:draw-walls#levels).
- **Sienos iš PDF ar nuskaitymo.** {{ui:Versija}} › {{ui:Iš brėžinio…}} dabar priima PDF (linijinį brėžinį arba jame esantį nuskaitymą) arba nuskaitytą planą (PNG, JPEG, TIFF, daug puslapių): kiekvienas puslapis tampa vieno lygio sienomis, durimis, langais ir patalpomis, o puslapis išlieka kaip fonas po planu. Atsekimui tinklas ir apmokytas modelis nenaudojami, o rezultatas – tiek, kiek davė linijos: kiekvieną lygį patikrinkite pagal jo puslapį. Žr. [Sienos iš brėžinių rinkinio](topic:walls-from-plans).
- **Savos sienų konstrukcijos.** {{ui:Sienų konstrukcijos…}} sudaro sienos tipą sluoksnis po sluoksnio, su šerdimi, oro tarpais ir membranomis, bei matmenų peržiūrą; {{ui:Medžiagų biblioteka…}} saugo projekto medžiagas IFC faile; {{ui:Anotuoti}} › {{ui:Orientacinis matmuo}} matuoja iki paviršių ir šerdies linijų bei seka sienas, kai jos keičiasi. Bendruomenės dalyvio Doc (drsurfbum) indėlis. Žr. [Sienų konstrukcijos ir orientaciniai matmenys](topic:wall-assemblies).
- **Rodymo vienetai ir vaizdo valdymas.** {{ui:Vienetai}} įrankių juostoje rodo ilgius pėdomis ir coliais, coliais, dešimtainėmis pėdomis, milimetrais, centimetrais arba metrais: matmenyse, žiniaraščiuose, koordinatėse, matavimuose ir pjūviuose. {{ui:Planas}}, {{ui:Padalinti}} ir {{ui:3D}} yra įrankių juostoje; padalijimo liniją galima perkelti vilkant (arba klaviatūra), {{ui:Užpildyta}}, {{ui:Kraštinės}} ir {{ui:Karkasas}} – šalia vaizdo kubo, o stogo nuolydis, apkala ir apatinė dalis iš karto pakeičia pasirinktą stogą. Bendruomenės dalyvio Joel (yisraelk) indėlis. Žr. [Braižyti sienas](topic:draw-walls#levels).
- **Grindų sijos pagal tarpatramį.** {{ui:Karkasas}} gali išdėstyti inžinerines sijas (preliminariai) kaip ir pjautą medieną, parinkdamas mažiausią nurodytą seriją ir aukštį, kuris pasiekia tarpatramį, 16" ar 24" ašių atstumu, bet kuria kryptimi; jos patenka į IFC ir pjovimo sąrašą. Tai pasiūlymas pagal gamintojo paskelbtą lentelę, ne inžinerinis skaičiavimas. Taip pat iš Joel. Žr. [Sienų, grindų ir stogų karkasas](topic:framing).
- **Daugiau elektros prietaisų.** {{ui:Elektra}} prideda duomenų, telefono ir garso bei vaizdo lizdus, selektorių jungiklį, laikmatį, termostatą, dūmų ir šilumos jutiklius, rankinį signalizatorių ir sireną, ventiliatorių, energijos skaitiklį ir pagalbinį skydą, kiekvienas su savo IFC klase. Žr. [Elektros planas](topic:electrical-plan).

### Šeimos

- **Šeimos gali daugiau.** Parametrai gali būti sveikieji skaičiai, tekstas, medžiaga, pieštukas ar užpildas; šeima gali nubraižyti savo plano simbolį, pakartoti kietąjį kūną, pažymėti dalis grubesniems detalumo lygiams, talpinti kitas šeimas (kojelė stale) ir turėti karštąsias vietas, kurias vilkite, taip pat įdėtame elemente plane. Dydžiai imami iš CSV lentelės, o parametrai, pažymėti **Pagal elementą**, leidžia dviem to paties dydžio durims skirtis. Žr. [Redaguoti šeimą](topic:family-editor#plan-symbol) ir [Šeimos ir jų dydžiai](topic:families#sizes-from-a-table).

### Vamzdžiai, ortakiai ir įranga

- **Įranga su jungtimis.** {{ui:Versija}} › {{ui:Įranga}} įdeda bendrą oro tvarkymo įrenginį, linijinį ventiliatorių, siurblį, katilą, vandens šildytuvą, galinį įrenginį, difuzorių, grotelės ar talpą, dydį parenkant pagal jūsų įvestas reikšmes, o vamzdžių ir ortakių jungtys tampa jungtimis (ports). Kiekvienas įrašomas kaip savo IFC klasė su IFC jungtimis. Žr. [MEP įranga su jungtimis](topic:mep-equipment).
- **Sujungti tinklai.** Vamzdis ar ortakis, pradėtas nuo jungties, perima jos dydį ir sistemą ir lieka prie jos pritvirtintas: perkelkite siurblį – ir jo vamzdis seks paskui. {{ui:Patikrinti jungtis}} išvardija atviras jungtis, laisvus galus, dydžių ir sistemų neatitikimus bei tinklus, kurių niekas nemaitina. Žr. [Prijungti vamzdžius ir ortakius prie įrangos](topic:mep-connections).
- **Vamzdžiai ir ortakiai prieš konstrukciją.** {{ui:Susidūrimų patikra}} turi paruoštų rinkinių, o {{ui:Vamzdžiai ir ortakiai × konstrukcija}} – vienu spustelėjimu; {{ui:Tikrinti atstumus}} naudoja kiekvieno tinklo izoliaciją ir jūsų įvestą tarpą; {{ui:Reikalingos angos}} išvardija, kur tinklai eina per sienas ir perdangas, kaip CSV ir BCF problemas. Niekas nepjaunama. Žr. [Tikrinti vamzdžius ir ortakius prieš konstrukciją](topic:mep-against-structure).
- **Plieniniai vamzdžių ruošiniai.** Plieninis tinklas pjaunamas į sunumeruotas ruošas, kurių ilgis ne didesnis už ilgiausią, ir ties jūsų pažymėtais taškais: {{ui:Montažinis suvirinimas}}; {{ui:Ruošų brėžiniai (PDF)}} pateikia po puslapį kiekvienai ruošai su jos izometriniu vaizdu, pjovimo ilgiais, jungiamosiomis detalėmis, suvirinimais ir medžiagų sąrašu, o {{ui:Ortakių pjovimo sąrašas}} išvardija tiesias ortakių dalis. Žr. [Plieniniai vamzdžių ruošiniai ir ruošų brėžiniai](topic:pipe-spools).

Tai braižymo ir koordinavimo priemonės, dydžius parenka inžinierius: srautų, slėgių ar balansavimo nėra.

### Pastato eksploatavimas

- **Dokumentai kiekvienam turtui.** Skirtukas {{ui:Turtas}} susieja vadovus, garantijas, nuotraukas ir brėžinius su turtu pagal failo pavadinimą šalia IFC arba interneto adresą; į IFC patenka tik nuoroda. Žr. [Dokumentai](topic:assets-and-maintenance#documents).
- **COBie skaičiuoklė.** {{ui:Įrašyti kaip COBie (.xlsx)}} įrašo COBie 2.4 perdavimo darbaknygę, o perskaičius COBie darbaknygę, prieš spustelint {{ui:Taikyti}}, išvardijami visi pakeitimai. Ji dar nepatikrinta COBie tikrintuvu. Žr. [COBie skaičiuoklė](topic:assets-and-maintenance#cobie-spreadsheet).
- **Jutiklių rodmenys ir tiesioginiai srautai.** Atidarykite rodmenų CSV arba tiesiai iš naršyklės {{ui:Prisijungti}} prie savo MQTT brokerio ar adreso, į kurį atsako jūsų pastato sistema: kiekvienas turtas rodo naujausią rodmenį ir diagramą, modelyje nuspalvinamas ir pažymimas, jei peržengia IFC faile įrašytas ribas. Rodmenys lieka skirtuke; slaptažodžiai niekada neįrašomi. Žr. [Jutiklių rodmenys](topic:assets-and-maintenance#sensor-readings) ir [Tiesioginiai rodmenys](topic:assets-and-maintenance#live-readings).

### Dienos šviesa ir energija

- **Dangus ir saulė prie kiekvieno lango.** Skirtukas {{ui:Dienos šviesa}} kiekvienam langui pateikia jo vertikalų dangaus komponentą ir užstojimo kampą, seka saulę per datą su {{ui:Saulė pro langus tam tikrą dieną}} ir apskaičiuoja {{ui:Dienos šviesos koeficientas tinklelyje}} per kiekvieną patalpą, nubraižytą jos plane. Žr. [Kiekvieno lango vertikalus dangaus komponentas](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Šildymo ir vėsinimo apkrovos.** {{ui:Šildymo ir vėsinimo apkrovos}} apskaičiuoja kiekvienos patalpos šilumos nuostolius, jos šildymą per metus pagal laipsnių dienas ir vėsinimo piką pagal tai, kas ją riboja modelyje, ir kiekvieno elemento U vertę; čia įvesta U vertė įrašoma į IFC. Žr. [Įvertinti šildymo ir vėsinimo apkrovas](topic:heating-and-cooling-loads).

Abi yra projektavimo priemonės pagal paskelbtus metodus, o ne atitikties skaičiavimai, ir kiekvienas skydelis tai nurodo.

### Nuskaitymai

- **Keli nuskaitymai vienu metu.** {{ui:Sulygiuoti nuskaitymus…}} (pradžios skydelyje arba {{ui:Rodyti}}) sudeda nuskaitymus į vieną rėmą pagal pasirinktas taškų poras arba įvestus taikinius, tikslina juos ICP metodu: taškas į tašką, paskui taškas į plokštumą, išsaugo sulygiavimą kaip mažą projekto failą ir įrašo sulygiuotą debesį kaip vieną LAS arba E57 failą. Žr. [Sulygiuoti kelis nuskaitymus į vieną](topic:register-scans).

### Vaizdai ir gyvasis vaizdas

- **Gyvasis vaizdas.** {{ui:Gyvasis vaizdas}} įrankių juostoje rodo modelį realaus laiko išvaizda šalia 3D vaizdo, seka jį ir visus pakeitimus, su {{ui:Vaikščioti}}, dienos laiku ir mėnesiu; {{ui:Gyvasis vaizdas naujame lange}} perkelia jį į antrą ekraną. Žr. [Gyvasis vaizdas](topic:live-view).
- **Kelio sekimas grafikos plokštėje.** Su WebGPU {{ui:Atvaizduoti}} › {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} paleidžia CadCraft savo kelio sekiklį grafikos plokštėje, gali sustoti ir {{ui:Tęsti}}, o pabaigoje triukšmas pašalinamas; be WebGPU naudojamas WebGL kelio sekiklis, kaip ir anksčiau. Žr. [Aukšta kokybė](topic:render#high-quality).
- **Daugiau atvaizdavimo lange** (grafikos plokštėje, todėl reikia WebGPU): fizinis dangus ir dangaus paveikslėliai, IES šviesos profiliai, kamera su f skaičiumi, lauko gylis, dviejų taškų perspektyva, baltos spalvos balansas ir 360° panoramos, baigtos nuotraukos gradacija, šviesų maišymas ir atvaizdavimo elementai po atvaizdavimo, rūkas, dūmai ir kaustikos, įrašymas kaip 16 bitų PNG, EXR ar atvaizdavimo failas bei atvaizdavimo eilė. Žr. [Dangūs ir šviesos profiliai grafikos plokštėje](topic:render#skies-and-light-profiles-on-the-graphics-card) ir [Atvaizdavimo eilė](topic:render#the-render-queue).
- **Jūsų kompiuteris.** {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Atvaizdavimas}} › {{ui:Jūsų kompiuteris}} rodo grafikos, procesoriaus branduolius ir atmintį, kuriuos ši naršyklė leidžia programai naudoti, ir lygį, nuo kurio pradedamas atvaizdavimas. Žr. [Su kuo atvaizduoja jūsų kompiuteris](topic:your-machine).

### Failai ir kitos programos

- **STEP failai atsidaro.** `.step` ar `.stp` detalė, įrangos gabalas ar tiekėjo modelis (AP203, AP214, AP242) atsidaro kaip nedidelis IFC modelis, kiekvienas kietasis kūnas – elementas, kurį galima apžiūrėti, pjauti, matuoti ir įrašyti kaip IFC. Spalvos ir surinkimo dalių pavadinimai dar nenuskaitomi. Žr. [Failai, kuriuos BimCraft atidaro ir įrašo](topic:files#what-it-opens).
- **USD eksportas.** {{ui:USD}} įrankių juostoje įrašo atvertus modelius kaip `.usda`, `.usdc` ar `.usdz`, išdėstytus pagal vietovę, pastatą, aukštą ir discipliną, su kiekvieno elemento IFC klase, GlobalId ir savybėmis. Žr. [Eksportuoti modelį kaip USD](topic:usd).
- **Masė iš CivilCraft.** Pastato masė, išsiųsta iš CivilCraft vietovės vaizdo, savybėse rodo savo tyrimo skaičius, o {{ui:Išplėtoti šią masę}} iš jos vienu anuliavimo žingsniu pastato sienas kiekviename lygyje ir grindis. Žr. [Išplėtoti pastato masę pagal vietovės tyrimą](topic:develop-a-mass).
- **Bibliotekos elementai su variantais.** Elementas, turintis kelis variantus, turi pasirinkimą {{ui:Variantas}} skirtuke {{ui:Biblioteka}}; įdėtas elementas IFC faile išlaiko savo variantą, {{ui:Pakeisti elementą…}} išvardija kitus variantus, o kopijos ir atnaujinimai jį išlaiko. Žr. [Įdėti ir pakeisti bibliotekos elementą su variantais](topic:library-variants).
- **Projekto paketai aplanke.** {{ui:Atidaryti aplanką}} išvardija `.ccbundle.zip` failus po {{ui:Projekto paketai}}, o kiekvienas paketo maketas turi **Atidaryti programoje …**: PDF – į MarkupCraft, DWG – į CadCraft, naujame skirtuke. Žr. [Atidaryti maketą](topic:open-project-bundle#open-a-layout).

### Asistentai ir priedai

- **Daugiau dirbtinio intelekto asistentams.** Asistentas dabar gali pervadinti elementus ir nustatyti savybių reikšmes, perkelti ir ištrinti elementus, keisti sienas, duris ir langus, eksportuoti USD bei atvaizduoti paveikslėlį ar paleisti atvaizdavimo eilę; kiekvienas pakeitimas – vienas anuliavimo žingsnis. Žr. [Leiskite dirbtinio intelekto asistentui dirbti su savo modeliu](topic:assistants).
- **Priedai gali kurti modelyje.** Priedų API 1.1 leidžia priedui atlikti pakeitimą modelyje kaip vieną anuliavimo žingsnį (jis keliauja su Live TeamWork), nuskaityti modelį ir nuskaityti vamzdžių bei ortakių tinklus, jungtis, įrangą ir ruošas.
- **Įrenginių priedas** (išjungtas, kol jo neįjungsite {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Priedai}}): vamzdžių specifikacijos, tikrinamos pagal tinklus, tinklo izometriniai brėžiniai SVG ir DXF formatu su medžiagų sąrašu, bendra technologinė įranga su antgaliais, įdėta į modelį, maršrutizatorius tarp dviejų jungčių ir gamyklos išdėstymo patikra. Braižymo priemonė, ne inžinerinis patvirtinimas; jo tekstai tik anglų kalba.

## Pakeista

- **Pirmas namas nešiojamajame kompiuteryje.** Nešiojamojo kompiuterio ekrane BimCraft pradeda tik nuo plano, braižymo juosta yra siaura skydelio juosta su šalia tilpančiu planu, plano ir 3D vaizdas grįžta į rodomą sritį, kai brėžinys ją palieka, 3D vaizde visas namas įrėminamas siaurame lange, o durys ir langai pasirenkami prieš matmenų linijas.
- **Paveikslėlio įrašymas.** **Įrašyti PNG** atvaizdavimo lange dabar yra {{ui:Įrašyti}}, o šalia jo {{ui:Įrašyti kaip}} kitiems formatams. Žr. [Įrašyti paveikslėlį](topic:render#save-the-picture).
- **Analizės skirtukas** turi {{ui:Projektavimo patikrinimai}} bloką: jis sudaro jūsų atvejų apkrovų derinius pagal ASCE 7 arba EN 1990 ir tikrina kiekvieną valcuotą plieninį I profilį (W, S, IPE, HEA ar HEB dydį pagal profilio pavadinimą ir dydį) pagal AISC 360 arba EN 1993-1-1, rodydamas, kiek jo laikomosios galios naudojama. Tai priemonė, kol ją peržiūrės inžinierius; suvirinti profiliai ir kiti pjūviai nurodomi kaip „nepatikrinta“. Žr. [Projektavimo patikrinimai](topic:frame-analysis#design-checks).

## Ištaisyta

- Perdarymas po žingsnio, kuris sukūrė naują šeimos dydį, nepavykdavo („nėra dydžio“). Dabar kiekvienas žingsnis perdarant vėl sukuria tuos pačius IFC GlobalId, todėl perdarymas veikia šeimoms ir visiems kitiems pakeitimams.
- Kai du žmonės įrašė tą pačią šeimą (Live TeamWork sesijoje arba dviejuose languose), antras įrašymas tyliai pakeitė pirmojo pakeitimą. Dabar jis atsisako ir nurodo, kaip pamatyti jų pakeitimą ir vėl atlikti savąjį.
- Modelis JAV geodezinėmis pėdomis buvo nuskaitomas kaip 0.3048 m vienai pėdai, o ne kaip 0.3048006096 m, todėl kiekvienas georeferencinis IFC JAV pėdomis žemėlapyje buvo perkeliamas.
- Šeimų redaktorius: jį uždarius klaviatūros fokusas nebenukrenta į puslapį, jo mygtukas {{ui:Įrašyti}} telefone lieka matomas, o laukai nebeprivertia telefono priartinti.

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais, kuriuos nurodo vienetų apibrėžimai (JAV geodezinė pėda yra atskiras vienetas). Išjunkite vienetus, kurių niekada nenaudojate, – jie išeina iš vienetų sąrašų; pažymėkite vieną žvaigždute – naujas darbas prasidės juo. Failas visada išlaiko savo vienetą. BimCraft įrankių juostos sąrašas {{ui:Vienetai}} seka jungiklius, žvaigždutė nustato rodymo vienetus, kol juos pasirinksite įrankių juostoje (ankstesnis pasirinkimas išsaugomas), o braižymo įrankių ilgio langeliai priima bet kurio vieneto žymą, pavyzdžiui `3.5 m` ar `10 US ft`. Žr. [Vienetai, įvestos reikšmės ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie susitvarko.** {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (jutiklinių ekranų ir telefonų dideli mygtukai lieka). Kiekvienas šoninis skydelis turi siaurą antraštės juostą: vilkite ją, kad skydelis prisitvirtintų arba plūdėtų, užmeskite ant kito skydelio juostos, kad bendrai rodytumėte kaip skirtukus, prisekite, kad jis slystų iki krašto, arba paslėpkite ir grąžinkite iš krašto. Žr. [Sutvarkyti skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai judami.** Vilkite dialogą už antraštės juostos, kad jis nesitrukdytų brėžiniui; jis grįžta ten, kur paliktas. Dukart spustelėkite antraštės juostą, kad vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai dirbtinio intelekto asistentams.** Dešimt išbandytų užklausų jūsų asistentui (sutvarkyti brėžinį, išspausdinti rinkinį, patikrinti brėžinius, uždavinėti modeliui klausimus, susumuoti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji iškviečia, ir leidimais, kurių jai reikia, ir kiekviena pakartojama mūsų testais. Programose dirbtinio intelekto nėra. Žr. [Receptai dirbtinio intelekto asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** yra nauja {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Kalba}} kalba. Ši kalba, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, dar nepatikrintus gimtosios kalbos. Pagalbos temos pateikiamos anglų kalba, kelios – ispanų.
- **CadCraft Studio** nurodo, kodėl nepavyko patikrinti atnaujinimų (dar nėra failo jūsų sistemai, nėra tinklo, netinkamas parašas), o ne tik „Atlikta“, ir nebeberodo uždarytos kortelės „Kas naujo“, kol nėra naujesnės versijos.

## Dar neįtraukta į šią versiją

- **0.7 nepasirašyta kodu.** Pasirašymas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar negautas. Patikrinkite SHA-256 šalia kiekvieno failo adresu getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, o tada {{ui:Vis tiek paleisti}}. Mac sistemoje pirmą kartą dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atvira}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai {{ui:Vienetai}} išsaugomi, bet nė vienas langelis jų dar neskaito.
- Kelio sekimas grafikos plokštėje, atvaizdavimo lango priedai ir atvaizdavimo eilė reikalauja WebGPU (be jo aukšta kokybė naudoja WebGL kelio sekiklį); gyvasis vaizdas naudoja WebGPU, kai naršyklė jį palaiko, kitu atveju WebGL 2. Jie išbandyti tik programinės grafikos pakaitale, dar ne tikrose grafikos plokštėse. BimCraft gyvajame vaizde nėra sklaidos ar bendrinimo (ModelCraft tokią turi).
- Įrašyto apėjimo atvaizdavimas kaip vaizdo įrašas BimCraft nėra įdiegtas.
- Projektavimo patikrinimai: I profilis, kurio IFC profilio pavadinimas nėra W, S, IPE, HEA ar HEB dydis (arba kurio dydis su juo nesutampa), laikomas suvirintu ir grąžinamas kaip „nepatikrinta“, taip pat vamzdžiai, kampiniai profiliai, kanalai, lieknos dalys ir sukimas. Patikrinimų dar niekas iš inžinierių neperžiūrėjo.
- Nubraižytų elementų negalima kopijuoti po vieną, sukti, veidrodinti ar išdėstyti masyvu (kopijuoti galima visą lygį), taip pat nėra sienos padalijimo, teksto įrankio ar stiklinės sienos. Siena, kuri aukštesniame lygyje susitinka su žemesnio lygio siena, nepjaunama į tos sienos 3D kūną, o žiniaraščiuose aukštesnio lygio anga išvardijama pagal savo sienos lygį.
- Šeimos: bendrų tarp projektų šeimų biblioteka dar neįdiegta. Šeimos ir nukopijuoti lygiai dar nebuvo atidaryti kitose BIM programose.
- MEP: įranga bendra (be gamintojų duomenų); trišakiai ir reduktoriai plieniniuose ruošiniuose yra bendri, ne pagal ASME B16.9 lentelę; jungtys bibliotekos elementų, įdėtų iš skirtuko {{ui:Biblioteka}}, neįrašomos į IFC; niekas nepatikrinta inžinieriaus.
- Įrenginių priedas dar negali nubraižyti maršrutizuoto tinklo į modelį, sunumeruoti ruošų savo izometriniuose brėžiniuose ar patikrinti iš bibliotekos įdėtos įrangos išdėstymo.
- Įrenginiai iš CivilCraft įrenginių bibliotekos dar negali būti įdėti iš BimCraft skirtuko {{ui:Biblioteka}}.
- Energija: nėra valandinio modeliavimo, ISO 52016-1 metodo ir klimato failų. Turtas: nėra talpinamo skaitmeninio dvynio, kuris saugotų rodmenis ar siųstų perspėjimus, kai BimCraft uždarytas.
- Nuskaitymų sulygiavimas išbandytas su bandomaisiais nuskaitymais, dar ne su tikru skaitytuvo nuskaitymų rinkiniu; E57 failai vis dar atsidaro iki 6 milijonų taškų ir 512 MB.
- Projekto paketai atsidaro tik BimCraft (kitos programos priima maketą per **Atidaryti programoje …**), o paketai ir dviejų programų rinkinys išbandyti su pakaitalais, dar ne su pačiomis Archicad ar Revit.

Visa kita – [Kas dar neįdiegta](topic:not-built-yet).
