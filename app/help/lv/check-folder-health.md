---
title: Mapes pārbaude bojātām kopijām, trūkstošām saitēm un atliekām
summary: Izmantojiet mapes pārskatu, lai atrastu nepilnīgus modeļu failus, izvēlētos jaunāko pilnīgo dublējumu, redzētu, kuras saites trūkst, un atrastu bloķēšanas un pagaidu failus.
keywords: mapes pārbaude, bojāts, korumpēts, nepilnīgs, saīsināts, dublējums, trūkstošas saites, xref trūkst, audits, atliekas, bloķēšanas faili, dwl, bak, nodošana
from: 3025a539
---

## Ko jūs darīsiet

Pirms projekta mapes nodošanas vai darba uzsākšanas pārbaudiet to: vai katrs modelis ir pilnīgs, kurš dublējums ir pēdējais labais un vai visi saistītie faili ir vietā?

## Soļi: bojātas kopijas

1. Atveriet projekta mapi. Sk. [Atvērt visu projekta mapi](topic:open-project-folder).
2. Izlasiet piezīmes zem mapes nosaukuma. Teksts "2 files are incomplete or unreadable. See the models below." nozīmē, ka kaut kas jāapskata.
3. Sadaļā **Models** skatiet kolonnu **Status**. **Complete** ir kārtībā. Dzeltens "1 incomplete" nozīmē, ka viena kopija ir bojāta, bet cita ir sveika. Sarkans **Incomplete** nozīmē, ka sveika kopija nav atrasta.
4. Atveriet **All … copies** zem modeļa ar problēmu. Tajā ir uzskaitīts galvenais fails un katrs numurētais dublējums, jaunākais pirmais, ar izmēru, datumu un statusu.
5. Izlasiet piezīmi virs saraksta, piemēram: "Tower.rvt is incomplete (183.2 MB, should be at least 214.0 MB). The card shows the newest complete copy, Tower.0012.rvt (2025. gada 3. marts)."
6. Noklikšķiniet uz kopijas, ko vēlaties atvērt. Atvērt var tikai pilnīgas kopijas.

## Ko dara veselības pārbaude

Katra modeļa katra kopija tiek ātri pārbaudīta pēc tās galvenes, pa 512 baitiem, tāpēc pat liela modeļu mape tiek pārbaudīta sekundēs. Fails, kura pašu indekss norāda aiz tā beigām, tika nogriezts kopēšanas, augšupielādes vai sinhronizācijas laikā. Mākoņdiska fails, kas vēl ir "tikai tiešsaistē", izskatās tieši tāpat.

Katra modeļa kartīte tiek nolasīta no galvenā faila, ja tas ir sveiks, un no jaunākā sveikā dublējuma, ja tas nav.

## Soļi: trūkstošās saites

1. Meklējiet piezīmi "*n* linked files are not in this folder." zem mapes nosaukuma.
2. Ritiniet līdz **Linked and referenced files**. Trūkstošās saites ir uzskaitītas pirmās.
3. Katrai saitei izlasiet kolonnu **Where**:
   - **In this folder**: atrasts ceļā, ko modelis saglabāja.
   - **Same name found**: fails ar tādu pašu nosaukumu atrodas citur mapē. Pārbaudiet, vai tas ir pareizais.
   - **Library file**: atslēgvārdu vai mezglu koda tabula. Tās katrā datorā nāk kopā ar programmu, tāpēc mapē tās nav gaidāmas.
   - **Not in this folder**: nekur mapē nav atrasts.
4. Izlasiet **Used by**, lai redzētu, kuri modeļi saista katru failu.

BimCraft meklē katru saiti vispirms pēc tās relatīvā ceļa, tad pēc saglabātā ceļa beigām (tātad `\\server\jobs\Tower\Cad\X-Refs\site.dwg` tiek atrasts kā `X-Refs/site.dwg`, ja izvēlējāties mapi `Cad`), tad pēc faila nosaukuma jebkurā vietā mapē.

## Soļi: atliekas

1. Ritiniet līdz **Set aside** pārskata beigās.
2. Izlasiet trīs rindas, kas var parādīties:
   - Uzturēšanas mapes (`*_backup`, `*_log`, `Revit_temp`): netiek nolasītas.
   - Bloķēšanas, žurnāla un dublējumu atliekas: faili, piemēram, `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Tos atstāj programmas, kas avarēja vai bija atvērtas, kad mape tika kopēta. Parasti tos var droši dzēst, kad neviens failus neizmanto.
   - Citi faili: viss pārējais, ko BimCraft nelasa.

## Biežākās kļūdas

- **Bojātā galvenā faila dzēšana, pirms saglabāts labs dublējums.** Vispirms nokopējiet jaunāko pilnīgo dublējumu, tad risiniet bojāto failu.
- **Akla uzticēšanās "Same name found".** Divi dažādi rasējumi var dalīt vienu nosaukumu. Ja šaubāties, atveriet abus.
- **Domāt, ka trūkstošs bibliotēkas fails ir problēma.** Atslēgvārdu un mezglu kodu tabulas dzīvo kopā ar programmu katrā datorā.
- **Failu skaits atšķiras starp pārlūkprogrammām.** Firefox un Safari pārlūkprogrammās {{ui:Atvērt mapi}} nodod katru failu, arī tos, kas atrodas uzturēšanas mapēs, tāpēc skaitā (un 20 000 failu ierobežojumā) tie ietilpst. Mapes ievilkšana skaita tos neiekļauj, tāpat kā Chrome un Edge. Pārskats citādi ir tāds pats.
