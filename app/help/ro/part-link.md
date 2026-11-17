---
title: Trimiterea unui element în PartCraft și readucerea lui în model
summary: Selectați un suport, o consolă, o balustradă sau o piesă de echipament, proiectați-l ca piesă în PartCraft, cu clădirea din jur, și acceptați forma nouă înapoi în model.
keywords: partcraft, piesă, trimitere, legătură, element, suport, consolă, gard, balustradă, echipament, proiectare, dus-întors, acceptare, modificat, legături de piese
from: 4ce2f449
---

## Ce veți face

Proiectați un element al clădirii ca piesă: trimiteți-l în PartCraft, modificați-l acolo (tăiați, adăugați, găuriți, redimensionați) și aduceți forma nouă înapoi în model.

## Pași

1. Selectați un element din model: un element generic, un echipament, o coloană, o grindă, o balustradă sau un mobilier.
2. Alegeți {{ui:Legături de piese}} pe bara de instrumente, apoi {{ui:Trimitere către PartCraft}}. PartCraft se deschide într-o filă nouă, cu elementul ca piesă. Elementele aflate la cel mult 3 m sunt desenate cu gri alături, pentru a-l proiecta pe loc. Acolo nu pot fi modificate.
3. Modificați piesa în PartCraft. În PartCraft alegeți {{ui:Fișier}} › {{ui:Export}} › {{ui:Salvare înapoi în BimCraft}}. Puteți salva înapoi de câte ori doriți.
4. Înapoi în BimCraft, butonul {{ui:Legături de piese}} afișează un număr, iar cardul trece elementul ca {{ui:Modificat în PartCraft}}, cu modificarea dimensiunii și a volumului descrisă în cuvinte.
5. Alegeți {{ui:Afișare}} pentru a-l vedea, apoi {{ui:Acceptare}} pentru a da elementului forma nouă sau {{ui:Păstrare proprie}} pentru a-l lăsa cum era.

## Ce ar trebui să vedeți

- Acceptarea este un singur pas de anulare. Elementul își păstrează locul, GlobalId, tipul, materialul și proprietățile. Se înlocuiește doar corpul lui.
- Elementul primește un set de proprietăți {{ui:CadCraft_PartLink}} cu legătura, starea și revizia.
- {{ui:Retrimitere}} deschide din nou același element în PartCraft, pe aceeași legătură.

## Bună de știut

- Pereții, planșeele, acoperișurile, ușile, ferestrele, scările, rampele și spațiile sunt desenate de uneltele clădirii dintr-un contur și sunt reconstruite după fiecare modificare. Un corp venit dintr-o altă aplicație ar fi suprascris, astfel încât acestea sunt refuzate, cu motivul afișat.
- Forma revine ca plasă (tesselare IFC), nu ca operații ale piesei. Istoricul piesei rămâne în PartCraft.
- Dacă elementul s-a modificat în model după ce l-ați trimis, cardul o spune înainte de a accepta: acceptarea înlocuiește acele modificări.
- Nimic nu se încarcă pe un server. Cele două aplicații sunt pagini ale aceluiași site și transmit elementul între ele în acest browser. Ambele trebuie să fie deschise în același browser.
- Elementul trebuie să se închidă într-un solid în PartCraft. Un element a cărui formă are goluri mari deschise este refuzat acolo, cu numărul de muchii deschise.
- Pentru a accepta, faceți activ modelul care conține elementul.
