---
title: Nechte AI asistenta pracovat s vaším modelem
summary: Zapněte asistenty v Nastavení, aby asistent na vašem počítači mohl najít prvky, přečíst jejich vlastnosti, izolovat je v pohledu a kreslit stěny, dveře, okna, podlahy, podlaží a mřížky přes CadCraft Studio. Dokud je nezapnete, jsou vypnuté.
keywords: ai, asistent, mcp, skript, automatizace, studio, najít prvky, izolovat, vlastnosti, oprávnění, odpojit, aktivita, kreslit stěny, přidat dveře, přidat okna, podlaží, mřížky, podlahy, zpět, uložit, příkazový řádek, cli, bez okna, použít s AI asistenty
from: 66d72742
---

## Co se naučíte

Jak nechat AI asistenta (libovolný asistent, který mluví protokolem MCP) nahlédnout do otevřeného IFC modelu a kreslit v něm, co smí a nesmí, a jak ho zastavit.

## Co asistent může dělat v BimCraft

| Požaduje | Co se stane | Potřebuje |
|---|---|---|
| Najít prvky | Dostane seznam prvků podle třídy, podlaží, názvu nebo hodnoty vlastnosti, stejně jako to dělá **Najít** | Čtení |
| Přečíst vlastnosti | Dostane atributy jednoho prvku, typ, sady vlastností a množství, tak jak je zobrazuje **Vlastnosti** | Čtení |
| Popsat model, vypsat stěny | Dostane podlaží, stěny, dveře, okna, místnosti, podlahy, mřížky a sloupy a u každé stěny její konce, typ a výšku | Čtení |
| Izolovat, zprůhlednit, skrýt nebo zobrazit | Pohled 3D se změní, jako byste použili nabídku {{ui:Zobrazit}} | Změnit pohled a kreslit |
| Kreslit stěny, dveře, okna, podlahy, podlaží nebo osy mřížky | Model se změní, jako byste použili nástroje {{ui:Kreslení}}: stěny se spojí, místnosti, podlahy a střechy se přizpůsobí | Změnit pohled a kreslit |
| Změnit název nebo hodnotu vlastnosti | Název, Popis, Typ objektu nebo Značku jednoho prvku, nebo hodnotu jedné vlastnosti. Hodnota sdílená s dalšími prvky se pro něj nejdřív zkopíruje; hodnota jeho typu se změní jen tehdy, když to asistent řekne, protože každý prvek daného typu ji následuje | Změnit pohled a kreslit |
| Přesunout, smazat, změnit stěny, dveře a okna | Prvky se přesunou nebo smažou spolu s tím, co je hostí; stěny nakreslené nástroji {{ui:Kreslení}} se změní koncem nebo typem, dveře a okna místem, velikostí nebo typem, místnosti a spoje se přizpůsobí | Změnit pohled a kreslit |
| Nastavit, uspořádat a číst tabulku | „Tabulka dveří podle podlaží, s požární odolností a kováním“: asistent pojmenuje tabulku, její sloupce (vlastnost nebo značka se stane sloupcem) a seskupení; BimCraft ji naplní z modelu a rozvrhne, přičemž to, co asistent neuvedl, vezme z kancelářského standardu. Nastavení se připojí k vašemu seznamu Tabulky. Každý řádek, který dostane zpět, pojmenuje své prvky, takže je může vybrat | Čtení pro čtení; Změnit pohled a kreslit pro uložení nastavení |
| Exportovat tabulku | CSV, Excel nebo text oddělený tabulátory pro vložení do Google Sheets (nic se Googlu neodešle) | Export |
| Číst a nastavit povrchové úpravy místností | Typy povrchových úprav, podlahu, stěnu a strop každé místnosti, zóny; plochy, počty dlaždic a objemy podkladu pak vycházejí z tabulek povrchových úprav | Čtení; k nastavení Změnit pohled a kreslit |
| Vybrat prvky, vzít zpět své vlastní kroky | Prvky se vybírají v pohledu; jeho poslední krok se vezme zpět | Změnit pohled a kreslit |
| Uložit | Nový soubor IFC se všemi změnami, jak ho vytvoří {{ui:Uložit jako IFC}} (původní se nikdy nemění) | Uložit |
| Exportovat USD | Otevřené modely jako OpenUSD (.usda, .usdc nebo .usdz), jak je zapíše {{ui:USD}} na panelu nástrojů | Export |
| Vykreslit obrázek, spustit frontu vykreslování | Obrázek 3D pohledu, jak ho vytvoří dialog {{ui:Vykreslit}} s vašimi nastaveními vykreslení, pokud nežádá jiná, nebo kvalitní obrázky přidané do fronty dialogu a vykreslené jeden za druhým (fronta potřebuje WebGPU). Model se nemění ([Vykreslit obrázek](topic:render)) | Export |

