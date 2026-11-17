---
title: Tabele centralizatoare, cote și un PDF al planului
summary: Tabele centralizatoare de uși, ferestre, pereți și încăperi care se schimbă pe măsură ce desenați, cote pe plan și planul unui nivel salvat ca PDF la o scară standard.
keywords: tabel centralizator, tabel uși, tabel ferestre, tabel pereți, tabel încăperi, cantități, extragere de cantități, arie, csv, foaie de calcul, cote, cotă, imprimare, pdf, trasare, scară, 1/4", 1:50, planșă
from: d97cd16e
---

## Ce veți face

Vedeți ce însumează clădirea pe care ați desenat-o, în timp ce o desenați: câte uși și ferestre de fiecare dimensiune, cât perete de fiecare tip, cât de mare este fiecare încăpere. Puneți cote pe plan și salvați-l ca PDF ca să-l tipăriți sau să-l trimiteți.

## Tabele centralizatoare

Cu {{ui:Draw}} activat, **Schedules** (Tabele centralizatoare) din panoul din stânga arată câte un tabel o dată:

- **Doors** (Uși) și **Windows** (Ferestre): fiecare după marca sa (D1, D2 … și W1 …, date pe măsură ce le plasați), tipul, lățimea, înălțimea (și pragul), nivelul și peretele în care se află.
- **Walls by type** (Pereți pe tip): pentru fiecare tip de perete, câți pereți sunt, grosimea lor, lungimea lor totală și aria laterală, ca **Gross area** (Arie brută), **Deductions** (Deduceri) și **Net area** (Arie netă), cu un total.
- **Rooms** (Încăperi): număr, nume, nivel, arie și perimetru, cu aria totală.
- **Floors** (Planșee): fiecare planșeu cu nivelul, tipul și grosimea lui, și aria sa brută, deducerile și aria netă.
- **Finishes** (Finisaje): fiecare strat de finisaj al tipurilor de perete (după material și partea peretelui) și tavanele, cu numărul de fețe și brut, deduceri și net.
- **Wall types: takeoff data** (Tipuri de pereți: date de extragere): ce s-a introdus o dată pentru fiecare tip de perete (unitate, mortar, normă), cu numărul de pereți, lungimea și aria netă și norma înmulțită cu cantitatea măsurată. Vezi [Ansambluri de pereți](topic:wall-assemblies).

- **Finishes by room** (Finisaje pe încăpere), **Finishes by wall** (Finisaje pe perete), **Finishes by zone** (Finisaje pe zonă) și **Finish quantities** (Cantități de finisaje): ce acoperă fiecare încăpere, cu arii, numărul de plăci inclusiv tăieturile și volumele de suport. Vezi [Finisajele încăperilor și tabelele de finisaje](topic:room-finishes).
- Propriile **set-ups** (configurații): un tabel grupat, totalizat și salvat sub un nume. Vezi [Așezarea, salvarea și exportul unui tabel](topic:schedule-layouts).

Tabelele se schimbă la fiecare modificare. Faceți clic pe un rând sau pe o singură cifră ca să alegeți elementele din care provine. {{ui:Download CSV}} salvează tabelul ca să-l deschideți într-o foaie de calcul; {{ui:Download Excel}} și {{ui:Copy for Google Sheets}} sunt sub el. **Room finishes** (Finisajele încăperilor) și **Specification** (Specificația) ([Scrierea specificației din model](topic:specification)) se deschid din același loc.

## Aria și volumul fiecărui strat

Alegeți **Layers: area and volume** (Straturi: arie și volum) în lista Tabele centralizatoare. Are un rând pentru fiecare strat al fiecărui tip de perete, planșeu, acoperiș și tavan aflat în uz: elementul, tipul și LOD-ul său, stratul (numărat de la fața exterioară a unui perete, de la partea de sus a unui planșeu, acoperiș sau tavan), materialul și funcția sa, grosimea, câte elemente sunt, **aria netă** și **volumul**.

- Aria este aria netă a elementelor de acel tip, măsurată exact ca în Walls by type, Floors și Finishes, după metoda de măsurare a proiectului. Un acoperiș se măsoară pe înclinare; nicio metodă de măsurare nu are o regulă pentru acoperișuri.
- Volumul este acea arie înmulțită cu grosimea proprie a stratului.
- Un planșeu, acoperiș sau tavan fără tip este un singur rând: un strat cu grosimea lui.
- Un spațiu de aer este listat cu aria sa și este lăsat afară din volumul total. O membrană are o arie și niciun volum.

Faceți clic pe un rând ca să alegeți elementele sale. {{ui:Download CSV}} salvează tabelul.

## Cum sunt măsurate ariile

Fiecare arie este trei cifre care se adună: brut minus deduceri este netul. Regula este scrisă deasupra fiecăruia dintre aceste tabele și este o singură regulă: tabelele, cantitățile salvate în fișierul IFC și extragerea trimisă la TakeoffCraft folosesc toate aceeași.

