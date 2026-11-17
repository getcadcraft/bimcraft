---
title: Specifikacije cijevi, ventili, zaklopke i obitelji proizvođača
summary: Postavite vlastite specifikacije cijevi (tablice dimenzija s materijalom, spojem i hrapavošću), koje se spremaju u datoteku modela; postavite ventile, filtar i zaklopke na dionice te uvezite model ventila ili opreme proizvođača kao obitelj s priključnim točkama.
keywords: specifikacija cijevi, specifikacije cijevi, specifikacija cjevovoda, klasa cjevovoda, prilagođena cijev, tablica dimenzija, cijev, higijenska cijev, nehrđajući, tablica, vanjski promjer, debljina stijenke, unutarnji promjer, hrapavost, nazivni tlak, csv, json, uvoz, izvoz, proračunska tablica, standard, bpe, din, en 10357, en 10255, ventil, ventili, leptirasti ventil, balansirni ventil, regulacijski ventil, filtar, zaklopka, regulacijska zaklopka, protupožarna zaklopka, oem, proizvođač, izrađivač, obitelj, obitelji, priključci, veza, step, obj, gltf, ifc, radijator, konvektor, panelni grijač, klima-komora, difuzor, rešetka
from: bc2f7c4e
---

## Što ćete raditi

Crtat ćete cijevi prema vlastitoj specifikaciji umjesto ugrađenih tablica za čelik, bakar i plastiku, postavljati ventile i zaklopke na dionice te umetati model proizvođača s priključcima na koje se spajaju cijevi.

:::note
Pomoćni alat za crtanje i koordinaciju. Specifikacija cijevi sadrži brojke koje upišete ili uvezete: provjerite svaku tablicu prema standardu vašeg projekta. Ugrađeni ventili, filtri i zaklopke su shematski oblici dimenzionirani prema dionici, a ne duljine proizvođača ili norme za ventile.
:::

## Postavljanje specifikacije cijevi

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Izgradnja}} i odaberite {{ui:Specifikacije cijevi}}. Isti gumb nalazi se i na traci alata Cijev.
2. Odaberite {{ui:Novo}} ili započnite iz datoteke, zalijepljenog sadržaja ili početne specifikacije (u nastavku).
3. Upišite njezin naziv, normu ili referencu koju slijedi, materijal te vrstu kraja ili spoja.
4. Upišite jedan redak po dimenziji: naziv dimenzije, vanjski promjer i stijenku, u milimetrima. Umjesto stijenke upišite unutarnji promjer ako ga imate: drugo se popunjava automatski. DN, nazivni tlak i težina su neobavezni.
5. Neobavezno: hrapavost u milimetrima (proračun pada tlaka je koristi), debljinu izolacije s kojom nove dionice počinju, polumjer koljena kao faktor vanjskog promjera, imaju li specifikacija T-komadi i redukcije te vlastitu boju u 3D prikazu.
6. Označite usluge čije nove dionice trebaju početi u ovoj specifikaciji, na primjer hlađenu vodu.
7. Odaberite {{ui:Spremi u model}}.

Specifikacije se spremaju u datoteku modela. Svatko tko otvori datoteku ima ih, a {{ui:Poništi}} vraća promjenu.

Specifikaciju ili jednu od njezinih dimenzija nije moguće izbrisati dok je u njoj nacrtana dionica. Promjena brojki dimenzije ponovno crta dionice u toj dimenziji.

## Ponovna upotreba specifikacije u drugom modelu

- {{ui:Izvezi .json}} sprema odabranu specifikaciju kao malu datoteku; {{ui:Izvezi sve}} sprema svaku specifikaciju modela. {{ui:Uvezi datoteku}} ih ponovno čita.
- {{ui:Izvezi .csv}} sprema tablicu dimenzija za proračunsku tablicu. {{ui:Uvezi datoteku}} također čita `.csv`.
- {{ui:Zalijepi retke}} prihvaća tablicu kopiranu iz proračunske tablice. Prvi redak imenuje stupce: `Size`, `OD` i `Wall` (ili `ID`), te neobavezno `DN`, `Pressure`, `Weight`. Jedan redak po dimenziji. Brojevi su u milimetrima, osim ako odaberete palce ili ćelija zapisuje svoju jedinicu (`0.065 in`).

## Početne specifikacije

{{ui:Dodaj početnu specifikaciju}} dodaje jednu od njih u vaš model kao kopiju koju možete uređivati:

| Početna | Dimenzije |
|---|---|
| ASME BPE tube | 1/4" do 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 do DN200 |
| EN 10255 steel tube, medium series | DN15 do DN150 |
| EN 10255 steel tube, heavy series | DN15 do DN125 |

