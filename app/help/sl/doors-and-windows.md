---
title: Vrata in okna
summary: Postavite vrata in okna v narisane stene: kažite na steno, si oglejte smer odpiranja in razdalje do vogalov ter kliknite; odprtina v steni se sama izreže.
keywords: vrata, okna, odprtina, odpiranje, tečaj, smer, obrni, drsna vrata, vrata v steno, garažna vrata, dvokrilna vrata, krilno okno, enojno obešeno, dvojno obešeno, drsno, fiksno okno, parapet, nadglavnik, zložljiva vrata, vrata omare, francoska vrata, hlevska vrata, stranski okvirji, vhodna vrata, markizno okno, panoramsko okno, nadsvetlo
from: 4d8ac009
---

## Kaj boste naredili

Postavite vrata in okna v stene, ki ste jih narisali ([Risanje sten](topic:draw-walls)). Kažite na steno in vrata ali okno pokažeta, kje bi bila, v katero smer se odpirajo in kako daleč so od vsakega vogala. Kliknite, in odprtina se sama izreže iz stene v tlorisu in v 3D.

## Postavitev vrat

1. Z vklopljenim {{ui:Risanje}} kliknite {{ui:Vrata}} (ali pritisnite {{key:D}}).
2. Izberite tip: **Enokrilna vrata**, **Dvokrilna vrata**, **Drsna vrata**, **Vrata v steno**, **Garažna vrata**, **Zložljiva vrata omare**, **Francoska vrata**, **Hlevska vrata (na steni)** ali **Vhodna vrata s stranskimi okvirji**. Njihova običajna velikost zapolni **W** in **H**; izberite drugo s seznama velikosti poleg, ali vpišite druge, na primer `2'-8"` ali `800`. Seznam ponuja tudi družine vrat tega modela (glejte [Družine in njihove velikosti](topic:families)).
3. Kažite na steno. Simbol vrat sledi kazalcu vzdolž stene, razdalja od vsakega konca te ploskve stene pa se prikaže v tlorisu.
4. Vrata se odprejo na tisto stran stene, na kateri je kazalec. Pritisnite {{key:H}} (ali kliknite {{ui:Obrni}}), da tečaje postavite na drugi konec.
5. Kliknite. Vrata so postavljena, orodje pa ostane vklopljeno za naslednja. Kažite na sredino stene in vrata se sama centrirajo.

Da jih postavite na natančno razdaljo, kažite na steno blizu vogala, od katerega merite, vpišite razdaljo (na primer `2'` ali `600`) in pritisnite {{key:Enter}}. Razdalja teče od bližnjega konca ploskve stene do roba vrat.

## Postavitev okna

1. Kliknite {{ui:Okno}} (ali pritisnite {{key:N}}).
2. Izberite tip: **Fiksno okno**, **Enojno obešeno okno**, **Dvojno obešeno okno**, **Krilno okno**, **Drsno okno**, **Markizno okno**, **Panoramsko okno** ali **Nadsvetlo**, ter njegove **W**, **H** in **Parapet** (višina spodnjega roba okna nad tlemi).
3. Kažite na steno in kliknite ali vpišite razdaljo in pritisnite {{key:Enter}} kot pri vratih. Okno sedi na zunanji strani stene.

## Premik, obračanje, brisanje

- Z vklopljenim {{ui:Izberi}} povlecite vrata ali okno vzdolž stene. Povlecite ga na drugo steno, da ga premaknete tja.
- {{key:Delete}} izbriše izbrana vrata in okna; stena se zapre.
- Premik ali brisanje stene premakne ali izbriše to, kar je v njej. Ko se začetek stene premakne vzdolž lastne črte, njena vrata in okna ohranijo svoje mesto.
- {{ui:Razveljavi}} in {{ui:Uveljavi}} vrneta vsako postavitev, premik ali brisanje nazaj in naprej.

## Kaj je zavrnjeno

- **Ne gre v to steno.** Vrata ali okno sta širša od stene ali bi molela iz njenega konca. Poskusite krajšo širino ali daljšo steno.
- **Je višje od stene.** Parapet plus višina sta nad vrhom stene.

## Kaj se shrani

Vsaka vrata ali okno je vrata ali okno IFC z njegovo velikostjo, delovanjem (na primer enokrilna leva), njegovim tipom velikosti (en tip za vsako velikost njegove družine), `Pset_DoorCommon` ali `Pset_WindowCommon` in osnovnimi količinami, ki zapolnjuje odprtino IFC v svoji steni. Neto stranska površina in prostornina stene odprtine ne upoštevata. Drugi programi BIM ga odprejo kot vrata v steni.

## Dobro je vedeti

- Tloris prikaže vrata odprta pod 90° z njihovim odpiranjem, drsna vrata kot dve krili, vrata v steno, ki drsijo v steno, garažna vrata kot črtkano črto nad glavo, in okna z njihovim okvirjem in črtami stekla.
- Širina je celotna širina okvirja; krilo vrat je širina minus obe podboji.
- Kopiranje narisanih vrat in oken še ni izdelano: postavite še enega.

## Okno za pobeg iz kleti in jašek

Izberite **Okno za pobeg iz kleti z jaškom** na seznamu tipov oken. Začne se kot krilno okno 36 × 48 in s parapetom 36 in nad nivojem. Jašek je na zunanji strani stene, z najmanj 48 in svetle širine, 36 in izstopa in dnom 6 in pod parapetom. V tlorisu se prikaže kot črtkana črta, v 3D pa kot tri strani brez pokrova. Jašek je del telesa IFC okna, zato shranjevanje, premik, spreminjanje velikosti ali brisanje okna prenese tudi jašek. Pri spreminjanju velikosti ostane vsaj 6 in ob vsakem podboju.

To so privzete vrednosti za modeliranje, ne potrdilo skladnosti za pobeg. Ločeno preverite dejansko svetlo odprtino proizvajalca, lokalne zahteve, nivo terena, odvodnjavanje in morebitno potrebno lestev. Globina in višina jaška sta vnaprej nastavljeni mere; ne sledita terenu.
