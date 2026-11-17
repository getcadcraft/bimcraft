---
title: Neka AI asistent radi sa vašim modelom
summary: Uključite asistente u Podešavanjima da asistent na vašem računaru može da pronalazi elemente, čita njihova svojstva, izoluje ih u prikazu i crta zidove, vrata, prozore, podove, nivoe i mreže, preko CadCraft Studio. Isključeno dok ga ne uključite.
keywords: ai, asistent, mcp, skripta, automatizacija, studio, pronađi elemente, izoluj, svojstva, dozvole, prekini vezu, aktivnost, crtanje zidova, dodavanje vrata, dodavanje prozora, nivoi, mreže, podovi, opozovi, sačuvaj, komandna linija, cli, bez prozora, korišćenje sa AI asistentima
from: c5ee595b
---

## Šta ćete naučiti

Kako da dozvolite AI asistentu (bilo kom asistentu koji govori MCP) da gleda IFC model koji imate otvoren i crta u njemu, šta sme, a šta ne sme, i kako da ga zaustavite.

## Šta asistent može da radi u BimCraft-u

| Traži da | Šta se dešava | Potrebno |
|---|---|---|
| Pronađe elemente | Dobija spisak elemenata po klasi, spratu, nazivu ili vrednosti svojstva, kao što to radi **Pronađi** | Čitanje |
| Čita svojstva | Dobija atribute jednog elementa, tip, skupove svojstava i količine, kako ih prikazuje **Svojstva** | Čitanje |
| Opiše model, navede zidove | Dobija nivoe, zidove, vrata, prozore, prostorije, podove, mreže i stubove, i krajeve, tip i visinu svakog zida | Čitanje |
| Izoluje, učini providnim, sakrije ili prikaže | 3D prikaz se menja kao da ste koristili meni {{ui:Prikaži}} | Promena prikaza i crtanje |
| Crta zidove, vrata, prozore, podove, nivoe ili linije mreže | Model se menja kao da ste koristili alatke {{ui:Crtanje}}: zidovi se spajaju, prostorije, podovi i krovovi prate | Promena prikaza i crtanje |
| Menja naziv ili vrednost svojstva | Naziv, Opis, Tip objekta ili Oznaka jednog elementa, ili vrednost jednog svojstva. Vrednost koju deli sa drugim elementima kopira se za njega prvo; vrednost tipa menja se samo kada asistent to kaže, jer svaki element tog tipa prati | Promena prikaza i crtanje |
| Pomera, briše, menja zidove, vrata i prozore | Elementi se pomeraju ili brišu zajedno sa onim što nose; zidovi nacrtani alatkama {{ui:Crtanje}} menjaju se po krajevima ili tipu, vrata i prozori po mestu, veličini ili tipu, a prostorije i spojevi prate | Promena prikaza i crtanje |
| Podešava, raspoređuje i čita specifikaciju | „Specifikacija vrata po spratu, sa protivpožarnom ocenom i okovom“: asistent imenuje specifikaciju, njene kolone (svojstvo ili oznaka postaje kolona) i grupisanje; BimCraft je popunjava iz modela i slaže je, a ono što asistent nije naveo uzima iz standarda kancelarije. Podešavanje se pridružuje vašoj listi Specifikacije. Svaki red koji dobije imenuje svoje elemente, pa ih može izabrati | Čitanje za čitanje; Promena prikaza i crtanje za čuvanje podešavanja |
| Izvozi specifikaciju | CSV, Excel ili tekst odvojen tabulatorima za lepljenje u Google Sheets (ništa se ne šalje Google-u) | Izvoz |
| Čita i postavlja završne obrade prostorija | Vrste završnih obrada, završna obrada poda, zida i plafona svake prostorije, zone; površine, broj pločica i zapremine podloge tada dolaze iz specifikacija završnih obrada | Čitanje; Promena prikaza i crtanje za postavljanje |
| Bira elemente, opoziva sopstvene korake | Elementi se biraju u prikazu; njegov poslednji korak se opoziva | Promena prikaza i crtanje |
| Čuva | Nova IFC datoteka sa svim izmenama, kao što je pravi {{ui:Sačuvaj kao IFC}} (originalna se nikad ne menja) | Čuvanje |
| Izvozi USD | Otvoreni modeli kao OpenUSD (.usda, .usdc ili .usdz), kao što ih piše {{ui:USD}} na alatnoj traci | Izvoz |
| Renderuje sliku, pokreće red renderovanja | Slika 3D prikaza, kao što je pravi dijalog {{ui:Renderuj}} sa vašim podešavanjima renderovanja, osim ako ne traži druga, ili kvalitetne slike dodate u red dijaloga, renderovane jednu za drugom (red zahteva WebGPU). Ništa se u modelu ne menja ([Renderuj sliku](topic:render)) | Izvoz |

Svaka izmena koju asistent napravi je jedan korak u **Izmene**, nazvan „Asistent: …“ (na primer „Asistent: dodaj 4 zida“), pa {{key:Mod+Z}} opoziva celu njegovu radnju, i vidite čiji je korak. U prozoru ne može da otvara datoteke: vi otvarate model, a asistent radi sa onim koji je otvoren.

## Uključivanje

Asistenti dolaze do BimCraft-a preko CadCraft Studio na vašem računaru; običan pregledač nema pristup.

1. Otvorite {{ui:Podešavanja}} i izaberite karticu **BimCraft**.
2. Pod **Asistenti**, označite **Dozvoli AI asistentima i skriptama da koriste BimCraft**.
3. **Čitanje** je označeno za vas. Označite **Promena prikaza i crtanje** takođe ako asistent sme da izoluje i sakriva elemente i crta, i **Čuvanje** ako sme da sačuva model kao novu datoteku.
4. Povežite asistenta u Studio (Studio prikazuje adresu i podešavanja koja treba da nalepite u njega).

## Dok je asistent povezan

Napomena na vrhu desnog panela kaže koji asistent je povezan i šta može. Kliknite {{ui:Prekini vezu}} da završite njegovu sesiju odmah; mora ponovo da se poveže da bi nastavio.

**Aktivnost**, pod **Asistenti** u Podešavanjima, navodi svaki poziv koji je asistent napravio, najnoviji prvi, sa tim da li je uspeo.

:::tip
Pitajte običnim rečima, na primer „izoluj spoljne zidove na Nivou 1“, „koja vrata nemaju protivpožarnu ocenu?“ ili „nacrtaj prostoriju 6 sa 4 metra na Nivou 1 sa vratima u južnom zidu“. Asistent pronalazi elemente i prikazuje ih u vašem prikazu, ili ih crta.
:::

## Bez prozora: skripte i komandna linija

Isti alati za crtanje rade na IFC datotekama u fasciklama koje navedete, bez otvorenog prozora: MCP server i komandna linija CadCraft-a mogu da započnu novu zgradu ili otvore IFC datoteku, opišu je, dodaju zidove, vrata, prozore, podove, nivoe i mreže, opozovu je i sačuvaju kao novu `.ifc` datoteku. Vi odlučujete koje fascikle sme da koristi i da li sme išta da menja ili čuva.

## Isključivanje

Skinite oznaku sa **Dozvoli AI asistentima i skriptama da koriste BimCraft**. Svaki asistent se odmah odvaja, a podešavanje se čuva za sledeći put.

## Vidi i

- [Recepti za AI asistente](common:assistants-recipes): radni primeri, svaki sa alatima koje poziva.
- [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find)
- [Sakrij, izoluj i učini providnim elemente](topic:hide-and-isolate)
- [Podešavanja BimCraft-a](topic:settings)
