---
title: Miestnosti, podlahy, stropy a strechy
summary: Miestnosti vznikajú, keď ich steny uzavrú; miestnosti alebo celej budove dajte podlahu a strop a na steny umiestnite valbovú alebo sedlovú strechu. Všetky nasledujú, keď sa steny posunú.
keywords: miestnosť, miestnosti, priestor, plocha, obvod, podlaha, doska, podkladová podlaha, strop, strecha, valbová strecha, sedlová strecha, sklon, presah, okap, hrebeň, úžľabie, 6/12
from: 1fb1813c
---

## Čo urobíte

Dokončite obal budovy. Miestnosti vzniknú zo stien samé; podlahu, strop a strechu dostanete jedným kliknutím každé. Keďže sa odvodzujú zo stien, pri ich posune sa prispôsobia.

## Miestnosti

Každý priestor uzavretý nakreslenými stenami je miestnosť. Objaví sa hneď, ako posledná stena priestor uzavrie, s číslom (101, 102 … na prvom podlaží, 201 … na ďalšom) a názvom (**Miestnosť 1**, **Miestnosť 2** …), a jej plocha sa zobrazí v strede na pôdoryse.

- Keď je zapnutý {{ui:Vybrať}}, kliknutím vnútri miestnosti ju vyberiete. Vo **Vlastnostiach** zmeňte jej **Názov** (napríklad `Kuchyňa`) a **Číslo**; jej plocha a obvod sa zobrazia.
- Zmažte stenu medzi dvomi miestnosťami a stanú sa jednou; nakreslite stenu cez miestnosť a rozdelí sa na dve. Miestnosť si zachová názov a číslo, keď sa okolité steny posúvajú.
- Miestnosť sa nedá zmazať samostatne: je to priestor, ktorý vytvárajú steny.

Plochy sa merajú vnútri od líc stien. Miestnosti sa ukladajú ako priestory IFC s plochou podlahy, obvodom, výškou a objemom, aby ich tabuľky mohli načítať (pozri [Sčítať množstvá, vypísať prvky a zostaviť tabuľku priestorov](topic:quantity-totals)).

## Podlahy

1. Kliknite na {{ui:Podlaha}}.
2. Vyberte **Táto miestnosť** alebo **Celá budova**, **Druh** (drevená podlaha alebo betónová doska) a jej hrúbku.
3. Ukážte vnútri miestnosti (alebo kdekoľvek vnútri budovy). Zvýrazní sa, čo by podlaha pokryla, a jej plocha.
4. Kliknite. Horná hrana podlahy je podlažie úrovne; klesá o svoju hrúbku. Podlaha celej budovy siaha k vonkajším lícom stien.

## Stropy

1. Kliknite na {{ui:Strop}}.
2. Vyberte **Táto miestnosť** alebo **Celá budova** a jeho **Výšku** nad podlahou.
3. Ukážte vnútri a kliknite.
4. Ak to chcete vidieť zdola, s jeho mriežkou a svetlami na ňom, prepnite pôdorys na stropný pôdorys: pozri [Pohľady, rozsahy pohľadov a vlastné listy](topic:views-and-sheets).

## Strecha

1. Na podlaží, ktorého steny nesú strechu, kliknite na {{ui:Strecha}}.
2. Zadajte **Sklon** ako stúpanie na 12 (`6/12`) alebo v stupňoch (`30`), a **Presah**.
3. Vyberte **Konce**: **Valbová strecha** (každá strana je šikmá), **Štíty na kratších stranách** alebo **Štíty na dlhších stranách** (budova so štyrmi stranami), alebo **Pultová**.
4. Ukážte vnútri budovy: okap a hrebeň sa zobrazia na pôdoryse. Kliknite.

Strecha sedí na stenách, na podlaží nad nimi, a jej spodok sa stretáva s vonkajším lícom stien. Štíty sa vyplnia štítovým múrom rovnako hrubým ako stena pod ním. Budova tvaru L, T alebo U dostane valbovú strechu, ktorej krídla sa stretávajú v úžľabiach.

## Zmena

Vyberte podlahu, strop alebo strechu (v 3D zobrazení, v strome modelu alebo strechu kliknutím vnútri jej obrysu na podlaží nad ňou) a zmeňte ju vo **Vlastnostiach**: druh podlahy, jej hrúbku a o koľko je horná hrana nad úrovňou; výšku stropu, hrúbku a **Vzor** (mriežku, ktorú strop kreslí na pôdoryse stropu: žiadna, 600 × 600, 600 × 1200, 2' × 2' alebo 2' × 4'); sklon strechy, presah, konce a hrúbku. Každá zmena je jeden krok späť.

## Typ s vrstvami pre podlahu, strop alebo strechu

Podlaha, strop a strecha môžu dostať **typ**, ako ho dostáva stena: pomenované zloženie vrstiev, každá s materiálom a skutočnou hrúbkou.

- **Pri umiestnení.** Nástroje Podlaha, Strop, Strecha a Kresliť podlahu majú na svojom riadku zoznam **Typ**. **Bez typu** umiestni ako doteraz, s vlastnou hrúbkou. Typ ju umiestni s hrúbkou, ktorá je súčtom vrstiev typu.
- **Neskôr.** Vyberte podlahu, strop alebo strechu a vo Vlastnostiach zvoľte **Typ**. Prvok zostane tým istým prvkom: jeho miesto, miestnosť a údaje sa zachovajú a nič sa nekreslí znova. Mení sa len jeho typ, hrúbka a materiál. Takto sa prvok z náčrtu zmení na prepracovaný: všeobecný typ nahradíte skutočným.
- **Upraviť typ…** otvorí editor typov pre daný typ: vrstvy zhora nadol, jadro, funkciu každej vrstvy a označenie LOD typu. Uloženie zmení každý prvok daného typu jedným krokom a jeden krok späť to vráti. Zmena štartovacieho typu uloží kópiu ako váš vlastný typ.
- Kým má prvok typ, jeho **Hrúbka** je hrúbka typu a nedá sa do nej písať. Ak ju chcete zmeniť, vyberte iný typ alebo **Bez typu**.

Štartovacie typy sú jeden **všeobecný** typ pre každý prvok (jedna vrstva všeobecného materiálu, označená LOD 200) a dva vrstvené (označené LOD 300): drevený trámový strop a betónová podlaha s poterom; drevená strecha a betónová plochá strecha; sadrokartónový strop a zavesený strop z dlaždíc. Sú to východiskové hodnoty, nie overené konštrukcie: pred spoliehaním na ne skontrolujte vrstvy.

Tabuľka **Vrstvy: plocha a objem** uvádza každú vrstvu každého typu v použití; pozri [Tabuľky, kóty a PDF](topic:plan-schedules-and-pdf). Typy podláh, stropov a striech sa prenášajú medzi projektmi v balíku typov alebo ako položka knižnice; pozri [Balíky typov](topic:type-packs).

## Dobré vedieť

- Posunutie, pridanie alebo zmazanie stien znovu vytvorí miestnosti, podlahy, stropy a strechu nad nimi.
- Strecha sa hodí na ľubovoľný obrys. Ak chcete dať každej stene vlastný sklon, štít alebo pultový koniec, zdvihnutú pásnicu, čelnú dosku a podhľad okapu, alebo nakresliť jednu rovinu strechy, pozri [Strechy: sklon pre každú stenu, štíty, pulty a roviny strechy](topic:roofs).
- {{key:Delete}} zmaže vybratú podlahu, strop alebo strechu.
