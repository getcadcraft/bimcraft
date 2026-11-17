---
title: IFC īpašību maiņa un rediģētas kopijas saglabāšana
summary: Mainiet elementa nosaukumu, marķējumu, aprakstu vai īpašuma vērtību, atsaukiet izmaiņas un lejupielādējiet jaunu IFC failu, kamēr oriģināls paliek nemainīts.
keywords: rediģēt, mainīt, īpašības, parametri, marķējums, nosaukums, pārdēvēt, marķēt, saglabāt kā, lejupielādēt, atsaukt, kopēt, ifc, rakstīt
from: f8035d62
---

## Ko jūs darīsiet

Labojiet datus IFC modelī: pārdēvējiet elementu, izlabojiet tā marķējumu, mainiet īpašuma vērtību. Pēc tam saglabājiet jaunu IFC failu ar savām izmaiņām. Atvērtais fails nekad netiek aizskarts.

## Ko var mainīt

| Lauks | Rediģējams |
|---|---|
| Nosaukums, Objekta tips, Marķējums, Apraksts | Jā |
| Atsevišķas īpašuma vērtības (teksts, skaitļi, Jā/Nē) | Jā |
| Tipa īpašumi (kopas, atzīmētas „(type)”) | Jā, un izmaiņa attiecas uz katru šī tipa elementu |
| Tips, GlobalId, Līnija | Nē |
| Daudzumi (garumi, laukumi, tilpumi, skaits) | Nē |
| Saraksti, uzskaitījumi un citas daudzdaļīgas vērtības | Nē |
| Ģeometrija, novietojums, elementu pievienošana vai dzēšana | Nē |

## Soļi

1. Atveriet IFC modeli un noklikšķiniet uz elementa, ko vēlaties mainīt.
2. Panelī {{ui:Rekvizīti}} noklikšķiniet uz vērtības, ko vēlaties mainīt. Tā pārvēršas teksta lodziņā. Tukša vērtība tiek rādīta kā *tukša*.
3. Ierakstiet jauno vērtību.
4. Nospiediet {{key:Enter}} vai noklikšķiniet citur, lai to saglabātu. Nospiediet {{key:Esc}}, lai atceltu.
5. Paskatieties uz vērtību: tagad tā ir treknrakstā ar zilu joslu blakus, kas atzīmē rediģētu vērtību.
6. Paskatieties uz sadaļu {{ui:Izmaiņas}} pa kreisi: izmaiņa uzskaitīta kā *elements*: *lauks*, vecā vērtība uz jauno vērtību.
7. Atkārtojiet citām vērtībām vai citiem elementiem.
8. Noklikšķiniet uz {{ui:Saglabāt kā IFC}} (tur rādās, cik izmaiņu gaida, piemēram, „Saglabāt kā IFC (3)”), vai nospiediet {{key:Mod+S}}.
9. Atrodiet „*sākotnējais nosaukums* (rediģēts).ifc” savā lejupielāžu mapē.

## Ko jums vajadzētu redzēt

Statusa rindā rādās „Saglabāts *nosaukums* (rediģēts).ifc ar *n* izmaiņām (… baiti). Jūsu oriģinālais fails nav mainīts.” Saraksts {{ui:Izmaiņas}} tiek iztukšots, gatavs nākamajai kārtai.

## Vērtību veidi

- **Teksts:** viss, ko ierakstāt, tiek saglabāts kā ir. Nosaukuma, Objekta tipa, Marķējuma vai Apraksta notīrīšana noņem vērtību.
- **Skaitļi:** ierakstiet vienkāršu skaitli, piemēram, `2.4` vai `1200`, faila pašās vienībās. Bez mērvienību simboliem. Citādi parādās „Ierakstiet skaitli.”
- **Veseli skaitļi** (skaits, veseli skaitļi): „Ierakstiet veselu skaitli.”, ja ierakstāt decimāldaļu.
- **Jā/Nē:** vērtība kļūst par izvēlni ar Jā un Nē.

