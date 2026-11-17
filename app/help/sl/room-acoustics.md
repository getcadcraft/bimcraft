---
title: Preverite čas dozvanjanja prostora in ga poslušajte
summary: Čas dozvanjanja po oktavnih pasovih za vsak prostor (Sabine in Eyring) iz njegove velikosti in obdelav, cilj, ki ga določite sami, ter glas, ploskanje ali glasba, predvajani prek izračunanega impulznega odziva prostora.
keywords: akustika, dozvanjanje, čas dozvanjanja, rt60, sabine, eyring, absorpcija, odmev, zvok, poslušanje, impulzni odziv, govor, učilnica, pisarna, preproga, akustični strop, hrup
from: 16996cbb
---

Odsek {{ui:Akustika prostorov}} v levi plošči izračuna, kako dolgo zvok dozveni v vsakem prostoru. Iz odprtega modela IFC prebere tlorisno površino, višino, stene, vrata in okna vsakega prostora. Model se ne spremeni.

## Izberite obdelave

Kjer model pove, kaj je na površini, prostor to prebere: notranjo plast tipa vsake stene (mavec, omet, opeka, beton in blok so znani), vrsto tal (les ali beton) in ali je strop obložen s ploščami. Oznaka ob vsaki izbiri pove, ali je iz modela, privzeta ali vaša izbira; za preglasitev izberite drugo obdelavo. Kar model ne pove, ostane na privzeti vrednosti. Koeficienti so **tipične objavljene vrednosti**; ko imate podatke o preskusu izdelka, jih zamenjajte z njimi. Vnesite **cilj** (najdaljše srednjefrekvenčno dozvanjanje, ki ga želite), in vsak prostor nad njim bo opozorilo, z absorpcijo, ki bi ga spravila pod cilj.

## Preberite tabelo

Dozvanjanje je podano za 125 Hz do 4 kHz. Sabine ustreza živim prostorom, Eyring pa mrtvim; vrstica, označena *Uporabljeno*, uporabi Eyring, kadar je povprečna absorpcija nad 0.2. Absorpcija zraka je vključena (v velikih prostorih skrajša visoke pasove). Gre za statistični model: predpostavlja, da se zvok enakomerno širi, zato so dolgi ali ploski prostori in zelo majhni prostori le grob vodnik; pohištvo, ljudje in odprta vrata se ne upoštevajo.

## Poslušajte

{{ui:Predvajaj v tem prostoru}} predvaja glas (tukaj ustvarjen), ploskanje, odščipnjene tone ali **vašo zvočno datoteko** (ostane na vašem računalniku) prek impulznega odziva, izračunanega za prostor: neposredni zvok, prve odboje škatle take velikosti in rep, ki se v vsakem pasu izteče s časom dozvanjanja prostora. {{ui:Predvajaj suho}} predvaja isti zvok z enako glasnostjo brez prostora. Impulzni odziv ali zvok v prostoru lahko shranite kot datoteki WAV. Zveni kot prostor take velikosti in obdelave, ne kot noben resnični prostor.

## Ljudje in pohištvo

Vnesite število **ljudi v tem prostoru**, da dodate njihovo absorpcijo. Pohištvo, ki ga model vsebuje (sedeži, postelje, stoli, mize, omare; najdeno po imenu), prispeva svojo absorpcijo. Vrednosti so grobe načrtovalne vrednosti, zaokrožene; za pomemben prostor jih zamenjajte z meritvami.

## Vir in poslušalec

Pod {{ui:Vir in poslušalec}} pritisnite {{ui:Postavi vir}} ali {{ui:Postavi poslušalca}} in kliknite tloris prostora. Predvajani zvok se nato sliši od tam: neposredni zvok pride po razdalji, odmevni del pa je na ravni, ustrezni tej razdalji. Obe izbiri počistite, da se vrnete na polje za razdaljo.

## Neenakomerna absorpcija in prostorski modi

Pod {{ui:Neenakomerna absorpcija (kvadrasta soba)}} vnesite prostor kot škatlo in izberite obdelave tal, stropa in sten. Tabela k Sabineu in Eyringu doda Fitzroy in Arau-Puchades: obravnavata tri pare nasprotnih ploskev ločeno, zato soba s preprogo in trdim stropom ni prekratka. Ko se pari zelo razlikujejo, opomba pove, kateremu zaupati. Pod tabelo **Prostorski modi** navede najnižje stojne valove škatle in frekvenco, pod katero ima prostor ločene načine namesto enakomernega zvočnega polja. To so napovedi za škatlasto sobo, pripomoček za načrtovanje in ne meritev.

## Enote

Površine, višine, prostornine in razdalje prostorov so prikazani v {{ui:Enote}}, ki ste jih izbrali (kvadratni in kubični čevlji, palci, milimetri, centimetri ali metri). Izračun sam ostane v SI; spremeni se le prikaz. Časi (sekunde), frekvence in ravni se ne spremenijo.
