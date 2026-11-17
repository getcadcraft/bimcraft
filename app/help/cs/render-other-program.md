---
title: Nakreslení obrazu jiným programem
summary: Náš vlastní sledovač paprsků kreslí obraz Vykreslení; jiný program ho může nakreslit jen přes doplněk motoru vykreslování v CadCraft Studio. Co se přenáší a proč některé programy nikdy nejsou nabízeny.
keywords: vykreslit, motor, externí program, motor doplňku, studio, pozadí, fronta, usd, gltf, nakresleno, blender, gpl
from: 652b413c
---

Obraz v {{ui:Vykreslit}} kreslí **naše vlastní motory**: {{ui:Rychlý}} a sledování paprsků, v prohlížeči i v CadCraft Studio. Jiný program ho může nakreslit jen tehdy, když ho přinese **doplněk motoru vykreslování**: viz [Přidání motoru vykreslování pomocí doplňku](topic:render-engine-addons). Chcete-li scénu převzít do jiného programu a dál v něm pracovat, použijte [Otevření scény v jiném programu](topic:render-open-in) nebo [Odeslání scény do herního motoru](topic:render-unreal).

## Nakreslení obrazu motorem doplňku

1. Zapněte doplněk v Nastavení › Doplňky. Jeho motor se objeví v seznamu Motor v {{ui:Vykreslit}}.
2. Vyberte jej. Jeho vlastní nastavení se zobrazí pod seznamem Motor.
3. Klikněte na {{ui:Vykreslit}}. Ve Studiu se vás doplněk při prvním spuštění programu zeptá ve svém vlastním dialogu. Průběh se ukazuje během kreslení; {{ui:Zastavit}} ho ukončí. Obraz se objeví označený motorem, který ho nakreslil.

Motor napsaný v JavaScriptu běží i v prohlížeči. Motor, který spouští program na tomto počítači, běží jen ve Studiu; v prohlížeči se zobrazí jako soubor k uložení.

## Co se přenáší

Motor dostane **balíček**: model jako soubor USD (a soubor glTF, pokud o něj požádá) a soubor nastavení s přesnými hodnotami materiálů, slunce a oblohy, každým svítidlem, které je zapnuté, s jeho výkonem a světelným profilem, kamerou a expozicí. Každý program osvětluje, tónuje a vzorkuje po svém, takže obrazy jsou si podobné v kameře, slunci, svítidlech a expozici, ale ne pixel po pixelu.

## Programy, které CadCraft nikdy nespustí

CadCraft nikdy nespustí program pod licencí GNU GPL a nikdy ho neuvede jako motor ani jako cíl položky Otevřít v. Blender je jedním z nich, proto není v seznamu Motor. Soubor USD nebo glTF uložený z {{ui:Vykreslit}} se v něm otevře stejně jako v každém programu, který tyto soubory čte.

:::note
Panoramatické a stereo kamery a obrázek oblohy (použijí se barvy oblohy) se do jiného programu nepřenášejí. Nic, co se udělá v jiném programu, se nevrací do modelu.
:::
