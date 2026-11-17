---
title: Otvorite cijelu projektnu mapu
summary: Usmjerite BimCraft na projektnu mapu da odjednom vidite svaki model, njegove sigurnosne kopije i veze, a okvir Počnite ovdje predloži koju datoteku otvoriti.
keywords: mapa, direktorij, projektna mapa, mrežni pogon, poslužitelj, počnite ovdje, koja datoteka, sigurnosne kopije, veze, vanjske reference, nedavne mape, povuci mapu
from: 16fbdce2
---

## Što ćete učiniti

Otvorite cijelu projektnu mapu, kao onu koju ste dobili za posao, i pustite BimCraft da sve razvrsta: koji su modeli tu, koje su kopije sigurnosne, što s čim povezuje, koje su datoteke oštećene i koju datoteku najvjerojatnije želite otvoriti.

Samo nekoliko kilobajta koje svaka kartica modela treba čita se, pa su mapa na mrežnom pogonu ili sinkronizirana mapa u oblaku u redu.

## Koraci

:::chromium
1. Kliknite {{ui:Otvori mapu}} lijevo (ili u sredini praznog zaslona).
2. Odaberite projektnu mapu u prozoru koji se otvori i kliknite **Odaberi** (ili **Učitaj** ili **Otvori**, ovisno o sustavu).
3. Kliknite **Prikaži datoteke** kad preglednik upita „Dopustiti stranici da prikazuje datoteke?“. To samo dopušta kartici čitanje mape; ništa se ne učitava.
4. Pričekajte dok statusni redak broji: „Popisivanje mape: … datoteka“, pa „Provjera Revit datoteka: … od …“.
:::

:::firefox
1. Kliknite {{ui:Otvori mapu}} lijevo (ili u sredini praznog zaslona).
2. Odaberite projektnu mapu u prozoru koji se otvori i potvrdite. Firefox vas može zamoliti da potvrdite da stranica smije čitati datoteke mape; one i dalje ostaju na vašem računalu.
3. Pričekajte dok statusni redak kaže „Čitanje mape: … datoteka“, pa „Provjera Revit datoteka: … od …“.
:::

:::safari
1. Kliknite {{ui:Otvori mapu}} lijevo (ili u sredini praznog zaslona).
2. Odaberite projektnu mapu u prozoru koji se otvori i kliknite **Učitaj**. Unatoč riječi, ništa ne napušta vaš Mac: datoteke se samo predaju kartici.
3. Pričekajte dok statusni redak kaže „Čitanje mape: … datoteka“, pa „Provjera Revit datoteka: … od …“.
:::

Mapu možete i povući iz {{pick:mac=Finder|windows=Istraživač datoteka|linux=vašeg upravitelja datoteka}} na stranicu. Povučena mapa otvara se bez ikakvog upita za dopuštenje u svim preglednicima.

## Što biste trebali vidjeti

Izvještaj o mapi ispunjava sredinu:

- Naziv mape, broj modela, CAD crteža, IFC modela i datoteka te ukupnu veličinu.
- Crvene ili žute napomene ako su neke datoteke nepotpune ili neke povezane datoteke nedostaju u mapi.
- Okvir {{ui:Počnite ovdje}}: datoteku koju BimCraft predlaže otvoriti, s razlozima.
- **Modeli**: po jedan redak za svaki model, sa sigurnosnim kopijama grupiranima pod njim.
- **Povezane i referencirane datoteke**, **IFC modeli**, **CAD crteži** i **Odložene**, kad ih mapa ima.

Lijevo, ploča {{ui:Mapa}} sve sažima; **problemi** kaže „Nema“ kad je svaka kopija ispravna.

## Koristite okvir Počnite ovdje

Okvir imenuje jednu datoteku i kaže zašto, na primjer:

- „Najnoviji spremljeni rad u ovoj mapi (3. ožujka 2025.).“
- „*Consultant.rvt* je povezan u druge modele, pa je pozadinski, a ne datoteka za uređivanje.“
- „*Tower.rvt* izgleda kao očit izbor, ali je oštećen; njegova posljednja ispravna kopija je od …“
- „Ovo je centralni model: u Revitu ga otvorite s „Create New Local“ i radite u lokalnoj kopiji.“

1. Pročitajte razloge.
2. Kliknite {{ui:Otvori njegovu karticu}} da pročitate karticu te datoteke ili {{ui:Prikaži ga na popisu}} da pronađete njezin redak u **Modelima**.
3. Prije nego što se oslonite na nju, provjerite s osobom koja je posljednja radila na projektu. Okvir to i sam kaže: riječ je o najboljoj pretpostavci iz imena, datuma i veza.

## Otvaranje datoteka iz izvještaja

1. Kliknite ime modela da otvorite njegovu karticu. Kartica provjerava svaku vezu s mapom.
2. Kliknite {{ui:Natrag na}} i ime mape na vrhu kartice (ili {{ui:Natrag na mapu}} lijevo) da se vratite.
3. Kliknite bilo koju IFC datoteku pod **IFC modeli** da je otvorite u 3D.
4. Kliknite bilo koji DWG ili DXF pod **CAD crteži** da ga otvorite u 2D. Njegovi povezani crteži i slike automatski se pronalaze u mapi.

## Ponovno otvorite mapu kasnije

:::chromium
Mape koje ste otvorili s {{ui:Otvori mapu}} ili povlačenjem navedene su pod {{ui:Nedavne mape}} lijevo. Kliknite {{ui:Ponovno otvori}} i ime mape da je ponovno otvorite bez odabira. Nakon ponovnog pokretanja preglednika Chrome ili Edge jednom pita ponovno; odaberite „Dopusti pri svakom posjetu“ da prestane pitati. Popis se čuva samo u ovom pregledniku i nigdje se ne šalje. Kliknite × da zaboravite mapu.
:::

:::firefox safari
Ovaj preglednik ne pamti mape između posjeta. Ponovno odaberite mapu s {{ui:Otvori mapu}} ili je povucite.
:::

## Česte pogreške

- **Odabir prevelike mape.** Preko 20.000 datoteka: „Ova mapa ima više od 20.000 datoteka. Odaberite manju mapu, na primjer jedan projekt.“ Odaberite projektnu mapu, a ne cijeli pogon.
- **Odabir nadmape s više projekata.** Okvir {{ui:Počnite ovdje}} tada bira među projektima. Odaberite jedan projekt.
- **Revitove vlastite mape izgledaju kao zanemarene.** Mape `*_backup`, `*_log` i `Revit_temp` su pomoćne i navode se pod **Odložene**, a ne čitaju se.
- **Očekivanje da se model otvori u 3D iz svoje kartice.** Projektna datoteka je samo kartica. Otvorite njezin IFC izvoz.
- **Telefoni i tableti.** Mnogi mobilni preglednici uopće ne mogu birati mape. Koristite računalo.

Vidi i [Provjera mape za oštećene kopije, nedostajuće veze i ostatke](topic:check-folder-health) te [Izvještaj o mapi: uloge, statusi i veze](topic:folder-roles).
