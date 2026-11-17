---
title: Odeslání prvku do PartCraft a jeho převzetí zpět
summary: Vyberte podpěru, konzolu, zábradlí nebo kus zařízení, navrhněte ho jako díl v PartCraft s budovou kolem něj a přijměte nový tvar zpět do modelu.
keywords: partcraft, díl, odeslat, odkaz, prvek, podpěra, konzola, zábradlí, plot, zařízení, návrh, zpětné předání, přijmout, změněno, odkazy na díly
from: 4ce2f449
---

## Co provedete

Navrhněte jeden prvek budovy jako díl: odešlete ho do PartCraft, změňte ho tam (vyjměte, přidejte, vyvrtejte, změňte velikost) a vraťte nový tvar do modelu.

## Postup

1. Vyberte v modelu jeden prvek: obecný prvek, zařízení, sloup, nosník, zábradlí nebo nábytek.
2. Na panelu nástrojů zvolte {{ui:Odkazy na díly}} a pak {{ui:Odeslat do PartCraft}}. PartCraft se otevře v nové kartě s prvkem jako dílem. Prvky do 3 m od něj jsou vykresleny šedě, abyste ho mohli navrhovat na místě. Tam je nelze měnit.
3. Změňte díl v PartCraft. V PartCraft zvolte {{ui:Soubor}} › {{ui:Exportovat}} › Uložit zpět do BimCraft. Uložit zpět můžete tolikrát, kolikrát chcete.
4. Zpět v BimCraft tlačítko {{ui:Odkazy na díly}} ukazuje počet a karta uvádí prvek jako {{ui:Změněno v PartCraft}}, se změnou velikosti a objemu vyjádřenou slovy.
5. Zvolte {{ui:Zobrazit}}, abyste si ho prohlédli, a pak {{ui:Přijmout}}, aby prvek dostal nový tvar, nebo {{ui:Ponechat moje}}, aby zůstal beze změny.

## Co uvidíte

- Přijetí je jeden krok zpět. Prvek si ponechá své místo, GlobalId, typ, materiál a vlastnosti. Nahradí se jen jeho těleso.
- Prvek dostane sadu vlastností {{ui:CadCraft_PartLink}} s odkazem, jeho stavem a revizí.
- {{ui:Odeslat znovu}} otevře stejný prvek v PartCraft ještě jednou, na stejném odkazu.

## Dobré vědět

- Stěny, podlahy, střechy, dveře, okna, schodiště, rampy a prostory kreslí stavební nástroje z obrysu a po každé změně se znovu sestaví. Těleso z jiné aplikace by je přepsalo, proto jsou odmítnuta s uvedením důvodu.
- Tvar se vrací jako síť (tesselace IFC), ne jako prvky dílu. Historie dílu zůstává v PartCraft.
- Změnil-li se prvek v modelu poté, co jste ho odeslali, karta to před přijetím oznámí: přijetí tyto změny nahradí.
- Nic se nenahrává. Obě aplikace jsou stránky jednoho webu a předávají si prvek v tomto prohlížeči. Obě musí být otevřené ve stejném prohlížeči.
- Prvek se musí v PartCraft uzavřít do tělesa. Prvek, jehož tvar má velké otevřené mezery, tam bude odmítnut s počtem otevřených hran.
- Pro přijetí musí být aktivní model, který prvek obsahuje.
