---
title: No projekta faila uz BimCraft caur IFC
summary: IFC eksporta iestatījumi, kas vislabāk atveras BimCraft (versija, īpašumu kopas, bāzes daudzumi, telpas, saistītie modeļi, koordinātas), kā atvērt rezultātu un ko eksports saglabā.
keywords: eksports, IFC eksports, rvt uz IFC, konvertēt, 3D, ģeometrija, ifc2x3, ifc4, koordinācijas skats, atsauces skats, projektēšanas nodošanas skats, īpašumu kopas, bāzes daudzumi, telpas, spaces, saistītie faili, kopīgās koordinātas, uzmērīšanas punkts, projekta bāzes punkts, iestatījumi
from: 3efd5fc9
---

## Ko jūs darīsiet

Pārvērst projekta failu par IFC failu, ko varat griezt, pārlūkot, pārbaudīt un rediģēt BimCraft. BimCraft vēl nenolasa 3D modeli `.rvt` failā, tāpēc eksports notiek programmā, kas to izveidoja (Revit); BimCraft atver rezultātu.

## Soļi

1. Atveriet projektu programmā, kurā tas izveidots. BimCraft kartīte nosauc izlaidumu, kurā tas saglabāts.
2. Atveriet 3D skatu, kas parāda to, ko vēlaties eksportēt.
3. Izvēlieties **Fails > Eksportēt > IFC**.
4. Eksporta dialogā izvēlieties iestatījumu (vai **Mainīt iestatījumu…**) ar zemāk minētajiem iestatījumiem.
5. Izvēlieties mapi un faila nosaukumu un eksportējiet.
6. BimCraft noklikšķiniet uz {{ui:Izvēlēties failu}} un izvēlieties jauno `.ifc` failu. Saistītie modeļi, kas eksportēti kā atsevišķi faili, atveras vienā ainā ar {{ui:Pievienot modeli}}.

## Eksporta iestatījumi, kas vislabāk atveras šeit

| Iestatījums eksportētājā | Izvēlieties | Kāpēc |
|---|---|---|
| IFC versija | **IFC4 Reference View** skatīšanai, pārbaudei un apjomu aprēķinam; **IFC2X3 Coordination View 2.0**, kad citiem vajadzīgs IFC2X3 | Abi atveras pilnībā. **IFC4 Design Transfer View** arī atveras, ar precīzākām formām, bet fails ir lielāks un lēnāks. |
| Faila tips | **IFC** (vienkāršs) | BimCraft neatver `.ifczip` vai `.ifcxml`. |
| Fāze / redzamie elementi | Vajadzīgā fāze un **Eksportēt tikai skatā redzamos elementus**, kad sagatavojat 3D skatu šim nolūkam | Atstāj ārpusē to, ko paslēpāt tīši. |
| Īpašumu kopas | **Eksportēt Revit īpašumu kopas** un **Eksportēt IFC kopīgās īpašumu kopas** | Tās kļūst par īpašumu kopām, ko BimCraft rāda {{ui:Rekvizīti}} un ko izmanto {{ui:Meklēt}}, {{ui:Krāsa}} un {{ui:Modeļa pārbaudes}}. |
| Bāzes daudzumi | **Eksportēt bāzes daudzumus** | {{ui:Daudzumu kopsummas}} un specifikācijas izmanto tos (garumus, laukumus, tilpumus), nevis min. |
| Telpas un laukumi | **Eksportēt telpas 3D skatos** (vai opcija Telpas / Spaces) | Telpas nonāk kā telpas: noklikšķiniet {{ui:Spaces}}, lai tās redzētu. |
| Saistītie faili | **Eksportēt saistītos failus kā atsevišķus IFC** | Katra saite kļūst par savu failu; atveriet tos kopā ar {{ui:Pievienot modeli}}, un tie sakrīt. |
| Koordinātu bāze | **Kopīgās koordinātas** (vai uzmērīšanas punkts) | Fails tad nes savu vietu kartē (IfcMapConversion), tāpēc Mērīt › Atrašanās vieta, kartes slāņi uz zemes un punktu mākoņi, kas novietoti pēc kartes koordinātām, darbojas. Projekta bāzes punkts tur modeli tuvu sākumpunktam, bet bez tā kartes vietas. |
| Sadalīt sienas un kolonnas pa līmeņiem | Ieslēgts, ja apjomus aprēķināt pa stāviem | Katra stāva daļa ir savs elements. |

## Ko jūs redzēsiet

Modelis 3D, stāvi ņemti no projekta līmeņiem un projekta informācija panelī {{ui:Fails}}. **Eksportēts no** nosauc eksportētāju.

## Ko eksports saglabā un ko ne

- **Saglabā**: ģeometriju, stāvus, elementu veidus, nosaukumus, tipus, lielāko daļu parametru (kā īpašumu kopas), bāzes daudzumus, ja pieprasīti, telpas kā telpas un kartes vietu ar kopīgām koordinātām.
- **Nesaglabā**: skatus, lapas, anotācijas, ģimenes kā rediģējamas ģimenes, darba kopas un dizaina variantus. IFC fails ir modeļa elementu momentuzņēmums, nevis projekts. Lapām eksportējiet DWG un atveriet to 2D skatā.

## Biežākās kļūdas

- **BimCraft trūkst parametru.** Ieslēdziet iepriekš minētās īpašumu kopu opcijas un eksportējiet vēlreiz.
- **Telpas trūkst.** Ieslēdziet telpu opciju un tad noklikšķiniet {{ui:Spaces}}.
- **Saglabāšana kā `.ifczip`.** Izvēlieties vienkāršu IFC vai izsaiņojiet `.ifczip`.
- **Nav kartes vietas.** Eksportējiet ar kopīgām koordinātām; pārbaudiet, vai projektam ir uzstādīts uzmērīšanas punkts.
- **Gaidīt, ka labojumi atgriezīsies.** Labojumi, ko saglabājat BimCraft, ieiet jaunā IFC failā, nevis projekta failā.
