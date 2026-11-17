---
title: Desenarea pereților
summary: Desenați pereții pe planul unui nivel făcând clic pe colțuri sau introducând lungimi; colțurile se unesc singure, iar pereții se salvează ca IFC.
keywords: curbă, arc, linie de locație, aliniere, perete, pereți, desenare, plan, plan de etaj, cameră, colț, îmbinare, tip de perete, 2x6, 2x4, cmu, beton, înălțime, nivel, niveluri, etaj, lungime introdusă, ortogonal, agățare
from: 8269cd4b
---

## Scop

Desenați pereții unei clădiri pe planul fiecărui nivel. Faceți clic unde începe un perete și apoi pe fiecare colț; BimCraft unește colțurile pentru dumneavoastră, îi dă fiecărui perete straturile lui (placaj exterior, sheathing, montanți, gips-carton …) și îl ridică până la nivelul de deasupra. Vizualizarea 3D arată pereții pe măsură ce îi desenați.

## Deschiderea planului

1. Începeți o clădire nouă ([Începerea unei clădiri noi](topic:start-a-new-building)) sau deschideți un model IFC.
2. Faceți clic pe {{ui:Draw}} în bara de instrumente. Se deschide o clădire nouă, deja cu această opțiune activă.
3. Planul unui nivel apare în stânga, iar vizualizarea 3D în dreapta. Alegeți nivelul din lista de deasupra planului sau cu butonul rotund de lângă el, din panoul **Niveluri**.
4. {{ui:Plan}}, {{ui:Split}} și {{ui:3D}} sunt instrumente din rândul {{ui:View}} al barei de instrumente (comenzile PLAN, SPLIT și tastele funcționează ca înainte). Folosiți {{ui:Plan}} pentru doar plan, {{ui:Split}} pentru ambele și {{ui:3D}} pentru a închide planul. Când fereastra este îngustă (sau dimensiunea interfeței este mare), {{ui:Split}} pune planul deasupra vizualizării 3D, nu alături.

Planul secționează nivelul la 4'-0" (1200 mm) deasupra pardoselii sale, așa cum face un plan de etaj. Derulați pentru zoom, trageți cu butonul din mijloc sau cel din dreapta (ori țineți {{key:Space}} și trageți) pentru a panorama; cu {{ui:Select}} activat, o simplă tragere panoramează și ea. {{key:F}}, cu cursorul deasupra planului, îl încadrează.

## Desenarea unei încăperi

1. Faceți clic pe {{ui:Wall}} (sau apăsați {{key:W}}).
2. Alegeți tipul peretelui din prima listă, de exemplu **Exterior 2×6** sau **Interior 2×4**.
3. Alegeți înălțimea: **Până la nivelul de deasupra** (peretele urmează nivelul dacă acesta se mută), **Până la** un nivel mai sus pentru un perete care trece prin mai multe niveluri (un hol de scară, o încăpere cu înălțime dublă, un fronton înalt) sau **Înălțime fixă** și introduceți valoarea. Un astfel de perete aparține nivelului pe care l-ați desenat; planurile nivelurilor pe care le traversează îl arată mai deschis, încăperile de acolo se sprijină pe el, iar din aceste planuri puteți face clic pentru a pune uși și ferestre în el (o ușă stă pe pardoseala acelui nivel). Pentru a muta sau a remodela chiar peretele, mergeți la nivelul de unde începe.
4. Faceți clic unde începe primul perete.
5. Faceți clic pe fiecare colț. Fiecare clic creează un perete; următorul începe unde s-a terminat precedentul. Lungimea și unghiul apar lângă cursor.
6. Faceți din nou clic pe primul punct pentru a închide încăperea. Bara de stare arată câți pereți are încăperea; în modul axă, fiecare perete primește stratul exterior pe partea exterioară a încăperii.
7. Apăsați {{key:Esc}} (sau faceți clic dreapta, ori dublu clic) pentru a opri fără a închide.

