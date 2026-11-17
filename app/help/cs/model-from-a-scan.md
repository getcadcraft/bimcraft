---
title: Model ze skenu
summary: Krátký postup od laserového skenu ke stěnám: otevřete mračno bodů vedle nové budovy, zarovnejte ho s úrovní a obtáhněte jeho stěny na půdorysu.
keywords: sken, laserový sken, mračno bodů, skutečné provedení, stávající budova, zaměření, obtahování, sken do BIM, model ze skenu, řez, zarovnat, kolmo, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Co uděláte

Nakreslíte existující budovu podle jejího laserového skenu: stěny tam, kde je sken ukazuje, na správné úrovni a kolmo k sobě.

## Postup

1. **Budova, do které budete kreslit.** {{ui:Soubor}} › {{ui:Nová budova}}, s tolika úrovněmi, kolik budova má (úrovně můžete přidat později, viz [Pozemek, budova na něm a její úrovně](topic:site-building-and-levels)). {{ui:Kreslení}} se zapne.
2. **Sken.** {{ui:Zobrazit}} › {{ui:Mračno bodů}} a vyberte soubor (LAS, LAZ, E57, PLY, PCD, PTX nebo XYZ: viz [Zobrazení mračna bodů vedle modelu](topic:point-clouds)). Mračno se ukáže v 3D pohledu a půdorys ukáže jeho **řez**: naskenované body 1200 mm (4 stopy) nad úrovní, jako tečky. To je výška, kde se stěny, dveře a okna čtou nejlépe.
3. **Zarovnání s úrovní.** Otevřete nabídku {{ui:Sken}} na liště modelu a klikněte na {{ui:Zarovnat jeho podlahu k tomuto podlaží}}: mračno se posune nahoru nebo dolů, dokud podlaha, kterou sken zachytil, neleží na zobrazené úrovni. Zkontrolujte, že řez teď protíná stěny.
4. **Kolmo k budově.** {{ui:Sken}} › {{ui:Natočit kolmo k budově}} natočí mračno tak, aby stěny v jeho řezu ležely podél os půdorysu. Stěny, které nakreslíte s podrženou klávesou {{key:Shift}}, pak sedí na sken. Otáčí se kolem středu nalezených stěn, takže stromy nebo sousední stěna zachycené v řezu sken neodkloní. Nejdřív zarovnejte podlahu: řez pak protíná stěny.
5. **Obtáhněte stěny.** Zvolte {{ui:Stěna}} a klikejte podél teček: nástroj přichytává k naskenovaným bodům (značka uchycení je malý kosočtverec) i ke stěnám, které jste nakreslili. Stěna se kreslí na střední čáře, takže klikejte doprostřed dvou řad teček, které stěna zanechává. Tloušťku zadejte tak, že nejdřív zvolíte typ stěny. Pak přidejte dveře a okna tam, kde řez ukazuje mezery.
6. **Další úroveň.** Zvolte úroveň nad ní v seznamu úrovní na půdorysu: řez se řídí výškou řezu dané úrovně. Podlahu znovu zarovnávejte s touto úrovní jen tehdy, když podlaží skenu nejsou tam, kde jsou vaše úrovně.

## Co byste měli vidět

- Řez se mění, když měníte úroveň, a silnější řez ({{ui:Sken}} › {{ui:Tloušťka řezu}}) ukáže více bodů tam, kde je sken řídký.
- {{ui:Sken}} › {{ui:Vrátit zarovnání}} vrátí mračno tam, kde bylo při otevření. Zarovnání posouvá mračno jen v pohledu: neukládá se do souboru IFC a stěny, které jste nakreslili, zůstanou na místě. Zarovnání se přenese s mračnem, když změníte {{ui:Umístit}} nebo {{ui:Jednotky}}, nebo když otevřete jiný model.
- {{ui:Sken}} › {{ui:Zobrazit řez na půdorysu}} tečky skryje, nebo ukáže.

:::tip
Velké skeny: půdorys kreslí až 60 000 bodů řezu a 3D pohled několik milionů bodů celého mračna, obojí rovnoměrně vybraných napříč skenem, takže velký soubor zůstane rychlý. Chcete-li trasovat v kreslicí aplikaci, použijte na liště mračna {{ui:Trasovat v CadCraft}}.
:::
