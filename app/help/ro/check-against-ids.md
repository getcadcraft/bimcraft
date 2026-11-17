---
title: Verificarea unui model față de IDS-ul unui client
summary: Încărcați fișierul .ids primit și vedeți în Probleme fiecare element care nu îl respectă, înainte de a livra fișierul IFC.
keywords: ids, information delivery specification, buildingsmart, cerințe, livrare, verificare, validare, asigurarea calității, eir, bep, proprietate, clasificare, material, achiziții
from: 7b960222
---

## Ce veți face

Un IDS (Information Delivery Specification, standard buildingSMART) este lista a ceea ce trebuie să conțină un IFC: ce clase, ce proprietăți cu ce valori, clasificări, materiale, unde trebuie plasate elementele. Clienții și achizițiile publice trimit unul odată cu lucrarea. BimCraft verifică modelul IFC deschis față de acesta și listează fiecare element care nu îndeplinește cerințele.

## Pași

1. Deschideți un model IFC.
2. Deschideți {{ui:Verificare față de un IDS}} în panoul din stânga, sub {{ui:Verificări ale modelului}}, sau alegeți {{ui:Verificare față de IDS…}} din meniul stilului de meniu ales.
3. Apăsați {{ui:Încărcare fișier .ids…}} și alegeți fișierul. Nimic nu este încărcat pe server.
4. Citiți rezultatul: fiecare specificație cu {{ui:Trece}} sau {{ui:Nu trece}} și câte elemente i se aplică.
5. Deschideți Probleme ({{key:Ctrl+Shift+M}}) și faceți clic pe o neconformitate ca să selectați elementul și să faceți zoom la el.

## Ce ar trebui să vedeți

- Un avertisment pentru fiecare element și cerință pe care o ratează, cu numele specificației, ceea ce cere IDS-ul și ceea ce are elementul.
- O specificație obligatorie pe care nimic din model nu o îndeplinește este un avertisment separat.
- Raportul de verificare (în Probleme) începe cu IDS-ul: titlul, versiunea, autorul și numărul de elemente aplicabile, trecute și nereușite pentru fiecare specificație.

## De reținut

- IFC-ul păstrează doar o referință la IDS (numele, titlul, versiunea și un hash), nu IDS-ul în sine: IDS-ul unui client poate fi confidențial, iar IFC-ul ajunge și la alte persoane. IDS-ul rămâne în acest browser, lângă model, deci când redeschideți aici IFC-ul salvat, acesta este verificat din nou. Încărcarea sau uitarea IDS-ului este un pas pe care îl puteți anula.
- Deschis pe alt calculator sau într-un alt browser, Probleme afișează o notă că IDS-ul nu a fost găsit: încărcați-l din nou pentru a relua verificarea.
- Pentru a trimite IDS-ul împreună cu IFC-ul, activați {{ui:Păstrare IDS în IFC}} din Setări, pe fila BimCraft, înainte de a-l încărca.
- Fiecare modificare, anulare și refacere este verificată din nou puțin mai târziu.
- Valorile sunt comparate în modul IDS: textul exact (contează majusculele), numerele în unități SI cu o mică toleranță (lungimile în metri, deci un model în milimetri este convertit mai întâi).
- O specificație scrisă pentru altă versiune IFC (de exemplu IFC2X3 când modelul este IFC4) este totuși verificată, iar rezultatul o precizează.
- Dacă fișierul IDS are defecte pe care un audit IDS le-ar semnala, dialogul le listează; specificațiile în care apar eșuează.
- Puteți accepta o neconformitate cu un motiv, ca orice problemă. Rămâne acceptată atât timp cât valorile elementului nu se schimbă.

- Șabloanele (pattern) din IDS sunt citite ca valoare întreagă. Un `^` la început și un `$` la sfârșit sunt tratate tot ca „valoarea întreagă”, cum înțeleg de obicei fișierele IDS.

## Următorul pas

- [Verificarea unui model pentru probleme frecvente](topic:model-checks)
- [Modificarea unui perete sau a unei uși](topic:change-a-wall-or-door)
