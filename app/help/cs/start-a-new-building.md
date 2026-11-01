---
title: Začněte novou budovu
summary: Vytvořte prázdný model budovy s podlažími, nakreslete její stěny, umístěte prvky z knihovny a uložte ji jako IFC.
keywords: nový, nová budova, prázdný, začít od nuly, šablona, podlaží, patra, vytvořit, model
from: 546b8ae8
---

## Co budete dělat

Začnete model budovy od nuly místo otevření existujícího. BimCraft vytvoří prázdný model IFC s projektem, pozemkem, budovou a jejími podlažími. Na podlaží pak můžete z knihovny umístit zařízení a nábytek a uložit je jako soubor IFC.

:::note
Stěny už nakreslit lze: viz [Kreslení stěn](topic:draw-walls). Dveře, okna, podlahy a střechy budou následovat.
:::

## Postup

1. Klikněte na {{ui:Nová budova}} pod **Otevřít soubor nebo složku** nebo na úvodní stránce.
2. Napište **Název budovy**.
3. Zvolte, kolik má **Podlaží** (1 až 200).
4. Napište **Výška podlaží**, od podlahy k podlaze: například `10'-0"`, `10'6"` nebo `3000 mm`. Samotné číslo znamená stopy v USA a jinde milimetry.
5. Klikněte na {{ui:Vytvořit}}. Podlaží se naskládají od 0, každé o výšku podlaží výše než předchozí, a pojmenují se Level 1, Level 2 a tak dále. Zobrazí se ve stromu modelu a půdorys Level 1 se otevře vedle 3D pohledu se zapnutým {{ui:Kreslit}}.
6. Nakreslete stěny: viz [Kreslení stěn](topic:draw-walls). Podlaží přejmenujete nebo jejich výšku změníte v panelu **Podlaží**.
7. Umístěte prvky: viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library). Lišta umísťování uvádí všechna podlaží.
8. Klikněte na {{ui:Uložit jako IFC}}. Soubor se jmenuje podle budovy, například `Smith's house.ifc`.

## Dobré vědět

- Model se ukládá v milimetrech jako IFC4. Otevřou ho i jiné programy pro BIM.
- **Podlaží** v levém panelu uvádí jen podlaží, na kterých něco je; strom modelu uvádí všechna.
- Dokud neuložíte, nová budova se považuje za neuloženou práci. BimCraft se zeptá, než otevřete jiný soubor nebo stránku opustíte, a ponechá kopii v tomto prohlížeči pro případ zavření karty.
