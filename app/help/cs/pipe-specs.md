---
title: Specifikace potrubí, armatury, klapky a rodiny výrobců
summary: Nastavte si vlastní specifikace potrubí (tabulky velikostí s materiálem, spojem a drsností), uložené v souboru modelu; na trasy umisťujte armatury, filtr a klapky; a vložte model armatury nebo zařízení výrobce jako rodinu s připojovacími body.
keywords: specifikace potrubí, specifikace rozvodů, třída potrubí, vlastní potrubí, tabulka velikostí, trubka, hygienická trubka, nerez, rozpis, vnější průměr, tloušťka stěny, vnitřní průměr, drsnost, jmenovitý tlak, csv, json, import, export, tabulka, norma, bpe, din, en 10357, en 10255, armatura, armatury, motýlková armatura, vyvažovací armatura, regulační armatura, filtr, klapka, objemová klapka, požární klapka, oem, výrobce, rodina, rodiny, body, připojení, step, obj, gltf, ifc, radiátor, konvektor, panelové topidlo, vzduchotechnická jednotka, difuzor, mřížka
from: bc2f7c4e
---

## Co uděláte

Kreslete potrubí podle vlastní specifikace místo vestavěných tabulek pro ocel, měď a plasty, umisťujte armatury a klapky na trasy a vložte model výrobce s body, ke kterým se potrubí napojí.

:::note
Pomůcka pro kreslení a koordinaci. Specifikace potrubí obsahuje čísla, která zadáte nebo naimportujete: každou tabulku ověřte podle vašeho projektového standardu. Vestavěné armatury, filtry a klapky jsou schématické tvary dimenzované podle trasy, nejde o délky podle katalogu výrobce ani podle normy pro armatury.
:::

## Nastavení specifikace potrubí

1. Zapněte {{ui:Kreslení}}, otevřete {{ui:Sestavení}} a zvolte {{ui:Specifikace potrubí}}. Stejné tlačítko je na liště nástroje {{ui:Potrubí}}.
2. Zvolte {{ui:Nové}}, nebo začněte ze souboru, vložení či výchozí specifikace (viz níže).
3. Zadejte její název, normu nebo referenci, které se řídí, materiál a typ konce nebo spoje.
4. Zadejte jeden řádek pro každou velikost: název velikosti, vnější průměr a stěnu v milimetrech. Pokud máte místo stěny vnitřní průměr, zadejte ten: druhý údaj se doplní. DN, jmenovitý tlak a hmotnost jsou volitelné.
5. Volitelně: drsnost v milimetrech (výpočet tlakové ztráty ji používá), tloušťku izolace, se kterou nové trasy začínají, poloměr kolena jako násobek vnějšího průměru, zda specifikace obsahuje odbočky a redukce, a vlastní barvu ve 3D.
6. Zaškrtněte služby, jejichž nové trasy mají začínat v této specifikaci, například chlazenou vodu.
7. Zvolte {{ui:Uložit do modelu}}.

Specifikace se ukládají do souboru modelu. Každý, kdo soubor otevře, je má k dispozici, a {{ui:Zpět}} změnu vrátí.

Specifikaci ani její velikost nelze smazat, dokud je v ní nakreslena trasa. Změna čísel velikosti překreslí trasy v této velikosti.

## Opětovné použití specifikace v jiném modelu

- {{ui:Exportovat .json}} uloží vybranou specifikaci jako malý soubor; {{ui:Exportovat vše}} uloží všechny specifikace modelu. {{ui:Importovat soubor}} je načte zpět.
- {{ui:Exportovat .csv}} uloží tabulku velikostí pro tabulkový procesor. {{ui:Importovat soubor}} načte i soubor `.csv`.
- {{ui:Vložit řádky}} převezme tabulku zkopírovanou z tabulkového procesoru. První řádek pojmenovává sloupce: `Size`, `OD` a `Wall` (nebo `ID`) a volitelně `DN`, `Pressure`, `Weight`. Jeden řádek pro každou velikost. Čísla jsou v milimetrech, pokud nezvolíte palce nebo buňka neuvede svou jednotku (`0.065 in`).

## Výchozí specifikace

{{ui:Přidat výchozí specifikaci}} přidá do modelu jednu z těchto specifikací jako kopii, kterou můžete upravit:

| Výchozí specifikace | Velikosti |
|---|---|
| Trubka ASME BPE | 1/4" až 6" |
| Trubka EN 10357, řada A (DIN 11850, řádek 2) | DN10 až DN200 |
| Ocelová trubka EN 10255, střední řada | DN15 až DN150 |
| Ocelová trubka EN 10255, těžká řada | DN15 až DN125 |

