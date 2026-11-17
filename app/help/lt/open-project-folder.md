---
title: Atidaryti visą projekto aplanką
summary: Nurodykite BimCraft projekto aplanką, kad iš karto matytumėte visus modelius, jų atsargines kopijas ir nuorodas, o langelis {{ui:Pradėkite čia}} pasiūlytų, su kuriuo failu dirbti.
keywords: aplankas, katalogas, projekto aplankas, tinklo diskas, serveris, pradėkite čia, kuris failas, atsarginės kopijos, nuorodos, xrefs, naujausi aplankai, vilkti aplanką
from: 16fbdce2
---

## Ką darysite

Atidarykite visą projekto aplanką, pavyzdžiui, tą, kurį gavote darbui, ir leiskite BimCraft jį surūšiuoti: kokie modeliai yra, kurios kopijos yra atsarginės, kas su kuo susieta, kurie failai pažeisti ir kurį failą greičiausiai norite atidaryti.

Skaitomi tik keli kilobaitai, reikalingi kiekvienai modelio kortelei, todėl aplankas tinklo diske ar sinchronizuojamame debesies aplanke tinka.

## Žingsniai

:::chromium
1. Kairėje (arba tuščio ekrano viduryje) spustelėkite {{ui:Atidaryti aplanką}}.
2. Atsidariusiame lange pasirinkite projekto aplanką ir spustelėkite **Pasirinkti** (arba **Įkelti** ar **Atidaryti**, priklausomai nuo sistemos).
3. Kai naršyklė klausia „Leisti svetainei peržiūrėti failus?“, spustelėkite **Peržiūrėti failus**. Tai tik leidžia skirtukui skaityti aplanką; nieko neįkeliama.
4. Palaukite, kol būsenos eilutė suskaičiuos: „Aplanko sąrašas: … failų“, tada „Tikrinami Revit failai: … iš …“.
:::

:::firefox
1. Kairėje (arba tuščio ekrano viduryje) spustelėkite {{ui:Atidaryti aplanką}}.
2. Atsidariusiame lange pasirinkite projekto aplanką ir patvirtinkite. Firefox gali paklausti, ar leisti puslapiui skaityti aplanko failus; jie vis tiek lieka jūsų kompiuteryje.
3. Palaukite, kol būsenos eilutėje bus rašoma „Skaitomas aplankas: … failų“, tada „Tikrinami Revit failai: … iš …“.
:::

:::safari
1. Kairėje (arba tuščio ekrano viduryje) spustelėkite {{ui:Atidaryti aplanką}}.
2. Atsidariusiame lange pasirinkite projekto aplanką ir spustelėkite **Įkelti**. Nepaisant žodžio, nieko neišeina iš jūsų Mac: failai tik perduodami skirtukui.
3. Palaukite, kol būsenos eilutėje bus rašoma „Skaitomas aplankas: … failų“, tada „Tikrinami Revit failai: … iš …“.
:::

Taip pat galite **įvilkti aplanką** iš {{pick:mac=Finder|windows=File Explorer|linux=jūsų failų tvarkyklės}} į puslapį. Įvilktas aplankas atsidaro be jokio leidimo klausimo visose naršyklėse.

## Ką turėtumėte matyti

Aplanko ataskaita užpildo vidurį:

- Aplanko pavadinimas, modelių, CAD brėžinių, IFC modelių ir failų skaičiai bei bendras dydis.
- Raudonos arba gintarinės pastabos, jei kai kurie failai neišsamūs arba kai kurie susieti failai trūksta aplanke.
- Langelis {{ui:Pradėkite čia}}: failas, kurį BimCraft siūlo atidaryti, su priežastimis.
- **Modeliai**: po vieną eilutę kiekvienam modeliui, o jo atsarginės kopijos sugrupuotos po juo.
- **Susietos ir nurodytos nuorodos**, **IFC modeliai**, **CAD brėžiniai** ir **Atidėta į šalį**, jei aplanke yra tokių.

Kairėje skydelis {{ui:Aplankas}} viską apibendrina; **Problemos** rodo „Nėra“, kai visos kopijos sveikos.

## Naudoti langelį Pradėkite čia

