---
title: Vloženie obrázka pod plán
summary: Umiestnite obrázok PNG, JPEG alebo WebP (naskenovaný plán, náčrt, fotografiu lokality, letecký snímok) pod pôdorys podlažia alebo na zvislú rovinu, zmeňte jeho mierku podľa dvoch bodov, posuňte, otočte, zosvetlite a zamknite, pozrite ho v 3D a v PDF pôdorysu a uchovávajte ho spolu s modelom v balíku.
keywords: obrázok, obraz, podklad, PNG, JPEG, WebP, sken, náčrt, fotografia, letecký snímok, situačný plán, mierka, nepriehľadnosť, zamknúť, pod plánom, obťahovanie
from: e3c78d1f
---

## Umiestnenie obrázka

Zapnite {{ui:Kresliť}}, prejdite na podlažie a v ponuke {{ui:Zostava}} zvoľte {{ui:Obrázok}}. Potom {{ui:Vložiť obrázok…}} a vyberte súbor PNG, JPEG alebo WebP. Číta sa vo vašom prehliadači a nikdy sa nenahráva. Objaví sa pod pôdorysom, prispôsobený pohľadu, a panel nástrojov hovorí, že mierka ešte nie je nastavená. Všetko, čo nakreslíte, je nad ním.

## Nastavenie mierky

Zvoľte {{ui:Mierka}}, kliknite na dva body na obrázku, ktorých skutočnú vzdialenosť poznáte (dva konce steny na naskenovanom pláne, kóta vytlačená na náčrte), potom zadajte vzdialenosť a stlačte {{key:Enter}}. Obrázok sa zväčší alebo zmenší okolo prvého bodu, na ktorý ste klikli. {{key:Esc}} zruší.

## Vloženie skopírovanej oblasti

V MarkupCraft {{ui:Kopírovať oblasť}} skopíruje časť listu PDF ako obrázok. Späť v BimCraft, keď je pôdorys podlažia zobrazený, stlačte {{key:Ctrl+V}} (alebo {{ui:Prilepiť}} v ponuke {{ui:Upraviť}}): oblasť sa dostane na pôdorys ako obrázok, vycentrovaná tam, kde je ukazovateľ (alebo v strede pohľadu). Keď list mal mierku výkresu, vloží sa v jej skutočnej veľkosti, takže stena na ňom má rovnakú dĺžku ako vaše steny. Bez nej sa vloží vo veľkosti papiera a spustí sa {{ui:Mierka}}, takže môžete kliknúť na dva body a zadať ich vzdialenosť. Oblasť skopírovaná ako prekrytie začne s nepriehľadnosťou, s akou bola skopírovaná. Je to jeden krok späť a uchováva sa ako každý iný obrázok.

{{ui:Prilepiť}} použije to, čo ste skopírovali naposledy: skopírovanú oblasť alebo niečo, čo ste skopírovali v BimCraft. {{key:Ctrl+V}} tiež prilepí ľubovoľný iný obrázok PNG, JPEG alebo WebP zo schránky, umiestnený ako pri {{ui:Vložiť obrázok…}} a ešte nie so zmenenou mierkou. Skopírovaná oblasť sa pamätá šesť hodín.

## Posun, otočenie, zosvetlenie, zamknutie

{{ui:Presunúť}} vezme základný bod na obrázku a potom miesto, kam má ísť. {{ui:Otočiť}} zoberie uhol v stupňoch okolo stredu obrázka. {{ui:Nepriehľadnosť}} ho zosvetlí, aby vynikli vaše čiary. {{ui:Zamknúť}} mu zabráni posúvať sa počas kreslenia; zamknutý obrázok vám stále umožní zmeniť jeho nepriehľadnosť a skryť ho. Každá zmena je jeden krok späť.

## Viac obrázkov, viac podlaží

Obrázok patrí k podlažiu, na ktorom bol umiestnený, a zobrazuje sa na pôdoryse tohto podlažia a na pôdoryse stropu. Kliknutím na obrázok na ňom pracujete, alebo ho vyberte v zozname. {{ui:Skryť}} ho vypne bez odstránenia; {{ui:Odstrániť}} (alebo {{key:Delete}}) ho vyberie z modelu.

## Obrázky v 3D pohľade

