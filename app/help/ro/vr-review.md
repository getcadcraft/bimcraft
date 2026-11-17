---
title: Revizuirea modelului într-o cască VR
summary: Parcurgeți modelul IFC la scară reală într-o cască VR: săriți, întoarceți-vă, măsurați, tăiați modelul, plasați probleme BCF cu o imagine, vedeți-l ca model pe masă și întâlniți pe ceilalți din sesiunea live.
keywords: vr, realitate virtuală, cască, webxr, xr, imersiv, quest, oculus, vive, index, pico, plimbare prin, plimbare, teleportare, revizuire de proiect, coordonare, revizuire, măsurare, secțiune, tăiere, problemă, probleme, bcf, pe masă, model la scară, prezență, avatare, live, împreună
from: 8994b36d
---

{{ui:VR}} de pe bara de instrumente vă pune în interiorul modelului cu o cască VR, la scară reală. Poziția de start este cea a camerei din vizualizarea 3D, pe podeaua de sub ea, orientată la fel. Casca afișează ce afișează vizualizarea 3D: etajele, elementele și modelele ascunse rămân ascunse, iar materialele pictate vin odată cu ele. Nimic nu se încarcă: browserul îl desenează pe acest calculator (sau în browserul căștii).

## Ce este necesar

- O cască pe care browserul o poate controla (WebXR): browserul propriu al unei căști independente, sau Chrome ori Edge pe un PC cu o cască conectată.
- Un model IFC deschis, pe o pagină sigură (https), așa cum este pe acest site.

Fără cască, {{ui:VR}} este inactiv și arată motivul.

## Pornirea

1. Pregătiți vizualizarea 3D de unde doriți să începeți: într-o încăpere sau afară, privind clădirea.
2. Faceți clic pe {{ui:VR}} de pe bara de instrumente.
3. Puneți casca pe cap.

Meniul este pe spatele mâinii stângi. Îndreptați spre el controlerul din dreapta și trageți de trăgaci ca să alegeți un buton. (Cu o singură mână, meniul plutește în fața punctului de pornire.)

## Deplasarea

- **Săritura:** în {{ui:Mutare}}, îndreptați spre o podea și trageți de trăgaci; ajungeți acolo. Sau împingeți joystickul înainte ca să vizați și lăsați-l ca să săriți. Puteți ateriza doar pe podele, planșee și teren (suprafețe orientate în sus), niciodată pe un perete.
- **Întoarcerea:** împingeți joystickul la stânga sau la dreapta: vă întoarceți cu 30° de fiecare dată.
- **Mersul:** în zona de joc, pur și simplu mergeți.

## Măsurare

Alegeți {{ui:Măsurare}}, apoi trageți de trăgaci pe două puncte. Distanța apare între ele, în metri. Un punct aproape de un colț se fixează de colț.

## Tăierea modelului

Alegeți {{ui:Secțiune}} și trageți de trăgaci pe o suprafață:

- pe un perete (sau pe orice altceva decât o podea): tot ce se află între punctul de unde priviți și suprafața aceea este tăiat, ca să vedeți înăuntru. Funcționează cel mai bine din exterior sau peste o încăpere;
- pe o podea, de sus: o secțiune de plan la 1.2 m deasupra acelei podele, ca pereții să-și arate partea de jos.

{{ui:Ștergere}} înlătură secțiunea și măsurătorile. Dacă un [plan de secțiune](topic:section-plane) taie modelul când porniți, casca pornește cu el.

## Plasarea unei probleme

Alegeți {{ui:Problemă}} și trageți de trăgaci acolo unde este problema. Un ac numerotat o marchează, iar problema intră în fila {{ui:Probleme}} ca subiect BCF, cu o imagine a ceea ce ați văzut și cu camera de unde stăteați, în coordonatele modelului. Salvați-le împreună cu restul [problemelor](topic:issues-bcf) ca fișier BCF; alte instrumente de coordonare le deschid în aceeași vizualizare.

Adăugați un comentariu la o problemă după ce ieșiți din VR, în fila Probleme: scrierea în cască este încă nerealizată.

## Vedeți-l ca model pe masă

{{ui:Pe masă}} micșorează modelul ca să încapă pe o masă din față; ocoliți-l sau întoarceți-l cu joystickul. {{ui:Scară reală}} vă readuce în locul de unde ați pornit.

## Cu alții, live

Într-o [sesiune live](topic:work-live), toți cei din VR văd ceilalți ca un cap și două mâini de culoarea lor, cu numele lor și cu un punct unde fiecare indică. Modificările făcute de oricine ajung la casca dumneavoastră într-o clipă. Persoanele de la birou nu sunt încă afișate în cască.

## Ieșirea

Alegeți {{ui:Ieșire din VR}} (sau scoateți casca și încheiați acolo). Vizualizarea 3D de pe ecran se mută unde se afla capul.

:::note
Testat cu un emulator de cască, încă nu pe fiecare cască. Un model mare poate face casca să se poticnească: ascundeți întâi etajele sau modelele de care nu aveți nevoie ([ascundere și izolare](topic:hide-and-isolate)).
:::
