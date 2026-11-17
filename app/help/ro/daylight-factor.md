---
title: Estimarea luminii naturale din fiecare cameră
summary: Factorul mediu de lumină naturală al fiecărei camere, din ferestrele ei, din suprafețele interioare și din cerul pe care îl vede fiecare fereastră, cu unghiul cerului măsurat în model. O estimare la început de proiect, nu o simulare și nu o verificare de cod.
keywords: lumină naturală, factor de lumină naturală, factor mediu de lumină naturală, adf, componenta verticală a cerului, vsc, câștig solar, soare, valoare g, grilă, flux divizat, componenta cerului, componenta reflectată intern, fereastră, vitrare, unghi al cerului, obstrucție, umbrire, balcon, streașină, reflectanță, transmitanță, proiectare timpurie, analiză, camere, spații
from: 5f300a78
---

Fila {{ui:Lumină naturală}} din panoul din dreapta calculează **factorul mediu de lumină naturală** al fiecărei camere: câtă din lumina unui cer acoperit de afară ajunge în cameră, în medie, ca procent. Citește camerele (spațiile) și ferestrele modelului IFC deschis. Nimic nu se modifică în model și nimic nu se încarcă.

:::warning
Tot ce este în această filă este **un instrument de ajutor la proiectare, nu un calcul de conformitate**: estimări la început de proiect prin metode publicate, **nu o simulare** și **nu o verificare față de un cod de construcții sau un standard**. BS EN 17037, LEED, BREEAM și codurile energetice cer o simulare a luminii naturale cu clima locului; folosiți pentru acestea un program de simulare a luminii naturale.
:::

## Cum se calculează

1. Deschideți un model IFC care are camere (spații) și ferestre. Modelele desenate aici au o cameră în fiecare set închis de pereți.
2. Deschideți fila {{ui:Lumină naturală}} și faceți clic pe {{ui:Calculare}}.
3. Fiecare cameră arată factorul ei de lumină naturală și o bandă: sub 2 %, 2–5 % sau 5 % ori mai mult. Faceți clic pe o cameră ca să vedeți suprafețele ei și aria și unghiul cerului pentru fiecare fereastră; camera și ferestrele ei sunt selectate în model.

Modificați o intrare și cifrele urmează imediat; după ce modificați modelul, faceți clic pe {{ui:Calculare din nou}}. {{ui:CSV}} salvează fiecare cameră cu cifrele ei și cu intrările folosite.

## Formula

Factorul mediu de lumină naturală (%) = T × Ag × θ × M ÷ (A × (1 − R²)), adunat pe ferestrele camerei (formula lui Littlefair, folosită de BRE 209, BS 8206-2 și CIBSE LG10):

- **T**, transmitanța luminoasă a sticlei (0.7 la început: folosiți cifra producătorului).
- **Ag**, aria vitrată: aria fiecărei ferestre (lățimea totală × înălțimea, altfel dimensiunea ei din model) × **partea vitrată** (0.75 la început: restul este ramă).
- **θ**, unghiul cerului pe care îl vede fereastra, în grade (mai jos).
- **M**, factorul de întreținere pentru murdăria de pe geam (1 la început).
- **A**, fiecare suprafață interioară a camerei: podea, pereți, tavan și ferestre, luate din forma proprie a camerei.
- **R**, reflectanța lor medie, ponderată după arie: podea 0.2, pereți 0.5, tavan 0.7 la început; sticla contează ca 0.1.

## Cum se măsoară unghiul cerului

Pentru fiecare fereastră BimCraft taie modelul cu un plan vertical perpendicular pe fereastră, pornind de la fața exterioară a sticlei, și privește de la orizont drept în sus: tot ce întâlnește tăietura în fața ferestrei (o clădire vizavi, un balcon sau o streașină deasupra) ascunde o parte din cei 90°. θ este ce rămâne. Fereastra în sine și peretele în care stă sunt lăsate afară. Se face în cinci locuri pe lățimea ferestrei și se ia media, deci un stâlp subțire în fața mijlocului ia partea lui, nu tot cerul.

O clădire aflată cu 8.5 m deasupra centrului ferestrei și la 9.9 m distanță ascunde 40.65° (unghiul a cărui tangentă este 8.5 ÷ 9.9), lăsând θ = 49.35°.

## Componenta verticală a cerului pentru fiecare fereastră

