---
title: Postavi izgled i otvori njegov pogled
summary: Postavi oznaku izgleda na osnovi sprata, usmjeri je prema onome što želiš vidjeti, zatim pronađi njegov crtež u pregledaču projekta, uredi ga i postavi na list. Koraci za layout sa trakom i za klasični layout.
keywords: izgled, pogled izgleda, oznaka izgleda, oznaka kote izgleda, postavi izgled, novi izgled, napravi izgled, vanjski izgled, bočni pogled, pogled sprijeda, pogled iz tačke, gdje je moj izgled, otvori izgled, izgled na listu, okreni izgled, preimenuj izgled, sjeverni izgled, poredaj poglede, podijeli pogled, osnova i 3D jedno pored drugog
from: a7cfd2b9
---

## Šta ćeš uraditi

Napravit ćeš vlastiti izgled: crtež zgrade viđene iz tačke koju odabereš, gledano u smjeru koji odabereš. Potrebna su dva klika na osnovi sprata. Crtež se zatim prikazuje zajedno sa ostalim izgledima zgrade.

:::note
Četiri strane već postoje. Svaka zgrada ima izglede Sjever, Istok, Jug i Zapad u {{ui:Pregledač projekta}} pod {{ui:Izgledi}}, bez ikakvog postavljanja. Postavi vlastiti kada želiš pogled sa neke druge strane: okomito na kosi dio zgrade, iz unutrašnjeg dvorišta ili na jedan zid unutar prostorije.
:::

## Gdje je alat

- Layout sa trakom: {{ui:Pogled}} › **Kreiraj** › {{ui:Kota}}.
- Klasični layout: uključi {{ui:Crtanje}}, zatim {{ui:Verzija}} › {{ui:Kota}}.
- Bilo koji stil menija: naredba se zove Elevation; paleta naredbi je pronalazi, a komandna linija prima ELEVATION.

## Koraci

1. Odaberi {{ui:Kota}}. Izgled se postavlja na osnovu sprata, pa ako si bio u 3D pogledu, BimCraft prikazuje osnovu sprata na kojem si bio. Pokazivač kaže **Klikni mjesto na kojem izgled stoji**.
2. Klikni mjesto sa kojeg se pogled uzima. Za vanjski izgled klikni izvan zgrade, malo podalje od zida koji želiš vidjeti.
3. Pokazivač sada kaže **Klikni kako izgleda**. Pomjeri se prema zgradi: strelica pokazuje smjer, a kratka linija preko prvog klika je ivica sa koje se gleda pogled. Klikni.
4. Na osnovi se pojavljuje krug sa brojem i pokazivačem. To je oznaka izgleda. Prva je 1, sljedeća 2.
5. Pritisni Esc za završetak ili nastavi i postavi još jednu.

Postavljanje oznake je jedan korak: {{key:Mod+Z}} ga poništava.

## Otvori crtež

Osnova ostaje ispred tebe nakon drugog klika. Crtež se nalazi u {{ui:Pregledač projekta}}:

1. Otvori {{ui:Izgledi}}. Tvoj izgled je naveden nakon četiri strane kao **Elevation 1**.
2. Klikni dugme olovke {{ui:Uredi u ovom pogledu}} u njegovom redu da vidiš crtež i radiš u njemu: pomjeraj zidove, vrata, prozore i nivoe, dodaj napomene i kote. Pogledaj [Uređivanje u izgledima i presjecima](topic:edit-in-elevations).
3. Klikni sam red da otvoriš set crteža ili dodaj pogled na vlastiti list. Pogledaj [Pogledi i listovi](topic:views-and-sheets).

U klasičnom layoutu pregledač projekta je u lijevom panelu dok je {{ui:Crtanje}} uključeno. U layoutima sa trakom to je kartica {{ui:Pregledač projekta}} pod Svojstva.

## Šta pogled prikazuje

- Sve što je ispred oznake, do granica zgrade. Ništa iza nje.
- Nivoe, sa njihovim nazivima i visinama.
- Ako oznaka stoji unutar zgrade, sve u čemu stoji biva presječeno na tom mjestu, kao što to radi presjek. Za čist vanjski izgled stani vani.

## Promjena

Odaberi oznaku na osnovi (klikni njen krug pomoću {{ui:Odaberi}}). Svojstva imaju:

- {{ui:Oznaka}}: njen broj ili vlastiti naziv, do 8 znakova.
- {{ui:Okreni pogled}}: gledanje u suprotnom smjeru sa istog mjesta.
- {{ui:Gledaj do}}: dokle ispred oznake pogled seže. 0 prikazuje sve.

Pritisni Delete da ukloniš oznaku i njen crtež. Poništi ih vraća.

:::tip
Da istovremeno vidiš osnovu i 3D pogled dok radiš, koristi {{ui:Pogled}} › **Prozori** › {{ui:Poredaj poglede}} u layoutima sa trakom, ili {{ui:Podijeli}} u klasičnom layoutu. Klik na karticu pogleda vraća na jedan pogled.
:::

## Ograničenja

- Oznaka se na osnovi još ne može prevući niti okrenuti. Ukloni je i postavi ponovo, ili koristi {{ui:Okreni pogled}}.
- U listi pogleda koje možeš dodati na list, vlastiti izgled je naveden zajedno sa presjecima.
- Oznake vrata i prozora crtaju se na četiri bočna izgleda, a ne na onom koji si postavio.

## U IFC-u

Oznaka se u datoteci čuva kao IfcAnnotation pod nazivom "Elevation 1" sa tipom objekta "Elevation marker", u nivou na kojem je postavljena. Drugi program je prikazuje kao anotaciju; sam crtež BimCraft izrađuje iz modela svaki put.
