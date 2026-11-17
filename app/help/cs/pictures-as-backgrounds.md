---
title: Vložení obrázku pod půdorys
summary: Umístěte obrázek PNG, JPEG nebo WebP (naskenovaný plán, náčrt, fotografii místa, letecký snímek) pod půdorys podlaží nebo na svislou rovinu, měřítko nastavte podle dvou bodů, posouvejte, otáčejte, ztlumte a uzamkněte jej, zobrazte ve 3D a v PDF půdorysu a uchovejte jej vedle modelu v balíku.
keywords: obrázek, podklad, PNG, JPEG, WebP, sken, náčrt, fotografie, letecký snímek, situační plán, měřítko, krytí, zamknout, podložka, obtažení
from: e3c78d1f
---

## Vložení obrázku

Zapněte {{ui:Kreslení}}, přejděte na podlaží a v nabídce {{ui:Sestavení}} zvolte {{ui:Obrázek}}. Pak {{ui:Vložit obrázek…}} a vyberte soubor PNG, JPEG nebo WebP. Načte se ve vašem prohlížeči a nikdy se nenahrává. Objeví se pod půdorysem, přizpůsobený pohledu, a panel nástrojů říká, že ještě není měřítko. Vše, co nakreslíte, leží nad ním.

## Nastavení měřítka

Zvolte {{ui:Měřítko}}, klikněte na dva body na obrázku, jejichž skutečnou vzdálenost znáte (dva konce stěny na naskenovaném plánu, kóta vytištěná na náčrtu), poté napište vzdálenost a stiskněte {{key:Enter}}. Obrázek se zvětší nebo zmenší kolem prvního bodu, na který jste klikli. {{key:Esc}} zruší.

## Vložení zkopírované oblasti

V MarkupCraftu {{ui:Kopírovat oblast}} zkopíruje část listu PDF jako obrázek. Zpět v BimCraftu, když je zobrazen půdorys podlaží, stiskněte {{key:Ctrl+V}} (nebo {{ui:Vložit}} v nabídce {{ui:Úpravy}}): oblast se vloží na půdorys jako obrázek, vycentrovaný tam, kde je ukazatel (nebo uprostřed pohledu). Pokud měl list měřítko výkresu, vloží se ve skutečné velikosti, takže stěna na něm je stejně dlouhá jako vaše stěny. Bez něj se vloží ve formátu papíru a spustí se {{ui:Měřítko}}, takže můžete kliknout na dva body a napsat jejich vzdálenost. Oblast zkopírovaná jako překryv začíná s krytím, se kterým byla zkopírována. Je to jeden krok zpět a uchovává se jako každý jiný obrázek.

Vložení vezme to, co jste zkopírovali naposledy: zkopírovanou oblast, nebo něco, co jste zkopírovali v BimCraftu. {{key:Ctrl+V}} vloží také jakýkoli jiný obrázek PNG, JPEG nebo WebP ze schránky, umístěný jako {{ui:Vložit obrázek…}} a ještě neměřený. Zkopírovaná oblast se pamatuje šest hodin.

## Posun, otočení, ztlumení, zamknutí

{{ui:Posunout}} vezme základní bod na obrázku a pak místo, kam má jít. {{ui:Otočit}} vezme úhel ve stupních kolem středu obrázku. {{ui:Krytí}} ho ztlumí, aby vynikly vaše čáry. {{ui:Zamknout}} brání jeho posouvání při kreslení; zamčený obrázek vám stále dovolí změnit jeho krytí a skrýt ho. Každá změna je jeden krok zpět.

## Více obrázků, více podlaží

Obrázek patří podlaží, na kterém byl umístěn, a zobrazuje se na půdorysu a stropním půdorysu toho podlaží. Kliknutím na obrázek s ním pracujete, nebo ho vyberte v seznamu. {{ui:Skrýt}} ho vypne, aniž by se odstranil; {{ui:Odebrat}} (nebo {{key:Delete}}) ho odstraní z modelu.

## Obrázky ve 3D pohledu

