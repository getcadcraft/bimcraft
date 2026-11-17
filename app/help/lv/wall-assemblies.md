---
title: Sienu konstrukcijas un atsauces izmēri
summary: Veidojiet savus sienu tipus slāni pa slānim ar skaidru serdi, uzturiet projekta materiālu bibliotēku un dimensionējiet pret virsmām un centrālēm, kas paliek piesaistītas, kad siena mainās.
keywords: lod, attīstības līmenis, lod 200, lod 300, vispārīgs, sienas konstrukcija, sienas tips, slāņi, serde, serdes virsma, serdes centrāle, gaisa spraugs, membrāna, mājas aizsargplēve, materiālu bibliotēka, materiāli, biezums, atsauces izmērs, izmērs, asociatīvs, atrašanās līnija, apšuvums, stenderis, ģipškartons
from: 4ea8fbf5
---

## Ko jūs darīsiet

Izveidojiet sienas tipu, kas atbilst sienai, ko jūs būvēsiet: apšuvums, apšuvuma pamatne, 5½ collu stenderu serde un ģipškartons vai ķieģeļi, gaisa spraugs un koka karkasa siena. Atzīmējiet, kuri slāņi ir serde, lai izmēru vai atrašanās līniju varētu piesaistīt serdei, kamēr apdare ap to mainās. Pēc tam dimensionējiet sienas līdz virsmām un centrālēm, ko domājat.

## Izveidot sienas tipu

1. Sāciet ēku vai atveriet IFC modeli un ieslēdziet {{ui:Zīmēšana}}, tad izvēlieties {{ui:Siena}} rīku.
2. Izvēlieties sākuma tipu {{ui:Sienas tips}} un atveriet {{ui:Sienu konstrukcijas…}}. Sākuma tips atveras kā kopija; piešķiriet jaunajam tipam nosaukumu.
3. Slāņi iet no ārpuses saraksta augšdaļā līdz iekšpusei apakšā. Izvēlieties katra slāņa materiālu, ierakstiet tā biezumu (projekta mērvienībās vai precīzi, piemēram, `12.7 mm` vai `1/2"`), izvēlieties tā funkciju (apdare, pamatne, konstrukcija, izolācija, membrāna) un atzīmējiet slāņus **Serde**. Serdei jābūt vienai nepārtrauktai grupai.
4. {{ui:Pievienot slāni}} pievieno slāni, {{ui:Pievienot gaisa spraugu}} pievieno gaisa spraugu ar tā ventilāciju (nenorādīta, neventilēta, ventilēta), {{ui:Pievienot membrānu}} pievieno slāni bez nominālā biezuma, piemēram, mājas aizsargplēvi. Bultiņas pārvieto slāni uz āru vai uz iekšu.
5. Priekšskatījums zīmē slāņus pēc mēroga ar pasvītrotu serdi, numurētus kā rindas, un izmēro katru slāni, serdi un kopējo biezumu. {{ui:Saglabāt tipu}}.

Jaunais tips ir sienas rīka sarakstā un izvēlētas sienas **Rekvizītos**. Saglabājot rediģētu tipu, mainās katra siena, kas to izmanto; {{ui:Dublēt tipu}} izveido atsevišķu tipu un piešķir to tikai izvēlētajām sienām. Katra saglabāšana ir viens atsaukšanas solis kopā ar sienām, ko tā pārvieto, durvīm un logiem tajās un izmēriem, kas no tām ir atkarīgi.

Gaisa spraugs pievieno platumu. Membrāna nekā nepievieno: tā paliek tipā, lai specifikācija to varētu atrast vēlāk, un tā neskaitās ne sienas, ne serdes biezumā. Gaisa spraugs vai membrāna nekad netiek skaitīta kā cietais materiāls. Failā, kas saglabāts kā IFC2X3, membrāna paliek tipa ierakstā, bet tiek izlaista no tā fiziskajiem materiālu slāņiem.

## Atzīmēt tipu ar tā attīstības līmeni (LOD)

Tips var norādīt, cik tas ir attīstīts. Redaktorā **Attīstības līmenis (LOD)** piedāvā fiksētu skalu 100, 200, 300, 350, 400 un 500 vai **Nav iestatīts**. Vispārīga siena ("Siena 230 vispārīga") ir LOD 100 vai 200; konkrēta konstrukcija ar reāliem slāņiem ("230 ķieģeļi, abās pusēs apmesti") ir LOD 300 vai augstāks. Atzīmi nosakāt jūs: BimCraft to neaprēķina, un sākuma tipiem tādas nav.

