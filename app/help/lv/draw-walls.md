---
title: Sienu zīmēšana
summary: Zīmējiet sienas stāva plānā, noklikšķinot to stūrus vai ierakstot garumus; stūri savienojas paši, un sienas tiek saglabātas kā IFC.
keywords: izliekta, loks, atsauces līnija, izlīdzināšana, siena, sienas, zīmēt, plāns, stāva plāns, telpa, stūris, savienot, sienas tips, 2x6, 2x4, cmu, betons, augstums, līmenis, līmeņi, stāvs, ievadīts garums, ortogonāli, piesaiste
from: 8269cd4b
---

## Ko jūs darīsiet

Zīmējiet ēkas sienas uz katra līmeņa plāna. Noklikšķiniet, kur sākas siena, un pēc tam katru stūri; BimCraft pats savieno stūrus, katrai sienai piešķir tās slāņus (apšuvums, pamatapšuvums, karkasa stāvenes, ģipškartons …) un novada to līdz līmenim virs tā. 3D skats rāda sienas, kamēr jūs zīmējat.

## Atvērt plānu

1. Sāciet jaunu ēku ([Sākt jaunu ēku](topic:start-a-new-building)) vai atveriet IFC modeli.
2. Rīkjoslā noklikšķiniet uz {{ui:Zīmēšana}}. Jauna ēka atveras jau ar ieslēgtu šo režīmu.
3. Stāva plāns tiek rādīts pa kreisi, bet 3D skats — pa labi. Izvēlieties līmeni sarakstā plāna augšdaļā vai ar apaļo pogu blakus tam panelī **Līmeņi**.
4. {{ui:Plāns}}, {{ui:Sadalīt}} un {{ui:3D}} ir rīki rīkjoslas rindā {{ui:Skats}} (komandas PLAN, SPLIT un taustiņi darbojas kā agrāk). Izmantojiet {{ui:Plāns}}, lai redzētu tikai plānu, {{ui:Sadalīt}} abiem, {{ui:3D}}, lai aizvērtu plānu. Ja logs ir šaurs (vai saskarnes izmērs liels), {{ui:Sadalīt}} novieto plānu virs 3D skata, nevis blakus tam.

Plāns šķeļ līmeni 4'-0" (1200 mm) virs tā grīdas, kā to dara stāva plāns. Ritiniet, lai tuvinātu, velciet ar vidējo vai labo pogu (vai turiet {{key:Space}} un velciet), lai panoramētu; ja ieslēgts {{ui:Atlasīt}}, parasta velkšana arī panoramē. {{key:F}}, kad rādītājs atrodas virs plāna, pielāgo to skatam.

## Zīmēt telpu

1. Noklikšķiniet uz {{ui:Siena}} (vai nospiediet {{key:W}}).
2. Pirmajā sarakstā izvēlieties sienas tipu, piemēram, **Ārējā 2×6** vai **Iekšējā 2×4**.
3. Izvēlieties tās augstumu: **Līdz līmenim virs** (siena seko, ja šis līmenis pārvietojas), **Līdz** augstākam līmenim sienai, kas iet cauri vairākiem līmeņiem (kāpņu telpa, divstāvu telpa, augsts zabaks), vai **Fiksēts augstums** un ierakstiet to. Šāda siena pieder līmenim, kurā to zīmējāt; to līmeņu plāni, caur kuriem tā iet, rāda to vieglāk, telpas tur tai piekļaujas, un no šiem plāniem varat noklikšķināt durvis un logus tajā (durvis atrodas uz šī līmeņa grīdas). Lai pārvietotu vai pārveidotu pašu sienu, dodieties uz līmeni, kurā tā sākas.
4. Noklikšķiniet, kur sākas pirmā siena.
5. Noklikšķiniet katru stūri. Katrs klikšķis veido sienu; nākamā sākas tur, kur beidzās iepriekšējā. Garums un leņķis rādās blakus rādītājam.
6. Vēlreiz noklikšķiniet uz pirmā punkta, lai aizvērtu telpu. Statusa rindā rādās, cik sienu ir telpai, un centrālās līnijas režīmā katra siena saņem savu ārējo slāni telpas ārpusē.
7. Nospiediet {{key:Esc}} (vai peles labo pogu, vai veiciet dubultklikšķi), lai apturētu, neaizverot telpu.

