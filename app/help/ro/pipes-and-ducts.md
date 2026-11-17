---
title: Țevi și conducte de aer
summary: Desenați trasee de țevi și de conducte de aer pe plan, după liniile lor mediane; coturile, teurile, reducțiile și tranzițiile sunt făcute pentru dumneavoastră, traseele aparțin unor sisteme cu porturi conectate în fișierul IFC și apar în planuri, în tabele centralizatoare și în extragerea de cantități.
keywords: țeavă, țevi, instalații de țevi, instalații sanitare, conductă de aer, conducte de aer, instalații HVAC, MEP, mecanic, cot, teu, reducție, tranziție, racord, racorduri, robinet, robinete, robinet cu sertar, robinet cu bilă, robinet cu ventil, clapetă de reținere, coloană, pantă, scurgere, sanitar, pluvial, ventilație, apă rece, apă caldă, apă răcită, încălzire, gaz, protecție la incendiu, aer de alimentare, aer de retur, evacuare, sistem, sisteme, port, porturi, conector, conectori, obiect sanitar, obiecte sanitare, lavoar, chiuvetă, vas WC, cadă de duș, cuvă de spălat rufe, unități de obiect sanitar, UHC, DFU, dimensionarea scurgerilor, dimensionare scurgeri, scurgere de clădire, ramificație, ramal, coletor, debit de aer, cfm, frecare, frecare egală, dimensionare, tabel centralizator, extragere de cantități, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## Ce veți face

Desenați țevile și conductele de aer ale unei clădiri ca pe pereți: faceți clic pe colțurile liniei mediane a unui traseu, la înălțimea setată. BimCraft face racordurile, pune fiecare piesă în sistemul ei și le conectează, astfel încât alte programe citesc traseul ca un sistem conectat.

## Desenarea unei țevi

1. Activați {{ui:Draw}}, deschideți {{ui:Build}} și alegeți {{ui:Pipe}}.
2. În bară, alegeți **sistemul** (apă rece, apă caldă, scurgere sanitară, gaz…). El stabilește un material obișnuit: cupru pentru apă, PVC pentru scurgeri și ventilații, oțel pentru încălzire, apă răcită, gaz și protecție la incendiu. Schimbați **materialul**, **clasa** și **dimensiunea** dacă este nevoie. Dimensiunile și pereții provin din standarde publice: țeavă din oțel ASME B36.10M, țeavă de cupru ASTM B88, PVC ASTM D1785 și PEX ASTM F876. Proiectele braziliene pot folosi **PVC water pipe (NBR 5648)**, PVC lipit cu solvent pentru apă rece, și **PVC drain pipe (NBR 5688)**, seria normală sau consolidată, pentru scurgeri și ventilații: dimensiunile lor se denumesc prin DN (DN 25, DN 100). Odată ce alegeți una dintre ele, alegerea altui sistem păstrează țevile braziliene (PVC pentru scurgere pentru o scurgere sanitară după PVC pentru apă).
3. Setați **At** (La cota): înălțimea liniei mediane a țevii deasupra nivelului.
4. Faceți clic unde începe țeava, apoi pe fiecare colț. Faceți dublu clic, sau apăsați {{key:Enter}}, la ultimul punct. {{key:Backspace}} anulează ultimul colț; {{key:Esc}} renunță la traseu.

Țeava se fixează ca pereții și de alte trasee: începeți pe capătul unei țevi ca să continuați de la ea, sau încheiați pe linia unei țevi ca să faceți o ramificație. Un traseu nou preia înălțimea țevii de care se fixează.

Un traseu început sau încheiat pe un port al unui echipament preia dimensiunea și sistemul lui și rămâne fixat de el: vezi [Echipamente MEP cu porturi](topic:mep-equipment) și [Conectarea țevilor și a conductelor de aer la echipamente](topic:mep-connections).

## Setarea standardului instalațiilor sanitare al proiectului

