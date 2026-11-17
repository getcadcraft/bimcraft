---
title: Tăierea unui model IFC cu un plan de secțiune
summary: Tăiați modelul 3D de sus, din față sau din lateral, sau păstrați doar ce se află într-o casetă de secțiune sau într-un volum din mai multe casete cu fețe înclinate, ca să vedeți înăuntru; mutați tăietura trăgând sau scriind, inversați-o și alegeți ce arată tăietura.
keywords: secțiune, plan de secțiune, casetă de secțiune, mânere, tragere, margine, casetă de selecție, casetă de tăiere, tăiere, decupare, felie, tăietură în plan, plan de etaj, elevație, interior, inversare, decalare, volum de secțiune, secțiune în trepte, în formă de L, înclinare, tăietură înclinată, plan oblic, plan suplimentar
from: 6315e71a
---

## Ce veți face

Tăiați un model IFC cu un singur plan ca să vedeți înăuntru: de sus pentru un plan, sau din față ori din lateral pentru o secțiune prin clădire.

## Pași

1. Deschideți un model IFC. Vedeți [Deschiderea unui model IFC și privirea în 3D](topic:open-ifc-model).
2. Faceți clic pe {{ui:Secțiune}} în bara de instrumente sau apăsați {{key:X}}. Modelul este tăiat la jumătatea înălțimii, iar sub bara de instrumente apare o bară.
3. Alegeți de unde să tăiați: {{ui:Sus}}, {{ui:Față}} sau {{ui:Lateral}}. Față și Lateral rotesc și vederea spre tăietură.
4. Mutați tăietura: trageți cursorul **Decalare** sau scrieți o distanță în metri în casetă și apăsați {{key:Enter}}. Puteți scrie și milimetri, de exemplu `1200 mm`.
5. Faceți clic pe {{ui:Inversare}} ca să păstrați cealaltă parte a tăieturii.
6. Faceți clic pe un element de pe tăietură ca să-i vedeți proprietățile.
7. Faceți clic pe {{ui:Dezactivat}}, faceți din nou clic pe {{ui:Secțiune}} sau apăsați {{key:X}} ca să înlăturați tăietura.

## O casetă de secțiune

Faceți clic pe {{ui:Casetă}} în aceeași bară ca să păstrați doar ce este într-o casetă. Fiecare dintre {{ui:X}}, {{ui:Y}} și {{ui:Z}} are două cursoare: unde începe caseta și unde se termină, în metri de la marginea modelului. Valorile apar lângă ele.

- {{ui:Casetă în jurul selecției}} potrivește caseta în jurul elementelor alese și mărește vederea pe ele. Lasă 300 mm liberi pe fiecare parte; schimbați asta în {{ui:Setări}} › BimCraft › {{ui:Rezervă în jurul selecției}}.
- Cu elemente alese, {{ui:Afișare}} › {{ui:Casetă de secțiune în jurul selecției}} sau {{key:Shift+X}} face același lucru dintr-un pas, chiar dacă nu este activată nicio tăietură.
- **Mânerele** casetei o mută cu indicatorul: trageți un pătrat din mijlocul unei fețe ca să mutați acea față, unul din mijlocul unei muchii ca să mutați cele două fețe care se întâlnesc acolo, sau unul de la colț ca să mutați cele trei. Cursoarele urmează. În {{ui:Sus}}, un colț mută caseta în plan; în {{ui:Față}} sau {{ui:Lateral}}, în elevație.
- {{ui:Tot modelul}} deschide caseta din nou la întregul model.
- {{ui:Sus}}, {{ui:Față}} sau {{ui:Lateral}} revin la un singur plan.

## Un volum din mai multe casete, fețe înclinate și planuri suplimentare

O casetă nu este întotdeauna forma de care aveți nevoie: o secțiune în trepte, o aripă în formă de L sau o tăietură de-a lungul unui perete care nu este drept față de rețea.

