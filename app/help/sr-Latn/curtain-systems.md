---
title: "Zavesni sistemi: staklene zidne površine na mreži, sa ukrućenjima"
summary: Nacrtajte zavesni sistem kao zid ili ga postavite na površinu, zatim podesite linije mreže i ukrućenja. Čuva se kao IfcCurtainWall sa svojim tablama i ukrućenjima.
keywords: zavesni sistem, zavesni zid, mreža zavese, ukrućenje, staklarija, izložbena vitrina, stakleni zid, panel, tabla, po površini, površina, masa, linija mreže, razmak, profil, poprečnik, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Šta ćete uraditi

Napravite staklenu zidnu površinu od tabli između ukrućenja, promenite gde su linije mreže i izaberite koje linije nose ukrućenje.

## Koraci

1. Uključite **Crtanje** i otvorite meni **Izgradnja** (u rasporedu sa trakom: karticu Arhitektura).
2. Izaberite **Zavesni sistem**. U njegovom redu postavite vrh (sprat iznad ili visinu), liniju na svakih toliko duž njega, liniju na svakih toliko uz njega (ostavite prazno za nijednu), da li dobija ukrućenja i profil ukrućenja.
3. Kliknite gde počinje i gde se završava, kao kada crtate zid. Shift ga održava pravouglim.
4. Da promenite mrežu, izaberite **Mreža zavese** i kliknite sistem:
   - **Dodaj liniju**: uspravna linija ide tamo gde kliknete. Za vodoravnu liniju prvo u **Na visini** upišite njenu visinu.
   - **Pomeri liniju**: kliknite liniju, pa mesto gde ide.
   - **Ukloni liniju**: kliknite liniju.
   - **Postavi razmakom**: u **Svaki** upišite razmak, pa kliknite sistem.
5. Da promenite ukrućenja, izaberite **Ukrućenje**, izaberite na šta se odnosi (uspravnu liniju na koju kliknete, vodoravnu liniju na visini, ivicu ili svaku liniju), izaberite **Postavi ukrućenja** ili **Ukloni ukrućenja** i profil, pa kliknite sistem.
6. Izaberite sistem da vidite sve u **Svojstvima**: svaku liniju mreže sa njenim mestom, oznaku za ukrućenje i dugme za uklanjanje; razmak; ivicu; profil; debljinu table.

## Po površini

**Po površini** pravi zavesni sistem na ravnoj površini koju kliknete u 3D prikazu. Njegov red ima ista podešavanja mreže i ukrućenja.

- Radi na bilo kojoj ravnoj površini bilo kog elementa koji 3D prikaz prikazuje: masi, zidu, podu, ravni krova, stubu, postavljenoj stavci. Površina može biti uspravna, nagnuta ili vodoravna.
- Sistem preuzima obris površine. Zabat ili neki drugi čudan oblik seče table i ukrućenja po njemu.
- Može da napravi **zid** umesto toga, duž dna uspravne površine i visok koliko i površina. Zid ovde uvek stoji uspravno, pa nagnuta ili vodoravna površina ne može da dobije zid.
- Ne pravi krov. Krov u BimCraft-u se računa iz obrisa sprata i nagiba, a ne iz jedne površine.
- Zakrivljena površina je mnogo malih ravnih površina: jedan klik uzima jednu od njih.
- Površina sa otvorima u njoj: sistem pokriva spoljni obris površine.

## Kako se meri

- **Bruto površina** je obris sistema.
- **Površina stakla** su table onakve kakve su napravljene: svaka tabla gubi polovinu širine ukrućenja sa jedne strane kada je uz ukrućenje mreže, a celu širinu uz ivično ukrućenje.
- Uspravno ukrućenje ide od ivice do ivice. Vodoravno ukrućenje staje na svakom uspravnom ukrućenju i na ivici. Ivična ukrućenja leže unutar obrisa; gde se dva sretnu, uspravnije ide kroz. Spojevi su sečeni pravo, a ne pod uglom.
- **Specifikacije** imaju listu **Zavesni sistemi** sa ovim brojevima kada model ima jedan.

## U IFC datoteci

IfcCurtainWall na njegovom spratu, sastavljen od jednog IfcPlate (panel zavese) po tabli i jednog IfcMember (ukrućenje) po delu ukrućenja, svaki sa svojim oblikom, materijalom i osnovnim količinama.

## Dobro je znati

- Bilo koja veličina se pravi kako tražite. Odbija se samo obris bez površine, jer nema šta da se napravi.
- Sistem nacrtan kao zid zadržava visinu kojom je nacrtan. Ako kasnije pomerite sprat, ponovo postavite njegovu visinu u Svojstvima.
- Alat Pomeri još ne pomera zavesni sistem. Obrišite ga i nacrtajte ponovo, ili promenite njegovu mrežu na licu mesta.
- Opozovi vraća svaki korak: ceo sistem, jednu promenu mreže, jednu promenu ukrućenja.
