---
title: Uždangos sistemos: stiklinės sienos tinkleliu su impostais
summary: Nubrėžkite uždangos sistemą kaip sieną arba uždėkite ją ant paviršiaus, tada nustatykite jos tinklelio linijas ir impostus. Ji išsaugoma kaip IfcCurtainWall su stiklais ir impostais.
keywords: uždangos sistema, uždangos siena, uždangos tinklelis, impostas, stiklinimas, parduotuvės fasadas, stiklinė siena, plokštė, stiklas, pagal paviršių, paviršius, pastato tūris, tinklelio linija, atstumas, profilis, skersinis, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Ką darysite

Sukurkite stiklinę sieną iš stiklų tarp imposto profilių, pakeiskite jos tinklelio linijų vietas ir pasirinkite, kurios linijos turi impostą.

## Žingsniai

1. Įjunkite **Braižymas** ir atidarykite meniu **Statyba** (juostos išdėstymo atveju: skirtukas Architektūra).
2. Pasirinkite **Uždangos sistema**. Jos eilutėje nustatykite viršų (aukštą virš jo arba aukštį), liniją kas tiek išilgai, liniją kas tiek aukštyn (palikite tuščią, jei nereikia), ar turi impostus, ir impostų profilį.
3. Spustelėkite, kur ji prasideda ir kur baigiasi, kaip braižant sieną. Shift išlaiko ją statmeną kampą.
4. Norėdami pakeisti tinklelį, pasirinkite **Uždangos tinklelis** ir spustelėkite sistemą:
   - **Pridėti liniją**: vertikali linija atsiranda ten, kur spustelėjate. Horizontaliai linijai pirmiausia įveskite jos aukštį lauke **Aukštyje**.
   - **Perkelti liniją**: spustelėkite liniją, tada vietą, kur ji turi atsidurti.
   - **Pašalinti liniją**: spustelėkite liniją.
   - **Nustatyti pagal atstumą**: įveskite atstumą lauke **Kas**, tada spustelėkite sistemą.
5. Norėdami pakeisti impostus, pasirinkite **Impostas**, nurodykite, ką jis veikia (vertikali linija, kurią spustelėjate, horizontali linija tam tikru aukščiu, kraštas arba visos linijos), pasirinkite **Įdėti impostus** arba **Pašalinti impostus** ir profilį, tada spustelėkite sistemą.
6. Pažymėkite sistemą, kad matytumėte visą jos informaciją **Savybėse**: kiekvieną tinklelio liniją su jos vieta, varnelę jos impostui ir mygtuką jai pašalinti; atstumą; kraštą; profilį; stiklo storį.

## Pagal paviršių

**Pagal paviršių** sukuria uždangos sistemą ant plokščio paviršiaus, kurį spustelėjate 3D vaizde. Jos eilutėje – tos pačios tinklelio ir imposto nuostatos.

- Veikia su bet kurio 3D vaizde rodomo elemento plokščiu paviršiumi: pastato tūriu, siena, grindimis, stogo plokštuma, kolona, įdėtu elementu. Paviršius gali būti vertikalus, nuožulnus arba horizontalus.
- Sistema perima paviršiaus kontūrą. Frontonas ar kita keista forma pjauna stiklus ir impostus pagal ją.
- Vietoj to galima sukurti **sieną**, išilgai vertikalaus paviršiaus pagrindo ir tokio aukščio kaip paviršius. Čia siena visada stovi vertikaliai, todėl nuožulnaus ar horizontalaus paviršiaus sienos paversti negalima.
- Stogo ji nekuria. Stogas BimCraft apskaičiuojamas pagal lygio kontūrą ir nuolydį, o ne pagal atskirą paviršių.
- Kreivas paviršius – tai daug mažų plokščių paviršių: vienas spustelėjimas paima vieną iš jų.
- Paviršius su angomis: sistema apima išorinį paviršiaus kontūrą.

## Kaip matuojama

- **Bendras plotas** – tai sistemos kontūras.
- **Stiklų plotas** – stiklai, kaip jie sudaryti: kiekvienas stiklas netenka pusės imposto pločio kiekvienoje pusėje su tinklelio impostu, o su kraštiniu impostu – viso pločio.
- Vertikalus impostas eina per visą aukštį nuo krašto iki krašto. Horizontalus impostas sustoja ties kiekvienu vertikaliu impostu ir ties kraštu. Kraštiniai impostai guli kontūro viduje; kur susitinka du, pirmenybę turi labiau vertikalus, kuris eina per visą. Jungtys pjaunamos statmenai, o ne įstrižai.
- **Žiniaraščiai** turi sąrašą **Uždangos sistemos** su šiais skaičiais, kai modelyje yra tokia sistema.

## IFC faile

IfcCurtainWall jos lygyje, sudaryta iš po vieną IfcPlate (uždangos plokštę) kiekvienam stiklui ir po vieną IfcMember (impostą) kiekvienam imposto gabalui, kiekvienas su savo forma, medžiaga ir pagrindiniais kiekiais.

## Verta žinoti

- Bet koks dydis sukuriamas taip, kaip prašote. Atmetamas tik kontūras be ploto, nes nėra ko kurti.
- Sistema, nubraižyta kaip siena, išlaiko aukštį, kuriuo buvo nubraižyta. Jei vėliau pakeisite lygį, nustatykite jo aukštį savybėse iš naujo.
- Perkėlimo įrankis uždangos sistemos dar neperkelia. Ištrinkite ją ir nubraižykite iš naujo arba pakeiskite jos tinklelį vietoje.
- Anuliuoti atšaukia kiekvieną žingsnį: visą sistemą, vieną tinklelio pakeitimą, vieną imposto pakeitimą.
