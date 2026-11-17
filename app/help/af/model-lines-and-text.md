---
title: Modellyne en modelteks: geteken in die model, op die werkvlak
summary: 'n Modellyn is 'n lyn, polilyn of boog wat in die model leef en in elke aansig wat dit sien, wys. Modelteks is 3D-letters met werklike diepte. Albei word op die werkvlak geteken.
keywords: modellyn, modelteks, 3D-teks, letters, bord, bewegwysing, lyn in 3D, boog, polilyn, werkvlak, uitgeskuifde teks, lettertipe, diepte, detaillyn, tekenlyn, annotasie, IfcAnnotation
from: fc9cccb5
---

## Wat jy sal doen

Teken lyne en letters wat deel van die model is, nie van een aansig nie.

## Stappe

1. Stel eers die werkvlak (sien **Die werkvlak**). 'n Vlakke vlak word op die plan geteken; 'n regop vlak in die Werkvlak-kyker.
2. Vir 'n lyn kies **Modellyn** in die **Bou**-kieslys en kies **Lyn**, **Polilyn** of **Boog (drie punte)**:
   - 'n lyn is twee klikke;
   - 'n polilyn is een klik vir elke punt, dan Enter of 'n dubbelklik. 'n Klik op die eerste punt sluit dit;
   - 'n boog is drie klikke: sy begin, 'n punt waardeur dit gaan, en sy einde.
3. Vir teks kies **Modelteks**. Tik die woorde, stel die hoofletterhoogte en die diepte, en klik dan waar die teks begin (die linkerent van sy basislyn).
4. Kies 'n lyn of 'n teks om dit in **Eienskappe** te sien. 'n Teks se woorde, hoogte en diepte kan daar verander word. Skrap verwyder dit.

## Waar hulle wys

- 'n Modellyn wys op die plan van sy vlak, in die 3D-aansig, in die aanse- en snitpaneel en in die Werkvlak-kyker wanneer dit op die werkvlak lê. 'n Tekenlyn (Annoteer, Lyn) behoort aan net een aansig.
- Modelteks is soliede geometrie: dit wys oral waar die model wys, op die plan, in 3D, in aanse en snitte, en op blaaie.
- Modellyne word nog nie op gedrukte blaaie geteken nie. Modelteks wel.

## Die lettertipe

Modelteks gebruik dieselfde lettertipe as die blaaie en PDF's: Liberation Sans, onder die SIL Open Font License. 'n Letter wat die lettertipe nie het nie, word as 'n vraagteken geteken, en jy word vertel watter. Daar is een lettertipe en een gewig. Letters word gespasieer volgens die lettertipe se eie breedtes, sonder kerning.

## In die IFC-lêer

- 'n Modellyn is 'n IfcAnnotation met die objektipe ModelLine. Sy vorm is 'n 3D-kromme: 'n polilyn, of 'n afgesnyde sirkel vir 'n boog.
- Modelteks is 'n IfcBuildingElementProxy met die objektipe ModelText. Sy vorm is een uitgeskuifde soliede liggaam vir elke letterstuk, met die gate van letters soos O en B. Sy hoeveelhede is die vlakoppervlakte en die volume (vlakoppervlakte maal diepte).

## Goed om te weet

- Enige grootte word gemaak soos jy vra. Net 'n lyn sonder lengte, 'n boog waarvan die drie punte in een lyn lê, of 'n teks sonder letters word geweier, omdat daar niks is om te maak nie.
- Elke lyn, en elke teks of verandering daaraan, is een stap van Ontdoen.
