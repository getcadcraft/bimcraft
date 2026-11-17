---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan stvarni posao: stavite mapu projekta IFC modela pod kontrolu, uzmite model na uređivanje, promijenite ga, vratite ga s bilješkom, pošaljite na pregled, odobrite i izdajte, pogledajte povijest i što ga koristi, što druga osoba vidi dok je zaključan, i kako to radi s mapama u oblaku.
keywords: trezor, dokumenti, vodič, udžbenik, uzmi na uređivanje, vrati u trezor, revizija, izdavanje, odobravanje, zaključavanje, povijest, gdje se koristi, ifc, model, mapa u oblaku, mapa projekta, dvije osobe, zajednička mapa
from: 0a753f25
---

## Što ćete napraviti

Vi ste Ana, radite na Riverside Clinic s kolegom Benom. IFC modeli projekta nalaze se u jednoj mapi kojoj oboje pristupate (zajednički disk, sinkronizirana mapa ili mapa u oblaku). Na kraju će jedna datoteka proći od prve kopije do izdane revizije **A**, bit će ponovno promijenjena kao **B.1**, vidjet ćete tko je što radio i što Ben vidi dok vi držite datoteku.

Sve se čuva u skrivenoj mapi `.ccvault` pokraj vaših datoteka: bez poslužitelja, ništa se ne učitava (mapa u oblaku je iznimka, vidi zadnji korak). Za svaki gumb i pravilo na jednom mjestu vidi temu *Dokumenti: uzimanje na uređivanje, revizije i izdavanje* tamo gdje je vaša aplikacija ima.

## 1. Postavite mapu projekta

1. Odaberite {{ui:Dokumenti}} pored {{ui:Otvori mapu}} na početnom zaslonu, ili {{ui:Dokumenti…}} u izborniku **Datoteka**.
2. Odaberite {{ui:Odaberite projektnu mapu}} i izaberite mapu koja drži IFC modele projekta. (Mape projekta rade u Studiu i u preglednicima koji mogu otvoriti mapu, kao što su Chrome i Edge. U drugim preglednicima panel to kaže.)
3. Odaberite {{ui:Promjena}} pored **Vi:** i upišite svoje ime, `Ana` (ako pita, i ime ovog računala). Panel sada kaže *Vi: Ana na* i vaše računalo. Vaše ime ide na sve što radite.
4. Odaberite {{ui:Započni trezor u ovoj mapi}} i upišite naziv projekta, `Riverside clinic`. Panel kaže *Trezor pokrenut za Riverside clinic.*

## 2. Stavite datoteku pod kontrolu

1. Otvorite **Datoteke koje nisu u trezoru** i odaberite {{ui:Dodaj}} pored `models/House.ifc`.
2. Pojavljuje se pod **Datoteke u trezoru** kao revizija **A.1**, stanje **U radu**. A.1 je njezina prva kopija; trezor čuva kopiju svake revizije.

## 3. Uzmite na uređivanje, promijenite, vratite

1. Odaberite {{ui:Otvoreno}} pored `models/House.ifc`. Model se otvara u BimCraft-u, a panel se zatvara da ga vidite. Ponovno otvorite panel iz {{ui:Dokumenti}}.
2. Ponovno otvorite panel i odaberite {{ui:Uzmi na uređivanje}}. Redak sada kaže **Uzeto na uređivanje vama**. Napravljena je datoteka zaključavanja u `.ccvault/locks`; nitko drugi ne može uzeti ovu datoteku na uređivanje dok je ne vratite.
3. Promijenite model: pomaknite zid, dodajte vrata. Spremanje je odbijeno osim ako model nije uzet na uređivanje vama, i kaže zašto; Spremi kao uvijek radi za vlastitu kopiju.
4. Otvorite panel, odaberite {{ui:Vrati u trezor}} i upišite što je promijenjeno (`Pomaknuta vrata`). Panel kaže *vraćeno kao A.2*. Datoteka u mapi projekta sada je model koji ste imali otvoren, a zaključavanje je nestalo. Vraćanje bez promjene zadržava reviziju.

Ako se predomislite, {{ui:Poništi uzimanje na uređivanje}} vraća datoteku bez nove revizije.

## 4. Pregled i izdavanje

