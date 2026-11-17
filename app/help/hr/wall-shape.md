---
title: Oblikovanje zida: pričvršćivanje, profil, nagib i otvori
summary: Pričvrstite vrh zida na krov, pod ili strop, dajte mu vlastiti obris pogleda sa strane, nagnite ga ili izrežite otvor bez vrata ili prozora, u Svojstvima, u pročelju ili presjeku, na pogledu plohe zida ili u 3D; svaka je promjena jedan korak poništavanja.
keywords: pričvrsti, pričvrsti vrh, pričvrsti dno, krov, ploča, strop, zabat, profil, uredi profil, obris pročelja, stepenasto, atika, nagib, nagnuto, naginjanje, zakrenuto, dvostruki nagib, otvor, otvor u zidu, rupa, prolaz, bez vrata, ručke, pročelje, presjek, 3D, pogled na plohu, zakrivljeni zid, kopija
from: f558b269
---

## Što ćete učiniti

Promijenite oblik zida iznad i ispod njegova tlocrta: vrh može pratiti krov, podnu ploču ili strop, može imati vlastiti obris viđen sa strane, može biti nagnut i može imati otvore bez vrata ili prozora. Tlocrt zida, njegovi kutovi i linija položaja ostaju kakvi su bili.

## Gdje to možete učiniti

- **Svojstva**: uz uključeno {{ui:Crtanje}} i uključeno {{ui:Odaberi}}, kliknite jedan zid koji ste nacrtali. **Svojstva** prikazuju retke zida, zatim **Oblik**, gdje se sve upisuje.
- **Pročelje ili presjek**: olovka u pregledniku projekta ({{ui:Uredi u ovom prikazu}}) otvara prikaz; odaberite zid tamo i povucite njegove ručke. Vidi „U pročelju ili presjeku“ u nastavku.
- **Pogled na plohu zida**: {{ui:Zidovi}} › {{ui:Uredi profil}}, zatim kliknite zid u tlocrtu. Radi za svaki zid, i za onaj koji nijedno pročelje ne gleda izravno, te za zakrivljeni zid (prikazan razvijen).
- **Tlocrt i 3D prikaz**: četiri naredbe u {{ui:Zidovi}} (grupa Uređivanje): {{ui:Pripoji vrh / dno}}, {{ui:Uredi profil}}, {{ui:Nagib}} i {{ui:Otvor u zidu}}. Vidi „U tlocrtu i u 3D“ u nastavku.

Bez obzira na način, to je ista promjena: jedan korak u **Promjene**, a {{ui:Poništi}} ga vraća.

I ravni i zakrivljeni zidovi imaju sve alate za oblik. Na zakrivljenom zidu udaljenosti idu duž njegova luka.

## Pričvrstite vrh ili dno

- **Pričvrsti na vrh**: odaberite krov, pod ili strop. Vrh zida prati donju stranu onoga što ste odabrali, ravno iznad svakog kuta zida. Pod nagnutim krovom zid dobiva kosi vrh, a gdje krov mijenja ravninu (sljeme ili kosina), vrh zida se savija s njim.
- **Pričvrsti na dno**: odaberite pod ili strop. Dno zida prati njegovu gornju plohu.
- Gdje iznad (ili ispod) nekog dijela zida nema ničega, taj dio zadržava vlastitu visinu zida.
- Veza ostaje: promijenite nagib ili prepust krova, ili visinu stropa, i pripojeni zidovi slijede u istom koraku.
- Odaberite **Vlastitu visinu** da je otpustite.

## Uredite profil

{{ui:Uredi profil…}} otvara obris zida viđen sa strane:

- **Gornja linija**: redovi **Duž** (udaljenost od početka zida) i **Visina** (iznad dna zida). Tri retka 0 / 3000, 2500 / 4500, 5000 / 3000 čine zabatni kraj na zidu od 5 m.
- **Donja linija**: ostavite prazno za razinsko dno, ili unesite retke za zid na stepenastom temelju.
- {{ui:Dodaj točku}} dodaje redak, a **Ukloni** ga uklanja. {{ui:Upotrijebi ovaj profil}} ga primjenjuje; {{ui:Natrag na ravno}} ga uklanja.

Svaka linija ide duž zida jednom, od početka do kraja; linija koja se vraća na sebe, ili vrh koji se spušta do dna, se odbija. Ako je pripojen i vrh, koristi se niža od dviju.

## Nagnite zid

**Nagib**: **Uspravno**, **Nagnuto** (obje plohe naginju na istu stranu, debljina ostaje) ili **Dvostruki nagib** (svaka ploha ima vlastiti kut: zid koji se tanji ili deblji kako se diže). Upišite stupnjeve od uspravnog položaja; pozitivan kut naginje zid ulijevo, gledano od njegova početka. Zid ostaje gdje je nacrtan na dnu; zidovi spojeni s njim se ne naginju zajedno s njim.

## Otvori bez vrata ili prozora

{{ui:Dodaj otvor}} izrezuje rupu širine 900 u sredini zida. Njegov redak u **Otvorima** postavlja **Od početka**, **Širina**, **Podprozornik** (od razine) i **Visina**; **Ukloni** ga briše. Otvor prolazi kroz cijeli zid, količine zida ga izostavljaju, a tlocrt pokazuje prazninu tamo gdje dopire do visine presjeka tlocrta. Kad se početak zida pomakne duž svoje linije, otvor zadržava svoje mjesto; promjena koja bi ga ostavila izvan zida se odbija.

## U pročelju ili presjeku

