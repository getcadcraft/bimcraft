---
title: Scări și balustrade
summary: Desenați scări drepte, în L, în U și cu trepte de evantai, care își dimensionează contratreptele și treptele după înălțimea de la un nivel la altul, cu mâini curente și spalete, iar golul scării este decupat în planșeul de deasupra; desenați parapete de-a lungul teraselor și în jurul golurilor.
keywords: elicoidală, scară rotundă, scară, scări, scară în spirală, rampă, contratreaptă, treaptă, podest, trepte de evantai, scară în L, scară în U, scară cu întoarcere, mână curentă, parapet, protecție, balustradă, spalet, stâlp, gol de scară, înălțime liberă, terasă, balcon
from: 16e5ace4
---

## Ce veți face

Adăugați scări între niveluri și balustrade acolo unde oamenii au nevoie de ele. O scară își calculează singură treptele din înălțimea dintre niveluri, se încadrează în limitele obișnuite pentru locuințe, pune mâini curente pe laturile deschise și decupează golul scării în planșeul de deasupra.

## Desenați o scară

1. Pe nivelul de la care începe scara, deschideți {{ui:Build}} și alegeți {{ui:Scară}}.
2. Alegeți tipul — **Dreaptă**, **În L cu podest**, **În U cu podest** sau **În L cu trepte de evantai** — sensul în care **se întoarce**, **lățimea** și locul unde se află **mâinile curente**.
3. Faceți clic acolo unde începe scara: în mijlocul marginii din față a primei trepte.
4. Mutați cursorul în direcția în care urcă scara; treptele urmează cursorul, cu numărul de contratrepte și de trepte. Se agață de pereți și de pași de 15°; țineți apăsat {{key:Shift}} pentru a o menține perpendiculară.
5. Faceți clic. {{key:Esc}} începe din nou.

## Desenați o scară elicoidală

1. Deschideți {{ui:Build}}, alegeți {{ui:Scară}}, apoi alegeți **Elicoidală** drept tip.
2. Setați **Virare**, sensul în care se înfășoară urcând (stânga înseamnă în sens trigonometric).
3. Faceți clic pe centrul stâlpului său.
4. Faceți clic în direcția în care arată prima treaptă.

Pornește cu o lățime de 30" (treapta, de la stâlp până la exterior), cu un stâlp de 4½". Contratreptele se calculează din înălțimea dintre pardoseala nivelului și cel de deasupra, cel mult 9½" implicit. Treptele au adâncimea de 7½" pe linia de mers, la 12" de stâlp. Mâna curentă trece pe exterior.

În **Proprietăți**, o scară elicoidală adaugă **Stâlp central**, cu diametrul său. Câmpul **Treaptă** se măsoară pe linia de mers. Verificările ei sunt valori implicite etichetate pentru scările elicoidale: lățime liberă de 26", cel puțin 6¾" de treaptă pe linia de mers, contratrepte de cel mult 9½" și mâini curente între 34" și 38". Nu sunt calcule de inginerie; autoritatea de construcții decide.

## Cum se calculează treptele

Înălțimea dintre pardoseala nivelului și pardoseala nivelului de deasupra este împărțită în contratrepte egale, de cel mult 7¾", iar fiecare treaptă are adâncimea de 10" (ambele pot fi modificate în **Proprietăți**). Un podest contează ca o treaptă; treptele de evantai sunt trei trepte așezate în evantai în jurul colțului interior. Schimbarea înălțimii unui nivel recalculează fiecare scară de pe el.

:::warning
Contratreptele de 7¾", treptele de 10", lățimea de 36", înălțimea liberă de 6'-8" și mâinile curente între 34" și 38" sunt valori implicite etichetate după codul obișnuit pentru locuințe, nu calcule de inginerie. **Proprietăți** arată care sunt îndeplinite; autoritatea de construcții decide ce se aplică.
:::

## Modificați o scară

Selectați-o (faceți clic pe ea în plan sau în vederea 3D) și modificați în **Proprietăți**: tipul și sensul de virare, lățimea, contratreapta cea mai înaltă, adâncimea treptei, mâinile curente și înălțimea lor, precum și **Decupați planșeul de deasupra** pentru golul scării. Contratreptele și treptele cu care a rezultat sunt afișate dedesubt.

## Golul scării

Când nivelul de deasupra are un planșeu, scara îl decupează acolo unde treptele ar avea mai puțin de 6'-8" de înălțime liberă. Decuparea se mută odată cu scara și dispare când scara este ștearsă.

## Desenați o balustradă

1. Deschideți {{ui:Build}} și alegeți {{ui:Balustradă}}.
2. Alegeți **Parapet** (36" înălțime) sau **Mână curentă** și înălțimea.
3. Faceți clic de-a lungul marginii — o terasă, un balcon, în jurul golului unei scări — și faceți dublu clic sau apăsați {{key:Enter}} pentru a termina.

Balustradele primesc stâlpi la capete și la colțuri, iar spaleții au intervale sub 4". Selectați una pentru a-i schimba tipul, înălțimea sau cât de sus deasupra pardoselii începe.

## Desenați un gard

Alegeți **Gard** în același instrument Balustradă, setați înălțimea (1800 mm ca valoare de pornire), faceți clic de-a lungul liniei gardului și apăsați {{key:Enter}}.

- Gardul primește un stâlp la fiecare capăt și la fiecare colț, plus un stâlp cel mult la fiecare 2.4 m între ei. Un gard cu panouri are un panou între stâlpi; un gard cu rigle are două rigle. Aceste dimensiuni sunt alegeri uzuale, nu o cerință a codului: regulile locale limitează înălțimea unui gard.
- Este un singur element în model (un IfcRailing numit Fence), cu un set de proprietăți {{ui:CadCraft_Fence}}: stil, înălțime, stâlpi, panouri, rigle, porți, lungime și suprafața panourilor. Un singur pas de anulare.
- Nu sunt desenate aici: porțile (generatorul din CivilCraft le amplasează), șipcile, terenul (gardul stă pe nivel) și selectarea unui singur stâlp.

## Ce se salvează

O scară se salvează ca scară IFC alcătuită din rampe de scară (cu contratreptele, treptele, înălțimea contratreptelor și lungimea treptelor), podeste, trepte de evantai și mâini curente; golul scării este un gol în planșeul de deasupra. Balustradele sunt balustrade IFC, cu lungimea lor și numărul de spalete și de stâlpi.
