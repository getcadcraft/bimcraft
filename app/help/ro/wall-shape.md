---
title: Modelarea unui perete: atașare, profil, înclinare și goluri
summary: Atașați partea de sus a unui perete la un acoperiș, o placă sau un tavan, dați-i propriul contur de elevație, înclinați-l sau tăiați un gol fără ușă sau fereastră, în Proprietăți, într-o elevație sau o secțiune, pe vederea feței peretelui sau în 3D; fiecare este un singur pas de anulare.
keywords: atașare, atașare sus, atașare la bază, acoperiș, placă, tavan, fronton, profil, editare profil, contur de elevație, în trepte, parapet, înclinare, înclinat, înclinare dublă, conic, deschidere, gol în perete, trecere, fără ușă, mânere, elevație, secțiune, 3D, vedere pe față, perete curb, copiere
from: f558b269
---

## Ce veți face

Schimbați forma unui perete deasupra și sub planul său: partea de sus poate urma un acoperiș, o placă de planșeu sau un tavan, poate avea propriul contur văzut din lateral, se poate înclina și poate avea goluri fără ușă sau fereastră. Planul peretelui, colțurile și linia lui de referință rămân cum erau.

## Unde o puteți face

- **Proprietăți**: cu {{ui:Desenare}} și {{ui:Selectare}} active, faceți clic pe un perete desenat. **Proprietăți** arată rândurile peretelui, apoi **Formă**, unde totul se introduce prin tastatură.
- **O elevație sau o secțiune**: creionul din browserul de proiect ({{ui:Editare în această vedere}}) deschide vederea; alegeți acolo un perete și trageți mânerele lui. Vezi „În elevație sau secțiune” mai jos.
- **Vederea pe fața peretelui**: {{ui:Pereți}} › {{ui:Editare profil}}, apoi faceți clic pe perete în plan. Funcționează pentru orice perete, inclusiv pentru unul pe care nicio elevație nu îl privește frontal, și pentru un perete curb (arătat desfășurat).
- **Planul și vederea 3D**: cele patru comenzi din {{ui:Pereți}} (grupul Editare): {{ui:Atașare partea de sus / de jos}}, {{ui:Editare profil}}, {{ui:Înclinare}} și {{ui:Gol în perete}}. Vezi „În plan și în 3D” mai jos.

Oricare cale ați alege, este aceeași modificare: un pas în **Modificări**, pe care {{ui:Anulare}} îl ia înapoi.

Pereții drepți și cei curbi acceptă toate instrumentele de formă. Pe un perete curb, distanțele merg de-a lungul arcului.

## Atașați partea de sus sau baza

- **Atașare sus**: alegeți un acoperiș, o placă sau un tavan. Partea de sus a peretelui urmează partea de jos a ceea ce ați ales, vertical deasupra fiecărui colț al peretelui. Sub un acoperiș înclinat, un perete primește o parte de sus înclinată, iar acolo unde acoperișul își schimbă planul (o coamă sau un colț de ape), partea de sus a peretelui se îndoaie odată cu el.
- **Atașare la bază**: alegeți o placă sau un tavan. Baza peretelui urmează fața de sus a acestuia.
- Acolo unde nu este nimic deasupra (sau dedesubt) unei părți a peretelui, acea parte păstrează propria înălțime a peretelui.
- Legătura rămâne: schimbați panta sau streașina acoperișului ori înălțimea tavanului, iar pereții atașați urmează în același pas.
- Alegeți **Propria înălțime** ca să renunțați.

## Editați profilul

{{ui:Editare profil…}} deschide conturul peretelui văzut din lateral:

- **Linia de sus**: rânduri de **Pe lungime** (distanța de la începutul peretelui) și **Înălțime** (deasupra bazei peretelui). Trei rânduri 0 / 3000, 2500 / 4500, 5000 / 3000 fac un fronton pe un perete de 5 m.
- **Linia de jos**: lăsați-o goală pentru o bază la nivel, sau dați rânduri pentru un perete pe o fundație în trepte.
- {{ui:Adăugare punct}} adaugă un rând, iar **Eliminare** scoate unul. {{ui:Folosește acest profil}} îl aplică; {{ui:Înapoi la drept}} îl elimină.

Fiecare linie merge de-a lungul peretelui o singură dată, de la început la sfârșit; o linie care se întoarce peste ea însăși, sau o parte de sus care coboară până la bază, este refuzată. Dacă există și o parte de sus atașată, se folosește cea mai joasă dintre cele două.

## Înclinați peretele

**Înclinare**: **Vertical**, **Înclinat** (ambele fețe se înclină în aceeași direcție, grosimea rămâne) sau **Dublu înclinat** (fiecare față are unghiul ei: un perete care devine mai subțire sau mai gros pe măsură ce urcă). Introduceți grade față de vertical; un unghi pozitiv se înclină spre stânga peretelui, văzut de la început. Peretele rămâne unde este desenat la bază; pereții legați de el nu se înclină odată cu el.

## Goluri fără ușă sau fereastră

{{ui:Adăugare deschidere}} taie o gaură de 900 de lățime în mijlocul peretelui. Rândul ei din **Deschideri** setează **De la început**, **Lățime**, **Pervaz** (de la nivel) și **Înălțime**; **Eliminare** o scoate. Golul trece prin tot peretele, cantitățile peretelui îl exclud, iar planul arată un spațiu acolo unde ajunge la înălțimea de tăiere a planului. Când începutul peretelui alunecă de-a lungul liniei sale, golul își păstrează locul; o modificare care l-ar lăsa în afara peretelui este refuzată.

## În elevație sau secțiune

