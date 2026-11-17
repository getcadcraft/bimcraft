---
title: Uporedi dvije verzije modela
summary: Otvori dvije verzije istog IFC modela i vidi koji elementi su dodani, uklonjeni i promijenjeni, uparivanih po njihovim GlobalId, sa CSV-om svake promjene.
keywords: uporedi, razlika, verzije, revizija, promjene, promijenjeno, dodano, uklonjeno, pomjereno, globalid, guid, šta je promijenjeno
from: cfca6971
---

## Šta ćete uraditi

Vidite šta se promijenilo između modela koji ste imali i onog koji ste dobili: koji elementi su novi, koji su nestali, koji su pomjereni ili dobili nove vrijednosti svojstava.

## Koraci

1. Otvorite noviju verziju, zatim kliknite {{ui:Dodaj model…}} i odaberite stariju. Pogledajte [Pregled više IFC modela zajedno](topic:several-models).
2. U {{ui:Modeli}} otvorite {{ui:Uporedi verzije}}.
3. Odaberite {{ui:Starija verzija}} i {{ui:Novija verzija}}.
4. Kliknite {{ui:Uporedi}}.
5. Kliknite element u listi da ga odaberete i vidite njegova svojstva. Kliknite {{ui:Preuzmi CSV}} za svaku promjenu, svojstvo po svojstvo.
6. Kliknite {{ui:Obriši}} da se vratite na normalan prikaz.

## Šta treba da vidite

- **Dodani** elementi u plavoj, iz novije verzije.
- **Uklonjeni** elementi u crvenoj, iz starije verzije.
- **Promijenjeni** elementi u oker boji, iz novije verzije, a svaki kaže šta se promijenilo: svojstva, pomjeranje i koliko daleko, ili novi oblik.
- Sve što je isto, providno.

## Dobro je znati

- Elementi se uparuju po njihovom GlobalId. Program koji dodjeljuje elementima nove GlobalId pri svakom izvozu čini da svaki element izgleda kao uklonjen i ponovo dodan.
- Položaji se uspoređuju tamo gdje modeli stoje u sceni. Ako je jedna verzija namjerno pomjerena, prvo ih poravnajte sa {{ui:Pomjeri}} u {{ui:Modeli}}.
- GlobalId koji se koristi dvaput u jednom modelu izostavljen je iz poređenja. [Provjeri model za česte probleme](topic:model-checks) pronalazi takve slučajeve.

## Dalje

- [Pitanja i BCF datoteke](topic:issues-bcf)
- [Zbroji količine po svojstvu](topic:quantity-totals)
