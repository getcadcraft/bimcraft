---
title: Konstrukcijas karkasa aprēķins
summary: Modeļa sijas, kolonnas un saites — spēki, reakcijas un pārvietojumi zem jūsu iestatītajiem slodžu gadījumiem un kombinācijām, saglabāti IFC failā. Aprēķina palīglīdzeklis, nevis normatīvu pārbaude.
keywords: aprēķins, vienības, pēdas un collas, attēlošanas vienība, konstrukcijas aprēķins, projektēšanas pārbaudes, izmantojums, valcēts, metināts, AISC 360, EN 1993-1-1, karkasa aprēķins, analītiskais modelis, stingumu metode, slodzes, slodzes gadījums, kombinācija, pastāvīgā slodze, mainīgā slodze, pašsvars, reakcijas, lieces moments, bīde, normālspēks, pārvietojums, deformētā forma, balsti, šarnīrveida, iestiprināts, atbrīvojums, pārskats, pdf, csv, craftscript, frame3d, sijas, kolonnas, elementi
from: b93b58c4
---

Cilne {{ui:Aprēķins}} labajā pusē atrod spēkus atvērtā modeļa sijās, kolonnās un saitēs, reakcijas kolonnu pamatos un to, cik stipri elementi liecas, jūsu ievadītajām slodzēm.

