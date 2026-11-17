---
title: "Novērtējiet dienasgaismu katrā telpā"
summary: "Katras telpas vidējais dienasgaismas koeficients no tās logiem, tās iekšējām virsmām un debesu daļas, ko redz katrs logs, ar debesu leņķi, izmērītu modelī. Agrīns projektēšanas novērtējums, nevis simulācija vai normatīvu pārbaude."
keywords: "dienasgaisma, dienasgaismas koeficients, vidējais dienasgaismas koeficients, adf, vertikālā debesu komponente, vsc, saules siltuma ieguve, saule, g-vērtība, režģis, sadalītā plūsma, debesu komponente, iekšēji atstarotā komponente, dabiskā gaisma, logs, stiklojums, debesu leņķis, aizsegs, aizēnojums, balkons, pārkare, atstarošana, caurlaidība, agrīna projektēšana, analīze, telpas, zonas"
from: 5f300a78
---

Cilnē {{ui:Daylight}} labajā panelī tiek aprēķināts katras telpas **vidējais dienasgaismas koeficients**: cik no mākoņainās debess gaismas ārpusē vidēji sasniedz telpu, procentos. Tā nolasa atvērtā IFC modeļa telpas (zonas) un logus. Modelī nekas netiek mainīts un nekas netiek augšupielādēts.

:::warning
Viss šajā cilnē ir **projektēšanas palīglīdzeklis, nevis atbilstības aprēķins**: agrīna projektēšanas novērtējumi ar publicētām metodēm, **nevis simulācija** un **nevis pārbaude pret būvnormatīvu vai standartu**. BS EN 17037, LEED, BREEAM un enerģijas normatīvi prasa dienasgaismas simulāciju ar vietas klimatu; šiem nolūkiem izmantojiet dienasgaismas simulācijas programmu.
:::

## Aprēķins

1. Atveriet IFC modeli, kurā ir telpas (zonas) un logi. Šeit zīmētos modeļos telpa ir katrā slēgtā sienu kopā.
2. Atveriet cilni {{ui:Daylight}} un noklikšķiniet uz {{ui:Calculate}}.
3. Katrā telpā redzams tās dienasgaismas koeficients un josla: zem 2 %, 2–5 % vai 5 % un vairāk. Noklikšķiniet uz telpas, lai redzētu tās virsmas un katra loga laukumu un debesu leņķi; telpa un tās logi tiek atlasīti modelī.

Mainot ievadi, skaitļi uzreiz seko; pēc modeļa maiņas noklikšķiniet uz {{ui:Calculate again}}. {{ui:CSV}} saglabā katru telpu ar tās skaitļiem un izmantotajiem ievadiem.

## Formula

Vidējais dienasgaismas koeficients (%) = T × Ag × θ × M ÷ (A × (1 − R²)), summēts pa telpas logiem (Littlefair formula, ko izmanto BRE 209, BS 8206-2 un CIBSE LG10):

- **T**, stikla gaismas caurlaidība (sākumā 0.7: izmantojiet ražotāja vērtību).
- **Ag**, stiklotais laukums: katra loga laukums (tā kopējais platums × augstums, citādi tā izmērs modelī) × **stiklotā daļa** (sākumā 0.75: pārējais ir rāmis).
- **θ**, debesu leņķis, ko logs redz, grādos (zemāk).
- **M**, uzturēšanas koeficients netīrumiem uz stikla (sākumā 1).
- **A**, katra telpas iekšējā virsma: grīda, sienas, griesti un logi, ņemti no pašas telpas formas.
- **R**, to vidējā atstarošana, svērta pēc laukuma: grīda 0.2, sienas 0.5, griesti 0.7 sākumā; stikls tiek skaitīts kā 0.1.

## Kā tiek mērīts debesu leņķis

Katram logam BimCraft griež modeli ar vertikālu plakni, kas ir taisna pret logu un sākas no stikla ārējās virsmas, un skatās no horizonta taisni uz augšu: viss, ko griezums sastop logam priekšā (pretī esoša ēka, balkons vai pārkare virs tā, jumta uzlaidums), aizsedz daļu no šiem 90°. θ ir tas, kas paliek. Pats logs un siena, kurā tas atrodas, netiek ieskaitīti. To dara piecās vietās pa loga platumu un ņem vidējo, tāpēc plāns stabs priekšā vidū aizsedz tikai savu daļu, nevis visas debesis.

Ēka 8.5 m virs loga centra un 9.9 m attālumā aizsedz 40.65° (leņķis, kura tangenss ir 8.5 ÷ 9.9), atstājot θ = 49.35°.

## Katra loga vertikālā debesu komponente

