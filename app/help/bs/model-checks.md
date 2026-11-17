---
title: Provjeri model na uobičajene probleme
summary: Pronađi elemente kojima nedostaje svojstvo koje ti treba, GlobalId-jeve koji se koriste dvaput, elemente bez sprata i kopije naslagane jedna na drugu.
keywords: provjeri, provjera modela, validacija, qa, kvalitet, nedostaje svojstvo, obavezno, duplikat, globalid, guid, sprat, naslagano, preklapanje
from: 4d835513
---

## Šta ćeš uraditi

Pregledaj model prije nego ga proslijediš: probleme koji kvare specifikacije, količine i tuđi softver.

## Koraci

1. Otvori IFC model.
2. Otvori {{ui:Provjere modela}} u lijevom panelu.
3. Pod {{ui:Obavezna svojstva}} već postoji pravilo (bilo koja klasa, Name). Promijeni njegovu klasu (ili {{ui:Bilo koja klasa}}) i svojstvo, ili klikni {{ui:Dodaj svojstvo}} za drugo pravilo; x uklanja jedno. Element ne prolazi pravilo kad mu svojstvo nedostaje ili je prazno. Pravila ostaju u ovom pregledaču za svaki model.
4. Klikni {{ui:Pokreni provjere}}.
5. Klikni rezultat da odabereš te elemente i zumiraš na njih.

## Šta treba da vidiš

- **Nedostaje obavezno svojstvo**: svako pravilo, sa elementima koji nemaju vrijednost za njega.
- **GlobalId korišten dvaput**: elementi koji dijele jedan GlobalId. Drugi softver ih tretira kao jedan element.
- **Nije ni na jednom spratu**: elementi čiji oblik ne sadrži nijedan sprat.
- **Kopije jedna na drugoj**: elementi iste klase i tipa, s istim oblikom na istom mjestu, koji se u količinama računaju dvaput.

Svaki red u rezultatima je dugme: klikni ga da odabereš te elemente i zumiraš na njih. Navedeno je samo prvih 50 grupa svake provjere. Isti nalazi se pojavljuju i u {{ui:Problemi}}.

## Dobro je znati

- Provjere gledaju aktivni model kad je otvoreno više njih. Vidi [Pregled nekoliko IFC modela zajedno](topic:several-models).
- Nakon izmjene ponovo pokreni provjere.
- U panelu {{ui:Problemi}}, dužine, površine i zapremine u opisima problema prate {{ui:Jedinice}} izabrane u alatnoj traci (vrata od „800 mm" se prikazuju kao 2'-7 1/2" u stopama i inčima); promijeni jedinicu, i panel će ih ponovo ispisati.

## Dalje

- [Revizija modela: prostorije, oznake, LOD, sudari i sučelja](topic:audit-the-model)
- [Pronađi elemente po klasi, imenu ili svojstvu](topic:find)
- [Brisanje, izrezivanje, kopiranje i lijepljenje elemenata](topic:copy-paste)
