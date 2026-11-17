---
title: Brisanje, izrezivanje, kopiranje i lijepljenje građevnih elemenata
summary: Odaberite zidove, vrata, namještaj ili bilo što drugo u IFC modelu; izbrišite ih, izrežite ili kopirajte i zalijepite gdje kliknete, na istom mjestu ili na drugoj etaži.
keywords: izbriši, ukloni, obriši, izreži, kopiraj, zalijepi, dupliciraj, premjesti, odaberi sve, građevni element, zid, vrata, prozor, stubište, otvor, poništi
from: d9eec37f
---

## Što ćete učiniti

Mijenjate sadržaj IFC modela: uklanjate elemente koji vam nisu potrebni, kopirate zid ili skup namještaja na drugo mjesto ili premještate elemente izrezivanjem i lijepljenjem. Svaka promjena je jedan korak koji možete poništiti, a spremanje zapisuje novu datoteku, tako da vaša izvorna datoteka ostaje kakva je bila.

## Koraci

1. Otvorite IFC model. Pogledajte [Otvaranje IFC modela i razgledavanje u 3D-u](topic:open-ifc-model).
2. Odaberite što želite promijeniti: kliknite element, držite {{key:Mod}} ili {{key:Shift}} i kliknite da odaberete još elemenata, ili pritisnite {{key:Mod+A}} ({{ui:Više}}, {{ui:Odaberi sve}}) za odabir svih prikazanih elemenata.
3. Zatim:
   - **Brisanje:** pritisnite {{key:Delete}} ili {{ui:Više}}, {{ui:Izbriši}}.
   - **Kopiranje:** pritisnite {{key:Mod+C}} ili kliknite {{ui:Kopiraj}}.
   - **Izrezivanje:** pritisnite {{key:Mod+X}} ili {{ui:Više}}, {{ui:Izreži}}. Elementi nestaju, a možete ih zalijepiti.
4. Za lijepljenje pritisnite {{key:Mod+V}} ili kliknite {{ui:Zalijepi}}. Prozirni okvir veličine onoga što ste kopirali prati pokazivač na etaži odabranoj u traci za postavljanje. Pritisnite {{key:R}} za zakretanje za 90°, zatim kliknite mjesto na kojem želite element. Svaki klik postavlja još jednu kopiju; pritisnite {{key:Esc}} za zaustavljanje.
5. Ili pritisnite {{key:Mod+Shift+V}} ({{ui:Više}}, {{ui:Zalijepi na isto mjesto}}): nakon izrezivanja elementi se vraćaju točno tamo gdje su bili; nakon kopiranja kopija se postavlja odmah uz izvorne elemente.
6. Kliknite {{ui:Spremi kao IFC}} za preuzimanje uređenog modela.

## Što ide uz element

- **Dijelovi:** stubište uzima svoje krakove, zavjesni zid svoje panele, a sve što se sastoji od dijelova uzima sve njih.
- **Otvori:** zid uzima otvore izrezane u njemu. Brisanje vrata ili prozora briše i otvor koji su ispunjavali, pa se zid zatvara, kao i u programu za izradu projekata. Brisanje zida nacrtanog u programu BimCraft briše i njegova vrata i prozore te ponovno spaja preostale zidove. Brisanje zida iz datoteke izrađene drugdje ostavlja njegova vrata i prozore na mjestu.
- **Podaci:** kopija ima isti tip, materijale, skupove svojstava i količine kao original te novi GlobalId. Promjena vrijednosti na kopiji kasnije ne utječe na original.
- **Stavke knjižnice** zadržavaju svoje podatke iz knjižnice; kopija dobiva sljedeći slobodni broj stavke, a izrezana stavka vraćena lijepljenjem zadržava svoj broj.

## Što biste trebali vidjeti

- „Izbrisano: …“ ili „Zalijepljeno: …“ u popisu {{ui:Promjene}}. {{key:Mod+Z}} vraća zadnju promjenu; {{key:Mod+Y}} je ponovno vraća.
- Nakon brisanja statusna linija kaže koliko je dijelova i otvora također otišlo.
- Zalijepljeni elementi su odabrani, pa ih možete zalijepiti na isto mjesto da napravite niz ili ih obrisati.

## Dobro je znati

- Kopije koriste istu geometriju kao original (IFC dopušta da elementi dijele geometriju), pa datoteka vrlo malo raste.
- Građevni elementi lijepe se u model iz kojeg su kopirani, na istoj kartici. Za korištenje postavljenih stavki knjižnice u drugom modelu kopirajte jednu po jednu stavku: pogledajte [Kopiranje, lijepljenje i dupliciranje stavki knjižnice](topic:copy-paste).
- Etaže, prostori, zgrade i lokacija ne mogu se brisati ni kopirati. Odaberite elemente unutar njih. Prostorija nacrtana u programu BimCraft nastaje od zidova oko nje: obrišite zid da spojite dvije prostorije.
- Zidovi, vrata i prozori nacrtani vlastitim alatima programa BimCraft za zidove, vrata i prozore još se ne mogu kopirati, izrezati ili duplicirati; statusna linija to navodi. Nacrtajte ih ponovno. Brisanje radi.
- Kopiranje također stavlja imena i svojstva onoga što ste kopirali u međuspremnik kao tekst, za lijepljenje u tablicu ili e-poruku.

## Česte pogreške

- **Gumb {{ui:Izbriši}} je zasivljen.** Ništa nije odabrano ili su odabrane samo etaže ili prostori. Pokažite na gumb da vidite razlog.
- **Lijepljenje kaže da elementi dolaze iz drugog modela.** Otvorili ste drugi model nakon kopiranja. Ponovno otvorite prvi model i tamo kopirajte elemente.
- **Zalijepljena kopija je na drugoj etaži.** O tome odlučuje {{ui:Etaža}} u traci za postavljanje; odaberite etažu prije klika.

## Povezano

- [Skrivanje, izoliranje i prozirni prikaz elemenata](topic:hide-and-isolate)
- [Tipkovnica i miš](topic:keyboard#edit)
