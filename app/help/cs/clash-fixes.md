---
title: Řešení kolizí návrhy jednotlivých profesí
summary: Z výsledků kontroly kolizí seznam Navržené opravy u každé kolize ukáže, co s ní může udělat každá profese — vzduchotechnika obejitá pod nosníkem, potrubí odsunuté stranou, sloup posunutý, otvor v nosníku. Každá oprava je vyzkoušena na kopii modelu s jejími kompromisy, abyste ji přijali, nebo zamítli. Přijaté opravy se zapíší jako jeden krok zpět.
keywords: kolize, oprava kolize, řešení kolizí, vyřešení kolizí, koordinace, navrhnout opravy, obejití, posun, vzduchotechnika, potrubí, žlab, nosník, sloup, otvor, průchodka, kompromis, profese, konstrukce, strojní, instalatérské, elektro, architektura, asistent
from: f7bafdd9
---

## Co uděláte

Proměňte seznam kolizí v rozhodnutí. Každá profese (konstrukce, strojní, instalatérské, elektro, architektura) navrhuje opravy jen pro své vlastní prvky, každý návrh se ověří na kopii modelu a vy vybíráte.

## Postup

1. Nejprve spusťte kontrolu kolizí. Viz [Kontrola kolizí](topic:clash-check) a [Kontrola potrubí a vzduchotechniky vůči konstrukci](topic:mep-against-structure).
2. Pod výsledky klikněte na {{ui:Navrhnout opravy}}. Panel **Navržené opravy** se otevře vedle modelu.
3. U každé kolize vidíte návrhy každé profese, nejlepší nahoře. Každý řádek říká, co dělá, a jaké má kompromisy: zda kolizi vyřeší, kolik nových kolizí vytvoří, která pravidla poruší, kolik trasy přidá nebo jak daleko ji posune, kolik tvarovek a jak vysoké bodové hodnocení nákladů.
4. Klikněte na {{ui:Zobrazit}}, abyste viděli prvky ve 3D. Klikněte na {{ui:Přijmout}} u opravy, kterou chcete (jedna na kolizi), nebo na {{ui:Zamítnout}}.
5. Řádek dole říká, co dělají všechny vaše přijaté opravy dohromady: kolik kolizí je vyřešeno, kolik jich zbývá a zda něco nově koliduje.
6. Klikněte na {{ui:Použít přijaté opravy (jeden krok zpět)}}. Kontrola kolizí se spustí znovu. {{ui:Zpět}} je vrátí všechny najednou.

## Co může která profese

- **Strojní** (vzduchotechnika, topná a chladicí potrubí): obejít nad nebo pod na větvi, která naráží, zdvihnout nebo snížit celou trasu, posunout ji stranou, zploštit obdélníkové potrubí při stejné ploše.
- **Instalatérské** (voda, odpady, plyn, požár): stejné posuny, kromě gravitačního odpadu, kterému se obejití nikdy nedává; může se posunout jen jako celek se zachováním spádu.
- **Elektro** (žlaby a trubky pro kabely): stejné posuny; žlab musí nad sebou mít 150 mm volného prostoru, aby se do něj dal položit kabel.
- **Konstrukce**: posunout sloup (až o 300 mm), nebo otvor ve stojině nosníku či v desce pro trasu, která prochází. U každé konstrukční opravy je uvedeno, že ji schvaluje statik.
- **Architektura**: průchodka ve stěně pro procházející trasu, nebo posun stěny, o které je známo, že nenese zatížení.

## Co uvidíte

- Opravy, které porušují pravidlo, jsou označeny: mezera k něčemu jinému menší než 25 mm, pod čarou volné výšky 2,100 mm, otvor ve stojině větší než 40 % výšky nosníku nebo příliš blízko jeho konců, nosník, který by změnil rozpětí.
- Opravy, které BimCraft umí provést, se použijí na model: trasy, které jste nakreslili nástroji Potrubí a Vzduchotechnika, a sloupy, které jste nakreslili. Ostatní mají u sebe **Pouze doporučení**: přijetí přidá problém na kartě Problémy.

## Dobré vědět

- Opravy pocházejí z vestavěných pravidel aplikace; k nim se nepoužívá žádná AI.
- Pokud připojíte asistenta (viz [Nechte asistenta AI pracovat s vaším modelem](topic:assistants)), může číst kolize a přidat vlastní návrhy pro jednu profesi do otevřeného panelu. Kontrolují se stejně, jsou označeny jménem asistenta a nic se nemění, dokud je nepřijmete a nepoužijete.
- Kopie se kontroluje pomocí krabic kolem každého prvku a každé větve trasy, takže šikmá trasa může ukázat kolizi, kterou kontrola kolizí neukáže. Po použití oprav spusťte kontrolu kolizí znovu: je to konečné slovo.
- Limity (jak daleko se trasa smí posunout, jak vysoko může obejití stoupat, mezera) jsou výchozí hodnoty uvedené v panelu.

## Dále

- [Problémy a soubory BCF](topic:issues-bcf)
- [Kreslení tras potrubí a vzduchotechniky](topic:pipes-and-ducts)
