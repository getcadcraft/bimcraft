---
title: Modelio patikrinimas pagal kliento IDS
summary: Įkelkite gautą .ids failą ir prieš pateikdami IFC skiltyje Problemos peržiūrėkite kiekvieną elementą, kuris neatitinka reikalavimų.
keywords: ids, information delivery specification, buildingsmart, reikalavimai, pateikimas, patikra, validavimas, kokybė, eir, bep, savybė, klasifikacija, medžiaga, pirkimas
from: 7b960222
---

## Ką darysite

IDS (Information Delivery Specification, buildingSMART standartas) yra sąrašas, ką turi būti IFC faile: kokios klasės, kokios savybės su kokiomis reikšmėmis, klasifikacijos, medžiagos, kur turi būti elementai. Kartu su darbu klientai ir viešieji pirkimai siunčia IDS. BimCraft patikrina atvirą IFC modelį pagal jį ir išvardija kiekvieną elementą, kuris neatitinka reikalavimų.

## Žingsniai

1. Atidarykite IFC modelį.
2. Kairiajame skydelyje, po {{ui:Modelio patikros}}, atidarykite {{ui:Patikrinti pagal IDS}}, arba pasirinkite {{ui:Tikrinti pagal IDS…}} savo meniu stiliaus meniu.
3. Spauskite {{ui:Įkelti .ids failą…}} ir pasirinkite failą. Niekas nekeliama į serverį.
4. Perskaitykite rezultatą: kiekvieną specifikaciją su {{ui:Atitinka}} arba {{ui:Neatitinka}} ir kiek elementų ji taikoma.
5. Atidarykite Problemos ({{key:Ctrl+Shift+M}}) ir spustelėkite neatitikimą, kad pasirinktumėte elementą ir priartintumėte prie jo.

## Ką turėtumėte matyti

- Vienas įspėjimas kiekvienam elementui ir kiekvienam reikalavimui, kurio jis neatitinka, su specifikacijos pavadinimu, tuo, ko reikalauja IDS, ir tuo, ką turi elementas.
- Reikalaujama specifikacija, kuriai modelyje nėra atitikmens, yra atskiras įspėjimas.
- Patikros ataskaita (skiltyje Problemos) prasideda nuo IDS: jo pavadinimas, versija, autorius ir kiekvienos specifikacijos taikomų, atitinkančių ir neatitinkančių elementų skaičiai.

## Verta žinoti

- IFC išsaugo tik nuorodą į IDS (jo pavadinimą, pavadinimą, versiją ir maišos reikšmę), o ne patį IDS: kliento IDS gali būti konfidencialus, o IFC siunčiamas kitiems žmonėms. IDS lieka šioje naršyklėje šalia modelio, todėl atidarius išsaugotą IFC čia, jis tikrinamas iš naujo. IDS įkėlimas ar pamiršimas yra vienas žingsnis, kurį galima anuliuoti.
- Atidarius kitame kompiuteryje ar kitoje naršyklėje, Problemos rodo pastabą, kad IDS nerastas: įkelkite jį iš naujo, kad patikrintumėte.
- Norėdami siųsti IDS kartu su IFC, prieš jį įkeldami, parametruose, skirtuke BimCraft, įjunkite {{ui:Laikyti IDS IFC viduje}}.
- Kiekvienas redagavimas, anuliavimas ir perdarymas patikrinami iš naujo po akimirkos.
- Reikšmės lyginamos IDS būdu: tekstas tiksliai (svarbi raidžių būsena), skaičiai SI vienetais su nedideliu nuokrypiu (ilgiai metrais, todėl modelis milimetrais pirmiausia konvertuojamas).
- Specifikacija, parašyta kitai IFC versijai (pvz., IFC2X3, kai modelis yra IFC4), vis tiek tikrinama; rezultate tai nurodoma.
- Jei IDS faile yra klaidų, kurias IDS auditas pažymėtų, dialogas jas išvardija; specifikacijos, kuriose jos yra, neatitinka.
- Neatitikimą galite priimti nurodę priežastį, kaip ir bet kurią problemą. Jis lieka priimtas, kol elemento reikšmės nesikeičia.

- Šablonai IDS faile skaitomi kaip visa reikšmė. `^` pradžioje ir `$` pabaigoje taip pat laikomi „visa reikšmė“, kaip dažniausiai reiškia IDS failai.

## Toliau

- [Patikrinti modelį dėl dažniausių problemų](topic:model-checks)
- [Pakeisti sieną ar duris](topic:change-a-wall-or-door)
