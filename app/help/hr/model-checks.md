---
title: Provjera modela na uobičajene probleme
summary: Pronađite elemente kojima nedostaje svojstvo koje trebate, GlobalId-ove upotrijebljene dvaput, elemente bez etaže i kopije nagomilane jedne na drugu.
keywords: provjera, provjera modela, validacija, kontrola kvalitete, kvaliteta, nedostaje svojstvo, obavezno, duplikat, globalid, guid, etaža, nagomilano, preklapanje
from: 4d835513
---

## Što ćete učiniti

Pregledajte model prije nego ga predate dalje: probleme koji kvare tablice, količine i tuđi softver.

## Koraci

1. Otvorite IFC model.
2. Otvorite {{ui:Provjere modela}} na lijevoj ploči.
3. Ispod {{ui:Obavezna svojstva}} pravilo je već postavljeno (bilo koja klasa, Name). Promijenite njegovu klasu (ili {{ui:Bilo koja klasa}}) i svojstvo ili kliknite {{ui:Dodaj svojstvo}} za drugo pravilo; x uklanja jedno pravilo. Element ne prolazi pravilo kada svojstvo nedostaje ili je prazno. Pravila ostaju u ovom pregledniku za svaki model.
4. Kliknite {{ui:Pokreni provjere}}.
5. Kliknite rezultat da odaberete te elemente i približite prikaz na njih.

## Što biste trebali vidjeti

- **Nedostaje obavezno svojstvo**: svako pravilo s elementima koji za njega nemaju vrijednost.
- **GlobalId upotrijebljen dvaput**: elementi koji dijele isti GlobalId. Drugi softver ih tretira kao jedan element.
- **Bez etaže**: elementi s oblikom koji nijedna etaža ne obuhvaća.
- **Kopije jedna na drugoj**: elementi iste klase i tipa s istim oblikom na istom mjestu, koji se u količinama broje dvaput.

Svaki redak u rezultatima je gumb: kliknite ga da odaberete te elemente i približite prikaz na njih. Prikazano je samo prvih 50 grupa svake provjere. Isti nalazi pojavljuju se i u {{ui:Problemi}}.

## Dobro je znati

- Provjere gledaju aktivni model kada je otvoreno više njih. Pogledajte [Zajednički pregled više IFC modela](topic:several-models).
- Nakon izmjene pokrenite provjere ponovno.
- U ploči {{ui:Problemi}} duljine, površine i volumeni u opisu problema slijede {{ui:Jedinice}} odabrane na alatnoj traci (vrata od „800 mm“ prikazuju se kao 2'-7 1/2" u stopama i palcima); promijenite jedinicu i ploča će ih ponovno ispisati.

## Dalje

- [Provjera modela: prostorije, oznake, LOD, sudari i sučelja](topic:audit-the-model)
- [Pronađite elemente prema klasi, nazivu ili svojstvu](topic:find)
- [Brisanje, izrezivanje, kopiranje i lijepljenje elemenata](topic:copy-paste)