Colțurile se unesc singure: doi pereți se întâlnesc la o îmbinare la 45°, un perete care se termină pe altul se oprește la fața acestuia (un T), iar trei sau mai mulți pereți într-un punct împart colțul. Pereții care se intersectează rămân așa cum sunt.

Pentru o întreagă încăpere deodată: deschideți {{ui:Shapes}} pentru un dreptunghi, un dreptunghi rotit, un poligon, arce, pereți pe linii alese sau în jurul unui contur (vezi [Forme de perete, divizare, decalare, întindere și blocare](topic:wall-tools)).

## Alegerea referinței de desenare

Alegeți **Axă**, **Față interioară** sau **Față exterioară** înainte de primul clic. Cu o față selectată, clicurile și lungimile introduse descriu acea față; BimCraft decalează axa peretelui cu jumătate din grosimea totală și unește colțurile consecutive. Alegeți **Exterior la stânga** sau **Exterior la dreapta** în raport cu direcția în care desenați. Pentru un contur închis desenat în sens trigonometric, exteriorul este la dreapta; în sensul acelor de ceasornic, la stânga. Cu **Față interioară**, corpul peretelui merge pe partea exterioară a liniei dumneavoastră; cu **Față exterioară**, pe cealaltă parte. Desenarea pe față păstrează partea exterioară aleasă când închideți bucla. Pe axă, pereții care nu închid o încăpere iau partea exterioară aleasă de dumneavoastră; închiderea unei încăperi setează singură exteriorul fiecărui perete către exteriorul încăperii, indiferent cum ați desenat.

Schimbarea tipului peretelui, a referinței sau a părții exterioare încheie lanțul curent. Lângă un colț de întoarcere, îmbinările lungi sunt limitate prin capete drepte.

În timpul desenării, un capăt aflat în spațiu gol se poate alinia orizontal sau vertical cu un capăt de perete sau cu un colț anterior. Un ghidaj punctat unește acest punct de cursorul agățat. Shift menține direcția de desenare perpendiculară; alinierea se oprește apoi de-a lungul acelei direcții. Capetele apropiate, mijloacele și intersecțiile de pereți au prioritate față de alinierea de la distanță.

## Linia de locație

Cu **Referință** pe **Față exterioară** sau **Față interioară**, peretele păstrează acea față ca linie de locație. Ulterior, dacă peretele devine mai gros sau i se inversează exteriorul, fața rămâne pe loc, iar peretele crește sau se inversează în jurul ei. Un perete drept care o întâlnește într-un colț urmează, astfel încât colțul rămâne închis. Puteți schimba linia de locație mai târziu în **Proprietăți**: vezi [Modificarea unui perete, a unei uși sau a unei ferestre](topic:change-a-wall-or-door).

## Desenarea unui perete curbat

1. Faceți clic pe {{ui:Wall}}, apoi alegeți **Curbat** din lista **Formă** din rândul de opțiuni.
2. Faceți clic unde începe peretele, apoi unde se termină.
3. Faceți clic pe un punct al arcului său. Sau introduceți înălțimea arcului și apăsați {{key:Enter}}.
4. Lanțul continuă de la capătul peretelui. Apăsați {{key:Esc}} pentru a-l încheia.

Un perete curbat se unește cu pereții de la capete (îmbinările de colț și în T funcționează), formează încăperi și păstrează uși și ferestre de-a lungul arcului. Ele rămân unități drepte, perpendiculare pe perete la mijloc, iar distanța lor se măsoară de-a lungul arcului. Un perete poate face cel mult trei sferturi dintr-un cerc. Se agață de capetele sale și de mijlocul arcului său.

Încă nerealizat pentru pereții curbi: {{ui:Trim / extend}} și {{ui:Corner}}, structura de lemn, cotele automate de plan și agățarea de-a lungul arcului. Vezi [Ce este încă nerealizat](topic:not-built-yet).

## Introducerea unei lungimi în loc de clic

