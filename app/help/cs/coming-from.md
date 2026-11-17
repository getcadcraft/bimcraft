---
title: Přechod z jiných BIM a výkresových programů
summary: Jak návyky z desktopového BIM a prohlížení DWG odpovídají BimCraftu a rozdíly, na které lidé narážejí.
keywords: přechod, migrace, známé, desktopové bim, rodina, parametry, průzkumník projektu, paleta vlastností, navigační kostka, xref, správce vrstev, rozdíly, porovnání
from: 2de629af
---

Pokud znáte Revit, většina BimCraftu vám bude slovně povědomá, ale rozsahem neznámá. Nejdůležitější rozdíl: **tato verze čte a kontroluje modely a upravuje data IFC. Zatím nevytváří modely jako Revit.** Nelze kreslit stěny, umísťovat rodiny, vytvářet pohledy ani listy, nebo ukládat soubor projektu. Můžete však otevřít téměř jakýkoli stavební soubor na libovolném počítači s prohlížečem, zjistit, co obsahuje, zkontrolovat celou složku projektu a opravit data v modelu IFC.

## Zvyklosti a jejich ekvivalenty

| Pokud jste zvyklí na | V BimCraftu |
|---|---|
| Otevření `.rvt` v Revitu kvůli zobrazení modelu | BimCraft otevře `.rvt` jako kartu souboru: verze, informace o projektu, odkazy, náhled. Pro 3D model exportujte IFC a otevřete ten. [Čtení souboru projektu nebo rodiny](topic:read-rvt-file) |
| Kontrolu, ve které verzi byl soubor uložen, před jeho otevřením | Karta nahoře uvádí „uloženo v Revitu …“, aniž by soubor upgradovala nebo jakkoli měnila |
| Průzkumník projektu | Žádný průzkumník pohledů a listů. Model IFC má seznamy {{ui:Podlaží}} a {{ui:Prvky}}; výkres má karty listů |
| Paletu vlastností | Panel {{ui:Vlastnosti}} vpravo, pro prvek, na který jste klikli. Místo skupin parametrů jsou sady vlastností IFC |
| Parametry instance a typu | Sady vlastností instance a sady označené „(typ)“. Změna typu platí pro každý prvek daného typu, stejně jako v Revitu. [Změna vlastnosti typu pro každý prvek typu](topic:type-vs-instance) |
| Upravit typ | Žádný dialog: klikněte na hodnotu v sadě „(typ)“ a napište ji |
| Výběr více prvků, filtry, Vybrat všechny instance | Jeden prvek najednou. Ještě není hotovo |
| Navigační kostku a navigační kolo | Navigační kostka v pravém dolním rohu, čtyři tlačítka ({{ui:Přizpůsobit}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Z boku}}) a volné otáčení. Žádné navigační kolo |
| Shift a tažení prostředním tlačítkem pro otáčení, tažení prostředním tlačítkem pro posun | Tažení levým tlačítkem otáčí, tažení pravým (nebo {{key:Shift}} a tažení) posouvá, kolečko přibližuje. Styl nabídky {{ui:Pás karet BIM}} přepíná na posun tažením prostředním tlačítkem a na otáčení přes {{key:Shift}} s prostředním tlačítkem. [Nabídky, klávesy a myš](topic:menus-keys-and-mouse) |
| Půdorysy, řezy, řezné boxy | Jedna rovina {{ui:Řez}} najednou ({{key:X}}); žádný řezný box ani 2D půdorysy. [Vyříznutí modelu IFC rovinou řezu](topic:section-plane) |
| Skrytí v pohledu, izolaci, viditelnost a grafiku | Zapínání a vypínání {{ui:Podlaží}}, {{ui:Prostory}} a {{ui:Hrany}}. Zatím nelze skrývat jednotlivé prvky |
| Místnosti | Prostory IFC, zpočátku skryté. Klikněte na {{ui:Prostory}} |
| Uložit, Uložit jako, synchronizaci s centrálním souborem | {{ui:Uložit jako IFC}} stáhne nový soubor IFC. Původní soubor se nikdy nemění. Žádný centrální soubor ani sdílení prací |
| Zpět pomocí {{key:Mod+Z}} | Funguje na úpravy IFC až do uložení. [Změna vlastností IFC a uložení upravené kopie](topic:edit-ifc-properties) |
| Správu odkazů | Otevřete složku projektu: každý odkaz se zkontroluje a označí jako **V této složce**, **Nalezen stejný název**, **Soubor knihovny** nebo **Není v této složce**. [Otevření celé složky projektu](topic:open-project-folder) |
| Audit, nebo otevření souboru, abyste zjistili, zda není poškozen | Zpráva o složce zkontroluje každou kopii a zálohu, zda nejsou neúplné, během několika sekund. [Kontrola složky na poškozené kopie](topic:check-folder-health) |
| Výběr správného souboru z nepřehledné složky | Pole {{ui:Začněte zde}} navrhne jeden s uvedením důvodů |

