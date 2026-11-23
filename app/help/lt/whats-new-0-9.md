---
title: Kas naujo 0.9 versijoje (ankstesnė)
summary: Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas prie tinklelio, lygiai žemiau žemės, tinklelio matmenys ir matavimas plane, dubliuoti vaizdai su darbo stiliais ir pieštukų lentelėmis, Ataskaita kaip, Collada ir Google Earth eksportas, Scan to BIM, vėjo ir seisminė analizė, spausdinimo priedai dervomis.
keywords: kas naujo 0.9, ankstesnis leidimas, kas naujo, 0.9, leidimo pastabos, sienų formos, stačiakampis, daugiakampis, lankas, pasirinkti linijas, kontūras, poslinkis, sujungimas, langelio tempimas, lygiuoti ir fiksuoti, skaidyti sieną, tarpas, sujungti iš naujo, fiksuoti prie tinklelio, didinti nuo, matuoti nuo, pridėti lygį žemiau, rūsys, lygio komanda, tinklelio matmenys, matuoti plane, darbo stilius, dubliuoti vaizdą, savarankiška kopija, susietas vaizdas, pieštukų lentelė, spausdinti kaip matoma, ataskaita kaip, įvesti mastelį, importuoti svg, įterpti į planą, įterpti į modelį, collada, dae, kmz, google earth, scan to bim, vėjo apkrova, seisminė, baigtinių elementų, dokumentų skydelis, spausdinimas dervomis, kas naujo, leidimo pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, evakuacija, žmonės, eilės, akustika, reverberacija, impulsinis atsakas, potvynis, vėjas, žemės drebėjimas, pavojus, gyvavimo ciklas, tarnavimo trukmė, ids, žymos, žiniaraščiai, perkelti, lygiuoti, paskirstyti, paveikslėlis, fonas, skenavimas į sienas, aikštelė iš civilcraft, skydų brėžiniai, karkasas, saulės, pv, skaidymas, vrf, ventiliatoriaus ritė, vamzdžių dydžiavimas, kabelių lentynos, apšvietimas, betonas, seisminis, palyginti skenavimą, epsg, projekcija, dokumentai, šablonas, anglies pėdsakas, kaina, energyplus, atvaizdavimo variklis, atidaryti su, usd, glb, unreal, anuliuoti, priedai, pcf, simboliai, augalai, atsekti, pieštukai, sudėtinė juosta, projekto naršyklė, maketas
from: 816df7f8
---

Tai, kas pasikeitė BimCraft 0.9 versijoje, palyginti su 0.8.1. Dvi pagrindinės temos: tikras sienų įrankis ir vaizdai, kurie elgiasi taip, kaip tikisi žmonės, atėję iš didžiųjų BIM programų. Šalia jų — Collada eksportas, asistentai, galintys įrengti elektros įrenginius, Scan to BIM, bei vėjo, seisminė ir baigtinių elementų analizė skirtuke {{ui:Analizė}}.

## Naujovės

### Sienos

