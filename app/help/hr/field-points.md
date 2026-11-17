---
title: Točke za iskolčenje i provjere izvedenog stanja
summary: Numerirajte mjesta koja ekipa iskolčuje iz modela (središta stupova, krajeve zidova, sidrene vijke, čahure, bilo koji element koji odaberete), zapišite ih za totalnu stanicu, zatim očitajte izmjerene točke ekipe i vidite što odstupa.
keywords: točke za iskolčenje, iskolčenje, iskolčiti, totalna stanica, geodezija, datoteka točaka, csv, txt, pnezd, penzd, xyz, sjever, istok, kota, izvedeno stanje, provjera, tolerancija, odstupanje, sidreni vijci, središta stupova, krajevi zidova, čahure, geodetske koordinate, kartografska pretvorba
from: acea9606
---

Kartica {{ui:Točke}} s desne strane izrađuje točke koje ekipa iskolčuje na gradilištu iz otvorenog modela i provjerava točke koje izmjeri poslije.

## Izrada točaka

1. Otvorite IFC model i karticu {{ui:Točke}}.
2. Označite što iskolčujete: **središta stupova** (podnožje osi svakog stupa), **krajeve zidova** (oba kraja osi svakog zida, pri dnu), **sidrene vijke**, **čahure** (elementi čiji naziv ili vrsta kaže čahura) i **odabrane elemente** (svaki u točki postavljanja; prvo ih odaberite u prikazu).
3. Izaberite prvi broj i prefiks, koordinate, jedinice, stupce i datoteku:
   - **Model**: vlastite koordinate datoteke. **Geodetska mreža**: mreža karte georeferenciranja modela (prikazuje se samo kad IFC ima kartografsku pretvorbu), u metrima ili jedinici koju odaberete.
   - Stupci **PNEZD** (točka, sjever, istok, kota, opis), **PENZD** ili **XYZ**; **CSV** (zarezi) ili **TXT** (tabulatori).
4. Pritisnite {{ui:Izradi točke}}: popis ih prikazuje, a prikaz ih označava plavo. {{ui:Preuzmi točke}} zapisuje datoteku.

Točke dolaze u fiksnom redoslijedu (po vrsti, pa u redovima po tlocrtu), pa ponovna izrada iz istog modela daje iste brojeve. Datoteka je ona koju CivilCraft otvara i koju zapisuje CadCraftova naredba EXPORTPOINTS: jedna točka po retku, tri decimale, opis u navodnicima kad sadrži zarez.

## Provjera izvedenih točaka

Kad ekipa pošalje što je izmjerila, izaberite **toleranciju** u milimetrima i kako uparivati točke (po **broju točke**, jer su zadržali vaše brojeve, ili po **najbližem mjerenju**) i pritisnite {{ui:Učitaj točke izvedenog stanja…}}. Datoteku čitajte u istim jedinicama i koordinatama u kojima ste je zapisali.

Svaka projektirana točka tada je **unutar** tolerancije, **izvan** nje, **nije izmjerena**, a svako mjerenje koje nitko nije tražio je **dodatno**. Tablica daje razlike u jedinici koju odaberete u traci alata, a stope se prikazuju kao decimalni in (izvedeno minus projektirano: istok, sjever, visina i udaljenost u tlocrtu). Prikaz označava svaku točku zeleno ili crveno, s linijom do mjerenja, a sivo kad nije izmjerena. {{ui:Izvješće (CSV)}} zapisuje cijelu usporedbu.

Ništa ovdje ne mijenja model. Još nije izrađeno: iskolčenje s rubova ploča, sjecišta mreže ili otvora izrađenih za vas, te slanje točaka izravno instrumentu; koristite datoteku.
