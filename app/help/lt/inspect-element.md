---
title: Pasirinkti elementą ir perskaityti jo savybes
summary: Spustelėkite bet kurį elementą 3D modelyje, kad jį paryškintumėte ir perskaitytumėte jo pavadinimą, tipą, žymę, GlobalId, savybių rinkinius ir kiekius.
keywords: savybės, pasirinkimas, pasirinkti, spustelėjimas, elementas, parametrai, savybių rinkiniai, pset, kiekiai, globalid, guid, tipas, apžiūrėti
from: 43b80aa8
---

## Ką atliksite

Pasirinkite elementus IFC modelyje ir perskaitykite viską, ką failas apie juos sako: atributus, savybių rinkinius, tipo savybes ir kiekius.

## Veiksmai

1. Atidarykite IFC modelį.
2. Spustelėkite elementą, pavyzdžiui, duris. Spustelėkite nevilkdami: vilkimas daugiau nei kelis pikselius sukasi aplink, o ne pasirenka.
3. Pažiūrėkite į elementą: jis paryškinamas mėlynai.
4. Pažiūrėkite į dešinėje esantį skydelį {{ui:Savybės}}. Viršuje yra elemento rūšis (pavyzdžiui, „Door“ arba „WallStandardCase“) ir jo pavadinimas.
5. Perskaitykite pirmąjį bloką: **Name**, **Type**, **Object type**, **Tag**, **Description**, **GlobalId** ir **Line**.
6. Slinkite žemyn iki savybių rinkinių. Pirmieji trys atidaryti; spustelėkite bet kurio kito rinkinio pavadinimą, kad jį atidarytumėte.
7. Spustelėkite kitą elementą, kad pereitumėte prie jo.
8. Paspauskite {{key:Esc}} arba spustelėkite tuščią foną, kad panaikintumėte pasirinkimą.

## Ką turėtumėte matyti

- Paryškintą elementą ir jo duomenis dešinėje.
- Savybių rinkinius abėcėlės tvarka. Rinkiniai, ateinantys iš elemento **tipo**, turi „ (type)“ po pavadinimo ir pastabą „Type property: a change here applies to every element of this type.“ (Tipo savybė: pakeitimas čia taikomas visiems šio tipo elementams.)
- Kiekių rinkinius (pavyzdžiui, ilgius, plotus ir tūrius), išvardytus kartu su kitais rinkiniais. Kiekiai tik skaitomi.
- Reikšmės, kurias galite keisti, atrodo kaip mygtukai. [Keisti IFC savybes ir įrašyti redaguotą kopiją](topic:edit-ifc-properties) parodo, kaip.

[Savybių skydelio laukai](topic:properties-panel) paaiškina kiekvieną lauką.

## Paslėptų elementų pasiekimas

1. Norėdami pasiekti kažką pastato viduje, nuimkite žymėjimą nuo aukštų virš jo sąraše {{ui:Aukštai}}.
2. Norėdami pasiekti sieną už patalpos tūrio, išjunkite {{ui:Erdvės}}.
3. Spustelėkite elementą.

## Dažnos klaidos

- **Šiek tiek pajudinus spustelėjimo metu.** BimCraft tai laiko sukimu ir nepasirenka. Laikykite pelę nejudinamai.
- **Tikimasi vienetų šalia skaičių.** Reikšmės rodomos taip, kaip saugomos faile, suapvalintos iki keturių skaitmenų po kablelio, be vieneto simbolio. Ilgiai metriniame eksporte paprastai būna milimetrais arba metrais; patikrinkite eksportuotojo nustatymus.
- **Parametro ieškojimas pagal įprastą pavadinimą.** Eksportuotojai pervadina ir pergrupuoja parametrus į IFC savybių rinkinius, pavyzdžiui, `Pset_WallCommon`. Peržiūrėkite kiekvieną rinkinį; pasirinktiniai parametrai dažnai būna rinkinyje, pavadintame pagal eksportuojančią programą ar jūsų įmonę.
- **Tikimasi paieškos lauko.** Spustelėkite, kad pasirinktumėte elementą; {{key:Mod}}+spustelėjimas arba {{key:Shift}}+spustelėjimas pasirenka daugiau, o {{key:Mod+A}} pasirenka visus rodomus elementus. Sąrašas {{ui:Elementai}} kairėje tik suskaičiuoja elementus pagal rūšį; jis nespustelimas.
- **Pasirinkimas ant projekto failo kortelės.** Failo kortelėje nėra elementų, kuriuos galima pasirinkti: „Element properties need the 3D model. Open an IFC export of this file to see them.“ (Elemento savybėms reikia 3D modelio. Atidarykite šio failo IFC eksportą, kad jas pamatytumėte.)
