---
title: Dokumentai iš modelio
summary: Vieną kartą parašykite specifikaciją ar aprašymą kaip šabloną su laukais kiekiams, savybėms ir žymoms ir užpildykite jį iš atidaryto IFC kaip PDF ar Word dokumentą.
keywords: dokumentas, dokumentai, specifikacija, spec, aprašymas, šablonas, markdown, ataskaita, word, docx, pdf, kiekiai, žiniaraštis, specialybė, durų žiniaraštis, apdaila, documentcad
from: 2b0c9156
---

## Ką darysite

Šablonas yra tekstas Markdown formatu su laukais dvigubuose skliaustuose. BimCraft užpildo laukus iš atidaryto modelio (skaičiai, kiekiai pagal tipą, savybės, jūsų [žymos](topic:tags-and-schedules)) ir išsaugo rezultatą kaip PDF, Word dokumentą (.docx) arba Markdown.

## Žingsniai

1. Atidarykite IFC modelį.
2. Kairėje srityje, po {{ui:Kiekiai}}, atidarykite {{ui:Dokumentai iš modelio}}.
3. Pasirinkite šabloną: {{ui:Durys ir furnitūra}} arba {{ui:Sienos, pamušalai ir apdaila}}, arba {{ui:Įkelti šabloną (.md)…}} savo.
4. Jei šablonas skaito žymas, kurių modelis dar neapibrėžia, spustelėkite {{ui:Pridėti šio šablono žymas}}, tada pažymėkite elementus skiltyje {{ui:Žymos}}.
5. Pakeiskite tekstą, kaip norite, ir spustelėkite {{ui:Rodyti dokumentą}}.
6. Spustelėkite {{ui:PDF}} (pirmiausia pasirinkite A4 arba Letter) arba {{ui:Word (.docx)}}.

## Ką turėtumėte matyti

- Užpildytą dokumentą po mygtukais, su jo lentelėmis.
- Įspėjimų sąrašą, kai lauko nepavyksta perskaityti (žymos, kuri neapibrėžta, savybės, kurios modelis neturi, bloko, kuris niekada neuždaromas); toks laukas spausdinamas kaip `[?…]`.
- PDF puslapius su dokumento pavadinimu ir „1 puslapis iš 3“ kiekvieno puslapio apačioje; ilgos lentelės perkeliamos su antraštės eilute.

## Laukai

| Laukas | Duoda |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projekto pavadinimą ir aprašymą, failo pavadinimą, šiandieną |
| `{{count IfcDoor}}` | kiek yra durų |
| `{{sum IfcWall NetSideArea}}` | bendrą sumą su jos vienetu |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetiką (`+ - * /` ir skliaustus) per narius laužtiniuose skliaustuose: `[sum …]`, `[count …]`, o cikle – `[qty Width]`. `round n` nustato dešimtainius, `unit` prideda vienetą. Ko nepavyksta perskaityti arba dalyba iš nulio, spausdinama `[?…]` ir įspėjama |
| `{{qty IfcWall NetSideArea by Type}}` | lentelę: viena eilutė kiekvienam tipui su jo kiekiu ir suma, ir bendros sumos eilutę |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | lentelę, viena eilutė kiekvienam elementui |
| `{{tag Finish}}` | cikle – elemento reikšmę; kitur – visas naudotas reikšmes (Ąžuolas, Dažai) |
| `{{tags}}` | žymų apibrėžimus lentelėje |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | tekstą kartą kiekvienam elementui; dalį po `{{else}}`, kai jų nėra |
| `{{#group IfcWall by Type}} … {{/group}}` | tekstą kartą kiekvienam tipui, su `{{value}}`, `{{count}}`, `{{sum Length}}` ir paprastu `{{#each}}` viduje |

Cikle `{{#each}}` viduje: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC žyma), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (paties elemento, su jo vienetu).

Klasė gali būti kelios (`IfcDoor|IfcWindow`) arba visi elementai (`*`). Bet kurią iš jų susiaurinkite su `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testai yra `=`, `!=`, `~` (turi), `>`, `<`, `>=`, `<=`, `has` ir `hasnot`; kelis jungia `and`; reikšmę su tarpais dėkite į „kabutes“. `sort Name` surikiuoja ciklą.

## Žiniaraščiai ir specifikacija dokumente

`{{schedule doors}}` spausdina modelio žiniaraštį lentele pagal jūsų biuro išdėstymą: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, arba jūsų Žiniaraščiuose išsaugoto išdėstymo pavadinimą. `{{specification}}` spausdina projekto specifikaciją. Šablonai **Darbo brėžinių žiniaraščiai** ir **Specifikacija** juos naudoja. Peržiūroje spustelėkite tokio žiniaraščio skaičių, kad pažymėtumėte elementus, iš kurių jis gautas. Žr. [Išdėstykite, išsaugokite ir eksportuokite žiniaraštį](topic:schedule-layouts) ir [Parašykite specifikaciją iš modelio](topic:specification).

## Verta žinoti

- Laukas nurodo įmontuotą (Name, Type, Storey, Class, Material, Mark), žymą (`tag:Fire rating` arba jos pavadinimą), savybę (`Pset_WallCommon.FireRating`) arba tik savybės pavadinimą (`NetSideArea`, `Width`): plikas pavadinimas skaito kiekvieno elemento paties rinkinį, pirmiausia kiekių rinkinius, todėl `Width` ant durų yra durų plotis, o ne sienos storis. Viduje `where` plikas pavadinimas skaito rinkinį, kurį turi dauguma pasirinktų elementų.
- Kiekiai yra tai, ką sako failo kiekių rinkiniai (BimCraft juos įrašo tam, ką nubraižo); vienetai ateina iš failo vienetų nustatymų.
- Lauko žodžiai (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) visose kalbose lieka anglų kalba. Pavyzdiniai šablonai yra anglų kalba.
- Tekstas iš modelio niekada netampa formatavimu: pavadinimas su `*` ar `|` spausdinamas kaip yra.
- Pakeistą šabloną išsaugokite su {{ui:Saugoti šioje naršyklėje}} (tik ši naršyklė jį turi) arba {{ui:Atsisiųsti šabloną}}.
- PDF tekstas naudoja standartinius PDF šriftus: simbolis, esantis už Vakarų Europos teksto ribų, spausdinamas kaip „?“, o būsenos eilutė parodo, kiek jų buvo.
- Šablonai pagal specialybę gyvena Bibliotekoje (rūšis: Dokumento šablonas). Skiltyje Dokumentai iš modelio pasirinkite **Iš bibliotekos…**, pasirinkite vieną, ir jo tekstas bei žymos, kurias jis skaito, įkeliami; redaguokite pagal norą. Savo šablono paskelbimas bibliotekoje yra toks pats įkėlimas kaip ir bet kurio kito elemento. Dar nepadaryta: skaičiavimai, išskyrus skaičius ir sumas.
