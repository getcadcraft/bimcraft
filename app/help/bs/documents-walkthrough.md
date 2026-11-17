---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan pravi posao: stavi projektni folder IFC modela pod kontrolu, zaduži model, promijeni ga, razduži ga s napomenom, pošalji na pregled, odobri i objavi, pogledaj historiju i šta koristi, šta druga osoba vidi dok je zaključano, i kako radi s folderima u oblaku.
keywords: trezor, dokumenti, vodič, tutorijal, zaduži, razduži, revizija, objava, odobri, zaključaj, historija, gdje se koristi, ifc, model, folder u oblaku, projektni folder, dvije osobe, zajednički folder
from: 0a753f25
---

## Šta ćete uraditi

Vi ste Ana, radite na projektu Riverside Clinic s kolegom, Benom. IFC modeli projekta žive u jednom folderu kojem oboje pristupate (zajednički disk, sinhronizovani folder ili folder u oblaku). Na kraju, jedan fajl je prošao od prve kopije do objavljene revizije **A**, promijenjen je ponovo kao **B.1**, vidjeli ste ko je šta radio, i vidjeli ste šta Ben vidi kad vi držite fajl.

Sve se čuva u skrivenom folderu `.ccvault` pored vaših fajlova: bez servera, ništa se ne šalje (folder u oblaku je izuzetak, pogledajte posljednji korak). Za svako dugme i pravilo na jednom mjestu, pogledajte temu *Dokumenti: zaduživanje, revizije i objava* tamo gdje je vaša aplikacija ima.

## 1. Postavi projektni folder

1. Izaberi {{ui:Dokumenti}} pored {{ui:Otvori folder}} na početnom ekranu, ili {{ui:Dokumenti…}} u meniju **Datoteka**.
2. Izaberi {{ui:Odaberi projektni folder}} i izaberi folder koji sadrži IFC modele projekta. (Projektni folderi rade u Studiju i u pregledačima koji mogu otvoriti folder, kao Chrome i Edge. U drugim pregledačima panel to kaže.)
3. Izaberi {{ui:Promjena}} pored **Vi:** i upiši svoje ime, `Ana` (ako pita, i ime ovog računara). Panel sada piše *Vi: Ana na* i vaš računar. Vaše ime ide uz sve što radite.
4. Izaberi {{ui:Pokreni trezor u ovom folderu}} i upiši naziv projekta, `Riverside clinic`. Panel piše *Trezor je pokrenut za Riverside clinic.*

## 2. Stavi fajl pod kontrolu

1. Otvori **Fajlovi nisu u trezoru** i izaberi {{ui:Dodaj}} pored `models/House.ifc`.
2. Pojavljuje se pod **Fajlovi u trezoru** u reviziji **A.1**, stanje **Rad u toku**. A.1 je njegova prva kopija; trezor čuva kopiju svake revizije.

## 3. Zaduži, promijeni, razduži

1. Izaberi {{ui:Otvoren}} pored `models/House.ifc`. Model se otvara u BimCraftu i panel se zatvara da vidite model. Ponovo otvorite panel preko {{ui:Dokumenti}}.
2. Ponovo otvori panel i izaberi {{ui:Zaduži}}. Red sada piše **Zaduženo vama**. Napravljen je fajl za zaključavanje u `.ccvault/locks`; niko drugi ne može zadužiti ovaj fajl dok ga ne razdužite.
3. Promijeni model: pomjeri zid, dodaj vrata. Spašavanje je odbijeno osim ako je model zadužen vama, i kaže zašto; Spasi kao uvijek radi za vašu vlastitu kopiju.
4. Otvori panel, izaberi {{ui:Razduži}} i upiši šta je promijenjeno (`Pomjerio vrata`). Panel kaže *razduženo kao A.2*. Fajl u projektnom folderu je sada model koji ste imali otvoren, a zaključavanje je nestalo. Razduživanje bez promjene zadržava reviziju.

Ako ste se predomislili, {{ui:Poništi zaduženje}} vraća fajl bez nove revizije.

## 4. Pregled i objava

