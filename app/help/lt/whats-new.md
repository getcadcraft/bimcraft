---
title: Kas naujo 0.9 versijoje
summary: Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas prie tinklelio, lygiai žemiau žemės, tinklelio matmenys ir Matuoti plane, dubliuoti vaizdai su darbo stiliais ir pieštukų lentelėmis, Ataskaita kaip, Collada ir Google Earth eksportas, Scan to BIM, vėjo ir seisminė analizė, priedai spausdinimui dervomis.
keywords: kas naujo, 0.9, leidimo pastabos, sienų formos, stačiakampis, daugiakampis, lankas, pasirinkti linijas, atsekti kontūrą, poslinkis, jungimas, langelio tempimas, lygiuoti ir fiksuoti, skaidyti sieną, tarpas, sujungti, fiksuoti prie tinklelio, didinti nuo, matuoti nuo, pridėti lygį žemiau, rūsys, lygio komanda, tinklelio matmenys, matuoti plane, darbo stilius, dubliuoti vaizdą, savas egzempliorius, susietas vaizdas, pieštukų lentelė, spausdinti kaip matoma, ataskaita kaip, pamatuoti mastelį, importuoti svg, įdėti į planą, įdėti į modelį, collada, dae, kmz, google earth, scan to bim, vėjo apkrova, seisminė, baigtinių elementų, dokumentų skydelis, spausdinimas dervomis, kas naujo, kas naujo, leidimo pastabos, keitimų žurnalas, pakeitimai, 0.8, 0.8.1, versija, naujos funkcijos, evakuacija, žmonės, eilės, akustika, reverberacija, impulsinis atsakas, potvynis, vėjas, žemės drebėjimas, pavojus, gyvavimo ciklas, tarnavimo laikas, ids, žymos, žiniaraščiai, perkelti, lygiuoti, paskirstyti, paveikslėlis, fonas, skenavimas į sienas, vietovė iš civilcraft, skydų brėžiniai, karkasas, saulė, pv, skaidymas, vrf, ventiliatoriaus ritinys, vamzdžių dydžiavimas, kabelių dėklas, apšvietimas, betonas, seismika, skenavimo palyginimas, epsg, projekcija, dokumentai, šablonas, anglies pėdsakas, kaina, energyplus, atvaizdavimo variklis, atidaryti programoje, usd, glb, unreal, anuliavimas, priedai, pcf, simboliai, augalai, sekimas, pieštukai, juosta, projekto naršyklė, išdėstymas
from: 5624fe88
---

Tai, kas pasikeitė BimCraft 0.9 versijoje, palyginti su 0.8.1. Dvi didžiosios temos yra tikras sienų įrankis ir vaizdai, kurie elgiasi taip, kaip tikisi žmonės, atėję iš didžiųjų BIM programų. Aplink jas: Collada eksportas, asistentai, galintys įdėti elektros prietaisus, Scan to BIM ir vėjo, seisminė bei baigtinių elementų analizė skirtuke {{ui:Analizė}}.

## Naujos

### Sienos

