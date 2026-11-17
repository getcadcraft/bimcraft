---
title: Presijecanje IFC modela ravninom presjeka
summary: Presijecite 3D model odozgo, sprijeda ili sa strane, ili zadržite samo ono što je unutar presječne kutije ili zapremine od više kutija s nakošenim stranama, da vidite unutra; pomjerite presjek prevlačenjem ili upisivanjem, okrenite ga i odaberite šta presjek prikazuje.
keywords: presjek, ravan presjeka, presječna kutija, hvataljke, prevlačenje, margina, kutija za odabir, kutija za odsijecanje, rez, odsijecanje, rezanje, plan presjeka, tlocrt, izgled, unutrašnjost, enterijer, okreni, pomak, zapremina presjeka, stepenasti presjek, L-oblik, nagib, kosi presjek, kosa ravan, dodatna ravan
from: 6315e71a
---

## Šta ćete uraditi

Presijecite IFC model jednom ravninom da vidite unutra: odozgo za plan, ili sprijeda ili sa strane za presjek kroz zgradu.

## Koraci

1. Otvorite IFC model. Vidi [Otvaranje IFC modela i razgledanje u 3D](topic:open-ifc-model).
2. Kliknite {{ui:Presjek}} na alatnoj traci, ili pritisnite {{key:X}}. Model je presječen na pola visine, a ispod alatne trake pojavljuje se traka.
3. Odaberite odakle presijecati: {{ui:Gore}}, {{ui:Sprijeda}} ili {{ui:Strana}}. Sprijeda i Strana također okreću pogled da gledaju presjek.
4. Pomjerite presjek: prevucite klizač **Pomak**, ili upišite udaljenost u metrima u polje i pritisnite {{key:Enter}}. Možete upisati i milimetre, na primjer `1200 mm`.
5. Kliknite {{ui:Okreni}} da zadržite drugu stranu presjeka.
6. Kliknite element na presjeku da vidite njegova svojstva.
7. Kliknite {{ui:Isključeno}}, ponovo kliknite {{ui:Presjek}}, ili pritisnite {{key:X}} da uklonite presjek.

## Presječna kutija

Kliknite {{ui:Kutija}} u istoj traci da zadržite samo ono što je unutar kutije. Svaka od {{ui:X}}, {{ui:Y}} i {{ui:Z}} ima dva klizača: gdje kutija počinje i gdje završava, u metrima od ivice modela. Vrijednosti se prikazuju pored njih.

- {{ui:Kutija oko odabira}} prilagođava kutiju elementima koje ste odabrali i približava na njih. Ostavlja 300 mm slobodnog prostora sa svake strane; promijenite to u {{ui:Postavke}} › {{ui:BimCraft}} › {{ui:Rezerva oko odabira}}.
- Kad su elementi odabrani, {{ui:Prikaži}} › {{ui:Presječna kutija oko odabira}} ili {{key:Shift+X}} radi isto u jednom koraku, čak i kad presjek nije uključen.
- **Hvataljke** na kutiji je pomjeraju pokazivačem: prevucite kvadrat u sredini strane da pomjerite tu stranu, onaj u sredini ivice da pomjerite dvije strane koje se tu spajaju, ili onaj na uglu da pomjerite tri. Klizači prate. U {{ui:Gore}} ugao pomjera kutiju u planu, a u {{ui:Sprijeda}} ili {{ui:Strana}} u izgledu.
- {{ui:Cijeli model}} ponovo otvara kutiju na cijeli model.
- {{ui:Gore}}, {{ui:Sprijeda}} ili {{ui:Strana}} vraćaju na jednu ravan.

## Zapremina od više kutija, nakošene strane i dodatne ravni

Kutija nije uvijek oblik koji trebate: stepenasti presjek, L-oblično krilo, ili rez uz zid koji nije okomit na mrežu.

