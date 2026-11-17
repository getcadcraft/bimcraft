---
title: Auditas: kambariai, žymos, LOD, susikirtimai ir sąsajos
summary: Paleiskite paruoštas patikras neįvardytiems kambariams, trūkstamoms žymoms, elementams, žemesniems už projekto etapo reikalaujamą vystymo lygį, skirtingų disciplinų susikirtimams ir LOD 350 sąsajoms. Tik patarimai: niekas neblokuojama.
keywords: auditas, patikra, neįvardytas kambarys, trūkstama žyma, žymėjimas, lod, vystymo lygis, tarpinis etapas, etapas, susikirtimas, disciplina, koordinavimas, sąsaja, lod 350, anga, perbraukas, antsparnis, įvedimas, vamzdis, ortakis, problemos, patikros ataskaita, patariamasis
from: cc83a14d
---

## Ką darysite

Peržiūrėkite visą modelį iš karto prieš jį išleisdami. Auditas paleidžia paruoštus taisyklių rinkinius ir įdeda rastus dalykus į {{ui:Problemos}} sąrašą kaip patarimus. Niekas neblokuojama: taisote radinį arba priimate jį su priežastimi, kaip ir bet kurią kitą problemą.

## Žingsniai

1. Atidarykite {{ui:Modelio patikros}} › {{ui:Auditas}} kairiojoje juostoje arba {{ui:Įrankiai}} › {{ui:Auditi modelį…}} (įvedama: `AUDIT`).
2. Pasirinkite {{ui:Projekto etapas}}. Tas pats etapas kaip brėžinio detalėse.
3. Pažymėkite taisyklių rinkinius, kuriuos paleisti.
4. Spustelėkite {{ui:Paleisti auditą}}.
5. Perskaitykite eilutę kiekvienam taisyklių rinkiniui, tada atidarykite {{ui:Atidaryti Problemų sąrašą}}. Spustelėjus radinį, pasirenkamas jo elementas.
6. {{ui:Patikros ataskaita}} parsisiunčia ataskaitą: kiekvieną radinį, kas ką priėmė ir kodėl, bei paleistus taisyklių rinkinius.

## Taisyklių rinkiniai

- **Neįvardyti kambariai**: kambarys be pavadinimo arba vis dar pavadintas taip, kaip jį pavadino programa („Room 3“).
- **Trūkstamos žymos**: durys ar langas be žymos, kambarys be numerio, elektros prietaisas be žymos.
- **Elementai žemiau etapo LOD**: kiekviena siena, perdanga, lubos, stogas, durys ir langas, kurių LOD žemesnis nei reikalauja etapas. Elementas skaito savo tipo LOD žymą; lauko patikrintas elementas yra LOD 500. Elementai be žymos suskaičiuojami viena pastaba, nes jų negalima patikrinti.
- **Disciplinų susikirtimai**: skirtingų disciplinų (architektūra, konstrukcijos, mechanika, santechnika, elektra, pagal IFC klasę) elementai, kurie susikerta. Stogas, besiremiantis į savo sienas, neskaičiuojamas.
- **LOD 350 sąsajos**: kiekvienos durys ir langas yra sienos angoje, anga telpa į sieną, dvi angos nesipersidengia, anga, platesnė už ribą, turi perbraukas ar antsparnį (elementą virš jos arba pastabą ant durų ar lango), o vamzdis, ortakis ar kabelių padėklas, kertantis sieną ar perdangą, turi angą ten. Radiniai suskaičiuojami pagal disciplinų porą.
- **Atpažinti elementai, kurių niekas nepatikrino**: sienos, durys, langai ir kambariai, nuskaityti iš PDF, skenuoto dokumento ar brėžinio, kurie dar nepatvirtinti. Žr. [Pažymėkite elementus kaip patikrintus arba patikrintus vietoje](topic:verification).

## LOD, kurio reikalauja kiekvienas etapas

Atidarykite {{ui:LOD, kurio reikalauja kiekvienas etapas}}, kad pamatytumėte ar pakeistumėte lentelę.

:::note
Lentelė ir perbraukos plotis yra CadCraft pradinės vertės. Jos nėra paimtos iš standarto: projektas nustato LOD pagal etapą savo BIM vykdymo plane. Nustatykite savo. Įstaiga gali nustatyti lentelę visiems Parametrai › Default Policies › Audit; pakeitimas Audit skyriuje išsaugomas šiame kompiuteryje.
:::

## Verta žinoti

- Perbraukas galima pažymėti pastaba, o ne modeliuoti: pasirinkite duris ar langą ir užpildykite {{ui:Perbraukos ar antsparnio pastaba}} skiltyje {{ui:Patikrinimas}} Savybėse.
- Vamzdis, einantis per tikrą angą, nekerta paviršiaus ir nepranešamas. Vamzdis, modeliuotas tiesiai per sieną, pranešamas.
- Susikirtimų patikra labai dideliame modelyje sustoja po kelių sekundžių ir apie tai praneša. Pilnai patikrai dviejų pasirinktų rinkinių naudokite [Raskite susikirtimus tarp elementų](topic:clash-check).
- Paleiskite auditą iš naujo, kai pakeičiate modelį. Priimti radiniai lieka priimti, kol jų skaičiai nesikeičia.
- Jis skaito modelį. Jis nepakeičia koordinavimo peržiūros, kurią atlieka atsakingi asmenys.

## Toliau

- [Patikrinkite modelį dėl dažnų problemų](topic:model-checks)
- [Raskite susikirtimus tarp elementų](topic:clash-check)
- [Pažymėkite elementus kaip patikrintus arba patikrintus vietoje](topic:verification)
