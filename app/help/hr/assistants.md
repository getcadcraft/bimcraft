---
title: AI pomoćnik s vašim modelom
summary: Uključite pomoćnike u Postavkama da pomoćnik na vašem računalu može pronaći elemente, pročitati njihova svojstva, izolirati ih u prikazu te crtati zidove, vrata, prozore, podove, etaže i mreže preko CadCraft Studio. Isključeno dok ga ne uključite.
keywords: ai, pomoćnik, mcp, skripta, automatizacija, studio, pronađi elemente, izoliraj, svojstva, dopuštenja, prekini vezu, aktivnost, crtaj zidove, dodaj vrata, dodaj prozore, etaže, mreže, podovi, poništi, spremi, naredbeni redak, cli, bez prozora, koristi s AI pomoćnicima
from: c5ee595b
---

## Što ćete naučiti

Kako AI pomoćnik (bilo koji pomoćnik koji govori MCP) može pogledati IFC model koji imate otvoren i crtati u njemu, što smije, a što ne smije, i kako ga zaustaviti.

## Što pomoćnik može raditi u BimCraft

| Traži | Što se događa | Treba |
|---|---|---|
| Pronađi elemente | Dobiva popis elemenata po klasi, etaži, nazivu ili vrijednosti svojstva, kao što to radi **Pronađi** | Čitanje |
| Čitaj svojstva | Dobiva atribute jednog elementa, tip, skupove svojstava i količine, kao što ih prikazuje **Svojstva** | Čitanje |
| Opiši model, popiši zidove | Dobiva etaže, zidove, vrata, prozore, prostorije, podove, mreže i stupove, te krajeve svakog zida, tip i visinu | Čitanje |
| Izoliraj, prozirno, sakrij ili prikaži | 3D prikaz se mijenja kao da ste upotrijebili izbornik {{ui:Show}} | Promjena prikaza i crtanje |
| Crtaj zidove, vrata, prozore, podove, etaže ili linije mreže | Model se mijenja kao da ste upotrijebili alate {{ui:Draw}}: zidovi se spajaju, a prostorije, podovi i krovovi slijede | Promjena prikaza i crtanje |
| Promijeni naziv ili vrijednost svojstva | Naziv, opis, vrstu objekta ili oznaku jednog elementa, ili vrijednost jednog svojstva. Vrijednost koju dijeli s drugim elementima prvo se kopira za njega; vrijednost tipa mijenja se samo kad to pomoćnik kaže, jer svaki element tog tipa slijedi | Promjena prikaza i crtanje |
| Pomakni, obriši, mijenjaj zidove, vrata i prozore | Elementi se pomiču ili brišu zajedno s onim što nose; zidovi nacrtani alatima {{ui:Draw}} mijenjaju se po krajevima ili tipu, vrata i prozori po mjestu, veličini ili tipu, a prostorije i spojevi slijede | Promjena prikaza i crtanje |
| Postavi, rasporedi i čitaj specifikaciju | „Tablica vrata po etaži, s vatrootpornošću i okovom“: pomoćnik imenuje specifikaciju, njezine stupce (svojstvo ili oznaka postaje stupac) i grupiranje; BimCraft je popunjava iz modela i slaže je, a ono što pomoćnik nije naveo uzima iz standarda ureda. Postavka se pridružuje vašem popisu specifikacija. Svaki redak koji dobije navodi svoje elemente pa ih može odabrati | Čitanje za čitanje; Promjena prikaza i crtanje za spremanje postavke |
| Izvezi specifikaciju | CSV, Excel ili tekst odvojen tabulatorima za lijepljenje u Google Sheets (ništa se ne šalje Googleu) | Izvoz |
| Čitaj i postavljaj završne obrade prostorija | Vrste završnih obrada, podnu, zidnu i stropnu završnu obradu svake prostorije, zone; površine, broj pločica i volumene podloge tada dolaze iz specifikacija završnih obrada | Čitanje; za postavljanje Promjena prikaza i crtanje |
| Odaberi elemente, poništi vlastite korake | Elementi se biraju u prikazu; njegov zadnji korak se poništava | Promjena prikaza i crtanje |
| Spremi | Nova IFC datoteka sa svim promjenama, kao što je to radi {{ui:Save as IFC}} (izvorna se nikad ne mijenja) | Spremanje |
| Izvezi USD | Otvoreni modeli kao OpenUSD (.usda, .usdc ili .usdz), kao što to zapisuje {{ui:USD}} na alatnoj traci | Izvoz |
| Renderiraj sliku, pokreni red za render | Slika 3D prikaza, kao što je zapisuje dijalog {{ui:Render}} s vašim postavkama rendera, osim ako ne traži druge; ili kvalitetne slike dodane u red dijaloga koje se renderiraju jedna za drugom (red treba WebGPU). Ništa se u modelu ne mijenja ([Renderiraj sliku](topic:render)) | Izvoz |

