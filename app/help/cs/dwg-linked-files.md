---
title: Vyhledání propojených výkresů a obrázků
summary: Zobrazte propojené výkresy (externí reference, neboli xref) a obrázky v razítku, otevřením jejich složky nebo přidáním souborů ručně.
keywords: xref, externí reference, propojený výkres, připojit, překrytí, obrázek, logo, razítko, chybějící xref, etransmit, správce referencí
from: 5593d4b1
---

## Co uděláte

Udělejte výkres úplným: zobrazte výkresy, na které odkazuje (externí reference, neboli xref), a obrázky, které používá, například logo v razítku.

## Snadný postup: otevřete složku

1. Klikněte na {{ui:Otevřít složku}} a vyberte složku, která obsahuje výkres a jeho odkazy, například celou složku `Cad` projektu.
2. V přehledu složky přejděte k **Výkresy CAD**.
3. Klikněte na výkres.
4. Podívejte se na panel {{ui:Vlastnosti}} vpravo, pod **Propojené výkresy** a **Obrázky**.

BimCraft hledá každý propojený výkres podle jeho názvu („*název*.dwg“), nejdřív ve stejné složce jako výkres, pak kdekoli ve složce, kterou jste otevřeli. Obrázky se hledají stejně, a také podle podobného názvu: export z eTransmit nebo Revitu často přidá název projektu na začátek, takže `logo.png` se najde jako `Tower-logo-5425051.png`.

## Druhý postup: přidejte soubory ručně

1. Otevřete výkres samotný.
2. Vpravo, pod **Propojené výkresy**, klikněte na {{ui:Přidat propojené výkresy…}}. Pod **Obrázky** je tlačítko {{ui:Přidat obrázky…}}; obě otevřou stejný výběr.
3. Vyberte propojené soubory `.dwg` a soubory obrázků. Můžete vybrat několik najednou.
4. Počkejte, než BimCraft výkres znovu otevře s nimi.

## Co byste měli vidět

Každý propojený výkres a obrázek je uveden se štítkem:

| Štítek | Znamená |
|---|---|
| **Zobrazeno** | Nalezeno a vykresleno. Cesta pod ním říká, odkud pochází, nebo „přidáno vámi“. |
| **Zobrazeno, podobný název** | Obrázek nalezený podle podobného názvu. Zkontrolujte, že je to správný. |
| **Nenalezeno** | Není ve složce ani v souborech, které jste přidali. Chybějící obrázek se ukáže jako prázdný rámeček. |
| **TIFF nelze zobrazit v prohlížeči** | Obrázek je soubor TIFF, který prohlížeče nekreslí. Uložte jej jako PNG se stejným názvem a přidejte. |
| **Nelze přečíst** | Soubor byl nalezen, ale nelze jej otevřít jako obrázek. |

Panel {{ui:Výkres}} vlevo u propojených výkresů ukazuje „*n* z *m* načteno“. Vrstvy propojených výkresů se objeví v {{ui:Vrstvy}} jako „*název odkazu*|*vrstva*“.

## Časté chyby

- **Otevření jen výkresu.** „Tento výkres ukazuje jen svůj vlastní obsah, dokud nejsou přidány jeho propojené výkresy. Otevření celé složky projektu je najde automaticky.“
- **Otevření příliš malé složky.** Pokud jsou odkazy ve vedlejší složce, otevřete nadřazenou složku.
- **Přejmenované odkazy.** BimCraft páruje propojené výkresy podle názvu. Odkaz přejmenovaný na disku se nenajde; přidejte jej ručně.
- **Odkazy na odkazy.** BimCraft načte výkresy, na které otevřený výkres odkazuje. Výkresy propojené uvnitř nich se nehledají, takže se v této verzi obvykle nezobrazí.