Deschideți vederea cu creionul din browserul de proiect. Cu {{ui:Selectare și mutare}} activ:

- **Profil**: faceți clic pe un perete orientat spre vedere. Liniile de sus și de jos devin albastre, cu un mâner pătrat pe fiecare punct și un punct în mijlocul fiecărei bucăți.
  - Trageți un pătrat ca să mutați acel punct (cele două puncte de capăt se mișcă doar sus și jos).
  - Trageți un punct ca să mutați toată bucata sus sau jos.
  - Faceți dublu clic pe o linie (sau clic dreapta) ca să adăugați un punct acolo; {{ui:Adăugare punct (sus)}} și {{ui:Adăugare punct (jos)}} adaugă unul în mijlocul celei mai lungi bucăți.
  - Faceți clic pe un pătrat și apăsați Delete (sau clic dreapta pe el) ca să eliminați acel punct. {{ui:Înapoi la drept}} elimină profilul.
  - Cu un punct selectat, scrieți **Pe lungime** și **Înălțime** în bara de sub bara de instrumente.
- **Atașare**: bara are liste **Atașare sus** și **Atașare la bază** pentru peretele selectat. Sau folosiți instrumentul {{ui:Atașare sus}} ori {{ui:Atașare la bază}}: faceți clic pe perete sau pereți, apoi pe acoperiș, placă sau tavan, arătate ca cutii punctate. Toți pereții aleși se atașează într-un singur pas.
- **Goluri în pereți**: cu instrumentul {{ui:Gol în perete}}, trageți un dreptunghi pe fața peretelui. Înapoi în {{ui:Selectare și mutare}}, trageți un gol ca să-l mutați, trageți unul dintre cele opt mânere ca să-i schimbați dimensiunea, scrieți **De la început**, **Lățime**, **Pervaz** și **Înălțime** în bară sau apăsați Delete ca să-l eliminați.
- **Înclinare**: un perete pe care îl privește vederea (văzut din capăt, ca o secțiune prin el sau într-o elevație din capătul lui) poate fi și el selectat. Trageți mânerul rotund de sus ca să-l înclinați sau alegeți **Vertical**, **Înclinat** ori **Dublu înclinat** în bară și scrieți unghiurile.

Dimensiunile se fixează la pas de 10 mm; scrieți o valoare pentru orice este mai fin. Un perete curb poate fi editat într-o elevație cât timp merge într-o singură direcție peste vedere; vederea lui pe față funcționează mereu.

## În plan și în 3D

Deschideți {{ui:Pereți}} din grupul Editare:

- {{ui:Atașare partea de sus / de jos}}: alegeți **Atașare sus** sau **Atașare la bază** în rândul instrumentului. Faceți clic pe perete sau pereți (în plan sau în vederea 3D), apoi pe ce se atașează: în 3D faceți clic direct pe acoperiș, placă sau tavan; în plan faceți clic pe un punct de sub el (dacă există mai multe, o listă întreabă care).
- {{ui:Editare profil}}: în plan, faceți clic pe un perete ca să-i deschideți vederea pe față. În 3D, faceți clic pe un perete: punctele lui de profil primesc mânere; trageți unul în planul peretelui.
- {{ui:Înclinare}}: faceți clic pe un perete (în plan sau în 3D) și scrieți cât se înclină.
- {{ui:Gol în perete}}: în plan, faceți clic pe perete acolo unde merge golul; **Lățime**, **Înălțime** și **Pervaz** sunt în rândul instrumentului. În 3D, faceți clic pe un colț de pe fața peretelui, apoi pe colțul opus. Cu un perete selectat în 3D, golurile lui au mânere: colțurile schimbă dimensiunea, mijlocul le mută.

Mânerele din 3D sunt ale vederii 3D, deci așteaptă cât timp caseta de secțiune își arată propriile mânere.

## Pe plan

Un perete înclinat este desenat acolo unde planul îl taie (la 1200 deasupra nivelului, dacă vederea nu spune altfel): conturul lui este deplasat cu cât se înclină la acea înălțime, iar un perete cu dublă înclinare este acolo mai lat sau mai îngust. Conturul lui de la podea este desenat cu liniile subțiri ale elementelor de sub tăietură. Colțurile, mânerele și cotele peretelui rămân la baza lui.

## Copii

{{ui:Copiere acest nivel…}} și **Mutare cu** (cu **Copiere** activată) iau cu ele profilul, înclinarea și golurile peretelui. Un perete atașat de o placă sau un tavan este atașat de placa sau tavanul copiat de pe noul nivel; o atașare de un acoperiș nu se copiază odată cu un nivel (acoperișurile nu sunt copiate). O copie de pe același nivel rămâne atașată de același acoperiș, aceeași placă sau același tavan.

## În fișier

Un perete format este scris ca un solid facetat (IfcFacetedBrep), pe care alte programe îl citesc așa cum este desenat; setările lui sunt pe perete (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Un gol este un IfcOpeningElement în perete, fără nimic care să-l umple.

## Încă nerealizat

- Un profil cu console sau cu găuri în contur (folosiți goluri pentru găuri).
- În 3D: adăugarea sau eliminarea punctelor de profil și înclinarea printr-un mâner (folosiți vederea pe fața peretelui, o elevație sau o secțiune, ori scrieți valorile).
- {{ui:Decalare}} cu Copiere activată nu copiază forma sau golurile peretelui ({{ui:Mutare cu}} cu Copiere le copiază).
- Straturile unui perete înclinat nu sunt desenate pe planurile Mediu și Fin (conturul este).
- Goluri care nu sunt dreptunghiuri.
