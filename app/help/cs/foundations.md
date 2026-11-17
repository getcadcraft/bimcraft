---
title: Základy pod stěnami
summary: Jedním kliknutím dejte pod budovu desku na terénu, obvodové stěny se základovou deskou, prolézací prostor nebo suterén; patky se navrhují podle stěn a počtu podlaží a základ se přizpůsobí, když se stěny posunou.
keywords: základ, patka, deska na terénu, zesílená hrana, monolitická deska, obvodová stěna základu, prolézací prostor, suterén, stěna suterénu, mráz, beton, šířka patky
from: c0e20172
---

## Co uděláte

Dejte budově základ, který odpovídá jejím stěnám. BimCraft sleduje vnější stranu stěn, navrhuje patky podle typu stěny a počtu podlaží, která na nich stojí, a při každé změně stěn základ vytvoří znovu.

## Vytvořte základ

1. Na úrovni, jejíž stěny na něm stojí (obvykle první), otevřete {{ui:Sestavení}} a zvolte {{ui:Základ}}.
2. Zvolte druh:
   - **Deska na terénu**: betonová deska 4", jejíž horní hrana je podlaha, se zesílenou hranou pod stěnami.
   - **Obvodové stěny a deska**: základové stěny až k podlaze na patkách, s deskou uvnitř nich.
   - **Prolézací prostor**: základové stěny, které končí pod konstrukcí podlahy, na patkách, bez desky.
   - **Suterén**: základové stěny plné výšky na patkách, se suterénní deskou pod konstrukcí podlahy.
3. Ukažte dovnitř budovy: patky se zobrazí přerušovaně se svou velikostí. Klikněte.

Klikne-li se na budovu, která už má základ, základ se vybere, takže ho můžete změnit místo přidání druhého.

## Změňte ho

Vyberte základ (kliknutím dovnitř budovy s {{ui:Základ}}, nebo kliknutím na kterýkoli z jeho dílů ve 3D pohledu nebo ve stromu modelu) a změňte ho ve **Vlastnostech**: druh, šířku a hloubku patky, jak hluboko je spodek patky, tloušťku stěny, jak hluboko pod podlahou stěny končí, výšku suterénu a tloušťku desky. Každá změna je jeden krok zpět.

Velikosti označené **auto** se odvozují od stěn: patky 12", 15" nebo 23" široké pro jedno, dvě nebo tři podlaží na desce nebo na obvodových stěnách, 18", 22" nebo 27" nad prolézacím prostorem nebo suterénem a o 4" širší pod zděnými nebo betonovými stěnami. Zadejte velikost, chcete-li nastavit vlastní; zadáním `0` se vrátíte na auto.

:::warning
Automatické velikosti jsou označené výchozí hodnoty pro typické lehké rámové domy, nikoli výpočet. Projektant nebo statik zkontroluje patky, hloubky a stěny pro podloží, hloubku promrzání a zatížení.
:::

## Co se ukládá

Základ se ukládá jako sestava prvků IFC („Foundation“), složená z patky (nebo zesílené hrany desky), základové stěny a desky podle svého druhu, vše z betonu, každý s množstvími: délkami, šířkami, výškami, plochami a objemy, připravenými pro výkazy výměr.

## Dobré vědět

- Posuňte, přidejte nebo smažte stěny a základ pod nimi se vytvoří znovu; nakreslíte-li stěny na úrovni nad, patky pod nimi se kvůli přídavnému podlaží rozšíří.
- {{key:Delete}} odstraní vybraný základ se všemi jeho díly.
- Když je v modelu terén staveniště (viz [Terén staveniště, stavební plocha a zpevněné plochy](topic:terrain)), obvodové stěny a patky prolézacího prostoru klesají spolu s ním v krocích po 8".
- Patky pod vnitřními stěnami ještě nejsou hotovo.
