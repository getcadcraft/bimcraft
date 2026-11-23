---
title: Neka AI asistent radi s vašim modelom
summary: Uključite asistente u Podešavanjima da asistent na vašem računaru može da pronalazi elemente, čita njihova svojstva, izoluje ih u prikazu i crta zidove, vrata, prozore, podove, nivoe i mreže, preko CadCraft Studija. Isključeno dok ga ne uključite.
keywords: ai, asistent, mcp, skripta, automatizacija, studio, pronađi elemente, izoluj, svojstva, dozvole, prekini vezu, aktivnost, crtaj zidove, dodaj vrata, dodaj prozore, nivoi, mreže, podovi, opozovi, sačuvaj, komandna linija, cli, bez prozora, koristi sa AI asistentima
from: 66d72742
---

## Šta ćete naučiti

Kako da pustite AI asistenta (bilo koji asistent koji govori MCP) da pogleda IFC model koji imate otvoren i da crta u njemu, šta sme, a šta ne sme, i kako da ga zaustavite.

## Šta asistent može da radi u BimCraft-u

| Traži da | Šta se dešava | Potrebno |
|---|---|---|
| Pronađe elemente | Dobija listu elemenata po klasi, spratu, nazivu ili vrednosti svojstva, kao što to radi **Pronađi** | Čitanje |
| Čita svojstva | Dobija atribute jednog elementa, tip, skupove svojstava i količine, kao što ih prikazuje **Svojstva** | Čitanje |
| Opiše model, navede zidove | Dobija nivoe, zidove, vrata, prozore, prostorije, podove, mreže i stubove, kao i krajeve, tip i visinu svakog zida | Čitanje |
| Izoluje, prikaže kroz, sakrije ili prikaže | 3D prikaz se menja kao da ste koristili meni {{ui:Prikaži}} | Izmena prikaza i crtanje |
| Crta zidove, vrata, prozore, podove, nivoe ili linije mreže | Model se menja kao da ste koristili alate iz {{ui:Crtanje}}: zidovi se spajaju, prostorije, podovi i krovovi prate promene | Izmena prikaza i crtanje |
| Menja naziv ili vrednost svojstva | Naziv, Opis, Vrsta objekta ili Oznaka jednog elementa, ili vrednost jednog svojstva. Vrednost koju deli više elemenata se prvo kopira za njega; vrednost njegovog tipa menja se samo kada asistent to kaže, jer svaki element tog tipa prati promenu | Izmena prikaza i crtanje |
| Pomera, briše, menja zidove, vrata i prozore | Elementi se pomeraju ili brišu zajedno sa onim što nose; zidovi nacrtani alatima iz {{ui:Crtanje}} menjaju se po krajevima ili tipu, vrata i prozori po mestu, veličini ili tipu, a prostorije i spojevi prate | Izmena prikaza i crtanje |
| Postavi, rasporedi i čita specifikaciju | „Specifikacija vrata po spratu, sa vatrootpornošću i okovom“: asistent imenuje specifikaciju, njene kolone (svojstvo ili oznaka postaje kolona) i grupisanje; BimCraft je popunjava iz modela i raspoređuje je, a ono što asistent nije naveo uzima iz kancelarijskog standarda. Postavka se dodaje na vašu listu specifikacija. Svaki red koji se vrati navodi svoje elemente, pa ih asistent može izabrati | Čitanje za čitanje; Izmena prikaza i crtanje za čuvanje postavke |
| Izveze specifikaciju | CSV, Excel ili tekst odvojen tabulatorom za lepljenje u Google Sheets (ništa se ne šalje Google-u) | Izvoz |
| Čita i postavlja završne obrade prostorija | Vrste završnih obrada, pod, zid i plafon svake prostorije, zone; površine, broj pločica i zapremine podloge tada dolaze iz specifikacija završnih obrada | Čitanje; Izmena prikaza i crtanje za postavljanje |
| Bira elemente, opoziva sopstvene korake | Elementi se biraju u prikazu; njen poslednji korak se vraća | Izmena prikaza i crtanje |
| Čuva | Nova IFC datoteka sa svim izmenama, kao što je pravi {{ui:Sačuvaj kao IFC}} (originalna se nikad ne menja) | Čuvanje |
| Izveze USD | Otvoreni modeli kao OpenUSD (.usda, .usdc ili .usdz), kao što ih zapisuje {{ui:USD}} na alatnoj traci | Izvoz |
| Renderuje sliku, pokreće red za renderovanje | Slika 3D prikaza, kao što je pravi dijalog {{ui:Renderuj}} sa vašim podešavanjima renderovanja, osim ako ne traži druga, ili visokokvalitetne slike dodate u red dijaloga koje se renderuju jedna za drugom (red zahteva WebGPU). Ništa se u modelu ne menja ([Renderovanje slike](topic:render)) | Izvoz |