Každý obrázek stojí také ve 3D pohledu jako plochá rovina: obrázek na půdorysu leží na svém podlaží, obrázek na svislé rovině stojí nad svou řeznou čárou. Kreslí se nad modelem, aniž by ho zakrýval, a model skryje část obrázku, která je za ním. Překrývající se obrázky se třídí podle vzdálenosti. Krytí, Skrýt, Zamknout a Odebrat fungují stejně a {{ui:Zobrazit v 3D}} vypne všechny roviny jen v 3D pohledu. Podlaží drží nejvýše 8 obrázků, aby pohledy zůstaly rychlé.

## Obrázek na svislé rovině

Pod {{ui:Umístit na}} zvolte {{ui:Svislá rovina (řezová čára)}} a poté {{ui:Vložit obrázek…}}. Klikněte na dva konce čáry na půdorysu (konec líce stěny se přichytí), nebo zvolte pojmenovanou řeznou čáru podlaží v {{ui:Nad řeznou čárou}} a nejsou potřeba žádné kliknutí. Obrázek stojí na podlaží nad touto čárou, stejně široký jako čára. Nastavte jeho {{ui:Šířka}}, jeho místo {{ui:Podél čáry}} a jeho {{ui:Výška nad úrovní}} psaním; {{ui:Otočit}} ho otočí v jeho vlastní rovině. Svislý obrázek se nekreslí pod půdorysem; půdorys ukazuje svou čáru, dokud na něm pracujete. BimCraft nemá interaktivní 2D okno řezu: řezy a pohledy se kreslí na listy a obrázky se v těchto pohledech na listech zatím netisknou.

## Tisk

{{ui:Pohled na tisk}} na půdorysu zapíše obrázky podlaží do PDF pod výkres, v jejich měřítku, natočení a krytí, oříznuté na list; skrytý obrázek zůstane venku. JPEG se vloží tak, jak je; ostatní obrázky se nejprve zmenší na 200 dpi na listu.

## Uložení vedle modelu

Bajty obrázku se nezapisují do textu IFC. Model odkazuje na každý podle názvu (IfcDocumentReference, například pictures/<id>.png) a bajty cestují v projektovém balíku. Použijte {{ui:Uložit jako balík…}} (nebo {{ui:Uložit jako IFC}} a zvolte ho): dostanete jeden soubor .ccbundle s modelem a jeho obrázky; IFC zůstane malé a úpravy rychlé. Otevřete .ccbundle a obrázky se vrátí.

Prostý .ifc nemůže obrázek držet, aniž by se stal velkým. Když ho uložíte, BimCraft řekne, kolik obrázků je uchováno mimo něj, a nabídne balík, nebo prosté IFC, které obrázky vloží až do 512 KB a ostatní vynechá. Prostý .ifc otevřený bez svého balíku zobrazí tyto obrázky jako chybějící a Problémy je vypíšou; otevřete .ccbundle, ve kterém byly uloženy. Soubory uložené první verzí, s obrázkem uvnitř IFC, se stále otevřou a uložení do balíku přesune jejich obrázky ven. Obrázek se uchovává tak, jak je, až do 6 MB; větší se nejprve zmenší a dostanete o tom zprávu. Ostatní programy model otevřou a obrázky ignorují. Obrázek, který jste ještě neměřili, je v Problémech uveden jako poznámka.

## V listech řezů a pohledů

Obrázek na svislé rovině (zvolte {{ui:Svislý}} v panelu obrázku a klikněte na dva konce čáry, nebo ho umístěte nad pojmenovanou řeznou čáru) se vytiskne v pohledech listů, které na něj míří přímo. Řez zobrazí obrázek, který stojí na své řezné čáře, nebo který byl umístěn nad tuto řeznou čáru podle názvu. Pohled ukáže každý svislý obrázek, jehož rovina je k němu obrácena. Obrázek se kreslí pod čárami pohledu, v měřítku pohledu, oříznutý na pohled, a zachovává své krytí. Otevřete {{ui:Listy…}}, abyste ho viděli; PDF listu ho nese jako obrázek. Při pohledu zezadu je obrázek zrcadlen, jako je ve 3D. Skryté obrázky se vynechají.
