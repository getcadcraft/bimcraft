---
title: Citu modeļu saistīšana koordinācijai
summary: Rādiet citu IFC modeli blakus savējam, atsaucoties uz to (nekad nesapludinot), novietojiet to pēc kopīgajām koordinātēm, kartes koordinātēm vai diviem punktiem, piesaistieties tam zīmēšanas laikā un pārlādējiet to, kad mainās tā fails.
keywords: saite, saistītais modelis, atsauce, xref, koordinācija, federācija, konstrukcija, MEP, konsultants, kopīgas koordinātes, uzmērījums, kartes koordinātes, pārlādēt, izlādēt, dokumenta atsauce, IfcDocumentReference
from: 3e0f1eab
---

## Ko jūs darīsiet

Zīmējiet pret konsultanta modeli (konstrukciju, inženiersistēmām, esošo ēku), neko nekopējot savā failā.

**Saistītais modelis** tiek rādīts 3D skatā un griezts jūsu plānos, bet tas nekad netiek mainīts un nekad netiek saglabāts jūsu modelī. Jūsu modelis saglabā tikai saiti: faila nosaukumu un to, kur tas atrodas.

## Saistīt modeli

1. Kreisā paneļa sadaļā {{ui:Saistītie modeļi}} noklikšķiniet {{ui:Saistīt modeli…}} un izvēlieties IFC failu. Tas tiek parādīts uzreiz, un tā rindā ir **Rādīts**.
2. Izvēlieties, kur tas tiek novietots sadaļā {{ui:Novietojums}}:
   - **Kopīgas koordinātes** (sākumā): tā koordinātes ir jūsējās, it kā abi modeļi būtu izlikti no viena sākumpunkta.
   - **Kartes koordinātes**: abu failu kartes koordinātes tos saskaņo (abiem jābūt kartes pārveidojumam; BimCraft to norāda, ja kādam tāda nav).
   - **Pēc diviem punktiem…**: noklikšķiniet punktu saistītajā modelī, tad vietu jūsu modelī; pēc tam vēl vienu pāri. Saite tiek pārvietota un pagriezta (ap vertikālo asi), lai atbilstu.
3. Katra saites un novietojuma izmaiņa ir viens solis: {{key:Mod+Z}} to atsauc.

## Strādāt ar to

- Plānos saistītais modelis redzams kā plāni griezumi griezuma augstumā, un rīks {{ui:Siena}} un citi zīmēšanas rīki piesaistās tā stūriem un malām.
- Atlasiet tā elementus 3D skatā, lai nolasītu to rekvizītus; saistītais modelis nav tas, ko rediģējat, tāpēc tā radio poga sadaļā {{ui:Modeļi}} ir izslēgta.
- **Fails ir mainījies?** Ja pārlūkprogramma var pārraudzīt failu (fails, atvērts ar tā failu atlasītāju, vai programmā Studio), BimCraft pats pārlādē saiti dažas sekundes pēc tam, kad fails atkal ir saglabāts, un par to paziņo. Citādi noklikšķiniet {{ui:Pārlādēt}}.
- {{ui:Izlādēt}} to paslēpj un atbrīvo atmiņu; saite paliek jūsu modelī. {{ui:Ielādēt…}} to atkal parāda (jūs izvēlaties failu: pārlūkprogramma pati nevar atvērt failu pēc tā nosaukuma).
- × noņem saiti no jūsu modeļa.

## Ko vajadzētu redzēt

- Jūsu IFC failā: IfcDocumentReference katrai saitei (faila nosaukums), saistīts ar projektu, un tās novietojums projekta rekvizītu kopā CadCraft_Links. Atkārtoti atverot modeli, tā saites uzskaitītas kā **Nav ielādēts**, līdz tās ielādējat.

:::note
Sadursmju pārbaudes, Salīdzināšana un Meklēšana var izmantot ielādētu saiti kā jebkuru citu atvērtu modeli: skatiet [Vairāku IFC modeļu skatīšana kopā](topic:several-models).
:::
