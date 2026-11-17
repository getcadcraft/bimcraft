---
title: Aplanko ataskaita: vaidmenys, būsenos ir nuorodos
summary: Kiekviena aplanko ataskaitos žymė, ką ji reiškia ir kaip parenkamas pasiūlymas Pradėti čia.
keywords: aplanko ataskaita, vaidmenys, būsena, pilnas, nepilnas, neskaitomas, susietas, fonas, pradinis, centrinis, šeima, tik atsarginės kopijos, pradėti čia, nuorodos būsena
from: b35bdd10
---

## Kopijos būsena

Kiekviena modelio kopija — pagrindinis failas ir sunumeruotos atsarginės kopijos — gauna antraštės patikrinimą.

| Žymė | Reikšmė |
|---|---|
| **Pilnas** | Failo antraštė ir rodyklė telpa į failą |
| **Nepilnas** | Failas trumpesnis, nei jo rodyklė nurodo: jis nukirstas kopijuojant, įkeliant ar sinchronizuojant arba tai debesies failas, kuris vis dar yra būsenoje „tik internete“ |
| **Neskaitomas** | Failas nėra galiojantis sudėtinis failas arba jo nepavyko perskaityti |

Stulpelyje **Būsena** modelis rodo **Pilnas**, gelsvą „*n* nepilnas“, kai bent viena kopija yra bloga, bet kita sveika, arba raudoną **Nepilnas**, kai nėra nė vienos sveikos kopijos.

## Atsarginės kopijos

Failai, pavadinti `Name.0001.rvt`, `Name.0002.rvt` ir t. t., yra `Name.rvt` sunumeruotos atsarginės kopijos. Jos sugrupuotos po savo modeliu, naujausios pirmos, skiltyje **Visos … kopijos**. Kortelė nuskaitoma iš pagrindinio failo, kai jis pilnas, kitu atveju — iš naujausios pilnos atsarginės kopijos („naujausia pilna“).

## Vaidmenys

Rodomi pasvirusiu šriftu po modelio pavadinimu.

| Vaidmuo | Reikšmė |
|---|---|
| Susietas *kito modelio*: fonas | Kitas aplanko modelis susieja šį, todėl greičiausiai tai kito asmens fonas, pavyzdžiui konsultanto modelis |
| Pradinis arba be pavadinimo failas | Pavadinimas kaip Blank, Template, Default, Untitled ar Project1: pradinis taškas arba failas, kuriam niekada tinkamai nesuteiktas pavadinimas |
| Centrinis modelis | Bendrai dirbamas centrinis modelis. Darbas vyksta vietinėje kopijoje, ne čia |
| Šeima (detalė) | `.rfa` ar `.rft` failas: komponentas, o ne projektas |
| Tik atsarginės kopijos | Pagrindinio failo nebėra, liko tik sunumeruotos atsarginės kopijos |

## Kaip parenkamas Pradėti čia

BimCraft taiko tai, ką pritaikytų patyręs naudotojas:

1. Kandidatai yra skaitomi projektų failai (`.rvt`, `.rte`), kurių nesusieja kitas modelis ir kurie nėra pradiniai.
2. Centriniai ir tik atsarginių kopijų modeliai skaičiuojami tik tada, kai nėra geresnio varianto.
3. Iš kandidatų laimi neseniausiai išsaugotas.

Langelyje išvardijamos priežastys, ir jis įspėja, kai failas, atrodantis akivaizdus pasirinkimas, yra pažeistas, kai kiti modeliai yra fonas ir kai pasirinktas modelis yra centrinis. Tai geriausias įvertinimas; patikrinkite su tuo, kas paskutinis dirbo su projektu.

## Nuorodos būsena

| Žymė | Reikšmė |
|---|---|
| **Šiame aplanke** | Rasta išsaugotame santykiniame kelyje arba išsaugoto pilno kelio gale aplanko viduje |
| **Rastas tas pats pavadinimas** | Ne savo kelyje, bet aplanke yra failas tuo pačiu pavadinimu. Patikrinkite, ar tai tinkamas |
| **Bibliotekos failas** | Pagrindinių pastabų (keynote) arba surinkimo kodų lentelė. Jos pateikiamos su programa kiekviename kompiuteryje |
| **Nėra šiame aplanke** | Nerasta niekur aplanke |

Stulpelyje **Rastos nuorodos** skiltyje **Modeliai** rodoma, kiek modelio nuorodų rasta iš tų, kurių tikimasi aplanke (bibliotekos failai neskaičiuojami).

## Atidėta šalia

| Eilutė | Reikšmė |
|---|---|
| Revit techninės priežiūros aplankai (neskaitomi) | `*_backup`, `*_log` ir `Revit_temp` aplankai, taip pat paslėpti aplankai ir `__MACOSX` |
| Užrakto, žurnalo ir atsarginių kopijų liekanos | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` ir `.slog` failai |
| Kiti failai | Visi kiti (pirmieji 40 įvardyti) |
