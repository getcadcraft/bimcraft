---
title: Žiniaraščiai, matmenys ir plano PDF
summary: Durų, langų, sienų ir patalpų žiniaraščiai, kurie keičiasi jums braižant, matmenys plane ir aukšto planas, įrašytas kaip PDF standartiniu mastelio.
keywords: žiniaraštis, durų žiniaraštis, langų žiniaraštis, sienų žiniaraštis, patalpų žiniaraštis, kiekiai, kiekių skaičiavimas, plotas, csv, skaičiuoklė, matmenys, matmuo, spausdinti, pdf, spausdinimas, mastelis, 1/4", 1:50, lapas
from: d97cd16e
---

## Ką darysite

Matykite, kiek sudaro pastatas, kurį braižote: kiek durų ir langų kiekvieno dydžio, kiek sienos kiekvieno tipo, kokio dydžio kiekviena patalpa. Įdėkite matmenis plane ir įrašykite jį kaip PDF, kad spausdintumėte ar siųstumėte.

## Žiniaraščiai

Įjungus {{ui:Braižymas}}, kairiajame skydelyje **Žiniaraščiai** rodo po vieną lentelę:

- **Durys** ir **Langai**: kiekvienas pagal savo žymą (D1, D2 … ir W1 …, nurodytas braižant), tipą, plotį, aukštį (ir palangę), lygį bei sieną, kurioje jis yra.
- **Sienos pagal tipą**: kiekvienam sienos tipui – kiek sienų, jų storis, bendras ilgis ir šoninis plotas kaip **Bendras plotas**, **Atskaitos** ir **Grynas plotas**, su suma.
- **Patalpos**: numeris, pavadinimas, lygis, plotas ir perimetras, su bendru plotu.
- **Grindys**: kiekvienos grindys su lygiu, rūšimi ir storiu, bei jų bendras plotas, atskaitos ir grynas plotas.
- **Apdailos**: kiekvienas sienos tipo apdailos sluoksnis (pagal medžiagą ir sienos pusę) ir lubos, su paviršių skaičiumi ir bendru, atskaitomis ir grynu plotu.
- **Sienų tipai: kiekių duomenys**: ką kartą įvedėte kiekviename sienos tipe (vienetas, skiedinys, norma), su sienų skaičiumi, jų ilgiu ir grynu plotu, bei norma, padauginta iš išmatuoto kiekio. Žr. [Sienų konstrukcijos](topic:wall-assemblies).

- **Apdailos pagal patalpą**, **Apdailos pagal sieną**, **Apdailos pagal zoną** ir **Apdailų kiekiai**: kas dengia kiekvieną patalpą, su plotais, plytelių skaičiumi įskaitant pjūvius ir pagrindo tūriais. Žr. [Patalpų apdailos ir apdailų žiniaraščiai](topic:room-finishes).
- Jūsų **nustatymai**: žiniaraštis, kurį sugrupavote, sudėjote ir įrašėte pavadinimu. Žr. [Išdėstykite, įrašykite ir eksportuokite žiniaraštį](topic:schedule-layouts).

Lentelės keičiasi su kiekvienu redagavimu. Spustelėkite eilutę ar vieną skaičių, kad pasirinktumėte elementus, iš kurių jis gautas. **Atsisiųsti CSV** įrašo lentelę atidarymui skaičiuoklėje; **Atsisiųsti Excel** ir **Kopijuoti Google Sheets** yra po ja. **Patalpų apdailos** ir **Specifikacija** ([Parašykite specifikaciją iš modelio](topic:specification)) atidaromos iš tos pačios vietos.

## Plotas ir tūris kiekvienam sluoksniui

Pasirinkite **Sluoksniai: plotas ir tūris** žiniaraščių sąraše. Jame viena eilutė kiekvienam sluoksniui kiekvieno naudojamo sienos, grindų, stogo ir lubų tipo: elementas, tipas ir jo LOD, sluoksnis (skaičiuojamas nuo išorinės sienos pusės, nuo grindų, stogo ar lubų viršaus), jo medžiaga ir funkcija, storis, elementų skaičius, **grynas plotas** ir **tūris**.

