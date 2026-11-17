---
title: Registrirajte več skenov v enega
summary: Postavite skene, posnete z različnih položajev, v en okvir z izbranimi pari točk ali vnesenimi tarčami, jih izboljšajte z ICP, shranite registracijo kot projekt in izvozite registrirani oblak kot LAS ali E57.
keywords: registracija, skeni, oblak točk, icp, iterativna najbližja točka, tarče, pari točk, toga transformacija, poravnava, združitev, e57, las, sken v bim
from: e8e270db
---

## Kaj boste naredili

Več skenov istega kraja (vsak iz svojega položaja skenerja) se začne v svojih koordinatah. Registrirajte jih: vsakemu skenu dajte eno postavitev, da so vsi v enem okviru, nato to shranite kot projekt in zapišite registrirani oblak v eno datoteko LAS ali E57.

## Postavite skene

1. Odprite pogovorno okno ({{ui:Registriraj skene…}} na začetni plošči ali {{ui:Pokaži}} › {{ui:Registriraj skene…}}, ko je model odprt). {{ui:Dodaj skene…}} sprejme datoteke LAS, LAZ, E57, PLY, PCD, PTX, PTS ali XYZ, ali jih spustite v pogovorno okno. Skeni z drugačnimi enotami so zavrnjeni z opombo: prej eno pretvorite.
2. Izberite {{ui:Sken za premik}} in {{ui:Postavi glede na}}. Slika prikaže vsak sken v okviru, kakršen je zdaj, vsakega v svoji barvi: {{ui:Tloris}}, {{ui:Spredaj}} ali {{ui:Bok}}; povlecite za pomik, s kolescem pa približajte.
3. **Po parih točk.** Kliknite {{ui:Izberi par}}, nato točko na skenu za premik, nato isto mesto na drugem skenu (vogal, tarča, podnožje stebra). Storite to vsaj trikrat, s točkami, ki niso na eni črti in so razporejene. Kliknite {{ui:Postavi po parih}}: sken se postavi z metodo najmanjših kvadratov, **Preostanek** pa pokaže, koliko vsak par še zgreši. Par z veliko številko je slaba izbira: odstranite ga s križcem in znova postavite.
4. **Po tarčah.** Če so znane prave koordinate točke (geodetske tarče), kliknite {{ui:Izberi, nato vnesi tarčo}}, kliknite točko na njenem skenu in v vrstico vnesite X, Y in Z tarče. Pari in vnesene tarče se lahko prosto mešajo.

## Izboljšajte z ICP

Pari dajo grobo postavitev. {{ui:Izboljšaj}} premakne sken, dokler se njegove površine ne prilegajo površinam drugega skena: najprej **točka do točke**, nato **točka do ravnine**. Tabela našteva vsak korak z njegovo napako in številom ujetih točk; vrstica nad njo riše padanje napake. {{ui:Ustavi}} konča tek po trenutnem koraku in ohrani, do česar je prišel. {{ui:Razveljavi}} vzame nazaj celoten tek (ali zadnjo postavitev); {{ui:Ponastavi}} vrne sken na koordinate njegove datoteke.

Da bo hitro tudi na prenosnem računalniku, ICP deluje na razredčenem deležu točk ({{ui:Uporabljene točke}}, od 5,000 do 60,000) in prezre ujemanja, oddaljena več kot {{ui:Največja razdalja ujemanja}} (privzeto 5 % velikosti skena, ki se manjša, ko se umiri). Najprej potrebuje grobo postavitev: skeni, ki se komaj prekrivajo, sporočijo, da jih ni mogoče ujemati. Površine, ki so samo ravne ali samo premočrtne, same po sebi ne morejo popraviti položaja vzdolž sebe; v tem primeru dodajte pare.

## Shranite in izvozite

- {{ui:Shrani projekt}} zapiše majhno datoteko `.ccscans.json`: ime, velikost in prstni odtis prvih 64 KB vsakega skena ter njegovo transformacijo. Ne vsebuje točk. {{ui:Odpri projekt…}} poišče datoteke skenov po teh sklicih (datoteke morajo biti prej dodane) in vrne vse transformacije.
- {{ui:Izvozi LAS}} in {{ui:Izvozi E57}} zapišeta eno datoteko z vsemi skeni na njihovem registriranem mestu. Točke v izvirnikih se nikoli ne prepišejo; transformacija se uporabi med izvozom. Ob vklopljenem {{ui:Preberi vse točke iz datotek}} se vsaka datoteka ponovno prebere za vsako točko (do 20 milijonov na sken); ob izklopu se zapišejo samo točke, prikazane v pregledovalniku.
- {{ui:Prikaži registrirani oblak}} (BimCraft) zapiše LAS in ga odpre v 3D pogledu poleg modela, kot kateri koli oblak.

:::note
Nič se ne naloži. Registracija deluje v lastnih enotah datotek in ohrani milimetre: LAS se zapiše z merilom, ki ustreza (do 0.1 mm), E57 pa z dvojnimi (double) števili. Koordinatni sistem se prenese v LAS samo, če vsi skeni navajajo isto kodo EPSG. Pisalnik E57 je naš; preverja se tako, da se njegove datoteke ponovno preberejo s tem bralnikom in z libE57Format.
:::
