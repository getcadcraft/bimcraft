---
title: Stopnja razvoja (LOD) in preverjanja mejnikov
summary: Elementom določite stopnjo razvoja, preberite, od kod izhaja, preverite model glede na stopnjo, ki jo zahteva mejnik, ter popravite manjkajoče oznake in neimenovane prostore. Vsako preverjanje le svetuje; ničesar ne blokira.
keywords: lod, stopnja razvoja, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, mejnik, tabela mejnikov, preverjanja modela, manjkajoče oznake, neimenovani prostori, zgodnja generičnost, razred ifc, klasifikacija
from: 2091c79b
---

## Kaj boste naredili

Določite, kako razvit je posamezni element, nato preverite celoten model glede na to, kaj zahteva projektni mejnik.

## Koraki

1. Izberite element (ali več) in odprite {{ui:Properties}}. Poiščite {{ui:Level of development}}.
2. Izberite stopnjo s seznama. Vsaka stopnja je poimenovana po tem, kaj pomeni, in vključuje tudi stopnje pod njo. En korak razveljavitve velja za ves izbor.
3. Preberite, od kod stopnja izhaja: iz tega elementa, njegovega tipa ali iz terensko preverjene oznake.
4. Če želite preveriti model, na levi odprite {{ui:Model checks}}, nato {{ui:LOD milestones}}. Izberite mejnik in tabelo (začetno tabelo ali lastno datoteko CSV ali JSON z {{ui:Load}}).
5. Kliknite {{ui:Check the model}}. Skupna števila in vrstica za vsako vrstico tabele kažejo, kaj je doseglo svojo stopnjo in kaj ne; ugotovitve se prikažejo tudi na seznamu Težave.
6. Pod {{ui:Missing tags and unnamed rooms}} kliknite {{ui:Find them}}, po želji uredite predloge in kliknite {{ui:Apply}}.

## Kaj boste videli

- Stopnjo, ki ste jo izbrali za element, s poleg nje prikazanim razredom IFC in kodami klasifikacije.
- Skupna števila in vrstice za mejnik. Tabela nikoli ne spremeni pomena stopnje: lestvica je fiksna, tabela pove le, katero stopnjo mejnik zahteva.
- „Zgodnja generičnost“: nasvet, naj bodo elementi na zgodnjem mejniku generični. Gre zgolj za nasvet.

## Dobro je vedeti

- Tu vas nič ne omejuje. Model pod stopnjo, ki jo zahteva mejnik, je le naveden, ne zavrnjen.
- Vse tri dele stopnje (geometrijo, informacije in dokumentacijo) lahko nastavite posebej; oznaka pokaže, ali je zahteva dosežena, pod zahtevo ali ni navedena.
