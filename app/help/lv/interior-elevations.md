---
title: Iekšējās fasādes
summary: Izveidojiet vienu lapu, kas no telpas iekšpuses parāda visas četras sienas ar izmēriem un atzīmēm, un saglabājiet to kā PDF.
keywords: iekšējā fasāde, telpa, siena, skapis, virtuve, fasāde, lapa, PDF, izmērs, atzīme, IfcSpace, A-501
from: 1e3a70a8
---

## Ko jūs darīsiet

Atlasiet telpu un iegūstiet vienu lapu, kurā redzamas tās četras sienas tā, kā tās izskatītos, ja stāvat telpas iekšpusē. Tā ir paredzēta virtuvēm, vannas istabām un jebkurai telpai, kurā jāredz skapji, durvis un logi katrā sienā.

## Lapas izveide

1. Atlasiet telpu. Plānā ar ieslēgtu {{ui:Zīmēšana}} noklikšķiniet telpas iekšpusē. 3D skatā vai modeļa kokā atlasiet telpu (IfcSpace).
2. Sadaļā **Rekvizīti** noklikšķiniet uz {{ui:Iekšējās fasādes…}}.
3. Atveras dialogs ar lapu.
4. Noklikšķiniet uz {{ui:Lejupielādēt PDF}}, lai to saglabātu. Fails tiek nosaukts "<file> — Interior elevations — <room>.pdf" un ir vektora PDF.
5. Kad esat pabeidzis, noklikšķiniet uz {{ui:Aizvērt}}.

## Ko rāda lapa

Lapā ir četri skati divās rindās pa divi, vienā mērogā: lielākais standartmērogs, kas tajā ietilpst. Tie ir **Ziemeļu siena**, **Austrumu siena**, **Dienvidu siena** un **Rietumu siena**. Titulblokā ir lapas numurs A-501, nosaukums „Iekšējās fasādes — ” ar telpas numuru un nosaukumu, projekts un datums.

Katrs skats ir griezts telpas vidū un skatās uz sienu tajā pusē. Sānu sienas un tajās griezti elementi, piemēram, logs, skatā redzami kā pelēkā griezuma laukums ap skatu. Skats beidzas tieši aiz sienas virsmas, tāpēc aiz sienas nekas nerādās.

Katrā skatā ir:

- telpas platums zem tā, no iekšējās virsmas līdz iekšējai virsmai;
- telpas augstums blakus tam, no grīdas līdz līmenim virs tās;
- kvadrātveida atzīme katrām durvīm un sešstūra atzīme katram logam šajā sienā, ar tā marķējumu (D1, W1 un tā tālāk);
- apļveida atzīme ar vienuma numuru katram bibliotēkas vienumam, kas novietots šīs sienas priekšā: skapjiem, armatūrai un aprīkojumam.

:::note
Skati tiek veidoti no modeļa katru reizi, kad atverat dialogu, tāpēc tie vienmēr atbilst modelim. Pārvietojiet skapi un pēc tam atkal atveriet dialogu.
:::

## Jūsu pašu lapās

Katra telpas siena ir arī skats, ko varat ielikt savā lapā: projektu pārlūkā noklikšķiniet uz {{ui:Jauna lapa}}, tad sadaļā **Iekšējās fasādes** pievienojiet „101 Virtuve — Ziemeļu siena” un pārējās. Tam ir tie paši izmēri un atzīmes.

## Vēl nav izveidots

Iekšējās fasādes ģenerētajā rasējumu kopā (tās nāk no telpas **Rekvizīti** vai jūsu pašu lapām), telpas, kas nav lielākoties taisnstūra formas (skats katrā telpas kastes pusē izskatās kvadrātveida), zīmēšana, piezīmes vai jūsu pašu izmēri uz tām, un izvēle, kuras sienas rādīt. Skatiet [Kas vēl nav izveidots](topic:not-built-yet).
