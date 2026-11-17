---
title: Radni stil, dupli pogledi, olovke za štampu, Prijavi kao i šabloni
summary: Odaberite kako se BimCraft ponaša za način na koji radite, dupliciraj bilo koji pogled kao vlastitu kopiju ili kao povezan, zadržite prepisivanja olovki u datoteci i štampajte kako se prikazuje ili kroz tabelu pera, prijavite element kao drugu IFC klasu i počnite projekte iz vlastitih šablona.
keywords: radni stil, dupliraj pogled, dupliraj, kopiraj pogled, zavisni pogled, povezani pogled, vlastita kopija, kopija pogleda, prepisivanje olovki, olovke, debljine linija, štampaj kako se prikazuje, tabela pera, plot stil, ctb, monohromatski, sivi tonovi, prijavi kao, ifc klasa, ponovo klasifikuj, predefinisani tip, generički model, ploča kao cesta, zid kao panel, krov kao rampa, šablon projekta, šablon, novi iz šablona, spasi kao šablon, kancelarijski standard
from: 231d98b0
---

## Šta ćete raditi

Podesite BimCraft za način na koji radite, duplicirajte poglede, štampajte ih kako očekujete, brojite elemente kao ono što stvarno jesu i započnite svaki projekat iz šablona vaše kancelarije.

## Izaberite radni stil

1. Otvorite {{ui:Postavke}} i karticu {{ui:BimCraft}}. Pronađite {{ui:Radni stil}}.
2. Izaberite jedno:
   - {{ui:Svaki pogled svoj}} (prvi izbor): duplicirani pogled kopira svoja označavanja i ona ostaju za taj pogled; listovi se štampaju kako ekran prikazuje.
   - {{ui:Zajednička označavanja i tabele pera}}: dupli pogledi dijele označavanja; štampanje ide kroz tabelu pera.
3. Ispod izbora su četiri stvari koje on postavlja. Promijenite bilo koju pojedinačno; stil tada glasi {{ui:Prilagođeno}}.

Radni stil se čuva u ovom pregledaču, kao i raspored radnog prostora. Šablon ga prenosi na nove modele.

## Dupliraj pogled

1. U {{ui:Pregledaču projekta}}, svaki tlocrt, tlocrt plafona, oznaka, izgled i presjek ima dugme {{ui:Dupliraj}} (dva lista).
2. Imenujte kopiju i izaberite kako se ponaša:
   - {{ui:Vlastita kopija}}: njeni nacrti, kote, isjecanje, skriveni elementi i olovke se kopiraju i ostaju njeni. Uređivanje bilo kojeg pogleda nikad ne mijenja drugi, pa pogled na izdatom listu ostaje kakav je izdat.
   - {{ui:Povezano}}: prikazuje isti pogled sa jednim skupom označavanja i postavki.
3. Kopija je navedena pod {{ui:Dupli pogledi}}. Kliknite je da je otvorite; traka iznad tlocrta kaže da je kopija, s dugmetom {{ui:Gore}} za povratak na njen pogled.
4. Njeno dugme s klizačem otvara njene postavke: ime, {{ui:Opseg prikaza}} (vlastita kopija ima svoj), {{ui:Napravi vlastitu kopiju}} za povezanu, i {{ui:Obriši}}.

Kopije izgleda i presjeka idu na vaše listove kao pogledi iz kojih su nastale. Dupliranje je jedan korak poništavanja, a kopije se čuvaju u IFC-u uz oznake.

## Olovke uz pogled, štampane kako se prikazuju

1. Uključite {{ui:Crtanje}} i izaberite {{ui:Olovke}}.
2. {{ui:Za}} sada navodi svaku kategoriju: zidove, vrata i prozore, ploče, krovove, stubove, stepenice, namještaj i ostalo, te crtanje i kote.
3. {{ui:Primijeni}} zadržava olovku u IFC-u uz prikazani pogled: tlocrt, tlocrt plafona, oznaku ili dupliciran pogled. Olovke napravljene prije verzije 0.9 bile su sačuvane u pregledaču; {{ui:Zadrži ovo u datoteci}} ih premješta.
4. Listovi i PDF crtaju svaku olovku kako je prikazuje ekran.

Da štampate kroz tabelu pera, u redu {{ui:Olovke}} postavite {{ui:Štampaj}} na {{ui:Preko tabele pera}}, pa izaberite tabelu (boja, monohromatska, sivi tonovi) ili {{ui:Uredi tabelu pera…}}: svaka boja dobija boju, debljinu i rasterizaciju kojima se štampa. Tabela je CadCraft-ova datoteka stila štampanja, pa {{ui:Uvezi…}} prihvata tabelu napravljenu u aplikaciji CadCraft, a {{ui:Izvezi}} vraća jednu. Model zadržava svoj izbor; ako izbora nema, odlučuje radni stil.

## Prijavi element kao drugu klasu

Ploča nacrtana kao cesta, zid korišten kao panel, krov oblikovan kao rampa: zadržite alat kojim ste ga nacrtali i prijavite ga kao ono što jeste.

1. Odaberite element i otvorite {{ui:Svojstva}}. Otvorite {{ui:Prijavi kao}}.
2. Upišite u polje za pretragu da nađete klasu koja odgovara obliku, izaberite je i njen predefinisani tip. Za vlastiti tip izaberite USERDEFINED i dajte mu ime.
3. {{ui:Primijeni}} (jedan korak poništavanja). {{ui:Obriši}} ga prijavljuje ponovo onako kako je nacrtan.

I dalje ga uređujete alatom kojim je nacrtan. Sačuvani IFC ga zapisuje kao prijavljenu klasu, pa ga drugi programi, {{ui:Količine}} (predmjer), Pronađi, Boji po, provjere modela i {{ui:Problemi}} broje kao tu klasu. Specifikacije izostavljaju zid prijavljen kao panel iz specifikacije zidova, a {{ui:Elementi po prijavljenoj klasi}} navodi svaki takav. Radi u IFC4 i IFC2X3 datotekama; lista nudi samo klase koje odgovaraju IFC verziji datoteke. Vrata, prozori, stepenice, prostorije i nivoi zadržavaju svoju klasu.

## Spasite projekat kao šablon i počnite iz njega

1. Dok je projekat otvoren, kliknite {{ui:Spasi kao šablon}} pored {{ui:Spasi}}.
2. Imenujte ga. Označite {{ui:Također preuzmi datoteku šablona}} da ga podijelite kao IFC datoteku, i {{ui:Nove modele započni iz njega}} da ga postavite kao zadani.
3. Šablon zadržava nivoe, šablone pogleda i postavke pogleda, duplirane poglede i oznake, nacrte, olovke i tabelu pera, etikete, porodice i tipove, listove, veličine listova, naslovne blokove i radni stil. Zidovi, podovi, vrata i svi ostali elementi modela se izostavljaju.
4. Kliknite {{ui:Nova zgrada}} i izaberite ga pod {{ui:Počni od}}, ili izaberite {{ui:Datoteka šablona…}} za onaj koji vam je poslan. Novi projekat dobija svoje ime i svoj identitet projekta; sve ostalo je kako je u šablonu.

:::note
Šabloni se čuvaju u ovom pregledaču. Timski šabloni podijeljeni kroz CadCraft Studio još nisu napravljeni: umjesto toga pošaljite datoteku šablona.
:::
