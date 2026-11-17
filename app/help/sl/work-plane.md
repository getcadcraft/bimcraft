---
title: Delovna ravnina: nastavite, prikažite, poglejte nanjo naravnost
summary: Delovna ravnina je ravnina, na kateri delujejo črte modela, besedilo modela in pregledovalnik delovne ravnine. Nastavite jo na nivo, ploskev, poimenovano referenčno ravnino ali črto; prikažite jo v pogledih; odprite pregledovalnik, da rišete na navpično ravnino.
keywords: delovna ravnina, nastavi delovno ravnino, prikaži delovno ravnino, referenčna ravnina, pregledovalnik delovne ravnine, poimenovana ravnina, ploskev, nivo, navpična ravnina, risanje na steno, pogled fasade, lovljenje, poravnava, ref ravnina
from: 8aceee1d
---

## Kaj boste naredili

Izberite ravnino, na kateri rišete, poglejte, kje je, in rišite na ravnino, ki stoji navpično.

## Koraki

1. Vklopite **Risanje** in odprite meni **Gradnja** (pri postavitvi s trakom: zavihek Arhitektura, Delovna ravnina).
2. Izberite **Nastavi delovno ravnino**. Nato storite eno od naslednjega:
   - izberite nivo v **Nastavi na**;
   - izberite poimenovano referenčno ravnino na seznamu ob njem;
   - kliknite črto v tlorisu: steno, mrežno črto, referenčno ravnino, črto modela ali sistem zaves. Delovna ravnina postane navpična ravnina skozi to črto;
   - kliknite ravno ploskev v 3D pogledu. Delovna ravnina leži na tej ploskvi.
3. Izberite **Prikaži delovno ravnino**, da jo vidite: obarvana plošča z mrežo po metru v 3D pogledu, črtkan obris ali črta v tlorisu in črtkan obris v podoknu fasad in prerezov. Ponovno izberite, da jo skrijete.
4. Izberite **Pregledovalnik delovne ravnine**, da ravnino pogledate naravnost. Črne črte so model, ki ga ravnina prereže. Z njegovimi orodji na ravnino narišete črto modela, besedilo modela ali referenčno ravnino. **Poglej v 3D** obrne 3D pogled tako, da je obrnjen proti ravnini.

## Referenčne ravnine

Referenčna ravnina je poimenovana ravnina, ki jo narišete kot črto.

1. Izberite **Referenčna ravnina**. Če želite ime, ga vpišite v njeno vrstico (sicer ga dobi samodejno), in vpišite višino.
2. Kliknite, kje se začne, in kje konča. V tlorisu to naredi navpično ravnino. V pregledovalniku delovne ravnine naredi ravnino, ki stoji pravokotno na delovno ravnino.
3. Prikaže se kot zelena črtkana črta z imenom v tlorisu, črtkan obris v 3D pogledu ter v podoknu fasad in prerezov.
4. Izberite jo, da ji spremenite ime, dolžino, višino in podnožje, ali pritisnite **Uporabi kot delovno ravnino**.

Dve referenčni ravnini ne moreta imeti istega imena, ker je ime način, kako jo izberete.

## Dobro je vedeti

- Model, na katerem ni nastavljena delovna ravnina, deluje na svojem najnižjem nivoju.
- Delovna ravnina se shrani v datoteko. Prikazovanje ali skrivanje se zapomni v tem brskalniku, ne v datoteki.
- Če delovna ravnina sledi referenčni ravnini in to ravnino premaknete, se delovna ravnina premakne z njo.
- Na navpični delovni ravnini orodji Črta modela in Besedilo modela odpreta pregledovalnik, ker tloris ne more kazati na višino.
- Orodja za risanje ujamejo krajišča referenčnih ravnin, narisanih v tlorisu, enako kot krajišča drugih črt v pregledovalniku.

## V datoteki IFC

- Delovna ravnina je nabor lastnosti (CadCraft_WorkPlane) na projektu.
- Referenčna ravnina je IfcAnnotation z vrsto objekta ReferencePlane in svojim imenom. Njena oblika je zaprt obris ravnine, zato drugi program pokaže, kje je. Njen nabor CadCraft_ReferencePlane hrani izhodišče, smer, normalo in obseg. IFC nima razreda za referenčno ravnino; oznaka se ne šteje kot gradbeni element in ne omejuje prostorov.
