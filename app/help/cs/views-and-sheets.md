---
title: Pohledy, rozsahy pohledů a vlastní listy
summary: Najděte každý půdorys, pohled, řez, 3D pohled, rozpis a list ve správci pohledů, nastavte, jak se každý půdorys řeže a co zobrazuje, vytvořte detaily, kreslete čáry a šrafy v jednom pohledu, uchovávejte nastavení v šablonách pohledů a uspořádejte vlastní listy.
keywords: detail, pohled detailu, detailní pohled, zvětšený půdorys, kreslení, detailní čáry, kreslicí čáry, šrafa, oblast šrafy, vyplněná oblast, vzor výplně, odražený půdorys stropu, rcp, půdorys stropu, mřížka stropu, svítidla, správce pohledů, pohledy, rozsah pohledu, oříznutí, oblast oříznutí, oříznout pohled, měřítko pohledu, podklad, zobrazit jiné podlaží, polotón, řezná rovina, výška řezu, nahoře, dole, hloubka pohledu, viditelnost, kategorie, skrýt v pohledu, šablona pohledu, šablony, list, listy, razítko, výřez, měřítko, uspořádat listy, rozvržení, pdf, nastavení půdorysu, správce
from: ee1d5afe
---

## Co provedete

Pracujte tak, jak se organizují projekty BIM: všechny pohledy v jednom seznamu, každý půdorys řezaný tam, kde chcete, stejná nastavení pro více půdorysů pomocí šablony a listy, které si uspořádáte sami.

## Správce pohledů

1. Zapněte {{ui:Kreslení}}. Levý panel má {{ui:Správce pohledů}} pod modely.
2. Obsahuje:
   - **Půdorysy podlaží**: každé podlaží. Klikněte na něj a zobrazí se jeho půdorys. Tlačítko s posuvníkem vedle něj nastaví jeho rozsah pohledu (níže). Půdorys, který se řídí šablonou, ukazuje název šablony.
   - **Půdorysy stropů**: odražený půdorys stropu každého podlaží (níže).
   - **Detaily**: každý detail s pohledem, na kterém je nakreslen, a {{ui:Nový detail}}. **Chybí** vypisuje detaily, jejichž pohled zmizel.
   - **Pohledy** a **Řezy**: čtyři strany a každá řezná čára. Klikněte na jednu a otevře se sada výkresů, ve které jsou nakresleny.
   - **3D pohledy**: pohledy, které jste uložili pomocí {{ui:Pohledy}}.
   - **Rozpisy**: klikněte na jeden a zobrazí se pod půdorysem.
   - **Listy**: listy, které jste vytvořili, {{ui:Nový list}}, a {{ui:Sada výkresů…}} pro celou sadu vytvořenou z modelu.
   - **Šablony pohledů** s {{ui:Nová šablona}}, a **Odkazy** (propojené modely).

## Nastavení rozsahu pohledu půdorysu

1. Klikněte na tlačítko s posuvníkem vedle podlaží v **Půdorysy podlaží**.
2. Nastavte výšky nad tímto podlažím:
   - **Řez při**: kde půdorys řeže stěny, dveře a okna (1200 mm, asi 4 ft, pokud nezměníte).
   - **Nahoře**: věci nad řezem a pod horní hranou se kreslí přerušovaně (vysoká skříňka, trám). Nechte prázdné pro výšku podlaží.
   - **Dole** a **Hloubka pod dolní hranou**: věci níže než řez se kreslí tenkými čarami až dolů ke spodní hranici a o tolik pod ní, kolik je uvedeno.
3. V části **Zobrazeno v tomto půdorysu** odškrtněte, co tento půdorys vynechá: nábytek, místnosti, sloupy atd.
4. Chcete-li vynechat jednotlivé prvky: vyberte je v půdorysu nebo ve 3D pohledu, otevřete dialog a klikněte na {{ui:Skrýt zde vybrané}}. {{ui:Zobrazit všechny}} je vrátí.
5. Klikněte na {{ui:Použít tato nastavení}}.

Půdorys se okamžitě překreslí a sada výkresů i vaše listy se jím řídí. Řez mračnem bodů také sleduje výšku řezu.

## Oříznutí půdorysu, nastavení měřítka a zobrazení jiného podlaží pod ním

Všechny tři jsou ve stejném dialogu (tlačítko s posuvníkem vedle podlaží):

