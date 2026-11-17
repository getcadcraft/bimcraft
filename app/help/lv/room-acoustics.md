---
title: Pārbaudiet telpas reverberāciju un noklausieties to
summary: Reverberācijas laiks oktāvu joslās katrai telpai (Sabine un Eyring) pēc tās izmēra un apdares, jūsu pašu mērķa, kā arī balss, plaukšķināšanas vai mūzikas atskaņošana caur aprēķinātu telpas impulsa atbildi.
keywords: akustika, reverberācija, reverberācijas laiks, rt60, sabine, eyring, absorbcija, atbalss, skaņa, klausīties, impulsa atbilde, runa, klase, birojs, paklājs, griestu plātne, troksnis
from: 16996cbb
---

Sadaļa {{ui:Telpu akustika}} kreisajā panelī aprēķina, cik ilgi skaņa paliek katrā telpā. Tā no atvērtā IFC modeļa nolasa katras telpas grīdas laukumu, augstumu, sienas, durvis un logus. Modelī nekas netiek mainīts.

## Izvēlieties apdari

Kur modelis norāda, kas atrodas uz virsmas, telpa to nolasa: katras sienas tipa iekšējo slāni (ģipsis, apmetums, ķieģeļi, betons un bloki ir zināmi), grīdas veidu (koks vai betons) un to, vai griesti ir flīzēti. Blakus katrai izvēlei esošā etiķete norāda, vai tā ir no modeļa, noklusējums vai jūsu izvēle; izvēlieties citu apdari, lai to aizstātu. Viss, ko modelis nenorāda, paliek noklusējumā. Koeficienti ir **tipiskas publicētas vērtības**; aizstājiet tās ar produkta testa datiem, kad tie ir pieejami. Ierakstiet **mērķi** (garāko vidējās frekvences reverberāciju, ko vēlaties), un jebkura telpa virs tā tiks parādīta kā brīdinājums ar absorbciju, kas to samazinātu.

## Lasiet tabulu

Reverberācija ir dota no 125 Hz līdz 4 kHz. Sabine der dzīvām telpām, Eyring — mirušām; rinda ar atzīmi *Izmantots* ņem Eyring, ja vidējā absorbcija ir virs 0.2. Gaisa absorbcija ir iekļauta (tā saīsina augstās joslas lielās telpās). Tas ir statistisks modelis: tas pieņem, ka skaņa izplatās vienmērīgi, tāpēc garas vai plakanas telpas un ļoti mazas telpas ir aptuvens vadlīnijs, un mēbeles, cilvēki un atvērtas durvis netiek skaitīti.

## Klausieties

{{ui:Atskaņot šajā telpā}} atskaņo balsi (šeit veidotu), plaukšķināšanu, plūktas notis vai **jūsu pašu skaņas failu** (tas paliek jūsu datorā) caur telpai aprēķinātu impulsa atbildi: tiešo skaņu, pirmajiem atstarojumiem šāda izmēra kastes telpā un asti, kas izzūd ar telpas pašas reverberācijas laiku katrā joslā. {{ui:Atskaņot bez telpas atbalsis}} atskaņo to pašu skaņu tādā pašā līmenī bez telpas. Impulsa atbildi vai skaņu telpā varat saglabāt kā WAV failus. Tas skan kā telpa ar šādu izmēru un apdari, nevis kā jebkura reāla telpa.

## Cilvēki un mēbeles

Ierakstiet **cilvēku skaitu šajā telpā**, lai pievienotu viņu absorbciju. Modelī esošās mēbeles (dīvāni, gultas, krēsli, galdi, skapji, atrastas pēc nosaukuma) pievieno savu. Skaitļi ir aptuvenas plānošanas vērtības, noapaļotas; aizstājiet tās ar mērījumiem telpai, kas ir svarīga.

## Avots un klausītājs

Zem {{ui:Avots un klausītājs}} nospiediet {{ui:Novietot avotu}} vai {{ui:Novietot klausītāju}} un noklikšķiniet uz telpas plāna. Skaņa, ko atskaņojat, tad tiek dzirdēta no turienes: tiešā skaņa ierodas pēc attāluma, un reverberētā daļa ir tādā līmenī, kāds atbilst šim attālumam. Notīriet abus, lai atgrieztos pie attāluma lodziņa.

## Nevienmērīga absorbcija un telpas režīmi

Zem {{ui:Nevienmērīga absorbcija (kastveida telpa)}} ierakstiet telpu kā kasti un izvēlieties tās grīdas, griestu un sienu apdari. Tabulā Fitzroy un Arau-Puchades pievienoti Sabine un Eyring: tie apskata trīs pretējo virsmu pārus atsevišķi, tāpēc paklāta telpa ar cietiem griestiem netiek lasīta par īsu. Kad pāri ievērojami atšķiras, piezīme norāda, kuram ticēt. Zem tabulas **Telpas režīmi** uzskaita kastes zemākos stāvvilņus un frekvenci, zem kuras telpai ir atsevišķi režīmi, nevis vienmērīgs skaņas lauks. Tās ir prognozes kastes telpai, projektēšanas palīglīdzeklis, nevis mērījums.

## Mērvienības

Telpu laukumi, augstumi, tilpumi un attālumi tiek rādīti jūsu izvēlētajās {{ui:Mērvienības}} (kvadrātpēdas un kubikpēdas, collas, milimetri, centimetri vai metri). Aprēķins pats paliek SI; mainās tikai attēlojums. Laiki (sekundes), frekvences un līmeņi nemainās.