{{ui:Calculare}} măsoară și, pentru fiecare fereastră, ce vede din tot cerul: aceeași tăietură verticală, rotită spre fiecare direcție din fața ferestrei (la fiecare 2°, de la o parte la alta), deci o clădire dintr-o parte, o aripioară sau o nișă adâncă își iau partea lor. Din asta BimCraft calculează **componenta verticală a cerului (VSC)**: cât din lumina cerului acoperit ajunge la sticlă, ca parte din ce ar primi un acoperiș plat deschis. O fereastră fără nimic în față primește **39.6 %**, maximul pentru o fereastră verticală; o clădire lungă care se ridică cu 25° deasupra ferestrei lasă aproximativ **27 %**, cifra pe care ghidul britanic (BRE 209) o folosește ca regulă empirică. Fiecare fereastră din detaliul unei camere arată VSC-ul ei și **unghiul de obstrucție** (cât de sus se ridică lucrurile drept în fața ei).

Cerul este cerul standard CIE acoperit, care este de trei ori mai luminos drept în sus decât la orizont, iar tăietura este exactă: nimic nu este eșantionat.

## Soarele prin ferestre într-o zi anume

Deschideți {{ui:Soarele prin ferestre la o dată}} și alegeți o dată. BimCraft urmărește soarele în acea zi din sfert în sfert de oră și adună, pentru fiecare fereastră, căldura pe care soarele o aduce prin sticlă:

- **soarele direct**, când este în fața ferestrei și nimic din model nu-l ascunde (aceeași tăietură exactă, întoarsă spre soare: un balcon care umbrește soarele de vară sus, la prânz, lasă soarele jos de iarnă să intre);
- **lumina cerului** pe sticlă, minus ce nu poate vedea fereastra;
- lumina **reflectată de sol** (reflectanța lui: 0.2 la început);
- toate trecute prin **valoarea g** a sticlei (partea din energia solară pe care o lasă să treacă: 0.6 la început; folosiți cifra producătorului) și prin partea vitrată.

Fiecare cameră arată totalul zilei în kWh și vârful ei în wați, cu ora; detaliul unei camere desenează ziua ca diagramă. Cerul este senin, după modelul lui Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), cu cifrele de vară sau de iarnă pentru locul și sezonul respectiv și înălțimea amplasamentului; poziția soarelui este cea din NOAA. Latitudinea și longitudinea amplasamentului vin din amplasamentul IFC, iar nordul din nordul adevărat al modelului; dacă modelul nu are amplasament, tastați o latitudine și o longitudine. Orele sunt ora standard (fără ora de vară) în fusul orar pe care îl tastați, altfel cel sugerat de longitudine.

Ce lasă deoparte: norii (este o zi senină), sticla care lasă să intre mai puțin la unghiuri joase, ramele care umbresc sticla, jaluzelele și ce absorb pereții și acoperișul. Estimarea de răcire din aceeași filă folosește vârful.

## Factorul de lumină naturală pe o grilă

Deschideți {{ui:Factorul de lumină naturală pe o grilă}} și faceți clic pe {{ui:Calculare grilă}}: BimCraft pune o grilă peste podeaua fiecărei camere, la înălțimea planului de lucru (0.85 m la început), la jumătate de metru de pereți, și calculează factorul de lumină naturală în fiecare punct prin **metoda fluxului divizat BRE**:

- **componenta cerului**: cerul acoperit văzut din punct prin deschiderea fiecărei ferestre, minus ramele;
- **componenta reflectată exterior**: ce vede punctul din clădirile de afară prin fereastră, care strălucesc cu o zecime din cerul din spatele lor (schimbați luminozitatea obstacolului dacă sunt mult mai deschise sau mai închise);
- **componenta reflectată intern**: lumina care sare prin cameră, de la suprafețele camerei și reflectanțele lor, aria ferestrelor și cât din ea este în afara lor (formula BRE, cu transmitanța sticlei în locul sticlei clare pe care o presupunea).

Fiecare cameră arată media ei, punctul cel mai slab și cât din ea primește 2 % sau mai mult; detaliul unei camere desenează planul cu fiecare punct colorat după factorul său de lumină naturală și ferestrele în roșu. Ca să fie rapid pe orice calculator, o cameră primește cel mult **400 de puncte**: într-o cameră mare distanța crește ca să încapă (tastați o distanță ca să alegeți singur).

## Ce lasă deoparte

- Ferestrele de acoperiș (sticla culcată sau înclinată) sunt listate, dar nu sunt numărate: formulele de aici sunt pentru ferestre în pereți.
- Ferestrele fără cameră în spate (un hol fără spațiu, de exemplu) sunt listate separat.
- Nișele ferestrelor (deschiderea se ia de pe fața exterioară), strălucirea, orele de soare și lumina naturală bazată pe climă. Pentru BS EN 17037, LEED sau BREEAM folosiți un program de simulare a luminii naturale.
- Benzile vin din ghidul britanic mai vechi (BS 8206-2), afișate ca orientare, niciodată ca admis sau respins.
