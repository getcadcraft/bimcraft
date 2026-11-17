---
title: Simboli, tipi in sredstva, predloge projektov in hitri kompleti
summary: Knjižnica ima tri vrste elementov (simboli, tipi, sredstva). Dodajte tip v svoj projekt, začnite iz skupne predloge projekta, dodajte hitri komplet in delite lastne prek strani za nalaganje v knjižnici.
keywords: knjižnica, simboli, tipi, sredstva, tip, tip stene, tip tal, tip strehe, tip stropa, predloga projekta, predloga, hitri komplet, komplet, deli, nalaganje, različica, dnevnik sprememb, LOD, klasifikacija, licenca, opombe iz prakse
from: e13b0e67
---

## Kaj boste naredili

Poiščite v knjižnici, kar potrebujete glede na to, kaj je, dodajte tip projektu, ki ga rišete, začnite nov projekt iz predloge, ki jo je nekdo delil, in delite lastne predloge, tipe in komplete.

## Tri vrste elementov knjižnice

- **Simboli** so risalne konvencije: samo 2D, narisani v velikosti označb, združeni po disciplini.
- **Tipi** povedo, iz česa je element: njegove plasti z dejansko debelino, njegovo stopnjo razvoja (LOD) in klasifikacijsko kodo. Tip se doda projektu, ne riše se.
- **Sredstva** so fizični predmeti, kot so vrata, okna, pohištvo, sanitarne naprave in oprema, z pogledom na tloris in 3D telesom v naravni velikosti.

V zavihku {{ui:Knjižnica}} izberite {{ui:Knjižnica}} in z **Vrsta elementa** prikažite Vse, Simboli, Tipi ali Sredstva.

## Dodajte tip v svoj projekt

1. Pod **Vrsta elementa** izberite **Tipi** in ga odprite.
2. Pod sliko preverite njegovo zgradbo, LOD in klasifikacijo, nato izberite {{ui:Dodaj v ta projekt}}.
3. Doda se kot tip stene, tal, strehe ali stropa, s katerim lahko rišete. Če tip s tem imenom že obstaja, se novi doda kot kopija, vaš pa ostane nespremenjen. Ena operacija {{ui:Razveljavi}} ga odstrani.

## Predloge projektov in hitri kompleti

Izberite {{ui:Kompleti}}, da vidite, kar so ljudje delili.

- **Predloga projekta** je datoteka IFC z nivoji, mrežami, tipi in nastavitvami. {{ui:Shrani med moje predloge}} jo da pod Nova zgradba v **Začni iz**.
- **Hitri komplet** je seznam elementov knjižnice. {{ui:Pokaži elemente kompleta}} jih našteje kot kartice, ki jih lahko postavite.
- Vsak komplet ima različico in dnevnik sprememb, najnovejši najprej. Različica, ki se začne z 0, je za razpravo; 1.0.0 je samo za tisto, kar je lastnik linije sprejel.

## Delite lastne

- **Predloga projekta:** {{ui:Shrani kot predlogo}}, označite {{ui:Ustvari tudi datoteko za deljenje v Knjižnici}}, dodajte, kaj vsebuje, in različico. Dobite datoteko `.json`.
- **Hitri komplet:** v {{ui:Kompleti}} izberite Naredi hitri komplet iz tega projekta. Našteje elemente knjižnice, ki jih projekt uporablja.
- **Tip:** v {{ui:Paketi tipov}} označite en tip in izberite {{ui:Shrani kot element knjižnice…}}.

Datoteko naložite na stran za nalaganje v knjižnici. Gre skozi isti pregled kot vsak element, licenco pa tam izberete: vsak element navede svojo licenco. Od elementov zahtevamo njihov LOD, razred IFC in klasifikacijsko kodo (kodo, ne samo ime).

## Izkušnje iz prakse

Na strani vsakega elementa knjižnice lahko prijavljeni člani dodajo opombo: uporabljeno v resničnem projektu, preizkušeno na vzorčnem projektu ali najdena težava. Z nekaj besedami povejte, za kakšno vrsto projekta gre, in ne navajajte imen strank. Opomba je javna in ni ocena: ne spremeni elementa.

## Dobro je vedeti

- Iz aplikacije se nič ne pošlje. Datoteke se naredijo na vašem računalniku, nalagate jih sami.
- Komplet, narejen iz predloge, nosi besedilo IFC točno tako, kot je shranjeno. Pred nalaganjem ga preglejte za vse zasebno.
- CadCraft prikazuje simbole in sredstva na svojem zavihku Knjižnica; tipi in predloge so za projekte BimCraft.
