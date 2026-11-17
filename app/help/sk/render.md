---
title: Vykreslenie obrazu modelu
summary: Vytvorte denný obraz 3D pohľadu: oblohu, slnko vo výške podľa zemepisnej šírky lokality, mäkké tiene, sklenené okná; s WebGPU sledovanie lúčov (path tracing) na grafickej karte, s oblohami, kamerou, miešaním svetiel, úpravou tónov, hmlou a radom vykresľovania.
keywords: vykreslenie, predvoľba, predvoľby, predvoľba scény, interiér, exteriér, pohľad na rez, noc, jedno kliknutie, vykresľovanie, sledovanie lúčov, path tracing, ray tracing, globálne osvetlenie, odrazy, lom svetla, vysoká kvalita, fotografia, fotorealistický, realistický, obraz, obrázok, png, statický, obloha, slnko, denné svetlo, tiene, mäkké tiene, ambientná okluzia, sklo, okná, kov, materiály, expozícia, jas, zamračené, súmrak, štúdio, prezentácia, vizualizácia, webgpu, odšumenie, fyzikálna obloha, hdri, ies, hĺbka ostrosti, panoráma, vyváženie bielej, miešanie svetiel, prvky vykreslenia, exr, 16-bitový png, hmla, kaustiky, rad vykresľovania
from: beb74cc7
---

{{ui:Vykresliť}} na paneli nástrojov vytvorí obraz 3D pohľadu, ktorý vyzerá ako denné svetlo: oblohu, slnko tam, kde ho podľa zemepisnej šírky lokality postaví, mäkké tiene, svetlo z celej oblohy, ktoré stmavuje rohy, a farby, ktoré môžu pôsobiť ako sklo alebo kov. Model ani súbor sa nemenia.

## Vykreslenie pohľadu

