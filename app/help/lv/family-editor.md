---
title: Ģimenes rediģēšana
summary: Mainiet ģimenes parametrus, formulas un cietos ķermeņus, rādiet daļas ar parametru Jā / Nē, griezt un savienot cietos ķermeņus, dodiet tiem savienotājus caurulēm un gaisa vadiem, un redziet rezultātu, kas zīmēts no IFC, ko tā saglabās.
keywords: ģimenes redaktors, rediģēt ģimeni, parametrs, parametri, formula, formulas, redzamība, jā nē, cietais ķermenis, cietie ķermeņi, kaste, ekstrūzija, ekstrudēt, rotācija, pārvilkšana, profils, loks, bula, bulas, griezt, savienot, starpība, apvienība, rokturis, rokturi, darba plakne, skice, jauna ģimene, savienotājs, savienotāji, pieslēgvietas, caurules savienotājs, gaisa vada savienotājs, notekūdeņi, ūdens padeve
from: 1ab31c10
---

## Redaktora atvēršana

Atveriet ģimeni (projekta pārlūka **Ģimenes** vai {{ui:Build}} › {{ui:Families…}}) un noklikšķiniet uz {{ui:Edit the family}}. Lai sāktu no nulles, noklikšķiniet uz {{ui:New family}}: piešķiriet tai nosaukumu, norādiet, kas tā ir (durvis, logs, mēbeles, ierīce vai kaut kas cits), un durvīm vai logam — no kura sākuma gabala ir tā plāna simbols un rokturis. Redaktors atveras ar ģimeni, kurai ir daži parametri un viens cietais ķermenis.

Rediģējot sākuma ģimeni, jūsu izmaiņas paliek tikai šajā modelī. Citi modeļi paturi sākuma ģimeni tādu, kāda tā ir.

Nekas modelī nemainās, kamēr nenoklikšķināt uz {{ui:Save the family}}. Redaktoram ir savs atsaukšanas un atkārtošanas solis (bultiņu pogas blakus nosaukumam vai {{key:Mod+Z}} un {{key:Mod+Y}}); saglabāšana ir viens solis modeļa atsaukšanā.

## Parametri

Cilne {{ui:Parameters}} uzskaita ģimenes parametrus: nosaukumu, veidu un noklusējumu. Veidi: **Garums** (milimetros), **Leņķis** (grādos), **Skaitlis**, **Vesels skaitlis**, **Jā / Nē**, **Pildspalva** (1–16) un trīs, kas glabā vārdus, nevis skaitļus: **Teksts**, **Materiāls** (viens no projekta materiāliem) un **Aizpildījums** (plāna aizpildījums). Vārdi formulās netiek izmantoti; tie krāso cietu ķermeni (tā **Materiāls**), aizpilda simbola daļu vai tiek drukāti kā `{Name}` simbola tekstā. Lodziņš **Katram elementam** padara parametru par tādu, ko katrs novietotais elements iestata pats, nevis izmērs.

- **Formula** liek parametram sekot citiem, piemēram, `Width / 30` vai `if(Width > 1200, 2, 1)`. Garumi formulās ir milimetros, vai rakstiet vienību: `3'`, `6in`, `50cm`.
- Parametra pārdēvēšana to pārdēvē katrā formulā un laukā, kas to izmanto. Parametru, kas vēl tiek izmantots, nevar noņemt.
- Cieta ķermeņa **Materiāls** ņem projekta materiāla krāsu (vai Materiāla parametra krāsu), **Redzams pie** paslēpj to rupjākos detalizācijas līmeņos, un **Atkārtot** veido kopijas: skaitu (skaitlis vai vesela skaitļa parametrs, no 1 līdz 200) un soli starp tām x, y un z virzienā. Atkārtots cietais ķermenis ir dēļu, stieņu vai caurumu rinda; izmantots griezumā, kopijas griežas kopā.
- Durvju vai logu ģimene arī saņem divus nosaukumus no sienas: `WallThickness` un `Face` (1 vai −1, puse, uz kuru durvis atveras).

## Cietie ķermeņi

Cilne {{ui:Solids}} uzskaita cietos ķermeņus. Pievienojiet kasti, ekstrūziju, rotāciju vai pārvilkšanu:

| Cietais ķermenis | Ko jūs iestatāt |
|---|---|
| Kaste | tās divus stūrus: x0 līdz x1, y0 līdz y1, z0 līdz z1 |
| Ekstrūzija | profilu uz darba plaknes (plāns, priekšskats vai sānskats), kur atrodas plakne un dziļums |
| Rotācija | profilu, asi uz plaknes un leņķi līdz 360° |
| Pārvilkšana | punktu ceļu un rādiusu (stienis vai margas) |