1. U {{ui:Kutija}} kliknite {{ui:Dodaj kutiju}}. Presjek sada zadržava ono što je unutar **bilo koje** kutije, pa dvije kutije čine stepenastu ili L-oblik zapreminu. Lista pored nje kaže koju kutiju klizači mijenjaju ({{ui:Kutija 1}}, {{ui:Kutija 2}}…); {{ui:Ukloni ovu kutiju}} uklanja odabranu. Zapremina sadrži do 8 kutija.
2. Otvorite {{ui:Nagib i ravni}} da oblikujete odabranu kutiju:
   - Odaberite {{ui:Strana}} i upišite koliko se naginje na svaku stranu, u stepenima (do 80). Strana se okreće oko svoje sredine; ostale strane ostaju tamo gdje ih klizači postave. {{ui:Uspravno}} je vraća.
   - {{ui:Dodaj ravan}} presijeca kutiju još jednom ravni. {{ui:Strane}} je kako je strana koja se odsijeca okrenuta, u stepenima od X prema Y; {{ui:Nagib}} je koliko se to okreće prema gore (0 za uspravnu ravan, 90 za ravnu); {{ui:Pomak}} je koliko je ravan udaljena od sredine kutije, u metrima. × je uklanja. Kutija zauzima do 6 dodatnih ravni.
3. Gdje zapremina presijeca čvrsta tijela, presječene strane se popunjavaju kao ranije, također tamo gdje se dvije kutije sastaju u stepenu.

:::tip
Ako obris nestane i ništa ne ostane, nagibi ili ravni ne ostavljaju ništa unutar te kutije; traka to kaže. Nagnite stranu nazad ili promijenite pomak ravni.
:::

## Zgrada okrenuta na lokaciji

Mnogi modeli postavljaju zgradu pod uglom u odnosu na ose datoteke (pravi sjever, zajedničke koordinate). Kad zidovi idu pod uglom, novi presjek počinje okomito na zgradu: {{ui:Sprijeda}}, {{ui:Strana}} i kutija idu duž njenih zidova, a {{ui:Pravo u odnosu na zgradu}} u traci presjeka je uključeno. Kliknite ga za ose modela, i ponovo da se vratite (statusna linija kaže za koliko je zgrada okrenuta). Uz **Postavke › BimCraft › Zgrada okrenuta na lokaciji › Kako je postavljena na lokaciji**, presjeci i pogledi umjesto toga počinju na osama modela. Vidi [Postavke](topic:settings).

## Šta biste trebali vidjeti

- **Gore** zadržava ono što je ispod presjeka, pa gledate u prostorije odozgo. Pomak se mjeri prema gore od dna modela.
- **Sprijeda** zadržava ono što je iza presjeka, gledano sprijeda; **Strana** zadržava ono što je iza njega, gledano sa strane. Pomak se mjeri od prednje ili bočne strane modela.
- Tanki obojeni obris pokazuje gdje je ravan.
- Gdje ravan presijeca zid, ploču ili drugo čvrsto tijelo, presječena strana je popunjena tamnom bojom, kao nacrtani presjek. {{ui:Ispuna}} u traci je uključuje i isključuje.
- Pogled-kocka u donjem desnom uglu okreće model da gledate presjek sa bilo koje strane.
- Klik bira ono što vidite: sve što je odsječeno ne može se odabrati.

## Česte greške

- **Ništa se nije promijenilo.** Presjek može biti iznad krova ili izvan modela. Prevucite klizač ili upišite manji pomak.
- **Pomak je skočio nazad.** Udaljenost iza modela pomjera se na njegov kraj, i statusna linija to kaže.
- **Problem prikazuje samo dio moje zapremine.** Problem (BCF) zadržava jednu kutiju s njenim nagnutim stranama i ravnima: prvu kutiju zapremine. Statusna linija to kaže kad napravite problem.
- **Presjek je šupalj.** {{ui:Ispuna}} u traci je isključena: kliknite je da popunite presječene strane zidova, ploča i drugih čvrstih tijela.
- **Popunjeni presjek izgleda pjegavo ili nedostaje dio.** Popunjavanje zahtijeva zatvorena tijela; element čiji oblik u datoteci nije zatvoren (jedan list, lišće drveta) ostaje nepopunjen umjesto da se prebojava. Element sastavljen od dijelova različitih boja (okvir i njegovo staklo) popunjava se kad se njegovi dijelovi zatvore zajedno.
- **Gdje je traka presjeka?** Nalazi se na vrhu 3D pogleda koji presijeca: na 3D polovini u {{ui:Podijeli}}, a ispod trake za crtanje u {{ui:Plan}} samostalno. U kratkom pogledu se pomjera.

## Dalje

- [Prikaz i skrivanje spratova, prostora i ivica](topic:storeys-and-spaces)
- [Pogled DWG ili DXF crteža u 3D](topic:dwg-in-3d) — crteži u 3D imaju istu ravan presjeka
