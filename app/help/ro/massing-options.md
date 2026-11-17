---
title: Opțiuni de volumetrie păstrate alăturat
summary: Păstrați mai multe opțiuni de volumetrie în același model, faceți una opțiune curentă, verificați-o față de liniile de construcție și servituțile amplasamentului, aduceți volumetrii din ModelCraft și dezvoltați opțiunea aleasă în pereți și planșee.
keywords: volumetrie, masă, opțiune, opțiuni, set de opțiuni, schemă, concept, proiectare conceptuală, etapa 2, alternative, comparare opțiuni, opțiune curentă, volumetrie clădire, împingere tragere, modelcraft, civilcraft, suprafață construită desfășurată, amprentă, volum, dezvoltare volumetrie, servitute, linie de construcție, retragere
from: 69a01459
---

## Ce veți face

Păstrați opțiunile de volumetrie ale unui concept într-un singur model, în loc de fișiere separate: mai multe volume de clădire alăturate, dintre care unul este **opțiunea curentă**, iar celelalte sunt păstrate pentru comparație.

O opțiune de volumetrie este un volum de clădire: un contur ridicat la o înălțime, cu un număr de etaje. Nu sunt încă pereți. Puteți păstra oricâte doriți, grupate în **seturi de opțiuni** (opțiunile unui set sunt alternative între ele).

## Păstrarea unei opțiuni

1. Deschideți {{ui:Din program de camere în volumetrie}}, scrieți programul de camere și conturul și alegeți {{ui:Găsiți variante}}.
2. Alegeți una dintre opțiunile listate.
3. Sub {{ui:Opțiuni de volumetrie în model}}, scrieți un nume pentru {{ui:Set de opțiuni}} dacă doriți unul și alegeți {{ui:Păstrare opțiune selectată}}.

Opțiunea apare în model ca un volum de clădire și în listă, cu etajele, amprenta, suprafața construită desfășurată și volumul ei. Nimic nu este construit. Păstrați alta în același mod.

Prima opțiune a unui set este opțiunea sa curentă. Fiecare pas este un singur pas de anulare.

## Opțiunea curentă

Câte o opțiune din fiecare set este cea curentă. Asta înseamnă două lucruri:

- **Etajele ei contează drept suprafețele clădirii.** Opțiunea curentă are un spațiu pe etaj care poartă suprafața brută a acelui etaj, astfel încât orice citește suprafețele vede opțiunea în vigoare și nicio alta.
- **Este verificată față de amplasament.** Dacă iese în afara limitei amplasamentului, peste o linie de construcție sau pe o servitute, un avertisment care o numește apare în {{ui:Probleme}}. Este doar un avertisment: nimic nu este refuzat. Opțiunile care nu sunt curente nu sunt verificate.

Alegeți {{ui:Setare ca fiind curentă}} pe altă opțiune ca să o schimbați.

{{ui:Ascundere opțiunilor care nu sunt curente}} ascunde celelalte în vizualizarea 3D. Este valabil doar pentru acest browser și nu este salvat în fișier.

## Volumetrie din ModelCraft

În ModelCraft, {{ui:Export}} › {{ui:Volumetrie către BimCraft…}} trimite fiecare grup sau componentă ca o opțiune. BimCraft deschide fișierul cu opțiunile listate.

Ca să le aduceți într-un model deja deschis, alegeți {{ui:Adăugare opțiuni de volumetrie dintr-un fișier}} și selectați fișierul `.ifc`. Volumele sale intră ca opțiuni ale unui set, într-un singur pas de anulare, stând acolo unde au fost modelate. Un fișier cu volume de clădire din CivilCraft funcționează la fel.

O opțiune marcată „(formă simplificată)” nu era un bloc vertical simplu în ModelCraft (se retrage, se înclină sau nu este închisă). Volumul ei aici este conturul bazei sale ridicat la înălțimea sa; suprafețele etajelor și volumul ei sunt cele măsurate din solidul propriu-zis.

## Dezvoltarea opțiunii alese

Alegeți {{ui:Dezvoltare}} pe o opțiune. Aceasta devine niveluri (adunate până la numărul ei de etaje), pereți în jurul conturului ei la fiecare etaj și o placă de planșeu pe fiecare, într-un singur pas de anulare. Opțiunea iese din listă; celelalte opțiuni rămân cum erau. Nu există încă acoperiș.

{{ui:Redenumire}} schimbă numele unei opțiuni, {{ui:Eliminare}} o scoate din model. Eliminarea opțiunii curente face prima altă opțiune a setului curentă.

## Ce ar trebui să vedeți

- Fiecare opțiune păstrată ca un bloc în vizualizarea 3D și un rând în listă.
- „(curentă)” lângă o opțiune din fiecare set.
- Un avertisment în {{ui:Probleme}} când opțiunea curentă trece peste limita amplasamentului, o linie de construcție sau o servitute.

## De reținut

- În fișierul IFC, o opțiune este un element proxy de tip clădire, cu setul de proprietăți `CadCraft_SiteMass` (setul ei de opțiuni, numele opțiunii și dacă este curentă sunt în acel set). Etajele opțiunii curente sunt spații de tip `MassingFloor`. Alte programe citesc proxy-ul ca un element generic.
- Păstrarea unei opțiuni nu adaugă niciodată niveluri; dezvoltarea uneia da.
- Un asistent poate lista opțiunile păstrate, păstra una, face una curentă, redenumi, dezvolta sau elimina.
