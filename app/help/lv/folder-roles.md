---
title: Mapes pārskats: lomas, statusi un saites
summary: Katra etiķete mapes pārskatā, ko tā nozīmē un kā tiek izvēlēts ieteikums "Sākt šeit".
keywords: mapes pārskats, lomas, statuss, pabeigts, nepabeigts, nelasāms, saistīts, fons, sākotnējais, centrālais, ģimene, tikai dublējumi, sākt šeit, saites statuss
from: b35bdd10
---

## Kopijas statuss

Katra modeļa kopija — gan galvenais fails, gan numurētie dublējumi — tiek pārbaudīta pēc galvenes.

| Etiķete | Nozīme |
|---|---|
| **Pabeigts** | Faila galvene un rādītājs ietilpst failā |
| **Nepabeigts** | Fails ir īsāks, nekā norāda tā paša rādītājs: tas tika pārtraukts kopēšanas, augšupielādes vai sinhronizācijas laikā, vai arī tas ir mākoņa fails, kas joprojām ir tikai "tikai tiešsaistē" |
| **Nelasāms** | Fails nav derīgs saliktais fails vai nevarēja tikt nolasīts |

Kolonnā **Statuss** modelis rāda **Pabeigts**, dzeltenu "*n* nepabeigts", ja vismaz viena kopija ir bojāta, bet cita ir veselīga, vai sarkanu **Nepabeigts**, ja nav neviena veselīga eksemplāra.

## Dublējumi

Faili ar nosaukumiem `Name.0001.rvt`, `Name.0002.rvt` un tā tālāk ir `Name.rvt` numurētie dublējumi. Tie tiek grupēti zem sava modeļa, jaunākais pirmais, sadaļā **Visas … kopijas**. Kartīte tiek nolasīta no galvenā faila, ja tas ir pabeigts, citādi no jaunākā pabeigtā dublējuma ("jaunākā pabeigtā").

## Lomas

Rāda slīprakstā zem modeļa nosaukuma.

| Loma | Nozīme |
|---|---|
| Saistīts ar *citu modeli*: fons | Cits modelis mapē saista šo, tātad tas, visticamāk, ir kāda cita fons, piemēram, konsultanta modelis |
| Sākotnējais vai bez nosaukuma fails | Nosaukums, piemēram, Blank, Template, Default, Untitled vai Project1: sākumpunkts vai fails, kas nekad nav pareizi nosaukts |
| Centrālais modelis | Kopīgi lietojams centrālais modelis. Darbs notiek vietējā kopijā, nevis šeit |
| Ģimene (detaļa) | `.rfa` vai `.rft` fails: komponents, nevis projekts |
| Tikai dublējumi | Galvenais fails ir zudis, un palikuši tikai numurētie dublējumi |

## Kā tiek izvēlēts "Sākt šeit"

BimCraft piemēro to pašu spriedumu, ko izmantotu pieredzējis lietotājs:

1. Kandidāti ir nolasāmi projekta faili (`.rvt`, `.rte`), kurus nesaista cits modelis un kuri nav sākotnējie.
2. Centrālie un tikai dublējumu modeļi tiek ņemti vērā tikai tad, ja nav nekā labāka.
3. No kandidātiem uzvar tas, kas saglabāts visnesen.

Lodziņā ir uzskaitīti tā iemesli, un tas brīdina, ja fails, kas šķiet acīmredzamā izvēle, ir bojāts, ja citi modeļi ir fons un ja izvēle ir centrālais modelis. Tas ir labākais minējums; pārbaudiet ar to, kurš pēdējais strādāja pie projekta.

## Saites statuss

| Etiķete | Nozīme |
|---|---|
| **Šajā mapē** | Atrasts saglabātajā relatīvajā ceļā vai saglabātā pilnā ceļa beigās mapē |
| **Atrasts ar tādu pašu nosaukumu** | Nav savā ceļā, bet mapē ir fails ar tādu pašu nosaukumu. Pārbaudiet, vai tas ir pareizais |
| **Bibliotēkas fails** | Atslēgvārdu vai montāžas kodu tabula. Tās nāk kopā ar programmu katrā datorā |
| **Nav šajā mapē** | Nav atrasts nekur mapē |

Kolonna **Atrastās saites** sadaļā **Modeļi** rāda, cik no modeļa saitēm ir atrastas no tām, kas mapē sagaidāmas (bibliotēkas faili netiek skaitīti).

## Atlikts malā

| Rinda | Nozīme |
|---|---|
| Revit tīrīšanas mapes (netiek nolasītas) | Mapes `*_backup`, `*_log` un `Revit_temp`, kā arī slēptās mapes un `__MACOSX` |
| Bloķēšanas, žurnāla un dublējumu atlikumi | Faili `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` un `.slog` |
| Citi faili | Viss pārējais (pirmie 40 ir nosaukti) |