Langelyje nurodomas vienas failas ir paaiškinama kodėl, pavyzdžiui:

- „Naujausias įrašytas darbas šiame aplanke (2025 m. kovo 3 d.).“
- „*Consultant.rvt* susietas į kitus modelius, todėl tai fonas, o ne failas redagavimui.“
- „*Tower.rvt* atrodo akivaizdus pasirinkimas, bet jis pažeistas; jo paskutinė gera kopija yra iš …“
- „Tai centrinis modelis: Revit programoje atidarykite jį su „Create New Local“ ir dirbkite vietinėje kopijoje.“

1. Perskaitykite priežastis.
2. Spustelėkite {{ui:Atidaryti jos kortelę}}, kad perskaitytumėte to failo kortelę, arba {{ui:Rodyti sąraše}}, kad rastumėte jo eilutę skiltyje **Modeliai**.
3. Prieš pasikliaudami failu, pasitikrinkite su tuo, kas paskutinį kartą dirbo prie projekto. Langelis tai taip pat nurodo: tai geriausias spėjimas pagal pavadinimus, datas ir nuorodas.

## Atidaryti failus iš ataskaitos

1. Spustelėkite modelio pavadinimą, kad atidarytumėte jo kortelę. Kortelė tikrina kiekvieną nuorodą pagal aplanką.
2. Spustelėkite {{ui:Atgal į}} ir aplanko pavadinimą kortelės viršuje (arba {{ui:Atgal į aplanką}} kairėje), kad grįžtumėte.
3. Spustelėkite bet kurį IFC failą skiltyje **IFC modeliai**, kad atidarytumėte jį 3D vaizde.
4. Spustelėkite bet kurį DWG ar DXF skiltyje **CAD brėžiniai**, kad atidarytumėte jį 2D vaizde. Jo susieti brėžiniai ir paveikslėliai aplanke randami automatiškai.

## Vėliau iš naujo atidaryti aplanką

:::chromium
Aplankai, kuriuos atidarėte su {{ui:Atidaryti aplanką}} arba įvilkdami, kairėje rodomi sąraše {{ui:Naujausi aplankai}}. Spustelėkite {{ui:Atidaryti iš naujo}} ir aplanko pavadinimą, kad vėl jį atidarytumėte, nerinkdami iš naujo. Perkrovus naršyklę, Chrome ar Edge dar kartą paklaus; pasirinkite „Leisti kiekvieną kartą“, kad nebeklaustų. Sąrašas saugomas tik šioje naršyklėje ir niekur neišsiunčiamas. Spustelėkite ×, kad pamirštumėte aplanką.
:::

:::firefox safari
Ši naršyklė negali prisiminti aplankų tarp apsilankymų. Pasirinkite aplanką iš naujo su {{ui:Atidaryti aplanką}} arba įvilkite jį.
:::

## Dažniausios klaidos

- **Pasirinktas per didelis aplankas.** Daugiau kaip 20 000 failų: „Šiame aplanke daugiau nei 20 000 failų. Pasirinkite mažesnį aplanką, pavyzdžiui, vieną projektą.“ Pasirinkite projekto aplanką, o ne visą diską.
- **Pasirinktas kelių projektų tėvinis aplankas.** Tada langelis {{ui:Pradėkite čia}} renkasi tarp projektų. Pasirinkite vieną projektą.
- **Atrodo, kad Revit aplankai ignoruojami.** Aplankai `*_backup`, `*_log` ir `Revit_temp` yra techninė tvarka: jie rodomi skiltyje **Atidėta į šalį**, o ne skaitomi.
- **Tikimasi, kad modelis atsidarys 3D vaizde iš savo kortelės.** Projekto failas kortelėje yra tik kortelė. Atidarykite jo IFC eksportą.
- **Telefonai ir planšetės.** Daugelis mobiliųjų naršyklių visai negali pasirinkti aplankų. Naudokitės kompiuteriu.

Žr. [Patikrinkite aplanką dėl pažeistų kopijų, trūkstamų nuorodų ir likučių](topic:check-folder-health) ir [Aplanko ataskaita: vaidmenys, būsenos ir nuorodos](topic:folder-roles).
