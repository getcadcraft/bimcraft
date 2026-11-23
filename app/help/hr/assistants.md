---
title: Neka AI pomoćnik radi s vašim modelom
summary: Uključite pomoćnike u Postavkama da pomoćnik na vašem računalu može pronaći elemente, pročitati njihova svojstva, izolirati ih u prikazu i crtati zidove, vrata, prozore, podove, razine i mreže, preko CadCraft Studija. Isključeno dok ga ne uključite.
keywords: ai, pomoćnik, mcp, skripta, automatizacija, studio, pronađi elemente, izoliraj, svojstva, dopuštenja, prekini vezu, aktivnost, crtaj zidove, dodaj vrata, dodaj prozore, razine, mreže, podovi, poništi, spremi, naredbeni redak, cli, bez prozora, koristi s AI pomoćnicima
from: 66d72742
---

## Što ćete naučiti

Kako pustiti AI pomoćnika (bilo koji pomoćnik koji govori MCP) da pogleda IFC model koji imate otvoren i crta u njemu, što može i što ne može te kako ga zaustaviti.

## Što pomoćnik može učiniti u BimCraftu

| Traži | Što se događa | Treba |
|---|---|---|
| Pronađi elemente | Dobiva popis elemenata po klasi, etaži, nazivu ili vrijednosti svojstva, kao što to radi **Pronađi** | Čitanje |
| Čita svojstva | Dobiva atribute jednog elementa, tip, skupove svojstava i količine, kako ih prikazuje **Svojstva** | Čitanje |
| Opiše model, popiše zidove | Dobiva razine, zidove, vrata, prozore, prostorije, podove, mreže i stupove, te krajeve, tip i visinu svakog zida | Čitanje |
| Izolira, prikaže prozirno, sakrije ili prikaže | 3D prikaz se mijenja kao da ste upotrijebili izbornik {{ui:Prikaži}} | Promjena prikaza i crtanje |
| Crta zidove, vrata, prozore, podove, razine ili linije mreže | Model se mijenja kao da ste upotrijebili alate {{ui:Crtanje}}: zidovi se spajaju, a prostorije, podovi i krovovi slijede | Promjena prikaza i crtanje |
| Mijenja naziv ili vrijednost svojstva | Naziv, opis, vrstu objekta ili oznaku jednog elementa, ili jednu vrijednost svojstva. Vrijednost koju dijeli više elemenata prvo se kopira za njega; vrijednost njegova tipa mijenja se samo kad pomoćnik to kaže, jer svaki element tog tipa slijedi promjenu | Promjena prikaza i crtanje |
| Pomiče, briše, mijenja zidove, vrata i prozore | Elementi se pomiču ili brišu zajedno s onim što ih nosi; zidovi nacrtani alatima {{ui:Crtanje}} mijenjaju se po krajevima ili tipu, vrata i prozori po mjestu, veličini ili tipu, a prostorije i spojevi slijede | Promjena prikaza i crtanje |
| Postavi, uredi i čita specifikaciju | „Tablica vrata po etaži, s vatrootpornošću i okovom“: pomoćnik imenuje tablicu, njezine stupce (svojstvo ili oznaka postaje stupac) i grupiranje; BimCraft je popunjava iz modela i slaže je, a ono što pomoćnik nije naveo uzima iz uredskog standarda. Postavka se pridružuje vašem popisu **Specifikacije**. Svaki redak koji dobije vraćen je s nazivom svojih elemenata, pa ih može odabrati | Čitanje za čitanje; Promjena prikaza i crtanje za spremanje postavke |
| Izvozi specifikaciju | CSV, Excel ili tekst odvojen tabulatorima za lijepljenje u Google Sheets (ništa se ne šalje Googleu) | Izvoz |
| Čita i postavlja završne obrade prostorija | Vrste završnih obrada, završnu obradu poda, zida i stropa svake prostorije, zone; površine, broj pločica i volumeni podloge zatim dolaze iz specifikacija završnih obrada | Čitanje; Promjena prikaza i crtanje za postavljanje |
| Odabire elemente, poništava vlastite korake | Elementi se biraju u prikazu; njegov posljednji korak se poništava | Promjena prikaza i crtanje |
| Sprema | Nova IFC datoteka sa svim promjenama, kako je izrađuje {{ui:Spremi kao IFC}} (izvorna se nikad ne mijenja) | Spremanje |
| Izvozi USD | Otvoreni modeli kao OpenUSD (.usda, .usdc ili .usdz), kako ih zapisuje {{ui:USD}} na alatnoj traci | Izvoz |
| Renderira sliku, pokreće red renderiranja | Slika 3D prikaza, kako je izrađuje dijalog {{ui:Render}} s vašim postavkama renderiranja, osim ako ne traži druge, ili slike visoke kvalitete dodane u red dijaloga koje se renderiraju jedna za drugom (red treba WebGPU). Ništa se u modelu ne mijenja ([Renderiranje slike](topic:render)) | Izvoz |

