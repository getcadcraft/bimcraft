---
title: Zobrazení a skrytí podlaží, prostorů a hran
summary: Vypněte podlaží, abyste viděli dovnitř budovy, zobrazte místnosti a prostory a zapínejte a vypínejte čáry hran.
keywords: podlaží, úrovně, podlahy, skrýt, izolovat, místnosti, prostory, ifcspace, hrany, viditelnost, řez
from: b838dcc0
---

## Co provedete

Podívejte se dovnitř modelu IFC tak, že vypnete podlaží nad tím, které vás zajímá. Pak zobrazíte místnosti a prostory a pro čistší vzhled vypnete čáry hran.

## Postup: podívat se na jedno podlaží

1. Otevřete model IFC. Viz [Otevření modelu IFC a prohlížení ve 3D](topic:open-ifc-model).
2. Najděte seznam {{ui:Podlaží}} vlevo. Nejvyšší podlaží je první, jako když čtete řez od střechy dolů.
3. Odškrtněte střechu a každé podlaží nad tím, které chcete.
4. Klikněte na {{ui:Shora}}, abyste se podívali dolů na to podlaží.
5. Zaškrtněte podlaží znovu, abyste je vrátili.

## Co uvidíte

Každé podlaží, které odškrtnete, zmizí okamžitě i se vším, co na něm je. Seznam ukazuje jen podlaží, která obsahují něco viditelného. Prvky, které nejsou přiřazeny žádnému podlaží, jsou seskupeny jako **Bez podlaží** dole; prvky pozemku a některý nábytek tam často skončí.

## Postup: zobrazit místnosti a prostory

1. Klikněte na {{ui:Prostory}} na panelu nástrojů nad modelem. Tlačítko zůstane stisknuté.
2. Podívejte se na model: místnosti a prostory se objeví jako světlé, průhledné objemy.
3. Klikněte na prostor, abyste vpravo přečetli jeho vlastnosti, jako název, číslo a plochu.
4. Klikněte na {{ui:Prostory}} znovu, abyste je skryli.

Prostory se při otevření modelu skrývají, protože by jinak překrývaly stěny a podlahy.

## Postup: hrany

1. Klikněte na {{ui:Hrany}}, abyste vypnuli tenké čáry hran.
2. Klikněte na něj znovu, abyste je zapnuli.

U velmi velkých modelů (přes 1.5 milionu trojúhelníků) je tlačítko šedé s popiskem "Hrany jsou u velmi velkých modelů vypnuty". To šetří paměť.

## Časté chyby

- **Odškrtnete podlaží a stále vidíte jeho části.** Prvek patří k podlaží, které mu přiřadil exportující program. Vysoká stěna nebo schodiště často patří jen svému spodnímu podlaží, takže zůstane, když je skryto podlaží nad ním, nebo zmizí spolu s podlažím pod ním.
- **Skrývání podlaží, abyste viděli dovnitř.** Řezný box bývá rychlejší: viz [Řez modelu IFC rovinou řezu](topic:section-plane#a-section-box). Můžete také odškrtnout řádky v {{ui:Strom modelu}} (viz [Orientace ve stromu modelu](topic:model-tree)).
- **Kliknutí na prostor přes stěnu.** Kliknutí vybere nejbližší viditelný povrch. Skryjte podlaží nad ním, nebo přepněte na {{ui:Shora}}, a pak klikněte.
- **Názvy podlaží vypadají divně.** BimCraft zobrazuje názvy podlaží uložené v souboru. Pokud říkají "Level 1" nebo číslo, je to to, co zapsal exportér.