Ove tablice su vanjski promjeri i stijenke koje dvije ili više objavljenih stranica dobavljača navode za normu i na kojima se slažu. Nisu preuzete iz samih normi. Dimenzije koje navodi samo jedna stranica su izostavljene. Svaka početna specifikacija prikazuje svoje izvorne stranice i označena je s „provjerite prema standardu projekta“. Hrapavost, nazivni tlak i težina nisu navedeni.

## Crtanje dionice u specifikaciji

1. Odaberite {{ui:Cijev}}. Dionica koju ste označili u specifikaciji počinje u njoj. Za svaku drugu dionicu odaberite specifikaciju u popisu materijala: specifikacije su navedene iza ugrađenih materijala kao „Spec: naziv“.
2. Popis dimenzija sada sadrži samo dimenzije te specifikacije. Odaberite jednu i nacrtajte dionicu.

Da kasnije premjestite dionicu u specifikaciju, odaberite je i promijenite **Materijal** u **Svojstvima**. Njezina dimenzija postaje najbliža dimenzija specifikacije prema vanjskom promjeru.

U IFC datoteci cijev nosi naziv specifikacije, normu, materijal, spoj i dimenzije (`CadCraft_PipeSpec` i `Pset_PipeSegmentTypeCommon`, na cijevi i na njezinu tipu).

Proračuni dimenzija i pada tlaka čitaju unutarnji promjer specifikacije. Kad specifikacija ima hrapavost, trenje dionice računa se s njom (Darcy-Weisbach); bez nje koristi se uobičajena zadana vrijednost proračuna.

## Ventili, filtar i zaklopke

1. Odaberite {{ui:Ventil}} i vrstu na traci: zasunski, kuglasti, leptirasti, navojni (globe), nepovratni, balansirni ili regulacijski ventil, ili filtar, za cijevi; regulacijsku zaklopku ili protupožarnu zaklopku, za kanale.
2. Kliknite na dionicu na kojoj ide. Dionica se prereže oko njega i obje strane ostaju spojene. Ventil preuzima dimenziju dionice i pomiče se s njom.

Svojstva dionice navode svaki od njih uz gumb {{ui:Ukloni}}; dionica se ponovno zatvara.

Proračun pada tlaka računa gubitak na armaturi samo za zasunske, kuglaste, navojne i nepovratne ventile. Ostale vrste, zaklopke i obitelji proizvođača tu ne dodaju gubitak: uzmite ih u obzir u vlastitoj provjeri. Uključeni su u tablicu **Fitinzi i ventili** i u predmjer, a u IFC datoteku zapisuju se kao ventili, filtar (strainer) i zaklopke s dva spojena priključka.

## Model proizvođača kao obitelj

1. Otvorite {{ui:Izgradnja}} i odaberite {{ui:Obitelji}}, pa {{ui:Uvezi model}}. Čitaju se datoteke IFC, STEP, OBJ, STL, glTF i stavke knjižnice. Za OBJ i STL prvo postavite jedinice datoteke i glavnu os.
2. U dijaloškom okviru priključaka upišite naziv, proizvođača i broj modela.
3. Odaberite hoće li biti **Na dionici** (ventil, filtar ili zaklopka) ili **Oprema**, te kako će se zapisati.
4. Dodijelite mu priključke. Svaki ima naziv, cijev ili kanal, medij, dimenziju u milimetrima (vanjski promjer za cijev), nazivnu dimenziju prema vašoj specifikaciji, vrstu kraja, položaj i smjer u kojem gleda. {{ui:Na strani}} postavlja priključak u središte strane kutije modela. Mali pogled odozgo prikazuje priključke.
5. Odaberite {{ui:Spremi obitelj u model}}.

Obitelj koja ide na dionicu treba točno dva priključka, okrenuta u suprotnim smjerovima na istoj liniji. Odaberite je na popisu alata Ventil i kliknite na dionicu: postavlja se u vlastitoj duljini, a cijevi se spajaju na njezine priključke.

Obitelj se nikad ne rasteže. Ako njezini priključci nisu dimenzije dionice, dobit ćete obavijest pri postavljanju, a {{ui:Provjeri veze}} je navodi na popisu.

Obitelj opreme postavlja se alatom {{ui:Oprema}}, vrsta **Obitelj proizvođača**. Cijevi i kanali hvataju se za njezine priključke.

{{ui:Preuzmi kao stavku knjižnice}} sprema obitelj s njezinim priključcima kao datoteku koju možete predati knjižnici.

## Radijatori i konvektori

{{ui:Oprema}} također ima **Radijator** i **Konvektor / panelni grijač**: opća tijela s polaznim i povratnim priključkom za grijaću vodu. Pogledajte [Oprema MEP-a s priključcima](topic:mep-equipment).