- **Braižykite visas formas.** {{ui:Braižymas}} skiltyje atidarykite {{ui:Figūros}} (arba pasirinkite formą sąraše Forma sienų eilutėje): stačiakampį, pasuktą stačiakampį, daugiakampį su 3–64 kraštinėmis, lanką pagal centrą, liestinį lanką, sienas ant pasirinktų linijų arba sienas aplink uždarą sritį, į kurią spustelėsite. Stačiakampis yra keturios sienos su keturiais sujungtais kampais ir vienas anuliavimo žingsnis. Žr. [Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas](topic:wall-tools).
- **Nustatykite prieš braižydami, keiskite vėliau.** Sienų eilutėje yra {{ui:Poslinkis}} ir {{ui:Sujungimas}} (nuimkite žymėjimą, kad braižytumėte laisvai stovinčias sienas). Vėliau naudokite {{ui:Poslinkis}}, {{ui:Tempti langeliu}} ir {{ui:Lygiuoti ir fiksuoti}} nubraižytoms sienoms. Perkelta ar patempta siena išlaiko savo duris, langus ir matmenis. Kiekvienas receptas yra vienas anuliavimo žingsnis.
- **Pjaukite sienas.** {{ui:Skaidyti}}, {{ui:Tarpas}}, {{ui:Laisvi galai}}, {{ui:Naikinti atkarpą}} ir {{ui:Sujungti}} perpjauna sieną spustelėjimu arba ten, kur kita siena ją kerta. Pjūvis per duris atmetamas. Žr. [Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas](topic:wall-tools).
- **Fiksuokite sienas prie tinklelio linijų.** Pasirinkite sieną išilgai tinklelio linijos ir pažymėkite {{ui:Fiksuoti prie tinklelio}} skiltyje {{ui:Savybės}}. Kai įjungtas tinklelio įrankis, įveskite atstumą laukelyje {{ui:Perkelti per}} pasirinktai linijai, ir užfiksuotos sienos seka vienu anuliavimo žingsniu.
- **Formuokite vieną sieną.** Skiltyje {{ui:Savybės}} vienai sienai galite prijungti jos viršų ar pagrindą prie stogo, perdangos ar lubų, redaguoti jos aukščio kontūrą, pasvirti ją arba išpjauti sienos angą be durų ar langų. Žr. [Sienos forma](topic:wall-shape).
- **Ilgis parodo, kuris galas lieka vietoje.** {{ui:Didinti nuo}} nustato, ar keičiant ilgį lieka pradžia, galas ar centras.
- **Ilgis ir plano matmuo sutampa.** {{ui:Matuoti nuo}} (centro linija, vidinis paviršius ar išorinis paviršius) valdo tiek lauką Ilgis, tiek plano sienų matmenis. Iš pradžių ji matuoja nuo centro linijos, todėl plano sienų matmenys dabar rodo centro liniją ten, kur anksčiau rodė išorinį paviršių. Keiskite ją sienų eilutėje, skiltyje {{ui:Savybės}} arba {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Sienos}}.

### Lygiai, tinkleliai ir matavimas

- **Pridėkite lygį žemiau.** {{ui:Pridėti lygį žemiau}} skydelyje {{ui:Lygiai}} prideda lygį po žemiausiu, tokio pat aukščio, neigiamame aukštyje (Level -1, Level -2). Nieko kito nejuda. {{ui:Pridėti lygius…}} dabar priima neigiamus aukščius. Įvedus LEVEL, LEVELS, STOREY arba STOREYS komandinėje eilutėje, atsidaro {{ui:Pridėti lygius…}}, o meniu ir juostų skirtukuose yra mygtukas {{ui:Lygiai}}. Žr. [Vietovės, pastatai ir lygiai](topic:site-building-and-levels).
- **Tinklelio matmenys plane.** Įjungę {{ui:Tinklelis}} įrankį, pažymėkite {{ui:Matmenys}}, kad būtų nubraižomas tarpas tarp gretimų linijų ir bendras dydis už burbuliukų kiekvieno lygio plane. Žr. [Tinklelio matmenys](topic:grid-dimensions).
- **Matavimas plane.** {{ui:Matuoti}} grupėje {{ui:Braižymas}} parodo atstumą ir X bei Y skirtumus tarp dviejų spustelėjimų. Modelyje nieko neišsaugoma. Žr. [Matavimas plane](topic:measure-on-the-plan).
- **Keiskite kelis stulpelius vienu metu.** Pasirinkite stulpelius kartu su siena, ir sąraše kiekviena rūšis pateikiama su {{ui:Palikti tik šiuos}}. Vienu spustelėjimu paliekami stulpeliai ir rodomi jų bendri laukai.
- **Vienas rodymo vienetas visur.** Koordinatės, matavimai, pjūviai, lapų mastelis, rėmo skirtuko apkrovos ir rezultatai bei Problemų tekstas seka jūsų pasirinktą vienetą. Eksportai lieka SI.

### Vaizdai, lapai ir spausdinimas

