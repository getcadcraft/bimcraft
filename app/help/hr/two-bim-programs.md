---
title: Rad između dva BIM programa
summary: Pošaljite model iz jednog BIM programa u drugi preko IFC-a uz BimCraft u sredini, zadržite njegove GlobalId-ove, skupove svojstava i klasifikacije, postavite oba programa za ista svojstva i pogledajte što se vratilo.
keywords: ifc, povratni put, interoperabilnost, globalid, guid, skupovi svojstava, psets, klasifikacije, zajednički parametri, mapiranje svojstava, prevoditelj, bcf, koordinacija, razmjena
from: 9f224176
---

## Što ćete napraviti

Premjestite model između dva BIM programa, na primjer iz Revita u Archicad i natrag, preko IFC-a, uz BimCraft u sredini da ga provjeri, dopuni i izvijesti što je preživjelo. Ne čita se vlastiti format datoteke nijednog programa: sve putuje kao IFC.

## Što BimCraft čuva

Kad promijenite model u BimCraftu i kliknete {{ui:Spremi kao IFC}}, svaki redak koji niste promijenili zapisuje se natrag točno kakav je bio. Dakle:

- **GlobalId-ovi** ostaju isti, pa drugi program može svaki element uskladiti s onim koji je poslao.
- **Skupovi svojstava** i njihove vrijednosti ostaju, osim vrijednosti koje ste promijenili.
- **Klasifikacije** ostaju pridružene svojim elementima.

## Postavite oba programa za ista svojstva

1. Otvorite model u BimCraftu (i paket projekta, ako ga imate: njegove grupe svojstava se dodaju).
2. U lijevoj ploči otvorite {{ui:Između dva BIM programa}}.
3. Pod **Mapiranje svojstava** preuzmite ono što svaki program treba:
   - {{ui:Zajednički parametri}}: datoteka zajedničkih parametara. U Revitu je učitajte s Manage › Shared Parameters i dodajte parametre kategorijama koje ih trebaju.
   - {{ui:Skupovi svojstava IFC izvoza}}: datoteka skupova svojstava koje definira korisnik. U postavkama IFC izvoza Revita odaberite je pod user-defined property sets, tako da izvezeni IFC nosi isti skup i nazive svojstava.
   - {{ui:Tablica mapiranja (CSV)}}: svako svojstvo s njegovim IFC skupom i nazivom, vrstom i odgovarajućim nazivima u svakom programu. Archicadove datoteke mapiranja nisu objavljen format, pa njegov IFC prevoditelj i upravitelj svojstava postavite ručno prema ovoj tablici.
   - {{ui:Datoteka mapiranja}}: cijelo mapiranje kao jedna datoteka, za čuvanje uz projekt.

Standardni skupovi (Pset_ i Qto_) izostavljaju se iz datoteke zajedničkih parametara: oba programa ih zapisuju iz vlastitih podataka.

## Pošaljite model i vratite ga

1. Izvezite IFC iz prvog programa s očuvanim GlobalId-ovima (Revit: "Store the IFC GUID in an element parameter after export" uključeno).
2. Otvorite ga u BimCraftu, provjerite ({{ui:Provjere modela}}, {{ui:Provjera sudara}}), dodajte teme ({{ui:Teme}}, BCF), po potrebi promijenite vrijednosti i {{ui:Spremi kao IFC}}.
3. Otvorite spremljeni IFC u drugom programu, radite na njemu i izvezite IFC odatle s očuvanim GlobalId-ovima (Archicadov prevoditelj: "Global Unique Identifiers: Keep existing").
4. Natrag u BimCraftu otvorite model koji je otišao, zatim dodajte onaj koji se vratio ({{ui:Dodaj model}} pod Modeli).
5. U {{ui:Između dva BIM programa}} odaberite **Poslano** i **Vraćeno**, zatim kliknite {{ui:Izradi izvješće}}.

## Čitanje izvješća

- **Elementi**: koliko ih se vratilo s istim GlobalId-om, koliko ih nedostaje i koliko ih je novo. Elementi s novim GlobalId-om prikazuju se kao jedan nedostajući i jedan novi: drugi program ga nije zadržao.
- **Promijenjena IFC klasa**: elementi koji su se vratili kao druga vrsta elementa.
- **Sačuvane vrijednosti svojstava**: udio vrijednosti koje su se vratile nepromijenjene. Popis ispod pokazuje svojstva s najviše promijenjenih ili nedostajućih vrijednosti.
- **Klasifikacije**: sačuvane, promijenjene (isti sustav, drugi kod) ili nedostajuće.

{{ui:Preuzmi izvješće (CSV)}} daje svako svojstvo s njegovim brojevima. Da vidite koji su se elementi pomaknuli ili promijenili oblik, koristite {{ui:Usporedi verzije}} na istim dvama modelima.

:::note
BimCraft ne pokreće nijedan od dvaju programa. Koje postavke prenose vrijednost ovisi o IFC postavkama svakog programa: izvješće pokazuje što se zaista vratilo, pa isprobajte postavku, izvezite ponovno i usporedite.
:::

## Teme putuju kao BCF

Teme koje podignete u BimCraftu izvoze se kao BCF ({{ui:Teme}}), što oba programa mogu čitati svojim BCF alatima, pa pitanje o elementu stiže osobi koja radi u drugom programu s njegovim prikazom (viewpoint).

Vidi i [Otvaranje paketa projekta](topic:open-project-bundle), [Od datoteke projekta do BimCrafta preko IFC-a](topic:rvt-to-ifc) i [Usporedba dviju verzija modela](topic:compare-versions).
