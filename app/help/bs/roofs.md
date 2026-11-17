---
title: Krovovi: nagib za svaki zid, zabati, jednostrešni krovovi i krovne ravni
summary: Postavite svaki zid pod krovom na kosi, zabatni kraj ili bez; koristite prednastavke četverovodnog, zabatnog i jednostrešnog krova, podignite krov visinom oslonca, dodajte čeonu dasku i podgled, i nacrtajte pojedinačne krovne ravni tamo gdje automatski krov ne odgovara.
keywords: promjena krova, uređivanje krova, odabrani krov, svojstva krova, poništi krov, krov, nagib, po zidu, zabat, zabatni kraj, jednostrešni, nadstrešnica, četverovodni, uvala, sljeme, visina oslonca, peta, čeona daska, podgled, streha, zabatna linija, istak, krovna ravan, krov trijema, krovna kućica, zabatna krovna kućica, jednostrešna krovna kućica
from: 096084a7
---

## Šta ćete uraditi

Oblikujte krov iz zidova ispod njega. Svaki zid ima svoju postavku, pa jedan krov može biti četverovodan sprijeda, zabatan na krajevima i ravan uz viši zid pozadi. Za trijem ili bilo koju stranu koju automatski krov ne može napraviti, nacrtajte krovnu ravan po njenim uglovima.

## Postavite krov

1. Na nivou čiji zidovi nose krov kliknite {{ui:Krov}}.
2. Upišite **Nagib** (`6/12`, ili stepene poput `30`) i **Istak**.
3. Odaberite prednastavku: **Četverovodni krov**, **Zabati na kratkim stranama**, **Zabati na dugim stranama**, ili **Jednostrešni** (strana najbliža pokazivaču je niska streha; ostale strane su zabatni krajevi).
4. Ostavite **Čeona daska i podgled** uključeno za zatvorene strehe sa čeonom daskom, ili ga isključite za golu ivicu krova.
5. Pokažite unutar zgrade: streha, sljeme, četverovodne linije i žljebovi se prikazuju na planu. Kliknite.

Radi svaki obris: L, T, U i plus oblici, kosi uglovi i zarezi. Četverovodne linije, sljemena i žljebovi se nalaze tamo gdje se krovne ravni sastaju.

## Jedan zid po jedan

Odaberite krov (na nivou iznad zidova, kliknite unutar njegovog obrisa) i pogledajte pod **Svaki zid** u **Svojstvima**. Pokazivanje na red označava taj zid na planu.

- **Kosi**: zid ima kosu krovnu ravan iznad sebe. Upišite njegov vlastiti nagib pored, na primjer `12/12` za strme krajeve na krovu `6/12`.
- **Zabatni kraj**: krov se zaustavlja u uspravnom kraju iznad tog zida, zid je popunjen do krova, a krov ide preko njega za **Istak zabata**.
- **Bez (ravno uz zid)**: krov se zaustavlja na tom zidu bez istaka i bez zabatnog zida, za krov uz viši zid.

Lista **Krajevi** na vrhu postavlja svaki zid odjednom; **Postavi po zidu** se pojavljuje kad se zidovi više ne podudaraju sa prednastavkom.

## Promijenite krov koji ste već postavili

Odaberite krov i **Svojstva** prikazuju iste postavke kao alat Krov: **Nagib**, **Istak**, **Istak zabata**, **Visina oslonca**, **Visina čeone daske**, **Zatvorene strehe** i **Debljina**. Svaka promjena se odmah prikazuje na planu i u 3D, sa istim provjerama kao alat (nagib od 80 stepeni ili više se odbija, kao i postavka koja ne može napraviti krov). Upišite vrijednost i pritisnite {{key:Enter}}, ili ostavite polje.

Svaka promjena je jedan korak poništavanja. Više promjena istog polja jedna za drugom (upišite `6/12`, pa `7/12`, pa `8/12`) spajaju se u jedan korak, tako da jedno {{key:Ctrl}}+{{key:Z}} vraća ono što je krov imao prije niza; promjena drugog polja počinje novi korak.

## Visina oslonca, čeona daska i podgled

- **Visina oslonca** je mjesto gdje se krovne ravni sastaju sa vanjskom stranom zidova, mjereno od poda nivoa. Ostavite prazno da krov sjedne na vrh zidova; upišite veću vrijednost za podignutu petu.
- **Visina čeone daske** je daska duž streha i uz zabatne linije. Upišite `0` za bez.
- **Zatvorene strehe** stavljaju ravan podgled ispod svake streha, od zida do zadnje strane čeone daske.

Svaka ravan se susreće sa svojim zidom na visini oslonca, pa zidovi sa različitim nagibima zadržavaju jednu liniju oslonca, a njihove strehe završavaju na različitim visinama, kako bi bile uokvirene.

## Nacrtajte krovnu ravan

1. Na nivou na kojem sjede zidovi ravni, otvorite {{ui:Verzija}} i odaberite {{ui:Krovna ravan}}.
2. Upišite **Nagib** i, ako nije vrh zidova, **Visinu strehe**.
3. Kliknite uglove. Prva strana koju nacrtate je streha; ravan se diže od nje prema ostatku oblika.
4. Kliknite prvi ugao ponovo, dvaput kliknite, ili pritisnite {{key:Enter}} da završite. {{key:Esc}} odbacuje uglove.

Krovna ravan ne prati zidove. Odaberite je na nivou iznad (kliknite unutar nje) da promijenite nagib, visinu strehe ili debljinu, ili pritisnite {{key:Delete}} da je uklonite.

## Dodajte krovnu kućicu

1. Prikažite nivo na kojem je krov.
2. Otvorite {{ui:Verzija}} i odaberite {{ui:Krovna kućica}}.
3. U redu opcija izaberite **Vrsta krovne kućice** (**Zabatna** ili **Jednostrešna**) i postavite **Širina**, **Prednji zid** (visina prednjeg zida od vrha krova do streha kućice), **Nagib** i **Istak**.
4. Kliknite na stranu krova gdje ide sredina prednje strane kućice.

BimCraft pravi prednji zid, dva bočna zida i krov kućice, i vodi ga unazad dok ne sretne krov. Zabatna kućica ima dvije ravni koje se susreću u sljemenu. Jednostrešna kućica ima jednu ravan, koja mora biti manje strma od krova. Krov ispod kućice je odsječen. Kućica prati krov kad se zidovi pomjere.

Odaberite je da promijenite njenu vrstu, širinu, prednji zid, nagib ili istak u **Svojstvima**. {{key:Delete}} je uklanja i ponovo zatvara krov. Mora stati na jednu stranu krova, dalje od četverovodnih linija, žljebova i sljemena, a krovove prave samo krovovi napravljeni alatom {{ui:Krov}}, ne ručno nacrtane krovne ravni. Još nije napravljeno: prozor na prednjoj strani kućice i kućice na ručno nacrtanim krovnim ravnima.

## Šta se spašava

Krovovi su IFC krovovi napravljeni od jedne krovne ploče po ravni, zabatnih zidova, jednog elementa čeone daske i jedne pokrivke podgleda. Krov nosi dužine svog sljemena, četverovodnih linija, žljebova, streha i zabatnih linija, kao i svoje površine, za predmjer. Krovna ravan je IFC krov sa jednom pločom.

:::tip
Poništavanje vraća bilo koju promjenu krova u jednom koraku, uključujući prednastavku koja mijenja svaki zid.
:::
