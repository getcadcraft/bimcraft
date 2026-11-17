---
title: Radni stil, dupli pogledi, olovke za štampu, Prijavi kao i šabloni
summary: Izaberi kako se BimCraft ponaša u tvom načinu rada, dupliraj bilo koji pogled kao sopstvenu kopiju ili kao povezan, čuvaj prepisane olovke u datoteci i štampaj kako se vidi ili preko tabele olovaka, prijavi element kao drugu IFC klasu i počni projekte iz svojih šablona.
keywords: radni stil, dupliraj pogled, dupliraj, kopiraj pogled, zavisni pogled, povezan pogled, sopstvena kopija, kopija pogleda, prepisivanje olovaka, olovke, debljine linija, štampaj kako se vidi, tabela olovaka, plot stil, ctb, monohromno, sivi tonovi, prijavi kao, ifc klasa, reklasifikuj, predefinisani tip, generički model, ploča kao put, zid kao panel, krov kao rampa, šablon projekta, šablon, novo iz šablona, sačuvaj kao šablon, kancelarijski standard
from: 231d98b0
---

## Šta ćeš raditi

Podesi BimCraft za način na koji radiš, zatim dupliraj poglede, štampaj ih onako kako očekuješ, prebroj elemente kao ono što zaista jesu i započni svaki projekat iz šablona tvoje kancelarije.

## Izaberi radni stil

1. Otvori {{ui:Podešavanja}} i karticu {{ui:BimCraft}}. Pronađi {{ui:Radni stil}}.
2. Izaberi jedno:
   - {{ui:Svaki pogled za sebe}} (prvi izbor): dupliran pogled kopira svoje napomene i one ostaju tog pogleda; listovi se štampaju onako kako se vide na ekranu.
   - {{ui:Zajedničko označavanje i tabele olovaka}}: dupli pogledi dele svoje napomene; štampanje ide preko tabele olovaka.
3. Ispod izbora su četiri stvari koje on podešava. Promeni bilo koju pojedinačno; stil tada glasi {{ui:Prilagođeno}}.

Radni stil se čuva u ovom pregledaču, kao i raspored radnog prostora. Šablon ga prenosi na nove modele.

## Dupliraj pogled

1. U {{ui:Pregledač projekta}}, svaka osnova sprata, plan plafona, oznaka, izgled i presek imaju dugme {{ui:Dupliraj}} (dva lista).
2. Imenuj kopiju i izaberi kako se ponaša:
   - {{ui:Sopstvena kopija}}: njeni crteži, kote, isecanje, skriveni elementi i olovke se kopiraju i ostaju njeni. Izmena bilo kog pogleda nikada ne menja drugi, pa pogled na izdatom listu ostaje kakav je izdat.
   - {{ui:Povezano}}: prikazuje isti pogled sa jednim skupom napomena i podešavanja.
3. Kopija je navedena pod {{ui:Dupli pogledi}}. Klikni je da je otvoriš; traka iznad osnove kaže da je kopija, sa {{ui:Gore}} za povratak na njen pogled.
4. Dugme klizača otvara njena podešavanja: ime, {{ui:Opseg prikaza}} (sopstvena kopija ima svoj), {{ui:Napravi sopstvenu kopiju}} za povezanu i {{ui:Izbriši}}.

Kopije izgleda i preseka idu na tvoje listove kao pogledi iz kojih su nastale. Dupliranje je jedan korak u opozivu, a kopije se čuvaju u IFC-u uz detaljne oznake.

## Olovke uz pogled, štampane kako se vide

1. Uključi {{ui:Crtanje}} i izaberi {{ui:Olovke}}.
2. {{ui:Za}} sada navodi svaku kategoriju: zidove, vrata i prozore, ploče, krovove, stubove, stepenice, nameštaj i ostalo, kao i crtanje i kote.
3. {{ui:Primeni}} čuva olovku u IFC-u uz prikazani pogled: osnovu, plan plafona, detaljnu oznaku ili dupli pogled. Olovke napravljene pre 0.9 bile su sačuvane u pregledaču; {{ui:Čuvaj ove u datoteci}} ih premešta.
4. Listovi i PDF crtaju svaku olovku onako kako je ekran prikazuje.

Da bi štampao preko tabele olovaka, u redu Olovke postavi {{ui:Štampaj}} na {{ui:Preko tabele olovaka}}, zatim izaberi tabelu (boja, monohromno, sivi tonovi) ili {{ui:Izmeni tabelu olovaka…}}: svaka boja dobija boju, debljinu i raster sa kojim se štampa. Tabela je CadCraft-ova datoteka stila štampanja, pa {{ui:Uvezi…}} prihvata tabelu napravljenu u aplikaciji CadCraft, a {{ui:Izvezi}} vraća jednu. Model zadržava svoj izbor; ako nema izbora, odlučuje radni stil.

## Prijavi element kao drugu klasu

Ploča nacrtana kao put, zid korišćen kao panel, krov oblikovan kao rampa: zadrži alatku kojom si je nacrtao i prijavi je kao ono što jeste.

1. Izaberi element i otvori {{ui:Svojstva}}. Otvori {{ui:Prijavi kao}}.
2. Ukucaj u polje za pretragu da nađeš klasu koja odgovara obliku, izaberi je i njen predefinisani tip. Za tip po svom izboru izaberi USERDEFINED i daj mu ime.
3. {{ui:Primeni}} (jedan korak u opozivu). {{ui:Obriši}} ga ponovo prijavljuje kao nacrtan.

I dalje ga menjaš alatkom kojom je nacrtan. Sačuvani IFC ga zapisuje kao prijavljenu klasu, pa ga drugi programi, {{ui:Količine}} predmer, Pronađi, Boji prema, provere modela i {{ui:Problemi}} broje kao tu klasu. Specifikacije izostavljaju zid prijavljen kao panel iz specifikacije zidova, a {{ui:Elementi po prijavljenoj klasi}} navodi svaki. Radi u IFC4 i IFC2X3 datotekama; lista nudi samo klase koje ima IFC verzija datoteke. Vrata, prozori, stepenice, prostorije i nivoi zadržavaju svoju klasu.

## Sačuvaj projekat kao šablon i počni od njega

1. Dok je projekat otvoren, klikni {{ui:Sačuvaj kao šablon}} pored {{ui:Sačuvaj}}.
2. Imenuj ga. Označi {{ui:Takođe preuzmi datoteku šablona}} da ga podeliš kao IFC datoteku, i {{ui:Novi modeli počinju od njega}} da ga postaviš kao podrazumevani.
3. Šablon čuva nivoe, šablone pogleda i podešavanja pogleda, dupli pogledi i oznake, crtanje, olovke i tabelu olovaka, etikete, familije i tipove, listove, veličine listova, naslovne blokove i radni stil. Zidovi, podovi, vrata i svi ostali elementi modela se izostavljaju.
4. Klikni {{ui:Nova zgrada}} i izaberi je pod {{ui:Počni od}}, ili izaberi {{ui:Datoteka šablona…}} za onaj koji ti je poslat. Novi projekat dobija sopstveno ime i sopstveni identitet projekta; sve ostalo je kako ga šablon ima.

:::note
Šabloni se čuvaju u ovom pregledaču. Timski šabloni deljeni preko CadCraft Studija još nisu napravljeni: umesto toga pošalji datoteku šablona.
:::
