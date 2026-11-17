---
title: Elementu birkošana un specifikācijas pēc birkām
summary: Definējiet savas birkas (nosaukums, tips, atļautās vērtības, kādām klasēm), piešķiriet tās daudziem elementiem vienlaikus un veidojiet specifikācijas, kuru kolonnas, filtri un grupas nolasa birkas. Birkas tiek glabātas IFC failā.
keywords: birkas, birka, birkošana, pielāgotas īpašības, parametri, koplietojamie parametri, rekvizītu kopa, pset, specifikācija, filtrs, grupēt pēc, apdare, ugunsizturība, lielapjoma rediģēšana, csv
from: 9cc7c90d
---

## Ko jūs darīsiet

Birka ir jūsu pašu īpašība, piemēram, *Apdare* vai *Ugunsizturība*. Jūs to definējat vienreiz projektam, iestatāt uzreiz daudziem elementiem, un katra BimCraft specifikācija to var nolasīt: šeit birku specifikācija, {{ui:Daudzumi}}, Meklēt, Krāsot pēc rekvizīta un [Dokumenti no modeļa](topic:documents-from-the-model).

## Soļi

1. Atveriet IFC modeli vai sāciet jaunu ēku.
2. Kreisajā panelī zem {{ui:Daudzumi}} atveriet {{ui:Birkas}}.
3. Noklikšķiniet uz {{ui:Pievienot atzīmi}}. Dodiet tai nosaukumu, izvēlieties tās tipu un, ja vēlaties, uzskaitiet atļautās vērtības (ar komatiem) un klases, kurām tā paredzēta (`IfcDoor`, `IfcWall` …). Noklikšķiniet uz {{ui:Pievienot birku}}.
4. Atlasiet modelī elementus (Meklēt palīdz: atlasiet visas durvis uzreiz).
5. Zem {{ui:Piešķirt birkas atlasei}} izvēlieties vai ierakstiet vērtību katrai birkai, ko vēlaties iestatīt; pārējās atstājiet kā ir, un noklikšķiniet uz {{ui:Lietot … atlasītajiem elementiem}}.
6. Zem {{ui:Birku specifikācija}} atzīmējiet kolonnas, pievienojiet filtrus, izvēlieties {{ui:Grupēt pēc}}, tad {{ui:Lejupielādēt CSV}}.

## Ko vajadzētu redzēt

- Izmaiņu sarakstā parādās solis par katru saglabāto definīciju un katru birkošanu; {{ui:Atsaukt}} to atsauc.
- Elementi klasei, kurai birka nav paredzēta, tiek izlaisti no šīs birkas, un statusa rinda norāda, cik to ir.
- Birku specifikācija uzskaita vienu rindu uz elementu, grupētu pēc izvēlētā lauka; noklikšķiniet uz rindas pirmās šūnas, lai atlasītu šo elementu.
- {{ui:Daudzumi}} uzskaita birkas zem `CadCraft_Tags`, tātad tur varat summēt laukumus vai skaitus pēc birkas.

## Tipi

Tipi ir tie paši, kas ģimeņu parametriem: Garums (milimetri), Leņķis (grādi), Skaitlis, Vesels skaitlis, Jā / Nē, Pildspalva (1–16), Teksts, Materiāls un Aizpildījums. Vērtība, kas neatbilst tipam vai nav viena no atļautajām vērtībām, tiek noraidīta ar ziņojumu, un nekas nemainās.

## Noderīgi zināt

- Viss ir vienkāršs IFC, tāpēc citas programmas nolasa vērtības: definīcijas ir rekvizītu kopā `CadCraft_TagDefs` projektā, vērtības — rekvizītu kopā `CadCraft_Tags` katrā elementā (viena īpašība katrai birkai). Garumi tiek rakstīti faila garuma vienībās.
- `IfcWall` birkas klasēs ietver arī standarta un elementētās sienas.
- Birkas pārdēvēšana pārdēvē tās vērtības katrā elementā tajā pašā solī. Birkas noņemšana noņem tikai tās definīciju; jau iestatītās vērtības paliek elementos kā vienkārši rekvizīti. Lai tās noņemtu, vispirms notīriet tās (izvēlieties {{ui:Notīrīt}}).
- Birkas CadCraft zīmēšanas lietotnē (bloku atribūti) vēl nav izveidotas.