Otvorite prikaz olovkom u pregledniku projekta. Uz uključeno {{ui:Odaberi i pomakni}}:

- **Profil**: kliknite zid okrenut prikazu. Njegove gornja i donja linija postaju plave, s kvadratnom ručkom na svakoj točki i točkom u sredini svakog dijela.
  - Povucite kvadrat da pomaknete tu točku (dvije krajnje točke se pomiču samo gore i dolje).
  - Povucite točku da pomaknete cijeli dio gore ili dolje.
  - Dvaput kliknite liniju (ili je desnom tipkom kliknite) da dodate točku; {{ui:Dodaj točku (vrh)}} i {{ui:Dodaj točku (dno)}} dodaju je u sredini najdužeg dijela.
  - Kliknite kvadrat i pritisnite {{key:Delete}} (ili ga desnom tipkom kliknite) da uklonite tu točku. {{ui:Natrag na ravno}} uklanja profil.
  - S odabranom točkom upišite njezin **Duž** i **Visinu** u traku ispod alatne trake.
- **Pričvrsti**: traka ima popise **Pričvrsti na vrh** i **Pričvrsti na dno** za odabrani zid. Ili koristite alat {{ui:Pričvrsti na vrh}} ili {{ui:Pričvrsti na dno}}: kliknite zid ili zidove, zatim krov, pod ili strop, prikazane kao isprekidani okviri. Svi odabrani zidovi se pričvršćuju u jednom koraku.
- **Otvori u zidu**: s alatom {{ui:Otvor u zidu}} povucite pravokutnik na plohi zida. Natrag u {{ui:Odaberi i pomakni}}, povucite otvor da ga pomaknete, povucite jednu od njegovih osam ručki da promijenite veličinu, upišite **Od početka**, **Širina**, **Podprozornik** i **Visina** u traku, ili pritisnite {{key:Delete}} da ga uklonite.
- **Nagib**: zid kroz koji prikaz gleda (viđen s kraja, kao presjek kroz njega, ili u pročelju s njegova kraja) također se može kliknuti. Povucite okruglu ručku na njegovu vrhu da ga nagnete, ili u traci odaberite **Uspravno**, **Nagnuto** ili **Dvostruki nagib** i upišite kutove.

Dimenzije se hvataju na 10 mm; za sitnije vrijednosti upišite broj. Zakrivljeni zid može se uređivati u pročelju dok ide u jednom smjeru preko prikaza; njegov vlastiti pogled na plohu uvijek radi.

## U tlocrtu i u 3D

Otvorite {{ui:Zidovi}} u grupi Uređivanje:

- {{ui:Pripoji vrh / dno}}: odaberite **Pričvrsti na vrh** ili **Pričvrsti na dno** u retku alata. Kliknite zid ili zidove (u tlocrtu ili 3D prikazu), zatim ono na što se pričvršćuju: u 3D kliknite sam krov, pod ili strop; u tlocrtu kliknite točku ispod njega (kad je ih više, popis pita koji).
- {{ui:Uredi profil}}: u tlocrtu kliknite zid da otvorite njegov pogled na plohu. U 3D kliknite zid: njegove točke profila dobivaju ručke; povucite jednu u ravnini zida.
- {{ui:Nagib}}: kliknite zid (tlocrt ili 3D) i upišite koliko se naginje.
- {{ui:Otvor u zidu}}: u tlocrtu kliknite zid gdje ide otvor; njegova **Širina**, **Visina** i **Podprozornik** su u retku alata. U 3D kliknite jedan kut na plohi zida, zatim suprotni kut. S odabranim zidom u 3D, njegovi otvori imaju ručke: kutovi mijenjaju veličinu, a sredina pomiče.

3D ručke su vlastite ručke 3D prikaza, pa čekaju dok okvir presjeka prikazuje svoje ručke.

## Na tlocrtu

Nagnuti zid se crta tamo gdje ga tlocrt presijeca (1200 iznad razine, osim ako prikaz ne kaže drukčije): njegov obris je pomaknut za koliko se naginje na toj visini, a dvostruki nagib je tamo širi ili uži. Njegov obris na podu crta se tankim linijama onoga što leži ispod presjeka. Kutovi zida, ručke i kote ostaju na njegovu dnu.

## Kopije

{{ui:Kopiraj ovu razinu…}} i Pomakni s **Kopiraj** nose profil zida, nagib i otvore sa sobom. Zid pripojen podu ili stropu pripojen je na kopirani pod ili strop nove razine; pripojenje na krov se ne kopira s razinom (krovovi se ne kopiraju). Kopija na istoj razini ostaje pripojena istom krovu, podu ili stropu.

## U datoteci

Oblikovani zid zapisuje se kao faseta čvrstog tijela (IfcFacetedBrep), koje drugi programi čitaju kako je nacrtano; njegove postavke su na zidu (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Otvor je IfcOpeningElement u zidu, bez ičega što ga ispunjava.

## Nije još izrađeno

- Profil s prepustima ili rupama u obrisu (za rupe koristite otvore).
- U 3D: dodavanje ili uklanjanje točaka profila, i nagib pomoću ručke (koristite pogled na plohu zida, pročelje ili presjek, ili ga upišite).
- {{ui:Odmak}} s uključenim Kopiraj ne kopira oblik ni otvore zida (Pomakni s Kopiraj to čini).
- Slojevi nagnutog zida ne crtaju se na tlocrtima srednje i fine razine detalja (crta se njegov obris).
- Otvori koji nisu pravokutnici.
