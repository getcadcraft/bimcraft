---
title: Structura pereților, planșeelor și acoperișurilor
summary: Generați montanți, rigle, buiandrugi, grinzi, căpriori sau ferme din model și păstrați-le cu el; se refac când se schimbă pereții, golurile, planșeele sau acoperișul, iar tabelul Lemn este lista de tăiere.
keywords: TJI, grindă I, tabel de deschideri pentru grinzi, încărcare tabel, structură, montant, rigle, rigla superioară, buiandrug, montant de susținere, montant scurt, prag, blocaj, colț, colț California, T, grindă de planșeu, grindă de contur, căprior, căprior de colț, căprior de vale, căprior scurt, grindă de coamă, grindă de tavan, contrafiș, fermă, lemn, listă de tăiere, board feet, 2x4, 2x6, distanță, de la axă la axă
from: 76d0ffb5
---

## Ce veți face

Structurați clădirea din ce ați desenat. BimCraft așază montanții, riglele și buiandrugii în pereți, grinzile din planșee și căpriorii (sau fermele) din acoperiș, îi dimensionează din tabele implicite etichetate, îi păstrează cu modelul și îi refacă ori de câte ori se schimbă ceea ce încadrează. Tabelul **Lemn** este lista de tăiere.

## Structurați-o

1. Pe un nivel, deschideți {{ui:Build}} și alegeți {{ui:Framing}}.
2. Alegeți **distanța** (16" sau 24" de la axă la axă; 400 sau 600 mm), **colțurile** (cu trei montanți sau California), **Căpriori** sau **Ferme** pentru acoperișuri și dacă pereții primesc un rând de **blocaje** la jumătatea înălțimii. Pentru planșee alegeți **Lemn tăiat** sau **TJI (preliminar)** și setați direcția grinzilor pe automat, pe axa X sau pe axa Y a planului.
3. Faceți clic pe **Structurați toți pereții** sau pe un singur perete, pe un planșeu sau pe un acoperiș (pe nivelul pe care stă acoperișul) ca să structurați doar acel element.

Dezactivați **Afișare structură** ca să ascundeți toate piesele de structură, ca pe un strat; **Transparent** ascunde pereții, planșeele și acoperișurile structurate, ca să vedeți doar structura.

## Ce obțineți

- **Pereți**: o riglă inferioară (tăiată la uși), o riglă superioară dublă, montanți pe trasare de la începutul peretelui, montanți de susținere și buiandrugi la fiecare ușă și fereastră, montanți scurți deasupra buiandrugilor și sub ferestre, un prag brut sub ferestre, colțuri unde se întâlnesc pereții (peretele care trece prin colț preia montanții de colț), doi montanți de sprijin unde un alt perete se leagă în T și blocaje între montanți.
- **Planșee**: grinzi pe latura scurtă a planșeului în mod implicit sau de-a lungul axei din plan aleasă; grinzi de contur în jurul marginii; grinzi de margine și buiandrugi dubli în jurul golului unei scări, cu grinzile care trec prin gol tăiate scurt (grinzi scurte de coadă). Modul TJI alege cea mai mică serie și cea mai mică înălțime listate care acoperă deschiderea liberă măsurată, la distanța aleasă.
- **Acoperișuri**: căpriori comuni, tăiați perpendicular pe fiecare streașină; căpriori scurți unde coamele și văile îi taie; căpriori de colț și de vale; grinzi de coamă; grinzi de tavan pe rigle și contrafișuri; sau ferme simple, la distanța aleasă, câte o piesă fiecare.

## Modificați-o

Selectați orice piesă de structură în vizualizarea 3D sau în arborele modelului. **Proprietăți** arată structura ei: puteți modifica distanța, tipul și direcția grinzilor de planșeu, colțurile, blocajele sau structura acoperișului. Mutarea pereților, ușilor și ferestrelor sau schimbarea planșeului ori a acoperișului refac structura singure.

Ca să păstrați o piesă pe care ați pus-o intenționat când structura se refac, selectați-o și alegeți **Păstrați această piesă când structura se refac**. O piesă păstrată rămâne unde este; când structura din jurul ei se schimbă, ea este marcată ca s-o verificați.

## Planșee TJI dintr-un tabel pe care îl încărcați

