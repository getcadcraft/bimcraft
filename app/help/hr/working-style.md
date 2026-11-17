---
title: Radni stil, duplicirani prikazi, olovke pri ispisu, Prijavi kao i predlošci
summary: Odaberite kako se BimCraft ponaša za vaš način rada, duplicirajte bilo koji prikaz kao vlastitu kopiju ili kao povezani, zadržite prebrisavanja olovaka u datoteci i ispisujte kako je prikazano ili kroz tablicu olovaka, prijavite element kao drugu IFC klasu i pokrenite projekte iz vlastitih predložaka.
keywords: radni stil, dupliciraj prikaz, dupliciraj, kopiraj prikaz, ovisni prikaz, povezani prikaz, vlastita kopija, kopija prikaza, prebrisavanja olovaka, olovke, debljine linija, ispiši kako je prikazano, tablica olovaka, stil ispisa, ctb, monokromno, sivi tonovi, prijavi kao, IFC klasa, preklasificiraj, unaprijed definirani tip, generički model, ploča kao cesta, zid kao panel, krov kao rampa, predložak projekta, predložak, novo iz predloška, spremi kao predložak, uredski standard
from: 231d98b0
---

## Što ćete učiniti

Postavite BimCraft za način na koji radite, duplicirajte prikaze, ispisujte ih kako očekujete, brojite elemente kao ono što stvarno jesu i započnite svaki projekt iz predloška vašeg ureda.

## Odaberite radni stil

1. Otvorite {{ui:Postavke}} i karticu {{ui:BimCraft}}. Pronađite {{ui:Radni stil}}.
2. Odaberite jedno:
   - {{ui:Svaki prikaz zasebno}} (prvi izbor): duplicirani prikaz kopira svoje bilješke i one ostaju njegove; listovi se ispisuju kako ih prikazuje zaslon.
   - {{ui:Zajedničke bilješke i tablice olovaka}}: duplicirani prikazi dijele bilješke; ispis ide kroz tablicu olovaka.
3. Ispod izbora nalaze se četiri stvari koje on postavlja. Promijenite bilo koju pojedinačno; radni stil tada glasi {{ui:Prilagođeno}}.

Radni stil se čuva u ovom pregledniku, kao i raspored radnog prostora. Predložak ga prenosi na nove modele.

## Dupliciranje prikaza

1. U {{ui:Preglednik projekta}} svaki tlocrt etaže, tlocrt stropa, oznaka pozivanja, pročelje i presjek imaju gumb {{ui:Dupliciraj}} (dva lista).
2. Imenujte kopiju i odaberite kako se ponaša:
   - {{ui:Vlastita kopija}}: njezini crtački elementi, kote, izrez, skriveni elementi i olovke kopiraju se i ostaju njezini. Uređivanje bilo kojeg prikaza nikada ne mijenja drugi, pa prikaz na izdanom listu ostaje kakav je bio izdan.
   - {{ui:Povezano}}: prikazuje isti prikaz s jednim skupom bilješki i postavki.
3. Kopija se navodi pod {{ui:Duplicirani prikazi}}. Kliknite je da je otvorite; traka iznad tlocrta kaže da je riječ o kopiji, s gumbom {{ui:Gore}} za povratak na njezin prikaz.
4. Njezin gumb s klizačem otvara njezine postavke: naziv, {{ui:Raspon pogleda}} (vlastita kopija ima svoj), {{ui:Napravi vlastitu kopiju}} za povezanu i {{ui:Izbriši}}.

Kopije pročelja i presjeka idu na vaše listove kao prikazi iz kojih su nastale. Dupliciranje je jedan korak poništavanja, a kopije se čuvaju u IFC-u uz oznake pozivanja.

## Olovke zadržane uz prikaz i ispisane kako je prikazano