- **Un perete**: brutul este o față a peretelui, lungimea sa pe linia mediană înmulțită cu înălțimea (fața reală pentru un perete cu partea de sus sau de jos formată). Fiecare ușă, fereastră și alt gol este dedus, lățime înmulțită cu înălțime, fiecare gol o singură dată.
- **Un planșeu sau un tavan**: brutul este aria din interiorul conturului său. Fiecare gol și decupaj din interior este dedus o singură dată.
- **Un finisaj de perete**: fiecare strat de finisaj al tipului de perete acoperă o față a peretelui, măsurată ca peretele, cu aceleași goluri deduse. Un finisaj este un strat al peretelui: este listat la Finishes și nu se adaugă la aria peretelui, astfel încât un perete cu o ușă nu este niciodată numărat de două ori.

Aceasta este **regula implicită CadCraft**: fiecare gol este dedus, oricare ar fi dimensiunea lui; lungimile peretelui sunt pe linia mediană; reveniturile nu sunt măsurate. Este ceea ce folosește fiecare proiect până alegeți altă metodă.

## Alegerea unei metode de măsurare

Deasupra tabelului, **Measurement method** (Metoda de măsurare) listează metodele care vin cu BimCraft, iar **Load a method file** (Încărcare fișier de metodă) încarcă metoda proprie a biroului. Alegerea este salvată în fișierul IFC, ca un pas de anulare, și trei lucruri urmează imediat: tabelele, cantitățile nete salvate în fișier și extragerea trimisă la TakeoffCraft. Regula de deasupra fiecărui tabel începe atunci cu metoda, sursa ei, data la care a fost citită sursa și cuvintele **Unchecked by a quantity surveyor** (Neverificată de un metrar).

O metodă este un fișier mic de fapte, nu cod de program. Pentru fiecare cantitate spune:

- **cel mai mic gol dedus**: de exemplu, un gol de 0.5 m² sau mai mic rămâne în aria peretelui;
- **cum sunt măsurate joncțiunile de pereți**: pe linia mediană; sau cu un perete care se termină lângă altul, măsurat până la fața acelui perete; sau cu fiecare capăt de perete care întâlnește alt perete, măsurat până la fața apropiată;
- **dacă reveniturile sunt măsurate** pentru un finisaj (întoarcerile finisajului în goluri), ca arie sau, când sunt puțin adânci, ca lungime. Adâncimea unui revenit este luată ca jumătate din grosimea peretelui;
- **ce spune despre zidărie**: cum este măsurată și orice adaos de pierderi sau de mortar pe care îl declară.

Metodele care vin cu BimCraft:

| Metodă | Pereți: cel mai mic gol dedus | Finisaje de perete | Tavane | Zidărie |
|---|---|---|---|---|
| CadCraft implicită | fiecare gol | fiecare gol | fiecare decupaj | fără adaosuri |
| RICS NRM 2 (Regatul Unit), ediția a 2-a 2021 | 0.5 m² sau mai puțin rămâne | 1 m² sau mai puțin rămâne | 1 m² sau mai puțin rămâne | pe arie; fără procente declarate |
| Metoda standard AAQS pentru Africa 2015 | 0.5 m² sau mai puțin rămâne | 0.5 m² sau mai puțin rămâne | 0.5 m² sau mai puțin rămâne | pe arie; măsurată netă, 0% pierderi |
| IS 1200 (India), 1976, zidărie | 0.1 m² sau mai puțin rămâne | implicită (vezi mai jos) | implicită | pe volum |
| BIA Technical Note 10 (Statele Unite), 2009 | fiecare gol | implicită | implicită | 5% pierderi la unități, 15% la mortar |

Citiți aceste limite înainte să vă bazați pe o metodă:

- **Niciun metrar nu a verificat vreuna dintre ele.** Fiecare a fost făcută citind sursa numită și înregistrând cifrele cu clauza din care provin. Dacă un metrar poate verifica una, creatorii aplicației ar dori să afle.
- Acolo unde o regulă nu a putut fi citită din sursă, metoda spune **not confirmed** (neconfirmată) pentru ea, iar implicita CadCraft este folosită. Nicio metodă care vine cu BimCraft nu are o regulă confirmată pentru joncțiunile de pereți, reveniturile sau planșeele, deci acestea sunt măsurate în felul implicit sub toate.
- IS 1200 deduce golurile din tencuială în trei benzi. Un fișier de metodă nu poate ține încă benzi, deci finisajele de perete folosesc implicita sub acea metodă, iar regula spune asta.
- Sistemul Standard Sud-African de Măsurare a Lucrărilor de Construcție **nu** este printre ele: textul său nu a putut fi citit. Metoda AAQS pentru Africa spune că a fost construită pe ediția din 1991 a acelui sistem, dar este un document diferit.
- BIA Technical Note 10 este o notă de estimare din industrie, nu o metodă standard de măsurare.
- Un gol care are exact cea mai mică dimensiune urmează propriile cuvinte ale metodei („not exceeding”, „less than”). Dimensiunile aflate la 2 părți din 10 000 de ea contează ca exact ea.
- Sub o metodă, aria netă a peretelui din fișier și aria netă a unui planșeu sau tavan urmează metoda, iar setul de cantități o numește. Ariile brute și volumele din fișier rămân cum au fost desenate.