- **Darbo stilius.** {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Darbo stilius}} leidžia pasirinkti: ar kiekvienas vaizdas turi savas anotacijas ir pieštukų lenteles, ar jas naudoja bendrai. Žr. [Darbo stilius, dubliuoti vaizdai, pieštukai ant popieriaus, Ataskaita kaip ir šablonai](topic:working-style).
- **Dubliuokite vaizdą.** Planai, lubų planai, iškvietimai, fasadai ir pjūviai gali būti dubliuojami kaip {{ui:Savarankiška kopija}} arba {{ui:Susieta}}; {{ui:Padaryti savarankiška kopija}} padaro susietą vaizdą nepriklausomą. Žr. [Darbo stilius, dubliuoti vaizdai, pieštukai ant popieriaus, Ataskaita kaip ir šablonai](topic:working-style).
- **Spausdinkite kaip matote arba per pieštukų lentelę.** Pieštukų perrašymai išsaugomi IFC kartu su vaizdu, o lapai ir PDF piešiami taip, kaip ekranas. Ta pati tema apima pieštukų lenteles.
- **Ataskaita kaip.** {{ui:Ataskaita kaip}} skiltyje {{ui:Savybės}} įrašo perdangą, nubrėžtą kaip kelią, sieną kaip skydą ar stogą kaip rampą į IFC kaip jūsų pasirinktą klasę ir skaičiuoja ją taip žiniaraščiuose, kiekiuose, Ieškoti, Spalva pagal ir Problemose.
- **Redaguokite fasaduose ir pjūviuose.** Braižykite ir perkelkite sienas, angas, lygius, matmenis ir pastabas tiesiai fasade ar pjūvyje su savo lapų dydžiais ir antraštės blokais. Žr. [Redagavimas fasaduose ir pjūviuose](topic:edit-in-elevations).
- **Lapai.** Kiekvienas lapas gali būti horizontalus arba vertikalus. Šalia masteliu sąrašo kiekviename įdėtame vaizde yra laukelis {{ui:Įveskite mastelį}} (1:64, 2:1, 1/4" = 1'). Įdėtą brėžinį galite vilkti arba pastumti rodyklių klavišais, o {{ui:Formatai…}} › {{ui:Importuoti SVG…}} paverčia jūsų lapo maketą antraštės bloku su laukais, įvestais kiekvienam lapui.
- **Bibliotekos kreditai lape.** Brėžinių rinkinys su bibliotekos elementais gauna bibliotekos kreditų žiniaraštį, kurį galite įdėti į bet kurį lapą. Žr. [Bibliotekos kreditai](topic:library-credits).

### Biblioteka: įterpimas

- **Įterpimas seka vaizdą.** Plano vaizde biblioteka rodo {{ui:Įterpti į planą}}; 3D vaizde — {{ui:Įterpti į modelį}}; skaidytame vaizde — skaidomą mygtuką su {{ui:Įterpti į planą}} kaip pagrindiniu veiksmu. Abu būdai įrašo tą patį IFC elementą. Bibliotekos kortelę galite vilkti ir į planą, ir į 3D vaizdą; pieštuku ar pirštu — paspauskite ir palaikykite, tada vilkite. Žr. [Įterpimas iš bibliotekos](topic:place-from-library).

### Failai ir asistentai

- **Collada ir Google Earth.** {{ui:Collada}} įrankių juostoje (meniu stiliuose — meniu {{ui:Failas}}) įrašo .dae failą arba .kmz failą, kuris patalpinamas ten, kur modelis yra žemėlapyje. Žr. [Eksportuokite modelį kaip Collada arba Google Earth](topic:collada).
- **Asistentai gali įrengti elektros įrenginius.** Prijungtas asistentas turi naujų įrankių įrenginiams pridėti, išvardyti, keisti ir ištrinti bei šviestuvams nustatyti. Asistentai lieka išjungti, kol jų neįjungsite {{ui:Parametrai}}. Žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
- **Scan to BIM (priedas).** Išjungtas pagal numatytuosius nustatymus ir reikalauja taškų debesų priedo. Jis siūlo perdangas, sienas, duris ir langus iš skenavimo su išmatuotu nuokrypiu kiekvienam; priėmimas yra vienas anuliavimo žingsnis.

### Analizė

- **Vėjo ir seisminiai vietovės duomenys.** Skirtuke {{ui:Analizė}}: vėjo apkrovos pagal ASCE 7-10 ar 7-16 standžiam uždaram pastatui, su jėga kiekvienam aukštui kaip apkrovos atvejais, ir seisminiai vietovės duomenys su USGS paieška bei projektiniu spektru.
- **Konstrukcijų tęsinys ir baigtiniai elementai.** Betono patikros pagal ACI 318-19, ekvivalentinės skersinės jėgos pagal ASCE 7-22, aukšto poslinkis, perdangos ir sienos kaip plokštės bei apkrovų deriniai pagal ASCE 7 ir EN 1990. Mūsų pačių baigtinių elementų variklis atlieka apvalkalus, tetraedrus ir modalinę analizę. Žr. [Patikrinkite betoninius elementus ir sukurkite seismines apkrovas](topic:concrete-and-seismic) ir [Rėmų analizė](topic:frame-analysis).

### Kiti priedai ir dokumentai

- **Interjero apšvietimas (priedas).** Įdeda šviestuvus ir įrašo liuksus kaip skaičius į kiekvieno lygio planą, su švytėjimo įvertinimu ir spausdinama ataskaita.
- **Dokumentų skydelis.** {{ui:Failas}} › {{ui:Dokumentai…}} turi išėmimą ir grąžinimą su užrakto failu, peržiūros raidėmis, leidimo būsenomis ir istorija.
- **Regionai ir plienas.** Pietų Afrikos brėžinių ir statybos reglamentų paketai Reglamentų priede bei 976 JK plieno profiliai bendroje skerspjūvių lentelėje.
- **Nemokami dervų spausdinimo priedai.** Pjaustymo programa, atramos ir pagrindo plokštė, ekspozicijos bandymas bei GOO, SL1, Chitubox ir Anycubic failų formatai, visi pagal numatytuosius nustatymus išjungti.

## Visose programose

- Užvedus pelę ant mygtuko ar valdymo elemento, rodoma Bootstrap užuomina.
- Pradžios užuomina tuščioje brėžimo srityje turi uždarymo mygtuką; BimCraft prisimena, kad ji buvo uždaryta.
- Skydelio skirtukų juosta, kuri netelpa, dabar slenka vietoj to, kad būtų nukirsta.
- Atidarius dokumentą, naršyklės skirtuke rodoma „<dokumentas> - BimCraft | CadCraft“.
- {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Išdėstymas}} yra išskleidžiamasis sąrašas su dviejų eilučių pasirinkimais.
- Kalbų sąrašas {{ui:Parametrai}} siūlo daugiau kalbų nei 0.8; kalbos, kitos nei anglų, yra mašininiai juodraščiai.

