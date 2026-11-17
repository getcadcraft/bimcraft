---
title: Export modelu jako Collada nebo pro Google Earth
summary: Zapíše otevřené modely IFC jako soubor Collada (.dae) pro Blender a jiné 3D programy, nebo jako balíček Google Earth (.kmz) umístěný tam, kde je model na mapě.
keywords: collada, dae, kmz, kml, google earth, blender, export, geolokace, georeferencování, zeměpisná šířka, zeměpisná délka, umístění, 3D programy
from: 81cfec09
---

{{ui:Collada}} na panelu nástrojů (nebo {{ui:Exportovat Collada (.dae, .kmz)…}} v nabídce Soubor ve stylech nabídky a pásu karet) zapíše, co je otevřeno, jako Collada 1.4.1: každý zobrazený model, propojené modely tam, kde jste je umístili.

## Export

1. Zvolte {{ui:Collada}}.
2. Vyberte formát:
   - {{ui:Soubor Collada (.dae) pro Blender a jiné 3D programy}}.
   - {{ui:Balíček Google Earth (.kmz): model umístěný tam, kde je na mapě}}. Nabízí se jen tehdy, když má model umístění.
3. Zvolte možnosti a pak {{ui:Exportovat}}. Soubor se stáhne a stavový řádek ukáže, kolik prvků se do něj dostalo.

| Volba | Co dělá |
|---|---|
| {{ui:Zapsat umístění do souboru}} | Do .dae přidá zeměpisnou šířku, délku, výšku a směr počátku souboru |
| {{ui:Výška}} | {{ui:Na terénu: úroveň 0 modelu leží na terénu}}, nebo {{ui:Vlastní výška modelu nad mořem}} |
| {{ui:Zahrnout místnosti a prostory}} | Prostory se zapíšou také (ve výchozím nastavení jsou vynechány) |
| {{ui:Zahrnout skryté prvky}} | Zapíšou se i prvky, které jste skryli (ve výchozím nastavení se zapíše jen to, co vidíte) |

## Co je v souboru

| V modelu | V souboru Collada |
|---|---|
| Budova, podlaží | Vnořené uzly, podlaží seřazená podle výšky; prvky bez podlaží pod "Unplaced" |
| Každý prvek | Jeden uzel s vlastní sítí, pojmenovaný jako v modelu (jeho název, jinak jeho třída a značka) |
| Třída, GlobalId, předdefinovaný typ | V dodatečných datech uzlu (profil IFC), s přesným názvem (profil ModelCraft) |
| Barvy | Materiály, s průhledností |
| Jednotky a osy | Metry, osa Z nahoru. Úroveň 0 předního modelu je ve výšce 0 |

Model zůstává na celé ploše blízko počátku, takže programy pracující s jednoduchou přesností ho zobrazí bez chvění. ModelCraft zapisuje své soubory Collada stejným zapisovačem a otevírá tyto soubory s jejich názvy prvků.

## Odkud pochází umístění

Umístění určuje přední model stejným způsobem, jakým {{ui:Měřit}} počítá zeměpisnou šířku a délku bodu:

- Převod na mapu (IFC4 IfcMapConversion, nebo sady vlastností IFC2X3) přes souřadnicový systém modelu. Systém, který jste pro model zvolili, má přednost před tím, který uvádí soubor.
- Jinak zeměpisná šířka a délka staveniště (přibližně: pro celé staveniště postačí).

Směr se měří, nepředpokládá se: zohledňuje otočení mapy, pravý sever a konvergenci mapy. Chcete-li modelu přiřadit umístění, použijte {{ui:Počátek na mapě…}} v nástroji {{ui:Měřit}}.

## V jiných programech

- **Google Earth** čte soubor .kmz: model se zobrazí na svém místě, natočený na sever. Prostý .dae nemá místo, odkud by Google Earth umístění četl; použijte .kmz.
- **Blender** (4.x a starší): File, Import, Collada (.dae). Každý prvek se načte jako vlastní objekt se svým materiálem. Umístění je uloženo v dodatečných datech souboru, která Blender nečte. Blender 5.0 zrušil svůj vestavěný importér Collada; tam použijte {{ui:USD}}, nebo místo toho export glTF, případně otevřete .dae v Blenderu 4.5 a uložte jej jako .blend.

Naše testy ověřují každý soubor proti schématu Collada 1.4.1 a načtou jej nezávislou čtečkou Collada. V Blenderu ani v Google Earth jsme je neotevřeli.
