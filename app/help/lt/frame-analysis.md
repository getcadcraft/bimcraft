---
title: Konstrukcinio karkaso analizė
summary: Modelio sijų, kolonų ir įstrižainių jėgos, atramų reakcijos ir deformacijos pagal jūsų nustatytus apkrovų atvejus ir derinius, išsaugoti IFC faile. Analizės priemonė, o ne normos patikra.
keywords: analizė, vienetai, pėdos ir coliai, rodomas vienetas, konstrukcinė analizė, projektavimo patikrinimai, panaudojimas, valcuotas, suvirintas, AISC 360, EN 1993-1-1, karkaso analizė, analitinis modelis, standumo metodas, apkrovos, apkrovos atvejis, derinys, nuolatinė apkrova, kintama apkrova, savasvoris, atramų reakcijos, lenkimo momentas, skersinė jėga, ašinė jėga, poslinkis, deformuota forma, atramos, įtvirtinta, laisvai atremta, atlaisvinimas, ataskaita, pdf, csv, craftscript, frame3d, sijos, kolonos, elementai
from: b93b58c4
---

Dešinėje esantis skirtukas {{ui:Analizė}} randa atviro modelio sijų, kolonų ir įstrižainių jėgas, kolonų pagrindų reakcijas ir tai, kiek lenkiasi elementai, pagal jūsų nurodytas apkrovas.