{{ui:Calculate}} arī izmēra katram logam, ko tas redz no visām debesīm: to pašu vertikālo griezumu, pagrieztu uz katru virzienu pāri loga priekšpusei (ik pa 2°, no vienas malas līdz otrai), tāpēc ēka sānos, lamelis vai dziļa ailes mala aizņem savu daļu. No tā BimCraft aprēķina **vertikālo debesu komponenti (VSC)**: cik no mākoņainās debess gaismas sasniedz stiklu, kā daļu no tā, ko saņemtu atklāts, plakans jumts. Logs bez nekā priekšā saņem **39.6 %**, vairāk nekā var vertikāls logs; gara ēka, kas paceļas 25° virs loga, atstāj aptuveni **27 %**, skaitli, ko Lielbritānijas norādījumi (BRE 209) izmanto kā praktisku likumu. Katra loga detaļās redzams tā VSC un tā **aizsegšanas leņķis** (cik augstu lietas paceļas tieši tā priekšā).

Debess ir CIE standarta mākoņaina debess, kas taisni virs galvas ir trīs reizes spožāka nekā pie horizonta, un griezums ir precīzs: nekas netiek izlases veidā ņemts.

## Saule caur logiem noteiktā datumā

Atveriet {{ui:Sun through the windows on a date}} un izvēlieties datumu. BimCraft seko saulei visā dienā ik pa ceturtdaļstundām un katram logam saskaita siltumu, ko saule ieved caur stiklu:

- **tiešo sauli**, kad tā atrodas loga priekšā un nekas modelī to neaizsedz (tas pats precīzais griezums, pagriezts pret sauli: balkons, kas aizsedz augstās vasaras saules pusdienlaiku, ielaiž zemo ziemas sauli);
- **debesu gaismu** uz stikla, mīnus to, ko logs nevar redzēt;
- gaismu **no zemes** (tās atstarošana: sākumā 0.2);
- visu caur stikla **g-vērtību** (saules enerģijas daļa, ko tas ielaiž: sākumā 0.6; izmantojiet ražotāja vērtību) un tā stikloto daļu.

Katrā telpā redzams dienas kopējais kWh un tās maksimums vatos ar laiku; telpas detaļās diena attēlota grafikā. Debess ir skaidra saskaņā ar Hotela modeli (Duffie & Beckman, *Solar Engineering of Thermal Processes*), ar vasaras vai ziemas skaitļiem vietai un sezonai un vietas augstumam; saules pozīciju nosaka NOAA. Vietas platuma un garuma grādi tiek ņemti no IFC vietas, bet ziemeļi no modeļa patiesajiem ziemeļiem; ja modelim nav vietas, ierakstiet platuma un garuma grādus. Laiks ir standarta laiks (bez vasaras laika) laika joslā, ko ierakstāt, citādi tajā, ko norāda garuma grāds.

Tas neņem vērā: mākoņus (diena ir skaidra), to, ka stikls zemos leņķos ielaiž mazāk, rāmjus, kas ēno stiklu, žalūzijas, un to, ko sienas un jumts uzsūc. Dzesēšanas novērtējums tajā pašā cilnē izmanto maksimumu.

## Dienasgaismas koeficients režģī

Atveriet {{ui:Daylight factor on a grid}} un {{ui:Work out the grid}}: BimCraft uzklāj režģi katras telpas grīdai darba plaknes augstumā (sākumā 0.85 m), pusi metra no sienām, un aprēķina dienasgaismas koeficientu katrā punktā ar **BRE sadalītās plūsmas metodi**:

- **debesu komponente**: mākoņainā debess, ko punkts redz caur katra loga atvērumu, mīnus rāmji;
- **ārēji atstarotā komponente**: ko punkts redz caur logu no ārpus esošām ēkām, spīdošām ar desmito daļu no debess aiz tām (mainiet aizsegu spožumu, ja tās ir daudz gaišākas vai tumšākas);
- **iekšēji atstarotā komponente**: gaisma, kas atsitas pa telpu, no telpas virsmām un to atstarošanas, logu laukuma un tā, cik tā ir ārpus tiem (BRE formula, ar stikla caurlaidību caurspīdīgā stikla vietā, ko tā pieņēma).

Katrā telpā redzams tās vidējais, zemākais punkts un tas, cik daļai sasniegti 2 % vai vairāk; telpas detaļās ir attēlots plāns, katrs punkts krāsots pēc sava dienasgaismas koeficienta un logi sarkani. Lai tas būtu ātrs jebkurā datorā, telpai ir ne vairāk kā **400 punkti**: lielā telpā solis palielinās, lai tie ietilptu (ierakstiet soli, lai izvēlētos savu).

## Ko tas neņem vērā

- Jumta logi (stikls horizontāli vai slīpi) ir uzskaitīti, bet neskaitīti: šeit doto formulu pamatā ir logi sienās.
- Logi bez telpas aiz tiem (piemēram, zāle bez zonas) ir uzskaitīti atsevišķi.
- Logu aileses (atvērums tiek ņemts pēc ārējās virsmas), mirdzums, saules stundas un uz klimatu balstīta dienasgaisma. BS EN 17037, LEED vai BREEAM gadījumā izmantojiet dienasgaismas simulācijas programmu.
- Joslas ir no vecākiem britu norādījumiem (BS 8206-2), rādītas kā vadlīnija, nekad kā izturēts vai neizturēts.