După primul clic, introduceți și apăsați {{key:Enter}}:

| Tastați | Desenează |
|---|---|
| `12'6"` sau `3810` | un perete de această lungime, în direcția indicată de cursor |
| `12'6"<90` | pe această lungime, sub acest unghi (grade, în sens trigonometric de la dreapta) |
| `@3000,0` | până la un punct aflat la această distanță de ultimul, pe orizontală și pe verticală |
| `1200,3400` | până la acest punct pe plan |

Dacă introduceți un număr cât timp instrumentul Wall este activ, el merge direct în caseta {{ui:Length}}. În picioare și țoli, un număr simplu înseamnă țoli; în milimetri, milimetri. Puteți scrie oricând unitatea: `3.5 m`, `10 ft`, `6 1/2"`.

## Agățări

- Capetele pereților, colțurile fețelor lor și mijloacele pereților se agață când cursorul este aproape de ele (un pătrat, un triunghi).
- Cursorul se agață de axa unui perete sau de oricare dintre fețe (o cruce).
- Din ultimul punct, direcția se menține din 15° în 15° când este aproape; țineți {{key:Shift}} pentru a o menține la 0°, 90°, 180° sau 270°.
- Direcțiile libere rotunjesc lungimea la 1/2" (sau 10 mm).

## Modificare, anulare, ștergere

- Fiecare perete este un pas în **Modificări**: {{ui:Undo}} și {{ui:Redo}} iau pereții înapoi și îi repun.
- Cu {{ui:Select}} activat, faceți clic pe un perete din plan ca să-l selectați; vizualizarea 3D și **Proprietăți** urmează selecția. {{key:Delete}} șterge pereții selectați, iar pereții de care erau uniți sunt curățați din nou.

## Niveluri

Panoul **Niveluri** listează fiecare nivel cu cota și înălțimea lui.

- Tastați un nume nou, o cotă sau o înălțime nouă și apăsați {{key:Enter}}. Modificarea înălțimii (sau a cotei) unui nivel mută nivelurile de deasupra cu aceeași valoare, iar pereții care urcă până la un nivel îl urmează.
- {{ui:Add a level on top}} adaugă un nivel deasupra celui mai de sus, de aceeași înălțime.
- {{ui:Add a level below}} adaugă un nivel sub cel mai de jos (un subsol), de aceeași înălțime: cota lui este negativă când cel mai de jos nivel este la 0, iar niciun alt nivel nu se mută. Anularea îl scoate din nou.
- {{ui:Copy this level…}} desenează din nou ce se află pe nivelul pe care îl vedeți, pe alt nivel sau pe unul nou deasupra: pereții cu ușile și ferestrele lor, planșeele și tavanele (nu acoperișurile). Pereții care urcau până la nivelul de deasupra urcă până la nivelul de deasupra celui nou; încăperile apar singure. O singură {{ui:Undo}} le ia pe toate înapoi. Dacă celălalt nivel are deja pereți, copia se adaugă la ei.
- {{ui:Units}} din bara de instrumente alege unitățile (picioare și țoli, țoli, picioare zecimale, milimetri, centimetri sau metri) pentru tot ce afișează și citesc instrumentele de desenare.

## Salvare

Faceți clic pe {{ui:Save as IFC}}. Fiecare perete este un perete IFC cu axa sa, forma unită, tipul și straturile sale, `Pset_WallCommon` și cantitățile de bază (lungime, înălțime, arii și volume), astfel încât alte programe BIM îl pot deschide și îl pot include în liste.

## De reținut

- Pereții se desenează pe axa lor. Grosimea vine din tipul peretelui.
- Planul arată pereții desenați aici umpluți, iar restul (elemente din bibliotecă, modele din alte programe) tăiate de același plan, cu ce se află sub secțiune în linii subțiri.
- Pereții făcuți de alte programe apar în plan, dar nu pot fi modificați încă cu aceste instrumente.
