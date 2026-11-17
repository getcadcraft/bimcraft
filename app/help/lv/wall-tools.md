---
title: Sienu formas, sadalīšana, nobīde, kastes stiepšana un bloķēšana
summary: Zīmējiet sienas kā taisnstūri, daudzstūri, loku, uz izvēlētām līnijām vai ap kontūru; sadaliet tās, izņemiet gabalu, nobīdiet, stiepiet kastē, izlīdziniet un bloķējiet tās viena pie otras, pie izmēra vai režģa līnijas. Katra izmaiņa uztur sienas savienotas un ir viens atsaukšanas solis.
keywords: mainīt tipu, mainīt veidu, pārtipot, kas pārvietojās, lod, attīstības līmenis, savienojuma stils, šķautne, butt, nogriezt kvadrātā, sienu savienojumi, nākamais, iet cauri, aizliegt savienojumu, atļaut savienojumu, slāņu prioritāte, serde, prioritāte, krustojums, taisnstūris, pagriezts taisnstūris, daudzstūris, ierakstīts, apvilkts, loks, centrs, tangenciālais loks, izvēlēties līnijas, cilne, kontūra, burvju nūja, sadalīt, sadalīt ar spraugu, sprauga, dzēst posmu, savienot atpakaļ, nobīde, kopija, kastes stiepšana, rāmis, stiepšana, izlīdzināt, slēdzene, ierobežojums, izmēra bloķēšana, rediģēt izmēru, režģis, bloķēt pie režģa, pārvietot režģa līniju, novietojuma nobīde, savienojums izslēgts, brīvi stāvoša, augt no, mērīt no, centrālā līnija, iekšējā virsma, ārējā virsma, atvienot, alt
from: 5b7d2f75
---

## Ko jūs darīsiet

Veidojiet un mainiet sienas ar sienu rīka receptēm. Katra no tām beidzas tāpat kā sienas zīmēšana pēc stūriem: stūri savienojas paši, savienojumi tiek saglabāti failā, un viss izmaiņu kopums ir viens solis sadaļā **Izmaiņas**, ko {{ui:Atsaukt}} atceļ. Sienas saglabā savu identitāti: sienu, ko sadalāt, nobīdāt vai stiepjat, ir tā pati siena ar savām durvīm, logiem un izmēriem.

## Zīmēt taisnstūri, daudzstūri vai loku

Ar ieslēgtu {{ui:Zīmēšana}} atveriet {{ui:Formas}} Zīmēšanas grupā (vai izvēlieties formu Sienas rindas **Forma** sarakstā). Sienas rinda rāda sienas tipu, zīmēšanas atsauci, ārējo pusi un augšu, kā sienas {{ui:Siena}} rīkam. Tad noklikšķiniet vai ierakstiet punktus (x,y · @dx,dy · @garums<leņķis · garums gar rādītāju):

- **Taisnstūris**: divi pretēji stūri. Četras sienas, četri savienoti stūri, viens solis.
- **Pagriezts taisnstūris**: kur sākas un beidzas pirmā mala (tas nosaka tās pagriezienu un garumu), tad trešais klikšķis otrai malai.
- **Daudzstūris**: centrs, tad stūris (**Ierakstīts**) vai malas vidus (**Apvilkts**). Vispirms iestatiet **Malas** (no 3 līdz 64).
- **Loks pēc centra**: centrs, sākums (tas nosaka rādiusu), gals. **Virziens**: īsākais ceļš, pretēji pulksteņrādītāja virzienam vai pulksteņrādītāja virzienā. Loks pāri trim ceturtdaļām riņķa tiek zīmēts kā divas sienas.
- **Tangenciālais loks**: noklikšķiniet uz sienas gala, tad uz vietas, kur loks beidzas. Loks atstāj sienas galu sienas pašas virzienā.

Slēgta forma iegūst ārējo pusi uz āru. Zīmējot uz **Ārējās malas** vai **Iekšējās malas**, mala, uz kuras noklikšķiniet, ir tā, kas paliek vietā.

## Sienas uz jau esošām līnijām

- **Izvēlēties līnijas**: noklikšķiniet uz līnijas, un uz tās tiek novietota siena. Nospiediet {{key:Tab}} (vai turiet {{key:Shift}}, noklikšķinot), lai paņemtu visu līniju ķēdi, kas savienota gals pie gala. Līnijas ir šī skata zīmēšanas līnijas, pārzīmēšanas atsauce un režģa līnijas.
- **Pārzīmēt kontūru**: noklikšķiniet iekšpusē laukumam, ko noslēdz šīs līnijas vai sienas. Sienas iet apkārt mazākajam laukumam ap klikšķi.

## Iestatīt pirms zīmēšanas: nobīde un savienojums

