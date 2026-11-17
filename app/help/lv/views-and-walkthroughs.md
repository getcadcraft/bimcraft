---
title: Skatu un staigājumu saglabāšana
summary: Saglabājiet modeļa kameru skatus pēc nosaukuma, atgriezieties pie tiem, atskaņojiet tos pēc kārtas un ierakstiet staigājumu pa ēku, ko atskaņot vēlāk.
keywords: skati, saglabātie skati, kamera, kameras, skatpunkts, aina, ainas, tūre, prezentācija, staigājums, staigāt, lidojums, ierakstīt, atskaņot, ceļš, animācija
from: 3af19a36
---

{{ui:Skati}} rīkjoslā saglabā 3D skata kameras modeļa failā, lai jūs un tie, kam to nosūtāt, varētu tieši atgriezties pie tām.

## Skata saglabāšana

1. Iestatiet 3D skatu: grieziet, tāliniet, paslēpiet to, ko nevēlaties.
2. Noklikšķiniet uz {{ui:Skati}}, ierakstiet nosaukumu (vai paturiet piedāvāto) un noklikšķiniet uz {{ui:Saglabāt skatu}} vai nospiediet {{key:Enter}}.

Saglabājot ar sarakstā jau esošu nosaukumu, šis skats tiek atjaunināts. Noklikšķiniet uz skata nosaukuma, lai atgrieztos pie tā; kamera tur vienmērīgi pārvietojas.

Bultiņas maina kārtību, zīmulis pārdēvē, grozs dzēš. Katra izmaiņa ir viens solis, tāpēc {{key:Ctrl+Z}} to atsauc.

## Skatu atskaņošana

{{ui:Atskaņot skatus}} pāriet no viena skata uz nākamo saraksta secībā, uz mirkli apstājoties pie katra. {{key:Esc}} vai {{ui:Apturēt}} to beidz.

## Staigājuma ierakstīšana

1. Ieslēdziet [Staigāšana](topic:walk) un sākiet staigāt ēkā.
2. Sadaļā {{ui:Skati}} noklikšķiniet uz {{ui:Ierakstīt staigājumu}}.
3. Staigājiet ar {{key:W}} {{key:A}} {{key:S}} {{key:D}} un skatieties apkārt ar peli.
4. Noklikšķiniet uz {{ui:Pārtraukt ierakstīšanu}}. Staigājums tiek saglabāts kā "Walk 1" ar tā garumu.

Noklikšķiniet uz staigājuma, lai to atskaņotu tā, kā to staigājāt. {{key:Esc}} to aptur.

## Staigājuma renderēšana video

Noklikšķiniet uz filmas ikonas blakus staigājumam. Video dialogs zīmē katru staigājuma kadru ar Renderēšanas iestatījumiem, ko izvēlējāties pēdējo reizi, tādā izmērā, kadru ātrumā un kvalitātē, ko izvēlaties šeit. Saglabājiet to kā WebM vai MP4 video vai kā ZIP ar vienu attēlu katram kadram. Kadri aizņem tikpat ilgi kā attēli, tāpēc sāciet ar {{ui:Ātri}}.

## Staigājuma komentēšana

Noklikšķiniet uz runas burbuļa ikonas blakus staigājumam. Rakstiet vienu rindu katram teiktajam, un katru rindu sāciet ar laiku, kad tā sākas (`12`, `0:12` vai `1:02.5`); rinda bez laika seko iepriekšējai pēc laika, kāds nepieciešams tās izrunāšanai. Izvēlieties valodu, klienta valodā, ja to skatīsies klients. {{ui:Priekšskatīt}} atskaņo vārdus ar šī datora paša balsi un parāda tos kā subtitrus; tas pats notiek katru reizi, kad staigājums tiek atskaņots. {{ui:Saglabāt kopā ar staigājienu}} saglabā komentāru IFC failā kopā ar staigājumu.

Jūsu pašu pieslēgtais asistents var uzrakstīt komentāru jums: lūdziet tam apskatīt staigājumu un saglabātos skatus, un tas uzliek rindas valodā, ko nosaucat, kā vienu atsaukšanas soli.

Renderētajam video nav paša skaņas, jo pārlūkprogramma nevar ierakstīt savu balsi. Saglabājiet subtitrus (`.srt` vai `.vtt`) un pievienojiet tos video savā video atskaņotājā vai redaktorā. Kuras balsis var izvēlēties, ir atkarīgs no datora: valoda bez uzstādītas balss saņem tikai subtitrus.

## Failā

Skati un staigājumi IFC failā glabājas kā rekvizītu kopa `CadCraft_Views` projektā: parasts IFC, ko citas programmas ignorē. Tie ir pirmā modeļa koordinātēs, tāpēc tie joprojām atbilst pēc modeļa pārlādēšanas vai cita modeļa pievienošanas.

:::tip
Lai no saglabāta skata renderētu attēlu, dodieties uz skatu un tad noklikšķiniet uz [Renderēt](topic:render).
:::
