---
title: Spreminjanje lastnosti IFC in shranjevanje urejene kopije
summary: Spremenite ime elementa, oznako, opis ali vrednost lastnosti, razveljavite spremembe in prenesite novo datoteko IFC, medtem ko izvirnik ostane nespremenjen.
keywords: urejanje, spreminjanje, lastnosti, parametri, oznaka, ime, preimenovanje, oznaka elementa, shrani kot, prenos, razveljavi, kopiraj, ifc, zapis
from: f8035d62
---

## Kaj boste naredili

Popravite podatke v modelu IFC: preimenujte element, popravite njegovo oznako, spremenite vrednost lastnosti. Nato shranite novo datoteko IFC s svojimi spremembami. Datoteka, ki ste jo odprli, se nikoli ne spremeni.

## Kaj lahko spremenite

| Polje | Urejljivo |
|---|---|
| Ime, Vrsta objekta, Oznaka, Opis | Da |
| Posamezne vrednosti lastnosti (besedilo, števila, Da/Ne) | Da |
| Lastnosti tipa (nabori, označeni z „(type)“) | Da, in sprememba velja za vsak element tega tipa |
| Tip, GlobalId, Vrstica v datoteki | Ne |
| Količine (dolžine, površine, prostornine, števila) | Ne |
| Seznami, nabori vrednosti in druge vrednosti z več deli | Ne |
| Geometrija, položaj, dodajanje ali brisanje elementov | Ne |

## Koraki

1. Odprite model IFC in kliknite element, ki ga želite spremeniti.
2. V podoknu {{ui:Lastnosti}} kliknite vrednost, ki jo želite spremeniti. Spremeni se v polje za besedilo. Prazna vrednost je prikazana kot *prazno*.
3. Vpišite novo vrednost.
4. Pritisnite {{key:Enter}} ali kliknite nekam drugam, da jo obdržite. {{key:Esc}} prekliče.
5. Poglejte vrednost: zdaj je krepka z modro črto ob njej, ki označuje urejeno vrednost.
6. Poglejte razdelek {{ui:Spremembe}} na levi: sprememba je navedena kot *element*: *polje*, stara vrednost v novo vrednost.
7. Ponovite za druge vrednosti ali druge elemente.
8. Kliknite {{ui:Shrani kot IFC}} (prikaže, koliko sprememb čaka, na primer »Shrani kot IFC (3)«) ali pritisnite {{key:Mod+S}}.
9. V mapi za prenose poiščite »*izvirno ime* (edited).ifc«.

## Kaj bi morali videti

Vrstica stanja pravi »Shranjeno *ime* (edited).ifc z *n* spremembami (… bajtov). Vaša izvirna datoteka je nespremenjena.« Seznam {{ui:Spremembe}} se izprazni, pripravljen za naslednji krog.

## Vrste vrednosti

- **Besedilo**: vse, kar vpišete, se ohrani tako, kot je. Če izbrišete Ime, Vrsto objekta, Oznako ali Opis, se vrednost odstrani.
- **Števila**: vpišite navadno število, na primer `2.4` ali `1200`, v lastnih enotah datoteke. Brez oznak enot. Vse drugo pokaže »Vnesite število.«
- **Cela števila** (števila, cela števila): »Vnesite celo število.«, če vpišete decimalno število.
- **Da/Ne**: vrednost postane meni z Da in Ne.

Vsaka vrednost ohrani svoj tip IFC, zato število ostane število in drugi programi ga pravilno berejo.

## Razveljavitev

1. Kliknite {{ui:Razveljavi}} v razdelku {{ui:Spremembe}} ali pritisnite {{key:Mod+Z}}, medtem ko ne pišete v polje.
2. Ponovite, da razveljavite več. Vsaka razveljavitev odstrani najnovejšo spremembo.

Ne morete razveljaviti čez shranjevanje: po shranjevanju se seznam začne znova. Shranjena datoteka ohrani vse.

## Zakaj vaše urejanje spremeni samo en element

Izvozniki prihranijo prostor z deljenjem podatkov. En nabor lastnosti lahko deli dvajset vrat, ena vrednost (»požarna odpornost: 60 min«) pa je lahko navedena v devetdesetih naborih. Če bi BimCraft preprosto spremenil deljeno vrednost, bi se vsak element, ki jo deli, spremenil tudi.

Zato BimCraft pred zapisom kopira:

- Če nabor lastnosti, ki ga urejate, deli tudi drugi element, dobi vaš element svojo kopijo nabora, spremeni pa se samo kopija.
- Če je vrednost deljena z drugimi nabori, dobi vaš nabor svojo kopijo vrednosti.

Sosedje ohranijo svoje stare podatke. To se imenuje *kopiraj ob zapisu* (copy-on-write). Datoteki doda nekaj majhnih vnosov, ki jih vsi programi IFC berejo normalno.

**Lastnosti tipa so izjema, namenoma.** Nabor, označen z »(type)«, pripada tipu elementa, v IFC pa vsak element tega tipa bere iz tam. Spreminjanje spremeni tip, zato vsak element tipa prikaže novo vrednost. Seznam {{ui:Spremembe}} takšne spremembe označi z »(type)«. Glejte [Spreminjanje lastnosti tipa za vsak element tipa](topic:type-vs-instance).

## Opozorila pred izgubo dela

- Odpiranje druge datoteke, ko imate neshranjene spremembe, vpraša »Imate *n* neshranjenih sprememb v *datoteka*. Jih zavrzi?« Kliknite Prekliči, da nadaljujete z delom, nato shranite.
- Zapiranje ali ponovno nalaganje zavihka z neshranjenimi spremembami sprašuje brskalnik, ali naj zapusti stran.

## Pogoste napake

- **Vpisovanje enot.** `2400 mm` je zavrnjeno. Vpišite `2400`.
- **Spreminjanje lastnosti tipa, ko ste mislili na en element.** Preden vpišete, poiščite opombo »(type)«. Če želite, da se en element razlikuje, spremenite lastnost primerka ali njegovo Oznako ali Ime.
- **Pričakovanje, da se izvirna datoteka spremeni.** Shranjevanje vedno prenese novo datoteko. Če želite, zamenjajte izvirnik sami in hranite kopijo.
- **Pritisk na {{key:Mod+S}} brez sprememb.** BimCraft shranjuje samo, ko je kaj za shranjevanje; sicer se lahko odpre brskalnikovo »Shrani stran«. Zaprite ga.
- **Dvakratno shranjevanje in pričakovanje dveh majhnih datotek.** Vsako shranjevanje vsebuje vsa urejanja od odprtja modela.
- **Pričakovanje, da se urejanja vrnejo v projektno datoteko.** BimCraft zapisuje samo IFC. Urejeni IFC uvozite v svoj program za modeliranje, kot uvozite kateri koli IFC.
