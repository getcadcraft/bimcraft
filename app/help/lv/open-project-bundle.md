---
title: Atvērt projekta kopu
summary: Projekta kopa ir viens zip fails ar modeli, tā skatiem, izkārtojumiem un rekvizītu grupām. Atveriet to, parādiet skatu kopā ar tā stāvu un slāņiem, atveriet izkārtojumu un skatiet rekvizītus projekta pašās grupās.
keywords: kopa, projekta kopa, ccbundle, zip, skati, skatu karte, izkārtojumi, izkārtojumu grāmata, slāņu kombinācija, rekvizītu grupas, standarti, pln, veidne
from: b5b86e8f
---

## Ko jūs darīsiet

Atveriet **projekta kopu** (`.ccbundle.zip`) un strādājiet ar projektu tā, kā tas bija organizēts: ar tā skatiem, izkārtojumiem un rekvizītu grupām modeļa augšdaļā.

Kopā ir:

- modelis kā IFC,
- izkārtojumi kā PDF un DWG,
- saraksts ar to, ko IFC neietver: skati (katrs ar savu stāvu, slāņu kombināciju un mērogu), izkārtojumi un tajos novietotie rasējumi, rekvizītu definīcijas to grupās, klasifikācijas un standarti, piemēram, slāņi, pildspalvu kopas, līniju tipi, aizpildījumi, virsmas un kompozīti.

Kopas raksta atvērtā koda skripts, kas darbojas Archicad iekšienē un pats Archicad jautā šos sarakstus. BimCraft nekad tieši nelasa `.pln` vai `.tpl` failus; skatiet [Atvērt .pln un .pla projekta failus](topic:pln-project-files).

## Izveidot kopu

Skripts ir priekšskatījums: to vēl nav izmēģināts visās Archicad versijās. Lejupielādējiet to no [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Jums nepieciešams Archicad 24 vai jaunāks un Python 3.8 vai jaunāks; nekas cits nav jāinstalē.

1. Saglabājiet `archicad_bundle.py` mapē, piemēram, `C:\cc-bundle`.
2. Archicad atveriet projektu un izveidojiet publicēšanas kopu ar nosaukumu tieši **CadCraft bundle**: 3D skats kā IFC, katrs izkārtojums kā PDF un katrs izkārtojums vēlreiz kā DWG, publicēti failos diskā vienā plakanā mapē.
3. Ar atvērtu projektu vienreiz palaidiet `python archicad_bundle.py --probe --out .`. Tas tikai nolasa un raksta `probe.json`.
4. Palaidiet `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (izmantojiet IFC tulkotāju, ko izvēlējāties). Archicad publicē kopu, un skripts raksta `<project>.ccbundle.zip`.

Ja publicēšana caur skriptu neizdodas, publicējiet kopu manuāli un palaidiet `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Visas opcijas ir repozitorija README. Ja kaut kas netiek pārnests, atveriet tur problēmu un pievienojiet `probe.json`.

## Atvērt kopu

1. Noklikšķiniet uz {{ui:Izvēlēties failu}} vai velciet `.ccbundle.zip` uz BimCraft. Mapē, ko atvērāt ar {{ui:Atvērt mapi}}, kopas ir uzskaitītas sadaļā **Projekta kopas**; noklikšķiniet uz vienas pēc nosaukuma.
2. Modelis atveras kā jebkurš IFC, un sadaļa **Projekta kopa** parādās kreisajā pusē zem faila faktiem.

Nekas netiek augšupielādēts: kopa tiek nolasīta jūsu datorā pa vienam failam, tāpēc liels modelis netiek kopēts divreiz.

## Parādīt skatu

Sadaļā **Skati** skati ir grupēti pēc mapēm, kādas tiem bija projektā. Noklikšķiniet uz skata nosaukuma:

- **Stāva plāns** rāda tikai tā stāvu, skatot no augšas.
- **Tā slāņu kombinācija** paslēpj elementus slāņos, ko šī kombinācija paslēpj. Statusa rindā rakstīts, cik elementu tika paslēpti.
- **Tā mērogs** tiek rādīts blakus nosaukumam un statusa rindā.
- **3D skats** rāda visus stāvus.

Lai atkal parādītu visu, izmantojiet {{ui:Rādīt visu}} sadaļā {{ui:Rādīt}} un atzīmējiet katru stāvu.

:::note
BimCraft atrod slāņus caur IFC faila slāņu piešķīrumiem. Ja IFC eksportēts bez tiem, slāņu kombinācija neko nepaslēpj, un statusa rindā rakstīts 0 elementi paslēpti.
:::

## Atvērt izkārtojumu

Sadaļā **Izkārtojumi** katrs izkārtojums rāda savu numuru, nosaukumu, papīra izmēru un tajā novietotos skatus.

- **PDF** saglabā izkārtojuma PDF no kopas.
- **DWG** atver izkārtojuma rasējumu 2D skatā. Noklikšķiniet uz jebkura skata, lai atgrieztos pie modeļa.
- **Atvērt programmā …** nosūta izkārtojuma failu lietotnei, kas ar to strādā, jaunā cilnē: PDF uz MarkupCraft, DWG uz CadCraft. Tā rādās tikai tad, ja šī lietotne ir atvērta blakus BimCraft. Fails tiek nolasīts no kopas, kad cilne ielādējas, un nekas netiek augšupielādēts.

Izkārtojums bez neviena no abiem rāda **Kopā nav faila**.

## Skatīt rekvizītus projekta grupās

Izvēlieties elementu. **Rekvizītu grupas** rāda tā rekvizītus projekta definētajās grupās, sakrītot ar rekvizītu kopu un nosaukumu, ko definīcija dod IFC, vai, ja tādu nav, pēc tā nosaukuma. Pārējie paliek sadaļā {{ui:Rekvizīti}} kā parasti. **Rekvizītu definīcijas** uzskaita katru definīciju ar tās grupu, tipu un IFC nosaukumu.

## Standarti un piezīmes

- **Standarti** saskaita kopā esošos slāņus, slāņu kombinācijas, pildspalvu kopas, līniju tipus, aizpildījumus, virsmas, kompozītus un materiālus.
- **Piezīmes** uzskaita to, ko skripts nevarēja iegūt no šīs Archicad versijas, katru lauku, ko BimCraft nevarēja nolasīt, un katru failu, ko kopa nosauc, bet neglabā.

## Problēmu novēršana

- **"… ir zip, bet ne projekta kopa."** Zip failā nav `manifest.json`. Izsaiņojiet to un atveriet tajā esošo `.ifc`.
- **"… ir jaunāka projekta kopa, nekā BimCraft var nolasīt."** Atjauniniet BimCraft.
- **"… neglabā modeli, ko tā manifests nosauc."** Zip fails ir pārtraukts vai rediģēts. Izveidojiet kopu vēlreiz.
- **Skats rāda visus stāvus.** Tā stāva nav modeļa IFC failā (statusa rindā tas ir norādīts). Pārbaudiet, vai IFC eksports to iekļāva.

Skatiet arī [Darbs starp divām BIM programmām](topic:two-bim-programs) un [Ko BimCraft nolasa no katra formāta](topic:file-formats).
