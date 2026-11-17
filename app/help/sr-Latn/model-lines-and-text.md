---
title: Linije modela i tekst modela: crtaju se u modelu, na radnoj ravni
summary: Linija modela je linija, polilinija ili luk koji živi u modelu i prikazuje se u svakom prikazu koji ga vidi. Tekst modela je 3D natpis sa pravom dubinom. Oba se crtaju na radnoj ravni.
keywords: linija modela, tekst modela, 3D tekst, natpis, znak, signalizacija, linija u 3D, luk, polilinija, radna ravan, izvučeni tekst, font, dubina, detaljna linija, linija crteža, napomena, IfcAnnotation
from: fc9cccb5
---

## Šta ćete uraditi

Nacrtajte linije i natpise koji su deo modela, a ne samo jednog prikaza.

## Koraci

1. Prvo postavite radnu ravan (pogledajte **Radna ravan**). Ravan nivoa crta se na planu; uspravna ravan u Prikazu radne ravni (Work Plane Viewer).
2. Za liniju izaberite **Linija modela** u meniju **Verzija** i izaberite **Linija**, **Polilinija** ili **Luk (tri tačke)**:
   - linija su dva klika;
   - polilinija je klik za svaku tačku, pa Enter ili dvostruki klik. Klik na prvu tačku je zatvara;
   - luk su tri klika: početak, tačka kroz koju prolazi, kraj.
3. Za tekst izaberite **Tekst modela**. Upišite reči, podesite visinu velikih slova i dubinu, pa kliknite gde tekst počinje (levi kraj osnovne linije).
4. Izaberite liniju ili tekst da ga vidite u **Svojstvima**. Reči, visina i dubina teksta mogu se promeniti tamo. Delete briše.

## Gde se prikazuju

- Linija modela se prikazuje na planu svog nivoa, u 3D prikazu, u panelu izgleda i preseka i u Prikazu radne ravni kad leži na radnoj ravni. Linija crteža (Anotiraj, Linija) pripada samo jednom prikazu.
- Tekst modela je čvrsta geometrija: prikazuje se gde god se model prikazuje, na planu, u 3D, u izgledima i presecima i na listovima.
- Linije modela se još ne crtaju na štampanim listovima. Tekst modela se crta.

## Font

Tekst modela koristi isti font kao listovi i PDF-ovi: Liberation Sans, pod licencom SIL Open Font License. Slovo koje font nema crta se kao upitnik, pa dobijate poruku koje je to. Postoji jedan font i jedna debljina. Slova su razmaknuta prema širinama iz fonta, bez kerninga.

## U IFC datoteci

- Linija modela je IfcAnnotation sa tipom objekta ModelLine. Njen oblik je 3D kriva: polilinija, ili odsečen krug za luk.
- Tekst modela je IfcBuildingElementProxy sa tipom objekta ModelText. Njegov oblik je jedno izvučeno telo za svaki deo slova, sa rupama slova kao O i B. Količine su površina lica i zapremina (površina lica puta dubina).

## Dobro je znati

- Svaka veličina se pravi kako tražite. Odbijaju se samo linija bez dužine, luk čije su tri tačke na jednoj pravoj, ili tekst bez slova, jer nema šta da se napravi.
- Svaka linija, kao i svaki tekst ili promena na njemu, jeste jedan korak opozivanja (Opozovi).
