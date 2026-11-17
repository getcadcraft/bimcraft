---
title: Sienų formos, skaidymas, poslinkis, tempimas ir fiksavimas
summary: Braižykite sienas stačiakampiu, daugiakampiu, lanku, pasirinktose linijose arba aplink kontūrą; skaidykite jas, išimkite gabalą, perkelkite poslinkiu, tempkite langeliu, lygiuokite ir fiksuokite vieną prie kitos, prie matmens ar tinklelio linijos. Kiekvienas pakeitimas laiko sienas sujungtas ir yra vienas anuliavimo žingsnis.
keywords: keisti tipą, pakeisti tipą, perrinkti tipą, kas pasikeitė, lod, plėtros lygis, jungimo stilius, įstrižas, sandūra, išlyginti statmenai, sienų jungtys, kitas, eina per, neleisti jungties, leisti jungtį, sluoksnių prioritetas, šerdis, prioritetas, sankryža, stačiakampis, pasuktas stačiakampis, daugiakampis, įbrėžtas, apibrėžtas, lankas, centras, liestinis lankas, pasirinkti linijas, skirtukas, atsekti, kontūras, burtų lazdelė, skaidyti, skaidyti su tarpu, tarpas, naikinti atkarpą, sujungti, poslinkis, kopija, langelio tempimas, rėmelis, tempimas, lygiuoti, fiksuoti, spynelė, apribojimas, fiksuoto matmens redagavimas, tinklelis, fiksuoti prie tinklelio, perkelti tinklelio liniją, padėties poslinkis, nesujungta, laisvai stovinti, augti nuo, matuoti nuo, centro linija, vidinis paviršius, išorinis paviršius, atjungti, alt
from: 5b7d2f75
---

## Ką darysite

Kurkite ir keiskite sienas su sienų įrankio receptais. Kiekvienas baigiasi kaip braižant sieną pagal kampus: kampai susijungia patys, jungtys išsaugomos faile, o visas pakeitimas yra vienas žingsnis **Pakeitimuose**, kurį {{ui:Anuliuoti}} atšaukia. Sienos išlaiko savo tapatybę: siena, kurią skaidote, poslinkiu perkeliate ar tempiate, lieka ta pati siena, su savo durimis, langais ir matmenimis.

## Nubraižykite stačiakampį, daugiakampį ar lanką

Įjungus {{ui:Braižymas}}, atidarykite {{ui:Figūros}} Braižymo grupėje (arba pasirinkite figūrą sienos eilutės **Forma** sąraše). Sienos eilutėje rodomas sienos tipas, braižymo atskaita, išorinė pusė ir viršus, kaip sienos įrankiui. Tada spustelėkite arba įveskite taškus (x,y · @dx,dy · @ilgis<kampas · ilgis palei žymeklį):

- **Stačiakampis**: du priešingi kampai. Keturios sienos, keturi sujungti kampai, vienas žingsnis.
- **Pasuktas stačiakampis**: kur prasideda ir baigiasi pirmoji kraštinė (tai nustato jos posūkį ir ilgį), tada trečias spustelėjimas kitai kraštinei.
- **Daugiakampis**: centras, tada kampas (**Įbrėžtas**) arba kraštinės vidurys (**Apibrėžtas**). Pirmiausia nustatykite **Kraštinių skaičių** (nuo 3 iki 64).
- **Lankas pagal centrą**: centras, pradžia (tai nustato spindulį), pabaiga. **Apėjimo kryptis**: trumpesnis kelias, prieš laikrodžio rodyklę arba pagal laikrodžio rodyklę. Lankas, apimantis tris ketvirčius apskritimo, nubraižomas kaip dvi sienos.
- **Liestinis lankas**: spustelėkite sienos galą, tada vietą, kur lankas baigiasi. Lankas išeina iš sienos galo sienos pačios kryptimi.

Uždara figūra gauna išorę į išorę. Nubraižytos ties **Išorinis paviršius** ar **Vidinis paviršius**, paviršius, kurį spustelėjate, yra tas, kuris lieka vietoje.

## Sienos ant jau turimų linijų

- **Pasirinkti linijas**: spustelėkite liniją, ir siena užeis ant jos. Paspauskite {{key:Tab}} (arba laikykite {{key:Shift}} spustelėdami), kad pasiimtumėte visą linijų grandinę, sujungtą galas su galu. Linijos yra šio vaizdo braižymo linijos, sekimo atskaita ir tinklelio linijos.
- **Atsekti kontūrą**: spustelėkite vidų srities, uždaros tomis linijomis ar sienomis. Sienos eina aplink mažiausią sritį aplink spustelėjimą.

## Nustatykite prieš braižydami: poslinkis ir jungtis

