---
title: Loop mense deur die gebou
summary: 'n Ontruiming of 'n gewone dag se aankomste deur jou vertrekke, deure en trappe, met toue waar die gebou vernou, die langste pad na 'n uitgang uit elke vertrek, en die bevindinge as Probleme. 'n Growwe menigtemodel vir ontwerpbesluite, nie 'n brandveiligheidsertifikaat nie.
keywords: mense, ontruiming, ontvlugting, uitgang, reisafstand, tou, menigte, vloei, deurwydte, trappe, aankomste, knelpunt, simulasie, bewoners, voetganger, wat as, geblokkeerde deur
from: 84aa8920
---

Die {{ui:Mense in die gebou}}-afdeling van die linkerpaneel loop mense deur die vertrekke, deure en trappe van die oop IFC-model. Niks in die model word verander nie en niks word opgelaai nie.

:::warning
Dit is **'n ontwerphulpmiddel, nie 'n brandveiligheidsertifikaat nie**. Dit ken nie vuur, rook, paniek, mobiliteitsverskille of wat 'n kode van jou vra nie. Die grense is joune: die langste pad na 'n uitgang en die beskikbare tyd is getalle wat jy intik, en niks word aangeneem nie.
:::

## Begin dit

1. Maak 'n model met geslote vertrekke en deure oop. 'n Deur met 'n vertrek aan net een kant is 'n uitgang; 'n deur tussen twee vertrekke verbind hulle; 'n trap verbind die vertrekke aan sy punte.
2. Kies **Ontruiming** (almal loop na 'n uitgang), **Aankomste** (almal kom in en loop na 'n vertrek) of **Uitruil** (die mense in die vertrekke gaan uit terwyl net so baie inkom), en die vloeroppervlakte per persoon. Vertrekke wat na 'n gang, trap, portaal of toilet genoem word, hou niemand nie.
3. Klik {{ui:Begin}}. Jy kry die tyd wat die laaste persoon uit is (en wanneer die helfte en negen uit tien uit is), die tou by elke deur en trap, die vertrek met die langste pad, en 'n plan wat die lopie afspeel.

## Wat-as-scenario's

Merk {{ui:Toe}} op 'n deur in die tabel en begin weer: mense vind 'n ander pad, of die vertrekke sonder 'n uitweg word as foute gelys. 'n Deur wat twee keer so wyd is, ontruim 'n vertrek baie vinniger; die tabel wys waar die toue is.

## Hoe dit werk

Elke vertrek is 'n rooster, so mense loop om hoeke, nie deur mure nie. Spoed daal soos 'n vertrek vol raak (S = 1.4 (1 − 0.266 D) m/s, D in mense per m²). 'n Deur laat 1.3 mense per sekonde deur elke meter van sy breedte, minus 150 mm aan elke kant; 'n trap 1.0, en stadiger loop. Mense wag in 'n eerste-kom-eerste-bedien-tou. 'n Lopnommer herhaal dieselfde lopie presies.

Die assistent kan dieselfde ding laat loop: vra vir 'n ontruiming, of die langste pad na 'n uitgang uit elke vertrek.

## Mense in elke vertrek

Maak {{ui:Mense in elke vertrek}} oop om 'n getal vir enige vertrek in te tik. 'n Leë blokkie gebruik die vloeroppervlakte-syfer (in grys gewys); 0 ontruim 'n vertrek. Jou getalle word vir die lopie gebruik en word in hierdie blaaier gehou.

## Teenvloei by deure

In **Uitruil** ontmoet mense wat uitgaan en mense wat inkom by dieselfde deure. Wanneer 'n deur iemand die ander kant toe laat verbygaan kort agter die laaste persoon, hou dit deel van sy tempo (0.8 hier; 'n aanname, omdat gepubliseerde waardes wissel), en die tabel tel die rigtingveranderinge. 'n Deur wat dikwels van rigting verander, word as 'n nota in Probleme gelys.

## Trappe en oorlope

Elke oorloop van 'n trap kos 'n wandelaar een sekonde om te draai ('n aanname). 'n Reguit trap het geen nie; 'n L- of U-trap het een. Die trap se tempo kom steeds uit die breedte van sy loop.

## In die 3D-aansig

Merk {{ui:Wys die mense in die 3D-aansig}} en die wandelaars verskyn as figure in die model, gekleur volgens wat hulle doen, en beweeg soos jy die lopie speel. Niks word by die model gevoeg nie.
