---
title: Tabuľky, kóty a PDF pôdorysu
summary: Tabuľky dverí, okien, stien a miestností, ktoré sa menia pri kreslení, kóty na pôdoryse a pôdorys podlažia uložený ako PDF v štandardnej mierke.
keywords: tabuľka, tabuľka dverí, tabuľka okien, tabuľka stien, tabuľka miestností, množstvá, výkaz výmer, plocha, csv, tabuľkový hárok, kóty, kóta, tlač, pdf, vykreslenie, mierka, 1/4", 1:50, list
from: d97cd16e
---

## Čo urobíte

Pozrite si, čo vaša budova spolu dáva, počas kreslenia: koľko dverí a okien každého rozmeru, koľko steny každého typu, aká veľká je každá miestnosť. Kóty umiestnite na pôdorys a uložte ho ako PDF na tlač alebo odoslanie.

## Tabuľky

Pri zapnutom {{ui:Kresliť}} zobrazuje **Tabuľky** v ľavom paneli vždy jednu tabuľku:

- **Dvere** a **Okná**: každé podľa svojej značky (D1, D2 … a W1 …, zadané pri umiestnení), jeho typ, šírka, výška (a parapet), podlažie a stena, v ktorej je.
- **Steny podľa typu**: pre každý typ steny počet stien, ich hrúbka, celková dĺžka a plocha ich strán ako **Hrubá plocha**, **Odpočty** a **Čistá plocha**, so súčtom.
- **Miestnosti**: číslo, názov, podlažie, plocha a obvod, so súčtom plochy.
- **Podlahy**: každá podlaha s jej úrovňou, druhom a hrúbkou, a jej hrubá plocha, odpočty a čistá plocha.
- **Povrchové úpravy**: každá vrstva povrchovej úpravy typov stien (podľa materiálu a strany steny) a stropy, s počtom plôch a hrubou plochou, odpočtom a čistou plochou.
- **Typy stien: údaje výkazu výmer**: čo sa raz zadalo pre každý typ steny (jednotka, malta, sadzba), s počtom stien, ich dĺžkou a čistou plochou a sadzbou násobenou nameranou veličinou. Pozrite [Skladby stien](topic:wall-assemblies).

- **Povrchové úpravy podľa miestnosti**, **Povrchové úpravy podľa steny**, **Povrchové úpravy podľa zóny** a **Množstvá povrchových úprav**: čo pokrýva každú miestnosť, s plochami, počtom dlaždíc vrátane rezov a objemami podkladu. Pozrite [Povrchové úpravy miestností a tabuľky povrchových úprav](topic:room-finishes).
- Vaše vlastné **zostavy**: tabuľka, ktorú ste zoskupili, spočítali a uložili pod názvom. Pozrite [Rozloženie, uloženie a export tabuľky](topic:schedule-layouts).

Tabuľky sa menia pri každej úprave. Kliknite na riadok alebo na jedno číslo, aby ste vybrali prvky, z ktorých pochádza. **Stiahnuť CSV** uloží tabuľku na otvorenie v tabuľkovom hárku; pod ním sú **Stiahnuť Excel** a **Kopírovať pre Google Sheets**. **Povrchové úpravy miestností** a **Špecifikácia** ([Zapísanie špecifikácie z modelu](topic:specification)) sa otvárajú z toho istého miesta.

## Plocha a objem každej vrstvy

Vyberte **Vrstvy: plocha a objem** v zozname Tabuliek. Má jeden riadok pre každú vrstvu každého typu steny, podlahy, strechy a stropu v používaní: prvok, typ a jeho LOD, vrstvu (počítanú od vonkajšej strany steny, od hornej strany podlahy, strechy alebo stropu), jej materiál a funkciu, hrúbku, koľko prvkov, **čistú plochu** a **objem**.

- Plocha je čistá plocha prvkov daného typu, meraná presne ako v Stenách podľa typu, Podlahách a Povrchových úpravách, podľa metódy merania projektu. Strecha sa meria na sklone; žiadna metóda merania nemá pravidlo pre strechy.
- Objem je táto plocha krát vlastná hrúbka vrstvy.
- Podlaha, strecha alebo strop bez typu je jeden riadok: jedna vrstva vlastnej hrúbky.
- Vzduchová dutina je uvedená s plochou a vynechaná z celkového objemu. Membrána má plochu a nemá objem.

Kliknite na riadok, aby ste vybrali jeho prvky. **Stiahnuť CSV** uloží tabuľku.

## Ako sa merajú plochy

Každá plocha sú tri čísla, ktoré sa sčítajú: hrubá plocha mínus odpočty je čistá plocha. Pravidlo je napísané nad každou z týchto tabuliek a je to jedno pravidlo: tabuľky, množstvá uložené v súbore IFC a výkaz odovzdaný do TakeoffCraft všetky používajú.

