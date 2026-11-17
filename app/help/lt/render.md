---
title: Atvaizduokite modelio vaizdą
summary: Padarykite 3D vaizdo dienos šviesos nuotrauką: dangus, saulė pagal vietovės platumą, minkšti šešėliai, stiklo langai; su WebGPU – spindulių trajektorijos sekimas grafikos plokštėje su dangumi, kamera, šviesų maišymu, tonavimu, rūku ir atvaizdavimo eile.
keywords: atvaizdavimas, išankstinis nustatymas, išankstiniai nustatymai, scenos nustatymas, vidus, išorė, pjūvio vaizdas, naktis, vienu paspaudimu, atvaizdavimas, spindulių trajektorijos sekimas, sekama spindulių trajektorija, spindulių sekimas, bendrasis apšvietimas, atspindžiai, lūžis, aukšta kokybė, nuotrauka, fotorealistinis, realistiškas, vaizdas, paveikslėlis, png, statinis vaizdas, dangus, saulė, dienos šviesa, šešėliai, minkšti šešėliai, aplinkos okliuzija, stiklas, langai, metalas, medžiagos, ekspozicija, ryškumas, debesuota, prieblanda, studija, pristatymas, vizualizacija, webgpu, triukšmo mažinimas, fizikinis dangus, hdri, ies, lauko gylis, panorama, baltos spalvos balansas, šviesų maišymas, atvaizdavimo elementai, exr, 16 bitų png, rūkas, kaustikos, atvaizdavimo eilė
from: beb74cc7
---

{{ui:Atvaizduoti}} įrankių juostoje padaro 3D vaizdo nuotrauką, panašią į dienos šviesą: dangų, saulę ten, kur ją padeda vietovės platuma, minkšti šešėliai, šviesa iš viso dangaus, kuri patamsina kampus, ir spalvos, kurios gali atrodyti kaip stiklas ar metalas. Modelis ir failas nekeičiami.

## Atvaizduoti vaizdą

