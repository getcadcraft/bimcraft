---
title: Gradilište, zgrada na njemu i njeni nivoi
summary: Nacrtajte obris gradilišta, postavite i okrenite zgradu na gradilištu, dodajte nivoe na zadate visine ili podijelite visinu zgrade, i crtajte na nivou koji izaberete.
keywords: gradilište, plan gradilišta, građevinska linija, povlačenje, služnost, pravo prolaza, međna linija, parcela, plac, granica, postavljanje zgrade, okretanje zgrade, nivoi, spratovi, etaže, podovi, dodaj nivoe, podijeli visinu, visina od poda do poda, IfcSite, IfcBuilding, IfcBuildingStorey, prostorna struktura
from: 48d10c1e
---

## Šta ćete uraditi

Postaviti dijelove IFC modela koji nose sve ostalo: gradilište, zgradu na njemu i nivoe zgrade.

Model je organizovan kao **gradilište** koje sadrži **zgradu**, a zgrada sadrži svoje **nivoe** (spratove); zidovi, podovi i sve ostalo pripada nivou. {{ui:Datoteka}} › {{ui:Nova zgrada}} postavlja sva tri. Model iz drugog programa koji ima zgradu, ali nema gradilište, dobija gradilište kada prvi put nacrtate jedno: zgrada se na njemu postavlja tamo gdje je već bila.

## Nacrtajte gradilište

1. Uključite {{ui:Crtanje}}, zatim odaberite {{ui:Verzija}} › {{ui:Gradilište}}.
2. Kliknite uglove gradilišta (alat se prislanja kao alat Zid). Kliknite prvi ugao ponovo, dvaput kliknite ili pritisnite {{key:Enter}} da završite. {{key:Backspace}} vraća ugao.
3. Red pokazuje površinu gradilišta. Nacrtajte ga ponovo da ga promijenite.

Tlocrt svakog nivoa prikazuje obris gradilišta kao međnu liniju.

## Postavite zgradu na gradilište

Dok je {{ui:Gradilište}} uključeno, upišite **X** i **Y** zgrade na gradilištu i njeno **Okretanje** u stepenima, ili kliknite {{ui:Postavi zgradu klikom}} i kliknite gdje ide ishodište zgrade. Sve u zgradi (nivoi, zidovi, mreže, sve što ste nacrtali) pomjera se s njom; gradilište i njegov obris ostaju. Tlocrti i dalje prikazuju svaki nivo okomito na zgradu.

## Građevinske linije i služnosti

Građevinske linije i služnosti (prava prolaza, pravo puta) crtaju se na gradilištu kao ograničenja. Oni **upozoravaju, nikad ne blokiraju**: zid preko njih se crta kako ste tražili, a upozorenje s imenom zida i linije ili služnosti pojavljuje se u Problemima. Vratite zid nazad i upozorenje nestaje. Upozorenje se može prihvatiti uz razlog (na primjer odstupanje koje je odobrio nadležni organ).

- **Građevinska linija iz povlačenja.** {{ui:Verzija}} › {{ui:Linija gradnje}}, zatim {{ui:Povlačenja}}: upišite koliko linija stoji uvučena od svake granice gradilišta. Granice su numerisane na tlocrtu dok je alat uključen. Linija se izračunava iz tih udaljenosti i prati obris gradilišta ako ga ponovo nacrtate s istim brojem granica. Udaljenosti su vaše, uzete iz vlasničkog lista ili plana namjene; BimCraft ne unosi nijednu.
- **Nacrtana građevinska linija.** Uz uključenu {{ui:Linija gradnje}}, kliknite njene tačke i završite dvostrukim klikom ili {{key:Enter}}. Završite na prvoj tački za zatvorenu liniju: područje unutra je ono gdje se smije graditi, a upozorava se na zid kojem je bilo koji dio izvan njega. Otvorena linija upozorava samo na zid koji je siječe.
- **Služnost.** {{ui:Verzija}} › {{ui:Služnost}}: odaberite vrstu, upišite naziv, registrovanu oznaku i širinu, zatim kliknite njenu središnju liniju i završite (traka), ili je zatvorite na prvoj tački (područje). Upozorava se na zid kojem je bilo koji dio na njoj, na svakom nivou.
- Lice tačno na liniji je dodirujuće, a ne presječeno (tolerancija je 1 mm).
- Aktivna varijanta mase svakog skupa varijanti provjerava se isto kao zidovi: masa izvan granice, preko građevinske linije ili na služnosti dobija upozorenje. Pogledajte [Varijante masa postavljene jedna pored druge](topic:massing-options).
- Odaberite jedno alatom {{ui:Odaberi}} da promijenite naziv, oznaku, vrstu ili širinu, pomjerite ga ili obrišete.

Crtaju se na tlocrtu svakog nivoa, na listovima i u PDF-u tlocrta: građevinske linije isprekidane, služnosti tačkaste, svaka s oznakom. U IFC datoteci svaka je anotacija (IfcAnnotation, tip BuildingLine ili Servitude) na gradilištu, s linijom kao običnom krivom koju drugi programi mogu čitati. Provjera koristi stvarni obris svakog zida na tlocrtu, sa spojevima kako su nacrtani; zakrivljeni zid provjerava se po sopstvenoj debljini oko središnje linije.

## Dodajte nivoe

U panelu {{ui:Nivoi}}, {{ui:Dodaj nivo na vrh}} dodaje jedan, a {{ui:Dodaj nivo ispod}} dodaje jedan ispod najnižeg (podrum, na negativnoj koti). {{ui:Dodaj nivoe…}} dodaje više odjednom:

- **Na ovim visinama**: upišite visine iznad najnižeg nivoa, odvojene zarezima (na primjer `12', 24', 36'`). Visine na kojima već postoji nivo se preskaču.
- **Podijeli visinu zgrade**: upišite visinu zgrade i broj nivoa. Nivoi koje imate pomjeraju se na nove visine od najnižeg prema gore, nedostajući se dodaju, a svi iznad njih ostaju gdje jesu.

Zidovi koji idu do nivoa iznad prate ga, kao i stubovi i rampe.

{{ui:Kopiraj ovaj nivo…}} (u istom panelu) kopira ono što je nacrtano na nivou koji gledate na drugi nivo ili na novi nivo na vrhu, pa tlocrt može ići uz zgradu u jednom koraku. Pogledajte [Crtanje zidova](topic:draw-walls).

## Crtajte na nivou

Svaki alat {{ui:Crtanje}} radi na nivou izabranom u listi nivoa tlocrta (ili odabranom u panelu {{ui:Nivoi}}): ono što nacrtate pripada tom nivou.

## Šta treba da vidite

- Svaka od ovih promjena je jedan korak: {{key:Mod+Z}} je poništava.
- U IFC datoteci: gradilište (IfcSite) s obrisom i površinom, zgrada (IfcBuilding) postavljena na njemu, i nivoi (IfcBuildingStorey) u zgradi.

Pogledajte i [Koordinate u BimCraft-u](topic:coordinates) za ishodište projekta i geodetsku tačku.