Stūri savienojas paši: divas sienas saiet šķautņu savienojumā, siena, kas beidzas uz citas, apstājas pie tās virsmas (T), un trīs vai vairāk sienas vienā punktā dalās stūrī. Krustojošās sienas paliek tādas, kādas tās ir.

Visu telpu uzreiz: atveriet {{ui:Formas}} taisnstūrim, pagrieztam taisnstūrim, daudzstūrim, lokiem, sienām pa izvēlētām līnijām vai ap kontūru (sk. [Sienu formas, sadalīšana, nobīde, stiepšana un bloķēšana](topic:wall-tools)).

## Izvēlieties zīmēšanas atskaites punktu

Pirms pirmā klikšķa izvēlieties **Centrālā līnija**, **Iekšējā virsma** vai **Ārējā virsma**. Ja izvēlēta virsma, jūsu klikšķi un ierakstītie garumi apraksta šo virsmu; BimCraft nobīda sienas centrālo līniju par pusi no kopējā biezuma un savieno secīgus stūrus. Attiecībā pret zīmēšanas virzienu izvēlieties **Ārpuse pa kreisi** vai **Ārpuse pa labi**. Slēgtai kontūrai, kas zīmēta pretēji pulksteņrādītāja virzienam, ārpuse ir pa labi; pulksteņrādītāja virzienā — pa kreisi. Ar **Iekšējā virsma** sienas korpuss iet uz jūsu līnijas ārpuses pusi; ar **Ārējā virsma** — uz otru pusi. Zīmējot pēc virsmas, izvēlētā ārpuses puse saglabājas, kad aizverat cilpu. Centrālajā līnijā sienas, kas neaizver telpu, saņem izvēlēto ārpuses pusi; telpas aizvēršana pati iestata katras sienas ārpusi uz telpas ārpusi neatkarīgi no tā, kādā virzienā zīmējāt.

Mainot sienas tipu, atskaiti vai ārpuses pusi, pašreizējā ķēde beidzas. Tuvu apgrieztam stūrim garie šķautņu savienojumi tiek ierobežoti, atstājot taisnus galus.

Zīmējot, galapunkts pāri tukšai telpai var sakārtoties horizontāli vai vertikāli ar sienas galapunktu vai iepriekšēju stūri. Punktēta līnija savieno šo punktu ar piesaistīto rādītāju. Shift tur zīmēšanas virzienu taisnu; tad sakārtošana apstājas gar šo virzienu. Tuvākie galapunkti, viduspunkti un sienu krustpunkti ir svarīgāki par tālu sakārtošanu.

## Atsauces līnija

Ja **Atsauce** ir **Ārējā virsma** vai **Iekšējā virsma**, siena saglabā šo virsmu kā savu atsauces līniju. Vēlāk, ja siena kļūst biezāka vai tās ārpuse tiek apgriezta, šī virsma paliek vietā, un siena aug vai apgriežas ap to. Taisna siena, kas tai pieslēdzas stūrī, seko, tātad stūris joprojām ir noslēgts. Atsauces līniju var mainīt vēlāk sadaļā **Rekvizīti**: sk. [Mainīt sienu, durvis vai logu](topic:change-a-wall-or-door).

## Zīmēt izliektu sienu

1. Noklikšķiniet uz {{ui:Siena}}, pēc tam opciju rindā sarakstā **Forma** izvēlieties **Izliekta**.
2. Noklikšķiniet, kur siena sākas, un pēc tam, kur tā beidzas.
3. Noklikšķiniet punktu uz tās loka. Vai ierakstiet loka augstumu un nospiediet {{key:Enter}}.
4. Ķēde turpinās no sienas gala. Nospiediet {{key:Esc}}, lai to beigtu.

Izliekta siena savienojas ar sienām savos galos (darbojas stūru un T savienojumi), veido telpas un tur durvis un logus gar savu loku. Tie paliek taisnas vienības, taisni pret sienu viduspunktā, un to attālums tiek mērīts pa loku. Siena var pagriezties ne vairāk kā par trim ceturtdaļām apļa. Tā piesaistās savos galos un loka viduspunktā.

Vēl nav izveidots izliektām sienām: {{ui:Apgriezt / pagarināt}} un {{ui:Stūris}}, karkass, automātiski plāna izmēri un piesaiste gar loku. Sk. [Kas vēl nav izveidots](topic:not-built-yet).

## Ierakstīt garumu, nevis klikšķināt

