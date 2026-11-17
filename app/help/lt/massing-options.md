---
title: Masės variantai šalia vienas kito
summary: Laikykite kelis masės variantus tame pačiame modelyje, vieną padarykite dabartiniu, patikrinkite jį pagal vietovės statybos linijas ir servitutus, įtraukite masę iš ModelCraft ir išplėtokite pasirinktą variantą į sienas ir grindis.
keywords: masė, masės, variantas, variantai, variantų rinkinys, schema, koncepcija, koncepcijos projektavimas, 2 etapas, alternatyvos, palyginti variantus, dabartinis variantas, pastato masė, stumti traukti, modelcraft, civilcraft, bendras grindų plotas, pėdsakas, tūris, išplėtoti masę, servitutas, statybos linija, atitraukimas
from: 69a01459
---

## Ką darysite

Laikykite koncepcijos masės variantus viename modelyje, o ne atskiruose failuose: kelios pastatų masės šalia viena kitos, viena jų yra **dabartinis variantas**, o kiti laikomi palyginimui.

Masės variantas yra pastato masė: kontūras, pakeltas iki aukščio, su tam tikru aukštų skaičiumi. Tai dar nėra sienos. Galite laikyti kiek norite, sugrupuotus į **variantų rinkinius** (to paties rinkinio variantai yra alternatyvos vienas kitam).

## Išlaikyti variantą

1. Atidarykite {{ui:Patalpų programa į masės modelį}}, įveskite patalpų programą ir kontūrą, ir pasirinkite {{ui:Ieškoti variantų}}.
2. Pasirinkite vieną iš išvardytų variantų.
3. Skiltyje {{ui:Masės variantai modelyje}} įveskite {{ui:Variantų rinkinys}} pavadinimą, jei norite, ir pasirinkite {{ui:Išsaugoti pasirinktą variantą}}.

Variantas modelyje atsiranda kaip pastato masė ir sąraše, su aukštais, pėdsaku, bendru grindų plotu ir tūriu. Nieko nestatoma. Kitą išsaugokite tuo pačiu būdu.

Pirmasis rinkinio variantas yra jo dabartinis variantas. Kiekvienas žingsnis yra vienas atšaukimo žingsnis.

## Dabartinis variantas

Kiekvieno rinkinio vienas variantas yra dabartinis. Tai reiškia du dalykus:

- **Jo aukštai skaičiuojami kaip pastato grindų plotai.** Dabartinis variantas turi po vieną erdvę kiekvienam aukštui, nešančią to aukšto bendrą plotą, todėl viskas, kas skaito grindų plotus, mato galiojantį variantą ir jokio kito.
- **Jis tikrinamas pagal vietovę.** Jei jis stovi už žemės sklypo ribos, ant statybos linijos ar ant servituto, skiltyje {{ui:Problemos}} atsiranda įspėjimas, kuriame jis įvardytas. Tai tik įspėjimas: nieko neatmetama. Ne dabartiniai variantai netikrinami.

Norėdami pakeisti dabartinį variantą, spustelėkite {{ui:Padaryti dabartiniu}} kitame variante.

{{ui:Slėpti nedabartinius variantus}} paslepia kitus 3D vaizde. Tai galioja tik šiai naršyklei ir neįrašoma į failą.

## Masė iš ModelCraft

ModelCraft programoje {{ui:Eksportuoti}} › {{ui:Masė į BimCraft…}} siunčia kiekvieną grupę ar komponentą kaip vieną variantą. BimCraft atidaro failą su išvardytais variantais.

Norėdami įtraukti juos į jau atidarytą modelį, pasirinkite {{ui:Pridėti masės variantus iš failo}} ir pasirinkite `.ifc` failą. Jo masės įeina kaip rinkinio variantai, vienu atšaukimo žingsniu, stovėdamos ten, kur buvo modeliuotos. Masių failas iš CivilCraft veikia taip pat.

Variantas, pažymėtas „(forma supaprastinta)“, nebuvo paprastas vertikalus blokas ModelCraft programoje (jis atsitraukia, nuožulnus arba neuždarytas). Čia jo masė yra jos pagrindo kontūras, pakeltas iki aukščio; jo grindų plotai ir tūris matuojami iš paties kietojo kūno.

## Išplėtoti pasirinktą variantą

Pasirinkite {{ui:Detalizuoti}} varianto. Jis tampa aukštais (pridedami iki jo aukštų skaičiaus), sienomis aplink jo kontūrą kiekviename aukšte ir grindų perdanga kiekviename, vienu atšaukimo žingsniu. Variantas išeina iš sąrašo; kiti variantai lieka tokie, kokie buvo. Stogo dar nėra.

{{ui:Pervardyti}} keičia varianto pavadinimą, {{ui:Pašalinti}} išima jį iš modelio. Pašalinus dabartinį variantą, pirmasis kitas rinkinio variantas tampa dabartiniu.

## Ko turėtumėte matyti

- Kiekvieną išsaugotą variantą kaip bloką 3D vaizde ir eilutę sąraše.
- „(dabartinis)“ šalia vieno varianto kiekvienam rinkiniui.
- Įspėjimą skiltyje {{ui:Problemos}}, kai dabartinis variantas kerta žemės sklypo ribą, statybos liniją ar servitutą.

## Verta žinoti

- IFC faile variantas yra pastato elemento tarpinis (building element proxy) su savybių rinkiniu `CadCraft_SiteMass` (jo variantų rinkinys, varianto pavadinimas ir ar jis dabartinis yra tame rinkinyje). Dabartinio varianto aukštai yra erdvės tipo `MassingFloor`. Kitos programos skaito tarpinį elementą kaip bendrą elementą.
- Išsaugojus variantą niekada nepridedami aukštai; juos prideda tik išplėtojimas.
- Asistentas gali išvardyti išsaugotus variantus, išsaugoti vieną, padaryti dabartinį, pervardyti, išplėtoti ar pašalinti.
