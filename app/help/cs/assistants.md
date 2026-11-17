---
title: Nechte AI asistenta pracovat s vaším modelem
summary: Zapněte asistenty v Nastavení, aby asistent ve vašem počítači mohl najít prvky, přečíst jejich vlastnosti, izolovat je v pohledu a kreslit stěny, dveře, okna, podlaží, úrovně a osy přes CadCraft Studio. Vypnuto, dokud je nezapnete.
keywords: ai, asistent, mcp, skript, automatizace, studio, najít prvky, izolovat, vlastnosti, oprávnění, odpojit, aktivita, kreslit stěny, přidat dveře, přidat okna, úrovně, osy, podlaží, zpět, uložit, příkazový řádek, cli, bez okna, použití s AI asistenty
from: c5ee595b
---

## Co se naučíte

Jak nechat AI asistenta (kteréhokoli, který mluví MCP) nahlédnout do otevřeného modelu IFC a kreslit v něm, co smí a nesmí dělat, a jak ho zastavit.

## Co asistent může v BimCraftu dělat

| Požaduje | Co se stane | Potřebuje |
|---|---|---|
| Najít prvky | Dostane seznam prvků podle třídy, podlaží, názvu nebo hodnoty vlastnosti, jako to dělá **Najít** | Číst |
| Přečíst vlastnosti | Dostane atributy jednoho prvku, typ, sady vlastností a množství, tak jak je zobrazuje **Vlastnosti** | Číst |
| Popsat model, vypsat stěny | Dostane podlaží, stěny, dveře, okna, místnosti, podlahy, osy a sloupy, a u každé stěny její konce, typ a výšku | Číst |
| Izolovat, průhled, skrýt nebo zobrazit | 3D pohled se změní, jako byste použili nabídku {{ui:Zobrazit}} | Měnit pohled a kreslit |
| Kreslit stěny, dveře, okna, podlahy, úrovně nebo osy | Model se změní, jako byste použili nástroje {{ui:Kreslení}}: stěny se spojí, místnosti, podlahy a střechy se přizpůsobí | Měnit pohled a kreslit |
| Změnit název nebo hodnotu vlastnosti | Název, popis, typ objektu nebo označení jednoho prvku, nebo jedna hodnota vlastnosti. Hodnota sdílená s jinými prvky se pro něj nejprve zkopíruje; hodnota jeho typu se změní jen tehdy, když to asistent řekne, protože každý prvek daného typu ji následuje | Měnit pohled a kreslit |
| Přesunout, smazat, změnit stěny, dveře a okna | Prvky se přesunou nebo smažou spolu s tím, co nesou; stěny nakreslené nástroji {{ui:Kreslení}} se změní koncem nebo typem, dveře a okna místem, velikostí nebo typem, a místnosti a spoje se přizpůsobí | Měnit pohled a kreslit |
| Nastavit, uspořádat a přečíst rozpis | "Rozpis dveří po podlažích s požární odolností a kováním": asistent pojmenuje rozpis, jeho sloupce (vlastnost nebo označení se stane sloupcem) a seskupení; BimCraft ho naplní z modelu a rozvrhne, a co asistent neuvedl, převezme z firemního standardu. Nastavení se připojí k vašemu seznamu Rozpisů. Každý řádek, který asistent dostane zpět, uvádí své prvky, takže je může vybrat | Číst pro čtení; měnit pohled a kreslit pro uložení nastavení |
| Exportovat rozpis | CSV, Excel nebo text oddělený tabulátory, který vložíte do Google Sheets (nic se neodesílá Googlu) | Export |
| Číst a nastavovat povrchové úpravy místností | Typy povrchových úprav, podlahu, stěny a strop každé místnosti, zóny; plochy, počty dlaždic a objemy podkladu pak vycházejí z rozpisů povrchových úprav | Číst; k nastavení měnit pohled a kreslit |
| Vybrat prvky, vrátit vlastní krok zpět | Prvky se vybírají v pohledu; jeho poslední krok se vrátí | Měnit pohled a kreslit |
| Uložit | Nový soubor IFC se všemi změnami, jak jej vytvoří {{ui:Uložit jako IFC}} (původní soubor se nikdy nemění) | Uložit |
| Exportovat USD | Otevřené modely jako OpenUSD (.usda, .usdc nebo .usdz), jak je zapíše {{ui:USD}} na panelu nástrojů | Export |
| Vykreslit obrázek, spustit frontu vykreslení | Obrázek 3D pohledu, jak jej vytvoří dialog {{ui:Vykreslit}} s vaším nastavením vykreslení, pokud nepožádá o jiné, nebo kvalitní obrázky přidané do fronty dialogu, vykreslené jeden za druhým (fronta potřebuje WebGPU). Model se nemění ([Vykreslení obrázku](topic:render)) | Export |

Každá změna, kterou asistent provede, je jeden krok v **Změnách**, pojmenovaný "Asistent: …" (například "Asistent: přidat 4 stěny"), takže {{key:Mod+Z}} vrátí celou jeho akci a vidíte, čí krok to byl. V okně nemůže otevírat soubory: otevřete model vy a pracuje s tím, který je otevřený.

## Zapněte to

Asistenti se k BimCraftu dostanou přes CadCraft Studio ve vašem počítači; obyčejný prohlížeč k nim nemá přístup.

1. Otevřete {{ui:Nastavení}} a zvolte záložku **BimCraft**.
2. V části **Asistenti** zaškrtněte **Povolit AI asistentům a skriptům používat BimCraft**.
3. **Číst** je zaškrtnuto za vás. Zaškrtněte také **Měnit pohled a kreslit**, pokud asistent smí izolovat a skrývat prvky a kreslit, a **Uložit**, pokud smí model uložit jako nový soubor.
4. Připojte asistenta v Studiu (Studio ukáže adresu a nastavení, která do něj vložíte).

## Když je asistent připojen

Poznámka nahoře v pravém panelu říká, který asistent je připojen a co smí. Klikněte na {{ui:Odpojit}}, chcete-li jeho relaci ukončit okamžitě; aby pokračoval, musí se znovu připojit.

**Aktivita**, pod **Asistenti** v Nastavení, vypisuje každé volání, které asistent provedl, od nejnovějšího, a zda se povedlo.

:::tip
Ptejte se obyčejnými slovy, například "izoluj vnější stěny na Level 1", "které dveře nemají požární odolnost?" nebo "nakresli místnost 6 × 4 metry na Level 1 s dveřmi v jižní stěně". Asistent prvky najde a ukáže je ve vašem pohledu, nebo je nakreslí.
:::

## Bez okna: skripty a příkazový řádek

Stejné nástroje pro kreslení fungují na souborech IFC ve složkách, které pojmenujete, bez otevřeného okna: MCP server a příkazový řádek CadCraftu mohou založit novou budovu nebo otevřít soubor IFC, popsat jej, přidat stěny, dveře, okna, podlahy, úrovně a osy, vrátit krok zpět a uložit jej jako nový soubor `.ifc`. Vy rozhodujete, které složky smí použít a zda smí cokoli měnit nebo ukládat.

## Vypněte to

Odškrtněte **Povolit AI asistentům a skriptům používat BimCraft**. Každý asistent se hned odpojí a nastavení se uchová na příště.

## Viz také

- [Postupy pro AI asistenty](common:assistants-recipes): ukázky, každá s nástroji, které volá.
- [Najděte prvky podle třídy, názvu nebo vlastnosti](topic:find)
- [Skrytí, izolace a průhled prvků](topic:hide-and-isolate)
- [Nastavení BimCraftu](topic:settings)