- **Braižykite visas figūras.** {{ui:Braižymas}} grupėje atidarykite {{ui:Figūros}} (arba pasirinkite figūrą sienos eilutės **Forma** sąraše): stačiakampį, pasuktą stačiakampį, daugiakampį nuo 3 iki 64 kraštinių, lanką pagal centrą, liestinį lanką, sienas pasirinktose linijose arba aplink uždarą sritį, kurią spustelėjate viduje. Stačiakampis yra keturios sienos su keturiais sujungtais kampais ir vienas anuliavimo žingsnis. Žr. [Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas](topic:wall-tools).
- **Nustatykite prieš braižydami, keiskite vėliau.** Sienos eilutėje yra {{ui:Poslinkis}} ir {{ui:Sujungimas}} (nuimkite žymėjimą, kad nubraižytumėte laisvai stovinčias sienas). Vėliau nubraižytoms sienoms naudokite {{ui:Poslinkis}}, {{ui:Tempti langeliu}} ir {{ui:Lygiuoti ir fiksuoti}}. Perkelta ar ištempta siena išlaiko savo duris, langus ir matmenis. Kiekvienas receptas yra vienas anuliavimo žingsnis.
- **Pjaukite sienas.** {{ui:Skaidyti}}, {{ui:Tarpas}}, {{ui:Laisvi galai}}, {{ui:Naikinti atkarpą}} ir {{ui:Sujungti}} perpjauna sieną spustelėjus arba ten, kur ją kerta kita siena. Pjūvis per duris atmetamas. Žr. [Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas](topic:wall-tools).
- **Fiksuokite sienas prie tinklelio linijų.** Pasirinkite sieną išilgai tinklelio linijos ir pažymėkite {{ui:Fiksuoti prie tinklelio}} {{ui:Savybėse}}. Įjungus tinklelio įrankį, įveskite atstumą į {{ui:Perkelti per}} pasirinktai linijai, o užrakintos sienos seka vienu anuliavimo žingsniu.
- **Formuokite vieną sieną.** {{ui:Savybėse}} vienos sienos galite prijungti jos viršų ar pagrindą prie stogo, perdangos ar lubų, redaguoti jos kontūrą fasade, ją pasvirinti arba iškirsti sienos angą be durų ar langų. Žr. [Sienos formos keitimas](topic:wall-shape).
- **{{ui:Didinti nuo}}** nustato, ar pradžia, pabaiga ar centras išlieka vietoje, kai keičiate ilgį.
- **Ilgis ir plano matmuo sutampa.** {{ui:Matuoti nuo}} (centro linija, vidinis paviršius ar išorinis paviršius) valdo ir Ilgio lauką, ir plano sienų matmenis. Pradžioje tai centro linija, todėl plano sienų matmenys dabar rodo centro liniją ten, kur anksčiau rodė išorinį paviršių. Keiskite tai sienos eilutėje, {{ui:Savybėse}} arba {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Sienos}}.

### Lygiai, tinkleliai ir matavimas

- **Pridėti lygį žemiau.** {{ui:Pridėti lygį žemiau}} {{ui:Lygiai}} skydelyje prideda lygį po žemiausiu, tokio pat aukščio, kaip jis, neigiamame aukštyje (Level -1, Level -2). Nieko kito nejuda. {{ui:Pridėti lygius…}} dabar priima neigiamus aukščius. Įvedus LEVEL, LEVELS, STOREY ar STOREYS komandų eilutėje, atsidaro {{ui:Pridėti lygius…}}, o meniu ir juostos skirtukuose yra {{ui:Lygiai}} mygtukas. Žr. [Vietovės, pastatai ir lygiai](topic:site-building-and-levels).
- **Tinklelio matmenys plane.** Įjungus {{ui:Tinklelis}} įrankį, pažymėkite {{ui:Matmenys}}, kad nubraižytumėte tarpą tarp gretimų linijų ir bendrą dydį už burbuliukų kiekvieno lygio plane. Žr. [Tinklelio matmenys](topic:grid-dimensions).
- **Matuokite plane.** {{ui:Matuoti}} {{ui:Braižymas}} grupėje pateikia atstumą su X ir Y skirtumais tarp dviejų spustelėjimų. Modelyje nieko neįrašoma. Žr. [Matuoti plane](topic:measure-on-the-plan).
- **Keiskite kelias kolonas vienu metu.** Pasirinkite kolonas kartu su siena, ir pasirinkimas parodo kiekvieną tipą su {{ui:Palikti tik šiuos}}. Vienas spustelėjimas palieka kolonas ir parodo jų bendrus laukus.
- **Vienas rodomas vienetas visur.** Koordinatės, matavimai, pjūviai, lapų mastelis, rėmo skirtuko apkrovos ir rezultatai bei Problemų tekstas seka vienetą, kurį pasirenkate. Eksportai lieka SI.

### Vaizdai, lapai ir spausdinimas

