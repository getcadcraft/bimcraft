---
title: Symboly, typy a aktíva, šablóny projektov a rýchle sady
summary: Knižnica má tri druhy položiek (symboly, typy, aktíva). Pridajte typ do svojho projektu, začnite zo zdieľanej šablóny projektu, pridajte rýchlu sadu a zdieľajte vlastné cez stránku nahrávania knižnice.
keywords: knižnica, symboly, typy, aktíva, typ, typ steny, typ podlahy, typ strechy, typ stropu, šablóna projektu, šablóna, rýchla sada, sada, zdieľať, nahrať, verzia, zmenový záznam, LOD, klasifikácia, licencia, poznámky z praxe
from: e13b0e67
---

## Čo urobíte

Nájdite v knižnici to, čo potrebujete podľa toho, čím to je, pridajte typ do projektu, ktorý kreslíte, začnite nový projekt zo šablóny, ktorú niekto zdieľal, a zdieľajte vlastné šablóny, typy a sady.

## Tri druhy položiek knižnice

- **Symboly** sú konvencie kreslenia: iba 2D, nakreslené vo veľkosti anotácie, zoskupené podľa disciplíny.
- **Typy** určujú, z čoho prvok je: jeho vrstvy so skutočnou hrúbkou, jeho úroveň rozpracovanosti (LOD) a jeho klasifikačný kód. Typ sa pridá do projektu, nekreslí sa.
- **Aktíva** sú fyzické objekty, napríklad dvere, okná, nábytok, zariadenia a vybavenie, s pôdorysným pohľadom a 3D telesom v skutočnej veľkosti.

V karte {{ui:Knižnica}} vyberte {{ui:Knižnica}} a použite **Druh položky**, aby ste zobrazili Všetko, Symboly, Typy alebo Aktíva.

## Pridanie typu do projektu

1. Vyberte **Typy** pod Druh položky a otvorte jeden.
2. Skontrolujte jeho skladbu, LOD a klasifikáciu pod obrázkom, potom vyberte {{ui:Pridať do tohto projektu}}.
3. Pridá sa ako typ steny, podlahy, strechy alebo stropu, s ktorým môžete kresliť. Ak už typ s týmto názvom existuje, nový sa pridá ako kópia a váš zostane taký, aký bol. Jedným krokom {{ui:Späť}} ho odstránite.

## Šablóny projektov a rýchle sady

Vyberte {{ui:Sady}}, aby ste videli, čo ľudia zdieľali.

- **Šablóna projektu** je súbor IFC s úrovňami, mriežkami, typmi a nastaveniami. {{ui:Uložiť do mojich šablón}} ju umiestni do Nová budova pod „Začať z“.
- **Rýchla sada** je zoznam položiek knižnice. {{ui:Zobraziť položky sady}} ich zobrazí ako karty, ktoré môžete umiestniť.
- Každá sada má verziu a zmenový záznam, najnovší ako prvý. Verzia, ktorá začína 0, slúži na diskusiu; 1.0.0 je len pre to, čo vlastník tejto línie prijal.

## Zdieľanie vlastných

- **Šablóna projektu:** {{ui:Uložiť ako šablónu}}, zaškrtnite {{ui:Vytvoriť aj súbor na zdieľanie v knižnici}}, pridajte, čo obsahuje, a verziu. Dostanete súbor `.json`.
- **Rýchla sada:** v {{ui:Sady}} vyberte {{ui:Vytvoriť rýchlu sadu z tohto projektu}}. Zobrazí zoznam položiek knižnice, ktoré projekt používa.
- **Typ:** v {{ui:Balíčky typov}} zaškrtnite jeden typ a vyberte {{ui:Uložiť ako položku knižnice…}}.

Súbor nahrajte na stránku nahrávania knižnice. Prejde rovnakým posúdením ako každá položka a tam si vyberiete licenciu: každá položka uvádza svoju licenciu. Od položiek sa vyžaduje LOD, trieda IFC a klasifikačný kód (kód, nie len názov).

## Poznámky z praxe

Na stránke každej položky knižnice môžu prihlásení členovia pridať poznámku: použité v reálnom projekte, vyskúšané na vzorovom projekte alebo zistený problém. Uveďte v niekoľkých slovách, aký projekt to bol, a vynechajte mená klientov. Poznámka je verejná a nie je hodnotením: nemení položku.

## Dobré vedieť

- Z aplikácie sa nič neposiela. Súbory sa vytvoria na vašom počítači a nahrávate ich sami.
- Sada vytvorená zo šablóny nesie text IFC presne tak, ako bol uložený. Pred nahratím ho skontrolujte, či neobsahuje niečo súkromné.
- CadCraft zobrazuje symboly a aktíva na karte Knižnica; typy a šablóny sú určené pre projekty BimCraft.
