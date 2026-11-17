---
title: Skrytí, izolace a průhledné zobrazení prvků
summary: Vyberte několik prvků a skryjte je, zobrazte jen je, nebo zobrazte je se vším ostatním průhledným, a poté vraťte vše zpět.
keywords: skrýt, izolovat, průhledně, průhledný, duch, rentgen, zobrazit vše, zrušit skrytí, vybrat několik, vícenásobný výběr, Ctrl klik, Shift klik, viditelnost
from: 97e98b8c
---

## Co uděláte

Vyčistěte pohled na to, na co se díváte: skryjte prvky, které překážejí, zobrazte jen ty, které jste vybrali, nebo ostatní nechte na obrazovce jako slabý obrys, abyste pořád věděli, kde jste.

## Postup

1. Otevřete model IFC. Viz [Otevření modelu IFC a rozhlížení se ve 3D](topic:open-ifc-model).
2. Kliknutím vyberte prvek. Chcete-li vybrat další, držte {{key:Mod}} nebo {{key:Shift}} a klikněte na každý z nich. Kliknutí na již vybraný prvek tímto způsobem jej z výběru odebere.
3. Otevřete {{ui:Zobrazit}} na panelu nástrojů a zvolte, co se má stát, nebo stiskněte jeho klávesu:
   - {{ui:Skrýt}} ({{key:H}}) skryje vybrané prvky.
   - {{ui:Izolovat}} ({{key:I}}) zobrazí jen vybrané prvky.
   - {{ui:Průhledně}} ({{key:T}}) zobrazí vybrané prvky tak, jak jsou, a vše ostatní průhledně.
4. Klikněte na {{ui:Zobrazit vše}} ve stejné nabídce, nebo stiskněte {{key:Shift+H}}, aby se znovu zobrazily všechny prvky.
5. Chcete-li místo toho odříznout vše kolem vybraných prvků, klikněte ve stejné nabídce na {{ui:Řezový kvádr kolem výběru}}, nebo stiskněte {{key:Shift+X}}. Viz [Řez modelu IFC rovinou řezu](topic:section-plane).

## Co byste měli vidět

- Při několika vybraných prvcích {{ui:Vlastnosti}} uvede jejich počet a vypíše je podle třídy. Klikněte na jeden z nich samostatně, abyste viděli jeho vlastnosti.
- Skryté prvky nejde vybrat: kliknutí zasáhne to, co je za nimi.
- Ani průhledné prvky nejde vybrat, takže můžete kliknout přímo skrz stěny na to, co jste izolovali.
- Hrany se skryjí spolu se svým prvkem a zeslábnou spolu s ním.
- Skrytí, izolace a průhlednost zůstávají, když upravujete, umisťujete položky knihovny nebo řežete model rovinou řezu. Otevření jiného modelu zobrazí vše znovu.

## Časté chyby

- **Položky nabídky jsou našedlé.** Nic není vybráno. Nejprve klikněte na prvek; najetím na položku zjistíte, proč nemůže fungovat.
- **Izolace zobrazila stěnu, kterou jsem skryl.** Izolace zobrazí přesně to, co jste vybrali, ať je to skryté, nebo ne.
- **Chybí celé podlaží.** To řídí seznam {{ui:Podlaží}}, ne {{ui:Zobrazit vše}}: zaškrtněte podlaží znovu.

## Dále

- [Zobrazení a skrytí podlaží, prostorů a hran](topic:storeys-and-spaces)
- [Řez modelu IFC rovinou řezu](topic:section-plane)
