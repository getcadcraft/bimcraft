---
title: Uși și ferestre
summary: Puneți uși și ferestre în pereții desenați: arătați un perete, vedeți sensul de deschidere și distanțele până la colțuri, faceți clic; golul din perete se taie singur.
keywords: ușă, uși, fereastră, ferestre, gol, deschidere, balama, sens de deschidere, inversare, ușă glisantă, ușă de buzunar, ușă de garaj, ușă dublă, ușă pliantă, glisor, fereastră fixă, fereastră cu ghilotină, fereastră cu canat, fereastră culisantă, fereastră basculantă, parapet, buiandrug, ușă de dulap, uși franceze, ușă de hambar, lateral, ușă de intrare, fereastră panoramică, fereastră de deasupra ușii
from: 4d8ac009
---

## Ce veți face

Puneți uși și ferestre în pereții pe care i-ați desenat ([Desenarea pereților](topic:draw-walls)). Arătați un perete și ușa sau fereastra arată unde ar merge, în ce sens se deschide și cât este de la fiecare colț. Faceți clic, și golul se taie singur din perete, în plan și în 3D.

## Plasarea unei uși

1. Cu {{ui:Desenare}} activat, faceți clic pe {{ui:Ușă}} (sau apăsați {{key:D}}).
2. Alegeți tipul: **Ușă simplă cu balamale**, **Ușă dublă cu balamale**, **Ușă glisantă**, **Ușă de buzunar**, **Ușă de garaj**, **Ușă pliantă de dulap**, **Uși franceze**, **Ușă de hambar (pe perete)** sau **Ușă de intrare cu laterale**. Dimensiunea obișnuită completează **L** și **Î**; alegeți alta din lista de dimensiuni de lângă ea sau tastați altele, de exemplu `2'-8"` sau `800`. Lista oferă și familiile de uși ale acestui model (vedeți [Familiile și dimensiunile lor](topic:families)).
3. Arătați un perete. Simbolul ușii urmează indicatorul de-a lungul peretelui, iar distanța de la fiecare capăt al feței peretelui apare în plan.
4. Ușa se deschide spre partea peretelui pe care se află indicatorul. Apăsați {{key:H}} (sau faceți clic pe {{ui:Inversare}}) ca balamalele să fie la celălalt capăt.
5. Faceți clic. Ușa este plasată, iar instrumentul rămâne activ pentru următoarea. Arătați spre mijlocul unui perete și ușa se centrează singură.

Ca s-o plasați la o distanță exactă, arătați peretele aproape de colțul de la care măsurați, tastați distanța (de exemplu `2'` sau `600`) și apăsați {{key:Enter}}. Distanța pornește de la capătul cel mai apropiat al feței peretelui până la marginea ușii.

## Plasarea unei ferestre

1. Faceți clic pe {{ui:Fereastră}} (sau apăsați {{key:N}}).
2. Alegeți tipul: **Fereastră fixă**, **Fereastră cu ghilotină simplă**, **Fereastră cu ghilotină dublă**, **Fereastră cu canat**, **Fereastră culisantă**, **Fereastră basculantă**, **Fereastră panoramică** sau **Fereastră de deasupra ușii**, și **L**, **H** și **Parapet** (înălțimea părții de jos a ferestrei față de nivel).
3. Arătați un perete și faceți clic, sau tastați o distanță și apăsați {{key:Enter}}, ca la uși. O fereastră stă pe exteriorul peretelui.

## Mutare, inversare, ștergere

- Cu {{ui:Selectare}} activat, trageți o ușă sau o fereastră de-a lungul peretelui. Trageți-o pe alt perete ca s-o mutați acolo.
- {{key:Delete}} șterge ușile și ferestrele alese; peretele se închide la loc.
- Mutarea sau ștergerea unui perete mută sau șterge ce se află în el. Când începutul unui perete se mută de-a lungul propriei linii, ușile și ferestrele lui își păstrează locul.
- {{ui:Anulare}} și {{ui:Refacere}} duc înapoi și înainte fiecare plasare, mutare sau ștergere.

## Ce este refuzat

- **Nu încape în peretele acela.** Ușa sau fereastra este mai lată decât peretele sau ar ieși prin capătul lui. Încercați o lățime mai mică sau un perete mai lung.
- **Este mai înaltă decât peretele.** Parapetul plus înălțimea depășesc partea de sus a peretelui.

## Ce se salvează

Fiecare ușă sau fereastră este o ușă sau fereastră IFC cu dimensiunea ei, modul de funcționare (de exemplu, ușă simplă cu balamale la stânga), tipul ei de dimensiune (un tip pentru fiecare dimensiune din familia sa), `Pset_DoorCommon` sau `Pset_WindowCommon` și cantități de bază, umplând un gol IFC în peretele ei. Aria netă laterală și volumul peretelui lasă golul afară. Alte programe BIM o deschid ca o ușă într-un perete.

## De reținut

- Planul arată ușile deschise la 90° cu sensul lor, ușile glisante ca două panouri, ușile de buzunar glisând în perete, ușile de garaj ca o linie întreruptă deasupra, iar ferestrele cu liniile cadrului și ale sticlei.
- Lățimea este lățimea totală a cadrului; foaia ușii este lățimea minus cele două tocuri.
- Copierea ușilor și ferestrelor desenate nu este încă realizată: plasați alta.

## Fereastră de evacuare din subsol și groapă

Alegeți **Evacuare din subsol cu groapă** din lista de tipuri de fereastră. Pornește ca un canat de 36 × 48 in, cu un parapet la 36 in deasupra nivelului. Groapa este pe exteriorul peretelui, cu cel puțin 48 in lățime liberă, 36 in de proiecție și un fund cu 6 in sub parapet. Apare ca linii întrerupte în plan și ca trei laturi deschise sus în 3D. Groapa face parte din corpul IFC al ferestrei, deci salvarea, mutarea, redimensionarea sau ștergerea ferestrei o duc cu ele. Redimensionarea păstrează cel puțin 6 in lângă fiecare toc.

Acestea sunt valori implicite de modelare, nu o certificare a conformității cu cerințele de evacuare. Verificați separat deschiderea liberă reală a producătorului, cerințele locale, nivelul terenului, drenajul și orice scară necesară. Adâncimea și înălțimea gropii sunt dimensiuni prestabilite; ele nu urmează terenul.
