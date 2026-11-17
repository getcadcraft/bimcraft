---
title: Specifikacije cijevi, ventili, zaklopke i familije proizvođača
summary: Postavite vlastite specifikacije cijevi (tabele dimenzija s materijalom, spojem i hrapavošću), koje se čuvaju u datoteci modela; postavite ventile, filter i zaklopke na dionice; i uvezite model ventila ili opreme proizvođača kao familiju s priključnim tačkama.
keywords: specifikacija cijevi, specifikacije cijevi, specifikacija cjevovoda, klasa cjevovoda, prilagođena cijev, tabela dimenzija, cijev, higijenska cijev, nehrđajući čelik, specifikacija, vanjski prečnik, debljina stijenke, unutrašnji prečnik, hrapavost, nazivni pritisak, csv, json, uvoz, izvoz, tabela, standard, bpe, din, en 10357, en 10255, ventil, ventili, leptirasti ventil, balansni ventil, regulacioni ventil, filter, zaklopka, regulaciona zaklopka, protivpožarna zaklopka, oem, proizvođač, familija, familije, priključne tačke, priključak, step, obj, gltf, ifc, radijator, konvektor, panel grijalica, klima jedinica, difuzor, rešetka
from: bc2f7c4e
---

## Šta ćete raditi

Crtati cijevi u vlastitoj specifikaciji umjesto ugrađenih tabela za čelik, bakar i plastiku, postaviti ventile i zaklopke na dionice i postaviti model proizvođača s priključnim tačkama na koje se cijevi spajaju.

:::note
Pomoćno sredstvo za izradu nacrta i koordinaciju. Specifikacija cijevi sadrži brojeve koje upišete ili uvezete: provjerite svaku tabelu prema vašem projektnom standardu. Ugrađeni ventili, filteri i zaklopke su shematski oblici dimenzionisani prema dionici, a ne prema dužini proizvođača ili standarda ventila.
:::

## Postavljanje specifikacije cijevi

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Verzija}} i izaberite {{ui:Specifikacije cijevi}}. Isto dugme nalazi se na traci alata za cijev.
2. Izaberite {{ui:Novo}}, ili počnite iz datoteke, zalijepljenog sadržaja ili početne specifikacije (dolje).
3. Upišite njen naziv, standard ili referencu koju slijedi, materijal i vrstu kraja ili spoja.
4. Upišite jedan red po dimenziji: naziv dimenzije, vanjski prečnik i debljinu stijenke, u milimetrima. Upišite unutrašnji prečnik umjesto debljine stijenke ako ga imate: drugi se popunjava automatski. DN, nazivni pritisak i težina su opcionalni.
5. Opcionalno: hrapavost u milimetrima (proračun pada pritiska je koristi), debljinu izolacije s kojom nove dionice počinju, radijus koljena kao faktor vanjskog prečnika, da li specifikacija ima T-komade i redukcije, i vlastitu boju u 3D prikazu.
6. Označite usluge čije nove dionice treba da počnu u ovoj specifikaciji, na primjer rashladnu vodu.
7. Izaberite {{ui:Spasi u model}}.

Specifikacije se čuvaju u datoteci modela. Svako ko otvori datoteku ima ih, a {{ui:Poništi}} poništava promjenu.

Specifikaciju, ili jednu od njenih dimenzija, nije moguće izbrisati dok je u njoj nacrtana dionica. Promjena brojeva dimenzije ponovo crta dionice te dimenzije.

## Ponovna upotreba specifikacije u drugom modelu

- {{ui:Izvezi .json}} sprema odabranu specifikaciju kao malu datoteku; {{ui:Izvezi sve}} sprema sve specifikacije modela. {{ui:Uvezi datoteku}} ih ponovo učitava.
- {{ui:Izvezi .csv}} sprema tabelu dimenzija za tabelarni program. {{ui:Uvezi datoteku}} takođe čita `.csv`.
- {{ui:Zalijepi redove}} prihvata tabelu kopiranu iz tabelarnog programa. Prvi red imenuje kolone: `Size`, `OD` i `Wall` (ili `ID`), a opciono `DN`, `Pressure`, `Weight`. Jedan red po dimenziji. Brojevi su u milimetrima, osim ako odaberete inče ili ćelija ne navede svoju jedinicu (`0.065 in`).

## Početne specifikacije

{{ui:Dodaj početnu specifikaciju}} dodaje jednu od ovih u vaš model kao kopiju koju možete mijenjati:

| Početna specifikacija | Dimenzije |
|---|---|
| ASME BPE cijev | 1/4" do 6" |
| EN 10357 cijev, serija A (DIN 11850 red 2) | DN10 do DN200 |
| EN 10255 čelična cijev, srednja serija | DN15 do DN150 |
| EN 10255 čelična cijev, teška serija | DN15 do DN125 |

