---
title: Oblikovanje zida: vezivanje, profil, nagib i otvori
summary: Vežite vrh zida za krov, pod ili plafon, dajte mu vlastitu konturu gledanu sa strane, nagnite ga ili izrežite otvor bez vrata ili prozora, u Svojstvima, u izgledu ili presjeku, na vlastitom pogledu lica zida ili u 3D; svaka izmjena je jedan korak poništavanja.
keywords: vezivanje, vezivanje vrha, vezivanje podnožja, krov, ploča, plafon, zabat, profil, uredi profil, kontura izgleda, stepenasto, atika, nagib, nagnut, naginjanje, koso, konusno, dvostruki nagib, otvor, otvor u zidu, rupa, prolaz, bez vrata, hvatišta, izgled, presjek, 3D, pogled lica, zakrivljeni zid, kopija
from: f558b269
---

## Šta ćete uraditi

Promijenite oblik zida iznad i ispod njegove osnove: vrh može pratiti krov, ploču poda ili plafon, može imati vlastitu konturu gledanu sa strane, može biti nagnut, i može imati otvore bez vrata ili prozora u sebi. Osnova zida, njegovi uglovi i linija položaja ostaju kakvi su bili.

## Gdje to možete uraditi

- **Svojstva**: uz uključene {{ui:Crtanje}} i {{ui:Odaberi}}, kliknite jedan zid koji ste nacrtali. **Svojstva** prikazuju redove zida, zatim **Oblik**, gdje se sve upisuje.
- **Izgled ili presjek**: olovka u pregledu projekta ({{ui:Uredi u ovom pogledu}}) otvara pogled; izaberite zid tu i povucite njegova hvatišta. Vidi „U izgledu ili presjeku“ niže.
- **Vlastiti pogled lica zida**: {{ui:Zidovi}} › {{ui:Uredi profil}}, zatim kliknite zid u osnovi. Radi za svaki zid, i za onaj koji ni jedan izgled ne gleda ravno, i za zakrivljeni zid (prikazan razmotan).
- **Osnova i 3D**: četiri komande u {{ui:Zidovi}} (grupa Uredi): {{ui:Priključi vrh / dno}}, {{ui:Uredi profil}}, {{ui:Nagib}} i {{ui:Otvor u zidu}}. Vidi „U osnovi i u 3D“ niže.

Bez obzira na način, to je ista izmjena: jedan korak u **Promjenama**, a {{ui:Poništi}} ga vraća.

Zidovi ravni i zakrivljeni primaju sve alate Oblika. Na zakrivljenom zidu, udaljenosti idu duž njegovog luka.

## Vezivanje vrha ili podnožja

- **{{ui:Veži vrh}}**: izaberite krov, pod ili plafon. Vrh zida prati donju stranu onoga što ste izabrali, ravno iznad svakog ugla zida. Pod kosim krovom zid dobija nagnut vrh, a gdje krov mijenja ravan (sljeme ili kosa ivica), vrh zida se savija s njim.
- **{{ui:Veži podnožje}}**: izaberite pod ili plafon. Podnožje zida prati njegovu gornju stranu.
- Gdje ništa nije iznad (ili ispod) dijela zida, taj dio zadržava vlastitu visinu zida.
- Veza ostaje: promijenite nagib ili prepust krova, ili visinu plafona, i vezani zidovi slijede u istom koraku.
- Izaberite **Vlastita visina** da je otpustite.

## Uređivanje profila

{{ui:Uredi profil…}} otvara konturu zida gledanu sa strane:

- **Gornja linija**: redovi **Duž** (udaljenost od početka zida) i **Visina** (iznad podnožja zida). Tri reda 0 / 3000, 2500 / 4500, 5000 / 3000 prave zabat na zidu od 5 m.
- **Donja linija**: ostavite prazno za nivo podnožja, ili unesite redove za zid na stepenastom temelju.
- {{ui:Dodavanje tačke}} dodaje red, a {{ui:Ukloni}} ga briše. {{ui:Koristi ovaj profil}} ga primjenjuje; {{ui:Nazad na ravno}} ga uklanja.

Svaka linija ide duž zida jednom, od početka do kraja; linija koja se vraća na sebe, ili vrh koji dolazi do podnožja, se odbija. Ako je vezan i vrh, koristi se niža od dvije.

## Naginjanje zida

**Nagib**: **Uspravan**, **Nagnut** (obje strane se naginju u istom smjeru, debljina ostaje) ili **Dvostruki nagib** (svaka strana ima svoj ugao: zid koji se tanji ili širi kako raste). Upišite stepene od uspravnog; pozitivan ugao naginje ulijevo od zida, gledano od njegovog početka. Zid ostaje gdje je nacrtan na podnožju; zidovi spojeni s njim se ne naginju s njim.

## Otvori bez vrata ili prozora

{{ui:Dodaj otvor}} isijeca rupu širine 900 u sredini zida. Njen red u **Otvorima** postavlja **Od početka**, **Širina**, **Prag** (od nivoa) i **Visina**; {{ui:Ukloni}} ga izvadi. Otvor prolazi kroz cijeli zid, količine zida ga izostavljaju, a osnova pokazuje prazninu gdje dopire do visine presjeka. Kad se početak zida pomjeri duž svoje linije, otvor zadržava svoje mjesto; promjena koja bi ga ostavila izvan zida se odbija.