Prima listă din bara țevii este **standardul instalațiilor sanitare** al modelului: **US (IPC, inches)** sau **Brazil (ABNT, DN)**. Este salvat în model, astfel încât oricine deschide fișierul pornește traseele la fel. Sub **US**, un traseu nou pornește în cupru (apă) sau PVC Schedule 40 (scurgeri), în inch, cu panta International Plumbing Code. Sub **Brazil**, apa rece pornește ca PVC soldável DN 25, scurgerile sanitare și pluviale și ventilațiile ca PVC esgoto DN 100 cu panta NBR 8160, iar apa caldă în cupru. Se aplică și unui traseu pornit de la un conector de obiect sanitar sau de la un port de echipament. Țevile deja desenate își păstrează materialul și propriile tabele; lista de materiale rămâne deschisă, astfel încât puteți desena în continuare un traseu brazilian într-un model US, intenționat. Un fișier fără alegere se comportă ca înainte: un traseu nou urmează materialul în uz.

## Desenarea unei conducte de aer

1. Alegeți {{ui:Duct}}. Alegeți sistemul (alimentare, retur, evacuare sau aer exterior) și forma: rotundă, dreptunghiulară sau ovală plată.
2. Tastați lățimea și înălțimea (lățimea unei conducte rotunde este diametrul ei) și **At** pentru înălțimea liniei mediane.
3. Ca să o dimensionați după debitul de aer, tastați **Airflow** și rata de **Friction** și faceți clic pe {{ui:Size it}}. Conducta este dimensionată prin frecare egală, metoda din capitolul despre proiectarea conductelor din ASHRAE Handbook, și rotunjită în sus la o dimensiune din stoc, astfel încât frecarea iese la sau sub rata pe care ați tastat-o. Fără o rată tastată, se folosește 0.08 in. de apă la 100 ft (0.8 Pa/m). O conductă dreptunghiulară își păstrează înălțimea tastată și primește o lățime; BimCraft spune asta când laturile depășesc raportul de 4 la 1.
4. Faceți clic pe colțuri, ca la o țeavă.

## Obiecte sanitare

{{ui:Build}} › {{ui:Place family}} oferă cinci obiecte de la care să porniți, fiecare cu un conector de scurgere și unul de apă rece: un **Water closet** (vas WC), un **Lavatory** (lavoar), o **Kitchen sink** (chiuvetă de bucătărie), o **Shower tray** (cădiță de duș) și o **Laundry tub** (cuvă de spălat rufe). Fețele lor din față vă privesc când le plasați, iar spatele lor se sprijină de perete. Scurgerile lor sunt la cea mai mică scurgere de obiect sanitar din NBR 8160 (DN 100 pentru vasul WC, DN 50 pentru chiuveta de bucătărie, DN 40 pentru celelalte); apa este DN 20. Schimbați dimensiunile lor sau editați-le, ca orice familie: vezi [Familii și dimensiunile lor](topic:families).

O familie spune ce obiect sanitar este, sub {{ui:Plumbing fixture}} din fila {{ui:Connectors}} a editorului de familii. Scurgerea ei este numărată atunci în unități de obiect sanitar: 6 UHC pentru un vas WC, 1 pentru un lavoar, 3 pentru o chiuvetă de bucătărie sau o cuvă de spălat rufe, 2 pentru o cădiță de duș (NBR 8160), sau unitățile de debit de scurgere din IPC Table 709.1.

## De la conectorul unui obiect

Elementele plasate dintr-o familie cu conectori (scurgerea și robinetul unui lavoar, gâtul unui terminal de aer: vezi [Editarea unei familii](topic:family-editor)) arată conectorii lor liberi ca puncte cât timp {{ui:Pipe}} sau {{ui:Duct}} este activ, iar cursorul se fixează de ei.

- **Pornirea de la un conector**: traseul preia sistemul și dimensiunea lui (țeava de materialul din bară, la dimensiunea conectorului sau imediat peste; o conductă rotundă de diametrul lui). Când conectorul este orientat în jos sau în sus, ca o scurgere sub un lavoar, traseul merge întâi drept în jos sau în sus până la înălțimea din **At**, apoi continuă pe clicurile făcute.
- **Încheierea pe un conector**: traseul coboară sau urcă până la el și se termină acolo.

Traseul este conectat la element în fișierul IFC, astfel încât alte programe văd obiectul ca parte a sistemului său. Un element plasat mai târziu cu un conector la capătul unui traseu este conectat și el. Un traseu mutat de la un conector nu mai este conectat la el.

## Racordurile, făcute automat