## Ištaisyta

- **Perkėlimas veikia laiptams** ir rampoms, turėklams, stogo plokštumoms, laisvai stovintiems įrenginiams, paveikslėliams ir keliams.
- **Sienos tempimas nebeiškreipia patalpos.** Centrinė rankenėlė perkelia sieną statmenai sau, o jos kampai slysta palei sujungtas sienas. Laikykite {{key:Mod}}, kad gautumėte senąjį laisvą perkėlimą; {{ui:Sustatyti statmenai}} grąžina 90 laipsnių.
- **Storio ar tipo keitimas sujungtame mazge** dabar palieka kampą uždarytą prie L, T, trijų sienų mazgo ir šalia lenktos sienos.
- **Kambarių grupės perkėlimas ar kopijavimas** palieka sujungtas sienas už grupės ribų sujungtas.
- **Perdaryti išlaiko sienos matmens tapatumą.**
- **Pasirinkus sieną su išjungtu Braižymu,** Savybėse nebesukeliama klaida.
- **Atvaizdavimas pereina į WebGL,** kai GPU negali paleisti, vietoj to, kad sustotų.
- **EnergyPlus patikrą** galima vėl įjungti.
- **Dokumentai atidaromi kaip centruotas dialogas.** {{key:Esc}}, X arba spustelėjimas ant pritemdyto puslapio jį uždaro.
- **Mygtukai {{ui:Planas}}, {{ui:Skaidyti}} ir {{ui:3D}}** rodomi, kai tik atidarytas modelis, o ne tik po to, kai kartą buvo įjungtas Braižymas.

## Sąžiningos ribos

