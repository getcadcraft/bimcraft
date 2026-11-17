---
title: Aplanko patikra dėl pažeistų kopijų, trūkstamų nuorodų ir likučių
summary: Naudokite aplanko ataskaitą, kad rastumėte nukirstus modelių failus, pasirinktumėte naujausią pilną atsarginę kopiją, matytumėte trūkstamas nuorodas ir aptiktumėte užrakinimo bei laikinuosius failus.
keywords: sveikatos patikra, pažeistas, sugadintas, neišsamus, nukirstas, atsarginė kopija, trūkstamos nuorodos, xref trūksta, auditas, likučiai, užrakinimo failai, dwl, bak, perdavimas
from: 3025a539
---

## Ką darysite

Patikrinkite projekto aplanką prieš jį perduodami ar pradedant darbą: ar kiekvienas modelis išsamus, kuri atsarginė kopija yra paskutinė gera ir ar visi susieti failai yra vietoje?

## Žingsniai: pažeistos kopijos

1. Atidarykite projekto aplanką. Žr. [Atidaryti visą projekto aplanką](topic:open-project-folder).
2. Perskaitykite pastabas po aplanko pavadinimu. Pastaba „2 failai neišsamūs arba neskaitomi. Žr. toliau esančius modelius.“ reiškia, kad yra ką peržiūrėti.
3. Skiltyje **Modeliai** pažiūrėkite stulpelį **Būsena**. **Išsamus** reiškia, kad viskas gerai. Gintaro spalvos „1 neišsamus“ reiškia, kad viena kopija pažeista, bet kita sveika. Raudonas **Neišsamus** reiškia, kad sveikos kopijos nerasta.
4. Atidarykite **Visos … kopijos** po modeliu su problema. Jame išvardijamas pagrindinis failas ir kiekviena sunumeruota atsarginė kopija, naujausia pirmiausia, su dydžiu, data ir būsena.
5. Perskaitykite pastabą virš sąrašo, pavyzdžiui: „Tower.rvt yra neišsamus (183.2 MB, turėtų būti bent 214.0 MB). Kortelėje rodoma naujausia išsami kopija, Tower.0012.rvt (2025 m. kovo 3 d.).“
6. Spustelėkite norimą kopiją, kad ją atidarytumėte. Atidaryti galima tik išsamias kopijas.

## Ką daro sveikatos patikra

Kiekviena kiekvieno modelio kopija gauna greitą antraštės patikrą, po 512 baitų, todėl net didelio modelių aplanko patikra užtrunka kelias sekundes. Failas, kurio paties indeksas rodo už savo pabaigos, buvo nukirstas kopijuojant, įkeliant ar sinchronizuojant. Debesų disko failas, kuris vis dar „tik prisijungus“, atrodo panašiai.

Kiekvieno modelio kortelė skaitoma iš pagrindinio failo, kai jis sveikas, o kai ne, iš naujausios sveikos atsarginės kopijos.

## Žingsniai: trūkstamos nuorodos

1. Po aplanko pavadinimu ieškokite pastabos „*n* susietų failų nėra šiame aplanke.“
2. Slinkite iki **Susieti ir nurodyti failai**. Trūkstamos nuorodos išvardytos pirmiausia.
3. Kiekvienai nuorodai perskaitykite stulpelį **Kur**:
   - **Šiame aplanke**: rasta modelio išsaugotame kelyje.
   - **Rastas tokio pat pavadinimo failas**: tokio pat pavadinimo failas yra kitur aplanke. Patikrinkite, ar tai tinkamas failas.
   - **Bibliotekos failas**: pastabų ar surinkimo kodų lentelė. Jos pateikiamos su programa kiekviename kompiuteryje, todėl aplanke jų nesitikima.
   - **Ne šiame aplanke**: aplanke nerasta niekur.
4. Skiltyje **Naudoja** pažiūrėkite, kurie modeliai susieja kiekvieną failą.

BimCraft ieško kiekvienos nuorodos pirmiausia pagal jos santykinį kelią, tada pagal išsaugoto kelio galą (pvz., `\\server\jobs\Tower\Cad\X-Refs\site.dwg` randamas kaip `X-Refs/site.dwg`, kai pasirinkote aplanką `Cad`), tada pagal failo pavadinimą bet kurioje aplanko vietoje.

## Žingsniai: likučiai

1. Slinkite iki **Atidėta** ataskaitos pabaigoje.
2. Perskaitykite tris eilutes, kurios gali pasirodyti:
   - Tvarkymo aplankai (`*_backup`, `*_log`, `Revit_temp`): neskaitomi.
   - Užrakinimo, žurnalo ir atsarginių kopijų likučiai: failai, pvz., `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Juos palieka programos, kurios sugedo arba buvo atidarytos kopijuojant aplanką. Dažniausiai juos saugu ištrinti, kai niekas jų neatidarę.
   - Kiti failai: viskas kita, ko BimCraft neskaito.

## Dažnos klaidos

- **Pažeisto pagrindinio failo trynimas prieš išsaugant gerą atsarginę kopiją.** Pirmiausia nukopijuokite naujausią išsamią atsarginę kopiją, tada tvarkykite pažeistą failą.
- **Aklas pasitikėjimas „Rastas tokio pat pavadinimo failas“.** Du skirtingi brėžiniai gali turėti tokį patį pavadinimą. Jei abejojate, atidarykite abu.
- **Manymas, kad trūkstamas bibliotekos failas yra problema.** Pastabų ir surinkimo kodų lentelės gyvena kartu su programa kiekviename kompiuteryje.
- **Failų skaičius skiriasi tarp naršyklių.** Firefox ir Safari {{ui:Atidaryti aplanką}} perduoda visus failus, įskaitant esančius tvarkymo aplankuose, todėl skaičius (ir 20 000 failų riba) juos apima. Aplanko įvilkimas juos praleidžia, kaip daro Chrome ir Edge. Kitaip ataskaita ta pati.
