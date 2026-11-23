---
title: Neka AI asistent radi s vašim modelom
summary: Uključite asistente u Postavkama da asistent na vašem računaru može pronaći elemente, pročitati njihova svojstva, izolovati ih u pogledu i crtati zidove, vrata, prozore, podove, nivoe i mreže, preko CadCraft Studija. Isključeno dok ga ne uključite.
keywords: ai, asistent, mcp, skripta, automatizacija, studio, pronađi elemente, izoluj, svojstva, dozvole, prekini vezu, aktivnost, crtaj zidove, dodaj vrata, dodaj prozore, nivoi, mreže, podovi, poništi, spasi, linija naredbi, cli, bez prozora, koristi s AI asistentima
from: 66d72742
---

## Šta ćete naučiti

Kako dozvoliti AI asistentu (bilo kojem asistentu koji govori MCP) da pogleda IFC model koji imate otvoren i crta u njemu, šta može, a šta ne može, i kako ga zaustaviti.

## Šta asistent može da radi u BimCraft-u

| Traži da | Šta se dešava | Treba |
|---|---|---|
| Pronađe elemente | Dobija listu elemenata po klasi, spratu, nazivu ili vrijednosti svojstva, kao što radi **Pronađi** | Čitanje |
| Pročita svojstva | Dobija atribute jednog elementa, tip, skupove svojstava i količine, kako ih prikazuje **Svojstva** | Čitanje |
| Opiše model, nabroji zidove | Dobija nivoe, zidove, vrata, prozore, prostorije, podove, mreže i stubove, te krajeve, tip i visinu svakog zida | Čitanje |
| Izoluje, prikaže kroz, sakrije ili prikaže | 3D pogled se mijenja kao da ste koristili grupu {{ui:Show}} | Mijenjanje pogleda i crtanje |
| Crta zidove, vrata, prozore, podove, nivoe ili linije mreže | Model se mijenja kao da ste koristili alate grupe {{ui:Draw}}: zidovi se spajaju, a prostorije, podovi i krovovi prate promjene | Mijenjanje pogleda i crtanje |
| Mijenja naziv ili vrijednost svojstva | Naziv, opis, tip objekta ili oznaku jednog elementa, ili vrijednost jednog svojstva. Vrijednost koju dijeli s drugim elementima prvo se kopira za njega; vrijednost tipa mijenja se samo kada asistent to kaže, jer svaki element tog tipa prati promjenu | Mijenjanje pogleda i crtanje |
| Pomjera, briše, mijenja zidove, vrata i prozore | Elementi se pomjeraju ili brišu zajedno s elementima koje nose; zidovi nacrtani alatima {{ui:Draw}} mijenjaju se po krajevima ili tipu, vrata i prozori po mjestu, dimenziji ili tipu, a prostorije i spojevi prate promjene | Mijenjanje pogleda i crtanje |
| Postavi, uredi i pročita specifikaciju | „Specifikacija vrata po spratu, s požarnom otpornošću i okovom“: asistent imenuje specifikaciju, njene kolone (svojstvo ili oznaka postaje kolona) i grupisanje; BimCraft je popunjava iz modela i slaže je, a ono što asistent nije naveo uzima iz standarda ureda. Postavka se dodaje na vašu listu Specifikacija. Svaki red koji dobije nazad imenuje svoje elemente, pa ih može odabrati | Čitanje za čitanje; Mijenjanje pogleda i crtanje za snimanje postavke |
| Izvozi specifikaciju | CSV, Excel ili tekst odvojen tabulatorima za lijepljenje u Google Sheets (ništa se ne šalje Google-u) | Izvoz |
| Čita i postavlja završne obrade prostorija | Tipovi završnih obrada, završna obrada poda, zida i plafona svake prostorije, zone; površine, broj pločica i zapremine podloge tada dolaze iz specifikacija završnih obrada | Čitanje; za postavljanje Mijenjanje pogleda i crtanje |
| Odabire elemente, poništava vlastite korake | Elementi se biraju u pogledu; njegov posljednji korak se poništava | Mijenjanje pogleda i crtanje |
| Spasi | Nova IFC datoteka sa svim promjenama, kako je pravi {{ui:Save as IFC}} (original se nikad ne mijenja) | Spasi |
| Izvozi USD | Otvoreni modeli kao OpenUSD (.usda, .usdc ili .usdz), kako ih zapisuje {{ui:USD}} na alatnoj traci | Izvoz |
| Renderuje sliku, pokreće red renderovanja | Slika 3D pogleda, kako je pravi dijalog {{ui:Render}} sa vašim postavkama renderovanja, osim ako ne traži druge, ili kvalitetne slike dodane u red dijaloga koje se renderuju jedna za drugom (red zahtijeva WebGPU). Ništa se u modelu ne mijenja ([Renderuj sliku](topic:render)) | Izvoz |

