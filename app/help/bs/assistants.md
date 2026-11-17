---
title: Neka AI asistent radi s vašim modelom
summary: Uključite asistente u Postavkama da asistent na vašem računaru može pronaći elemente, pročitati njihova svojstva, izolovati ih u pogledu i crtati zidove, vrata, prozore, podove, nivoe i mreže, preko CadCraft Studio. Isključeno dok ga ne uključite.
keywords: ai, asistent, mcp, skripta, automatizacija, studio, pronađi elemente, izoluj, svojstva, dozvole, prekini vezu, aktivnost, crtaj zidove, dodaj vrata, dodaj prozore, nivoi, mreže, podovi, poništi, spasi, komandna linija, cli, bez prozora, koristi s AI asistentima
from: c5ee595b
---

## Šta ćete naučiti

Kako pustiti AI asistenta (bilo koji asistent koji govori MCP) da gleda u IFC model koji imate otvoren i da crta u njemu, šta može, a šta ne može, i kako ga zaustaviti.

## Šta asistent može da radi u BimCraft-u

| Traži da | Šta se dešava | Treba |
|---|---|---|
| Pronađe elemente | Dobija listu elemenata po klasi, spratu, nazivu ili vrijednosti svojstva, kao što to radi **Pronađi** | Čitanje |
| Pročita svojstva | Dobija atribute jednog elementa, tip, skupove svojstava i količine, kao što ih prikazuje **Svojstva** | Čitanje |
| Opiše model, navede zidove | Dobija nivoe, zidove, vrata, prozore, prostorije, podove, mreže i stubove, te kraj, tip i visinu svakog zida | Čitanje |
| Izoluje, učini prozirnim, sakrije ili prikaže | 3D pogled se mijenja kao da ste koristili meni {{ui:Prikaži}} | Mijenjanje pogleda i crtanje |
| Nacrta zidove, vrata, prozore, podove, nivoe ili linije mreže | Model se mijenja kao da ste koristili alate {{ui:Crtanje}}: zidovi se spajaju, a prostorije, podovi i krovovi prate | Mijenjanje pogleda i crtanje |
| Promijeni naziv ili vrijednost svojstva | Naziv, opis, tip objekta ili oznaku jednog elementa, ili jednu vrijednost svojstva. Vrijednost koju dijeli s drugim elementima se prvo kopira za njega; vrijednost tipa mijenja se samo kada asistent to kaže, jer svaki element tog tipa slijedi | Mijenjanje pogleda i crtanje |
| Pomjeri, obriše, promijeni zidove, vrata i prozore | Elementi se pomjeraju ili brišu zajedno s onim što ih nosi; zidovi nacrtani alatima {{ui:Crtanje}} mijenjaju se po krajevima ili tipu, vrata i prozori po mjestu, veličini ili tipu, a prostorije i spojevi prate | Mijenjanje pogleda i crtanje |
| Postavi, rasporedi i pročita specifikaciju | „Specifikacija vrata po podu, sa požarnom otpornošću i okovom”: asistent imenuje specifikaciju, njene kolone (svojstvo ili oznaka postaje kolona) i grupisanje; BimCraft je popunjava iz modela i rasporeduje, uzimajući iz kancelarijskog standarda ono što asistent nije naveo. Postavka se pridružuje vašoj listi {{ui:Specifikacije}}. Svaki red koji dobije navodi svoje elemente, pa ih može odabrati | Čitanje za čitanje; Mijenjanje pogleda i crtanje za spašavanje postavke |
| Izveze specifikaciju | CSV, Excel ili tekst odvojen tabulatorima za lijepljenje u Google Sheets (ništa se ne šalje Google-u) | Izvoz |
| Pročita i postavi završne obrade prostorija | Tipovi završnih obrada, završna obrada poda, zida i plafona svake prostorije, zone; površine, broj pločica i zapremine podloge tada dolaze iz tabela završnih obrada | Čitanje; Mijenjanje pogleda i crtanje za postavljanje |
| Odabere elemente, poništi vlastite korake | Elementi se biraju u pogledu; njegov posljednji korak se poništava | Mijenjanje pogleda i crtanje |
| Spasi | Nova IFC datoteka sa svakom promjenom, kao što je pravi {{ui:Spasi kao IFC}} (original se nikada ne mijenja) | Spasi |
| Izveze USD | Otvoreni modeli kao OpenUSD (.usda, .usdc ili .usdz), kao što piše {{ui:USD}} na traci alata | Izvoz |
| Renderuje sliku, pokrene red za renderovanje | Slika 3D pogleda, kao što je pravi dijalog {{ui:Renderuj}} sa vašim postavkama renderovanja, osim ako ne traži druge, ili slike visokog kvaliteta dodate u red dijaloga i renderovane jedna za drugom (red zahtijeva WebGPU). Ništa se u modelu ne mijenja ([Renderuj sliku](topic:render)) | Izvoz |

Svaka promjena koju asistent napravi je jedan korak u **Promjene**, nazvan „Asistent: …” (na primjer „Asistent: dodaj 4 zida”), pa {{key:Mod+Z}} vraća cijelu njegovu radnju, a vidite čiji je korak bio. U prozoru ne može otvarati datoteke: vi otvarate model, a asistent radi s onim koji je otvoren.

## Uključivanje

Asistenti dolaze do BimCraft-a preko CadCraft Studio na vašem računaru; običan pregledač nema pristup.

1. Otvorite {{ui:Postavke}} i izaberite karticu **BimCraft**.
2. Pod **Asistenti** označite **Dozvoli AI asistentima i skriptama da koriste BimCraft**.
3. **Čitanje** je označeno za vas. Označite i **Mijenjanje pogleda i crtanje** ako asistent smije izolovati i sakrivati elemente te crtati, i **Spasi** ako smije spasiti model kao novu datoteku.
4. Povežite asistenta u Studio-u (Studio prikazuje adresu i postavke koje treba nalijepiti u njega).

## Dok je asistent povezan

Napomena na vrhu desnog panela kaže koji je asistent povezan i šta može. Kliknite {{ui:Prekini vezu}} da odmah završite njegovu sesiju; mora se ponovo povezati da nastavi.

**Aktivnost**, pod **Asistenti** u Postavkama, navodi svaki poziv koji je asistent napravio, najnoviji prvi, sa tim je li uspio.

:::tip
Pitajte običnim riječima, na primjer „izoluj vanjske zidove na nivou 1”, „koja vrata nemaju požarnu otpornost?” ili „nacrtaj prostoriju 6 sa 4 metra na nivou 1 sa vratima u južnom zidu”. Asistent pronalazi elemente i prikazuje ih u vašem pogledu, ili ih crta.
:::

## Bez prozora: skripte i komandna linija

Isti alati za crtanje rade na IFC datotekama u mapama koje navedete, bez otvorenog prozora: CadCraft-ov MCP server i komandna linija mogu započeti novu zgradu ili otvoriti IFC datoteku, opisati je, dodati zidove, vrata, prozore, podove, nivoe i mreže, poništiti i spasiti je kao novu `.ifc` datoteku. Vi odlučujete koje mape smije koristiti i smije li išta mijenjati ili spašavati.

## Isključivanje

Odznačite **Dozvoli AI asistentima i skriptama da koriste BimCraft**. Svaki asistent se odmah odvezuje, a postavka se zadržava za sljedeći put.

## Vidi također

- [Recepti za AI asistente](common:assistants-recipes): radni primjeri, svaki sa alatima koje poziva.
- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Sakrijte, izolujte i učinite prozirnim elemente](topic:hide-and-isolate)
- [Postavke BimCraft-a](topic:settings)