Sienu rindā ir vēl divi lauki, ko izmanto {{ui:Siena}} rīks un formas:

- **Nobīde**: sienas tiek zīmētas tik tālu no līnijas, uz kuras noklikšķiniet: + tās kreisajā pusē, − labajā pusē, skatoties tā, kā zīmējat.
- **Savienojums**: noņemiet atzīmi, lai zīmētu brīvi stāvošas sienas. To galiem tiek piešķirts **Aizliegt savienojumu**, un tie paliek brīvi, kur vien tās ietu (sk. [Mainīt sienu](topic:change-a-wall-or-door)).

## Sadalīt, izņemt gabalu, savienot atpakaļ

Atveriet {{ui:Sienas}} rediģēšanas grupā.

- **Sadalīt**: noklikšķiniet uz sienas vietā, kur to vajadzētu sagriezt, vai ierakstiet attālumu no tās sākuma. Tuvu sienai, kas to krusto, griezums pieķeras vietai, kur tās saiet. Abas daļas ir ar tādu pašu tipu un paliek savienotas gals pie gala. **Atstarpe** atstāj telpu ar šo garumu, centrētu uz griezuma. **Brīvi gali** tā vietā piešķir griezuma galiem Aizliegt savienojumu (Iestatījumi › BimCraft › Sienas › **Kad siena tiek sadalīta** nosaka, kura ir atzīmēta sākumā). Durvis vai logs paliek kopā ar daļu, kurā tie atrodas; griezums cauri tiem tiek noraidīts.
- **Dzēst posmu**: noklikšķiniet, kur gabals sākas un kur beidzas. Durvis gabalā tiek dzēstas kopā ar to.
- **Savienot atpakaļ**: noklikšķiniet uz divām vienas sienas daļām (taisnā līnijā, ar tādu pašu tipu). Tās atkal kļūst par vienu sienu — pirmo, uz kuras noklikšķinājāt, ar abu daļu durvīm.

## Savienojuma stils, Aizliegt savienojumu, slāņu prioritāte

Atveriet {{ui:Sienas}} rediģēšanas grupā.

- **Savienojuma stils**: noklikšķiniet uz stūra, kur saiet divas taisnas sienas. Katrs klikšķis pāriet uz nākamo stilu: **Šķautne** (abi gali nogriezti pa līniju no iekšējā līdz ārējam stūrim, ar ko katrs stūris sākas), **Butt** (viena siena iet cauri līdz otras sienas ārējai virsmai, kas tai atduras pret sānu) un **Nogriezt kvadrātā** (kā Butt, un siena, kas iet cauri, beidzas taisni; taisnā leņķī izskatās kā Butt). **Nākamais** vai {{key:Tab}} padara citu sienu par to, kas iet cauri. Sarakstā **Stils** joslā rādās stūris, uz kura pēdējo reizi noklikšķinājāt. Tās pašas divas izvēles ir vienas sienas **Rekvizītos**: **Savienojuma stils sākumā / beigās** un **Iet cauri**. Katra izmaiņa ir viens solis sadaļā **Izmaiņas**. Plāns, 3D ķermenis, telpas un daudzumi seko.
- Pie T savienojuma siena, kuras puse tiek sasniegta, vienmēr iet cauri. Kur divas sienas krustojas, klikšķis (vai **Nepārtraukta krustojumā** Rekvizītos) nosaka, kura no abām ir nepārtraukta; tas nosaka, kuras sienas slāņi tiek zīmēti caur krustojumu.
- Stils pieder savienojumam: tas paliek, kad sienas pārvietojas, un pazūd tikai tad, kad pazūd savienojums (siena tiek dzēsta, sadalīta šajā galā vai galam tiek piešķirts Aizliegt savienojumu). Stūris ar izliektu sienu vai tur, kur saiet trīs vai vairāk sienas, paliek šķautnē. Stūris, kas ir asāks par apmēram 30 grādiem vai plakanāks par apmēram 150, arī atgriežas pie šķautnes.
- **Aizliegt savienojumu**: noklikšķiniet tuvu sienas galam. Tas gals tiek atbrīvots: tas nesavienojas ne ar ko, kur vien siena ietu, līdz uz tā atkal noklikšķināt. Brīvie gali tiek atzīmēti ar krustiņu, kamēr rīks ir ieslēgts. Tas pats slēdzis ir **Savienot sākumā / Savienot beigās** Rekvizītos.
- **Slāņu prioritāte**: kur sienas ar slāņiem saiet, stiprākais slānis griež vājāko, tātad serdes savienojas ar serdēm, un apdare apstājas pret stiprāko slāni. Katram slānim ir prioritāte no 0 līdz 999; pēc noklusējuma tā nāk no slāņa funkcijas (konstrukcija 800, pamatne 600, izolācija 400, membrāna 300, apdare 200, dobums 100). {{ui:Slāņu prioritāte}} atver sienu konstrukciju, kur kolonna **Prioritāte** iestata paša slāņa skaitli. Slāņi ar vienādu prioritāti apstājas viens pret otru, un līnija tiek zīmēta tikai starp dažādiem materiāliem. Tas redzams plānos ar detalizāciju **Vidēja** vai **Smalka** stūros, T savienojumos un divu taisnu sienu krustojumos; Iestatījumi › BimCraft › Sienas › **Tīrīt sienu slāņus, kur sienas saiet** to izslēdz. Tas maina tikai to, kas zīmēts sienu iekšienē: sienu kontūras un daudzumi paliek tādi, kādus tos dod savienojuma stils.

