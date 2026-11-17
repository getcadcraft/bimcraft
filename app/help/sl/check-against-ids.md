---
title: Preverjanje modela glede na IDS naročnika
summary: Naložite datoteko .ids, ki ste jo prejeli, in v težavah poiščite vsak element, ki ji ne ustreza, preden oddate datoteko IFC.
keywords: ids, specifikacija posredovanja informacij, buildingsmart, zahteve, dostava, preverjanje, kakovost, qa, eir, bep, lastnost, klasifikacija, material, javno naročanje
from: 7b960222
---

## Kaj boste naredili

IDS (Information Delivery Specification, standard buildingSMART) je seznam tega, kaj mora datoteka IFC vsebovati: kateri razredi, katere lastnosti z vrednostmi, klasifikacije, materiali ter kje kaj spada. Naročniki in javna naročila ga pošljejo skupaj z delom. BimCraft odprti model IFC preveri glede nanj in našteje vsak element, ki ne dosega zahtev.

## Koraki

1. Odprite model IFC.
2. Odprite {{ui:Check against an IDS}} v levem podoknu pod {{ui:Model checks}} ali izberite {{ui:Check against IDS…}} v meniju, ki ustreza vašemu slogu menijev.
3. Kliknite {{ui:Load an .ids file…}} in izberite datoteko. Nič se ne naloži nikamor.
4. Preberite rezultat: vsaka specifikacija z {{ui:Pass}} ali {{ui:Fail}} in koliko elementov se nanjo nanaša.
5. Odprite težave ({{key:Ctrl+Shift+M}}) in kliknite neuspeh, da izberete element in se nanj približate.

## Kaj boste videli

- Eno opozorilo za vsak element in zahtevo, ki je ne izpolnjuje, z imenom specifikacije, tem, kar IDS zahteva, in tem, kar element ima.
- Zahtevana specifikacija, ki se ji v modelu nič ne ujema, je samostojno opozorilo.
- Poročilo o preverjanju (v težavah) se začne z IDS: njegov naslov, različica, avtor ter za vsako specifikacijo števila uporabnih, uspelih in neuspelih elementov.

## Dobro je vedeti

- IFC hrani samo sklic na IDS (njegovo ime, naslov, različico in zgoščeno vrednost), ne samega IDS: IDS naročnika je lahko zaupen, datoteka IFC pa gre drugim ljudem. IDS ostane v tem brskalniku poleg modela, zato se shranjena datoteka IFC ob ponovnem odprtju tukaj spet preveri. Nalaganje ali pozabljanje IDS je en korak, ki ga lahko razveljavite.
- Če ga odprete na drugem računalniku ali v drugem brskalniku, težave prikažejo opombo, da IDS ni bil najden: naložite ga znova, da ponovno preverite.
- Če želite IDS poslati skupaj z IFC, vklopite {{ui:Keep the IDS inside the IFC}} v Nastavitvah na zavihku BimCraft, preden ga naložite.
- Vsako urejanje, razveljavitev in uveljavitev se čez trenutek znova preveri.
- Vrednosti se primerjajo na način IDS: besedilo natančno (velike in male črke štejejo), števila v enotah SI z majhno toleranco (dolžine v metrih, zato se model v milimetrih najprej pretvori).
- Specifikacija, napisana za drugo različico IFC (recimo IFC2X3, ko je model IFC4), se še vedno preveri; rezultat to pove.
- Če ima datoteka IDS napake, ki bi jih revizija IDS označila, jih pogovorno okno našteje; specifikacije, v katerih so, so neuspešne.
- Neuspeh lahko sprejmete z razlogom, kot vsako težavo. Ostane sprejet, dokler vrednosti elementa ostanejo enake.

- Vzorci v IDS se berejo kot celotna vrednost. `^` na začetku in `$` na koncu se prav tako razumeta kot „celotna vrednost“, kot ju večina datotek IDS tako misli.

## Naslednje

- [Preverjanje modela za pogoste težave](topic:model-checks)
- [Spreminjanje stene ali vrat](topic:change-a-wall-or-door)
