---
title: Varianty hmoty vedle sebe
summary: Uchovejte více variant hmoty ve stejném modelu, nastavte jednu jako aktuální, ověřte ji proti stavebním čarám a věcným břemenům pozemku, převezměte hmotu z ModelCraft a rozpracujte zvolenou variantu na stěny a podlahy.
keywords: hmota, varianta, varianty, sada variant, schéma, koncept, konceptní návrh, etapa 2, alternativy, porovnání variant, aktuální varianta, hmota budovy, tlač/tah, modelcraft, civilcraft, hrubá podlahová plocha, půdorysná plocha, objem, rozpracovat hmotu, věcné břemeno, stavební čára, odstup
from: 69a01459
---

## Co uděláte

Uchovávejte varianty hmoty konceptu v jednom modelu místo v oddělených souborech: několik hmot budov vedle sebe, z nichž jedna je **aktuální variantou** a ostatní se uchovávají pro porovnání.

Varianta hmoty je hmota budovy: obrys zvednutý do výšky s určitým počtem podlaží. Ještě to nejsou stěny. Můžete jich uchovat, kolik chcete, seskupené do **sad variant** (varianty jedné sady jsou vzájemně alternativy).

## Uchování varianty

1. Otevřete {{ui:Z programu místností na hmotu}}, zadejte program místností a obrys a zvolte {{ui:Najít varianty}}.
2. Vyberte jednu z uvedených variant.
3. V {{ui:Varianty hmoty v modelu}} zadejte název pro {{ui:Sada variant}}, pokud ho chcete, a zvolte {{ui:Ponechat vybranou variantu}}.

Varianta se objeví v modelu jako hmota budovy a v seznamu, s podlažími, půdorysnou plochou, hrubou podlahovou plochou a objemem. Nic se nepostaví. Další uchováte stejným způsobem.

První varianta sady je její aktuální varianta. Každý krok je jeden krok zpět.

## Aktuální varianta

Jedna varianta každé sady je aktuální. To znamená dvě věci:

- **Její podlaží se počítají jako podlahové plochy budovy.** Aktuální varianta má jeden prostor na podlaží nesoucí hrubou plochu toho podlaží, takže cokoli, co čte podlahové plochy, vidí platnou variantu a žádnou jinou.
- **Ověřuje se proti pozemku.** Pokud je mimo hranici pozemku, přes stavební čáru nebo na věcném břemeni, objeví se v {{ui:Problémy}} varování s jejím názvem. Je to jen varování: nic se neodmítá. Varianty, které nejsou aktuální, se neověřují.

Zvolte {{ui:Nastavit jako aktuální}} u jiné varianty, abyste ji změnili.

{{ui:Skrýt varianty, které nejsou aktuální}} skryje ostatní v 3D pohledu. Platí to jen pro tento prohlížeč a není to uloženo v souboru.

## Hmota z ModelCraft

V ModelCraft {{ui:Exportovat}} › {{ui:Hmota do BimCraft…}} pošle každou skupinu nebo komponentu jako jednu variantu. BimCraft otevře soubor s vypsanými variantami.

Chcete-li je přenést do modelu, který je už otevřený, zvolte {{ui:Přidat varianty hmoty ze souboru}} a vyberte soubor `.ifc`. Jeho hmoty se načtou jako varianty sady, v jednom kroku zpět, a stojí tam, kde byly namodelovány. Soubor hmot budov z CivilCraft funguje stejně.

Varianta označená "(tvar zjednodušen)" nebyla v ModelCraft prostá svislá krabice (ustupuje, je šikmá nebo není uzavřená). Její hmota zde je obrys její základny zvednutý do její výšky; její podlahové plochy a objem jsou ty, změřené z tělesa samotného.

## Rozpracování zvolené varianty

Zvolte {{ui:Rozpracovat}} u varianty. Stane se z ní podlaží (přidaná do jejího počtu podlaží), stěny kolem jejího obrysu na každém podlaží a podlahová deska na každém z nich, vše v jednom kroku zpět. Varianta opustí seznam; ostatní varianty zůstanou beze změny. Střecha zatím není.

{{ui:Přejmenovat}} změní název varianty, {{ui:Odebrat}} ji vyjme z modelu. Odebrání aktuální varianty učiní první další variantu sady aktuální.

## Co byste měli vidět

- Každou uchovanou variantu jako blok v 3D pohledu a řádek v seznamu.
- "(aktuální)" vedle jedné varianty každé sady.
- Varování v {{ui:Problémy}}, když aktuální varianta přechází přes hranici pozemku, stavební čáru nebo věcné břemeno.

## Dobré vědět

- V souboru IFC je varianta prvek budovy typu proxy se sadou vlastností `CadCraft_SiteMass` (její sada variant, název varianty a to, zda je aktuální, jsou v této sadě). Podlaží aktuální varianty jsou prostory typu `MassingFloor`. Jiné programy čtou proxy jako obecný prvek.
- Uchování varianty nikdy nepřidá podlaží; rozpracování ano.
- Asistent může vypsat uchované varianty, uchovat jednu, nastavit jednu jako aktuální, přejmenovat, rozpracovat nebo odebrat.
