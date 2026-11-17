---
title: Rasti susietus brėžinius ir paveikslėlius
summary: Rodykite brėžinio susietus brėžinius (xref) ir antraštės bloko paveikslėlius, atverdami jo aplanką arba pridėdami failus rankiniu būdu.
keywords: xref, išorinė nuoroda, susietas brėžinys, prijungti, uždėti, vaizdas, paveikslėlis, logotipas, antraštės blokas, trūkstamas xref, etransmit, nuorodų tvarkyklė
from: 5593d4b1
---

## Ką darysite

Padarykite brėžinį išsamų: parodykite brėžinius, su kuriais jis susietas (išorines nuorodas, arba xref), ir paveikslėlius, kuriuos jis naudoja, pavyzdžiui logotipą antraštės bloke.

## Lengvas būdas: atidaryti aplanką

1. Spustelėkite {{ui:Atidaryti aplanką}} ir pasirinkite aplanką, kuriame yra brėžinys ir jo nuorodos, pavyzdžiui visą projekto aplanką `Cad`.
2. Ataskaitoje apie aplanką slinkite iki **CAD brėžiniai**.
3. Spustelėkite brėžinį.
4. Pažiūrėkite į dešinėje esantį skydelį {{ui:Savybės}}, skiltyse **Susieti brėžiniai** ir **Paveikslėliai**.

BimCraft kiekvieną susietą brėžinį ieško pagal jo pavadinimą („*pavadinimas*.dwg“), pirmiausia tame pačiame aplanke kaip brėžinys, o paskui bet kur atidarytame aplanke. Paveikslėliai ieškomi tuo pačiu būdu ir dar pagal panašų pavadinimą: eTransmit arba Revit eksportas dažnai prideda projekto pavadinimą priekyje, todėl `logo.png` randamas kaip `Tower-logo-5425051.png`.

## Kitas būdas: pridėti failus rankiniu būdu

1. Atidarykite brėžinį atskirai.
2. Dešinėje, skiltyje **Susieti brėžiniai**, spustelėkite {{ui:Pridėti susietus brėžinius…}}. Skiltyje **Paveikslėliai** mygtukas yra {{ui:Pridėti paveikslėlius…}}; abu atveria tą patį pasirinkimo langą.
3. Pasirinkite susietus `.dwg` failus ir paveikslėlių failus. Galite pasirinkti kelis iš karto.
4. Palaukite, kol BimCraft vėl atvers brėžinį su jais.

## Ką turėtumėte matyti

Kiekvienas susietas brėžinys ir paveikslėlis išvardytas su etikete:

| Etiketė | Reiškia |
|---|---|
| **Rodoma** | Rasta ir nubraižyta. Po ja esantis kelias nurodo, iš kur jis atėjo, arba „pridėjo jūs“. |
| **Rodoma, panašus pavadinimas** | Paveikslėlis rastas pagal panašų pavadinimą. Patikrinkite, ar tai tinkamas. |
| **Nerasta** | Nėra aplanke arba jūsų pridėtuose failuose. Trūkstamas paveikslėlis rodomas kaip tuščias rėmelis. |
| **TIFF naršyklėje negali būti rodomas** | Paveikslėlis yra TIFF failas, o naršyklės jo nepiešia. Įrašykite jį kaip PNG tuo pačiu pavadinimu ir pridėkite. |
| **Negalėjo būti perskaitytas** | Failas rastas, bet jo neįmanoma atverti kaip paveikslėlio. |

Skydelis {{ui:Brėžinys}} kairėje susietiems brėžiniams rodo „*n* iš *m* įkelta“. Susietų brėžinių sluoksniai atsiranda sąraše {{ui:Sluoksniai}} kaip „*nuorodos pavadinimas*|*sluoksnis*“.

## Dažnos klaidos

- **Atidaryti tik brėžinį.** „Šis brėžinys rodo tik savo turinį, kol nepridėti jo susieti brėžiniai. Atidarius visą projekto aplanką, jie randami automatiškai.“
- **Atidaryti per mažą aplanką.** Jei nuorodos yra kaimyniniame aplanke, atidarykite tėvinį aplanką.
- **Pervadintos nuorodos.** BimCraft susietus brėžinius atitinka pagal pavadinimą. Nuoroda, pervadinta diske, nerandama; pridėkite ją rankiniu būdu.
- **Nuorodos į nuorodas.** BimCraft įkelia brėžinius, į kuriuos atidarytas brėžinys nuorodą turi. Brėžiniai, susieti viduje tų brėžinių, neieškomi, todėl šioje versijoje paprastai nerodomi.