- **Darbo stilius.** {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Darbo stilius}} pasirenka, ar kiekvienas vaizdas turi savo anotacijas ir pieštukų lenteles, ar jas bendrina. Žr. [Darbo stilius, dubliuoti vaizdai, pieštukai popieriuje, Ataskaita kaip ir šablonai](topic:working-style).
- **Dubliuokite vaizdą.** Planai, lubų planai, iškvietimai, fasadai ir pjūviai gali būti dubliuojami kaip {{ui:Savas egzempliorius}} arba {{ui:Susietas}}; {{ui:Padaryti savarankiška kopija}} padaro susietą nepriklausomą. Žr. [Darbo stilius, dubliuoti vaizdai, pieštukai popieriuje, Ataskaita kaip ir šablonai](topic:working-style).
- **Spausdinkite kaip matote arba per pieštukų lentelę.** Pieštukų perrašymai išsaugomi IFC kartu su vaizdu, o lapai ir PDF piešia juos taip, kaip ekranas. Ta pati tema aprašo pieštukų lenteles.
- **Ataskaita kaip.** {{ui:Ataskaita kaip}} {{ui:Savybėse}} įrašo perdangą, nubraižytą kaip kelią, sieną kaip skydą ar stogą kaip rampą į IFC kaip pasirinktą klasę ir skaičiuoja ją taip žiniaraščiuose, Kiekiuose, Ieškoti, Spalva pagal ir Problemose.
- **Redaguokite fasaduose ir pjūviuose.** Braižykite ir perkelkite sienas, angas, lygius, matmenis ir pastabas tiesiai fasade ar pjūvyje, su savo lapų dydžiais ir antraštės blokais. Žr. [Redaguoti fasaduose ir pjūviuose](topic:edit-in-elevations).
- **Lapai.** Kiekvienas lapas gali būti horizontalus ar vertikalus. Lango {{ui:Įveskite mastelį}} yra šalia mastelių sąrašo kiekviename įdėtame vaizde (1:64, 2:1, 1/4" = 1'). Įdėtą brėžinį galite tempti ar stumdyti rodyklių klavišais, o {{ui:Formatai…}} › {{ui:Importuoti SVG…}} paverčia jūsų lapo dizainą antraštės bloku su laukais, įvestais kiekvienam lapui.
- **Bibliotekos kreditai ant lapo.** Brėžinių rinkinys su bibliotekos elementais gauna Bibliotekos kreditų žiniaraštį, kurį galite įdėti į bet kurį lapą. Žr. [Bibliotekos kreditai](topic:library-credits).

### Biblioteka: įdėjimas

- **Įdėjimas seka vaizdą.** Plano vaizde Biblioteka rodo {{ui:Įdėti į planą}}; 3D vaizde ji rodo {{ui:Įdėti į modelį}}; skaidytame vaizde ji rodo skaidymo mygtuką su {{ui:Įdėti į planą}} kaip pagrindiniu veiksmu. Abu būdai įrašo tą patį IFC elementą. Taip pat galite vilkti Bibliotekos kortelę į planą ar 3D vaizdą; pieštuku ar pirštu paspauskite ir palaikykite, tada vilkite. Žr. [Įdėti iš bibliotekos](topic:place-from-library).

### Failai ir asistentai

- **Collada ir Google Earth.** {{ui:Collada}} įrankių juostoje (meniu Failas meniu stiliuose) įrašo .dae arba .kmz, padėtą ten, kur modelis yra žemėlapyje. Žr. [Eksportuoti modelį kaip Collada ar Google Earth](topic:collada).
- **Asistentai gali įdėti elektros prietaisus.** Prijungtas asistentas turi naujus įrankius pridėti, išvardyti, pakeisti ir ištrinti prietaisus bei nustatyti šviesas. Asistentai išjungti, kol jų neįjungsite {{ui:Parametrai}}. Žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
- **Scan to BIM (priedas).** Išjungtas pagal nutylėjimą ir reikia Taškų debesų priedo. Iš skenavimo siūlo perdangas, sienas, duris ir langus su išmatuotu nuokrypiu kiekvienam; priėmimas yra vienas anuliavimo žingsnis.

### Analizė

- **Vėjo ir seisminiai vietovės duomenys.** {{ui:Analizė}} skirtuke: vėjo apkrovos pagal ASCE 7-10 ar 7-16 standžiam uždaram pastatui, su jėga kiekvienam aukštui kaip apkrovų atvejais; seisminiai vietovės duomenys su USGS paieška ir projektiniu spektru.
- **Konstrukcijos tolesnis darbas ir baigtiniai elementai.** Betono patikros pagal ACI 318-19, ekvivalentinės šoninės jėgos pagal ASCE 7-22, aukšto poslinkis, perdangos ir sienos kaip plokštės bei apkrovų deriniai pagal ASCE 7 ir EN 1990. Mūsų baigtinių elementų variklis skaičiuoja apvalkalus, tetraedrus ir modalinę analizę. Žr. [Patikrinti betoninius elementus ir sudaryti seismines apkrovas](topic:concrete-and-seismic) ir [Rėmo analizė](topic:frame-analysis).

### Kiti priedai ir dokumentai

- **Vidaus apšvietimas (priedas).** Įdeda šviestuvus ir įrašo liuksus kaip skaičius į kiekvieno lygio planą, su blizgesio įvertinimu ir spausdinamu ataskaita.
- **Dokumentų skydelis.** {{ui:Failas}} › {{ui:Dokumentai…}} turi išėmimą ir grąžinimą su užrakto failu, peržiūros raidėmis, leidimo būsenomis ir istorija.
- **Regionai ir plienas.** Pietų Afrikos brėžinių ir statybos reglamentų paketai Reguliavimo priede, o 976 Jungtinės Karalystės plieno dydžiai bendroje profilių lentelėje.
- **Nemokami dervų spausdinimo priedai.** Pjaustyklė, atramos ir plokštė, ekspozicijos bandymas, o GOO, SL1, Chitubox ir Anycubic failų formatai; visi išjungti pagal nutylėjimą.

## Visose programose

- Užvedus pelę ant mygtuko ar valdiklio rodomas Bootstrap patarimas.
- Pradžios patarimas tuščioje braižymo srityje turi uždarymo mygtuką; BimCraft prisimena, kad jis buvo uždarytas.
- Skirtukų juosta, kuri netelpa, dabar slenka, o ne nukerpama.
- Atidarius dokumentą naršyklės skirtukas rodo „<dokumentas> - BimCraft | CadCraft“.
- {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Išdėstymas}} išdėstymai yra išskleidžiamasis sąrašas su dviejų eilučių pasirinkimais.
- Kalbų sąrašas {{ui:Parametrai}} siūlo daugiau kalbų nei 0.8; kalbos, kitos nei anglų, yra mašininiai juodraščiai.