Svaka promjena koju napravi asistent je jedan korak u listi **Promjene**, nazvan „Asistent: …“ (na primjer „Asistent: dodaj 4 zida“), pa {{key:Mod+Z}} vraća cijelu njegovu radnju, a vidi se čiji je korak. U prozoru ne može otvarati datoteke: vi otvarate model, a on radi s onim koji je otvoren.

## Uključivanje

Asistenti dopiru do BimCraft-a preko CadCraft Studija na vašem računaru; običan pregledač nema put unutra.

1. Otvorite {{ui:Settings}} i izaberite karticu **BimCraft**.
2. Pod **Asistenti** označite **Dozvoli AI asistentima i skriptama da koriste BimCraft**.
3. **Čitanje** je već označeno za vas. Označite i **Mijenjanje pogleda i crtanje** ako asistent smije izolovati i sakrivati elemente te crtati, a **Spasi** ako smije spasiti model kao novu datoteku.
4. Povežite asistenta u Studiju (Studio prikazuje adresu i postavke koje treba nalijepiti u njega).

## Dok je asistent povezan

Napomena na vrhu desnog panela govori koji je asistent povezan i šta smije. Kliknite {{ui:Disconnect}} da odmah završite njegovu sesiju; mora se ponovo povezati da nastavi.

**Aktivnost**, pod **Asistenti** u Postavkama, navodi svaki poziv koji je asistent napravio, najnoviji prvi, sa oznakom je li uspio.

:::tip
Pitajte običnim riječima, na primjer „izoluj vanjske zidove na Nivou 1“, „koja vrata nemaju požarnu otpornost?“ ili „nacrtaj prostoriju od 6 sa 4 metra na Nivou 1 sa vratima u južnom zidu“. Asistent pronalazi elemente i prikazuje ih u pogledu, ili ih crta.
:::

## Bez prozora: skripte i linija naredbi

Isti alati za crtanje rade na IFC datotekama u folderima koje navedete, bez otvorenog prozora: MCP server i linija naredbi CadCraft-a mogu započeti novu zgradu ili otvoriti IFC datoteku, opisati je, dodati zidove, vrata, prozore, podove, nivoe i mreže, poništiti je i spasiti kao novu `.ifc` datoteku. Još četiri alata odgovaraju skriptama: `ifc_batch` pokreće do 200 koraka uređivanja kao jedan (sve ili ništa: jedno poništavanje vraća cijelu seriju, a odbijeni korak poništava ostale i navodi korak); `ifc_describe` navodi nivoe i svaki zid sa njegovim vratima i prozorima; `ifc_render_png` zapisuje ravno osjenčenu sliku za provjeru modela (bez materijala, tekstura i sjenki) bez prozora; `usd_export` zapisuje `.usda`, `.usdc` ili `.usdz`. Na liniji naredbi, `cadcraft bim script.json --from model.ifc -o out.ifc` pokreće skriptu koraka, a `--usd`, `--png` i `--plan` zapisuju USD datoteku, sliku ili plan iz istog izvršavanja. Vi odlučujete koje foldere smije koristiti i smije li nešto mijenjati ili spašavati.

## Isključivanje

Odznačite **Dozvoli AI asistentima i skriptama da koriste BimCraft**. Svi asistenti se odmah isključuju, a postavka se pamti za sljedeći put.

## Vidi također

- [Recepti za AI asistente](common:assistants-recipes): primjeri koji rade, svaki sa alatima koje poziva.
- [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find)
- [Sakrivanje, izolovanje i prozirnost elemenata](topic:hide-and-isolate)
- [Postavke BimCraft-a](topic:settings)
