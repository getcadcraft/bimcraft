---
title: Oblikovanje zidu: pritrditev, profil, nagib in odprtine
summary: Pritrdite vrh zidu na streho, ploščo ali strop, mu dajte lasten obris pogleda z boka, ga nagnite ali izrežite odprtino brez vrat ali okna, v Lastnostih, v pogledu ali prerezu, na čelnem pogledu zidu ali v 3D; vsaka sprememba je en korak razveljavitve.
keywords: pritrdi, pritrdi zgoraj, pritrdi spodaj, streha, plošča, strop, čelna stena, zabat, profil, uredi profil, obris pogleda, stopničasto, atika, nagib, nagnjen, poševen, stožčast, dvojni nagib, odprtina, odprtina v zidu, luknja, prehod, brez vrat, ročice, pogled, prerez, 3D, čelni pogled, ukrivljen zid, kopija
from: f558b269
---

## Kaj boste naredili

Spremenite obliko zidu nad in pod njegovim tlorisom: njegov vrh lahko sledi strehi, talni plošči ali stropu, lahko ima svoj obris, gledan z boka, lahko je nagnjen in lahko ima odprtine brez vrat ali oken. Tloris zidu, njegovi koti in črta lokacije ostanejo takšni, kot so bili.

## Kje to naredite

- **Lastnosti**: ob vklopljenem {{ui:Risanje}} in {{ui:Izberi}} kliknite en zid, ki ste ga narisali. **Lastnosti** pokažejo vrstice zidu, nato **Oblika**, kjer se vse vpiše.
- **Pogled ali prerez**: svinčnik v brskalniku projekta ({{ui:Uredi v tem pogledu}}) odpre pogled; tam izberite zid in povlecite njegove ročice. Glejte »V pogledu ali prerezu« spodaj.
- **Lastni čelni pogled zidu**: {{ui:Zidovi}} › {{ui:Uredi profil…}}, nato kliknite zid v tlorisu. Deluje za vsak zid, tudi za tistega, ki ga noben pogled ne gleda naravnost, in za ukrivljen zid (prikazan razvit).
- **Tloris in pogled 3D**: štirje ukazi v {{ui:Zidovi}} (skupina Uredi): {{ui:Pritrdi zgoraj}}, {{ui:Uredi profil}}, {{ui:Nagib}} in {{ui:Odprtina v steni}}. Glejte »V tlorisu in v 3D« spodaj.

Ne glede na izbiro je sprememba ista: en korak v **Spremembah**, ki ga {{ui:Razveljavi}} povrne.

Ravni in ukrivljeni zidovi sprejmejo vsa orodja za obliko. Na ukrivljenem zidu razdalje tečejo po njegovem loku.

## Pritrditev vrha ali spodnjega roba

- **Pritrdi zgoraj**: izberite streho, ploščo ali strop. Vrh zidu sledi spodnji strani izbranega, naravnost nad vsakim vogalom zidu. Pod strmo streho zid dobi nagnjen vrh, kjer streha spremeni ravnino (sleme ali kapni greben), pa se vrh zidu upogne skupaj z njo.
- **Pritrdi spodaj**: izberite talno ploščo ali strop. Spodnji rob zidu sledi njegovi zgornji ploskvi.
- Kjer nič ni nad (ali pod) delom zidu, ta del ohrani lastno višino zidu.
- Povezava ostane: spremenite naklon ali previs strehe ali višino stropa, pritrjeni zidovi pa sledijo v istem koraku.
- Izberite **Lastna višina**, da povezavo prekinete.

## Uredite profil

{{ui:Uredi profil…}} odpre obris zidu, gledan z boka:

- **Zgornja črta**: vrstice **Vzdolž** (razdalja od začetka zidu) in **Višina** (nad spodnjim robom zidu). Tri vrstice 0 / 3000, 2500 / 4500 in 5000 / 3000 naredijo zabat na 5 m zidu.
- **Spodnja črta**: pustite prazno za spodnji rob nivoja ali vnesite vrstice za zid na stopničastem temelju.
- {{ui:Dodaj točko}} doda vrstico, **Odstrani** jo vzame ven. {{ui:Uporabi ta profil}} ga uveljavi, {{ui:Nazaj na ravno}} pa ga odstrani.

Vsaka črta teče vzdolž zidu enkrat, od začetka do konca; črta, ki se vrača sama vase, ali vrh, ki pade do spodnjega roba, je zavrnjen. Če je hkrati pritrjen vrh, se uporabi nižja od obeh.

## Nagib zidu

**Nagib**: **Pokončno**, **Nagnjeno** (obe ploskvi se nagneta v isto smer, debelina ostane) ali **Dvojni nagib** (vsaka ploskev ima svoj kot: zid, ki se pri dvigovanju zoži ali razširi). Vpišite stopinje od pokončnega; pozitiven kot se nagne na levo stran zidu, gledano z njegovega začetka. Zid ostane tam, kjer je narisan na spodnjem robu; zidovi, ki so nanj priključeni, se z njim ne nagibajo.

## Odprtine brez vrat ali okna

{{ui:Dodaj odprtino}} izreže luknjo širine 900 na sredini zidu. Njena vrstica v **Odprtinah** nastavi **Od začetka**, **Širino**, **Polico** (od nivoja) in **Višino**; **Odstrani** jo vzame ven. Odprtina gre skozi ves zid, količine zidu jo izpustijo, tloris pa pokaže režo tam, kjer doseže višino reza tlorisa. Ko se začetek zidu premakne vzdolž svoje črte, odprtina ohrani svoje mesto; sprememba, ki bi jo pustila zunaj zidu, je zavrnjena.

## V pogledu ali prerezu

