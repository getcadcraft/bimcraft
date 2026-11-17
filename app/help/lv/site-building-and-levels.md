---
title: Zemesgabals, ēka uz tā un tās līmeņi
summary: Zīmējiet zemesgabala kontūru, novietojiet un pagrieziet ēku zemesgabalā, pievienojiet līmeņus norādītos augstumos vai sadaliet ēkas augstumu un zīmējiet izvēlētajā līmenī.
keywords: zemesgabals, zemes gabala plāns, būvlīnija, atkāpe, servitūts, ceļa servitūts, īpašuma robeža, zemes gabals, robeža, ēkas novietojums, pagriezt ēku, novietot ēku, līmeņi, stāvi, grīdas, pievienot līmeņus, sadalīt augstumu, grīda līdz grīdai, IfcSite, IfcBuilding, IfcBuildingStorey, telpiskā struktūra
from: 48d10c1e
---

## Ko jūs darīsiet

Iestatiet IFC modeļa daļas, kas satur visu pārējo: zemesgabalu, ēku uz tā un ēkas līmeņus.

Modelis ir organizēts kā **zemesgabals**, kas satur **ēku**, kas satur tās **līmeņus** (stāvus); sienas, grīdas un viss pārējais pieder līmenim. {{ui:Fails}} › {{ui:Jauna ēka}} iestata visus trīs. Modelis no citas programmas, kam ir ēka, bet nav zemesgabala, saņem zemesgabalu, kad pirmo reizi to zīmējat: ēka tiek novietota uz tā tur, kur tā jau atradās.

## Zīmēt zemesgabalu

1. Ieslēdziet {{ui:Zīmēšana}} un izvēlieties {{ui:Būvējums}} › {{ui:Zemesgabals}}.
2. Noklikšķiniet uz zemesgabala stūriem (rīks piesaistās kā Sienas rīks). Noklikšķiniet uz pirmā stūra vēlreiz, veiciet dubultklikšķi vai nospiediet {{key:Enter}}, lai pabeigtu. {{key:Backspace}} atņem stūri.
3. Rindā redzams zemesgabala laukums. Zīmējiet to vēlreiz, lai to mainītu.

Katra līmeņa plāns rāda zemesgabala kontūru kā īpašuma robežu.

## Novietot ēku zemesgabalā

Ar ieslēgtu {{ui:Zemesgabals}} ierakstiet ēkas **X** un **Y** zemesgabalā un tās **Pagriezienu** grādos, vai noklikšķiniet uz {{ui:Novietot ēku ar klikšķi}} un noklikšķiniet, kur iet ēkas sākumpunkts. Viss ēkā (līmeņi, sienas, režģi, viss, ko zīmējāt) pārvietojas kopā ar to; zemesgabals un tā kontūra paliek vietā. Plāni turpina rādīt katru līmeni taisni attiecībā pret ēku.

## Būvlīnijas un servitūti

Būvlīnijas un servitūti (servitūti, ceļa servitūti) ir zīmēti zemesgabalā kā ierobežojumi. Tie **brīdina, bet nekad neaizliedz**: siena virs viena tiek zīmēta, kā lūgts, un brīdinājums, kas nosauc sienu un līniju vai servitūtu, parādās Problēmās. Pārvietojiet sienu atpakaļ, un brīdinājums pazūd. Brīdinājumu var apstiprināt ar iemeslu (piemēram, atvieglojumu, ko piešķīrusi iestāde).