- Niekas nebuvo išspausdinta tikrame įrenginyje. Dervų atramos yra naujos ir neįrodytos.
- Vėjo, seisminiai, betono ir baigtinių elementų rezultatai yra inžinieriaus patikros priemonės, tikrintos pagal uždaras formules, o ne pagal tikrą pastatą.
- Scan to BIM buvo išbandytas su sintetiniu pastatu, o ne tikru skenavimu, ir randa tik stačiakampes patalpas.
- Collada čia neatidaryta Blender ar Google Earth.
- Apšvietimo įvertinimas patikrintas pagal mūsų pačių trasavimą, ne pagal kitas apšvietimo programas.
- Pietų Afrikos skaičiai nepatikrinti.
- Sienų jungimo stiliai (butt, mitre, square off) ir sluoksnių prioritetas neįgyvendinti; kampai sudaromi įstrižai.
- Kalbos, kitos nei anglų, yra mašininiai juodraščiai.

Viskas kita yra [Kas dar neįgyvendinta](topic:not-built-yet). Ankstesni pakeitimai yra 0.8 ir 0.8.1 pastabose žemiau šiame puslapyje.

## Ankstesni: 0.8 ir 0.8.1

Tai, kas pasikeitė BimCraft 0.8 (2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. BimCraft dabar gali atsakyti į klausimus apie pastatą ir jį išbandyti su žmonėmis, garsu, vandeniu, vėju ir žemės drebėjimais, bei braižyti su daugiau įrankių; 0.8.1 yra klaidų taisymo leidimas.

### Naujovės

**Išbandykite pastatą**

- **Žmonės pastate.** Kairiojo skydelio skyrius {{ui:Žmonės pastate}} praveda evakuaciją ar įprastos dienos atvykimus per jūsų patalpas, duris ir laiptus. Matote eiles ten, kur pastatas susiaurėja, ilgiausią kelią iki išėjimo iš kiekvienos patalpos ir tai, kiek laiko užtrunka paskutinis žmogus. Pažymėkite {{ui:Uždaryta}} ant durų, kad pamatytumėte, kas pasikeičia, ir pažymėkite {{ui:Rodyti žmones 3D vaizde}}, kad stebėtumėte vaikštančius žmones. Išvados patenka į Problemas. Tai grubus minios modelis projektavimo sprendimams, o ne gaisrinės saugos sertifikatas. Žr. [Praeikite žmones per pastatą](topic:people-in-the-building).
- **Patalpų akustika, ir išgirskite.** Skyrius {{ui:Patalpų akustika}} pateikia kiekvienos patalpos reverberacijos laiką pagal oktavų juostas (Sabine ir Eyring) iš jos dydžio ir jūsų pasirinktos apdailos, o su jūsų tikslu parodo, kiek sugerties reikėtų, kad jį pasiektų. {{ui:Groti šioje patalpoje}} groja balsą, plojimą, pjaunamas natas ar jūsų garso failą per impulsinį atsaką, apskaičiuotą patalpai. Sugerties skaičiai yra tipinės paskelbtos reikšmės, kurias galite pakeisti. Žr. [Patalpų akustika](topic:room-acoustics).
- **Potvynis, vėjas ir žemės drebėjimas atkūrimui.** {{ui:Pavojaus atkūrimas}} rodo vandenį, kylantį per patalpas, vėjo slėgį kiekvienam aukštui ir žemės drebėjimą, purtantį aukštus, plane ar fasade su laiko slankikliu. Paprasti modeliai su jų prielaidomis skydelyje; tai ne kodo patikra. Žr. [Atkurkite potvynį, vėją ar žemės drebėjimą](topic:hazard-playback).
- **Kas nusidėvi per penkiasdešimt metų.** {{ui:Gyvavimo ciklo vaizdas}} išvardija langus, duris, apdailą ir stogą su tarnavimo trukme kiekvienam, metus, kada jie keičiami, ir, kai įvedate kainą už vienetą, kainą pagal metus ir jos dabartinę vertę. {{ui:Įrašyti grafiką (CSV)}} ją išsaugo. Tarnavimo trukmės yra planavimo skaičiai. Žr. [Pamatykite, kas nusidėvi per penkiasdešimt metų](topic:life-cycle-view).
- **Betono ir seisminės patikros.** {{ui:Betoniniai elementai}} ir {{ui:Seisminės apkrovos}} blokai skirtuke {{ui:Analizė}} tikrina betonines sijas ir kolonas pagal ACI 318-19 ir sudaro ekvivalentines skersines jėgas pagal ASCE 7-22 standžiose perdangose, su aukšto poslinkiu. Skirta inžinieriui patikrinti. Žr. [Patikrinkite betoninius elementus ir sudarykite seismines apkrovas](topic:concrete-and-seismic).

**Tikrinimas ir ataskaitos**

- **Tikrinkite pagal IDS.** Įkelkite `.ids` failą, kurį jums davė klientas, ir Problemose pamatykite kiekvieną elementą, kuris jam neatitinka, prieš perduodant IFC. Atidarykite {{ui:Patikrinti pagal IDS}} skiltyje {{ui:Modelio patikros}}. Žr. [Patikrinkite modelį pagal kliento IDS](topic:check-against-ids).
- **Žymos ir žiniaraščiai.** Apibrėžkite savo žymas, nustatykite jas daugeliui elementų vienu metu ir sudarykite žiniaraščius, kurių stulpeliai, filtrai ir grupės jas skaito; žymos išsaugomos IFC. Žr. [Žymos ir žiniaraščiai](topic:tags-and-schedules).
- **Dokumentai iš modelio.** {{ui:Dokumentai iš modelio}} užpildo specifikacijos šabloną iš atidaryto IFC ir išsaugo jį kaip PDF, Word dokumentą ar Markdown. Žr. [Dokumentai iš modelio](topic:documents-from-the-model).
- **Palyginkite skenavimą su modeliu.** Atidarius taškų debesį, {{ui:Palyginti}} įvertina kiekvieną elementą kaip pastatytą, iš dalies pastatytą, trūkstamą arba nepasiektą, ir parodo pastatytą procentą. Žr. [Palyginkite skenavimą su modeliu](topic:compare-scan-with-model).
- **Anglies pėdsakas ir kaina.** Anglies skydelis sudeda įkūnytą anglies kiekį pagal faktorių lentelę, kurią galite redaguoti, o kainų skydelis paskirsto kainas per 4D grafiką. BimCraft pateikiami faktoriai yra bendri ir pažymėti kaip nepatikrinti. Žr. [Įkūnytas anglies kiekis ir kaina](topic:embodied-carbon-and-5d-cost).
- **Bet kokia žemėlapio projekcija.** {{ui:Matuoti}} › {{ui:Koordinačių sistema…}} priima EPSG numerį, UTM zoną, pavadinimą ar jūsų pačių projekcijos apibrėžimą. Žr. [Georeferencija su bet kokia projekcija](topic:georeference-any-projection).

**Braižymas ir redagavimas**

- **Perkelti, lygiuoti ir paskirstyti.** Po {{ui:Versija}}; {{key:Shift+M}} pradeda Perkėlimą (paprastas {{key:M}} vis dar yra Matavimas). Perkeldami kopijuojate su {{key:C}}, kiekvienas žingsnis yra vienas anuliavimas, o veiksmas veikia ir Live TeamWork sesijoje. Žr. [Perkelkite, kopijuokite, lygiuokite ir paskirstykite](topic:move-align-distribute).
- **Paveikslėliai po planu.** {{ui:Versija}} › {{ui:Paveikslėlis}} įdeda PNG, JPEG ar WebP po lygio planu arba ant vertikalios plokštumos. Mastelį nustatykite dviem taškais, o paveikslėlį perkelkite, sukite, blukinkite ir užfiksuokite. Sritis, nukopijuota MarkupCraft, įklijuojama pagal savo lapo mastelį. Žr. [Įdėkite paveikslėlį po planu](topic:pictures-as-backgrounds).
- **Sienos iš skenavimo.** Atidarius skenavimą, sienos, durys ir patalpos ateina kaip pasiūlymai, kuriuos priimate arba atmetate po vieną, vienu anuliavimo žingsniu. Randamos tik sienos dviejose statmenose kryptyse. Žr. [Paverskite skenavimą sienomis](topic:scan-to-walls).
- **Atsekimas, pieštukai ir laiptai iš eskizo.** {{ui:Atsekti}} rodo kitą lygį brūkšniuotai po planu, {{ui:Pieštukai}} suteikia sienoms, durims ir langams savo linijos storį viename vaizde, o {{ui:Laiptų eskizas}} paverčia ėjimo liniją laiptais. Atidaromas Wavefront OBJ tinklelis. Žr. [Atsekite lygį, pieštukus ir laiptus iš eskizo](topic:trace-pens-stairs-obj).
- **Pastatai apie adresą.** Pastatai ir sklypas, kuriuos rado CivilCraft Address to site, ateina kaip pasiūlymai; pažymėkite tuos, kuriuos norite pridėti. Žr. [Pradėkite nuo CivilCraft aikštelės](topic:site-from-civilcraft).
- **Skydų brėžiniai.** {{ui:Versija}} › {{ui:Sienų skydų brėžiniai}} rėmina sienas, perdangas ir stogus medienoje arba lengvo plieno profiliuose ir išsaugo pjovimo sąrašą kaip CSV, o dirbtuvių brėžinius — kaip PDF. Pradinės reikšmės, ne konstrukcinis projektas. Žr. [Skydų brėžiniai](topic:panel-drawings).
- **Simbolių paletė ir augalai.** {{ui:Versija}} › {{ui:Simbolių paletė}} randa elektros ir santechnikos simbolius pagal pavadinimą; {{ui:Augalai}} šaltinis skiltyje {{ui:Biblioteka}} išvardija apie 400 augalų su plano simboliais. Žr. [Simbolių paletė](topic:symbol-palette) ir [Įdėkite augalą](topic:plant-list).

**Vamzdžiai, kanalai ir energija**

- **Split, VRF ir ventiliatorių ritės.** Vidiniai ir lauko blokai su jų jungtimis bei linijų rinkiniai, dydžiuojami pagal lentelę su tipinėmis pavyzdinėmis reikšmėmis, kurias galite keisti. Žr. [Split, VRF ir ventiliatorių ritės](topic:split-vrf-fan-coils).
- **Skaičiavimai.** Skaičiavimų skydelis tikrina tiekimo vamzdžių ir kanalų dydžius su slėgio kritimu, nukreipia kabelius per lentynas ir vamzdžius bei parodo jų užpildymą, o apšviestumą apskaičiuoja pagal IES ar EULUMDAT failus. Numatytosios reikšmės pažymėtos; įveskite savo normų reikšmes. Žr. [Vamzdžių, kanalų, kabelių ir šviesos skaičiavimai](topic:mep-calculations).
- **PCF failai.** Vamzdžio įrankio **Eksportuoti PCF** įrašo linijas vamzdžių įtempių ir izometrinėms programoms, o perskaitytas PCF failas nubraižo jo vamzdį. Žr. [Vamzdžių komponentų failai](topic:piping-pcf).
- **Saulės PV.** Įdėkite masyvus ant stogų ar žemės, nuo modelio apskaičiuokite šešėlius, įvertinkite metinę energiją, patikrinkite grandines ir sudarykite vienlinijinės schemos duomenis. Pradinis modulis ir nuostoliai yra bendri. Žr. [Saulės PV](topic:solar-pv).
- **EnergyPlus failas.** Skydelis Tikrinti su EnergyPlus įrašo modelį kaip IDF, kad jį paleistumėte savo EnergyPlus. Paleisti naršyklėje reikia jūsų pačių sukurtos versijos ir įvesti jos adresą; BimCraft jos nepateikia. Žr. [Tikrinkite šildymą ir vėsinimą su EnergyPlus](topic:check-with-energyplus).

**Paveikslėliai ir failai**

- **Pasirinkite atvaizdavimo variklį.** {{ui:Atvaizduoti}} turi pasirinkimą {{ui:Variklis}}. Mūsų du įdėti varikliai (Fast ir Path tracer) lieka numatytaisiais. **Atidaryti su** įrašo sceną kaip USD ar glTF failą, o Unreal projekto aplanką — kaip .zip; CadCraft Studio priedas gali pridėti variklį. Unreal įskiepis, kuris atidaro projektą, nėra išleistas. Žr. [Pasirinkite, kuri programa nubraižo paveikslėlį](topic:render-engines).
- **Studio anuliavimas.** CadCraft Studio viduje BimCraft praneša Studio kiekvieną baigtą žingsnį, kad Studio galėtų anuliuoti jūsų paskutinį žingsnį bet kuriame lange, kurį naudojote paskutinį. Žr. [Anuliavimas tarp programų](topic:undo-across-apps).
- **Priedai jūsų faile.** IFC įrašo, kurie priedai į jį rašė, ir pasiūlo tuos, kurių neturite, kai jį atidarote. Žr. [Priedai jūsų faile](topic:add-ons-in-your-file).

**Visose programose**

- **Prijunkite savo DI.** Jūsų asistentas gali valdyti BimCraft per Studio ryšį ir atsakyti į klausimus apie modelį, pvz., kurios patalpos yra po tam tikru plotu. Studio pats DI neturi. Žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Įrankių juostos eilutės}} siūlo Wrap, 2 eilutes arba 1 eilutę; Wrap lieka numatytasis.
- **Įvesties įrenginiai.** Jutiklinės dalies, pieštuko, 3D pelės, valdiklio ir MIDI nustatymai bendri visoms programoms.
- **Problemos ir Live.** Įspėjimų skydelis ir Live sesijos veikia kaip anksčiau, o naujos aukščiau aprašytos patikros maitina Problemas.
- **Kalbos.** 54 kalbos, iš jų dešimt naujos. Kitos nei anglų kalbos yra mašininiai juodraščiai, kurių dar neperskaitė gimtakalbis; pagalbos temos daugiausia anglų kalba.

