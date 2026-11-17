---
title: Înregistrarea mai multor scanări într-una
summary: Plasați scanări luate din poziții diferite într-un singur cadru prin perechi de puncte alese sau ținte scrise, rafinați-le cu ICP, salvați înregistrarea ca proiect și exportați norul înregistrat ca LAS sau E57.
keywords: înregistrare, scanări, nor de puncte, icp, cel mai apropiat punct iterativ, ținte, perechi de puncte, transformare rigidă, aliniere, îmbinare, e57, las, scanare în BIM
from: e8e270db
---

## Ce urmează să faceți

Mai multe scanări ale aceluiași loc (fiecare din poziția sa de scaner) încep în coordonatele lor proprii. Înregistrați-le: dați fiecărei scanări o singură plasare, ca toate să stea într-un singur cadru, apoi salvați asta ca proiect și scrieți norul înregistrat într-un singur fișier LAS sau E57.

## Plasarea scanărilor

1. Deschideți dialogul ({{ui:Înregistrare scanări…}} în panoul de start sau {{ui:Afișare}} › {{ui:Înregistrare scanări…}} odată ce un model este deschis). {{ui:Adăugare scanări…}} acceptă fișiere LAS, LAZ, E57, PLY, PCD, PTX, PTS sau XYZ, sau le glisați pe dialog. Scanările care folosesc unități diferite sunt refuzate cu o notă: convertiți una mai întâi.
2. Alegeți {{ui:Scanare de mutat}} și {{ui:Plasare față de}}. Imaginea arată fiecare scanare în cadru așa cum este acum, câte o culoare: {{ui:Plan}}, {{ui:Față}} sau {{ui:Lateral}}; trageți ca să deplasați vederea, folosiți rotița ca să măriți.
3. **După perechi de puncte.** Faceți clic pe {{ui:Alegere pereche}}, apoi pe un punct al scanării de mutat, apoi pe același loc de pe altă scanare (un colț, o țintă, baza unui stâlp). Faceți acest lucru de cel puțin trei ori, cu puncte care nu sunt pe aceeași linie și sunt depărtate. Faceți clic pe {{ui:Plasare după perechi}}: scanarea se plasează printr-o potrivire prin cele mai mici pătrate, iar **Rămas** arată cât greșește fiecare pereche. O pereche cu un număr mare este o alegere proastă: eliminați-o cu crucea și plasați din nou.
4. **După ținte.** Dacă se cunosc coordonatele reale ale unui punct (ținte topografice), faceți clic pe {{ui:Alegere, apoi introducere țintă}}, faceți clic pe punctul din scanarea sa și scrieți X, Y și Z ale țintei în rând. Perechile și țintele scrise se pot amesteca liber.

## Rafinarea cu ICP

Perechile dau o plasare aproximativă. {{ui:Rafinare}} mută scanarea până când suprafețele sale stau pe cele ale celeilalte scanări: întâi **punct la punct**, apoi **punct la plan**. Tabelul listează fiecare pas cu eroarea sa și câte puncte s-au potrivit; linia de deasupra desenează eroarea care scade. {{ui:Oprire}} încheie rularea după pasul în curs și păstrează ce a ajuns. {{ui:Anulare}} anulează întreaga rulare (sau ultima plasare); {{ui:Resetare}} readuce scanarea la coordonatele fișierului.

Ca să fie rapid pe un laptop, ICP lucrează pe o parte din puncte ({{ui:Puncte folosite}}, 5,000 până la 60,000) și ignoră potrivirile mai departe de {{ui:Cea mai mare distanță de potrivire}} (implicit 5% din dimensiunea scanării, micșorându-se pe măsură ce se stabilizează). Are nevoie întâi de o plasare aproximativă: scanările care abia se suprapun raportează că nu pot fi potrivite. Suprafețele doar plane sau doar drepte nu pot fixa o poziție de-a lungul lor; adăugați perechi în acest caz.

## Salvare și export

- {{ui:Salvare proiect}} scrie un fișier `.ccscans.json` mic: numele fiecărei scanări, dimensiunea sa și o amprentă a primilor săi 64 KB, cu transformarea sa. Nu conține puncte. {{ui:Deschidere proiect…}} găsește fișierele de scanare după aceste referințe (fișierele trebuie adăugate mai întâi) și readuce fiecare transformare.
- {{ui:Export LAS}} și {{ui:Export E57}} scriu un singur fișier cu fiecare scanare în locul ei înregistrat. Punctele din originale nu se rescriu niciodată; transformarea se aplică la ieșire. Cu {{ui:Citire fiecare punct din fișiere}} activat, fiecare fișier se citește din nou pentru fiecare punct (până la 20 de milioane pe scanare); dezactivat, se scriu doar punctele arătate în vizualizator.
- {{ui:Afișare nor înregistrat}} (BimCraft) scrie LAS-ul și îl deschide în vizualizarea 3D lângă model, ca orice nor.

:::note
Nimic nu se încarcă. Înregistrarea lucrează în unitățile proprii ale fișierelor și păstrează milimetrii: un LAS se scrie cu o scară potrivită (până la 0.1 mm), iar un E57 cu numere duble. Un sistem de coordonate se trece în LAS doar când fiecare scanare indică același cod EPSG. Scriitorul E57 este al nostru; este verificat citindu-i fișierele înapoi cu acest cititor și cu libE57Format.
:::