1. Nastavte 3D pohľad tak, ako chcete mať obraz: otáčajte a priblížte, skryte podlažia alebo prvky, ktoré nechcete, a ak má obraz ukazovať rez, nastavte [rez](topic:section-plane).
2. Kliknite na {{ui:Vykresliť}} na paneli nástrojov.
3. Ak stlačené tlačidlo nie je to, čo chcete, vyberte iné tlačidlo {{ui:Scéna}} (pozri [Predvoľby scény](topic:render#scene-presets-a-good-picture-in-one-click)), zvoľte {{ui:Veľkosť}} a potom kliknite na {{ui:Vykresliť}} v dialógu.

   Obraz sa postupne dopĺňa a s každým prechodom je hladší. {{ui:Zastaviť}} (alebo {{key:Esc}}) ho ukončí predčasne a ponechá doterajší obraz.

4. Kliknite na {{ui:Uložiť}}, ak ho chcete stiahnuť ako PNG, alebo na {{ui:Uložiť ako}} pre iný formát (pozri [Uloženie obrazu](topic:render#save-the-picture)). Pomenuje sa podľa súboru modelu.

:::tip
Na kontrolu kamery začnite s {{ui:Náčrt}} a {{ui:Veľkosť pohľadu}}, potom vykreslite {{ui:Dobrá}} alebo {{ui:Najlepšia}} vo väčšej veľkosti pre konečný obraz.
:::

## Predvoľby scény: dobrý obraz jedným kliknutím

V hornej časti dialógu sú štyri tlačidlá {{ui:Scéna}}. Každé nastaví oblohu, jas, zem, hrany čiar, kvalitu a slnko jedným kliknutím, takže pred prvým obrazom sa nič nemusíte učiť. Kliknite na jedno a potom na {{ui:Vykresliť}}.

| Scéna | Čo nastaví | Na čo sa používa |
|---|---|---|
| {{ui:Exteriér}} | Jasná obloha, vlastné slnko modelu, zem zapnutá | Budova zvonku |
| {{ui:Interiér}} | Zamračená obloha (rovnomerné svetlo, žiadne tvrdé slnečné škvrny), o pol kroku jasnejšie | Pohľad z vnútra miestnosti |
| {{ui:Pohľad na rez}} | Biele štúdio, bez zeme, hrany v rýchlom vykreslení | Model rezaný rezom |
| {{ui:Noc}} | Slnko pod obzorom (polnoc v polovici zimy na pologuli lokality), o jeden krok jasnejšie | Svetlá osvetľujúce model. Bez svetiel je obraz tmavý |

- {{ui:Vybrať pre tento pohľad}} vyberie za vás: {{ui:Pohľad na rez}}, keď je zapnutý rez, {{ui:Interiér}}, keď je kamera vnútri modelu, inak {{ui:Exteriér}}. Pri prvom otvorení dialógu sa začne takto sama.
- Každé nastavenie zostáva nižšie a dá sa zmeniť. Keď zmeníte nastavenie, ktoré scéna nastavuje, žiadne tlačidlo nie je stlačené a riadok pod tlačidlami uvádza, že nastavenia sú vaše. Kliknutím na scénu znova vrátite jej hodnoty.
- Scéna nemení motor, režim, veľkosť, materiály, kameru ani svetlá.

:::note
Scény dávajú rovnaké hodnoty v ModelCraft aj BimCraft. Ako vyzerá hotový obraz, závisí od vášho modelu a grafickej karty.
:::

## Čo sa v obraze zobrazí

Zobrazí sa to, čo 3D pohľad zobrazuje ako plné: skryté a priehľadné prvky, skryté podlažia a skryté modely sa vynechajú a miestnosti sa zobrazia iba vtedy, keď je zapnuté {{ui:Priestory}}. Rezná rovina alebo rezný box rezie obraz rovnako, ako reže pohľad. Prvky sa zobrazujú vo svojich farbách: farbenie podľa vlastnosti (karta {{ui:Farba}}) sa nepoužíva.

## Nastavenia

| Nastavenie | Čo robí |
|---|---|
| {{ui:Veľkosť}} | Veľkosť pohľadu, dvojnásobok veľkosti pohľadu, Full HD, 4K alebo štvorec |
| {{ui:Tvar}} | {{ui:Rýchly}}, alebo {{ui:Vysoká kvalita (path tracing)}} (nižšie) s jeho {{ui:Časový limit}} |
| {{ui:Kvalita}} | Koľko prechodov (alebo, vo vysokej kvalite, vzoriek) sa spriemeruje: {{ui:Náčrt}} 16, {{ui:Dobrá}} 64, {{ui:Najlepšia}} 256. Viac prechodov dá hladšie tiene a hrany a trvá dlhšie |
| {{ui:Obloha}} | {{ui:Jasná obloha}}, {{ui:Zamračené}}, {{ui:Súmrak}} alebo {{ui:Biele štúdio}} (jednoduché biele pozadie) |
| {{ui:Slnko}} | 21. jún o 15:00 pri zemepisnej šírke, ktorú súbor uvádza pre jeho lokalitu (IfcSite), otočené k skutočnému severu modelu. Zaškrtnite {{ui:Použiť iný dátum a čas pre tento obraz}} pre iný čas |
| {{ui:Jas}} | Svetlejšie alebo tmavšie, v krokoch expozície |
| {{ui:Zem pod modelom}} | Zem na najnižšom bode modelu, ktorá prijíma tiene a prelína sa do horizontu |
| {{ui:Kresliť hrany}} | Tenké hrany prvkov nakreslené cez obraz |

Keď je slnko v zvolenom čase pod horizontom, je noc: obloha stmavne a svetlá modelu ju osvetlia.

## Svetlá

Každé svietidlo v modeli je v obraze svetlom: svietidlá v súbore IFC (IfcLightFixture alebo prvok označený ako svietidlo), vrátane tých, ktoré umiestnite z knižnice. Každé svieti smerom nadol tesne pod svietidlom. Ak súbor uvádza príkon svietidla, jeho jas z neho vyplýva; inak je to 800 lúmenov, teplá biela.

Dialóg vypíše svetlá pod {{ui:Svetlá}}: odškrtnite jedno, aby ste ho vypli, alebo zadajte jeho jas v lúmenoch. Tieto zmeny sa uložia do IFC (sada vlastností `CadCraft_Light` svietidla, kde ich môžete zmeniť aj vo Vlastnostiach) a {{key:Ctrl+Z}} ich vráti späť.

Ak súbor nič neuvádza o polohe lokality, slnko sa umiestni na 40° severnej šírky a dialóg to uvedie. Čas je miestny čas lokality, vypočítaný z jej zemepisnej dĺžky, takže môže byť o hodinu inak tam, kde sú hodiny nastavené inak.

Tieto nastavenia sa uchovajú v tomto prehliadači pre ďalší obraz. Nie sú uložené v súbore IFC.

## Sklo a ďalšie materiály

Pod {{ui:Materiály}} má každá farba na obrazovke vzhľad: {{ui:Matný}}, {{ui:Saténový}}, {{ui:Lesklý}}, {{ui:Kov}}, {{ui:Leštený kov}}, {{ui:Sklo}} alebo {{ui:Matné sklo}}. Farby, ktoré súbor IFC robí priehľadnými (napríklad zasklenie okien), začínajú ako {{ui:Sklo}}.

:::note
V režime {{ui:Rýchly}} sklo a kov odrážajú oblohu, nie zvyšok modelu, a svetlo sa cez sklo nelomí. Režim {{ui:Vysoká kvalita (path tracing)}} nižšie robí obe veci.
:::

## Vysoká kvalita

Vyberte {{ui:Tvar}} › {{ui:Vysoká kvalita (path tracing)}} pre obraz, ktorý sleduje svetlo tak, ako ho vidí kamera:

- svetlo sa odráža medzi povrchmi, takže miestnosť osvetlená oknom alebo svetlom je osvetlená všade dookola a farby prechádzajú na susedné povrchy;
- sklo je skutočné sklo: svetlo sa ním láme a odráža model;
- kov a leštené povrchy odrážajú zvyšok modelu;
- svetelné panely svietia ako panely, s mäkkými tieňmi.

Je oveľa pomalšia ako {{ui:Rýchly}}: každý prechod znovu sleduje svetlo každého pixela. Obraz začína zrnitý a čistí sa, ako sa sčítavajú vzorky, preto začnite malým ({{ui:Veľkosť pohľadu}}, {{ui:Náčrt}}) a zvoľte {{ui:Časový limit}}: keď vyprší, zachová sa doterajší obraz. {{ui:Zastaviť}} ho tiež zachová. Prvý prechod čaká, kým prehliadač pripraví path tracer.

Ak prehliadač má WebGPU, path tracer je vlastný CadCraftu a beží na grafickej karte; riadok pod obrazom to uvádza. Po {{ui:Zastaviť}} alebo časovom limite {{ui:Pokračovať}} pokračuje s rovnakým obrazom, kým nemá všetky vzorky; zmena nastavenia alebo nové stlačenie {{ui:Vykresliť}} začne od začiatku. Bez WebGPU sa obraz sleduje cez WebGL (riadok to uvádza) a {{ui:Pokračovať}} sa neponúka.

:::linux
Firefox a väčšina nastavení Chrome na Linuxe zatiaľ nemá WebGPU, preto tam vysoká kvalita používa WebGL.
:::

V tomto režime sa hrany nekreslia, textúry zobrazujú svoju farbu a drsnosť, ale nie reliéf, a rez sa urobí na modeli pred začiatkom obrazu.

{{ui:Odstrániť šum (vyčistí zrno, ktoré zostane po vzorkách)}} je predvolene zapnuté: keď je obraz hotový alebo zastavený, zostávajúce zrno vyčistí neurónová sieť vytvorená na tento účel (publikovaná sieť Intel Open Image Denoise, spúšťaná na vašom počítači: na grafickej karte, inak na procesore). {{ui:Zobraziť}} › {{ui:Obraz pred odstránením šumu}} ho zobrazí tak, ako bol vykreslený.

## Oblohy a svetelné profily na grafickej karte

S WebGPU má vysoká kvalita ešte dve oblohy:

- {{ui:Fyzikálna obloha}} vypočíta denné svetlo z výšky slnka: sýtomodrú nad hlavou, bledý pás pri horizonte a slnko, ktoré je pri nízkej polohe teplejšie a slabšie. {{ui:Opar}} sa mení od veľmi jasného dňa (2) po zamlžený (10).
- {{ui:Obraz oblohy (HDRI)}} osvetľuje model panoramatickým obrazom skutočného miesta. {{ui:Vybrať obraz…}} zoberie súbor equirectangular `.hdr` alebo `.exr`; {{ui:Otočiť}} ho otočí okolo modelu a {{ui:Jas obrazu}} ho spraví svetlejším alebo tmavším. Obraz nesie vlastné slnko, takže slnko modelu sa nepridá. Ostáva uložený iba kým je stránka otvorená: po znovuotvorení ho vyberte znova.

Každé svetlo v zozname {{ui:Svetlá}} môže mať svetelný profil výrobcu: {{ui:Profil IES…}} načíta súbor IES (LM-63) a svetlo potom vrhá svetlo tak, ako to robí dané svietidlo (úzke zapustené svetlo, nástenný osvetľovač). Každé svetlo s týmto názvom ho použije a svetlo si zachová vlastný jas. Kliknutím na názov profilu ho prestanete používať.

Okná z číreho skla pomáhajú svetlu z oblohy nájsť cestu do miestnosti.

Režim {{ui:Rýchly}} a path tracer na WebGL zobrazujú {{ui:Fyzikálna obloha}} a {{ui:Obraz oblohy (HDRI)}} ako jasnú oblohu a ignorujú svetelné profily.

## Kamera

{{ui:Kamera}} nastaví obraz ako fotografiu:

- {{ui:Expozícia}}: ponechajte {{ui:Posúvač jasu}}, alebo vyberte {{ui:Nastavenia kamery}} a nastavte {{ui:Clona (f-číslo)}}, {{ui:Rýchlosť uzávierky}} a {{ui:ISO}} ako na fotoaparáte; EV vedľa nich je bežná hodnota expozície. f/16 pri 1/100 s a ISO 100 zodpovedá slnečnému dňu; tmavšia scéna chce širšiu clonu, pomalšiu uzávierku alebo vyššie ISO. Funguje to v každom režime.
- {{ui:Hĺbka ostrosti}} rozmaže to, čo je bližšie alebo ďalej ako {{ui:Vzdialenosť zaostrenia (m)}}, tak ako by to urobil objektív s touto clonou (nechajte prázdne, ak chcete zaostriť na to, čo je v strede pohľadu); {{ui:Tvar clony}} dá rozostreným svetlám okrúhly alebo lamelový tvar.
- {{ui:Dvojbodová perspektíva (zvislé čiary zostanú zvislé)}} vyrovná kameru a posunie obraz, ako to robí architektonický posunovací objektív, takže steny sa nenaklánajú, keď sa pozeráte na budovu hore alebo dolu.
- {{ui:Vyváženie bielej}} určuje, ktorá farba svetla sa zobrazí ako biela: nižšie (napríklad 3000 K) pre teplé svetlo svietidiel, vyššie pre tieň a zamračené dni.
- {{ui:Projekcia}}: {{ui:Panoráma 360°}} vytvorí obraz 2:1 všetkého okolo kamery pre prehliadače panorám; {{ui:Stereo panoráma 360°}} zloží panorámu pre ľavé a pravé oko pre headsety; {{ui:Kocková mapa (6 plôch)}} vytvorí šesť štvorcových pohľadov v mriežke 3 × 2. Šírku určuje {{ui:Veľkosť}}.

Projekcia, hĺbka ostrosti, dvojbodová perspektíva a vyváženie bielej potrebujú path tracer na grafickej karte (WebGPU), preto sa zobrazia iba v režime {{ui:Vysoká kvalita (path tracing)}}.

## Dokončenie obrazu

{{ui:Obrázok}} upraví tóny obrazu vo vysokej kvalite ako fotografiu a každé ovládanie hneď zmení hotový obraz bez nového vykreslenia:

- {{ui:Vzhľad (transformácia zobrazenia)}}: {{ui:ACES filmic}} (obraz ako doteraz), {{ui:AgX}} (mäkší, zachováva farbu pri veľmi jasnom svetle), {{ui:Filmic}} (jemná filmová krivka) alebo {{ui:Štandardný}} (jednoduchý, jasné svetlo sa orezáva na bielu).
- {{ui:Kontrast}} a {{ui:Kompresia svetiel}} (vráti detail vo veľmi jasných častiach).
- {{ui:Žiara}} (mäkký lesk okolo jasného svetla), {{ui:Odlesk}} s {{ui:Lúče odlesku}} (hviezdicové lúče z najjasnejších bodov) a {{ui:Vinetácia}} (tmavšie rohy).
- {{ui:Farebná tabuľka (.cube)…}} použije úpravu farieb zo súboru `.cube` so svojou {{ui:Sila farebnej tabuľky}}; ako obraz oblohy zostáva uložená iba kým je stránka otvorená.

## Uloženie obrazu

{{ui:Uložiť ako}} vedľa {{ui:Uložiť}} vyberá súbor: {{ui:PNG}}, {{ui:JPEG}} alebo {{ui:WebP}} na zdieľanie (JPEG a WebP iba tam, kde ich prehliadač dokáže zapísať), a po vysokokvalitnom vykreslení na grafickej karte aj:

- {{ui:PNG, 16 bitov}}: upravený obraz s jemnejšími prechodmi odtieňov, na tlač alebo ďalšiu úpravu.
- {{ui:EXR, každá vrstva (32-bitový float)}}: obraz tak, ako bol vykreslený (lineárne svetlo, bez úpravy) s každým prvkom vykreslenia a skupinou svetiel ako vlastnou vrstvou, pre programy na kompozíciu.
- {{ui:Súbor vykreslenia (.ccrender, na neskoršie ďalšie úpravy)}}: všetko, čo dialóg potrebuje na nové zmiešanie a úpravu obrazu. {{ui:Otvoriť súbor vykreslenia…}} ho vráti aj s jeho zmesou a úpravou bez vykreslenia.

## Zmiešanie svetiel po vykreslení

Zapnite {{ui:Miešanie svetiel (zmena farby a jasu každého svetla po vykreslení)}} predtým, ako stlačíte {{ui:Vykresliť}}. Keď je obraz hotový (alebo zastavený), {{ui:Zmiešať obraz}} vypíše jeho svetlá v skupinách: oblohu, slnko a svetlá podľa názvu (každé svetlo s rovnakým názvom tvorí jednu skupinu). Vypnite skupinu, dajte jej farbu alebo ju zosvetlite či stmavte, a obraz sa hneď zmení bez nového vykreslenia. {{ui:Uložiť zmes}} uchová zmes pod názvom, ktorý si neskôr vyberiete; {{ui:Ako vykreslené}} vráti obraz do stavu, v akom bol vytvorený. {{ui:Uložiť}} uloží zmiešaný obraz.

{{ui:Prvky vykreslenia (albedo, normály, hĺbka, difúzne, odrazy, priepustnosť, emisia, ID)}} ukladá aj časti obrazu. {{ui:Zobraziť}} prepne pohľad na jednu z nich: farby povrchu (albedo), normály, hĺbku, difúzne, zrkadlové a prepustené svetlo (priame aj nepriame), to, čo žiari, a oblohu, a farbu na objekt alebo materiál pre tvorbu masiek.

Obe možnosti ukladajú dodatočné vrstvy na grafickú kartu. Pri veľkých veľkostiach grafická karta nemusí mať dosť miesta; dialóg to uvedie a funguje menšia veľkosť.

## Hmla, dym, šum a kaustiky

Tieto nastavenia sú v časti {{ui:Hmla, dym a šum}} a fungujú v režime {{ui:Vysoká kvalita (path tracing)}} na grafickej karte; ostatné motory ich vynechávajú.

- {{ui:Hmla a opar}} vyplní vzduch až do výšky hmlou, ktorú osvetľuje slnko, obloha a svetlá. {{ui:Ako ďaleko vidno, v metroch}} určuje, aká hustá je (asi 100 m je ľahký opar, 20 m hustá hmla), {{ui:Výška hmly nad zemou, v metroch}} je miesto, kde končí, a {{ui:Svetelné lúče}} určuje, do akej miery hmla žiari smerom k svetlu. Slnečné svetlo opúšťa hmlu na jej vrchole, takže tam, kde slnko prechádza oknom alebo medzi budovami, ho vidíte ako svetelné lúče.
- {{ui:Dym alebo oblak}} pridá jeden objem dymu alebo oblaku osvetlený ako hmla. {{ui:Druh}} je {{ui:Oblak}}, {{ui:Dymový stĺp}} alebo {{ui:Zo súboru objemu (.ccvol)}}, vlastný mriežkový formát CadCraftu. {{ui:Detail}} a {{ui:Variácia}} menia vytvorený oblak alebo stĺp, {{ui:Veľkosť jeho najdlhšej strany, v metroch (0 = veľkosť modelu)}}, {{ui:Posun X (m)}}, {{ui:Posun Y (m)}}, {{ui:Posun Z (m)}} a {{ui:Otočiť}} ho umiestnia (začína v strede modelu), {{ui:Hrúbka}} ho zahustí, {{ui:Žiara dopredu}} ho spraví jasnejším smerom k svetlu a {{ui:Farba}} ho zafarbí. Súbor objemu zostáva uložený iba kým je stránka otvorená, rovnako ako obraz oblohy.
- {{ui:Zastaviť skôr tam, kde je obraz čistý (adaptívne vzorkovanie)}} nedáva ďalšie vzorky pixelom, ktoré sa ustálili. {{ui:Prijateľný šum}} je, koľko zrna zostane, keď pixel prestane. Riadok pod obrazom uvádza, koľko vzoriek mal pixel v priemere.
- {{ui:Kaustiky (svetlo lámané sklom alebo odrážané zrkadlami)}} sleduje svetlo zo svietidiel a slnka, takže jasná škvrna pod sklenenou guľou alebo odraz zrkadla na stene vyjde čistá namiesto zrnitej. Je vypnutá, keď sú zapnuté hmla, dym, miešanie svetiel alebo prvky vykreslenia, a je určená pre obrazy, nie pre obrazy 360°.

## Rad vykresľovania

{{ui:Rad vykresľovania}} v dialógu: {{ui:Pridať tento obraz do radu}} zachová nastavenia a pohľad obrazu a {{ui:Spustiť rad}} vykreslí čakajúce obrazy jeden za druhým na tomto počítači. Zatvorenie stránky rad zachová; otvorte ten istý model a pokračujte. {{ui:Uložiť}} stiahne hotový obraz; {{ui:Odstrániť}} a {{ui:Vymazať dokončené}} upratajú zoznam. Rad sa vykresľuje vo vysokej kvalite, preto potrebuje WebGPU.

## Ako dlho to trvá

Obraz sa vytvára na vašom počítači, grafickou kartou; nič sa neodosiela. Čas rastie s prechodmi a pixelmi: {{ui:Najlepšia}} má 16-krát viac prechodov ako {{ui:Náčrt}}, a obraz 4K má asi štvornásobok pixelov Full HD. Veľké modely trvajú dlhšie na jeden prechod.
