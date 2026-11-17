---
title: "Dokumenti no modeļa"
summary: "Uzrakstiet specifikāciju vai aprakstu vienreiz kā veidni ar laukiem daudzumiem, īpašībām un birkām, un aizpildiet to no atvērtā IFC kā PDF vai Word dokumentu."
keywords: "dokuments, dokumenti, specifikācija, apraksts, veidne, markdown, atskaite, word, docx, pdf, daudzumi, specifikācijas, nozare, durvju specifikācija, apdare, documentcad"
from: 2b0c9156
---

## Ko jūs darīsiet

Veidne ir teksts Markdown formātā ar laukiem dubultajās figūriekavās. BimCraft aizpilda laukus no atvērtā modeļa (skaitļi, daudzumi pēc tipa, īpašības, jūsu [birkas](topic:tags-and-schedules)) un saglabā rezultātu kā PDF, Word dokumentu (.docx) vai Markdown.

## Soļi

1. Atveriet IFC modeli.
2. Kreisajā panelī zem {{ui:Quantities}} atveriet {{ui:Documents from the model}}.
3. Izvēlieties veidni: {{ui:Doors and hardware}} vai {{ui:Walls, linings and finishes}}, vai {{ui:Load a template (.md)…}} savai.
4. Ja veidne nolasa birkas, ko modelis vēl nedefinē, noklikšķiniet uz {{ui:Add this template’s tags}}, pēc tam piešķiriet birkas elementiem zem {{ui:Tags}}.
5. Mainiet tekstu, kā vēlaties, un noklikšķiniet uz {{ui:Show the document}}.
6. Noklikšķiniet uz {{ui:PDF}} (vispirms izvēlieties A4 vai Letter) vai {{ui:Word (.docx)}}.

## Ko jūs redzēsiet

- Aizpildīto dokumentu zem pogām, ar tā tabulām.
- Brīdinājumu sarakstu, kad lauku nevar nolasīt (birka, kas nav definēta, īpašība, ko modelim nav, bloks, kas nekad netiek aizvērts); tāds lauks tiek drukāts kā `[?…]`.
- PDF lappuses ar dokumenta nosaukumu un "Page 1 of 3" katras lappuses apakšā; garas tabulas pāriet uz nākamo lappusi kopā ar galvenes rindu.

## Lauki

| Lauks | Dod |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projekta nosaukumu un aprakstu, faila nosaukumu, šodienas datumu |
| `{{count IfcDoor}}` | cik durvju |
| `{{sum IfcWall NetSideArea}}` | kopsummu ar tās mērvienību |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmētiku (`+ - * /` un iekavas) pār izteiksmēm kvadrātiekavās: `[sum …]`, `[count …]`, un `[qty Width]` iekšā `{{#each}}`. `round n` nosaka decimāldaļas, `unit` pievieno mērvienību. Kaut kas, ko tā nevar nolasīt, vai dalīšana ar nulli, tiek drukāts kā `[?…]` un rada brīdinājumu |
| `{{qty IfcWall NetSideArea by Type}}` | tabula: viena rinda katram tipam ar tā skaitu un kopsummu, un kopsummas rinda |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabula, viena rinda katram elementam |
| `{{tag Finish}}` | cilpā: elementa vērtība; citur: visas izmantotās vērtības (Oak, Paint) |
| `{{tags}}` | birku definīcijas kā tabula |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teksts vienu reizi katram elementam; daļa pēc `{{else}}`, ja tādu nav |
| `{{#group IfcWall by Type}} … {{/group}}` | teksts vienu reizi katram tipam, ar `{{value}}`, `{{count}}`, `{{sum Length}}` un vienkāršu `{{#each}}` iekšā |

Iekšā `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC birka), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (paša elementa, ar tā mērvienību).

Klase var būt vairākas (`IfcDoor|IfcWindow`) vai katrs elements (`*`). Jebkuru no tām var sašaurināt ar `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testi ir `=`, `!=`, `~` (satur), `>`, `<`, `>=`, `<=`, `has` un `hasnot`; vairākus savieno ar `and`; vērtību ar atstarpēm liek pēdiņās. `sort Name` sakārto cilpu.

## Specifikācijas un specifikācija dokumentā

`{{schedule doors}}` drukā modeļa specifikāciju kā tabulu jūsu biroja izkārtojumā: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, vai nosaukumu iestatījumam, ko saglabājāt sadaļā Specifikācijas. `{{specification}}` drukā projekta specifikāciju. Veidnes **Darba rasējumu specifikācijas** un **Specifikācija** tos izmanto. Priekšskatījumā noklikšķiniet uz tādas specifikācijas skaitļa, lai atlasītu elementus, no kuriem tas nācis. Skatiet [Izkārtojiet, saglabājiet un eksportējiet specifikāciju](topic:schedule-layouts) un [Uzrakstiet specifikāciju no modeļa](topic:specification).

## Lietderīgi zināt

- Lauks nosauc iebūvētu nosaukumu (Name, Type, Storey, Class, Material, Mark), birku (`tag:Fire rating` vai tās nosaukumu), īpašību (`Pset_WallCommon.FireRating`) vai tikai īpašības nosaukumu (`NetSideArea`, `Width`): kails nosaukums nolasa katra elementa pašu kopu, vispirms daudzumu kopas, tāpēc `Width` durvīm ir durvju platums, nevis sienas biezums. Iekšā `where` kails nosaukums nolasa kopu, kuru vairumam izvēlēto elementu ir.
- Daudzumi ir tas, ko faila daudzumu kopas saka (BimCraft tās raksta tam, ko zīmē); mērvienības nāk no faila mērvienību iestatījumiem.
- Lauku vārdi (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) visās valodās paliek angļu valodā. Piemēru veidnes ir angļu valodā.
- Teksts no modeļa nekad nekļūst par formatējumu: nosaukums ar `*` vai `|` tiek drukāts kā tāds ir.
- Veidni, ko mainījāt, saglabājiet ar {{ui:Keep in this browser}} (tā ir tikai šajā pārlūkprogrammā) vai {{ui:Download the template}}.
- PDF teksts izmanto standarta PDF fontus: rakstzīme ārpus Rietumeiropas teksta tiek drukāta kā "?", un statusa rindā norādīts, cik to ir.
- Veidnes pa nozarēm atrodas bibliotēkā (veids Dokumenta veidne). Dokumentos no modeļa izvēlieties **No bibliotēkas…**, izvēlieties vienu, un tās teksts un birkas, ko tā nolasa, ienāk; rediģējiet, kā vēlaties. Savas veidnes publicēšana bibliotēkā ir tāda pati augšupielāde kā jebkuram citam vienumam. Vēl nav izveidots: aprēķini, kas pārsniedz skaitus un kopsummas.
