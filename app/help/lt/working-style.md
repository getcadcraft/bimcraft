---
title: Darbo stilius, dubliuoti vaizdai, pieštukai popieriuje, Pateikti kaip ir šablonai
summary: Pasirinkite, kaip BimCraft elgiasi pagal jūsų darbo būdą, dubliuokite bet kurį vaizdą kaip savarankišką ar susietą kopiją, saugokite pieštukų perrašymus faile ir spausdinkite taip, kaip matote, arba per pieštukų lentelę, pateikite elementą kaip kitą IFC klasę ir pradėkite projektus nuo savo šablonų.
keywords: darbo stilius, dubliuoti vaizdą, kopijuoti vaizdą, priklausomas vaizdas, susietas vaizdas, savarankiška kopija, vaizdo kopija, pieštukų perrašymai, pieštukai, linijų storiai, spausdinti kaip matote, pieštukų lentelė, spausdinimo stilius, ctb, monochrominis, pilkųjų tonų, pateikti kaip, IFC klasė, perklasifikuoti, numatytas tipas, bendrinis modelis, perdanga kaip kelias, siena kaip plokštė, stogas kaip rampa, projekto šablonas, šablonas, naujas iš šablono, įrašyti kaip šabloną, biuro standartas
from: 231d98b0
---

## Ką darysite

Nustatykite BimCraft pagal savo darbo būdą, dubliuokite vaizdus, spausdinkite juos taip, kaip tikitės, skaičiuokite elementus kaip tai, kuo jie iš tikrųjų yra, ir pradėkite kiekvieną projektą nuo savo biuro šablono.

## Pasirinkite darbo stilių

1. Atidarykite {{ui:Parametrai}} ir skirtuką {{ui:BimCraft}}. Raskite {{ui:Darbo stilius}}.
2. Pasirinkite vieną:
   - {{ui:Kiekvienas vaizdas savas}} (pirmasis pasirinkimas): dubliuotas vaizdas nukopijuoja savo anotacijas, ir jos lieka to vaizdo; lapai spausdinami taip, kaip rodo ekranas.
   - {{ui:Bendri komentarai ir pieštukų lentelės}}: dubliuoti vaizdai dalijasi anotacijomis; spausdinimas vyksta per pieštukų lentelę.
3. Po pasirinkimu yra keturi dalykai, kuriuos jis nustato. Pakeiskite bet kurį vieną; tada stilius rodomas kaip {{ui:Pasirinktinis}}.

Darbo stilius saugomas šioje naršyklėje, kaip ir darbo vietos išdėstymas. Šablonas perneša jį į naujus modelius.

## Dubliuoti vaizdą

1. {{ui:Projekto naršyklė}}: kiekvienas aukštų planas, lubų planas, iškvietimas, fasadas ir pjūvis turi mygtuką {{ui:Dubliuoti}} (du lapai).
2. Pavadinkite kopiją ir pasirinkite, kaip ji elgsis:
   - {{ui:Savarankiška kopija}}: jos braižymas, matmenys, iškirpimas, paslėpti elementai ir pieštukai nukopijuojami ir lieka jos pačios. Redaguojant bet kurį vaizdą kitas niekada nesikeičia, todėl lape išleistas vaizdas lieka toks, koks buvo išleistas.
   - {{ui:Susieta}}: rodo tą patį vaizdą su vienu anotacijų ir nustatymų rinkiniu.
3. Kopija išvardyta {{ui:Dubliuoti vaizdai}}. Spustelėkite ją, kad atidarytumėte; juosta virš plano sako, kad tai kopija, ir turi {{ui:Aukštyn}} grįžimui į jos vaizdą.
4. Jos slankiklio mygtukas atveria nustatymus: pavadinimą, {{ui:Vaizdo diapazonas}} (savarankiška kopija turi savąjį), {{ui:Padaryti savarankiška kopija}} susietai kopijai ir {{ui:Naikinti}}.

Fasadų ir pjūvių kopijos dedamos ant jūsų lapų kaip vaizdai, iš kurių jos atsirado. Dubliavimas yra vienas atšaukimo žingsnis, o kopijos saugomos IFC šalia iškvietimų.

## Pieštukai saugomi su vaizdu ir spausdinami kaip matote

