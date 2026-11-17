---
title: Acoperișuri: o pantă pentru fiecare perete, fronoane, pultele și planuri de acoperiș
summary: Stabiliți pentru fiecare perete de sub un acoperiș: înclinat, capăt cu fronton sau nimic; folosiți presetările în patru ape, cu fronton și pultă, ridicați acoperișul cu înălțimea tălpii, adăugați dulap și plafon de streașină și desenați planuri de acoperiș izolate acolo unde acoperișul automat nu se potrivește.
keywords: schimbare acoperiș, editare acoperiș, acoperiș selectat, proprietăți acoperiș, anulare acoperiș, acoperiș, pantă, pe perete, fronton, capăt cu fronton, pultă, în patru ape, vale, coamă, înălțimea tălpii, călcâi, dulap de streașină, plafon de streașină, streașină, muchie, debordare, plan de acoperiș, acoperiș de portic, lucarnă, lucarnă cu fronton, lucarnă cu pultă
from: 096084a7
---

## Ce veți face

Modelați acoperișul după pereții de sub el. Fiecare perete are propria setare, deci un acoperiș poate fi în patru ape în față, cu fronton la capete și se poate opri plat lângă un perete mai înalt din spate. Pentru un portic sau pentru orice față pe care acoperișul automat nu o poate face, desenați un plan de acoperiș după colțurile lui.

## Puneți un acoperiș

1. Pe nivelul ai cărui pereți poartă acoperișul, faceți clic pe {{ui:Acoperiș}}.
2. Scrieți **Pantă** (`6/12`, sau grade precum `30`) și **Debordare**.
3. Alegeți o presetare: **Acoperiș în patru ape**, **Fronton pe laturile scurte**, **Fronton pe laturile lungi** sau **Pultă** (latura cea mai apropiată de cursor este streașina joasă; celelalte laturi sunt capete cu fronton).
4. Lăsați **Dulap de streașină și plafon de streașină** bifat pentru streșini închise cu dulap de streașină, sau debifați-l pentru o margine de acoperiș fără închidere.
5. Cu cursorul în interiorul clădirii, streașina, coama, coamele de șold și văile apar pe plan. Faceți clic.

Orice contur funcționează: forme în L, T, U și cruce, colțuri înclinate și decupaje. Coamele de șold, coamele și văile sunt găsite acolo unde se întâlnesc planurile acoperișului.

## Un perete pe rând

Alegeți acoperișul (pe nivelul de deasupra pereților, faceți clic în interiorul conturului lui) și uitați-vă la **Fiecare perete** din **Proprietăți**. Când treceți cu cursorul peste un rând, peretele respectiv se marchează pe plan.

- **Înclinat**: peretele are deasupra un plan de acoperiș în pantă. Scrieți lângă el propria pantă, de exemplu `12/12` pentru capete abrupte la un acoperiș de `6/12`.
- **Capăt cu fronton**: acoperișul se oprește într-un capăt vertical deasupra peretelui, peretele este umplut până la acoperiș, iar acoperișul trece peste el cu **Debordarea frontonului**.
- **Niciunul (se oprește la nivel)**: acoperișul se oprește la acel perete, fără debordare și fără perete de fronton, pentru un acoperiș lângă un perete mai înalt.

Lista **Capete** de sus setează toți pereții deodată; **Setare pe perete** apare când pereții nu mai corespund unei presetări.

## Schimbarea unui acoperiș deja pus

Alegeți acoperișul, iar **Proprietăți** arată aceleași setări ca instrumentul Acoperiș: **Pantă**, **Debordare**, **Debordarea frontonului**, **Înălțimea tălpii**, **Înălțimea scândurii de streașină**, **Streașină închisă** și **Grosime**. Fiecare modificare apare imediat pe plan și în 3D, cu aceleași verificări ca instrumentul (o pantă de 80 de grade sau mai mare este refuzată, și la fel o setare care nu poate face un acoperiș). Scrieți o valoare și apăsați {{key:Enter}}, sau părăsiți câmpul.