| Unde | Ce face BimCraft |
|---|---|
| Un traseu se întoarce | Un cot. Țeavă din oțel la raza lungă ASME B16.9 (1.5 × dimensiunea), alte țevi la un diametru exterior, conductă de aer rotundă la 1.5 diametre, conductă de aer dreptunghiulară la o lățime (sau o înălțime, pentru o întoarcere în sus sau în jos) |
| Un traseu se termină pe linia altui traseu | Un teu; celălalt traseu este tăiat acolo |
| Două trasee se întâlnesc cap la cap, la dimensiuni diferite | O reducție (țevi) sau o tranziție (conducte de aer) |
| Două trasee de aceeași dimensiune se întâlnesc cap la cap, sub un unghi | Un cot |

Când schimbați, mutați sau ștergeți un traseu, fiecare racord de pe acel nivel este făcut din nou. Dacă un braț este prea scurt pentru racordurile de la capetele lui, BimCraft spune asta și nu schimbă nimic: mutați colțul mai departe.

:::note
Racordurile și robinetele sunt generice: desenate după dimensiunea țevii sau a conductei de aer, nu după catalogul unui producător. Racordurile cu mufă, presate sau canelate, corpurile de robinete și echipamentele au dimensiuni proprii ale producătorilor; verificați-le la furnizor înainte de a comanda.
:::

## Coloane montante

În timpul desenării, tastați o înălțime nouă în **At** și apăsați {{key:Enter}}: traseul merge drept în sus sau în jos, la ultimul colț, cu un cot la fiecare capăt. O coloană poate urca în nivelul de deasupra. Fiecare nivel arată părțile unui traseu pe care le atinge intervalul său de vizualizare, cu **UP** sau **DN** la coloană.

## Scurgeri și panta lor

Scurgerile sanitare și pluviale pornesc de la cea mai mică pantă permisă de International Plumbing Code pentru dimensiunea lor: 1/4 in. pe picior până la 2-1/2 in., 1/8 in. pe picior de la 3 la 6 in., 1/16 in. pe picior de la 8 in. Conducta PVC braziliană pentru scurgere pornește cu panta NBR 8160: 2 % până la DN 75, 1 % de la DN 100. Tastați altă pantă în bară sau în Proprietăți: `1/4"/ft`, `2 %` sau `1:50`. Traseul coboară de la primul său punct, deci desenați scurgerile în direcția în care curg. Planul arată căderea și o săgeată. Proprietățile avertizează când o scurgere este mai plată decât minimul codului.

## Dimensionarea scurgerilor după unitățile de obiect sanitar

Alegeți o scurgere sanitară: **Fixture units** din Proprietăți spune câte transportă și cea mai mică dimensiune de care are nevoie. Fiecare obiect sanitar al cărui conector de scurgere este pe traseu se numără, la fel și fiecare scurgere care curge în el: desenați scurgerile în direcția în care curg, fiecare terminându-se pe scurgerea în care curge.

- Scurgerile din PVC pentru scurgere brazilian numără **UHC** și urmează NBR 8160; celelalte numără **DFU** și urmează International Plumbing Code.
- **Drain** (Scurgere): o **Branch** (Ramificație) este dimensionată din tabelul codului pentru ramificațiile obiectelor; o **Building drain** (Scurgere de clădire) din tabelul său după pantă, deci **Slope** (Panta) contează.
- O scurgere nu este niciodată mai mică decât scurgerile obiectelor pe care le servește (un vas WC are nevoie de DN 100, sau 3 in.), nici decât o scurgere care curge în ea. Sub NBR 8160, o scurgere de clădire are cel puțin DN 100.

{{ui:Size the drains}} face fiecare scurgere sanitară a modelului care este prea mică pentru unitățile sale de obiect sanitar la dimensiunea de care are nevoie, ca un singur pas pe care îl puteți anula. O scurgere desenată mai mare decât are nevoie rămâne așa cum este. Când o scurgere transportă mai mult decât poate duce cea mai mare dimensiune a țevii sale la panta ei, BimCraft spune asta: dați-i o pantă mai mare sau o altă țeavă.

:::note
Tabelele sunt cele ale scurgerilor orizontale. Coloanele, ventilațiile și scurgerile pluviale nu sunt dimensionate aici: verificați-le, ca și întregul proiect, față de codul care se aplică proiectului.
:::

## Robinete

1. Alegeți {{ui:Valve}} și tipul: cu sertar, cu bilă, cu ventil sau de reținere.
2. Faceți clic pe o țeavă unde merge. Țeava este tăiată în jurul lui, iar robinetul este conectat pe ambele părți.

