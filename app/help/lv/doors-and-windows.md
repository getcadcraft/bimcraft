---
title: "Durvis un logi"
summary: "Ievietojiet durvis un logus zīmētās sienās: norādiet uz sienu, redzēsiet atvēršanas virzienu un attālumus līdz stūriem, noklikšķiniet; sienas atvērums izgriežas pats."
keywords: "durvis, logs, atvērums, atvēršanas virziens, eņģe, puse, apgriezt, bīdāmas durvis, kabatas durvis, garāžas vārti, dubultās durvis, spārnlogs, vertikāli bīdāms logs, bīdāmais logs, fiksēts logs, palodze, pārsedze, salokāmas durvis, skapja durvis, franču durvis, šķūņa durvis, sānu stikli, ieejas durvis, markīzlogs, skata logs, virsgaisma"
from: 4d8ac009
---

## Ko jūs darīsiet

Ievietojiet durvis un logus sienās, ko esat zīmējis ([Zīmējiet sienas](topic:draw-walls)). Norādiet uz sienu, un durvis vai logs parādīs, kur tie ietilps, kurā virzienā atvērsies un cik tālu tie atrodas no katra stūra. Noklikšķiniet, un atvērums izgriežas pats no sienas plānā un 3D skatā.

## Ievietojiet durvis

1. Ar ieslēgtu {{ui:Draw}} noklikšķiniet uz {{ui:Door}} (vai nospiediet {{key:D}}).
2. Izvēlieties tipu: **Vienvērtņu durvis**, **Dubultvērtņu durvis**, **Bīdāmas durvis**, **Kabatas durvis**, **Garāžas vārti**, **Salokāmas skapja durvis**, **Franču durvis**, **Šķūņa durvis (uz sienas)** vai **Ieejas durvis ar sānu stiklojumu**. To parastais izmērs aizpilda **W** un **H**; izvēlieties citu no izmēru saraksta blakus vai ierakstiet citus, piemēram, `2'-8"` vai `800`. Sarakstā ir arī šā modeļa durvju saimes (skatiet [Saimes un to izmēri](topic:families)).
3. Norādiet uz sienu. Durvju simbols seko rādītājam gar sienu, un attālums no katra šīs virsmas gala parādās plānā.
4. Durvis atveras uz to sienas pusi, kurā atrodas rādītājs. Nospiediet {{key:H}} (vai noklikšķiniet uz {{ui:Flip}}), lai eņģes novietotu otrā galā.
5. Noklikšķiniet. Durvis tiek novietotas, un rīks paliek ieslēgts nākamajām. Norādiet uz sienas vidu, un durvis centrējas pašas.

Lai novietotu tās precīzā attālumā, norādiet uz sienu blakus stūrim, no kura mērāt, ierakstiet attālumu (piemēram, `2'` vai `600`) un nospiediet {{key:Enter}}. Attālums iet no tuvākā sienas virsmas gala līdz durvju malai.

## Ievietojiet logu

1. Noklikšķiniet uz {{ui:Window}} (vai nospiediet {{key:N}}).
2. Izvēlieties tipu: **Fiksēts logs**, **Vertikāli bīdāms logs (viens)**, **Vertikāli bīdāms logs (divi)**, **Spārnlogs**, **Bīdāmais logs**, **Markīzlogs**, **Skata logs** vai **Virsgaisma**, un tā **W**, **H** un **Palodze** (loga apakšas augstums virs grīdas).
3. Norādiet uz sienu un noklikšķiniet, vai ierakstiet attālumu un nospiediet {{key:Enter}}, kā durvīm. Logs atrodas sienas ārpusē.

## Pārvietot, apgriezt, dzēst

- Ar ieslēgtu {{ui:Select}} velciet durvis vai logu gar sienu. Velciet to uz citu sienu, lai pārvietotu to tur.
- {{key:Delete}} dzēš atlasītās durvis un logus; siena aizveras.
- Pārvietojot vai dzēšot sienu, pārvietojas vai tiek dzēsts tajā esošais. Kad sienas sākums pārvietojas pa savu līniju, tās durvis un logi saglabā savu vietu.
- {{ui:Undo}} un {{ui:Redo}} atsauc vai atkārto katru novietojumu, pārvietojumu vai dzēšanu.

## Kas tiek noraidīts

- **Tas neietilpst šajā sienā.** Durvis vai logs ir platāks par sienu vai izvirzītos ārā tās galā. Izvēlieties īsāku platumu vai garāku sienu.
- **Tas ir augstāks par sienu.** Palodze plus augstums ir virs sienas augšas.

## Kas tiek saglabāts

Katrs durvis vai logs ir IFC durvis vai logs ar savu izmēru, darbību (piemēram, vienvērtņu durvis pa kreisi), sava izmēra tipu (viens tips katram savas saimes izmēram), `Pset_DoorCommon` vai `Pset_WindowCommon` un pamatdaudzumiem, aizpildot IFC atvērumu tā sienā. Sienas neto sānu laukums un tilpums atvērumu neieskaita. Citas BIM programmas to atver kā durvis sienā.

## Lietderīgi zināt

- Plānā durvis rādītas atvērtas par 90° ar to virzienu, bīdāmas durvis kā divi paneļi, kabatas durvis kā bīdās sienā, garāžas vārti kā punktēta līnija virs galvas, un logi ar rāmja un stikla līnijām.
- Platums ir rāmja kopējais platums; durvju lapa ir platums mīnus abi stenderi.
- Zīmētu durvju un logu kopēšana vēl nav izveidota: novietojiet citu.

## Pagraba evakuācijas logs un bedre

Izvēlieties **Pagraba evakuācija ar bedri** logu tipu sarakstā. Tas sākas kā 36 × 48 collu spārnlogs ar palodzi 36 collas virs līmeņa. Bedre ir sienas ārpusē ar vismaz 48 collu brīvu platumu, 36 collu izvirzījumu un dibenu 6 collas zem palodzes. Plānā tā redzama kā punktētas līnijas, 3D skatā kā trīs sānu puses bez augšas. Bedre ir daļa no loga IFC korpusa, tāpēc loga saglabāšana, pārvietošana, izmēra maiņa vai dzēšana to pārvieto līdzi. Izmēra maiņa saglabā vismaz 6 collas blakus katram stenderim.

Šīs ir modelēšanas noklusējuma vērtības, nevis evakuācijas atbilstības sertifikāts. Ražotāja faktisko brīvo atvērumu, vietējās prasības, grunts līmeni, drenāžu un jebkuru nepieciešamo kāpnīti pārbaudiet atsevišķi. Bedres dziļums un augstums ir iepriekš iestatīti izmēri; tie neseko reljefam.
