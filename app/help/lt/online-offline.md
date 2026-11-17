---
title: Prisijungus ir neprisijungus
summary: Ką BimCraft įkelia iš svetainės, kaip „Įrašyti neprisijungus“ leidžia atidaryti IFC modelius ir DWG brėžinius be ryšio ir kodėl niekas, ką atidarote, niekada neįkeliama.
keywords: neprisijungus, prisijungus, internetas, ryšys, nėra tinklo, lėktuvo režimas, objekto apsilankymas, įrašyti neprisijungus, paruošta neprisijungus, įkėlimas, privatumas, wasm, WebAssembly, IFC variklis, DWG, debesis
from: 39e5c7eb
---

BimCraft skaito jūsų failus naršyklės skirtuke. Atidarymas, tikrinimas, redagavimas ir įrašymas niekada nesiunčia jūsų failų niekur, nei prisijungus, nei neprisijungus. [Darbas neprisijungus](common:offline) paaiškina neprisijungusias kopijas visose programose; šis puslapis aprašo, kas būdinga BimCraft.

## Ką BimCraft įkelia iš svetainės

| Dalis | Kada įkeliama be neprisijungusios kopijos | Dydis |
|---|---|---|
| Pati programa su 3D žiūrykle ir IFC variklio kodu | Kai atidarote BimCraft | Keli megabaitai |
| IFC variklio WebAssembly dalis | Pirmasis IFC failas, kurį atidarote skirtuke: „Paleidžiamas IFC variklis…“ | Apie 1,6 MB |

DWG ir DXF brėžiniams, projektų ir šeimų failams bei aplankams nieko papildomai nereikia: jų skaitytuvai yra programos dalis.

## Įrašykite BimCraft neprisijungus

1. Atidarykite BimCraft, kai esate prisijungę.
2. Viršutinėje programos juostoje spustelėkite {{ui:Įrašyti neprisijungus}}.
3. Stebėkite, kaip mygtukas skaičiuoja: pavyzdžiui, „Įrašoma 40 iš 212“. BimCraft kopija yra apie 11 MB, nes ji apima IFC variklį.
4. Palaukite, kol atsiras {{ui:Paruošta neprisijungus}}.

Kai atsiranda {{ui:Paruošta neprisijungus}}, IFC modeliai, DWG ir DXF brėžiniai, projektų failai, aplankai ir ši pagalba atsidaro be ryšio. Nereikia pirma atidaryti IFC ar DWG, kad „pašildytumėte“ skaitytuvus.

Norėdami atnaujinti ar pašalinti kopiją, spustelėkite {{ui:Paruošta neprisijungus}} ir pasirinkite {{ui:Įrašyti dar kartą (gauti naujausią versiją)}} arba {{ui:Pašalinti kopiją neprisijungus}}.

## Ką rodo mygtukas

| Mygtukas | Reiškia |
|---|---|
| {{ui:Įrašyti neprisijungus}} | Šioje naršyklėje dar nėra neprisijungusios kopijos. Spustelėkite, kad įrašytumėte vieną |
| „Įrašoma *n* iš *m*“ | Įrašoma; palikite skirtuką atidarytą, kol įrašymas baigsis |
| {{ui:Paruošta neprisijungus}} | Įrašyta. Užveskite pelę, kad pamatytumėte kada; spustelėkite, kad atidarytumėte meniu |
| {{ui:Nepavyko įrašyti}} | Kai kurie failai neatsisiųsti. Patikrinkite ryšį ir spustelėkite, kad bandytumėte dar kartą. Paskutinė gera kopija, jei yra, išsaugoma |
| {{ui:Naudojimas neprisijungus negalimas}} | Šis langas negali išlaikyti neprisijungusios kopijos (privatus langas ar valdomas kompiuteris). Žr. [Darbas neprisijungus](common:offline) |

:::offline
Jūs esate neprisijungę.

- Jei mygtuke rašoma {{ui:Paruošta neprisijungus}}, kiekvienas failo tipas atsidaro įprastai.
- Jei ne, veikia tik tai, ką šis skirtukas jau įkėlė: skaitytuvas, kuris niekada nebuvo įkeltas šiame skirtuke, negali paleisti, o atidarant tokio tipo failą būsenos eilutėje rodoma naršyklės klaida. Neperkraukite skirtuko, kol vėl neprisijungsite.
:::

## Kas niekada nereikalauja ryšio

Kai BimCraft atidarytas skirtuke, šie veiksmai veikia neprisijungus net be įrašytos kopijos:

- Projektų ir šeimų failų skaitymas bei aplankų tikrinimas.
- Elementų pasirinkimas, savybių skaitymas ir IFC reikšmių redagavimas jau atidarytame modelyje.
- {{ui:Įrašyti kaip IFC}} ir {{ui:Atsisiųsti CSV}}: abu yra atsisiuntimai, atliekami skirtuke.

## Kas dar nepasiekiama

- **Debesies saugojimas.** Failai įrašomi tik į jūsų kompiuterį.

Žr. [Kur keliauja jūsų failai](common:your-files).
