---
title: Otvorenie a export IFC5 alpha (súbory IFCX)
summary: Laboratórna možnosť pre formát súborov IFC5 alpha (.ifcx): otvorte súbor s jeho vrstvami, pozrite si, čo čítanie nedokázalo overiť, a exportujte otvorené modely. Formát sa ešte mení, preto si najprv prečítajte pokyny.
keywords: ifc5, ifcx, alpha, buildingsmart, json, vrstvy, schéma, laboratórium, množstvá, qto, export, import
from: cffe1669
---

IFC5 alpha (súbor s príponou {{ui:.ifcx}}) je formát, ktorý buildingSMART stále navrhuje. Nie je konečný: súbory aj naše čítanie sa môžu zmeniť. Preto je to laboratórna možnosť a preto je čítanie na prvom mieste.

## Zapnutie

1. Zvoľte {{ui:Nastavenia}}, potom sekciu {{ui:IFC5 alpha (IFCX)}} na karte BimCraft.
2. Zaškrtnite {{ui:IFC5 alpha (IFCX) – formát sa ešte mení; najprv si prečítajte}}.

Je vypnutá predvolene. Kým je vypnutá, súbor .ifcx sa odmietne s vetou, ktorá odkazuje sem. {{ui:Otvoriť IFC5 alpha (.ifcx)…}} a tlačidlo exportu {{ui:IFC5 alpha}} sa zobrazia, keď je zapnutá.

## Otvorenie

- Vyberte súbor .ifcx pomocou {{ui:Otvoriť súbor alebo priečinok}} (nahradí otvorený model, po obvyklej otázke na úpravy), alebo
- zvoľte {{ui:Otvoriť IFC5 alpha (.ifcx)…}} a vyberte naraz viac súborov: samotný súbor, jeho vrstvy a schémové súbory, ktoré importuje. Ak je už otvorený model, súbor sa **pridá vedľa neho**; x v zozname modelov ho odstráni, čím sa vráti späť.

Súbor IFCX obsahuje uzly (cestu, jej podradené prvky, to, čo dedí, a svoje atribúty). Viac súborov môže popisovať ten istý uzol: neskorší súbor (vrstva) prepíše atribúty skoršieho a podradený uzol typu null odstráni potomka. BimCraft ich zloží a vykreslí výsledok ako malý model IFC4: projekt, pozemok, budova, podlažia a prvky s názvami, triedami, vlastnosťami, množstvami, farbami a sieťami.

Zo siete sa nič nesťahuje. Schémové súbory, ktoré súbor importuje (napríklad `ifc@v5a.ifcx`), sa použijú, len ak ste ich vybrali spolu so súborom; inak to správa uvedie a atribúty sa čítajú bez kontroly typu.

### Správa

Po otvorení správa uvádza, čo čítanie zistilo: údaje, ktoré nezodpovedajú svojej schéme, schémové súbory, ktoré neboli zadané, a atribúty, ktoré v IFC tu nemajú význam. Atribúty bez mapovania sa **zachovajú** v modeli, nezahodia sa a pri exporte sa zapíšu späť.

## Čo sa mení na čo

| V súbore IFCX | V BimCraft |
|---|---|
| Uzol s triedou IFC (projekt, pozemok, budova, podlažie, múr …) | Zodpovedajúci prvok IFC4; trieda, ktorú toto čítanie nepozná, sa stane proxy prvkom stavebného prvku |
| Názov, ktorý má uzol pod svojím rodičom | Názov prvku |
| Atribúty s druhom veličiny (Length, Area, Volume, Mass …) | Sada množstiev IFC4 s názvom `Qto_IFCX` (množstvové sady IFC4 zostávajú sadami IFC4 `Qto_*`) |
| Ostatné atribúty vlastností | Sada vlastností s názvom `Pset_IFCX` |
| Atribúty siete a transformácie | Trojuholníky a umiestnenie prvku; neviditeľné siete sa nekreslia |
| Farba, nepriehľadnosť, materiál, klasifikácia | Štýl povrchu, materiál a klasifikácia prvku |

Jednotky sa berú ako metre, s osou Z smerom nahor: alfa uvádza, že jednotky budú zdokumentované neskôr.

## Export

Na paneli nástrojov zvoľte {{ui:IFC5 alpha}}, prečítajte si poznámku a potom kliknite na {{ui:Exportovať .ifcx}}. Súbor má našu vlastnú hlavičku (autor CadCraft, verzia ifcx_alpha) a sám uvádza, že je vo formáte alpha. Každý model sa zapíše vo vlastných súradniciach súboru, v metroch, s názvami, triedami, sadami vlastností, množstvami (ako atribúty s ich druhom), farbami a trojuholníkmi. Vrstvy a dedičnosť sa zapisujú zjednotené (zploštené). Skontrolujte súbor v programe, ktorému ho posielate.

## Obmedzenia

- Krivé geometrie (krivky, plochy) sa nečítajú: len trojuholníkové siete.
- Dvere a okná vnorené do múru sa umiestnia na podlažie; múr, z ktorého pochádzajú, sa nepripojí.
- Názvy sád `Qto_*` IFC4 sa zachovajú ako vlastné skupiny atribútov (`cadcraft::qto::…`); štandardná schéma alpha má len niekoľko názvov množstiev.
- Formát sa môže zmeniť bez nášho zásahu; súbor vytvorený dnes sa zajtra nemusí načítať.
