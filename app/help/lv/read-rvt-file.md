---
title: Projekta vai ģimenes faila nolasīšana
summary: Atveriet .rvt, .rfa, .rte vai .rft failu un nolasiet tā izdevumu, kopdarba informāciju, projekta informāciju, ģimenes parametrus, saites un priekšskatījuma attēlu bez programmas, kas to izveidoja.
keywords: rvt, rfa, rte, rft, projekta fails, ģimene, izdevums, versija, kura versija, būve, kopdarbs, centrālais, projekta informācija, priekšskatījums, sīktēls, saites
from: df3600e1
---

## Ko jūs darīsiet

Uzziniet, kas ir projekta vai ģimenes failā, neatverot to programmā Revit: kurš izdevums to saglabāja, vai tas ir kopdarba fails un ko tas saista. Noderīgi, kad fails nāk no kāda cita un jums jāzina, kurā izdevumā to atvērt.

## Soļi

1. Noklikšķiniet uz {{ui:Izvēlēties failu}}.
2. Izvēlieties `.rvt`, `.rfa`, `.rte` vai `.rft` failu.
3. Uzgaidiet mirkli. Statusa rindā parādās "Lasa failu…", un pēc tam "Atvērts *faila nosaukums*".
4. Skatiet kartītes augšdaļu: priekšskatījuma attēlu, kas saglabāts failā, faila veidu un izdevumu, kurā tas saglabāts, un projekta nosaukumu.
5. Ritiniet uz leju, lai izlasītu kartītes sadaļas.

## Ko jums vajadzētu redzēt

Kartīte vidū ar šīm sadaļām, ja fails tās satur:

| Sadaļa | Ko tā jums pastāsta |
|---|---|
| Fails | Faila nosaukums, izmērs, veids (projekts, projekta sagatave, ģimene vai ģimenes sagatave), izdevums un būve, kurā tas saglabāts, kopdarbs, centrālā modeļa ceļš, kur un kurš to pēdējo reizi saglabāja, lokalizācija un dokumenta GUID |
| Projekta informācija | Projekta paši lauki, piemēram, nosaukums, numurs, klients, adrese un statuss. Lauki, kas joprojām ir jauna projekta noklusējumā, netiek rādīti. |
| Ģimene, Ģimene: … | Ģimenei: tās nosaukums, kategorija, izdevums, pēdējais atjauninājums un tās parametri, grupu pa grupai |
| Saistītie un atsauces faili | Katrs saistītais modelis, CAD saite, attēls un atslēgu tabula, uz ko fails norāda, ar tā saglabāto ceļu |

Kreisajā {{ui:Fails}} panelī atkārtoti redzami galvenie fakti un pievienots **Nolasīts**: cik daudz faila BimCraft faktiski nolasīja, parasti apmēram 40 KB no faila, kas ir vairāku megabaitu liels. Labajā pusē {{ui:Rekvizīti}} panelis norāda, ka elementu rekvizītiem vajadzīgs 3D modelis.

## Kāpēc nav 3D

3D modelis un elementi projekta failā ir saglabāti nedokumentētā formātā. BimCraft nolasa tikai tās faila daļas, kas ir dokumentētas vai skaidri lasāmas: faila informāciju, projekta informāciju, ģimenes datus, saišu sarakstu un priekšskatījuma attēlu. Tas nemēģina minēt pārējo. Lai redzētu modeli 3D un nolasītu elementu rekvizītus, eksportējiet IFC no programmas, kas faili izveidoja. Skatiet [Projekta faila ievietošana 3D caur IFC](topic:rvt-to-ifc).

## Biežākās kļūdas

- **Gaidīt 3D.** Skatiet iepriekš.
- **Saites rāda tikai saglabāto ceļu.** Fails, kas atvērts atsevišķi, nevar pārbaudīt, vai tā saites pastāv. Atveriet mapi, kurā tas atrodas: BimCraft atzīmē katru saiti kā atrastu vai neatrastu. Skatiet [Atvērt visu projekta mapi](topic:open-project-folder).
- **"Šis fails nav pilnīgs…"** Fails tika pārtraukts kopējot, augšupielādējot vai sinhronizējot. Mākoņdiska fails, kas vēl ir "tikai tiešsaistē", arī šādi uzvedas. BimCraft to tomēr atver un parāda tikai to, kas atgūts: dzeltenu paziņojumu faila augšā, sadaļu **Atgūts no šī faila** ar daļām, kuru katrs baits ir failā, un **Failā nav** pārējam. Trūkstošajai daļai nekas netiek aizpildīts, tāpēc izdevums, priekšskatījuma attēls vai projekta informācija var trūkt, ja tie bija saglabāti aiz nogriezuma vietas. Ja pat faila satura saraksts tika nogriezts, neko nevar atvērt. Nokopējiet oriģinālu vēlreiz un atkārtoti atveriet to, lai iegūtu pilnu failu.
- **"Šajā failā nav priekšskatījuma attēla."** Daži faili tiek saglabāti bez tā. Tas ir normāli.
- **Dublējuma atvēršana kļūdainī.** Faili ar nosaukumiem kā `Tower.0004.rvt` ir numurēti dublējumi. Atverot mapi, tie tiek grupēti kopā ar savu modeli.