Ove tabele su vanjski prečnici i debljine zidova koje dvije ili više objavljenih stranica dobavljača ispisuju za standard i slažu se. Nisu preuzete iz samih standarda. Dimenzije koje je dala samo jedna stranica su izostavljene. Svaka početna specifikacija prikazuje svoje izvorne stranice i označena je kao „provjerite prema vašem projektnom standardu“. Nije dat nikakav podatak o hrapavosti, nazivnom pritisku ili težini.

## Nacrtajte dionicu u specifikaciji

1. Izaberite {{ui:Cijev}}. Usluga koju ste označili u specifikaciji počinje u njoj. Za svaku drugu dionicu izaberite specifikaciju u listi materijala: specifikacije su navedene nakon ugrađenih materijala kao „Spec: naziv“.
2. Lista dimenzija sada sadrži samo dimenzije te specifikacije. Izaberite jednu i nacrtajte dionicu.

Da kasnije premjestite dionicu u specifikaciju, izaberite je i promijenite **Materijal** u Svojstvima. Njena dimenzija postaje najbliža dimenzija specifikacije prema vanjskom prečniku.

U IFC datoteci cijev nosi naziv specifikacije, standard, materijal, spoj i dimenzije (`CadCraft_PipeSpec` i `Pset_PipeSegmentTypeCommon`, na cijevi i na njenom tipu).

Proračuni dimenzija i pada pritiska čitaju unutrašnji prečnik specifikacije. Kada specifikacija ima hrapavost, trenje dionice se računa njome (Darcy-Weisbach); bez nje koristi se uobičajena zadana vrijednost proračuna.

## Ventili, filter i zaklopke

1. Izaberite {{ui:Ventil}} i odaberite vrstu na traci: zasunski, kuglasti, leptirasti, globe, nepovratni, balansni ili regulacioni ventil, ili filter, za cijevi; zapreminska zaklopka ili protivpožarna zaklopka za kanale.
2. Kliknite na dionicu gdje ide. Dionica se presijeca oko njega i obje strane ostaju povezane. Ventil preuzima dimenziju dionice i pomjera se s njom.

Svojstva dionice navode svaki od njih uz {{ui:Ukloni}}; dionica se ponovo zatvara.

Proračun pada pritiska računa gubitak na fitingu samo za zasunske, kuglaste, globe i nepovratne ventile. Ostale vrste, zaklopke i familije proizvođača tu ne dodaju gubitak: uračunajte ih u vlastitoj provjeri. Oni se broje u specifikaciji **Fitinzi i ventili** i u predmjeru, a u IFC se upisuju kao ventili, filter i zaklopke sa dvije povezane priključne tačke.

## Model proizvođača kao familija

1. Otvorite {{ui:Verzija}} i izaberite {{ui:Familije}}, zatim {{ui:Uvezi model}}. Čitaju se datoteke IFC, STEP, OBJ, STL, glTF i stavke biblioteke. Za OBJ i STL prvo postavite jedinice datoteke i glavnu osu.
2. U dijaloškom okviru priključnih tačaka upišite naziv, proizvođača i broj modela.
3. Izaberite da li ide **Na dionicu** (ventil, filter ili zaklopka) ili je **Oprema**, i kako se zapisuje.
4. Dodijelite joj priključne tačke. Svaka ima naziv, cijev ili kanal, uslugu, dimenziju u milimetrima (vanjski prečnik za cijev), nazivnu dimenziju kako je vaša specifikacija imenuje, vrstu kraja, položaj i smjer u kojem gleda. {{ui:Na strani}} postavlja tačku u središte strane kutije modela. Mali pogled odozgo prikazuje priključne tačke.
5. Izaberite {{ui:Spasi porodicu u model}}.

Familija koja ide na dionicu treba tačno dvije priključne tačke koje gledaju jedna od druge u istoj liniji. Izaberite je na listi alata Ventil i kliknite na dionicu: postavlja se na svoju dužinu, a cijevi se spajaju na njene priključne tačke.

Familija se nikada ne rasteže. Ako njene priključne tačke nisu dimenzije dionice, dobijete obavijest pri postavljanju, a {{ui:Provjeri veze}} je navodi.

Familija opreme postavlja se pomoću {{ui:Oprema}}, vrsta **Familija proizvođača**. Cijevi i kanali se privlače na njene priključne tačke.

{{ui:Preuzmi kao stavku biblioteke}} sprema familiju s njenim priključnim tačkama kao datoteku koju možete poslati u biblioteku.

## Radijatori i konvektori

{{ui:Oprema}} takođe ima **Radijator** i **Konvektor / panel grijalica**: opšta tijela s dovodnim i povratnim priključkom za grijaću vodu. Pogledajte [MEP oprema s priključnim tačkama](topic:mep-equipment).
