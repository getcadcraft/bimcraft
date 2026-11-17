---
title: Krovovi - nagib za svaki zid, zabati, jednovodni krovovi i ravni krova
summary: Postavi svaki zid pod krovom na nagnut, zabatni kraj ili nijedan, koristi gotove postavke sa kosim krovom, zabatom i jednovodnim krovom, podigni krov visinom oslonca, dodaj čeonu dasku i podgled, i crtaj pojedinačne ravni krova gde automatski krov ne odgovara.
keywords: promena krova, izmena krova, izabrani krov, svojstva krova, opozovi krov, krov, nagib, po zidu, zabat, zabatni kraj, jednovodni, kosi krov, kosnica, sleme, visina oslonca, peta, čeona daska, podgled, streha, previs, zabatna ivica, ravan krova, krovna kućica, zabatna kućica, jednovodna kućica
from: 096084a7
---

## Šta ćeš uraditi

Oblikuj krov prema zidovima ispod njega. Svaki zid ima svoje podešavanje, pa jedan krov može biti sa kosinama na prednjoj strani, sa zabatima na krajevima i da se zaustavi ravno uz viši zid pozadi. Za trem ili svaku površinu koju automatski krov ne može da napravi, nacrtaj ravan krova po njenim uglovima.

## Postavljanje krova

1. Na nivou čiji zidovi nose krov, klikni {{ui:Roof}}.
2. Upiši **Nagib** (`6/12`, ili stepene poput `30`) i **Previs**.
3. Izaberi gotovu postavku: **Krov sa kosinama**, **Zabati na kraćim stranama**, **Zabati na dužim stranama** ili **Jednovodni krov** (strana najbliža pokazivaču je niska streha; ostale strane su zabatni krajevi).
4. Ostavi **Čeona daska i podgled** označeno za zatvorene strehe sa čeonom daskom, ili ga odštikliraj za golu ivicu krova.
5. Pokaži unutar zgrade: streha, sleme, kosnice i doline se prikazuju na osnovi. Klikni.

Radi svaki obris: L, T, U i plus oblici, kosi uglovi i useci. Kosnice, slemena i doline se nalaze tamo gde se ravni krova spajaju.

## Jedan zid po jedan

Izaberi krov (na nivou iznad zidova, klikni unutar njegovog obrisa) i pogledaj pod **Svaki zid** u **Svojstvima**. Pokazivanje na red označava taj zid na osnovi.

- **Nagnut**: zid ima kosu ravan krova iznad sebe. Upiši njegov nagib pored, na primer `12/12` za strme krajeve na krovu `6/12`.
- **Zabatni kraj**: krov se zaustavlja u uspravnom kraju iznad tog zida, zid se popunjava do krova, a krov prelazi preko njega za **Previs zabata**.
- **Nijedan (završava se u ravni)**: krov se zaustavlja na tom zidu bez previsa i bez zabatnog zida, za krov uz viši zid.

Spisak **Krajevi** na vrhu postavlja sve zidove odjednom; **Podesi po zidu** se pojavljuje kad zidovi više ne odgovaraju gotovoj postavci.

## Promena krova koji već postoji

Izaberi krov i **Svojstva** prikazuju ista podešavanja kao alat Krov: **Nagib**, **Previs**, **Previs zabata**, **Visina oslonca**, **Visina čeone daske**, **Zatvorene strehe** i **Debljina**. Svaka promena se odmah vidi na osnovi i u 3D, uz iste provere kao alat (nagib od 80 stepeni ili više se odbija, kao i podešavanje koje ne može da napravi krov). Upiši vrednost i pritisni {{key:Enter}}, ili napusti polje.

Svaka promena je jedan korak poništavanja. Više uzastopnih promena istog polja (upiši `6/12`, pa `7/12`, pa `8/12`) spajaju se u jedan korak, tako da jedan {{key:Ctrl}}+{{key:Z}} opoziva ono što je krov imao pre niza; promena drugog polja počinje novi korak.

## Visina oslonca, čeona daska i podgled

- **Visina oslonca** je mesto gde se ravni krova spajaju sa spoljašnjom stranom zidova, merena od poda nivoa. Ostavi prazno da krov sedi na vrhu zidova; upiši veću vrednost za podignutu petu.
- **Visina čeone daske** je daska duž strehe i uz zabatne ivice. Upiši `0` za bez daske.
- **Zatvorene strehe** stavlja ravan podgled ispod svake strehe, od zida do zadnje strane čeone daske.

Svaka ravan se spaja sa svojim zidom na visini oslonca, pa zidovi sa različitim nagibima zadržavaju jednu liniju oslonca, a njihove strehe se završavaju na različitim visinama, kao što bi bile uokvirene.

## Crtanje ravni krova

1. Na nivou na čijim zidovima leži ravan, otvori {{ui:Build}} i izaberi {{ui:Roof plane}}.
2. Upiši **Nagib** i, ako nije vrh zidova, **Visinu strehe**.
3. Klikni uglove. Prva strana koju nacrtaš je streha; ravan se diže od nje prema ostatku oblika.
4. Klikni prvi ugao ponovo, dvaput klikni ili pritisni {{key:Enter}} da završiš. {{key:Esc}} odbacuje uglove.

Ravan krova ne prati zidove. Izaberi je na nivou iznad (klikni unutra) da promeniš njen nagib, visinu strehe ili debljinu, ili pritisni {{key:Delete}} da je ukloniš.

## Dodavanje krovne kućice

1. Prikaži nivo na kome je krov.
2. Otvori {{ui:Build}} i izaberi {{ui:Dormer}}.
3. U redu opcija izaberi **Vrsta kućice** (**Zabat** ili **Jednovodna**) i postavi **Širina**, **Prednji zid** (visina prednjeg zida od vrha krova do strehe kućice), **Nagib** i **Previs**.
4. Klikni na površinu krova gde ide sredina prednje strane kućice.

BimCraft pravi prednji zid, dva bočna zida i krov kućice i vodi ga nazad dok ne nađe krov. Zabatna kućica ima dve ravni koje se spajaju u slemenu. Jednovodna kućica ima jednu ravan, koja mora biti manje strma od krova. Krov ispod kućice se seče. Kućica prati krov kad se zidovi pomere.

Izaberi je da promeniš vrstu, širinu, prednji zid, nagib ili previs u **Svojstvima**. {{key:Delete}} je uklanja i ponovo zatvara krov. Mora stati na jednu površinu krova, dalje od kosnica, dolina i sleme. Krovne kućice prihvataju samo krovovi napravljeni alatom {{ui:Roof}}, a ne ravni krova nacrtane ručno. Još nije napravljeno: prozor na prednjoj strani kućice i kućice na ručno nacrtanim ravnima krova.

## Šta se čuva

Krovovi su IFC krovovi sastavljeni od jedne krovne ploče po ravni, zabatnih zidova, jednog elementa čeone daske i jednog pokrivača podgleda. Krov nosi dužine slemena, kosnica, dolina, strehe i zabatnih ivica, i svoje površine, za predmere. Ravan krova je IFC krov sa jednom pločom.

:::tip
Opozivanje vraća svaku promenu krova u jednom koraku, uključujući i postavku koja menja svaki zid.
:::
