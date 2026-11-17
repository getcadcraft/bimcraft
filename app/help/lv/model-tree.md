---
title: Orientēšanās ar modeļa koku
summary: Pārlūkojiet IFC modeli pēc projekta, zemesgabala, ēkas, stāva un telpas, ar elementiem, kas grupēti pēc veida; atzīmējiet rūtiņas, lai rādītu un paslēptu; noklikšķiniet rindu, lai atlasītu; dubultklikšķiniet, lai tuvinātu.
keywords: modeļa koks, koks, struktūra, telpiskā struktūra, pārlūks, apskats, navigators, stāvs, līmenis, grīda, telpa, grupa, klase, paslēpt, rādīt, atlasīt, tuvināt
from: 69de4ab7
---

## Ko jūs darīsit

Redzēt, kā modelis ir salikts, un nokļūt līdz jebkuram elementam, neceļot to 3D: ēka, tās stāvi, telpas katrā stāvā un tajās esošie elementi, grupēti pēc veida (sienas, durvis, pārsegumi…).

## Soļi

1. Atveriet IFC modeli. {{ui:Modeļa koks}} kreisajā pusē atveras līdz stāviem.
2. Noklikšķiniet bultiņu blakus rindai, lai to atvērtu vai aizvērtu. Stāvs vispirms satur savas telpas, tad savus elementus pēc veida ar to skaitu. Elements, kas sastāv no daļām, piemēram, kāpnes, satur savas daļas.
3. Noņemiet atzīmi no rindas rūtiņas, lai paslēptu visu tajā; atzīmējiet to, lai atkal parādītu. Rūtiņa ar svītriņu nozīmē, ka redzama tikai daļa no tajā esošā.
4. Noklikšķiniet uz rindas nosaukuma, lai atlasītu to, ko tas apzīmē: vienu elementu vai visus elementus grupā, stāvā vai telpā. {{key:Mod}}+klikšķis tos pievieno atlasei vai izņem no tās.
5. Noklikšķiniet pogu {{ui:i}} blakus stāvam, telpai vai ēkai, lai redzētu tās pašas īpašības.
6. Dubultklikšķiniet rindu, lai tuvinātu tai.

## Ko jums vajadzētu redzēt

- Kad 3D skatā atlasāt elementu, koks atveras līdz tam un to atzīmē.
- Paslēptie elementi ir pārsvītroti. Koka rūtiņas un {{ui:Rādīt}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) darbojas kopā: skat. [Paslēpt, izolēt un redzēt caur elementiem](topic:hide-and-isolate).
- Elementi, ko modelis nenovieto nevienā stāvā, ir grupā beigās, **Nav telpiskajā struktūrā**.
- Gara grupa rāda 200 rindas vienlaikus; zem tās noklikšķiniet **Rādīt vairāk**, lai redzētu pārējās.

## Taustiņi

Kad fokuss ir uz rindas nosaukuma: {{key:Up}} un {{key:Down}} pārvieto, {{key:Right}} atver, {{key:Left}} aizver vai pāriet uz augšējo līmeni, {{key:Space}} atzīmē rūtiņu, {{key:Enter}} atlasa.

## Biežās kļūdas

- **Stāva rūtiņa ir atzīmēta, bet nekas nerādās.** Saraksts {{ui:Stāvi}} zem koka pats izslēdz veselus stāvus: atzīmējiet arī tur.
- **Rinda neko neatlasa.** Dažas rindas, piemēram, tukša telpa, nesatur elementus, ko var zīmēt; statusa rindā tas ir norādīts.

## Tālāk

- [Dzēst, izgriezt, kopēt un ielīmēt ēkas elementus](topic:edit-elements)
- [Rādīt un paslēpt stāvus, telpas un malas](topic:storeys-and-spaces)
