---
title: Postavite sliko pod tloris
summary: Postavite sliko PNG, JPEG ali WebP (skeniran tloris, skica, fotografija lokacije, posnetek iz zraka) pod tloris etaže ali na navpično ravnino, merilo določite z dvema točkama, premikajte, zasukajte, zbledite in zaklenite, si jo oglejte v 3D in v PDF tlorisa ter jo hranite poleg modela v paketu.
keywords: slika, podoba, podlaga, PNG, JPEG, WebP, skeniranje, skica, fotografija, posnetek iz zraka, situacijski načrt, merilo, neprosojnost, zaklep, podlaga, sledenje
from: e3c78d1f
---

## Postavitev slike

Vklopite {{ui:Risanje}}, pojdite na etažo in izberite {{ui:Slika}} v meniju {{ui:Zgradba}}. Nato {{ui:Vstavi sliko…}} in izberite datoteko PNG, JPEG ali WebP. Prebere se v vašem brskalniku in se nikoli ne naloži. Prikaže se pod tlorisom, prilagojena pogledu, orodna vrstica pa pove, da merilo še ni določeno. Vse, kar narišete, leži nad njo.

## Določitev merila

Izberite {{ui:Merilo}}, kliknite dve točki na sliki, katerih pravo razdaljo poznate (dva konca stene na skeniranem tlorisu, mera, natisnjena na skici), nato vpišite razdaljo in pritisnite {{key:Enter}}. Slika se poveča ali pomanjša okoli prve točke, ki ste jo kliknili. {{key:Esc}} prekliče.

## Prilepitev kopiranega območja

V MarkupCraftu {{ui:Kopiraj območje}} kopira del lista PDF kot sliko. Nazaj v BimCraftu, ko je tloris etaže prikazan, pritisnite {{key:Ctrl+V}} (ali {{ui:Prilepi}} v meniju {{ui:Urejanje}}): območje pristane na tlorisu kot slika, centrirano tam, kjer je kazalec (ali v sredini pogleda). Če je list imel merilo risbe, pride v svoji pravi velikosti, tako da je stena nanj enako dolga kot vaše stene. Brez njega pride v velikosti papirja in začne se {{ui:Merilo}}, tako da lahko kliknete dve točki in vpišete njuno razdaljo. Območje, kopirano kot prekrivanje, se začne pri neprosojnosti, s katero je bilo kopirano. Je en korak razveljavitve in se hrani kot katera koli druga slika.

Prilepi vzame tisto, kar ste nazadnje kopirali: kopirano območje ali nekaj, kar ste kopirali v BimCraftu. {{key:Ctrl+V}} prilepi tudi katero koli drugo sliko PNG, JPEG ali WebP z vašega odložišča, postavljeno kot {{ui:Vstavi sliko…}} in še neumerjeno po merilu. Kopirano območje se hrani šest ur.

## Premikanje, zasuk, zbledenje, zaklep

{{ui:Premakni}} vzame osnovno točko na sliki in nato mesto, kamor naj gre. {{ui:Zasukaj}} vzame kot v stopinjah okoli središča slike. {{ui:Neprosojnost}} jo zbledi, da vaše črte izstopajo. {{ui:Zakleni}} prepreči premikanje med risanjem; zaklenjena slika še vedno dovoljuje spreminjanje neprosojnosti in skrivanje. Vsaka sprememba je en korak razveljavitve.

## Več slik, več etaž

Slika pripada etaži, na kateri je bila postavljena, in se prikaže na tlorisu te etaže in na stropnem tlorisu. Kliknite sliko, da z njo delate, ali jo izberite na seznamu. {{ui:Skrij}} jo izklopi, ne da bi jo odstranil; {{ui:Odstrani}} (ali {{key:Delete}}) jo vzame iz modela.

## Slike v pogledu 3D

