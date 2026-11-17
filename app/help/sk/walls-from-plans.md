---
title: Steny zo sady plánov (PDF alebo sken)
summary: Premeňte strany PDF alebo naskenovaného výkresu na steny, dvere a okná, jedna úroveň pre každú stranu, so stranou ponechanou pod každým plánom.
keywords: pdf, plány, sada plánov, sken, naskenovaný výkres, tiff, obkres, steny z PDF, steny zo skenu, úrovne, strany, mierka, dvere, okná, smer otvárania, parapet, podklad
from: b70d9db7
---

## Čo urobíte

Začnite model z plánov, ktoré máte na papieri: PDF (nakreslené ako čiary alebo sken vnútri PDF) alebo sken (PNG, JPEG, TIFF s jednou alebo viacerými stranami). Každá strana sa stane stenami, dverami a oknami jednej úrovne.

## Postup

1. Zapnite {{ui:Kresliť}}. Zvoľte {{ui:Zostava}} › {{ui:Z výkresu…}}, potom {{ui:Vybrať výkres…}} a vyberte PDF alebo sken.
2. **Strany a úrovne.** Každá strana je vypísaná s tým, čím je (**čiarová kresba**, alebo **obrázok (obkreslený)**), a úrovňou, do ktorej ide: jedna z vašich úrovní, **nová úroveň nad ostatnými**, alebo **vynechať túto stranu**. Strany sa priraďujú vašim úrovniam v poradí; ktorúkoľvek zmeňte.
3. **Mierka.** Pri PDF uveďte, ako bolo nakreslené (**1 : 100**, **1 : 50**…). Pri čomkoľvek inom, alebo ak neviete, zvoľte **zo vzdialenosti, ktorú poznám**: kliknite na dva konce kóty alebo mierkovej lišty v náhľade, potom napíšte skutočnú vzdialenosť. Všetky strany používajú jednu mierku.
4. Zvoľte **typ steny** a **výšku novej úrovne**. Nechajte zaškrtnuté **Ponechať každú stranu pod pôdorysom jej úrovne**, aby ste každú stranu videli ako tenké čiary pod jej pôdorysom.
5. Riadok pod voľbami hovorí, koľko stien, dverí a okien vytvorí a na koľkých úrovniach. Kliknite na {{ui:Vytvoriť}}.

## Ako číta stranu

- **Steny** vznikajú z dvojíc rovnobežných čiar najviac 600 mm od seba (dve strany steny); stena je hrubá ako medzera. Šrafovanie a písmo sa vynechajú.
- **Dvere a okná.** Medzera v stene (500 až 2600 mm) s nakreslenou krivkou otvárania vedľa nej je dvere, zavesené na jednom konci medzery a otvárajúce sa na stranu krivky. Medzera alebo stena s parapetnými čiarami v nej je okno. Medzera bez oboch je dverami do 1300 mm a oknom nad tým.
- **Sken** sa najprv narovná, ak bol naskenovaný krivo (dialóg to hovorí), zmení sa na čiernobiely, vyčistí od škvŕn a obkreslí; **strana PDF, ktorá je obrázkom**, sa najprv nakreslí a potom sa s ňou narába rovnako. Obkreslenie nájde stred každej čiary a prispôsobí jej priame čiary a oblúky; nepoužíva sieť ani natrénovaný model.
- **Miestnosti** vzniknú samé z uzavretých slučiek, ktoré steny tvoria. Keď PDF obsahuje text, miestnosť dostane názov z písma vnútri nej (najväčšieho; kóta, mierka alebo číslo listu nie je názov). Sken nemá text, takže jeho miestnosti si zachovajú názvy, ktoré im dal program.
- **Všetko čítané zo strany je označené ako neoverené**: každá stena, dvere, okno a miestnosť má prerušovaný rámik a „?“ v pôdoryse, kým to neskontrolujete. Vyberte to, čo ste skontrolovali, a použite {{ui:Nástroje}} › {{ui:Označiť ako skontrolované}}. Pozri [Označenie prvkov ako overených alebo overených na stavbe](topic:verification).

## Čo by ste mali vidieť

- Steny, dvere, okná a miestnosti na každej úrovni a všetky nové úrovne, všetko ako jeden krok: {{key:Mod+Z}} všetko vráti späť.
- Každá strana ako tenké čiary pod pôdorysom jej úrovne, vypísaná pod {{ui:Zostava}} › {{ui:Z výkresu…}} s {{ui:Odstrániť}}.

:::note
Toto je to, čo čiary dali, s presnosťou strany. Sken môže stratiť slabú stenu, spojiť dve steny, ktoré ležia veľmi blízko seba, alebo nájsť stenu v škvrne; krivka otvárania, ktorú výkres nezobrazuje, urobí z medzery obyčajné dvere. Skontrolujte každú úroveň oproti strane, skôr než sa na ňu spoľahnete, a opravte, čo nie je správne, nástrojmi {{ui:Stena}}, {{ui:Dvere}} a {{ui:Okno}}.
:::
