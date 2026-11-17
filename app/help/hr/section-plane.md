---
title: Presijecite IFC model ravninom presjeka
summary: Prerežite 3D model odozgo, sprijeda ili sa strane, ili zadržite samo ono što je unutar kutije presjeka ili volumena od nekoliko kutija s nagnutim plohama, da vidite unutrašnjost; pomaknite rez povlačenjem ili upisivanjem, okrenite ga i odaberite što rez prikazuje.
keywords: presjek, ravnina presjeka, kutija presjeka, ručke, povlačenje, razmak, okvir odabira, kutija za rezanje, rez, izrezivanje, rezanje, tlocrt, pročelje, unutrašnjost, obrni, odmak, volumen presjeka, stepenasti presjek, L-oblik, nagib, kosi rez, kosa ravnina, dodatna ravnina
from: 6315e71a
---

## Što ćete učiniti

Prerežite IFC model jednom ravninom da vidite unutra: odozgo za tlocrt ili sprijeda ili sa strane za presjek kroz zgradu.

## Koraci

1. Otvorite IFC model. Vidi [Otvaranje IFC modela i razgledavanje u 3D-u](topic:open-ifc-model).
2. Kliknite {{ui:Presjek}} na alatnoj traci ili pritisnite {{key:X}}. Model je presječen na pola visine, a ispod alatne trake pojavljuje se traka.
3. Odaberite odakle rezati: {{ui:Gore}}, {{ui:Naprijed}} ili {{ui:Bočno}}. Naprijed i Bočno također okreću prikaz da gleda rez.
4. Pomaknite rez: povucite klizač **Odmak** ili upišite udaljenost u metrima u okvir i pritisnite {{key:Enter}}. Možete upisati i milimetre, na primjer `1200 mm`.
5. Kliknite {{ui:Obrni}} da zadržite drugu stranu reza.
6. Kliknite element na rezu da vidite njegova svojstva.
7. Kliknite {{ui:Isključeno}}, ponovno kliknite {{ui:Presjek}} ili pritisnite {{key:X}} da uklonite rez.

## Kutija presjeka

Kliknite {{ui:Kutija}} u istoj traci da zadržite samo ono što je unutar kutije. Svaka od {{ui:X}}, {{ui:Y}} i {{ui:Z}} ima dva klizača: gdje kutija počinje i gdje završava, u metrima od ruba modela. Vrijednosti se prikazuju uz njih.

- {{ui:Kutija oko odabira}} uklapa kutiju oko odabranih elemenata i zumira na njih. Ostavlja 300 mm slobodnog prostora sa svake strane; promijenite to u {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Rezerva oko odabira}}.
- Uz odabrane elemente, {{ui:Prikaži}} › {{ui:Kutija presjeka oko odabira}} ili {{key:Shift+X}} radi isto u jednom koraku, čak i kad nijedan rez nije uključen.
- **Ručke** na kutiji pomiču je pokazivačem: povucite kvadrat na sredini plohe da pomaknete tu plohu, onaj na sredini brida da pomaknete dvije plohe koje se tu sastaju, ili onaj na kutu da pomaknete tri. Klizači prate. U {{ui:Gore}} kut pomiče kutiju u tlocrtu, a u {{ui:Naprijed}} ili {{ui:Bočno}} u pročelju.
- {{ui:Cijeli model}} ponovno otvara kutiju na cijeli model.
- {{ui:Gore}}, {{ui:Naprijed}} ili {{ui:Bočno}} vraćaju na jednu ravninu.

## Volumen od više kutija, nagnute plohe i dodatne ravnine

Kutija nije uvijek oblik koji trebate: stepenasti presjek, L-oblikovano krilo ili rez uz zid koji nije pravokutan na mrežu.

