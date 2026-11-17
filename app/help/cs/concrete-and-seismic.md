---
title: Kontrola betonových prvků a tvorba seismických zatížení
summary: Nastavte výztuž betonových trámů a sloupů otevřeného modelu, zkontrolujte je podle ACI 318-19, vytvořte ekvivalentní vodorovné síly podle ASCE 7-22 pro tuhá podlaží a sledujte mezipodlažní posun. Pomůcka pro kontrolu inženýrem.
keywords: beton, železobeton, ACI 318, ACI 318-19, výztuž, trám, sloup, smyk, třmínky, seismický, zemětřesení, ekvivalentní vodorovná síla, ELF, ASCE 7-22, posun, mezipodlažní posun, podlaží, tuhá deska, tíha podlaží, vytížení, konstrukční, inženýr, analýza
from: 2f342e72
---

Bloky {{ui:Betonové prvky}} a {{ui:Seismická zatížení}} na kartě {{ui:Analýza}} kontrolují železobetonové trámy a sloupy otevřeného IFC a vytvářejí vodorovné síly zemětřesení na podlažích jeho rámu. Jsou to tytéž bloky jako v DetailCraftu, spouštějí se po analýze z karty {{ui:Analýza}} a ukládají se do IFC spolu s ostatním nastavením analýzy.

:::warning
Výsledky jsou **určeny ke kontrole inženýrem**: pomůcka, dokud je inženýr neprověří. Betonové kontroly používají síly prvního řádu (sloup v rámu, který označíte jako bez posunu, je navržen na svůj zvětšený moment), bez zvětšení od posunu (sway), bez návrhu na krut, bez seismického detailování (kapitola 18 ACI) a bez detailování třmínků. Seismická zatížení nezahrnují součinitel redundance, svislý seismický účinek, zesílení od krutu a účinky P-delta. **Zatížení větrem ještě není hotovo**: větrné kapitoly normy nejsou v referenčních stránkách projektu.
:::

## Co BimCraft čte

Analýza čte trámy, sloupy a ztužidla modelu s jejich profily (viz [Analýza konstrukčního rámu](topic:frame-analysis)). Blok {{ui:Betonové prvky}} vypisuje každý průřez, který používají. Na průřezu, který je betonový, stiskněte {{ui:Nastavit jako beton…}}: BimCraft vezme obdélník z plochy a tuhosti profilu (šířku b a výšku h, které pak můžete změnit), takže průřez, který se obdélníku nepodobá (válcovaný ocelový profil), dá rozměr, který musíte opravit, nebo se nechá být.

Průřez nastavený jako beton a každý prvek, jehož materiál se jmenuje beton, se analyzuje jako beton: E = 4700 √f′c, 2400 kg/m³ a ve výchozím nastavení s **trhlinami v průřezu** (sloupy 0.70 Ig, trámy 0.35 Ig; ACI 318-19 tabulka 6.6.3.1.1(a)). Chcete-li to vypnout, zvolte {{ui:Plné průřezy}}. Bez těchto nastavení se model analyzuje přesně jako dřív.

## Výztuž, kombinace, kontrola

Zadejte u každého průřezu krytí, horní, spodní a boční pruty (nebo koš sloupu) a třmínky, nastavte f′c, fy, fyt, K a posuvný nebo nepohyblivý rám. Zadejte zatěžovacím případům jejich druh, stiskněte {{ui:Vytvořit kombinace}} (ASCE 7 §5.3.1) a pak {{ui:Zkontrolovat beton}}: každý prvek dostane vytížení, obarvené na modelu. Prvky nad kapacitou a posun podlaží nad svou mezí jsou uvedeny v {{ui:Problémy}} s příslušným ustanovením; kliknutím na jeden jej vyberete.

## Podlaží a seismická zatížení

V bloku {{ui:Seismická zatížení}} {{ui:Najít podlaží}} vezme úrovně, kde se sejdou dva nebo více trámů; každá se stane tuhou stropní deskou. {{ui:Převzít tíhy z případů}} načte seismickou tíhu každého podlaží z případů, kterým zadáte součinitel. Vyplňte SDS, SD1, S1, R, Ie, Cd, TL, systém a kategorii rizika, pak {{ui:Vytvořit seismické případy}} (ASCE 7-22 12.8: perioda, smyková síla u základny, rozdělení po podlažích, 5 % náhodný krut). Síly podlaží a kontrola posunu (12.12) se zobrazí po výpočtu. Stejná perioda a tuhost podlaží vstupují do zemětřesení v [Přehrání povodně, větru nebo zemětřesení](topic:hazard-playback), když jako jeho zdroj vyberete analytický rám.

Betonové desky a stěny se v analýze stanou deskami a blok {{ui:Výztuž desek}} spočítá potřebnou výztuž na metr. Podrobnosti každé kontroly jsou v tématu DetailCraftu se stejným názvem.
