---
title: Vykreslení obrazu modelu
summary: Vytvořte denní obraz 3D pohledu: oblohu, slunce podle zeměpisné šířky staveniště, měkké stíny, prosklená okna; s WebGPU sledování paprsků na grafické kartě s oblohami, kamerou, mícháním světel, gradací, mlhou a frontou vykreslování.
keywords: vykreslit, předvolba, předvolby, předvolba scény, interiér, exteriér, pohled na řez, noc, jedno kliknutí, vykreslování, sledování paprsků, path tracing, ray tracing, globální osvětlení, odrazy, lom, vysoká kvalita, fotografie, fotorealistické, realistické, obraz, obrázek, png, statické, obloha, slunce, denní světlo, stíny, měkké stíny, ambientní okluze, sklo, okna, kov, materiály, expozice, jas, zataženo, soumrak, studio, prezentace, vizualizace, webgpu, odšumění, fyzická obloha, hdri, ies, hloubka ostrosti, panorama, vyvážení bílé, míchání světel, prvky vykreslení, exr, 16bitový png, mlha, kaustiky, fronta vykreslování
from: beb74cc7
---

{{ui:Vykreslit}} na panelu nástrojů pořídí obraz 3D pohledu, který vypadá jako denní světlo: oblohu, slunce tam, kam ho v dané zeměpisné šířce staveniště postaví, měkké stíny, světlo z celé oblohy, které ztmavuje rohy, a barvy, které mohou vypadat jako sklo nebo kov. Model ani soubor se nemění.

## Vykreslení pohledu

