---
title: Simboliai, tipai ir objektai, projektų šablonai ir greitieji rinkiniai
summary: Bibliotekoje yra trijų rūšių elementai (Simboliai, Tipai, Objektai). Pridėkite Tipą prie projekto, pradėkite nuo bendrinamo projekto šablono, pridėkite greitąjį rinkinį ir bendrinkite savo sukurtus per bibliotekos įkėlimo puslapį.
keywords: biblioteka, simboliai, tipai, objektai, tipas, sienos tipas, grindų tipas, stogo tipas, lubų tipas, projekto šablonas, šablonas, greitasis rinkinys, rinkinys, bendrinti, įkelti, versija, pakeitimų žurnalas, LOD, klasifikacija, licencija, pastabos iš praktikos
from: e13b0e67
---

## Ką darysite

Raskite bibliotekoje to, ko jums reikia, pagal tai, kas tai yra, pridėkite Tipą prie projekto, kurį braižote, pradėkite naują projektą iš kažkieno bendrinto šablono ir bendrinkite savo šablonus, tipus bei rinkinius.

## Trys bibliotekos elementų rūšys

- **Simboliai** – braižymo konvencijos: tik 2D, nubraižyti anotacijos dydžiu, sugrupuoti pagal discipliną.
- **Tipai** nusako, iš ko elementas sudarytas: jo sluoksniai su tikru storiu, jo išvystymo lygis (LOD) ir klasifikavimo kodas. Tipas pridedamas prie projekto, o ne nubraižomas.
- **Objektai** – fiziniai daiktai, pavyzdžiui durys, langai, baldai, įranga ir prietaisai, su planu ir 3D kūnu tikru dydžiu.

Skirtuke {{ui:Biblioteka}} pasirinkite {{ui:Biblioteka}} ir naudokite **Elemento rūšis**, kad rodytumėte Viską, Simbolius, Tipus ar Objektus.

## Pridėkite Tipą prie projekto

1. Pasirinkite **Tipai** po **Elemento rūšis** ir atidarykite vieną.
2. Patikrinkite jo sudėtį, LOD ir klasifikaciją po paveikslėliu, tada spustelėkite {{ui:Pridėti į šį projektą}}.
3. Jis pridedamas kaip sienos, grindų, stogo ar lubų tipas, kuriuo galite braižyti. Jei tokio pavadinimo tipas jau yra, naujasis pridedamas kaip kopija, o jūsų lieka nepakitęs. Vienas „Anuliuoti“ jį pašalina.

## Projekto šablonai ir greitieji rinkiniai

Pasirinkite {{ui:Rinkiniai}}, kad pamatytumėte, ką žmonės bendrino.

- **Projekto šablonas** – IFC failas su lygiais, tinkleliais, tipais ir parametrais. {{ui:Įrašyti į mano šablonus}} įdeda jį į Naujas pastatas skyrių Pradėti nuo.
- **Greitasis rinkinys** – bibliotekos elementų sąrašas. {{ui:Rodyti rinkinio elementus}} parodo juos kaip korteles, kurias galite įterpti.
- Kiekvienas rinkinys turi versiją ir pakeitimų žurnalą, naujausias pirmas. Versija, prasidedanti 0, skirta diskusijai; 1.0.0 – tik tam, ką linijos savininkas priėmė.

## Bendrinkite savo

- **Projekto šablonas:** {{ui:Įrašyti kaip šabloną}}, pažymėkite {{ui:Taip pat sukurti failą bendrinimui Bibliotekoje}}, pridėkite, ką jis turi, ir versiją. Gausite `.json` failą.
- **Greitasis rinkinys:** skirtuke {{ui:Rinkiniai}} pasirinkite Sukurti greitąjį rinkinį iš šio projekto. Jis išvardija bibliotekos elementus, kuriuos projektas naudoja.
- **Tipas:** skirtuke {{ui:Tipų paketai}} pažymėkite vieną tipą ir pasirinkite {{ui:Įrašyti kaip Bibliotekos elementą…}}.

Įkelkite failą į bibliotekos įkėlimo puslapį. Jis praeina tą pačią peržiūrą kaip ir bet kuris elementas, o licenciją pasirenkate ten: kiekvienas elementas nurodo savo licenciją. Elementams reikia LOD, IFC klasės ir klasifikavimo kodo (kodo, o ne tik pavadinimo).

## Pastabos iš praktikos

Kiekvieno bibliotekos elemento puslapyje prisijungę nariai gali pridėti pastabą: naudota tikrame projekte, išbandyta pavyzdiniame projekte arba rasta problema. Trumpai nurodykite projekto tipą ir neminėkite klientų pavadinimų. Pastaba viešai matoma ir nėra apžvalga: ji nekeičia elemento.

## Verta žinoti

- Iš programos nieko neišsiunčiama. Failus sukuriate savo kompiuteryje ir patys įkeliate.
- Iš šablono sukurtas rinkinys saugo IFC tekstą tiksliai taip, kaip įrašytas. Prieš įkeldami patikrinkite, ar nėra privataus turinio.
- CadCraft rodo Simbolius ir Objektus savo skirtuke Biblioteka; Tipai ir šablonai skirti BimCraft projektams.
