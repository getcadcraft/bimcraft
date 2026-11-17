---
title: Kopiranje, lepljenje i dupliranje stavki biblioteke
summary: Kopiraj postavljenu stavku biblioteke i nalepi je tamo gde klikneš, na istom mestu pored originala ili u drugi model; kopiraj svojstva bilo kog drugog elementa kao tekst; opozovi i ponovi.
keywords: kopiraj, nalepi, dupliraj, klipbord, nalepi na mestu, iseci, izbriši, izaberi sve, opozovi, ponovi, meni uređivanja, više, stavka biblioteke, postavljanje, ponavljanje, niz
from: 6ac15931
---

## Šta ćete uraditi

Postavite još primeraka stavke koju ste već postavili: drugi radni sto, red sudopera. Ova tema se odnosi na **postavljene stavke biblioteke**, elemente koje je BimCraft upisao u model: jedna od njih može se nalepiti u bilo koji model, čak i u drugu karticu. Zidovi, vrata i svi ostali elementi kopiraju se, iseku, lepe i brišu na isti način unutar svog modela: pogledajte [Izbriši, iseci, kopiraj i nalepi elemente zgrade](topic:edit-elements).

Komande su u traci sa alatkama iznad modela: {{ui:Opozovi}}, {{ui:Ponovi}}, {{ui:Kopiraj}}, {{ui:Nalepi}} i {{ui:Više}}, a meni sa {{ui:Iseci}}, {{ui:Kopiraj}}, {{ui:Nalepi}}, {{ui:Nalepi na mestu}}, {{ui:Dupliraj}}, {{ui:Izbriši}}, {{ui:Izaberi sve}} i {{ui:Ne izaberi ništa}}. Komanda koja trenutno ne može da radi je zasivljena; pređite pokazivačem da vidite zašto, ili kliknite na nju i statusna linija kaže zašto.

## Koraci

1. Otvorite IFC model sa stavkom iz biblioteke ili prvo postavite jednu. Pogledajte [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library).
2. Kliknite stavku u 3D prikazu. Njena svojstva prikazuju okvir **Stavka biblioteke**.
3. Kliknite {{ui:Kopiraj}} ili pritisnite {{key:Mod+C}}.
4. Kliknite {{ui:Nalepi}} ili pritisnite {{key:Mod+V}}. Otvara se traka za postavljanje i providan okvir prati pokazivač, okrenut kao original.
5. Pritisnite {{key:R}} da je okrenete za 90°, {{key:Tab}} da prikačite njenu zadnju stranu na zid, ili upišite X i Y u traku za postavljanje.
6. Kliknite gde ide kopija. Svaki klik postavlja još jednu kopiju; pritisnite {{key:Esc}} za kraj.
7. Kliknite {{ui:Sačuvaj kao IFC}} da preuzmete izmenjenu kopiju modela.

## Nalepi na mestu

{{ui:Više}}, {{ui:Nalepi na mestu}} ili {{key:Mod+Shift+V}} lepi bez klikanja, na istim X i Y koordinatama i okrenuto na isti način:

- **U isti model, na istom spratu**: dve stavke na tačno jednom mestu ne bi bile od koristi, pa kopija ide odmah pored originala, za širinu jedne stavke plus 100 mm duž sopstvene širine. Ponovo nalepite na mestu sa nove kopije da napravite red.
- **Na drugi sprat ili u drugi model**: potpuno iste X, Y i okretanje. BimCraft koristi sprat sa istim imenom; ako ga nema, onaj na najbližoj visini. Statusna linija kaže koji.

## Dupliraj

{{ui:Više}}, {{ui:Dupliraj}} ili {{key:Mod+D}} kopira izabranu stavku i odmah počinje da je lepi: jedan korak umesto dva.

## U drugi model ili drugu karticu

Ono što kopirate čuva se u ovom pregledaču, pa možete otvoriti drugi IFC model ili BimCraft u drugoj kartici i nalepiti ga tamo. Drugom modelu treba sama stavka iz biblioteke: BimCraft je ima kada je stavka bila postavljena, zamenjena ili ažurirana u ovoj kartici. Stavka postavljena u ranijoj sesiji može se ponovo nalepiti samo u svom modelu; u drugom modelu postavite je sa kartice {{ui:Biblioteka}}.

## Šta treba da vidite

- Kopija u modelu, izabrana, sa istom stavkom iz biblioteke, licencom, podacima o opremi, količinom i napomenom kao original, i **sledećim slobodnim rednim brojem stavke**. Broj promenite u Svojstvima, pod `CadCraft_Placement`.
- „Postavljeno: *stavka* (stavka *n*)” u listi promena. {{key:Mod+Z}} opoziva to, a {{key:Mod+Y}} ga vraća ponovo.

## Dobro je znati

- Kopije dele tip originala, pa sve koriste jedan skup geometrije, kao i kada se ista stavka postavi dva puta.
- {{ui:Opozovi}} i {{ui:Ponovi}} obuhvataju svaku promenu: izmenjene vrednosti, postavljanja, lepljenja, zamene i ažuriranja. Ponovi vraća postavljanje na isto mesto; nova promena briše ono što se moglo ponoviti.
- U 2D prikazu crteža nema šta da se izabere, pa nema šta da se kopira. Koristite {{ui:Izmeni u CadCraft-u}} da promenite crtež, kada se prikazuje.

## Česte greške

- **{{ui:Nalepi}} kaže da su elementi došli iz drugog modela.** Poslednje što ste kopirali bio je element zgrade ili više elemenata: oni se lepe samo u svoj model. Izaberite jednu postavljenu stavku iz biblioteke i kopirajte je.
- **{{ui:Nalepi}} kaže da je kopija došla iz drugog modela bez svoje stavke iz biblioteke.** Jednom postavite stavku sa kartice {{ui:Biblioteka}} u ovoj kartici, pa je zatim kopirajte i nalepite.
- **{{key:Mod+C}} kopira tekst sa stranice.** Tekst je bio izabran na stranici. Prvo kliknite na model.

## Povezano

- [Tasteri i miš](topic:keyboard#edit)
- [Podešavanja BimCraft-a](topic:settings)
