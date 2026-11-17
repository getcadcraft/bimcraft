---
title: Čtení projektového nebo rodinného souboru
summary: Otevřete soubor .rvt, .rfa, .rte nebo .rft a přečtěte si jeho vydání, sdílení prací, informace o projektu, parametry rodiny, odkazy a náhledový obrázek, bez programu, který ho vytvořil.
keywords: rvt, rfa, rte, rft, projektový soubor, rodina, vydání, verze, která verze, sestavení, sdílení prací, centrální model, informace o projektu, náhled, miniatura, odkazy
from: df3600e1
---

## Co uděláte

Zjistíte, co je uvnitř projektového nebo rodinného souboru, aniž ho otevřete v Revitu: který program ho uložil, zda je sdílený, informace o projektu a na co odkazuje. Hodí se, když soubor přijde od někoho jiného a potřebujete vědět, v jakém vydání ho otevřít.

## Postup

1. Klikněte na {{ui:Vybrat soubor}}.
2. Vyberte soubor `.rvt`, `.rfa`, `.rte` nebo `.rft`.
3. Počkejte chvíli. Stavový řádek ukazuje "Čtení souboru…" a potom "Otevřeno *název souboru*".
4. Podívejte se nahoru na kartu: náhled uložený v souboru, druh souboru a vydání, ve kterém byl uložen, a název projektu.
5. Posouváním si přečtěte sekce karty.

## Co uvidíte

Karta uprostřed, s těmito sekcemi, pokud je soubor obsahuje:

| Sekce | Co říká |
|---|---|
| Soubor | Název souboru, velikost, druh (projekt, šablona projektu, rodina nebo šablona rodiny), vydání a sestavení, ve kterém byl uložen, sdílení prací, cesta k centrálnímu modelu, kde byl naposledy uložen, kdo ho uložil, jazyk a GUID dokumentu |
| Informace o projektu | Vlastní pole projektu, například název, číslo, zákazník, adresa a stav. Pole, která stále mají výchozí hodnoty nového projektu, se vynechají. |
| Rodina, Rodina: … | U rodiny: její název, kategorie, vydání, poslední aktualizace a její parametry, skupina po skupině |
| Propojené a odkazované soubory | Každý propojený model, CAD odkaz, obrázek a tabulka poznámek, na který soubor odkazuje, s uloženou cestou |

Vlevo panel {{ui:Soubor}} opakuje klíčová fakta a přidává **Přečteno**: kolik souboru BimCraft skutečně přečetl, obvykle asi 40 KB ze souboru o velikosti mnoha megabajtů. Vpravo panel {{ui:Vlastnosti}} říká, že vlastnosti prvků vyžadují 3D model.

## Proč tu není 3D

3D model a prvky uvnitř projektového souboru jsou uloženy v nedokumentovaném formátu. BimCraft čte jen části souboru, které jsou zdokumentované nebo prostě čitelné: informace o souboru, informace o projektu, data rodiny, seznam odkazů a náhledový obrázek. Zbytek nehádá. Chcete-li vidět model ve 3D a číst vlastnosti prvků, exportujte IFC z programu, který soubor vytvořil. Viz [Získání projektového souboru do 3D přes IFC](topic:rvt-to-ifc).

## Časté chyby

- **Očekávání 3D.** Viz výše.
- **Odkazy ukazují jen uloženou cestu.** Soubor otevřený samostatně nemůže ověřit, zda jeho odkazy existují. Otevřete místo toho složku, ve které leží, a BimCraft u každého odkazu označí, zda byl nalezen: [Otevření celé složky projektu](topic:open-project-folder).
- **"This file is incomplete…"** Tento soubor je neúplný: byl přerušen při kopírování, nahrávání nebo synchronizaci. Soubor na cloudovém disku, který je stále „pouze online“, dělá totéž. BimCraft ho přesto otevře a zobrazí jen to, co se podařilo obnovit: oranžový upozorňující pruh nahoře karty, sekci **Obnoveno z tohoto souboru** se seznamem částí, jejichž každý bajt je v souboru, a **Není v souboru** pro zbytek. Chybějící část se nedoplní, takže vydání, náhledový obrázek nebo informace o projektu mohou chybět, pokud byly uloženy za místem přerušení. Pokud byl přerušen i seznam obsahu souboru, nelze nic otevřít. Zkopírujte originál znovu a otevřete ho pro úplný soubor.
- **"V tomto souboru není náhled."** Některé soubory se ukládají bez něj. To je normální.
- **Otevření zálohy omylem.** Soubory pojmenované jako `Tower.0004.rvt` jsou číslované zálohy. Otevření složky je seskupí s jejich modelem.
