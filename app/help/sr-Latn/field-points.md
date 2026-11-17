---
title: Tačke za obeležavanje i provere izvedenog stanja
summary: Numerišite mesta koja ekipa obeležava na osnovu modela — centre stubova, krajeve zidova, ankerne zavrtnje, hilzne, bilo koji element koji izaberete — upišite ih za totalnu stanicu, pa pročitajte izmerene tačke izvedenog stanja i vidite šta odstupa.
keywords: tačke obeležavanja, obeležavanje, totalna stanica, geodetsko snimanje, datoteka tačaka, csv, txt, pnezd, penzd, xyz, sever, istok, kota, izvedeno stanje, provera, tolerancija, odstupanje, ankerni zavrtnji, centri stubova, krajevi zidova, hilzne, koordinate snimanja, konverzija mape
from: acea9606
---

Kartica {{ui:Tačke}} desno pravi tačke koje ekipa obeležava na terenu iz otvorenog modela, i proverava tačke koje ona izmeri posle.

## Pravljenje tačaka

1. Otvorite IFC model i karticu {{ui:Tačke}}.
2. Označite šta se obeležava: **centri stubova** (podnožje centralne linije svakog stuba), **krajevi zidova** (oba kraja ose svakog zida, na njegovoj osnovi), **ankerni zavrtnji**, **hilzne** (elementi čiji naziv ili tip sadrži reč sleeve) i **izabrani elementi** (svaki u svojoj tački postavljanja — prvo ih izaberite u pogledu).
3. Izaberite prvi broj i prefiks, koordinate, jedinice, stubove i datoteku:
   - **Model**: sopstvene koordinate datoteke. **Mreža snimanja**: mrežna mreža georeferenciranja modela (prikazana samo kada IFC ima konverziju mape), u metrima ili u jedinici koju izaberete.
   - Stubovi **PNEZD** (tačka, sever, istok, kota, opis), **PENZD** ili **XYZ**; **CSV** (zarezi) ili **TXT** (tabulatori).
4. Pritisnite {{ui:Napravi tačke}}: spisak ih prikazuje, a pogled ih obeležava plavo. {{ui:Preuzmi tačke}} upisuje datoteku.

Tačke dolaze u fiksnom redosledu — po vrsti, pa u redovima preko plana — pa ponovno pravljenje iz istog modela daje iste brojeve. Datoteka je ona koju otvara CivilCraft i koju piše EXPORTPOINTS iz CadCraft-a: jedna tačka po redu, tri decimale, opis pod navodnicima kada sadrži zarez.

## Provera tačaka izvedenog stanja

Kada ekipa pošalje ono što je izmerila, izaberite **toleranciju** u milimetrima i način uparivanja tačaka — po **broju tačke** (sačuvali su vaše brojeve) ili po **najbližem snimku** — pa pritisnite {{ui:Očitaj tačke izvedenog stanja…}}. Pročitajte datoteku u istim jedinicama i koordinatama u kojima ste je napisali.

Svaka projektna tačka je zatim **unutar** tolerancije, **van nje**, **nije izmerena**, a svaki snimak koji niko nije tražio je **dodatan**. Tabela daje razlike u jedinici koju izaberete na traci iznad, a stope se prikazuju kao decimalni inči (izvedeno minus projektovano: istok, sever, visina i rastojanje u planu). Pogled obeležava svaku tačku zeleno ili crveno, sa linijom do snimka, a sivo kada nije izmerena. {{ui:Izveštaj (CSV)}} upisuje celo poređenje.

Ništa ovde ne menja model. Još nije urađeno: obeležavanje od ivica ploča, preseka mreže ili otvora napravljenih za vas, i slanje tačaka instrumentu direktno — za to koristite datoteku.
