---
title: Kas vēl nav izveidots
summary: Ko šī BimCraft versija vēl nedara un ko šodien izmantot tā vietā.
keywords: trūkst, ierobežojumi, ierobežojumi, nav atbalstīts, attīstības plāns, autorēšana, modelēšana, griezumi, mērīšana, sadursme, bcf, mākonis, galddators, eksports
from: 87777dcc
---

BimCraft šodien ir lasītājs, pārbaudītājs un IFC datu redaktors, kas ir sācis zīmēt ēkas: sienas, durvis un logi, telpas, grīdas, griesti un jumti (skat. [Zīmēt sienas](topic:draw-walls), [Durvis un logi](topic:doors-and-windows) un [Telpas, grīdas, griesti un jumti](topic:floors-and-roofs)). Šeit ir godīgs saraksts par to, ko tas vēl nedara, un ar ko to aizstāt šodien.

## Modelēšana un autorēšana

| Vēl nav | Tā vietā šodien |
|---|---|
| Sijas zīmēšana; tērauda profilu kolonnas | Izmantojiet savu autorēšanas programmu un atveriet tās IFC eksportu šeit. Taisnstūra un apaļās kolonnas šeit tiek novietotas (skat. [Režģi un kolonnas](topic:grids-and-columns)); taisnas, L, U, vītņu un spirālveida kāpnes un margas šeit tiek zīmētas (skat. [Kāpnes un margas](topic:stairs-and-railings)) |
| Logs jumta izbūves priekšpusē; jumta izbūves uz jumta plaknēm, zīmētas ar roku; izliekti jumti; renderēta jumta seguma tekstūra | Jumta plaknes, zīmētas pēc to stūriem, un slīpums katrai sienai: skat. [Jumti: slīpums katrai sienai, frontoni, šķūņu jumti un jumta plaknes](topic:roofs) |
| Sienu, durvju vai logu maiņa, ko izveidojusi cita programma | Jūsu autorēšanas programma; zīmēšanas rīki maina tikai to, ko paši zīmēja |
| Sienu profili ar izvirzījumiem vai caurumiem; sienu atveres, kas nav taisnstūra; sienas profila punktu pievienošana vai noņemšana 3D skatā | Profils, piestiprināšana, slīpums un atveres darbojas Rekvizītos, fasādēs un griezumos, uz sienas priekšējā skata un ar vadības punktiem 3D skatā taisnām un izliektām sienām: skat. [Sienas formas veidošana: piestiprināšana, profils, slīpums un atveres](topic:wall-shape) |
| Izliektām sienām: {{ui:Apgriezt / pagarināt}} un {{ui:Stūris}}, karkass, automātiskie plāna izmēri, piesaiste pa loku (piesaista pie tā galiem un loka vidus) | Zīmējiet sienu taisnu šiem darbiem vai izmantojiet taisnus posmus. Izliektās sienas ir aprakstītas sadaļā [Zīmēt sienas](topic:draw-walls) |
| Novietota bibliotēkas vienuma vilkšana 3D skatā | Velciet to plānā vai ierakstiet X, Y un Pagrieziens {{ui:Rekvizīti}} logā: skat. [Novietot iekārtas un mēbeles no bibliotēkas](topic:place-from-library) |
| Augu novietošana no CivilCraft ainavu darba vides augu bibliotēkas | Stādiet tos CivilCraft programmā vai novietojiet kokus un krūmus no bibliotēkas apkārtējo elementu kopas: skat. [Novietot iekārtas un mēbeles no bibliotēkas](topic:place-from-library) |
| Rūpnīcu papildinājumā (izslēgts, līdz to ieslēdzat): maršrutētas trases zīmēšana modelī, spoļu numuri uz tā izometrijām, no bibliotēkas novietotas iekārtas izkārtojuma pārbaude | Zīmējiet trasi ar {{ui:Caurule}} (skat. [Caurules un gaisa vadi](topic:pipes-and-ducts)); izkārtojuma pārbaude lasa paša papildinājuma iekārtu tabulu |
| Atsevišķu zīmētu sienu, durvju un logu pagriešana, spoguļošana vai masīvā izvietošana (sienas pārvieto un kopē ar {{ui:Pārvietot}}, {{ui:Nobīde}} un {{ui:Kastes stiepšana}}: skat. [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools)); savienojuma stils (sastumt, nogriezt taisni) izliektas sienas stūros vai trīs un vairāk sienu stūros (skat. [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools)); Teksta rīks; aizkaru sienas | Kopējiet visu līmenī ar {{ui:Kopēt šo līmeni…}} (skat. [Zīmēt sienas](topic:draw-walls#levels)); citādi zīmējiet tās no jauna |
| Sienu konstrukciju slāņi, zīmēti plānā un griezumā; izmēri griezumos un fasādēs; atsauces izmēri līdz durvīm, logiem un citiem komponentiem; konstrukcijas un membrānas specifikācijās un daudzumos; materiālu bibliotēka, kopīga starp projektiem; slāņu prioritāte griezumos, fasādēs un 3D un mezglos ar trim vai vairāk sienām (plānā stūri, T savienojumi un divu sienu krustojumi tiek tīrīti pēc slāņu prioritātes: skat. [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools)); ietītie vai mainīgie slāņi; citas programmas izveidotas sienas konstrukcijas rediģēšana | Slāņi ir sienas tipā un tās priekšskatījumā ({{ui:Sienu konstrukcijas…}}); sienas tiek mērītas kā viens apvalks: skat. [Sienu konstrukcijas un atsauces izmēri](topic:wall-assemblies) |
| Elementa formas vai izmēra maiņa (izņemot šeit zīmētas sienas, durvis un logus un no ģimenes novietotos elementus) | Jūsu autorēšanas programma. Dzēšana, izgriešana, kopēšana un ielīmēšana šeit darbojas: skat. [Dzēst, izgriezt, kopēt un ielīmēt ēkas elementus](topic:edit-elements) |
| Stāvu, telpu, ēku vai zemesgabala dzēšana | Dzēsiet elementus tajos |
| Ēkas elementu ielīmēšana citā modelī | Kopējiet un ielīmējiet vienā modelī; novietoti bibliotēkas vienumi tiek ielīmēti jebkurā modelī |
| Jaunu īpašību vai īpašību kopu pievienošana | Aizpildiet šeit esošās vērtības vai pievienojiet parametru savā autorēšanas programmā un eksportējiet atkārtoti |
| Daudzumu, sarakstu, uzskaitījumu rediģēšana | Jūsu autorēšanas programma |
| Citu programmu projektu failu saglabāšana | BimCraft saglabā IFC (un savus ģimeņu failus: skat. [Ģimenes un to izmēri](topic:families)) |
| Ģimenes: ģimeņu bibliotēka, kas novietota no plāna un kopīga starp projektiem (Bibliotēka); karsts punkts, ko velk novietota elementa 3D skatā (tos velk ģimenes redaktora priekšskatījumā un plānā); detalizācijas līmeņi, kas izvēlēti katram skatam (projektam viens līmenis; lapas izvēlas pēc mēroga); rotācija vertikālā plaknē citas ģimenes iekšienē, pagriezta par ceturtdaļu; durvju un logu plāna simboli, kas ir savi (tie zīmē sākuma ģimenes) | Ģimenes ar tipizētiem parametriem, formulām, savu plāna simbolu, karstajiem punktiem, atkārtojumiem, detalizācijas līmeņiem, ģimenēm ģimenēs, izmēriem no tabulas un elementa parametriem tiek veidotas šeit: skat. [Rediģēt ģimeni](topic:family-editor) un [Ģimenes un to izmēri](topic:families). Dublējiet ģimeni, lai sāktu no tās |
| Citu programmu tipu rediģēšana kā ģimenes; bibliotēkas vienuma pārvēršana ģimenē | Citu programmu tipi tiek uzskaitīti, grupēti pēc minējuma, un to elementi atlasīti. Bibliotēkas vienumi tiek novietoti tādi, kādi tie ir |
| Ražotāju armatūra, vārsti un iekārtas (jaudas, svars, ražotāju pieslēgumu izmēri); ASME B16.9 T un reducētāju garumi tērauda spolēs; spiediena zudumi caur armatūru, plūsmas un balansēšana; sprinkleri; kabeļu trases; stāvvadu un ventilācijas izmēru noteikšana pēc sanitāro iekārtu vienībām; trases stūru vilkšana; atveru izgriešana sienās un pārsegumos; trases gala atlaišana, kas fiksēts pie pieslēguma (izņemot dzēšot iekārtu); pieslēgumi bibliotēkas vienumiem, kas novietoti no Bibliotēkas paneļa; armatūras svars; gaisa vadu savienojumi, biezumi un savienotāji | Caurules un gaisa vadi ar vispārīgām standarta armatūrām, sistēmām, plāniem, specifikācijām un apjomu aprēķinu tiek zīmēti šeit: skat. [Caurules un gaisa vadi](topic:pipes-and-ducts). Vispārīgas iekārtas ar pieslēgumiem, savienotām trasēm un Savienojumu pārbaudi: [Iekārtas ar pieslēgumiem](topic:mep-equipment), [Caurules un gaisa vadi, pieslēgti iekārtām](topic:mep-connections). Sadursmju kopas, attālumi un atveru saraksts: [Pārbaudīt caurules un gaisa vadus pret konstrukciju](topic:mep-against-structure). Tērauda spoles un lapas, gaisa vadu griezuma saraksts: [Tērauda cauruļu spoles un spoļu lapas](topic:pipe-spools). Ražotāju vienumus ievietojiet no savas MEP programmas kā IFC |
| Projektēšanas normu pārbaudes metinātiem I profiliem, I profiliem, kuru IFC profils nav nosaukts kā valcēts W, S, IPE, HEA vai HEB izmērs, un caurulēm, leņķiem un kanāliem (tie atgriežas kā nepārbaudīti); izlieces vai dinamiskā reakcija (dabiskās frekvences ir Galīgo elementu blokā) (otrā kārta ir tikai P-Delta: elastīga, lieces, bez stingruma samazinājuma); sienas un pārsegumi analīzē; slodzes, kas veidotas no laukumiem (izņemot vienu spiedienu uz katra betona pārseguma) | {{ui:Aprēķins}} cilne sniedz spēkus, reakcijas un nobīdes sijām, kolonnām un saitēm ar pirmās kārtas analīzi un pārbauda valcētos I profilus, kā palīglīdzekli, līdz inženieris to ir pārskatījis: skat. [Analizēt konstrukcijas rāmi](topic:frame-analysis#design-checks) |

## Modeļu skatīšana

| Vēl nav | Tā vietā šodien |
|---|---|
| 3D no projekta failiem | Eksportējiet IFC un atveriet to. Skat. [Iegūt projekta failu 3D caur IFC](topic:rvt-to-ifc) |
| Iekšējās fasādes ģenerētajā rasējumu komplektā (tās tiek veidotas no telpas Rekvizītiem un jūsu pašu lapām); jūsu pašu izmēri fasādēs un griezumos (līmeņu atzīmes, augstumi, platums un durvju/logu marķējumi tiek zīmēti; piezīmes tiek rakstītas skatā: skat. [Rediģēt fasādēs un griezumos](topic:edit-in-elevations)); sienu zīmēšana fasādē (tās tiek zīmētas griezuma plaknē); komandu veidnes caur {{ui:Studio}} | Ģenerētais rasējumu komplekts no modeļa: skat. [Fasādes, griezumi un lapas](topic:sheets). Jebkuram IFC modelim: viena {{ui:Griezums}} plakne vai griezuma kaste; skat. [Griezt IFC modeli ar griezuma plakni](topic:section-plane) |
| Izsaukuma skati, detaļu skati, zīmēšanas skati un leģendas; zīmēšanas līnijas un svītrojums, zīmēts skatā; fasādes vai griezuma apgriešana; skatu veidnes fasādēm, griezumiem, griestu plāniem un 3D skatiem; griestu plāni ģenerētajā rasējumu komplektā; viss jūsu lapu komplekts vienā PDF | Plāniem un griestu plāniem ir skatu diapazoni, apgriešanas apgabals, mērogs un pamatne (plāniem arī veidnes), un jūsu lapas ņem plānus, griestu plānus, fasādes, griezumus un specifikācijas, katru saglabātu kā PDF: skat. [Skati, skatu diapazoni un jūsu lapas](topic:views-and-sheets) |
| Novietota gaismekļa pārvietošana uz griestiem pēc tam; slīpi vai pakāpeniski griesti; griestu raksti, citi nekā pieci režģi; gaismeklim savs simbols griestu plānā | Novietojiet to ar **Montāža: Pie griestiem**; griestu plāns zīmē armatūru pēc tās pašas formas: skat. [Novietot iekārtas un mēbeles no bibliotēkas](topic:place-from-library) |
| Meklēšanas kopu koplietošana ar citiem; kopas IFC failā | Kopas paliek šajā pārlūkprogrammā; skat. [Atrast elementus pēc klases, nosaukuma vai īpašības](topic:find) |
| Leņķu mērīšana vai mērīšana pa vairāku punktu ceļu | Mēriet katru daļu ar {{ui:Mērīt}}: skat. [Mērīt attālumus, virsmu laukumus un atrašanās vietas 3D](topic:measure) |
| Tekstūras tiešraides 3D skatā | Krāsotie materiāli rāda savu krāsu skatā un savu tekstūru renderētos attēlos: skat. [Renderēt modeļa attēlu](topic:render) |
| Attāluma (mīkstās) sadursmes starp jebkurām divām kopām, sadursmju grupas, sadursmju rezultātu saglabāšana | Palaidiet {{ui:Sadursmju pārbaude}} un izveidojiet problēmas no svarīgajām: skat. [Pārbaudīt sadursmes](topic:clash-check). Caurulēm un gaisa vadiem pret konstrukciju ir {{ui:Pārbaudīt attālumus}}: skat. [Pārbaudīt caurules un gaisa vadus pret konstrukciju](topic:mep-against-structure) |
| Vairāku modeļu saglabāšana kā vienas kopas vai divu modeļu rediģēšana vienlaikus | Rediģējiet vienu modeli vienlaikus; katrs saglabā savu failu |
| Problēmu piešķiršana, termiņi, etiķetes, vairāki skatpunkti vienai problēmai, problēmas rediģēšana | Viens skats vienai problēmai; skat. [Problēmas un BCF faili](topic:issues-bcf) |
| `.ifczip` un `.ifcxml` | Izsaiņojiet vai eksportējiet vienkāršu `.ifc` |
| Karšu slāņi modelim bez kartes pārveides vai rasējuma skatos | Eksportējiet modeli ar tā koordinātēm: skat. [Karte zemē zem modeļa](topic:map-layers) |
| E57 skenējumi virs 6 miljoniem punktu vai 512 MB; skeneru ražotāju paši faili (RCP, RCS, FLS, LGS, TZF, ZFS); punktu mākoņi rasējuma 3D skatā; mākoņa vietas saglabāšana kopā ar modeli | Eksportējiet skenējumu kā LAS vai LAZ un atveriet to blakus IFC modelim: skat. [Punktu mākoņu formāti](topic:point-cloud-formats) un [Rādīt punktu mākoni blakus modelim](topic:point-clouds) |
| Skenējumu reģistrēšana: mērķu (sfēru, šaha galdiņu) atrašana skenējumā pašam; visu skenējumu risināšana kopā (kopas izlīdzināšana); mērogs; reģistrēšana pret modeli | Atlasiet atbilstošus punktus vai ierakstiet mērķu koordinātes, tad precizējiet vienu skenējumu vienlaikus ar ICP: skat. [Vairāku skenējumu apvienošana vienā](topic:register-scans) |
| Projektu failu `.pln`, `.pla`, `.tpl` un `.bpn` atvēršana | Eksportējiet IFC un DWG no tiem vai projekta paketi: skat. [Atvērt .pln un .pla projekta failus](topic:pln-project-files) un [Atvērt projekta paketi](topic:open-project-bundle) |
| Elementu saraksta {{ui:Elementi}} atvēršana, lai atlasītu pēc veida | Noklikšķiniet veida grupu {{ui:Modeļa koks}}: skat. [Orientēšanās ar modeļa koku](topic:model-tree) |
| Komentāra vai nosaukuma rakstīšana problēmai VR, balss piezīmes, griezuma plaknes pārvietošana ar roku VR, griezuma kaste VR | Novietojiet problēmu VR, tad pievienojiet tās vārdus cilnē Problēmas; iestatiet griezuma plakni vai kasti 3D skatā, pirms ieiet: skat. [Pārskatīt modeli VR austiņās](topic:vr-review) |
| Cilvēku redzēšana pie darba galda VR (rādās tikai cilvēki VR), VR pastaigas ierakstīšana | Lūdziet viņiem pievienoties VR vai sekojiet 3D skatā |
| Dienasgaismas simulācija (uz klimatu balstīta dienasgaisma, mirdzums, saules stundas); jumta logi dienasgaismas faktorā; pārbaudes pret BS EN 17037 vai zaļo ēku shēmām; ISO 52016-1 enerģijas metode, stundas enerģijas simulācija, termiskā masa un tilti, klimata faili | Projektēšanas palīglīdzekļi: vidējais dienasgaismas faktors, katra loga vertikālā debesu sastāvdaļa, saule caur logiem noteiktā datumā un dienasgaismas faktors režģī ([Novērtēt dienasgaismu katrā telpā](topic:daylight-factor)); siltuma zudumi, degree-day gads un dzesēšanas maksimums katrā telpā ([Novērtēt apkures un dzesēšanas slodzes](topic:heating-and-cooling-loads)). Atbilstībai izmantojiet simulācijas programmu |
| Mitinātā ēkas digitālā dubultnieka: rādījumi, ko glabā, un brīdinājumi, ko sūta pa e-pastu, kad BimCraft ir aizvērts; e-pasti par tuvojošos apkopi; MQTT 5; COBie darbu nolasīšana atpakaļ | Rādījumi no CSV vai tieši no jūsu brokera vai adreses, kamēr modelis ir atvērts; robežvērtības, kas atzīmē aktīvus; dokumenti, COBie izvade un ievade: skat. [Glabāt aktīvu datus un apkopes ierakstu modelī](topic:assets-and-maintenance) |
| Spraudnis vai tiešraides saite uz Enscape, Twinmotion vai citām vizualizācijas programmām; FBX vai Datasmith faili; viens objekts katram elementam, saglabāti skati un pastaigas .glb | Saglabājiet .glb renderēšanas programmām, kas lasa glTF; USD failu (viens objekts katram elementam, ar tā IFC datiem: skat. [Eksportēt modeli kā USD](topic:usd)) vai IFC tām, kas darbojas citā projektēšanas programmā: skat. [Nosūtīt modeli renderēšanas programmai](topic:model-for-rendering) un [Atvērt ainu citā programmā](topic:render-open-in) |
| Cita programma zīmē renderēto attēlu bez renderēšanas dzinēja papildinājuma (CadCraft nekad neizpilda programmu ar GNU GPL licenci); panorāmas vai stereo kameras un debesu attēls caur citu programmu; Unreal Engine spraudnis (faili tiek rakstīti, spraudnis, kas tos atver, nav izlaists) | Mūsu pašu Fast un Path izsekotāju dzinēji; papildinājuma dzinējs ([zīmēt attēlu ar citu programmu](topic:render-other-program)); USD, glTF vai Unreal mapes fails no dzinēju saraksta, ko ņemt uz jebkuru programmu |
| Tiešraides skatā: augu un akmeņu izkaisīšana, panorāmu koplietošana, apskates tūre, bezsaistes skatītājs vai video | ModelCraft tiešraides skatā tie ir; šeit – renderēti attēli un 360° panorāmas: skat. [Tiešraides skats](topic:live-view) un [Renderēt modeļa attēlu](topic:render) |

## Rasējumi

| Vēl nav | Tā vietā šodien |
|---|---|
| DWG un DXF rediģēšana, mērīšana vai saglabāšana | CadCraft zīmēšanas lietotne ({{ui:Rediģēt CadCraft}} 2D skatā) |
| Drukāšana vai PDF eksportēšana | Drukājiet no programmas, kas izveidoja rasējumu; vispirms pārbaudiet to ar {{ui:Drukas skats}} |
| Zīmēšanas stili un pildspalvu tabulas | {{ui:Drukas skats}} rāda vienkāršu melnu ar līniju biezumiem |
| DWG faili vecāki par R13 un bināro DXF (BimCraft to pasaka, kad atverat vienu) | Saglabājiet rasējumu atkal kā jaunāku DWG vai kā ASCII DXF |
| Rasējumi, kas saistīti rasējumos, kas paši ir saistīti | Atveriet tos tieši |
| TIFF attēli | Saglabājiet PNG vai JPEG kopiju ar tādu pašu nosaukumu un pievienojiet to |
| DGN rasējumi | Uzskaitīti tikai mapju pārskatos |
| Objekti, kas uzskaitīti zem **Vēl nav zīmēts** | Skatiet rasējumu programmā, kas to izveidoja |
| ACIS cietie ķermeņi, korpusi, reģioni un virsmas, un apakšdalījuma tīkli 3D | Eksportējiet IFC vai 3D sejas no programmas, kas izveidoja rasējumu |
| Attēli, daudzvadu norādes un lapas rasējuma 3D skatā | Skatiet tos cilnē {{ui:Modelis}} un lapās |
| Objektu atlasīšana rasējuma 2D skatā | Pārslēdzieties uz {{ui:3D}} un noklikšķiniet objektu tur: skat. [Skatīt DWG vai DXF rasējumu 3D](topic:dwg-in-3d) |
| Iekārtu specifikācijas no rasējumiem bez `KCL-ITEM` marķējuma | Nav pieejams |
| Iekārtu specifikācija kā XLSX vai PDF | {{ui:Lejupielādēt CSV}} un atveriet to izklājlapā |

## Failiem un platformām

| Vēl nav | Tā vietā šodien |
|---|---|
| Mākoņa saglabāšana | Saglabājiet kopijas savā datorā vai biroja serverī. Mākoņa saglabāšana vēl nav pieejama |
| Mapju atcerēšanās Firefox un Safari | Izvēlieties mapi atkal vai velciet to |
| Atsaukšana pēc saglabāšanas | Atveriet sākotnējo failu atkal, lai sāktu no jauna |
| Trūkstošās daļas aizpildīšana nogrieztā projekta failā | Kopējiet sākotnējo atkal; mapē BimCraft nolasa jaunāko pilno dublējumu |
| Atvērto failu atkārtota atvēršana | Nesaglabātās izmaiņas tiek piedāvātas atpakaļ kā "Atjaunot jūsu darbu?", kad atgriežaties; atveriet failus atkal no pēdējo failu saraksta |
