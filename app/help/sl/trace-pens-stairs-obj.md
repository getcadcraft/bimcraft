---
title: Preriši etažo, nastavi peresa po pogledu, nariši stopnišče iz skice, odpri OBJ
summary: Prikaz druge etaže črtkano pod tlorisom in njena poravnava; dajte stenam, vratom in oknom svoje pero v enem pogledu; narišite hodno črto za stopnišče in odprite mrežo Wavefront OBJ.
keywords: referenca preriša, prosojno, podlaga, pero, debelina črte, tip črte, prepis, stopnišče, skica, podest, OBJ, mreža, uvoz, Wavefront
from: 333ebbde
---

## Preriši etažo

V meniju {{ui:Zgradba}} izberite {{ui:Preriši}}, nato pogled v seznamu: tloris druge etaže, tloris stropa etaže ali oblaček (izrezan na svoj izrez). Njene stene, stebri in plošče se prikažejo črtkano pod tlorisom, ki ga rišete. Premaknete jo tako, da kliknete izhodiščno točko na referenci in nato mesto, kamor naj ta točka pride, ali vnesete X, Y in kot (zavrti se okoli svojega središča). {{ui:Ponastavi}} jo vrne na mesto, {{ui:Skrij}} jo odstrani. Je zgolj referenca: nič je ne izbere, ni natisnjena in ni shranjena v IFC. BimCraft jo za vsako etažo zapomni v tem brskalniku.

## Peresa po pogledu

Izberite {{ui:Peresa}}. Povejte, za kaj je pero: vse stene, vsa vrata, vsa okna, vrsto izbranega elementa ali izbrane elemente. Izberite debelino, črto (polna, črtkana, pikčasta) in barvo, nato {{ui:Uporabi}}. Sprememba velja samo za tloris te etaže. Izbor premaga tip, tip pa premaga celotno kategorijo. {{ui:Počisti vse}} jih odstrani. Shranjena so v tem brskalniku. Označite **Barve peres v 3D**, da barvna peresa pobarvajo model v pogledu 3D (debelina ali črtkanje sta lastnost črte, zato se tam pokaže samo barva); odznačite, da se vrnete nazaj. {{ui:Natisni}} jih nariše v PDF tlorisa: debelina se skalira glede na zaslon (privzeto pero za stene 1.75 piksla je 0.5 mm), črtkane črte ostanejo črtkane, barva pa se natisne v vrednosti teme za papir.

## Stopnišče iz skice

Izberite {{ui:Skiciraj stopnišče}} in kliknite vogale hodne črte, najprej spodnjo stopnico. Ena črta je ravno stopnišče, dve črti, ki se stikata pod pravim kotom, sta L, tri črte (gor, čez, nazaj) pa U. Pritisnite {{key:L}}, da narišete podest: kliknite njegove vogale in pritisnite {{key:Enter}}; njegova kratka stranica določi širino stopnišča. Pritisnite {{key:Enter}}, da postavite stopnišče. Vsak gaz se izračuna iz dolžine vaše črte in števila stopnic, ki jih zahteva višina. Potem je to običajno stopnišče: spremenite ga v Lastnostih, stopniščni prostor in ograje pa mu sledijo.

Pred {{key:Enter}} označite **Naredi družino** v vrstici orodja (ali pritisnite {{key:F}}), če želite stopnišče postaviti kot družino (ravno, L ali U stopnišče). Vstavi se kot en element in se odpre v urejevalniku družin s širino, gazom, skupno višino, gazi v vsakem kraku in režo U kot parametri, tako da lahko dodate velikosti, simbol na tlorisu ali aktivne točke. Stopnice in višina stopnic iz teh parametrov sledijo. Družina nima ograj ali stopniščnega prostora: ti pripadajo običajnemu stopnišču.

## Odprite OBJ

Datoteko `.obj` odprite kot katero koli drugo datoteko. OBJ nima enot, zato BimCraft prebere metre z Y navzgor, kot jih zapisuje večina programov. Vsak predmet ali skupina postane en element mreže na eni etaži; nato ga lahko pregledate, izmerite, prerežete, postavite v model in shranite kot IFC. Črte, krivulje in površine so izpuščene, vrstica stanja pa to sporoči.

Predmet, ki je natanko ravna prizma (zaprta mreža z dvema vzporednima, enakima končnima ploskvama in ravnimi stranicami, pravokotnimi nanju: plošča, steber, zidni blok, pločevina z luknjami), se v IFC shrani kot lastno izvlečeno telo IFC z obrisom in globino, ne kot seznam trikotnikov. Drugi programi ga preberejo kot pravo telo, ostane majhen, njegovo globino in obris pa je mogoče kasneje urediti. Vrstica stanja pove, koliko predmetov je bilo tako ohranjenih. Vse, kar ni natanko prizma (stožčasta oblika, mreža s premaknjenim ogliščem, mreža z vrzeljo), ostane kot trikotniki. Datoteka STEP se prebere enako.
