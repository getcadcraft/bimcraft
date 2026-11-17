---
title: Susidūrimų tikrinimas
summary: Raskite, kur vieno rinkinio elementai susikerta su kito rinkinio elementais (kanalai per sijas, sienos į perdangas), viename ar keliuose modeliuose, su nuokrypiu, ir paverskite susidūrimą problema.
keywords: susidūrimas, susidūrimų aptikimas, susidūrimų patikra, kietas susidūrimas, įsikišimas, kolizija, koordinavimas, persidengimas, nuokrypis, MEP, konstrukcija
from: 9cb12346
---

## Ką darysite

Raskite vietas, kur du elementų rinkiniai susikerta, pavyzdžiui, visus inžinerinių sistemų modelio elementus su konstrukcija, tada apžiūrėkite kiekvieną ir paliekate tuos, kurie svarbūs, kaip problemas.

## Žingsniai

1. Atidarykite IFC modelį ir, jei tikrinate tarp modelių, pridėkite kitus su {{ui:Pridėti modelį…}}. Žr. [Kelių IFC modelių peržiūra kartu](topic:several-models).
2. Kairiajame skydelyje atidarykite {{ui:Susidūrimų patikra}}.
3. Laukuose {{ui:Tikrinti}} ir {{ui:Su}} pasirinkite du rinkinius: elementus, kuriuos pasirinkote, klasę (visuose atidarytuose modeliuose), išsaugotą paieškos rinkinį (žr. [Ieškoti elementų pagal klasę, pavadinimą ar savybę](topic:find)) arba viską.
4. Nustatykite, kiek persidengimo metrais ignoruoti. 0.01 ignoruoja elementus, kurie tik vos liečiasi.
5. Spauskite {{ui:Vykdyti}}. Tikrinimas vyksta fone; {{ui:Atšaukti}} jį sustabdo.
6. Spustelėkite rezultatą, kad jį pamatytumėte: abu elementai pažymimi ir rodomi, visi kiti tampa permatomi, o vaizdas priartėja prie jų.
7. Spauskite {{ui:Sukurti apie tai problemą}} po rezultatu, kad jį aprašytumėte skirtuke {{ui:Problemos}}. Žr. [Problemos ir BCF failai](topic:issues-bcf).

## Ką turėtumėte matyti

- Susidūrimai išvardyti su abiejų elementų pavadinimais (ir jų failais, kai atidaryta keli modeliai) bei tuo, kiek gilai jie persidengia, pradedant giliausiu.
- Paviršiai, kurie tik liečiasi, pavyzdžiui siena ant perdangos ar durys angoje, nėra susidūrimai.

## Verta žinoti

- Tai pagrindinis kieto susidūrimo tikrinimas: elementai, kurių paviršiai kertasi. Elementas, visiškai paslėptas kitame (vamzdis įmūrytas sienoje), kol kas nerandamas.
- Gylis yra tai, kiek abiejų elementų ribos mažiausiai persidengia: orientyras, o ne tikslus matavimas.

## Toliau

- [Atstumų, paviršių plotų ir vietų matavimas 3D](topic:measure)
- [Slėpti, izoliuoti ir padaryti permatomus elementus](topic:hide-and-isolate)
