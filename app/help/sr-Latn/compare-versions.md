---
title: Uporedi dve verzije modela
summary: Otvorite dve verzije istog IFC modela i vidite koji su elementi dodati, uklonjeni i promenjeni, upoređeni prema njihovim GlobalId-ovima, sa CSV-om svake promene.
keywords: uporedi, razlika, verzije, revizija, promene, promenjeno, dodato, uklonjeno, pomereno, globalid, guid, šta se promenilo
from: cfca6971
---

## Šta ćete uraditi

Vidite šta se promenilo između modela koji ste imali i onog koji vam je poslat: koji su elementi novi, koji su nestali, koji su pomereni ili dobili nove vrednosti svojstava.

## Koraci

1. Otvorite noviju verziju, zatim kliknite {{ui:Dodaj model…}} i izaberite stariju. Pogledajte [Pogledajte nekoliko IFC modela zajedno](topic:several-models).
2. U {{ui:Modeli}} otvorite {{ui:Uporedi verzije}}.
3. Izaberite {{ui:Starija verzija}} i {{ui:Novija verzija}}.
4. Kliknite {{ui:Uporedi}}.
5. Kliknite element u listi da ga izaberete i vidite njegova svojstva. Kliknite {{ui:Preuzmi CSV}} za svaku promenu, svojstvo po svojstvo.
6. Kliknite {{ui:Obriši}} da se vratite na normalan prikaz.

## Šta treba da vidite

- **Dodati** elementi plavo, iz novije verzije.
- **Uklonjeni** elementi crveno, iz starije verzije.
- **Promenjeni** elementi jantarno, iz novije verzije, a svaki kaže šta se promenilo: svojstva, pomeranje sa koliko je pomereno, ili novi oblik.
- Sve što je isto, providno.

## Dobro je znati

- Elementi se upoređuju po njihovom GlobalId. Program koji dodeljuje elementima nove GlobalId-ove pri svakom izvozu čini da svaki element izgleda kao uklonjen i ponovo dodat.
- Položaji se upoređuju tamo gde modeli stoje u sceni. Ako je jedna verzija pomerena namerno, prvo ih poravnajte alatom {{ui:Pomeri}} u {{ui:Modeli}}.
- GlobalId koji je upotrebljen dvaput u jednom modelu je izostavljen iz poređenja. [Proveri model zbog čestih problema](topic:model-checks) pronalazi te slučajeve.

## Dalje

- [Problemi i BCF datoteke](topic:issues-bcf)
- [Saberi količine po svojstvu](topic:quantity-totals)