Odprite pogled s svinčnikom v brskalniku projekta. Z vklopljenim {{ui:Izberi in premakni}}:

- **Profil**: kliknite zid, ki gleda v pogled. Njegovi zgornja in spodnja črta postaneta modri, z kvadratno ročico na vsaki točki in piko na sredini vsakega kosa.
  - Povlecite kvadrat, da premaknete to točko (obe krajišči se premikata samo navzgor in navzdol).
  - Povlecite piko, da premaknete ves kos navzgor ali navzdol.
  - Dvakrat kliknite črto (ali jo desno kliknite), da tam dodate točko. {{ui:Dodaj točko (zgoraj)}} in {{ui:Dodaj točko (spodaj)}} dodata točko na sredini najdaljšega kosa.
  - Kliknite kvadrat in pritisnite Delete (ali ga desno kliknite), da odstranite to točko. {{ui:Nazaj na ravno}} odstrani profil.
  - Ko je točka izbrana, vpišite njeno **Vzdolž** in **Višino** v trak pod orodno vrstico.
- **Pritrditev**: trak ima seznama **Pritrdi zgoraj** in **Pritrdi spodaj** za izbrani zid. Lahko uporabite tudi orodje {{ui:Pritrdi zgoraj}} ali {{ui:Pritrdi spodaj}}: kliknite zid ali zidove, nato streho, ploščo ali strop, prikazane kot črtkani okvirji. Vsi izbrani zidovi se pritrdijo v enem koraku.
- **Odprtine v zidu**: z orodjem {{ui:Odprtina v steni}} povlecite pravokotnik na ploskvi zidu. Nazaj v {{ui:Izberi in premakni}} povlecite odprtino, da jo premaknete, povlecite eno od njenih osmih ročic, da spremenite velikost, vpišite **Od začetka**, **Širino**, **Polico** in **Višino** v trak ali pritisnite Delete, da jo odstranite.
- **Nagib**: zid, na katerega pogled gleda vzdolž (viden s konca, kot prerez skozi njega ali v pogledu s konca), je mogoče tudi klikniti. Povlecite okrogel ročaj na vrhu, da ga nagnete, ali v traku izberite **Pokončno**, **Nagnjeno** ali **Dvojni nagib** in vpišite kote.

Velikosti se privezujejo na 10 mm; za vse natančnejše vnesite vrednost. Ukrivljeni zid je mogoče urejati v pogledu, dokler poteka v eno smer čez pogled; njegov lastni čelni pogled vedno deluje.

## V tlorisu in v 3D

Odprite {{ui:Zidovi}} v skupini Uredi:

- {{ui:Pripni vrh / spodnji rob}}: v vrstici orodja izberite **Pritrdi zgoraj** ali **Pritrdi spodaj**. Kliknite zid ali zidove (v tlorisu ali v 3D pogledu), nato tisto, na kar se pritrjujejo: v 3D kliknite samo streho, ploščo ali strop; v tlorisu kliknite točko pod njim (če je tam več stvari, seznam vpraša, katera).
- {{ui:Uredi profil}}: v tlorisu kliknite zid, da odprete njegov čelni pogled. V 3D kliknite zid: njegove točke profila dobijo ročice; povlecite eno v ravnini zidu.
- {{ui:Nagib}}: kliknite zid (tloris ali 3D) in vpišite, za koliko se nagiba.
- {{ui:Odprtina v steni}}: v tlorisu kliknite zid, kjer gre odprtina; njeni **Širina**, **Višina** in **Polica** so v vrstici orodja. V 3D kliknite en vogal na ploskvi zidu, nato nasprotni vogal. Ko je zid izbran v 3D, imajo njegove odprtine ročice: vogali spreminjajo velikost, sredina premika.

Ročice v 3D so ročice samega 3D pogleda, zato počakajo, medtem ko škatla prereza prikazuje svoje ročice.

## V tlorisu

Nagnjen zid je narisan tam, kjer ga tloris reže (1200 nad nivojem, razen če pogled ne določa drugače): njegov obris se premakne za toliko, kolikor se pri tej višini nagiba, dvojni nagib pa je tam širši ali ožji. Njegov obris na tleh je narisan s tankimi črtami tistega, kar leži pod rezom. Koti zidu, ročice in kote ostanejo na njegovem spodnjem robu.

## Kopije

{{ui:Kopiraj ta nivo …}} in Premakni s **Kopiraj** prenesejo profil zidu, nagib in odprtine v zidu. Zid, pritrjen na talno ploščo ali strop, je pritrjen na kopirano talno ploščo ali strop novega nivoja; pritrditev na streho se z nivojem ne kopira (strehe se ne kopirajo). Kopija na istem nivoju ostane pritrjena na isto streho, talno ploščo ali strop.

## V datoteki

Oblikovan zid je zapisan kot telo z ravnimi ploskvami (IfcFacetedBrep), ki ga druga programa berejo tako, kot je narisan; njegove nastavitve so na zidu (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Odprtina je IfcOpeningElement v zidu brez ničesar, kar bi jo zapolnilo.

## Še ni izdelano

- Profil z previsi ali luknjami v obrisu (za luknje uporabite odprtine).
- V 3D: dodajanje ali odstranjevanje točk profila ter nagib z ročico (uporabite čelni pogled zidu, pogled ali prerez, ali vpišite vrednosti).
- {{ui:Odmik}} s vklopljenim **Kopiraj** ne kopira oblike ali odprtin v zidu (Premakni s Kopiraj jih kopira).
- Plasti nagnjenega zidu se ne rišejo v tlorisih s srednjo in fino podrobnostjo (njegov obris pa da).
- Odprtine, ki niso pravokotne.
