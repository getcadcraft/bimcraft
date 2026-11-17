---
title: Řešení potíží
summary: Zprávy, které BimCraft zobrazuje, co je způsobuje a co dělat, při otevírání souborů, složek, 3D modelů, výkresů a úprav.
keywords: problém, chyba, nefunguje, nelze otevřít, selhalo, neúplný, poškozený, pomalý, pád, prázdný, chybějící, zpráva, nápověda
from: 1e5a79fc
---

Zprávy se zobrazují na stavovém řádku dole na ploše, červeně, když něco selhalo. Najděte zprávu níže.

## Otevírání souborů

**"*name* není soubor IFC, RVT, RFA, DWG ani DXF."**
BimCraft soubor nerozpoznal. Zkontrolujte příponu a že soubor není prázdný. PDF, obrázky a kancelářské soubory se neotevřou.

**".ifczip zatím není podporován. Uložte nebo exportujte model jako prostý soubor .ifc."** (platí také pro `.ifcxml`)
Rozbalte `.ifczip` (je to běžný zip obsahující `.ifc`) nebo exportujte prosté IFC.

**"… je projektový soubor, který BimCraft zatím nečte."**
Soubor `.pln`, `.pla`, `.tpl` nebo `.bpn`. Exportujte z něj IFC nebo DWG a otevřete ten: viz [Otevření projektových souborů .pln a .pla](topic:pln-project-files).

**"Tento soubor IFC nebylo možné přečíst."**
Soubor IFC je poškozený nebo ve skutečnosti není IFC. Otevřete jej v textovém editoru: skutečný soubor IFC začíná `ISO-10303-21;`. Exportujte jej znovu.

**"Tento soubor je neúplný: má … MB, ale jeho vlastní rejstřík ukazuje na data nejméně … MB dál. …"**
Projektový nebo rodinný soubor byl při kopírování, nahrávání nebo synchronizaci přerušen. Soubor na cloudovém disku s režimem „pouze online“ vypadá stejně. Soubor otevřený samostatně se stále otevře, s touto zprávou nahoře na kartě a „Zobrazuje se obnovená část; pro celý model zkopírujte originál znovu.“: karta ukazuje jen části, jejichž každý bajt je v souboru, a ostatní vypíše pod **Není v souboru**. Zpřístupněte soubor offline na svém cloudovém disku nebo originál zkopírujte znovu a otevřete jej. Ve složce BimCraft ukáže nejnovější úplnou zálohu.

**"… Seznam obsahu souboru je také v chybějící části, takže nic v něm nelze otevřít."**
Soubor byl přerušen tak brzy, že ani jeho seznam obsahu tam není. Z této kopie nelze nic obnovit. Zkopírujte originál znovu a otevřete jej.

**"Tento složený soubor nemá proud BasicFileInfo, takže není souborem Revitu."**
Soubor je složený soubor jiného druhu (staré kancelářské dokumenty používají stejný kontejner). Zkontrolujte, že jste vybrali správný soubor.

**"Stále zpracovávám ten předchozí…"**
BimCraft je ještě zaneprázdněn předchozím souborem nebo složkou. Počkejte, až stavový řádek skončí, a zkuste to znovu.

**Výběr souboru mi můj soubor nenabízí (je našedlý).**
Výběr nabízí jen `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` a `.dxf`. Ostatní soubory přetáhněte na stránku; BimCraft vám řekne, zda je umí načíst.

## Otevírání složek

**"Tato složka má více než 20,000 souborů. Vyberte menší složku, například jeden projekt."**
Vybrali jste složku příliš vysoko, například celý disk. Vyberte jednu projektovou složku.

**"Prohlížeč neumožnil přístup k *name*. Vyberte ji znovu pomocí Otevřít složku."**
Klikli jste na {{ui:Znovu otevřít}} u nedávné složky a oprávnění prohlížeče bylo odepřeno nebo vypršelo. Vyberte složku znovu, nebo ji přetáhněte.

**Prohlížeč říká, že bude soubory „nahrávat“.**
To je vlastní formulace prohlížeče pro předání souborů stránce. BimCraft je nikam neposílá. Abyste se tomu vyhnuli, přetáhněte složku.

**Na telefonu nebo tabletu se nic neděje.**
Mnoho mobilních prohlížečů nemůže vybírat složky. Otevírejte jednotlivé soubory, nebo použijte počítač.

## Motor IFC se načítá poprvé

**Stavový řádek zůstává na „Spouštění enginu IFC…“, nebo ukáže chybu jako „Failed to fetch“.**
Motor IFC nelze stáhnout. Možná jste offline, nebo firewall či blokovač obsahu brání jeho stažení.

:::offline
Jste offline. Pokud tlačítko v horní liště neříká {{ui:Připraveno offline}}, motor IFC nebyl v tomto prohlížeči nikdy uložen. Připojte se, otevřete soubor znovu a pak klikněte na {{ui:Uložit pro offline}}, aby fungoval offline příště. Viz [Online a offline](topic:online-offline).
:::

:::online
Znovu načtěte stránku a zkuste to znovu. Pokud jste v pracovní síti, požádejte IT tým, aby povolil soubory `.wasm` tohoto webu.
:::

## Ukládání pro offline použití

**Tlačítko říká {{ui:Nepodařilo se uložit}}.**
Některé soubory se nestáhly, obvykle proto, že spojení přerušilo. Zkontrolujte připojení a klikněte na tlačítko znovu. Dřívější offline kopie se zachová, dokud nebude hotová nová.

