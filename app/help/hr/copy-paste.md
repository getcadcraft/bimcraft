---
title: Kopiranje, lijepljenje i dupliciranje stavki knjižnice
summary: Kopirajte postavljenu stavku knjižnice i zalijepite je tamo gdje kliknete, na isto mjesto uz original ili u drugi model; kopirajte svojstva bilo kojeg drugog elementa kao tekst; poništite i ponovite.
keywords: kopiraj, zalijepi, dupliciraj, međuspremnik, zalijepi na isto mjesto, izreži, izbriši, odaberi sve, poništi, ponovi, izbornik uređivanja, više, stavka knjižnice, postavljanje, ponavljanje, niz
from: 6ac15931
---

## Što ćete napraviti

Postavite više primjeraka stavke koju ste već postavili: drugi radni stol, niz sudopera. Ova tema govori o **postavljenim stavkama knjižnice**, elementima koje je BimCraft upisao u model: jedna se može zalijepiti u bilo koji model, čak i u drugoj kartici. Zidovi, vrata i svi ostali elementi kopiraju se, izrezuju, lijepe i brišu na isti način unutar svog modela: vidi [Brisanje, izrezivanje, kopiranje i lijepljenje elemenata zgrade](topic:edit-elements).

Naredbe su na alatnoj traci iznad modela: {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Zalijepi}} i {{ui:Više}}, a izbornik ima {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj}}, {{ui:Izbriši}}, {{ui:Odaberi sve}} i {{ui:Poništi odabir}}. Naredba koja trenutačno ne može djelovati prikazana je zasivljeno; zadržite pokazivač na njoj da vidite zašto, ili je kliknite i statusna linija će reći zašto.

## Koraci

1. Otvorite IFC model sa stavkom knjižnice u njemu ili prvo postavite jednu. Vidi [Postavljanje opreme i namještaja iz knjižnice](topic:place-from-library).
2. Kliknite stavku u 3D prikazu. Njezina svojstva prikazuju okvir **Stavka knjižnice**.
3. Kliknite {{ui:Kopiraj}} ili pritisnite {{key:Mod+C}}.
4. Kliknite {{ui:Zalijepi}} ili pritisnite {{key:Mod+V}}. Otvara se traka za postavljanje, a prozirni okvir slijedi pokazivač, okrenut kao original.
5. Pritisnite {{key:R}} za okretanje za 90°, {{key:Tab}} da njezina leđa pričvrstite uz zid, ili upišite X i Y na traci za postavljanje.
6. Kliknite mjesto gdje ide kopija. Svaki klik postavlja još jednu kopiju; pritisnite {{key:Esc}} za zaustavljanje.
7. Kliknite {{ui:Spremi kao IFC}} za preuzimanje uređene kopije modela.

## Zalijepi na isto mjesto

{{ui:Više}}, {{ui:Zalijepi na isto mjesto}} ili {{key:Mod+Shift+V}} lijepi bez klikanja, na istom X i Y te okrenuto na isti način:

- **U isti model, na istoj etaži**: dvije stavke na točno jednom mjestu ne bi bile od koristi, pa kopija ide odmah uz original, za širinu stavke plus 100 mm duž vlastite širine stavke. Ponovno zalijepite na isto mjesto iz nove kopije da napravite red.
- **Na drugu etažu ili u drugi model**: točno isti X, Y i okret. BimCraft koristi etažu s istim nazivom; ako je nema, onu najbližu visini. Statusna linija kaže koja je.

## Dupliciraj

{{ui:Više}}, {{ui:Dupliciraj}} ili {{key:Mod+D}} kopira odabranu stavku i odmah počinje lijepiti: jedan korak umjesto dva.

## U drugi model ili drugu karticu

Ono što kopirate čuva se u ovom pregledniku, pa možete otvoriti drugi IFC model ili BimCraft u drugoj kartici i zalijepiti tamo. Drugom modelu treba sama stavka knjižnice: BimCraft je ima kada je stavka bila postavljena, zamijenjena ili ažurirana u ovoj kartici. Stavka postavljena u ranijoj sesiji može se ponovno zalijepiti samo u vlastitom modelu; u drugom modelu postavite je s kartice {{ui:Knjižnica}}.

## Što biste trebali vidjeti

- Kopija u modelu, odabrana, s istom stavkom knjižnice, licencom, podacima o opremi, količinom i bilješkom kao original, i **sljedećim slobodnim brojem stavke**. Broj promijenite u Svojstvima, pod `CadCraft_Placement`.
- „Postavljeno: *stavka* (stavka *n*)“ u popisu promjena. {{key:Mod+Z}} to vraća; {{key:Mod+Y}} ga ponovno vraća.

## Dobro je znati

- Kopije dijele tip originala, pa svi koriste jedan skup geometrije, kao što to čini postavljanje iste stavke dva puta.
- {{ui:Poništi}} i {{ui:Ponovi}} obuhvaćaju svaku promjenu: uređene vrijednosti, postavljanja, lijepljenja, zamjene i ažuriranja. Ponovi vraća postavljanje na isto mjesto; nova promjena briše ono što se moglo ponoviti.
- U 2D prikazu crteža nema što odabrati, pa nema ni što kopirati. Za promjenu crteža upotrijebite {{ui:Uredi u CadCraft-u}}, kad se prikaže.

## Česte pogreške

- **{{ui:Zalijepi}} javlja da su elementi došli iz drugog modela.** Posljednje što ste kopirali bio je element zgrade ili više elemenata: oni se lijepe samo u vlastiti model. Odaberite jednu postavljenu stavku knjižnice i kopirajte je.
- **{{ui:Zalijepi}} javlja da kopija dolazi iz drugog modela bez svoje stavke knjižnice.** Jednom postavite stavku s kartice {{ui:Knjižnica}} u ovoj kartici, zatim je kopirajte i zalijepite.
- **{{key:Mod+C}} kopira umjesto toga tekst stranice.** Tekst je bio odabran na stranici. Najprije kliknite model.

## Povezano

- [Tipke i miš](topic:keyboard#edit)
- [Postavke BimCraft-a](topic:settings)
