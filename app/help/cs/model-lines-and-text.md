---
title: Čáry modelu a text modelu: kresleny v modelu, na pracovní rovině
summary: Čára modelu je úsečka, mnohočára nebo oblouk, který žije v modelu a zobrazuje se v každém pohledu, který ho vidí. Text modelu je 3D nápis se skutečnou hloubkou. Obojí se kreslí na pracovní rovině.
keywords: čára modelu, text modelu, 3D text, nápis, cedule, značení, čára ve 3D, oblouk, mnohočára, pracovní rovina, vytažený text, písmo, hloubka, podrobná čára, kreslicí čára, anotace, IfcAnnotation
from: fc9cccb5
---

## Co uděláte

Nakreslíte čáry a nápisy, které jsou součástí modelu, ne jednoho pohledu.

## Postup

1. Nejdřív nastavte pracovní rovinu (viz **Pracovní rovina**). Rovina úrovně se kreslí v půdorysu, svislá rovina v prohlížeči pracovní roviny.
2. Pro čáru zvolte v nabídce {{ui:Sestavení}} položku **Čára modelu** a vyberte **Úsečku**, **Mnohočáru** nebo **Oblouk (tři body)**:
   - úsečka jsou dva kliky;
   - mnohočára je klik na každý bod, pak Enter nebo dvojklik. Klik na první bod ji uzavře;
   - oblouk jsou tři kliky: začátek, bod, kterým prochází, a konec.
3. Pro text zvolte **Text modelu**. Napište slova, nastavte výšku velkých písmen a hloubku, pak klikněte, kde text začíná (levý konec jeho základní čáry).
4. Vyberte čáru nebo text a uvidíte je v {{ui:Vlastnosti}}. Slova, výšku a hloubku textu lze změnit tam. {{key:Delete}} odstraní.

## Kde se zobrazují

- Čára modelu se zobrazí v půdorysu své úrovně, v 3D pohledu, v panelu pohledů a řezů a v prohlížeči pracovní roviny, když leží na pracovní rovině. Kreslicí čára (**Anotace**, **Čára**) patří jen jednomu pohledu.
- Text modelu je pevná geometrie: zobrazí se všude, kde se model zobrazuje, v půdorysu, 3D, pohledech a řezech a na listech.
- Čáry modelu se zatím na tištěné listy nekreslí. Text modelu ano.

## Písmo

Text modelu používá stejné písmo jako listy a PDF: Liberation Sans, pod licencí SIL Open Font License. Písmeno, které písmo nemá, se nakreslí jako otazník a je vám sděleno, které. Je jedno písmo a jedna váha. Písmena jsou rozmístěna podle šířek písma, bez kerningu.

## V souboru IFC

- Čára modelu je IfcAnnotation s typem objektu ModelLine. Její tvar je 3D křivka: mnohočára, nebo oříznutá kružnice pro oblouk.
- Text modelu je IfcBuildingElementProxy s typem objektu ModelText. Jeho tvar je jedno vytažené těleso pro každý kus písmene, s otvory písmen jako O a B. Jeho množství jsou plocha čela a objem (plocha čela krát hloubka).

## Dobré vědět

- Jakoukoli velikost lze vytvořit, jak žádáte. Odmítnuta je jen čára bez délky, oblouk, jehož tři body leží na jedné přímce, nebo text bez písmen, protože není co vytvořit.
- Každá čára a každý text nebo jeho změna je jeden krok Zpět.