**Tlačítko říká {{ui:Offline není dostupné}}.**
Toto okno nemůže uchovat offline kopii, například soukromé okno nebo spravovaný pracovní počítač. Viz [Práce offline](common:offline).

**Tlačítko chvíli zůstává na „Ukládání *n* z *m*“.**
Kopie BimCraftu má přibližně 11 MB, většinou je to motor IFC. Nechte kartu otevřenou, dokud neřekne {{ui:Připraveno offline}}.

**BimCraft se otevřel offline, ale vypadá zastarale.**
Vaše uložená kopie pochází z dřívější návštěvy. Až budete online, klikněte na {{ui:Připraveno offline}} a vyberte {{ui:Znovu uložit (získat nejnovější verzi)}}.

## 3D pohled

**Model není tam, kde jsem čekal, nebo je malý.**
Stiskněte {{key:F}} nebo klikněte na {{ui:Přizpůsobit}}. Přizpůsobení vždy zarámuje vše v modelu, včetně podlaží, která jste odškrtli, a zbloudilých prvků daleko od budovy, takže budova může vypadat malá. Odtud přibližte.

**Klikání nic nevybírá.**
Při klikání držte myš v klidu: malý tah otáčí. Prvky na odškrtnutých podlažích nelze vybrat. Když je zapnuto {{ui:Prostory}}, průhledné prostory se vybírají před tím, co je uvnitř nich.

**Tlačítko {{ui:Hrany}} je našedlé: „Hrany jsou u velmi velkých modelů vypnuty“.**
Model má více než 1.5 milionu trojúhelníků. Hrany se nechají vypnuté, aby se ušetřila paměť.

**Karta zpomaluje, zbělá nebo ukáže stránku pádu prohlížeče.**
Model je příliš velký pro paměť, kterou prohlížeč kartě dává. Zavřete ostatní karty a načtěte stránku znovu. Exportujte menší IFC: jednu budovu, jednu profesi nebo méně podlaží. Viz [Prohlížeče, zařízení a paměť](topic:platforms).

**3D pohled zůstává prázdný.**
WebGL může být vypnuté nebo blokované. V nastavení prohlížeče zapněte hardwarovou akceleraci (nebo akceleraci grafiky) a prohlížeč restartujte.

## Úpravy IFC

**"Zadejte číslo."** Hodnota je číselná. Napište prosté číslo bez jednotek, například `2.4`.

**"Zadejte celé číslo."** Hodnota je počet nebo celé číslo. Odstraňte desetinná místa.

**"Upravit lze jen vlastnosti s jednou hodnotou."** Seznamy, výčty a množství jsou jen pro čtení.

**{{key:Mod+S}} otevře okno prohlížeče „Uložit stránku“.**
Nejsou žádné neuložené změny, takže BimCraft klávesu přenechal prohlížeči. Zavřete okno.

**{{key:Mod+Z}} nic nedělá.**
Funguje jen tehdy, když máte neuložené změny a nepíšete do pole. Po uložení už není co vracet.

**Seznam {{ui:Změny}} stále ukazuje úpravy poté, co jste je zahodili a otevřeli výkres nebo složku.**
Když na otázku „Zahodit je?“ odpovíte OK a pak otevřete něco jiného než model IFC, staré úpravy zůstanou v paměti a {{ui:Uložit jako IFC}} by je stále uložilo. Chcete-li opravdu začít znovu, otevřete původní IFC znovu, nebo načtěte stránku.

**Moje úprava změnila více prvků, než jsem vybral.**
Změnili jste vlastnost v sadě označené „(typ)“. Vlastnosti typu platí pro každý prvek daného typu. Klikněte na {{ui:Zpět}}. Viz [Změna vlastnosti typu pro každý prvek typu](topic:type-vs-instance).

## Výkresy

**"*name* nelze přečíst. Může být poškozený nebo uložený ve formátu, který čtečka zatím nezpracuje (…)."**
Uložte výkres z programu, který jej vytvořil, jako starší DWG (2018 nebo dřívější) nebo jako DXF, a zkuste to znovu.

**"Tento výkres nemá co zobrazit."** nebo **"*name* je prázdný výkres: neobsahuje čáry, text ani bloky."**
Výkres je prázdný, nebo obsahuje jen věci, které BimCraft zatím nekreslí (viz **Zatím nekresleno** vpravo).

**"Tento výkres je velmi velký; zobrazuje se jen jeho část."**
BimCraft přestal kreslit, aby zůstal svižný. Vypněte vrstvy, které nepotřebujete, nebo otevřete listy, které potřebujete, z menšího výkresu.

**Chybí části listu.**
Propojené výkresy mohou chybět: podívejte se pod **Propojené výkresy** vpravo. Viz [Najít propojené výkresy a obrázky](topic:dwg-linked-files). Vrstvy mohou být také vypnuté: klikněte na {{ui:Vše zapnout}}.

**Obrázek se zobrazuje jako prázdný rámeček.**
Jeho soubor nebyl nalezen, nebo je to TIFF („TIFF nelze v prohlížeči zobrazit“). Přidejte kopii PNG nebo JPEG pomocí {{ui:Přidat obrázky…}}.

**Rolování touchpadem přibližuje místo posunu výkresu.**
Tak výkresy v BimCraftu fungují. Pro posun klikněte a táhněte.

## Stále se nedaří

Přečtěte si [Co ještě není hotovo](topic:not-built-yet): věc, kterou hledáte, nemusí v tomto sestavení existovat.
