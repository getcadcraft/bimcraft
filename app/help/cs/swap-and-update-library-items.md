---
title: Vyměna umístěné položky a aktualizace položek z knihovny
summary: Nahraďte jednu umístěnou položku knihovny jinou a zachovejte její místo a číslo položky a v Knihovně zkontrolujte novější verze všeho v modelu.
keywords: vyměnit, nahradit, náhrada, aktualizovat, novější verze, zkontrolovat aktualizace, knihovna, stažená, změna licence, číslo položky
from: 8bdfe01d
---

## Co provedete

Změňte názor na položku, aniž byste ji znovu přesouvali, a udržujte položky knihovny v modelu aktuální.

## Výměna jedné položky

1. Klikněte na umístěnou položku knihovny v modelu.
2. V {{ui:Vlastnosti}} klikněte na {{ui:Vyměnit položku…}} v poli **Položka knihovny**. Otevře se karta {{ui:Knihovna}}.
3. Najděte novou položku a klikněte na její kartu.
4. Klikněte na {{ui:Vyměnit … za tuto}}.

Prvek si zachová své místo, otočení, podlaží, číslo položky, množství a poznámky. Jeho typ, tvar a data položky se změní na novou položku. Položky umístěné stejným způsobem sdílejí jeden typ, stejně jako při jejich umisťování.

Položka, která má varianty (viz [Umístění a výměna položky knihovny s variantami](topic:library-variants)), vypíše své další varianty nahoře na kartě {{ui:Knihovna}}, když ji vyměníte: jedno kliknutí na každou.

Když je nová položka jiného druhu věci, například umyvadlo místo stolu, třída IFC prvku se změní podle toho (zde z prvku vybavení na sanitární zařízení), takže ji jiný software správně zařadí do tabulky. Zůstává to stejný prvek se stejným GlobalId, takže odkazy na něj fungují dál. {{key:Mod+Z}} vrátí starou třídu se starou položkou.

## Kontrola aktualizací

1. Klikněte na {{ui:Aktualizace}} na panelu nástrojů (nebo na {{ui:Zkontrolovat aktualizace}} v poli položky knihovny).
2. Přečtěte seznam: každá položka knihovny v modelu se svou verzí v modelu, nejnovější verzí a stavem: **Aktuální**, **Novější verze**, **Stažená** nebo **Nenalezeno**. Také říká, co se změnilo (geometrie, data, licence nebo oprava).
3. Klikněte na {{ui:Aktualizovat}} u řádku, nebo na {{ui:Aktualizovat vše}}.

## Co uvidíte

- "Aktualizováno umístění: *n*. Místa, čísla položek, množství a poznámky se zachovají."
- Řádky "Aktualizováno: *položka*" v seznamu změn. {{key:Mod+Z}} zruší každý z nich.

## Dobré vědět

- Kontrolovat lze jen položky z Knihovny. Položky ze souborů nemají id knihovny.
- Když se licence změnila, kopie, kterou jste už umístili, si ponechá licenci, se kterou přišla, dokud ji neaktualizujete.
- **Stažená** položka se nenabízí pro nová umístění. Položka stažená z autorských důvodů se vůbec nedá stáhnout; nahraďte ji pomocí {{ui:Vyměnit položku…}}.
- Umístěná varianta zůstane touto variantou, pokud ji novější verze položky stále obsahuje; jinak převezme výchozí variantu položky.
- Kontrola posílá jen id položek a verze, nikdy váš model.