- **Būvlīnija no atkāpēm.** {{ui:Būvējums}} › {{ui:Būvlīnija}}, tad {{ui:Atkāpes}}: ierakstiet, cik tālu līnija atrodas no katras zemesgabala robežas. Robežas plānā ir numurētas, kamēr rīks ir ieslēgts. Līnija tiek aprēķināta no šiem attālumiem un seko zemesgabala kontūrai, ja to zīmējat no jauna ar tikpat robežām. Attālumi ir jūsu: tos nolasiet no īpašuma dokumenta vai zonējuma shēmas; BimCraft neaizpilda nevienu.
- **Uzzīmēta būvlīnija.** Ar ieslēgtu {{ui:Būvlīnija}} noklikšķiniet uz tās punktiem un pabeidziet ar dubultklikšķi vai {{key:Enter}}. Pabeidziet pirmajā punktā, lai iegūtu slēgtu līniju: laukums iekšpusē ir tur, kur drīkst būvēt, un siena, kurai kāda daļa atrodas ārpusē, tiek brīdināta. Atvērta līnija brīdina tikai par sienu, kas to šķērso.
- **Servitūts.** {{ui:Būvējums}} › {{ui:Servitūts}}: izvēlieties tā veidu, ierakstiet tā nosaukumu, tā reģistrēto atsauci un platumu, tad noklikšķiniet uz tā centra līnijas un pabeidziet (josla) vai aizveriet to pirmajā punktā (laukums). Siena, kurai kāda daļa atrodas uz tā, tiek brīdināta visos līmeņos.
- Seja tieši uz līnijas ir saskaroša, nevis šķērsojoša (pielaide ir 1 mm).
- Pašreizējais masas variants katrā variantu kopā tiek pārbaudīts tāpat kā sienas: masa ārpus robežas, pāri būvlīnijai vai uz servitūta tiek brīdināta. Skatiet [Masas varianti blakus](topic:massing-options).
- Izvēlieties vienu ar {{ui:Atlasīt}}, lai mainītu tā nosaukumu, atsauci, veidu vai platumu, pārvietotu to vai dzēstu.

Tās ir zīmētas katra līmeņa plānā, lapās un plānu PDF: būvlīnijas ar svītrām, servitūti ar punktiem, katra ar savu uzrakstu. IFC failā katra ir anotācija (IfcAnnotation, tips BuildingLine vai Servitude) zemesgabalā, ar savu līniju kā vienkāršu līkni, ko var nolasīt citas programmas. Pārbaude izmanto katras sienas reālo kontūru plānā, ar tās savienojumiem, kā zīmēts; izliekta siena tiek pārbaudīta pēc savas biezuma ap centra līniju.

## Pievienot līmeņus

Panelī {{ui:Līmeņi}} {{ui:Pievienot līmeni augšā}} pievieno vienu, {{ui:Pievienot līmeni zemāk}} pievieno vienu zem zemākā (pagrabs, negatīvā augstumā). {{ui:Pievienot līmeņus…}} pievieno vairākus vienlaikus:

- **Šajos augstumos**: ierakstiet augstumus virs zemākā līmeņa, atdalītus ar komatiem (piemēram, `12', 24', 36'`). Augstumi, kuros jau ir līmenis, tiek izlaisti.
- **Sadalīt ēkas augstumu**: ierakstiet ēkas augstumu un līmeņu skaitu. Esošie līmeņi pārvietojas uz jaunajiem augstumiem no zemākā uz augšu, trūkstošie tiek pievienoti, un tie, kas ir virs tiem, paliek vietā.

Sienas, kas iet līdz līmenim virs, seko tam, tāpat kā kolonnas un rampas.

{{ui:Kopēt šo līmeni…}} (tajā pašā panelī) kopē to, kas zīmēts līmenī, ko skatāt, uz citu līmeni vai uz jaunu līmeni augšā, lai stāva plānu varētu pārnest augšup ēkā vienā solī. Skatiet [Zīmēt sienas](topic:draw-walls).

## Zīmēt līmenī

Katrs {{ui:Zīmēšana}} rīks darbojas līmenī, kas izvēlēts plāna līmeņu sarakstā (vai atlasīts panelī {{ui:Līmeņi}}): tas, ko zīmējat, pieder šim līmenim.

## Ko jums vajadzētu redzēt

- Katra no šīm izmaiņām ir viens solis: {{key:Mod+Z}} to atsauc.
- IFC failā: zemesgabals (IfcSite) ar tā kontūru un laukumu, ēka (IfcBuilding), novietota uz tā, un līmeņi (IfcBuildingStorey) ēkā.

Skatiet arī [Koordinātes BimCraft](topic:coordinates) projekta sākumpunktam un uzmērījuma punktam.
