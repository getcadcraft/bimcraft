---
title: Zidovi iz nabora načrtov (PDF ali optični posnetek)
summary: Spremenite strani PDF ali skenirane risbe v zidove, vrata in okna, en nivo za vsako stran, s stranjo, ohranjeno pod vsakim tlorisom.
keywords: pdf, načrti, nabor načrtov, optični posnetek, skenirana risba, tiff, sled, zidovi iz pdf, zidovi iz optičnega posnetka, nivoji, strani, merilo, vrata, okna, zamah, polica, podlaga
from: b70d9db7
---

## Kaj boste naredili

Začnite model iz načrtov, ki jih imate na papirju: PDF (narisan kot črte ali kot optični posnetek znotraj PDF) ali optični posnetek (PNG, JPEG, TIFF z eno ali več stranmi). Vsaka stran postane zidovi, vrata in okna enega nivoja.

## Koraki

1. Vklopite {{ui:Risanje}}. Izberite {{ui:Zgradba}} › {{ui:Iz risbe …}}, nato {{ui:Izberi risbo …}} in izberite PDF ali posnetek.
2. **Strani in nivoji.** Vsaka stran je navedena z opisom, kaj je (**črte**, ali **slika (prerisana)**), in nivojem, kamor gre: eden od vaših nivojev, **nov nivo nad drugimi** ali **izpusti to stran**. Strani se ujemajo z vašimi nivoji po vrsti; katerokoli spremenite.
3. **Merilo.** Za PDF povejte, kako je bil narisan (**1 : 100**, **1 : 50** …). Za vse drugo ali kadar ne veste, izberite **iz razdalje, ki jo poznam**: na predogledu kliknite oba konca kote ali merilne lestvice, nato vpišite pravo razdaljo. Vse strani uporabijo eno merilo.
4. Izberite **tip zidu** in **višino novega nivoja**. Pustite **Ohrani vsako stran pod tlorisom njenega nivoja** označeno, da vidite vsako stran kot tanke črte pod njenim tlorisom.
5. Črta pod izbirami pove, koliko zidov, vrat in oken bo naredila ter na koliko nivojih. Kliknite {{ui:Naredi}}.

## Kako bere stran

- **Zidovi** nastanejo iz parov vzporednih črt, oddaljenih do 600 mm (dve lici zidu); zid je debel toliko, kot je razmik. Šrafure in napisi so izpuščeni.
- **Vrata in okna.** Vrzel v zidu (500 do 2600 mm) z narisanim zamahom vrat ob njej je vrata, pritrjena na en konec vrzeli in odprta na stran zamaha. Vrzel ali zid s črtami police v njem je okno. Vrzel brez obojega so vrata do 1300 mm, nad tem pa okno.
- **Optični posnetek** se najprej poravna, če je bil skeniran poševno (pogovorno okno to pove), naredi se črno-bel, očisti pik in prerisa; **stran PDF, ki je slika**, se najprej nariše in nato obravnava enako. Sled najde središče vsake poteze in prilagodi ravne črte in loke nanjo; ne uporablja omrežja in ne naučenega modela.
- **Prostori** nastanejo sami iz zaprtih zank, ki jih naredijo zidovi. Ko ima PDF besedilo, prostor dobi ime iz napisa znotraj njega (največjega; kota, merilo ali številka lista ni ime). Optični posnetek nima besedila, zato njegovi prostori ohranijo imena, ki jim jih da program.
- **Vse, prebrano s strani, je označeno kot nepreverjeno**: vsak zid, vrata, okno in prostor ima črtkan okvir in »?« v tlorisu, dokler ga ne preverite. Izberite, kar ste preverili, in uporabite {{ui:Orodja}} › {{ui:Označi kot preverjeno}}. Glejte [Označevanje elementov kot preverjenih ali preverjenih na terenu](topic:verification).

## Kaj boste videli

- Zidovi, vrata, okna in prostori na vsakem nivoju ter morebitni novi nivoji, vse kot en korak: {{key:Mod+Z}} vse povrne.
- Vsaka stran kot tanke črte pod tlorisom svojega nivoja, navedena pod {{ui:Zgradba}} › {{ui:Iz risbe …}} z {{ui:Odstrani}}.

:::note
To je, kar so črte dale, z natančnostjo strani. Optični posnetek lahko izgubi šibek zid, združi dva zida, ki ležita zelo blizu, ali najde zid v madežu; zamah, ki ga risba ne kaže, pretvori vrzel v navadna vrata. Preverite vsak nivo glede na stran, preden se zanj odločite, in popravite, kar ni prav, z orodji {{ui:Zid}}, {{ui:Vrata}} in {{ui:Okno}}.
:::
