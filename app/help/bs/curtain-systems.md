---
title: Sistemi zavjesnih zidova: stakleni zidovi na mreži, sa štokovima
summary: Nacrtaj sistem zavjesnog zida kao zid ili ga postavi na površinu, zatim podesi linije mreže i štokove. Sprema se kao IfcCurtainWall s poljima i štokovima.
keywords: sistem zavjesnog zida, zavjesni zid, mreža zavjesnog zida, štok, staklo, staklena fasada, stakleni zid, panel, polje, po površini, površina, masa, linija mreže, razmak, profil, prečka, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Šta ćete uraditi

Napraviti stakleni zid od polja između štokova, promijeniti gdje su linije mreže i izabrati koje linije nose štok.

## Koraci

1. Uključi **Crtanje** i otvori meni **Gradnja** (u prikazu s trakom: karticu Arhitektura).
2. Izaberi **Sistem zavjesnog zida**. U njegovom redu postavi vrh (sprat iznad ili visinu), liniju svakih toliko duž njega, liniju svakih toliko uz njega (ostavi prazno za bez linija), da li dobija štokove i profil štoka.
3. Klikni gdje počinje i gdje se završava, kao kad crtaš zid. Shift održava pravi ugao.
4. Za promjenu mreže izaberi **Mreža zavjesnog zida** i klikni sistem:
   - **Dodaj liniju**: uspravna linija ide tamo gdje klikneš. Za linije nivoa prvo u **Na** upiši njenu visinu.
   - **Premjesti liniju**: klikni liniju, pa mjesto gdje ide.
   - **Ukloni liniju**: klikni liniju.
   - **Postavi po razmaku**: upiši razmak u **Svakih**, pa klikni sistem.
5. Za promjenu štokova izaberi **Štok**, odaberi na šta djeluje (uspravnu liniju na koju klikneš, liniju nivoa na visini, ivicu ili svaku liniju), izaberi **Postavi štokove** ili **Ukloni štokove** i profil, pa klikni sistem.
6. Odaberi sistem da vidiš sve u **Svojstvima**: svaku liniju mreže s mjestom, oznaku za njen štok i dugme za uklanjanje; razmak; ivicu; profil; debljinu polja.

## Po površini

**Po površini** pravi sistem zavjesnog zida na ravnoj površini koju kliknete u 3D prikazu. Njegov red ima iste postavke mreže i štokova.

- Radi na bilo kojoj ravnoj površini bilo kojeg elementa koji 3D prikaz prikazuje: masi, zidu, podu, ravni krova, stubu, postavljenoj stavci. Površina može biti uspravna, nagnuta ili vodoravna.
- Sistem preuzima obris površine. Zabat ili drugi neobičan oblik reže polja i štokove na taj oblik.
- Može napraviti **zid** umjesto toga, uz dno uspravne površine i visok koliko i površina. Zid ovdje uvijek stoji uspravno, pa nagnuta ili vodoravna površina ne može dobiti zid.
- Ne pravi krov. Krov u BimCraft-u se računa iz obrisa nivoa i nagiba, a ne iz jedne površine.
- Zakrivljena površina je mnogo malih ravnih površina: jedan klik uzima jednu od njih.
- Površina s otvorima: sistem pokriva vanjski obris površine.

## Kako se mjeri

- **Bruto površina** je obris sistema.
- **Površina stakla** su polja kakva su napravljena: svako polje gubi pola širine štoka sa strane na kojoj je štok mreže, a punu širinu na ivičnom štoku.
- Uspravni štok ide od ivice do ivice. Vodoravni štok staje na svakom uspravnom štoku i na ivici. Ivični štokovi leže unutar obrisa; gdje se dva sretnu, uspravniji ide kroz. Spojevi su sječeni ravno, ne u gerungu.
- **Specifikacije** imaju listu **Sistemi zavjesnog zida** s ovim brojevima kad model ima takav sistem.

## U IFC datoteci

IfcCurtainWall na svom nivou, sastavljen od jednog IfcPlate (panel zavjese) po polju i jednog IfcMember (štok) po dijelu štoka, svaki sa svojim oblikom, materijalom i osnovnim količinama.

## Dobro je znati

- Bilo koja veličina se pravi kako tražite. Odbija se samo obris bez površine, jer nema šta napraviti.
- Sistem nacrtan kao zid zadržava visinu s kojom je nacrtan. Ako kasnije pomjeriš nivo, ponovo postavi njegovu visinu u Svojstvima.
- Alat Premjesti još ne pomjera sistem zavjesnog zida. Obriši ga i ponovo nacrtaj, ili promijeni njegovu mrežu na licu mjesta.
- Poništi vraća svaki korak: cijeli sistem, jednu promjenu mreže, jednu promjenu štokova.