## Ištaisyta

- **Perkėlimas veikia laiptams** ir rampoms, turėklams, stogo plokštumoms, laisvai stovintiems prietaisams, paveikslėliams ir takams.
- **Sienos vilkimas nebeiškreipia kambario.** Centro rankenėlė perkelia sieną statmenai sau, o jos kampai slysta palei prijungtas sienas. Laikykite {{key:Mod}} seno laisvo perkėlimo, {{ui:Statmenai}} grąžina 90 laipsnių.
- **Storio ar tipo pakeitimas sujungtame mazge** dabar išlaiko kampą uždarytą prie L, T, trijų sienų mazgo ir šalia lenktos sienos.
- **Judinant ar kopijuojant kambarių grupę** sujungtos sienos už grupės lieka sujungtos.
- **Perdarymas išlaiko matmens sienos tapatybę.**
- **Sienos pasirinkimas su išjungtu braižymu** nebeduoda klaidos Savybėse.
- **Atvaizdavimas pereina į WebGL**, kai GPU negali paleisti, vietoj to, kad sustotų.
- **EnergyPlus patikrą** galima vėl įjungti.
- **Dokumentai atsidaro kaip centruotas dialogas.** {{key:Esc}}, X ar paspaudimas ant užtemdyto puslapio jį uždaro.
- **Mygtukai {{ui:Planas}}, {{ui:Skaidyti}} ir {{ui:3D}} rodomi**, kai tik atidarytas modelis, o ne tik tada, kai buvo kartą įjungtas Braižymas.

## Sąžiningos ribos

- Niekas nebuvo spausdinta tikrame įrenginyje. Dervos atramos yra naujos ir neišbandytos.
- Vėjo, seisminiai, betono ir baigtinių elementų rezultatai yra patikros priemonės inžinieriui, patikrintos pagal uždaras formules, o ne pagal tikrą pastatą.
- Apšvietimo įvertinimas patikrintas pagal mūsų pačių sekimą, ne pagal kitas apšvietimo programas.
- Pietų Afrikos skaičiai nepatvirtinti.
- Sienų jungimo stiliai (sandūra, įstrižas, išlyginti statmenai) ir sluoksnių prioritetas nėra įgyvendinti; kampai yra įstrižai.
- Kalbos, kitos nei anglų, yra mašininiai juodraščiai.

