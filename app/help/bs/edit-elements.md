---
title: Brisanje, izrezivanje, kopiranje i lijepljenje elemenata zgrade
summary: Odaberi zidove, vrata, namještaj ili bilo šta drugo u IFC modelu; obriši ih, izreži, ili ih kopiraj i zalijepi tamo gdje klikneš, na istom mjestu ili na drugom spratu.
keywords: izbriši, ukloni, obriši, izreži, kopiraj, zalijepi, dupliciraj, premjesti, odaberi sve, odaberi sve, element zgrade, zid, vrata, prozor, stepenište, otvor, poništi
from: d9eec37f
---

## Šta ćeš uraditi

Mijenjaš sadržaj IFC modela: uklanjaš elemente koje ne želiš, kopiraš zid ili skup namještaja na drugo mjesto, ili premještaš elemente izrezivanjem i lijepljenjem. Svaka promjena je jedan korak koji možeš poništiti, a spašavanje upisuje novu datoteku, tako da tvoj original ostaje takav kakav je bio.

## Koraci

1. Otvori IFC model. Vidi [Otvori IFC model i razgledaj ga u 3D-u](topic:open-ifc-model).
2. Odaberi ono što želiš promijeniti: klikni element, drži {{key:Mod}} ili {{key:Shift}} i klikni da odabereš još elemenata, ili pritisni {{key:Mod+A}} ({{ui:Više}}, {{ui:Odaberi sve}}) da odabereš sve prikazane elemente.
3. Zatim:
   - **Obriši:** pritisni {{key:Delete}}, ili {{ui:Više}}, {{ui:Obriši}}.
   - **Kopiraj:** pritisni {{key:Mod+C}} ili klikni {{ui:Kopiraj}}.
   - **Izreži:** pritisni {{key:Mod+X}}, ili {{ui:Više}}, {{ui:Izreži}}. Elementi nestaju, a ti ih možeš zalijepiti.
4. Za lijepljenje pritisni {{key:Mod+V}} ili klikni {{ui:Zalijepi}}. Prozirni okvir veličine onoga što si kopirao prati pokazivač na spratu izabranom u traci za postavljanje. Pritisni {{key:R}} da ga okreneš za 90°, pa klikni gdje treba da ide. Svaki klik postavlja još jednu kopiju; pritisni {{key:Esc}} da zaustaviš.
5. Ili pritisni {{key:Mod+Shift+V}} ({{ui:Više}}, {{ui:Zalijepi na mjesto}}): nakon izrezivanja elementi se vraćaju tačno na mjesto gdje su bili; nakon kopiranja kopija ide odmah pored originala.
6. Klikni {{ui:Spasi kao IFC}} da preuzmeš izmijenjeni model.

## Šta ide uz element

- **Dijelovi:** stepenište nosi svoje krakove, zavjesni zid svoje panele, a bilo šta sastavljeno od dijelova nosi ih sve.
- **Otvori:** zid nosi otvore izrezane u njemu. Brisanje vrata ili prozora briše i otvor koji su ispunjavali, pa se zid zatvori, kao i u autorskom programu. Brisanje zida nacrtanog u BimCraftu briše i njegova vrata i prozore i ponovo spaja preostale zidove. Brisanje zida iz datoteke napravljene drugdje ostavlja njegova vrata i prozore tamo gdje su bili.
- **Podaci:** kopija ima isti tip, materijale, skupove svojstava i količine kao original, te novi GlobalId. Kasnija promjena vrijednosti na kopiji ne dira original.
- **Stavke biblioteke** zadržavaju svoje podatke iz biblioteke; kopija dobija sljedeći slobodni broj stavke, a izrezana stavka vraćena lijepljenjem zadržava svoj broj.

## Šta treba da vidiš

- „Izbrisano: …" ili „Zalijepljeno: …" u listi {{ui:Promjene}}. {{key:Mod+Z}} vraća zadnju promjenu; {{key:Mod+Y}} je ponovo vraća.
- Nakon brisanja, statusna linija kaže koliko je dijelova i otvora otišlo zajedno s njim.
- Zalijepljeni elementi su odabrani, pa možeš ponovo zalijepiti na mjesto da napraviš red, ili ih obrisati.

## Dobro je znati

- Kopije koriste istu geometriju kao original (IFC dozvoljava da elementi dijele geometriju), pa datoteka jedva raste.
- Elementi zgrade lijepe se u model iz kojeg su kopirani, u istoj kartici. Za korištenje postavljenih stavki biblioteke u drugom modelu, kopiraj jednu po jednu stavku: vidi [Kopiraj, zalijepi i dupliciraj stavke biblioteke](topic:copy-paste).
- Spratovi, prostori, zgrade i parcela ne mogu se brisati ni kopirati. Umjesto toga odaberi elemente unutar njih. Prostorija nacrtana u BimCraftu nastaje od zidova oko nje: obriši zid da spojiš dvije prostorije.
- Zidovi, vrata i prozori nacrtani vlastitim alatima BimCraftu za zid, vrata i prozor se još ne mogu kopirati, izrezati ili duplicirati; statusna linija to kaže. Nacrtaj ih ponovo. Brisanje radi.
- Kopiranje također stavlja imena i svojstva onoga što si kopirao na tvoj međuspremnik kao tekst, da ga zalijepiš u tabelarni proračun ili e-poruku.

## Česte greške

- **{{ui:Obriši}} je zasivljeno.** Ništa nije odabrano, ili su odabrani samo spratovi ili prostori. Pokaži mišem na to da vidiš zašto.
- **Lijepljenje kaže da elementi dolaze iz drugog modela.** Otvorio si drugi model otkad si kopirao. Otvori prvi model ponovo i kopiraj ih tamo.
- **Zalijepljena kopija je na drugom spratu.** {{ui:Sprat}} u traci za postavljanje odlučuje gdje ide; izaberi sprat prije nego klikneš.

## Povezano

- [Sakrij, izoluj i vidi kroz elemente](topic:hide-and-isolate)
- [Tipke i miš](topic:keyboard#edit)