1. Odaberite {{ui:Pošalji na pregled}}. Stanje postaje **Na pregledu** i datoteka je samo za čitanje.
2. Prije odobravanja odaberite {{ui:Postavke projekta}} i navedite tko smije odobriti (jedno ime po retku), na primjer `Ben` i `Carla`, te označite pravilo da odobravatelj mora biti netko tko nije autor. Odaberite {{ui:Spremi postavke}}. Sada sam trezor odbija svakoga drugog.
3. Ben (ili Carla) odabire {{ui:Odobri}} i upisuje ime odobravatelja. Stanje postaje **Izdano**, a revizija postaje **A**, uz *odobrio* i ime. Izdana datoteka je samo za čitanje. {{ui:Vrati}} bi je vratio u U radu, s razlogom.

Ime odobravatelja je ime upisano u panelu; ono je zapis tko je potpisao, a ne dokaz identiteta.

## 5. Nova revizija

1. Na izdanoj datoteci odaberite {{ui:Nova revizija}}. Držite je za sljedeće slovo.
2. Promijenite je, zatim {{ui:Vrati u trezor}}. Revizija je **B.1**, u radu. Izdajte je na isti način i postaje **B**. {{ui:Poništi uzimanje na uređivanje}} prije prvog vraćanja ostavlja je na **A**.

Slova revizija idu A, B … Z, AA, AB. Ako vaš standard izostavlja neka slova, postavka projekta *Koristi slijed ASME Y14.35* preskače I, O, Q, S, X i Z za sljedeće revizije.

## 6. Pogledajte što se dogodilo

Odaberite naziv datoteke da otvorite njezine pojedinosti:

- **{{ui:Povijest}}**: svaki događaj, najnoviji prvi, s tim tko, koje računalo i kada: *Vraćeno kao A.2* od Ane, *Izdano* od Bena, i tako dalje.
- **{{ui:Revizije}}**: tablica revizija: svaka čuvana revizija, s datumom, tko ju je vratio, bilješkom i tko ju je odobrio. Trezor čuva kopiju svake u `.ccvault/revs`.
- **{{ui:Koristi}}**: dokumenti na koje IFC model upućuje.
- **{{ui:Koristi}}**: navodi svaki model u trezoru koji upućuje na ovu datoteku.

## Modeli koji upućuju na druge dokumente

IFC model koji upućuje na druge dokumente u mapi (crteže, specifikacije) prikazuje ih pod {{ui:Koristi}}, a svaki od njih prikazuje model pod {{ui:Koristi}}. Vraćate li dokument u trezor, vidite koji modeli se na njega pozivaju.

## 7. Što Ben vidi dok vi držite datoteku

Sada ponovno uzmite datoteku na uređivanje i zamolite Bena da otvori istu mapu projekta na svom računalu i otvori panel. U retku datoteke vidi **Uzeo na uređivanje Ana** na vašem računalu **od** vremena, i nema gumba {{ui:Uzmi na uređivanje}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sustav neće dvaput napraviti, pa dvije osobe ne mogu istodobno držati datoteku, čak ni u istoj sekundi, kad je mapa na disku u Studiu. (U pregledniku mapa dopušta samo najbolji napor, i panel to kaže pod **Mapa**.)

Ako je Ana odsutna, a Benu treba datoteka, {{ui:Prekini uzimanje na uređivanje}} je oslobađa. Mora upisati razlog; ide u dnevnik s tim čije je uzimanje bilo. Kad projekt navodi administratore, samo oni mogu. Uzimanje starije od roka zastarjelosti (podrazumijevano 14 dana) označava se kao *dugo vremena*. Nakon prekida Anino kasno vraćanje se odbija, pa se vas dvoje ne mogu međusobno prepisati.

## 8. Mape u oblaku

Mapa u oblaku je mapa projekta pohranjena u oblaku vašeg tima, pa tim ne treba zajednički disk. U Studiu, prijavljeni na svoj CadCraft račun, panel prikazuje {{ui:Otvori mapu u oblaku}} pored {{ui:Odaberite projektnu mapu}}. Odaberite je i izaberite mapu, navedenu kao radni prostor / mapa. Vlasnik radnog prostora prvo izrađuje mapu, a pohrana u oblaku tima mora biti na snazi. Sve gore radi jednako; poslužitelj izrađuje zaključavanje, koje je strogo među osobama. Ako niste prijavljeni, panel traži da se prijavite. U običnoj kartici preglednika gumb za oblak se ne nudi; koristite Studio.

## Isprobajte

Napravite osam gore navedenih koraka s kopijom stvarne datoteke. Za korake s dvije osobe trebate drugu osobu ili dva prozora s dva imena. Ako to isprobate sa stvarnom zajedničkom mapom, stranica za testiranje zajednice navodi provjeru koja traži upravo to i prima rezultate.
