---
title: Špecifikácie potrubia, ventily, klapky a rodiny výrobcov
summary: Nastavte si vlastné špecifikácie potrubia (tabuľky rozmerov s materiálom, spojom a drsnosťou), uložené v súbore modelu; na trasy umiestnite ventily, sitko a klapky; a vložte model ventilu alebo zariadenia od výrobcu ako rodinu s prípojnými portami.
keywords: špecifikácia potrubia, špecifikácie potrubia, špecifikácia potrubia podľa triedy, trieda potrubia, vlastné potrubie, tabuľka rozmerov, rúrka, hygienická rúrka, nerezová oceľ, tabuľka, vonkajší priemer, hrúbka steny, vnútorný priemer, drsnosť, menovitý tlak, csv, json, import, export, tabuľkový hárok, norma, bpe, din, en 10357, en 10255, ventil, ventily, motýľový ventil, vyvažovací ventil, regulačný ventil, sitko, klapka, objemová klapka, požiarna klapka, oem, výrobca, rodina, rodiny, porty, pripojenie, step, obj, gltf, ifc, radiátor, konvektor, panelové vykurovacie teleso, vzduchotechnická jednotka, difúzor, mriežka
from: bc2f7c4e
---

## Čo urobíte

Kreslite potrubie podľa vlastnej špecifikácie namiesto vstavaných tabuliek ocele, medi a plastov, na trasy umiestnite ventily a klapky a vložte model výrobcu s portami, ku ktorým sa potrubia pripoja.

:::note
Pomôcka pre návrh a koordináciu. Špecifikácia potrubia obsahuje čísla, ktoré zadáte alebo importujete: každú tabuľku overte podľa svojho projektového štandardu. Vstavané ventily, sitká a klapky sú schematické tvary, dimenzované podľa trasy, nie podľa rozmerov výrobcu alebo normy pre ventily.
:::

## Nastavenie špecifikácie potrubia

1. Zapnite {{ui:Kresliť}}, otvorte {{ui:Zostava}} a vyberte {{ui:Špecifikácie potrubia}}. Rovnaké tlačidlo je na lište nástroja {{ui:Potrubie}}.
2. Vyberte {{ui:Nové}}, alebo začnite zo súboru, vloženia alebo štartovacej špecifikácie (nižšie).
3. Zadajte jej názov, normu alebo referenciu, ktorú sleduje, materiál a typ konca alebo spoja.
4. Zadajte jeden riadok pre každý rozmer: názov rozmeru, vonkajší priemer a hrúbku steny v milimetroch. Ak máte namiesto toho vnútorný priemer, zadajte ho namiesto hrúbky steny: druhá hodnota sa doplní. DN, menovitý tlak a hmotnosť sú voliteľné.
5. Voliteľne: drsnosť v milimetroch (výpočet tlakovej straty ju používa), hrúbku izolácie, s ktorou začínajú nové trasy, polomer kolena ako násobok vonkajšieho priemeru, či špecifikácia obsahuje T-kusy a redukcie, a vlastnú farbu v 3D.
6. Zaškrtnite médiá, ktorých nové trasy majú začínať v tejto špecifikácii, napríklad chladená voda.
7. Vyberte {{ui:Uložiť do modelu}}.

Špecifikácie sa uložia do súboru modelu. Ktokoľvek súbor otvorí, má ich k dispozícii a {{ui:Späť}} vráti zmenu.

Špecifikáciu alebo jej rozmer nie je možné zmazať, kým je v nej nakreslená trasa. Zmena hodnôt rozmeru prekreslí trasy v tomto rozmere.

## Opätovné použitie špecifikácie v inom modeli

- {{ui:Exportovať .json}} uloží vybranú špecifikáciu ako malý súbor; {{ui:Exportovať všetko}} uloží všetky špecifikácie modelu. {{ui:Importovať súbor}} ich načíta späť.
- {{ui:Exportovať .csv}} uloží tabuľku rozmerov pre tabuľkový hárok. {{ui:Importovať súbor}} načíta aj `.csv`.
- {{ui:Vložiť riadky}} prevezme tabuľku skopírovanú z tabuľkového hárka. Prvý riadok pomenúva stĺpce: `Size`, `OD` a `Wall` (alebo `ID`), voliteľne `DN`, `Pressure`, `Weight`. Jeden riadok pre každý rozmer. Čísla sú v milimetroch, pokiaľ nevyberiete palce alebo bunka neuvádza svoju jednotku (`0.065 in`).

## Štartovacie špecifikácie

{{ui:Pridať štartovaciu špecifikáciu}} pridá do modelu jednu z týchto špecifikácií ako kópiu, ktorú môžete upraviť:

| Štartovacia | Rozmery |
|---|---|
| ASME BPE rúrka | 1/4" až 6" |
| EN 10357 rúrka, séria A (DIN 11850 rad 2) | DN10 až DN200 |
| EN 10255 oceľová rúrka, stredná séria | DN15 až DN150 |
| EN 10255 oceľová rúrka, ťažká séria | DN15 až DN125 |

