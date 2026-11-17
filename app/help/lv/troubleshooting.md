---
title: Problēmu novēršana
summary: Ziņojumi, ko rāda BimCraft, to cēloņi un kas jādara, atverot failus, mapes, 3D modeļus, zīmējumus un veicot izmaiņas.
keywords: problēma, kļūda, nestrādā, nevar atvērt, neizdevās, nepilnīgs, bojāts, lēns, avārija, tukšs, trūkst, ziņojums, palīdzība
from: 1e5a79fc
---

Ziņojumi parādās statusa joslā skatuves apakšā, sarkanā krāsā, ja kaut kas neizdevās. Atrodiet tālāk esošo ziņojumu.

## Failu atvēršana

**"*nosaukums* nav IFC, RVT, RFA, DWG vai DXF fails."**
BimCraft neatpazina failu. Pārbaudiet paplašinājumu un to, vai fails nav tukšs. PDF, attēli un biroja faili netiek atvērti.

**".ifczip vēl netiek atbalstīts. Saglabājiet vai eksportējiet modeli kā parastu .ifc failu."** (arī `.ifcxml`)
Atarhivējiet `.ifczip` (tas ir parasts zip arhīvs, kas satur `.ifc`) vai eksportējiet parastu IFC.

**"… ir projekta fails, ko BimCraft vēl nelasa."**
Fails `.pln`, `.pla`, `.tpl` vai `.bpn`. Eksportējiet no tā IFC vai DWG un atveriet to: skatiet [Atvērt .pln un .pla projektu failus](topic:pln-project-files).

**"Šo IFC failu nevarēja nolasīt."**
IFC fails ir bojāts vai nav īsts IFC. Atveriet to teksta redaktorā: īsts IFC fails sākas ar `ISO-10303-21;`. Eksportējiet to vēlreiz.

**"Šis fails ir nepilnīgs: tas ir … MB, bet tā paša indekss norāda uz datiem vismaz … MB dziļumā. …"**
Projekta vai ģimenes fails tika nogriezts kopēšanas, augšupielādes vai sinhronizācijas laikā. Mākoņdiska fails, kas ir "tikai tiešsaistē", izskatās tāpat. Fails, kas atvērts pats par sevi, joprojām tiek atvērts, un kartes augšdaļā ir šis ziņojums un teksts "Rāda atgūto; kopējiet oriģinālu vēlreiz, lai iegūtu pilno modeli.": kartē redzamas tikai tās daļas, kuru katrs baits ir failā, un pārējās ir uzskaitītas sadaļā **Nav failā**. Padariet failu pieejamu bezsaistē savā mākoņdiskā vai kopējiet oriģinālu vēlreiz un atkārtoti atveriet to. Mapē BimCraft rāda jaunāko pilnīgo dublējumu.

**"… Faila paša satura saraksts ir arī trūkstošajā daļā, tāpēc nekas tajā nevar tikt atvērts."**
Fails tika nogriezts tik agri, ka pat satura saraksta nav. No šīs kopijas nekas nevar tikt atgūts. Kopējiet oriģinālu vēlreiz un atveriet to.

**"Šim saliktajam failam nav BasicFileInfo straumes, tāpēc tas nav Revit fails."**
Fails ir cita veida saliktais fails (arī vecie biroja dokumenti izmanto to pašu konteineru). Pārbaudiet, vai izvēlējāties pareizo failu.

**"Joprojām strādā pie iepriekšējā…"**
BimCraft vēl ir aizņemts ar iepriekšējo failu vai mapi. Pagaidiet, līdz statusa josla pabeidz darbu, un mēģiniet vēlreiz.

**Failu izvēlnē mans fails ir pelēks.**
Izvēlnē tiek piedāvāti tikai `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` un `.dxf` faili. Velciet citus failus uz lapu, un BimCraft pateiks, vai tos var nolasīt.

## Mapju atvēršana

**"Šajā mapē ir vairāk nekā 20 000 failu. Izvēlieties mazāku mapi, piemēram, vienu projektu."**
Izvēlējāties pārāk augstu mapi, piemēram, visu disku. Izvēlieties vienas projekta mapi.

