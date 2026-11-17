---
title: Athuga steypta hluta og búa til jarðskjálftaálag
summary: Settu upp steypta bjálka og súlur í opna líkaninu, athugaðu þær samkvæmt ACI 318-19, búðu til jafngilda hliðarkrafta samkvæmt ASCE 7-22 á stífum gólfum, og sjáðu hæðarskekkju. Hjálpartæki fyrir verkfræðing til yfirferðar.
keywords: steypa, járnbent steypa, ACI 318, ACI 318-19, steypustyrktarjárn, bjálki, súla, skástífa, bindijárn, jarðskjálfti, jafngildur hliðarkraftur, ELF, ASCE 7-22, skekkja, hæðarskekkja, gólf, stíf skífa, hæðarþyngd, nýting, burðarvirki, verkfræðingur, greining
from: 2f342e72
---

Blokkirnar {{ui:Steypuhlutar}} og {{ui:Jarðskjálftaálag}} á {{ui:Greining}}-flipanum athuga járnbenta steypta bjálka og súlur í opna IFC-líkaninu, og búa til hliðarkrafta jarðskjálfta á gólfum ramma þess. Þær eru sömu blokkir og í DetailCraft, keyrðar eftir greiningu {{ui:Greining}}-flipans, og vistaðar í IFC ásamt öðrum greiningarstillingum.

:::warning
Niðurstöðurnar eru **til yfirferðar af verkfræðingi**: hjálpartæki þar til einhver hefur yfirfarið þær. Steypuathuganir nota fyrsta stigs krafta (súla í ramma sem þú kallar hliðrunarlausan er hönnuð fyrir stækkaða snúningsvægi sitt), án stækkunar vegna hliðrunar, án hönnunar á snúningi, án jarðskjálftaútfærslu (ACI-kafli 18) og án útfærslu bindijárna. Jarðskjálftaálagið sleppir afturvirknistuðlinum, lóðréttum áhrifum jarðskjálfta, snúningsmögnun og P-delta-áhrifum. **Vindálag er ekki smíðað**: vindkaflar staðalsins eru ekki í viðmiðunarsíðum verkefnisins.
:::

## Hvað BimCraft les

Greiningin les bjálka, súlur og skástífur líkansins ásamt sniðum þeirra (sjá [Greina burðarvirkisgrindina](topic:frame-analysis)). Blokkin {{ui:Steypuhlutar}} listar sérhvert snið sem þeir nota. Ýttu á {{ui:Setja upp sem steypu…}} á sniði sem er steypt: BimCraft tekur rétthyrning úr flatarmáli og stífleika sniðsins (breiddina b og dýptina h, sem þú getur síðan breytt), þannig að snið sem er ekki nálægt rétthyrningi (valsað stálsnið) gefur stærð sem þú verður að leiðrétta, eða er látið óhreyft.

Snið sem er sett upp sem steypa, og sérhver hlutur sem efni er nefnt steypa, er greindur sem steypa: E = 4700 √f′c, 2400 kg/m³, og sjálfgefið með **sprungnum sniðum** (súlur 0,70 Ig, bjálkar 0,35 Ig; ACI 318-19 tafla 6.6.3.1.1(a)). Veldu {{ui:Heildarsnið}} til að slökkva á því. Án þessara stillinga er líkanið greint nákvæmlega eins og áður.

## Járn, samsetningar, athugun

Gefðu steypuhlífina, efri, neðri og hliðarjárn (eða súlubúr) og bindijárn hvers sniðs, stilltu f′c, fy, fyt, K og hliðrun eða enga hliðrun. Gefðu álagstilvikum gerð þeirra, ýttu á {{ui:Búa til samsetningar}} (ASCE 7 §5.3.1) og síðan á {{ui:Athuga steypu}}: hver hluti fær nýtingu, litaða á líkaninu. Hlutar yfir burðargetu, og hæðarskekkja yfir mörkum hennar, eru skráðir í {{ui:Vandamál}} með sinni grein; smelltu á einn til að velja hlutinn.

## Gólf og jarðskjálftaálag

Í blokkinni {{ui:Jarðskjálftaálag}} tekur {{ui:Finna gólf}} þær hæðir þar sem tveir eða fleiri bjálkar mætast; hver þeirra verður stíf skífa. {{ui:Taka þyngdir úr tilvikum}} les jarðskjálftaþyngd hvers gólfs úr tilvikunum sem þú gefur stuðul. Fylltu út SDS, SD1, S1, R, Ie, Cd, TL, kerfið og áhættuflokkinn, og síðan {{ui:Búa til jarðskjálftatilvik}} (ASCE 7-22 12.8: lota, grunnskurðarkraftur, dreifing upp gólfin, 5 % tilviljunarkennd snúningur). Krafta hverrar hæðar og skekkjuathugunina (12.12) birtast eftir keyrslu. Sama lota og stífleiki hæðar nýtast í jarðskjálftanum í [Spilaðu flóð, vind eða jarðskjálfta](topic:hazard-playback) þegar þú velur greiningargrindina sem uppruna.

Plötur og veggir úr steinsteypu verða að plötum í greiningunni, og blokkin {{ui:Plötustyrking}} reiknar út stálið sem þær þurfa á metra. Upplýsingar um hverja athugun eru í efni DetailCraft með sama heiti.