**Notes on this method** (Notele acestei metode), sub selector, spun ce lasă deschis fiecare sursă. **Open the source** (Deschidere sursă) duce la document.

### Metoda proprie a biroului

Un fișier de metodă este JSON în formatul `cadcraft-measurement-method`. Fiecare valoare din el numește clauza din care provine; o valoare fără clauză este refuzată. Fișierul este verificat la încărcare, un câmp greșit este numit, iar nimic nu este folosit dintr-un fișier care nu trece. Odată ales, fișierul este salvat în proiect, astfel încât proiectul se deschide la fel pe alt calculator. Identificatorul său este un nume simplu, ales de birou (poate să nu fie identificatorul unei metode care vine cu aplicația).

## Cărămizi, blocuri și mortar

**Wall types: takeoff data** (Tipuri de pereți: date de extragere) numără unitățile și mortarul fiecărui tip de perete a cărui unitate are o lungime și o înălțime (vezi [Dați unui tip datele sale de extragere](topic:wall-assemblies#give-a-type-its-takeoff-data)). Acestea sunt formulele, exact cum sunt calculate:

- **Units per area of one leaf** (Unități pe arie a unui strat) = 1 / ((lungimea unității + rost) × (înălțimea unității + rost)). O cărămidă de 215 × 65 mm cu un rost de 10 mm: 1 / (225 × 75 mm) = 59.26 pe m².
- **Unit widths across a leaf** (Lățimi de unitate peste un strat) = (grosimea stratului + rost) / (lățimea unității + rost), rotunjit la un număr întreg, cel puțin 1. Un strat de 102.5 mm din cărămizi de 102.5 mm este 1; un perete de 215 mm din aceleași cărămizi este 2.
- **Units** (Unități) = unități pe arie × lățimi de unitate peste strat × aria netă a feței peretelui, adunate pentru straturile de zidărie ale tipului.
- **Units to order** (Unități de comandat) = unități × (1 + % pierderi / 100), rotunjit în sus la o unitate întreagă. Pierderea este cea introdusă pe tip; fără niciuna introdusă, cea a metodei, dacă declară una; altfel 0%.
- **Mortar** = aria netă × grosimea stratului, minus volumul unităților (unități × lungime × înălțime × lățime), apoi plus procentul suplimentar introdus pe tip pentru fante sau perforații, apoi plus adaosul metodei, dacă declară unul. Are nevoie de lățimea unității.

Ce se presupune: fiecare strat de zidărie al unui tip este construit din unitatea unică a tipului; un strat mai gros decât o lățime de unitate este numărat ca atâtea lățimi de unitate, fiecare ca un strat așezat pe lungime, deci cărămizile tăiate, cărămizile de închidere și formele speciale nu sunt numărate separat; acolo unde niciun strat nu este bifat ca fiind construit din unitate, straturile de bază sunt luate ca straturi de zidărie, iar nota de deasupra tabelului spune asta. **Amount** (Cantitatea) este norma înmulțită cu ce se raportează norma, care poate fi acum și o unitate de comandat, 1000 de unități de comandat sau un m³ de mortar.

Mărcile sunt eticheta IFC a elementelor: schimbați una în **Properties** (Tag) și tabelul urmează. Pentru orice model IFC, desenat sau nu, [Însumarea cantităților, listarea elementelor și tabelul spațiilor](topic:quantity-totals) adună orice proprietate.

## Cote

Planul arată lungimea fiecărui perete desenat pe fața lui exterioară (un perete interior: pe o față) și, pentru un perete cu uși sau ferestre, un lanț de la colțuri până la fiecare gol. {{ui:Dimensions}} din bara modelului le ascunde și le arată din nou.

## Salvarea planului ca PDF

1. Afișați nivelul dorit și setați unitățile în panoul **Levels** (Niveluri).
2. Faceți clic pe {{ui:Print}} în bara modelului.
3. BimCraft salvează „<fișier> — <nivel>.pdf”: planul în alb și negru, la cea mai mare scară standard care încape pe pagină (1/4" = 1'-0", 1/8" = 1'-0" … pe Letter, în picioare și țoli; 1:50, 1:100 … pe A4, în milimetri), cu pereții umpluți, uși, ferestre, numele și ariile încăperilor, cote și o bandă de titlu cu nivelul, fișierul, înălțimea de tăiere, data și scara.

PDF-ul este desenat ca linii și text, astfel încât rămâne clar la orice zoom, iar textul său poate fi căutat.

## De reținut

- Tabelele listează ce au desenat instrumentele de desenare. Uși și ferestre din alt program apar în schimb în Quantity totals (Totaluri de cantități).
- Ca să prețuiți lucrarea, predați cantitățile către TakeoffCraft: vezi [Cantități către TakeoffCraft](topic:takeoff). Descărcarea CSV rămâne pentru o foaie de calcul.
