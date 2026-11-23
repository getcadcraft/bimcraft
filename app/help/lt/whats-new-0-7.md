---
title: Kas naujo 0.7 versijoje (ankstesnė)
summary: BimCraft prideda sienas per kelis aukštus ir Kopijuoti šį lygį, sienas iš PDF ir skenavimų, savas sienų konstrukcijas, turtingesnes šeimas, MEP įrangą su jungtimis, susidūrimų rinkinius, angas ir vamzdžių ruošinius, turto dokumentus, COBie ir jutiklių rodmenis, dangų, saulę, dienos šviesą tinklelyje ir šildymo bei vėsinimo apkrovas, skenavimų registraciją, tiesioginį vaizdą ir kelio sekimą grafikos plokštėje, STEP ir USD, bibliotekos variantus ir dar daugiau DI asistentams.
keywords: kas naujo 0.7, ankstesnis leidimas, leidimo pastabos, keitimų žurnalas, pakeitimai, 0.7, versija, naujos funkcijos, sienos per aukštus, kopijuoti šį lygį, pdf, skenavimas, sekimas, sienos iš planų, sienų konstrukcijos, sluoksniai, šerdis, membrana, orientaciniai matmenys, medžiagų biblioteka, ekrano vienetai, vaizdo stilius, karkasas, sijos, šeimos, parametrai, plano simbolis, karštieji taškai, pakartojimas, detalumo lygis, įdėtos šeimos, CSV dydžiai, pagal elementą, įranga, jungtys, prijungimai, atstumai, angos, ruošiniai, ruošų brėžiniai, montažinis suvirinimas, ortakių pjovimo sąrašas, dokumentai, cobie, jutikliai, mqtt, tiesioginis srautas, vertikalus dangaus komponentas, saulės šiluma, dienos šviesos tinklelis, šildymas, vėsinimas, apkrovos, u vertė, skenavimų registracija, icp, e57, tiesioginis vaizdas, kelio sekimas, webgpu, triukšmo mažinimas, fizinis dangus, šviesų maišymas, atvaizdavimo eilė, jūsų kompiuteris, step, usd, projekto paketas, masės išplėtojimas, variantai, asistentai, priedų API, augalas, elektra, dizaino patikrinimai
from: a638080d
---

Tai, kas pasikeitė BimCraft 0.7 versijoje, palyginti su 0.6. Sąrašas sugrupuotas pagal sritis, svarbiausios pirmos.

## Naujos

### Pastato braižymas

