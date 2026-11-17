---
title: Tačke za obilježavanje i provjere stvarno izvedenog stanja
summary: Numerišite mjesta koja ekipa obilježava iz modela — centre stubova, krajeve zidova, sidrene vijke, čaure, bilo koji element koji odaberete — zapišite ih za totalnu stanicu, zatim pročitajte izmjerene tačke ekipe nazad i vidite šta odstupa.
keywords: tačke obilježavanja, obilježavanje, totalna stanica, geodetsko snimanje, datoteka tačaka, csv, txt, pnezd, penzd, xyz, sjeverna koordinata, istočna koordinata, kota, stvarno izvedeno, provjera, tolerancija, odstupanje, sidreni vijci, centri stubova, krajevi zidova, čaure, geodetske koordinate, pretvorba karte
from: acea9606
---

Kartica {{ui:Points}} desno pravi tačke koje ekipa obilježava na terenu iz otvorenog modela, i provjerava tačke koje izmjeri poslije.

## Pravljenje tačaka

1. Otvorite IFC model i karticu {{ui:Points}}.
2. Označite šta da se obilježi: **centri stubova** (podnožje centralne linije svakog stuba), **krajevi zidova** (oba kraja ose svakog zida, na njegovoj bazi), **sidreni vijci**, **čaure** (elementi čiji naziv ili tip kaže čaura) i **odabrani elementi** (svaki u tački postavljanja; prvo ih odaberite u pregledu).
3. Odaberite prvi broj i prefiks, koordinate, jedinice, kolone i datoteku:
   - **Model**: sopstvene koordinate datoteke. **Geodetska mreža**: mrežne koordinate georeferenciranja modela (prikazuje se samo kada IFC ima pretvorbu karte), u metrima ili jedinici koju odaberete.
   - Kolone **PNEZD** (tačka, sjever, istok, kota, opis), **PENZD** ili **XYZ**; **CSV** (zarezi) ili **TXT** (tabulatori).
4. Pritisnite {{ui:Make points}}: spisak ih prikazuje, a pregled ih označava plavom bojom. {{ui:Download the points}} upisuje datoteku.

Tačke dolaze u fiksnom redoslijedu — po vrsti, pa u redovima preko plana — pa ponovno pravljenje iz istog modela daje iste brojeve. Datoteka je ona koju otvara CivilCraft i koju piše EXPORTPOINTS iz CadCraft-a: jedna tačka po redu, tri decimale, opis u navodnicima kada sadrži zarez.

## Provjera stvarno izvedenih tačaka

Kada ekipa pošalje ono što je izmjerila, izaberite **toleranciju** u milimetrima i način sparivanja tačaka — po **broju tačke** (sačuvali su vaše brojeve) ili po **najbližem mjerenju** — i pritisnite {{ui:Read as-built points…}}. Pročitajte datoteku u istim jedinicama i koordinatama u kojima ste je upisali.

Svaka projektovana tačka je zatim **unutar** tolerancije, **van** nje, **nije izmjerena**, a svako mjerenje koje niko nije tražio je **dodatno**. Tabela daje razlike u jedinici koju izaberete na traci alata, stope prikazane kao decimalne inče (stvarno izvedeno minus projektovano: istok, sjever, visina i udaljenost u planu). Pregled označava svaku tačku zelenom ili crvenom bojom, sa linijom do mjerenja, a sivom kada nije izmjerena. {{ui:Report (CSV)}} upisuje cijelo poređenje.

Ništa ovdje ne mijenja model. Još nije urađeno: obilježavanje sa ivica ploče, presjeka rastera ili otvora koje pravi za vas, i slanje tačaka direktno instrumentu; koristite datoteku.