### Ištaisyta 0.8.1

- **Juostos ir projekto naršyklės maketas.** Įterpti › Importuoti CAD, Įterpti › Paveikslėlis ir Tvarkyti › Projekto vienetai rodė „Dar neįgyvendinta BimCraft“. Paveikslėlis dabar atidaro paveikslėlio įrankį, Importuoti CAD atidaro {{ui:Versija}} › {{ui:Iš brėžinio…}} (DWG, DXF, PDF ar skenavimas), o Projekto vienetai atidaro {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Vienetai}}. Perkelti ir Lygiuoti paleidžia atitinkamus įrankius, Lygis atidaro {{ui:Pridėti lygius…}}, Fazės atidaro renovacijos fazių skyrių, o Medžiagos atidaro medžiagų biblioteką.
- **DWG klasių skyrius.** Jis buvo nuskaitomas kaip netinkamas tipas; ištaisyta BimCraft ir kitose programose, kurios skaito DWG.
- **Kalba veikimo metu.** Studio ir supakuotos versijos dabar gali keisti kalbą be paleidimo iš naujo. Dar neišbandyta kiekvienoje platformoje; praneškite, jei kalba nesikeičia.
- **Archicad paketo scenarijus.** `archicad_bundle.py`, atskiras atsisiuntimas, dabar suranda Archicad kelią, stebi aplanką iki 20 sekundžių ir bando dar kartą šalia paketo.

