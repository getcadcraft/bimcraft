---
title: Změna vlastnosti typu pro každý prvek typu
summary: Rozlište vlastnosti typu a vlastnosti instance, změňte hodnotu na typu, aby ji každý prvek převzal, a ověřte, že vlastní úprava jednoho prvku zůstane jeho vlastní.
keywords: typ, instance, vlastnosti typu, typ rodiny, sdílené, kopie při zápisu, všechny prvky, hromadná úprava, výrobce, model
from: bffd8789
---

## Co uděláte

Nastavte výrobce na typu dveří tak, aby každé dveře tohoto typu jej ukazovaly, a pak dejte jedněm dveřím vlastní požární odolnost, aniž se dotknete ostatních. Ukáže se rozdíl mezi vlastnostmi typu a vlastnostmi instance v BimCraftu.

## Typ, nebo instance?

- **Instance** vlastnost patří jednomu prvku: jeho označení, jeho značka, jeho místnost, jeho vlastní požární odolnost.
- **Typ** vlastnost patří typu, který sdílí mnoho prvků: výrobce, model, šířka typu dveří.

V panelu {{ui:Vlastnosti}} mají sady, které pochází z typu, za názvem připsáno „ (typ)“ a řádek „Vlastnost typu: změna zde platí pro každý prvek tohoto typu.“. Každá jiná sada patří přímo prvku. **Typ** v prvním bloku ukazuje název typu.

## Postup: změna typu

1. Otevřete model IFC a klikněte na dveře.
2. Poznamenejte si jejich **Typ** v prvním bloku panelu {{ui:Vlastnosti}}, například „Single-Flush 900 x 2100“.
3. Přejděte na sadu, jejíž název končí na „(typ)“.
4. Klikněte na hodnotu, kterou chcete změnit, například **Výrobce**.
5. Napište novou hodnotu a stiskněte {{key:Enter}}.
6. Podívejte se do seznamu {{ui:Změny}}: záznam končí na „(typ)“.
7. Klikněte na jiné dveře stejného typu.
8. Zkontrolujte stejnou hodnotu: ukazuje také novou hodnotu.

## Postup: změna jednoho prvku

1. Klikněte na jedny dveře.
2. Otevřete sadu, v jejímž názvu není „(typ)“, například `Pset_DoorCommon`.
3. Klikněte na hodnotu, například **FireRating**, napište novou hodnotu a stiskněte {{key:Enter}}.
4. Klikněte na vedle stojící dveře stejného typu.
5. Zkontrolujte stejnou hodnotu: stále ukazuje starou hodnotu.

I když exportér sdílel tu sadu vlastností mezi oběma dveřmi, BimCraft dal prvním dveřím vlastní kopii, než ji změnil. Viz [Proč vaše úprava mění jen jeden prvek](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Uložení

1. Klikněte na {{ui:Uložit jako IFC}} nebo stiskněte {{key:Mod+S}}.
2. Otevřete uloženou kopii v BimCraftu nebo v libovolném prohlížeči IFC a ověřte obě změny.

## Časté chyby

- **Ne každý model má typy.** Některé exportéry nezapisují žádné objekty typů nebo vše dávají na instanci. Pak nejsou žádné sady „(typ)“ a každý prvek se musí změnit zvlášť.
- **Stejná hodnota je v sadě typu i v sadě instance.** Některé exportéry zapisují parametr na obě místa. Ostatní programy mohou číst kterékoli; pokud chcete, aby se shodovaly, změňte obě.
- **Očekávání, že vyberete „všechny dveře tohoto typu“ a upravíte je společně.** V této verzi není vícenásobný výběr. Vlastnost typu je způsob, jak změnit mnoho prvků najednou.
