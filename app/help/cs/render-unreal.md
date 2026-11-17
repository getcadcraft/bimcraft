---
title: Odeslání scény do herního motoru
summary: Studio může zapsat scénu do projektu Unreal Engine a při každém odeslání ji udržovat v souladu; Vaše vlastní úpravy jsou ve vrstvě, kterou CadCraft nikdy nepřepisuje. Zásuvný modul, který ji otevírá, zatím není vydán.
keywords: unreal, unreal engine, herní motor, odkaz, odeslat, usd stage, projekt, živě, cine kamera, fronta vykreslování filmu
from: 154d55ef
---

Ve CadCraft Studio může seznam Motor obsahovat **odkaz** na projekt Unreal Engine. Pouze jedním směrem: z CadCraftu do Unrealu.

## Odeslání scény

1. Vyberte položku Unreal v seznamu Motor. Při prvním použití se Vás Studio zeptá, abyste vybrali složku svého projektu (tu se souborem `.uproject`); pamatuje si ji.
2. Klikněte na {{ui:Odeslat}}. Studio zapíše `CadCraft/<název souboru>/` do projektu: scénu jako soubor USD, soubor nastavení, profily světel a dva malé soubory vrstev.
3. Změňte model, uložte a odešlete znovu. Nahradí se jen scéna a soubor nastavení.

## Vaše vlastní úpravy jsou v bezpečí

Scéna, kterou Unreal otevře, je malý kořenový soubor vrstev vytvořený jednou, se dvěma vrstvami pod ním: **Vaše** nahoře (`<name>.user.usda`, zpočátku prázdná, CadCraft ji nikdy nepřepisuje) a scéna CadCraftu pod ní. Úpravy, které uložíte do své vrstvy, zůstanou i při dalším odeslání scény. Světla a jiné aktéry, které umístíte do úrovně Unrealu, jsou mimo scénu a také se nedotknou.

## Bez Studia

V prohlížeči nebo na počítači, kde Studio Unreal nenajde, vyberte v seznamu Motor položku **Složka projektu Unreal (.zip)** a klikněte na {{ui:Vykreslit}}. Uloží se stejná složka jako zip: rozbalte ji do složky `CadCraft` svého projektu. Při prvním uložení ponechte zapnuté **Zahrnout soubory scény**; při dalších uloženích jej vypněte, aby zip obsahoval jen scénu a soubor nastavení a Vaše vlastní vrstva se nikdy nepřepsala.

:::note
Zásuvný modul pro Unreal, který otevírá scénu, aplikuje slunce, svítidla, kamery a expozici, sleduje každé odeslání a vykresluje kameru, **zatím není vydán** a v Unrealu nebyl spuštěn. Dokud nebude, Odeslat umístí soubory do projektu a nástroje USD v Unrealu je mohou otevřít. Prvním systémem je Windows; macOS bude následovat.
:::
