---
title: Cantități către TakeoffCraft
summary: Un clic trimite cantitățile modelului către TakeoffCraft — pereți pe tip, acoperișuri după suprafața înclinată, coame, custuri și văi, fundații, uși și ferestre, dulapuri, dispozitive electrice, suprafața pardoselii și lista de debitare a lemnului — marcate pe un plan al fiecărui nivel, cu ansamblurile pachetelor de meserii atașate articolelor.
keywords: takeoff, extragere de cantități, antemăsurătoare, deviz, estimare, listă de materiale, listă de cantități, takeoffcraft, cantități, suprafață de pereți, suprafață de acoperiș, pătrate, fundație, beton, metri cubi, listă de debitare, lemn, pachet de meserie, ansamblu
from: c5a745af
---

## Ce veți face

Transformați modelul într-o listă de materiale și un deviz în TakeoffCraft. BimCraft desenează un plan al fiecărui nivel la o scară standard, marchează pe el fiecare cantitate și pune extragerea de cantități în PDF. TakeoffCraft măsoară singur marcajele, deci fiecare număr poate fi verificat pe planșă.

## Trimiteți-o

1. Faceți clic pe {{ui:Extragere de cantități}} în bara modelului (lângă {{ui:Planșe}}).
2. TakeoffCraft se deschide într-o filă nouă, cu planurile. Când vă întreabă, alegeți să deschideți extragerea de cantități găsită în PDF.
3. Adăugați prețurile în tabelul de cantități din TakeoffCraft; ansamblurile listează deja materialele.

:::note
Când TakeoffCraft nu este disponibil aici, butonul descarcă PDF-ul. Deschideți-l mai târziu în TakeoffCraft: acesta găsește extragerea de cantități din el.
:::

## Ce se măsoară

- **Pereții** pe tip și înălțime: axele lor ca trasee, cu înălțimea peretelui pe articol, astfel încât TakeoffCraft să dea lungimea și suprafața peretelui. Fiecare traseu poartă ușile și ferestrele peretelui, deci TakeoffCraft le scade din suprafața peretelui o singură dată, după aceeași regulă ca tabelele BimCraft: cele două coincid pe brut, deduceri și net. Datele de extragere ale unui tip de perete (unitate, mortar, tarif; vezi [Ansambluri de pereți](topic:wall-assemblies)) vin ca o linie cu preț pe articolul acelui tip. Sub o metodă de măsurare diferită de cea implicită (vezi [Alegerea unei metode de măsurare](topic:plan-schedules-and-pdf#choose-a-measurement-method)), extragerea poartă metoda, fiecare traseu poartă ce scot din fața peretelui joncțiunile, iar TakeoffCraft măsoară după aceeași metodă și o denumește. Un tip a cărui unitate are o lungime și o înălțime transmite două componente cu cantități: unitățile de comandat și volumul de mortar, prețuite când tariful tipului este pe unitate, pe 1000 de unități sau pe m³ de mortar. O numărătoare care cade exact pe un număr întreg poate fi o unitate mai mare în TakeoffCraft, deoarece transmiterea rotunjește pozițiile de pe planșă.
- **Acoperișurile**: fiecare plan de acoperiș ca suprafață cu înclinația sa (TakeoffCraft dă suprafața înclinată), coamele, custurile și văile (custurile și văile după panta lor), streșinile și frontoanele.
- **Fundațiile**: tălpile și zidurile de fundație ca trasee pe mijlocul lor, plăcile ca suprafețe cu grosimea lor, astfel încât betonul iese după volum.
- **Ușile și ferestrele**, numărate pe tip, cu ancadramentele ferestrelor.
- **Dulapurile de bază** după lungimea fronturilor lor.
- **Dispozitivele electrice**, numărate pe fel.
- **Suprafața pardoselii** a fiecărui nivel, din camerele sale.
- **Lista de debitare a lemnului** din structură, numărată pe o planșă proprie (un punct pe bucată).

Acolo unde un pachet de meserie are un ansamblu corespunzător — pereți exteriori și interiori, plăci, tălpi, ziduri de fundație, șindrile, capul coamei și al custurilor, văi, streșini, uși interioare, ancadramente de ferestre, dulapuri de bază, prize, întrerupătoare, corpuri de iluminat, doze de joncțiune și tabloul electric — articolul vine cu materialele și formulele sale. Pachetele vin fără prețuri și nu au fost încă revizuite de un estimator.

:::tip
Planurile se fac din model de fiecare dată când faceți clic, deci după o modificare faceți din nou clic pe {{ui:Extragere de cantități}}.
:::
