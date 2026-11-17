---
title: Preseci IFC model ravni preseka
summary: Preseci 3D model odozgo, sa napred ili sa strane, ili zadrži samo ono što je unutar kutije preseka ili zapremine od više kutija sa nagnutim stranama, da vidiš unutra; pomeraj rez prevlačenjem ili kucanjem, obrni ga i izaberi šta rez prikazuje.
keywords: presek, ravan preseka, kutija preseka, hvatači, prevlačenje, razmak, kutija izbora, kutija za isecanje, rez, isecanje, kriška, rez plana, plan sprata, pogled sa strane, unutrašnjost, enterijer, obrni, pomeraj, zapremina preseka, stepenasti presek, L-oblik, nagib, kosi rez, kosa ravan, dodatna ravan
from: 6315e71a
---

## Šta ćeš uraditi

Preseci IFC model jednom ravni da vidiš unutra: odozgo za plan, ili sa napred ili sa strane za presek kroz zgradu.

## Koraci

1. Otvori IFC model. Pogledaj [Otvori IFC model i pogledaj ga u 3D](topic:open-ifc-model).
2. Klikni {{ui:Presek}} na traci alatki, ili pritisni {{key:X}}. Model se preseče na pola visine, a ispod trake alatki pojavljuje se traka.
3. Izaberi odakle se seče: {{ui:Gore}}, {{ui:Napred}} ili {{ui:Sa strane}}. Napred i Sa strane takođe okreću pogled da gleda presek.
4. Pomeri rez: prevuci klizač **Pomeraj**, ili upiši razdaljinu u metrima u polje i pritisni {{key:Enter}}. Možeš upisati i milimetre, na primer `1200 mm`.
5. Klikni {{ui:Obrni}} da zadržiš drugu stranu reza.
6. Klikni element na rezu da vidiš njegova svojstva.
7. Klikni {{ui:Isključeno}}, ponovo klikni {{ui:Presek}}, ili pritisni {{key:X}} da ukloniš rez.

## Kutija preseka

Klikni {{ui:Kutija}} u istoj traci da zadržiš samo ono što je unutar kutije. Svaka od {{ui:X}}, {{ui:Y}} i {{ui:Z}} ima dva klizača: gde kutija počinje i gde se završava, u metrima od ivice modela. Vrednosti se prikazuju pored njih.

- {{ui:Kutija oko izbora}} obuhvata kutiju oko izabranih elemenata i uvećava pogled na njih. Ostavlja 300 mm slobodnog prostora sa svake strane; promeni to u {{ui:Podešavanja}} › {{ui:BimCraft}} › {{ui:Prostor oko izbora}}.
- Sa izabranim elementima, {{ui:Prikaži}} › {{ui:Kutija preseka oko izbora}} ili {{key:Shift+X}} radi isto u jednom koraku, čak i kada nijedan rez nije uključen.
- **Hvatači** na kutiji je pomeraju pokazivačem: prevuci kvadrat na sredini strane da pomeriš tu stranu, onaj na sredini ivice da pomeriš dve strane koje se tu spajaju, ili onaj na uglu da pomeriš tri. Klizači prate. U {{ui:Gore}} ugao pomera kutiju u planu, a u {{ui:Napred}} ili {{ui:Sa strane}} u pogledu pročelja.
- {{ui:Ceo model}} ponovo širi kutiju na ceo model.
- {{ui:Gore}}, {{ui:Napred}} ili {{ui:Sa strane}} vraćaju na jednu ravan.

## Zapremina od više kutija, nagnute strane i dodatne ravni

Kutija nije uvek oblik koji treba: stepenasti presek, L-krilo ili rez uz zid koji nije upravan na mrežu.

