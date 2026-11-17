---
title: Verificarea unui model pentru probleme frecvente
summary: Găsiți elemente cărora le lipsește o proprietate necesară, GlobalId-uri folosite de două ori, elemente fără niciun nivel și copii suprapuse unele peste altele.
keywords: verificare, verificarea modelului, validare, control calitate, calitate, proprietate lipsă, obligatoriu, duplicat, globalid, guid, nivel, suprapus, suprapunere
from: 4d835513
---

## Ce veți face

Parcurgeți un model înainte de a-l preda: problemele care strică tabelele centralizatoare, cantitățile și programele altora.

## Pași

1. Deschideți un model IFC.
2. Deschideți {{ui:Verificări ale modelului}} în panoul din stânga.
3. Sub {{ui:Proprietăți obligatorii}} există deja o regulă (orice clasă, Name). Schimbați clasa (sau {{ui:Orice clasă}}) și proprietatea sau faceți clic pe {{ui:Adăugare proprietate}} pentru o altă regulă; x elimină una. Un element nu respectă o regulă atunci când proprietatea lipsește sau este goală. Regulile rămân în acest browser pentru fiecare model.
4. Faceți clic pe {{ui:Rulare verificări}}.
5. Faceți clic pe un rezultat pentru a selecta acele elemente și a face zoom pe ele.

## Ce ar trebui să vedeți

- **Lipsește o proprietate obligatorie**: fiecare regulă, cu elementele care nu au pentru ea nicio valoare.
- **GlobalId folosit de două ori**: elemente care au același GlobalId. Alte programe le tratează ca fiind un singur element.
- **Fără niciun nivel**: elemente cu o formă pe care niciun nivel nu o conține.
- **Copii suprapuse**: elemente din aceeași clasă și de același tip, cu aceeași formă în același loc, care se contorizează de două ori în cantități.

Fiecare rând din rezultate este un buton: faceți clic pe el pentru a selecta acele elemente și a face zoom pe ele. Sunt listate doar primele 50 de grupuri ale unei verificări. Aceleași constatări apar și în {{ui:Probleme}}.

## Bună de știut

- Verificările se aplică modelului activ atunci când sunt deschise mai multe. Consultați [Vizualizarea mai multor modele IFC împreună](topic:several-models).
- După o modificare, rulați din nou verificările.
- În panoul {{ui:Probleme}}, lungimile, ariile și volumele din textul unei probleme urmează {{ui:Unități}} alese în bara de instrumente (o ușă de „800 mm” apare ca 2'-7 1/2" în picioare și țoli); schimbați unitatea și panoul le reformulează.

## Continuare

- [Auditarea modelului: camere, etichete, LOD, conflicte și interfețe](topic:audit-the-model)
- [Găsirea elementelor după clasă, nume sau proprietate](topic:find)
- [Ștergerea, decuparea, copierea și lipirea elementelor](topic:copy-paste)
