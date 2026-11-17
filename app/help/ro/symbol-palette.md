---
title: Paleta de simboluri
summary: Găsiți simboluri electrice și sanitare după nume sau imagine, marcați cu stea pe cele folosite și plasați-le în plan dintr-un singur clic.
keywords: paletă de simboluri, buton bară de simboluri, simbolurile urmează peretele, simboluri, simboluri electrice, simboluri sanitare, plan sanitar, vas WC, toaletă, lavoar, chiuvetă, cadă, duș, sifon de pardoseală, curățare, robinet de grădină, boiler, robinet, apă rece, apă caldă, scurgere, ventilare, stil de linie, favorite, căutare
from: 67f20bc0
---

## Ce veți face

Deschideți un singur panou care listează simbolurile electrice și simbolurile sanitare din plan, cu imaginile și numele lor, găsiți-l pe cel dorit și plasați-l în plan. Nimic de aici nu are nevoie de internet: simbolurile vin odată cu aplicația.

## Deschideți-o și plasați un simbol

1. Deschideți un model și apoi {{ui:Build}} › {{ui:Paletă de simboluri}} (comanda scrisă: SYMBOLS). Același buton se află în meniul Instrumente al barei Desenare și ca **Simboluri** în grupul Bibliotecă al barei de instrumente.
2. Alegeți un set: **Electrice** sau **Sanitare**, ori **Toate seturile**. Scrieți în câmpul de căutare ca să restrângeți lista. Puteți căuta după nume sau după abreviere (WC, CW, HB).
3. Faceți clic pe un simbol. Planul este gata să-l plaseze.
   - Un simbol **electric** pornește instrumentul Electric cu acel dispozitiv ales, deci tot ce se află la [Planul electric](topic:electrical-plan) se aplică: faceți clic pe plan, un singur pas de anulare.
   - Un simbol **sanitar** pornește instrumentul de simboluri pentru plan. Faceți clic pe plan. Un corp fixat pe perete (un vas WC, un lavoar, o cadă, o chiuvetă, un robinet de grădină) se fixează pe fața cea mai apropiată a peretelui, cu spatele spre perete; scurgerile, robinetele, boilerul și stilurile de linie merg unde faceți clic.
4. Apăsați {{key:R}} ca să rotiți simbolul cu 90 de grade ({{key:Shift}}+{{key:R}} îl rotește în sens invers), sau scrieți un unghi în **Rotație** din bara de opțiuni. Apăsați {{key:Esc}} ca să opriți.

Un corp sau un robinet de grădină fixat pe o față de perete reține peretele: când peretele se mută, simbolul se mută odată cu el (aceeași față, aceeași distanță pe lungimea peretelui), în același pas de anulare. Dacă ștergeți peretele, simbolul rămâne unde era, iar **Probleme** listează „a pierdut peretele”; mutați-l sau ștergeți-l. Simbolurile plasate departe de pereți nu sunt legate de nimic.

Fiecare simbol plasat este un pas de anulare. Un simbol plasat este o adnotare în plan în fișierul IFC, cu eticheta sa (WC1, WC2, ...). Selectați-l ca să-i schimbați eticheta sau rotirea în **Proprietăți**, sau apăsați {{key:Delete}}.

## Ce are setul sanitar

Corpuri (vas WC, pisoar, lavoar, cadă, duș, chiuvetă de bucătărie, chiuvetă simplă), un sifon de pardoseală, curățări de pardoseală și de perete, un robinet de grădină, un hidrant de perete, un boiler, robinete (cu vană, cu glob, cu bilă, de neîntoarcere, cu fluture, reductor de presiune) și stiluri de linie cu abrevierile lor: apă rece (CW), apă caldă (HW), retur apă caldă (HWR), evacuare (W), ventilare (V), canal pluvial (SD) și gaz (G). Desenele se scalează odată cu planul, deci își păstrează dimensiunea pe planșa tipărită. Un stil de linie este un mic segment care arată stilul pe plan; desenați traseele reale de țevi cu instrumentele de țevi.

:::note
Acestea sunt convenții obișnuite pentru planurile sanitare, desenate de noi; nu sunt certificate după ISO 4067-1 sau ASME Y32.4. Au fost comparate cu legende publice de desen și manuale de instruire (lista se află în nota de surse a setului, care arată unde ne potrivim și unde ne deosebim), nu sunt copiate după vreun produs și sunt libere de utilizare (Apache-2.0). Seturile de desen diferă, deci verificați legenda propriului proiect. Sunt simboluri de plan, nu un proiect sanitar: nu dimensionează țevi și nu verifică norme.
:::

## Favorite și tastatură

- Faceți clic pe steluța unui simbol (sau apăsați {{key:F}} pe el) ca să-l păstrați ca favorit. Favoritele apar primele și rămân în acest browser. **Doar favoritele** arată numai acestea.
- {{key:Down}} din câmpul de căutare trece în simboluri; tastele cu săgeți, {{key:Home}} și {{key:End}} se mișcă între ele; {{key:Enter}} alege simbolul focalizat; {{key:Esc}} închide paleta.
- Pe telefon, paleta este un panou în partea de jos a ecranului; se dă la o parte când alegeți un simbol, ca să vedeți planul. Deschideți-o din nou din meniul Build sau din butonul **Paletă** din bara de opțiuni.

:::tip
Dacă un fișier folosește un set de simboluri pe care această versiune nu-l are, planul arată o casetă în locul simbolului, iar **Probleme** îl listează.
:::

## Legați un element plasat de un simbol

Un corp de iluminat din bibliotecă este un element 3D, dar un plan electric arată simbolul său. Îl plasați **o dată** și apoi îl legați:

1. Alegeți Build › **Legătură simbol** (sau scrieți SYMBOLLINK). Se deschide o secțiune Legătură simbol în panoul din stânga.
2. Alegeți elementele plasate în plan sau în 3D. Secțiunea spune câte sunt alese și la ce sunt legate.
3. Alegeți **Simbolul** (din orice set de simboluri: Electrice, Sanitare) și alegeți **Leagă**.

Elementul rămâne un singur element, iar fiecare tabel îl numără o singură dată:

- **3D** arată întotdeauna corpul său.
- Un **plan** arată forma sa de plan, ca înainte.
- Un plan a cărui setare **Această vedere arată elementele legate ca** este pusă pe **Simbolul lor (un plan de instalații)** arată simbolul în locul lor. Un clic pe simbol selectează elementul. Alegerea este păstrată în fișier pentru acea vedere (planul de pardoseală al unui nivel, planul de tavan sau un indicator).

**Rotiți simbolul cu 90°** rotește simbolul față de elementul său. **Eliminați legătura** o scoate; elementul rămâne. Tabelul **Simboluri legate** listează fiecare element legat o singură dată, cu nivelul său și camera în care se află.

Nerealizat: alegerea unei vederi pe o planșă este alegerea planului de nivel pe care îl arată; dispozitivele plasate cu instrumentul Electric sunt simboluri în fiecare plan, ca înainte.