Vsaka slika stoji tudi v pogledu 3D kot ravna ploskev: tlorisna slika leži na svoji etaži, slika na navpični ravnini stoji nad svojo prerezno črto. Narisana je čez model, ne da bi ga skrila, model pa skrije tisti del slike, ki je za njim. Prekrivajoče se slike se razvrstijo po razdalji. {{ui:Neprosojnost}}, {{ui:Skrij}}, {{ui:Zakleni}} in {{ui:Odstrani}} delujejo enako, {{ui:Pokaži v 3D}} pa izklopi vse ravnine samo v pogledu 3D. Etaža vsebuje največ 8 slik, da pogledi ostanejo hitri.

## Slika na navpični ravnini

Pod {{ui:Postavi na}} izberite {{ui:Navpična ravnina (prerezna črta)}}, nato {{ui:Vstavi sliko…}}. Kliknite dva konca črte na tlorisu (konec stene se zaskoči), ali izberite poimenovano prerezno črto etaže v {{ui:Nad prerezno črto}}, pa klikov ne potrebujete. Slika stoji na etaži nad to črto, široka kot črta. Nastavite njeno {{ui:Širino}}, njen položaj {{ui:Vzdolž črte}} in {{ui:Višino nad nivojem}} z vpisom; {{ui:Zasukaj}} jo zasuče v njeni lastni ravnini. Navpična slika ni narisana pod tlorisom; tloris prikaže njeno črto, medtem ko z njo delate. BimCraft nima interaktivnega 2D prereznega okna: prerezi in pogledi so narisani na listih, slike pa se v teh pogledih na listih še ne natisnejo.

## Tiskanje

{{ui:Pogled tiska}} na tlorisu zapiše slike etaže v PDF pod risbo, v njihovem merilu, zasuku in neprosojnosti, obrezane na list; skrita slika ostane zunaj. JPEG gre notri, kakršen je; druge slike se najprej zmanjšajo na 200 dpi na listu.

## Shranjeno poleg modela

Bajti slike niso zapisani v besedilo IFC. Model se sklicuje na vsako po imenu (IfcDocumentReference, na primer pictures/<id>.png), bajti pa potujejo v projektnem paketu. Uporabite {{ui:Shrani kot paket…}} (ali {{ui:Shrani kot IFC}} in ga izberite): dobite en .ccbundle z modelom in njegovimi slikami; IFC ostane majhen, urejanje pa hitro. Odprite .ccbundle in slike so spet tam.

Navaden .ifc ne more vsebovati slike, ne da bi postal velik. Ko ga shranite, BimCraft pove, koliko slik je shranjenih zunaj njega, in ponudi paket ali navaden IFC, ki vgradi slike do 512 KB in ostale izpusti. Navaden .ifc, odprt brez svojega paketa, prikaže te slike kot manjkajoče, Težave pa jih navedejo; odprite .ccbundle, v katerem so bile shranjene. Datoteke, shranjene s prvo različico, s sliko znotraj IFC, se še odprejo, shranjevanje paketa pa njihove slike premakne ven. Slika se ohrani, kakršna je, do 6 MB; večja se najprej zmanjša, in to vam je sporočeno. Drugi programi odprejo model in slike prezrejo. Slika, ki je še niste umerili po merilu, je navedena pod Težave kot opomba.

## V listih prerezov in pogledov

Slika na navpični ravnini (izberite {{ui:Navpično}} v podoknu slike in kliknite dva konca črte ali jo postavite nad poimenovano prerezno črto) se natisne v pogledih na listih, ki jo gledajo naravnost. Prerez prikaže sliko, ki stoji na svoji rezni črti, ali ki je bila postavljena nad to prerezno črto po imenu. Pogled prikaže vsako navpično sliko, katere ravnina je obrnjena k njemu. Slika je narisana pod črtami pogleda, v merilu pogleda, obrezana na pogled, in ohrani svojo neprosojnost. Odprite {{ui:Listi…}}, da jo vidite; PDF lista jo prenese kot sliko. Gledano od zadaj je slika zrcaljena, kot je v 3D. Skrite slike so izpuščene.
