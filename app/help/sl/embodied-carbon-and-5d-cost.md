---
title: Vgrajeni ogljik in stroški na 4D urniku
summary: Seštejte vgrajeni ogljik modela iz odprte, urejljive tabele faktorjev ter razporedite cene po 4D urniku v krivuljo stroškov in denarnega toka. Oboje začne z vrednostmi, ki jih vnesete ali uvozite.
keywords: vgrajeni ogljik, ogljik, co2, kgco2e, emisije, tabela faktorjev, epd, 5d, stroški, denarni tok, S-krivulja, stroški urnika, cene, cene predizmer
from: 83e82840
---

## Vgrajeni ogljik

Odprite podokno **Ogljik**. Količina vsakega elementa (prostornina, površina ali dolžina) se pomnoži s faktorjem iz tabele po modulu življenjskega cikla: faza izdelka je obvezna, prevoz in odpadki sta neobvezna. Vsote so po materialu, razredu in etaži ter na kvadratni meter tlorisne površine.

**Tabela faktorjev je vaša.** Vrstice, ki so priložene programu BimCraft, so splošne začetne vrednosti pravega velikostnega reda. Niso iz baze podatkov, označene so kot nepreverjene in jih morate zamenjati z virom, ki ga uporabljate (EPD, nacionalna baza ali podatki vašega podjetja). Vrstice uredite v podoknu ali pa tabelo uvozite in izvozite kot CSV ali JSON. Dodane vrstice prepišejo začetno vrstico z istim id-jem. Tabela se shrani v model.

Elementi brez ujemanja ali brez količine so našteti med **Težave** in se ne štejejo kot nič.

## Stroški na 4D urniku

Odprite podokno **Stroški** ob 4D urniku. Vnesite cene (vpišite jih, uvozite CSV ali JSON ali prenesite postavke programa TakeoffCraft), vsako ceno povežite z materiali modela s ključnimi besedami, podokno pa bo ocenilo vse elemente vsake naloge. Strošek naloge je razporejen med njen začetni in končni dan (enakomerno ali z obremenitvijo na začetku ali na koncu), podokno pa nariše kumulativno krivuljo denarnega toka po dnevih, tednih ali mesecih, s stroški po fazi in paketu ter s primerjavo načrtovanega in zgrajenega na določen datum. Izvoz v CSV. Nič ni ocenjeno, dokler ne vnesete cen; nobena cena ni priložena.

## Valuta

Cenik lahko navede, v kateri valuti so cene (tri črke, na primer USD ali EUR). Podokno 5D ima za to polje; shrani se v datoteko skupaj s cenami, izvozi JSON pa jo vsebujejo. Tabela, narejena prej, ali tabela, kjer ste polje pustili prazno, nima valute: njeni stroški so prikazani v USD, privzeti valuti programa, podokno in tekoči seštevki to tudi povedo. Med valutami se nič ne pretvarja.