Viskas kita yra [Kas dar neįgyvendinta](topic:not-built-yet). Ankstesni pakeitimai yra 0.8 ir 0.8.1 pastabose šiame puslapyje žemiau.

## Ankstesnės: 0.8 ir 0.8.1

Tai, kas pasikeitė BimCraft 0.8 (2026-11-01) ir 0.8.1 (2026-11-02) versijose, palyginti su 0.7. BimCraft dabar gali atsakyti į klausimus apie pastatą ir jį išbandyti su žmonėmis, garsu, vandeniu, vėju ir žemės drebėjimais, ir nubraižyti su daugiau įrankių; 0.8.1 yra klaidų taisymo leidimas.

### Naujos

**Išbandykite pastatą**

- **Žmonės pastate.** Kairiojo skydelio skyrius {{ui:Žmonės pastate}} praveda evakuaciją arba įprastą dienos atvykimą per jūsų kambarius, duris ir laiptus. Matote eiles ten, kur pastatas susiaurėja, ilgiausią kelią iki išėjimo iš kiekvieno kambario ir tai, kiek laiko užima paskutinis žmogus. Pažymėkite {{ui:Uždaryta}} ant durų, kad pamatytumėte, kas pasikeičia, ir pažymėkite {{ui:Rodyti žmones 3D vaizde}}, kad stebėtumėte vaikštančius. Rezultatai eina į Problemas. Grubus minios modelis projektavimo sprendimams, ne gaisrinės saugos sertifikatas. Žr. [Praeiti pastatą su žmonėmis](topic:people-in-the-building).
- **Kambarių akustika, ir išgirskite.** Skyrius {{ui:Patalpų akustika}} pateikia kiekvieno kambario reverberacijos laiką pagal oktavos juostas (Sabine ir Eyring) iš jo dydžio ir jūsų pasirinktos apdailos, o su savo tikslu pasako, kiek sugerties reikėtų jam pasiekti. {{ui:Groti šioje patalpoje}} groja balsą, plojimą, pjaunamas natas ar jūsų garso failą per kambariui apskaičiuotą impulsinį atsaką. Sugerties skaičiai yra tipinės paskelbtos reikšmės, kurias galite pakeisti. Žr. [Patalpų akustika](topic:room-acoustics).
- **Potvynio, vėjo ir žemės drebėjimo atkūrimas.** {{ui:Pavojaus atkūrimas}} rodo vandens kilimą per kambarius, vėjo slėgį kiekvienam aukštui ir žemės drebėjimą, purtantį aukštus, plane ar fasade su laiko slankikliu. Paprasti modeliai su jų prielaidomis skydelyje; ne kodo patikra. Žr. [Atkurti potvynį, vėją ar žemės drebėjimą](topic:hazard-playback).
- **Ką nusidėvi per penkiasdešimt metų.** {{ui:Gyvavimo ciklo vaizdas}} išvardija langus, duris, apdailas ir stogą su kiekvieno tarnavimo laiku, metais, kada juos keičia, o kai įvedate kainą už vienetą, kainą pagal metus ir jos dabartinę vertę. {{ui:Įrašyti žiniaraštį (CSV)}} jį išsaugo. Tarnavimo laikai yra planavimo skaičiai. Žr. [Pamatykite, kas nusidėvi per penkiasdešimt metų](topic:life-cycle-view).
- **Betono ir seismikos patikros.** {{ui:Betoniniai elementai}} ir {{ui:Seisminės apkrovos}} blokai {{ui:Analizė}} skirtuke tikrina betono sijas ir kolonas pagal ACI 318-19 ir sudaro ekvivalentines šonines jėgas pagal ASCE 7-22 standžioms perdangoms, su aukšto poslinkiu. Patikrina inžinierius. Žr. [Patikrinti betoninius elementus ir sudaryti seismines apkrovas](topic:concrete-and-seismic).

**Tikrinkite ir ataskaitokite**

