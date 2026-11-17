---
title: Saistīto zīmējumu un attēlu atrašana
summary: Parādiet zīmējuma saistītos zīmējumus (xref) un titulblokā izmantotos attēlus, atverot tā mapi vai pievienojot failus pašrocīgi.
keywords: xref, ārējā atsauce, saistītais zīmējums, pievienot, pārklājums, attēls, bilde, logotips, titulblokks, trūkstošs xref, etransmit, atsauču pārvaldnieks
from: 5593d4b1
---

## Ko jūs darīsiet

Padariet zīmējumu pilnīgu: parādiet zīmējumus, uz kuriem tas saista (ārējās atsauces jeb xref), un attēlus, ko tas izmanto, piemēram, logotipu titulblokā.

## Vienkāršais veids: atveriet mapi

1. Noklikšķiniet uz {{ui:Atvērt mapi}} un izvēlieties mapi, kurā ir zīmējums un tā saites, piemēram, visa projekta mape `Cad`.
2. Mapes pārskatā ritiniet līdz **CAD zīmējumi**.
3. Noklikšķiniet uz zīmējuma.
4. Apskatiet panelī pa labi {{ui:Rekvizīti}} zem **Saistītie zīmējumi** un **Attēli**.

BimCraft meklē katru saistīto zīmējumu pēc tā nosaukuma („*nosaukums*.dwg”): vispirms tajā pašā mapē, kur atrodas zīmējums, tad jebkurā vietā atvērtajā mapē. Attēlus atrod tādā pašā veidā un arī pēc līdzīga nosaukuma: eTransmit vai Revit eksports bieži pievieno projekta nosaukumu priekšā, tātad `logo.png` tiek atrasts kā `Tower-logo-5425051.png`.

## Otrs veids: pievienojiet failus pašrocīgi

1. Atveriet zīmējumu atsevišķi.
2. Pa labi, zem **Saistītie zīmējumi**, noklikšķiniet uz {{ui:Pievienot saistītos rasējumus…}}. Zem **Attēli** poga ir {{ui:Pievienot attēlus…}}; abas atver vienu un to pašu izvēlni.
3. Izvēlieties saistītos `.dwg` failus un attēlu failus. Varat izvēlēties vairākus vienlaikus.
4. Pagaidiet, kamēr BimCraft atkal atver zīmējumu kopā ar tiem.

## Ko jums vajadzētu redzēt

Katrs saistītais zīmējums un attēls ir uzskaitīts ar apzīmējumu:

| Apzīmējums | Nozīmē |
|---|---|
| **Rādīts** | Atrasts un zīmēts. Zem tā esošais ceļš norāda, no kurienes tas nācis, vai rāda „pievienoja jūs”. |
| **Rādīts, līdzīgs nosaukums** | Attēls atrasts pēc līdzīga nosaukuma. Pārbaudiet, vai tas ir pareizais. |
| **Nav atrasts** | Nav mapē vai pievienotajos failos. Trūkstošs attēls tiek rādīts kā tukšs rāmis. |
| **TIFF nevar parādīt pārlūkprogrammā** | Attēls ir TIFF fails, ko pārlūkprogrammas nezīmē. Saglabājiet to kā PNG ar tādu pašu nosaukumu un pievienojiet. |
| **Nevarēja nolasīt** | Fails atrasts, bet to nevarēja atvērt kā attēlu. |

Panelis {{ui:Rasējums}} pa kreisi saistītajiem zīmējumiem rāda „*n* no *m* ielādēti”. Saistīto zīmējumu slāņi parādās sarakstā {{ui:Slāņi}} kā „*saites nosaukums*|*slānis*”.

## Biežākās kļūdas

- **Atverot tikai zīmējumu.** „Šis zīmējums rāda tikai savu saturu, kamēr netiek pievienoti tā saistītie zīmējumi. Atverot visu projekta mapi, tie tiek atrasti automātiski.”
- **Atverot pārāk mazu mapi.** Ja saites atrodas blakus mapē, atveriet vecāku mapi.
- **Pārdēvētas saites.** BimCraft saistītos zīmējumus saskaņo pēc nosaukuma. Saite, kas diskā pārdēvēta, netiek atrasta; pievienojiet to pašrocīgi.
- **Saišu saites.** BimCraft ielādē zīmējumus, uz kuriem atvērtais zīmējums saista. Zīmējumi, kas saistīti tajos, netiek meklēti, tādēļ šajā versijā parasti netiek rādīti.
