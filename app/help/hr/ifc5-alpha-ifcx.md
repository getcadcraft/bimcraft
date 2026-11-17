---
title: Otvaranje i izvoz IFC5 alfa (IFCX datoteka)
summary: Laboratorijska opcija za format datoteke IFC5 alfa (.ifcx): otvorite datoteku sa slojevima, pogledajte što čitanje nije moglo provjeriti i izvezite otvorene modele. Format se još mijenja, zato prvo pročitajte.
keywords: ifc5, ifcx, alfa, buildingsmart, json, slojevi, shema, laboratorij, količine, qto, izvoz, uvoz
from: cffe1669
---

IFC5 alfa (datoteka s nastavkom {{ui:.ifcx}}) je format datoteke koji buildingSMART još oblikuje. Nije konačan: datoteke, kao ni naše tumačenje njih, mogu se promijeniti. Zato je ovo laboratorijska opcija i zato čitanje dolazi prvo.

## Uključivanje

1. Odaberite {{ui:Postavke}}, zatim odjeljak {{ui:IFC5 alfa (IFCX)}} na kartici BimCraft.
2. Označite {{ui:IFC5 alfa (IFCX) - format se još mijenja; prvo pročitajte}}.

Dok je isključeno, .ifcx datoteka se odbija s rečenicom koja upućuje ovdje. {{ui:Otvori IFC5 alfa (.ifcx)…}} i gumb izvoza {{ui:IFC5 alfa}} pojavljuju se kad je uključeno.

## Otvaranje

- Odaberite .ifcx datoteku pomoću {{ui:Otvori datoteku ili mapu}} (zamjenjuje otvoreni model, nakon uobičajenog pitanja o promjenama), ili
- odaberite {{ui:Otvori IFC5 alfa (.ifcx)…}} i izaberite više datoteka zajedno: datoteku, njezine slojeve i datoteke sheme koje uvozi. Uz već otvoren model, datoteka se **dodaje uz njega**; x u popisu modela ga ponovno uklanja, što je poništavanje.

Datoteka IFCX popisuje čvorove (put, njegovu djecu, što nasljeđuje, svoje atribute). Više datoteka može opisivati isti čvor: kasnija datoteka (sloj) nadjačava atribute ranije, a `null` dijete uklanja dijete. BimCraft ih slaže, zatim crta rezultat kao mali IFC4 model: projekt, lokacija, zgrada, etaže i elementi s imenima, klasama, svojstvima, količinama, bojama i mrežama.

Ništa se ne preuzima s mreže. Datoteke sheme koje datoteka uvozi (na primjer `ifc@v5a.ifcx`) koriste se samo ako ste ih odabrali uz datoteku; inače izvješće to kaže i atributi se čitaju bez provjere tipa.

### Izvješće

Nakon otvaranja, izvješće navodi što je čitanje pronašlo: podatke koji ne odgovaraju svojoj shemi, datoteke sheme koje nisu zadane, atribute koji ovdje nemaju IFC značenje. Atributi bez preslikavanja **zadržavaju se** u modelu, ne odbacuju se, i zapisuju se natrag pri izvozu.

## Što postaje što

| U IFCX datoteci | U BimCraftu |
|---|---|
| Čvor s IFC klasom (projekt, lokacija, zgrada, etaža, zid …) | Odgovarajući IFC4 element; klasa koju ovo čitanje ne poznaje postaje proxy elementa zgrade |
| Ime koje čvor ima pod svojim roditeljem | Ime elementa |
| Atributi s vrstom količine (Length, Area, Volume, Mass …) | IFC4 skup količina nazvan `Qto_IFCX` (IFC4 količine ostaju IFC4 skupovi `Qto_*`) |
| Ostali atributi svojstava | Skup svojstava nazvan `Pset_IFCX` |
| Atributi mreže i transformacije | Trokuti elementa i položaj; nevidljive mreže se ne crtaju |
| Boja, neprozirnost, materijal, klasifikacija | Stil površine, materijal i klasifikacija elementa |

Jedinice se uzimaju kao metri, s Z prema gore: alfa kaže da će jedinice biti dokumentirane kasnije.

## Izvoz

Odaberite {{ui:IFC5 alfa}} na alatnoj traci, pročitajte napomenu, zatim {{ui:Izvezi .ifcx}}. Datoteka ima naše vlastito zaglavlje (autor CadCraft, verzija ifcx_alpha) i sama kaže da je format alfa. Svaki model zapisuje se u vlastitim koordinatama datoteke, u metrima, s imenima, klasama, skupovima svojstava, količinama (kao atributi s njihovom vrstom), bojama i trokutima. Slojevi i nasljeđivanje zapisuju se spljošteni. Provjerite datoteku u programu u koji je šaljete.

## Ograničenja

- Zakrivljena geometrija (krivulje, plohe) se ne čita: samo trokutaste mreže.
- Vrata i prozori ugniježđeni u zid postavljaju se na etažu; zid iz kojeg dolaze nije povezan.
- Nazivi IFC4 `Qto_*` skupova čuvaju se kao naše vlastite grupe atributa (`cadcraft::qto::…`); standardna alfa shema ima tek nekoliko naziva količina.
- Format se može promijeniti pod nama; datoteka napravljena danas možda se sutra neće čitati.