1. U {{ui:Kutija}} klikni {{ui:Dodaj kutiju}}. Rez sada zadržava ono što je unutar **bilo koje** od kutija, pa dve kutije daju stepenastu ili L-zapreminu. Spisak pored pokazuje koju kutiju menjaju klizači ({{ui:Kutija 1}}, {{ui:Kutija 2}}…); {{ui:Ukloni ovu kutiju}} uklanja izabranu. Zapremina može imati do 8 kutija.
2. Otvori {{ui:Nagib i ravni}} da oblikuješ izabranu kutiju:
   - Izaberi {{ui:Strana}} i upiši koliko se naginje na svaku stranu, u stepenima (do 80). Strana se okreće oko svoje sredine; ostale strane ostaju tamo gde su ih postavili klizači. {{ui:Ispravi}} je vraća.
   - {{ui:Dodaj ravan}} seče kutiju još jednom ravni. {{ui:Strane}} je pravac u kojem je odsečena strana okrenuta, u stepenima od X prema Y; {{ui:Nagib}} je koliko se to okreće nagore (0 za uspravnu ravan, 90 za ravnu); {{ui:Pomeraj}} je koliko je ravan udaljena od sredine kutije, u metrima. × je uklanja. Kutija može imati do 6 dodatnih ravni.
3. Gde zapremina seče čvrsta tela, preseci se popunjavaju kao ranije, i tamo gde se dve kutije spajaju u stepenu.

:::tip
Ako kontura nestane i ništa ne ostane, nagibi ili ravni ne ostavljaju ništa unutar te kutije; traka to kaže. Nagni stranu nazad ili promeni pomeraj ravni.
:::

## Zgrada okrenuta na lokaciji

Mnogi modeli postavljaju zgradu pod uglom prema osama datoteke (pravi sever, deljene koordinate). Kada zidovi idu pod uglom, novi presek počinje upravno na zgradu: {{ui:Napred}}, {{ui:Sa strane}} i kutija idu duž njenih zidova, a {{ui:Upravno na zgradu}} u traci preseka je uključeno. Klikni je za ose modela, i ponovo da se vratiš (statusna linija kaže za koliko je zgrada okrenuta). Uz **Podešavanja › BimCraft › Zgrada okrenuta na lokaciji › Kako je postavljeno na lokaciji**, preseci i pogledi počinju na osama modela. Pogledaj [Podešavanja](topic:settings).

## Šta treba da vidiš

- **Gore** zadržava ono što je ispod reza, pa gledaš u prostorije odozgo. Pomeraj se meri naviše od dna modela.
- **Napred** zadržava ono što je iza reza, gledano sa napred; **Sa strane** zadržava ono što je iza njega, gledano sa strane. Pomeraj se meri od prednje ili bočne strane modela.
- Tanka obojena kontura pokazuje gde je ravan.
- Gde ravan seče zid, ploču ili drugo čvrsto telo, presečena površina je ispunjena tamnom bojom, kao nacrtan presek. {{ui:Ispuna}} u traci je uključuje i isključuje.
- Kocka pogleda u donjem desnom uglu okreće model da gledaš rez sa bilo koje strane.
- Klik bira ono što vidiš: ono što je odsečeno ne može se izabrati.

## Česte greške

- **Ništa se nije promenilo.** Rez je možda iznad krova ili van modela. Prevuci klizač ili upiši manji pomeraj.
- **Pomeraj je skočio nazad.** Razdaljina iza modela pomera se na njegov kraj, a statusna linija to kaže.
- **Problem prikazuje samo deo moje zapremine.** Problem (BCF) zadržava jednu kutiju sa nagnutim stranama i ravnima: prvu kutiju zapremine. Statusna linija to kaže kada napraviš problem.
- **Presek je šupalj.** {{ui:Ispuna}} u traci je isključena: klikni je da popuniš presečene površine zidova, ploča i drugih čvrstih tela.
- **Popunjen presek izgleda išarano ili nedostaje deo.** Popunjavanje traži zatvorena tela; element čiji oblik u datoteci nije zatvoren (pojedinačan list, lišće drveta) ostaje nepopunjen umesto da se prefarba. Element sastavljen od delova različitih boja (ram i njegovo staklo) popunjava se kada se delovi zatvore zajedno.
- **Gde je traka preseka?** Ona stoji na vrhu 3D pogleda koji seče: na 3D polovini u {{ui:Podeli}}, a ispod trake za crtanje u {{ui:Plan}} samostalno. U kratkom pogledu se pomera.

## Dalje

- [Prikaži i sakrij spratove, prostore i ivice](topic:storeys-and-spaces)
- [Pogledaj DWG ili DXF crtež u 3D](topic:dwg-in-3d) — crteži u 3D imaju istu ravan preseka
