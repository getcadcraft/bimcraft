---
title: Analiza konstrukcijskega okvirja
summary: Sile, reakcije in pomiki nosilcev, stebrov in diagonal modela pod obtežnimi primeri in kombinacijami, ki jih nastavite, shranjeni v IFC. Pripomoček za analizo, ne preverjanje po predpisu.
keywords: analiza, enote, čevlji in palci, prikazna enota, konstrukcijska analiza, preverjanja dimenzioniranja, izkoriščenost, valjano, varjeno, AISC 360, EN 1993-1-1, analiza okvirja, analitični model, metoda togosti, obtežbe, obtežni primer, kombinacija, stalna obtežba, koristna obtežba, lastna teža, reakcije, upogibni moment, strig, osna sila, pomik, deformirana oblika, podpore, členkasto, vpeto, sprostitev, poročilo, pdf, csv, craftscript, frame3d, nosilci, stebri, elementi
from: b93b58c4
---

Zavihek {{ui:Analiza}} na desni poišče sile v nosilcih, stebrih in diagonalah odprtega modela, reakcije v podnožjih stebrov in to, kako močno se elementi upognejo, za obtežbe, ki jih vnesete.

:::warning
**Gre za pripomoček za analizo, ne za preverjanje po predpisu.** Analiza ne uporablja projektnega predpisa: ne dimenzionira elementov, ne preverja nosilnosti in ne izbere faktorjev obtežbe. Inženir preveri analitični model, njegove obtežbe in podpore ter presodi, kaj številke pomenijo. Blok {{ui:Preverjanja dimenzioniranja}} pod njim preverja valjane jeklene I-profile po AISC 360 ali EN 1993-1-1 – pripomoček, dokler inženir ni pregledal: glejte [Preverjanja dimenzioniranja](topic:frame-analysis#design-checks).
:::

## Zagon

1. Odprite model IFC in zavihek {{ui:Analiza}}.
2. V pogledu izberite enega ali več nosilcev, stebrov ali diagonal, izberite {{ui:Primer}}, {{ui:Obtežba}} in {{ui:Smer}}, vpišite vrednost in pritisnite {{ui:Dodaj obtežbo}}: kN/m za obtežbo, razporejeno vzdolž elementa, kN za točkovno obtežbo.
3. Pritisnite {{ui:Zaženi analizo}}.

Tabela navede največjo osno silo, strige, upogibne momente, torzijo in pomik vsakega elementa; kliknite ime elementa, da ga izberete v pogledu. Spodaj so reakcije. {{ui:Na modelu}} nariše deformirano obliko ali eno vrednost kot diagram ob vsakem elementu. Rezultati zastarajo, ko se model spremeni: zaženite jo znova.

Vsaka obtežba in nastavitev je ena sprememba v seznamu {{ui:Spremembe}}: {{ui:Razveljavi}} jo povrne, {{ui:Shrani kot IFC}} pa jih ohrani v datoteki (lastnost `CadCraft_Analysis` v naboru lastnosti projekta), tako da so ob naslednjem odprtju modela tukaj obtežbe še vedno prisotne.

## Kako je analitični model narejen

- Vsak IfcBeam, IfcColumn in IfcMember, katerega oblika je ena ravna ekstruzija, postane element na težiščnici svojega preseka. Njegove lastnosti preseka izhajajo iz profila: oblike I, U, L in T, pravokotniki in cevi, krogi in okrogle cevi ali poljuben zaprt obris (tedaj je torzijska konstanta ocena, kar je navedeno v poročilu). Vse drugo se izpusti in šteje.
- V modelu se nosilci končajo na licu stebra in ležijo pod tlemi. Vsak konec elementa se premakne vzdolž svoje črte na os elementa, v katerega se vgrajuje, kadar je ta os blizu (znotraj velikosti presekov), in ta element se tam razdeli. Poročilo pove, koliko koncev se je premaknilo.
- **Podnožja stebrov**, pod katerimi ni ničesar, so podpore: vpeta (začetek) ali členkasta (pridržana na mestu in proti zasukanju, prosta za vrtenje).
- **Konci nosilcev** so togi ali členkasti po pravilu {{ui:Konci nosilcev brez spoja}}; **diagonale** (IfcMember) so na obeh koncih členkaste. Izberite en element, da njegovim koncem ali podnožju stebra dodelite lastno pravilo.
- Materiali po imenu: beton (E = 30 GPa), les (E = 11 GPa), sicer jeklo (E = 200 GPa).

Če se okvir lahko premakne, ne da bi se karkoli upognilo (mehanizem), se zagon ustavi in pove, kje in v katero smer.

## Primeri, kombinacije, predznaki in poročilo

Analiza se začne s **Stalna** (lastna teža), **Koristna** in **Stalna + koristna**; primere in kombinacije dodajte s faktorji, ki jih zahteva vaš projektni predpis. N > 0 je natezna sila; My > 0 spravi lokalno stran −z elementa v nateg (nosilec, ki se pod težo povesi, ima My > 0). {{ui:Poročilo (PDF)}} in {{ui:Poročilo (CSV)}} vsebujeta predpostavke, preseke, primere, reakcije z njihovimi vsotami, sile elementov, pomike in ovojnico. {{ui:Izvozi kot CraftScript}} zapiše okvir za delovno okolje Script v PartCraftu, kjer knjižnična funkcija `frame3d` reši okvir v berljivi kodi.

Metoda je neposredna metoda togosti, linearna in prvega reda, razen če označite *Drugi red (P-Delta)*; preverjena je na učbeniških primerih.

**Drugi red (P-Delta).** Označite *Drugi red (P-Delta)* poleg gumba za zagon: vsaka kombinacija se reši znova, z osnimi silami elementov, ki delujejo na deformiranem okviru (vsak element je razrezan na 4 dele, tako da se upogib med njegovima koncema prav tako šteje), dokler se osne sile ne ustalijo. Rezultatna vrstica navede število prehodov in koliko se je premik povečal; momenti, pomiki, preverjanja dimenzioniranja in poročilo nato uporabljajo te rezultate. Nad elastično kritično obtežbo okvirja se zagon ustavi in to pove. Gre za elastičen račun z majhnimi zasuki, samo za upogib, brez zmanjšanja togosti ali nominalnih obtežb (sam po sebi ni metoda neposredne analize AISC); plošče, zidovi in togi stropi ostanejo prvega reda.

**Tlak tal na plošče.** Za betonske plošče (analiza obravnava ploščo kot plošče, kadar je njen material beton) ima blok obtežb {{ui:Tlak na vsako ploščo}}: vpišite kN/m², izberite zgornji primer in pritisnite {{ui:Dodaj na plošče}}. Tlak deluje navzdol na vsako ploščo, ki jo je analiza našla, in je naveden s povezavo Odstrani. Gre za en tlak za vse plošče, ne za enega za vsako ploščo, in ni predpisana obtežba: vpišite vrednost, ki jo da vaš inženir.

**Lastne frekvence (končni elementi).** Blok {{ui:Končni elementi: lastne frekvence}} pod rezultati poišče najnižje oblike nihanja istega modela z mehanizmom končnih elementov: nosilci s svojimi sprostitvami koncev, plošče in zidovi kot ravni štirivozliščni lupinski elementi, togi stropi, podpore. Izberite število oblik (3, 6, 10 ali 20) in vrsto plošče (štirivozliščna lupina za debele ali tanke plošče ali element tanke plošče) ter pritisnite {{ui:Poiščite frekvence}}. Tabela navede frekvenco vsake oblike v Hz, njeno periodo v sekundah in njeno učinkovito modalno maso v smeri X, Y in Z kot delež mase, ki se lahko giblje; {{ui:Prikaži na modelu}} nariše katero koli obliko na enak način kot deformirano obliko. Masa je gostota materiala, pomnožena s prostornino: obtežbe ne dodajajo mase, material brez gostote je nima. Poročilo (PDF, CSV) vsebuje tabelo. Gre le za elastične in majhne premike, brez potresne ali vetrne obtežbe, izdelane po predpisu. Ni preverjanje po predpisu; vaš inženir pregleda rezultate.

**Odzivni spekter, časovni potek in pushover.** Pod frekvencami so še trije bloki, ki uporabljajo isti model končnih elementov. Masa zanje je gostota materiala plus navzdolnje obtežbe označenih primerov, pomnožene z faktorjem, ki ga vpišete (na primer Stalna pri 1 in Koristna pri deležu, ki ga štejete kot maso).

{{ui:Spekter odziva}} prebere vsako obliko z danega spektra (tabela periode in pospeška ali oblika ASCE 7 iz SDS, SD1 in TL; gumb {{ui:Uporabi vrednosti bloka Potres}} te vrednosti prenese iz bloka Potres) in združi oblike po CQC, SRSS, pravilu desetih odstotkov ali absolutni vsoti, nato sestavi smeri X, Y in Z (100 % + 30 % ali SRSS). Poda bazni strig, medetažne zamike, sile na koncih elementov in tabelo oblik, ki opozori, kadar uporabljene oblike nosijo manj kot 90 % mase. Rezultate lahko pomnožite s faktorjem ali jih skalirate do baznega striga, ki ga vpišete; blok tega baznega striga nikoli ne izračuna sam. Rezultati nimajo predznaka.

{{ui:Časovni potek}} izvede pospešek tal z modalno superpozicijo (natančno za ravne črte zapisa med točkami) ali z neposredno integracijo (Newmarkova povprečna metoda pospeška z Rayleighovim dušenjem). Vhod je izmišljen sinus ali impulz (vedno označen kot sintetičen), zapis, ki ga prilepite, ali besedilna datoteka, ki jo odprete (čas in pospešek, en pospešek na vrstico s korakom, ali datoteka v slogu PEER z glavo DT=; v g ali m/s²). Poda pomik strehe in bazni strig v odvisnosti od časa, zamik vsake etaže in ovojnico sil na koncih elementov. Modeli z zelo dolgim zapisom ga hranijo samo za to sejo.

{{ui:Pushover}} potiska streho vstran v majhnih korakih (vzorec kot pri prvi obliki ali enakomeren), s plastičnimi členki na koncih elementov z I-profilom. Člen se plastificira pri plastičnem momentu, ki pada, ko osna sila raste (izračunan iz narisane oblike, zaobljeni prehodi se zanemarijo); utrjevanje je neobvezno, P-delta je neobvezen, kombinacijo s težo pa je mogoče najprej uporabiti. Poda krivuljo nosilnosti (bazni strig v odvisnosti od pomika strehe), prvi člen ter stanje in plastični zasuk vsakega člena. {{ui:Zaženi nelinearni časovni potek}} izvede iste člene pod zapisom bloka časovnega poteka na majhnih modelih. Členki nastanejo samo na koncih elementov (na mestu, kjer naj nastane člen znotraj polja, postavite vozlišče); element, sproščen na obeh koncih, jih nima; tečenje in uklon diagonal nista modelirana; plošče in zidovi ostanejo elastični; sprejemna merila niso podana. Ni preverjanje po predpisu; vaš inženir pregleda rezultate. Nastavitve se shranijo z modelom, poročilo pa vsebuje tabele.

Še ni izdelano: uklon, popravek manjkajoče mase za odzivni spekter, skaliranje zapisov, sprejemna merila za člene (dinamični odziv je zgoraj), obtežbe površin razen tega enega tlaka na vse plošče, odmiki elementov, diagonale, ki prenesejo samo nateg, stene in plošče v okviru, preverjanja po predpisu za varjene oblike in za preseke, različne od valjanih I-profilov. Glejte [Še ni izdelano](topic:not-built-yet).

## Enote

Dolžine sledijo enoti, ki jo izberete na orodni vrstici ({{ui:Enote}}), kot ostali deli BimCraft: položaji obtežb, ki jih vpišete in vidite ({{ui:Iz}}, {{ui:Na}}, {{ui:Pri}}), točke obtežb in reakcij v vozliščih, višine etaž v {{ui:Potres}} ter stolpca pomika in zamika (čevlji in palci prikazujeta te majhne dolžine v decimalnih palcih). Enoto spremenite kadar koli; zavihek se prikaže znova. Sile ostanejo v kN in kN·m, poročilo (PDF, CSV) in datoteka CraftScript pa ostaneta v milimetrih z zapisano enoto. Velikosti presekov, premeri palic in zaščitni sloji betona v bloku {{ui:Beton}} ostanejo v milimetrih, kakor so poimenovani.

## Preverjanja dimenzioniranja

Blok {{ui:Preverjanja dimenzioniranja}} (enak kot pri DetailCraft) vzame {{ui:Projektni standard}}, ASCE 7 + AISC 360 ali EN 1990 + EN 1993-1-1, in {{ui:Jeklo (kakovost)}}. Vsakemu obtežnemu primeru dodelite njegovo vrsto (stalna, koristna, veter …) in {{ui:Izdelaj kombinacije}} zapiše kombinacije obtežb predpisa iz vaših primerov; analiza jih nato obravnava kot vsako drugo kombinacijo.

{{ui:Preveri elemente}} nato preveri vsak **valjani jekleni I-profil** s preverjanji DetailCraft (nateg, tlak z uklonom, upogib z bočnim zvrnilnim uklonom, strig, upogib z osno silo, pomik; klavzule so v poročilu) in pokaže, kolikšen del svoje nosilnosti izkorišča, obarvano v modelu. Gre za **pripomoček, dokler ga inženir ni pregledal**.

**Kateri elementi se preverjajo.** IFC profil ne pove, ali je jekleni I-profil valjan ali varjen, zato BimCraft označi profil za valjanega le, kadar je njegovo ime profila (sicer ime tipa elementa) velikost iz tabel AISC W ali S ali iz tabel EN 10365 IPE, HEA ali HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **in** višina, širina, rebro in pas v datoteki ustrezajo tej velikosti znotraj 1 %. Vsak drug I-profil (sestavljeni nosilec iz pločevine, velikost z drugim imenom, spremenjena velikost) se obravnava kot varjen in se vrne kot **ni preverjeno**, prav tako cevi, kotniki, U-profili in drugi preseki, vitki deli in torzija. Te elemente preverite z inženirjem.
