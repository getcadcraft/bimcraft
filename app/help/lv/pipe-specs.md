---
title: Cauruļu specifikācijas, vārsti, aizvari un ražotāju ģimenes
summary: Izveidojiet savas cauruļu specifikācijas (izmēru tabulas ar materiālu, savienojumu un raupjumu), kas glabājas modeļa failā; novietojiet uz trasēm vārstus, filtru un aizvarus; un ievietojiet ražotāja vārsta vai aprīkojuma modeli kā ģimeni ar savienojuma pieslēgvietām.
keywords: cauruļu specifikācija, cauruļu specifikācijas, cauruļvada specifikācija, cauruļvada klase, pielāgota caurule, izmēru tabula, caurule, higiēniskā caurule, nerūsējošais tērauds, specifikācija, ārējais diametrs, sienas biezums, iekšējais diametrs, raupjums, spiediena klase, csv, json, imports, eksports, izklājlapa, standarts, bpe, din, en 10357, en 10255, vārsts, vārsti, tauriņvārsts, balansēšanas vārsts, regulējošais vārsts, filtrs, aizvars, tilpuma aizvars, ugunsaizvars, oem, ražotājs, izgatavotājs, ģimene, ģimenes, pieslēgvietas, savienojums, step, obj, gltf, ifc, radiators, konvektors, paneļsildītājs, gaisa apstrādes iekārta, difuzors, režģis
from: bc2f7c4e
---

## Ko jūs darīsiet

Zīmējiet caurules pēc savas specifikācijas, nevis iebūvēto tērauda, vara un plastmasas tabulu vietā; novietojiet uz trasēm vārstus un aizvarus un ievietojiet vietā ražotāja modeli ar pieslēgvietām, pie kurām pieslēdzas caurules.

:::note
Zīmēšanas un koordinācijas palīglīdzeklis. Cauruļu specifikācija satur skaitļus, ko ierakstāt vai importējat: pārbaudiet katru tabulu pēc sava projekta standarta. Iebūvētie vārsti, filtri un aizvari ir shematiskas formas, kuru izmērs atkarīgs no trases, nevis ražotāja vai vārsta standarta garums.
:::

## Cauruļu specifikācijas izveide

1. Ieslēdziet {{ui:Zīmēšana}}, atveriet {{ui:Būvējums}} un izvēlieties {{ui:Cauruļu specifikācijas}}. Tā pati poga atrodas arī cauruļu rīka joslā.
2. Izvēlieties {{ui:Jauns}} vai sāciet no faila, ielīmēšanas vai sākuma specifikācijas (zemāk).
3. Ierakstiet tās nosaukumu, standartu vai atsauci, kuru tā ievēro, materiālu un gala vai savienojuma tipu.
4. Ierakstiet pa vienai rindai katram izmēram: izmēra nosaukumu, ārējo diametru un sienu milimetros. Ja jums ir iekšējais diametrs, ierakstiet to sienas vietā: otrs tiks aizpildīts automātiski. DN, spiediena klase un svars ir neobligāti.
5. Pēc izvēles: raupjums milimetros (to izmanto spiediena zuduma aprēķinā), izolācijas biezums, ar ko sākas jaunās trases, elkoņa rādiuss kā ārējā diametra koeficients, vai specifikācijai ir T veida savienojumi un reducētāji, un tai pašai savs krāsas tonis 3D skatā.
6. Atzīmējiet pakalpojumus, kuru jaunajām trasēm jāsākas šajā specifikācijā, piemēram, dzesētais ūdens.
7. Izvēlieties {{ui:Saglabāt modelī}}.

Specifikācijas tiek saglabātas modeļa failā. Ikviens, kas atver failu, tās redz, un {{ui:Atsaukt}} atceļ izmaiņu.

Specifikāciju vai tās izmēru nevar dzēst, kamēr tajā ir zīmēta trase. Mainot izmēra skaitļus, šā izmēra trases tiek pārzīmētas.

## Specifikācijas izmantošana citā modelī

- {{ui:Eksportēt .json}} saglabā atlasīto specifikāciju kā mazu failu; {{ui:Eksportēt visu}} saglabā visas modeļa specifikācijas. {{ui:Importēt failu}} tās nolasa atpakaļ.
- {{ui:Eksportēt .csv}} saglabā izmēru tabulu izklājlapai. {{ui:Importēt failu}} nolasa arī `.csv`.
- {{ui:Ielīmēt rindas}} pieņem tabulu, nokopētu no izklājlapas. Pirmajā rindā ir kolonnu nosaukumi: `Size`, `OD` un `Wall` (vai `ID`), un pēc izvēles `DN`, `Pressure`, `Weight`. Katrā rindā ir viens izmērs. Skaitļi ir milimetros, ja vien neizvēlaties collas vai šūna neuzrāda savu mērvienību (`0.065 in`).

## Sākuma specifikācijas

{{ui:Pievienot sākuma specifikāciju}} pievieno modelim vienu no šīm kā kopiju, ko varat rediģēt:

| Sākuma specifikācija | Izmēri |
|---|---|
| ASME BPE caurule | 1/4" līdz 6" |
| EN 10357 A sērijas caurule (DIN 11850 2. rinda) | DN10 līdz DN200 |
| EN 10255 tērauda caurule, vidējā sērija | DN15 līdz DN150 |
| EN 10255 tērauda caurule, smagā sērija | DN15 līdz DN125 |

