---
title: Atlasīt elementus pēc klases, nosaukuma vai rekvizīta
summary: Atrodiet visus elementus, kas atbilst vienam vai vairākiem noteikumiem — to klasei, nosaukumam, tipam, stāvam, materiālam vai jebkurai rekvizīta vērtībai, atlasiet tos visus un saglabājiet noteikumus kā nosauktu meklēšanas kopu.
keywords: atrast, meklēt, filtrs, vaicājums, noteikums, meklēšanas kopa, atlases kopa, saglabāta meklēšana, rekvizīts, vērtība, klase, materiāls, atlasīt visus
from: 3d293bc2
---

## Ko jūs darīsiet

Atlasiet visus vienas veida elementus vai elementus ar vienu vērtību vienā solī: visas durvis, katru sienu 2. līmenī, visus elementus ar ugunsizturību EI60, katru sienu, kas maksā vairāk par noteiktu summu.

## Soļi

1. Atveriet IFC modeli.
2. Kreisajā panelī atveriet {{ui:Meklēt}}.
3. Pirmajā noteikumā izvēlieties rekvizītu (vispirms paša elementa rekvizītus, piemēram, {{ui:Klase}} un {{ui:Stāvs}}, pēc tam modeļa rekvizītu kopas), salīdzināšanas veidu un vērtību. Vērtību lodziņā tiek piedāvātas modelī esošās vērtības.
4. Lai sašaurinātu meklēšanu, noklikšķiniet uz {{ui:Pievienot noteikumu}}. Izvēlieties {{ui:Visi noteikumi}}, ja nepieciešami visi, vai {{ui:Jebkurš noteikums}}, ja pietiek ar vienu.
5. Noklikšķiniet uz {{ui:Meklēt}} vai nospiediet {{key:Enter}} vērtību lodziņā. Atbilstošie elementi tiek atlasīti.
6. Lai saglabātu noteikumus, noklikšķiniet uz {{ui:Saglabāt kā kopu}}, ierakstiet nosaukumu un noklikšķiniet uz tā vēlreiz. Vēlāk, noklikšķinot uz kopas nosaukuma, varat meklēt ar šo kopu.

## Ko jums vajadzētu redzēt

- Atbilstošie elementi ir atlasīti 3D skatā un modeļa kokā, un {{ui:Rekvizīti}} rāda, cik ir atbilstošu katrā klasē. Nospiediet {{key:I}}, lai rādītu tikai tos, un {{key:H}}, lai tos paslēptu.
- Vārdi tiek atrasti neatkarīgi no lielajiem un mazajiem burtiem. Skaitļi tiek salīdzināti kā skaitļi: "ir lielāks par 1000" nozīmē vērtību, nevis tekstu.
- {{ui:ir vērtība}} un {{ui:nav vērtības}} nav nepieciešama vērtība; tie atrod to, kam vērtība ir vai nav aizpildīta.
- Saglabātās kopas paliek šajā pārlūkprogrammā visiem modeļiem, ko atverat.

## Biežākās kļūdas

- **Nekas netiek atrasts.** Noteikumam nepieciešama vērtība, ar ko var salīdzināt: aplūkojiet ieteikumus vērtību lodziņā.
- **Rekvizīts nav sarakstā.** Šajā modelī nav neviena elementa ar formu, kuram tas būtu.

## Tālāk

- [Krāsot elementus pēc rekvizīta](topic:color-by-property)
- [Paslēpt, izolēt un padarīt elementus caurspīdīgus](topic:hide-and-isolate)