1. În {{ui:Casetă}}, faceți clic pe {{ui:Adăugare casetă}}. Tăietura păstrează acum ce este înăuntrul **oricăreia** dintre casete, deci două casete fac un volum în trepte sau în L. Lista de lângă ele arată ce casetă modifică cursoarele ({{ui:Casetă 1}}, {{ui:Casetă 2}}…); {{ui:Eliminare această casetă}} înlătură cea aleasă. Un volum are până la 8 casete.
2. Deschideți {{ui:Înclinare și planuri}} ca să modelați caseta aleasă:
   - Alegeți o {{ui:Față}} și scrieți cât se înclină în fiecare sens, în grade (până la 80). Fața se rotește în jurul mijlocului ei; celelalte fețe rămân unde le-au pus cursoarele. {{ui:Drept}} o readuce.
   - {{ui:Adăugare plan}} taie caseta cu încă un plan. {{ui:Fețe}} este direcția în care privește partea tăiată, în grade de la X spre Y; {{ui:Pantă}} este cât se întoarce în sus (0 pentru un plan vertical, 90 pentru unul orizontal); {{ui:Decalare}} este cât de departe este planul de mijlocul casetei, în metri. × îl elimină. O casetă are până la 6 planuri suplimentare.
3. Acolo unde volumul taie corpuri solide, fețele tăiate sunt umplute ca până acum, inclusiv acolo unde două casete se întâlnesc într-o treaptă.

:::tip
Dacă de contur dispare și nu rămâne nimic, înclinările sau planurile nu lasă nimic în interiorul acelei casete; bara o spune. Înclinați o față înapoi sau schimbați decalarea unui plan.
:::

## O clădire rotită pe amplasament

Multe modele pun clădirea în unghi față de axele fișierului (nordul adevărat, coordonate partajate). Când pereții sunt înclinați, o secțiune nouă începe drept față de clădire: {{ui:Față}}, {{ui:Lateral}} și caseta merg de-a lungul propriilor ei pereți, iar {{ui:Aliniat la clădire}} din bara de secțiune este activat. Faceți clic pe el pentru axele modelului și din nou ca să reveniți (bara de stare spune cu cât este rotită clădirea). Cu **Setări › BimCraft › O clădire rotită pe amplasament › Așa cum este pe amplasament**, secțiunile și vederile pornesc în schimb de pe axele modelului. Vedeți [Setări](topic:settings).

## Ce ar trebui să vedeți

- **Sus** păstrează ce este sub tăietură, astfel încât priviți în jos spre încăperi. Decalarea se măsoară în sus de la baza modelului.
- **Față** păstrează ce este în spatele tăieturii, văzut din față; **Lateral** păstrează ce este dincolo de ea, văzut din lateral. Decalarea se măsoară de la fața sau lateralul modelului.
- Un contur subțire colorat arată unde este planul.
- Acolo unde planul taie un perete, o placă sau alt corp solid, fața tăiată este umplută cu o culoare închisă, ca o secțiune desenată. {{ui:Umplere}} din bară o activează și o dezactivează.
- Cubul de vizualizare din colțul din dreapta jos întoarce modelul ca să priviți tăietura din orice parte.
- Clicul alege ce puteți vedea: ce este tăiat nu poate fi ales.

## Greșeli frecvente

- **Nimic nu s-a schimbat.** Este posibil ca tăietura să fie deasupra acoperișului sau în afara modelului. Trageți cursorul sau scrieți o decalare mai mică.
- **Decalarea a sărit înapoi.** O distanță dincolo de model este mutată la capătul ei, iar bara de stare o spune.
- **O problemă arată doar o parte din volumul meu.** O problemă (BCF) păstrează o casetă cu fețele și planurile ei înclinate: prima casetă a unui volum. Bara de stare o spune când creați problema.
- **Tăietura este goală.** {{ui:Umplere}} din bară este dezactivată: faceți clic pe ea ca să umpleți fețele tăiate ale pereților, plăcilor și altor corpuri solide.
- **O tăietură umplută pare pătată sau lipsește o bucată.** Umplerea cere corpuri închise; un element a cărui formă din fișier nu este închisă (o foaie simplă, frunziș de copac) rămâne neumplut, în loc să fie pictat peste. Un element făcut din piese de culori diferite (un cadru și sticla lui) este umplut când piesele lui se închid una pe alta.
- **Unde este bara de secțiune?** Stă în partea de sus a vederii 3D pe care o taie: în jumătatea 3D din {{ui:Divizare}}, și sub bara de desen când este doar {{ui:Plan}}. Într-o vedere scurtă se derulează.

## Mai departe

- [Afișarea și ascunderea etajelor, spațiilor și muchiilor](topic:storeys-and-spaces)
- [Vizualizarea unui desen DWG sau DXF în 3D](topic:dwg-in-3d): desenele în 3D au același plan de secțiune