Šīs tabulas ir ārējie diametri un sienas, ko divas vai vairākas publicētas piegādātāju lapas drukā un kurās tās vienojas attiecībā uz standartu. Tās nav ņemtas no pašiem standartiem. Izmēri, ko norāda tikai viena lapa, ir izlaisti. Katrā sākuma specifikācijā ir norādītas tās avota lapas, un tā ir atzīmēta ar "pārbaudīt pēc sava projekta standarta". Raupjums, spiediena klase un svars nav doti.

## Trases zīmēšana specifikācijā

1. Izvēlieties {{ui:Caurule}}. Pakalpojums, ko atzīmējāt specifikācijā, sākas tajā. Jebkurai citai trasei izvēlieties specifikāciju materiālu sarakstā: specifikācijas ir uzskaitītas aiz iebūvētajiem materiāliem kā "Specifikācija: nosaukums".
2. Izmēru saraksts tagad satur tikai šīs specifikācijas izmērus. Izvēlieties vienu un zīmējiet trasi.

Lai vēlāk pārvietotu trasi specifikācijā, atlasiet to un mainiet **Materiāls** rekvizītos. Tās izmērs kļūst par specifikācijas tuvāko izmēru pēc ārējā diametra.

IFC failā caurulei ir specifikācijas nosaukums, standarts, materiāls, savienojums un izmēri (`CadCraft_PipeSpec` un `Pset_PipeSegmentTypeCommon`, pašai caurulei un tās tipam).

Izmēru noteikšana un spiediena zuduma aprēķini izmanto specifikācijas iekšējo diametru. Ja specifikācijai ir raupjums, trases berzi aprēķina ar to (Darcy-Weisbach); bez tā tiek izmantots aprēķina parastais noklusējums.

## Vārsti, filtrs un aizvari

1. Izvēlieties {{ui:Vārsts}} un joslā izvēlieties veidu: cauruļu vārstus — vārtu, lodveida, tauriņvārstu, pārbaudes, balansēšanas vai regulējošo, vai filtru; gaisa vadu aizvarus — tilpuma vai ugunsaizvaru.
2. Noklikšķiniet uz trases vietas, kur tam jābūt. Trase tiek pārgriezta ap to, un abas puses paliek savienotas. Tam ir trases izmērs, un tas pārvietojas kopā ar trasi.

Trases rekvizītos katrs ir uzskaitīts ar {{ui:Noņemt}}; trase atkal saslēdzas.

Spiediena zuduma aprēķins ieskaita veidgabalu zudumu tikai vārtu, lodveida, tauriņvārstu un pārbaudes vārstiem. Pārējie veidi, aizvari un ražotāju ģimenes tur zudumu nepievieno: ņemiet to vērā savā pārbaudē. Tie tiek skaitīti specifikācijā **Veidgabali un vārsti** un apjomu aprēķinā, un IFC failā ierakstīti kā vārsti, filtrs (sietfiltrs) un aizvari ar diviem savienotiem pieslēgumiem.

## Ražotāja modelis kā ģimene

1. Atveriet {{ui:Būvējums}} un izvēlieties {{ui:Ģimenes}}, tad {{ui:Importēt modeli}}. Tiek nolasīti faili IFC, STEP, OBJ, STL, glTF un bibliotēkas vienumu faili. OBJ un STL gadījumā vispirms iestatiet faila mērvienības un augstuma asi.
2. Pieslēgvietu dialogā ierakstiet nosaukumu, ražotāju un modeļa numuru.
3. Izvēlieties, vai tas tiek novietots **Uz trases** (vārsts, filtrs vai aizvars) vai ir **Aprīkojums**, un kā tas tiek ierakstīts.
4. Piešķiriet tam pieslēgvietas. Katrai ir nosaukums, caurule vai gaisa vads, pakalpojums, izmērs milimetros (caurules ārējais diametrs), nominālais izmērs, kā to nosauc jūsu specifikācija, gala tips, tās pozīcija un virziens, kādā tā ir vērsta. {{ui:Uz virsmas}} novieto pieslēgvietu modeļa kastes virsmas centrā. Mazais skats no augšas rāda pieslēgvietas.
5. Izvēlieties {{ui:Saglabāt ģimeni modelī}}.

Ģimene, kas tiek novietota uz trases, prasa tieši divas pieslēgvietas, kas vērstas viena no otras pa vienu līniju. Izvēlieties to vārsta rīka sarakstā un noklikšķiniet uz trases: tā tiek novietota ar savu garumu, un caurules pieslēdzas tās pieslēgvietām.

Ģimene nekad netiek izstiepta. Ja tās pieslēgvietas neatbilst trases izmēram, jūs par to tiek brīdināts, kad to novietojat, un {{ui:Pārbaudīt savienojumus}} to uzskaita.

Aprīkojuma ģimene tiek novietota ar {{ui:Aprīkojums}}, veids **Ražotāja ģimene**. Caurules un gaisa vadi pieķeras tās pieslēgvietām.

{{ui:Lejupielādēt kā bibliotēkas vienumu}} saglabā ģimeni ar tās pieslēgvietām kā failu, ko var iesniegt bibliotēkai.

## Radiatori un konvektori

{{ui:Aprīkojums}} ietver arī **Radiators** un **Konvektors / paneļsildītājs**: vispārīgi korpusi ar plūsmas un atgriezes pieslēgumu apkures ūdenim. Skatiet [MEP aprīkojums ar pieslēgvietām](topic:mep-equipment).
