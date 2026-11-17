---
title: Specifikacije cevi, ventili, prigušivači i porodice proizvođača
summary: Napravite sopstvene specifikacije cevi (tabele dimenzija s materijalom, spojem i hrapavošću) koje se čuvaju u datoteci modela; postavite ventile, filter i prigušivače na deonice; i uvezite model ventila ili opreme proizvođača kao porodicu s priključnim tačkama.
keywords: specifikacija cevi, specifikacije cevi, specifikacija cevovoda, klasa cevovoda, prilagođena cev, tabela dimenzija, cevčica, higijenska cevčica, nerđajući čelik, specifikacija, spoljašnji prečnik, debljina zida, unutrašnji prečnik, hrapavost, pritisna klasa, csv, json, uvoz, izvoz, tabela, standard, bpe, din, en 10357, en 10255, ventil, ventili, leptirasti ventil, balansni ventil, regulacioni ventil, filter, prigušivač, zapreminski prigušivač, protivpožarni prigušivač, oem, proizvođač, porodica, porodice, priključne tačke, priključak, step, obj, gltf, ifc, radijator, konvektor, panelni grejač, klima komora, difuzor, rešetka
from: bc2f7c4e
---

## Šta ćete uraditi

Crtajte cevi u sopstvenoj specifikaciji umesto ugrađenih tabela za čelik, bakar i plastiku, postavljajte ventile i prigušivače na deonice i postavite model proizvođača s priključnim tačkama za koje se cevi povezuju.

:::note
Alat za izradu nacrta i koordinaciju. Specifikacija cevi sadrži brojeve koje unesete ili uvezete: proverite svaku tabelu prema standardu vašeg projekta. Ugrađeni ventili, filteri i prigušivači su šematski oblici dimenzionisani prema deonici, a ne dužina proizvođača ili standarda za ventile.
:::

## Podesite specifikaciju cevi

1. Uključite {{ui:Draw}}, otvorite {{ui:Build}} i izaberite {{ui:Pipe specs}}. Isto dugme nalazi se na traci alata {{ui:Pipe}}.
2. Izaberite {{ui:New}}, ili počnite iz datoteke, iz nalepljenih redova ili iz početne specifikacije (u nastavku).
3. Unesite njen naziv, standard ili referencu koju prati, materijal i vrstu kraja ili spoja.
4. Unesite jedan red po dimenziji: naziv dimenzije, spoljašnji prečnik i debljinu zida, u milimetrima. Unesite unutrašnji prečnik umesto debljine zida ako to imate: druga vrednost se popunjava. DN, pritisna klasa i težina su opcioni.
5. Opciono: hrapavost u milimetrima (proračun pada pritiska je koristi), debljina izolacije s kojom nove deonice počinju, poluprečnik kolena kao faktor spoljašnjeg prečnika, da li specifikacija ima T-komade i redukcije, i sopstvena boja u 3D prikazu.
6. Označite usluge čije nove deonice treba da počnu u ovoj specifikaciji, na primer rashladnu vodu.
7. Izaberite {{ui:Save in the model}}.

Specifikacije se čuvaju u datoteci modela. Svako ko otvori datoteku ima ih, a {{ui:Undo}} vraća promenu.

Specifikacija, ili neka od njenih dimenzija, ne može se obrisati dok je deonica nacrtana u njoj. Promena brojeva dimenzije ponovo crta deonice u toj dimenziji.

## Ponovo koristite specifikaciju u drugom modelu

- {{ui:Export .json}} čuva izabranu specifikaciju kao malu datoteku; {{ui:Export all}} čuva sve specifikacije modela. {{ui:Import a file}} ih vraća.
- {{ui:Export .csv}} čuva tabelu dimenzija za tabelarni program. {{ui:Import a file}} takođe čita `.csv`.
- {{ui:Paste rows}} prihvata tabelu kopiranu iz tabelarnog programa. Prvi red imenuje kolone: `Size`, `OD` i `Wall` (ili `ID`), a opciono `DN`, `Pressure`, `Weight`. Jedan red po dimenziji. Brojevi su u milimetrima, osim ako izaberete inče ili ćelija ima svoju jedinicu (`0.065 in`).

## Početne specifikacije

{{ui:Dodaj početnu specifikaciju}} dodaje jednu od ovih u model kao kopiju koju možete menjati:

| Početna specifikacija | Dimenzije |
|---|---|
| ASME BPE cevčica | 1/4" do 6" |
| EN 10357 serija A cevčica (DIN 11850 red 2) | DN10 do DN200 |
| EN 10255 čelična cev, srednja serija | DN15 do DN150 |
| EN 10255 čelična cev, teška serija | DN15 do DN125 |

