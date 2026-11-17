---
title: "Noklusējuma politikas: iestatiet, ar ko sākas jauna ēka"
summary: "Vienreiz norādiet, ar kādu sienas tipu, līmeņiem, pirmo lapu, LOD birkām, mērvienībām un rīku sākas jauna ēka metriskiem un imperiālajiem projektiem, un kopīgojiet politikas visā birojā kā mazu failu."
keywords: "noklusējums, noklusējumi, noklusējuma politikas, politika, biroja standarts, biroja noklusējumi, veidne, jauna ēka, pirmais sienas tips, metriskā siena, mūris, LOD, attīstības līmenis, pirmā lapa, papīrs, mērogs, līmeņi, stāva augstums, līmeņu nosaukumi, sienas rīks, mērvienības, kopīgot, eksportēt, importēt, json"
from: 42379aa5
---

## Ko jūs darīsiet

Pastāstiet BimCraft, ar ko jaunai ēkai jāsākas, lai neviens birojā katru reizi nemainītu tās pašas lietas. Šis ir papildinājums: tas ir izslēgts, kamēr to neieslēdzat, un politika, ko nenorādāt, atstāj BimCraft pašu noklusējumu tieši tādu, kāds tas ir.

:::note
Šīs ir noklusējuma vērtības **jaunām** ēkām un **jauniem** elementiem. Projekts, ko jau sākāt, netiek mainīts.
:::

## Soļi

1. Atveriet Iestatījumus, dodieties uz {{ui:Add-ons}} un ieslēdziet {{ui:Default Policies}}.
2. Iestatījumos atveriet cilni **BimCraft** un kreisajā sarakstā izvēlieties {{ui:Default Policies}}.
3. Iestatiet politikas, kuras vēlaties. Katra sākas ar **BimCraft pašu**, un iekavās ir norādīts, kas tas ir. Politikai ar kastēm **Metriskā** un **Imperiālā** norādiet vienu vērtību katram projekta veidam; aizpildiet tikai tās, kas jums vajadzīgas.
4. Pogas Saglabāt nav: katra izmaiņa tiek saglabāta, tiklīdz to veicat. Vērtība, ko nevar izmantot, tiek noraidīta ar paskaidrojumu, un vecā paliek.
5. Noklikšķiniet uz {{ui:New building}}. Dialogs tiek aizpildīts no jūsu politikām, un katra vērtība, ko politika iestatījusi, blakus rāda **no jūsu noklusējuma politikām**. Jūs joprojām varat jebko mainīt pirms {{ui:Create}}.

## Politikas

- **Jaunas ēkas mērvienības**: mērvienības pārslēdzas uz šo, nospiežot {{ui:Create}}.
- **Līmeņu skaits**, **Līmeņu nosaukumi** un **Līmeņa augstums**. Nosaukumā `{n}` skaita 1, 2, 3; `{n0}` skaita 0, 1, 2; `{nn}` un `{nn0}` dara to pašu ar diviem cipariem. Tātad `Stāvs {nn0}` dod Stāvs 00, Stāvs 01, Stāvs 02.
- **Pirmais sienas tips**: ko sienas rīks zīmē pirmo. Metriskais birojs var sākt ar Ārējo mūri 300 mm, bet imperiālie projekti paliek pie Ārējā 2×6.
- **LOD birka sākuma sienu tipos**: attīstības līmenis (LOD 100 līdz 500), ko deviņi sākuma tipi rāda visur, kur tips ir uzskaitīts. Skatiet [Veidot sienu konstrukcijas](topic:wall-assemblies).
- **Jaunizveidota sienas tipa LOD**: birka, ar kuru jauns tips sākas tipa redaktorā. To var tur mainīt.
- **Pirmā lapa**: tās papīrs, mērogs, lapas numurs un nosaukums (izmantojiet `{level}` zemākā līmeņa nosaukumam) vai vispār bez pirmās lapas.
- **Anotāciju izmēri uz papīra** (Iestatījumi › Globāli › Noklusējuma politikas): biroja augstumi milimetros, kā tie drukāti, piezīmēm, izmēru tekstam, birkām, telpu nosaukumiem, režģa aplīšu burtiem, skatu nosaukumiem un specifikāciju tekstam. Jauna ēka tos pārņem, nospiežot {{ui:Create}}, un saglabā savā failā. Skatiet [Zīmējiet pilnā izmērā, anotējiet pēc mēroga](topic:annotation-sizes).
- **Rīks, kas ir aktīvs pēc {{ui:Create}}**: Atlasīt, kā BimCraft dara pats, vai Siena, lai pirmie divi klikšķi plānā jau zīmētu sienu.

## Specifikāciju izkārtojums: biroja standarts

Iestatījumos **Iestatījumi › Globāli › Noklusējuma politikas**, sadaļā **Specifikāciju izkārtojums (biroja standarts)**, iestatiet, kā tiek grupēta katra specifikācija, vai tai ir starpsummas un kopsumma, tās nosaukumu un kolonnu virsrakstu burtu lielumu. Katra specifikācija, kas pati neuzdod savus, pārņem tos neatkarīgi no tā, kas to izveidoja. Skatiet [Izkārtojiet, saglabājiet un eksportējiet specifikāciju](topic:schedule-layouts).

## Kopīgojiet tās visā birojā

1. Iestatījumos atveriet cilni **Globāli** un izvēlieties {{ui:Default Policies}}.
2. Ierakstiet **Biroja nosaukums**, ja vēlaties. Tas tiek ierakstīts failā.
3. Noklikšķiniet uz {{ui:Save to a file}}. Iegūsiet nelielu failu ar paplašinājumu `.ccdefaults.json`.
4. Citā datorā ieslēdziet papildinājumu, atveriet to pašu vietu un noklikšķiniet uz {{ui:Load from a file}}. Faila politikas aizstās tās, kas ir tajā datorā.

Cilnē Globāli ir arī **Jaunā projekta mērvienību sistēma**, kas attiecas uz katru lietotni ar papildinājumu, un {{ui:Reset every policy}}. {{ui:Reset to BimCraft's own defaults}} cilnē BimCraft notīra tikai BimCraft politikas.

## Lietderīgi zināt

- Fails ir vienkāršs, atverams JSON: politiku nosaukumu un vērtību saraksts. Politika, ko fails nosauc, bet šī versija nezina, tiek izlaista un nosaukta ziņojumā; pārējais tiek ielādēts.
- Politikas tiek glabātas šajā pārlūkprogrammā, katrai CadCraft lietotnei šajā datorā. Tās netiek glabātas ēkas failā un netiek sinhronizētas starp datoriem: izmantojiet failu.
- LOD birka sākuma tipā nāk no politikas šajā datorā. Tips, ko izveidojat kā sākuma tipa kopiju, nes savu birku ēkas failā.
- BimCraft nav precizitātes iestatījuma, tāpēc šeit nav precizitātes politikas.
- Ēka, kas sākta no veidnes, pārņem veidnes pašus līmeņus un lapas. Sienas tipa un mērvienību politika joprojām attiecas.
- Izslēdziet papildinājumu, un viss atkal ir BimCraft pašu. Jūsu politikas tiek glabātas, kad to atkal ieslēdzat.
