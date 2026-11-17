---
title: Otevření a export souborů IFC5 alfa (IFCX)
summary: Laboratorní volba pro formát souborů IFC5 alfa (.ifcx): otevřete soubor s jeho vrstvami, zjistěte, co čtení nemohlo ověřit, a exportujte otevřené modely. Formát se stále mění, proto si nejprve přečtěte.
keywords: ifc5, ifcx, alfa, buildingsmart, json, vrstvy, schéma, laboratoř, množství, qto, export, import
from: cffe1669
---

IFC5 alfa (soubor s příponou {{ui:.ifcx}}) je formát souborů, který buildingSMART stále navrhuje. Není konečný: soubory i náš výklad se mohou měnit. Proto je to laboratorní volba a proto je potřeba nejprve si přečíst, jak to funguje.

## Zapnutí

1. Vyberte {{ui:Nastavení}}, potom sekci {{ui:IFC5 alfa (IFCX)}} na kartě BimCraft.
2. Zaškrtněte {{ui:IFC5 alfa (IFCX) – formát se stále mění; nejprve si přečtěte}}.

Je vypnutá ve výchozím nastavení. Dokud je vypnutá, soubor .ifcx se odmítne s větou, která odkazuje sem. {{ui:Otevřít IFC5 alfa (.ifcx)…}} a tlačítko exportu {{ui:IFC5 alfa}} se zobrazí, jen když je volba zapnutá.

## Otevření

- Vyberte soubor .ifcx pomocí {{ui:Otevřít soubor nebo složku}} (nahradí otevřený model po obvyklé otázce na úpravy), nebo
- vyberte {{ui:Otevřít IFC5 alfa (.ifcx)…}} a vyberte několik souborů najednou: soubor, jeho vrstvy a soubory schémat, které importuje. Pokud je model už otevřený, soubor se **přidá vedle něj**; křížek v seznamu modelů jej odebere, což je zpět.

Soubor IFCX vypisuje uzly (cestu, jejich potomky, co dědí a své atributy). Více souborů může popisovat stejný uzel: pozdější soubor (vrstva) přepíše atributy dřívějšího a prázdný potomek (null) odebere potomka. BimCraft je složí a výsledek vykreslí jako malý model IFC4: projekt, pozemek, budovu, podlaží a prvky s názvy, třídami, vlastnostmi, množstvími, barvami a sítěmi.

Nic se nestahuje ze sítě. Soubory schémat, které soubor importuje (například `ifc@v5a.ifcx`), se použijí jen tehdy, když jste je vybrali spolu se souborem; jinak to hlášení uvede a atributy se načtou bez kontroly typů.

### Hlášení

Po otevření hlášení vypíše, co čtení zjistilo: data, která neodpovídají svému schématu, soubory schémat, které nebyly zadány, a atributy, které zde nemají význam v IFC. Atributy bez mapování se v modelu **zachovají**, nevypustí se, a při exportu se zapíší zpět.

## Co se mění v co

| V souboru IFCX | V BimCraft |
|---|---|
| Uzel s třídou IFC (projekt, pozemek, budova, podlaží, stěna …) | Odpovídající prvek IFC4; třída, kterou toto čtení nezná, se stane obecným prvkem budovy (proxy) |
| Název, který má uzel pod svým rodičem | Název prvku |
| Atributy s druhem veličiny (délka, plocha, objem, hmotnost …) | Sada množství IFC4 nazvaná `Qto_IFCX` (množství IFC4 zůstávají sadami IFC4 `Qto_*`) |
| Ostatní atributy vlastností | Sada vlastností nazvaná `Pset_IFCX` |
| Atributy sítě a transformace | Trojúhelníky a umístění prvku; neviditelné sítě se nekreslí |
| Barva, průhlednost, materiál, klasifikace | Styl povrchu, materiál a klasifikace prvku |

Jednotky se berou jako metry, s osou Z nahoru: alfa uvádí, že jednotky budou dokumentovány později.

## Export

Vyberte {{ui:IFC5 alfa}} na panelu nástrojů, přečtěte poznámku a potom klikněte na {{ui:Exportovat .ifcx}}. Soubor má naši vlastní hlavičku (autor CadCraft, verze ifcx_alpha) a sám o sobě uvádí, že jde o formát alfa. Každý model se zapíše ve vlastních souřadnicích souboru, v metrech, s názvy, třídami, sadami vlastností, množstvími (jako atributy s jejich druhem), barvami a trojúhelníky. Vrstvy a dědičnost se zapisují zploštěle. Soubor zkontrolujte v programu, kterému jej pošlete.

## Omezení

- Křivkové geometrie (křivky, plochy) se nečtou: jen trojúhelníkové sítě.
- Dveře a okna vnořená do stěny se umístí do podlaží; stěna, ze které pocházejí, se nepropojí.
- Názvy sad IFC4 `Qto_*` se zachovají jako skupiny atributů naší vlastní (`cadcraft::qto::…`); standardní schéma alfa má jen několik názvů veličin.
- Formát se může pod námi změnit; soubor vytvořený dnes se zítra nemusí načíst.
