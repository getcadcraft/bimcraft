---
title: Sprehodite ljudi po stavbi
summary: Evakuacija ali običajni prihodi ljudi skozi vaše prostore, vrata in stopnišča, s čakalnimi vrstami tam, kjer se stavba zoži, najdaljšo potjo do izhoda iz vsakega prostora in ugotovitvami kot Težave. Grob model množice za načrtovalske odločitve, ne potrdilo o požarni varnosti.
keywords: ljudje, evakuacija, izhod, pobeg, pot do izhoda, čakalna vrsta, množica, tok, širina vrat, stopnišča, prihodi, ozko grlo, simulacija, uporabniki, pešec, kaj če, blokirana vrata
from: 84aa8920
---

Razdelek {{ui:Ljudje v stavbi}} levega podokna sprehodi ljudi skozi prostore, vrata in stopnišča odprtega modela IFC. V modelu se nič ne spremeni in nič se ne naloži.

:::warning
To je **pomoč pri načrtovanju, ne potrdilo o požarni varnosti**. Ne pozna ognja, dima, panike, razlik v gibljivosti ali tega, kaj od vas zahteva predpis. Meje so vaše: najdaljša pot do izhoda in razpoložljivi čas sta števili, ki ju vnesete sami, nobeno ni privzeto.
:::

## Zaženite

1. Odprite model z zaprtimi prostori in vrati. Vrata, ob katerih je prostor samo na eni strani, so izhod; vrata med dvema prostoroma ju povezujejo; stopnišče povezuje prostore na svojih koncih.
2. Izberite **Evakuacija** (vsi hodijo do izhoda), **Prihodi** (vsi pridejo in gredo do prostora) ali **Izmenjava** (ljudje v prostorih odidejo, medtem ko pride toliko jih), ter površino tal na osebo. Prostori, poimenovani kot hodnik, stopnišče, avla ali stranišče, ne sprejmejo nikogar.
3. Kliknite {{ui:Zaženi}}. Dobite čas, ko je zadnja oseba zunaj (in kdaj sta odšla polovica in devet od desetih), čakalno vrsto pri vsakih vratih in stopnišču, prostor z najdaljšo potjo ter tloris, ki predvaja tek.

## Kaj-če

Označite {{ui:Zaprto}} pri vratih v tabeli in zaženite znova: ljudje najdejo drugo pot ali pa so prostori brez izhoda navedeni kot napake. Vrata, dvakrat širša, izpraznijo prostor veliko prej; tabela kaže, kje so čakalne vrste.

## Kako deluje

Vsak prostor je mreža, zato ljudje hodijo okoli vogalov, ne skozi stene. Hitrost pada, ko se prostor napolni (S = 1.4 (1 − 0.266 D) m/s, D v osebah na m²). Vrata spustijo 1.3 osebe na sekundo skozi vsak meter svoje širine, minus 150 mm na vsaki strani; stopnišče 1.0 in počasnejša hoja. Ljudje čakajo v vrsti po vrstnem redu prihoda. Številka teka ponovi isti tek natančno.

Pomočnik lahko izvede isto: zahtevajte evakuacijo ali najdaljšo pot do izhoda iz vsakega prostora.

## Ljudje v vsakem prostoru

Odprite {{ui:Ljudje v vsakem prostoru}}, da vpišete število za kateri koli prostor. Prazno polje uporabi vrednost površine tal (prikazano sivo); 0 izprazni prostor. Vaša števila se uporabijo za tek in se hranijo v tem brskalniku.

## Protitok na vratih

Pri **Izmenjavi** se ljudje, ki odhajajo, in ljudje, ki prihajajo, srečajo na istih vratih. Ko vrata spustijo nekoga v nasprotno smer tik za zadnjo osebo, obdržijo del svoje hitrosti (tu 0.8; predpostavka, ker objavljene vrednosti se razlikujejo), tabela pa šteje spremembe smeri. Vrata, ki pogosto spreminjajo smer, so navedena pod Težave kot opomba.

## Stopnišča in podesti

Vsak podest stopnišča stane hodca eno sekundo obračanja (predpostavka). Ravno stopnišče nima nobenega; stopnišče v obliki L ali U ga ima enega. Hitrost stopnišča je še vedno odvisna od širine njegovega kraka.

## V pogledu 3D

Označite {{ui:Pokaži ljudi v pogledu 3D}} in hodci se prikažejo kot figure v modelu, obarvane glede na to, kaj počnejo, in se premikajo, ko predvajate tek. V model se ne doda nič.
