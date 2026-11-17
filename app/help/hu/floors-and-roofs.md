---
title: Helyiségek, padlók, mennyezetek és tetők
summary: A helyiségek akkor jelennek meg, amikor a falak lezárják őket; adjon egy helyiségnek vagy az egész épületnek padlót és mennyezetet, a falakra pedig csonkakontyos vagy nyeregtetőt. Ha a falak mozognak, mindegyik követi őket.
keywords: helyiség, helyiségek, tér, terület, kerület, padló, födém, aljzat, mennyezet, tető, csonkakontyos tető, nyeregtető, lejtés, túlnyúlás, eresz, gerinc, völgy, 6/12
from: 1fb1813c
---

## Mit fog csinálni

Fejezze be az épület héjszerkezetét. A helyiségek maguktól létrejönnek a falakból; a padló, a mennyezet és a tető egy-egy kattintással elkészül. Mivel a falakból származnak, a falak mozgatásakor velük együtt mozognak.

## Helyiségek

Minden rajzolt falak által bezárt tér helyiség. Akkor jelenik meg, amint az utolsó fal lezárja, kap egy számot (101, 102 … az első szinten, 201 … a következőn) és egy nevet (**Helyiség 1**, **Helyiség 2** …), a területe pedig az alaprajz közepén látható.

- A {{ui:Kijelölés}} bekapcsolt állapotában kattintson egy helyiség belsejébe a kijelöléséhez. A **Tulajdonságok** részben módosítsa a **Nevet** (például `Konyha`) és a **Számot**; a terület és a kerület itt látható.
- Ha két helyiség közötti falat töröl, azok egy helyiséggé válnak; ha falat húz egy helyiségen keresztül, az kettéválik. A helyiség a körülötte lévő falak mozgatásakor is megtartja a nevét és a számát.
- A helyiség önmagában nem törölhető: a falak által alkotott tér az.

A területeket a falfelületeken belül mérjük. A helyiségek a padlóterületükkel, kerületükkel, magasságukkal és térfogatukkal együtt IFC-térként mentődnek, így a kimutatások ezeket olvassák (lásd: [Mennyiségek összesítése, elemek listázása és terek kimutatása](topic:quantity-totals)).

## Padlók

1. Kattintson a {{ui:Padló}} gombra.
2. Válassza az **Ez a helyiség** vagy az **Az egész épület** lehetőséget, a **Fajtát** (fapadló vagy betonlemez), és adja meg a vastagságát.
3. Mutasson egy helyiség belsejébe (vagy az épület bármely pontjára). A padló által lefedendő rész kiemelve jelenik meg a területével együtt.
4. Kattintson. A padló felső széle a szint padlója; a vastagságával lefelé nyúlik. Az egész épületre kiterjedő padló a falak külső felületéig ér.

## Mennyezetek

1. Kattintson a {{ui:Mennyezet}} gombra.
2. Válassza az **Ez a helyiség** vagy az **Az egész épület** lehetőséget, és adja meg a padló feletti **Magasságot**.
3. Mutasson a belsejébe, és kattintson.
4. Ha alulról szeretné látni, a rácsával és a rajta lévő lámpákkal együtt, váltson a mennyezeti alaprajzra: lásd [Nézetek, nézettartományok és saját rajzlapok](topic:views-and-sheets).

## Tető

1. Azon a szinten, amelynek falai hordozzák a tetőt, kattintson a {{ui:Tető}} gombra.
2. Írja be a **Lejtést** egy 12-es egységre vetített emelkedésként (`6/12`) vagy fokban (`30`), valamint a **Túlnyúlást**.
3. Válassza a **Végeket**: **Csonkakontyos tető** (minden oldal lejt), **Oromfalak a rövid oldalakon** vagy **Oromfalak a hosszú oldalakon** (négyoldalú épületnél), vagy a **Pultos tető** lehetőséget.
4. Mutasson az épület belsejébe: az eresz és a gerinc megjelenik az alaprajzon. Kattintson.

