---
title: Promjena IFC svojstava i spremanje uređene kopije
summary: Promijenite naziv, oznaku, opis ili vrijednost svojstva elementa, poništite promjene i preuzmite novu IFC datoteku dok izvornik ostaje kakav je bio.
keywords: uređivanje, promjena, svojstva, parametri, oznaka, naziv, preimenovanje, značka, spremi kao, preuzimanje, poništi, kopiraj, ifc, zapiši
from: f8035d62
---

## Što ćete raditi

Ispravite podatke u IFC modelu: preimenujte element, popravite njegovu oznaku, promijenite vrijednost svojstva. Zatim spremite novu IFC datoteku s promjenama. Datoteka koju ste otvorili nikad se ne dira.

## Što možete promijeniti

| Polje | Može se uređivati |
|---|---|
| Naziv, Vrsta objekta, Oznaka, Opis | Da |
| Pojedinačne vrijednosti svojstava (tekst, brojevi, Da/Ne) | Da |
| Svojstva tipa (skupovi označeni „(tip)“) | Da, i promjena vrijedi za svaki element tog tipa |
| Tip, GlobalId, Redak | Ne |
| Količine (duljine, površine, volumeni, brojevi) | Ne |
| Popisi, nabrajanja i druge višedijelne vrijednosti | Ne |
| Geometrija, položaj, dodavanje ili brisanje elemenata | Ne |

## Koraci

1. Otvorite IFC model i kliknite element koji želite promijeniti.
2. U ploči {{ui:Svojstva}} kliknite vrijednost koju želite promijeniti. Pretvara se u tekstni okvir. Prazna vrijednost prikazuje se kao *prazno*.
3. Upišite novu vrijednost.
4. Pritisnite {{key:Enter}}, ili kliknite negdje drugdje, da je zadržite. Pritisnite {{key:Esc}} za odustajanje.
5. Pogledajte vrijednost: sad je podebljana, s plavom crtom uz nju, što označava uređenu vrijednost.
6. Pogledajte odjeljak {{ui:Promjene}} lijevo: promjena je navedena kao *element*: *polje*, stara vrijednost u novu vrijednost.
7. Ponovite za druge vrijednosti ili druge elemente.
8. Kliknite {{ui:Spremi kao IFC}} (pokazuje koliko promjena čeka, na primjer „Spremi kao IFC (3)“), ili pritisnite {{key:Mod+S}}.
9. Pronađite „*izvorni naziv* (uređeno).ifc“ u mapi za preuzimanja.

## Što biste trebali vidjeti

Statusna traka kaže „Spremljeno: *naziv* (uređeno).ifc s *n* promjena (… bajtova). Vaša izvorna datoteka nije promijenjena.“ Popis {{ui:Promjene}} se prazni, spreman za sljedeći krug.

## Vrste vrijednosti

- **Tekst**: sve što upišete zadržava se kako jest. Brisanje naziva, vrste objekta, oznake ili opisa uklanja vrijednost.
- **Brojevi**: upišite običan broj, poput `2.4` ili `1200`, u vlastitim jedinicama datoteke. Bez oznaka jedinica. Sve drugo prikazuje „Upišite broj.“
- **Cijeli brojevi** (brojevi, cjelobrojne vrijednosti): „Upišite cijeli broj.“ ako upišete decimalni broj.
- **Da/Ne**: vrijednost postaje izbornik s Da i Ne.

Svaka vrijednost zadržava svoj IFC tip, pa broj ostaje broj, a drugi programi ga ispravno čitaju.

## Poništavanje

1. Kliknite {{ui:Poništi}} u odjeljku {{ui:Promjene}}, ili pritisnite {{key:Mod+Z}} dok ne upisujete u polje.
2. Ponovite za poništavanje još promjena. Svako poništavanje uklanja najnoviju promjenu.

Poništavanje ne može ići preko spremanja: nakon spremanja popis kreće ispočetka. Spremljena datoteka zadržava sve.

## Zašto vaša promjena mijenja samo jedan element

Izvoznici štede prostor dijeleći podatke. Jedan skup svojstava može dijeliti dvadeset vrata, a jedna vrijednost („Vatrootpornost: 60 min“) može biti navedena u devedeset skupova. Kad bi BimCraft jednostavno promijenio dijeljenu vrijednost, svaki element koji je dijeli također bi se promijenio.

Zato BimCraft prije pisanja kopira:

- Ako je skup svojstava koji uređujete dijeljen s drugim elementima, vaš element dobiva vlastitu kopiju skupa, a mijenja se samo kopija.
- Ako je vrijednost dijeljena s drugim skupovima, vaš skup dobiva vlastitu kopiju vrijednosti.

Ostali elementi zadržavaju stare podatke. Ovo se zove *copy-on-write*. Dodaje nekoliko malih unosa u datoteku, koje svaki IFC program normalno čita.

**Svojstva tipa namjerno su iznimka.** Skup označen „(tip)“ pripada tipu elementa, a u IFC-u svaki element tog tipa čita ga odatle. Promjena mijenja tip, pa svaki element tipa prikazuje novu vrijednost. Odjeljak {{ui:Promjene}} označava takve promjene s „(tip)“. Vidi [Promjena svojstva tipa za sve elemente tog tipa](topic:type-vs-instance).

## Upozorenja prije gubitka rada

- Otvaranje druge datoteke dok imate nespremljene promjene pita „Imate *n* nespremljenih promjena u *datoteci*. Odbaciti ih?“ Kliknite Odustani da nastavite raditi, zatim spremite.
- Zatvaranje ili ponovno učitavanje kartice s nespremljenim promjenama tjera preglednik da pita želite li otići.

## Česte pogreške

- **Upisivanje jedinica.** `2400 mm` se odbija. Upišite `2400`.
- **Promjena svojstva tipa kad ste mislili na jedan element.** Potražite napomenu „(tip)“ prije upisivanja. Ako želite da se jedan element razlikuje, promijenite svojstvo primjerka ili njegovu oznaku ili naziv.
- **Očekivanje da će se izvorna datoteka promijeniti.** Spremanje uvijek preuzima novu datoteku. Zamijenite izvornu sami ako to želite, i zadržite kopiju.
- **Pritiskanje {{key:Mod+S}} bez promjena.** BimCraft sprema samo kad ima što spremiti; inače se može otvoriti vlastiti „Spremi stranicu“ preglednika. Zatvorite ga.
- **Dvostruko spremanje i očekivanje dviju malih datoteka.** Svako spremanje sadrži svaku promjenu od otvaranja modela.
- **Očekivanje da se promjene vrate u projektnu datoteku.** BimCraft zapisuje samo IFC. Uvezite uređeni IFC u svoj program za izradu kao što uvozite bilo koji IFC.