## Mainīt tipu daudzām sienām

Pāreja no skices plāniem uz darba zīmējumiem galvenokārt ir tipa maiņa: vispārīga siena kļūst par konkrētu konstrukciju. Neko nav jāzīmē no jauna.

1. Izvēlieties sienas (vienu vai vairākas ar {{key:Ctrl}} vai {{key:Shift}}).
2. Rekvizītos nospiediet **Mainīt veidu…** zem Sienas tips (vai atveriet {{ui:Sienas}} rediģēšanas grupā un izvēlieties {{ui:Mainīt veidu}}, kas atver to pašu sarakstu). Saraksts atveras Rekvizītos, izvēlēto sienu pašā blokā. Tas nav dialogs un neko nepārklāj: plāns, 3D skats un izvēle turpina darboties, kamēr tas ir atvērts, un tas seko sienām, ko izvēlaties.
3. Saraksts rāda katru sienas tipu ar tā biezumu un LOD atzīmi, piemēram, "Siena 230 vispārīga, LOD 200" un "230 ķieģeļi, abās pusēs apmesti, LOD 300". Tipi, kādi izvēlētajām sienām ir tagad, ir atzīmēti. Rakstiet **Meklēt**, lai to sašaurinātu: nosaukums, biezums vai `lod 300`.
4. Noklikšķiniet uz tipa. Katra izvēlētā siena mainās uz to vienā solī, tāpēc viens {{ui:Atsaukt}} atceļ visu maiņu. Mazais x aizver sarakstu.

Katra siena paliek ar savu atrašanās līniju. Siena uz savas centrālās līnijas aug uz abām pusēm; siena, kuras atrašanās līnija ir virsma, paliek ar šo virsmu un aug otrā virzienā, un tai pieslēgtās sienas seko stūros. Sienas, kas bloķētas pie nomainītās sienas, seko arī tai. Durvis un logi paliek savās sienās un tiek izgriezti no jauna jaunajam biezumam.

Pēc maiņas saraksts rāda **Kas pārvietojās**: cik sienu mainījās un uz ko, biezums un LOD pirms un pēc, sienas, kas pārvietojās sāniski, lai paturētu savu atrašanās līniju, pieslēgtās sienas, kas seko, durvis un logi, kas no jauna ievietoti, un katra telpa, kuras laukums mainījās, ar tās laukumu pirms un pēc. Statusa josla to pasaka vienā rindā. Pārskats tikai informē; tas nekad neaptur maiņu. Izvēloties tipu **Rekvizīti › Sienas tips**, notiek tā pati maiņa un tiek dots tas pats pārskats.

Divas lietas maiņu aptur, un tad nekas netiek mainīts: durvis vai logs, kas vairs neietilptu savā sienā (siena kļūst īsāka, kur stūris seko; vispirms padariet durvis šaurākas vai pārvietojiet tās prom no stūra), un bloķējums, ko maiņa pārtrauktu (siena, kas bloķēta pie režģa līnijas ar savu centrālo līniju, kamēr tās atrašanās līnija ir virsma; atbloķējiet to vai atgrieziet atrašanās līniju uz centrālās līnijas).

Asistents, kas pieslēgts BimCraft, var izdarīt to pašu maiņu (rīki `wall_types_list` un `walls_swap_type`) un saņem to pašu pārskatu.

Sienas tipa LOD atzīmi iestata sienu konstrukcijas redaktorā: sk. [Sienu konstrukcijas](topic:wall-assemblies).

## Nobīde un kastes stiepšana

- **Nobīde**: noklikšķiniet uz sienas, tad uz pusi, uz kuru to pārvietot, vai ierakstiet attālumu. Siena pārvietojas perpendikulāri pati sev, un tai pieslēgtās sienas izstiepjas. Atzīmējiet **Kopēt**, lai iegūtu paralēlu kopiju (tā nav savienota ar oriģinālu).
- **Kastes stiepšana**: noklikšķiniet uz divus kastes stūriem, tad uz punkta, no kura pārvietot, un punkta, uz kuru pārvietot. Katrs sienas gals kastē pārvietojas; siena, kas pilnībā atrodas kastē, pārvietojas, un tai pieliekušās sienas nāk līdzi; sienas, kas šķērso kasti, stiepjas.

