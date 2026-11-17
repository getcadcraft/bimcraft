---
title: Oblikovanje zida: pričvršćivanje, profil, nagib i otvori
summary: Pričvrstite vrh zida za krov, pod ili plafon, dajte mu sopstveni obris u izgledu, nagnite ga ili isecite otvor bez vrata ili prozora, u Svojstvima, u izgledu ili preseku, na pogledu lica zida ili u 3D; svaka izmena je jedan korak za opoziv.
keywords: pričvrsti, pričvrsti vrh, pričvrsti podnožje, krov, međuspratna ploča, plafon, zabat, profil, uredi profil, obris izgleda, stepenasto, atika, nagib, nagnut, sužen, dvostruki nagib, otvor, otvor u zidu, rupa, prolaz, bez vrata, hvatišta, izgled, presek, 3D, pogled lica, zakrivljen zid, kopija
from: f558b269
---

## Šta ćete uraditi

Promenite oblik zida iznad i ispod njegove osnove: vrh može da prati krov, međuspratnu ploču ili plafon; može imati sopstveni obris viđen sa strane; može biti nagnut; i može imati otvore bez vrata ili prozora. Osnova zida, njegovi uglovi i linija položaja ostaju kakvi su bili.

## Gde to možete uraditi

- **Svojstva**: uz uključen {{ui:Crtanje}} i uključen {{ui:Izaberi}}, kliknite jedan zid koji ste nacrtali. **Svojstva** prikazuju redove zida, zatim **Oblik**, gde se sve upisuje.
- **Izgled ili presek**: olovka u pregledaču projekta ({{ui:Uredi u ovom pogledu}}) otvara pogled; izaberite zid tu i prevucite njegove hvatače. Vidi „U izgledu ili preseku” niže.
- **Pogled lica zida**: {{ui:Zidovi}} › {{ui:Uredi profil…}}, pa kliknite zid u osnovi. Radi za svaki zid, i za onaj koji nijedan izgled ne gleda pravo, i za zakrivljen zid (prikazan razvijen).
- **Osnova i 3D prikaz**: četiri komande u {{ui:Zidovi}} (grupa Izmena): {{ui:Veži vrh / osnovu}}, {{ui:Uredi profil}}, {{ui:Nagib}} i {{ui:Otvor u zidu}}. Vidi „U osnovi i u 3D” niže.

Bez obzira na način, to je ista izmena: jedan korak u **Promenama**, a {{ui:Opozovi}} ga vraća.

Pravi i zakrivljeni zidovi prihvataju sve alate za oblik. Kod zakrivljenog zida, rastojanja idu duž njegovog luka.

## Pričvrstite vrh ili osnovu

- **{{ui:Pričvrsti vrh}}**: izaberite krov, pod ili plafon. Vrh zida prati donju stranu onoga što ste izabrali, pravo iznad svakog ugla zida. Pod kosim krovom zid dobija nagnut vrh, a tamo gde krov menja ravan (sleme ili ugaoni greben), vrh zida se savija s njim.
- **{{ui:Pričvrsti podnožje}}**: izaberite pod ili plafon. Osnova zida prati njegovo gornje lice.
- Gde iznad (ili ispod) dela zida nema ničega, taj deo zadržava sopstvenu visinu zida.
- Veza ostaje: promenite nagib ili prepust krova, ili visinu plafona, i pričvršćeni zidovi prate u istom koraku.
- Izaberite **Sopstvena visina** da biste prekinuli vezu.

## Uredite profil

{{ui:Uredi profil…}} otvara obris zida viđen sa njegove strane:

- **Gornja linija**: redovi **Duž** (rastojanje od početka zida) i **Visina** (iznad osnove zida). Tri reda 0 / 3000, 2500 / 4500, 5000 / 3000 prave zabat na zidu od 5 m.
- **Donja linija**: ostavite prazno za nivo osnove, ili unesite redove za zid na stepenastom temelju.
- {{ui:Dodaj tačku}} dodaje red, a **Ukloni** ga izbacuje. {{ui:Koristi ovaj profil}} ga primenjuje; {{ui:Nazad na ravno}} ga uklanja.

Svaka linija prolazi kroz zid jednom, od početka do kraja; linija koja se vraća sama na sebe, ili vrh koji silazi do osnove, se odbija. Ako je pričvršćen i vrh, koristi se niža od te dve.

## Nagnite zid

**Nagib**: **Uspravan**, **Nagnut** (obe strane se naginju u istom smeru, debljina ostaje) ili **Dvostruki nagib** (svaka strana ima svoj ugao: zid koji se pri rastu stanjuje ili zadebljava). Ukucajte stepene od uspravnog položaja; pozitivan ugao naginje ulevo od zida, gledano od njegovog početka. Zid ostaje tamo gde je nacrtan u osnovi; zidovi spojeni s njim se ne naginju zajedno s njim.

## Otvori bez vrata ili prozora

{{ui:Dodaj otvor}} seče rupu širine 900 u sredini zida. Njen red u **Otvorima** postavlja **Od početka**, **Širina**, **Podprozornik** (od nivoa) i **Visina**; **Ukloni** ga izbacuje. Otvor prolazi kroz ceo zid, količine zida ga izostavljaju, a osnova pokazuje prazninu tamo gde dopire do visine preseka osnove. Kad se početak zida pomera duž svoje linije, otvor zadržava svoje mesto; promena koja bi ga ostavila van zida se odbija.

