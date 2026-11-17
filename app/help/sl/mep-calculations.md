---
title: Dimenzioniranje cevi in zračnih kanalov, preverjanje zapolnjenosti kablov in osvetlitve
summary: Preverite dimenzije dovodnih cevi in zračnih kanalov s padcem tlaka, vodite kable po kabelskih kanalih in instalacijskih ceveh ter preverite njihovo zapolnjenost, in izračunajte osvetljenost prostorov iz datotek IES ali EULUMDAT. Privzete vrednosti so označene; vnesite vrednosti veljavnega predpisa.
keywords: dimenzioniranje, dimenzioniranje cevi, dimenzioniranje zračnih kanalov, padec tlaka, enote armatur, potreba, hunter, hazen-williams, hitrost, trenje, enako trenje, tlak ventilatorja, loputa, kritična pot, kabelski kanal, instalacijska cev, zapolnjenost, razpored kablov, ies, ldt, eulumdat, fotometrija, osvetljenost, lux, enakomernost, izračun osvetlitve, gostota moči, mep, izračuni, težave
from: 9cb90815
---

## Kaj boste naredili

Narišite cevi, zračne kanale, kabelske kanale in instalacijske cevi kot običajno, nato odprite podokno **Izračuni**. Vsak zavihek prebere model, prikaže tabelo in navede, kaj ni v redu, kot {{ui:Težave}} v podoknu ⚠. Kadar bi velikost odpravila težavo, **{{ui:Uporabi velikosti}}** spremeni odseke v enem koraku razveljavitve.

To so pripomočki za risanje. Vsaka privzeta vrednost je na zaslonu označena, nobena pa ni tabela predpisa: vnesite številke iz standarda, po katerem načrtujete, in rezultat naj pregleda inženir, ki zanj odgovarja.

## Cevi

1. Izberite ključ **sistema** (hladna voda je `cw`, topla voda `hw`).
2. Nastavite največjo hitrost in, če želite preveriti tlak, tlak na viru ter najmanjši tlak, ki ga potrebuje armatura.
3. Kliknite {{ui:Preveri}}.

Vsaka cev nosi potrebo enot armatur pod seboj. Potreba prihaja iz krivulje enot armatur proti pretoku, na način, ki ga je opisal Hunter. **Vgrajena krivulja je primer, ne tabela predpisa**; težave to povedo, dokler ne vnesete svoje. Trenje je Hazen–Williams, fitingi so koeficienti izgube, dvig pa stane 9.8 kPa na meter. Enote armature so odvisne od njene vrste ali od številke, ki jo nastavite z orodjem pomočnika `loads_set`.

## Zračni kanali

Nastavite sistem, stopnjo trenja (enako trenje) ali hitrost ter morebitno izgubo grelnika, filtra ali dušilnika. Končne enote prevzamejo svoj zračni pretok iz `loads_set` na difuzorju. Tabela prikazuje hitrost in trenje za vsak kos, **tlak ventilatorja** na kritični poti in tlak, ki ga mora prevzeti loputa vsake druge končne enote. Izgube fitingov uporabljajo zaokrožene privzete koeficiente, ne bazo fitingov.

## Kabelski kanali in instalacijske cevi

Narišite jih z orodjem Zračni kanal: sistema **Kabelski kanal** in **Instalacijska cev** se shranita kot nosilca kablov, zato jih drugi programi preberejo kot kanale in cevi. Na zavihku Kabli prilepite seznam kablov (oznaka, zunanji premer v mm, število, od, do). `from` in `to` sta oznaka kosa opreme ali točka `x,y,z` v milimetrih. Kabli sledijo najkrajši neprekinjeni poti skozi kanale in cevi; vsak odsek kaže svojo zapolnjenost glede na mejne vrednosti, ki jih vnesete, razpored pa se shrani kot CSV z dolžino, ki vključuje odstotek rezerve, in konca.

## Osvetlitev

Vsaki svetilki dodelite datoteko IES (LM-63) ali EULUMDAT z orodjem pomočnika `photometry_set`. Vnesite ciljne vrednosti, razmik mreže in višino delovne ravnine. Rezultat je samo **neposredna** osvetljenost: brez medsebojnih odbojev in brez senc, zato je v prostoru spodnja meja.

## Sprinklerji za gašenje požara

Dodatek **Sprinklerji za gašenje požara** ima svoj zavihek; glejte njegovo pomoč.