- **Měřítko**: měřítko, ve kterém se půdorys tiskne ({{ui:Tisknout}} na liště půdorysu), a které se promítne na list. **Přizpůsobit** vybere největší standardní měřítko, které se vejde.
- **Oblast oříznutí**: klikněte na {{ui:Nakreslit v půdorysu…}}, pak klikněte na jeden roh a na protilehlý roh v půdorysu ({{key:Esc}} ukončí). Půdorys mimo oblast je na obrazovce zastíněn, ale v něm můžete dál pracovat; při tisku, na listech a v sadě výkresů půdorys zobrazuje jen to, co je uvnitř. {{ui:Vymazat}} oříznutí zruší. {{ui:Přizpůsobit}} přizpůsobí oříznutí.
- **Podklad**: vyberte jiné podlaží. Jeho stěny, řezané prvky, dveře a okna se kreslí světle pod tímto půdorysem, aby se zarovnaly s podlažím pod nebo nad. Zde je nelze vybrat a tisknou se světle šedě.

Šablona pohledu nese měřítko spolu s výškami a kategoriemi. Oblast oříznutí a podklad vždy patří jen jednomu půdorysu.

## Půdorys stropu podlaží

Každé podlaží má odražený půdorys stropu vedle svého půdorysu: pohled zdola, pro rozvržení stropů a toho, co z nich visí.

1. Klikněte na podlaží pod **Půdorysy stropů** ve správci pohledů, nebo zvolte {{ui:Půdorys stropu}} vedle podlaží na liště půdorysu.
2. Stěny jsou řezány ve 2300 mm (asi 7'-6"). Zobrazí se to, co leží nad tímto řezem a pod výškou podlaží: stropy s mřížkou a štítkem výšky (`CLG 2438`), svítidla, trámy. Dveře, okna a vše pod řezem se vynechá.
3. Chcete-li vytvořit strop, použijte {{ui:Strop}} jako na půdorysu podlaží, pak jej vyberte a zvolte jeho **Vzor** ve Vlastnostech. Viz [Místnosti, podlahy, stropy a střechy](topic:floors-and-roofs).
4. Chcete-li na něj zavěsit svítidlo, umístěte položku z knihovny, zatímco je zobrazen půdorys stropu: půjde do **U stropu**. Viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library).
5. Tlačítko s posuvníkem vedle půdorysu stropu nastaví jeho řez a horní hranu, měřítko, kategorie, oblast oříznutí a podklad, jako u půdorysu podlaží. Půdorysy stropů nepřebírají šablonu pohledu.

Kreslí se stejně jako půdorys podlaží (odražený půdorys, ne zrcadlový obraz). Strop nižší než řez se nekreslí: u podlaží snižte řez pro půdorys jeho stropu. Půdorysy stropů jdou na vaše vlastní listy jako půdorysy; sada výkresů je nepřidává sama.

## Vytvoření detailu

Detail zobrazí část půdorysu zvětšeně, v jeho vlastním měřítku, jako samostatný pohled: kuchyň, schodiště, roh stěny.

1. Zobrazte půdorys, půdorys stropu nebo detail, ke kterému patří.
2. Zvolte {{ui:Kótování}} › {{ui:Detail}} na liště půdorysu (nebo {{ui:Nový detail}} ve správci pohledů), pak klikněte na jeden roh oblasti a na protilehlý roh. {{key:Esc}} ukončí.
3. Detail se vytvoří v měřítku 1:20 (1/2" = 1'-0" v stopách a palcích). Jeho obdélník a kulatý štítek se nakreslí na půdorysu.
4. Klikněte na štítek nástrojem {{ui:Vybrat}}, nebo na detail ve správci pohledů, a otevře se: půdorys ukáže jen tuto oblast v měřítku detailu. Lišta zobrazí {{ui:Detail:}} a jeho název; {{ui:Nahoru}} vrátí na pohled, na kterém je nakreslen.
5. Tlačítko s posuvníkem vedle něj (ve správci nebo na liště) jej přejmenuje, změní jeho měřítko, znovu nakreslí jeho obdélník, nebo jej smaže.

Detail ukazuje to, co ukazuje jeho pohled: stejný řez, stejné kategorie, stropy půdorysu stropu. Detail v detailu funguje stejně. Umístěte detail na list jako půdorys; jeho štítek pak říká, kde je (`1 / A-501`: první pohled na listu A-501). {{ui:Tisknout}} v detailu vytiskne jen tuto oblast v jeho měřítku.

Smazání detailu smaže i detaily nakreslené uvnitř něj a čáry a šrafy v nich nakreslené (nejdřív se zeptáme). Pokud se smaže podlaží, na kterém je detail nakreslen, detail zůstane pod **Chybí**, dokud jej nesmažete, a listy, na kterých je, o něm hlásí, že chybí.

## Kreslení čar a šraf v jednom pohledu

Kreslení je 2D práce, která patří jen jednomu pohledu: poznámky čárami, šrafovaná plocha betonu nebo zeminy, vyplněná oblast. Nikdy není ve 3D pohledu ani v jiném půdorysu.

