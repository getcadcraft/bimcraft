---
title: Pogledi, rasponi pogleda i vaši vlastiti listovi
summary: Pronađite svaki plan, izgled, presjek, 3D pogled, specifikaciju i list u pregledaču projekta, podesite kako se svaki plan siječe i šta prikazuje, pravite izdvojene prikaze, crtajte linije i šrafure u jednom pogledu, čuvajte postavke u šablonima pogleda i rasporedite listove koje sami pravite.
keywords: izdvojeni prikaz, prikaz detalja, uvećani plan, crtanje, linije detalja, linije crtanja, šrafura, područje šrafure, ispunjeno područje, obrazac ispune, osnova plafona, rcp, mreža plafona, svjetiljke, pregledač projekta, pogledi, raspon pogleda, izrezivanje, područje izrezivanja, razmjera pogleda, podloga, prikaz drugog nivoa, polutonski, ravan presjeka, visina presjeka, vrh, dno, dubina pogleda, vidljivost, kategorije, sakrij u pogledu, šablon pogleda, šabloni, list, listovi, blok naslova, prozor pogleda, razmjera, raspored listova, raspored, pdf, postavke plana, pregledač
from: ee1d5afe
---

## Šta ćete raditi

Radite onako kako su BIM projekti organizovani: svaki pogled na jednoj listi, svaki plan presječen tamo gdje želite, iste postavke za više planova kroz šablon, i listovi koje sami rasporedite.

## Pregledač projekta

1. Uključite {{ui:Draw}}. Lijevi panel ima {{ui:Project browser}} ispod modela.
2. Navodi:
   - **Planovi spratova**: svaki nivo. Kliknite jedan da vidite njegov plan. Dugme klizača pored njega postavlja raspon pogleda (ispod). Plan koji prati šablon prikazuje naziv šablona.
   - **Osnove plafona**: osnova plafona svakog nivoa (ispod).
   - **Izdvojeni prikazi**: svaki izdvojeni prikaz s pogledom na kojem je nacrtan, i {{ui:New callout}}. **Nedostaje** navodi izdvojene prikaze čiji je pogled nestao.
   - **Izgledi** i **Presjeci**: četiri strane i svaka linija presjeka. Kliknite jedan da otvorite skup crteža u kojem su nacrtani.
   - **3D pogledi**: pogledi koje ste sačuvali s {{ui:Views}}.
   - **Specifikacije**: kliknite jednu da se prikaže ispod plana.
   - **Listovi**: listovi koje ste napravili, {{ui:New sheet}}, i {{ui:Drawing set…}} za cijeli skup napravljen iz modela.
   - **Šabloni pogleda**, s {{ui:New template}}, i **Veze** (povezani modeli).

## Postavite raspon pogleda plana

1. Kliknite dugme klizača pored nivoa u **Planovi spratova**.
2. Postavite visine, iznad tog nivoa:
   - **Presjek na**: gdje plan siječe zidove, vrata i prozore (1200 mm, oko 4 ft, osim ako ne promijenite).
   - **Vrh**: stvari iznad presjeka i ispod vrha crtaju se isprekidano (visoki ormarić, greda). Ostavite prazno za visinu nivoa.
   - **Dno** i **Dubina ispod dna**: stvari niže od presjeka crtaju se tankim linijama do dna, i toliko ispod njega.
3. Pod **Prikazano u ovom planu**, odznačite šta ovaj plan izostavlja: namještaj, prostorije, stubove i tako dalje.
4. Da izostavite pojedinačne elemente: izaberite ih u planu ili 3D pogledu, otvorite dijalog i kliknite {{ui:Hide the selected here}}. {{ui:Show them all}} ih vraća.
5. Kliknite {{ui:Use these settings}}.

Plan se odmah ponovo siječe, a skup crteža i vaši listovi ga prate. Isječak oblaka tačaka također prati visinu presjeka.

## Izrežite plan, dajte mu razmjeru, prikažite drugi nivo ispod

Sve tri su u istom dijalogu (dugme klizača pored nivoa):

- **Razmjera**: razmjera u kojoj se plan štampa ({{ui:Print}} na traci plana) i kojom ulazi na list. {{ui:Fit}} bira najveću standardnu razmjeru koja stane.
- **Područje izrezivanja**: kliknite {{ui:Draw on the plan…}}, zatim kliknite jedan ugao i suprotni ugao na planu ({{key:Esc}} zaustavlja). Plan izvan područja je zamagljen na ekranu, a i dalje možete raditi tamo; odštampano, na listovima i u skupu crteža, plan prikazuje samo ono što je unutra. {{ui:Clear}} uklanja izrezivanje. {{ui:Fit}} uklapa izrezivanje.
- **Podloga**: izaberite drugi nivo. Njegovi zidovi, presječeni elementi, vrata i prozori crtaju se svijetlo ispod ovog plana, da poravnate stvari s nivoom ispod ili iznad. Ne možete ih ovdje birati, i štampaju se svijetlo sivo.

