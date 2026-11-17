---
title: Dezvoltarea unei mase de clădire dintr-un studiu de amplasament
summary: Luați o masă de clădire studiată în vizualizarea de amplasament din CivilCraft și dezvoltați-o în niveluri, pereți și planșee, păstrând locul amplasamentului pe hartă.
keywords: masă, masă de clădire, modelare volumetrică, studiu de amplasament, dezvoltare, CivilCraft, predare, niveluri, pereți, planșee, amprentă, georeferențiere, IFC
from: 557b94d1
---

Vizualizarea de amplasament din CivilCraft poate desena mase de clădire pe o parcelă și le poate verifica față de teren, de limitele pe care le tastați și de soare. **Dezvoltare în BimCraft** deschide BimCraft într-o filă nouă, cu masele; **Mase ca IFC** salvează masele ca un fișier pe care îl deschideți aici în modul obișnuit. În ambele cazuri fiecare masă ajunge ca un amplasament, o clădire cu câte un nivel pe fiecare etaj și un bloc (chiar masa) care poartă cifrele ei.

## Dezvoltarea unei mase

1. Alegeți o masă în vizualizarea 3D. Proprietăți arată utilizarea ei, etajele și înălțimea etajului, amprenta, aria brută a planșeelor, cum stă pe pantă și parcela ei.
2. Faceți clic pe **Dezvoltați această masă**.

Într-un singur pas de anulare, fiecare nivel al clădirii primește pereți în jurul amprentei (amprenta este fața exterioară a pereților; fiecare perete urcă până la nivelul de deasupra, iar cel de sus are o înălțime de etaj) și un planșeu sub întreaga clădire. Blocul este înlocuit, iar clădirea păstrează cifrele studiului în setul de proprietăți `CadCraft_SiteMass`, marcat ca dezvoltat. Nu există acoperiș: un acoperiș depinde de proiect.

## Locul amplasamentului

Un fișier din CivilCraft este scris în unitatea de lungime a proiectului și, când proiectul din CivilCraft avea un sistem de coordonate, îl poartă ca transformare pe hartă a proiectului. Dezvoltarea unei mase nu schimbă asta, deci clădirea rămâne acolo unde o arată harta.