- **Stena**: hrubá plocha je jedna strana steny, jej dĺžka po osi krát jej výška (skutočná plocha pri tvarovanom vrchu alebo základe). Každé dvere, okno a iný otvor sa odpočítajú: šírka krát výška, každý otvor raz.
- **Podlaha alebo strop**: hrubá plocha je plocha vnútri ich obrysu. Každý otvor a výrez vnútri sa odpočíta raz.
- **Povrchová úprava steny**: každá vrstva povrchovej úpravy typu steny pokrýva jednu stranu steny, meranú ako stena, s rovnakými odpočítanými otvormi. Povrchová úprava je vrstva steny: je uvedená pod Povrchovými úpravami a nepripočítava sa k ploche steny, takže stena s dverami sa nikdy nepočíta dvakrát.

To je **predvolená metóda CadCraft**: každý otvor sa odpočíta, nech má akúkoľvek veľkosť; dĺžky stien sú po osi; ostenia sa nemerajú. Používa ju každý projekt, kým nevyberiete inú metódu.

## Výber metódy merania

Nad tabuľkou **Metóda merania** sú uvedené metódy, ktoré prichádzajú s BimCraft, a **Načítať súbor metódy** načíta metódu vašej kancelárie. Voľba sa uloží do súboru IFC ako jeden krok {{ui:Späť}} a tri veci nasledujú hneď: tabuľky, čisté množstvá uložené v súbore a výkaz odovzdaný do TakeoffCraft. Pravidlo nad každou tabuľkou potom začína metódou, jej zdrojom, dátumom, kedy bol zdroj prečítaný, a slovami **Neoverené kvantitatívnym odhadcom**.

Metóda je malý súbor údajov, nie programový kód. Pre každé množstvo uvádza:

- **najmenší odpočítaný otvor**: napríklad otvor 0.5 m² alebo menší zostane v ploche steny;
- **ako sa merajú spoje stien**: pozdĺž osi; alebo pri stene, ktorá končí o inú, meraná k líci tej steny; alebo pri každom konci steny, ktorý sa stretáva s inou stenou, meraná k bližšiemu líci;
- **či sa merajú ostenia** pre povrchovú úpravu (návraty povrchovej úpravy do otvorov), ako plocha alebo, ak sú plytké, ako dĺžka. Hĺbka ostenia sa berie ako polovica hrúbky steny;
- **čo hovorí o murive**: ako sa meria a akýkoľvek prídavok na odpad alebo maltu, ktorý uvádza.

Metódy, ktoré prichádzajú s BimCraft:

| Metóda | Steny: najmenší odpočítaný otvor | Povrchové úpravy stien | Stropy | Murivo |
|---|---|---|---|---|
| Predvolená metóda CadCraft | každý otvor | každý otvor | každý výrez | bez prídavkov |
| RICS NRM 2 (Spojené kráľovstvo), 2. vydanie 2021 | 0.5 m² alebo menej zostane | 1 m² alebo menej zostane | 1 m² alebo menej zostane | podľa plochy; nie sú uvedené percentá |
| AAQS Standard Method for Africa 2015 | 0.5 m² alebo menej zostane | 0.5 m² alebo menej zostane | 0.5 m² alebo menej zostane | podľa plochy; meraná čistá, 0 % odpadu |
| IS 1200 (India), 1976, murivo | 0.1 m² alebo menej zostane | predvolené (pozri nižšie) | predvolené | podľa objemu |
| BIA Technical Note 10 (Spojené štáty), 2009 | každý otvor | predvolené | predvolené | 5 % odpadu na jednotky, 15 % na maltu |

Pred použitím metódy si prečítajte tieto obmedzenia:

- **Žiadny kvantitatívny odhadca neoveril žiadnu z nich.** Každá vznikla prečítaním uvedeného zdroja a zápisom jej čísel s klauzulou, z ktorej pochádzajú. Ak ste kvantitatívny odhadca a môžete niektorú overiť, tvorcovia aplikácie by sa radi ozvali.
- Kde sa pravidlo nedalo prečítať zo zdroja, metóda uvedie **nepotvrdené** a použije sa predvolená metóda CadCraft. Žiadna metóda, ktorá prichádza s BimCraft, nemá potvrdené pravidlo pre spoje stien, ostenia ani podlahy, takže sa tam merajú predvoleným spôsobom pri všetkých.
- IS 1200 odpočítava otvory v omietke v troch pásmach. Súbor metódy zatiaľ nedokáže pásma uchovať, takže povrchové úpravy stien používajú pri tejto metóde predvolené, a pravidlo to uvádza.
- Južnoafrický štandardný systém merania stavebných prác **nie je** medzi nimi: jeho text sa nedal prečítať. Metóda AAQS pre Afriku uvádza, že bola postavená na vydaní tohto systému z roku 1991, ale je to iný dokument.
- BIA Technical Note 10 je priemyselná poznámka k odhadom, nie štandardná metóda merania.
- Otvor, ktorý má presne najmenšiu veľkosť, sa riadi slovami samotnej metódy ("nepresahujúci", "menej než"). Rozmery do 2 dielov na 10 000 od neho sa počítajú ako presne ten.
- Pri metóde sa čistá plocha steny v súbore a čistá plocha podlahy alebo stropu riadia metódou a názov metódy uvádza sada množstiev. Hrubé plochy a objemy v súbore zostanú také, ako boli nakreslené.

