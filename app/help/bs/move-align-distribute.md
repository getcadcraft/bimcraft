---
title: Pomjeri, kopiraj, poravnaj i rasporedi elemente zgrade
summary: Pomjeraj zidove, ploče, stubove i postavljene stavke za baznu tačku i drugu tačku ili upisanu udaljenost, kopiraj ih dok ideš, i poravnaj ili ravnomjerno rasporedi, u osnovi ili odabirom u 3D.
keywords: pomjeri, kopiraj, poravnaj, rasporedi, razmak, odmak, bazna tačka, pomak, zidovi, stubovi, ploče, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Šta ćeš uraditi

Pomakni zid, stub, ploču ili postavljenu stavku iz biblioteke na novo mjesto, napravi njihove kopije ili poredaj nekoliko u red, bez ponovnog crtanja.

## Nazivi i tipke

Naredbe se zovu {{ui:Pomjeri}}, {{ui:Poravnaj}} i {{ui:Rasporedi}}, a u komandnoj liniji možeš upisati `MOVE`, `ALIGN` i `DISTRIBUTE`, kao u aplikaciji za crtanje CadCraft. Jedna razlika: u programu BimCraft {{key:M}} je {{ui:Mjeri}}, pa Pomjeri ima svoju tipku, {{key:Shift+M}}. Alati su u meniju {{ui:Verzija}}.

## Pomjeri

1. Odaberi šta pomjeriš, na osnovi ili u 3D pogledu. Zidovi, ploče, stubovi i postavljene stavke iz biblioteke mogu ići u jednom odabiru.
2. Pritisni {{key:Shift+M}} ili odaberi {{ui:Pomjeri}}.
3. Klikni baznu tačku, pa drugu tačku. Ili, nakon bazne tačke, upiši udaljenost i pritisni {{key:Enter}}: ide u smjeru u kojem pokazuje pokazivač od bazne tačke. Možeš upisati i `dx,dy` (ili `@dx,dy`), ili `dužina<ugao`.
4. Pritisni {{key:C}} da uključiš {{ui:Kopiraj}}: svako pomjeranje tada pravi kopije i ostaje spremno za sljedeće. Pritisni {{key:Esc}} da zaustaviš.

Obje tačke se mogu kliknuti i u 3D pogledu: kad je Pomjeri uključeno, pokazivač se susreće sa visinom poda nivoa, pa je klik tamo tačka osnove. Drži {{key:Shift}} dok klikneš da odabereš drugi element. Koristi osnovu, {{ui:Gore}}, {{ui:Sprijeda}} ili {{ui:Strana}} kako hoćeš: tačke uvijek leže na tom nivou.

Zid sa sobom nosi svoja vrata i prozore. Nacrtana ploča nosi svoje otvore. Prostorije, podovi i plafoni koji prate zidove se ažuriraju. Zidovi koji su se spajali sa pomaknutim zidom ostaju na mjestu.

Svako pomjeranje je jedna promjena: jedno {{key:Mod+Z}} je poništava, i stiže svima u sesiji Live TeamWork. Postavljena stavka iz biblioteke ne može se kopirati na ovaj način; koristi {{ui:Uredi}} › {{ui:Kopiraj}} i {{ui:Zalijepi}}.

## Poravnaj

Odaberi dva ili više elemenata, odaberi {{ui:Poravnaj}}, pa stranu (lijevo, centar, desno, vrh, sredina ili dno) i na šta se poravnava: cijeli odabrani skup, prvi odabrani, zadnji odabrani ili tačku koju klikneš. Pritisni {{ui:Poravnaj}} na traci.

## Rasporedi

Odaberi tri ili više elemenata, odaberi {{ui:Rasporedi}}, pa smjer (vodoravno ili okomito) i razmak: jednake praznine među njima ili jednaki centri. Dva krajnja ostaju gdje jesu.

Zidovi koje Poravnaj ili Rasporedi pomjeraju zadržavaju svoje spojeve, kao i pri Pomjeri: zid spojen sa pomaknutim zidom klizi svojim krajem duž vlastite linije da ostane spojen, pregrade koje se naslanjaju na njega idu s njim, a dva spojena zida koja se oba pomjeraju zadržavaju ugao tamo gdje se sijeku njihove nove linije. Prostorije ostaju zatvorene. To je jedan korak u **Izmjene**.
