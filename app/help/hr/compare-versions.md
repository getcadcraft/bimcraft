---
title: Usporedite dvije verzije modela
summary: Otvorite dvije verzije istog IFC modela i pogledajte koji su elementi dodani, uklonjeni i promijenjeni, uspoređeni prema njihovim GlobalId-ima, uz CSV svake promjene.
keywords: usporedba, razlika, razlike, verzije, revizija, promjene, promijenjeno, dodano, uklonjeno, pomaknuto, globalid, guid, što se promijenilo
from: cfca6971
---

## Što ćete učiniti

Pogledajte što se promijenilo između modela koji ste imali i onoga koji vam je poslan: koji su elementi novi, koji su nestali, koji su se pomaknuli ili dobili nove vrijednosti svojstava.

## Koraci

1. Otvorite noviju verziju, zatim kliknite {{ui:Dodaj model…}} i odaberite stariju. Pogledajte [Pregled nekoliko IFC modela zajedno](topic:several-models).
2. U {{ui:Modeli}} otvorite {{ui:Usporedi verzije}}.
3. Odaberite {{ui:Starija verzija}} i {{ui:Novija verzija}}.
4. Kliknite {{ui:Usporedi}}.
5. Kliknite element na popisu da ga odaberete i vidite njegova svojstva. Kliknite {{ui:Preuzmi CSV}} za svaku promjenu, svojstvo po svojstvo.
6. Kliknite {{ui:Očisti}} da se vratite na normalan prikaz.

## Što biste trebali vidjeti

- **Dodani** elementi plavo, iz novije verzije.
- **Uklonjeni** elementi crveno, iz starije verzije.
- **Promijenjeni** elementi okerom, iz novije verzije, a svaki kaže što se promijenilo: svojstva, pomak s udaljenošću ili novi oblik.
- Sve što je isto, prozirno.

## Dobro je znati

- Elementi se uspoređuju prema njihovom GlobalId-u. Program koji elementima na svakom izvozu dodjeljuje nove GlobalId-e čini da svaki element izgleda kao uklonjen i ponovno dodan.
- Položaji se uspoređuju tamo gdje modeli stoje u sceni. Ako je jedna verzija namjerno pomaknuta, prvo ih poravnajte alatom {{ui:Pomakni}} u {{ui:Modeli}}.
- GlobalId korišten dvaput u jednom modelu izostavlja se iz usporedbe. [Provjerite model zbog čestih problema](topic:model-checks) pronalazi ih.

## Dalje

- [Teme i BCF datoteke](topic:issues-bcf)
- [Zbrojite količine prema svojstvu](topic:quantity-totals)
