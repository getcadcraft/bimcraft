---
title: Atskaņot būvniecības grafiku modelī
summary: Atveriet uzdevumu sarakstu kā CSV, savienojiet katru uzdevumu ar elementiem pēc rekvizīta un pārvietojieties pa datumiem, lai redzētu, kas ir uzbūvēts, kas notiek un kas vēl nav sācies.
keywords: 4d, grafiks, būvniecības secība, laika skala, fāzēšana, programma, gantt, uzdevumi, datumi, simulācija, progress, uzbūvēts, csv, posms, fāze, darba pakotne, wbs, grupa
from: 1b985a64
---

## Ko jūs darīsiet

Vērojiet, kā ēka top: katrs grafika uzdevums ir saistīts ar elementiem, ko tas uzbūvē, un parādīts dienu pa dienai.

## Soļi

1. Atveriet IFC modeli un atveriet {{ui:4D grafiks}} kreisajā panelī.
2. Noklikšķiniet uz {{ui:Lejupielādēt veidni}}, lai iegūtu uzdevumu sarakstu ar vienu nedēļu katram stāvam, un mainiet to izklājlapā. Vai rakstiet savu.
3. Noklikšķiniet uz {{ui:Atvērt uzdevumu sarakstu…}} un izvēlieties CSV.
4. Velciet datumu slīdni vai noklikšķiniet uz {{ui:Atskaņot}}.

## Uzdevumu saraksts

CSV fails ar galvenes rindu un kolonnām **Task**, **Start**, **Finish**, **Field** un **Value**. Darbojas gan komati, gan semikoli.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Jumts | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Jumts | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Datumus rakstiet formātā YYYY-MM-DD.
- Rinda saista uzdevumu ar katru elementu, kura **Field** vērtība ir tieši **Value**. Lauks ir rekvizīts, piemēram, Storey, Class, Name, Type, Material, Tag vai GlobalId, vai jebkurš rekvizīts, kas rakstīts kā tā kopa un nosaukums: `Pset_WallCommon.FireRating`.
- Atkārtojiet uzdevumu vairākās rindās ar tiem pašiem datumiem, lai saistītu vairāk elementu.

## Posmi un darba pakotnes

Pievienojiet kolonnu **Stage**, kolonnu **Package** vai abas, lai apvienotu uzdevumus posmos un darba pakotnēs. Arī Phase un WBS darbojas kā kolonnu nosaukumi.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| 1. līmeņa pārsegums | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| 1. līmeņa sienas | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Durvis | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Uzdevums pieder vienam posmam un vienai pakotnei. Ja vēlāka tā paša uzdevuma rinda nosauc citu, šī rinda tiek uzskaitīta ar savu rindas numuru un izlaista.
- Viena un tā pati pakotnes nosaukums divos posmos ir divas pakotnes.

Ja ir grupas, virs datuma parādās saraksts {{ui:Rādīt}}. Izvēlieties posmu vai pakotni, un tā tiek atskaņota kā viens veselums:

- slīdnis un {{ui:Atskaņot}} darbojas no grupas pirmā sākuma līdz pēdējam beigu datumam,
- tiek uzskaitīti un iezīmēti tikai grupas uzdevumi, bet viss ārpus grupas ir caurspīdīgs,
- rindā zem saraksta norādīts, cik no grupas uzdevumiem šajā datumā ir pabeigti, notiek vai vēl jāsāk,
- {{ui:Atlasīt tā elementus}} atlasa visus grupas elementus {{ui:Rādīt}}, {{ui:Griezums}} vai specifikācijai.

Izvēlieties **Visi uzdevumi**, lai atkal redzētu visu grafiku.

## Ko jums vajadzētu redzēt

- **Uzbūvēts**: elementi, kuru visi uzdevumi ir pabeigti, savās krāsās.
- **Notiek**: elementi ar uzdevumu, kas tajā dienā notiek, okera krāsā. Uzdevums notiek no sākuma datuma līdz beigu datumam (ieskaitot).
- **Vēl nav sācies**: caurspīdīgi.
- Elementi bez uzdevuma paliek kā ir. Saraksts rāda, cik elementu atrada katrs uzdevums. Rindas, kuras nevarēja nolasīt vai kurām nekas nav atrasts, uzskaitītas ar savu rindas numuru.

## Saites, Ganta diagramma un MS Project

- Atveriet Microsoft Project XML failu (`.xml`) vai CSV ar kolonnu `Predecessors`. Saites var būt beigas-sākums, sākums-sākums, beigas-beigas vai sākums-beigas, katra ar priekšstarta vai kavējuma nobīdi dienās.
- Zem uzdevumu saraksta Ganta diagramma attēlo katru uzdevumu kā joslu ar bultiņām saitēm. Uzdevumi kritiskajā ceļā ir sarkani. Saites cilpa vai priekšuzdevums, kas neeksistē, ir uzskaitīts panelī.
- {{ui:Saglabāt kā MS Project XML}} un {{ui:Saglabāt CSV ar saitēm}} ieraksta grafiku atpakaļ kopā ar tā saitēm.

## Tālāk

- [Atrast elementus pēc klases, nosaukuma vai rekvizīta](topic:find)
- [Iekrāsot elementus pēc rekvizīta](topic:color-by-property)