Každý obrázok sa tiež zobrazuje v 3D pohľade ako plochá rovina: pôdorysný obrázok leží na svojom podlaží, obrázok na zvislej rovine stojí nad svojou rezovou čiarou. Je nakreslený nad modelom bez jeho skrytia a model skryje časť obrázka, ktorá je za ním. Prekrývajúce sa obrázky sa zoradia podľa vzdialenosti. Nepriehľadnosť, Skryť, Zamknúť a Odstrániť fungujú rovnako a {{ui:Zobraziť v 3D}} vypne všetky roviny iba v 3D pohľade. Podlažie drží najviac 8 obrázkov, aby pohľady zostali rýchle.

## Obrázok na zvislej rovine

Pod {{ui:Umiestniť na}} zvoľte {{ui:Zvislá rovina (rezová čiara)}}, potom {{ui:Vložiť obrázok…}}. Kliknite na dva konce čiary na pláne (koniec steny sa prichytí), alebo zvoľte pomenovanú rezovú čiaru podlažia v {{ui:Nad rezovou čiarou}} a kliky nie sú potrebné. Obrázok stojí na podlaží nad touto čiarou a je taký široký ako čiara. Nastavte jeho {{ui:Šírka}}, jeho polohu {{ui:Pozdĺž čiary}} a jeho {{ui:Výška nad úrovňou}} zadaním; {{ui:Otočiť}} ho otáča v jeho vlastnej rovine. Zvislý obrázok sa nekreslí pod pôdorysom; pôdorys ukazuje svoju čiaru, kým na ňom pracujete. BimCraft nemá interaktívne 2D okno rezu: rezy a pohľady sa kreslia na listoch a obrázky sa v týchto zobrazeniach listov zatiaľ netlačia.

## Tlač

{{ui:Náhľad tlače}} na pôdoryse zapíše obrázky podlažia do PDF pod výkres, v ich mierke, otočení a nepriehľadnosti, orezané na list; skrytý obrázok zostane vynechaný. JPEG sa vloží tak, ako je; ostatné obrázky sa najprv na liste zmenšia na 200 dpi.

## Uchovávanie spolu s modelom

Bajty obrázka sa nezapisujú do textu IFC. Model odkazuje na každý z nich menom (IfcDocumentReference ako pictures/<id>.png) a bajty putujú v projektovom balíku. Použite {{ui:Uložiť ako balík…}} (alebo {{ui:Uložiť ako IFC}} a zvoľte ho): dostanete jeden súbor .ccbundle s modelom a jeho obrázkami; IFC zostane malé a úpravy zostanú rýchle. Otvorte .ccbundle a obrázky sa vrátia.

Obyčajný .ifc nemôže obsahovať obrázok bez toho, aby sa nezväčšil. Pri jeho uložení BimCraft povie, koľko obrázkov je uchovaných mimo neho, a ponúkne balík alebo obyčajné IFC, ktoré vloží obrázky do veľkosti 512 KB a ostatné vynechá. Obyčajný .ifc otvorený bez svojho balíka zobrazí tieto obrázky ako chýbajúce a Problémy ich vypíšu; otvorte .ccbundle, v ktorom boli uložené. Súbory uložené prvou verziou, s obrázkom vnútri IFC, sa stále otvoria a uloženie balíka presunie ich obrázky von. Obrázok sa zachová tak, ako je, až do 6 MB; väčší sa najprv zmenší a dostanete o tom správu. Iné programy model otvoria a obrázky ignorujú. Obrázok, ktorému ešte nebola nastavená mierka, je uvedený v Problémoch ako poznámka.

## V listoch rezov a pohľadov

Obrázok na zvislej rovine (zvoľte {{ui:Vertical}} v paneli obrázka a kliknite na dva konce čiary, alebo ho umiestnite nad pomenovanú rezovú čiaru) sa vytlačí v pohľadoch listov, ktoré naň priamo hľadia. Rez zobrazuje obrázok, ktorý stojí na svojej rezovej čiare, alebo ktorý bol umiestnený nad túto rezovú čiaru podľa názvu. Pohľad zobrazuje každý zvislý obrázok, ktorého rovina je k nemu otočená. Obrázok sa kreslí pod čiarami pohľadu, v mierke pohľadu, orezaný na pohľad, a zachováva si svoju nepriehľadnosť. Otvorte {{ui:Listy…}}, aby ste ho videli; PDF listu ho nesie ako obrázok. Pri pohľade zozadu je obrázok zrkadlový, ako v 3D. Skryté obrázky sú vynechané.
