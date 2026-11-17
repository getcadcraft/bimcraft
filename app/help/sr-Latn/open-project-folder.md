---
title: Otvaranje cele fascikle projekta
summary: Usmerite BimCraft na fasciklu projekta da odjednom vidite svaki model, njegove rezervne kopije i veze, a polje Počni ovde predloži koju datoteku da otvorite.
keywords: fascikla, direktorijum, fascikla projekta, mrežni disk, server, počni ovde, koja datoteka, rezervne kopije, veze, xref, nedavne fascikle, prevlačenje fascikle
from: 16fbdce2
---

## Šta ćete uraditi

Otvorite celu fasciklu projekta, kao onu koju ste dobili za posao, i pustite BimCraft da sve sredi: koji modeli postoje, koje kopije su rezervne, šta se na šta poziva, koje datoteke su oštećene i koju datoteku verovatno želite da otvorite.

Čita se samo nekoliko kilobajta koje svaka kartica modela treba, pa su fascikla na mrežnom disku ili sinhronizovana fascikla u oblaku u redu.

## Koraci

:::chromium
1. Kliknite {{ui:Otvori fasciklu}} levo (ili u sredini praznog ekrana).
2. Izaberite fasciklu projekta u prozoru koji se otvara i kliknite **Izaberi** (ili **Otpremi** ili **Otvori**, zavisno od sistema).
3. Kliknite **Prikaži datoteke** kada pregledač pita „Dozvoliti sajtu da prikazuje datoteke?“. Ovo samo dozvoljava kartici da čita fasciklu; ništa se ne otprema.
4. Sačekajte dok statusna linija broji: „Učitavanje fascikle: … datoteka“, pa „Provera Revit datoteka: … od …“.
:::

:::firefox
1. Kliknite {{ui:Otvori fasciklu}} levo (ili u sredini praznog ekrana).
2. Izaberite fasciklu projekta u prozoru koji se otvara i potvrdite. Firefox može da traži da potvrdite da stranica može da čita datoteke fascikle; one i dalje ostaju na vašem računaru.
3. Sačekajte dok statusna linija kaže „Čitanje fascikle: … datoteka“, pa „Provera Revit datoteka: … od …“.
:::

:::safari
1. Kliknite {{ui:Otvori fasciklu}} levo (ili u sredini praznog ekrana).
2. Izaberite fasciklu projekta u prozoru koji se otvara i kliknite **Otpremi**. Iako se tako zove, ništa ne napušta vaš Mac: datoteke se samo predaju kartici.
3. Sačekajte dok statusna linija kaže „Čitanje fascikle: … datoteka“, pa „Provera Revit datoteka: … od …“.
:::

Takođe možete da **prevučete fasciklu** iz {{pick:mac=Finder|windows=Istraživač datoteka|linux=vaš upravljač datotekama}} na stranicu. Prevučena fascikla se otvara bez upita za dozvolu u svakom pregledaču.

## Šta treba da vidite

Izveštaj o fascikli popunjava sredinu:

- Naziv fascikle, brojevi modela, CAD crteža, IFC modela i datoteka, i ukupna veličina.
- Crvene ili žute napomene ako su neke datoteke nepotpune ili neke povezane datoteke nedostaju u fascikli.
- Polje {{ui:Počni ovde}}: datoteka koju BimCraft predlaže da otvorite, sa razlozima.
- **Modeli**: jedan red po modelu, sa rezervnim kopijama grupisanim ispod njega.
- **Povezane i referencirane datoteke**, **IFC modeli**, **CAD crteži** i **Odložene**, kada ih fascikla ima.

Levo, panel {{ui:Fascikla}} sažima sve; **Problemi** kaže „Nema“ kada je svaka kopija ispravna.

## Korišćenje polja Počni ovde

Polje imenuje jednu datoteku i kaže zašto, na primer:

- „Najnoviji sačuvani rad u ovoj fascikli (3. mart 2025).“
- „*Consultant.rvt* je povezana u druge modele, pa je pozadina, a ne datoteka za izmenu.“
- „*Tower.rvt* izgleda kao očigledan izbor, ali je oštećena; njena poslednja ispravna kopija je iz …“
- „Ovo je centralni model: u Revit-u ga otvorite sa „Create New Local“ i radite u lokalnoj kopiji.“

1. Pročitajte razloge.
2. Kliknite {{ui:Otvori njenu karticu}} da pročitate karticu te datoteke, ili {{ui:Prikaži je na listi}} da nađete njen red u **Modelima**.
3. Proverite sa osobom koja je poslednja radila na projektu pre nego što se oslonite na datoteku. Polje to takođe kaže: to je najbolja pretpostavka na osnovu naziva, datuma i veza.

## Otvaranje datoteka iz izveštaja

1. Kliknite na naziv modela da otvorite njegovu karticu. Kartica proverava svaku vezu sa fasciklom.
2. Kliknite {{ui:Nazad na}} i naziv fascikle na vrhu kartice (ili {{ui:Nazad na fasciklu}} levo) da se vratite.
3. Kliknite bilo koju IFC datoteku pod **IFC modeli** da je otvorite u 3D.
4. Kliknite bilo koji DWG ili DXF pod **CAD crteži** da ga otvorite u 2D. Njegovi povezani crteži i slike se automatski pronalaze u fascikli.

## Ponovno otvaranje fascikle kasnije

:::chromium
Fascikle koje ste otvorili sa {{ui:Otvori fasciklu}} ili prevlačenjem su navedene pod {{ui:Nedavne fascikle}} levo. Kliknite {{ui:Ponovo otvori}} i naziv fascikle da je ponovo otvorite bez biranja. Posle ponovnog pokretanja pregledača, Chrome ili Edge pitaju još jednom; izaberite „Dozvoli pri svakoj poseti“ da bi prestali da pitaju. Spisak se čuva samo u ovom pregledaču i nikada se ne šalje nigde. Kliknite × da zaboravite fasciklu.
:::

:::firefox safari
Ovaj pregledač ne može da pamti fascikle između poseta. Ponovo izaberite fasciklu sa {{ui:Otvori fasciklu}}, ili je prevucite.
:::

## Česte greške

- **Biranje fascikle koja je prevelika.** Preko 20.000 datoteka: „Ova fascikla ima više od 20.000 datoteka. Izaberite manju fasciklu, na primer jedan projekat.“ Izaberite fasciklu projekta, a ne ceo disk.
- **Biranje roditeljske fascikle nekoliko projekata.** Polje {{ui:Počni ovde}} tada bira među projektima. Izaberite jedan projekat.
- **Izgleda da su Revit-ove fascikle ignorisane.** Fascikle `*_backup`, `*_log` i `Revit_temp` su održavanje i navode se pod **Odložene**, ne čitaju se.
- **Očekivanje da se model otvori u 3D sa svoje kartice.** Datoteka projekta je samo kartica. Otvorite njen IFC izvoz.
- **Telefoni i tableti.** Mnogi mobilni pregledači uopšte ne mogu da biraju fascikle. Koristite računar.

Pogledajte [Provera fascikle za oštećene kopije, nedostajuće veze i ostatke](topic:check-folder-health) i [Izveštaj o fascikli: uloge, statusi i veze](topic:folder-roles).