- Plotas yra to tipo elementų grynas plotas, išmatuotas tiksliai kaip sienų pagal tipą, grindų ir apdailų lentelėse, pagal projekto matavimo metodą. Stogas matuojamas pagal šlaitą; jokiame matavimo metode stogams taisyklių nėra.
- Tūris yra tas plotas, padaugintas iš paties sluoksnio storio.
- Grindys, stogas ar lubos be tipo yra viena eilutė: vienas sluoksnis savo storio.
- Oro tarpas išvardijamas su savo plotu ir neįtraukiamas į bendrą tūrį. Membrana turi plotą, bet ne tūrį.

Spustelėkite eilutę, kad pasirinktumėte jos elementus. **Atsisiųsti CSV** įrašo lentelę.

## Kaip matuojami plotai

Kiekvienas plotas yra trys skaičiai, kurie susideda: bendras atėmus atskaitas lygu grynam. Taisyklė parašyta virš kiekvienos iš šių lentelių, ir ji viena: žiniaraščiai, IFC faile įrašyti kiekiai ir TakeoffCraft perduotas kiekių skaičiavimas naudoja ją visi.

- **Siena**: bendras plotas yra viena sienos pusė, jos ilgis išilgai ašinės linijos, padaugintas iš aukščio (tikras paviršius sienai su formuotu viršumi ar pamatu). Kiekviena durys, langas ar kita anga atimama: plotis padaugintas iš aukščio, kiekviena anga – vieną kartą.
- **Grindys ar lubos**: bendras plotas yra plotas kontūro viduje. Kiekviena anga ir išpjova viduje atimama vieną kartą.
- **Sienos apdaila**: kiekvienas sienos tipo apdailos sluoksnis dengia vieną sienos pusę, matuojamą kaip siena, su tomis pačiomis atimamomis angomis. Apdaila yra sienos sluoksnis: ji išvardijama skyriuje Apdailos ir nepridedama prie sienos ploto, todėl siena su durimis niekada neskaičiuojama dukart.

Tai yra **CadCraft numatytasis**: atimama kiekviena anga, nepriklausomai nuo jos dydžio; sienų ilgiai matuojami išilgai ašinės linijos; angų šonai nematuojami. Tai naudoja kiekvienas projektas, kol pasirenkate kitą metodą.

## Matavimo metodo pasirinkimas

Virš žiniaraščio **Matavimo metodas** išvardija metodus, kurie pateikiami su BimCraft, o **Įkelti metodo failą** priima jūsų biuro metodą. Pasirinkimas išsaugomas IFC faile kaip vienas anuliavimo žingsnis, ir trys dalykai seka iš karto: žiniaraščiai, IFC faile išsaugoti grynieji kiekiai ir TakeoffCraft perduotas kiekių skaičiavimas. Taisyklė virš kiekvienos lentelės tada prasideda metodu, jo šaltiniu, data, kada šaltinis buvo perskaitytas, ir žodžiais **Nepatikrino kiekių matuotojas**.

Metodas yra nedidelis faktų failas, o ne programos kodas. Kiekvienam kiekiui jis nurodo:

- **mažiausią atimamą angą**: pavyzdžiui, anga 0.5 m² ar mažesnė lieka sienos plote;
- **kaip matuojamos sienų jungtys**: išilgai ašinės linijos; arba siena, kuri baigiasi prie kitos, matuojama iki tos sienos paviršiaus; arba kiekvienas sienos galas, susijungiantis su kita siena, matuojamas iki artimo paviršiaus;
- **ar angų šonai matuojami apdailai** (apdailos grįžimai į angas), kaip plotas arba, kai jie seklūs, kaip ilgis. Angų šono gylis imamas kaip pusė sienos storio;
- **ką jis sako apie mūrą**: kaip jis matuojamas ir kokią atliekų ar skiedinio normą nurodo.

Metodai, kurie pateikiami su BimCraft:

