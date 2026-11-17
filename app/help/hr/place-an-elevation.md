---
title: Postavite pročelje i otvorite njegov pogled
summary: Postavite oznaku pročelja na tlocrt etaže, usmjerite je prema onome što želite vidjeti, zatim pronađite njezin crtež u pregledniku projekta, uredite ga i stavite na list. Koraci za rasporede s vrpcom i za klasični raspored.
keywords: pročelje, pogled pročelja, oznaka pročelja, naznaka pročelja, postavi pročelje, novo pročelje, izradi pročelje, vanjsko pročelje, bočni pogled, pogled sprijeda, pogled iz točke, gdje je moje pročelje, otvori pročelje, pročelje na listu, okreni pročelje, preimenuj pročelje, sjeverno pročelje, poredaj poglede, podijeli pogled, tlocrt i 3D jedan uz drugi
from: a7cfd2b9
---

## Što ćete učiniti

Izradite vlastito pročelje: crtež zgrade viđene iz točke koju odaberete, gledano u smjeru koji odaberete. Potrebna su dva klika na tlocrtu etaže. Crtež se zatim navodi uz ostala pročelja zgrade.

:::note
Četiri strane već postoje. Svaka zgrada ima pročelja sjever, istok, jug i zapad u {{ui:Preglednik projekta}} pod {{ui:Pročelja}}, bez postavljanja ičega. Postavite vlastito pročelje kada želite pogled s nekog drugog mjesta: okomito na zakošeno krilo, iz unutrašnjosti dvorišta ili na jedan zid unutar prostorije.
:::

## Gdje je alat

- Rasporedi s vrpcom: {{ui:Pogled}} › **Stvori** › {{ui:Visina}}.
- Klasični raspored: uključite {{ui:Crtanje}}, zatim {{ui:Izgradnja}} › {{ui:Visina}}.
- Bilo koji stil izbornika: naredba se zove Visina; paleta naredbi je pronalazi, a naredbeni redak prihvaća ELEVATION.

## Koraci

1. Odaberite {{ui:Visina}}. Pročelje se postavlja na tlocrt etaže, pa ako ste bili u 3D pogledu, BimCraft prikazuje tlocrt etaže na kojoj ste bili. Pokazivač kaže **Odredite mjesto na kojem stoji pročelje**.
2. Kliknite mjesto s kojeg se pogled uzima. Za vanjsko pročelje kliknite izvan zgrade, malo podalje od zida koji želite vidjeti.
3. Pokazivač sada kaže **Odredite smjer gledanja**. Pomaknite se prema zgradi: strelica pokazuje smjer, a kratka crta preko prvog klika je rub s kojeg se pogled gleda. Kliknite.
4. Na tlocrtu se pojavi krug s brojem i pokazivač. To je oznaka pročelja. Prva je 1, sljedeća 2.
5. Pritisnite Esc za završetak ili nastavite i postavite još jedno.

Postavljanje oznake jedan je korak: {{key:Mod+Z}} ga poništava.

## Otvaranje crteža

Tlocrt ostaje pred vama nakon drugog klika. Crtež se nalazi u {{ui:Preglednik projekta}}:

1. Otvorite {{ui:Pročelja}}. Vaše se nalazi nakon četiri strane kao **Visina 1**.
2. Kliknite gumb olovke {{ui:Uredi u ovom prikazu}} u njegovom retku da vidite crtež i radite u njemu: pomičite zidove, vrata, prozore i etaže, dodajte bilješke i kote. Vidi [Uređivanje u pročeljima i presjecima](topic:edit-in-elevations).
3. Kliknite sam redak da otvorite skup crteža ili dodajte pogled na vlastiti list. Vidi [Pogledi i listovi](topic:views-and-sheets).

U klasičnom rasporedu preglednik projekta nalazi se u lijevoj ploči dok je {{ui:Crtanje}} uključeno. U rasporedima s vrpcom to je kartica {{ui:Preglednik projekta}} pod Svojstva.

## Što pogled prikazuje

- Sve ispred oznake, dokle seže zgrada. Ništa iza nje.
- Etaže, s nazivima i visinama.
- Ako oznaka stoji unutar zgrade, sve u čemu stoji bude presječeno na tom mjestu, kao što to čini presjek. Za čisto vanjsko pročelje stanite izvana.

## Promjena

Odaberite oznaku na tlocrtu (kliknite njezin krug alatom {{ui:Odaberi}}). Svojstva imaju:

- {{ui:Oznaka}}: njezin broj ili vlastiti naziv, do 8 znakova.
- {{ui:Obrni pogled}}: gledanje u suprotnom smjeru s istog mjesta.
- {{ui:Gledaj do}}: koliko daleko ispred oznake pogled seže. 0 prikazuje sve.

Pritisnite Delete za uklanjanje oznake i njezinog crteža. Poništi ih vraća.

:::tip
Da biste istodobno vidjeli tlocrt i 3D pogled dok radite, u rasporedima s vrpcom koristite {{ui:Pogled}} › **Prozori** › {{ui:Poredaj poglede}}, ili {{ui:Podijeli}} u klasičnom rasporedu. Klik na karticu pogleda vraća na jedan pogled.
:::

## Ograničenja

- Oznaku za sada nije moguće povući ni okrenuti na tlocrtu. Uklonite je i postavite ponovo ili upotrijebite {{ui:Obrni pogled}}.
- Na popisu pogleda koje možete dodati na list vlastito pročelje navedeno je uz presjeke.
- Oznake vrata i prozora crtaju se na četiri bočna pročelja, a ne na onom koji ste postavili.

## U IFC-u

Oznaka se u datoteci sprema kao IfcAnnotation s nazivom "Elevation 1" i tipom objekta "Elevation marker", u etaži na kojoj je postavljena. Drugi program je prikazuje kao anotaciju; sam crtež BimCraft svaki put izrađuje iz modela.
