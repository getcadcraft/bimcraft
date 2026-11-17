---
title: Kopieer, plak en dupliseer biblioteekitems
summary: Kopieer 'n geplaaste biblioteekitem en plak dit waar jy klik, op dieselfde plek langs die oorspronklike, of in 'n ander model; kopieer enige ander element se eienskappe as teks; ontdoen en herdoen.
keywords: kopieer, plak, dupliseer, knipbord, plak op dieselfde plek, sny, skrap, kies alles, ontdoen, herdoen, wysig-kieslys, meer, biblioteekitem, plasing, herhaal, skikking
from: 6ac15931
---

## Wat jy gaan doen

Plaas meer kopieë van 'n item wat jy alreeds geplaas het: 'n tweede werkbank, 'n ry wasbakke. Hierdie onderwerp gaan oor **geplaaste biblioteekitems**, die elemente wat BimCraft in die model geskryf het: een daarvan kan in enige model geplak word, selfs in 'n ander oortjie. Mure, deure en elke ander element word op dieselfde manier binne hul eie model gekopieer, gesny, geplak en geskrap: sien [Skrap, sny, kopieer en plak gebou-elemente](topic:edit-elements).

Die opdragte is in die nutsbalk bo die model: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} en {{ui:More}}, 'n kieslys met {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} en {{ui:Select none}}. 'n Opdrag wat nou nie kan optree nie, is grys; wys daarna om te lees waarom, of klik daarop en die statuslyn sê waarom.

## Stappe

1. Open 'n IFC-model met 'n biblioteekitem daarin, of plaas eers een. Sien [Plaas toerusting en meubels uit die biblioteek](topic:place-from-library).
2. Klik die item in die 3D-aansig. Die eienskappe wys 'n **Biblioteekitem**-blokkie.
3. Klik {{ui:Copy}} of druk {{key:Mod+C}}.
4. Klik {{ui:Paste}} of druk {{key:Mod+V}}. Die plasingbalk maak oop en 'n deursigtige blokkie volg die wyser, gedraai soos die oorspronklike.
5. Druk {{key:R}} om dit 90° te draai, {{key:Tab}} om sy agterkant na 'n muur te laat vasklik, of tik X en Y in die plasingbalk.
6. Klik waar die kopie moet gaan. Elke klik plaas nog 'n kopie; druk {{key:Esc}} om te stop.
7. Klik {{ui:Save as IFC}} om die gewysigde kopie van die model af te laai.

## Plak op dieselfde plek

{{ui:More}}, {{ui:Paste in place}} of {{key:Mod+Shift+V}} plak sonder klik, by dieselfde X en Y en gedraai op dieselfde manier:

- **In dieselfde model, op dieselfde verdieping**: twee items op presies een plek sou nutteloos wees, so die kopie gaan net langs die oorspronklike, een itembreedte plus 100 mm langs die item se eie breedte. Plak weer op dieselfde plek vanaf die nuwe kopie om 'n ry te maak.
- **Na 'n ander verdieping of in 'n ander model**: presies dieselfde X, Y en draai. BimCraft gebruik die verdieping met dieselfde naam; as daar geen is nie, die een op die naaste hoogte. Die statuslyn sê watter een.

## Dupliseer

{{ui:More}}, {{ui:Duplicate}} of {{key:Mod+D}} kopieer die gekose item en begin dadelik met plak: een stap in plaas van twee.

## Na 'n ander model of 'n ander oortjie

Wat jy kopieer, word in hierdie blaaier bewaar, so jy kan 'n ander IFC-model of BimCraft in 'n ander oortjie oopmaak en daar plak. Die ander model benodig die biblioteekitem self: BimCraft het dit wanneer die item geplaas, verwissel of opgedateer is in hierdie oortjie. 'n Item wat in 'n vroeëre sessie geplaas is, kan net in sy eie model weer geplak word; in 'n ander model, plaas dit vanaf die {{ui:Library}}-oortjie.

## Wat jy moet sien

- Die kopie in die model, gekies, met dieselfde biblioteekitem, lisensie, toerustingdata, hoeveelheid en nota as die oorspronklike, en die **volgende vrye itemnommer**. Verander die nommer in Eienskappe, onder `CadCraft_Placement`.
- "Geplaas: *item* (item *n*)" in die veranderingslys. {{key:Mod+Z}} neem dit terug; {{key:Mod+Y}} plaas dit weer.

## Goed om te weet

- Kopieë deel die oorspronklike se tipe, so almal gebruik een stel geometrie, soos wanneer dieselfde item twee keer geplaas word.
- {{ui:Undo}} en {{ui:Redo}} dek elke verandering: waardes wat jy gewysig het, plasings, plakke, verwissels en opdaterings. Herdoen plaas 'n plasing terug op dieselfde plek; 'n nuwe verandering maak weg met wat herdoen kon word.
- In die 2D-aansig van 'n tekening is daar niks om te kies nie, so daar is niks om te kopieer nie. Gebruik {{ui:Edit in CadCraft}} om die tekening te wysig, wanneer dit wys.

## Algemene foute

- **{{ui:Paste}} sê die elemente kom uit 'n ander model.** Die laaste ding wat jy gekopieer het, was 'n gebou-element, of verskeie elemente: dit plak net in hul eie model. Kies een geplaasde biblioteekitem en kopieer dit.
- **{{ui:Paste}} sê die kopie kom uit 'n ander model sonder sy biblioteekitem.** Plaas die item een keer in hierdie oortjie vanaf die {{ui:Library}}-oortjie, kopieer dan en plak dit.
- **{{key:Mod+C}} kopieer bladsyteks in plaas daarvan.** Teks is op die bladsy gekies. Klik eers op die model.

## Verwant

- [Sleutels en muis](topic:keyboard#edit)
- [BimCraft-instellings](topic:settings)