Katru skaitli var ievadīt kā ciparu vai parametru izteiksmi. Katram cietajam ķermenim ir krāsa un **Redzams, kad**: atstājiet tukšu, lai tas vienmēr būtu redzams, vai nosauciet parametru Jā / Nē (vai rakstiet salīdzinājumu, piemēram, `Shelves >= 3`), lai tas būtu redzams tikai tad. Tas ir redzamības parametrs.

### Profila zīmēšana

Ekstrūzijas vai rotācijas profilu zīmē uz tā darba plaknes zem priekšskatījuma:

- Noklikšķiniet uz papīra, lai pievienotu punktu aiz izvēlētā.
- Velciet punktu, lai to pārvietotu. Punkti piesaistās režģim; turiet {{key:Shift}}, lai tos novietotu brīvi.
- Noklikšķiniet uz mazā kvadrāta uz posma, lai tur pievienotu punktu. {{key:Shift}}+klikšķis to pārvērš par loku (vēlreiz noklikšķiniet, lai atgrieztos uz otru pusi, tad uz taisnu).
- Veiciet dubultklikšķi uz punkta, lai to noņemtu.

Dobos punktus iestata parametri: mainiet tos tabulā, nevis velkot.

## Bulas operācijas

Cilne {{ui:Booleans}} izgriež otro cieto ķermeni no pirmā vai tos apvieno. Bulas operācijas rezultātu var atkal izgriezt vai apvienot. Cietais ķermenis, kas izmantots bulas operācijā, tiek zīmēts tikai kā tās daļa.

Kad otro cieto ķermeni paslēpj tā parametrs Jā / Nē, pirmais tiek saglabāts tāds, kāds ir; kad paslēpts ir pirmais, rezultāts ir paslēpts.

## Plāna simbols

Cilne {{ui:Plan symbol}} zīmē to, ko plāns rāda šai ģimenei, nevis tās cieto ķermeņu griezumu: līnijas, taisnstūrus, riņķus, lokus, daudzstūrus un tekstu ģimenes paša asīs. Katrai daļai ir **pildspalva** (1–16, izteiksme vai Pildspalvas parametrs), **aizpildījums** (nav, cieta, diagonāla, krustota, betons, izolācija, zeme vai Aizpildījuma parametrs), **redzams pēc** izteiksmes, **griezuma diapazons** milimetros virs tās pamatnes (daļa tiek zīmēta pilnā svarā, kad plāna griezums ir tās iekšpusē, plānāk zem tā un punktēta virs tā: skapis virs griezuma rādās punktēts), detalizācijas līmenis un atkārtojums. Teksts var nosaukt parametrus kā `{Name}`. **Plāns rāda: Cieto ķermeņu griezumu** liek plānam turpināt griezt cietos ķermeņus, kamēr simbols paliek ģimenē. Citas programmas lasa simbolu kā ģimenes pamatni (līnijas un formas; teksts paliek BimCraft).

## Ietvertās ģimenes

Cilne {{ui:Families inside}} ieliek šajā ģimenē citu: kāju galdā, rokturi durvīs. Izvēlieties ģimeni, tad to, kur tā iet (x, y, z), cik tā pagriezta (tikai ceturtdaļpagriezieni: 0, 90, 180, 270), kad tā tiek rādīta un tās vērtības, katrā rindā pa vienai, piemēram, `Height = Height - 40`. Saglabājot iekšējo ģimeni, šī tiek zīmēta atkal; ģimeni, ko tur cita, nevar dzēst; ģimene nevar ietvert sevi, pat caur citu, un ligzdošana beidzas četros līmeņos.

## Karstie punkti

Karstais punkts ir punkts vai mala, ko velkat, lai mainītu parametru. Cilnē {{ui:Hotspots}} pievienojiet vienu, izvēlieties asi, pa kuru tas velkas, un skaitļa parametru, ko tas maina, un ierakstiet tā pozīciju tajās pašās izteiksmēs kā cietajiem ķermeņiem. Priekšskatījumā izvēlieties **Karstie punkti** zem rokturiem, lai tos vilktu. Novietotam elementam plānā (atlasiet to ar {{ui:Select}}) x un y karstie punkti rādās kā satvērēji: velciet vienu, un elements iegūst izmēru, kas liek karstajam punktam atrasties tur, caur visām formulām starp tiem; viens Atsaukt to atgriež. Karstais punkts nevar mainīt vadītu parametru, Jā / Nē vai vārdu.

