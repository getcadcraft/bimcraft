---
title: Pomicanje, kopiranje, poravnavanje i raspoređivanje elemenata zgrade
summary: Pomaknite zidove, podove, stupove i postavljene stavke za baznu točku i drugu točku ili upisanu udaljenost, kopirajte ih usput te ih poravnajte ili razmaknite ravnomjerno, na tlocrtu ili odabirom u 3D prikazu.
keywords: pomakni, kopiraj, poravnaj, raspoređi, razmak, odmak, bazna točka, pomak, zidovi, stupovi, podovi, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Što ćete učiniti

Pomaknite zid, stup, pod ili postavljenu stavku knjižnice na novo mjesto, napravite njihove kopije ili ih poredajte u niz, bez ponovnog crtanja.

## Nazivi i tipke

Naredbe se zovu {{ui:Move}}, {{ui:Align}} i {{ui:Distribute}}, a u naredbeni redak možete upisati `MOVE`, `ALIGN` i `DISTRIBUTE`, kao u aplikaciji za crtanje CadCraft. Jedna razlika: u BimCraftu je {{key:M}} Mjeri, pa Pomakni ima svoju tipku, {{key:Shift+M}}. Alati su u izborniku {{ui:Build}}.

## Pomakni

1. Odaberite što pomaknuti, na tlocrtu ili u 3D prikazu. Zidovi, podovi, stupovi i postavljene stavke knjižnice mogu se odabrati u jednom odabiru.
2. Pritisnite {{key:Shift+M}} ili odaberite {{ui:Move}}.
3. Kliknite baznu točku, zatim drugu točku. Ili, nakon bazne točke, upišite udaljenost i pritisnite {{key:Enter}}: element ide u smjeru u kojem pokazuje pokazivač od bazne točke. Možete upisati i `dx,dy` (ili `@dx,dy`), ili `duljina<kut`.
4. Pritisnite {{key:C}} da uključite {{ui:Copy}}: svaki pomak tada pravi kopije i ostaje spreman za sljedeći. Pritisnite {{key:Esc}} da prestanete.

Obje točke mogu se kliknuti i u 3D prikazu: dok je Pomakni uključen, pokazivač se poklapa s visinom poda etaže, pa je klik tamo točka tlocrta. Držite {{key:Shift}} dok kliknete da odaberete neki drugi element. Koristite tlocrt, {{ui:Top}}, {{ui:Front}} ili {{ui:Side}} prema želji: točke uvijek leže na toj etaži.

Zid povlači sa sobom svoja vrata i prozore. Nacrtani pod povlači svoje otvore. Prostorije, podovi i stropovi koji prate zidove ažuriraju se. Zidovi koji su se spajali s pomaknutim zidom ostaju gdje jesu.

Svaki pomak je jedna promjena: jedan {{key:Mod+Z}} ga poništava, i putuje do svih u sesiji Live TeamWork. Postavljena stavka knjižnice ne može se ovako kopirati; upotrijebite {{ui:Edit}} › {{ui:Copy}} i {{ui:Paste}}.

## Poravnaj

Odaberite dva ili više elemenata, odaberite {{ui:Align}}, zatim stranu (lijevo, središte, desno, vrh, sredina ili dno) i na što se poravnava: odabrani skup, prvi odabrani, zadnji odabrani ili točka koju kliknete. Pritisnite {{ui:Align}} na traci.

## Raspoređivanje

Odaberite tri ili više elemenata, odaberite {{ui:Distribute}}, zatim smjer (vodoravno ili okomito) i razmak: jednaki razmaci između njih ili jednaka središta. Dva na krajevima ostaju gdje jesu.

Zidovi koje Poravnaj ili Raspoređivanje pomiču zadržavaju svoje spojeve, kao i kod Pomakni: zid spojen s pomaknutim zidom klizi krajem po svojoj liniji da ostane spojen, pregradni zidovi koji se na njega naslanjaju idu s njim, a dva spojena zida koja su oba pomaknuta zadržavaju svoj kut tamo gdje se njihove nove linije sastaju. Prostorije ostaju zatvorene. To je jedan korak u **Promjene**.
