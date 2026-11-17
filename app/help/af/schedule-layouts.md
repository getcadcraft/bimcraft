---
title: Lê 'n skedule uit, stoor en voer dit uit
summary: Groepeer 'n skedule, gee dit subtotale en totale, voeg 'n kolom by wat uit 'n eienskap gelees word, stoor dit as 'n opstelling in die lêer, en voer dit uit as 'n sigbladwerkboek (.xlsx), as teks om in 'n aanlyn sigblad te plak, of as CSV. Die kantoorstandaard vul in wat 'n skedule nie noem nie.
keywords: skedule-uitleg, groepeer volgens, subtotaal, totaal, opskrifte, kantoorstandaard, standaardbeleide, opstelling, deurskedule volgens verdieping, brandgraad, ysterware, xlsx, werkboek, aanlyn sigblad, plak, csv, uitvoer, sigblad, elemente, kies uit skedule, syfer
from: 95dfd801
---

## Wat jy sal doen

Verander 'n gewone skedule in die een wat jou kantoor uitreik: gegroepeer volgens vlak, tipe of vertrek, met subtotale en 'n totaal, met die kolomme wat jy nodig het, onder sy eie naam. Stuur dit dan na 'n sigblad. Elke ry en elke syfer weet steeds van die elemente waarvandaan dit kom.

## Stappe

1. Skakel {{ui:Teken}} aan en maak **Skedules** in die linkerpaneel oop. Kies 'n skedule, byvoorbeeld **Deure**.
2. Bo die tabel, kies **Groepeer volgens** ('n kolom van die skedule, soos Vlak of Tipe, of **Geen groepering**) en **Totale** (**Geen totale**, **Een totaal**, of **Subtotale en 'n totaal**). **Soos gestel** laat die keuse aan die gestoorde opstelling of aan die kantoorstandaard.
3. Om 'n kolom by te voeg wat uit die elemente gelees word, tik 'n eienskap- of etiketnaam onder die tabel (byvoorbeeld `FireRating`, `Pset_DoorCommon.FireRating` of die naam van 'n etiket soos `Ironmongery`) en klik **Voeg kolom by**. BimCraft lees eers die element se eie eiendomstelle, dan dié van sy tipe. Wanneer nog geen element 'n waarde het nie, sê dit so; die kolom vul vanself wanneer 'n waarde gestel word.
4. Tik 'n naam (byvoorbeeld "Deurskedule volgens verdieping") en klik **Stoor as 'n opstelling**. Die opstelling word in die gebouleer gehou en sluit by die Skedules-lys aan onder sy naam. Dit volg elke verandering van die model. **Verwyder hierdie opstelling** haal dit weer uit. Albei is een stap in Ontdoen.

## Klik op 'n syfer om te kies waar dit vandaan kom

Klik enige ry, of enige enkele syfer, om die elemente daaragter in die plan en in 3D te kies:

- 'n ry kies die elemente van daardie ry;
- 'n subtotaal of 'n totaal kies alles wat dit optel, 'n groepsopskrif kies sy groep;
- 'n syfer met sy eie elemente kies daardie: die **Aftrekkings** van 'n muurtipe kies sy deure en vensters, die muuroppervlakte van 'n vertrek sy mure.

Dieselfde werk in 'n dokument wat uit die model gemaak is: in die voorskou, klik 'n syfer van 'n skedule.

## Uitvoer

- **Laai Excel af** stoor 'n .xlsx-werkboek. Lengtes, oppervlaktes, volumes en tellings is werklike getalle in die eenheid wat die kolom wys (voet en duim bly teks). 'n Tweede blad, **Elemente**, lys vir elke lyn die GlobalIds van die elemente daaragter.
- **Kopieer vir Google Sheets** sit die skedule op jou knipbord as tab-geskeide teks. In 'n Google-sigblad, klik sel A1 en plak. **Open 'n nuwe Google-sigblad** open `sheets.new`, Google se eie adres vir 'n leë sigblad, in jou eie Google-rekening. BimCraft meld nie by Google aan nie en stuur niks daarheen nie: die plak is joune.
- **Laai CSV af** stoor die tabel soos dit op die skerm uitgelê is.

## Die kantoorstandaard

'n Kantoor kan eenmaal sê hoe sy skedules uitgelê word. Skakel die **Standaardbeleide**-byvoeging aan ([Standaardbeleide](topic:default-policies)) en stel, in **Instellings › Globaal › Standaardbeleide › Skedule-uitleg (die kantoorstandaard)**:

| Beleid | Wat dit doen |
|---|---|
| Groepeer skedules volgens | Vlak, Tipe, Vertrek of geen groepering, vir elke skedule wat so 'n kolom het |
| Totale in skedules | Geen totale, een totaal aan die einde, of 'n subtotaal onder elke groep en 'n totaal |
| Skedule-titel | 'n Patroon, byvoorbeeld `{project}: {schedule}` |
| Kolomopskrifte | Soos geskryf, IN HOOFLETTERS of Met Hoofletters |

Die standaard geld vir elke skedule, wie dit ook al stel: die gewone skedules in die paneel, 'n gestoorde opstelling, 'n skedule wat 'n assistent opstel, die uitvoere en die skedules in 'n dokument. 'n Opstelling wat sy eie groepering, totale of titel noem, hou dit; die standaard vul die res in. Die paneel sê watter dele die kantoorstandaard gestel het. Die beleide reis saam met die ander in die Standaardbeleide-lêer.

## Goed om te weet

- 'n Opstelling noem sy bronskedule en sy kolomme; dit hou geen getalle nie. Die getalle word elke keer uit die model gelees.
- Lyste wat nie rye van elemente is nie (die muursamestellings en die materiaalverklaring), het hier geen uitleg of uitvoer nie.
- 'n Assistent kan dit alles vir jou doen: sien [Laat 'n KI-assistent met jou model werk](topic:assistants).
