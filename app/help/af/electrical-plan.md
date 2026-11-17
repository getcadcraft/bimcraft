---
title: Die elektriese plan
summary: Plaas kontakpunte, skakelaars, ligte, sensors, aansluitdose en panele op die plan met dieselfde simbole as CadCraft se Elektries-byvoeging, koppel skakelaars aan die ligte wat hulle aanskakel, en lys toestelle en stroombane in die skedules.
keywords: elektries, elektriese plan, kontakpunt, kontak, dupleks, skakelaar, drieweg, dimmer, lig, plafonlig, ingebedde lig, afwaartse lig, bewegingsensor, aansluitdoos, paneel, verdeelbord, stroombaan, belasting, watt, ampère, skakelaarlus, toesteleskedule, paneelskedule
from: f7de1947
---

## Wat jy gaan doen

Teken die huis se elektriese plan in die model: kontakpunte, skakelaars en panele op die mure, ligte en sensors op die plafon. Elke toestel is 'n werklike elektriese element in die IFC-lêer, met sy etiket, stroombaan en belasting, en skakelaars onthou die ligte wat hulle aanskakel.

## Plaas toestelle

1. Op 'n vlak, maak {{ui:Build}} oop en kies {{ui:Electrical}}.
2. Kies die toestel: kontakpunte (krag, data, telefoon, klank en beeld), skakelaars en sensors (ook 'n termostaat en 'n tydskakelaar), ligte, detektors en alarms, 'n aansluitdoos, 'n paneel of 'n subpaneel.
3. Tik 'n **Stroombaan** as jy dit ken (enige naam: 1, 2, A-3). Laat **Monteerhoogte** leeg vir die gewone hoogte van daardie toestel.
4. Klik op die plan. Kontakpunte, skakelaars en panele gaan op die vlak van die naaste muur, na die vertrek gerig; ligte, sensors en aansluitdose gaan op die plafon waar jy klik.

Toestelle kry etikette soos jy hulle plaas: **R** vir kontakpunte, **S** vir skakelaars, **L** vir ligte, **M** vir bewegingsensors, **J** vir aansluitdose, **P** vir panele. Toestelle op 'n muur skuif saam met die muur wanneer jy die muur skuif.

Verkies jy om deur prente te blaai? Maak die **Simboolpalet** oop vanaf {{ui:Build}} om 'n toestel volgens naam te vind, merk die wat jy gebruik met 'n ster en plaas dit met een klik: sien [Die simboolpalet](topic:symbol-palette).

## Koppel skakelaars aan ligte

1. Kies 'n skakelaar (of 'n bewegingsensor) en klik **Koppel ligte** in **Eienskappe**.
2. Klik op elke lig wat dit aanskakel. Klik 'n gekoppelde lig weer om dit te ontkoppel.
3. Druk {{key:Enter}} of klik **Klaar**.

Die plan trek 'n gestippelde kurwe van die skakelaar na elk van sy ligte. 'n Lig se **Eienskappe** wys watter skakelaars dit aanskakel.

## Die vertrek waarin 'n toestel staan

Elke toestel weet in watter vertrek dit staan. 'n Toestel op 'n muur is in die vertrek waarna dit kyk; 'n plafontoestel is in die vertrek waaronder dit hang. **Eienskappe** wys **Vertrek**, en die **Elektriese toestelle**-skedule het 'n **Vertrek**-kolom (nommer en naam, soos 101 Kombuis).

Dit word bygewerk: hernoem of hernommer die vertrek, skuif die toestel, of skuif 'n muur, en die vertrek volg in dieselfde stap. 'n Toestel op die buitekant van 'n gebou, of in 'n ruimte wat nie 'n vertrek is nie, sê dat dit nie in 'n vertrek is nie.

Die vertrek word ook in die lêer geskryf, in die toestel se eiendomstel `CadCraft_Location` (Room, RoomNumber, RoomName), sodat Soek, Kleur volgens eienskap en 'n etiketskedule dit kan gebruik, en so ook 'n ander program. Plansimbole en elemente wat aan 'n simbool gekoppel is, kry dieselfde stel; sien [Simboolpalet](topic:symbol-palette).

## Laat jou assistent hulle plaas

Met 'n assistent gekoppel (Instellings › Assistente, met wysigings toegelaat), kan jy in woorde vra vir toestelle: "sit 'n dubbele kontak elke 2 m langs die woonkamer se mure, 300 mm op, op stroombaan 3", of "voeg 'n plafonlig by met sy skakelaar by die deur". Die assistent gebruik vyf gereedskappe: `devices_add`, `device_change`, `lights_set`, `devices_delete` en `devices_list`. Hulle maak dieselfde toestelle as die Elektries-gereedskap, op dieselfde mure en met dieselfde etikette, stroombane, belastings en hoogtes, en elke oproep is een ontdoen-stap.

'n Toestel kry nooit 'n soort wat die Elektries-gereedskap nie het nie: 'n onbekende soort word geweier en die assistent kry die lys. 'n Kontak of skakelaar moet binne 600 mm van 'n muurvlak staan, soos met 'n klik, anders word die oproep geweier en niks word geplaas nie. Standaardhoogtes is in millimeter: 300 vir kontakte, 1100 vir skakelaars; 'n plafontoestel hang van die plafon af.

## Verander en lys hulle

Kies 'n toestel om sy etiket, stroombaan, belasting (watt) en monteerhoogte te verander. Kies verskeie om hulle almal op dieselfde tyd op een stroombaan te sit. Druk {{key:Delete}} om een te verwyder; 'n verwyderde lig word van sy skakelaars afgehaal.

In {{ui:Schedules}} kies **Elektriese toestelle** vir elke toestel met sy vlak, stroombaan, belasting, hoogte en die ligte wat elke skakelaar aanskakel, of **Stroombane** vir elke stroombaan se toestelle, totale belasting en stroom. Albei is ook op die tekeningstel se skedulevel: sien [Aansigte, snitte en blaaie](topic:sheets).

:::note
Monteerhoogtes en belastings is beplanningstandaarde (een kontak 16" op en 200 W, 'n skakelaar op 48", 'n plafonlig 60 W), nie 'n ontwerp nie: die elektrisiën of ingenieur bepaal die stroombane en nagaan die kode.
:::

:::tip
Die simbole is dieselfde as wat CadCraft se Elektries-byvoeging op installasieplanne teken, so 'n plan uit albei programme lees dieselfde.
:::