Svaka izmena koju asistent napravi je jedan korak u **Izmene**, nazvan „Asistent: …“ (na primer „Asistent: dodaj 4 zida“), pa {{key:Mod+Z}} vraća ceo njegov postupak, a vidite čiji je korak bio. U prozoru ne može da otvara datoteke: vi otvarate model, a asistent radi s onim koji je otvoren.

## Uključivanje

Asistenti dolaze do BimCraft-a preko CadCraft Studija na vašem računaru; običan pregledač nema put unutra.

1. Otvorite {{ui:Podešavanja}} i izaberite karticu **BimCraft**.
2. Pod **Asistenti**, označite **Dozvoli AI asistentima i skriptama da koriste BimCraft**.
3. **Čitanje** je za vas već označeno. Označite i **Izmena prikaza i crtanje** ako asistent sme da izoluje i sakriva elemente i crta, i **Čuvanje** ako sme da sačuva model kao novu datoteku.
4. Povežite asistenta u Studiju (Studio prikazuje adresu i podešavanja koja treba nalepiti u njega).

## Dok je asistent povezan

Napomena na vrhu desnog panela kaže koji je asistent povezan i šta sme. Kliknite {{ui:Prekini vezu}} da odmah završite njegovu sesiju; mora ponovo da se poveže da bi nastavio.

**Aktivnost**, pod **Asistenti** u Podešavanjima, navodi svaki poziv koji je asistent napravio, najnoviji prvo, sa tim da li je uspeo.

:::tip
Pitajte običnim rečima, na primer „izoluj spoljne zidove na Nivou 1“, „koja vrata nemaju vatrootpornost?“ ili „nacrtaj prostoriju 6 sa 4 metra na Nivou 1 sa vratima u južnom zidu“. Asistent pronalazi elemente i prikazuje ih u vašem prikazu ili ih crta.
:::

## Bez prozora: skripte i komandna linija

Isti alati za crtanje rade na IFC datotekama u fasciklama koje navedete, bez otvorenog prozora: CadCraft-ov MCP server i komandna linija mogu da započnu novu zgradu ili otvore IFC datoteku, da je opišu, dodaju zidove, vrata, prozore, podove, nivoe i mreže, opozovu je i sačuvaju kao novu `.ifc` datoteku. Četiri alata više pogoduju skriptama: `ifc_batch` izvršava do 200 koraka izmene kao jedan (sve ili ništa: jedno opozivanje vraća ceo paket, a odbijen korak poništava ostale i navodi korak); `ifc_describe` navodi nivoe i svaki zid sa njegovim vratima i prozorima; `ifc_render_png` upisuje pomoćnu sliku modela sa senčenjem bez materijala, tekstura i senki, bez prozora; `usd_export` upisuje `.usda`, `.usdc` ili `.usdz`. Na komandnoj liniji, `cadcraft bim script.json --from model.ifc -o out.ifc` izvršava skriptu koraka, a `--usd`, `--png` i `--plan` upisuju USD datoteku, sliku ili osnovu iz istog pokretanja. Vi odlučujete koje fascikle sme da koristi i sme li išta da menja ili čuva.

## Isključivanje

Isključite **Dozvoli AI asistentima i skriptama da koriste BimCraft**. Svaki asistent se odmah odvaja, a podešavanje se čuva za sledeći put.

## Pogledajte i

- [Recepti za AI asistente](common:assistants-recipes): primeri rada, svaki sa alatima koje poziva.
- [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find)
- [Sakrij, izoluj i prikaži kroz elemente](topic:hide-and-isolate)
- [Podešavanja BimCraft-a](topic:settings)