Pokud modely otevíráte hlavně ke kontrole, jako v programu pro kontrolu modelů nebo prohlížení IFC, zvolte styl nabídky {{ui:Prohlížeč}}: nástroje pro prohlížení a kontrolu jsou na prvním místě a stavební nástroje čekají v jedné nabídce. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).

## Při prohlížení souborů DWG

Pokud otevíráte soubory DWG v AutoCADu nebo v prohlížeči DWG:

| Pokud jste zvyklí na | V BimCraftu |
|---|---|
| Karty Model a rozvržení dole | Karty nad výkresem: {{ui:Model}} a jedna na každý list |
| ZOOM Extents, dvojklik na kolečko | Dvojklik, {{key:F}} nebo {{ui:Přizpůsobit}} |
| Posun prostředním tlačítkem | Tažení libovolným tlačítkem |
| Správce vrstev | Seznam {{ui:Vrstvy}}: zaškrtnutím zobrazíte, odškrtnutím skryjete, {{ui:Vše zapnout}} a {{ui:Vše vypnout}} |
| Správce xref | **Propojené výkresy** vpravo, se stavem **Zobrazeno** nebo **Nenalezeno**, a {{ui:Přidat propojené výkresy…}} |
| Náhled vykreslení | {{ui:Pohled na tisk}} nebo {{key:P}}: černě na bílém s tloušťkami čar. Netiskne se |
| Extrakce dat atributů bloků | Karta {{ui:Zařízení}} pro označené výkresy stravovacího provozu, s {{ui:Stáhnout CSV}} |
| Měření, kreslení, úpravy, uložit jako | Není v BimCraftu. Kreslí a upravuje kreslicí aplikace CadCraft |

## Rozdíly, na které lidé narážejí

- **Běží v prohlížeči a prohlížeč s vašimi soubory zachází opatrně.** BimCraft může číst jen soubory a složky, které mu předáte výběrem nebo přetažením. Sám neumí otevřít soubor ani přepsat soubor. Každé uložení je stažení.
- **Nic se nenahrává.** Slovo „nahrát“ v dialozích složek některých prohlížečů je vlastní označení prohlížeče. Soubory zůstávají na vašem počítači.
- **IFC je formát modelu.** Soubor projektu se otevře jako karta, protože jeho 3D obsah není zdokumentován. Modely do BimCraftu přicházejí jako IFC.
- **Úpravy se zapisují při kopírování (copy-on-write).** Změna hodnoty jednoho prvku nikdy nezmění jeho sousedy, i když ji exportér mezi nimi sdílel. Výjimkou jsou záměrně vlastnosti typu.
- **Žádný projekt, žádné pohledy.** BimCraft zobrazuje jeden soubor najednou a po zavření karty si o něm nic nepamatuje, kromě názvů nedávných složek v Chrome a Edge.
- **Klávesy na Macu.** Kde Revit v systému Windows používá Ctrl, používají zkratky BimCraftu {{key:Mod}}: na Macu Command.
- **Zvyklosti s myší.** Otáčení je levé tlačítko, ne Shift a prostřední tlačítko, pokud nezvolíte styl nabídky {{ui:Pás karet BIM}} nebo tlačítka nenastavíte sami v [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).

Co použít místo toho, viz [Co zatím není hotovo](topic:not-built-yet).