3D skatā tie paši karstie punkti rādās kā satvērēji uz atlasītā elementa, un augšup un lejup vērstie (ass z) arī rādās, ko plāns nevar zīmēt. Atlasiet elementu, velciet satvērēju pa tā asi un atlaidiet: elements iegūst izmēru, kas liek karstajam punktam atrasties tur, kā viens atsaukšanas solis. Satvērēji ir paslēpti, kamēr ir ieslēgta griezuma kaste, jo tā izmanto tos pašus satvērējus.

## Savienotāji

Ģimenēm, kas novietotas uz grīdas (mēbeles, ierīces un citas), ir cilne {{ui:Connectors}}: punkti, kur caurule vai gaisa vads pievienojas elementam, kā uz izlietnes krāna un notekas. Noklikšķiniet uz {{ui:Add a connector}} un iestatiet:

- **Veids**: caurule vai gaisa vads, un tā **Sistēma** (aukstais ūdens, sanitārā notekūdeņu sistēma, padeves gaiss…).
- **x**, **y** un **z**: kur tas atrodas ģimenes paša asīs. Tāpat kā cieta ķermeņa skaitļi, katrs var būt skaitlis vai parametru formula, tātad savienotājs pārvietojas kopā ar izmēru.
- **Izejas virziens**: virziens, kurā caurule vai gaisa vads atstāj to, pa vienu no ģimenes asīm (notekai zem izlietnes ir **Lejup**).
- **Izmērs (mm)**: caurules nominālais izmērs (DN) vai apaļa gaisa vada diametrs.
- **Plūsma**: **Ieeja** savienotājam, kas tiek barots (krāns), **Izeja** savienotājam, kas novada.

Priekšskatījums zīmē katru savienotāju kā riņķi ar bultiņu, kas rāda izejas virzienu. Durvīm un logiem savienotāju nav.

Sanitārai ierīcei izvēlieties, kāda tā ir, zem **Santehnikas ierīce** (tualetes pods, izlietne, virtuves izlietne, duša, veļas trauks). Sākuma ierīcēm to jau norāda.

Katrs no ģimenes novietotais elements saņem savus savienotājus kā pieslēgvietas IFC failā, un tie tiek veidoti atkal, kad elements maina izmēru vai ģimene tiek saglabāta. Programmas, kas lasa IFC sistēmas, redz, kur katra caurule vai gaisa vads pieder.

## Priekšskatījums un tā rokturi

Priekšskatījums ir ģimene, rakstīta kā IFC ar to pašu kodu, kas to saglabā modelī, un atkal zīmēta. Ko redzat, to saņem citas programmas. Zem tā **Rādītais izmērs** iestata parametru vērtības, ko izmanto priekšskatījums.

**Rokturi** ir punkti uz priekšskatījuma: **Izmērs** rāda rokturus platumam, dziļumam un augstumam; **Atlasītais cietais ķermenis** rāda vienu uz katras atlasītā ķermeņa virsmas. Velciet rokturi:

- virsmai, ko nosaka parametrs, mainās rādītais izmērs (ģimenes formulas tiek saglabātas);
- virsmai, ko nosaka ievadīts skaitlis, mainās skaitlis.

## Saglabāšana

{{ui:Save the family}} pārbauda ģimeni, tad pārzīmē katru tās izmēru un atjauno katru tās elementu kā vienu soli, ko var atsaukt. Ja izmēru nevar uzzīmēt ar izmaiņu (piemēram, cietajam ķermenim izmērā nebūtu platuma), nekas netiek saglabāts, un redaktors norāda, kurš izmērs.

Ja kāds cits saglabāja to pašu ģimeni, kamēr jūsu redaktors bija atvērts (Live TeamWork sesijā vai citā logā), {{ui:Save the family}} atsakās un to saka, nevis aizstāj viņa izmaiņu ar jūsu. Aizveriet redaktoru, atveriet ģimeni atkal, lai redzētu viņa izmaiņu, un veiciet savu atkal.

:::note
Ģeometrija tiek saglabāta kā IFC pašu cietie ķermeņi: ekstrūzijas, rotācijas, izliektie diski un bulas operāciju rezultāti. Nekas netiek pārvērsts trijstūru sarakstā, tāpēc faili paliek mazi, un citas programmas var nolasīt formas kā formas. Profili ar lokiem tiek saglabāti ar lokiem IFC4; IFC2X3 profilā nav loka segmentu, tāpēc tur lokus saglabā kā īsus taisnus gabalus.
:::

Skatiet arī [Ģimenes un to izmēri](topic:families).