A tető a falak tetején, a fölöttük lévő szinten helyezkedik el, alsó széle pedig a falak külső felületéhez csatlakozik. Az oromvégeket az alatta lévő falral azonos vastagságú oromfal zárja le. Az L-, T- vagy U-alakú épület csonkakontyos tetőt kap, amelynek szárnyai völgyekben találkoznak.

## Módosítás

Jelöljön ki egy padlót, mennyezetet vagy tetőt (a 3D-nézetben, a modellfában, vagy a tetőt a felső szinten a körvonalán belülre kattintva), majd módosítsa a **Tulajdonságokban**: a padló fajtáját, vastagságát és a felső szintjének szint feletti magasságát; a mennyezet magasságát, vastagságát és **Mintáját** (az a rács, amelyet a mennyezeti alaprajz rajzol rá: nincs, 600 × 600, 600 × 1200, 2' × 2' vagy 2' × 4'); a tető lejtését, túlnyúlását, végeit és vastagságát. Minden módosítás egy visszavonási lépés.

## Padló, mennyezet vagy tető típusának megadása rétegekkel

A padló, a mennyezet és a tető – a falakhoz hasonlóan – kaphat **típust**: nevesített rétegrendet, amelynek rétegei az anyagukkal és a valódi vastagságukkal rendelkeznek.

- **Elhelyezéskor.** A Padló, Mennyezet, Tető és a Padló rajzolása eszközök sorában van egy **Típus** lista. A **Nincs típus** a korábbi módon, a saját vastagságával helyezi el az elemet. Egy típus a rétegeinek együttes vastagságával helyezi el.
- **Később.** Jelölje ki a padlót, mennyezetet vagy tetőt, és a Tulajdonságok között válassza a **Típus** lehetőséget. Az elem ugyanaz az elem marad: helye, helyisége és adatai megmaradnak, semmi nem rajzolódik újra. Csak a típusa, vastagsága és anyaga változik. Így válik a vázlatstádiumú elem kidolgozottá: cserélje ki az általános típusát egy valódira.
- **A típus szerkesztése…** megnyitja a típusszerkesztőt az adott típuson: a rétegek a **felső** résztől lefelé, a mag, minden réteg funkciója és a típus LOD-címkéje. A mentés egy lépésben módosítja a típus minden elemét, és egy visszavonás visszaállítja. Egy kezdőtípus módosítása a saját típusaként mentett másolatot hoz létre.
- Amíg egy elemnek van típusa, a **Vastagság** a típusé, és nem írható be. Másik típust vagy a **Nincs típus** lehetőséget választva módosíthatja.

A kezdő típusok mindegyikhez egy **általános** típus tartozik (az általános anyag egy rétege, LOD 200 címkével), valamint két rétegezett típus (LOD 300 címkével): egy faborításos gerendás padló és egy esztrichre épülő betonpadló; egy faszerkezetű tető és egy betonlapos lapostető; egy gipszkarton mennyezet és egy függesztett csempés mennyezet. Ezek kiinduló értékek, nem ellenőrzött szerkezetek: a rétegeket használat előtt ellenőrizze.

A **Rétegek: terület és térfogat** kimutatás felsorolja a használatban lévő típusok minden rétegét; lásd [Kimutatások, méretek és PDF](topic:plan-schedules-and-pdf). A padló-, tető- és mennyezettípusok típuscsomagban vagy könyvtári elemként vihetők át a projektek között; lásd [Típuscsomagok](topic:type-packs).

## Jó tudni

- A falak mozgatása, hozzáadása vagy törlése után a rájuk épülő helyiségek, padlók, mennyezetek és a tető újra elkészülnek.
- Egy tető bármilyen körvonalra illeszkedik. Ha minden falnak saját lejtést, oromvéget vagy pultos véget, megemelt pászmát, homlokdeszkát és alsóborítást szeretne, vagy egyetlen tetősíkot szeretne rajzolni, lásd: [Tetők: minden falhoz saját lejtés, oromfalak, pultos tetők és tetősíkok](topic:roofs).
- A {{key:Delete}} billentyű törli a kijelölt padlót, mennyezetet vagy tetőt.