Sienos eilutėje yra dar du laukai, naudojami {{ui:Siena}} įrankio ir figūrų:

- **Poslinkis**: sienos nubraižomos tokiu atstumu nuo spustelėtos linijos: + į jos kairę, − į jos dešinę, žiūrint taip, kaip braižote.
- **Jungimas**: nuimkite žymėjimą, kad nubraižytumėte laisvai stovinčias sienas. Jų galai gauna **Uždrausti jungimą** ir lieka laisvi, kad ir kur eitų (žr. [Keisti sieną](topic:change-a-wall-or-door)).

## Skaidykite, išimkite gabalą, sujunkite iš naujo

Atidarykite {{ui:Sienos}} Redagavimo grupėje.

- **Skaidyti**: spustelėkite sieną ten, kur ją reikia perpjauti, arba įveskite atstumą nuo jos pradžios. Šalia sienos, kuri ją kerta, pjūvis prisitraukia prie vietos, kur jos susitinka. Dvi dalys turi tą patį tipą ir lieka sujungtos galas su galu. **Tarpas** palieka tarpą tiek ilgio, centruotą ties pjūviu. **Laisvi galai** pjūvio galams vietoj to suteikia Uždrausti jungimą (Parametrai › BimCraft › Sienos › **Kai siena skaidoma** nustato, kuris pažymėtas iš pradžių). Durys ar langas eina su dalimi, kurioje stovi; per jas pjūvis atmetamas.
- **Naikinti atkarpą**: spustelėkite, kur gabalas prasideda ir kur baigiasi. Jame esančios durys eina su juo.
- **Sujungti**: spustelėkite dvi vienos sienos dalis (vienoje linijoje, to paties tipo). Jos vėl tampa viena siena, pirmoji, kurią spustelėjote, su abiejų dalių durimis.

## Jungimo stilius, Uždrausti jungimą, sluoksnių prioritetas

Atidarykite {{ui:Sienos}} Redagavimo grupėje.

- **Sujungimo stilius**: spustelėkite kampą, kur dvi tiesios sienos baigiasi. Kiekvienas spustelėjimas pereina į kitą stilių: **Įstrižai** (abu galai pjaunami pagal liniją nuo vidinio iki išorinio kampo, su kuo prasideda kiekvienas kampas), **Sandūra** (viena siena eina iki kitos sienos išorinio paviršiaus, kuris remiasi į jos šoną) ir **Išlyginti statmenai** (kaip sandūra, o siena, einanti per, baigiasi statmenai; stačiu kampu atrodo kaip sandūra). **Kitas** arba {{key:Tab}} padaro kitą sieną ta, kuri eina per. Juostos sąrašas **Stilius** rodo kampą, kurį spustelėjote paskutinį. Tie patys du pasirinkimai yra vienos sienos **Savybėse**: **Sujungimo stilius pradžioje / pabaigoje** ir **Eina per**. Kiekvienas pakeitimas yra vienas žingsnis **Pakeitimuose**. Planas, 3D kūnas, kambariai ir kiekiai seka.
- Prie T jungties visada eina per ta siena, kurios šonas yra sutiktas. Kur dvi sienos kertasi, spustelėjimas (arba **Tęstinė kertant** Savybėse) nurodo, kuri iš dviejų yra tęstinė; tai lemia, kurios sienos sluoksniai nubraižomi per sankryžą.
- Stilius priklauso jungčiai: jis išlieka, kai sienos juda, ir dingsta tik tada, kai dingsta pati jungtis (siena ištrinama, skaidoma tame gale arba galas gauna Uždrausti jungimą). Kampas su lenkta siena arba ten, kur susitinka trys ar daugiau sienų, išlieka įstrižas. Kampas, aštresnis nei apie 30 laipsnių, arba plokštesnis nei apie 150, taip pat grįžta prie įstrižo.
- **Uždrausti jungimą**: spustelėkite šalia sienos galo. Tas galas atlaisvinamas: nieko nejungia, kad ir kur siena eitų, kol vėl jo nespustelėsite. Laisvi galai pažymimi kryžiuku, kol įrankis įjungtas. Tas pats jungiklis yra **Jungti pradžioje / Jungti pabaigoje** Savybėse.
- **Sluoksnių prioritetas**: kur susitinka sienos su sluoksniais, stipresnis sluoksnis kerta silpnesnį, todėl šerdys jungiasi prie šerdžių, o apdaila remiasi į stipresnį sluoksnį. Kiekvienas sluoksnis turi prioritetą nuo 0 iki 999; pagal nutylėjimą jis paimamas iš sluoksnio funkcijos (konstrukcija 800, pagrindas 600, izoliacija 400, membrana 300, apdaila 200, oro tarpas 100). {{ui:Sluoksnių prioritetas}} atidaro sienos konstrukciją, kur stulpelis **Prioritetas** nustato paties sluoksnio numerį. Sluoksniai vienodu prioritetu remiasi vienas į kitą, o linija nubraižoma tik tarp skirtingų medžiagų. Matote tai planuose su **Vidutiniu** ar **Smulkiu** detalumu, kampuose, T jungtyse ir dviejų tiesių sienų sankirtose; Parametrai › BimCraft › Sienos › **Valyti sienų sluoksnius, kur sienos susitinka** tai išjungia. Tai keičia tik tai, kas nubraižoma sienų viduje: sienų kontūrai ir kiekiai lieka tokie, kokius duoda sujungimo stilius.

