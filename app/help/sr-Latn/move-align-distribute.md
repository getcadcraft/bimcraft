---
title: Pomeranje, kopiranje, poravnanje i raspoređivanje elemenata zgrade
summary: Pomerite zidove, ploče, stubove i postavljene stavke za osnovnu tačku i drugu tačku ili upisano rastojanje, kopirajte ih dok idete, i poravnajte ih ili ih ravnomerno rasporedite, na planu ili izborom iz 3D prikaza.
keywords: pomeri, kopiraj, poravnaj, rasporedi, razmak, odmak, osnovna tačka, pomeraj, zidovi, stubovi, ploče, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Šta ćete uraditi

Pomerite zid, stub, ploču ili postavljenu stavku biblioteke na novo mesto, napravite kopije ili poređajte nekoliko elemenata, bez ponovnog crtanja.

## Imena i tasteri

Komande se zovu {{ui:Move}}, {{ui:Align}} i {{ui:Distribute}}, a u komandnoj liniji možete upisati `MOVE`, `ALIGN` i `DISTRIBUTE`, kao u aplikaciji za crtanje CadCraft. Jedna razlika: u BimCraft-u je {{key:M}} Izmeri, pa Pomeri ima sopstveni taster, {{key:Shift+M}}. Alati su u meniju {{ui:Build}}.

## Pomeranje

1. Izaberite šta da pomerite, na planu ili u 3D prikazu. Zidovi, ploče, stubovi i postavljene stavke biblioteke mogu ići u jednom izboru.
2. Pritisnite {{key:Shift+M}} ili izaberite {{ui:Move}}.
3. Kliknite osnovnu tačku, pa drugu tačku. Ili, posle osnovne tačke, upišite rastojanje i pritisnite {{key:Enter}}: ide u smeru u kojem pokazuje pokazivač od osnovne tačke. Možete upisati i `dx,dy` (ili `@dx,dy`), ili `dužina<ugao`.
4. Pritisnite {{key:C}} da uključite {{ui:Copy}}: svako pomeranje tada pravi kopije i ostaje spremno za sledeće. Pritisnite {{key:Esc}} da zaustavite.

Obe tačke se mogu kliknuti i u 3D prikazu: dok je Pomeri uključen, pokazivač se susreće sa visinom poda nivoa, pa je klik tamo tačka plana. Držite {{key:Shift}} dok kliknete da izaberete drugi element. Koristite plan, {{ui:Top}}, {{ui:Front}} ili {{ui:Side}} kako vam odgovara: tačke uvek leže na tom nivou.

Zid povlači svoja vrata i prozore sa sobom. Nacrtana ploča povlači svoje otvore. Prostorije, podovi i plafoni koji prate zidove se ažuriraju. Zidovi koji su se spajali sa pomerenim zidom ostaju tamo gde jesu.

Svako pomeranje je jedna promena: jedan {{key:Mod+Z}} je poništava, i prenosi se svima u sesiji Live TeamWork. Postavljena stavka biblioteke ne može da se kopira na ovaj način; koristite {{ui:Edit}} › {{ui:Copy}} i {{ui:Paste}}.

## Poravnanje

Izaberite dva ili više elemenata, izaberite {{ui:Align}}, pa stranu (levo, centar, desno, vrh, sredina ili dno) i na šta se poravnava: ceo izabrani skup, prvi izabrani, poslednji izabrani ili tačka koju kliknete. Pritisnite {{ui:Align}} na traci.

## Raspoređivanje

Izaberite tri ili više elemenata, izaberite {{ui:Distribute}}, pa pravac (vodoravno ili nadole) i razmak: jednaki prazni prostori između njih ili jednaki centri. Dva na krajevima ostaju tamo gde su.

Zidovi koje Poravnaj ili Rasporedi pomeri zadržavaju svoje spojeve, kao kod Pomeri: zid spojen sa pomerenim zidom klizi krajem po svojoj liniji da ostane spojen, pregradni zidovi koji u njega naležu idu sa njim, a dva spojena zida koja su oba pomerena zadržavaju ugao tamo gde se njihove nove linije seku. Prostorije ostaju zatvorene. To je jedan korak u **Izmenama**.
