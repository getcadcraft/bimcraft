---
title: Kopiranje, lijepljenje i dupliranje stavki iz biblioteke
summary: Kopiraj postavljenu stavku iz biblioteke i zalijepi je tamo gdje klikneš, na mjesto pored originala ili u drugi model; kopiraj svojstva bilo kojeg drugog elementa kao tekst; poništi i ponovi.
keywords: kopiraj, zalijepi, dupliraj, međumemorija, zalijepi na mjesto, izreži, obriši, odaberi sve, poništi, ponovi, meni uređivanja, više, stavka biblioteke, postavljanje, ponavljanje, niz
from: 6ac15931
---

## Šta ćete uraditi

Dodajte još primjeraka stavke koju ste već postavili: drugi radni sto, red sudopera. Ova tema se odnosi na **postavljene stavke iz biblioteke**, elemente koje je BimCraft upisao u model; jedna od njih može se zalijepiti u bilo koji model, čak i u drugom tabu. Zidovi, vrata i svi ostali elementi kopiraju se, izrezuju, lijepe i brišu na isti način unutar svog modela: pogledajte [Brisanje, izrezivanje, kopiranje i lijepljenje elemenata zgrade](topic:edit-elements).

Komande su na alatnoj traci iznad modela: {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i {{ui:Više}}, meni s {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na mjesto}}, {{ui:Dupliraj}}, {{ui:Obriši}}, {{ui:Odaberi sve}} i {{ui:Ne odaberi ništa}}. Komanda koja trenutno ne može da radi je zasivljena; zadrži pokazivač na njoj da pročitaš zašto, ili je klikni i statusna linija će reći razlog.

## Koraci

1. Otvori IFC model koji ima stavku iz biblioteke, ili prvo postavi jednu. Pogledaj [Postavljanje opreme i namještaja iz biblioteke](topic:place-from-library).
2. Klikni stavku u 3D prikazu. Njena svojstva prikazuju okvir **Stavka biblioteke**.
3. Klikni {{ui:Kopiraj}} ili pritisni {{key:Mod+C}}.
4. Klikni {{ui:Zalijepi}} ili pritisni {{key:Mod+V}}. Otvara se traka za postavljanje i prozirni okvir prati pokazivač, okrenut kao original.
5. Pritisni {{key:R}} da ga okreneš za 90°, {{key:Tab}} da mu zadnju stranu prikačiš uz zid, ili upiši X i Y u traku za postavljanje.
6. Klikni gdje ide kopija. Svaki klik postavlja još jednu kopiju; pritisni {{key:Esc}} da zaustaviš.
7. Klikni {{ui:Spasi kao IFC}} da preuzmeš izmijenjenu kopiju modela.

## Zalijepi na mjesto

{{ui:Više}}, {{ui:Zalijepi na mjesto}} ili {{key:Mod+Shift+V}} lijepi bez klikanja, na istim X i Y koordinatama i okrenuto na isti način:

- **U isti model, na istom spratu**: dvije stavke na tačno istom mjestu ne bi imale smisla, pa kopija ide odmah pored originala, za širinu stavke plus 100 mm duž njene širine. Ponovo zalijepi na mjesto od nove kopije da napraviš red.
- **Na drugi sprat ili u drugi model**: tačno iste X, Y i okret. BimCraft koristi sprat s istim nazivom; ako ga nema, uzima onaj najbliže visine. Statusna linija kaže koji je.

## Dupliraj

{{ui:Više}}, {{ui:Dupliraj}} ili {{key:Mod+D}} kopira odabranu stavku i odmah počinje lijepljenje: jedan korak umjesto dva.

## U drugi model ili drugi tab

Ono što kopirate čuva se u ovom pregledaču, pa možete otvoriti drugi IFC model ili BimCraft u drugom tabu i zalijepiti tamo. Drugom modelu treba sama stavka iz biblioteke: BimCraft je ima kada je stavka postavljena, zamijenjena ili ažurirana u ovom tabu. Stavka postavljena u ranijoj sesiji može se ponovo zalijepiti samo u svoj model; u drugom modelu postavite je iz kartice {{ui:Biblioteka}}.

## Šta treba da vidite

- Kopiju u modelu, odabranu, s istom stavkom iz biblioteke, licencom, podacima o opremi, količinom i napomenom kao original, i **sljedećim slobodnim rednim brojem**. Broj promijenite u Svojstvima, pod `CadCraft_Placement`.
- „Postavljeno: *stavka* (stavka *n*)” u listi promjena. {{key:Mod+Z}} to poništava; {{key:Mod+Y}} ga vraća.

## Dobro je znati

- Kopije dijele tip originala, pa svi koriste jedan skup geometrije, kao i kad postavite istu stavku dva puta.
- {{ui:Poništi}} i {{ui:Ponovi}} obuhvataju svaku promjenu: uređene vrijednosti, postavljanja, lijepljenja, zamjene i ažuriranja. Ponovo se vraća postavljanje na isto mjesto; nova promjena briše ono što se moglo ponoviti.
- U 2D prikazu crteža nema šta odabrati, pa nema šta kopirati. Koristite {{ui:Uredi u CadCraft-u}} za izmjenu crteža, kad se prikaže.

## Česte greške

- **{{ui:Zalijepi}} kaže da su elementi došli iz drugog modela.** Posljednje što ste kopirali bio je element zgrade, ili više elemenata: oni se lijepe samo u svoj model. Odaberite jednu postavljenu stavku iz biblioteke i kopirajte je.
- **{{ui:Zalijepi}} kaže da kopija dolazi iz drugog modela bez svoje stavke iz biblioteke.** Jednom postavite stavku iz kartice {{ui:Biblioteka}} u ovom tabu, pa je zatim kopirajte i zalijepite.
- **{{key:Mod+C}} umjesto toga kopira tekst stranice.** Tekst je bio odabran na stranici. Prvo kliknite na model.

## Povezano

- [Tipke i miš](topic:keyboard#edit)
- [Postavke BimCraft-a](topic:settings)
