---
title: Schodiště a zábradlí
summary: Nakreslete přímá, L, U a vějířová schodiště, která si dopočítají výšku stupnic a hloubku nášlapů z výšky mezi podlažími, s madly a balustry a s otvorem pro schodiště vyříznutým v podlaží nad nimi; nakreslete ochranná zábradlí podél teras a kolem otvorů.
keywords: točité schodiště, kulaté schodiště, schodiště, schody, schodišťové rameno, stupnice, nášlap, podesta, vějířový stupeň, schodiště L, schodiště U, zalamované schodiště, madlo, ochranné zábradlí, ochrana, zábradlí, balustr, tyčka, sloupek, schodišťový otvor, volná výška, terasa, balkon
from: 16e5ace4
---

## Co provedete

Přidávejte schodiště mezi podlažími a zábradlí tam, kde jsou potřeba. Schodiště si podle výšky mezi podlažími spočítá vlastní stupně, udrží je v běžných obytných mezích, na otevřených stranách umístí madla a v podlaží nad ním vyřízne schodišťový otvor.

## Nakreslení schodiště

1. Na podlaží, kde schodiště začíná, otevřete {{ui:Sestavení}} a zvolte {{ui:Schodiště}}.
2. Zvolte druh — **Přímé**, **L s podestou**, **U s podestou** nebo **L s vějířovými stupni** — dále to, kterým směrem se **otáčí**, jeho **šířku** a kam mají jeho **madla**.
3. Klikněte tam, kde schodiště začíná: doprostřed přední hrany spodního stupně.
4. Pohybujte kurzorem ve směru, kterým schodiště stoupá; stupně ho budou následovat, s počtem stupnic a nášlapů. Přichytí se ke stěnám a ke krokům po 15°; pro zachování pravého úhlu podržte {{key:Shift}}.
5. Klikněte. Klávesou {{key:Esc}} začnete znovu.

## Nakreslení točitého schodiště

1. Otevřete {{ui:Sestavení}}, zvolte {{ui:Schodiště}} a jako druh zvolte **Točité**.
2. Nastavte **Otáčení**, tedy směr, kterým stoupá (vlevo je proti směru hodinových ručiček).
3. Klikněte do středu jeho sloupku.
4. Klikněte ve směru, kam ukazuje spodní nášlap.

Začíná s šířkou 30" (nášlap od sloupku k vnějšku) a se sloupkem 4½". Stupnice se dopočítají z výšky mezi podlažími, nejvýše 9½" ve výchozím nastavení. Nášlapy jsou hluboké 7½" na chodné čáře, 12" od sloupku. Madlo vede na vnější straně.

V **Vlastnostech** přidá točité schodiště **Středový sloupek** a jeho průměr. Pole **Nášlap** se měří na chodné čáře. Jeho kontroly jsou označeny jako výchozí hodnoty pro točité schodiště: čistá šířka 26", nášlap na chodné čáře alespoň 6¾", stupnice nejvýše 9½" a madla 34"–38". Nejde o inženýrské výpočty; o tom rozhoduje stavební úřad.

## Jak se počítají stupně

Výška mezi podlahou úrovně a úrovní nad ní se rozdělí na stejné stupnice, každá nejvýše 7¾", a každý nášlap je hluboký 10" (obojí lze změnit ve **Vlastnostech**). Podesta se počítá jako jeden stupeň; vějířové stupně jsou tři stupně rozložené kolem vnitřního rohu. Změníte-li výšku úrovně, každé schodiště na ní se přepočítá.

:::warning
Stupnice 7¾", nášlapy 10", šířka 36", volná výška 6'-8" a madla 34"–38" jsou výchozí hodnoty podle obvyklých obytných předpisů, nejde o inženýrské výpočty. **Vlastnosti** ukazují, které z nich jsou splněny; o tom, co platí, rozhoduje stavební úřad.
:::

## Změna schodiště

Vyberte ho (klikněte na něj v půdorysu nebo ve 3D pohledu) a změňte ve **Vlastnostech** jeho druh a otáčení, šířku, nejvyšší stupnici, hloubku nášlapu, madla a jejich výšku, a možnost **Vyříznout podlahu nad** pro schodišťový otvor. Stupnice a nášlapy, které nakonec vyšly, jsou zobrazeny pod nimi.

## Schodišťový otvor

Pokud má podlaží nad ním podlahu, schodiště ji vyřízne tam, kde by kroky měly méně než 6'-8" volné výšky. Výřez se pohybuje se schodištěm a zmizí, když se schodiště smaže.

## Nakreslení zábradlí

1. Otevřete {{ui:Sestavení}} a zvolte {{ui:Zábradlí}}.
2. Zvolte **Ochranné zábradlí** (výška 36") nebo **Madlo** a jeho výšku.
3. Klikněte podél hrany — terasy, balkonu, kolem schodišťového otvoru — a dvojklikem nebo stisknutím {{key:Enter}} dokončete.

Zábradlí dostane sloupky na koncích a rozích a balustry s mezerami menšími než 4". Vyberte jedno a změňte jeho druh, výšku nebo to, jak vysoko nad podlahou začíná.

## Nakreslení plotu

Ve stejném nástroji Zábradlí zvolte **Plot**, nastavte jeho výšku (zpočátku 1800 mm), klikněte podél čáry plotu a stiskněte {{key:Enter}}.

- Plot dostane sloupek na každém konci a rohu a sloupek nejvýše každých 2.4 m mezi nimi. Panelový plot má panel mezi sloupky; latový plot má dvě příčle. Tyto rozměry jsou obvyklé volby, nejde o požadavek předpisu: místní pravidla omezují výšku plotu.
- Je to jeden prvek v modelu (IfcRailing s názvem Fence) se sadou vlastností {{ui:CadCraft_Fence}}: styl, výška, sloupky, panely, příčle, brány, délka a plocha panelů. Jeden krok zpět.
- Zde se nekreslí: brány (rozmisťuje je generátor v CivilCraft), svislé latě, terén (plot stojí na podlaží) a výběr jednotlivého sloupku.

## Co se uloží

Schodiště se uloží jako schodiště IFC z ramen (se stupnicemi, nášlapy, výškou stupnic a délkou nášlapu), podest, vějířových stupňů a madel; schodišťový otvor je otvor v podlahové desce nad ním. Zábradlí jsou zábradlí IFC s jejich délkou a počtem balustrů a sloupků.
