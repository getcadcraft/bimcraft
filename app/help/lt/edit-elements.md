---
title: Naikinti, iškirpti, kopijuoti ir įklijuoti statybinius elementus
summary: Pasirinkite sienas, duris, baldus ar bet ką kita IFC modelyje; naikinkite, iškirpkite arba nukopijuokite ir įklijuokite ten, kur spustelite, vietoje ar kitame aukšte.
keywords: naikinti, pašalinti, ištrinti, iškirpti, kopijuoti, įklijuoti, dubliuoti, perkelti, pasirinkti viską, pasirinkti visus, statybinis elementas, siena, durys, langas, laiptai, anga, anuliuoti
from: d9eec37f
---

## Ką atliksite

Pakeisite IFC modelio turinį: pašalinsite nereikalingus elementus, nukopijuosite sieną ar baldų rinkinį į kitą vietą arba perkelsite elementus iškirpdami ir įklijuodami juos. Kiekvienas pakeitimas yra vienas žingsnis, kurį galite anuliuoti, o įrašymas sukuria naują failą, todėl originalas lieka nepakitęs.

## Veiksmai

1. Atidarykite IFC modelį. Žr. [Atidaryti IFC modelį ir apžiūrėti 3D](topic:open-ifc-model).
2. Pasirinkite, ką keisti: spustelėkite elementą, laikykite {{key:Mod}} arba {{key:Shift}} ir spustelėkite, kad pasirinktumėte daugiau, arba paspauskite {{key:Mod+A}} ({{ui:Daugiau}}, {{ui:Pasirinkti viską}}), kad pasirinktumėte visus rodomus elementus.
3. Tada:
   - **Naikinti:** paspauskite {{key:Delete}} arba {{ui:Daugiau}}, {{ui:Naikinti}}.
   - **Kopijuoti:** paspauskite {{key:Mod+C}} arba spustelėkite {{ui:Kopijuoti}}.
   - **Iškirpti:** paspauskite {{key:Mod+X}} arba {{ui:Daugiau}}, {{ui:Iškirpti}}. Elementai dingsta, bet juos galite įklijuoti.
4. Įklijuoti: paspauskite {{key:Mod+V}} arba spustelėkite {{ui:Įklijuoti}}. Permatomas langelis, kurio dydis atitinka nukopijuotą, seka žymeklį aukšte, pasirinktame įdėjimo juostoje. Paspauskite {{key:R}}, kad pasuktumėte 90°, tada spustelėkite, kur jį padėti. Kiekvienas spustelėjimas įdeda dar vieną kopiją; {{key:Esc}} sustabdo.
5. Arba paspauskite {{key:Mod+Shift+V}} ({{ui:Daugiau}}, {{ui:Įklijuoti vietoje}}): po iškirpimo elementai grįžta tiksliai į buvusią vietą; po kopijavimo kopija atsiranda šalia originalų.
6. Spustelėkite {{ui:Įrašyti kaip IFC}}, kad atsisiųstumėte redaguotą modelį.

## Kas priklauso elementui

- **Dalys:** laiptai apima savo ruožus, uždanga siena – savo plokštes; elementas, sudarytas iš dalių, apima visas jas.
- **Angos:** siena apima jos angas. Ištrynus duris ar langą, pašalinama ir anga, kurią jie užpildė, todėl siena užsidaro, kaip tai daro autorinės programos. Ištrynus BimCraft nubraižytą sieną, ištrinamos ir jos durys bei langai, o likusios sienos sujungiamos. Ištrynus sieną iš kitur sukurto failo, jos durys ir langai lieka savo vietoje.
- **Duomenys:** kopija turi tą patį tipą, medžiagas, savybių rinkinius ir kiekius kaip originalas, bet naują GlobalId. Vėliau pakeitus kopijos reikšmę, originalas nekinta.
- **Bibliotekos elementai** išsaugo savo bibliotekos duomenis; kopija gauna kitą laisvą elemento numerį, o įklijuotas iškirptas elementas išlaiko savo numerį.

## Ko turėtumėte matyti

- Sąraše {{ui:Pakeitimai}} – „Ištrinta: …“ arba „Įklijuota: …“. {{key:Mod+Z}} atšaukia paskutinį pakeitimą; {{key:Mod+Y}} jį vėl grąžina.
- Po ištrynimo būsenos eilutėje nurodoma, kiek dalių ir angų taip pat buvo pašalinta.
- Įklijuoti elementai pasirenkami, todėl galite iš naujo įklijuoti vietoje, kad sukurtumėte eilę, arba juos ištrinti.

## Verta žinoti

- Kopijos naudoja tą pačią geometriją kaip originalas (IFC leidžia elementams dalytis ja), todėl failas beveik nedidėja.
- Statybiniai elementai įklijuojami į tą patį modelį, iš kurio buvo nukopijuoti, tame pačiame skirtuke. Norėdami naudoti įdėtus bibliotekos elementus kitame modelyje, kopijuokite po vieną elementą: žr. [Kopijuoti, įklijuoti ir dubliuoti bibliotekos elementus](topic:copy-paste).
- Aukštų, erdvių, pastatų ir sklypo ištrinti ar kopijuoti negalima. Vietoje jų pasirinkite juose esančius elementus. Patalpa, nubraižyta BimCraft, sudaroma iš ją supančių sienų: ištrinkite sieną, kad sujungtumėte dvi patalpas.
- Sienos, durys ir langai, nubraižyti su BimCraft savo sienų, durų ir langų įrankiais, kol kas negali būti kopijuojami, iškirpiami ar dubliuojami; būsenos eilutėje tai nurodoma. Nubraižykite juos iš naujo. Ištrinti galima.
- Kopijuojant elementų pavadinimai ir savybės taip pat įrašomi į jūsų iškarpinę kaip tekstas, kad galėtumėte įklijuoti į skaičiuoklę ar el. laišką.

## Dažniausios klaidos

- **{{ui:Naikinti}} yra pilkas.** Nieko nepasirinkta arba pasirinkti tik aukštai ar erdvės. Užveskite žymeklį, kad perskaitytumėte priežastį.
- **Įklijuojant rašoma, kad elementai atkeliavo iš kito modelio.** Po kopijavimo atidarėte kitą modelį. Vėl atidarykite pirmąjį modelį ir ten nukopijuokite elementus.
- **Įklijuota kopija yra kitame aukšte.** Įdėjimo juostos {{ui:Aukštas}} nurodo, kur ji eis; prieš spustelėdami pasirinkite aukštą.

## Susiję

- [Slėpti, izoliuoti ir matyti per elementus](topic:hide-and-isolate)
- [Klavišai ir pelė](topic:keyboard#edit)