- **Patikrinkite pagal IDS.** Įkelkite `.ids` failą, kurį jums davė klientas, ir pamatykite visus elementus, kurie jo neatitinka, Problemose, prieš pristatydami IFC. Atidarykite {{ui:Patikrinti pagal IDS}} po {{ui:Modelio patikros}}. Žr. [Patikrinti modelį pagal kliento IDS](topic:check-against-ids).
- **Žymos ir žiniaraščiai.** Apibrėžkite savo žymas, nustatykite jas daugeliui elementų vienu metu ir kurkite žiniaraščius, kurių stulpeliai, filtrai ir grupės jas skaito; žymos išsaugomos IFC. Žr. [Žymos ir žiniaraščiai](topic:tags-and-schedules).
- **Dokumentai iš modelio.** {{ui:Dokumentai iš modelio}} užpildo specifikacijos šabloną iš atidaryto IFC ir išsaugo jį kaip PDF, Word dokumentą ar Markdown. Žr. [Dokumentai iš modelio](topic:documents-from-the-model).
- **Palyginkite skenavimą su modeliu.** Atidarę taškų debesį, {{ui:Palyginti}} vertina kiekvieną elementą kaip pastatytą, iš dalies pastatytą, trūkstamą ar nepasiektą ir rodo procentą pastatyto. Žr. [Palyginti skenavimą su modeliu](topic:compare-scan-with-model).
- **Anglies pėdsakas ir kaina.** Anglies skydelis sudeda įkūnytą anglies pėdsaką iš koeficientų lentelės, kurią galite redaguoti, o Kainos skydelis paskirsto kainas per 4D grafiką. BimCraft pateikiami koeficientai yra bendriniai ir pažymėti kaip nepatikrinti. Žr. [Įkūnytas anglies pėdsakas ir kaina](topic:embodied-carbon-and-5d-cost).
- **Bet kuri kartografinė projekcija.** {{ui:Matuoti}} › {{ui:Koordinačių sistema…}} priima EPSG numerį, UTM zoną, pavadinimą ar jūsų pačių projekcijos apibrėžimą. Žr. [Georeferencinimas su bet kuria projekcija](topic:georeference-any-projection).

**Braižykite ir redaguokite**

- **Perkelti, lygiuoti ir paskirstyti.** Po {{ui:Braižymas}}; {{key:Shift+M}} pradeda perkėlimą (paprastas {{key:M}} vis dar yra Matuoti). Perkėlimas kopijuoja, kai judate, su {{key:C}}, kiekvienas žingsnis yra vienas anuliavimas, ir jis keliauja Live TeamWork sesijoje. Žr. [Perkelti, kopijuoti, lygiuoti ir paskirstyti](topic:move-align-distribute).
- **Paveikslėliai po planu.** {{ui:Braižymas}} › {{ui:Paveikslėlis}} įdeda PNG, JPEG ar WebP po lygio planu ar vertikalioje plokštumoje. Mastelį nustatykite dviem taškais ir perkelkite, pasukite, pritemdykite ir užrakinkite. Sritis, nukopijuota MarkupCraft, įklijuojama pagal savo lapo mastelį. Žr. [Padėkite paveikslėlį po planu](topic:pictures-as-backgrounds).
- **Sienos iš skenavimo.** Atidarius skenavimą, sienos, durys ir kambariai ateina kaip pasiūlymai, kuriuos priimate ar atmetate po vieną, viename anuliavimo žingsnyje. Randamos tik sienos dviem statmenomis kryptimis. Žr. [Paverskite skenavimą sienomis](topic:scan-to-walls).
- **Atsekimas, pieštukai ir eskizo laiptai.** {{ui:Sekimas}} rodo kitą lygį brūkšniuotai po planu, {{ui:Pieštukai}} duoda sienoms, durims ir langams savo linijos storį viename vaizde, o {{ui:Eskizo laiptai}} paverčia vaikščiojimo liniją laiptais. Atsidaro Wavefront OBJ tinklas. Žr. [Atsekti lygį, pieštukus ir laiptus iš eskizo](topic:trace-pens-stairs-obj).
- **Pastatai aplink adresą.** Pastatai ir sklypas, kuriuos rado CivilCraft Adresas į vietą, ateina kaip pasiūlymai; pažymite tuos, kuriuos norite pridėti. Žr. [Pradėkite nuo CivilCraft vietovės](topic:site-from-civilcraft).
- **Skydų brėžiniai.** {{ui:Build}} › {{ui:Skydų brėžiniai}} įrėmina sienas, perdangas ir stogus iš medienos ar lengvo plieno ir įrašo pjovimo sąrašą kaip CSV, o dirbtuvių brėžinius kaip PDF. Pradinės reikšmės, ne konstrukcinis projektas. Žr. [Skydų brėžiniai](topic:panel-drawings).
- **Simbolių paletė ir augalai.** {{ui:Build}} › {{ui:Simbolių paletė}} randa elektros ir santechnikos simbolius pagal pavadinimą; {{ui:Augalai}} šaltinis {{ui:Bibliotekos}} sąraše išvardija apie 400 augalų su plano simboliais. Žr. [Simbolių paletė](topic:symbol-palette) ir [Įdėkite augalą](topic:plant-list).

