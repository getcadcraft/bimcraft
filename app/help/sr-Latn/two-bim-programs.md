---
title: Rad između dva BIM programa
summary: Pošalji model iz jednog BIM programa u drugi preko IFC-a uz BimCraft u sredini, zadrži njegove GlobalId-jeve, skupove svojstava i klasifikacije, podesi oba programa za ista svojstva i pogledaj šta se vratilo.
keywords: ifc, put u oba smera, interoperabilnost, globalid, guid, skupovi svojstava, psets, klasifikacije, deljeni parametri, mapiranje svojstava, prevodilac, bcf, koordinacija, razmena
from: 9f224176
---

## Šta ćeš uraditi

Premesti model između dva BIM programa, na primer iz Revit-a u Archicad i nazad, preko IFC-a, uz BimCraft u sredini da ga proveri, dopuni i izvesti šta je preživelo. Nijedna datoteka u formatu nijednog programa se ne čita: sve putuje kao IFC.

## Šta BimCraft zadržava

Kad promeniš model u BimCraft-u i klikneš {{ui:Sačuvaj kao IFC}}, svaki red koji nisi promenio upisuje se nazad tačno kao što je bio. Zato:

- **GlobalId-jevi** ostaju isti, pa drugi program može da uporedi svaki element sa onim koji je poslao.
- **Skupovi svojstava** i njihove vrednosti ostaju, osim vrednosti koje si promenio.
- **Klasifikacije** ostaju vezane za svoje elemente.

## Podesi oba programa za ista svojstva

1. Otvori model u BimCraft-u (i paket projekta, ako ga imaš: njegove grupe svojstava se dodaju).
2. U levom panelu otvori {{ui:Između dva BIM programa}}.
3. Pod **Mapiranje svojstava** preuzmi ono što svaki program treba:
   - {{ui:Deljeni parametri}}: datoteka deljenih parametara. U Revit-u je učitaj preko Manage › Shared Parameters i dodaj parametre kategorijama kojima trebaju.
   - {{ui:IFC skupovi svojstava za izvoz}}: datoteka skupova svojstava koje definiše korisnik. U podešavanjima IFC izvoza u Revit-u izaberi je pod skupovima svojstava koje definiše korisnik, tako da izvezeni IFC nosi isti skup i iste nazive svojstava.
   - {{ui:Tabela mapiranja (CSV)}}: svako svojstvo sa svojim IFC skupom i nazivom, tipom i odgovarajućim nazivima u svakom programu. Datoteke mapiranja Archicad-a nisu objavljen format, pa podesi njegov IFC prevodilac i upravljač svojstvima ručno prema ovoj tabeli.
   - {{ui:Datoteka mapiranja}}: celo mapiranje kao jedna datoteka, da je čuvaš uz projekat.

Standardni skupovi (Pset_ i Qto_) ne ulaze u datoteku deljenih parametara: oba programa ih pišu iz sopstvenih podataka.

## Pošalji model i vrati ga

1. Izvezi IFC iz prvog programa sa sačuvanim GlobalId-jevima (Revit: uključeno „Store the IFC GUID in an element parameter after export“).
2. Otvori ga u BimCraft-u, proveri ({{ui:Provere modela}}, {{ui:Provera sudara}}), dodaj probleme ({{ui:Problemi}}, BCF), promeni vrednosti ako treba i {{ui:Sačuvaj kao IFC}}.
3. Otvori sačuvani IFC u drugom programu, radi na njemu i izvezi IFC odatle sa sačuvanim GlobalId-jevima (Archicad-ov prevodilac: „Global Unique Identifiers: Keep existing“).
4. Nazad u BimCraft-u otvori model koji je otišao, pa dodaj onaj koji se vratio ({{ui:Dodaj model}} pod Modeli).
5. U {{ui:Između dva BIM programa}} izaberi **Poslat** i **Vraćen**, pa klikni {{ui:Napravi izveštaj}}.

## Čitanje izveštaja

- **Elementi**: koliko se vratilo sa istim GlobalId-jem, koliko nedostaje i koliko je novih. Elementi sa novim GlobalId-jem prikazuju se kao jedan nedostajući i jedan novi: drugi program ga nije zadržao.
- **Promenjena IFC klasa**: elementi koji su se vratili kao druga vrsta elementa.
- **Sačuvane vrednosti svojstava**: udeo vrednosti koje su se vratile nepromenjene. Spisak ispod prikazuje svojstva sa najviše promenjenih ili nedostajućih vrednosti.
- **Klasifikacije**: sačuvane, promenjene (isti sistem, drugi kod) ili nedostajuće.

{{ui:Preuzmi izveštaj (CSV)}} daje svako svojstvo sa brojevima. Da vidiš koji su se elementi pomerili ili promenili oblik, koristi {{ui:Uporedi verzije}} na istim dvama modelima.

:::note
BimCraft ne pokreće nijedan od dva programa. Koja podešavanja prenose vrednost zavisi od IFC podešavanja svakog programa: izveštaj pokazuje šta se stvarno vratilo, pa probaj podešavanje, izvezi ponovo i uporedi.
:::

## Problemi putuju kao BCF

Problemi koje podigneš u BimCraft-u izvoze se kao BCF ({{ui:Problemi}}), koji oba programa mogu da čitaju svojim BCF alatima, pa pitanje o elementu stiže do osobe koja radi u drugom programu sa svojim pogledom.

Vidi takođe [Otvaranje paketa projekta](topic:open-project-bundle), [Od projektne datoteke do BimCraft-a preko IFC-a](topic:rvt-to-ifc) i [Uporedi dve verzije modela](topic:compare-versions).