Fiecare modificare este un singur pas de anulare. Mai multe modificări la aceeași casetă, una după alta (scrieți `6/12`, apoi `7/12`, apoi `8/12`), se unesc într-un singur pas, astfel că un {{key:Ctrl}}+{{key:Z}} readuce acoperișul la ce avea înainte de serie; modificarea unei alte casete începe un pas nou.

## Înălțimea tălpii, scândura și plafonul de streașină

- **Înălțimea tălpii** este locul unde planurile acoperișului se întâlnesc cu exteriorul pereților, măsurată de la podeaua nivelului. Lăsați-o goală ca acoperișul să stea pe partea de sus a pereților; scrieți o valoare mai mare pentru un călcâi ridicat.
- **Înălțimea scândurii de streașină** este scândura de-a lungul streșinilor și în sus pe muchii. Scrieți `0` pentru niciuna.
- **Streașină închisă** pune un plafon orizontal sub fiecare streașină, de la perete până în spatele scândurii.

Fiecare plan se întâlnește cu peretele lui la înălțimea tălpii, deci pereții cu pante diferite păstrează o singură linie a tălpii, iar streșinile lor se termină la înălțimi diferite, cum ar fi fost făcute prin structură.

## Desenarea unui plan de acoperiș

1. Pe nivelul pe care stau pereții planului, deschideți {{ui:Build}} și alegeți {{ui:Plan de acoperiș}}.
2. Scrieți **Pantă** și, dacă nu este vârful pereților, **Înălțimea streșinii**.
3. Faceți clic pe colțuri. Prima latură desenată este streașina; planul se ridică de la ea spre restul formei.
4. Faceți clic din nou pe primul colț, faceți dublu clic sau apăsați {{key:Enter}} ca să încheiați. {{key:Esc}} elimină colțurile.

Un plan de acoperiș nu urmează pereții. Alegeți-l pe nivelul de deasupra (faceți clic în interiorul lui) ca să schimbați panta, înălțimea streașinii sau grosimea, sau apăsați {{key:Delete}} ca să îl eliminați.

## Adăugarea unei lucarne

1. Afișați nivelul pe care se află acoperișul.
2. Deschideți {{ui:Build}} și alegeți {{ui:Lucarnă}}.
3. În rândul de opțiuni alegeți **Tipul lucarnei** (**Cu fronton** sau **Pultă**) și setați **Lățimea**, **Peretele frontal** (înălțimea peretelui frontal de la vârful acoperișului până la streașina lucarnei), **Pantă** și **Debordare**.
4. Faceți clic pe fața acoperișului unde trebuie să fie mijlocul frontului lucarnei.

BimCraft construiește peretele frontal, doi pereți laterali și acoperișul lucarnei, și îl prelungește înapoi până întâlnește acoperișul. O lucarnă cu fronton are două plane care se întâlnesc într-o coamă. O lucarnă cu pultă are un singur plan, care trebuie să fie mai puțin abrupt decât acoperișul. Acoperișul de sub lucarnă este tăiat. Lucarna urmează acoperișul când pereții se mută.

Alegeți-o ca să îi schimbați tipul, lățimea, peretele frontal, panta sau debordarea, în **Proprietăți**. {{key:Delete}} elimină lucarna și închide din nou acoperișul. Trebuie să încapă pe o singură față a acoperișului, departe de coamele de șold, de văi și de coamă; și doar acoperișurile făcute cu instrumentul {{ui:Acoperiș}} primesc lucarne, nu planurile de acoperiș desenate manual. Încă nerealizat: o fereastră în fața lucarnei și lucarne pe planuri de acoperiș desenate manual.

## Ce se salvează

Acoperișurile sunt acoperișuri IFC făcute dintr-o placă de acoperiș pentru fiecare plan, pereți de fronton, un element de dulap de streașină și o acoperire de plafon de streașină. Acoperișul reține lungimile coamelor, coamelor de șold, văilor, streșinilor și muchiilor, precum și ariile lor, pentru extrageri de cantități. Un plan de acoperiș este un acoperiș IFC cu o singură placă.

:::tip
Anularea readuce orice modificare a acoperișului într-un singur pas, inclusiv o presetare care schimbă fiecare perete.
:::