**Vamzdžiai, ortakiai ir energija**

- **Skaidymas, VRF ir ventiliatoriaus ritiniai.** Vidiniai ir išoriniai blokai su jų jungtimis ir linijų rinkiniai dydžiuojami pagal lentelę su tipinėmis pavyzdinėmis reikšmėmis, kurias galite keisti. Žr. [Skaidymas, VRF ir ventiliatoriaus ritiniai](topic:split-vrf-fan-coils).
- **Skaičiavimai.** Skaičiavimų skydelis tikrina tiekimo vamzdžių ir ortakių dydžius pagal slėgio kritimą, nukreipia kabelius per dėklus ir vamzdžius bei rodo jų užpildymą, ir skaičiuoja apšvietimą iš IES ar EULUMDAT failų. Pagal nutylėjimą reikšmės pažymėtos; įveskite savo kodo reikšmes. Žr. [Vamzdžių, ortakių, kabelių ir šviesos skaičiavimai](topic:mep-calculations).
- **PCF failai.** Vamzdžio įrankio **Eksportuoti PCF** įrašo maršrutus vamzdžių įtempių ir izometrinėms programoms, o perskaitytas PCF failas nubraižo jo vamzdį. Žr. [Vamzdžių komponentų failai](topic:piping-pcf).
- **Saulės PV.** Įdėkite masyvus ant stogų ar žemės, nuspalvinkite juos pagal modelį, įvertinkite metinę energiją, patikrinkite grandines ir sudarykite vienos linijos schemos duomenis. Pradinis modulis ir nuostoliai yra bendriniai. Žr. [Saulės PV](topic:solar-pv).
- **EnergyPlus failas.** Skydelis Tikrinti su EnergyPlus įrašo modelį kaip IDF, kurį paleisite savo EnergyPlus. Paleidimas naršyklėje reikalauja jūsų pačių talpinamos versijos ir adreso, kurį įvedate; BimCraft jos neteikia. Žr. [Tikrinti šildymą ir vėsinimą su EnergyPlus](topic:check-with-energyplus).

**Paveikslėliai ir failai**

- **Pasirinkite atvaizdavimo variklį.** {{ui:Atvaizduoti}} turi {{ui:Variklis}} pasirinkimą. Mūsų du įmontuoti varikliai (Greitas ir Kelio sekiklis) lieka pagal nutylėjimą. {{ui:Atidaryti programoje}} įrašo sceną kaip USD ar glTF failą, o Unreal projekto aplanką kaip .zip; CadCraft Studio priedas gali pridėti variklį. Unreal įskiepis, kuris atidaro projektą, dar neišleistas. Žr. [Pasirinkite, kuri programa nubraižo paveikslėlį](topic:render-engines).
- **Studio anuliavimas.** CadCraft Studio viduje BimCraft praneša Studio kiekvieną baigtą žingsnį, kad Studio galėtų anuliuoti jūsų paskutinį žingsnį lange, kurį naudojote paskutinį. Žr. [Anuliavimas tarp programų](topic:undo-across-apps).
- **Priedai jūsų faile.** IFC įrašo, kurie priedai į jį rašė, ir pasiūlo tuos, kurių jums trūksta, kai jį atidarote. Žr. [Priedai jūsų faile](topic:add-ons-in-your-file).

**Visose programose**

