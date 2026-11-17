---
title: Simbolu paleta
summary: Atrodiet elektriskos un santehnikas simbolus pēc nosaukuma vai attēla, atzīmējiet ar zvaigznīti tos, ko lietojat, un novietojiet tos plānā ar vienu klikšķi.
keywords: simbolu paleta, simbolu rīkjoslas poga, sienai seko, simboli, elektriskie simboli, santehnikas simboli, santehnikas plāns, ūdens klozets, tualete, umivalnis, izlietne, vanna, duša, grīdas notekcaurule, tīrīšanas lūka, šļūtenes krāns, ūdens sildītājs, vārsts, vārtu vārsts, aukstais ūdens, karstais ūdens, notekūdeņi, ventilācija, līniju stils, izlase, meklēšana
from: 67f20bc0
---

## Ko jūs darīsiet

Atveriet vienu paneli, kurā uzskaitīti elektriskie simboli un santehnikas plāna simboli ar to attēliem un nosaukumiem, atrodiet vajadzīgo un novietojiet to plānā. Nekas šeit neprasa internetu: simboli ir iekļauti lietotnē.

## Atveriet paleti un novietojiet simbolu

1. Atveriet modeli un atveriet {{ui:Būvējums}} › {{ui:Simbolu paleta}} (ierakstītā komanda: SYMBOLS). Tā pati poga ir izvēlnē Rīki zīmēšanas joslā un kā **Simboli** rīkjoslas grupā Bibliotēkas.
2. Izvēlieties komplektu: **Elektriskie** vai **Santehnika**, vai **Visi komplekti**. Meklēšanas lodziņā ierakstiet, lai sašaurinātu sarakstu. Meklēt var pēc nosaukuma vai saīsinājuma (WC, CW, HB).
3. Noklikšķiniet uz simbola. Plāns ir gatavs to novietot.
   - **Elektrisks** simbols aktivizē Elektrisko rīku ar izvēlēto ierīci, tātad viss, kas attiecas uz [Elektrisko plānu](topic:electrical-plan), attiecas arī uz to: noklikšķiniet plānā, viens atsaukšanas solis.
   - **Santehnikas** simbols aktivizē plāna simbolu rīku. Noklikšķiniet plānā. Armatūra, kas atrodas pie sienas (tualete, umivalnis, vanna, izlietne, šļūtenes krāns), piesaistās tuvākajai sienas virsmai ar muguru pret sienu; notekas, vārsti, ūdens sildītājs un līniju stili tiek novietoti tur, kur noklikšķināt.
4. Nospiediet {{key:R}}, lai pagrieztu simbolu par 90 grādiem ({{key:Shift}}+{{key:R}} pagriež pretējā virzienā), vai ierakstiet leņķi laukā **Rotācija** opciju joslā. Nospiediet {{key:Esc}}, lai pārtrauktu.

Armatūra vai šļūtenes krāns, kas piesaistījās sienas virsmai, atceras šo sienu: kad siena tiek pārvietota, simbols pārvietojas kopā ar to (tā pati virsma, tāds pats attālums pa sienu) tajā pašā atsaukšanas solī. Ja dzēšat sienu, simbols paliek tur, kur bija, un Problēmās parādās "zaudējusi sienu"; pārvietojiet vai dzēsiet to. Simboli, kas novietoti tālu no sienām, ni ar ko nav saistīti.

Katrs novietotais simbols ir viens atsaukšanas solis. Novietots simbols IFC failā ir plāna anotācija ar savu birku (WC1, WC2, ...). Atlasiet to, lai mainītu tā birku vai pagriezienu **Rekvizītos**, vai nospiediet {{key:Delete}}.

## Ko satur santehnikas komplekts

