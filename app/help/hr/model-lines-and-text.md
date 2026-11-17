---
title: Linije modela i tekst modela: nacrtani u modelu, na radnoj ravnini
summary: Linija modela je linija, polilinija ili luk koji živi u modelu i prikazuje se u svakom prikazu koji ga vidi. Tekst modela je 3D natpis sa stvarnom dubinom. Oba se crtaju na radnoj ravnini.
keywords: linija modela, tekst modela, 3D tekst, natpis, znak, signalizacija, linija u 3D, luk, polilinija, radna ravnina, izvučeni tekst, font, dubina, linija detalja, crtačka linija, bilješka, IfcAnnotation
from: fc9cccb5
---

## Što ćete učiniti

Nacrtajte linije i natpise koji su dio modela, a ne jednog prikaza.

## Koraci

1. Najprije postavite radnu ravninu (vidi **Radna ravnina**). Ravnina etaže crta se u tlocrtu; okomita ravnina u prikazu radne ravnine.
2. Za liniju odaberite **Linija modela** u izborniku **Izgradnja** i odaberite **Linija**, **Polilinija** ili **Luk (tri točke)**:
   - linija su dva klika;
   - polilinija je klik za svaku točku, zatim Enter ili dvostruki klik. Klik na prvu točku je zatvara;
   - luk su tri klika: početak, točka kroz koju prolazi i kraj.
3. Za tekst odaberite **Tekst modela**. Upišite riječi, postavite visinu velikih slova i dubinu, zatim kliknite mjesto na kojem tekst počinje (lijevi kraj njegove osnovne linije).
4. Odaberite liniju ili tekst da ga vidite u {{ui:Properties}}. Riječi, visinu i dubinu teksta možete mijenjati tamo. {{key:Delete}} ga uklanja.

## Gdje se prikazuju

- Linija modela prikazuje se u tlocrtu svoje etaže, u 3D prikazu, u panelu pročelja i presjeka te u prikazu radne ravnine kada leži na radnoj ravnini. Crtačka linija (Bilješke, Linija) pripada samo jednom prikazu.
- Tekst modela je čvrsta geometrija: prikazuje se gdje se prikazuje model, u tlocrtu, 3D prikazu, pročeljima i presjecima te na listovima.
- Linije modela još se ne ispisuju na ispisanim listovima. Tekst modela se ispisuje.

## Font

Tekst modela koristi isti font kao listovi i PDF-ovi: Liberation Sans, prema licenci SIL Open Font License. Slovo koje font nema crta se kao upitnik i obavijesti vas se koje je. Postoji jedan font i jedna debljina. Slova su razmaknuta prema širinama fonta, bez kerniranja.

## U IFC datoteci

- Linija modela je IfcAnnotation s vrstom objekta ModelLine. Njezin oblik je 3D krivulja: polilinija, ili obrezani krug za luk.
- Tekst modela je IfcBuildingElementProxy s vrstom objekta ModelText. Njegov oblik je jedno izvučeno tijelo za svaki komad slova, s rupama slova poput O i B. Njegove količine su površina plohe i volumen (površina plohe puta dubina).

## Dobro je znati

- Svaka veličina nastaje kako zatražite. Odbijaju se samo linija bez duljine, luk čije su tri točke na jednom pravcu, ili tekst bez slova, jer nema što napraviti.
- Svaka linija, te svaki tekst ili promjena na njemu, jedan je korak za Poništi.