## U izgledu ili preseku

Otvorite pogled olovkom u pregledaču projekta. Uz uključen {{ui:Izaberi i premesti}}:

- **Profil**: kliknite zid koji gleda ka pogledu. Njegove gornja i donja linija postaju plave, sa kvadratnim hvatačem na svakoj tački i tačkom u sredini svakog dela.
  - Prevucite kvadrat da pomerite tu tačku (dve krajnje tačke se pomeraju samo gore i dole).
  - Prevucite tačku da pomerite ceo deo gore ili dole.
  - Dvaput kliknite liniju (ili desni klik) da dodate tačku tu; {{ui:Dodaj tačku (vrh)}} i {{ui:Dodaj tačku (dno)}} dodaju jednu u sredini najdužeg dela.
  - Kliknite kvadrat i pritisnite Delete (ili desni klik na njega) da uklonite tu tačku. {{ui:Nazad na ravno}} uklanja profil.
  - Kad je tačka izabrana, upišite joj **Duž** i **Visina** u traku ispod alatki.
- **Pričvršćivanje**: traka ima liste **Pričvrsti vrh** i **Pričvrsti podnožje** za izabrani zid. Ili koristite alat {{ui:Pričvrsti vrh}} ili {{ui:Pričvrsti podnožje}}: kliknite zid ili zidove, pa krov, pod ili plafon, prikazane kao isprekidani okviri. Svi izabrani zidovi se pričvršćuju u jednom koraku.
- **Otvori u zidu**: alatom {{ui:Otvor u zidu}} prevucite pravougaonik na licu zida. Vratite se u {{ui:Izaberi i premesti}}: prevucite otvor da ga pomerite, prevucite jedan od njegovih osam hvatača da promenite veličinu, upišite **Od početka**, **Širina**, **Podprozornik** i **Visina** u traci, ili pritisnite Delete da ga uklonite.
- **Nagib**: zid u koji pogled gleda (vidi se s kraja, kao presek kroz njega, ili u izgledu sa svog kraja) može se takođe kliknuti. Prevucite okrugli hvatač na vrhu da ga nagnete, ili izaberite **Uspravan**, **Nagnut** ili **Dvostruki nagib** u traci i upišite uglove.

Mere se hvataju na 10 mm; za sitnije upišite vrednost. Zakrivljen zid može se uređivati u izgledu dok ide u jednom pravcu preko prikaza; njegov pogled lica uvek radi.

## U osnovi i u 3D

Otvorite {{ui:Zidovi}} u grupi Izmena:

- {{ui:Veži vrh / osnovu}}: izaberite **Pričvrsti vrh** ili **Pričvrsti podnožje** u redu alata. Kliknite zid ili zidove (u osnovi ili u 3D prikazu), pa ono za šta se pričvršćuju: u 3D kliknite sam krov, pod ili plafon; u osnovi kliknite tačku ispod njega (kad je ima više, lista pita koju).
- {{ui:Uredi profil}}: u osnovi kliknite zid da otvorite njegov pogled lica. U 3D kliknite zid: njegove tačke profila dobijaju hvatače; prevucite jedan u ravni zida.
- {{ui:Nagib}}: kliknite zid (osnova ili 3D) i upišite koliko se naginje.
- {{ui:Otvor u zidu}}: u osnovi kliknite zid na kom ide otvor; njegove **Širina**, **Visina** i **Podprozornik** su u redu alata. U 3D kliknite jedan ugao na licu zida, pa suprotan ugao. Kad je zid izabran u 3D, njegovi otvori imaju hvatače: uglovi menjaju veličinu, sredina pomera.

3D hvatači su hvatači samog 3D prikaza, pa čekaju dok kutija preseka prikazuje svoje hvatače.

## Na osnovi

Nagnut zid se crta tamo gde ga osnova preseca (1200 iznad nivoa, osim ako pogled ne kaže drugačije): njegov obris se pomera za koliko se naginje na toj visini, a dvostruki nagib je tamo širi ili uži. Njegov obris na podu crta se tankim linijama onoga što leži ispod preseka. Uglovi zida, hvatači i kote ostaju na njegovoj osnovi.

## Kopije

{{ui:Kopiraj ovaj nivo…}} i Premesti sa **Kopiraj** nose profil zida, nagib i otvore u zidu. Zid pričvršćen za pod ili plafon ostaje pričvršćen za kopiju poda ili plafona na novom nivou; pričvršćivanje za krov se ne kopira uz nivo (krovovi se ne kopiraju). Kopija na istom nivou ostaje pričvršćena za isti krov, pod ili plafon.

## U datoteci

Oblikovan zid se zapisuje kao fasetirano telo (IfcFacetedBrep), koje drugi programi čitaju onako kako je nacrtano; njegova podešavanja su na zidu (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Otvor je IfcOpeningElement u zidu, bez ičega što ga ispunjava.

## Nije još izrađeno

- Profil sa prepustima ili rupama u obrisu (za rupe koristite otvore).
- U 3D: dodavanje ili uklanjanje tačaka profila, i nagib preko hvatača (koristite pogled lica zida, izgled ili presek, ili ga upišite).
- {{ui:Pomeraj}} sa uključenim Kopiraj ne kopira oblik ni otvore u zidu (Premesti sa Kopiraj to radi).
- Slojevi nagnutog zida se ne crtaju na srednjim i finim osnovama (crta se njegov obris).
- Otvori koji nisu pravougaonici.
