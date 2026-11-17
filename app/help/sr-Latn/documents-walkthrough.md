---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan pravi posao: stavite fasciklu projekta sa IFC modelima pod kontrolu, preuzmite model, promenite ga, vratite ga s napomenom, pošaljite na pregled, odobrite i objavite, pogledajte istoriju i šta koristi šta, šta drugi vidi dok je zaključan i kako radi sa fasciklama u oblaku.
keywords: trezor, dokumenti, vodič, obuka, preuzimanje, vraćanje, revizija, objavljivanje, odobravanje, zaključavanje, istorija, gde se koristi, ifc, model, fascikla u oblaku, fascikla projekta, dve osobe, deljena fascikla
from: 0a753f25
---

## Šta ćete uraditi

Vi ste Ana, radite na Riverside Clinic sa kolegom Benom. IFC modeli projekta žive u jednoj fascikli kojoj oboje pristupate (deljeni disk, sinhronizovana fascikla ili fascikla u oblaku). Na kraju, jedna datoteka je prešla od prve kopije do objavljene revizije **A**, zatim je ponovo promenjena kao **B.1**, videli ste ko je šta radio i šta Ben vidi dok vi držite datoteku.

Sve se čuva u skrivenoj fascikli `.ccvault` pored vaših datoteka: bez servera, ništa se ne otprema (fascikla u oblaku je izuzetak, pogledajte poslednji korak). Za sva dugmad i pravila na jednom mestu pogledajte temu *Dokumenti: preuzimanje, revizije i objavljivanje* tamo gde je ima vaša aplikacija.

## 1. Postavite fasciklu projekta

1. Izaberite {{ui:Dokumenti}} pored {{ui:Otvori fasciklu}} na početnom ekranu, ili {{ui:Dokumenti…}} u meniju **Datoteka**.
2. Izaberite {{ui:Izaberi projektnu fasciklu}} i izaberite fasciklu koja drži IFC modele projekta. (Projektne fascikle rade u Studiju i u pregledačima koji mogu da otvore fasciklu, kao Chrome i Edge. U drugim pregledačima panel to kaže.)
3. Izaberite {{ui:Promena}} pored **Vi:** i upišite svoje ime, `Ana` (ako pita, i ime ovog računara). Panel sada piše *Vi: Ana na* i vaš računar. Vaše ime ide na sve što radite.
4. Izaberite {{ui:Napravi trezor u ovoj fascikli}} i upišite ime projekta, `Riverside clinic`. Panel piše *Trezor je napravljen za Riverside clinic.*

## 2. Stavite datoteku pod kontrolu

1. Otvorite **Datoteke van trezora** i izaberite {{ui:Dodaj}} pored `models/House.ifc`.
2. Pojavljuje se pod **Datoteke u trezoru** u reviziji **A.1**, stanje **U radu**. A.1 je njena prva kopija; trezor čuva kopiju svake revizije.

## 3. Preuzmite, promenite, vratite

1. Izaberite {{ui:Otvoren}} pored `models/House.ifc`. Model se otvara u BimCraft-u, a panel se zatvara da biste ga videli. Ponovo otvorite panel iz {{ui:Dokumenti}}.
2. Ponovo otvorite panel i izaberite {{ui:Preuzmi}}. Red sada piše **Preuzeto na vaše ime**. Pravi se zaključna datoteka u `.ccvault/locks`; niko drugi ne može da preuzme ovu datoteku dok je ne vratite.
3. Promenite model: pomerite zid, dodajte vrata. Čuvanje je odbijeno osim ako je model preuzet na vaše ime, i kaže zašto; Sačuvaj kao uvek radi za vašu kopiju.
4. Otvorite panel, izaberite {{ui:Vrati}} i upišite šta je promenjeno (`Pomerila sam vrata`). Panel kaže *vraćeno kao A.2*. Datoteka u fascikli projekta sada je model koji ste imali otvoren, a zaključavanje je nestalo. Vraćanje bez promene zadržava reviziju.

Ako se predomislite, {{ui:Opozovi preuzimanje}} vraća datoteku bez nove revizije.

## 4. Pregled i objavljivanje

