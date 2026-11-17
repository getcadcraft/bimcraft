---
title: Množství do TakeoffCraft
summary: Jedním kliknutím pošlete množství modelu do TakeoffCraft — stěny podle typu, střechy podle plochy sklonu, hřebeny, nároží a údolí, základy, dveře a okna, skříňky, elektrická zařízení, podlahová plocha a řezný seznam řeziva — vyznačené na půdorysu každého podlaží, s sestavami z balíčků profesí u položek.
keywords: výkaz výměr, odečet množství, kalkulace, odhad, seznam materiálu, kusovník, takeoffcraft, množství, plocha stěn, plocha střechy, čtverce, základová patka, beton, kubické yardy, řezný seznam, řezivo, balíček profese, sestava
from: c5a745af
---

## Co provedete

Proměňte model na seznam materiálu a rozpočet v TakeoffCraft. BimCraft nakreslí půdorys každého podlaží ve standardním měřítku, označí na něm každé množství a vloží výkaz výměr do PDF. TakeoffCraft měří značky sám, takže každé číslo lze zkontrolovat na listu.

## Odeslání

1. Klikněte na {{ui:Odečet množství}} v panelu modelu (vedle {{ui:Listy}}).
2. TakeoffCraft se otevře v nové kartě s půdorysy. Když se zeptá, zvolte, že chcete otevřít výkaz výměr, který našel v PDF.
3. Přidejte své ceny do tabulky množství v TakeoffCraft; sestavy už materiály uvádějí.

:::note
Když TakeoffCraft zde není dostupný, tlačítko místo toho stáhne PDF. Otevřete je později v TakeoffCraft: najde v něm výkaz výměr.
:::

## Co se měří

- **Stěny** podle typu a výšky: jejich osy jako úseky, s výškou stěny u položky, takže TakeoffCraft dá délku a plochu stěny. Každý úsek nese dveře a okna stěny, takže je TakeoffCraft odečte z plochy stěny jednou, podle stejného pravidla jako rozpisy BimCraft: obě strany souhlasí u hrubé plochy, odpočtů i čisté plochy. Podklad výkazu výměr typu stěny (jednotka, malta, sazba; viz [Sestavy stěn](topic:wall-assemblies)) přichází jako jeden oceněný řádek u položky tohoto typu. Při jiné metodě měření, než je výchozí (viz [Volba metody měření](topic:plan-schedules-and-pdf#choose-a-measurement-method)), výkaz nese metodu, každý úsek nese to, co styky odečtou z líce stěny, a TakeoffCraft měří touto metodou a pojmenuje ji. Typ, jehož jednotka má délku a výšku, předá dvě složky s množstvím: jednotky k objednání a objem malty, oceněné, je-li sazba typu za jednotku, za 1000 jednotek nebo za m³ malty. Počet, který přesně vychází na celé číslo, může být v TakeoffCraft o jednotku vyšší, protože předání zaokrouhluje pozice na listu.
- **Střechy**: každá rovina střechy jako plocha s jejím sklonem (TakeoffCraft dá plochu sklonu), hřebeny, nároží a údolí (nároží a údolí podél jejich sklonu), okapy a štíty.
- **Základy**: patky a obvodové stěny základů jako úseky po jejich středech, desky jako plochy s jejich tloušťkou, takže beton vyjde podle objemu.
- **Dveře a okna** počítané podle typu, s okenními lištami.
- **Spodní skříňky** podle délky jejich čel.
- **Elektrická zařízení** počítaná podle druhu.
- **Podlahová plocha** každého podlaží z jeho místností.
- **Řezný seznam řeziva** z konstrukce, počítaný na vlastním listu (jedna tečka za kus).

Tam, kde balíček profese má odpovídající sestavu — vnější a vnitřní stěny, desky, patky, obvodové stěny základů, šindele, hřebenová a nárožní krytina, údolí, okapy, vnitřní dveře, okenní lišty, spodní skříňky, zásuvky, vypínače, svítidla, rozvodné krabice a rozvaděč — položka přichází se svými materiály a vzorci. Balíčky přicházejí bez cen a zatím je neprověřil žádný rozpočtář.

:::tip
Půdorysy se vytvářejí z modelu pokaždé, když kliknete, takže po změně stačí znovu kliknout na {{ui:Odečet množství}}.
:::
