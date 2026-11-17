---
title: Keisti IFC savybes ir įrašyti redaguotą kopiją
summary: Pakeiskite elemento pavadinimą, žymą, aprašymą ar savybės reikšmę, atšaukite ir atsisiųskite naują IFC failą, o originalas lieka nepakitęs.
keywords: redaguoti, keisti, savybės, parametrai, žyma, pavadinimas, pervardyti, pažymėti, įrašyti kaip, atsisiųsti, anuliuoti, kopijuoti, ifc, rašyti
from: f8035d62
---

## Ką darysite

Ištaisykite IFC modelio duomenis: pervardykite elementą, ištaisykite jo žymą, pakeiskite savybės reikšmę. Tada įrašykite naują IFC failą su pakeitimais. Atidarytas failas niekada nekeičiamas.

## Ką galite keisti

| Laukas | Redaguojamas |
|---|---|
| Pavadinimas, Objekto tipas, Žyma, Aprašymas | Taip |
| Atskiros savybių reikšmės (tekstas, skaičiai, Taip/Ne) | Taip |
| Tipo savybės (rinkiniai pažymėti „(type)“) | Taip, ir pakeitimas taikomas kiekvienam to tipo elementui |
| Tipas, GlobalId, Eilutė | Ne |
| Kiekiai (ilgiai, plotai, tūriai, skaičiai) | Ne |
| Sąrašai, pasirinkimų sąrašai ir kitos kelių dalių reikšmės | Ne |
| Geometrija, padėtis, elementų pridėjimas ar trynimas | Ne |

## Veiksmai

1. Atidarykite IFC modelį ir spustelėkite elementą, kurį norite keisti.
2. Skydelyje {{ui:Savybės}} spustelėkite reikšmę, kurią norite keisti. Ji virsta teksto langeliu. Tuščia reikšmė rodoma kaip *tuščia*.
3. Įveskite naują reikšmę.
4. Paspauskite {{key:Enter}} arba spustelėkite kitur, kad ją išsaugotumėte. Paspauskite {{key:Esc}}, kad atšauktumėte.
5. Pažiūrėkite į reikšmę: dabar ji paryškinta ir šalia jos mėlyna juostelė, žyminti redaguotą reikšmę.
6. Pažiūrėkite į kairėje esančią skiltį {{ui:Pakeitimai}}: pakeitimas išvardytas kaip *elementas*: *laukas*, senoji reikšmė į naują reikšmę.
7. Kartokite kitoms reikšmėms ar kitiems elementams.
8. Spustelėkite {{ui:Įrašyti kaip IFC}} (rodoma, kiek pakeitimų laukia, pavyzdžiui „Įrašyti kaip IFC (3)“), arba paspauskite {{key:Mod+S}}.
9. Savo atsisiuntimų aplanke raskite „*originalus pavadinimas* (edited).ifc“.

## Ką turėtumėte matyti

Būsenos eilutėje rašoma „Įrašytas *pavadinimas* (edited).ifc su *n* pakeitimų (… baitų). Jūsų originalus failas nepakitęs.“ Sąrašas {{ui:Pakeitimai}} ištuštėja ir laukia kito ciklo.

## Reikšmių rūšys

- **Tekstas**: viskas, ką įvedate, išsaugoma kaip yra. Išvalius Pavadinimą, Objekto tipą, Žymą ar Aprašymą, reikšmė pašalinama.
- **Skaičiai**: įveskite paprastą skaičių, pavyzdžiui `2.4` arba `1200`, failo paties vienetais. Be vienetų ženklų. Kitaip rodoma „Naudokite skaičių.“
- **Sveikieji skaičiai** (kiekiai, sveikieji): rodoma „Naudokite sveikąjį skaičių.“, jei įvedate dešimtainį skaičių.
- **Taip/Ne**: reikšmė tampa meniu su Taip ir Ne.

Kiekviena reikšmė išlaiko savo IFC tipą, todėl skaičius lieka skaičiumi, o kitos programos jį teisingai nuskaito.

## Anuliavimas

1. Spustelėkite {{ui:Anuliuoti}} skiltyje {{ui:Pakeitimai}} arba paspauskite {{key:Mod+Z}}, kai nerašote lauke.
2. Kartokite, kad anuliuotumėte daugiau. Kiekvienas anuliavimas pašalina naujausią pakeitimą.

Anuliuoti po įrašymo negalima: po įrašymo sąrašas prasideda iš naujo. Įrašytas failas išsaugo viską.

## Kodėl jūsų pakeitimas keičia tik vieną elementą

Eksportuotojai taupo vietą dalydamiesi duomenimis. Vienas savybių rinkinys gali būti bendras dvidešimčiai durų, o viena reikšmė („Atsparumas ugniai: 60 min“) gali būti įtraukta į devyniasdešimt rinkinių. Jei BimCraft tiesiog pakeistų bendrą reikšmę, pasikeistų visi elementai, kurie ją dalijasi.

Todėl BimCraft prieš rašydamas kopijuoja:

- Jei savybių rinkinys, kurį redaguojate, dalijamas su kitais elementais, jūsų elementas gauna savo rinkinio kopiją, ir keičiasi tik kopija.
- Jei reikšmė dalijasi su kitais rinkiniais, jūsų rinkinys gauna savo reikšmės kopiją.

Kaimyniniai elementai išlaiko senus duomenis. Tai vadinama *kopijavimu rašant* (copy-on-write). Tai prideda keletą mažų įrašų į failą, kuriuos kiekviena IFC programa skaito įprastai.

**Tipo savybės yra sąmoningas išimtis.** Rinkinys, pažymėtas „(type)“, priklauso elemento tipui, o IFC kiekvienas to tipo elementas skaito ją iš ten. Pakeitus ją, pasikeičia tipas, todėl kiekvienas to tipo elementas rodo naują reikšmę. Skiltyje {{ui:Pakeitimai}} tokie pakeitimai pažymimi „(type)“. Žr. [Pakeisti tipo savybę visiems to tipo elementams](topic:type-vs-instance).

## Įspėjimai prieš prarandant darbą

- Atidarius kitą failą, kai yra neįrašytų pakeitimų, klausiama: „Turite *n* neįrašytų pakeitimų faile *failas*. Atmesti juos?“ Spustelėkite Atšaukti, kad tęstumėte darbą, tada įrašykite.
- Uždarius arba perkrovus skirtuką su neįrašytais pakeitimais, naršyklė klausia, ar tikrai norite išeiti.

## Dažnos klaidos

- **Įvedate vienetus.** `2400 mm` atmetama. Įveskite `2400`.
- **Keičiate tipo savybę, kai norėjote vieno elemento.** Prieš rašydami ieškokite pastabos „(type)“. Jei norite, kad vienas elementas skirtųsi, keiskite egzemplioriaus savybę arba jo Žymą ar Pavadinimą.
- **Tikitės, kad pasikeis originalus failas.** Įrašymas visada atsisiunčia naują failą. Pakeiskite originalą patys, jei to norite, ir pasilikite kopiją.
- **Spaudžiate {{key:Mod+S}} be pakeitimų.** BimCraft įrašo tik tada, kai yra ką įrašyti; kitu atveju gali atsidaryti naršyklės „Įrašyti puslapį“. Uždarykite jį.
- **Įrašote du kartus ir tikitės dviejų mažų failų.** Kiekvienas įrašymas apima visus pakeitimus nuo modelio atidarymo.
- **Tikitės, kad redagavimai grįš į projekto failą.** BimCraft įrašo tik IFC. Įkelkite redaguotą IFC į savo projektavimo programą taip, kaip importuojate bet kurį IFC.