Každá změna, kterou asistent provede, je jeden krok v **Změnách** pojmenovaný „Asistent: …“ (například „Asistent: přidat 4 stěny“), takže {{key:Mod+Z}} vezme zpět celou jeho akci a vidíte, čí krok to byl. V okně nemůže otevírat soubory: otevřete model; pracuje s tím, který je otevřený.

## Zapnutí

Asistenti se do BimCraft dostanou přes CadCraft Studio ve vašem počítači; obyčejný prohlížeč k nim cestu nemá.

1. Otevřete {{ui:Nastavení}} a vyberte kartu **BimCraft**.
2. V části **Asistenti** zaškrtněte **Povolit AI asistentům a skriptům používat BimCraft**.
3. **Čtení** je za vás zaškrtnuté. Zaškrtněte také **Změnit pohled a kreslit**, pokud asistent smí izolovat a skrývat prvky a kreslit, a **Uložit**, pokud smí model uložit jako nový soubor.
4. Připojte asistenta v Studiu (Studio ukáže adresu a nastavení, která do něj vložíte).

## Když je asistent připojen

Poznámka nahoře v pravém panelu říká, který asistent je připojen a co smí. Klikněte na {{ui:Odpojit}}, čímž jeho relaci okamžitě ukončíte; aby pokračoval, musí se znovu připojit.

**Aktivita**, pod **Asistenti** v Nastavení, vypisuje každé volání, které asistent provedl, od nejnovějšího, s údajem, zda uspělo.

:::tip
Ptejte se obyčejnými slovy, například „izoluj vnější stěny v podlaží 1“, „které dveře nemají požární odolnost?“ nebo „nakresli místnost 6 × 4 m v podlaží 1 s dveřmi v jižní stěně“. Asistent prvky najde a ukáže je ve vašem pohledu, nebo je nakreslí.
:::

## Bez okna: skripty a příkazový řádek

Stejné kreslicí nástroje fungují na souborech IFC ve složkách, které uvedete, bez otevřeného okna: MCP server a příkazový řádek CadCraft mohou založit novou budovu nebo otevřít soubor IFC, popsat ji, přidat stěny, dveře, okna, podlahy, podlaží a mřížky, vzít zpět a uložit ji jako nový soubor `.ifc`. Čtyři další nástroje se hodí pro skripty: `ifc_batch` spustí až 200 kroků úprav jako jeden celek (vše, nebo nic: jeden krok zpět vezme zpět celou dávku a odmítnutý krok vrátí zpět ostatní a pojmenuje se); `ifc_describe` vypíše podlaží a každou stěnu se svými dveřmi a okny; `ifc_render_png` zapíše plochý kontrolní obrázek modelu (bez materiálů, textur a stínů) bez okna; `usd_export` zapíše `.usda`, `.usdc` nebo `.usdz`. Na příkazovém řádku `cadcraft bim script.json --from model.ifc -o out.ifc` spustí skript kroků a `--usd`, `--png` a `--plan` zapíšou soubor USD, obrázek nebo půdorys z téhož běhu. Vy rozhodujete, které složky smí použít a zda smí cokoli měnit nebo ukládat.

## Vypnutí

Zrušte zaškrtnutí u **Povolit AI asistentům a skriptům používat BimCraft**. Každý asistent se okamžitě odpojí a nastavení se uchová pro příště.

## Viz také

- [Recepty pro AI asistenty](common:assistants-recipes): propracované příklady, každý s nástroji, které volá.
- [Najít prvky podle třídy, názvu nebo vlastnosti](topic:find)
- [Skrýt, izolovat a zprůhlednit prvky](topic:hide-and-isolate)
- [Nastavení BimCraft](topic:settings)