1. Izaberite {{ui:Pošalji na pregled}}. Stanje postaje **Za pregled** i datoteka je samo za čitanje.
2. Pre odobravanja izaberite {{ui:Podešavanja projekta}} i navedite ko može da odobri (jedno ime po redu), na primer `Ben` i `Carla`, i označite pravilo da odobravalac mora biti neko osim autora. Izaberite {{ui:Sačuvaj podešavanja}}. Sada sam trezor odbija svakog drugog.
3. Ben (ili Carla) bira {{ui:Odobri}} i upisuje ime odobravaoca. Stanje postaje **Objavljeno**, a revizija postaje **A**, sa *odobrio* i imenom. Objavljena datoteka je samo za čitanje. {{ui:Vrati na doradu}} bi je vratilo u U radu, uz razlog.

Ime odobravaoca je ime upisano u panel; to je zapis o tome ko je odobrio, a ne dokaz identiteta.

## 5. Nova revizija

1. Na objavljenoj datoteci izaberite {{ui:Nova revizija}}. Rezervišete je za sledeće slovo.
2. Promenite je, pa {{ui:Vrati}}. Revizija je **B.1**, u radu. Objavite je na isti način i postaje **B**. {{ui:Opozovi preuzimanje}} pre prvog vraćanja ostavlja je na **A**.

Revizije idu A, B … Z, AA, AB. Ako vaš standard preskače neka slova, podešavanje projekta *Koristi redosled ASME Y14.35* preskače I, O, Q, S, X i Z za sledeće revizije.

## 6. Pogledajte šta se dogodilo

Izaberite ime datoteke da otvorite njene detalje:

- **{{ui:History}}**: svaki događaj, najnoviji prvi, sa tim ko, na kom računaru i kada: *Vraćeno A.2* od Ane, *Objavio* Ben, i tako dalje.
- **{{ui:Revisions}}**: tabela revizija: svaka sačuvana revizija, sa datumom, ko ju je vratio, napomenom i ko ju je odobrio. Trezor čuva kopiju svake u `.ccvault/revs`.
- **{{ui:Uses}}**: dokumenta na koja IFC model upućuje.
- **{{ui:Used by}}**: navodi svaki model u trezoru koji upućuje na ovu datoteku.

## Modeli koji upućuju na druge dokumente

IFC model koji upućuje na druga dokumenta u fascikli (crteže, specifikacije) prikazuje ih pod **Koristi**, a svaki od njih prikazuje model pod **Koristi**. Kada vratite dokument, vidite koji modeli se na njega pozivaju.

## 7. Šta Ben vidi dok vi držite datoteku

Sada ponovo preuzmite datoteku i zamolite Bena da otvori istu fasciklu projekta na svom računaru i otvori panel. U redu te datoteke vidi **Preuzela Ana na** vašem računaru **od** vremena, i nema dugmeta {{ui:Preuzmi}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sistem neće napraviti dvaput, pa dve osobe ne mogu obe da drže datoteku, čak ni u istoj sekundi, kada je fascikla na disku u Studiju. (U pregledaču fascikla dozvoljava samo najbolji napor, a panel to kaže pod **Fascikla**.)

Ako Ana nije tu, a Benu treba datoteka, {{ui:Prekini preuzimanje}} je oslobađa. On mora da upiše razlog; ide u dnevnik sa tim čije je preuzimanje bilo. Kada projekat navodi administratore, samo oni mogu. Preuzimanje starije od roka zastarelosti (podrazumevano 14 dana) označava se kao *dugo*. Posle prekida, Anino kasno vraćanje se odbija, pa vas dvoje ne možete prepisati jedno drugom.

## 8. Fascikle u oblaku

Fascikla u oblaku je projektna fascikla koja se čuva u skladištu oblaka vašeg tima, pa timu nije potreban deljeni disk. U Studiju, prijavljeni na svoj CadCraft nalog, panel pokazuje {{ui:Otvori fasciklu u oblaku}} pored {{ui:Izaberi projektnu fasciklu}}. Izaberite je i izaberite fasciklu, navedenu kao radni prostor / fascikla. Vlasnik radnog prostora prvo pravi fasciklu, a skladište oblaka tima mora biti uključeno. Sve gore radi isto; server pravi zaključavanje, koje je strogo među ljudima. Ako niste prijavljeni, panel traži da se prijavite. U običnoj kartici pregledača dugme za oblak se ne nudi; koristite Studio.

## Probajte

Uradite ovih osam koraka sa kopijom prave datoteke. Za korake sa dve osobe treba vam druga osoba, ili dva prozora sa dva imena. Ako to probate sa pravom deljenom fasciklom, stranica Testiranje zajednice ima proveru koja traži upravo to i prima rezultate.