### Dar neįgyvendinta šioje versijoje

- **Saugos ir projektavimo pagalbinės priemonės.** Žmonės pastate neturi kelionės atstumo ribos pagal statybos kodeksą (ribą įvedate jūs) ir nebuvo patikrinti rankiniu būdu tikrame plane. Akustikos, gyvavimo ciklo ir pavojaus skaičiai yra planavimo vertės, o ne kodo patikra.
- **Klimato ateitis ir EnergyPlus.** Klimato ateities nėra įmontuotos: potvynio paleidimui galite įkelti scenarijaus failą. EnergyPlus paleidimas naršyklėje šioje versijoje neįtrauktas.
- **Juostos maketas.** Medžiagų kiekių sąrašas lieka „Dar neįgyvendinta“, nes BimCraft neturi medžiagų kiekių sąrašo, o 54 kiti pilkai pažymėti juostos įrankiai dar neturi BimCraft įrankio.
- **Pasirašymas ir platformos.** Windows diegimo programos ir macOS .dmg nepasirašyti, todėl SmartScreen rodo {{ui:Daugiau informacijos}}, tada {{ui:Vis tiek paleisti}}, o macOS reikia dešiniuoju pelės klavišu spustelėti, tada {{ui:Atidaryti}}. iPad ir iPhone versija 0.8.1 nebuvo perkurta.
- **Tikri puslapių testai.** Kai kurie senesni BimCraft naršyklės testai vis dar nepraeina mūsų testų puslapyje, kaip ir prieš 0.8.1.

Viskas kita yra [Kas dar neįgyvendinta](topic:not-built-yet). Ankstesni pakeitimai yra [Kas naujo 0.7](topic:whats-new-0-7).
