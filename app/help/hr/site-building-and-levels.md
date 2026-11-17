---
title: Lokacija, zgrada na njoj i njezine razine
summary: Nacrtajte obris lokacije, postavite i zakrenite zgradu na lokaciji, dodajte razine na zadanim visinama ili podijelite visinu zgrade, te crtajte na razini koju odaberete.
keywords: lokacija, situacijski plan, građevinska linija, odmak, služnost, pravo prolaza, granica čestice, granica, katastarska čestica, parcela, međa, postavljanje zgrade, zakretanje zgrade, razine, etaže, katovi, podovi, dodaj razine, podijeli visinu, visina od poda do poda, IfcSite, IfcBuilding, IfcBuildingStorey, prostorna struktura
from: 48d10c1e
---

## Što ćete napraviti

Postavite dijelove IFC modela koji drže sve ostalo: lokaciju, zgradu na njoj i razine zgrade.

Model je organiziran kao **lokacija** koja drži **zgradu**, koja drži svoje **razine** (etaže); zidovi, podovi i sve ostalo pripada razini. {{ui:Datoteka}} › {{ui:Nova zgrada}} postavlja sve tri. Model iz drugog programa koji ima zgradu, ali nema lokaciju, dobiva lokaciju kad prvi put nacrtate jednu: zgrada se postavlja na nju tamo gdje je već bila.

## Nacrtajte lokaciju

1. Uključite {{ui:Crtanje}}, zatim odaberite {{ui:Izgradnja}} › {{ui:Lokacija}}.
2. Kliknite kutove lokacije (alat se hvata kao alat Zid). Ponovno kliknite prvi kut, dvaput kliknite ili pritisnite {{key:Enter}} za završetak. {{key:Backspace}} vraća jedan kut.
3. Redak prikazuje površinu lokacije. Nacrtajte je ponovno da je promijenite.

Tlocrt svake razine prikazuje obris lokacije kao granicu čestice.

## Postavite zgradu na lokaciju

Uz uključenu {{ui:Lokacija}} upišite **X** i **Y** zgrade na lokaciji te njezin **Zakret** u stupnjevima, ili kliknite {{ui:Postavi zgradu klikom}} i kliknite gdje ide ishodište zgrade. Sve u zgradi (razine, zidovi, mreže, sve što ste nacrtali) pomiče se s njom; lokacija i njezin obris ostaju. Tlocrti i dalje prikazuju svaku razinu okomito na zgradu.

## Građevinske linije i služnosti

Građevinske linije i služnosti (prava prolaza, služnosti) crtaju se na lokaciji kao ograničenja. **Upozoravaju, ne blokiraju**: zid preko njih nacrtan je kako ste tražili, a upozorenje s nazivom zida i linije ili služnosti pojavljuje se u {{ui:Problemi}}. Pomaknite zid natrag i upozorenje nestaje. Upozorenje se može prihvatiti uz razlog (npr. odstupanje koje je odobrila nadležna služba).

- **Građevinska linija iz odmaka.** {{ui:Izgradnja}} › {{ui:Građevinska linija}}, zatim {{ui:Odmaci}}: upišite koliko je linija udaljena od svake granice lokacije. Granice su numerirane na tlocrtu dok je alat uključen. Linija se izračunava iz tih udaljenosti i slijedi obris lokacije ako je ponovno nacrtate s onoliko granica. Udaljenosti su vaše, uzete iz vašeg vlasničkog lista ili prostornog plana; BimCraft ne upisuje nijednu.
- **Nacrtana građevinska linija.** Uz uključenu {{ui:Građevinska linija}}, kliknite njezine točke i završite dvostrukim klikom ili {{key:Enter}}. Završite na prvoj točki za zatvorenu liniju: površina unutar nje je mjesto gdje se smije graditi, a za zid s bilo kojim dijelom izvan nje javlja se upozorenje. Otvorena linija upozorava samo na zid koji je siječe.
- **Služnost.** {{ui:Izgradnja}} › {{ui:Služnost}}: odaberite njezinu vrstu, upišite naziv, upisanu oznaku i širinu, zatim kliknite njezinu središnju liniju i završite (traka), ili je zatvorite na prvoj točki (površina). Za zid s bilo kojim dijelom na njoj javlja se upozorenje, na svakoj razini.
- Ploha točno na liniji je dodirivanje, a ne presijecanje (tolerancija je 1 mm).
- Trenutna opcija masiranja svakog skupa opcija provjerava se kao i zidovi: masa izvan granice, preko građevinske linije ili na služnosti dobiva upozorenje. Pogledajte [Opcije masiranja uz jedna drugu](topic:massing-options).
- Odaberite jednu alatom {{ui:Odaberi}} da promijenite njezin naziv, oznaku, vrstu ili širinu, pomaknete je ili izbrišete.

Crtaju se na tlocrtu svake razine, na listovima i u PDF-u tlocrta: građevinske linije isprekidano, služnosti točkasto, svaka sa svojom oznakom. U IFC datoteci svaka je anotacija (IfcAnnotation, vrsta BuildingLine ili Servitude) na lokaciji, s linijom kao običnom krivuljom koju drugi programi mogu čitati. Provjera koristi stvarni obris svakog zida na tlocrtu, s njegovim spojevima kako su nacrtani; zakrivljeni zid provjerava se prema vlastitoj debljini oko središnje linije.

## Dodajte razine

U panelu {{ui:Razine}}, {{ui:Dodaj razinu na vrh}} dodaje jednu, {{ui:Dodaj razinu ispod}} dodaje jednu ispod najniže (podrum, na negativnoj koti). {{ui:Dodaj razine…}} dodaje više odjednom:

- **Na ovim visinama**: upišite visine iznad najniže razine, odvojene zarezima (npr. `12', 24', 36'`). Visine na kojima već postoji razina se preskaču.
- **Podijeli visinu zgrade**: upišite visinu zgrade i broj razina. Razine koje imate prelaze na nove visine od najniže prema gore, nedostajuće se dodaju, a one iznad njih ostaju gdje jesu.

Zidovi koji sežu do razine iznad prate je, kao i stupovi i rampe.

{{ui:Kopiraj ovu razinu…}} (u istom panelu) kopira ono što je nacrtano na razini koju gledate na drugu razinu ili na novu razinu na vrhu, pa se tlocrt može prenijeti uz zgradu u jednom koraku. Pogledajte [Crtanje zidova](topic:draw-walls).

## Crtajte na razini

Svaki alat {{ui:Crtanje}} radi na razini odabranoj u popisu razina tlocrta (ili odabranoj u panelu {{ui:Razine}}): ono što nacrtate pripada toj razini.

## Što biste trebali vidjeti

- Svaka od ovih promjena je jedan korak: {{key:Mod+Z}} je poništava.
- U IFC datoteci: lokacija (IfcSite) s obrisom i površinom, zgrada (IfcBuilding) postavljena na njoj i razine (IfcBuildingStorey) u zgradi.

Pogledajte i [Koordinate u BimCraftu](topic:coordinates) za ishodište projekta i geodetsku točku.