**"Pārlūkprogramma nepiešķīra piekļuvi *nosaukums*. Izvēlieties to vēlreiz ar Atvērt mapi."**
Noklikšķinājāt {{ui:Atkārtoti atvērt}} nesenajā mapē, un pārlūkprogrammas atļauja tika liegta vai ir beigusies. Izvēlieties mapi vēlreiz vai velciet to iekšā.

**Pārlūkprogramma saka, ka tā "augšupielādēs" failus.**
Tas ir pārlūkprogrammas pašas vārds failu nodošanai lapai. BimCraft tos nekur nesūta. Lai izvairītos no jautājuma, velciet mapi iekšā.

**Tālrunī vai planšetdatorā nekas nenotiek.**
Daudzas mobilās pārlūkprogrammas nevar izvēlēties mapes. Atveriet atsevišķus failus vai izmantojiet datoru.

## IFC dzinējs ielādējas pirmo reizi

**Statusa josla paliek ar "Notiek IFC dzinēja palaišana…" vai rāda kļūdu, piemēram, "Failed to fetch".**
IFC dzinēju nevarēja lejupielādēt. Iespējams, esat bezsaistē, vai ugunsmūris vai satura bloķētājs to aptur.

:::offline
Esat bezsaistē. Ja lietotnes joslas poga nerāda {{ui:Gatavs darbam bezsaistē}}, IFC dzinējs šajā pārlūkprogrammā nekad nav tikts saglabāts. Atjaunojiet savienojumu, atveriet failu vēlreiz un pēc tam noklikšķiniet {{ui:Saglabāt bezsaistei}}, lai nākamreiz tas darbotos bezsaistē. Skatiet [Darbs tiešsaistē un bezsaistē](topic:online-offline).
:::

:::online
Pārlādējiet lapu un mēģiniet vēlreiz. Ja strādājat darba tīklā, lūdziet IT komandai atļaut vietnes `.wasm` failus.
:::

## Saglabāšana lietošanai bezsaistē

**Poga rāda {{ui:Neizdevās saglabāt}}.**
Daži faili netika lejupielādēti, parasti tāpēc, ka savienojums pārtrūka. Pārbaudiet savienojumu un noklikšķiniet pogu vēlreiz. Iepriekšējā kopija bezsaistei tiek saglabāta, līdz tiek pabeigta jauna.

**Poga rāda {{ui:Bezsaiste nav pieejama}}.**
Šis logs nevar saglabāt kopiju bezsaistei, piemēram, privātais logs vai pārvaldīts darba dators. Skatiet [Darbs bezsaistē](common:offline).

**Poga ilgi paliek ar "Saglabā *n* no *m*".**
BimCraft kopija ir aptuveni 11 MB, lielākā daļa no tiem ir IFC dzinējs. Atstājiet cilni atvērtu, līdz tiek rādīts {{ui:Gatavs darbam bezsaistē}}.

**BimCraft atvērās bezsaistē, bet šķiet novecojis.**
Jūsu saglabātā kopija ir no iepriekšējās reizes. Kad esat tiešsaistē, noklikšķiniet {{ui:Gatavs darbam bezsaistē}} un izvēlieties {{ui:Saglabāt vēlreiz (iegūt jaunāko versiju)}}.

## 3D skats

**Modelis nav tur, kur gaidījāt, vai ir sīks.**
Nospiediet {{key:F}} vai noklikšķiniet {{ui:Pielāgot}}. Pielāgošana vienmēr ietver visu modeli, arī atzīmēts nenoņemtus stāvus un elementus, kas atrodas tālu no ēkas, tāpēc ēka var izskatīties maza. No turienes tuviniet.

**Klikšķināšana neko neatlasa.**
Turiet peli nekustīgi, kamēr noklikšķināt: neliela velkšana griež skatu. Elementus uz neatzīmētiem stāviem nevar atlasīt. Ja ieslēgts {{ui:Telpas}}, caurspīdīgas telpas tiek atlasītas pirms tajās esošā.

**Poga {{ui:Malas}} ir pelēka: "Malas ir izslēgtas ļoti lieliem modeļiem".**
Modelim ir vairāk nekā 1.5 miljoni trijstūru. Malas ir izslēgtas, lai taupītu atmiņu.

**Cilne kļūst lēna, baltā krāsā vai rāda pārlūkprogrammas avārijas lapu.**
Modelis ir pārāk liels atmiņai, ko pārlūkprogramma dod cilnei. Aizveriet citas cilnes un ielādējiet lapu no jauna. Eksportējiet mazāku IFC: vienu ēku, vienu disciplīnu vai mazāk stāvu. Skatiet [Pārlūkprogrammas, ierīces un atmiņa](topic:platforms).