Proprietățile traseului listează robinetele sale, fiecare cu {{ui:Remove}}.

Mai multe tipuri de robinete, un filtru, clapete pe conducte de aer, propriile specificații de țevi și familiile producătorilor: vezi [Specificații de țevi, robinete, clapete și familii de la producători](topic:pipe-specs).

## Modificarea unui traseu

Alegeți orice parte a unui traseu, în planul sau în vederea 3D. În Proprietăți:

- **System** (Sistem), **Material**, **Class** (Clasă) și **Size** (Dimensiune) (țevi), sau **Shape** (Formă), **Width** (Lățime), **Height** (Înălțime) (conducte de aer).
- **Height above the level** (Înălțimea deasupra nivelului) mută întregul traseu în sus sau în jos.
- **Insulation** (Izolație): grosimea ei, păstrată pentru verificarea spațiului liber și lista golurilor (nu se desenează nimic pentru ea): vezi [Verificarea țevilor și a conductelor de aer față de structură](topic:mep-against-structure).
- Țeavă din oțel: **Cut into spools** (Tăiere în tronsoane): vezi [Tronsoane de țeavă din oțel și planșe de tronsoane](topic:pipe-spools).
- **Slope** (Pantă) (țevi).
- **Flow** (Debit) cu {{ui:Size it}}: pentru apă, cea mai mică dimensiune care menține apa la 8 ft/s (2.4 m/s), sau 5 ft/s (1.5 m/s) pentru apă caldă; la 3 m/s pentru PVC-ul brazilian pentru apă (NBR 5626). Pentru conductele de aer, viteza și rata de frecare a conductei așa cum a fost desenată. Scurgerile sanitare sunt dimensionate în schimb după unitățile lor de obiect sanitar: vezi **Dimensionarea scurgerilor după unitățile de obiect sanitar** mai sus.

Fiecare modificare este un pas al {{ui:Undo}}. {{key:Delete}} șterge întregul traseu.

## Planuri

- Țevile mai mici de 150 mm (circa 6 in.) sunt desenate ca o singură linie pe linia lor mediană; țevile mai mari și toate conductele de aer ca două linii la lățimea lor.
- Fiecare sistem are propria culoare; PDF-ul planului le tipărește în negru.
- Fiecare traseu este etichetat cu dimensiunea și sistemul său (de exemplu `2" CW` sau `16×10 SA`).
- Intervalul de vizualizare al unui plan decide ce trasee arată, iar {{ui:Shown in this plan}} poate lăsa afară **Pipes** (Țevi) sau **Ducts** (Conducte de aer): vezi [Vederi, intervale de vizualizare și planșele proprii](topic:views-and-sheets).

## Tabele centralizatoare și extragerea de cantități

Panoul {{ui:Schedules}} adaugă **Pipes** (Țevi), pe sistem, material și dimensiune, cu lungimile lor; **Ducts** (Conducte de aer), pe sistem, formă și dimensiune, cu lungimi și suprafața exterioară; și **Fittings and valves** (Racorduri și robinete), pe tip și dimensiune, numărate. Faceți clic pe un rând ca să alegeți ce listează; {{ui:Download CSV}} îl descarcă.

{{ui:Takeoff}} duce traseele în TakeoffCraft: țevi și conducte de aer pe dimensiune, ca trasee desenate pe plan (scurgerile în pantă sunt măsurate pe panta lor), racorduri și robinete numărate acolo unde sunt: vezi [Trimiterea cantităților modelului către TakeoffCraft](topic:takeoff). Coloanele sunt lăsate afară din acea foaie, pentru că un plan nu le poate măsura; tabelul Țevi are lungimea lor.

## În fișierul IFC

Fiecare traseu este un ansamblu care conține părțile sale: segmente de țeavă și de conductă de aer, racorduri și robinete, fiecare cu tipul, materialul, o culoare pentru sistemul său și porturile sale. Porturile care se ating sunt conectate, iar fiecare parte aparține sistemului său de distribuție (fișierele IFC2X3 primesc același lucru ca segmente de curgere, racorduri și controlere într-un sistem). Alte programe care citesc sistemele IFC văd câte un traseu conectat pentru fiecare sistem. Definiția proprie a traseului este păstrată cu el, astfel încât BimCraft îl face din nou în același fel când îl modificați.