:::warning
Tai **analizės priemonė, o ne normos patikra**. Analizė netaiko projektavimo normos: nenustato elementų dydžių, netikrina laikomosios galios ir nenustato apkrovų koeficientų. Inžinierius patikrina analitinį modelį, jo apkrovas ir atramas bei nusprendžia, ką skaičiai reiškia. Žemiau esantis blokas {{ui:Projektavimo patikrinimai}} tikrina valcuotus plieninius I profilius pagal AISC 360 ar EN 1993-1-1; tai priemonė, kol inžinierius jos neperžiūrėjo: žr. [Projektavimo patikrinimai](topic:frame-analysis#design-checks).
:::

## Paleiskite

1. Atidarykite IFC modelį ir skirtuką {{ui:Analizė}}.
2. Pasirinkite vieną ar kelis sijas, kolonas ar įstrižaines vaizde, pasirinkite {{ui:Atvejis}}, {{ui:Apkrova}} ir {{ui:Kryptis}}, įveskite reikšmę ir paspauskite {{ui:Pridėti apkrovą}}: kN/m apkrovai, paskirstytai išilgai elemento, kN — sutelktai apkrovai.
3. Paspauskite {{ui:Paleisti analizę}}.

Lentelėje pateikiama kiekvieno elemento didžiausia ašinė jėga, skersinės jėgos, lenkimo momentai, sukimas ir poslinkis; spustelėkite elemento pavadinimą, kad jį pasirinktumėte vaizde. Žemiau pateikiamos reakcijos. {{ui:Ant modelio}} nubraižo deformuotą formą arba vieną jėgą kaip diagramą prie kiekvieno elemento. Rezultatai pasensta, kai keičiasi modelis: paleiskite iš naujo.

Kiekviena apkrova ir nustatymas yra vienas pakeitimas sąraše {{ui:Pakeitimai}}: {{ui:Anuliuoti}} jį atšaukia, o {{ui:Įrašyti kaip IFC}} išsaugo juos faile (projekto `CadCraft_Analysis` savybių rinkinyje), todėl kitą kartą, kai modelis čia atidaromas, jo apkrovos vis dar yra.

## Kaip sudaromas analitinis modelis

- Kiekvienas IfcBeam, IfcColumn ir IfcMember, kurio forma yra vienas tiesus ištempimas, tampa elementu savo skerspjūvio centro linijoje. Jo skerspjūvio savybės paimamos iš profilio: I, U, L ir T formos, stačiakampiai ir vamzdžiai, apskritimai ir apvalūs vamzdžiai arba bet koks uždaras kontūras (tada sukimo konstanta yra įvertis, apie tai nurodoma ataskaitoje). Kas kita — neįtraukiama ir suskaičiuojama.
- Modelyje sijos sustoja ties kolonos paviršiumi ir yra žemiau grindų. Kiekvienas elemento galas perkeliamas išilgai savo linijos į elemento, į kurį jis remiasi, ašį, jei ta ašis yra arti (maždaug per skerspjūvių dydį), ir tas elementas tame taške padalijamas. Ataskaita nurodo, kiek galų buvo perkelta.
- **Kolonų pagrindai**, po kuriais nieko nėra, yra atramos: įtvirtintos (pradžioje) arba laisvai atremtos (laikomos vietoje ir nuo sukimosi, bet laisvos pasisukti).
- **Sijų galai** yra standūs arba laisvai atremti pagal taisyklę {{ui:Sijų galai be jungties}}; **įstrižainės** (IfcMember) abiejuose galuose yra laisvai atremtos. Pasirinkite vieną elementą, kad suteiktumėte jo galams ar kolonos pagrindui atskirą taisyklę.
- Medžiagos pagal pavadinimą: betonas (E = 30 GPa), mediena (E = 11 GPa), kitu atveju plienas (E = 200 GPa).

Jei karkasas gali judėti nieko nelenkdamas — tai mechanizmas —, skaičiavimas sustoja ir nurodo, kur ir kuria kryptimi.

## Atvejai, deriniai, ženklai ir ataskaita

Analizė pradedama nuo **Nuolatinė (savasvoris)**, **Kintama** ir **Nuolatinė + kintama**; pridėkite atvejų ir derinių su koeficientais, kurių reikalauja jūsų projektavimo norma. N > 0 yra tempimas; My > 0 įtempia elemento vietinę −z pusę (sijai, nusvylusiai nuo gravitacijos, My > 0). {{ui:Ataskaita (PDF)}} ir {{ui:Ataskaita (CSV)}} pateikia prielaidas, skerspjūvius, atvejus, reakcijas su jų sumomis, elementų jėgas, poslinkius ir apvalkalą. {{ui:Eksportuoti kaip CraftScript}} įrašo karkasą į PartCraft Script darbo sritį, kur bibliotekos funkcija `frame3d` jį išsprendžia skaitomu kodu.

Metodas yra tiesioginis standumo metodas, tiesinis ir pirmos eilės, nebent pažymėsite *Antros eilės (P-Delta)*; patikrinta vadovėlių pavyzdžiais.

**Antra eilė (P-Delta).** Pažymėkite *Antros eilės (P-Delta)* šalia Paleisti: kiekvienas derinys sprendžiamas iš naujo, kai ašinės jėgos veikia deformuotą karkasą (kiekvienas elementas padalijamas į 4 dalis, todėl elemento lenkimas tarp jo galų taip pat skaičiuojamas), kol ašinės jėgos nusistovi. Rezultatų eilutėje pateikiamas perskaičiavimų skaičius ir kiek padidėjo šoninis poslinkis; tada momentai, deformacijos, projektavimo patikrinimai ir ataskaita naudoja šiuos rezultatus. Viršijus karkaso tamprią kritinę apkrovą, skaičiavimas sustoja ir apie tai praneša. Tai tampri analizė mažiems pasukimams, tik lenkimui, be standumo mažinimo ar nominalių apkrovų (pati savaime ne AISC tiesioginės analizės metodas); perdangos, sienos ir standūs aukštai lieka pirmos eilės.

**Slėgis ant perdangų.** Betoninėms perdangoms (analizė perdangą skaito kaip plokštes, kai jos medžiaga yra betonas) apkrovų blokas turi {{ui:Slėgis ant visų perdangų}}: įveskite kN/m², pasirinkite aukščiau esantį atvejį ir paspauskite {{ui:Pridėti perdangoms}}. Jis paskirstomas žemyn visoms perdangoms, kurias rado analizė, ir išvardijamas su nuoroda Pašalinti. Tai vienas slėgis visoms perdangoms, o ne kiekvienai atskirai, ir tai nėra normos apkrova: įveskite reikšmę, kurią pateikia jūsų inžinierius.

**Natūralieji dažniai (baigtiniai elementai).** Blokas {{ui:Baigtiniai elementai: natūralieji dažniai}} po rezultatais randa mažiausius to paties modelio modus baigtinių elementų varikliu: sijos su savo galų atlaisvinimais, perdangos ir sienos kaip plokšti keturių mazgų apvalkalai, standūs aukštai, atramos. Pasirinkite modų skaičių (3, 6, 10 arba 20) ir perdangos elementą (keturių mazgų apvalkalas storoms ar plonoms perdangoms arba elementas plonoms perdangoms) ir paspauskite {{ui:Rasti dažnius}}. Lentelėje pateikiamas kiekvieno modo dažnis hercais, periodas sekundėmis ir efektyvi modalinė masė išilgai X, Y ir Z kaip dalis judančios masės. {{ui:Rodyti modelyje}} nubraižo bet kurį modą taip, kaip nubraižoma deformuota forma. Masė yra medžiagos tankis, padaugintas iš tūrio: apkrovos masės nepridės, o medžiaga be tankio masės neturi. Ataskaita (PDF, CSV) pateikia šią lentelę. Analizė tampri ir tik mažiems judesiams; seisminės ar vėjo apkrovos pagal normą čia nekuriamos. Ne normos patikra; inžinierius peržiūri rezultatus.

**Atsako spektras, laiko istorija ir stūmimo analizė.** Dar trys blokai yra žemiau dažnių ir naudoja tą patį baigtinių elementų modelį. Visų jų masė yra medžiagos tankis, pridėjus pažymėtų atvejų nuolatines apkrovas, kiekvieną padauginus iš jūsų įvesto koeficiento (pavyzdžiui, Nuolatinė su 1, o Kintama su dalimi, kurią skaičiuojate kaip masę).

{{ui:Atsako spektras}} nuskaito kiekvieną modą pagal jūsų nurodytą spektrą (periodo ir pagreičio lentelę arba ASCE 7 formą pagal SDS, SD1 ir TL; mygtukas {{ui:Naudoti seisminio bloko reikšmes}} nukopijuoja jas iš bloko {{ui:Seisminė}}) ir sujungia modus pagal CQC, SRSS, dešimties procentų taisyklę arba absoliutinę sumą, tada sujungia X, Y ir Z kryptis (100 % + 30 % arba SRSS). Pateikiama pagrindo šlyties jėga, aukštų poslinkiai, elementų galų jėgos ir modų lentelė, kuri įspėja, kai naudojami modai turi mažiau nei 90 % masės. Rezultatus galite padauginti iš koeficiento arba iki įvestos pagrindo šlyties jėgos; blokas pats tos pagrindo šlyties jėgos niekada neskaičiuoja. Rezultatai be ženklo.

{{ui:Laiko istorija}} paleidžia žemės pagreitį modalinės superpozicijos būdu (tiksli tarp įrašo taškų tiesių atkarpų) arba tiesioginės integracijos būdu (Newmark vidutinio pagreičio su Rayleigh slopinimu). Įvestis yra sugeneruotas sinusas ar impulsas (visada pažymėtas kaip sintetinis), jūsų įklijuotas įrašas arba atidarytas tekstinis failas (laikas ir pagreitis, po vieną pagreičio reikšmę eilutėje su žingsniu, arba PEER tipo failas su DT= antrašte; g arba m/s²). Pateikiamas stogo poslinkis ir pagrindo šlyties jėga laiko atžvilgiu, kiekvieno aukšto dreifas ir elementų galų jėgų apvalkalas. Modeliai su labai ilgu įrašu jį išlaiko tik sesijai.

{{ui:Stūmimo analizė (pushover)}} stumia stogą į šoną mažais žingsniais (forma kaip pirmasis modas arba vienoda), su plastiniais lankstais elementų, turinčių I formą, galuose. Lankstas plastiškai pasiduoda plastiniame momente, kuris mažėja didėjant ašinei jėgai (apskaičiuojama iš nubraižytos formos, lankštus ignoruojant); sustiprėjimas pasirenkamas, P-delta pasirenkama, o gravitacinį derinį galima pritaikyti pirma. Pateikiama laikomumo kreivė (pagrindo šlyties jėga prieš stogo poslinkį), pirmasis lankstas ir kiekvieno lanksto būsena bei plastinis pasukimas. {{ui:Paleisti netiesinę laiko istoriją}} vykdo tuos pačius lankstus pagal bloko {{ui:Laiko istorija}} įrašą mažiems modeliams. Lankstai susidaro tik elementų galuose (lanksto vietą, kur jis turėtų susidaryti tarpe, įdėkite mazgą); elementas, atlaisvintas abiejuose galuose, lankstų neturi; įstrižainių takumas ir stabilumo netekimas nemodeliuojami; perdangos ir sienos lieka tamprios; priėmimo kriterijų nepateikiama. Ne normos patikra; inžinierius peržiūri rezultatus. Nustatymai įrašomi kartu su modeliu, o ataskaita pateikia lenteles.

Dar neįgyvendinta: stabilumo netekimas (buckling), trūkstamos masės korekcija atsako spektrui, įrašų mastelio keitimas, priėmimo kriterijai lankstams (dinaminė atsako dalis jau yra aukščiau), kitos plotinės apkrovos nei vienas slėgis ant visų perdangų, elementų poslinkiai, tik tempiamos įstrižainės, sienos ir perdangos karkase, suvirintų profilių ir kitų nei valcuotų I profilių normos patikra. Žr. [Dar neįgyvendinta](topic:not-built-yet).

## Vienetai

Ilgiai seka vienetą, kurį pasirenkate įrankių juostoje ({{ui:Vienetai}}), kaip ir visa BimCraft: apkrovų padėtis, kurią įvedate ir matote ({{ui:Šaltinis}}, {{ui:Kam}}, {{ui:Prie}}), mazgų apkrovų ir reakcijų taškai, aukštų grindų aukščiai skiltyje {{ui:Seisminė}}, ir deformacijos bei dreifo stulpeliai (pėdos ir coliai rodo šiuos mažus ilgius dešimtainiais coliais). Vienetą galite keisti bet kada; skirtukas perbraižomas. Jėgos lieka kN ir kN·m, o ataskaita (PDF, CSV) ir CraftScript failas lieka milimetrais, nurodant vienetą. Skerspjūvių dydžiai, armatūros skersmenys ir dangos skiltyje {{ui:Betonas}} lieka milimetrais, kaip ir pavadinti.

## Projektavimo patikrinimai

Blokas {{ui:Projektavimo patikrinimai}} (toks pat kaip DetailCraft) priima {{ui:Projektavimo norma}}, ASCE 7 + AISC 360 arba EN 1990 + EN 1993-1-1, ir {{ui:Plieno markė}}. Kiekvienam apkrovos atvejui nurodykite jo rūšį (nuolatinė, kintama, vėjo …), o {{ui:Sudaryti derinius}} sudaro normos apkrovų derinius iš jūsų atvejų; tada analizė juos skaičiuoja kaip bet kurį kitą derinį.

Tada {{ui:Patikrinti elementus}} patikrina kiekvieną **valcuotą plieninį I profilį** DetailCraft patikromis (tempimas, gniuždymas su išsilenkimu, lenkimas su šoniniu-sukamuoju stabilumo netekimu, šlytis, lenkimas kartu su ašine jėga, poslinkis; punktai nurodyti ataskaitoje) ir rodo, kiek jo galios naudojama, nuspalvinta modelyje. Tai **priemonė, kol inžinierius ją peržiūrės**.

**Kurie elementai tikrinami.** IFC profilis nenurodo, ar plieninis I profilis yra valcuotas, ar suvirintas, todėl BimCraft jį laiko valcuotu tik tada, kai jo profilio pavadinimas (arba elemento tipo pavadinimas) yra AISC W ar S lentelių arba EN 10365 IPE, HEA ar HEB lentelių dydis (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **ir** failo gylis, plotis, sienelė ir flanšas atitinka tą dydį 1 % tikslumu. Kiekvienas kitas I profilis (lakštinė sija, dydis kitu pavadinimu, pakeistas dydis) laikomas suvirintu ir grįžta **nepatikrintas**, kaip ir vamzdžiai, kampiniai, kanalai ir kiti skerspjūviai, plonasienės dalys bei sukimas. Šiuos elementus tikrinkite su inžinieriumi.