**3D skats paliek tukšs.**
WebGL var būt izslēgts vai bloķēts. Pārlūkprogrammas iestatījumos ieslēdziet aparatūras paātrinājumu (vai grafikas paātrinājumu) un restartējiet pārlūkprogrammu.

## IFC rediģēšana

**"Izmantojiet skaitli."** Vērtība ir skaitliska. Ierakstiet vienkāršu skaitli bez mērvienībām, piemēram, `2.4`.

**"Izmantojiet veselu skaitli."** Vērtība ir daudzums vai vesels skaitlis. Noņemiet decimāldaļas.

**"Rediģēt var tikai vienas vērtības īpašības."** Saraksti, uzskaitījumi un lielumi ir tikai lasāmi.

**{{key:Mod+S}} atver pārlūkprogrammas logu "Saglabāt lapu".**
Nav nesaglabātu izmaiņu, tāpēc BimCraft atstāja taustiņu pārlūkprogrammai. Aizveriet logu.

**{{key:Mod+Z}} nedara neko.**
Tas darbojas tikai tad, kad ir nesaglabātas izmaiņas un jūs neievadāt tekstu laukā. Pēc saglabāšanas nav nekā, ko atsaukt.

**Saraksts {{ui:Izmaiņas}} vēl rāda izmaiņas pēc tam, kad tās atmetāt un atvērāt zīmējumu vai mapi.**
Kad uz jautājumu "Atmest tās?" atbildat ar Labi un pēc tam atverat ko citu, nevis IFC modeli, vecās izmaiņas paliek atmiņā, un {{ui:Saglabāt kā IFC}} tās joprojām saglabātu. Lai patiesi sāktu no jauna, atveriet oriģinālo IFC vēlreiz vai pārlādējiet lapu.

**Mana izmaiņa mainīja vairāk elementu, nekā biju atlasījis.**
Jūs mainījāt īpašību kopā, kas atzīmēta kā "(type)". Tipa īpašības attiecas uz katru šī tipa elementu. Noklikšķiniet {{ui:Atsaukt}}. Skatiet [Mainiet tipa īpašību visiem tipa elementiem](topic:type-vs-instance).

## Zīmējumi

**"*nosaukums* nevarēja nolasīt. Tas var būt bojāts vai saglabāts formātā, ko lasītājs vēl neapstrādā (…)."**
Saglabājiet zīmējumu programmā, kas to izveidoja, kā vecāku DWG (2018 vai agrāku) vai kā DXF, un mēģiniet vēlreiz.

**"Šim zīmējumam nav ko rādīt."** vai **"*nosaukums* ir tukšs zīmējums: tajā nav līniju, teksta vai bloku."**
Zīmējums ir tukšs vai satur tikai lietas, ko BimCraft vēl nezīmē (skatiet **Vēl nav zīmēts** pa labi).

**"Šis zīmējums ir ļoti liels; rādīta tikai daļa."**
BimCraft pārtrauca zīmēt, lai saglabātu atsaucību. Izslēdziet slāņus, kas nav vajadzīgi, vai atveriet vajadzīgās lapas no mazāka zīmējuma.

**Daļas no lapas trūkst.**
Saistītie zīmējumi var trūkt: skatiet sadaļu **Saistītie zīmējumi** pa labi. Skatiet [Atrodiet saistītos zīmējumus un attēlus](topic:dwg-linked-files). Slāņi var būt izslēgti: noklikšķiniet {{ui:Visi ieslēgti}}.

**Attēls rādās kā tukšs rāmis.**
Tā fails nav atrasts, vai tas ir TIFF ("TIFF nevar parādīt pārlūkprogrammā"). Pievienojiet PNG vai JPEG kopiju ar {{ui:Pievienot attēlus…}}.

**Ritināšana ar skārienpaliktni tālummaina, nevis pārvieto zīmējumu.**
Tā BimCraft darbojas ar zīmējumiem. Noklikšķiniet un velciet, lai panoramētu.

## Vēl iestrēdzis

Izlasiet [Kas vēl nav izveidots](topic:not-built-yet): meklētā lieta šajā versijā var nebūt.