| Metodas | Sienos: mažiausia atimama anga | Sienų apdailos | Lubos | Mūras |
|---|---|---|---|---|
| CadCraft numatytasis | kiekviena anga | kiekviena anga | kiekviena išpjova | be normų |
| RICS NRM 2 (Jungtinė Karalystė), 2-as leidimas 2021 | 0.5 m² ar mažiau lieka | 1 m² ar mažiau lieka | 1 m² ar mažiau lieka | pagal plotą; procentų nenurodyta |
| AAQS Standard Method for Africa 2015 | 0.5 m² ar mažiau lieka | 0.5 m² ar mažiau lieka | 0.5 m² ar mažiau lieka | pagal plotą; matuojama grynai, 0% atliekų |
| IS 1200 (Indija), 1976, mūro darbai | 0.1 m² ar mažiau lieka | numatytasis (žr. žemiau) | numatytasis | pagal tūrį |
| BIA Technical Note 10 (Jungtinės Valstijos), 2009 | kiekviena anga | numatytasis | numatytasis | 5% atliekų vienetams, 15% skiedinio |

Perskaitykite šiuos apribojimus prieš pasikliaudami metodu:

- **Nė vienas kiekių matuotojas jų netikrino.** Kiekvienas buvo padarytas perskaičius nurodytą šaltinį ir įrašius jo skaičius su klauzule, iš kurios jie kyla. Jei esate kiekių matuotojas ir galite patikrinti vieną, programos kūrėjai norėtų su jumis susisiekti.
- Kur taisyklė negalėjo būti perskaityta iš šaltinio, metodas tam nurodo **nepatvirtinta**, ir naudojamas CadCraft numatytasis. Joks BimCraft metodas neturi patvirtintos taisyklės sienų jungtims, angų šonams ar grindims, todėl jos pagal visus matuojamos numatytu būdu.
- IS 1200 atima angas tinkuose trijose juostose. Metodo failas dar negali turėti juostų, todėl sienų apdailoms tame metode naudojamas numatytasis, ir taisyklė tai nurodo.
- Pietų Afrikos standartinė statybos darbų matavimo sistema **nėra** tarp jų: jos tekstas nebuvo galimas perskaityti. AAQS metodas Afrikai sako, kad jis paremtas tos sistemos 1991 m. leidimu, bet tai kitas dokumentas.
- BIA Technical Note 10 yra pramonės skaičiavimo pastaba, o ne standartinis matavimo metodas.
- Anga, kuri yra tiksliai mažiausio dydžio, seka metodo paties žodžius („ne didesnė“, „mažesnė“). Dydžiai per 2 dalis iš 10 000 nuo jo laikomi tiksliai tokiais.
- Pagal metodą failo grynasis sienos šoninis plotas ir grindų ar lubų grynasis plotas seka metodą, o kiekių rinkinys tai nurodo. Bendri plotai ir tūriai faile lieka tokie, kokie nubraižyti.

**Pastabos apie šį metodą** po pasirinkėju nurodo, ką kiekvienas šaltinis palieka neaiškų. **Atidaryti šaltinį** nuveda į dokumentą.

### Jūsų biuro metodas

Metodo failas yra JSON formato `cadcraft-measurement-method`. Kiekviena reikšmė jame nurodo klauzulę, iš kurios ji kyla; reikšmė be klauzulės atmetama. Failas tikrinamas, kai jį įkeliate: neteisingas laukas įvardijamas, ir nieko iš failo, kuris neišlaiko patikros, nenaudojama. Pasirinktas failas išsaugomas projekte, todėl projektas atsidaro taip pat kitame kompiuteryje. Jo id yra jūsų pačių paprastas pavadinimas (jis gali nesutapti su programoje pateikiamo metodo id).

## Plytos, blokai ir skiedinys

