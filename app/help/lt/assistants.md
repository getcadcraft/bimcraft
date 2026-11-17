---
title: Leiskite DI asistentui dirbti su jūsų modeliu
summary: Įjunkite asistentus Parametruose, kad kompiuteryje esantis asistentas galėtų rasti elementus, perskaityti jų savybes, izoliuoti juos vaizde ir braižyti sienas, duris, langus, perdangas, lygius bei tinklelius per CadCraft Studio. Išjungta, kol neįjungsite.
keywords: dirbtinis intelektas, ai, asistentas, mcp, scenarijus, automatizavimas, studio, rasti elementus, izoliuoti, savybės, leidimai, atjungti, veikla, braižyti sienas, pridėti duris, pridėti langus, lygiai, tinkleliai, perdangos, anuliuoti, įrašyti, komandinė eilutė, cli, be lango, naudoti su DI asistentais
from: c5ee595b
---

## Ką sužinosite

Kaip leisti DI asistentui (bet kuriam asistentui, kuris kalba MCP) pažvelgti į atidarytą IFC modelį ir jame braižyti, ką jis gali ir ko negali, bei kaip jį sustabdyti.

## Ką asistentas gali padaryti BimCraft

| Jis prašo | Kas vyksta | Reikia |
|---|---|---|
| Rasti elementus | Gauna elementų sąrašą pagal klasę, aukštą, pavadinimą ar savybės reikšmę, kaip ją daro **Rasti** | Skaitymas |
| Skaityti savybes | Gauna vieno elemento atributus, tipą, savybių rinkinius ir kiekius, kaip juos rodo **Savybės** | Skaitymas |
| Aprašyti modelį, išvardyti sienas | Gauna lygius, sienas, duris, langus, patalpas, perdangas, tinklelius ir kolonas bei kiekvienos sienos galus, tipą ir aukštį | Skaitymas |
| Izoliuoti, padaryti permatomą, slėpti ar rodyti | 3D vaizdas keičiasi lyg būtumėte naudoję meniu {{ui:Rodyti}} | Keisti vaizdą ir braižyti |
| Braižyti sienas, duris, langus, perdangas, lygius ar tinklelio linijas | Modelis keičiasi lyg būtumėte naudoję {{ui:Braižymas}} įrankius: sienos susijungia, patalpos, perdangos ir stogai seka | Keisti vaizdą ir braižyti |
| Keisti pavadinimą ar savybės reikšmę | Vieno elemento Name, Description, Object type arba Tag, arba viena savybės reikšmė. Reikšmė, kurią jis bendrina su kitais elementais, pirmiausia nukopijuojama jam; tipo reikšmė keičiasi tik tada, kai asistentas tai nurodo, nes kiekvienas to tipo elementas seka | Keisti vaizdą ir braižyti |
| Perkelti, naikinti, keisti sienas, duris ir langus | Elementai perkeliami arba naikinami kartu su tuo, ką jie laiko; sienos, nubraižytos {{ui:Braižymas}} įrankiais, keičiamos pagal galus ar tipą, durys ir langai – pagal vietą, dydį ar tipą, o patalpos ir sujungimai seka | Keisti vaizdą ir braižyti |
| Nustatyti, sutvarkyti ir perskaityti žiniaraštį | „Durų žiniaraštis pagal aukštą, su gaisrine klase ir apkaustais“: asistentas įvardija žiniaraštį, jo stulpelius (savybė ar žyma tampa stulpeliu) ir grupavimą; BimCraft jį užpildo iš modelio ir sutvarko, o ko asistentas nenurodė, paima iš įstaigos standarto. Nustatymas įsijungia į jūsų {{ui:Žiniaraščiai}} sąrašą. Kiekviena gauta eilutė nurodo jos elementus, todėl jis gali juos pasirinkti | Skaitymas, kad skaitytų; Keisti vaizdą ir braižyti, kad išsaugotų nustatymą |
| Eksportuoti žiniaraštį | CSV, Excel arba tabuliacijomis atskirtas tekstas, kurį įklijuoti į Google Sheets (į Google nieko neišsiunčiama) | Eksportas |
| Perskaityti ir nustatyti patalpų apdailą | Apdailos tipai, kiekvienos patalpos grindų, sienų ir lubų apdaila, zonos; plotai, plytelių kiekiai ir pagrindo tūriai tada gaunami iš apdailos žiniaraščių | Skaitymas; Keisti vaizdą ir braižyti, kad nustatytų |
| Pasirinkti elementus, anuliuoti savo žingsnius | Elementai pasirenkami vaizde; jo paskutinis žingsnis atšaukiamas | Keisti vaizdą ir braižyti |
| Įrašyti | Naujas IFC failas su visais pakeitimais, kaip jį sukuria {{ui:Įrašyti kaip IFC}} (originalas niekada nekeičiamas) | Įrašymas |
| Eksportuoti USD | Atvirus modelius kaip OpenUSD (.usda, .usdc arba .usdz), kaip juos įrašo {{ui:USD}} mygtukas įrankių juostoje | Eksportas |
| Atvaizduoti paveikslėlį, paleisti atvaizdavimo eilę | 3D vaizdo paveikslėlis, sukurtas {{ui:Atvaizduoti}} lange pagal jūsų atvaizdavimo parametrus, nebent jis prašo kitų; arba aukštos kokybės paveikslėliai, įdėti į lango eilę ir atvaizduojami vienas po kito (eilei reikia WebGPU). Modelyje nieko nekeičiama ([Atvaizduoti paveikslėlį](topic:render)) | Eksportas |

