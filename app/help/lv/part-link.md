---
title: Elementa nosūtīšana uz PartCraft un atgriešana
summary: Atlasiet balstu, kronšteinu, margas vai aprīkojuma gabalu, projektējiet to PartCraft kā detaļu ar ap to esošo ēku un pieņemiet jauno formu atpakaļ modelī.
keywords: partcraft, detaļa, nosūtīt, saite, elements, balsts, kronšteins, žogs, margas, aprīkojums, projektēšana, cikls, pieņemt, mainīts, detaļu saites
from: 4ce2f449
---

## Ko darīsiet

Projektējiet vienu ēkas elementu kā detaļu: nosūtiet to uz PartCraft, pamainiet tur (izgriezt, pievienot, urbt, mainīt izmēru) un atgrieziet jauno formu modelī.

## Soļi

1. Atlasiet vienu elementu modelī: vispārīgu elementu, aprīkojumu, kolonnu, sijā, margas vai mēbeles.
2. Rīkjoslā izvēlieties {{ui:Detaļu saites}} un tad {{ui:Nosūtīt uz PartCraft}}. PartCraft atveras jaunā cilnē ar elementu kā detaļu. Elementi 3 m attālumā tiek zīmēti pelēki līdzās, lai to varētu projektēt savā vietā. Tos tur nevar mainīt.
3. Mainiet detaļu PartCraft. PartCraft izvēlieties {{ui:Fails}} › {{ui:Eksportēt}} › {{ui:Saglabāt atpakaļ BimCraft}}. Atpakaļ var saglabāt tik bieži, cik vēlaties.
4. Atgriežoties BimCraft: poga {{ui:Detaļu saites}} rāda skaitu, un kartītē elements ir uzskaitīts kā {{ui:Mainīts PartCraft}}, ar izmēra un tilpuma izmaiņām vārdos.
5. Izvēlieties {{ui:Rādīt}}, lai to apskatītu, tad {{ui:Pieņemt}}, lai elementam piešķirtu jauno formu, vai {{ui:Paturēt manu}}, lai to atstātu nemainītu.

## Ko vajadzētu redzēt

- Pieņemšana ir viens atsaukšanas solis. Elements paliek savā vietā ar savu GlobalId, tipu, materiālu un īpašībām. Tiek aizstāts tikai tā ķermenis.
- Elements iegūst īpašību kopu {{ui:CadCraft_PartLink}} ar saiti, tās statusu un versiju.
- {{ui:Nosūtīt atkārtoti}} atkal atver to pašu elementu PartCraft ar to pašu saiti.

## Noderīgi zināt

- Sienas, grīdas, jumti, durvis, logi, kāpnes, rampas un telpas tiek zīmētas ar ēkas rīkiem no kontūras un pārbūvētas pēc katras izmaiņas. Ķermenis no citas lietotnes tiktu pārrakstīts, tāpēc šādi elementi tiek noraidīti ar iemeslu.
- Forma atgriežas kā tīkls (IFC tesselācija), nevis kā detaļas elementi. Detaļas vēsture paliek PartCraft.
- Ja elements modelī ir mainījies pēc tā nosūtīšanas, kartīte to pasaka pirms pieņemšanas: pieņemot, šīs izmaiņas tiek aizstātas.
- Nekas netiek augšupielādēts. Abas lietotnes ir vienas vietnes lapas, un elementu starp tām nodod šajā pārlūkprogrammā. Abām jābūt atvērtām vienā un tajā pašā pārlūkprogrammā.
- Elementam PartCraft jāaizveras cietā ķermenī. Elements ar lieliem atvērtiem caurumiem tur tiek noraidīts, un tiek norādīts atvērto malu skaits.
- Lai pieņemtu, padariet aktīvu to modeli, kurā elements atrodas.
