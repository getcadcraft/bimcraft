---
title: Promjena IFC svojstava i spašavanje izmijenjene kopije
summary: Promijenite naziv elementa, oznaku, opis ili vrijednost svojstva, poništite promjenu i preuzmite novu IFC datoteku, dok originalna ostaje kakva je bila.
keywords: uređivanje, promjena, svojstva, parametri, oznaka, naziv, preimenovanje, oznaka (mark), spasi kao, preuzimanje, poništi, kopija, ifc, pisanje
from: f8035d62
---

## Šta ćete raditi

Ispravite podatke u IFC modelu: preimenujte element, popravite njegovu oznaku, promijenite vrijednost svojstva. Zatim spasite novu IFC datoteku sa svojim promjenama. Datoteka koju ste otvorili nikada se ne dira.

## Šta možete promijeniti

| Polje | Može se uređivati |
|---|---|
| Naziv, Vrsta objekta, Oznaka, Opis | Da |
| Pojedinačne vrijednosti svojstava (tekst, brojevi, Da/Ne) | Da |
| Svojstva tipa (skupovi označeni sa „(tip)”) | Da, i promjena važi za svaki element tog tipa |
| Tip, GlobalId, Linija | Ne |
| Količine (dužine, površine, zapremine, brojevi) | Ne |
| Liste, nabrajanja i druge vrijednosti sa više dijelova | Ne |
| Geometrija, položaj, dodavanje ili brisanje elemenata | Ne |

## Koraci

1. Otvorite IFC model i kliknite element koji želite promijeniti.
2. U panelu {{ui:Svojstva}} kliknite vrijednost koju želite promijeniti. Ona se pretvara u polje za tekst. Prazna vrijednost prikazuje se kao *prazno*.
3. Upišite novu vrijednost.
4. Pritisnite {{key:Enter}}, ili kliknite negdje drugo, da je zadržite. Pritisnite {{key:Esc}} da otkažete.
5. Pogledajte vrijednost: sada je podebljana, sa plavom trakom pored, što označava izmijenjenu vrijednost.
6. Pogledajte odjeljak {{ui:Promjene}} lijevo: promjena je navedena kao *element*: *polje*, stara vrijednost u novu vrijednost.
7. Ponovite za druge vrijednosti ili druge elemente.
8. Kliknite {{ui:Spasi kao IFC}} (pokazuje koliko promjena čeka, na primjer „Spasi kao IFC (3)”), ili pritisnite {{key:Mod+S}}.
9. Pronađite „*originalni naziv* (edited).ifc” u mapi za preuzimanja.

## Šta treba da vidite

Statusna linija kaže „Spašeno *naziv* (edited).ifc sa *n* promjena (… bajta). Vaša originalna datoteka je nepromijenjena.” Lista {{ui:Promjene}} se prazni, spremna za sljedeći krug.

## Vrste vrijednosti

- **Tekst**: sve što upišete zadržava se kako jeste. Brisanje Naziva, Vrste objekta, Oznake ili Opisa uklanja vrijednost.
- **Brojevi**: upišite običan broj, kao `2.4` ili `1200`, u jedinicama same datoteke. Bez simbola jedinica. Sve drugo prikazuje „Upišite broj.”
- **Cijeli brojevi** (brojevi, cijeli brojevi): „Upišite cijeli broj.” ako upišete decimalni.
- **Da/Ne**: vrijednost postaje meni sa Da i Ne.

Svaka vrijednost zadržava svoj IFC tip, pa broj ostaje broj, a drugi programi ga ispravno čitaju.

## Poništavanje

1. Kliknite {{ui:Poništi}} u odjeljku {{ui:Promjene}}, ili pritisnite {{key:Mod+Z}} dok ne kucate u polju.
2. Ponovite da poništite više. Svako poništavanje uklanja najnoviju promjenu.

Ne možete poništiti dalje od spašavanja: nakon spašavanja lista počinje ispočetka. Spašena datoteka zadržava sve.

## Zašto vaša izmjena mijenja samo jedan element

Izvoznici štede prostor dijeljenjem podataka. Jedan skup svojstava može biti dijeljen sa dvadeset vrata, a jedna vrijednost („Vatrootpornost: 60 min”) može biti navedena u devedeset skupova. Da je BimCraft jednostavno promijenio dijeljenu vrijednost, svaki element koji je dijeli također bi se promijenio.

Zato BimCraft kopira prije pisanja:

- Ako je skup svojstava koji uređujete dijeljen sa drugim elementima, vaš element dobija vlastitu kopiju skupa, i mijenja se samo kopija.
- Ako je vrijednost dijeljena sa drugim skupovima, vaš skup dobija vlastitu kopiju vrijednosti.

Susjedi zadržavaju svoje stare podatke. Ovo se zove *kopiraj-pri-pisanju*. Dodaje nekoliko malih unosa u datoteku, koje svaki IFC program normalno čita.

**Svojstva tipa su namjerni izuzetak.** Skup označen sa „(tip)” pripada tipu elementa, a u IFC-u svaki element tog tipa čita ga odatle. Promjena mijenja tip, pa svaki element tipa prikazuje novu vrijednost. Odjeljak {{ui:Promjene}} označava takve izmjene sa „(tip)”. Vidi [Promjena svojstva tipa za svaki element tipa](topic:type-vs-instance).

## Upozorenja prije gubitka rada

- Otvaranje druge datoteke dok imate nespašene promjene pita „Imate *n* nespašenih promjena u *datoteka*. Odbaciti ih?” Kliknite Otkaži da nastavite rad, pa spasite.
- Zatvaranje ili ponovno učitavanje kartice sa nespašenim promjenama tjera pregledač da pita hoćete li otići.

## Česte greške

- **Kucanje jedinica.** `2400 mm` se odbija. Upišite `2400`.
- **Promjena svojstva tipa kada ste mislili na jedan element.** Potražite napomenu „(tip)” prije kucanja. Ako želite da se jedan element razlikuje, promijenite svojstvo instance, ili njegovu Oznaku ili Naziv.
- **Očekivanje da se originalna datoteka promijeni.** Spašavanje uvijek preuzima novu datoteku. Zamijenite originalnu sami ako to želite, i sačuvajte kopiju.
- **Pritisak na {{key:Mod+S}} bez promjena.** BimCraft spašava samo kada ima šta da se spasi. Inače se može otvoriti vlastiti prozor pregledača „Sačuvaj stranicu”. Zatvorite ga.
- **Spašavanje dva puta i očekivanje dvije male datoteke.** Svako spašavanje sadrži svaku izmjenu od kada ste otvorili model.
- **Očekivanje da se izmjene vrate u datoteku projekta.** BimCraft piše samo IFC. Uvezite izmijenjeni IFC u svoj autorski program na isti način kao bilo koji IFC.