Kiekvienas asistento padarytas pakeitimas yra vienas žingsnis **Pakeitimai** sąraše, pavadintas „Assistant: …“ (pavyzdžiui „Assistant: add 4 walls“), todėl {{key:Mod+Z}} atšaukia visą jo veiksmą, ir matote, kieno žingsnis tai buvo. Lange jis negali atidaryti failų: atidarote modelį, ir jis dirba su atidarytuoju.

## Įjungimas

Asistentai pasiekia BimCraft per CadCraft Studio jūsų kompiuteryje; paprasta naršyklė jokio prieigos kelio neturi.

1. Atidarykite {{ui:Parametrai}} ir pasirinkite skirtuką **BimCraft**.
2. Skiltyje **Asistentai** pažymėkite **Leisti DI asistentams ir scenarijams naudoti BimCraft**.
3. **Skaitymas** jums jau pažymėtas. Pažymėkite **Keisti vaizdą ir braižyti**, jei asistentas gali izoliuoti ir slėpti elementus bei braižyti, ir **Įrašyti**, jei jis gali įrašyti modelį kaip naują failą.
4. Prijunkite asistentą Studio (Studio rodo adresą ir nustatymus, kuriuos reikia į jį įklijuoti).

## Kol asistentas prijungtas

Pastaba dešinės juostos viršuje nurodo, kuris asistentas prijungtas ir ką jis gali. Spustelėkite {{ui:Atjungti}}, kad iškart baigtumėte jo seansą; norėdamas tęsti, jis turi prisijungti iš naujo.

**Veikla**, skiltyje **Asistentai** Parametruose, išvardija kiekvieną asistento iškvietimą, naujausius viršuje, su nurodymu, ar jis pavyko.

:::tip
Klauskite paprastais žodžiais, pavyzdžiui „izoliuok išorines sienas 1 lygyje“, „kurioms durims nėra gaisrinės klasės?“ arba „nubraižyk 6 x 4 metrų patalpą 1 lygyje su durimis pietinėje sienoje“. Asistentas suranda elementus ir parodo juos jūsų vaizde arba nubraižo.
:::

## Be lango: scenarijai ir komandinė eilutė

Tie patys braižymo įrankiai veikia IFC failams aplankuose, kuriuos nurodote, be atidaryto lango: CadCraft MCP serveris ir komandinė eilutė gali pradėti naują pastatą arba atidaryti IFC failą, jį aprašyti, pridėti sienas, duris, langus, perdangas, lygius ir tinklelius, anuliuoti ir įrašyti kaip naują `.ifc` failą. Jūs nusprendžiate, kuriais aplankais jis gali naudotis ir ar jis gali ką nors keisti ar įrašyti.

## Išjungimas

Panaikinkite **Leisti DI asistentams ir scenarijams naudoti BimCraft** pažymėjimą. Kiekvienas asistentas iškart atjungiamas, o nustatymas išsaugomas kitam kartui.

## Taip pat žr.

- [Receptai DI asistentams](common:assistants-recipes): darbo pavyzdžiai, kiekvienas su jo iškviestais įrankiais.
- [Raskite elementus pagal klasę, pavadinimą ar savybę](topic:find)
- [Slėpkite, izoliuokite ir padarykite elementus permatomus](topic:hide-and-isolate)
- [BimCraft parametrai](topic:settings)
