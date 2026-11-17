---
title: Dzēst, izgriezt, kopēt un ielīmēt būvelementus
summary: Atlasiet sienas, durvis, mēbeles vai jebko citu IFC modelī; dzēsiet tos, izgriezt tos vai kopējiet un ielīmējiet tos klikšķa vietā, savā vietā vai citā stāvā.
keywords: dzēst, noņemt, izdzēst, izgriezt, kopēt, ielīmēt, dublēt, pārvietot, atlasīt visu, atlasīt visus, būvelements, siena, durvis, logs, kāpnes, atvērums, atsaukt
from: d9eec37f
---

## Ko darīsiet

Mainīsiet IFC modeļa saturu: izņemsiet elementus, kurus nevēlaties, kopēsiet sienu vai mēbeļu kopumu uz citu vietu vai pārvietosiet elementus, tos izgriežot un ielīmējot. Katra izmaiņa ir viens solis, ko var atsaukt, un saglabāšana ieraksta jaunu failu, tāpēc sākotnējais fails paliek nemainīts.

## Soļi

1. Atveriet IFC modeli. Skatiet [Atveriet IFC modeli un apskatiet to 3D](topic:open-ifc-model).
2. Atlasiet to, ko mainīt: noklikšķiniet uz elementa, turiet nospiestu {{key:Mod}} vai {{key:Shift}} un noklikšķiniet, lai atlasītu vairāk, vai nospiediet {{key:Mod+A}} ({{ui:Vairāk}}, {{ui:Atlasīt visu}}), lai atlasītu visus redzamos elementus.
3. Pēc tam:
   - **Dzēst:** nospiediet {{key:Delete}} vai {{ui:Vairāk}}, {{ui:Dzēst}}.
   - **Kopēt:** nospiediet {{key:Mod+C}} vai noklikšķiniet uz {{ui:Kopēt}}.
   - **Izgriezt:** nospiediet {{key:Mod+X}} vai {{ui:Vairāk}}, {{ui:Izgriezt}}. Elementi tiek noņemti, un tos var ielīmēt.
4. Lai ielīmētu, nospiediet {{key:Mod+V}} vai noklikšķiniet uz {{ui:Ielīmēt}}. Caurspīdīga kaste, kas atbilst kopētā izmēram, seko rādītājam stāvā, kas izvēlēts novietošanas joslā. Nospiediet {{key:R}}, lai to pagrieztu par 90°, un tad noklikšķiniet, kur to novietot. Katrs klikšķis novieto vēl vienu kopiju; lai apturētu, nospiediet {{key:Esc}}.
5. Vai nospiediet {{key:Mod+Shift+V}} ({{ui:Vairāk}}, {{ui:Ielīmēt vietā}}): pēc izgriešanas elementi atgriežas tieši tur, kur bija; pēc kopēšanas kopija tiek novietota tieši blakus oriģinālam.
6. Noklikšķiniet uz {{ui:Saglabāt kā IFC}}, lai lejupielādētu rediģēto modeli.

## Kas pieder pie elementa

- **Daļas:** kāpnes ņem līdzi savus posmus, aizkaru siena — savus paneļus; jebkurš elements, kas sastāv no daļām, ņem visas tās.
- **Atvērumi:** siena ņem līdzi tajā izgrieztos atvērumus. Durvju vai logu dzēšana noņem arī atvērumu, ko tās aizpildīja, tāpēc siena aizveras, kā tas notiek autorēšanas programmā. Sienas dzēšana, kas zīmēta BimCraft, dzēš arī tās durvis un logus un savieno atlikušās sienas. Sienas dzēšana no citur izveidota faila atstāj tās durvis un logus tajās pašās vietās.
- **Dati:** kopijai ir tāds pats tips, materiāli, īpašību kopas un daudzumi kā oriģinālam, kā arī jauns GlobalId. Ja vēlāk mainīsiet vērtību kopijā, oriģināls paliek nemainīts.
- **Bibliotēkas vienumi** saglabā savus bibliotēkas datus; kopija saņem nākamo brīvo vienuma numuru, bet izgriezts vienums, kas ielīmēts atpakaļ, paglabā savu numuru.

## Ko vajadzētu redzēt

- "Dzēsts: …" vai "Ielīmēts: …" sarakstā {{ui:Izmaiņas}}. {{key:Mod+Z}} atsauc pēdējo izmaiņu; {{key:Mod+Y}} to atjauno.
- Pēc dzēšanas statusa rindā ir norādīts, cik daļu un atvērumu tika dzēsti līdzi.
- Ielīmētie elementi ir atlasīti, tāpēc tos var ielīmēt vietā vēlreiz, lai izveidotu rindu, vai dzēst.

## Noderīgi zināt

- Kopijas izmanto to pašu ģeometriju kā oriģināls (IFC ļauj elementiem to dalīties), tāpēc fails pieaug ļoti maz.
- Būvelementi tiek ielīmēti tajā modelī, no kura tie kopēti, tajā pašā cilnē. Lai izmantotu novietotos bibliotēkas vienumus citā modelī, kopējiet vienu vienumu vienlaikus: skatiet [Kopējiet, ielīmējiet un dublējiet bibliotēkas vienumus](topic:copy-paste).
- Stāvus, telpas, ēkas un zemesgabalu nevar dzēst vai kopēt. Atlasiet elementus tajos. Telpa, kas zīmēta BimCraft, veidojas no apkārtējām sienām: dzēsiet sienu, lai savienotu divas telpas.
- Sienas, durvis un logi, kas zīmēti ar BimCraft paša sienu, durvju un logu rīkiem, pagaidām nevar kopēt, izgriezt vai dublēt; statusa rindā tas ir norādīts. Zīmējiet tos vēlreiz. Dzēšana darbojas.
- Kopēšana arī ieliek kopēto elementu nosaukumus un īpašības starpliktuvē kā tekstu, lai tos varētu ielīmēt izklājlapā vai e-pastā.

## Biežākās kļūdas

- **{{ui:Dzēst}} ir pelēks.** Nekas nav atlasīts, vai atlasīti tikai stāvi vai telpas. Norādiet uz to, lai izlasītu iemeslu.
- **Ielīmēšana saka, ka elementi nāk no cita modeļa.** Pēc kopēšanas esat atvēris citu modeli. Atveriet pirmo modeli un kopējiet elementus tur.
- **Ielīmētā kopija atrodas citā stāvā.** Novietošanas joslas {{ui:Stāvs}} nosaka, kur tā tiks novietota; izvēlieties stāvu, pirms noklikšķināt.

## Saistītie raksti

- [Paslēpt, izolēt un redzēt caur elementiem](topic:hide-and-isolate)
- [Taustiņi un pele](topic:keyboard#edit)
