---
title: Pārbaudīt sadursmes
summary: Atrodiet vietas, kur viena kopas elementi ieskrien citas kopas elementos — kanāli caur sijām, sienas līdz pārsegiem — vienā modelī vai vairākos, ar pielaidi, un pārvērtiet sadursmi problēmā.
keywords: sadursme, sadursmju noteikšana, sadursmju pārbaude, stingra sadursme, traucējums, kolīzija, koordinācija, pārklāšanās, pielaide, mep, konstrukcija
from: 9cb12346
---

## Ko jūs darīsiet

Atrodiet vietas, kur divas elementu kopas saskaras, piemēram, viss inženiertīklu modelis pret konstrukciju, tad apskatiet katru un paturiet tās, kas ir svarīgas, kā problēmas.

## Soļi

1. Atveriet IFC modeli un pievienojiet citus ar {{ui:Pievienot modeli…}}, ja pārbaudāt vairākos modeļos. Sk. [Vairāku IFC modeļu skatīšana kopā](topic:several-models).
2. Kreisajā panelī atveriet {{ui:Sadursmju pārbaude}}.
3. Laukos {{ui:Pārbaudīt}} un {{ui:Pret}} izvēlieties divas kopas: elementus, ko atlasījāt, klasi (visos atvērtajos modeļos), saglabātu meklēšanas kopu (sk. [Atrast elementus pēc klases, nosaukuma vai īpašības](topic:find)) vai visu.
4. Iestatiet, cik lielu pārklāšanos ignorēt, metros. 0,01 ignorē elementus, kas tikko saskaras.
5. Noklikšķiniet uz {{ui:Palaist}}. Pārbaude darbojas fonā; {{ui:Atcelt}} to aptur.
6. Noklikšķiniet uz rezultāta, lai to apskatītu: abi elementi tiek atlasīti un parādīti, pārējais ir caurspīdīgs, un skats tuvinās tiem.
7. Zem rezultāta noklikšķiniet uz {{ui:Izveidot par to problēmu}}, lai to aprakstītu cilnē {{ui:Problēmas}}. Sk. [Problēmas un BCF faili](topic:issues-bcf).

## Ko jums vajadzētu redzēt

- Sadursmes uzskaitītas ar abu elementu nosaukumiem (un to failiem, ja atvērti vairāki modeļi) un to, cik dziļi tie pārklājas, dziļākās pirmās.
- Virsmas, kas tikai saskaras, piemēram, siena uz pārseguma vai durvis tās atverē, nav sadursmes.

## Lietderīga informācija

- Šī ir vienkārša stingras sadursmes pārbaude: elementi, kuru virsmas krustojas. Elements, kas pilnībā atrodas citā elementā (caurule iemūrēta sienā), vēl netiek atrasts.
- Dziļums ir tas, cik tālu abu elementu robežas pārklājas vismazāk: orientieris, nevis precīzs mērījums.

## Tālāk

- [Mērīt attālumus, virsmu laukumus un atrašanās vietas 3D](topic:measure)
- [Paslēpt, izolēt un padarīt caurspīdīgus elementus](topic:hide-and-isolate)