1. Izaberi {{ui:Pošalji na pregled}}. Stanje postaje **Na pregledu** i fajl je samo za čitanje.
2. Prije odobravanja izaberi {{ui:Postavke projekta}} i navedi ko smije odobriti (jedno ime po redu), na primjer `Ben` i `Carla`, i označi pravilo da odobravalac mora biti neko ko nije autor. Izaberi {{ui:Spasi postavke}}. Sada sam trezor odbija bilo koga drugog.
3. Ben (ili Carla) bira {{ui:Odobri}} i upisuje ime odobravaoca. Stanje postaje **Objavljeno**, a revizija postaje **A**, s *odobrio* i imenom. Objavljen fajl je samo za čitanje. {{ui:Vrati na doradu}} bi ga vratio u Rad u toku, s razlogom.

Ime odobravaoca je ime upisano u panel; to je zapis o tome ko je odobrio, a ne dokaz identiteta.

## 5. Nova revizija

1. Na objavljenom fajlu izaberi {{ui:Nova revizija}}. Zadužujete ga za sljedeće slovo.
2. Promijenite ga, pa {{ui:Razduži}}. Revizija je **B.1**, rad u toku. Objavite na isti način i postaje **B**. {{ui:Poništi zaduženje}} prije prvog razduživanja ostavlja ga na **A**.

Slova revizije idu A, B … Z, AA, AB. Ako vaš standard izostavlja neka slova, postavka projekta *Koristi ASME Y14.35 niz* preskače I, O, Q, S, X i Z za sljedeće revizije.

## 6. Pogledaj šta se dogodilo

Izaberi ime fajla da otvoriš njegove detalje:

- **{{ui:Historija}}**: svaki događaj, najnoviji prvi, s kim, kojim računarom i kada: *Razduženo A.2* od Ane, *Objavljeno* od Bena, i tako dalje.
- **{{ui:Revizije}}**: tabela revizija: svaka sačuvana revizija, s datumom, ko ju je razdužio, napomena i ko ju je odobrio. Trezor čuva kopiju svake u `.ccvault/revs`.
- **{{ui:Koristi}}**: dokumenti na koje IFC model pokazuje.
- **{{ui:Koristi}}**: lista svakog modela u trezoru koji pokazuje na ovaj fajl.

## Modeli koji pokazuju na druge dokumente

IFC model koji pokazuje na druge dokumente u folderu (crteže, specifikacije) prikazuje ih pod **{{ui:Koristi}}**, a svaki od njih prikazuje model pod **{{ui:Koristi}}**. Razduživanje dokumenta pokazuje koji modeli se na njega odnose.

## 7. Šta Ben vidi dok vi držite fajl

Sada ponovo zaduži fajl, i zamoli Bena da otvori isti projektni folder na svom računaru i otvori panel. Na redu fajla vidi **Zaduženo: Ana na** vašem računaru **od** vremena, i nema dugmeta {{ui:Zaduži}}. Ako ipak pokuša, trezor odbija: zaključavanje je fajl koji sistem neće dva puta napraviti, pa dvije osobe ne mogu istovremeno imati fajl, čak ni u istoj sekundi, kad je folder na disku u Studiju. (U pregledaču folder dozvoljava samo najbolji napor, i panel to kaže pod **Folder**.)

Ako je Ana odsutna i Benu treba fajl, {{ui:Prekini zaduženje}} ga oslobađa. Mora upisati razlog; ide u dnevnik uz to čije je zaduženje bilo. Kad projekat navodi administratore, samo oni mogu. Zaduženje starije od roka zastarjelosti (podrazumijevano 14 dana) označeno je kao *odavno*. Nakon prekida, Anino kasno razduživanje je odbijeno, pa jedno drugo ne može prepisati.

## 8. Folderi u oblaku

Folder u oblaku je projektni folder koji se čuva u timskom oblaku, pa tim ne treba zajednički disk. U Studiju, prijavljeni na vaš CadCraft račun, panel prikazuje {{ui:Otvori folder u oblaku}} pored {{ui:Odaberi projektni folder}}. Izaberi ga i odaberi folder, prikazan kao radni prostor / folder. Vlasnik radnog prostora prvo pravi folder, a timski oblak mora biti aktivan. Sve gore radi isto; server pravi zaključavanje, koje je strogo među ljudima. Ako niste prijavljeni, panel traži da se {{ui:Prijavi se}}. U običnom tabu pregledača dugme za oblak se ne nudi; koristite Studio.

## Probajte

Uradite osam koraka gore s kopijom pravog fajla. Za korake za dvije osobe treba vam druga osoba, ili dva prozora s dva imena. Ako to probate sa pravim zajedničkim folderom, stranica za testiranje zajednice ima provjeru koja traži upravo ovo, i prima rezultate.
