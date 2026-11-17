---
title: Šildymo ir vėsinimo patikra su EnergyPlus
summary: Įrašykite modelį kaip EnergyPlus failą arba paleiskite EnergyPlus 26.2.0 versiją naršyklėje ir palyginkite jos projektines apkrovas su greitąja šildymo ir vėsinimo pagalba. Antroji nuomonė ankstyvam projektavimui, o ne atitikties skaičiavimas.
keywords: energyplus, energijos modeliavimas, projektinė diena, šilumos apkrova, vėsos apkrova, orų failas, epw, idf, šiluminė masė, metinė energija, modeliuoti
from: b82a5bf2
---

## Ką darysite

Skydelis **Patikra su EnergyPlus** įrašo atidarytą modelį kaip EnergyPlus įvesties failą (IDF): po vieną zoną kiekvienam kambariui, sienas, grindis, stogus ir langus su jų U-vertėmis, oro keitimus bei idealų šildymą ir vėsinimą. Visada galite **įrašyti tą failą** ir paleisti jį savo EnergyPlus.

Jei taip pat nustatote variklį, skydelis gali modeliuoti vietoje ir išvardija EnergyPlus projektinį šildymą bei vėsinimą kiekvienam kambariui šalia greitosios pagalbos rodiklių.

Tai projektavimo pagalba. Energetikos kodeksams, sertifikavimui ir leidimams reikia patvirtintos priemonės ir jai reikalingų klimato duomenų, o rezultatą turi peržiūrėti asmuo, kuris už jį atsako.

## Nustatykite variklį

BimCraft neturi EnergyPlus. Tai didelė WebAssembly versija (apie 6 MB suspausta, plius 4.6 MB duomenų failas), todėl ją talpinate patys ir įrašote jos adresą skydelyje. Puslapis ją įkelia tik paspaudus modeliavimo mygtuką, niekada paleidžiant. Adresas turi būti https, šios svetainės kelias arba localhost.

## Projektinės dienos arba metai

- **Modeliuoti projektines dienas** nereikia orų failo. Ji paleidžia šaltą žiemos dieną be saulės ir karštą giedrą vasaros dieną, esant temperatūroms iš šildymo ir vėsinimo įvesčių skirtuke Dienos šviesa, ir pateikia kiekvieno kambario apkrovą vatais.
- **Modeliuoti metus** reikia pasirinkto EPW formato orų failo. Ji prideda žmones, šviesas ir įrangą iš tų pačių įvesčių (visada įjungtus, nes tvarkaraštis neišgalvojamas) ir pateikia kiekvieno kambario šildymo ir vėsinimo energiją kWh. Orų failai turi savo licencijas, todėl naudokite tik tokį, kurį galite naudoti.

## Šiluminė masė

Pažymėkite **Suteikti žinomų sluoksnių sienoms šiluminę masę**: sienos, stogai ir grindys, kurių medžiagų sluoksniai žinomi, įrašomi sluoksnis po sluoksnio, o tankis ir savitoji šiluma imami iš trumpos tipinių verčių lentelės pagal medžiagos pavadinimą. Sluoksniai imami pirmiausia iš išorės, failo išvardijimo tvarka. Elementai be sluoksnių lieka su savo U-verte be masės.

## Lyginimo skaitymas

Abu metodai atsako į šiek tiek skirtingus klausimus. Greitoji pagalba išlaiko kiekvieną elementą; EnergyPlus failas vidutina kiekvieno kambario U-vertes pagal paviršiaus rūšį. Skirtumas virš 15 % kambario projektiniame šildyme pateikiamas kaip pastaba ⚠ skydelyje, su abiem skaičiais. Vėsinimas skiriasi labiau savo projekto dėka: greitoji pagalba apskaičiuoja smailę pagal saulę vienai datai, o EnergyPlus dydį nustato pagal savo projektinę dieną.