## Rediģēt izmēru un to bloķēt

Izvēlieties atskaites izmēru (Anotēt › {{ui:Atskaites izmērs}}) un ievadiet tā vērtību **Rekvizītos**: sienas, kas ir otrās atsauces sienai, pārvietojas perpendikulāri pati sev, pirmā atsauce paliek vietā, un pieslēgtās sienas seko. Atzīmējiet **Bloķēt šo izmēru**, lai saglabātu vērtību: kad vēlāk pārvietojas jebkura no sienām, otra seko. Bloķētu vērtību nevar pārrakstīt, kamēr to neatzīmējat.

## Izlīdzināt un bloķēt

**Izlīdzināt un bloķēt**: noklikšķiniet uz sienas virsmas (vai centrālās līnijas, tuvu sienas vidum) vai režģa līnijas, tad uz sienas virsmas, kas jānovieto uz šīs līnijas. Siena pārvietojas perpendikulāri tai uz to. Vispirms atzīmējiet **Bloķēt**, lai tās paliktu izlīdzinātas: plānā rādās slēdzene, un, kad viena siena pārvietojas, otra seko. Sienas **Rekvizīti** uzskaita tās **Bloķējumus**, katru ar {{ui:Atbloķēt}}.

## Bloķēt sienas pie režģa līnijām

Izvēlieties sienu, kas iet gar režģa līniju vai kuras gals atrodas uz tās, un Rekvizītos izvēlieties režģa līniju **Bloķēt pie režģa**. Tad izvēlieties režģa līniju ar {{ui:Režģis}} rīku un ierakstiet attālumu **Pārvietot par**: līnija pārvietojas perpendikulāri pati sev, un tai bloķētās sienas seko kopā ar savām savienotajām sienām vienā solī. Sienu, kas bloķēta pie režģa līnijas, pati no tās nevar pārvietot (pārvietojiet līniju vai atbloķējiet sienu); režģa līnija, kas pagriezta tā, ka bloķētā siena uz tās vairs nevar palikt perpendikulāri, tiek noraidīta. Līnijas pārdēvēšana saglabā bloķējumu; dzēšot līniju, bloķējums tiek noņemts.

## Garums: kura puse paliek un ko tas mēra

- **Augt no** (vienas sienas Rekvizīti): **Sākums paliek** (gals pārvietojas), **Gals paliek** (sākums pārvietojas) vai **Centrs paliek** (abi gali pārvietojas par pusi). Kamēr ierakstāt Garumu, plāns atzīmē punktu, kas paliek. Sienas galā, kas pārvietojas, pieslēgtā siena pārvietojas perpendikulāri pati sev un saglabā savu leņķi.
- **Mērīt no** (blakus Izmēriem plānā, Rekvizītos un Iestatījumi › BimCraft › Sienas): centrālā līnija, iekšējā virsma vai ārējā virsma. Garuma lauks un plāna sienu izmēri nolasa to pašu, tāpēc tie sakrīt. Sākumā tā ir centrālā līnija.
- Lai pārvietotu sienu, atvienojot to no savienojumiem (tie pārtrūkst, siena saglabā savu identitāti), turiet {{key:Alt}}, velkot tās vidus rokturi.

## Lietderīgi zināt

- Šīs receptes ir sienu rīka specifikācijas (4.–9. lappuse). Savienojuma stils un slāņu prioritāte ir paredzēti taisnām sienām; slāņu prioritāte rādās tikai plānā (ne griezumos, fasādēs vai 3D, kur siena ir viens ķermenis), ne trīs vai vairāk sienu mezglos, un membrānas netiek pārnestas.
- Savienojuma stils tiek saglabāts tā ierakstā IFC failā (`IfcRelConnectsPathElements` nosaukums, piemēram, `CadCraft join L butt 1`), tāpēc citas programmas joprojām nolasa savienojumu, un vecāks fails atveras ar šķautnēm.
- Bloķējumi un savienojumi tiek saglabāti IFC failā (bloķējumi kā `CadCraft_WallHolds` uz projekta, savienojumi kā `IfcRelConnectsPathElements`), tāpēc tie ir arī tad, kad fails tiek atvērts atkal.
- Izliektas sienas var sadalīt, savienot atpakaļ un izņemt gabalu; tās netiek nobīdītas vai bloķētas.
- Skatiet arī [Zīmēt sienas](topic:draw-walls), [Mainīt sienu, durvis vai logu](topic:change-a-wall-or-door) un [Sienas forma](topic:wall-shape).
