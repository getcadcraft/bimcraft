---
title: Problemi, revizije i dnevnik promjena crteža
summary: Zabilježite svaki set listova koji izdajete, vidite šta se promijenilo od tada na svakom listu i elementu, i čuvajte uputstva za gradilište, radioničke crteže i povezane modele uz izdanje kojem pripadaju.
keywords: problem, izdani set, predati set, predaja, revizija, revizije, šta se promijenilo, od izdanja, dnevnik promjena, registar crteža, transmittal, uputstvo za gradilište, radionički crtež, povezani model, tender, gradnja, snimak, uporedi
from: 4c732832
---

## Šta ćete uraditi

Zabilježite izdanje: koji listovi su izašli, kojeg datuma, za koju svrhu, svaki sa svojom revizijom. Kasnije pitajte šta se promijenilo od tog izdanja. Uz izdanje čuvajte uputstva za gradilište i vraćene radioničke crteže.

## Koraci

1. U lijevom panelu otvorite **Problemi i revizije**.
2. Izaberite **Zabilježi izdanje**. Revizija se predlaže (A, zatim B; numerisana, kao P1, broji se dalje). Odaberite za šta se izdaje, kome ide, datum i listove. Kada je postavljena faza projekta, svrha ide uz nju. Kada paket za dozvolu ima spisak prateće dokumentacije, listovi povezani sa tim spiskom se automatski označe.
3. Ostavite označeno **Također sačuvaj kopiju modela kao izdanog** da biste zadržali model tačno kakav je izašao. Kopija se preuzima; njeno ime, veličina i SHA-256 se čuvaju uz izdanje.
4. Izaberite **Zabilježi ovo izdanje**. List koji se promijenio od posljednjeg izdanja dobija novu reviziju. List koji se nije promijenio zadržava svoju. Blok sa podacima svakog lista prikazuje njegovu reviziju.
5. Da vidite šta se promijenilo, izaberite **Promjene od tada** pored izdanja. Svaki list pokazuje Isto ili Promijenjeno, sa dodanim, izmijenjenim i uklonjenim elementima na njemu. Kliknite broj da biste izabrali te elemente.
6. Izaberite **Dodaj zapis** za uputstvo za gradilište, radionički crtež, set oznaka, povezani model ili napomenu. Izaberite izdanje na koje se odnosi. Datoteka koju odaberete se bilježi po imenu, veličini i SHA-256; datoteka ostaje gdje jeste.
7. **Dnevnik promjena crteža** prikazuje jedan red za svaki list i jednu kolonu za svako izdanje. **Preuzmi dnevnik promjena (CSV)** ga spasi sa izdanjima i zapisima.
8. **Spasi historiju izdanja** zapisuje datoteku `.issues.json`. MarkupCraft, TakeoffCraft i DetailCraft je čitaju uz **Pročitaj historiju izdanja**.

## Korisno znati

- Historija se čuva unutar IFC datoteke (svojstveni skup `CadCraft_Issues` na projektu). Ostali programi je ignorišu.
- List se smatra promijenjenim kada se promijeni njegova sopstvena postavka, ili kada se promijeni element koji prikazuje: plan prikazuje svoj nivo, pogled ili presjek cijeli model, a tabela vrata ili prozora svoja vrata ili prozore.
- Element se smatra promijenjenim kada se promijeni svojstvo, njegov položaj, veličina ili oblik.
- Da vidite tačno koje se svojstvo promijenilo, otvorite sačuvanu kopiju izdatog modela sa **Uporedi verzije**.
- Uklanjanje izdanja zadržava njegove zapise, bez izdanja. Svaki korak je jedan Poništi.
- Model sa više od 60.000 elemenata ne čuva zapis o svakom elementu uz izdanje. Listovi se i dalje upoređuju.

## Još nije izrađeno

- Listovi se ne čuvaju kao PDF uz izdanje.
- Revizioni oblak se ne crta na BimCraft-ovim listovima. Zabilježite oblake u MarkupCraft uz izdanje.
