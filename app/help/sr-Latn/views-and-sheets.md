---
title: Pogledi, opsezi pogleda i sopstveni listovi
summary: Pronađite svaki plan, osnovu, presek, 3D pogled, specifikaciju i list u pregledaču projekta, podesite kako se svaki plan preseca i šta prikazuje, pravite uvećane prikaze, crtajte linije i šrafure u jednom pogledu, čuvajte podešavanja u šablonima pogleda i slažite sopstvene listove.
keywords: uvećani prikaz, pogled uvećanja, detaljni pogled, crtanje, linije crtanja, šrafura, oblast šrafure, ispunjena oblast, obrazac ispune, osnova reflektovanog plafona, rcp, osnova plafona, mreža plafona, svetiljke, pregledač projekta, pogledi, opseg pogleda, isecanje, oblast isecanja, pogled isecanja, razmera pogleda, podloga, prikaži drugi nivo, polutonski, ravan preseka, visina preseka, vrh, dno, dubina pogleda, vidljivost, kategorije, sakrij u pogledu, šablon pogleda, šabloni, list, listovi, blok naslova, prozor pogleda, razmera, slaganje listova, raspored, pdf, podešavanja plana, pregledač
from: ee1d5afe
---

## Šta ćete uraditi

Radite onako kako su BIM projekti organizovani: svaki pogled na jednoj listi, svaki plan presečen tamo gde želite, ista podešavanja za više planova preko šablona i listovi koje sami slažete.

## Pregledač projekta

1. Uključite {{ui:Crtanje}}. Levi panel ima {{ui:Pregledač projekta}} ispod modela.
2. Navodi:
   - **Planovi spratova**: svaki nivo. Kliknite jedan da vidite njegov plan. Dugme klizača pored njega postavlja njegov opseg pogleda (ispod). Plan koji prati šablon prikazuje ime šablona.
   - **Osnove plafona**: reflektovani plan plafona svakog nivoa (ispod).
   - **Uvećani prikazi**: svaki uvećani prikaz sa pogledom na kojem je nacrtan, i {{ui:Novi uvećani prikaz}}. **Nedostaje** navodi uvećane prikaze čiji pogled više ne postoji.
   - **Izgledi** i **Preseci**: četiri strane i svaka linija preseka. Kliknite jednu da otvorite skup crteža u kojem su nacrtani.
   - **3D pogledi**: pogledi koje ste sačuvali sa {{ui:Pogledi}}.
   - **Specifikacije**: kliknite jednu da se prikaže ispod plana.
   - **Listovi**: listovi koje ste napravili, {{ui:Novi list}}, i {{ui:Skup crteža…}} za ceo skup napravljen iz modela.
   - **Šabloni pogleda**, sa {{ui:Novi šablon}}, i **Veze** (povezani modeli).

## Podesite opseg pogleda plana

1. Kliknite dugme klizača pored nivoa u **Planovi spratova**.
2. Postavite visine, iznad tog nivoa:
   - **Preseci na**: gde plan preseca zidove, vrata i prozore (1200 mm, oko 4 ft, osim ako ne promenite).
   - **Vrh**: stvari iznad preseka i ispod vrha crtaju se isprekidano (visoki ormarić, greda). Ostavite prazno za visinu nivoa.
   - **Dno** i **Dubina ispod dna**: stvari niže od preseka crtaju se tankim linijama do dna, i toliko ispod njega.
3. Pod **Prikazano u ovom planu**, odštiklirajte ono što plan izostavlja: nameštaj, prostorije, stubove i tako dalje.
4. Da izostavite pojedinačne elemente: izaberite ih u planu ili 3D pogledu, otvorite dijalog i kliknite {{ui:Sakrij izabrane ovde}}. {{ui:Prikaži sve}} ih vraća.
5. Kliknite {{ui:Koristi ova podešavanja}}.

Plan se odmah ponovo preseca, a skup crteža i vaši listovi ga prate. Isečak oblaka tačaka takođe prati visinu preseka.

## Isecanje plana, razmera i prikaz drugog nivoa ispod

Sve tri su u istom dijalogu (dugme klizača pored nivoa):

- **Razmera**: razmera u kojoj se plan štampa ({{ui:Štampaj}} na traci plana) i u kojoj ulazi na list. **Uklopi** bira najveću standardnu razmeru koja staje.
- **Oblast isecanja**: kliknite {{ui:Nacrtaj na planu…}}, pa kliknite jedan ugao i suprotni ugao na planu ({{key:Esc}} zaustavlja). Plan van oblasti je na ekranu zamagljen, a i dalje možete da radite tamo. Štampano, na listovima i u skupu crteža, plan pokazuje samo ono što je unutra. {{ui:Obriši}} uklanja isecanje. {{ui:Uklopi}} uklapa isečak.
- **Podloga**: izaberite drugi nivo. Njegovi zidovi, preseceni elementi, vrata i prozori crtaju se svetlo ispod ovog plana, da poravnate stvari sa nivoom ispod ili iznad. Ne možete ih ovde birati, a štampaju se svetlosivo.