## Pakeiskite daugelio sienų tipą

Pereinant nuo eskizinių planų prie darbinių brėžinių, daugiausia keičiamas tipas: bendrinė siena tampa konkrečia konstrukcija. Nieko nereikia perbraižyti.

1. Pasirinkite sienas (vieną arba kelias su {{key:Ctrl}} ar {{key:Shift}}).
2. Savybėse paspauskite **{{ui:Keisti tipą…}}** po **Sienos tipas** (arba atidarykite {{ui:Sienos}} Redagavimo grupėje ir pasirinkite {{ui:Keisti tipą}}, kuris atveria tą patį sąrašą). Sąrašas atsidaro Savybėse, pasirinktų sienų bloke. Tai nėra dialogas ir nieko neuždengia: plano, 3D vaizdo ir pasirinkimas veikia, kol jis atidarytas, ir jis seka sienas, kurias pasirenkate.
3. Sąraše rodomas kiekvienas sienos tipas su storiu ir LOD žyma, pavyzdžiui „Wall 230 generic, LOD 200“ ir „230 clay brick, plastered both sides, LOD 300“. Tipai, kuriuos pasirinktos sienos dabar turi, pažymimi. Įrašykite į **{{ui:Ieškoti}}**, kad susiaurintumėte: pavadinimą, storį ar `lod 300`.
4. Spustelėkite tipą. Kiekviena pasirinkta siena pakeičiama vienu žingsniu, todėl vienas {{ui:Anuliuoti}} atšaukia visą keitimą. Mažas x uždaro sąrašą.

Kiekviena siena išlaiko savo atskaitos liniją. Siena, kurios ašis yra centre, auga į abi puses; siena, kurios atskaitos linija yra paviršius, išlaiko tą paviršių ir auga kita kryptimi, o prie jos prijungtos sienos seka kampuose. Sienos, užrakintos prie keičiamos sienos, taip pat seka ją. Durys ir langai lieka savo sienose ir perkertami iš naujo pagal naują storį.

Po keitimo sąrašas rodo **Kas pasikeitė**: kiek sienų pasikeitė ir į ką, storį bei LOD prieš ir po, sienas, kurios pasislinko į šalį, kad išlaikytų savo atskaitos liniją, prijungtas sienas, kurios sekė, durys ir langai, įdėti iš naujo, ir kiekvienas kambarys, kurio plotas pasikeitė, su jo plotu prieš ir po. Būsenos juosta sako tą patį vienoje eilutėje. Ataskaita tik praneša; ji niekada nesustabdo keitimo. **Savybės › Sienos tipas** pasirinkimas atlieka tą patį keitimą ir pateikia tą pačią ataskaitą.

Du dalykai sustabdo keitimą, tada nieko nepakeičiama: durys ar langas, kurie daugiau nebetilps savo sienoje (siena trumpėja ten, kur seka kampas; pirmiausia padarykite duris siauresnes arba perkelkite jas nuo kampo), ir užraktas, kurį keitimas sugadintų (siena, užrakinta prie tinklelio linijos per savo centro liniją, kai jos atskaitos linija yra paviršius; atrakinkite ją arba grąžinkite atskaitos liniją į centro liniją).

Prie BimCraft prijungtas asistentas gali atlikti tą patį keitimą (įrankiai `wall_types_list` ir `walls_swap_type`) ir gauna tą pačią ataskaitą.

Sienos tipo LOD žyma nustatoma sienos konstrukcijos redaktoriuje: žr. [Sienų konstrukcijos](topic:wall-assemblies).

## Poslinkis ir langelio tempimas

- **Poslinkis**: spustelėkite sieną, tada pusę, į kurią ją perkelti, arba įveskite atstumą. Siena pasislenka statmenai sau, o prie jos prijungtos sienos ištempiamos. Pažymėkite **Kopija**, jei norite lygiagrečios kopijos (ji nėra sujungta su originalu).
- **Langelio tempimas**: spustelėkite du dėžės kampus, tada tašką, iš kurio judinti, ir tašką, į kurį judinti. Kiekvienas sienos galas dėžės viduje perkeliamas; siena, visiškai dėžėje, pajuda, o į ją atsiremiančios sienos pajuda kartu; dėžę kertančios sienos ištempiamos.

