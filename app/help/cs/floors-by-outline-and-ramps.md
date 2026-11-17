---
title: Podlahy libovolného tvaru, otvory a rampy
summary: Nakreslete podlahu nebo desku podle jejího obrysu (balkon, konzola, podesta), vyřízněte v ní otvory a nakreslete rampy s jejich podestami.
keywords: podlaha, deska, obrys, balkon, konzola, podesta, terasa, otvor v podlaze, díra, šachta, prázdný prostor, rampa, sklon, přístupná rampa, invalidní rampa, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Co uděláte

Vytvořte podlahy, které se neřídí místnostmi, například balkon za stěnami, a nakreslete rampy mezi úrovněmi.

## Nakreslete podlahu podle jejího obrysu

1. Zapněte {{ui:Kreslení}}, zvolte úroveň, pak {{ui:Sestavení}} › {{ui:Podlaží podle obrysu}}.
2. V řádku pod nástroji zvolte druh (betonová deska, nebo dřevěná podlaha), jeho použití (podlaha, nebo podesta), tloušťku a o kolik je její horní hrana nad úrovní (0 = v úrovni podlahy podlaží; záporná hodnota ji nastaví níž).
3. Klikejte na rohy. Nástroj přichytává ke stěnám, osám mřížky a jejich křížením; podržte {{key:Shift}}, chcete-li držet hranu kolmo. Délka každé hrany a plocha se zobrazují průběžně. {{key:Backspace}} vrátí poslední roh.
4. Klikněte znovu na první roh, dvakrát klikněte, nebo stiskněte {{key:Enter}} pro dokončení.

## Vyřízněte otvor

Klikněte na podlahu (ve 3D pohledu, nebo na její obrys v půdorysu), pak v {{ui:Vlastnosti}} klikněte na {{ui:Přidat otvor}} a klikněte na rohy otvoru uvnitř podlahy; dokončete stejně jako výše. Seznam {{ui:Vlastnosti}} podlahy uvádí její otvory, každý s {{ui:Smazat}}, a její plochu bez nich.

## Nakreslete rampu

1. Zvolte {{ui:Sestavení}} › {{ui:Rampa}}. Nastavte její šířku a zda vede **do úrovně nad** nebo **nahoru o výškový rozdíl**, který zadáte.
2. Zvolte, jak se nastaví: **podle sklonu** (zpočátku 1:12; rampa je tak dlouhá, jak výškový rozdíl vyžaduje), nebo **podle délky** (váš druhý klik určí délku a sklon se podle ní řídí).
3. Klikněte na patu rampy (střed její spodní hrany) a pak klikněte směrem nahoru. Náhled ukazuje její délku, ramena a sklon.

Výškový rozdíl větší než 30 palců (760 mm) se rozdělí na ramena s podestou 5 stop (1525 mm) mezi nimi. Jde o běžné plánovací hodnoty, nikoli o vaši normu: ověřte předpisy platné na místě stavby. Rampa strmější než 1:12 je označena ve svých {{ui:Vlastnostech}}.

## Co uvidíte

- Každá podlaha, otvor a rampa je jeden krok: {{key:Mod+Z}} ji vrátí zpět.
- V půdorysu obrys nakreslené podlahy (otvor je překřížen) a obrys rampy, její ramena, podesty a šipka nahoru s jejím sklonem.
- Vlastnosti nakreslené podlahy (druh, použití, tloušťka, horní hrana, plocha, otvory) a rampy (šířka, horní hrana, výškový rozdíl, sklon nebo délka); {{key:Delete}} odstraní obojí.
- Rampa do úrovně nad se řídí touto úrovní, když se změní její výška.
- V souboru IFC: nakreslená podlaha je deska (IfcSlab, podlaha nebo podesta) s vyříznutými otvory (IfcOpeningElement); rampa je IfcRamp složená z šikmých ramen (IfcRampFlight) a desek podest, s jejím sklonem a šířkou.

:::note
Podlahy nakreslené tímto způsobem zůstávají tam, kde jste je nakreslili. Podlahy vytvořené pomocí {{ui:Podlaha}} se přizpůsobují místnostem, když se stěny posunou: viz [Místnosti, podlahy, stropy a střechy](topic:floors-and-roofs).
:::