**Poznámky k tejto metóde** pod výberom hovoria, čo každý zdroj necháva otvorené. **Otvoriť zdroj** prejde na dokument.

### Vlastná metóda vašej kancelárie

Súbor metódy je JSON vo formáte `cadcraft-measurement-method`. Každá hodnota v ňom uvádza klauzulu, z ktorej pochádza; hodnota bez klauzuly sa odmietne. Súbor sa kontroluje pri načítaní, chybné pole sa pomenuje a nič zo súboru, ktorý neprejde kontrolou, sa nepoužije. Po výbere sa súbor uloží do projektu, takže sa projekt na inom počítači otvorí rovnako. Jeho identifikátor je obyčajný názov podľa vás (nesmie byť identifikátorom metódy, ktorá prichádza s aplikáciou).

## Tehly, bloky a malta

**Typy stien: údaje výkazu výmer** počíta jednotky a maltu každého typu steny, ktorého jednotka má dĺžku a výšku (pozrite [Zadanie údajov výkazu výmer pre typ](topic:wall-assemblies#give-a-type-its-takeoff-data)). Toto sú vzorce, presne tak, ako sa počítajú:

- **Jednotky na plochu jedného líca** = 1 / ((dĺžka jednotky + škára) × (výška jednotky + škára)). Tehla 215 × 65 mm so škárou 10 mm: 1 / (225 × 75 mm) = 59.26 na m².
- **Počet jednotiek v šírke líca** = (hrúbka líca + škára) / (šírka jednotky + škára), zaokrúhlené na celé číslo, najmenej 1. Líce 102.5 mm z tehál 102.5 mm je 1; stena 215 mm z tých istých tehál je 2.
- **Jednotky** = jednotky na plochu × jednotky v šírke × čistá plocha líca steny, sčítané cez murované líce typu.
- **Jednotky na objednanie** = jednotky × (1 + odpad % / 100), zaokrúhlené nahor na celú jednotku. Odpad je ten zadaný pri type; ak nie je zadaný, metódy, ak nejaký uvádza; inak 0 %.
- **Malta** = čistá plocha × hrúbka líca, mínus objem jednotiek (jednotky × dĺžka × výška × šírka), potom plus dodatočné percento zadané pri type pre drážky alebo perforácie, potom plus prídavok metódy, ak ho uvádza. Potrebuje šírku jednotky.

Predpokladá sa: každý murovaný líc typu je postavený z jednej jednotky daného typu; líc hrubší než jedna šírka jednotky sa počíta ako toľko šírok jednotky, každá ako líc kladený po dĺžke, takže rezané jednotky, uzávery a špeciálne tvary sa nepočítajú zvlášť; kde žiadna vrstva nie je označená ako postavená z jednotky, za líce sa berú jadrové vrstvy, a poznámka nad tabuľkou to uvádza. **Množstvo** je sadzba krát to, na čo sa sadzba vzťahuje, čo môže byť teraz aj jednotka na objednanie, 1000 jednotiek na objednanie alebo m³ malty.

Značky sú IFC značky prvkov: zmeňte jednu vo {{ui:Vlastnosti}} (Značka) a tabuľka sa podľa toho zmení. Pre každý model IFC, nakreslený alebo nie, [Sčítanie množstiev, výpis prvkov a tabuľky priestorov](topic:quantity-totals) sčíta ľubovoľnú vlastnosť.

## Kóty

Pôdorys zobrazuje dĺžku každej nakreslenej steny pozdĺž jej vonkajšieho líca (vnútorná stena: pozdĺž jedného líca) a pri stene s dverami alebo oknami reťaz od rohov ku každému otvoru. {{ui:Kóty}} v lište modelu ich skryje a znova zobrazí.

## Uloženie pôdorysu ako PDF

1. Zobrazte podlažie, ktoré chcete, a nastavte jednotky v paneli **Úrovne**.
2. Kliknite na {{ui:Tlačiť}} v lište modelu.
3. BimCraft uloží "<súbor> — <úroveň>.pdf": pôdorys čiernobielo v najväčšej štandardnej mierke, ktorá sa zmestí na stranu (1/4" = 1'-0", 1/8" = 1'-0" … na Letter v stopách a palcoch; 1:50, 1:100 … na A4 v milimetroch), s vyplnenými stenami, dverami, oknami, názvami miestností a plochami, kótami a titulným pásom s úrovňou, súborom, výškou rezu, dátumom a mierkou.

PDF sa kreslí ako čiary a text, takže zostane ostré pri každom zväčšení a jeho text sa dá vyhľadávať.

## Dobré vedieť

- Tabuľky uvádzajú, čo nakreslili nástroje výkresu. Dvere a okná z iného programu sa namiesto toho zobrazia v Súčtoch množstiev.
- Ak chcete oceniť prácu, odovzdajte množstvá do TakeoffCraft: pozrite [Množstvá do TakeoffCraft](topic:takeoff). Stiahnutie CSV zostáva pre tabuľkový hárok.
