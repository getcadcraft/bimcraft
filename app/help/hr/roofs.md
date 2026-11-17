---
title: Krovovi: nagib za svaki zid, zabati, jednostrešni krovovi i krovne plohe
summary: Postavite svaki zid pod krovom na nagnut, zabatni kraj ili bez; koristite unaprijed postavke za četverostrešni, zabatni i jednostrešni krov, podignite krov visinom ploče, dodajte čeonu dasku i podgled te nacrtajte pojedinačne krovne plohe tamo gdje automatski krov ne pristaje.
keywords: promjena krova, uređivanje krova, odabrani krov, svojstva krova, poništi krov, krov, nagib, po zidu, zabat, zabatni kraj, jednostrešni, prislonjeni krov, četverostrešni, dolina, sljeme, visina ploče, peta, čeona daska, podgled, streha, bočni rub, istak, krovna ploha, krov trijema, krovna kućica, zabatna kućica, jednostrešna kućica
from: 096084a7
---

## Što ćete raditi

Oblikujte krov prema zidovima ispod njega. Svaki zid dobiva vlastitu postavku, pa jedan krov može biti četverostrešan sprijeda, zabatan na krajevima i završiti ravno uz viši zid straga. Za trijem ili bilo koju plohu koju automatski krov ne može napraviti, nacrtajte krovnu plohu povlačenjem njezinih kutova.

## Postavite krov

1. Na etaži čiji zidovi nose krov kliknite {{ui:Roof}}.
2. Upišite **Nagib** (`6/12` ili stupnjeve, poput `30`) i **Istak**.
3. Odaberite unaprijed postavku: **Četverostrešni krov**, **Zabati na kraćim stranama**, **Zabati na duljim stranama** ili **Jednostrešni** (strana najbliža pokazivaču je niska streha; ostale strane su zabatni krajevi).
4. Ostavite **Čeona daska i podgled** označeno za zatvorene strehe s čeonom daskom ili ga odznačite za goli rub krova.
5. Pokažite unutar zgrade: streha, sljeme, četverostrešnice i doline prikazat će se na tlocrtu. Kliknite.

Radi bilo koji obris: oblike L, T, U i plus, kutove pod kutom i izreze. Četverostrešnice, sljemena i doline pronalaze se tamo gdje se krovne plohe susreću.

## Jedan zid u isto vrijeme

Odaberite krov (na etaži iznad zidova kliknite unutar njegova obrisa) i pogledajte pod **Svaki zid** u **Svojstvima**. Pokazivanje na redak označava taj zid na tlocrtu.

- **Nagnut**: zid ima nagnutu krovnu plohu iznad sebe. Upišite pokraj njega vlastiti nagib, na primjer `12/12` za strme krajeve na krovu `6/12`.
- **Zabatni kraj**: krov završava okomitim krajem iznad tog zida, zid je ispunjen do krova, a krov prelazi preko njega za **Zabatni istak**.
- **Bez (ravno uz)**: krov završava na tom zidu bez istaka i bez zabatnog zida, za krov uz viši zid.

Popis **Krajevi** na vrhu postavlja svaki zid odjednom; **Postavi po zidu** se pojavljuje kad se zidovi više ne podudaraju s unaprijed postavkom.

## Promijenite krov koji ste već postavili

Odaberite krov i **Svojstva** pokazuju iste postavke koje ima alat Krov: **Nagib**, **Istak**, **Zabatni istak**, **Visina ploče**, **Visina čeone daske**, **Zatvorene strehe** i **Debljina**. Svaka promjena odmah se vidi na tlocrtu i u 3D-u, uz iste provjere kao u alatu (nagib od 80 stupnjeva ili više se odbija, kao i postavka koja ne može napraviti krov). Upišite vrijednost i pritisnite {{key:Enter}} ili napustite polje.

Svaka promjena je jedan korak poništavanja. Više promjena istog polja jedna za drugom (upišite `6/12`, zatim `7/12`, zatim `8/12`) spajaju se u jedan korak, pa jedan {{key:Ctrl}}+{{key:Z}} vraća ono što je krov imao prije niza; promjena drugog polja počinje novi korak.

## Visina ploče, čeona daska i podgled

- **Visina ploče** je mjesto gdje se krovne plohe susreću s vanjskom stranom zidova, mjereno od poda etaže. Ostavite prazno da krov sjedne na vrh zidova; upišite veću vrijednost za podignutu petu.
- **Visina čeone daske** je daska uz strehe i uz bočne rubove. Upišite `0` za bez.
- **Zatvorene strehe** stavljaju vodoravni podgled ispod svake strehe, od zida do stražnje strane čeone daske.

Svaka ploha susreće svoj zid na visini ploče, pa zidovi s različitim nagibima zadržavaju jednu liniju ploče, a njihove strehe završavaju na različitim visinama, kao što bi bile izvedene u konstrukciji.

## Nacrtajte krovnu plohu

1. Na etaži na kojoj leži ploha otvorite {{ui:Build}} i odaberite {{ui:Roof plane}}.
2. Upišite **Nagib** i, ako nije riječ o vrhu zidova, **Visinu strehe**.
3. Kliknite kutove. Prva strana koju nacrtate je streha; ploha se diže od nje prema ostatku oblika.
4. Kliknite prvi kut ponovno, dvaput kliknite ili pritisnite {{key:Enter}} za završetak. {{key:Esc}} odbacuje kutove.

Krovna ploha ne slijedi zidove. Odaberite je na etaži iznad (kliknite unutar nje) da promijenite njezin nagib, visinu strehe ili debljinu, ili pritisnite {{key:Delete}} za uklanjanje.

## Dodajte krovnu kućicu

1. Prikažite etažu na kojoj je krov.
2. Otvorite {{ui:Build}} i odaberite {{ui:Dormer}}.
3. U retku opcija odaberite **Vrstu kućice** (**Zabatna** ili **Jednostrešna**) i postavite **Širinu**, **Prednji zid** (visinu prednjeg zida od vrha krova do streha kućice), **Nagib** i **Istak**.
4. Kliknite na plohu krova gdje ide sredina prednje strane kućice.

BimCraft gradi prednji zid, dva bočna zida i krov kućice te ga vodi natrag dok ne sretne krov. Zabatna kućica ima dvije plohe koje se susreću u sljemenu. Jednostrešna kućica ima jednu plohu, koja mora biti manje strma od krova. Krov ispod kućice se odsijeca. Kućica prati krov kad se zidovi pomaknu.

Odaberite je da promijenite njezinu vrstu, širinu, prednji zid, nagib ili istak u **Svojstvima**. {{key:Delete}} je uklanja i ponovno zatvara krov. Mora stati na jednu plohu krova, dalje od četverostrešnica, dolina i sljemena. Kućice primaju samo krovovi napravljeni alatom {{ui:Roof}}, a ne krovne plohe nacrtane ručno. Još nije izrađeno: prozor u prednjoj strani kućice i kućice na ručno nacrtanim krovnim plohama.

## Što se sprema

Krovovi su IFC krovovi napravljeni od jedne krovne ploče po plohi, zabatnih zidova, jednog elementa čeone daske i jednog pokrova podgleda. Krov nosi duljine svojih sljemena, četverostrešnica, dolina, strehe i bočnih rubova te svoje površine, za predmjere. Krovna ploha je IFC krov s jednom pločom.

:::tip
{{ui:Poništi}} vraća bilo koju promjenu krova u jednom koraku, uključujući unaprijed postavku koja mijenja svaki zid.
:::