BimCraft nu conține tabelele de deschideri ale producătorilor de grinzi (sunt ale producătorului și se schimbă cu fiecare ediție). Alegeți structura unui planșeu, setați **Grinzi de planșeu** la **TJI (preliminar)** și alegeți **Încărcare tabel…** în **Proprietăți**: un fișier în formatul `cadcraft-tji-table`, JSON sau CSV, pe care l-ați făcut din tabelele actuale de deschideri ale producătorului. Numește producătorul, produsul și ediția și de unde provin cifrele și listează, pentru fiecare caz de încărcare (încărcare utilă, încărcare permanentă, limita de săgeată, lungimea de rezemare), cea mai mare deschidere liberă a fiecărei serii și înălțimi, la fiecare distanță.

- BimCraft ia **deschiderea liberă** a planșeului, alege cea mai mică înălțime și, în ea, seria a cărei deschidere listată ajunge la ea pentru distanța și cazul de încărcare alese, și structurează planșeul cu ea. Dacă deschiderea sau distanța este în afara tabelului, o spune și nu schimbă nimic.
- Încărcările, limita de săgeată, lungimea de rezemare, tabelul și propoziția „Orientare preliminară pentru amplasare; alegerea finală necesită tabelele producătorului și încărcările proiectului” sunt tipărite pe tabelul Lemn, scrise în model împreună cu structura și listate în panoul **Probleme** ca notă. Un tabel marcat ca exemplu o spune într-un avertisment.
- Cu suplimentul **Reglementări de construcții** pornit, regula sa pentru grinzile de planșeu citește și un tabel încărcat; fără tabel, grinzile TJI sunt lăsate afară din acea verificare, ca înainte.
- Tabelul rămâne în acest browser până îl ștergeți sau încărcați altul. Fișierul: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inci, picioare, psf; sau `metric`: mm, metri, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) și `rows` (`series`, `depth`, `spans`: pentru fiecare id de caz, distanța și cea mai mare deschidere liberă, de exemplu `"16": "15-6"`). În CSV, aceleași date sunt liniile `# key = value`, apoi `series,depth,case,spacing,span`.
- Fără tabel încărcat, o structură TJI este refuzată și nu se schimbă nimic: **Încărcați un tabel TJI: tabelele producătorului sunt ale acestuia și nu sunt integrate.** Un model structurat cu vechiul tabel TJI integrat (dinainte de această schimbare) își păstrează fiecare grindă; Proprietăți și Probleme spun că este nevoie de tabel, iar planșeul poate fi structurat din nou după ce încărcați unul. Grinzile din lemn masiv funcționează ca înainte.

Aceasta este o îndrumare de amplasare. Alegerea finală a grinzilor necesită tabelele producătorului, încărcările proiectului și inginerul.

## Lista de tăiere

În panoul Tabele alegeți **Lemn**: fiecare piesă de structură, grupată după dimensiune și după lungimea comercială pe care ați cumpăra-o (lungimi întregi de 2' de la 8'; pași de 600 mm, în milimetri), cu numărul de piese și board feet. **CSV** descarcă tabelul.

:::warning
Dimensiunile buiandrugilor, grinzilor de planșeu, căpriorilor și grinzilor de tavan vin din tabele implicite etichetate pentru o casă tipică cu unul sau două niveluri, nu din calcul de inginerie. **Proprietăți** spune când o deschidere sau un gol este dincolo de tabelul său. Un proiectant sau un inginer verifică deschiderile, încărcările și îmbinările.

Structurile TJI folosesc doar un tabel pe care îl încărcați, pe care îl faceți din tabelele actuale ale producătorului; BimCraft nu livrează niciunul. Sugestia nu verifică rezemarea, sarcinile concentrate, consolele, golurile, buiandrugii golului de scară sau îmbinările, iar forma I a modelului este schematică.
:::

## Ce se salvează

Fiecare perete, planșeu sau acoperiș structurat este un ansamblu de elemente IFC („Framing”) format din membri IFC (montanți, rigle, căpriori, contrafișuri, blocaje, ferme) și grinzi (buiandrugi, grinzi de planșeu, grinzi de contur, grinzi de coamă), fiecare cu dimensiunea, lungimea și board feet.
