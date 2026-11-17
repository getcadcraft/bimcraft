---
title: Csövek és légcsatornák méretezése, kábelkitöltés és világítás ellenőrzése
summary: Ellenőrizze az ellátó csövek és légcsatornák méreteit nyomásesés mellett, vezesse a kábeleket kábeltálcákon és védőcsöveken, nézze meg a kitöltöttségüket, és számítsa ki a helyiségek megvilágítását IES vagy EULUMDAT fájlokból. Az alapértékek fel vannak tüntetve; az érvényes előírás értékeit kell megadni.
keywords: méretezés, csőméretezés, légcsatorna-méretezés, nyomásesés, berendezési egységek, igény, hunter, hazen-williams, sebesség, súrlódás, egyenlő súrlódás, ventilátornyomás, csappantyú, kritikus útvonal, kábeltálca, védőcső, kitöltés, kábeljegyzék, ies, ldt, eulumdat, fotometria, megvilágítás, lux, egyenletesség, világítási számítás, teljesítménysűrűség, mep, számítások, problémák
from: 9cb90815
---

## Mit fog tenni

Rajzolja meg a csöveket, légcsatornákat, kábeltálcákat és védőcsöveket a szokásos módon, majd nyissa meg a **Számítások** panelt. Minden lap beolvassa a modellt, táblázatot mutat, és a ⚠ panelben **Problémák** formájában felsorolja, mi a hibás. Ha egy méret megoldaná a problémát, a **Méretek alkalmazása** a szakaszokat egyetlen visszavonási lépésben módosítja.

Ezek tervezési segédeszközök. Minden alapérték a képernyőn fel van tüntetve, és egyik sem előírási táblázat: a tervezési szabvány szerinti számokat kell megadni, az eredményt pedig az azért felelős mérnöknek kell átnéznie.

## Csövek

1. Válassza ki a **rendszer** kulcsát (hideg víz `cw`, meleg víz `hw`).
2. Állítsa be a legnagyobb sebességet, és ha a nyomást is ellenőrizni kell, a forrásnál mért nyomást és a berendezéshez szükséges legkisebb nyomást.
3. Kattintson a {{ui:Vizsgálat}} gombra.

Minden csőszakasz a alatta lévő berendezési egységek igényét hordozza. Az igény az egységek és az áramlás görbéjéből származik, ahogy Hunter leírta. **A beépített görbe példa, nem előírási táblázat**; a Problémák mindaddig ezt jelzik, amíg nem adja meg a sajátját. A súrlódás Hazen–Williams szerinti, az idomok veszteségtényezőkkel számolnak, és egy emelkedés méterenként 9,8 kPa veszteséget jelent. Egy berendezés egységeit a fajtája adja, vagy az asszisztens `loads_set` eszközével beállított szám.

## Légcsatornák

Állítsa be a rendszert, a súrlódási mértéket (egyenlő súrlódás) vagy egy sebességet, és az esetleges hőcserélő-, szűrő- vagy hangtompító-veszteséget. A végpontok légáramát a szórón lévő `loads_set` adja. A táblázat darabonként mutatja a sebességet és a súrlódást, a **ventilátornyomást** a kritikus útvonalon, és azt a nyomást, amelyet minden más végpont csappantyújának fel kell vennie. Az idomveszteségek kerekített alapértelmezett tényezőkkel számolnak, nem idomadatbázisból.

## Kábeltálcák és védőcsövek

Rajzolja meg őket a Légcsatorna eszközzel: a **Kábeltálca** és a **Védőcső** rendszerek kábelhordóként mentődnek, így más programok tálcaként és védőcsőként olvassák be őket. A Kábelek lapon illessze be a kábellistát (jelzés, külső átmérő mm-ben, darabszám, `from`, `to`). A `from` és a `to` egy berendezés jelzése vagy egy `x,y,z` pont milliméterben. A kábelek a tálcákon és védőcsöveken a legrövidebb folytonos útvonalat követik; minden szakasz a beírt határértékekhez képest mutatja a kitöltését, a jegyzék pedig CSV-ként mentődik, a hossz a tartalékszázalékot és a végződéseket is tartalmazza.

## Világítás

Minden lámpatesthez rendelje hozzá az IES (LM-63) vagy EULUMDAT fájlját a `photometry_set` asszisztens-eszközzel. Írja be a célértékeket, a rácstávolságot és a munkasík magasságát. Az eredmény csak **közvetlen** megvilágítás: nincs többszörös visszaverődés és nincs árnyék, ezért egy helyiségben alsó becslés.

## Tűzoltó szórófejek

A **Tűzoltó szórófejek** bővítménynek saját lapja van; lásd annak súgóját.
