---
title: Izdanja, revizije i dnevnik promjena crteža
summary: Zabilježite svaki skup listova koji predajete, pogledajte što se od tada promijenilo na svakom listu i elementu, te uz izdanje kojem pripadaju vežite upute za gradilište, radioničke crteže i povezane modele.
keywords: izdanje, izdani skup, predani skup, predaja, revizija, revizije, što se promijenilo, od izdanja, dnevnik promjena, dnevnik promjena crteža, registar crteža, transmittal, uputa za gradilište, radionički crtež, povezani model, natječaj, građenje, snimka, usporedi
from: 4c732832
---

## Što ćete napraviti

Zabilježite izdanje: koji su listovi izašli, kojeg datuma, u koju svrhu i svaki sa svojom revizijom. Kasnije pitajte što se promijenilo od tog izdanja. Upute za gradilište i vraćene radioničke crteže vežite uz izdanje.

## Koraci

1. U lijevoj ploči otvorite **Izdanja i revizije**.
2. Odaberite **Zabilježi izdanje**. Revizija se predlaže (A, zatim B; numerirana, poput P1, broji se dalje). Odaberite za što je izdano, kome se šalje, datum i listove. Kada je postavljena faza vašeg projekta, svrha ju slijedi. Kada paket dozvole ima popis pratećih dokumenata, listovi povezani s tim popisom bit će označeni za vas.
3. Ostavite označeno **Također spremi kopiju modela kao izdanog** da zadržite model točno onakav kakav je izašao. Kopija se preuzima; njezin naziv, veličina i SHA-256 spremaju se uz izdanje.
4. Odaberite **Zabilježi ovo izdanje**. List koji se promijenio od zadnjeg izdanja dobiva novu reviziju. List koji se nije promijenio zadržava svoju reviziju. Naslovni blok svakog lista prikazuje njegovu reviziju.
5. Da vidite što se promijenilo, odaberite **Promjene od** pokraj izdanja. Svaki list pokazuje Isto ili Promijenjeno, s elementima dodanima, promijenjenima i uklonjenima na njemu. Kliknite broj da odaberete te elemente.
6. Odaberite **Dodaj zapis** za uputu za gradilište, radionički crtež, skup oznaka, povezani model ili bilješku. Odaberite izdanje na koje se odnosi. Datoteka koju odaberete bilježi se po nazivu, veličini i SHA-256; datoteka ostaje gdje jest.
7. **Dnevnik promjena crteža** prikazuje jedan redak za svaki list i jedan stupac za svako izdanje. **Preuzmi dnevnik promjena (CSV)** sprema ga s izdanjima i zapisima.
8. **Spremi povijest izdanja** zapisuje datoteku `.issues.json`. MarkupCraft, TakeoffCraft i DetailCraft je čitaju pomoću **Pročitaj povijest izdanja**.

## Dobro je znati

- Povijest se čuva unutar IFC datoteke (skup svojstava `CadCraft_Issues` na projektu). Drugi programi je ignoriraju.
- List se smatra promijenjenim kada se promijenilo njegovo vlastito postavljanje ili element koji prikazuje: tlocrt prikazuje svoju etažu, pročelje ili presjek cijeli model, a specifikacija vrata ili prozora svoja vrata ili prozore.
- Element se smatra promijenjenim kada se promijenilo svojstvo, njegov položaj, veličina ili oblik.
- Da vidite točno koje se svojstvo promijenilo, otvorite spremljenu kopiju izdanog modela pomoću **Usporedi verzije**.
- Uklanjanje izdanja zadržava njegove zapise, bez izdanja. Svaki korak je jedno poništavanje.
- Model s više od 60,000 elemenata ne čuva zapis o svakom elementu uz izdanje. Listovi se i dalje uspoređuju.

## Još nije izrađeno

- Listovi se ne spremaju kao PDF uz izdanje.
- Revizijski oblak ne crta se na vlastitim listovima programa BimCraft. Oblake zabilježite u MarkupCraftu uz izdanje.