- **Prijunkite savo DI.** Jūsų asistentas gali valdyti BimCraft per Studio ryšį ir atsakyti į klausimus apie modelį, pavyzdžiui, kurie kambariai yra po tam tikru plotu. Studio neturi savo DI. Žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
- **Įrankių juostos eilutės.** {{ui:Parametrai}} › {{ui:Bendroji}} › {{ui:Įrankių juostos eilutės}} siūlo Apvynioti, 2 eilutes ar 1 eilutę; Apvynioti lieka pagal nutylėjimą.
- **Įvesties įrenginiai.** Jutiklinė dalis, pieštukas, 3D pelė, valdiklis ir MIDI nustatymai bendri visoms programoms.
- **Problemos ir Gyvi.** Įspėjimų skydelis ir Gyvos sesijos veikia kaip anksčiau, o nauji aukščiau nurodyti patikrinimai maitina Problemas.
- **Kalbos.** 54 kalbos, dešimt iš jų naujos. Kalbos, kitos nei anglų, yra mašininiai juodraščiai, dar neperskaityti gimtosios kalbos specialisto; pagalbos temos daugiausia anglų kalba.

### Ištaisyta 0.8.1

- **Juostos + Projekto naršyklės išdėstymas.** Įterpti › Importuoti CAD, Įterpti › Paveikslėlis ir Tvarkyti › Projekto vienetai rašė „Dar neįgyvendinta BimCraft“. Paveikslėlis dabar atidaro Paveikslėlio įrankį, Importuoti CAD atidaro {{ui:Versija}} › {{ui:Iš brėžinio…}} (DWG, DXF, PDF ar skenavimas), o Projekto vienetai atidaro {{ui:Parametrai}} › {{ui:Visuotiniai}} › {{ui:Vienetai}}. Perkėlimas ir Lygiavimas paleidžia Perkėlimo ir Lygiavimo įrankius, Lygis atidaro {{ui:Pridėti lygius…}}, Fazės atidaro Renovacijos fazių skyrių, o Medžiagos atidaro medžiagų biblioteką.
- **DWG klasių skyrius.** Jis buvo skaitomas kaip netinkamas tipas; ištaisyta BimCraft ir kitose programose, kurios skaito DWG.
- **Kalba veikimo metu.** Studio ir supakuoti leidimai dabar gali pakeisti kalbą be perkrovimo. Tai dar neišbandyta visose platformose; praneškite, jei kalba nepasikeičia.
- **Archicad paketo scenarijus.** `archicad_bundle.py`, atskiras atsisiuntimas, dabar suranda Archicad kelią, stebi aplanką iki 20 sekundžių ir bando dar kartą šalia paketo.

### Dar neįtraukta į šią versiją

- **Saugos ir projektavimo pagalbos priemonės.** Žmonės pastate neturi kelio ilgio ribos pagal statybos kodeksą (ją įvedate); jis nebuvo patikrintas rankiniu būdu su tikru planu. Akustikos, gyvavimo ciklo ir pavojaus skaičiai yra planavimo vertės, ne kodo patikra.
- **Klimato ateitys ir EnergyPlus.** Nėra įmontuotų klimato ateičių: potvynio paleidimui galite įkelti scenarijaus failą. EnergyPlus paleidimas naršyklėje nėra šio leidimo dalis.
- **Juostos išdėstymas.** Medžiagų kiekių sąrašas lieka „Nėra įgyvendinta“, nes BimCraft neturi medžiagų kiekių sąrašo, o dar 54 pilkai pažymėti juostos įrankiai neturi BimCraft įrankio.
- **Parašai ir platformos.** Windows diegimo programos ir macOS .dmg yra nepasirašyti, todėl SmartScreen rodo {{ui:Daugiau informacijos}}, o po to {{ui:Vis tiek paleisti}}, o macOS reikia dešiniojo pelės mygtuko, tada {{ui:Atvira}}. iPad ir iPhone versija nebuvo perkurta 0.8.1 versijai.
- **Tikrų puslapių testai.** Kai kurie senesni BimCraft naršyklės testai mūsų testavimo puslapyje vis dar nepraeina, kaip ir prieš 0.8.1.

Viskas kita yra [Kas dar neįgyvendinta](topic:not-built-yet). Ankstesni pakeitimai yra [Kas naujo 0.7 versijoje](topic:whats-new-0-7).