Katra vērtība saglabā savu IFC tipu, tātad skaitlis paliek skaitlis, un citas programmas to nolasa pareizi.

## Atsaukšana

1. Noklikšķiniet uz {{ui:Atsaukt}} sadaļā {{ui:Izmaiņas}} vai nospiediet {{key:Mod+Z}}, kamēr neraksiet laukā.
2. Atkārtojiet, lai atsauktu vairāk. Katra atsaukšana noņem jaunāko izmaiņu.

Nevar atsaukt pāri saglabāšanai: pēc saglabāšanas saraksts sākas no jauna. Saglabātais fails satur visu.

## Kāpēc jūsu rediģējums maina tikai vienu elementu

Eksportētāji taupa vietu, kopīgojot datus. Viena īpašumu kopa var būt kopīga ar divdesmit durvīm, un viena vērtība („Ugunsdrošība: 60 min”) var būt uzskaitīta deviņdesmit kopās. Ja BimCraft vienkārši mainītu kopīgo vērtību, katrs elements, kas to kopīgo, mainītos arī.

Tādēļ BimCraft pirms rakstīšanas kopē:

- Ja īpašumu kopa, ko rediģējat, ir kopīga ar citiem elementiem, jūsu elements saņem savu kopiju, un mainās tikai kopija.
- Ja vērtība ir kopīga ar citām kopām, jūsu kopa saņem savu vērtības kopiju.

Kaimiņi paturi savus vecos datus. To sauc par *copy-on-write*. Tas pievieno failam dažus mazus ierakstus, ko katra IFC programma nolasa normāli.

**Tipa īpašumi ir tīšs izņēmums.** Kopa, kas atzīmēta „(type)”, pieder elementa tipam, un IFC katrs šī tipa elements to nolasa no turienes. Ja to mainīt, mainās tips, tātad katrs šī tipa elements rāda jauno vērtību. Sadaļā {{ui:Izmaiņas}} šādas izmaiņas atzīmētas ar „(type)”. Sk. [Mainīt tipa īpašumu katram tipa elementam](topic:type-vs-instance).

## Brīdinājumi pirms darba zaudēšanas

- Atverot citu failu, kamēr jums ir nesaglabātas izmaiņas, parādās jautājums „Jums ir *n* nesaglabātas izmaiņas failā *fails*. Atmest tās?” Noklikšķiniet uz {{ui:Atcelt}}, lai turpinātu strādāt, un pēc tam saglabājiet.
- Aizverot vai pārlādējot cilni ar nesaglabātām izmaiņām, pārlūkprogramma jautā, vai atstāt lapu.

## Biežākās kļūdas

- **Vienību ierakstīšana.** `2400 mm` tiek noraidīts. Ierakstiet `2400`.
- **Tipa īpašuma maiņa, kad domājāt vienu elementu.** Pirms rakstīšanas meklējiet piezīmi „(type)”. Ja vēlaties, lai viens elements atšķiras, mainiet eksemplāra īpašumu vai tā Marķējumu vai Nosaukumu.
- **Sagaidīt, ka oriģinālais fails mainīsies.** Saglabāšana vienmēr lejupielādē jaunu failu. Aizstājiet oriģinālu pats, ja tā vēlaties, un paturiet kopiju.
- **Nospiežot {{key:Mod+S}} bez izmaiņām.** BimCraft saglabā tikai tad, kad ir, ko saglabāt; citādi var atvērties pārlūkprogrammas pašas „Saglabāt lapu”. Aizveriet to.
- **Saglabājot divreiz un sagaidot divus mazus failus.** Katra saglabāšana satur katru rediģējumu kopš modeļa atvēršanas.
- **Sagaidīt, ka rediģējumi atgriezīsies projekta failā.** BimCraft raksta tikai IFC. Ievietojiet rediģēto IFC savā autorēšanas programmā tāpat kā jebkuru IFC importu.
