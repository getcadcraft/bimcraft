---
title: Otvaranje i izvoz IFC5 alfa (IFCX datoteka)
summary: Laboratorijska opcija za format datoteke IFC5 alfa (.ifcx): otvorite datoteku sa njenim slojevima, pogledajte šta čitanje nije moglo da proveri i izvezite otvorene modele. Format se i dalje menja, zato prvo pročitajte.
keywords: ifc5, ifcx, alfa, buildingsmart, json, slojevi, šema, laboratorija, količine, qto, izvoz, uvoz
from: cffe1669
---

IFC5 alfa (datoteka sa nastavkom {{ui:.ifcx}}) je format datoteke koji buildingSMART još oblikuje. Nije konačan: datoteke, i naše čitanje njih, mogu da se promene. Zato je ovo laboratorijska opcija i zato se čitanje radi prvo.

## Uključivanje

1. Izaberite {{ui:Podešavanja}}, zatim odeljak {{ui:IFC5 alfa (IFCX)}} na kartici BimCraft.
2. Štiklirajte {{ui:IFC5 alfa (IFCX) – format se i dalje menja; prvo pročitaj}}.

Podrazumevano je isključeno. Dok je isključeno, .ifcx datoteka se odbija uz rečenicu koja upućuje ovde. {{ui:Otvori IFC5 alfa (.ifcx)…}} i dugme za izvoz {{ui:IFC5 alfa}} pojavljuju se kada je uključeno.

## Otvaranje

- Izaberite .ifcx datoteku sa {{ui:Otvori datoteku ili fasciklu}} (zamenjuje otvoreni model, posle uobičajenog pitanja o izmenama), ili
- izaberite {{ui:Otvori IFC5 alfa (.ifcx)…}} i izaberite nekoliko datoteka zajedno: datoteku, njene slojeve i datoteke šeme koje ona uvozi. Kada je model već otvoren, datoteka se **dodaje pored njega**; x u listi modela je uklanja, što je opozivanje.

IFCX datoteka navodi čvorove (putanju, njihovu decu, šta nasleđuju i svoje atribute). Više datoteka može da opisuje isti čvor: kasnija datoteka (sloj) prepisuje atribute ranije, a prazno dete uklanja dete. BimCraft ih spaja, pa crta rezultat kao mali IFC4 model: projekat, lokaciju, zgradu, spratove i elemente sa imenima, klasama, svojstvima, količinama, bojama i mrežama.

Ništa se ne preuzima sa mreže. Datoteke šeme koje datoteka uvozi (na primer `ifc@v5a.ifcx`) koriste se samo ako ste ih izabrali uz datoteku; inače izveštaj to kaže, a atributi se čitaju bez provere tipa.

### Izveštaj

Posle otvaranja, izveštaj navodi šta je čitanje našlo: podatke koji se ne poklapaju sa svojom šemom, datoteke šeme koje nisu date, atribute koji ovde nemaju IFC značenje. Atributi bez preslikavanja se **zadržavaju** u modelu, ne odbacuju, i upisuju se nazad pri izvozu.

## Šta postaje šta

| U IFCX datoteci | U BimCraft-u |
|---|---|
| Čvor sa IFC klasom (projekat, lokacija, zgrada, sprat, zid …) | Odgovarajući IFC4 element; klasa koju ovo čitanje ne poznaje postaje proksi element građevine |
| Ime koje čvor ima pod svojim roditeljem | Ime elementa |
| Atributi sa vrstom količine (Length, Area, Volume, Mass …) | IFC4 skup količina pod nazivom `Qto_IFCX` (IFC4 količine ostaju IFC4 skupovi `Qto_*`) |
| Ostali atributi svojstava | Skup svojstava pod nazivom `Pset_IFCX` |
| Atributi mreže i transformacije | Trouglovi elementa i postavljanje; nevidljive mreže se ne crtaju |
| Boja, neprovidnost, materijal, klasifikacija | Stil površine, materijal i klasifikacija elementa |

Jedinice se uzimaju kao metri, sa Z naviše: alfa kaže da će jedinice biti dokumentovane kasnije.

## Izvoz

Izaberite {{ui:IFC5 alfa}} na alatnoj traci, pročitajte napomenu, zatim {{ui:Izvezi .ifcx}}. Datoteka ima naše sopstveno zaglavlje (autor CadCraft, verzija ifcx_alpha) i sama kaže da je format alfa. Svaki model se upisuje u sopstvenim koordinatama datoteke, u metrima, sa imenima, klasama, skupovima svojstava, količinama (kao atributima sa njihovom vrstom), bojama i trouglovima. Slojevi i nasleđivanje se upisuju spljošteno. Proverite datoteku u programu kome je šaljete.

## Ograničenja

- Krivolinijska geometrija (krive, površine) se ne čita: samo trouglaste mreže.
- Vrata i prozori ugnježdeni u zid postavljaju se na sprat; zid iz kog potiču nije povezan.
- Nazivi skupova `Qto_*` iz IFC4 čuvaju se kao grupe atributa koje su naše (`cadcraft::qto::…`); standardna alfa šema ima samo nekoliko naziva količina.
- Format se može promeniti; datoteka napravljena danas možda neće da se čita sutra.