1. Uključite {{ui:Crtanje}} i odaberite {{ui:Pera}}.
2. {{ui:Za}} sada navodi svaku kategoriju: zidove, vrata i prozore, ploče, krovove, stupove, stubišta, namještaj i ostalo te crtačke elemente i kote.
3. {{ui:Primijeni}} zadržava olovku u IFC-u uz prikaz koji se vidi: tlocrt, tlocrt stropa, oznaku pozivanja ili dupliciran prikaz. Olovke napravljene prije verzije 0.9 bile su spremljene u pregledniku; {{ui:Zadrži ove u datoteci}} ih premješta.
4. Listovi i PDF crtaju svaku olovku kako je prikazano na zaslonu.

Za ispis kroz tablicu olovaka umjesto toga postavite {{ui:Ispis}} u retku Pera na {{ui:Kroz tablicu olovaka}}, zatim odaberite tablicu (boja, monokromna, sivi tonovi) ili {{ui:Uredi tablicu olovaka…}}: svaka boja dobiva boju, debljinu i rasterizaciju kojima se ispisuje. Tablica je datoteka stila ispisa aplikacije CadCraft, pa {{ui:Uvezi…}} prihvaća tablicu napravljenu u aplikaciji CadCraft, a {{ui:Izvezi}} vraća jednu. Model zadržava svoj izbor; ako izbora nema, odlučuje radni stil.

## Prijavite element kao drugu klasu

Ploča nacrtana kao cesta, zid korišten kao panel, krov oblikovan kao rampa: zadržite alat kojim ste ga nacrtali i prijavite ga kao ono što jest.

1. Odaberite element i otvorite {{ui:Svojstva}}. Otvorite {{ui:Prijavi kao}}.
2. U okvir za pretraživanje upišite klasu koja odgovara obliku, odaberite je zajedno s njezinim unaprijed definiranim tipom. Za vlastiti tip odaberite USERDEFINED i dajte mu naziv.
3. {{ui:Primijeni}} (jedan korak poništavanja). {{ui:Očisti}} ga ponovno prijavljuje kao nacrtan.

I dalje ga uređujete alatom kojim je nacrtan. Spremljeni IFC zapisuje prijavljenu klasu, pa ga drugi programi, {{ui:Količine}} popis, Pronađi, Boja prema, provjere modela i {{ui:Problemi}} broje kao tu klasu. Specifikacije (tablice) izostavljaju zid prijavljen kao panel iz specifikacije zidova, a {{ui:Elementi po prijavljenoj klasi}} navodi svaki takav element. Radi u datotekama IFC4 i IFC2X3; popis nudi samo klase koje ima IFC verzija datoteke. Vrata, prozori, stubišta, prostorije i razine zadržavaju vlastitu klasu.

## Spremite projekt kao predložak i počnite iz njega

1. Dok je projekt otvoren, kliknite {{ui:Spremi kao predložak}} uz {{ui:Spremi}}.
2. Dajte mu naziv. Označite {{ui:Također preuzmi datoteku predloška}} da ga podijelite kao IFC datoteku i {{ui:Novi modeli počinju od njega}} da ga postavite kao zadani.
3. Predložak zadržava razine, predloške prikaza i postavke prikaza, duplicirane prikaze i oznake pozivanja, crtačke elemente, olovke i tablicu olovaka, oznake, obitelji i tipove, listove, veličine listova, zaglavlja i radni stil. Zidovi, podovi, vrata i svi drugi elementi modela nisu uključeni.
4. Kliknite {{ui:Nova zgrada}} i odaberite ga pod {{ui:Počni od}}, ili odaberite {{ui:Datoteka predloška…}} za onaj koji vam je poslan. Novi projekt dobiva vlastiti naziv i vlastiti identitet projekta; sve ostalo je kako ga predložak ima.

:::note
Predlošci se čuvaju u ovom pregledniku. Timski predlošci dijeljeni putem CadCraft Studija još nisu izrađeni: umjesto toga pošaljite datoteku predloška.
:::
