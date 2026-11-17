---
title: Zavjesni sustavi: staklene stijene na mreži, sa stupićima
summary: Nacrtajte zavjesni sustav kao zid ili ga postavite na plohu, zatim postavite linije mreže i stupiće. Sprema se kao IfcCurtainWall s poljima i stupićima.
keywords: zavjesni sustav, zavjesni zid, zavjesna mreža, stupić, ostakljenje, izložbeno pročelje, staklena stijena, panel, polje, po plohi, ploha, masa, linija mreže, razmak, profil, poprečnik, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Što ćete napraviti

Izradite staklenu stijenu od polja između stupića, promijenite mjesta linija mreže i odaberite koje linije nose stupić.

## Koraci

1. Uključite {{ui:Crtanje}} i otvorite izbornik {{ui:Gradnja}} (u rasporedu s vrpcom: karticu Arhitektura).
2. Odaberite {{ui:Zavjesni sustav}}. U njegovu retku postavite vrh (razinu iznad ili visinu), liniju svakih toliko duž njega, liniju svakih toliko uvis (ostavite prazno za nijedno), hoće li dobiti stupiće i profil stupića.
3. Kliknite gdje počinje i gdje završava, kao kad crtate zid. Shift ga drži pod pravim kutom.
4. Za promjenu mreže odaberite {{ui:Zavjesna mreža}} i kliknite sustav:
   - **Dodaj liniju**: okomita linija ide mjestom gdje kliknete. Za vodoravnu liniju razine najprije upišite njezinu visinu u **Na**.
   - **Pomakni liniju**: kliknite liniju, zatim mjesto gdje ide.
   - **Ukloni liniju**: kliknite liniju.
   - **Postavi prema razmaku**: upišite razmak u **Svakih**, zatim kliknite sustav.
5. Za promjenu stupića odaberite {{ui:Stupić}}, izaberite na što djeluje (okomitu liniju koju kliknete, vodoravnu liniju razine na visini, rub ili svaku liniju), odaberite {{ui:Postavi stupiće}} ili {{ui:Ukloni stupiće}} i profil, zatim kliknite sustav.
6. Odaberite sustav da vidite sve o njemu u {{ui:Svojstva}}: svaku liniju mreže s njezinim mjestom, oznaku za stupić i gumb za uklanjanje; razmak; rub; profil; debljinu polja.

## Po plohi

**{{ui:Po plohi}}** izrađuje zavjesni sustav na ravnoj plohi koju kliknete u 3D prikazu. Njegov redak ima iste postavke mreže i stupića.

- Radi na bilo kojoj ravnoj plohi bilo kojeg elementa koji 3D prikaz prikazuje: mase, zida, poda, ravnine krova, stupa, postavljene stavke. Ploha može biti okomita, nagnuta ili vodoravna.
- Sustav preuzima obris plohe. Zabat ili drugi neobičan oblik reže polja i stupiće na taj oblik.
- Može napraviti **zid** umjesto toga, duž podnožja okomite plohe i visok koliko i ploha. Zid se ovdje uvijek postavlja okomito, pa nagnuta ili vodoravna ploha ne može dati zid.
- Ne izrađuje krov. Krov u BimCraft-u izračunava se iz obrisa razine i nagiba, a ne iz jedne plohe.
- Zakrivljena ploha sastoji se od mnogo malih ravnih ploha: jedan klik uzima jednu od njih.
- Ploha s otvorima: sustav pokriva vanjski obris plohe.

## Kako se mjeri

- **Bruto površina** je obris sustava.
- **Površina stakla** su polja kakva su napravljena: svako polje gubi pola širine stupića s jedne strane uz stupić mreže, a punu širinu uz rubni stupić.
- Okomiti stupić prolazi od ruba do ruba. Vodoravni stupić staje na svakom okomitom stupiću i na rubu. Rubni stupići leže unutar obrisa; gdje se dvoje susreću, prolazi onaj koji je okomitiji. Spojevi se režu pod pravim kutom, a ne kosim.
- **Specifikacije** imaju popis **Zavjesni sustavi** s ovim brojevima čim ih model ima.

## U IFC datoteci

IfcCurtainWall na svojoj razini, sastavljen od jednog IfcPlate (zavjesni panel) po polju i jednog IfcMember (stupić) po dijelu stupića, svaki sa svojim oblikom, materijalom i osnovnim količinama.

## Dobro je znati

- Bilo koja veličina izrađuje se kako tražite. Odbija se samo obris bez površine, jer nema što izraditi.
- Sustav nacrtan kao zid zadržava visinu s kojom je nacrtan. Ako kasnije pomaknete razinu, ponovno postavite njezinu visinu u Svojstvima.
- Alat Pomakni još ne pomiče zavjesni sustav. Izbrišite ga i ponovno nacrtajte ili promijenite mu mrežu na mjestu.
- {{ui:Poništi}} vraća svaki korak: cijeli sustav, jednu promjenu mreže, jednu promjenu stupića.