Atzīme rādās blakus tipa nosaukumam sienas rīka tipu sarakstā, sienas Rekvizītos un sarakstā [Mainīt veidu](topic:wall-tools), un pārskats pēc maiņas norāda, vai līmenis pacēlās vai nokrita. Lai to redzētu specifikācijā **Sienas pēc tipa** un tās CSV, iestatījumos "Iestatījumi › BimCraft › Sienas" atzīmējiet **Rādīt katra sienas tipa LOD sienu specifikācijā**: tiek pievienota pēdējā kolonna LOD. Atzīme tiek saglabāta IFC failā kopā ar tipu (tipa rekvizītu kopā `CadCraft_WallType` kā rekvizītu `LOD` un tipa ierakstā), tāpēc tā ir arī tad, kad fails tiek atvērts atkal. Atzīme pagaidām attiecas tikai uz sienu tipiem, nevis uz atsevišķiem elementiem vai citiem elementu veidiem.

## Vispārīgas sienas skices posmam

Sienas rīka tipu saraksts sākas ar divām **vispārīgām** sienām: **Vispārīga siena 200 mm (ārējā)** un **Vispārīga siena 100 mm (iekšējā)**. Katra ir viens vispārīgā materiāla slānis, atzīmēts ar LOD 200. Izmantojiet tās, kad zināt, kur sienas ies, bet vēl nezināt, no kā tās būs.

Siena, kuras tips ir atzīmēts ar **LOD 100** vai **LOD 200**, katrā plānā tiek zīmēta kā **viena šrafēta josla** — katrā detalizācijas līmenī: bez slāņiem un bez slāņu līnijām. Tas attiecas gan uz vispārīgajām sienām, gan uz jebkuru jūsu pašu tipu, ko atzīmējat ar LOD 100 vai 200. Pati siena ir pabeigta: tai ir biezums, durvis un logi, telpas un daudzumi.

Lai to attīstītu, mainiet tās tipu (Labot › Sienas › **Mainīt veidu** vai Tips Rekvizītos). Siena netiek atkārtoti zīmēta: tā pati siena saņem jauno tipu, un pārskats saka, kas pārvietojās. Tips, kas atzīmēts ar LOD 300 vai augstāku, tiek zīmēts ar saviem slāņiem kā agrāk.

Lai zīmētu katru sienu pēc tās slāņiem neatkarīgi no atzīmes: Iestatījumi › BimCraft › Sienas, noņemiet atzīmi no **Zīmēt LOD 100 vai LOD 200 tipa sienas kā vienu šrafētu joslu**.

Sākuma durvis un logi arī ir vispārīgi veidi (izmērs un atvēršanas veids, nevis produkts). Ja ir ieslēgts **Rādīt katra sienas tipa LOD sienu specifikācijā**, durvju un logu specifikācijās tiem rādās LOD 200.

## Piešķirt tipam tā apjomu aprēķina datus

Sienas tipa redaktorā **Apjomu aprēķina dati** ietver to, kas tāmētājam jāzina par sienu, vienu reizi tipam: **vienību**, no kuras tā ir veidota (ķieģelis vai bloks: tā nosaukums, garums, augstums un platums), **javu** (nosaukums un šuves biezums) un **likmi** ar tās valūtas kodu (trīs burti, piemēram, USD, EUR vai ZAR) un to, uz ko tā attiecas: kvadrātmetru vai kvadrātpēdu neto sienas laukuma, metru vai pēdu sienas garuma vai katru sienu. Viss ir neobligāts.

Tas tiek saglabāts failā kopā ar tipu. Katra tipa siena tad par to ziņo: {{ui:Specifikācijas}} › **Sienu tipi: apjomu aprēķina dati** parāda vienību, javu, likmi un likmi, reizinātu ar izmērīto daudzumu, un apjomu aprēķins, kas nodots TakeoffCraft, šim sienas tipam piesaista šo informāciju. Mainiet to tipā, un katra siena seko.

Vēl trīs lauki ir ķieģeļu vai bloku un javas skaitīšanai:

- **Zudums vienībās, %** tiek pieskaitīts vienību skaitam. Atstājiet tukšu, lai izmantotu projekta mērīšanas metodes skaitli, vai nekāds, ja metodei tāda nav. Ievadiet 0, lai zudums nebūtu nekāds neatkarīgi no metodes.
- **Papildu java, %** ir paredzēta caurumiem vai perforācijām, kas ņem javu. Tā tiek pieskaitīta javas tilpumam. Atstājiet tukšu, ja tādu nav.
- **Slāņi, kas veidoti no šīs vienības**: atzīmējiet katru slāni, kas ir šī ķieģeļa vai bloka sienas lapa. Dobumu sienai ir divas lapas. Ja neviens nav atzīmēts, tiek skaitīti serdes slāņi.