:::warning
Tas ir **aprēķina palīglīdzeklis, nevis normatīvu pārbaude**. Aprēķins nepiemēro projektēšanas normu: tas neizmēro elementus un nepārbauda kapacitātes, un tas neizvēlas slodžu koeficientus. Inženieris pārbauda analītisko modeli, tā slodzes un balstus un nosaka, ko skaitļi nozīmē. Zemāk esošais bloks {{ui:Projektēšanas pārbaudes}} pārbauda valcētos tērauda I profilus pēc AISC 360 vai EN 1993-1-1; tas ir palīglīdzeklis, līdz inženieris to ir pārskatījis: skatiet [Projektēšanas pārbaudes](topic:frame-analysis#design-checks).
:::

## Palaidiet to

1. Atveriet IFC modeli un cilni {{ui:Aprēķins}}.
2. Skatā atlasiet vienu vai vairākas sijas, kolonnas vai saites, izvēlieties {{ui:Gadījums}}, {{ui:Slodze}} un {{ui:Virziens}}, ierakstiet vērtību un nospiediet {{ui:Pievienot slodzi}}: kN/m slodzei, kas izkliedēta pa elementu, kN — punktveida slodzei.
3. Nospiediet {{ui:Palaist aprēķinu}}.

Tabulā uzskaitīts katra elementa lielākais normālspēks, bīdes, lieces momenti, griezes moments un pārvietojums; noklikšķiniet uz elementa nosaukuma, lai to atlasītu skatā. Zemāk ir reakcijas. {{ui:Uz modeļa}} zīmē deformēto formu vai vienu iedarbību kā diagrammu blakus katram elementam. Rezultāti kļūst novecojuši, kad modelis mainās: palaidiet to vēlreiz.

Katra slodze un iestatījums ir viena izmaiņa sarakstā {{ui:Izmaiņas}}: {{ui:Atsaukt}} to atsauc, un {{ui:Saglabāt kā IFC}} tās saglabā failā (projekta rekvizītu kopā `CadCraft_Analysis`), tāpēc nākamreiz, kad modelis tiks atvērts šeit, tā slodzes joprojām būs.

## Kā tiek veidots analītiskais modelis

- Katrs IfcBeam, IfcColumn un IfcMember, kura forma ir viena taisna ekstrūzija, kļūst par elementu uz sava šķērsgriezuma centrālās līnijas. Šķērsgriezuma īpašības nāk no profila: I, U, L un T formas, taisnstūri un caurules, apļi un apaļas caurules, vai jebkurš slēgts kontūrs (tad griezes konstante ir aptuvena, par ko pārskatā tiek ziņots). Viss citādais tiek izlaists un saskaitīts.
- Modelī sijas apstājas pie kolonnas virsmas un atrodas zem grīdas. Katrs elementa gals tiek pārnests pa savu līniju uz to elementa asi, kuram tas pieslēdzas, kad šī ass ir tuvu (aptuveni šķērsgriezumu izmēra robežās), un šis elements tiek sadalīts tajā vietā. Pārskatā ir norādīts, cik galu tika pārvietoti.
- **Kolonnu pamati**, zem kuriem nekas nav, ir balsti: iestiprināti (sākums) vai šarnīrveida (turēti vietā un pret griešanos, bet brīvi grozās).
- **Sijas gali** ir stingri vai šarnīrveida pēc noteikuma {{ui:Sijas gali bez savienojuma}}; **saites** (IfcMember) ir šarnīrveida abos galos. Atlasiet vienu elementu, lai tā galiem vai kolonnas pamatam piešķirtu savu noteikumu.
- Materiāli pēc nosaukuma: betons (E = 30 GPa), koks (E = 11 GPa), citādi tērauds (E = 200 GPa).

Ja karkass var kustēties, nelieces nevienu elementu — mehānisms —, aprēķins apstājas un norāda, kur un kurā virzienā.

## Gadījumi, kombinācijas, zīmes un pārskats

Aprēķins sākas ar **Pastāvīgo** (pašsvars), **Mainīgo** un **Pastāvīgo + mainīgo**; pievienojiet gadījumus un kombinācijas ar koeficientiem, ko prasa jūsu projektēšanas norma. N > 0 ir stiepe; My > 0 liek elementa lokālajai −z pusei būt stiepē (sija, kas noliecas zem gravitācijas, ir ar My > 0). {{ui:Atskaite (PDF)}} un {{ui:Atskaite (CSV)}} satur pieņēmumus, šķērsgriezumus, gadījumus, reakcijas ar to summām, elementu spēkus, pārvietojumus un apvalkojumu. {{ui:Eksportēt kā CraftScript}} saglabā karkasu PartCraft Script darbvietai, kur bibliotēkas funkcija `frame3d` to atrisina lasāmā kodā.

Metode ir tiešās stingumu metode, lineāra un pirmās kārtas, ja neatzīmējat Otrās kārtas (P-Delta); tā pārbaudīta pret mācību grāmatu gadījumiem.

**Otrās kārtas (P-Delta).** Atzīmējiet *Otrās kārtas (P-Delta)* blakus {{ui:Palaist aprēķinu}}: katra kombinācija tiek atrisināta vēlreiz, ar elementu normālspēkiem, kas iedarbojas uz deformēto karkasu (katrs elements sadalīts 4 daļās, tāpēc arī lieces starp tā galiem tiek ņemtas vērā), līdz normālspēki nostabilizējas. Rezultātu rindā norādīts iterāciju skaits un tas, cik lielā mērā pieauga nobīde; momenti, pārvietojumi, projektēšanas pārbaudes un pārskats tad izmanto šos rezultātus. Virs karkasa elastīgās kritiskās slodzes aprēķins apstājas un par to paziņo. Tas ir elastīgs ar nelielām pagriezienām, tikai lieces, bez stinguma samazinājuma vai nominālām slodzēm (pats par sevi nav AISC tiešās analīzes metode); plāksnes, sienas un stingras grīdas paliek pirmās kārtas.

**Grīdas spiediens uz pārsegumiem.** Betona pārsegumiem (aprēķins lasa pārsegumu kā plāksnes, kad tā materiāls ir betons) slodžu blokā ir {{ui:Spiediens uz visiem pārsegumiem}}: ierakstiet kN/m², izvēlieties augstāk minēto gadījumu un nospiediet {{ui:Pievienot pārsegumiem}}. Tas tiek izkliedēts pa visiem aprēķinā atrastajiem pārsegumiem, uz leju, un uzskaitīts ar saiti Noņemt. Tas ir viens spiediens visiem pārsegumiem, nevis katram atsevišķi, un tā nav normatīvā slodze: ierakstiet vērtību, ko jums sniedz inženieris.

**Dabiskās frekvences (galīgie elementi).** Bloks {{ui:Galīgie elementi: dabiskās frekvences}} zem rezultātiem atrod zemākās formas tajā pašā modelī ar galīgo elementu dzinēju: sijas ar to galu atbrīvojumiem, pārsegumi un sienas kā plakanas četrmezglu čaulas, stingras grīdas, balsti. Izvēlieties formu skaitu (3, 6, 10 vai 20) un pārsegumu elementu (četrmezglu čaula biezajiem vai plānajiem pārsegumiem vai plānā pārsegumu elements) un nospiediet {{ui:Atrast frekvences}}. Tabulā katras formas frekvence Hz, periods sekundēs un efektīvā modālā masa pa X, Y un Z kā daļa no masas, kas var kustēties; {{ui:Rādīt uz modeļa}} zīmē jebkuru formu tāpat kā deformēto formu. Masa ir materiāla blīvums reizināts ar tilpumu: slodzes masu nepievieno, un materiālam bez blīvuma masas nav. Pārskats (PDF, CSV) satur tabulu. Tas ir elastīgs un tikai mazām kustībām, un šeit no normas netiek radīta seismiska vai vēja slodze. Nav normatīva pārbaude; jūsu inženieris pārskata rezultātus.

**Atbilžu spektrs, laika vēsture un pushover.** Zem frekvencēm atrodas vēl trīs bloki, kas izmanto to pašu galīgo elementu modeli. Masa visiem ir materiāla blīvums plus to gadījumu lejupvērstās slodzes, ko atzīmējat, katra reizināta ar koeficientu, ko ierakstāt (piemēram, Pastāvīgā ar 1 un Mainīgā ar tādu daļu, kādu skaitāt kā masu).

{{ui:Atbildes spektrs}} nolasa katru formu no jums dotā spektra (periodu un paātrinājumu tabulas vai ASCE 7 formu no SDS, SD1 un TL; poga {{ui:Izmantot seismiskā bloka vērtības}} tās nokopē no bloka {{ui:Seismiskā}}) un apvieno formas ar CQC, SRSS, desmit procentu noteikumu vai absolūto summu, tad saliek kopā X, Y un Z virzienus (100 % + 30 % vai SRSS). Tas sniedz pamatnes bīdi, stāvu nobīdes, elementu galu spēkus un formu tabulu, kura brīdina, ja izmantotās formas nes mazāk nekā 90 % masas. Rezultātus var mērogot ar koeficientu vai līdz pamatnes bīdei, ko ierakstāt; bloks pats nekad neaprēķina šo pamatnes bīdi. Rezultātiem nav zīmes.

{{ui:Laika vēsture}} palaiž pamata paātrinājumu ar modālo superpozīciju (precīzi ieraksta taisnajām līnijām starp punktiem) vai ar tiešo integrāciju (Newmark vidējā paātrinājuma metode ar Rayleigh slāpēšanu). Ievade ir izveidots sinusoīds vai impulss (vienmēr apzīmēts kā sintētisks), ielīmēts ieraksts vai atvērts teksta fails (laiks un paātrinājums, viens paātrinājums katrā rindā ar soli, vai PEER tipa fails ar DT= galveni; g vai m/s²). Tas sniedz jumta pārvietojumu un pamatnes bīdi pret laiku, katra līmeņa nobīdi un elementu galu spēku apvalkojumu. Modeļi ar ļoti garu ierakstu to saglabā tikai sesijai.

{{ui:Pārspiešana (pushover)}} spiež jumtu sānis mazos soļos (forma kā pirmajai formai vai vienmērīga), ar plastiskiem šarnīriem elementu galos, kuriem ir I forma. Šarnīrs sāk tecēt plastiskajā momentā, kas krītas, kad normālspēks aug (aprēķināts no zīmētās formas, noapaļojumi neņemti vērā); sacietēšana ir pēc izvēles, P-delta ir pēc izvēles, un gravitācijas kombināciju var piemērot vispirms. Tas sniedz kapacitātes līkni (pamatnes bīde pret jumta pārvietojumu), pirmo šarnīru un katra šarnīra stāvokli un plastisko pagriezienu. {{ui:Palaist nelineāro laika vēsturi}} palaiž tos pašus šarnīrus zem bloka Laika vēsture ieraksta mazos modeļos. Šarnīri veidojas tikai elementu galos (novietojiet mezglu tur, kur tam jāveidojas spanā); elements, kas atbrīvots abos galos, šarnīru nesaņem; saišu tecēšana un izliekšanās nav modelēta; pārsegumi un sienas paliek elastīgi; kritēriji nav doti. Nav normatīva pārbaude; jūsu inženieris pārskata rezultātus. Iestatījumi tiek saglabāti kopā ar modeli, un pārskatā ir tabulas.

Vēl nav izveidots: izliekšanās, trūkstošās masas korekcija atbilžu spektram, ierakstu mērogošana, kritēriji šarnīriem (dinamiskā reakcija ir, augstāk), laukuma slodzes, kas nav viens spiediens uz visiem pārsegumiem, elementu nobīdes, saites, kas strādā tikai stiepē, sienas un pārsegumi karkasā, projektēšanas normas pārbaudes metinātiem profiliem un šķērsgriezumiem, kas nav valcēti I profili. Skatiet [Vēl nav izveidots](topic:not-built-yet).

## Vienības

Garumi seko vienībai, ko izvēlaties rīkjoslā ({{ui:Mērvienības}}), tāpat kā pārējā BimCraft: slodžu pozīcijas, ko ierakstāt un redzat ({{ui:No}}, {{ui:Uz}}, {{ui:Pie}}), mezglu slodžu un reakciju punkti, stāvu augstumi blokā {{ui:Seismiskā}}, un pārvietojumu un nobīdes kolonnas (feet and inches rāda šos mazos garumus decimālcollās). Mainiet vienību jebkurā brīdī; cilne pārzīmējas. Spēki paliek kN un kN·m, un pārskats (PDF, CSV) un CraftScript fails paliek milimetros ar norādītu vienību. Šķērsgriezumu izmēri, stieņu diametri un segumi blokā {{ui:Betons}} paliek milimetros, kā tie ir nosaukti.

## Projektēšanas pārbaudes

Blokam {{ui:Projektēšanas pārbaudes}} (tāds pats kā DetailCraft) izvēlieties {{ui:Projektēšanas norma}}, ASCE 7 + AISC 360 vai EN 1990 + EN 1993-1-1, un {{ui:Tērauda klase}}. Katram slodzes gadījumam piešķiriet tā veidu (pastāvīgā, mainīgā, vēja …), un {{ui:Izveidot kombinācijas}} uzraksta normas slodžu kombinācijas no jūsu gadījumiem; aprēķins tās tad palaiž kā jebkuru kombināciju.

{{ui:Pārbaudīt elementus}} pēc tam pārbauda katru **valcētu tērauda I profilu** ar DetailCraft pārbaudēm (stiepe, spiede ar izliekšanos, lieces ar sānu-griezes izliekšanos, bīde, lieces ar normālspēku, pārvietojums; klauzulas ir pārskatā) un parāda, cik lielu tā kapacitāti tas izmanto, krāsotu modelī. Tas ir **palīglīdzeklis, kamēr inženieris to nav pārskatījis**.

**Kuri elementi tiek pārbaudīti.** IFC profils neizsaka, vai tērauda I profils ir valcēts vai metināts, tāpēc BimCraft to uzskata par valcētu tikai tad, ja tā profila nosaukums (citādi elementa tipa nosaukums) ir izmērs no AISC W vai S tabulām vai EN 10365 IPE, HEA vai HEB tabulām (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **un** augstums, platums, sieniņa un flanšs failā atbilst šim izmēram ar 1 % precizitāti. Katrs cits I profils (plākšņu sija, izmērs ar citu nosaukumu, rediģēts izmērs) tiek uzskatīts par metinātu un atgriežas **nepārbaudīts**, tāpat kā caurules, leņķi, kanāli un citi šķērsgriezumi, slaidas daļas un griezes. Pārbaudiet šos elementus kopā ar inženieri.