## Redaguokite matmenį ir užfiksuokite jį

Pasirinkite atskaitos matmenį ({{ui:Anotuoti}} › {{ui:Orientacinis matmuo}}) ir įveskite jo reikšmę **Savybėse**: antrosios jo atskaitos sienos ir jai statmenai pasislenka, pirmoji atskaita išlieka, o prijungtos sienos seka. Pažymėkite **{{ui:Fiksuoti šį matmenį}}**, kad išlaikytumėte reikšmę: kai vėliau pajuda viena iš sienų, kita seka. Užrakinta reikšmė negali būti perrašyta, kol jos nepanaikinate žymėjimo.

## Lygiuoti ir fiksuoti

**{{ui:Lygiuoti ir fiksuoti}}**: spustelėkite sienos paviršių (arba ašį, arti sienos vidurio) ar tinklelio liniją, tada paviršių sienos, kurį atvesti į tą liniją. Siena pasislenka statmenai jai. Pirmiausia pažymėkite **{{ui:Fiksuoti}}**, kad jos liktų sulygiuotos: planas rodo spynelę, o kai viena siena pajuda, kita seka. Sienos **Savybės** išvardija jos **Užraktus**, kiekvieną su **Atrakinti**.

## Fiksuokite sienas prie tinklelio linijų

Pasirinkite sieną, einančią išilgai tinklelio linijos arba kurios galas ant jos stovi, ir savo **Savybėse** › **{{ui:Fiksuoti prie tinklelio}}** pasirinkite tinklelio liniją. Tada pasirinkite tinklelio liniją {{ui:Tinklelis}} įrankiu ir įveskite atstumą į **{{ui:Perkelti per}}**: linija pasislenka statmenai sau, o prie jos užrakintos sienos seka kartu su prijungtomis sienomis vienu žingsniu. Siena, užrakinta prie tinklelio linijos, negali būti pajudinta nuo jos pati (perkelkite liniją arba atrakinkite sieną); tinklelio linija, pasukta taip, kad užrakinta siena negalėtų likti statmena jai, atmetama. Linijos pervadinimas užrakto neatjungia; jos ištrynimas užraktą pašalina.

## Ilgis: kuri pusė išlieka ir ką jis matuoja

- **Didinti nuo** (vienos sienos Savybės): **Pradžia išlaiko** (keičiasi galas), **Pabaiga išlaiko** (keičiasi pradžia) arba **Centras išlaiko** (abu galai pasislenka per pusę). Kol įvedate Ilgį, planas pažymi tašką, kurį jis išlaiko. Sienos, prijungtos prie galo, kuris juda, pasislenka statmenai sau ir išlaiko savo kampą.
- **Matuoti nuo** (šalia Matmenų plane, Savybėse ir Parametrai › BimCraft › Sienos): centro linija, vidinis paviršius arba išorinis paviršius. Ilgio laukas ir plano sienų matmenys rodo tą patį, todėl sutampa. Pradžioje tai centro linija.
- Norėdami perkelti sieną laisvai nuo jos jungčių (jos nutrūksta, siena išlaiko savo tapatybę), laikykite {{key:Alt}} tempdami jos vidurinę rankenėlę.

## Verta žinoti

- Šie receptai yra sienų įrankio specifikacijos (puslapiai 4–9). Jungimo stilius ir sluoksnių prioritetas sukurti tiesioms sienoms; sluoksnių prioritetas rodomas tik plane (ne pjūviuose, fasaduose ar 3D, kur siena yra vienas kūnas), ne trijų ar daugiau sienų mazguose, o membranos neperkeliamos.
- Jungties stilius įrašomas jos įraše IFC faile (`IfcRelConnectsPathElements` pavadinimas, pavyzdžiui `CadCraft join L butt 1`), todėl kitos programos vis dar skaito jungtį, o senesnis failas atsidaro su įstrižais kampais.
- Užraktai ir jungtys įrašomi IFC faile (užraktai kaip `CadCraft_WallHolds` projekte, jungtys kaip `IfcRelConnectsPathElements`), todėl jie yra, kai failą atidarote vėl.
- Lenktas sienas galima skaidyti, sujungti iš naujo ir išimti gabalą; jų neperkeliama poslinkiu ir neužrakinama.
- Taip pat žr. [Braižyti sienas](topic:draw-walls), [Keisti sieną, duris ar langą](topic:change-a-wall-or-door) ir [Sienos formos keitimas](topic:wall-shape).
