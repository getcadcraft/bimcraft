---
title: Linije modela i tekst modela: nacrtani u modelu, na radnoj ravni
summary: Linija modela je linija, polilinija ili luk koji živi u modelu i prikazuje se u svakom pogledu koji ga vidi. Tekst modela je 3D natpis sa pravom dubinom. Oba se crtaju na radnoj ravni.
keywords: linija modela, tekst modela, 3D tekst, natpis, oznaka, linija u 3D, luk, polilinija, radna ravan, istisnuti tekst, font, dubina, detaljna linija, linija za crtanje, anotacija, IfcAnnotation
from: fc9cccb5
---

## Šta ćeš uraditi

Nacrtaj linije i natpise koji su dio modela, a ne jednog pogleda.

## Koraci

1. Prvo postavi radnu ravan (vidi **Radna ravan**). Ravan nivoa crta se na osnovi; uspravna ravan u Work Plane Viewer-u.
2. Za liniju odaberi **Linija modela** u meniju {{ui:Verzija}} i odaberi **Linija**, **Polilinija** ili **Luk (tri tačke)**:
   - linija su dva klika;
   - polilinija je klik za svaku tačku, pa Enter ili dvostruki klik. Klik na prvu tačku je zatvara;
   - luk su tri klika: početak, tačka kroz koju prolazi i kraj.
3. Za tekst odaberi **Tekst modela**. Upiši riječi, postavi visinu velikih slova i dubinu, pa klikni gdje tekst počinje (lijevi kraj njegove osnovne linije).
4. Odaberi liniju ili tekst da ga vidiš u **Svojstvima**. Riječi, visina i dubina teksta mogu se tamo promijeniti. Izbriši ga uklanja.

## Gdje se prikazuju

- Linija modela se prikazuje u osnovi svog nivoa, u 3D pogledu, na panelu izgleda i presjeka i u Work Plane Viewer-u kad leži na radnoj ravni. Linija za crtanje (Anotiraj, Linija) pripada samo jednom pogledu.
- Tekst modela je puna geometrija: prikazuje se gdje god se model prikazuje, u osnovi, u 3D, u izgledima i presjecima i na listovima.
- Linije modela se još ne crtaju na štampanim listovima. Tekst modela se crta.

## Font

Tekst modela koristi isti font kao listovi i PDF-ovi: Liberation Sans, pod licencom SIL Open Font License. Slovo koje font nema crta se kao upitnik i javlja se koje je. Postoji jedan font i jedna debljina. Slova su razmaknuta prema vlastitim širinama fonta, bez kerninga.

## U IFC datoteci

- Linija modela je IfcAnnotation sa tipom objekta ModelLine. Njen oblik je 3D kriva: polilinija, ili odsječen krug za luk.
- Tekst modela je IfcBuildingElementProxy sa tipom objekta ModelText. Njegov oblik je jedno istisnuto tijelo za svaki dio slova, sa rupama slova poput O i B. Količine su površina lica i zapremina (površina lica puta dubina).

## Dobro je znati

- Bilo koja veličina pravi se kako tražiš. Odbija se samo linija bez dužine, luk čije su tri tačke na jednoj liniji ili tekst bez slova, jer nema šta napraviti.
- Svaka linija, kao i svaki tekst ili promjena na njemu, jedan je korak poništavanja.