1. Nastavte 3D pohled tak, jak chcete obraz: otáčejte a přibližujte, skryjte podlaží nebo prvky, které nechcete, a nastavte [řez](topic:section-plane), pokud má obraz ukázat řez.
2. Klikněte na {{ui:Vykreslit}} na panelu nástrojů.
3. Vyberte {{ui:Scéna}}, pokud stisknutá není ta, kterou chcete (viz [Předvolby scén](topic:render#scene-presets-a-good-picture-in-one-click)), zvolte {{ui:Velikost}} a pak klikněte na {{ui:Vykreslit}} v dialogu.

   Obraz se během vykreslování doplňuje a s každým průchodem se vyhlazuje. {{ui:Zastavit}} (nebo {{key:Esc}}) ho ukončí předčasně a ponechá dosavadní obraz.

4. Klikněte na {{ui:Uložit}}, abyste ho stáhli jako PNG, nebo na {{ui:Uložit jako}} pro jiný formát (viz [Uložení obrazu](topic:render#save-the-picture)). Pojmenuje se podle souboru modelu.

:::tip
Začněte s {{ui:Náčrt}} při {{ui:Velikost pohledu}}, abyste zkontrolovali kameru, a pak vykreslete {{ui:Dobrá}} nebo {{ui:Nejlepší}} ve větší velikosti jako konečný obraz.
:::

## Předvolby scén: dobrý obraz jedním kliknutím

Nahoře dialogu jsou čtyři tlačítka {{ui:Scéna}}. Každé nastaví oblohu, jas, zemi, hrany, kvalitu a slunce jedním kliknutím, takže se před prvním obrazem není co učit. Klikněte na jedno a pak na {{ui:Vykreslit}}.

| Scéna | Co nastaví | K čemu slouží |
|---|---|---|
| {{ui:Exteriér}} | Jasná obloha, vlastní slunce modelu, země zapnutá | Budova zvenčí |
| {{ui:Interiér}} | Zatažená obloha (rovnoměrné světlo, bez ostrých slunečních skvrn), o půl clony světlejší | Pohled zevnitř místnosti |
| {{ui:Pohled na řez}} | Bílé studio, bez země, hrany v rychlém vykreslení | Model řezaný řezem |
| {{ui:Noc}} | Slunce pod obzorem (půlnoc v zimním slunovratu pro polovinu světa, na které je staveniště), o jednu clonu světlejší | Svítidla osvětlující model. Bez svítidel je obraz tmavý |

- {{ui:Zvolit pro tento pohled}} vybere za Vás: {{ui:Pohled na řez}}, když je zapnutý řez, {{ui:Interiér}}, když je kamera uvnitř modelu, jinak {{ui:Exteriér}}. Při prvním otevření dialogu začne takto sám.
- Každé nastavení pod tím zůstává a lze ho změnit. Jakmile změníte některé nastavení, scéna nezůstane vybraná, žádné tlačítko není stisknuté a řádek pod tlačítky říká, že nastavení jsou Vaše vlastní. Klikněte na scénu znovu a vrátí se její hodnoty.
- Scéna se nedotýká motoru, režimu, velikosti, materiálů, kamery ani svítidel.

:::note
Scény dávají stejné hodnoty v ModelCraft i BimCraft. Jak hotový obraz vypadá, závisí na Vašem modelu a na Vaší grafické kartě.
:::

## Co je na obraze vidět

To, co 3D pohled zobrazuje plně, se ukáže i na obraze: skryté a průhledné prvky, skrytá podlaží a skryté modely se vynechají, a místnosti se ukážou jen tehdy, když je zapnutý {{ui:Prostory}}. Rovina řezu nebo řezný box řeže obraz stejně, jako řeže pohled. Prvky se zobrazují ve svých vlastních barvách: barvení podle vlastnosti (záložka {{ui:Barva}}) se nepoužívá.

## Nastavení

| Nastavení | Co dělá |
|---|---|
| {{ui:Velikost}} | Velikost pohledu, dvojnásobek velikosti pohledu, Full HD, 4K nebo čtverec |
| {{ui:Tvar}} | {{ui:Rychlý}}, nebo {{ui:Vysoká kvalita (sledování paprsků)}} (níže) s jejím {{ui:Časový limit}} |
| {{ui:Kvalita}} | Kolik průchodů (u vysoké kvality vzorků) se zprůměruje: {{ui:Náčrt}} 16, {{ui:Dobrá}} 64, {{ui:Nejlepší}} 256. Více průchodů dá hladší stíny a hrany, ale trvá to déle |
| {{ui:Obloha}} | {{ui:Jasná obloha}}, {{ui:Zataženo}}, {{ui:Soumrak}}, nebo {{ui:Bílé studio}} (prosté bílé pozadí) |
| {{ui:Slunce}} | 21. června v 15:00 na zeměpisné šířce, kterou soubor uvádí pro své staveniště (IfcSite), natočeno na skutečný sever modelu. Zaškrtněte {{ui:Pro tento obrázek použít jiné datum a čas}} pro jiný čas |
| {{ui:Jas}} | Světlejší nebo tmavší po krocích (clonách) |
| {{ui:Terén pod modelem}} | Země v nejnižším bodu modelu, která přijímá stíny a plynule přechází do horizontu |
| {{ui:Kreslit hrany}} | Kreslí hrany prvků tenkou čárou přes obraz |

Když je slunce v zvolený čas pod obzorem, je noc: obloha ztmavne a svítidla modelu ji osvětlí.

## Svítidla

Každé světlo ve modelu je na obraze svítidlo: svítidla v souboru IFC (IfcLightFixture nebo prvek typu světelné těleso), včetně těch, která umístíte z knihovny. Každé svítí dolů těsně pod svítidlem. Když soubor uvádí příkon svítidla, jeho jas z něj vychází; jinak je to 800 lumenů, teplá bílá.

Dialog vypisuje svítidla pod {{ui:Svítidla}}: odškrtnutím jedno vypnete, nebo zadáte jeho jas v lumenech. Tyto změny se uloží do IFC (sada vlastností `CadCraft_Light` svítidla, kde je můžete změnit také ve Vlastnostech) a {{key:Ctrl+Z}} je vrátí zpět.

Když soubor neuvádí, kde je jeho staveniště, umístí se slunce na 40° severní šířky a dialog to řekne. Čas je místní čas staveniště, odvozený z jeho zeměpisné délky, takže se může lišit o hodinu tam, kde jsou hodiny nastaveny jinak.

Tato nastavení se uchovají v tomto prohlížeči pro další obraz. Neukládají se do souboru IFC.

## Sklo a další materiály

Pod {{ui:Materiály}} má každá barva na obrazovce svůj vzhled: {{ui:Matný}}, {{ui:Saténový}}, {{ui:Lesklý}}, {{ui:Kov}}, {{ui:Leštěný kov}}, {{ui:Sklo}} nebo {{ui:Matované sklo}}. Barvy, které soubor IFC udělá průhlednými (například zasklení oken), začínají jako {{ui:Sklo}}.

:::note
V režimu {{ui:Rychlý}} sklo a kov odrážejí oblohu, ne zbytek modelu, a světlo sklem neláme. Režim {{ui:Vysoká kvalita (sledování paprsků)}} níže obojí dělá.
:::

## Vysoká kvalita

Zvolte {{ui:Tvar}} › {{ui:Vysoká kvalita (sledování paprsků)}} pro obraz, který sleduje světlo tak, jak ho vidí kamera:

- světlo se odráží mezi plochami, takže místnost osvětlená oknem nebo svítidlem je osvětlená ze všech stran a barvy přecházejí na sousední plochy;
- sklo je skutečné sklo: světlo jím prochází a láme se a odráží model;
- kov a leštěné plochy odrážejí zbytek modelu;
- svítící panely svítí jako panely, s měkkými stíny.

Je to mnohem pomalejší než {{ui:Rychlý}}: každý průchod znovu sleduje světlo pro každý pixel. Obraz začíná zrnitý a vyčistí se, jak se vzorky sčítají, takže začněte v malém ({{ui:Velikost pohledu}}, {{ui:Náčrt}}) a zvolte {{ui:Časový limit}}: když vyprší, zůstane obraz, jaký je. {{ui:Zastavit}} ho také ponechá. První průchod čeká, dokud prohlížeč připravuje sledovač paprsků.

Kde má prohlížeč WebGPU, je sledovač paprsků vlastní částí CadCraftu a běží na grafické kartě; řádek pod obrazem to říká. Po {{ui:Zastavit}} nebo časovém limitu {{ui:Pokračovat}} pokračuje se stejným obrazem, dokud nemá všechny vzorky; změna nastavení nebo nový stisk {{ui:Vykreslit}} začne znovu. Bez WebGPU se obraz sleduje pomocí WebGL (řádek to říká) a {{ui:Pokračovat}} se nenabízí.

:::linux
Firefox a většina nastavení Chrome na Linuxu zatím WebGPU nemají, takže vysoká kvalita tam používá WebGL.
:::

V tomto režimu se hrany nekreslí, textury ukazují barvu a drsnost, ale ne své reliéfy, a řez se provede na modelu dříve, než obraz začne.

{{ui:Odšumit (odstraní zrno zbylé po vzorcích)}} je ve výchozím stavu zapnuto: když je obraz hotový nebo zastavený, zbylé zrno odstraní neuronová síť vytvořená pro tento účel (publikovaná síť Intel Open Image Denoise, běžící na Vašem počítači: na grafické kartě, jinak na procesoru). {{ui:Zobrazit}} › {{ui:Obraz před odšuměním}} ho ukáže tak, jak byl vykreslen.

## Oblohy a světelné profily na grafické kartě

S WebGPU má vysoká kvalita ještě dvě oblohy:

- {{ui:Fyzická obloha}} vypočítá denní světlo podle výšky slunce: hluboká modř nad hlavou, světlý pás u horizontu a slunce, které je při nízkém postavení teplejší a tlumenější. {{ui:Zákal}} jde od velmi čistého dne (2) po zamlžený (10).
- {{ui:Obrázek oblohy (HDRI)}} osvětlí model panoramatickým obrázkem skutečného místa. {{ui:Vyberte obrázek…}} vezme soubor `.hdr` nebo `.exr` v ekvirektangulárním formátu; {{ui:Otočit}} ho otočí kolem modelu a {{ui:Jas obrázku}} ho zesvětlí nebo ztmaví. Obrázek nese vlastní slunce, takže slunce modelu se nepřidává. Zůstane uložen jen po dobu, co je stránka otevřená: po znovuotevření jej vyberte znovu.

Každé svítidlo v seznamu {{ui:Svítidla}} může mít světelný profil výrobce: {{ui:Profil IES…}} načte soubor IES (LM-63) a svítidlo pak vrhá světlo tak, jak to dělá dané těleso (úzké bodové svítidlo, osvětlovač stěny). Každé svítidlo se stejným názvem jej používá a svítidlo si ponechá vlastní jas. Kliknutím na název profilu jeho používání zastavíte.

Okna z čistého skla pomáhají světlu oblohy najít cestu do místnosti.

Režim {{ui:Rychlý}} a sledovač paprsků ve WebGL zobrazují {{ui:Fyzickou oblohu}} a {{ui:Obrázek oblohy (HDRI)}} jako čistou oblohu a světelné profily ignorují.

## Kamera

{{ui:Kamera}} nastaví obraz jako fotografii:

- {{ui:Expozice}}: ponechte {{ui:Posuvník jasu}}, nebo zvolte {{ui:Nastavení kamery}} a nastavte {{ui:Clona (f-stop)}}, {{ui:Doba závěrky}} a {{ui:ISO}} jako na fotoaparátu; EV vedle nich je obvyklá expoziční hodnota. f/16 při 1/100 s a ISO 100 odpovídá slunečnému dni; tmavší scéna chce širší clonu, pomalejší závěrku nebo vyšší ISO. Funguje to ve všech režimech.
- {{ui:Hloubka ostrosti}} rozmaže to, co je blíž nebo dál než {{ui:Vzdálenost zaostření (m)}}, jak by to udělal objektiv s tímto f-stopem (nechte prázdné, aby se zaostřilo na to, co je uprostřed pohledu); {{ui:Tvar clony}} dá zvýraznění mimo ostrost kulatý nebo lamelový tvar.
- {{ui:Dvoubodová perspektiva (svislé čáry zůstanou svislé)}} srovná kameru a posune obraz, jak to dělá architektonický tilt-shift objektiv, takže se stěny nenaklánějí, když se díváte nahoru nebo dolů na budovu.
- {{ui:Vyvážení bílé}} nastaví, která barva světla se jeví jako bílá: nižší (například 3000 K) pro teplé světlo svítidel, vyšší pro stín a zamračené dny.
- {{ui:Promítání}}: {{ui:Panorama 360°}} vytvoří obraz 2:1 všeho kolem kamery pro prohlížeče panoramat; {{ui:Stereo panorama 360°}} složí panorama pro levé a pravé oko pro náhlavní soupravy; {{ui:Kubická mapa (6 stěn)}} vytvoří šest čtvercových pohledů v mřížce 3 × 2. Šířka se bere z {{ui:Velikost}}.

Promítání, hloubka ostrosti, dvoubodová perspektiva a vyvážení bílé potřebují sledovač paprsků na grafické kartě (WebGPU), takže se ukážou jen v {{ui:Vysoká kvalita (sledování paprsků)}}.

## Dokončení obrazu

{{ui:Obrázek}} gradačně upraví obraz vysoké kvality jako fotografii a každý ovladač mění hotový obraz okamžitě, bez nového vykreslení:

- {{ui:Vzhled (převod pohledu)}}: {{ui:ACES filmový}} (obraz jako dříve), {{ui:AgX}} (měkčí, zachovává barvu ve velmi jasném světle), {{ui:Filmový}} (jemná filmová křivka) nebo {{ui:Standardní}} (prostý, jasné světlo se ořízne na bílou).
- {{ui:Kontrast}} a {{ui:Komprese světel}} (vrátí detail ve velmi jasných částech).
- {{ui:Záře}} (měkký lesk kolem jasných světel), {{ui:Oslnění}} s {{ui:Paprsky oslnění}} (hvězdicové paprsky z nejjasnějších bodů) a {{ui:Vinětace}} (ztmavené rohy).
- {{ui:Barevná tabulka (.cube)…}} použije barevnou gradaci ze souboru `.cube` s {{ui:Síla barevné tabulky}}; stejně jako obrázek oblohy zůstane uložena jen po dobu, co je stránka otevřená.

## Uložení obrazu

{{ui:Uložit jako}} vedle {{ui:Uložit}} vybere soubor: {{ui:PNG}}, {{ui:JPEG}} nebo {{ui:WebP}} pro sdílení (JPEG a WebP jen tam, kde je prohlížeč umí zapsat), a po vykreslení vysoké kvality na grafické kartě také:

- {{ui:PNG, 16 bitů}}: gradovaný obraz s jemnějšími přechody odstínů pro tisk nebo další úpravy.
- {{ui:EXR, všechny vrstvy (32bitová plovoucí desetinná čárka)}}: obraz tak, jak byl vykreslen (lineární světlo, bez gradace), se všemi prvky vykreslení a skupinami světel jako vlastní vrstvou, pro programy na skládání.
- {{ui:Soubor vykreslení (.ccrender, pro pozdější úpravu)}}: vše, co dialog potřebuje k novému smíchání a gradaci obrazu. {{ui:Otevřít soubor vykreslení…}} ho vrátí i se směsí a gradací, bez vykreslení.

## Smíchání světel po vykreslení

Před stisknutím {{ui:Vykreslit}} zapněte {{ui:Míchání světel (po vykreslení změňte barvu a jas každého světla)}}. Když je obraz hotový (nebo zastavený), {{ui:Smíchat obraz}} vypíše jeho světla do skupin: oblohu, slunce a svítidla podle názvu (každé svítidlo se stejným názvem tvoří jednu skupinu). Vypněte skupinu, dejte jí barvu, nebo ji zesvětlete či ztmavěte, a obraz se změní okamžitě, bez nového vykreslení. {{ui:Uložit směs}} uchová směs pod názvem, který lze později znovu zvolit; {{ui:Jak vykresleno}} se vrátí k obrazu tak, jak vznikl. {{ui:Uložit}} uloží smíchaný obraz.

{{ui:Prvky vykreslení (albedo, normály, hloubka, difuze, odraz, průchod, vyzařování, ID)}} uchová i části obrazu. {{ui:Zobrazit}} přepne pohled na jednu z nich: barvy povrchů (albedo), normály, hloubku, difuzní, odražené a propuštěné světlo (každé přímé i nepřímé), co září, a oblohu, a barvu na objekt nebo na materiál pro tvorbu masek.

Obojí si ponechá další vrstvy na grafické kartě. Při velkých velikostech grafická karta nemusí mít dost místa; dialog to řekne a menší velikost pomůže.

## Mlha, kouř, šum a kaustiky

Tyto nastavení jsou v {{ui:Mlha, kouř a šum}} a fungují v {{ui:Vysoká kvalita (sledování paprsků)}} na grafické kartě; ostatní motory je vynechávají.

- {{ui:Mlha a opar}} vyplní vzduch až do výšky mlhou, kterou osvětlují slunce, obloha a svítidla. {{ui:Jak daleko je vidět, v metrech}} nastaví, jak hustá je (asi 100 m je lehký opar, 20 m hustá mlha), {{ui:Výška mlhy nad terénem, v metrech}} je, kde končí, a {{ui:Světelné paprsky}} určuje, jak moc mlha září směrem ke světlu. Sluneční světlo opouští mlhu nahoře, takže tam, kde slunce prochází oknem nebo mezi budovami, ji vidíte jako světelné paprsky.
- {{ui:Kouř nebo mrak}} přidá jeden objem kouře nebo mraku osvětlený jako mlha. {{ui:Druh}} je {{ui:Mrak}}, {{ui:Kouřový sloup}} nebo {{ui:Ze souboru objemu (.ccvol)}}, vlastní mřížkový formát CadCraftu. {{ui:Detail}} a {{ui:Variace}} mění vytvořený mrak nebo sloup; {{ui:Velikost nejdelší strany, v metrech (0 = velikost modelu)}}, {{ui:Posun X (m)}}, {{ui:Posun Y (m)}}, {{ui:Posun Z (m)}} a {{ui:Otočit}} ho umístí (začíná uprostřed modelu), {{ui:Tloušťka}} ho zhustí, {{ui:Záře dopředu}} ho zesvětlí směrem ke světlu a {{ui:Barva}} ho obarví. Soubor objemu zůstane uložen jen po dobu, co je stránka otevřená, stejně jako obrázek oblohy.
- {{ui:Zastavit včas tam, kde je obraz čistý (adaptivní vzorkování)}} nedá dalším vzorkům pixely, které se ustálily. {{ui:Přijatelný šum}} je, kolik zrna zůstane, když se pixel zastaví. Řádek pod obrazem říká, kolik vzorků dostal pixel v průměru.
- {{ui:Kaustiky (světlo lomené sklem nebo odražené zrcadly)}} sleduje světlo ze svítidel a slunce, takže světlá skvrna pod skleněnou koulí nebo odraz zrcadla na zdi vyjde čistě, a ne zrnitě. Je vypnuta, když jsou zapnuté mlha, kouř, míchání světel nebo prvky vykreslení, a je určena pro obrazy, ne pro 360° obrazy.

## Fronta vykreslování

{{ui:Fronta vykreslování}} v dialogu: {{ui:Přidat tento obraz do fronty}} zachová nastavení a pohled obrazu, a {{ui:Spustit frontu}} vykreslí čekající obrazy jeden za druhým na tomto počítači. Zavření stránky frontu zachová; otevřete stejný model a pokračujte. {{ui:Uložit}} stáhne hotový obraz; {{ui:Odebrat}} a {{ui:Vyčistit hotové}} seznam uklidí. Fronta vykresluje ve vysoké kvalitě, takže potřebuje WebGPU.

## Jak dlouho to trvá

Obraz vzniká na Vašem počítači, grafickou kartou; nic se nenahrává. Čas roste s průchody a pixely: {{ui:Nejlepší}} má 16krát více průchodů než {{ui:Náčrt}} a obraz 4K má asi čtyřikrát více pixelů než Full HD. Velké modely trvají na jeden průchod déle.
