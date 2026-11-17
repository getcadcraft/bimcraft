---
title: Dimenzioniraj cijevi i zračne kanale, provjeri popunjenost kablova i osvjetljenje
summary: Provjeri dimenzije cijevi za dovod vode i zračnih kanala s padom pritiska, provedi kablove kroz kablovske kanale i instalacijske cijevi i vidi njihovu popunjenost, i izračunaj osvjetljenost u prostorijama iz IES ili EULUMDAT fajlova. Zadane vrijednosti su označene; upiši vrijednosti važećeg propisa.
keywords: dimenzioniranje, dimenzioniranje cijevi, dimenzioniranje zračnih kanala, pad pritiska, jedinice armature, potražnja, Hunter, Hazen-Williams, brzina, trenje, jednako trenje, pritisak ventilatora, prigušivač, kritična putanja, kablovski kanal, instalacijska cijev, popunjenost, specifikacija kablova, ies, ldt, eulumdat, fotometrija, osvjetljenost, lux, ujednačenost, proračun osvjetljenja, gustina snage, mep, proračuni, problemi
from: 9cb90815
---

## Šta ćeš uraditi

Nacrtaj cijevi, zračne kanale, kablovske kanale i instalacijske cijevi kao i obično, zatim otvori okno **Proračuni**. Svaka kartica čita model, prikazuje tabelu i navodi šta nije u redu kao Probleme u panelu ⚠. Kad bi dimenzija riješila Problem, **Primijeni dimenzije** mijenja trase u jednom koraku poništavanja.

Ovo su pomoćna sredstva za crtanje. Svaka zadana vrijednost je označena na ekranu, a nijedna nije tabela propisa: upiši brojeve iz standarda po kojem projektuješ i neka rezultat pregleda inženjer koji za njega odgovara.

## Cijevi

1. Izaberi ključ **sistema** (hladna voda je `cw`, topla `hw`).
2. Postavi najveću brzinu i, ako želiš da se provjeri pritisak, pritisak na izvoru i najmanji pritisak koji armatura treba.
3. Klikni {{ui:Check}}.

Svaka cijev nosi potražnju jedinica armature ispod nje. Potražnja dolazi iz krive jedinica armature naspram protoka, na način koji je opisao Hunter. **Ugrađena kriva je primjer, a ne tabela propisa**; Problemi to kažu dok ne upišeš svoju. Trenje se računa po Hazen–Williamsu, spojni elementi su koeficijenti gubitka, a uspon košta 9.8 kPa po metru. Jedinice armature neke armature dolaze iz njene vrste, ili iz broja koji postaviš alatom asistenta `loads_set`.

## Zračni kanali

Postavi sistem, stopu trenja (jednako trenje) ili brzinu, i gubitak za svaki izmjenjivač, filter ili prigušivač zvuka. Krajnji uređaji uzimaju protok zraka iz `loads_set` na difuzoru. Tabela prikazuje brzinu i trenje po komadu, **pritisak ventilatora** na kritičnoj putanji, i pritisak koji zaklopka svakog drugog krajnjeg uređaja mora preuzeti. Gubici spojnih elemenata koriste zaokružene zadane koeficijente, a ne bazu fitinga.

## Kablovski kanali i instalacijske cijevi

Nacrtaj ih alatom Zračni kanal: sistemi **Kablovski kanal** i **Instalacijska cijev** čuvaju se kao nosači kablova, pa ih drugi programi čitaju kao kanale i cijevi. U kartici Kablovi nalijepi spisak kablova (oznaka, vanjski prečnik u mm, broj, od, do). `od` i `do` su oznaka opreme ili tačka `x,y,z` u milimetrima. Kablovi slijede najkraću neprekidnu trasu kroz kanale i cijevi; svaka trasa pokazuje svoju popunjenost naspram granica koje upišeš, a specifikacija se čuva kao CSV s dužinom koja uključuje procenat rezerve i krajeve.

## Osvjetljenje

Svakoj svjetiljci daj njen IES (LM-63) ili EULUMDAT fajl alatom asistenta `photometry_set`. Upiši ciljeve, razmak mreže i visinu radne površine. Rezultat je samo **direktna** osvjetljenost: nema međureflekcije i nema sjenki, pa je u prostoriji to donja granica.

## Vatrogasni sprinkleri

Dodatak **Vatrogasni sprinkleri** ima svoju karticu; vidi njegovu pomoć.
