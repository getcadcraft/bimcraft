---
title: Měření vzdáleností, ploch stěn a poloh v 3D
summary: Měřte mezi dvěma body modelu IFC s přichytáváním k rohům a hranám, čtěte rozdíl podél X, Y a Z a měřte plochu rovné stěny.
keywords: měření, délka, vzdálenost, kóta, plocha, plocha stěny, přichycení, roh, hrana, pásmo, pravítko, volná vzdálenost, poloha, zeměpisná šířka, zeměpisná délka, souřadnice, georeference, převod na mapu, EPSG, zaměření, souřadnice Y, souřadnice X, WGS 84, datum
from: 5f430bba
---

## Co uděláte

Zkontrolujte volnou vzdálenost, délku stěny nebo velikost plochy přímo z modelu, aniž byste otevírali autorský program.

## Kroky

1. Otevřete model IFC.
2. Klikněte na {{ui:Měřit}} v panelu nástrojů, nebo stiskněte {{key:M}}. Ve spodní části pohledu se otevře lišta.
3. **Vzdálenost:** když je zvolena {{ui:Vzdálenost}}, klikněte na první bod a pak na druhý. Poblíž rohu se kurzor přichytí k němu, poblíž hrany na hranu; malý popisek u kurzoru říká, která. Každé dva kliknutí tvoří jedno měření.
4. **Plocha stěny:** zvolte {{ui:Plocha stěny}} a klikněte na plochu. Celá rovná plocha se rozsvítí a ukáže se její plocha.
5. **Přímé čáry:** podržte {{key:Shift}} při výběru druhého bodu, nebo stiskněte {{ui:Přímá}} na liště, abyste to udrželi. Čára pak vede podél jedné osy, k níž je kurzor nejblíž (v půdorysném pohledu podél X nebo Y půdorysu; v ostatních pohledech podél X, Y nebo Z), a popisek kurzoru říká "přímo podél osy". {{key:M}} stále spouští a zastavuje Měřit.
6. Klikněte na {{ui:Vymazat}} pro odstranění měření, nebo na {{ui:Hotovo}} (nebo {{key:Esc}}) pro ukončení měření.

## Co byste měli vidět

- Čáru mezi oběma body s její délkou na ní a na liště délku spolu s tím, jak daleko vede podél X, Y a Z (v osách modelu, Z nahoru), vše v {{ui:Jednotky}} zvolených na panelu nástrojů.
- Plochu stěny ve čtverečních metrech, na ploše i na liště.
- Popisky zůstávají u svých měření, když otáčíte, posouváte a přibližujete pohled.
- Při měření kliknutí nevybírají prvky. Řezná rovina nebo řezný box stále řeže model a můžete měřit to, co ukazuje, včetně řezných ploch.

## Kde je bod na Zemi

Klikněte na {{ui:Poloha}} na liště měření a pak klikněte na bod modelu (přichytává se k rohům a hranám jako u vzdáleností). Lišta ukáže:

- **zeměpisnou šířku a délku** ve desetinných stupních i ve stupních, minutách a sekundách, ve WGS 84 jako výchozím;
- **souřadnice mapy** (souřadnice Y a X, psané v {{ui:Jednotky}} zvolených na panelu nástrojů) v mapovém systému modelu, například `EPSG:28356`;
- **výšku** a svislé datum, které soubor uvádí, a **vlastní datum** souboru (například GDA94).

{{ui:Kopírovat}} vloží vše na schránku v jednom řádku. Systém, v němž jsou zeměpisná šířka a délka, změníte v {{ui:Nastavení}} › {{ui:BimCraft}} › {{ui:Poloha}}: WGS 84 (jako GPS a webové mapy), vlastní datum souboru, nebo jiný běžný, například ETRS89 nebo NAD83.

Toto vyžaduje model s georeferencí: takový, který byl exportován se souřadnicemi mapy (převod na mapu do projektovaného systému s kódem EPSG). Model, který má jen zeměpisnou šířku a délku lokality, dostane přibližnou polohu odvozenou z bodu lokality a jejího skutečného severu, a lišta to řekne. Když je otevřeno více modelů, každý bod používá georeferenci svého vlastního modelu.

:::note
Přechod mezi daty (například z GDA94 na WGS 84) se provádí bez mřížkových souborů, takže je přesný na několik metrů; stavový řádek říká, jak přesný. Samotné souřadnice mapy jsou přesné.
:::

## Časté chyby

- **"…nemá georeferenci."** Soubor nemá převod na mapu ani zeměpisnou šířku a délku lokality. Exportujte ho znovu s nastaveným souřadnicovým systémem (sdílené souřadnice / bod zaměření v autorském nástroji).
- **Souřadnice mapy, ale žádná zeměpisná šířka a délka.** Soubor pojmenovává svůj mapový systém bez kódu EPSG, nebo s kódem, který není v seznamu; stavový řádek říká, který.

- **Bod dopadne na plochu, ne na roh.** Přichytávání se dívá na prvek pod kurzorem. Přibližte se k rohu nebo přiblížte pohled.
- **Plocha je menší, než jste čekali.** Otvory se nezapočítávají a ohnutá plocha je několik ploch: klikněte na každou.
- **{{key:Esc}} zastavil měření.** První {{key:Esc}} zahodí rozpracovanou vzdálenost; druhý měření ukončí.

## Dál

- [Řez modelem IFC řeznou rovinou](topic:section-plane)
- [Skrytí, izolace a průhled prvků](topic:hide-and-isolate)
