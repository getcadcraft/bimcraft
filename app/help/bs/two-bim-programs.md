---
title: Rad između dva BIM programa
summary: Pošaljite model iz jednog BIM programa u drugi preko IFC-a uz BimCraft u sredini, zadržite njegove GlobalId-jeve, skupove svojstava i klasifikacije, podesite oba programa za ista svojstva i pogledajte šta se vratilo.
keywords: ifc, povratni tok, interoperabilnost, globalid, guid, skupovi svojstava, psets, klasifikacije, dijeljeni parametri, mapiranje svojstava, prevodilac, bcf, koordinacija, razmjena
from: 9f224176
---

## Šta ćete uraditi

Premjestite model između dva BIM programa, na primjer iz Revit u Archicad i nazad, preko IFC-a, uz BimCraft u sredini da ga provjeri, dopuni i izvijesti šta je preživjelo. Vlastiti format datoteke nijednog programa se ne čita: sve putuje kao IFC.

## Šta BimCraft zadržava

Kada promijenite model u BimCraft-u i kliknete {{ui:Save as IFC}}, svaki red koji niste promijenili vraća se upisan upravo kako je bio. Dakle:

- **GlobalId-jevi** ostaju isti, pa drugi program može uskladiti svaki element s onim koji je poslao.
- **Skupovi svojstava** i njihove vrijednosti ostaju, osim vrijednosti koje ste promijenili.
- **Klasifikacije** ostaju vezane za svoje elemente.

## Podesite oba programa za ista svojstva

1. Otvorite model u BimCraft-u (i paket projekta, ako ga imate: njegove grupe svojstava se dodaju).
2. U lijevom panelu otvorite {{ui:Between two BIM programs}}.
3. Pod **Mapiranje svojstava** preuzmite što svaki program treba:
   - {{ui:Shared parameters}}: datoteka dijeljenih parametara. U Revit-u je učitajte pomoću Manage › Shared Parameters i dodajte parametre kategorijama kojima trebaju.
   - {{ui:IFC export property sets}}: datoteka skupova svojstava koje definiše korisnik. U postavkama IFC izvoza Revit-a izaberite je pod skupovima svojstava koje definiše korisnik, tako da izvezeni IFC nosi isti skup i nazive svojstava.
   - {{ui:Mapping table (CSV)}}: svako svojstvo sa svojim IFC skupom i nazivom, tipom i odgovarajućim nazivima u svakom programu. Datoteke mapiranja Archicad-a nisu objavljen format, pa podesite njegov IFC prevodilac i upravljač svojstvima ručno iz ove tabele.
   - {{ui:Mapping file}}: cijelo mapiranje kao jedna datoteka, da je čuvate uz projekat.

Standardni skupovi (Pset_ i Qto_) su izostavljeni iz datoteke dijeljenih parametara: oba programa ih zapisuju iz vlastitih podataka.

## Pošaljite model i vratite ga

1. Izvezite IFC iz prvog programa uz zadržane GlobalId-jeve (Revit: uključeno "Store the IFC GUID in an element parameter after export").
2. Otvorite ga u BimCraft-u, provjerite ({{ui:Model checks}}, {{ui:Clash check}}), dodajte probleme ({{ui:Issues}}, BCF), promijenite vrijednosti ako treba, i {{ui:Save as IFC}}.
3. Otvorite sačuvani IFC u drugom programu, radite na njemu, i izvezite IFC odatle uz zadržane GlobalId-jeve (prevodilac Archicad-a: "Global Unique Identifiers: Keep existing").
4. Vratite se u BimCraft, otvorite model koji je otišao, pa dodajte onaj koji se vratio ({{ui:Add a model}} pod Models).
5. U {{ui:Between two BIM programs}} izaberite **Poslano** i **Vraćeno**, pa kliknite {{ui:Make the report}}.

## Čitanje izvještaja

- **Elementi**: koliko ih se vratilo sa istim GlobalId-jem, koliko nedostaje i koliko je novih. Elementi s novim GlobalId-jem prikazuju se kao jedan koji nedostaje i jedan nov: drugi program ga nije sačuvao.
- **IFC klasa promijenjena**: elementi koji su se vratili kao druga vrsta elementa.
- **Zadržane vrijednosti svojstava**: udio vrijednosti koje su se vratile nepromijenjene. Spisak ispod prikazuje svojstva sa najviše promijenjenih ili nedostajućih vrijednosti.
- **Klasifikacije**: zadržane, promijenjene (isti sistem, drugi kod) ili nedostaju.

{{ui:Download the report (CSV)}} daje svako svojstvo sa svojim brojevima. Da vidite koji su se elementi pomjerili ili promijenili oblik, koristite {{ui:Compare versions}} na istim modelima.

:::note
BimCraft ne pokreće nijedan od ta dva programa. Koja podešavanja prenose vrijednost zavisi od IFC postavki svakog programa: izvještaj pokazuje šta je stvarno stiglo, pa isprobajte postavku, izvezite ponovo i uporedite.
:::

## Problemi putuju kao BCF

Problemi koje podignete u BimCraft-u izvoze se kao BCF ({{ui:Issues}}), koji oba programa mogu čitati svojim BCF alatima, pa pitanje o elementu stiže osobi koja radi u drugom programu sa svojim pogledom.

Vidi i [Otvaranje paketa projekta](topic:open-project-bundle), [Od datoteke projekta do BimCraft-a preko IFC-a](topic:rvt-to-ifc) i [Uporedi dvije verzije modela](topic:compare-versions).
