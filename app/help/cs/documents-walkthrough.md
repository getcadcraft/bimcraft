---
title: Dokumenty a revize (trezor)
summary: Krok za krokem jedna skutečná zakázka: dejte složku projektu s modely IFC pod kontrolu, vyjměte model, změňte ho, vraťte s poznámkou, pošlete ke kontrole, schvalte a uvolněte, podívejte se na historii a na to, co používá, co vidí druhá osoba, když je soubor zamčen, a jak to funguje se složkami v cloudu.
keywords: trezor, dokumenty, průvodce, návod, vyjmout, vrátit, revize, uvolnění, schválit, zámek, historie, IFC, model, složka v cloudu, složka projektu, dva lidé, sdílená složka
from: 0a753f25
---

## Co provedete

Jste Ana a pracujete na projektu Riverside Clinic s kolegou Benem. Soubory IFC projektu jsou v jedné složce, kterou oba dosáhnete (sdílený disk, synchronizovaná složka, nebo složka v cloudu). Na konci má jeden soubor cestu od první kopie až k uvolněné revizi **A**, byl změněn znovu jako **B.1**, uvidíte, kdo co dělal, a uvidíte, co vidí Ben, když soubor držíte vy.

Vše je uloženo ve skryté složce `.ccvault` vedle vašich souborů: žádný server, nic se nenahrává (výjimkou je složka v cloudu, viz poslední krok). Každé tlačítko a pravidlo na jednom místě najdete v tématu *Dokumenty: vyjmutí, revize a uvolnění*, tam kde ho vaše aplikace má.

## 1. Nastavte složku projektu

1. Vyberte {{ui:Dokumenty}} vedle {{ui:Otevřít složku}} na úvodní obrazovce, nebo {{ui:Dokumenty…}} v nabídce **Soubor**.
2. Vyberte {{ui:Vyberte projektovou složku}} a zvolte složku, která obsahuje modely IFC projektu. (Složky projektů fungují ve Studiu a v prohlížečích, které umějí otevřít složku, například Chrome a Edge. V jiných prohlížečích to panel řekne.)
3. Vyberte {{ui:Změna}} vedle **Vy:** a napište své jméno, `Ana` (pokud se zeptá, i jméno tohoto počítače). Panel nyní říká *Vy: Ana na* a svůj počítač. Vaše jméno jde ke každé vaší akci.
4. Vyberte {{ui:Založit trezor v této složce}} a napište název projektu, `Riverside clinic`. Panel říká *Trezor založen pro Riverside clinic.*

## 2. Dejte soubor pod kontrolu

1. Otevřete **Soubory mimo trezor** a vyberte {{ui:Přidat}} vedle `models/House.ifc`.
2. Objeví se pod **Soubory v trezoru** v revizi **A.1**, ve stavu **Rozpracováno**. A.1 je jeho první kopie; trezor uchovává kopii každé revize.

## 3. Vyjměte, změňte, vraťte

1. Vyberte {{ui:Otevřený}} vedle `models/House.ifc`. Model se otevře v BimCraftu a panel se zavře, abyste ho viděli. Panel znovu otevřete přes {{ui:Dokumenty}}.
2. Znovu otevřete panel a vyberte {{ui:Vyjmout}}. Řádek nyní říká **Vyjmuto k vám**. Vytvořil se zámek v `.ccvault/locks`; nikdo jiný tento soubor nevyjme, dokud ho nevrátíte.
3. Změňte model: posuňte stěnu, přidejte dveře. Uložení je odmítnuto, pokud model není vyjmut k vám, a řekne proč; {{ui:Uložit jako}} vždy funguje pro vlastní kopii.
4. Otevřete panel, vyberte {{ui:Vrátit}} a napište, co se změnilo (`Přesunul jsem dveře`). Panel řekne *vráceno jako A.2*. Soubor ve složce projektu je nyní model, který jste měli otevřený, a zámek zmizí. Vrácení bez změny ponechá revizi.

Pokud si to rozmyslíte, {{ui:Zrušit vyjmutí}} vrátí soubor bez nové revize.

## 4. Kontrola a uvolnění