Likmi var norādīt arī par vienību pasūtījumam, par 1000 vienībām pasūtījumam vai par m³ javas. Ja vienībai ir garums un augstums, **Sienu tipi: apjomu aprēķina dati** rāda vienību skaitu uz m² (vai ft²) vienas lapas, vienību pasūtījumam un javas tilpumu; formulas ir sadaļā [Ķieģeļi, bloki un java](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Tipam ir viena vienība: divas dažādu vienību lapas (ārējā ķieģeļu un iekšējā bloku) pagaidām nevar saskaitīt vienā tipā.

## Turēt serdi stabilu

Rekvizītos iestatiet sienas **Atrašanās līniju** uz serdes virsmu vai serdes centrāli. Kad vēlāk pievienojat apdari vai to biezināt, šī līnija paliek savā vietā, un siena aug ap to; sienas, kas tai pieslēdzas stūrī, seko, tāpēc taisni stūri paliek noslēgti.

## Projekta materiāli

{{ui:Materiālu bibliotēka…}} uzskaita projekta materiālus: nosaukumu, kategoriju, biezumu, ar kuru sākas slānis, attēlošanas krāsu, griezuma aizpildījuma rakstu un piezīmes. Bibliotēka tiek saglabāta IFC kopā ar projektu. Izvēloties slānim materiālu, šim slānim piešķir materiāla noklusējuma biezumu, ko pēc tam var mainīt; vēlāk rediģējot bibliotēku, jau uzzīmētās sienas nekad netiek pārveidotas. Materiālu no slāņa materiālu saraksta var izveidot arī ar {{ui:+ Jauns materiāls…}}.

## Atsauces izmēri

{{ui:Anotēt}} › {{ui:Atskaites izmērs}}: izvēlieties horizontālu, vertikālu vai izlīdzinātu izmēru un atsauci: ārējo vai iekšējo apdares virsmu, ārējo vai iekšējo serdes virsmu, sienas centrāli vai serdes centrāli. Izvēlieties pirmo sienu, mainiet atsauci, ja vēlaties, izvēlieties otro un tad noklikšķiniet, kur iet izmēra līnija. Divas atsauces vienā sienā mēra tās kopējo vai serdes biezumu. {{ui:Atskaites izmēri…}} uzskaita skata izmērus, tostarp tos, kas zaudējuši sienu, ar Rekvizītiem, Pārsaistīt atsauces un Dzēst.

### Izmērīt visu plānu pēc noteikumiem

{{ui:Anotēt}} › {{ui:Izmērīt plānu…}} izmēra stāva plāna ārpusi, ko jūs skatāt: kopējo izmēru katrā virzienā, izmēru rindu gar katru ārējo malu (sienu galus, sienas, kas satiekas ar malu, un tajā esošās durvis un logus), rindas novietotas brīvi no ēkas. Atzīmējiet, ko vēlaties, izlasiet skaitu un tad {{ui:Pievienot izmērus}}. Tie ir parastie atsauces izmēri, tāpēc tie seko sienām, kad tās pārvietojas, un jūs varat izvēlēties, pārvietot vai dzēst jebkuru no tiem; viss kopums ir viens atsaukšanas solis, un, to atkārtoti palaižot, nekas netiek dubultots.

Tas izmēra tikai ārpusi: telpas ēkas iekšpusē, izliektas sienas un sienas, kas nav taisnstūrveida plānā, paliek rokas rīkiem, un režģa līnijas nav sienas, tāpēc izmēri starp režģiem šeit netiek veidoti. Jūsu pieslēgtais asistents to var izdarīt ar `plan_dimension`.

Izmērs ir piesaistīts sienām, nevis vietai ekrānā: kad siena pārvietojas vai mainās tās tips, vērtība seko. Ja siena tiek dzēsta, izmērs norāda, ka tas nav atrisināts, un nerāda skaitli, līdz to pārsaistāt vai atsaucat darbību. Garuma lodziņš pieņem arī plāna koordinātes, piemēram, `10',12'`, lai izmēra līniju novietotu precīzā vietā.

Izmēri attiecas uz sienām, ko BimCraft ir uzzīmējis, plāna skatos. Vēl nav izveidots: izmēri griezumos un fasādēs, līdz durvīm, logiem un citiem komponentiem, un konstrukciju slāņi, kas zīmēti plānā un griezumā; skatiet [Kas vēl nav izveidots](topic:not-built-yet).

## Skatīt arī

[Zīmēt sienas](topic:draw-walls), [Mainīt sienu, durvis vai logu](topic:change-a-wall-or-door), [Rekvizīti](topic:properties-panel).
