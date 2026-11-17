---
title: Odoslanie scény do herného motora
summary: Studio dokáže zapísať scénu do projektu Unreal Engine a pri každom odoslaní ju udržiavať v súlade; vaše vlastné úpravy sú vo vrstve, do ktorej CadCraft nikdy nezapisuje. Plug-in, ktorý ju otvára, ešte nebol vydaný.
keywords: unreal, unreal engine, herný motor, prepojenie, odoslať, usd stage, projekt, naživo, cine camera, rad filmového vykresľovania
from: 154d55ef
---

V CadCraft Studio môže zoznam motorov obsahovať **prepojenie** na projekt Unreal Engine. Len jedným smerom: z CadCraftu do Unreal.

## Odoslanie scény

1. Vyberte položku Unreal v zozname motorov. Pri prvom použití vás Studio požiada o výber priečinka projektu (toho s súborom `.uproject`); zapamätá si ho.
2. Kliknite na {{ui:Odoslať}}. Studio zapíše `CadCraft/<file name>/` do projektu: scénu ako súbor USD, súbor nastavení, svetelné profily a dva malé súbory vrstiev.
3. Zmeňte model, uložte a znova odošlite. Nahradia sa iba scéna a súbor nastavení.

## Vaše vlastné úpravy sú v bezpečí

Javisko, ktoré Unreal otvorí, je malá koreňová vrstva vytvorená raz, s dvoma vrstvami pod ňou: **vaša** hore (`<name>.user.usda`, na začiatku prázdna, CadCraft ju nikdy neprepíše) a scéna CadCraftu nižšie. Úpravy, ktoré uložíte do svojej vrstvy, zostanú aj pri ďalšom odoslaní scény. Svetlá a ďalší aktéri, ktorých umiestnite do úrovne Unreal, sú mimo javiska a tiež sa nedotknú.

## Bez Studia

V prehliadači alebo na počítači, kde Studio nenájde Unreal, vyberte v zozname motorov položku **Priečinok projektu Unreal (.zip)** a kliknite na {{ui:Vykresliť}}. Uloží sa rovnaký priečinok ako zip: rozbaľte ho do priečinka `CadCraft` vášho projektu. Pri prvom uložení ponechajte **Zahrnúť súbory javiska**; pri ďalších uloženiach ho vypnite, aby zip obsahoval iba scénu a súbor nastavení a vaša vlastná vrstva sa nikdy neprepísala.

:::note
Plug-in pre Unreal, ktorý otvára javisko, aplikuje slnko, svetlá, kamery a expozíciu, sleduje každé odoslanie a vykresľuje kameru, ešte **nie je vydaný** a v Unreal nebol spustený. Dovtedy Odoslať uloží súbory do projektu a vlastné nástroje USD v Unreal ich môžu otvoriť. Ako prvý systém je Windows; macOS bude nasledovať.
:::