Svaka promjena koju pomoćnik napravi jedan je korak u **Promjene**, nazvan „Pomoćnik: …“ (na primjer „Pomoćnik: dodaj 4 zida“), pa {{key:Mod+Z}} vraća cijelu njegovu radnju, a vidite čiji je korak bio. U prozoru ne može otvarati datoteke: vi otvorite model, a on radi s onim koji je otvoren.

## Uključivanje

Pomoćnici do BimCrafta dolaze preko CadCraft Studija na vašem računalu; obični preglednik nema način za ulaz.

1. Otvorite {{ui:Postavke}} i odaberite karticu **BimCraft**.
2. Pod **Pomoćnici** označite **Dopusti AI pomoćnicima i skriptama da koriste BimCraft**.
3. **Čitanje** je za vas već označeno. Označite i **Promjena prikaza i crtanje** ako pomoćnik smije izolirati i sakrivati elemente te crtati, i **Spremanje** ako smije spremiti model kao novu datoteku.
4. Povežite pomoćnika u Studiju (Studio prikazuje adresu i postavke koje ćete zalijepiti u njega).

## Dok je pomoćnik povezan

Napomena na vrhu desnog okna kaže koji je pomoćnik povezan i što može. Kliknite {{ui:Prekini vezu}} da odmah završite njegovu sesiju; mora se ponovno povezati da bi nastavio.

**Aktivnost**, pod **Pomoćnici** u Postavkama, navodi svaki poziv koji je pomoćnik napravio, najnoviji prvi, s time je li uspio.

:::tip
Pitajte običnim riječima, na primjer „izoliraj vanjske zidove na Level 1“, „koja vrata nemaju vatrootpornost?“ ili „nacrtaj sobu 6 sa 4 metra na Level 1 s vratima u južnom zidu“. Pomoćnik pronalazi elemente i prikazuje ih u vašem prikazu ili ih crta.
:::

## Bez prozora: skripte i naredbeni redak

Isti alati za crtanje rade na IFC datotekama u mapama koje navedete, bez otvorenog prozora: MCP poslužitelj i naredbeni redak programa CadCraft mogu započeti novu zgradu ili otvoriti IFC datoteku, opisati je, dodati zidove, vrata, prozore, podove, razine i mreže, poništiti je i spremiti kao novu `.ifc` datoteku. Četiri dodatna alata pogoduju skriptama: `ifc_batch` pokreće do 200 koraka uređivanja kao jedan (sve ili ništa: jedno poništavanje vraća cijelu seriju, a odbijeni korak poništava ostale i imenuje se); `ifc_describe` navodi razine i svaki zid s njegovim vratima i prozorima; `ifc_render_png` piše pojednostavljenu sliku modela za provjeru (bez materijala, tekstura i sjena) bez prozora; `usd_export` piše `.usda`, `.usdc` ili `.usdz`. Na naredbenom retku `cadcraft bim script.json --from model.ifc -o out.ifc` pokreće skriptu koraka, a `--usd`, `--png` i `--plan` pišu USD datoteku, sliku ili tlocrt iz istog pokretanja. Vi odlučujete koje mape smije koristiti i smije li što mijenjati ili spremati.

## Isključivanje

Odznačite **Dopusti AI pomoćnicima i skriptama da koriste BimCraft**. Svaki pomoćnik odmah se odspaja, a postavka se pamti za sljedeći put.

## Vidi također

- [Recepti za AI pomoćnike](common:assistants-recipes): radni primjeri, svaki s alatima koje zove.
- [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find)
- [Sakrivanje, izoliranje i prozirnost elemenata](topic:hide-and-isolate)
- [Postavke BimCrafta](topic:settings)