Ove tabele su spoljašnji prečnici i debljine zidova koje dve ili više objavljenih stranica dobavljača navode za standard i u kojima se slažu. Nisu uzete iz samih standarda. Dimenzije koje je navela samo jedna stranica su izostavljene. Svaka početna specifikacija prikazuje svoje izvorne stranice i označena je kao „proverite prema standardu projekta“. Hrapavost, pritisna klasa i težina nisu date.

## Nacrtajte deonicu u specifikaciji

1. Izaberite {{ui:Pipe}}. Usluga koju ste označili u specifikaciji počinje u njoj. Za svaku drugu deonicu izaberite specifikaciju na listi materijala: specifikacije su navedene posle ugrađenih materijala kao „Spec: naziv“.
2. Lista dimenzija sada sadrži samo dimenzije te specifikacije. Izaberite jednu i nacrtajte deonicu.

Da biste kasnije premestili deonicu u specifikaciju, izaberite je i promenite **Materijal** u panelu Svojstva. Njena dimenzija postaje najbliža dimenzija specifikacije prema spoljašnjem prečniku.

U IFC datoteci cev nosi naziv specifikacije, standard, materijal, spoj i dimenzije (`CadCraft_PipeSpec` i `Pset_PipeSegmentTypeCommon`, na cevi i na njenom tipu).

Proračuni dimenzionisanja i pada pritiska čitaju unutrašnji prečnik specifikacije. Kada specifikacija ima hrapavost, trenje deonice računa se pomoću nje (Darcy-Weisbach); bez nje koristi se uobičajena podrazumevana vrednost proračuna.

## Ventili, filter i prigušivači

1. Izaberite {{ui:Valve}} i vrstu na traci: zasunski, kuglasti, leptirasti, sedežni (globusni), nepovratni, balansni ili regulacioni ventil, ili filter, za cevi; zapreminski prigušivač ili protivpožarni prigušivač, za kanale.
2. Kliknite na deonicu gde ide. Deonica se seče oko njega i obe strane ostaju povezane. Ventil dobija dimenziju deonice i pomera se s njom.

Svojstva deonice navode svaki od njih uz {{ui:Remove}}; deonica se ponovo zatvara.

Proračun pada pritiska računa gubitak na fitingu samo za zasunske, kuglaste, sedežne i nepovratne ventile. Ostale vrste, prigušivači i porodice proizvođača tu ne dodaju gubitak: uračunajte ih u sopstvenoj proveri. Oni se broje u tabeli **Fitinzi i ventili** i u predmeru i upisuju se u IFC kao ventili, filter i prigušivači s dve povezane priključne tačke.

## Model proizvođača kao porodica

1. Otvorite {{ui:Build}} i izaberite {{ui:Families}}, pa {{ui:Uvezi model}}. Čitaju se datoteke IFC, STEP, OBJ, STL, glTF i stavke biblioteke. Za OBJ i STL prvo podesite jedinice datoteke i osu nagore.
2. U dijalogu priključnih tačaka unesite naziv, proizvođača i broj modela.
3. Izaberite da li ide **Na deonici** (ventil, filter ili prigušivač) ili je **Oprema**, i kako se upisuje.
4. Dodelite joj priključne tačke. Svaka ima naziv, cev ili kanal, medijum, dimenziju u milimetrima (spoljašnji prečnik cevi), nazivnu dimenziju kako je vaša specifikacija imenuje, vrstu kraja, položaj i smer u kojem gleda. {{ui:On a face}} postavlja tačku u centar strane kutije modela. Mali pogled odozgo prikazuje tačke.
5. Izaberite {{ui:Save the family in the model}}.

Porodica koja ide na deonicu mora imati tačno dve priključne tačke okrenute jedna od druge na jednoj liniji. Izaberite je u listi alata {{ui:Valve}} i kliknite na deonicu: postavlja se u sopstvenoj dužini, a cevi se povezuju s njenim tačkama.

Porodica se nikada ne rasteže. Ako njene tačke nisu dimenzija deonice, bićete obavešteni pri postavljanju, a {{ui:Check connections}} je navodi.

Porodica opreme postavlja se pomoću {{ui:Equipment}}, vrsta **Porodica proizvođača**. Cevi i kanali se privlače njenim tačkama.

{{ui:Download as a Library item}} čuva porodicu s njenim tačkama kao datoteku koju možete poslati u biblioteku.

## Radijatori i konvektori

{{ui:Equipment}} takođe ima **Radijator** i **Konvektor / panelni grejač**: opšta tela s priključkom za polazak i povratak za grejnu vodu. Pogledajte [Oprema za MEP s priključnim tačkama](topic:mep-equipment).
