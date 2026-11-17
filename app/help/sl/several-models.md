---
title: Oglejte si več modelov IFC skupaj
summary: Dodajte več datotek IFC v prizor, na primer arhitekturo, konstrukcijo in instalacije, si jih oglejte v istih koordinatah, premaknite enega, skrijte enega in izberite, katerega urejate.
keywords: združi, združen model, več modelov, več datotek, združevanje, prekrivanje, koordinacija, stroka, konstrukcija, instalacije, zamik, premakni model, aktivni model, dodaj model
from: df0efbbf
---

## Kaj boste naredili

Oglejte si modele različnih strok na enem mestu: model arhitekta s konstrukcijskimi in instalacijskimi modeli. Vsak ostane svoja datoteka; BimCraft jih samo prikaže skupaj.

## Koraki

1. Odprite prvi model IFC kot običajno.
2. V {{ui:Modeli}} na levi kliknite {{ui:Dodaj model …}} in izberite eno ali več datotek IFC. Vsaka se prikaže na seznamu in v 3D pogledu.
3. Odstranite kljukico pri modelu, da ga skrijete; kljukico znova označite, da ga prikažete.
4. Če model pride na napačno mesto (druga geodetska točka), kliknite {{ui:Premakni}} pod njim, vpišite, za koliko ga premaknete po X, Y in Z v metrih, in kliknite {{ui:Uporabi}}.
5. Model s piko je tisti, ki ga urejate. Kliknite piko drugega modela, da urejate tega.
6. Kliknite × ob modelu, da ga odstranite iz prizora.

## Odprite modele ekipe

Ko je odprti model oblačna datoteka v projektu ekipe, se pod seznamom prikaže {{ui:Odpri modele ekipe}}. Odpre druge modele IFC projekta poleg tega, vsakega premaknjenega za zamik, ki ga je nastavil projekt. Modeli, skriti pred vami, ostanejo zunaj in so šteti; model, ki ga projekt zasuka, se odpre nezasukan in tudi šteje; datoteke, ki niso IFC (npr. DWG), se preskočijo in so navedene v vrstici stanja. Model, ki je že odprt, se nikoli ne odpre dvakrat. Gumb je skrit za datoteko, ki ni v projektu ekipe.

## Kaj boste videli

- Vsak model v koordinatah prvega modela, kot ga postavi njegova datoteka. Modeli, izvoženi iz istega projekta, se poravnajo brez premikanja.
- Izbira elementa modela, ki ga ne urejate, prikaže njegove lastnosti samo za branje, z {{ui:Uredi ta model}} za preklop.
- {{ui:Drevo modela}}, {{ui:Etaže}}, {{ui:Barva}}, seznam {{ui:Spremembe}}, postavljanje elementov knjižnice in {{ui:Shrani kot IFC}} delujejo na modelu, ki ga urejate. Skrij, izoliraj, prosojno in {{ui:Izberi vse}} delujejo v vseh modelih.
- {{ui:Shrani kot IFC}} prenese model, ki ga urejate, samo s spremembami.

## Pogoste napake

- **Model je zelo daleč ali manjka.** Njegova datoteka uporablja druge koordinate. Uporabite {{ui:Prilagodi}}, da ga najdete, nato ga {{ui:Premakni}} na mesto.
- **Gumba Izbriši in Kopiraj sta zasivljena pri izbranem elementu.** Element pripada drugemu modelu: najprej preklopite nanj.
- **Odpiranje datoteke z Izberi datoteko je zamenjalo vse.** To začne nov prizor. Za dodajanje datotek k obstoječemu uporabite {{ui:Dodaj model …}}.

## Naprej

- [Skrij, izoliraj in prosojno prikaži elemente](topic:hide-and-isolate)
- [Pobarvajte elemente glede na lastnost](topic:color-by-property)