Tieto tabuľky sú vonkajšie priemery a steny, ktoré uvádzajú dve alebo viac publikovaných stránok dodávateľov pre danú normu a na ktorých sa zhodujú. Nie sú prevzaté priamo z noriem. Rozmery, ktoré uviedla iba jedna stránka, sú vynechané. Každá štartovacia špecifikácia zobrazuje svoje zdrojové stránky a je označená "overte podľa svojho projektového štandardu". Drsnosť, menovitý tlak ani hmotnosť nie sú uvedené.

## Kreslenie trasy v špecifikácii

1. Vyberte {{ui:Potrubie}}. Médium, ktoré ste zaškrtli v špecifikácii, začína v nej. Pre každú inú trasu vyberte špecifikáciu v zozname materiálov: špecifikácie sú uvedené za vstavanými materiálmi ako "Spec: názov".
2. Zoznam rozmerov teraz obsahuje iba rozmery tejto špecifikácie. Vyberte jeden a nakreslite trasu.

Ak chcete neskôr presunúť trasu do špecifikácie, vyberte ju a zmeňte **Materiál** vo {{ui:Vlastnosti}}. Jej rozmer sa zmení na najbližší rozmer špecifikácie podľa vonkajšieho priemeru.

## V súbore IFC

V súbore IFC nesie potrubie názov špecifikácie, normu, materiál, spoj a rozmery (`CadCraft_PipeSpec` a `Pset_PipeSegmentTypeCommon`, na potrubí aj na jeho type).

Výpočty dimenzovania a tlakovej straty čítajú vnútorný priemer špecifikácie. Ak má špecifikácia drsnosť, trenie trasy sa počíta s ňou (Darcy-Weisbach); bez nej sa použije obvyklá predvolená hodnota výpočtu.

## Ventily, sitko a klapky

1. Vyberte {{ui:Ventil}} a v lište zvoľte druh: hradiaci, guľový, motýľový, priamy, spätný, vyvažovací alebo regulačný ventil, alebo sitko pre potrubia; objemovú klapku alebo požiarnu klapku pre vzduchotechnické potrubia.
2. Kliknite na trasu, kde má byť. Trasa sa okolo neho preruší a obe strany zostanú pripojené. Preberie rozmer trasy a pohybuje sa s ňou.

Vo {{ui:Vlastnosti}} trasy je každý z nich uvedený s tlačidlom {{ui:Odstrániť}}; trasa sa znova uzavrie.

Výpočet tlakovej straty počíta stratu tvarovky iba pre hradiace, guľové, priame a spätné ventily. Ostatné druhy, klapky a rodiny výrobcov tam nepridávajú stratu: zohľadnite ich vo vlastnej kontrole. Sú započítané v tabuľke **Tvarovky a ventily** a vo výkaze výmer a do IFC sa zapisujú ako ventily, sitko a klapky s dvomi pripojenými portami.

## Model výrobcu ako rodina

1. Otvorte {{ui:Zostava}} a vyberte {{ui:Rodiny}}, potom {{ui:Importovať model}}. Načítavajú sa súbory IFC, STEP, OBJ, STL, glTF a položky knižnice. Pri OBJ a STL najprv nastavte jednotky súboru a os smerujúcu nahor.
2. V dialógu portov zadajte názov, výrobcu a číslo modelu.
3. Vyberte, či bude **Na trase** (ventil, sitko alebo klapka) alebo **Vybavenie**, a ako sa zapíše.
4. Určite jeho porty. Každý má názov, potrubie alebo vzduchotechnické potrubie, médium, rozmer v milimetroch (vonkajší priemer pri potrubí), menovitý rozmer podľa vašej špecifikácie, typ konca, polohu a smer, ktorým smeruje. {{ui:Na ploche}} umiestni port do stredu plochy škatule modelu. Malý pohľad zhora zobrazuje porty.
5. Vyberte {{ui:Uložiť rodinu do modelu}}.

Rodina, ktorá sa umiestňuje na trasu, potrebuje presne dva porty smerujúce od seba na jednej priamke. Vyberte ju v zozname nástroja {{ui:Ventil}} a kliknite na trasu: umiestni sa s vlastnou dĺžkou a potrubia sa pripoja k jej portom.

Rodina sa nikdy nenatiahne. Ak jej porty nemajú rozmer trasy, pri umiestnení sa to oznámi a {{ui:Skontrolovať pripojenia}} ju uvedie v zozname.

Rodina vybavenia sa umiestňuje pomocou {{ui:Vybavenie}}, druh **Rodina výrobcu**. Potrubia a vzduchotechnické potrubia sa k jej portom prichytia.

{{ui:Stiahnuť ako položku knižnice}} uloží rodinu aj s jej portmi ako súbor, ktorý môžete odoslať do knižnice.

## Radiátory a konvektory

{{ui:Vybavenie}} má tiež **Radiátor** a **Konvektor / panelové vykurovacie teleso**: všeobecné telesá s prípojkou prívodu a spiatočky pre vykurovaciu vodu. Pozrite [MEP zariadenia s portami](topic:mep-equipment).
