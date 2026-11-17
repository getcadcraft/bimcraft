---
title: Panouri fotovoltaice solare, umbrire și producție
summary: Montați câmpuri de panouri solare pe acoperișuri sau la sol, umbriți-le din model, estimați energia anuală, dimensionați șirurile și faceți datele schemei monofilare. Toate datele de intrare sunt afișate, iar modulul de pornire și pierderile sunt generice.
keywords: solar, pv, fotovoltaic, câmp, modul, acoperiș, umbrire, producție, kwh, kwp, dimensionare șiruri, invertor, schemă monofilară, înclinare, azimut, distanță între rânduri
from: adf4aaf3
---

## Ce veți face

Deschideți panoul **Solar PV**. Alegeți o față de acoperiș (înclinarea și orientarea ei sunt citite din model) sau așezați un câmp la sol cu o înclinare și o orientare; modulele se montează în interior, cu retrageri, și sunt numărate, dând puterea în curent continuu în kWp. Plasarea câmpului îl scrie în model ca dispozitive solare, într-un singur pas de anulare.

## Umbrire, producție și șiruri

- **Umbrirea** trimite de la fiecare modul o rază spre soare, pentru zilele tipice ale fiecărei luni, față de geometria proprie a modelului, astfel că clădirile vecine, parapeții și rândurile din față contează. Se reduce doar lumina directă a soarelui, iar un câmp parțial umbrit pierde putere proporțional.
- **Producția** dă kWh pe lună și pe an, kWh pe kWp și raportul de performanță. Soarele vine din totalurile dvs. lunare pe o suprafață orizontală, dacă le tastați. Fără ele, panoul folosește o limită superioară pentru cer senin și o spune. Cu butonul **Preluare climă de la NASA POWER** din fila Producție se trimite doar latitudinea și longitudinea amplasamentului, o singură dată, iar răspunsul se păstrează pe acest calculator (verificat din browser la 2026-10-30). PVGIS nu permite unei pagini web să-i citească răspunsul, așa că fila dă un link care deschide datele lunare PVGIS ale amplasamentului într-un tab nou; lipiți ce arată în casetă și cele douăsprezece luni se completează.
- **Șirurile** verifică modulele pe șir față de fereastra de tensiune a invertorului în cea mai rece și cea mai caldă zi, iar șirurile în paralel față de curentul lui.
- **Schema monofilară** face datele schemei (câmp, cutie de combinare, separator, invertor, tablou, rețea) cu dimensiunile conductoarelor și siguranțelor din factorii pe care îi tastați. Sunt date și un SVG; suplimentul Electrical din CadCraft le poate plasa ca simboluri.

Modulul, invertorul, pierderile și factorii pentru conductoare care vin cu BimCraft sunt exemple generice, etichetate în fiecare rezultat. Tastați datele producătorului și valorile normativelor după care proiectați, iar proiectul să fie verificat de persoana care răspunde pentru el.
