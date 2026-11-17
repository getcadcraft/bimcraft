---
title: Krāsot elementus pēc rekvizīta
summary: Nokrāsot katru elementu pēc viena rekvizīta vērtības, piemēram, klases, tipa, stāva, materiāla, ugunsizturības vai izmaksām; izlasīt legendu, noklikšķināt vērtību, lai rādītu tikai šos elementus, un saglabāt krāsas kā shēmu citiem modeļiem.
keywords: krāsa, krāsot, krāsot pēc, legenda, viedais skats, izskats, rekvizīts, tips, materiāls, ugunsizturība, filtrs, izolēt, tēma, vērtības, shēma, krāsu shēma, saglabāt krāsas, atkārtota izmantošana, komanda, json, krāsas paraugs
from: f081d343
---

## Ko jūs darīsiet

Uzreiz redzēt, kā rekvizīts ir sadalīts pa modeli: kuras sienas ir ārējās, kādi materiāli kur izmantoti, kuriem elementiem nav ugunsizturības. Katrs elements iegūst savas vērtības krāsu, un legendā teikts, ko katra krāsa nozīmē un cik elementu tai atbilst.

## Soļi

1. Atveriet IFC modeli.
2. Noklikšķiniet cilni {{ui:Krāsa}} labajā pusē.
3. Izvēlieties rekvizītu sarakstā. Pirmie attiecas uz katru elementu ({{ui:Klase}}, {{ui:Tips}}, {{ui:Stāvs}}, {{ui:Materiāls}}, {{ui:Nosaukums}}…); pārējie nāk no modeļa rekvizītu kopām un daudzumu kopām, zem kopas nosaukuma. Skaitlis aiz katra ir tik elementu, kam tas ir.
4. Izlasiet legendu: krāsa, vērtība un cik elementu tai atbilst.
5. Noklikšķiniet vērtību, lai rādītu tikai šos elementus. Turiet {{key:Mod}} un noklikšķiniet, lai pievienotu citas vērtības. Nospiediet {{key:Shift+H}}, lai atkal rādītu visu.
6. Noklikšķiniet {{ui:Izslēgts}}, lai atgrieztos pie modeļa paša krāsām.

## Ko vajadzētu redzēt

- Līdz septiņām vērtībām katrai ir sava krāsa, vispirms biežākā vērtība. Vairāk vērtību dalās vienā pelēkā krāsā un uzskaitītas kā **citas vērtības**.
- Skaitlis ar daudzām dažādām vērtībām tiek sadalīts sešos vienādos diapazonos, no gaišas (zema) līdz tumšai (augsta).
- Elementi bez rekvizīta ir bāli pelēki un uzskaitīti kā **Nav vērtības**, lai krāsotie izceltos.
- Krāsas mainās, pārslēdzot motīvus Paper un Model, un paliek, kamēr labojat modeli.
- Tipa rekvizīts attiecas uz katru šī tipa elementu; ja elementam pašam ir sava vērtība tam pašam rekvizītam, uzvar elementa pašu vērtība.

## Mainīt krāsas un saglabāt kā shēmu

- Noklikšķiniet vērtības krāsas paraugu legendā, lai izvēlētos citu krāsu. Modelis tiek uzreiz pārkrāsots.
- {{ui:Saglabāt shēmu}} lejupielādē krāsas kā mazu `.json` failu, nosauktu pēc rekvizīta, piemēram, `Class colors.json`.
- Citā modelī vai kolēģa datorā noklikšķiniet {{ui:Atvērt shēmu…}} un izvēlieties šo failu. Katra shēmas vērtība iegūst savu krāsu, tāpēc tā pati ugunsizturība vai sistēma ir vienā krāsā katrā modelī.
- Vērtība, kuras shēmā nav, tiek nokrāsota pelēka un uzskaitīta kā „nav shēmā“; shēmas vērtības, kuru šim modelim nav, paliek sarakstā ar 0, lai redzētu visu shēmu.
- Shēma saglabā krāsas abos motīvos. Rekvizīta izvēle sarakstā atkal sāk no automātiskajām krāsām.

## Biežākās kļūdas

- **„Šim modelim nav … vērtību“.** Shēma saglabāta rekvizītam, kuru šim modelim nav (piemēram, cita rekvizītu kopas nosaukums). Atveriet šāda tipa modelim domātu shēmu vai izvēlieties rekvizītu sarakstā.

- **Rekvizīta nav sarakstā.** Nevienam modeļa elementam ar formu tā nav. Pašu stāvu un telpu rekvizīti sarakstā nav iekļauti.
- **Viss ir vienā krāsā.** Visiem elementiem ir viena un tā pati vērtība vai neviena: skatiet legendas skaitļus.

## Tālāk

- [Paslēpt, izolēt un padarīt elementus caurspīdīgus](topic:hide-and-isolate)
- [Atrodiet ceļu ar modeļa koku](topic:model-tree)