1. Įjunkite {{ui:Braižymas}} ir pasirinkite {{ui:Pieštukai}}.
2. {{ui:Kam}} dabar rodo visas kategorijas: sienas, duris ir langus, perdangas, stogus, kolonas, laiptus, baldus ir kita, taip pat braižymą ir matmenis.
3. {{ui:Taikyti}} išsaugo pieštuką IFC kartu su rodomu vaizdu: aukštų planu, lubų planu, iškvietimu ar dubliuotu vaizdu. Pieštukai, sukurti prieš 0.9 versiją, buvo saugomi naršyklėje; {{ui:Laikyti šiuos faile}} juos perkelia.
4. Lapai ir PDF nubraižo kiekvieną pieštuką taip, kaip rodo ekranas.

Norėdami spausdinti per pieštukų lentelę, eilutėje {{ui:Pieštukai}} nustatykite {{ui:Spausdinti}} į {{ui:Per pieštukų lentelę}}, tada pasirinkite lentelę (spalvota, monochrominė, pilkųjų tonų) arba {{ui:Redaguoti pieštukų lentelę…}}: kiekviena spalva gauna spalvą, storį ir tonavimą, su kuriais spausdinama. Lentelė yra CadCraft plotavimo stiliaus failas, todėl {{ui:Importuoti…}} priima lentelę, sukurtą CadCraft programoje, o {{ui:Eksportuoti}} grąžina lentelę. Modelis išsaugo savo pasirinkimą; jei jo nėra, lemia darbo stilius.

## Pateikti elementą kaip kitą klasę

Perdanga, nubraižyta kaip kelias, siena, naudojama kaip plokštė, stogas, suformuotas kaip rampa: išlaikykite įrankį, kuriuo jį nubraižėte, ir pateikite jį tokį, koks jis yra.

1. Pasirinkite elementą ir atidarykite {{ui:Savybės}}. Atidarykite {{ui:Pateikti kaip}}.
2. Paieškos lauke įveskite, kad rastumėte klasę, atitinkančią formą, tada pasirinkite ją ir jos numatytą tipą. Savo tipui pasirinkite USERDEFINED ir suteikite pavadinimą.
3. {{ui:Taikyti}} (vienas atšaukimo žingsnis). {{ui:Išvalyti}} vėl pateikia jį taip, kaip nubraižyta.

Vis tiek redaguojate jį įrankiu, kuriuo nubraižėte. Įrašytas IFC rašo jį kaip pateiktą klasę, todėl kitos programos, {{ui:Kiekiai}} kiekių skaičiavimas, Ieškoti, Spalva pagal, modelio patikrinimai ir {{ui:Problemos}} skaičiuoja jį kaip tą klasę. Žiniaraščiai iš sienų žiniaraščio neįtraukia sienos, pateiktos kaip plokštė, o {{ui:Elementai pagal pateiktą klasę}} išvardija visas tokias sienas. Tai veikia IFC4 ir IFC2X3 failuose; sąraše pateikiamos tik tos klasės, kurias palaiko failo IFC versija. Durys, langai, laiptai, patalpos ir lygiai išlaiko savo klasę.

## Išsaugoti projektą kaip šabloną ir pradėti nuo jo

1. Atidarę projektą, spustelėkite {{ui:Įrašyti kaip šabloną}} šalia {{ui:Įrašyti}}.
2. Pavadinkite jį. Pažymėkite {{ui:Taip pat atsisiųsti šablono failą}}, kad jį bendrintumėte kaip IFC failą, ir {{ui:Nauji modeliai pradedami nuo jo}}, kad jis taptų numatytuoju.
3. Šablone išsaugomi aukštai, vaizdų šablonai ir vaizdų nustatymai, dubliuoti vaizdai ir iškvietimai, braižymas, pieštukai ir pieštukų lentelė, žymos, šeimos ir tipai, lapai, lapų dydžiai, antraštių blokai ir darbo stilius. Sienos, perdangos, durys ir visi kiti modelio elementai neįtraukiami.
4. Spustelėkite {{ui:Naujas pastatas}} ir pasirinkite jį skiltyje {{ui:Pradėti nuo}}, arba pasirinkite {{ui:Šablono failas…}} tam, kuris jums atsiųstas. Naujas projektas gauna savo pavadinimą ir savo projekto tapatybę; viskas kita yra tokia, kokią turi šablonas.

:::note
Šablonai saugomi šioje naršyklėje. Komandiniai šablonai, bendrinami per CadCraft Studio, dar neįgyvendinti: vietoj to siųskite šablono failą.
:::
