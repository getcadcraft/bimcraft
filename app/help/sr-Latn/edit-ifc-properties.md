---
title: Promena IFC svojstava i čuvanje izmenjene kopije
summary: Promenite ime, oznaku, opis ili vrednost svojstva elementa, opozovite promenu i preuzmite nov IFC fajl, dok originalni fajl ostaje kakav je bio.
keywords: uređivanje, promena, svojstva, parametri, oznaka, ime, preimenovanje, obeležje, sačuvaj kao, preuzimanje, opozovi, kopija, ifc, upis
from: f8035d62
---

## Šta ćete uraditi

Ispravite podatke u IFC modelu: preimenujte element, popravite njegovu oznaku, promenite vrednost svojstva. Zatim sačuvajte nov IFC fajl sa vašim promenama. Fajl koji ste otvorili se nikada ne menja.

## Šta možete da menjate

| Polje | Može se menjati |
|---|---|
| Ime, Tip objekta, Oznaka, Opis | Da |
| Pojedinačne vrednosti svojstava (tekst, brojevi, Da/Ne) | Da |
| Svojstva tipa (skupovi označeni „(tip)“) | Da, i promena važi za svaki element tog tipa |
| Tip, GlobalId, Linija | Ne |
| Količine (dužine, površine, zapremine, brojevi) | Ne |
| Liste, nabrajanja i druge višedelne vrednosti | Ne |
| Geometrija, položaj, dodavanje ili brisanje elemenata | Ne |

## Koraci

1. Otvorite IFC model i kliknite element koji želite da promenite.
2. Na panelu {{ui:Svojstva}} kliknite vrednost koju želite da promenite. Ona postaje polje za tekst. Prazna vrednost prikazuje se kao *prazno*.
3. Ukucajte novu vrednost.
4. Pritisnite {{key:Enter}}, ili kliknite negde drugde, da je zadržite. Pritisnite {{key:Esc}} da otkažete.
5. Pogledajte vrednost: sada je podebljana, sa plavom linijom pored, što označava izmenjenu vrednost.
6. Pogledajte odeljak {{ui:Izmene}} levo: promena je navedena kao *element*: *polje*, stara vrednost u novu vrednost.
7. Ponovite za druge vrednosti ili druge elemente.
8. Kliknite {{ui:Sačuvaj kao IFC}} (pokazuje koliko promena čeka, na primer „Sačuvaj kao IFC (3)“), ili pritisnite {{key:Mod+S}}.
9. Nađite „*originalno ime* (edited).ifc“ u fascikli za preuzimanja.

## Šta treba da vidite

Statusna linija kaže „Sačuvano *ime* (edited).ifc sa *n* promena (… bajtova). Vaš originalni fajl je nepromenjen.“ Lista {{ui:Izmene}} se prazni, spremna za sledeći krug.

## Vrste vrednosti

- **Tekst**: sve što ukucate čuva se kako jeste. Brisanje polja Ime, Tip objekta, Oznaka ili Opis uklanja vrednost.
- **Brojevi**: ukucajte običan broj, na primer `2.4` ili `1200`, u sopstvenim jedinicama fajla. Bez oznaka jedinica. Sve drugo prikazuje „Unesite broj.“
- **Celi brojevi** (brojevi, celobrojne vrednosti): „Unesite ceo broj.“ ako ukucate decimalni broj.
- **Da/Ne**: vrednost postaje meni sa Da i Ne.

Svaka vrednost zadržava svoj IFC tip, pa broj ostaje broj, a drugi programi ga pravilno čitaju.

## Opoziv

1. Kliknite {{ui:Opozovi}} u odeljku {{ui:Izmene}}, ili pritisnite {{key:Mod+Z}} dok ne kucate u polju.
2. Ponavljajte za opoziv više promena. Svaki opoziv uklanja najnoviju promenu.

Posle čuvanja ne možete opozvati ništa unazad: lista tada kreće ispočetka. Sačuvani fajl zadržava sve.

## Zašto vaša izmena menja samo jedan element

Izvoznici štede prostor deleći podatke. Jedan skup svojstava može biti zajednički za dvadeset vrata, a jedna vrednost („Otpornost na požar: 60 min“) može biti navedena u devedeset skupova. Da je BimCraft jednostavno promenio deljenu vrednost, svaki element koji je deli bi se promenio.

Zato BimCraft pre pisanja pravi kopiju:

- Ako je skup svojstava koji menjate deljen sa drugim elementima, vaš element dobija sopstvenu kopiju skupa, i menja se samo kopija.
- Ako je vrednost deljena sa drugim skupovima, vaš skup dobija sopstvenu kopiju vrednosti.

Susedi zadržavaju stare podatke. Ovo se zove *kopiraj pri pisanju (copy-on-write)*. Dodaje nekoliko malih unosa u fajl, koje svaki IFC program normalno čita.

**Svojstva tipa su namerno izuzetak.** Skup označen „(tip)“ pripada tipu elementa, a u IFC-u svaki element tog tipa to čita odatle. Promena menja tip, pa svaki element tipa prikazuje novu vrednost. Lista {{ui:Izmene}} obeležava takve izmene sa „(tip)“. Vidi [Promena svojstva tipa za svaki element jednog tipa](topic:type-vs-instance).

## Upozorenja pre gubitka rada

- Otvaranje drugog fajla dok imate nesačuvane promene pita „Imate *n* nesačuvanih promena u *fajl*. Odbaciti ih?“ Kliknite Otkaži da nastavite rad, pa sačuvajte.
- Zatvaranje ili ponovno učitavanje kartice sa nesačuvanim promenama tera pregledač da pita da li želi da ode.

## Česte greške

- **Ukucavanje jedinica.** `2400 mm` se odbija. Ukucajte `2400`.
- **Menjanje svojstva tipa kada ste mislili na jedan element.** Potražite napomenu „(tip)“ pre nego što ukucate. Ako želite da se jedan element razlikuje, promenite svojstvo instance ili njegovu Oznaku ili Ime.
- **Očekivanje da se originalni fajl promeni.** Čuvanje uvek preuzima nov fajl. Sami zamenite original ako to želite, i sačuvajte kopiju.
- **Pritisak na {{key:Mod+S}} bez promena.** BimCraft čuva samo kada ima šta da se sačuva; inače se može otvoriti sopstveno „Sačuvaj stranicu“ pregledača. Zatvorite ga.
- **Čuvanje dva puta i očekivanje dva mala fajla.** Svako čuvanje sadrži svaku izmenu od kada ste otvorili model.
- **Očekivanje da se izmene vrate u projektni fajl.** BimCraft piše samo IFC. Uvezite izmenjeni IFC u svoj program za projektovanje kao što uvozite bilo koji IFC.