Tyto tabulky jsou vnější průměry a stěny, které dvě nebo více publikovaných stránek dodavatelů uvádí pro danou normu a shodují se na nich. Nejsou převzaty z normy samotné. Velikosti, které uvedla jen jedna stránka, jsou vynechány. U každé výchozí specifikace jsou uvedeny zdrojové stránky a je označena „ověřte podle vašeho projektového standardu“ (check against your project standard). Nejsou uvedeny žádná drsnost, jmenovitý tlak ani hmotnost.

## Nakreslení trasy ve specifikaci

1. Zvolte {{ui:Potrubí}}. Služba, kterou jste zaškrtli ve specifikaci, v ní začne. U jiné trasy vyberte specifikaci v seznamu materiálů: specifikace jsou uvedeny za vestavěnými materiály jako „Specifikace: název“.
2. Seznam velikostí nyní obsahuje jen velikosti této specifikace. Vyberte jednu a nakreslete trasu.

Chcete-li trasu přesunout do specifikace později, vyberte ji a v {{ui:Vlastnosti}} změňte **Materiál**. Její velikost se změní na nejbližší velikost specifikace podle vnějšího průměru.

V souboru IFC nese potrubí název, normu, materiál, spoj a rozměry specifikace (`CadCraft_PipeSpec` a `Pset_PipeSegmentTypeCommon`, na potrubí i na jeho typu).

Výpočty dimenzování a tlakové ztráty čtou vnitřní průměr specifikace. Pokud má specifikace drsnost, třecí ztráta trasy se počítá s ní (Darcy-Weisbach); bez ní se použije obvyklá výchozí hodnota výpočtu.

## Armatury, filtr a klapky

1. Zvolte {{ui:Armatura}} a v liště vyberte druh: šoupátko, kulový kohout, motýlkový ventil, globusový ventil, zpětný ventil, vyvažovací nebo regulační ventil, případně filtr pro potrubí; objemovou nebo požární klapku pro vzduchovody.
2. Klikněte na trasu, kam má armatura patřit. Trasa se kolem ní přeruší a obě strany zůstanou propojené. Armatura převezme velikost trasy a pohybuje se s ní.

V {{ui:Vlastnosti}} trasy je u každé armatury tlačítko {{ui:Odebrat}}; trasa se znovu spojí.

Výpočet tlakové ztráty počítá ztrátu tvarovky pouze u šoupátek, kulových kohoutů, globusových a zpětných ventilů. Ostatní druhy, klapky a rodiny výrobců tam žádnou ztrátu nepřidávají: zohledněte je ve své vlastní kontrole. Počítají se v rozpisu **Tvarovky a armatury** a v odečtu množství a do IFC se zapisují jako armatury, filtr (sítko) a klapky se dvěma připojenými body.

## Model výrobce jako rodina

1. Otevřete {{ui:Sestavení}} a zvolte {{ui:Rodiny}}, poté {{ui:Importovat model}}. Čtou se soubory IFC, STEP, OBJ, STL, glTF a položky knihovny. U souborů OBJ a STL nejdříve nastavte jednotky a osu nahoru.
2. V dialogu připojovacích bodů zadejte název, výrobce a číslo modelu.
3. Zvolte, zda bude **Na trase** (armatura, filtr nebo klapka), nebo **Zařízení**, a jak se zapíše.
4. Zadejte jeho body. Každý má název, potrubí nebo vzduchovod, službu, velikost v milimetrech (vnější průměr u potrubí), jmenovitou velikost podle vaší specifikace, typ konce, polohu a směr, kterým je otočen. {{ui:Na stěně}} umístí bod doprostřed plochy krabice modelu. Malý pohled shora body zobrazuje.
5. Zvolte {{ui:Uložit rodinu do modelu}}.

Rodina, která patří na trasu, potřebuje právě dva body, které směřují od sebe na jedné přímce. Vyberte ji v seznamu nástroje {{ui:Armatura}} a klikněte na trasu: umístí se v její vlastní délce a potrubí se napojí na její body.

Rodina se nikdy nenatahuje. Pokud její body neodpovídají velikosti trasy, při umístění vás na to upozorní a {{ui:Zkontrolovat připojení}} ji uvede v seznamu.

Rodinu zařízení umístíte pomocí {{ui:Zařízení}}, druh **Rodina výrobce**. Potrubí a vzduchovody se k jejím bodům přichytávají.

{{ui:Stáhnout jako položku knihovny}} uloží rodinu i s jejími body jako soubor, který můžete odeslat do knihovny.

## Radiátory a konvektory

{{ui:Zařízení}} má také **Radiátor** a **Konvektor / panelové topidlo**: obecná tělesa s přívodním a zpětným připojením pro topnou vodu. Viz [Zařízení MEP s body](topic:mep-equipment).
