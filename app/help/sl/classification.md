---
title: Klasifikacijske šifre (Uniclass, OmniClass, UniFormat)
summary: Dajte vsakemu elementu in tipu klasifikacijsko šifro, izberite, katere sisteme projekt uporablja, iščite po tabelah Uniclass, ki so priložene aplikaciji, naložite lastne licencirane tabele pisarne in prikažite šifre v razpredelnicah. Šifre se zapišejo v datoteko IFC za drugo programsko opremo.
keywords: klasifikacija, razvrščanje, šifra, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabela, šifra elementa, šifra tipa, privzeta šifra, IfcClassification, IfcClassificationReference, cobie, stolpec razpredelnice, csv, licenca, license
from: 222b94cd
---

## Kaj boste naredili

Dajte klasifikacijsko šifro stenam, tlom, streham, vratom, oknom in vsemu drugemu v modelu, v največ treh sistemih hkrati: Uniclass, OmniClass in UniFormat. Druge discipline in drugi programi se zanašajo na šifro, ne na ime, zato se šifre shranijo v datoteko IFC kot klasifikacijske reference, ki jih bere vsak program BIM.

## Dodelitev šifre elementu

1. Izberite element (ali več) in odprite **Lastnosti**. Odprite razdelek {{ui:Classification}}.
2. Vpišite šifro v polje njenega sistema in pritisnite Enter. Ko je seznam šifer naložen, vpišite del šifre ali nekaj besed („zavesna stena“) in izberite med zadetki: naslov šifre se izpolni namesto vas.
3. {{ui:Applies to}} pove, kam gre šifra: **Ta element** ali **Njegov tip (vsak element tipa)**. Šifra na tipu stene velja za vsako steno tega tipa, tudi za tiste, ki jih narišete pozneje.
4. {{ui:Clear}} šifro odstrani.

Pod vsako šifro razdelek pove, od kod prihaja: nastavljena na tem elementu, iz njegovega tipa ali projektna privzeta za njegov razred. Lastna šifra elementa vedno prevlada nad šifro tipa, šifra tipa pa nad privzeto. Če izberete več elementov, polje z oznako „varies“ pomeni, da si ne delijo ene šifre; če vpišete eno, jo dobijo vsi. Vsaka sprememba je en korak razveljavitve.

Šifro lahko vedno vpišete, ne glede na to, ali je seznam naložen. Če ne izgleda kot šifra tega sistema ali je ni v naloženem seznamu, opomba to pove in šifra ostane tako, kot ste jo vpisali.

## Izbira sistemov projekta

Na vrstici modela odprite **Podatki** in izberite {{ui:Classification}} (ali {{ui:Project classification…}} v razdelku Lastnosti).

- Označite sisteme, ki jih projekt uporablja. Lastnosti nato prikažejo samo te.
- **Uniclass**: tabele Elementi/funkcije (EF), Sistemi (Ss) in Izdelki (Pr) so priložene aplikaciji. So © NBS, licencirane z Creative Commons Attribution-NoDerivatives 4.0 in se prenašajo nespremenjene. Pogovorno okno prikaže izdajo vsake tabele in dan, ko je bila prebrana. Niso najnovejše: založnik vsako četrtletje izda nove na svoji spletni strani.
- **OmniClass** in **UniFormat**: aplikaciji ni priložen noben seznam šifer, ker založnik ne dovoli prenosa tabel brez licence. Vpišite poljubno šifro ali naložite licencirano tabelo svoje pisarne.
- {{ui:Load a table (CSV)…}} prebere tabelo pisarne iz datoteke CSV s stolpcem šifer in stolpcem naslovov (glavo z imenom Code, Number ali Identifier ter Title, Name ali Description najde sama; brez nje se uporabita prva dva stolpca). Tabela ostane v tem brskalniku in se nikoli ne shrani v projektno datoteko. V datoteko se shranijo samo šifre, ki ste jih dodelili. Novejšo tabelo Uniclass lahko naložite na enak način.
- {{ui:Give elements a default code by their class}} vsaki steni, plošči, strehi, vratom, oknu, stopnišču, rampi, stebru, nosilcu in kosu pohištva da začetno šifro Uniclass iz tabele Elementi/funkcije, kadar nima lastne. Elementi, ki jih narišete pozneje, jo dobijo prav tako.
- {{ui:Show the codes as columns in the schedules}} doda en stolpec za vsak sistem v razpredelnice Vrata, Okna, Stene po tipu in Prostori ter v njihov CSV. Vrstica z več elementi pokaže „varies“, kadar se njihove šifre razlikujejo.

## Dobro je vedeti

- Privzete šifre so začetna izbira programa CadCraft, ne založnika, in jih strokovnjak ni preveril. Preverite jih glede na standard vašega projekta.
- V datoteki je privzeta šifra prava klasifikacija, označena z imenom relacije „CadCraft default“, in odstrani se, takoj ko element ali njegov tip dobi lastno šifro.
- Šifre, ki jih je uvožena datoteka že imela, so prebrane in prikazane, ne glede na to, kako je drug program poimenoval sistem. Šifre drugih sistemov (lastne šifre pisarne) so izpisane in pustene pri miru.
- Šifre se preberejo, ko datoteko znova odprete, tukaj ali v drugem programu. Prenesejo se tudi v izvoz IFC5 alfa (IFCX), kadar je ta laboratorijska možnost vklopljena, razen šifre, nastavljene na strehi.
- Še ni izdelano: drevo za pregledovanje tabele po ravneh, šifre na etažah in prostorih kot projektne privzete vrednosti ter preverjanje šifre glede na izdajo, navedeno v datoteki.