Pēc pirmā klikšķa ierakstiet un nospiediet {{key:Enter}}:

| Ieraksts | Zīmē |
|---|---|
| `12'6"` vai `3810` | sienu tik garu rādītāja norādītajā virzienā |
| `12'6"<90` | tik garu, tādā leņķī (grādos, pretēji pulksteņrādītāja virzienam no labās puses) |
| `@3000,0` | līdz punktam, kas no pēdējā ir tik tālu, šķērsām un augšup |
| `1200,3400` | līdz šim punktam plānā |

Ierakstot ciparu, kamēr ieslēgts sienas rīks, tas tieši nonāk lodziņā {{ui:Garums}}. Pēdās un collās vienkāršs cipars ir collas; milimetros — milimetri. Vienību vienmēr varat ierakstīt: `3.5 m`, `10 ft`, `6 1/2"`.

## Piesaistes

- Sienu galapunkti, to virsmu stūri un sienu viduspunkti piesaistās, kad rādītājs ir tiem tuvu (kvadrāts, trīsstūris).
- Rādītājs piesaistās sienas centrālajai līnijai vai jebkurai virsmai (krusts).
- No pēdējā punkta virziens tiek noturēts ik pa 15°, kad tas ir tuvu; turiet {{key:Shift}}, lai to noturētu 0°, 90°, 180° vai 270°.
- Brīvi virzieni noapaļo garumu līdz 1/2" (vai 10 mm).

## Mainīt, atsaukt, dzēst

- Katra siena ir viens solis sadaļā {{ui:Izmaiņas}}: {{ui:Atsaukt}} un {{ui:Atkārtot}} atņem sienas un atkal tās atjauno.
- Ar ieslēgtu {{ui:Atlasīt}} noklikšķiniet sienu plānā, lai to atlasītu; 3D skats un **Rekvizīti** seko. {{key:Delete}} dzēš atlasītās sienas, un sienas, ar kurām tās bija savienotas, tiek atkal sakoptas.

## Līmeņi

Panelis **Līmeņi** parāda katru līmeni ar tā atzīmi un augstumu.

- Ierakstiet jaunu nosaukumu, atzīmi vai augstumu un nospiediet {{key:Enter}}. Mainot līmeņa augstumu (vai atzīmi), augstākie līmeņi pārvietojas par to pašu daudzumu, un sienas, kas sniedzas līdz līmenim, seko.
- {{ui:Pievienot līmeni augšā}} pievieno līmeni virs augstākā, tikpat augstu.
- {{ui:Pievienot līmeni zemāk}} pievieno līmeni zem zemākā (pagrabs), tikpat augstu: atzīme ir negatīva, kad zemākais līmenis ir 0, un neviens cits līmenis nepārvietojas. Atsaukt to noņem.
- {{ui:Kopēt šo līmeni…}} zīmē atkārtoti to, kas atrodas līmenī, uz kuru skatāties, citā līmenī vai jaunā līmenī virs: sienas ar durvīm un logiem, grīdas un griestus (ne jumtus). Sienas, kas sniedzās līdz līmenim virs, sniedzas līdz līmenim virs jaunā; telpas parādās paši. Viens {{ui:Atsaukt}} atsauc visu. Ja citam līmenim jau ir sienas, kopija tiek pievienota tām.
- {{ui:Mērvienības}} rīkjoslā izvēlas mērvienības (pēdas un collas, collas, decimālās pēdas, milimetri, centimetri vai metri) visam, ko rāda un nolasa zīmēšanas rīki.

## Saglabāt

Noklikšķiniet uz {{ui:Saglabāt kā IFC}}. Katra siena ir IFC siena ar savu centrālo līniju, savienoto formu, tipu un slāņiem, `Pset_WallCommon` un bāzes daudzumiem (garums, augstums, laukumi un tilpumi), lai citas BIM programmas to atvērtu un izveidotu no tās specifikāciju.

## Noderīgi zināt

- Sienas tiek zīmētas pa to centrālo līniju. Biezums nāk no sienas tipa.
- Plānā šeit zīmētās sienas tiek rādītas aizpildītas, bet viss pārējais (bibliotēkas vienības, modeļi no citām programmām), ko griež tā pati plakne, — ar to, kas atrodas zem griezuma, plānām līnijām.
- Citu programmu veidotās sienas tiek rādītas plānā, bet ar šiem rīkiem tās vēl nevar mainīt.