Šablon pogleda nosi razmjeru uz visine i kategorije. Područje izrezivanja i podloga uvijek pripadaju jednom planu.

## Osnova plafona nivoa

Svaki nivo ima osnovu plafona pored svog plana sprata: plan viđen odozdo, za raspoređivanje plafona i onoga što visi s njih.

1. Kliknite nivo pod **Osnove plafona** u pregledaču, ili izaberite {{ui:Ceiling plan}} pored nivoa na traci plana.
2. Zidovi su presječeni na 2300 mm (oko 7'-6"). Crta se ono što leži iznad tog presjeka i ispod visine nivoa: plafoni s njihovom mrežom i oznakom visine (`CLG 2438`), svjetiljke, grede. Vrata, prozori i ono što leži ispod presjeka su izostavljeni.
3. Da napravite plafon, koristite {{ui:Ceiling}} kao na planu sprata, zatim ga izaberite i odaberite njegov **Obrazac** u Svojstvima. Vidi [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs).
4. Da o njega objesite svjetiljku, postavite stavku iz biblioteke dok je osnova plafona prikazana: ide u **Na plafonu**. Vidi [Postavljanje opreme i namještaja iz biblioteke](topic:place-from-library).
5. Dugme klizača pored osnove plafona postavlja njen presjek i vrh, razmjeru, kategorije, područje izrezivanja i podlogu, kao za plan sprata. Osnove plafona ne uzimaju šablon pogleda.

Crta se na isti način kao plan sprata (reflektovani plan, a ne ogledalska slika). Plafon niži od presjeka se ne crta: spustite presjek za osnovu plafona tog nivoa. Osnove plafona idu na vaše listove kao planovi; skup crteža ih sam ne dodaje.

## Napravite izdvojeni prikaz

Izdvojeni prikaz prikazuje dio plana uvećan, u vlastitoj razmjeri, kao zaseban pogled: kuhinju, stepenice, ugao zida.

1. Prikažite plan, osnovu plafona ili izdvojeni prikaz kome pripada.
2. Izaberite {{ui:Annotate}} › {{ui:Callout}} na traci plana (ili {{ui:New callout}} u pregledaču), zatim kliknite jedan ugao područja i suprotni ugao. {{key:Esc}} zaustavlja.
3. Izdvojeni prikaz se pravi u 1:20 (1/2" = 1'-0" u stopama i inčima). Njegov pravougaonik i okrugla oznaka se crtaju na planu.
4. Kliknite oznaku s {{ui:Select}}, ili izdvojeni prikaz u pregledaču, da ga otvorite: plan prikazuje samo to područje, u razmjeri izdvojenog prikaza. Traka kaže {{ui:Callout:}} i njegov naziv; {{ui:Up}} vraća na pogled na kojem je nacrtan.
5. Dugme klizača pored njega (u pregledaču ili na traci) preimenuje ga, mijenja mu razmjeru, ponovo crta pravougaonik ili ga briše.

Izdvojeni prikaz prikazuje ono što prikazuje njegov pogled: isti presjek, iste kategorije, plafone osnove plafona. Izdvojeni prikaz izdvojenog prikaza radi isto. Stavite izdvojeni prikaz na list kao plan; njegova oznaka tada kaže gdje je (`1 / A-501`: prvi pogled na listu A-501). {{ui:Print}} na izdvojenom prikazu štampa samo to područje u njegovoj razmjeri.

Brisanje izdvojenog prikaza briše i izdvojene prikaze nacrtane unutar njega, te linije i šrafure nacrtane u njima (prvo vas pitamo). Ako se nivo na kojem je izdvojeni prikaz nacrtan obriše, izdvojeni prikaz ostaje pod **Nedostaje** dok ga ne obrišete, a listovi na kojima je prijavljuju da nedostaje.

## Crtajte linije i šrafure u jednom pogledu

Crtanje je 2D rad koji pripada samo jednom pogledu: bilješke linijama, šrafirana površina betona ili zemlje, ispunjena oblast. Nikada nije u 3D pogledu i nikada u drugom planu.

1. Prikažite plan sprata, osnovu plafona ili izdvojeni prikaz u kojem crtate.
2. Izaberite iz {{ui:Annotate}} na traci plana:
   - {{ui:Line}}: kliknite gdje počinje i gdje završava. Sljedeća linija počinje gdje je završila posljednja; {{key:Enter}} počinje ispočetka.
   - {{ui:Polyline}}: kliknite njene tačke; {{key:Enter}} ili dvostruki klik je završava, a klik na njenu prvu tačku je zatvara.
   - {{ui:Rectangle}}: dva suprotna ugla.
   - {{ui:Hatch region}}: izaberite **Obrazac** (Puno, Dijagonalno, Ukršteno, Beton, Izolacija, Zemlja) i njegovu razmjeru na traci, zatim kliknite uglove; {{key:Enter}}, dvostruki klik ili klik na prvi ugao je zatvara. Uz označeno {{ui:Fill a room}}, jedan klik u prostoriji šrafira njen obris.
3. Tačke se hvataju kao kod zidova; {{key:Shift}} drži liniju pravo, a dužinu možete ukucati kao za zidove. {{key:Backspace}} poništava posljednju tačku.

Izaberite liniju ili šrafuru s {{ui:Select}} na planu. Svojstva mijenjaju obrazac i razmjeru šrafure, i imaju {{ui:Move…}} (kliknite tačku s koje se pomjera, zatim gdje ide). {{key:Delete}} je briše. Svaka linija, šrafura i promjena je jedan korak.

Linije i šrafure se štampaju uz plan, idu na vaše listove s njim i nalaze se u skupu crteža. Obrišite **Anotacije** u rasponu pogleda da ih izostavite iz tog pogleda.

## Čuvajte postavke u šablonu pogleda

1. Kliknite {{ui:New template}} u pregledaču, ili {{ui:Save as a template…}} u rasponu pogleda plana (taj plan tada koristi njega).
2. Dajte mu naziv, postavite visine i kategorije, i kliknite {{ui:Save the template}}.
3. U bilo kojem rasponu pogleda plana, izaberite šablon. Plan preuzima njegove visine i kategorije; promijenite šablon da promijenite svaki plan koji ga koristi. Elementi koje ste sakrili jedan po jedan ostaju sakriveni u vlastitom planu.
4. Kliknite šablon u pregledaču da ga promijenite, preimenujete ili obrišete. Brisanje ostavlja njegove planove sa njegovim postavkama kao njihovim vlastitim.

## Rasporedite vaš list

1. Kliknite {{ui:New sheet}}. Upišite njegov broj i naslov i izaberite papir.
2. Kliknite {{ui:Add}} pored plana, osnove plafona, izdvojenog prikaza, izgleda, presjeka ili specifikacije. Stavka se nađe u sredini lista.
3. Prevucite je gdje ide. Kad je izabrana, izaberite **Razmjera**, ili ostavite razmjeru samog plana (kada je ima), inače razmjeru koja stane u trećinu lista. {{ui:Take off the sheet}} je uklanja s lista.
4. Kliknite {{ui:Save the sheet}}. Upisan je pod **Listovi**; kliknite ga da ga kasnije promijenite.
5. {{ui:Download as PDF}} sprema taj list kao jednu stranicu.

## Šta treba da vidite

- Planovi presječeni na vašim visinama, s onim iznad presjeka isprekidano i onim što ste izostavili izostavljeno.
- Izrezan plan zamagljen izvan svog područja na ekranu i presječen na njega na papiru, u razmjeri koju ste mu dali.
- Osnova plafona s mrežama plafona i oznakama visine, te svjetiljke na plafonu.
- Izdvojeni prikazi s pravougaonikom i oznakom na planu, svaki se otvara u vlastitoj razmjeri.
- Linije i šrafure samo u pogledu u kojem ste ih nacrtali.
- Vaši listovi ponovo nacrtani iz modela svaki put kada ih otvorite, pa uvijek odgovaraju. Pogled čiji je nivo ili linija presjeka obrisana se prijavljuje, ne crta se.
- Svaka promjena ovdje je jedan korak: {{key:Mod+Z}} je poništava.

:::note
Sve ovo se čuva u IFC datoteci kao skupovi svojstava koje drugi programi ostavljaju na miru: raspon pogleda i osnova plafona svakog nivoa na nivou, šabloni, izdvojeni prikazi i vaši listovi na projektu. Linije i šrafure su IFC anotacije u svom nivou, pa ih drugi programi vide kao 2D krive i šrafirane površine (vlastiti crtež svakog obrasca), mada ne i kojem pogledu pripadaju.
:::

:::tip
Drugi BIM programi zovu presjek rasponom pogleda ili ravni presjeka, šablone šabloni pogleda ili postavke pogleda, linije crtanja linije detalja, a područja šrafure ispunjenim područjima. Ideje su iste; postavke pogleda ne putuju do njih.
:::
