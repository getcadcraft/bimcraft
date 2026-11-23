---
title: Leiskite DI asistentui dirbti su jūsų modeliu
summary: Įjunkite asistentus Parametruose, kad kompiuteryje esantis asistentas galėtų rasti elementus, perskaityti jų savybes, izoliuoti juos vaizde ir braižyti sienas, duris, langus, perdangas, lygius bei tinklelius per CadCraft Studio. Išjungta, kol jo neįjungsite.
keywords: dirbtinis intelektas, DI, asistentas, mcp, scenarijus, automatizavimas, studio, rasti elementus, izoliuoti, savybės, leidimai, atjungti, veikla, braižyti sienas, pridėti duris, pridėti langus, lygiai, tinklelis, perdangos, anuliuoti, įrašyti, komandinė eilutė, cli, be lango, naudoti su DI asistentais
from: 66d72742
---

## Ko išmoksite

Kaip leisti DI asistentui (bet kuriam asistentui, kalbančiam MCP) peržiūrėti atvertą IFC modelį ir jame braižyti, ką jis gali ir ko negali, bei kaip jį sustabdyti.

## Ką asistentas gali atlikti BimCraft

| Jis prašo | Kas įvyksta | Reikia |
|---|---|---|
| Rasti elementus | Gauna elementų sąrašą pagal klasę, aukštą, pavadinimą ar savybės reikšmę, kaip atlieka **Rasti** | Skaitymas |
| Skaityti savybes | Gauna vieno elemento atributus, tipą, savybių rinkinius ir kiekius, kaip juos rodo **Savybės** | Skaitymas |
| Aprašyti modelį, išvardyti sienas | Gauna lygius, sienas, duris, langus, patalpas, perdangas, tinklelius ir kolonas bei kiekvienos sienos galus, tipą ir aukštį | Skaitymas |
| Izoliuoti, padaryti permatomus, paslėpti ar rodyti | 3D vaizdas keičiasi taip, lyg būtumėte panaudoję meniu {{ui:Rodyti}} | Keisti vaizdą ir braižyti |
| Braižyti sienas, duris, langus, perdangas, lygius ar tinklelio linijas | Modelis keičiasi taip, lyg būtumėte naudoję įrankius {{ui:Braižymas}}: sienos susijungia, patalpos, perdangos ir stogai seka pakeitimus | Keisti vaizdą ir braižyti |
| Pakeisti pavadinimą ar savybės reikšmę | Vieno elemento Pavadinimą, Aprašymą, Objekto tipą ar Žymę arba vienos savybės reikšmę. Reikšmė, kurią jis bendrina su kitais elementais, pirmiausia nukopijuojama jam; tipo reikšmė keičiasi tik tada, kai asistentas tai nurodo, nes kiekvienas to tipo elementas seka pakeitimą | Keisti vaizdą ir braižyti |
| Perkelti, ištrinti, keisti sienas, duris ir langus | Elementai perkeliami ar ištrinami kartu su elementais, kuriuose jie įtvirtinti; sienos, nubraižytos įrankiais {{ui:Braižymas}}, keičiasi pagal galus ar tipą, durys ir langai pagal vietą, dydį ar tipą, o patalpos ir sujungimai seka pakeitimus | Keisti vaizdą ir braižyti |
| Sudaryti, sutvarkyti ir perskaityti žiniaraštį | „Durų žiniaraštis pagal aukštą, su gaisrine klase ir apkaustais“: asistentas pavadina žiniaraštį, jo stulpelius (savybė ar žymė tampa stulpeliu) ir grupavimą; BimCraft jį užpildo iš modelio ir sutvarko, o ko asistentas nenurodė, paima iš įmonės standarto. Sąranka patenka į jūsų žiniaraščių sąrašą. Kiekviena gauta eilutė nurodo savo elementus, todėl juos galima pažymėti | Skaitymas, kad perskaitytų; Keisti vaizdą ir braižyti, kad įrašytų sąranką |
| Eksportuoti žiniaraštį | CSV, Excel arba tekstą su tabuliacijos skyrikliais, kurį įklijuoti į Google Sheets (niekas nesiunčiama Google) | Eksportas |
| Skaityti ir nustatyti patalpų apdailą | Apdailos tipai, kiekvienos patalpos grindų, sienų ir lubų apdaila, zonos; plotai, plytelių kiekiai ir pagrindo tūriai tada gaunami iš apdailos žiniaraščių | Skaitymas; nustatyti – Keisti vaizdą ir braižyti |
| Pasirinkti elementus, anuliuoti savo žingsnius | Elementai pažymimi vaizde; paskutinis jo žingsnis anuliuojamas | Keisti vaizdą ir braižyti |
| Įrašyti | Naujas IFC failas su visais pakeitimais, kaip jį sukuria {{ui:Įrašyti kaip IFC}} (originalas niekada nekeičiamas) | Įrašymas |
| Eksportuoti USD | Atverti modeliai kaip OpenUSD (.usda, .usdc arba .usdz), kaip juos įrašo įrankių juostos {{ui:USD}} | Eksportas |
| Atvaizduoti paveikslėlį, paleisti atvaizdavimo eilę | 3D vaizdo paveikslėlis, kaip jį sukuria dialogas {{ui:Atvaizduoti}} pagal jūsų atvaizdavimo parametrus, nebent jis prašo kitų, arba kokybiški paveikslėliai pridedami į dialogo eilę ir atvaizduojami vienas po kito (eilei reikia WebGPU). Modelis nekinta ([Atvaizduoti paveikslėlį](topic:render)) | Eksportas |