Šablon pogleda nosi razmeru uz visine i kategorije. Oblast isecanja i podloga uvek pripadaju samo jednom planu.

## Osnova plafona nivoa

Svaki nivo ima reflektovani plan plafona pored svog plana sprata: plan viđen odozdo, za raspored plafona i onoga što iz njih visi.

1. Kliknite nivo pod **Osnove plafona** u pregledaču, ili izaberite {{ui:Osnova plafona}} pored nivoa na traci plana.
2. Zidovi se preseku na 2300 mm (oko 7'-6"). Crta se ono što je iznad tog preseka i ispod visine nivoa: plafoni sa svojom mrežom i oznakom visine (`CLG 2438`), svetiljke, grede. Vrata, prozori i ono što je ispod preseka su izostavljeni.
3. Da napravite plafon, koristite {{ui:Plafon}} kao na planu sprata, pa ga izaberite i izaberite njegov **Obrazac** u Svojstvima. Vidi [Prostorije, podovi, plafoni i krovovi](topic:floors-and-roofs).
4. Da s njega okačite svetiljku, postavite stavku iz biblioteke dok je osnova plafona prikazana: ide u **Na plafonu**. Vidi [Postavljanje opreme i nameštaja iz biblioteke](topic:place-from-library).
5. Dugme klizača pored osnove plafona postavlja njen presek i vrh, razmeru, kategorije, oblast isecanja i podlogu, kao kod plana sprata. Osnove plafona ne uzimaju šablon pogleda.

Crta se istim smerom kao plan sprata (reflektovan plan, a ne ogledalna slika). Plafon niži od preseka se ne crta: spustite presek za osnovu plafona tog nivoa. Osnove plafona idu na vaše listove kao planovi; skup crteža ih sam ne dodaje.

## Pravljenje uvećanog prikaza

Uvećani prikaz prikazuje deo plana uvećano, u sopstvenoj razmeri, kao sopstveni pogled: kuhinju, stepenište, ugao zida.

1. Prikažite plan, osnovu plafona ili uvećani prikaz kome pripada.
2. Izaberite {{ui:Napomene}} › {{ui:Uvećani prikaz}} na traci plana (ili {{ui:Novi uvećani prikaz}} u pregledaču), pa kliknite jedan ugao oblasti i suprotni ugao. {{key:Esc}} zaustavlja.
3. Uvećani prikaz se pravi u 1:20 (1/2" = 1'-0" u stopama i inčima). Njegov pravougaonik i okrugla oznaka crtaju se na planu.
4. Kliknite oznaku sa {{ui:Izaberi}}, ili uvećani prikaz u pregledaču, da ga otvorite: plan prikazuje samo tu oblast, u razmeri uvećanog prikaza. Traka kaže {{ui:Uvećani prikaz:}} i njegovo ime; {{ui:Gore}} vraća na pogled na kojem je nacrtan.
5. Dugme klizača pored njega (u pregledaču ili na traci) preimenuje ga, menja mu razmeru, ponovo crta pravougaonik ili ga briše.

Uvećani prikaz pokazuje ono što pokazuje njegov pogled: isti presek, iste kategorije, plafone osnove plafona. Uvećani prikaz uvećanog prikaza radi isto. Stavite uvećani prikaz na list kao plan; njegova oznaka tada kaže gde je (`1 / A-501`: prvi pogled na listu A-501). {{ui:Štampaj}} u uvećanom prikazu štampa samo tu oblast u njegovoj razmeri.

Brisanje uvećanog prikaza briše i uvećane prikaze nacrtane unutar njega, kao i linije i šrafure nacrtane u njima (prvo vas pita). Ako nivo na kojem je uvećani prikaz nacrtan bude obrisan, uvećani prikaz ostaje pod **Nedostaje** dok ga ne obrišete, a listovi na kojima se nalazi to prijavljuju kao nedostajuće.

## Crtanje linija i šrafura u jednom pogledu

Crtanje je 2D rad koji pripada samo jednom pogledu: beleške linijama, šrafirana oblast betona ili zemlje, ispunjena oblast. Nikada nije u 3D pogledu niti u drugom planu.

1. Prikažite plan sprata, osnovu plafona ili uvećani prikaz u kome crtate.
2. Izaberite na traci plana {{ui:Napomene}}:
   - {{ui:Red}}: kliknite gde počinje i gde se završava. Sledeća linija počinje gde se završila prethodna; {{key:Enter}} počinje ispočetka.
   - {{ui:Polilinija}}: kliknite njene tačke; {{key:Enter}} ili dvostruki klik je završava, a klik na prvu tačku je zatvara.
   - {{ui:Pravougaonik}}: dva suprotna ugla.
   - {{ui:Oblast šrafure}}: izaberite **Obrazac** (Puno, Dijagonalno, Ukršteno, Beton, Izolacija, Zemlja) i njegovu razmeru na traci, pa kliknite uglove; {{key:Enter}}, dvostruki klik ili klik na prvi ugao je zatvara. Sa štiklirano {{ui:Popuni prostoriju}}, jedan klik u prostoriji šrafira njen obris.
3. Tačke se hvataju kao kod zidova; {{key:Shift}} drži liniju pravom, a dužinu možete ukucati kao kod zidova. {{key:Backspace}} uzima poslednju tačku nazad.

Izaberite liniju ili šrafuru sa {{ui:Izaberi}} na planu. Svojstva menjaju obrazac i razmeru šrafure i imaju {{ui:Premesti…}} (kliknite tačku sa koje se pomera, pa gde ide). {{key:Delete}} je briše. Svaka linija, šrafura i promena je jedan korak.

Linije i šrafure se štampaju sa planom, idu na vaše listove sa njim i nalaze se u skupu crteža. Isključite **Napomene** u opsegu pogleda da ih izostavite iz tog pogleda.

## Čuvanje podešavanja u šablonu pogleda

1. Kliknite {{ui:Novi šablon}} u pregledaču, ili {{ui:Sačuvaj kao šablon…}} u opsegu pogleda plana (taj plan tada koristi njega).
2. Dajte mu ime, postavite visine i kategorije, i kliknite {{ui:Sačuvaj šablon}}.
3. U opsegu pogleda bilo kog plana izaberite šablon. Plan preuzima njegove visine i kategorije; promenite šablon da promenite svaki plan koji ga koristi. Elementi koje ste sakrili pojedinačno ostaju skriveni u svom planu.
4. Kliknite šablon u pregledaču da ga promenite, preimenujete ili obrišete. Brisanje ostavlja planove sa njihovim podešavanjima kao sopstvenim.

## Slaganje sopstvenog lista

1. Kliknite {{ui:Novi list}}. Ukucajte njegov broj i naslov i izaberite papir.
2. Kliknite {{ui:Dodaj}} pored plana, osnove plafona, uvećanog prikaza, izgleda, preseka ili specifikacije. Stavlja se u sredinu lista.
3. Prevucite ga gde treba. Kada je izabran, izaberite **Razmera**, ili ostavite razmeru plana (kada je ima), inače razmeru koja staje u trećinu lista. {{ui:Skini list}} ga uklanja.
4. Kliknite {{ui:Sačuvaj list}}. Navodi se pod **Listovi**; kliknite ga da ga kasnije promenite.
5. {{ui:Preuzmi kao PDF}} čuva taj list kao jednu stranicu.

## Šta treba da vidite

- Planovi presečeni na vašim visinama, sa isprekidano prikazanim onim što je iznad preseka i izostavljenim onim što ste isključili.
- Isečen plan zamagljen van svoje oblasti na ekranu i sečen na nju na papiru, u razmeri koju ste mu dali.
- Osnova plafona sa mrežama plafona i oznakama visine, i svetiljkama na plafonu.
- Uvećani prikazi sa pravougaonikom i oznakom na planu, svaki se otvara u sopstvenoj razmeri.
- Linije i šrafure samo u pogledu u kojem ste ih nacrtali.
- Vaši listovi se crtaju iz modela svaki put kada ih otvorite, pa uvek odgovaraju modelu. Pogled čiji su nivo ili linija preseka obrisani se prijavljuje, ne crta se.
- Svaka promena ovde je jedan korak: {{key:Mod+Z}} je vraća.

:::note
Sve ovo se čuva u IFC datoteci kao skupovi svojstava koje drugi programi ne diraju: opseg pogleda i osnova plafona svakog nivoa na nivou, šabloni, uvećani prikazi i vaši listovi na projektu. Linije i šrafure su IFC anotacije u svom nivou, pa ih drugi programi vide kao 2D krive i šrafirane oblasti (sopstveni crtež svakog obrasca), ali ne i kojem pogledu pripadaju.
:::

:::tip
Drugi BIM programi zovu presek opseg pogleda ili ravan preseka, šablone šablonima pogleda ili podešavanjima pogleda, linije crtanja detaljnim linijama, a oblasti šrafure ispunjenim oblastima. Ideje su iste; podešavanja pogleda ne prelaze u njih.
:::
