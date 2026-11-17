---
title: Lokacija, zgrada na njoj i njeni nivoi
summary: Nacrtaj obris lokacije, postavi i okreni zgradu na lokaciji, dodaj nivoe na zadatim visinama ili podeli visinu zgrade, i crtaj na nivou koji izabereš.
keywords: lokacija, situacioni plan, građevinska linija, odstojanje, služnost, pravo prolaza, granica parcele, parcela, granica, postavljanje zgrade, okretanje zgrade, postavi zgradu, nivoi, spratovi, podovi, dodaj nivoe, podeli visinu, visina između podova, IfcSite, IfcBuilding, IfcBuildingStorey, prostorna struktura
from: 48d10c1e
---

## Šta ćeš raditi

Postavi delove IFC modela koji drže sve ostalo: lokaciju, zgradu na njoj i nivoe zgrade.

Model je organizovan kao **lokacija** koja sadrži **zgradu**, koja sadrži svoje **nivoe** (spratove); zidovi, podovi i sve ostalo pripadaju nivou. {{ui:Datoteka}} › {{ui:Nova zgrada}} postavlja sva tri. Model iz drugog programa koji ima zgradu, ali nema lokaciju, dobija lokaciju tek kada prvi put nacrtaš jednu: zgrada se na njoj postavlja tamo gde je već bila.

## Nacrtaj lokaciju

1. Uključi {{ui:Crtanje}}, pa izaberi {{ui:Verzija}} › {{ui:Lokacija}}.
2. Klikni uglove lokacije (alat se prikači kao alat Zid). Klikni prvi ugao ponovo, dvaput klikni ili pritisni {{key:Enter}} da završiš. {{key:Backspace}} vraća jedan ugao.
3. Red pokazuje površinu lokacije. Nacrtaj je ponovo da je promeniš.

Osnova svakog nivoa prikazuje obris lokacije kao granicu parcele.

## Postavi zgradu na lokaciju

Dok je {{ui:Lokacija}} uključena, upiši zgradine **X** i **Y** na lokaciji i njen **Okret** u stepenima, ili klikni {{ui:Postavi zgradu klikom}} i klikni gde ide početna tačka zgrade. Sve u zgradi (nivoi, zidovi, mreže, sve što si nacrtao) pomera se s njom; lokacija i njen obris ostaju. Osnove i dalje prikazuju svaki nivo upravno na zgradu.

## Građevinske linije i služnosti

Građevinske linije i služnosti (prava prolaza, pravo puta) crtaju se na lokaciji kao ograničenja. **Upozoravaju, nikad ne blokiraju**: zid preko jedne crta se kako si tražio, a upozorenje koje navodi zid i liniju ili služnost pojavljuje se u {{ui:Problemi}}. Pomeri zid nazad i upozorenje nestaje. Upozorenje se može prihvatiti uz razlog (na primer odstupanje koje je dala nadležna služba).

- **Građevinska linija iz odstojanja.** {{ui:Verzija}} › {{ui:Građevinska linija}}, pa {{ui:Odstojanja}}: upiši koliko linija stoji uvučena od svake granice lokacije. Granice su numerisane na osnovi dok je alat uključen. Linija se računa iz tih rastojanja i prati obris lokacije ako je nacrtaš ponovo sa onoliko granica. Rastojanja su tvoja, pročitana iz vlasničkog lista ili plana namene; BimCraft ne unosi nijedno.
- **Nacrtana građevinska linija.** Sa uključenom {{ui:Građevinska linija}}, klikni njene tačke i završi dvostrukim klikom ili {{key:Enter}}. Završi na prvoj tački za zatvorenu liniju: unutrašnjost je površina na kojoj se sme graditi, a zid sa bilo kojim delom van nje dobija upozorenje. Otvorena linija upozorava samo za zid koji je seče.
- **Služnost.** {{ui:Verzija}} › {{ui:Služnost}}: izaberi njenu vrstu, upiši ime, registrovanu oznaku i širinu, pa klikni njenu centralnu liniju i završi (traka), ili je zatvori na prvoj tački (površina). Zid sa bilo kojim delom na njoj dobija upozorenje, na svakom nivou.
- Lice tačno na liniji je dodirivanje, a ne presecanje (tolerancija je 1 mm).
- Trenutna opcija masiranja svakog skupa opcija proverava se isto kao zidovi: masa van granice, preko građevinske linije ili na služnosti dobija upozorenje. Vidi [Opcije masiranja uporedo](topic:massing-options).
- Izaberi jednu sa {{ui:Izaberi}} da promeniš ime, oznaku, vrstu ili širinu, pomeriš je ili obrišeš.

Crtaju se na osnovi svakog nivoa, na listovima i u PDF-u osnove: građevinske linije isprekidano, služnosti tačkasto, svaka sa svojom oznakom. U IFC datoteci svaka je anotacija (IfcAnnotation, tip BuildingLine ili Servitude) na lokaciji, sa svojom linijom kao običnom krivom koju drugi programi mogu da čitaju. Provera koristi stvarni obris svakog zida na osnovi, sa spojevima kako su nacrtani; krivi zid se proverava po svojoj debljini oko centralne linije.

## Dodaj nivoe

U panelu {{ui:Nivoi}}, {{ui:Dodaj nivo na vrhu}} dodaje jedan, {{ui:Dodaj nivo ispod}} dodaje jedan ispod najnižeg (podrum, na negativnoj koti). {{ui:Dodaj nivoe…}} dodaje više odjednom:

- **Na ovim visinama**: upiši visine iznad najnižeg nivoa, odvojene zarezima (na primer `12', 24', 36'`). Visine na kojima već postoji nivo se preskaču.
- **Podeli visinu zgrade**: upiši visinu zgrade i broj nivoa. Nivoi koje imaš pomeraju se na nove visine od najnižeg naviše, nedostajući se dodaju, a svi iznad njih ostaju gde jesu.

Zidovi koji idu do nivoa iznad prate ga, kao i stubovi i rampe.

{{ui:Kopiraj ovaj nivo…}} (u istom panelu) kopira ono što je nacrtano na nivou koji gledaš na drugi nivo ili na novi nivo na vrhu, pa osnova sprata može da se prenese naviše zgrade u jednom koraku. Vidi [Crtanje zidova](topic:draw-walls).

## Crtaj na nivou

Svaki alat {{ui:Crtanje}} radi nad nivoom izabranim u listi nivoa osnove (ili izabranim u panelu {{ui:Nivoi}}): ono što nacrtaš pripada tom nivou.

## Šta treba da vidiš

- Svaka od ovih promena je jedan korak: {{key:Mod+Z}} je vraća.
- U IFC datoteci: lokacija (IfcSite) sa obrisom i površinom, zgrada (IfcBuilding) postavljena na njoj, i nivoi (IfcBuildingStorey) u zgradi.

Pogledaj i [Koordinate u BimCraft-u](topic:coordinates) za početnu tačku projekta i geodetsku tačku.
