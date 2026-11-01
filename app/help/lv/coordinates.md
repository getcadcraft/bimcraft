---
title: Koordinātas programmā BimCraft
summary: Kur jūs strādājat: kursora pozīcija plānā un 3D skatā, līmenis, uz kura atrodaties, projekta sākumpunkts un vietas uzmērīšanas punkts.
keywords: koordinātas, kur es esmu, pozīcija, kursors, rādījums, x y z, līmenis, stāvs, projekta sākumpunkts, sākumpunkts, bāzes punkts, uzmērīšanas punkts, vieta, kartes koordinātas, austrumu koordinātas, ziemeļu koordinātas, georeferencēšana, mērvienības, atrašanās vieta
from: 84df5245
---

## Ko jūs izdarīsiet

Vienā skatienā noteikt, kur atrodaties modelī: uz kura līmeņa zīmējat, cik tālu kursors atrodas no projekta sākumpunkta un kur atrodas vietas uzmērīšanas punkts.

## Kur parādās skaitļi

- **Virs 3D skata** (apakšā pa labi, blakus skata kubam): pārvietojiet kursoru pāri modelim. Lodziņā redzams līmenis, uz kura atrodas punkts, cik augstu tas atrodas virs šī līmeņa grīdas, un pēc tam **X, Y un Z**. Virs tukša laukuma tiek rādīts punkts uz zemākā līmeņa grīdas.
- **Plānā** (apakšā pa labi, kamēr ir ieslēgta {{ui:Zīmēšana}}): līmenis, ko rāda plāns, un tā grīdas augstums, kā arī kursora **X un Y**, kamēr tas atrodas virs plāna.
- Ja failam ir kartes pārveidojums (tas eksportēts ar kartes koordinātām), abi lodziņi papildus rāda **austrumu un ziemeļu koordinātas** kartes režģī izvēlētajās {{ui:Mērvienības}} (blakus skaitļiem vienmēr ir rakstīta mērvienība; pēdas un collas tiek rādītas kā decimālas pēdas). Rasējums (DWG vai DXF) saglabā savas mērvienības: tā kursora rādījumā ir norādītas tās, un tās nekad netiek pārveidotas.

Katra X, Y un Z tiek mērīta no **projekta sākumpunkta** izvēlētajās {{ui:Mērvienības}} rīkjoslā (pēdas un collas, collas, decimālas pēdas, milimetri, centimetri vai metri). Pozitīvā Y ass virziens ir uz modeļa ziemeļiem, kas ne vienmēr sakrīt ar īsto ziemeļu virzienu. Kartes austrumu un ziemeļu koordinātas seko tai pašai izvēlei (pēdas un collas tiek rādītas kā decimālas pēdas). Ja kartes sistēmas pašas mērvienība atšķiras no jūsu izvēlētās, tā tiek nosaukta iekavās aiz skaitļiem, piemēram, *(ASV mērnieku pēdās)*, lai mērnieks varētu redzēt, kādās vienībās pati sistēma ir uzrakstīta.

## Divi marķieri

- **Projekta sākumpunkts** (sarkans aplis ar krustiņu): punkts 0, 0, 0, no kura tiek mērītas visas modeļa koordinātas.
- **Uzmērīšanas punkts** (zils aplis ar trīsstūri): vietas atsauces punkts, kuram ir norādīts platums, garums un augstums vai kartes koordinātas. 3D skatā norādiet uz to, lai redzētu, kur tas atrodas.

Ja vieta atrodas uz projekta sākumpunkta, kā jaunā ēkā, kas šeit zīmēta, viens marķieris attēlo abus. Lai paslēptu vai parādītu marķierus, noklikšķiniet uz krustiņa pogas jebkurā lodziņā. BimCraft atceras jūsu izvēli šajā pārlūkprogrammā.

## Ko jums vajadzētu redzēt

- Skaitļi mainās, kad kursors pārvietojas, un plāna lodziņā ir nosaukts līmenis, ko izvēlējāties līmeņu sarakstā.
- Marķieri paliek vietā, kamēr griežat skatu, panoramējat un maināt tālummaiņu.

:::tip
Lai uzzinātu punkta platuma un garuma grādus, izmantojiet {{ui:Mērīt}} › {{ui:Atrašanās vieta}}: skatiet [Attālumu, virsmu laukumu un atrašanās vietu mērīšana 3D](topic:measure).
:::

:::touch
Skārienekrānā 3D lodziņš nerāda neko, kamēr neizmantojat peli vai pildspalvu. Pirksts tā vietā pārvieto skatu.
:::
