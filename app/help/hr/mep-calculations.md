---
title: Dimenzioniranje cijevi i kanala, provjera ispune kabela i rasvjete
summary: Provjerite dimenzije dovodnih cijevi i kanala s padom tlaka, provedite kabele kroz kabelske ladice i instalacijske cijevi te pogledajte njihovu ispunu, i izračunajte osvijetljenost prostorija iz IES ili EULUMDAT datoteka. Zadane vrijednosti su označene; upišite vrijednosti važećeg propisa.
keywords: dimenzioniranje, dimenzioniranje cijevi, dimenzioniranje kanala, pad tlaka, jedinice opterećenja, potražnja, hunter, hazen-williams, brzina, trenje, jednako trenje, tlak ventilatora, zaklopka, kritični put, kabelska ladica, instalacijska cijev, ispuna, raspored kabela, ies, ldt, eulumdat, fotometrija, osvijetljenost, lux, jednolikost, proračun rasvjete, gustoća snage, mep, proračuni, problemi
from: 9cb90815
---

## Što ćete učiniti

Nacrtajte cijevi, kanale, kabelske ladice i instalacijske cijevi kao i obično, zatim otvorite okno **Proračuni**. Svaka kartica čita model, prikazuje tablicu i navodi što nije u redu kao {{ui:Problemi}} u panelu ⚠. Kad bi dimenzija riješila problem, **Primijeni dimenzije** mijenja dionice u jednom koraku {{ui:Poništi}}.

Ovo su pomoćna sredstva za crtanje. Svaka zadana vrijednost označena je na zaslonu, a nijedna nije tablica propisa: upišite brojke iz norme po kojoj projektirate i neka rezultat pregleda inženjer koji za njega odgovara.

## Cijevi

1. Odaberite ključ **sustava** (hladna voda je `cw`, topla voda `hw`).
2. Postavite najveću brzinu i, ako želite provjeru tlaka, tlak na izvoru i najmanji tlak koji je potreban armaturi.
3. Kliknite {{ui:Provjeri}}.

Svaka cijev nosi potražnju jedinica opterećenja armatura ispod nje. Potražnja dolazi iz krivulje jedinica opterećenja prema protoku, na način koji je opisao Hunter. **Ugrađena krivulja je primjer, a ne tablica propisa**; Problemi to kažu dok ne upišete svoju. Trenje je Hazen–Williams, spojni komadi imaju koeficijente gubitka, a uspon košta 9.8 kPa po metru. Jedinice armature dolaze iz njezine vrste ili iz broja koji postavite pomoćnim alatom `loads_set`.

## Kanali

Postavite sustav, stopu trenja (jednako trenje) ili brzinu te gubitak svakog grijača, filtra ili prigušivača. Krajnji priključci uzimaju protok zraka iz `loads_set` na difuzoru. Tablica prikazuje brzinu i trenje po dijelu, **tlak ventilatora** na kritičnom putu te tlak koji zaklopka svakog drugog krajnjeg priključka mora preuzeti. Gubici spojnica koriste zaokružene zadane koeficijente, a ne bazu podataka spojnica.

## Kabelske ladice i instalacijske cijevi

Nacrtajte ih alatom {{ui:Zračni kanal}}: sustavi **Kabelska ladica** i **Instalacijska cijev** spremaju se kao nosači kabela, pa ih drugi programi čitaju kao ladice i cijevi. Na kartici Kabeli zalijepite popis kabela (oznaka, vanjski promjer u mm, broj, od, do). `from` i `to` su oznaka opreme ili točka `x,y,z` u milimetrima. Kabeli slijede najkraći neprekinuti put kroz ladice i cijevi; svaka dionica prikazuje svoju ispunu u odnosu na granice koje upišete, a raspored se sprema kao CSV s duljinom koja uključuje postotak rezerve te krajeve.

## Rasvjeta

Svakoj svjetiljci dodijelite njezinu IES (LM-63) ili EULUMDAT datoteku pomoćnim alatom `photometry_set`. Upišite ciljeve, razmak mreže i visinu radne ravnine. Rezultat je samo **izravna** osvijetljenost: nema međusobne refleksije ni sjena, pa je u prostoriji ona donja granica.

## Vatrogasni sprinkleri

Dodatak **Vatrogasni sprinkleri** ima svoju karticu; pogledajte njegovu pomoć.
