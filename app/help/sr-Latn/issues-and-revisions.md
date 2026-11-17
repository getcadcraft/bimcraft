---
title: Problemi, revizije i dnevnik promena crteža
summary: Zabeležite svaki skup listova koji izdajete, vidite šta se promenilo otad na svakom listu i elementu, i vežite instrukcije za gradilište, radioničke crteže i povezane modele za problem kome pripadaju.
keywords: problem, izdat skup, predat skup, predaja, revizija, revizije, šta se promenilo, od problema, dnevnik promena, dnevnik promena crteža, registar crteža, dopis, instrukcija za gradilište, radionički crtež, povezani model, tender, gradnja, snimak, uporedi
from: 4c732832
---

## Šta ćete uraditi

Zabeležite problem: koji listovi su izašli, kog datuma, zbog čega, svaki sa svojom revizijom. Kasnije pitate šta se promenilo od tog problema. Instrukcije za gradilište i vraćene radioničke crteže vežite za problem.

## Koraci

1. U levom panelu otvorite **Problemi i revizije**.
2. Izaberite **Zabeleži problem**. Revizija se predlaže (A, pa B; numerisana, kao P1, broji se dalje). Izaberite za šta se izdaje, kome ide, datum i listove. Kada je stadijum projekta podešen, svrha ga prati. Kada paket dozvole ima spisak prateće dokumentacije, listovi povezani sa tim spiskom se štikliraju umesto vas.
3. Ostavite štiklirano **Takođe sačuvaj kopiju modela kao izdat** da model ostane tačno kakav je izašao. Kopija se preuzima; njeno ime, veličina i SHA-256 čuvaju se uz problem.
4. Izaberite **Zabeleži ovaj problem**. List koji se promenio od poslednjeg izdavanja dobija novu reviziju. List koji se nije promenio zadržava svoju. Blok sa naslovom svakog lista prikazuje njegovu reviziju.
5. Da vidite šta se promenilo, izaberite **Promene od** pored problema. Svaki list pokazuje Isto ili Promenjeno, sa elementima dodatim, izmenjenim i uklonjenim na njemu. Kliknite na broj da izaberete te elemente.
6. Izaberite **Dodaj zapis** za instrukciju za gradilište, radionički crtež, skup oznaka, povezani model ili belešku. Izaberite problem kome pripada. Datoteka koju izaberete beleži se po imenu, veličini i SHA-256; datoteka ostaje gde jeste.
7. **Dnevnik promena crteža** prikazuje jedan red za svaki list i jednu kolonu za svaki problem. **Preuzmi dnevnik promena (CSV)** čuva ga sa problemima i zapisima.
8. **Sačuvaj istoriju problema** upisuje datoteku `.issues.json`. MarkupCraft, TakeoffCraft i DetailCraft je čitaju pomoću **Pročitaj istoriju problema**.

## Dobro je znati

- Istorija se čuva unutar IFC datoteke (skup svojstava `CadCraft_Issues` na projektu). Drugi programi je ignorišu.
- List se smatra promenjenim kada se promeni njegovo sopstveno podešavanje, ili kada se promeni element koji on prikazuje: plan prikazuje svoj nivo, izgled ili presek ceo model, a tabela vrata ili prozora svoja vrata ili prozore.
- Element se smatra promenjenim kada se promeni svojstvo, njegov položaj, veličina ili oblik.
- Da vidite tačno koje se svojstvo promenilo, otvorite sačuvanu kopiju izdatog modela sa **Uporedi verzije**.
- Uklanjanje problema zadržava njegove zapise, bez problema. Svaki korak se vraća jednim Opozovi.
- Model sa više od 60.000 elemenata ne čuva zapis o svakom elementu uz problem. Listovi se i dalje upoređuju.

## Još nije napravljeno

- Listovi se ne čuvaju kao PDF uz problem.
- Revizioni oblak se ne crta na listovima koje pravi BimCraft. Oblake zabeležite u programu MarkupCraft uz problem.
