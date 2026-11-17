---
title: Dimenzionišite cevi i kanale, proverite popunjenost kablova i osvetljenje
summary: Proverite dimenzije cevi za snabdevanje i kanala sa padom pritiska, provucite kablove kroz kablovske kanalice i instalacione cevi i pogledajte njihovu popunjenost, i izračunajte osvetljenost u prostorijama iz IES ili EULUMDAT datoteka. Podrazumevane vrednosti su označene; unesite vrednosti važećeg propisa.
keywords: dimenzionisanje, dimenzionisanje cevi, dimenzionisanje kanala, pad pritiska, jedinice opterećenja, potražnja, hunter, hazen-williams, brzina, trenje, jednako trenje, pritisak ventilatora, prigušnica, kritična putanja, kablovska kanalica, instalaciona cev, popunjenost, raspored kablova, ies, ldt, eulumdat, fotometrija, osvetljenost, lux, ujednačenost, proračun osvetljenja, gustina snage, mep, proračuni, problemi
from: 9cb90815
---

## Šta ćete uraditi

Nacrtajte cevi, kanale, kablovske kanalice i instalacione cevi kao i obično, zatim otvorite okno **Proračuni**. Svaka kartica čita model, prikazuje tabelu i izlistava šta nije u redu kao Probleme u panelu ⚠. Kada bi veličina rešila Problem, **Primeni dimenzije** menja trase u jednom koraku opozivanja.

Ovo su pomoćna sredstva za crtanje. Svaka podrazumevana vrednost je označena na ekranu i nijedna nije tabela propisa: unesite brojeve iz standarda po kojem projektujete i neka rezultat pregleda inženjer koji za njega odgovara.

## Cevi

1. Izaberite ključ **sistema** (hladna voda je `cw`, topla `hw`).
2. Podesite najveću brzinu i, ako želite proveru pritiska, pritisak na izvoru i najmanji pritisak koji armatura treba.
3. Kliknite {{ui:Proveri}}.

Svaka cev nosi potražnju jedinica opterećenja armatura ispod nje. Potražnja dolazi iz krive jedinica opterećenja u odnosu na protok, na način koji je opisao Hunter. **Ugrađena kriva je primer, a ne tabela propisa**; Problemi to kažu dok ne unesete svoju. Trenje je Hazen–Williams, fitinzi su koeficijenti gubitka, a uspon košta 9.8 kPa po metru. Jedinice armature dolaze iz njene vrste, ili iz broja koji postavite pomoćnim alatom `loads_set`.

## Kanali

Podesite sistem, stopu trenja (jednako trenje) ili brzinu i gubitak svakog kalorifera, filtera ili prigušivača. Krajnji uređaji uzimaju protok vazduha iz `loads_set` na difuzoru. Tabela prikazuje brzinu i trenje po komadu, **pritisak ventilatora** na kritičnoj putanji i pritisak koji prigušnica svakog drugog krajnjeg uređaja mora da preuzme. Gubici fitinga koriste zaokružene podrazumevane koeficijente, a ne bazu fitinga.

## Kablovske kanalice i instalacione cevi

Crtajte ih alatom {{ui:Kanal}}: sistemi **Kablovska kanalica** i **Instalaciona cev** se čuvaju kao nosači kablova, pa ih drugi programi čitaju kao kanalice i cevi. U kartici Kablovi nalepite spisak kablova (oznaka, spoljni prečnik u mm, broj, od, do). `od` i `do` su oznaka komada opreme ili tačka `x,y,z` u milimetrima. Kablovi prate najkraću neprekidnu putanju kroz kanalice i cevi; svaka trasa pokazuje svoju popunjenost u odnosu na granice koje unesete, a raspored se čuva kao CSV sa dužinom koja uključuje procenat rezerve i krajeve.

## Osvetljenje

Dodelite svakoj svetiljci njenu IES (LM-63) ili EULUMDAT datoteku pomoćnim alatom `photometry_set`. Unesite ciljeve, razmak mreže i visinu radne ravni. Rezultat je samo **direktna** osvetljenost: nema međusobne refleksije i nema senki, pa je to donja granica u prostoriji.

## Protivpožarne prskalice

Dodatak **Protivpožarne prskalice** ima svoju karticu; videti njegovu pomoć.
