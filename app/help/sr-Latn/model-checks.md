---
title: Proveri model zbog čestih problema
summary: Nađi elemente kojima nedostaje svojstvo koje treba, GlobalId-e upotrebljene dvaput, elemente bez sprata i kopije naslagane jedne na drugu.
keywords: proveri, provera modela, validacija, kontrola kvaliteta, kvalitet, nedostaje svojstvo, obavezno, duplikat, globalid, guid, sprat, naslagano, preklapanje
from: 4d835513
---

## Šta ćete uraditi

Pogledajte model pre nego što ga predate dalje: probleme koji kvare specifikacije, količine i tuđi softver.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Provere modela}} u levom panelu.
3. Pod {{ui:Obavezna svojstva}} pravilo već postoji (bilo koja klasa, Name). Promenite njegovu klasu (ili {{ui:Bilo koja klasa}}) i svojstvo, ili kliknite {{ui:Dodaj svojstvo}} za još jedno pravilo; x uklanja jedno. Element ne prolazi pravilo kada svojstvo nedostaje ili je prazno. Pravila ostaju u ovom pregledaču za svaki model.
4. Kliknite {{ui:Pokreni provere}}.
5. Kliknite rezultat da izaberete te elemente i uvećate prikaz na njih.

## Šta treba da vidite

- **Nedostaje obavezno svojstvo**: svako pravilo, sa elementima koji nemaju vrednost za njega.
- **GlobalId upotrebljen dvaput**: elementi koji dele jedan GlobalId. Drugi softver ih tretira kao jedan element.
- **Bez sprata**: elementi čiji oblik ne sadrži nijedan sprat.
- **Kopije jedna na drugoj**: elementi iste klase i tipa, istog oblika na istom mestu, koji se u količinama broje dvaput.

Svaki red u rezultatima je dugme: kliknite ga da izaberete te elemente i uvećate prikaz na njih. Prikazuje se samo prvih 50 grupa svake provere. Isti nalazi se pojavljuju i u {{ui:Problemi}}.

## Dobro je znati

- Provere gledaju aktivni model kada je otvoreno više njih. Pogledajte [Pogledaj više IFC modela zajedno](topic:several-models).
- Posle izmene ponovo pokrenite provere.
- U panelu {{ui:Problemi}} dužine, površine i zapremine u rečenici o problemu prate {{ui:Jedinice}} izabrane na traci alata (vrata od „800 mm” glase 2'-7 1/2" u stopama i inčima); promenite jedinicu i panel će ih ponovo ispisati.

## Sledeće

- [Revizija modela: prostorije, oznake, LOD, sudari i interfejsi](topic:audit-the-model)
- [Nađi elemente po klasi, imenu ili svojstvu](topic:find)
- [Izbriši, iseci, kopiraj i nalepi elemente](topic:copy-paste)