1. Zobrazte půdorys podlaží, půdorys stropu nebo detail, do kterého chcete kreslit.
2. Zvolte z {{ui:Kótování}} na liště půdorysu:
   - {{ui:Řádek}}: klikněte, kde začíná, a kde končí. Další čára začíná tam, kde skončila předchozí; {{key:Enter}} začne znovu.
   - {{ui:Mnohočára}}: klikněte na její body; {{key:Enter}} nebo dvojklik ji ukončí, klik na její první bod ji uzavře.
   - {{ui:Obdélník}}: dva protilehlé rohy.
   - {{ui:Oblast šrafy}}: vyberte **Vzor** (Plný, Diagonální, Křížová, Beton, Izolace, Zemina) a jeho měřítko na liště, pak klikněte na rohy; {{key:Enter}}, dvojklik nebo klik na první roh ji uzavře. Pokud je zaškrtnuto {{ui:Vyplnit místnost}}, jeden klik v místnosti vyšrafuje její obrys.
3. Body přichytávají jako u stěn; {{key:Shift}} udrží čáru kolmou a délku můžete zadat psaním jako u stěn. {{key:Backspace}} odebere poslední bod.

Vyberte čáru nebo šrafu nástrojem {{ui:Vybrat}} na půdorysu. Ve {{ui:Vlastnosti}} lze změnit vzor a měřítko šrafy a je tam {{ui:Přesunout…}} (klikněte na bod, ze kterého se přesouvá, a pak na místo, kam má jít). {{key:Delete}} ji smaže. Každá čára, šrafa a změna je jeden krok.

Čáry a šrafy se tisknou s půdorysem, přecházejí s ním na vaše listy a jsou v sadě výkresů. Chcete-li je v daném pohledu vynechat, odškrtněte **Anotace** v rozsahu pohledu.

## Uchovávání nastavení v šabloně pohledu

1. Klikněte na {{ui:Nová šablona}} ve správci pohledů, nebo na {{ui:Uložit jako šablonu…}} v rozsahu pohledu půdorysu (ten pak šablonu používá).
2. Zadejte název, nastavte výšky a kategorie a klikněte na {{ui:Uložit šablonu}}.
3. V rozsahu pohledu libovolného půdorysu zvolte šablonu. Půdorys převezme její výšky a kategorie; změnou šablony změníte každý půdorys, který ji používá. Prvky, které jste skryli jednotlivě, zůstanou skryté ve svém vlastním půdorysu.
4. Kliknutím na šablonu ve správci ji změníte, přejmenujete nebo smažete. Smazání ponechá jejím půdorysům jejich nastavení jako jejich vlastní.

## Uspořádání vlastního listu

1. Klikněte na {{ui:Nový list}}. Zadejte jeho číslo a název a zvolte papír.
2. Klikněte na {{ui:Přidat}} vedle půdorysu, půdorysu stropu, detailu, pohledu, řezu nebo rozpisu. Umístí se doprostřed listu.
3. Přetáhněte jej na místo. Když je vybrán, zvolte **Měřítko**, nebo ponechte měřítko vlastního půdorysu (pokud jej má), jinak měřítko, které se vejde na třetinu listu. {{ui:Odebrat z listu}} jej odstraní.
4. Klikněte na {{ui:Uložit list}}. Zobrazí se pod **Listy**; kliknutím na něj jej později změníte.
5. {{ui:Stáhnout jako PDF}} uloží list jako jednu stránku.

## Co uvidíte

- Půdorysy řezané ve vašich výškách, s tím, co je nad řezem, čárkovaně, a vynechaným, co jste odškrtli.
- Oříznutý půdorys zastíněný mimo svou oblast na obrazovce a řezaný podle ní na papíře, v měřítku, které jste mu dali.
- Půdorys stropu s mřížkami stropů a štítky výšek a svítidly u stropu.
- Detaily s obdélníkem a štítkem na půdorysu, každý se otevírá ve svém měřítku.
- Čáry a šrafy jen v pohledu, ve kterém jste je nakreslili.
- Vaše listy se vykreslí znovu z modelu při každém otevření, takže vždy odpovídají modelu. Pohled, jehož podlaží nebo řez byl smazán, je nahlášen, ne vykreslen.
- Každá změna zde je jeden krok: {{key:Mod+Z}} ji vrátí zpět.

:::note
Vše je uloženo v souboru IFC jako sady vlastností, které ostatní programy nechají být: rozsah pohledu a půdorys stropu každého podlaží u podlaží, šablony, detaily a vaše listy u projektu. Čáry a šrafy jsou anotace IFC ve svém podlaží, takže je ostatní programy vidí jako 2D křivky a šrafované plochy (vlastní kresbu každého vzoru), ale ne to, ke kterému pohledu patří.
:::

:::tip
Jiné BIM programy říkají řezu rozsah pohledu nebo řezná rovina, šablonám šablony pohledů, kreslicím čarám detailní čáry a oblastem šrafy vyplněné oblasti. Myšlenky jsou stejné; nastavení pohledů do nich nepřechází.
:::