**Sienų tipai: kiekių duomenys** suskaičiuoja vienetus ir skiedinį kiekvienam sienos tipui, kurio vienetas turi ilgį ir aukštį (žr. [Suteikite tipui jo kiekių duomenis](topic:wall-assemblies#give-a-type-its-takeoff-data)). Tai yra formulės, tiksliai taip, kaip skaičiuojamos:

- **Vienetai vienam sluoksniui plote** = 1 / ((vieneto ilgis + siūlė) × (vieneto aukštis + siūlė)). 215 × 65 mm plyta su 10 mm siūle: 1 / (225 × 75 mm) = 59.26 per m².
- **Vienetų pločiai per sluoksnį** = (sluoksnio storis + siūlė) / (vieneto plotis + siūlė), suapvalinta iki sveiko skaičiaus, bent 1. 102.5 mm sluoksnis iš 102.5 mm plytų yra 1; 215 mm siena iš tų pačių plytų yra 2.
- **Vienetai** = vienetai vienam plotui × vienetų pločiai per sluoksnį × grynas sienos paviršiaus plotas, sudėti per visus tipo mūro sluoksnius.
- **Vienetai užsakymui** = vienetai × (1 + atliekos % / 100), suapvalinta iki sveiko vieneto. Atliekos įvedamos tipe; jei nieko neįvesta, – metodo, jei jis nurodo; kitu atveju 0%.
- **Skiedinys** = grynas plotas × sluoksnio storis, atėmus vienetų tūrį (vienetai × ilgis × aukštis × plotis), tada pridėjus papildomą procentą, įvestą tipe dėl įdubimų ar perforacijų, tada pridėjus metodo normą, jei jis ją nurodo. Reikia vieneto pločio.

Daroma prielaida: kiekvienas tipo mūro sluoksnis sudarytas iš vieno tipo vieneto; sluoksnis, storesnis už vieno vieneto plotį, skaičiuojamas kaip tiek vieneto pločių, kiekvienas kaip sluoksnis, paklotas išilgai, todėl pjaustyti vienetai, uždaromieji vienetai ir specialios formos neskaičiuojami atskirai; kai joks sluoksnis nepažymėtas kaip sudarytas iš vieneto, šerdies sluoksniai laikomi sluoksniais, ir lentelės virš pastabos tai nurodo. **Kiekis** yra norma, padauginta iš to, kam norma taikoma, o tai dabar gali būti ir vienetas užsakymui, 1000 vienetų užsakymui ar m³ skiedinio.

Žymos yra elementų IFC žymos: pakeiskite ją **Savybėse** (Žyma), ir žiniaraštis seka. Kiekvienam IFC modeliui, braižytam ar ne, [Sudėkite kiekius, išvardykite elementus ir sudarykite erdvių žiniaraštį](topic:quantity-totals) sudeda bet kurią savybę.

## Matmenys

Plane rodomas kiekvienos nubraižytos sienos ilgis išilgai jos išorinio paviršiaus (vidinei sienai – išilgai vieno paviršiaus) ir, sienai su durimis ar langais, grandinė nuo kampų iki kiekvienos angos. {{ui:Matmenys}} modelio juostoje paslepia juos ir vėl parodo.

## Įrašykite planą kaip PDF

1. Parodykite norimą lygį ir nustatykite vienetus **Lygiai** skydelyje.
2. Spustelėkite {{ui:Spausdinti}} modelio juostoje.
3. BimCraft įrašo „<failas> — <lygis>.pdf“: planą juodai baltai didžiausiu standartiniu mastelio, kuris telpa puslapyje (1/4" = 1'-0", 1/8" = 1'-0" … Letter formatu coliais ir pėdomis; 1:50, 1:100 … A4 formatu milimetrais), su užpildytomis sienomis, durimis, langais, patalpų pavadinimais ir plotais, matmenimis ir antrašte su lygiu, failu, pjūvio aukščiu, data ir mastelio.

PDF nubraižytas linijomis ir tekstu, todėl išlieka aštrus bet kokiu mastelių ir jo tekstą galima ieškoti.

## Verta žinoti

- Žiniaraščiai išvardija tai, ką sukūrė braižymo įrankiai. Durys ir langai iš kitos programos rodomi vietoj to kiekių suvestinėje.
- Norėdami įkainoti darbą, perduokite kiekius TakeoffCraft: žr. [Kiekiai TakeoffCraft](topic:takeoff). CSV atsisiuntimas lieka skaičiuoklei.