Svaka promjena koju pomoćnik napravi jedan je korak u **Promjene**, nazvan „Asistent: …“ (na primjer „Asistent: dodaj 4 zida“), pa {{key:Mod+Z}} vraća cijelu njegovu radnju, a vidite čiji je korak. U prozoru ne može otvarati datoteke: vi otvorite model; on radi s onim koji je otvoren.

## Uključite ga

Pomoćnici se povezuju s BimCraft preko CadCraft Studio na vašem računalu; običan preglednik nema pristup.

1. Otvorite {{ui:Settings}} i odaberite karticu **BimCraft**.
2. Pod **Pomoćnici** označite **Dopusti da AI pomoćnici i skripte koriste BimCraft**.
3. **Čitanje** je označeno za vas. Označite i **Promjena prikaza i crtanje** ako pomoćnik smije izolirati i sakrivati elemente te crtati, a **Spremanje** ako smije spremiti model kao novu datoteku.
4. Povežite pomoćnika u Studiju (Studio prikazuje adresu i postavke koje treba zalijepiti u njega).

## Dok je pomoćnik povezan

Napomena na vrhu desne ploče kaže koji je pomoćnik povezan i što smije. Kliknite {{ui:Disconnect}} da odmah završite njegovu sesiju; mora se ponovno povezati da bi nastavio.

**Aktivnost**, pod **Pomoćnici** u Postavkama, navodi svaki poziv koji je pomoćnik napravio, najnoviji prvi, i je li uspio.

:::tip
Pitajte običnim riječima, na primjer „izoliraj vanjske zidove na razini 1“, „koja vrata nemaju vatrootpornost?“ ili „nacrtaj sobu 6 sa 4 metra na razini 1 s vratima u južnom zidu“. Pomoćnik pronalazi elemente i prikazuje ih u vašem prikazu, ili ih crta.
:::

## Bez prozora: skripte i naredbeni redak

Isti alati za crtanje rade i na IFC datotekama u mapama koje navedete, bez otvorenog prozora: MCP poslužitelj i naredbeni redak CadCraft mogu započeti novu zgradu ili otvoriti IFC datoteku, opisati je, dodavati zidove, vrata, prozore, podove, etaže i mreže, poništavati i spremiti kao novu `.ifc` datoteku. Vi odlučujete koje mape smije koristiti i smije li išta mijenjati ili spremati.

## Isključite ga

Odznačite **Dopusti da AI pomoćnici i skripte koriste BimCraft**. Svi pomoćnici odmah se isključuju, a postavka se pamti za sljedeći put.

## Vidi također

- [Recepti za AI pomoćnike](common:assistants-recipes): primjeri, svaki s alatima koje zove.
- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Sakrijte, izolirajte i učinite elemente prozirnima](topic:hide-and-isolate)
- [Postavke BimCraft](topic:settings)