## U izgledu ili presjeku

Otvorite pogled olovkom u pregledu projekta. Uz uključeno {{ui:Odaberi i pomjeri}}:

- **Profil**: kliknite zid koji gleda u pogled. Njegove gornja i donja linija postaju plave, s kvadratnim hvatištem na svakoj tački i tačkom u sredini svakog dijela.
  - Povucite kvadrat da pomjerite tu tačku (dvije krajnje tačke se pomjeraju samo gore i dolje).
  - Povucite tačku da pomjerite cijeli dio gore ili dolje.
  - Dvaput kliknite liniju (ili desni klik) da dodate tačku tu; {{ui:Dodaj tačku (vrh)}} i {{ui:Dodaj tačku (dno)}} dodaju je u sredini najdužeg dijela.
  - Kliknite kvadrat i pritisnite Delete (ili desni klik) da uklonite tu tačku. {{ui:Nazad na ravno}} uklanja profil.
  - Kad je tačka izabrana, upišite njen **Duž** i **Visina** u traku ispod trake s alatima.
- **Vezivanje**: traka ima liste **Veži vrh** i **Veži podnožje** za izabrani zid. Ili koristite alat {{ui:Veži vrh}} ili {{ui:Veži podnožje}}: kliknite zid ili zidove, zatim krov, pod ili plafon, prikazane kao isprekidani okviri. Svi izabrani zidovi se vežu u jednom koraku.
- **Otvori u zidu**: alatom {{ui:Otvor u zidu}} povucite pravougaonik na licu zida. Natrag u {{ui:Odaberi i pomjeri}}, povucite otvor da ga pomjerite, povucite jedno od osam hvatišta da promijenite veličinu, upišite **Od početka**, **Širina**, **Prag** i **Visina** u traci, ili pritisnite Delete da ga uklonite.
- **Nagib**: zid koji pogled gleda duž (vidi se s kraja, kao presjek kroz njega, ili u izgledu s njegovog kraja) može se također kliknuti. Povucite okrugli ručicu na vrhu da ga nagnete, ili izaberite **Uspravan**, **Nagnut** ili **Dvostruki nagib** u traci i upišite uglove.

Veličine se hvataju na korak od 10 mm; za sitnije upišite vrijednost. Zakrivljeni zid se može uređivati u izgledu dok ide u jednom smjeru preko pogleda; njegov vlastiti pogled lica uvijek radi.

## U osnovi i u 3D

Otvorite {{ui:Zidovi}} u grupi Uredi:

- {{ui:Priključi vrh / dno}}: u redu alata izaberite **Veži vrh** ili **Veži podnožje**. Kliknite zid ili zidove (u osnovi ili 3D prikazu), zatim ono za šta se vezuju: u 3D kliknite sam krov, pod ili plafon; u osnovi kliknite tačku ispod njega (kad ih je više, lista pita koji).
- {{ui:Uredi profil}}: u osnovi kliknite zid da otvorite njegov pogled lica. U 3D kliknite zid: njegove tačke profila dobijaju hvatišta; povucite jedno u ravni zida.
- {{ui:Nagib}}: kliknite zid (osnova ili 3D) i upišite koliko se naginje.
- {{ui:Otvor u zidu}}: u osnovi kliknite zid na kojem ide otvor; njegova **Širina**, **Visina** i **Prag** su u redu alata. U 3D kliknite jedan ugao na licu zida, zatim suprotni ugao. S izabranim zidom u 3D, njegovi otvori imaju hvatišta: uglovi mijenjaju veličinu, sredina pomjera.

Hvatišta u 3D su vlastita hvatišta 3D prikaza, pa čekaju dok okvir presjeka prikazuje svoja hvatišta.

## Na osnovi

Nagnut zid se crta gdje ga osnova presijeca (1200 iznad nivoa, osim ako pogled ne kaže drugačije): njegova kontura je pomjerena za koliko se naginje na toj visini, a dvostruki nagib je tu širi ili uži. Njegova kontura na podu crta se tankim linijama onoga što leži ispod presjeka. Uglovi zida, hvatišta i kote ostaju na podnožju.

## Kopije

{{ui:Kopiraj ovaj nivo…}} i Pomjeri uz **Kopiraj** nose profil, nagib i otvore zida sa sobom. Zid vezan za pod ili plafon vezan je za kopirani pod ili plafon novog nivoa; vezivanje za krov se ne kopira s nivoom (krovovi se ne kopiraju). Kopija na istom nivou ostaje vezana za isti krov, pod ili plafon.

## U datoteci

Oblikovan zid se piše kao facetirano tijelo (IfcFacetedBrep), koje drugi programi čitaju onako kako je nacrtano; njegove postavke su na zidu (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Otvor je IfcOpeningElement u zidu, bez ičega u sebi.

## Još nije izrađeno

- Profil s prepustima ili rupama u konturi (za rupe koristite otvore).
- U 3D: dodavanje ili uklanjanje tačaka profila, i nagib preko ručice (koristite pogled lica zida, izgled ili presjek, ili ih upišite).
- {{ui:Pomak}} uz uključeno Kopiraj ne kopira oblik ni otvore zida (Pomjeri uz Kopiraj to radi).
- Slojevi nagnutog zida se ne crtaju u osnovama srednjeg i finog detalja (crta se njegova kontura).
- Otvori koji nisu pravougaonici.