Kiekvienas asistento atliktas pakeitimas yra vienas žingsnis **Pakeitimai**, pavadintas „Asistentas: …“ (pvz., „Asistentas: pridėti 4 sienas“), todėl {{key:Mod+Z}} atšaukia visą jo veiksmą, o jūs matote, kieno buvo žingsnis. Lange jis negali atverti failų: jūs atidarote modelį, o jis dirba su atidarytuoju.

## Įjungimas

Asistentai pasiekia BimCraft per CadCraft Studio jūsų kompiuteryje; paprastoje naršyklėje jie negali prisijungti.

1. Atverkite {{ui:Parametrai}} ir pasirinkite skirtuką **BimCraft**.
2. Skiltyje **Asistentai** pažymėkite **Leisti DI asistentams ir scenarijams naudoti BimCraft**.
3. **Skaitymas** jums jau pažymėtas. Pažymėkite ir **Keisti vaizdą ir braižyti**, jei asistentas gali izoliuoti ir slėpti elementus bei braižyti, ir **Įrašymas**, jei jis gali įrašyti modelį kaip naują failą.
4. Prijunkite asistentą Studio (Studio rodo adresą ir nustatymus, kuriuos reikia įklijuoti į asistentą).

## Kol asistentas prijungtas

Dešiniojo skydelio viršuje rodoma pastaba, kuris asistentas prijungtas ir ką jis gali. Spustelėkite {{ui:Atjungti}}, kad iš karto baigtumėte jo sesiją; norėdamas tęsti, jis turės prisijungti iš naujo.

**Veikla**, esanti skiltyje **Asistentai** Parametruose, išvardija kiekvieną asistento iškvietimą, naujausius viršuje, ir nurodo, ar jis pavyko.

:::tip
Klauskite paprastais žodžiais, pvz., „izoliuoti išorines sienas 1 lygyje“, „kurioms durims nenurodyta gaisrinė klasė?“ arba „nubraižyti 6 x 4 metrų patalpą 1 lygyje su durimis pietinėje sienoje“. Asistentas suranda elementus ir parodo juos vaizde arba nubraižo juos.
:::

## Be lango: scenarijai ir komandinė eilutė

Tie patys braižymo įrankiai veikia IFC failams aplankuose, kuriuos nurodote, be atidaryto lango: CadCraft MCP serveris ir komandinė eilutė gali pradėti naują pastatą arba atverti IFC failą, jį aprašyti, pridėti sienas, duris, langus, perdangas, lygius ir tinklelius, anuliuoti ir įrašyti kaip naują `.ifc` failą. Dar keturi įrankiai tinka scenarijams: `ifc_batch` vienu metu paleidžia iki 200 redagavimo žingsnių (viskas arba nieko: vienas anuliavimas atšaukia visą paketą, o atmestas žingsnis anuliuoja likusius ir nurodo žingsnį); `ifc_describe` išvardija lygius ir kiekvieną sieną su jos durimis ir langais; `ifc_render_png` be lango parašo modelio tikrinimo paveikslėlį su plokščiu šešėliavimu (be medžiagų, tekstūrų ir šešėlių); `usd_export` parašo `.usda`, `.usdc` arba `.usdz`. Komandinėje eilutėje `cadcraft bim script.json --from model.ifc -o out.ifc` paleidžia žingsnių scenarijų, o `--usd`, `--png` ir `--plan` iš to paties vykdymo parašo USD failą, paveikslėlį arba planą. Jūs nusprendžiate, kuriais aplankais jis gali naudotis ir ar gali ką nors keisti ar įrašyti.

## Išjungimas

Panaikinkite žymėjimą **Leisti DI asistentams ir scenarijams naudoti BimCraft**. Kiekvienas asistentas iš karto atjungiamas, o nustatymas išsaugomas kitam kartui.

## Taip pat žr.

- [Receptai DI asistentams](common:assistants-recipes): darbo pavyzdžiai, kiekvienas su jo iškviečiamais įrankiais.
- [Raskite elementus pagal klasę, pavadinimą ar savybę](topic:find)
- [Paslėpkite, izoliuokite ir padarykite elementus permatomus](topic:hide-and-isolate)
- [BimCraft parametrai](topic:settings)