Armatūra (ūdens klozets, pisuārs, umivalnis, vanna, duša, virtuves izlietne, viena izlietne), grīdas notekcaurule, grīdas un sienu tīrīšanas lūkas, šļūtenes krāns, sienas hidrants, ūdens sildītājs, vārsti (vārtu, globusa, lodīšu, pretvārsts, tauriņa, spiedienu reducējošais) un līniju stili ar to saīsinājumiem: aukstais ūdens (CW), karstais ūdens (HW), karstā ūdens atgaise (HWR), notekūdeņi (W), ventilācija (V), lietus kanalizācija (SD) un gāze (G). Zīmējumi mērogojas kopā ar plānu, tāpēc uz izdrukātās lapas saglabā savu izmēru. Līniju stils ir īss posms, kas parāda stilu plānā; reālos cauruļu posmus zīmējiet ar cauruļu rīkiem.

:::note
Tie ir parasti santehnikas plāna apzīmējumi, ko esam izveidojuši paši; tie nav sertificēti pēc ISO 4067-1 vai ASME Y32.4. Tie salīdzināti ar publiskiem zīmējumu apzīmējumiem un mācību rokasgrāmatām (saraksts ir komplekta avotu piezīmē, kur norādīts, kur sakrītam un kur atšķiramies), nav nokopēti no kāda izstrādājuma, un tos drīkst brīvi lietot (Apache-2.0). Zīmējumu komplekti atšķiras, tāpēc pārbaudiet sava projekta apzīmējumu. Tie ir plāna simboli, nevis santehnikas projekts: tie neaprēķina caurules un nepārbauda normas.
:::

## Izlase un tastatūra

- Noklikšķiniet uz zvaigznītes simbolā (vai nospiediet {{key:F}} uz tā), lai to saglabātu izlasē. Izlase tiek rādīta pirmā un paliek šajā pārlūkprogrammā. **Tikai izlase** parāda tikai tos.
- {{key:Down}} no meklēšanas lodziņa pārvieto uz simboliem; bultiņu taustiņi, {{key:Home}} un {{key:End}} pārvieto starp tiem; {{key:Enter}} izvēlas fokusēto; {{key:Esc}} aizver paleti.
- Tālrunī palete ir lapa ekrāna apakšā; izvēloties simbolu, tā pāriet malā, lai redzētu plānu. Atveriet to vēlreiz no izvēlnes Būvējums vai opciju joslas pogas **Palete**.

:::tip
Ja fails izmanto simbolu komplektu, kāda šai versijai nav, plānā simbola vietā parādās kastīte, un Problēmās tas tiek norādīts.
:::

## Saistiet novietotu elementu ar simbolu

Gaismeklis no bibliotēkas ir 3D elements, bet elektriskajā izkārtojumā tas parādās kā savs simbols. Jūs to novietojat **vienreiz** un saistāt:

1. Izvēlieties Būvējums › **Simbolu saite** (vai ierakstiet SYMBOLLINK). Kreisajā panelī atveras sadaļa Simbolu saite.
2. Atlasiet novietotos elementus plānā vai 3D. Sadaļā norādīts, cik ir atlasīti un ar ko tie saistīti.
3. Izvēlieties **Simbolu** (no jebkura simbolu komplekta: Elektriskie, Santehnika) un izvēlieties **Saistīt**.

Elements joprojām ir viens elements, un katra specifikācija to skaita vienreiz:

- **3D** vienmēr rāda tā korpusu.
- **Plāns** rāda tā plāna formu, kā līdz šim.
- Plāns, kura **Šis skats rāda saistītos elementus kā** ir iestatīts uz **To simbolu (inženiertīklu izkārtojums)**, rāda simbolu tā vietā. Klikšķis uz simbola atlasa elementu. Izvēle tiek saglabāta šim skatam (līmeņa grīdas plānam, tā griestu plānam vai izsaukumam) failā.

**Pagriezt simbolu par 90°** pagriež simbolu attiecībā pret tā elementu. **Noņemt saiti** noņem saiti; elements paliek. Specifikācija **Saistītie simboli** uzskaita katru saistīto elementu vienu reizi kopā ar tā līmeni un telpu, kurā tas atrodas.

Vēl nav izveidots: skata izvēle lapā ir tā līmeņa plāna izvēle, ko tā rāda; ar Elektrisko rīku novietotās ierīces ir simboli katrā plānā, kā līdz šim.