1. Nustatykite 3D vaizdą taip, kaip norite matyti nuotrauką: sukite ir keiskite mastelį, paslėpkite aukštus ar elementus, kurių nenorite, ir nustatykite [pjūvį](topic:section-plane), jei nuotraukoje turi matytis pjūvis.
2. Spustelėkite {{ui:Atvaizduoti}} įrankių juostoje.
3. Pasirinkite {{ui:Scena}}, jei paspaustoji nėra tai, ko norite (žr. [Scenų nustatymai](topic:render#scene-presets-a-good-picture-in-one-click)), pasirinkite {{ui:Dydis}}, tada spustelėkite {{ui:Atvaizduoti}} dialoge.

   Vaizdas pildosi atvaizduojant ir su kiekvienu praėjimu tampa lygesnis. {{ui:Stabdyti}} (arba {{key:Esc}}) nutraukia anksčiau ir palieka vaizdą, koks jis yra.

4. Spustelėkite {{ui:Įrašyti}}, kad atsisiųstumėte PNG, arba {{ui:Įrašyti kaip}} kitam formatui (žr. [Vaizdo įrašymas](topic:render#save-the-picture)). Jis pavadinamas pagal modelio failą.

:::tip
Pradėkite nuo {{ui:Juodraštis}} su {{ui:Vaizdo dydis}}, kad patikrintumėte kamerą, tada atvaizduokite {{ui:Geras}} arba {{ui:Geriausias}} didesniu dydžiu galutinei nuotraukai.
:::

## Scenų nustatymai: gera nuotrauka vienu paspaudimu

Viršuje dialogo yra keturi {{ui:Scena}} mygtukai. Kiekvienas vienu paspaudimu nustato dangų, ryškumą, žemę, kraštų linijas, kokybę ir saulę, todėl prieš pirmą nuotrauką nieko mokytis nereikia. Spustelėkite vieną, tada {{ui:Atvaizduoti}}.

| Scena | Ką nustato | Kam naudoti |
|---|---|---|
| {{ui:Išorė}} | Giedras dangus, paties modelio saulė, įjungta žemė | Pastatas iš išorės |
| {{ui:Vidus}} | Debesuotas dangus (vienodas šviesa, be ryškių saulės dėmių), pusę stopo šviesesnis | Vaizdas iš patalpos vidaus |
| {{ui:Pjūvio vaizdas}} | Balta studija, be žemės, kraštų linijos greitame atvaizdavime | Modelis, supjaustytas pjūviu |
| {{ui:Naktis}} | Saulė nusileidusi (vidurnaktis viduržiemį vietovės pusrutulyje), vienu stopu šviesesnė | Šviestuvai, apšviečiantys modelį. Be šviestuvų nuotrauka tamsi |

- {{ui:Parinkti šiam vaizdui}} parenka už jus: {{ui:Pjūvio vaizdas}}, kai įjungtas pjūvio supjovimas, {{ui:Vidus}}, kai kamera yra modelio viduje, kitu atveju {{ui:Išorė}}. Pirmą kartą atidarius dialogą jis pradeda šitaip pats.
- Kiekvienas nustatymas lieka žemiau ir gali būti keičiamas. Pakeitus vieną nustatymą, scena nebeturi nuspausto mygtuko, o eilutė po mygtukais sako, kad nustatymai yra jūsų. Dar kartą spustelėkite sceną, kad grąžintumėte jos reikšmes.
- Scena nekeičia variklio, režimo, dydžio, medžiagų, kameros ar šviestuvų.

:::note
Scenos suteikia tas pačias reikšmes ModelCraft ir BimCraft. Galutinė nuotrauka priklauso nuo jūsų modelio ir grafikos plokštės.
:::

## Kas rodoma nuotraukoje

Tai, ką 3D vaizdas rodo kietai: paslėpti ir permatomi elementai, paslėpti aukštai ir paslėpti modeliai paliekami, o patalpos rodomos tik tada, kai įjungtas {{ui:Erdvės}}. Pjūvio plokštuma ar pjūvio dėžė supjauna nuotrauką taip, kaip supjauna vaizdą. Elementai rodomi savo spalvomis: spalvinimas pagal savybę ({{ui:Spalva}} skirtukas) nenaudojamas.

## Nustatymai

| Nustatymas | Ką daro |
|---|---|
| {{ui:Dydis}} | Vaizdo dydis, dvigubas vaizdo dydis, Full HD, 4K arba kvadratas |
| {{ui:Forma}} | {{ui:Greitas}} arba {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} (žemiau) su savo {{ui:Laiko riba}} |
| {{ui:Kokybė}} | Kiek praėjimų (arba aukštoje kokybėje – mėginių) vidurkinama: {{ui:Juodraštis}} 16, {{ui:Geras}} 64, {{ui:Geriausias}} 256. Daugiau praėjimų duoda lygesnius šešėlius ir kraštus, bet trunka ilgiau |
| {{ui:Dangus}} | {{ui:Giedras dangus}}, {{ui:Debesuota}}, {{ui:Prieblanda}} arba {{ui:Balta studija}} (paprastas baltas fonas) |
| {{ui:Saulė}} | Birželio 21 d. 15:00 platumoje, kurią failas nurodo savo vietovei (IfcSite), pasukta į tikrąją modelio šiaurę. Pažymėkite {{ui:Šiam paveikslėliui naudoti kitą datą ir laiką}} kitam laikui |
| {{ui:Ryškumas}} | Šviesiau arba tamsiau, stopais |
| {{ui:Modelio pagrindas}} | Žemė modelio žemiausiame taške, kuri priima šešėlius ir išsilieja į horizontą |
| {{ui:Rodyti briaunas}} | Piešia elementų briaunas plonai virš nuotraukos |

Kai saulė pasirinktu laiku yra žemiau horizonto, tai naktis: dangus tamsėja, o modelio šviestuvai jį apšviečia.

## Šviestuvai

Kiekvienas šviestuvas modelyje yra šviestuvas nuotraukoje: šviestuvai IFC faile (IfcLightFixture arba elementas, pažymėtas kaip šviestuvas), įskaitant tuos, kuriuos dedate iš bibliotekos. Kiekvienas spinduliuoja žemyn tuoj po šviestuvu. Kai failas nurodo šviestuvo galią vatais, jo ryškumas iš jos išplaukia; kitaip tai 800 liumenų šiltai balta šviesa.

Dialogas išvardija šviestuvus skyriuje {{ui:Šviestuvai}}: nužymėkite vieną, kad jį išjungtumėte, arba įveskite jo ryškumą liumenais. Šie pakeitimai įrašomi IFC faile (šviestuvo savybių rinkinys CadCraft_Light, kur juos galite keisti ir Savybėse), o {{key:Ctrl+Z}} juos atšaukia.

Kai failas nieko nesako apie savo vietovę, saulė dedama 40° šiaurės platumoje, ir dialogas tai nurodo. Laikas yra vietovės laikrodžio laikas, apskaičiuotas pagal jos ilgumą, todėl gali būti viena valanda neteisingas tose vietose, kur laikrodžiai nustatyti kitaip.

Šie nustatymai išlieka šioje naršyklėje kitai nuotraukai. Jie neįrašomi į IFC failą.

## Stiklas ir kitos medžiagos

Pagal {{ui:Medžiagos}} kiekviena ekrano spalva turi išvaizdą: {{ui:Matinė}}, {{ui:Atlasinė}}, {{ui:Blizgi}}, {{ui:Metalas}}, {{ui:Poliruotas metalas}}, {{ui:Stiklas}} arba {{ui:Matinis stiklas}}. Spalvos, kurias IFC failas padaro permatomomis (pavyzdžiui, langų stiklinimas), pradžioje yra {{ui:Stiklas}}.

:::note
Režime {{ui:Greitas}} stiklas ir metalas atspindi dangų, o ne likusį modelį, ir šviesa per stiklą nelūžta. Žemiau esantis režimas {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} daro abu.
:::

## Aukšta kokybė

Pasirinkite {{ui:Forma}} › {{ui:Aukšta kokybė (sekama spindulių trajektorija)}}, kad gautumėte nuotrauką, kuri seka šviesą taip, kaip ją mato kamera:

- šviesa atsispindi tarp paviršių, todėl kambarys, apšviestas per langą ar šviestuvo, yra apšviestas iš visų pusių, o spalvos nuspalvina kaimynus;
- stiklas yra tikras stiklas: šviesa per jį lūžta, o jis atspindi modelį;
- metalas ir poliruoti paviršiai atspindi likusį modelį;
- šviesos paneliai šviečia kaip paneliai, su minkštais šešėliais.

Tai daug lėčiau nei {{ui:Greitas}}: kiekvienas praėjimas iš naujo seka šviesą kiekvienam pikseliui. Nuotrauka pradžioje grūdėta ir išsivalo, kai mėginiai susikaupia, todėl pradėkite mažai ({{ui:Vaizdo dydis}}, {{ui:Juodraštis}}) ir pasirinkite {{ui:Laiko riba}}: kai ji baigiasi, lieka nuotrauka, kokia yra. {{ui:Stabdyti}} ją taip pat palieka. Pirmas praėjimas laukia, kol naršyklė paruošia spindulių sekiklį.

Kur naršyklė turi WebGPU, spindulių sekiklis yra mūsų pačių ir veikia grafikos plokštėje; eilutė po nuotrauka tai nurodo. Po {{ui:Stabdyti}} arba laiko ribos {{ui:Tęsti}} tęsia tą pačią nuotrauką, kol surinks visus mėginius; pakeitus nustatymą arba dar kartą paspaudus {{ui:Atvaizduoti}}, pradedama iš naujo. Be WebGPU nuotrauka sekama WebGL (eilutė tai nurodo), ir {{ui:Tęsti}} nesiūloma.

:::linux
Firefox ir dauguma Chrome nustatymų Linux sistemoje dar neturi WebGPU, todėl aukšta kokybė ten naudoja WebGL.
:::

Šiuo režimu briaunos nepiešiamos, tekstūros rodo savo spalvą ir šiurkštumą, bet ne reljefą, o pjūvis ant modelio daromas prieš pradedant nuotrauką.

{{ui:Triukšmo mažinimas (pašalina grūdėtumą, likusį po imčių)}} įjungtas pagal numatytąją reikšmę: baigus nuotrauką arba ją nutraukus, likęs grūdėtumas pašalinamas neuroniniu tinklu, sukurtu šiam tikslui (Intel Open Image Denoise paskelbtas tinklas, veikiantis jūsų kompiuteryje: grafikos plokštėje, kitaip procesoriuje). {{ui:Rodyti}} › {{ui:Vaizdas prieš triukšmo mažinimą}} parodo jį taip, kaip atvaizduota.

## Dangūs ir šviesos profiliai grafikos plokštėje

Su WebGPU aukšta kokybė turi dar du dangus:

- {{ui:Fizikinis dangus}} apskaičiuoja dienos šviesą pagal saulės aukštį: giliai mėlyna virš galvos, blyški juosta prie horizonto ir saulė, kuri tampa šiltesnė ir silpnesnė, kai nusileidžia žemai. {{ui:Migla}} eina nuo labai skaidžios dienos (2) iki miglotos (10).
- {{ui:Dangaus paveikslėlis (HDRI)}} apšviečia modelį tikros vietos panoramos nuotrauka. {{ui:Pasirinkite paveikslėlį…}} paima stačiakampės projekcijos (equirectangular) `.hdr` arba `.exr` failą; {{ui:Pasukti}} sukasi aplink modelį, o {{ui:Paveikslėlio ryškumas}} jį padaro šviesesnį ar tamsesnį. Paveikslėlis turi savo saulę, todėl modelio saulė nepridedama. Jis išsaugomas tik tol, kol atidarytas puslapis: po atidarymo iš naujo pasirinkite jį dar kartą.

Kiekvienas šviestuvas sąraše {{ui:Šviestuvai}} gali turėti gamintojo šviesos profilį: {{ui:IES profilis…}} nuskaito IES (LM-63) failą, ir šviestuvas tada skleidžia šviesą taip, kaip tas šviestuvas (siaurą spotą, sienos apšvietimą). Kiekvienas šviestuvas su tuo pavadinimu naudoja jį, o šviestuvas išlaiko savo ryškumą. Spustelėkite profilio pavadinimą, kad nustotumėte jį naudoti.

Skaidraus stiklo langai padeda dangaus šviesai patekti į patalpą.

Režimas {{ui:Greitas}} ir WebGL sekiklis rodo {{ui:Fizikinis dangus}} ir {{ui:Dangaus paveikslėlis (HDRI)}} kaip giedrą dangų ir ignoruoja šviesos profilius.

## Kamera

{{ui:Kamera}} nustato vaizdą kaip fotografiją:

- {{ui:Ekspozicija}}: palikite {{ui:Ryškumo slankiklis}} arba pasirinkite {{ui:Kameros parametrai}} ir nustatykite {{ui:Diafragma (f-skaičius)}}, {{ui:Užrakto greitis}} ir {{ui:ISO}}, kaip fotoaparate; šalia jų esanti EV yra įprasta ekspozicijos vertė. f/16 su 1/100 s ir ISO 100 atitinka saulėtą dieną; tamsesnei scenai reikia platesnės diafragmos, lėtesnio užrakto arba didesnio ISO. Tai veikia visuose režimuose.
- {{ui:Lauko gylis}} išblukina tai, kas arčiau ar toliau nei {{ui:Fokusavimo atstumas (m)}}, kaip tai darytų lęšis su tuo f-skaičiumi (palikite tuščią, kad fokusuotų į vaizdo vidurį); {{ui:Diafragmos forma}} suteikia nefokusuotiems akcentams apvalią arba menčių formą.
- {{ui:Dviejų taškų perspektyva (vertikalios linijos lieka vertikalios)}} išlygina kamerą ir pastumia vaizdą, kaip daro architektūrinis poslinkio objektyvas, todėl sienos nesilenkia, kai žiūrite aukštyn ar žemyn į pastatą.
- {{ui:Baltos spalvos balansas}} nustato, kuri šviesos spalva rodoma kaip balta: žemesnė (pavyzdžiui, 3000 K) šiltai šviestuvų šviesai, aukštesnė šešėliui ir debesuotoms dienoms.
- {{ui:Projekcija}}: {{ui:360° panorama}} sukuria 2:1 nuotrauką viso aplink kamerą panoramos žiūrovams; {{ui:360° stereo panorama}} sudeda kairės ir dešinės akies panoramas akiniams; {{ui:Kubo žemėlapis (6 paviršiai)}} sukuria šešis kvadratinius vaizdus 3 × 2 tinkleliu. Plotis paimamas iš {{ui:Dydis}}.

Projekcija, lauko gylis, dviejų taškų perspektyva ir baltos spalvos balansas reikalauja spindulių sekiklio grafikos plokštėje (WebGPU), todėl rodomi tik {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} režime.

## Nuotraukos apdaila

{{ui:Paveikslėlis}} tonuoja aukštos kokybės nuotrauką kaip fotografiją, ir kiekvienas valdiklis iš karto keičia galutinę nuotrauką, be naujo atvaizdavimo:

- {{ui:Išvaizda (vaizdo transformacija)}}: {{ui:ACES filmic}} (nuotrauka kaip anksčiau), {{ui:AgX}} (minkštesnė, išlaiko spalvą labai šviesioje šviesoje), {{ui:Filmic}} (švelni filmo kreivė) arba {{ui:Standartinė}} (paprasta, labai ryški šviesa nusiriboja iki baltos).
- {{ui:Kontrastas}} ir {{ui:Šviesių sričių suspaudimas}} (grąžina detales labai ryškiose vietose).
- {{ui:Švytėjimas}} (minkštas spindėjimas aplink ryškią šviesą), {{ui:Akinimas}} su {{ui:Akinimo spinduliai}} (žvaigždiški spinduliai iš ryškiausių taškų) ir {{ui:Vinjetė}} (tamsesni kampai).
- {{ui:Spalvų lentelė (.cube)…}} pritaiko spalvinimą iš `.cube` failo su savo {{ui:Spalvų lentelės stiprumas}}; kaip dangaus paveikslėlis, jis išsaugomas tik tol, kol atidarytas puslapis.

## Vaizdo įrašymas

{{ui:Įrašyti kaip}} šalia {{ui:Įrašyti}} pasirenka failą: {{ui:PNG}}, {{ui:JPEG}} arba {{ui:WebP}} dalijimuisi (JPEG ir WebP tik ten, kur naršyklė gali juos įrašyti), o po aukštos kokybės atvaizdavimo grafikos plokštėje dar:

- {{ui:PNG, 16 bitų}}: patonuota nuotrauka su smulkesniais žingsniais tarp atspalvių, spausdinimui ar tolesniam redagavimui.
- {{ui:EXR, visi sluoksniai (32 bitų slankusis kablelis)}}: nuotrauka kaip atvaizduota (tiesinė šviesa, be tonavimo), su kiekvienu atvaizdavimo elementu ir šviesų grupe kaip atskiru sluoksniu, sudėliojimo programoms.
- {{ui:Atvaizdavimo failas (.ccrender, vėliau vėl apdoroti)}}: viskas, ko dialogui reikia, kad vėl sumaišytų ir patonuotų nuotrauką. {{ui:Atidaryti atvaizdavimo failą…}} jį grąžina su jo maišymu ir tonavimu, be atvaizdavimo.

## Šviesų maišymas po atvaizdavimo

Įjunkite {{ui:Šviesų maišymas (pakeiskite kiekvieno šviestuvo spalvą ir ryškumą po atvaizdavimo)}} prieš spausdami {{ui:Atvaizduoti}}. Kai nuotrauka baigta (arba nutraukta), {{ui:Maišyti vaizdą}} išvardija jos šviesas grupėmis: dangų, saulę ir šviestuvus pagal pavadinimą (kiekvienas šviestuvas su tuo pačiu pavadinimu yra viena grupė). Išjunkite grupę, duokite jai spalvą arba padarykite ją šviesesnę ar tamsesnę, ir nuotrauka iš karto pasikeičia, be naujo atvaizdavimo. {{ui:Įrašyti maišinį}} išsaugo mišinį pavadinimu, kad vėliau galėtumėte pasirinkti; {{ui:Kaip atvaizduota}} grąžina nuotrauką tokią, kokia ji buvo padaryta. {{ui:Įrašyti}} įrašo sumaišytą nuotrauką.

{{ui:Atvaizdavimo elementai (albedo, normalės, gylis, difuzinė, spekuliarinė, perdavimas, emisija, ID)}} išsaugo ir nuotraukos dalis. {{ui:Rodyti}} perjungia vaizdą į vieną iš jų: paviršių spalvas (albedo), normales, gylį, difuzinę, spekuliarinę ir perduotą šviesą (kiekvieną tiesioginę ir netiesioginę), tai, kas šviečia, ir dangų, bei spalvą kiekvienam objektui ar medžiagai kaukėms kurti.

Abu laiko papildomus sluoksnius grafikos plokštėje. Dideliais dydžiais grafikos plokštėje gali nepakakti vietos; dialogas tai nurodo, ir padeda mažesnis dydis.

## Rūkas, dūmai, triukšmas ir kaustikos

Jie yra {{ui:Rūkas, dūmai ir triukšmas}} ir veikia {{ui:Aukšta kokybė (sekama spindulių trajektorija)}} režime su grafikos plokšte; kiti varikliai jų neturi.

- {{ui:Rūkas ir migla}} užpildo orą iki tam tikro aukščio rūku, kurį apšviečia saulė, dangus ir šviestuvai. {{ui:Kiek matoma, metrais}} nustato, koks tankus jis yra (apie 100 m – lengva migla, 20 m – tankus rūkas), {{ui:Rūko aukštis virš žemės, metrais}} yra vieta, kur jis baigiasi, o {{ui:Šviesos spinduliai}} – kiek rūkas švyti link šviesos. Saulės šviesa palieka rūką viršuje, todėl ten, kur saulė patenka pro langą ar tarp pastatų, matote šviesos spindulius.
- {{ui:Dūmai arba debesis}} prideda vieną dūmų ar debesies tūrį, apšviestą kaip rūkas. {{ui:Rūšis}} – tai {{ui:Debesis}}, {{ui:Dūmų stulpas}} arba {{ui:Iš tūrio failo (.ccvol)}}, CadCraft savas tinklelio formatas. {{ui:Detalumas}} ir {{ui:Variacija}} keičia sukurtą debesį ar stulpą, o {{ui:Ilgiausios pusės dydis, metrais (0 = modelio dydis)}}, {{ui:Perkelti X (m)}}, {{ui:Perkelti Y (m)}}, {{ui:Perkelti Z (m)}} ir {{ui:Pasukti}} jį padeda (pradžioje jis būna modelio viduryje). {{ui:Storis}} padaro jį tankesnį, {{ui:Priekinis švytėjimas}} padaro jį ryškesnį link šviesos, o {{ui:Spalva}} jį nuspalvina. Tūrio failas išsaugomas tik tol, kol atidarytas puslapis, kaip ir dangaus paveikslėlis.
- {{ui:Sustoti anksčiau, kai vaizdas švarus (adaptyvus mėginių ėmimas)}} nebeduoda mėginių jau nusistovėjusiems pikseliams. {{ui:Priimtinas triukšmas}} – tai, kiek grūdėtumo lieka, kai pikselis sustoja. Eilutė po nuotrauka nurodo, kiek mėginių vidutiniškai gavo pikselis.
- {{ui:Kaustikos (šviesa, lūžusi per stiklą ar atspindėta veidrodžiais)}} seka šviesą iš šviestuvų ir saulės, todėl ryški dėmė po stikliniu rutuliu ar veidrodžio šviesa ant sienos išeina švari, o ne grūdėta. Ji išjungta, kol įjungti rūkas, dūmai, šviesų maišymas ar atvaizdavimo elementai, ir ji skirta nuotraukoms, o ne 360° nuotraukoms.

## Atvaizdavimo eilė

{{ui:Atvaizdavimo eilė}} dialoge: {{ui:Pridėti šį vaizdą į eilę}} išsaugo nuotraukos nustatymus ir vaizdą, o {{ui:Pradėti eilę}} atvaizduoja laukiančius, vieną po kito, šiame kompiuteryje. Uždarius puslapį eilė išlieka; atidarykite tą patį modelį, kad tęstumėte. {{ui:Įrašyti}} parsisiunčia baigtą; {{ui:Pašalinti}} ir {{ui:Išvalyti baigtus}} tvarko sąrašą. Eilė atvaizduoja aukštoje kokybėje, todėl jai reikia WebGPU.

## Kiek tai trunka

Nuotrauka daroma jūsų kompiuteryje, grafikos plokštės; niekas neįkeliama. Laikas auga su praėjimais ir pikseliais: {{ui:Geriausias}} turi 16 kartų daugiau praėjimų nei {{ui:Juodraštis}}, o 4K nuotrauka turi maždaug keturis kartus daugiau pikselių nei Full HD. Dideli modeliai ilgiau trunka per praėjimą.