- **Sienos per kelis aukštus.** Sienos įrankio aukščio sąraše siūlomas **Iki** bet kuris aukštesnis aukštas, kaip ir Savybės pasirinktai sienai. Tarpiniai aukštų planai rodo sieną šviesesnę, kambariai ten užsidaro prie jos, o durys ir langai gali būti į ją įdedami iš tų planų; **Eina per** Savybėse nurodo aukštus, per kuriuos ji eina. Žr. [Keisti sieną, duris ar langą](topic:change-a-wall-or-door#change-a-wall).
- **Kopijuoti šį lygį.** {{ui:Kopijuoti šį lygį…}} Lygių skydelyje iš naujo nubraižo lygio sienas su jų durimis ir langais, jo perdangas ir lubas kitame lygyje arba naujame lygyje virš jo, viename anuliavimo žingsnyje; kambariai atsiranda savaime. Žr. [Braižyti sienas](topic:draw-walls#levels).
- **Sienos iš PDF ar skenavimo.** {{ui:Versija}} › {{ui:Iš brėžinio…}} dabar priima PDF (linijų brėžinį ar skenavimą jo viduje) arba nuskenuotą planą (PNG, JPEG, TIFF, daug puslapių): kiekvienas puslapis tampa lygio sienomis, durimis, langais ir kambariais, o puslapis laikomas po jo planu. Sekimas nenaudoja tinklo ir mokyto modelio, o rezultatas yra tai, ką davė linijos: tikrinkite kiekvieną lygį pagal jo puslapį. Žr. [Sienos iš planų rinkinio](topic:walls-from-plans).
- **Jūsų savos sienų konstrukcijos.** {{ui:Sienų konstrukcijos…}} sukuria sienos tipą sluoksnis po sluoksnio su šerdimi, oro tarpais ir membranomis bei peržiūra su matmenimis; {{ui:Medžiagų biblioteka…}} saugo projekto medžiagas IFC faile; {{ui:Anotuoti}} › {{ui:Orientacinis matmuo}} matuoja iki apdailos paviršių ir šerdies linijų bei seka sienas, kai jos keičiasi. Iš bendruomenės dalyvio Doc (drsurfbum). Žr. [Sienų konstrukcijos ir orientaciniai matmenys](topic:wall-assemblies).
- **Ekrano vienetai ir vaizdo valdikliai.** {{ui:Vienetai}} įrankių juostoje rodo ilgius pėdomis ir coliais, coliais, dešimtainėmis pėdomis, milimetrais, centimetrais ar metrais: matmenyse, žiniaraščiuose, koordinatėse, matavimuose ir pjūviuose. {{ui:Planas}}, {{ui:Skaidyti}} ir {{ui:3D}} yra įrankių juostoje, skaidymą galima tempti (arba perkelti klaviatūra), {{ui:Užpildyta}}, {{ui:Kraštinės}} ir {{ui:Karkasas}} yra šalia vaizdo kubo, o stogo nuolydis, karnizo lenta ir karnizo apačia pakeičia pasirinktą stogą iš karto. Iš bendruomenės dalyvio Joel (yisraelk). Žr. [Braižyti sienas](topic:draw-walls#levels).
- **Sijos grindims pagal tarpą.** {{ui:Karkasas}} gali išdėstyti inžinerines sijas (preliminariai), kaip ir pjautą medieną, parinkdamas mažiausią nurodytą seriją ir aukštį, kuris pasiekia tarpą, 16" ar 24" ašies atstumu, bet kuria kryptimi; jos patenka į IFC ir pjovimo sąrašą. Pasiūlymas iš gamintojo paskelbtos lentelės, ne inžinerija. Taip pat iš Joel. Žr. [Sienų, grindų ir stogų karkasas](topic:framing).
- **Daugiau elektros prietaisų.** {{ui:Elektra}} prideda duomenų, telefono ir garso bei vaizdo lizdus, pasirinkimo jungiklį, laikmatį, termostatą, dūmų ir karščio jutiklius, gaisro signalizacijos mygtuką ir sireną, ventiliatorių, energijos skaitiklį ir antrinį skydą, kiekvieną su savo IFC klase. Žr. [Elektros planas](topic:electrical-plan).

### Šeimos

- **Šeimos daro daugiau.** Parametrai gali būti sveikieji skaičiai, tekstas, medžiaga, pieštukas ar užpildas; šeima gali nubraižyti savo plano simbolį, pakartoti kietą kūną, pažymėti dalis stambesniam detalumui, laikyti kitas šeimas (koją stalo viduje) ir turėti karštuosius taškus, kuriuos tempiate, taip pat ant įdėto elemento plane. Dydžiai ateina iš CSV lentelės, o parametrai, pažymėti **Kiekvienam elementui**, leidžia dviem to paties dydžio durims skirtis. Žr. [Redaguoti šeimą](topic:family-editor#plan-symbol) ir [Šeimos ir jų dydžiai](topic:families#sizes-from-a-table).

### Vamzdžiai, ortakiai ir įranga

- **Įranga su jungtimis.** {{ui:Versija}} › {{ui:Įranga}} įdeda bendrą oro tvarkymo įrenginį, linijinį ventiliatorių, siurblį, katilą, vandens šildytuvą, galinį bloką, difuzorių, grotelės ar talpyklą, dydį nustato jūsų įvestos reikšmės, o vamzdžių ir ortakių jungtys yra jungtys. Kiekvienas įrašomas kaip savo IFC klasė su IFC jungtimis. Žr. [MEP įranga su jungtimis](topic:mep-equipment).
- **Prijungti maršrutai.** Vamzdis ar ortakis, pradėtas nuo jungties, perima jo dydį ir sistemą ir lieka prie jos pritvirtintas: perkėlus siurblį, jo vamzdis seka. {{ui:Patikrinti jungtis}} išvardija atviras jungtis, laisvus galus, dydžio ir sistemos neatitikimus bei vamzdžius, kurių niekas nemaitina. Žr. [Prijungti vamzdžius ir ortakius prie įrangos](topic:mep-connections).
- **Vamzdžiai ir ortakiai prie konstrukcijos.** {{ui:Susidūrimų patikra}} turi paruoštus rinkinius, o {{ui:Vamzdžiai ir ortakiai × konstrukcija}} atlieka tai vienu spustelėjimu; {{ui:Tikrinti atstumus}} naudoja kiekvieno maršruto izoliaciją ir tarpą, kurį įvedate; {{ui:Reikalingos angos}} išvardija, kur maršrutai eina per sienas ir perdangas, kaip CSV ir BCF problemas. Nieko nepjaunama. Žr. [Tikrinti vamzdžius ir ortakius pagal konstrukciją](topic:mep-against-structure).
- **Plieninių vamzdžių ruošiniai.** Plieninis maršrutas supjaustomas į numeruotus ruošinius pagal ilgiausią ilgį ir pagal {{ui:Montažinis suvirinimas}}, kuriuos padedate; {{ui:Ruošų brėžiniai (PDF)}} duoda puslapį kiekvienam ruošiniui su jo izometriniu vaizdu, pjovimo ilgiais, jungiamosiomis detalėmis, suvirinimais ir medžiagų sąrašu, o {{ui:Ortakių pjovimo sąrašas}} išvardija tiesius ortakių gabalus. Žr. [Plieninių vamzdžių ruošiniai ir ruošų brėžiniai](topic:pipe-spools).

Tai braižymo ir koordinavimo priemonės, kurių dydžius nustato inžinierius: be srautų, slėgių ar balansavimo.

### Veikimas su pastatu

- **Dokumentai pagal turtą.** {{ui:Ištekliai}} skirtukas susieja instrukcijas, garantijas, nuotraukas ir brėžinius su turtu failo pavadinimu šalia IFC arba interneto adresu; į IFC patenka tik nuoroda. Žr. [Dokumentai](topic:assets-and-maintenance#documents).
- **COBie skaičiuoklė.** {{ui:Įrašyti kaip COBie (.xlsx)}} parašo COBie 2.4 perdavimo darbaknygę, o perskaityta COBie darbaknygė išvardija kiekvieną pakeitimą prieš vieną {{ui:Taikyti}}. Ji dar nebuvo patikrinta COBie validatoriumi. Žr. [COBie skaičiuoklė](topic:assets-and-maintenance#cobie-spreadsheet).
- **Jutiklių rodmenys ir tiesioginiai srautai.** Atidarykite CSV su rodmenimis arba {{ui:Prisijungti}} tiesiai iš naršyklės prie savo MQTT brokerio ar adreso, kurį atsako jūsų pastato sistema: kiekvienas turtas rodo naujausią rodmenį ir diagramą, yra nuspalvintas modelyje ir pažymėtas, jei išeina už IFC išsaugotų ribų. Rodmenys lieka skirtuke; slaptažodžiai niekada neišsaugomi. Žr. [Jutiklių rodmenys](topic:assets-and-maintenance#sensor-readings) ir [Tiesioginiai rodmenys](topic:assets-and-maintenance#live-readings).

### Dienos šviesa ir energija

- **Dangus ir saulė prie kiekvieno lango.** {{ui:Dienos šviesa}} skirtukas suteikia kiekvienam langui vertikalią dangaus dalį ir kliūties kampą, seka saulę per datą su {{ui:Saulė pro langus tam tikrą dieną}} ir apskaičiuoja {{ui:Dienos šviesos koeficientas tinklelyje}} per kiekvieną patalpą, nubrėžtą jos plane. Žr. [Vertikali kiekvieno lango dangaus dalis](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Šildymo ir vėsinimo apkrovos.** {{ui:Šildymo ir vėsinimo apkrovos}} apskaičiuoja kiekvienos patalpos šilumos nuostolius, jos šildymą per metus pagal laipsnių dienas ir vėsinimo piką, remdamasi tuo, kas ją riboja modelyje, ir kiekvieno elemento U verte; čia įvesta U vertė įrašoma į IFC. Žr. [Šildymo ir vėsinimo apkrovų įvertinimas](topic:heating-and-cooling-loads).

Abu yra projektavimo priemonės pagal paskelbtus metodus, ne atitikties skaičiavimai, ir kiekvienas skydelis tai nurodo.

### Skenavimai

- **Registruokite kelis skenavimus.** {{ui:Sulygiuoti nuskaitymus…}} (pradžios skydelyje arba {{ui:Rodyti}}) sudeda skenavimus į vieną rėmą pagal pasirinktas taškų poras arba įvestus taikinius, patikslina juos ICP: taškas su tašku, po to taškas su plokštuma; išsaugo registraciją kaip mažą projekto failą ir įrašo registruotą debesį kaip vieną LAS ar E57 failą. Žr. [Registruoti kelis skenavimus į vieną](topic:register-scans).

### Nuotraukos ir tiesioginis vaizdas

- **Tiesioginis vaizdas.** {{ui:Gyvasis vaizdas}} įrankių juostoje rodo modelį realaus laiko išvaizda šalia 3D vaizdo, seka jį ir kiekvieną pakeitimą, su {{ui:Vaikščioti}}, dienos laiku ir mėnesiu; {{ui:Gyvasis vaizdas naujame lange}} perkelia jį į antrą ekraną. Žr. [Tiesioginis vaizdas](topic:live-view).
- **Kelio sekimas grafikos plokštėje.** Su WebGPU {{ui:Atvaizduoti}} › {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} paleidžia CadCraft savo kelio sekiklį grafikos plokštėje, gali sustoti ir {{ui:Tęsti}}, o pabaigoje paveikslėlis išvalomas nuo triukšmo; be WebGPU naudojamas WebGL kelio sekiklis, kaip anksčiau. Žr. [Aukšta kokybė](topic:render#high-quality).
- **Daugiau atvaizdavimo dialoge** (grafikos plokštėje, todėl reikia WebGPU): fizinis dangus ir dangaus paveikslėliai, IES šviesos profiliai, kamera su f-skaičiumi, lauko gyliu, dviejų taškų perspektyva, balto balanso ir 360° panoramos, baigto paveikslėlio gradacija, šviesų maišymas ir atvaizdavimo elementai po atvaizdavimo, rūkas, dūmai ir kaustikos, įrašymas kaip 16 bitų PNG, EXR ar atvaizdavimo failas, ir atvaizdavimo eilė. Žr. [Dangūs ir šviesos profiliai grafikos plokštėje](topic:render#skies-and-light-profiles-on-the-graphics-card) ir [Atvaizdavimo eilė](topic:render#the-render-queue).
- **Jūsų kompiuteris.** {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Atvaizdavimas}} › {{ui:Jūsų kompiuteris}} rodo grafiką, procesoriaus branduolius ir atmintį, kuriuos ši naršyklė leidžia programai naudoti, ir lygį, nuo kurio pradedamas atvaizdavimas. Žr. [Ką jūsų kompiuteris atvaizduoja](topic:your-machine).

### Failai ir kitos programos

- **STEP failai atsidaro.** `.step` ar `.stp` detalė, įranga ar tiekėjo modelis (AP203, AP214, AP242) atsidaro kaip mažas IFC modelis, kiekvienas kietas kūnas tampa elementu, kurį galite tikrinti, pjauti, matuoti ir įrašyti kaip IFC. Spalvos ir surinkimo detalių pavadinimai kol kas nenuskaitomi. Žr. [Failai, kuriuos BimCraft atidaro ir įrašo](topic:files#what-it-opens).
- **USD eksportas.** {{ui:USD}} įrankių juostoje įrašo atvirus modelius kaip `.usda`, `.usdc` ar `.usdz`, išdėstytus pagal vietą, pastatą, aukštą ir discipliną, su kiekvieno elemento IFC klase, GlobalId ir savybėmis. Žr. [Eksportuoti modelį kaip USD](topic:usd).
- **Masė iš CivilCraft.** Pastato masė, atsiųsta iš CivilCraft vietos vaizdo, rodo savo tyrimo skaičius Savybėse, o {{ui:Išplėtoti šią masę}} sukuria sienas kiekviename aukšte ir perdangą iš jos viename anuliavimo žingsnyje. Žr. [Išplėtoti pastato masę iš vietos tyrimo](topic:develop-a-mass).
- **Bibliotekos elementai su variantais.** Elementas, ateinantis keliais variantais, turi {{ui:Variantas}} pasirinkimą {{ui:Biblioteka}} skirtuke; įdėtas elementas IFC išlaiko savo variantą, {{ui:Keisti elementą…}} išvardija kitus variantus, o kopijos ir atnaujinimai jį išlaiko. Žr. [Įdėti ir pakeisti bibliotekos elementą, turintį variantų](topic:library-variants).
- **Projekto paketai aplanke.** {{ui:Atidaryti aplanką}} išvardija `.ccbundle.zip` failus po {{ui:Projekto paketai}}, o kiekvienas pakete esantis išdėstymas turi **Atidaryti programoje …**: PDF į MarkupCraft, DWG į CadCraft, naujame skirtuke. Žr. [Atidaryti išdėstymą](topic:open-project-bundle#open-a-layout).

### Asistentai ir priedai

- **Daugiau DI asistentams.** Asistentas dabar gali pervadinti elementus ir nustatyti savybių reikšmes, perkelti ir ištrinti elementus, keisti sienas, duris ir langus, eksportuoti USD bei atvaizduoti paveikslėlį ar paleisti atvaizdavimo eilę; kiekvienas pakeitimas yra vienas anuliavimo žingsnis. Žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
- **Priedai gali braižyti modelyje.** Priedų API 1.1 leidžia priedui atlikti pakeitimą modelyje kaip vieną anuliavimo žingsnį (keliauja per Live TeamWork), skaityti modelį ir skaityti vamzdžių bei ortakių maršrutus, jungtis, įrangą ir ruošinius.
- **Augalų priedas** (išjungtas, kol neįjungsite {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Priedai}}): vamzdžių specifikacijos tikrinamos pagal maršrutus, maršrutų izometriniai brėžiniai kaip SVG ir DXF su medžiagų sąrašu, bendra proceso įranga su antgaliais, įdėta į modelį, maršrutizatorius tarp dviejų jungčių ir gamyklos išdėstymo patikra. Tai braižymo priemonė, ne inžinerinis patvirtinimas; jo tekstai tik anglų kalba.

## Pakeitimai

- **Pirmas namas nešiojamajame kompiuteryje.** Nešiojamojo kompiuterio dydžio ekrane BimCraft pradeda tik su planu, Braižymo juosta yra siauras skydelis su planu šalia, plano ir 3D vaizdai grįžta į matymo sritį, kai brėžinys juos palieka, 3D vaizdas apima visą namą siaurame rėmelyje, o durys ir langai pasirenkami prieš matmenų linijas.
- **Paveikslėlio išsaugojimas.** **Įrašyti PNG** atvaizdavimo dialoge dabar yra {{ui:Įrašyti}}, o šalia jo {{ui:Įrašyti kaip}} kitiems formatams. Žr. [Išsaugoti paveikslėlį](topic:render#save-the-picture).
- **Analizės skirtukas** turi {{ui:Projektavimo patikrinimai}} bloką: jis sudaro ASCE 7 ar EN 1990 apkrovų derinius jūsų atvejams ir tikrina kiekvieną valcuotą plieninį I profilį (W, S, IPE, HEA ar HEB dydį pagal jo profilio pavadinimą ir dydį) pagal AISC 360 ar EN 1993-1-1, rodydamas, kiek jo galios naudojama. Tai pagalba, kol inžinierius jos neperžiūrėjo; suvirinti profiliai ir kiti pjūviai rodo „netikrinta“. Žr. [Projektavimo patikrinimai](topic:frame-analysis#design-checks).

## Ištaisyta

- Perdarymas po žingsnio, kuris sukūrė naują šeimos dydį, nepavykdavo („nėra dydžio“). Dabar kiekvienas žingsnis perdarant sukuria tuos pačius IFC GlobalId, todėl perdarymas veikia šeimoms ir kiekvienam kitam pakeitimui.
- Kai du žmonės įrašė tą pačią šeimą (Live TeamWork sesijoje ar dviejuose languose), antras įrašymas tyliai pakeisdavo pirmojo pakeitimą. Dabar jis atsisako ir pasako, kaip pamatyti jų pakeitimą ir padaryti savąjį iš naujo.
- Modelis JAV apklausos pėdomis buvo skaitomas kaip 0.3048 m pėda, o ne 0.3048006096 m, todėl kiekvienas geografiškai susietas IFC JAV pėdomis pajudėdavo žemėlapyje.
- Šeimų redaktorius: jį uždarius klaviatūros fokusas nebeprarandamas puslapyje, jo {{ui:Įrašyti}} lieka matomas telefone, o jo laukai nebeprivers telefono priartinti.

## Visose programose

- **Vienetai.** {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Vienetai}} turi po vieną sąrašą ilgiui, plotui, tūriui, kampui ir nuolydžiui, su tiksliais dydžiais, kuriuos nurodo vienetų apibrėžimai (JAV apklausos pėda yra savas vienetas). Išjunkite vienetus, kurių niekada nenaudojate, ir jie išeina iš sąrašų; pažymėkite žvaigždute, ir naujas darbas prasideda su juo. Failas visada išlaiko savo vienetą. BimCraft {{ui:Vienetai}} sąrašas įrankių juostoje seka jungiklius, žvaigždutė nustato rodomus vienetus, kol pasirinksite juos įrankių juostoje (ankstesnis pasirinkimas išsaugomas), o braižymo įrankių ilgio laukai priima bet kurio vieneto žymą, pavyzdžiui `3.5 m` ar `10 US ft`. Žr. [Vienetai, įvesti dydžiai ir vienetų sąrašai](common:unit-lists).
- **Tankesnis išdėstymas ir skydeliai, kurie tvarkosi.** {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Išdėstymo tankis}} › {{ui:Kompaktiškas}} telpa daugiau ekrane (jutikliniai ekranai ir telefonai išlaiko didelius mygtukus). Kiekvienas šoninis skydelis turi siaurą pavadinimo juostą: tempkite jį, kad prisegtumėte ar atplėštumėte skydelį, paleiskite jį ant kito skydelio juostos, kad pasidalintumėte rėmą kaip skirtukus, prisekite, kad jis slystų į kraštą, arba paslėpkite ir atgaukite iš krašto. Žr. [Išdėstyti skydelius](common:arrange-panels#make-the-layout-denser).
- **Dialogai juda.** Tempkite dialogą už pavadinimo juostos iš kelio piešiniui; jis grįžta ten, kur paliekote. Dukart spustelėkite pavadinimo juostą, kad jį vėl centruotumėte. Žr. [Perkelti dialogą](common:arrange-panels#move-a-dialog).
- **Receptai DI asistentams.** Dešimt paruoštų užklausų jūsų asistentui (sutvarkyti brėžinį, nubrėžti rinkinį, patikrinti brėžinius, paklausti modelio, sudėti kiekių skaičiavimą, išbandyti detalės variantą…), kiekviena su įrankiais, kuriuos ji kviečia, ir leidimais, kurių reikia; kiekvieną paleidžia mūsų testai. Programos DI neturi. Žr. [Receptai DI asistentams](common:assistants-recipes).
- **Kalbos.** **Português (Portugal)** naujas {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Kalba}} sąraše. Ji, **Português (Brasil)**, **Español (México)** ir **Bahasa Indonesia** dabar turi visus programų žodžius kaip juodraščius, kurių gimtoji kalba dar neperskaitė. Pagalbos temos yra anglų kalba, kai kurios ispanų.
- **CadCraft Studio** pasako, kodėl atnaujinimo patikra nepavyko (failo dar nėra jūsų sistemai, nėra tinklo, neteisingas parašas), o ne tik „Atlikta“, ir nebesugrąžina Kas naujo kortelės, kurios uždarėte, kol nėra naujesnio leidimo.

## Dar neįtraukta į šią versiją

- **0.7 nėra pasirašyta kodu.** Pasirašymas ir Microsoft Store paketas perkelti į 0.8, nes sertifikato patvirtinimas dar neatėjo. Patikrinkite SHA-256 šalia kiekvieno failo getcadcraft.com/download. Windows sistemoje, jei SmartScreen sustabdo diegimo programą, pasirinkite {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}. Mac sistemoje pirmą kartą dešiniuoju pelės mygtuku spustelėkite CadCraft Studio ir pasirinkite {{ui:Atvira}}. CadCraft Studio dar nėra programų parduotuvėje, o iPad ar iPhone versijos dar nėra.
- Kampų ir nuolydžių sąrašai {{ui:Vienetai}} yra išsaugomi, bet dar nė vienas laukas jų neskaito.
- Kelio sekimas grafikos plokštėje, papildomos Atvaizdavimo dialogo galimybės ir atvaizdavimo eilė reikalauja WebGPU (be jo aukšta kokybė naudoja WebGL kelio sekiklį); tiesioginis vaizdas naudoja WebGPU, kur naršyklė jį palaiko, kitu atveju WebGL 2. Tai išbandyta čia tik su programine grafikos imitacija, dar ne su tikromis grafikos plokštėmis. Tiesioginis vaizdas BimCraft neturi sklaidos ar bendrinimo (ModelCraft jas turi).
- Įrašyto pasivaikščiojimo atvaizdavimas į vaizdo įrašą BimCraft neįdiegtas.
- Projektavimo patikrinimai: I profilis, kurio IFC profilio pavadinimas nėra W, S, IPE, HEA ar HEB dydis (arba kurio dydis su juo nesutampa), laikomas suvirintu ir grąžinamas „netikrinta“, taip pat vamzdžiai, kampuočiai, kanalai, liekni elementai ir sukimas. Patikrinimų dar neperžiūrėjo joks inžinierius.
- Nubraižytų elementų negalima kopijuoti po vieną, pasukti, veidrodinti ar sukti masyvu (galima kopijuoti visą lygį), taip pat nėra skaidomos sienos, Teksto įrankio ar uždangos sienos. Siena, kuri aukštesniame lygyje susitinka su žemesnio lygio siena, nekerpama į tos sienos 3D kūną, o žiniaraščiai aukštesnio lygio angą rodo pagal jos sienos lygį.
- Šeimos: bibliotekos šeimos, bendrinamos tarp projektų, neįgyvendintos. Šeimos ir kopijuoti lygiai dar neatidaryti kitose BIM programose.
- MEP: įranga yra bendrinė (be gamintojų duomenų); tee ir reduktoriai plieniniuose ruošiniuose yra bendriniai, ne pagal ASME B16.9 lentelę; bibliotekos elementų, įdėtų iš {{ui:Biblioteka}} skirtuko, jungtys neįrašomos į IFC; niekas neperžiūrėta inžinieriaus.
- Augalų priedas dar negali nubraižyti nukreipto maršruto į modelį, numeruoti ruošinių savo izometriniuose brėžiniuose ar patikrinti iš bibliotekos įdėtos įrangos išdėstymo.
- Augalų iš CivilCraft augalų bibliotekos dar negalima įdėti iš BimCraft {{ui:Biblioteka}} skirtuko.
- Energija: nėra valandinio modeliavimo, nėra ISO 52016-1 metodo ir nėra klimato failų. Turtas: nėra talpinamo dvynio, kuris saugotų rodmenis ar siųstų įspėjimus, kai BimCraft uždarytas.
- Skenavimų registracija išbandyta su bandomaisiais skenavimais, dar ne su tikro skeneriaus skenavimų rinkiniu; E57 failai vis dar atsidaro iki 6 milijonų taškų ir 512 MB.
- Projekto paketai atsidaro tik BimCraft (kitos programos išdėstymą priima per **Atidaryti programoje …**), o paketai ir dviejų programų rinkinys išbandyti su imitacijomis, dar ne su pačiomis Archicad ar Revit.

Viskas kita yra [Kas dar neįgyvendinta](topic:not-built-yet).