1. U {{ui:Kutija}} kliknite {{ui:Dodaj kutiju}}. Rez sada zadržava ono što je unutar **bilo koje** od kutija, pa dvije kutije čine stepenasti ili L-oblik volumena. Popis pored njega pokazuje koju kutiju klizači mijenjaju ({{ui:Kutija 1}}, {{ui:Kutija 2}}…); {{ui:Ukloni ovu kutiju}} uklanja odabranu. Volumen može imati najviše 8 kutija.
2. Otvorite {{ui:Nagib i ravnine}} da oblikujete odabranu kutiju:
   - Odaberite {{ui:Ploha}} i upišite koliko se naginje u svakom smjeru, u stupnjevima (do 80). Ploha se okreće oko svoje sredine; ostale plohe ostaju tamo gdje ih postavljaju klizači. {{ui:Okomito}} je vraća.
   - {{ui:Dodaj ravninu}} reže kutiju još jednom ravninom. {{ui:Plohe}} je smjer u kojem je odrezana strana okrenuta, u stupnjevima od X prema Y; {{ui:Nagib}} je koliko se to okreće prema gore (0 za uspravnu ravninu, 90 za vodoravnu); {{ui:Odmak}} je koliko je ravnina udaljena od sredine kutije, u metrima. × je uklanja. Kutija može imati najviše 6 dodatnih ravnina.
3. Gdje volumen siječe krute tijelo, presječene plohe se popunjavaju kao i prije, također tamo gdje se dvije kutije sastaju u stepenicu.

:::tip
Ako obris nestane i ništa ne ostane, nagibi ili ravnine ne ostavljaju ništa unutar te kutije; traka to kaže. Nagnite plohu natrag ili promijenite odmak ravnine.
:::

## Zgrada zakrenuta na lokaciji

Mnogi modeli postavljaju zgradu pod kutom prema osima datoteke (pravi sjever, zajedničke koordinate). Kad zidovi idu pod kutom, novi presjek počinje okomito na zgradu: {{ui:Naprijed}}, {{ui:Bočno}} i kutija idu duž njezinih vlastitih zidova, a {{ui:Okomito na zgradu}} u traci presjeka je uključen. Kliknite ga za osi modela, a ponovno da se vratite (statusna traka kaže za koliko je zgrada zakrenuta). Uz **Postavke › BimCraft › Zgrada zakrenuta na lokaciji › Kako je postavljena na lokaciji**, presjeci i prikazi počinju na osima modela. Vidi [Postavke](topic:settings).

## Što biste trebali vidjeti

- **Gore** zadržava ono što je ispod reza, pa gledate u sobe odozgo. Odmak se mjeri prema gore od dna modela.
- **Naprijed** zadržava ono što je iza reza, gledano sprijeda; **Bočno** zadržava ono što je iza njega, gledano sa strane. Odmak se mjeri od prednje ili bočne strane modela.
- Tanki obojeni obris pokazuje gdje je ravnina.
- Gdje ravnina siječe zid, ploču ili drugo kruto tijelo, presječna ploha ispunjena je tamnom bojom, kao nacrtani presjek. {{ui:Ispuna}} u traci to uključuje i isključuje.
- Kocka pogleda u donjem desnom kutu okreće model da gledate rez s bilo koje strane.
- Klik odabire ono što vidite: ono što je odrezano ne može se odabrati.

## Česte pogreške

- **Ništa se nije promijenilo.** Rez može biti iznad krova ili izvan modela. Povucite klizač ili upišite manji odmak.
- **Odmak je skočio natrag.** Udaljenost iza modela pomiče se na njegov kraj, a statusna traka to kaže.
- **Tema (BCF) prikazuje samo dio mog volumena.** Tema (BCF) zadržava jednu kutiju s njezinim nagnutim plohama i ravninama: prvu kutiju volumena. Statusna traka to kaže kad napravite temu.
- **Rez je šupalj.** {{ui:Ispuna}} u traci je isključena: kliknite je da popunite presječne plohe zidova, ploča i drugih krutih tijela.
- **Popunjeni rez izgleda išarano ili nedostaje dio.** Popunjavanje treba zatvorena tijela; element čiji oblik u datoteci nije zatvoren (jedna ploha, lišće stabla) ostaje nepopunjen, umjesto da se preko njega nanese boja. Element sastavljen od dijelova različitih boja (okvir i njegovo staklo) popunjava se kad se njegovi dijelovi zatvore zajedno.
- **Gdje je traka presjeka?** Nalazi se na vrhu 3D prikaza koji reže: na 3D polovici u {{ui:Podijeli}}, a ispod trake za crtanje u samo {{ui:Tlocrt}}. U niskom prikazu se pomiče.

## Dalje

- [Prikaz i skrivanje etaža, prostora i bridova](topic:storeys-and-spaces)
- [Pregledajte DWG ili DXF crtež u 3D-u](topic:dwg-in-3d) — crteži u 3D-u imaju istu ravninu presjeka.