1. Vyberte {{ui:Poslat ke kontrole}}. Stav se změní na **Ke kontrole** a soubor je jen pro čtení.
2. Před schválením vyberte {{ui:Nastavení projektu}} a vypište, kdo smí schvalovat (jedno jméno na řádek), například `Ben` a `Carla`, a zaškrtněte pravidlo, že schvalovatel musí být někdo jiný než autor. Vyberte {{ui:Uložit nastavení}}. Nyní trezor sám odmítne kohokoli jiného.
3. Ben (nebo Carla) vybere {{ui:Schválit}} a napíše jméno schvalovatele. Stav se změní na **Uvolněno** a revize na **A**, se *schválil* a jménem. Uvolněný soubor je jen pro čtení. {{ui:Vrátit k přepracování}} by ho vrátilo do stavu Rozpracováno s uvedeným důvodem.

Jméno schvalovatele je jméno napsané v panelu; je to záznam o tom, kdo podepsal, ne důkaz totožnosti.

## 5. Nová revize

1. U uvolněného souboru vyberte {{ui:Nová revize}}. Držíte ji pro další písmeno.
2. Změňte ji, pak {{ui:Vrátit}}. Revize je **B.1**, rozpracováno. Uvolněte ji stejným způsobem a bude **B**. {{ui:Zrušit vyjmutí}} před prvním vrácením ji nechá na **A**.

Revizní písmena jdou A, B … Z, AA, AB. Pokud váš standard některá písmena vynechává, nastavení projektu *Použít posloupnost ASME Y14.35* přeskočí pro další revize I, O, Q, S, X a Z.

## 6. Podívejte se, co se stalo

Vyberte název souboru a otevřete jeho podrobnosti:

- **{{ui:Historie}}**: každá událost, nejnovější nahoře, s tím, kdo, na kterém počítači a kdy: *Vráceno A.2* od Any, *Uvolněno* od Bena, a tak dále.
- **{{ui:Revize}}**: tabulka revizí: každá uchovaná revize s datem, kdo ji vrátil, poznámkou a kdo ji schválil. Trezor uchovává kopii každé v `.ccvault/revs`.
- **{{ui:Používá}}**: dokumenty, na které model IFC ukazuje.
- **{{ui:Používá}}** (Used by): každý model v trezoru, který ukazuje na tento soubor.

## Modely, které ukazují na jiné dokumenty

Model IFC, který ukazuje na jiné dokumenty ve složce (výkresy, výkazy), je zobrazí pod **Používá** a každý z nich ukáže model pod **Používá**. Když vrátíte dokument, uvidíte, které modely na něj odkazují.

## 7. Co Ben vidí, když držíte soubor

Nyní soubor znovu vyjměte a požádejte Bena, aby na svém počítači otevřel stejnou složku projektu a panel. Na řádku souboru uvidí **Vyjmuto: Ana na** vašem počítači **od** času a žádné tlačítko {{ui:Vyjmout}}. Pokud to zkusí přesto, trezor odmítne: zámek je soubor, který systém nevytvoří dvakrát, takže nemohou oba soubor držet ani ve stejné vteřině, když je složka na disku ve Studiu. (V prohlížeči složka zajistí jen nejlepší možnou snahu a panel to uvede pod **Složka**.)

Pokud je Ana pryč a Ben soubor potřebuje, {{ui:Zrušit vyjmutí násilím}} ho uvolní. Musí napsat důvod; zapíše se do protokolu spolu s tím, čí vyjmutí to bylo. Pokud projekt uvádí správce, může to jen oni. Vyjmutí starší než limit zastarání (ve výchozím nastavení 14 dní) je označeno *dlouho*. Po násilném zrušení bude Anino opožděné vrácení odmítnuto, takže se vzájemně nemůžete přepsat.

## 8. Složky v cloudu

Složka v cloudu je složka projektu uložená v cloudovém úložišti vašeho týmu, takže tým nepotřebuje sdílený disk. Ve Studiu, přihlášeni ke svému účtu CadCraft, panel zobrazí {{ui:Otevřít složku v cloudu}} vedle {{ui:Vyberte projektovou složku}}. Vyberte ji a zvolte složku, uvedenou jako pracovní prostor / složka. Vlastník pracovního prostoru vytvoří složku jako první a cloudové úložiště týmu musí být platné. Vše výše funguje stejně; server vytváří zámek, který je přísný napříč lidmi. Pokud nejste přihlášeni, panel vás vyzve k přihlášení. V obyčejné kartě prohlížeče se tlačítko cloudu nenabízí; použijte Studio.

## Zkuste to

Udělejte osm kroků výše s kopií skutečného souboru. Kroky pro dvě osoby potřebujete druhého člověka, nebo dvě okna se dvěma jmény. Pokud to zkusíte se skutečnou sdílenou složkou, stránka Komunitního testování uvádí kontrolu, která přesně tohle žádá, a přijímá výsledky.
