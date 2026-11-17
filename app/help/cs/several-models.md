---
title: Několik modelů IFC najednou
summary: Přidejte do scény další soubory IFC, například architekturu, konstrukci a instalace, zobrazte je ve stejných souřadnicích, posuňte jeden, skryjte jeden a zvolte, který upravujete.
keywords: federace, federovaný model, několik modelů, více souborů, spojit, překrytí, koordinace, profese, konstrukce, mep, instalace, posun, posunout model, aktivní model, přidat model
from: df0efbbf
---

## Co uděláte

Podívejte se na modely různých profesí na jednom místě: architektonický model se konstrukčním a instalačním modelem. Každý zůstává vlastním souborem; BimCraft je jen zobrazuje společně.

## Postup

1. Otevřete první model IFC obvyklým způsobem.
2. V {{ui:Modely}} vlevo klikněte na {{ui:Přidat model…}} a vyberte jeden nebo více souborů IFC. Každý se objeví v seznamu i v 3D pohledu.
3. Odškrtnutím modelu jej skryjete; zaškrtnutím jej znovu zobrazíte.
4. Pokud model přijde na špatném místě (jiný geodetický bod), klikněte pod ním na {{ui:Posunout}}, zadejte, o kolik jej posunout podél X, Y a Z v metrech, a klikněte na {{ui:Použít}}.
5. Model s tečkou je ten, který upravujete. Klikněte na tečku jiného modelu, chcete-li upravovat ten.
6. Kliknutím na × vedle modelu jej odeberete ze scény.

## Otevření modelů týmu

Když je otevřený model cloudový soubor v týmovém projektu, pod seznamem se objeví {{ui:Otevřít modely týmu}}. Otevře ostatní modely IFC projektu vedle tohoto, každý posunutý o odsazení, které projekt nastavil. Modely skryté před vámi zůstanou zavřené a jsou počítány; model, který projekt otáčí, se otevře neotočený a také se počítá; soubory, které nejsou IFC (třeba DWG), se přeskočí a jsou jmenovány ve stavovém řádku. Model, který je už otevřen, se nikdy neotevře dvakrát. Tlačítko je skryté u souboru, který není v týmovém projektu.

## Co byste měli vidět

- Každý model v souřadnicích prvního modelu, tak jak je umístěn svým souborem. Modely exportované ze stejného projektu na sebe navazují bez posouvání.
- Výběr prvku modelu, který neupravujete, zobrazí jeho vlastnosti jen pro čtení, s {{ui:Upravit tento model}} pro přepnutí.
- {{ui:Strom modelu}}, {{ui:Podlaží}}, {{ui:Barva}}, seznam {{ui:Změny}}, vkládání položek knihovny a {{ui:Uložit jako IFC}} fungují na modelu, který upravujete. Skrývání, izolace, průhlednost a {{ui:Vybrat vše}} fungují napříč všemi modely.
- {{ui:Uložit jako IFC}} stáhne model, který upravujete, pouze se svými změnami.

## Časté chyby

- **Model je daleko nebo chybí.** Jeho soubor používá jiné souřadnice. Použijte {{ui:Přizpůsobit}}, abyste jej našli, a pak jej {{ui:Posunout}} na místo.
- **Smazat nebo Kopírovat je u vybraného prvku šedé.** Patří jinému modelu: nejprve na něj přepněte.
- **Otevření souboru přes „Vybrat soubor“ nahradilo vše.** To spustí novou scénu. Použijte {{ui:Přidat model…}}, abyste přidali soubory k tomu, který máte.

## Dál

- [Skrytí, izolace a průhlednost prvků](topic:hide-and-isolate)
- [Obarvení prvků podle vlastnosti](topic:color-by-property)
