---
title: Obkreslenie podlažia, perá podľa pohľadu, schodisko z náčrtu, otvorenie OBJ
summary: Zobrazte iné podlažie prerušovane pod pôdorysom a zarovnajte ho, dajte múrom, dverám a oknám vlastné pero v jednom pohľade, nakreslite chôdzovú čiaru pre schodisko a otvorte sieť Wavefront OBJ.
keywords: referenčný výkres, obkreslenie, duch, podklad, pero, hrúbka čiary, typ čiary, prepísanie, schodisko, náčrt, podesta, OBJ, sieť, import, Wavefront
from: 333ebbde
---

## Obkreslenie podlažia

Vyberte {{ui:Obkresliť}} v ponuke {{ui:Zostava}} a potom pohľad v zozname: pôdorys iného podlažia, pôdorys stropu podlažia alebo výkres detailu (orezaný na svoj výrez). Jeho múry, stĺpy a podlahy sa zobrazia prerušovane pod pôdorysom, ktorý kreslíte. Posuňte ho kliknutím na základný bod na referencii a potom na miesto, kam má tento bod patriť, alebo zadajte X, Y a uhol (otočí sa okolo vlastného stredu). {{ui:Obnoviť}} ho vráti na pôvodné miesto, {{ui:Skryť}} ho odstráni. Je to iba referencia: nič ju nevyberie, nevytlačí sa a neuloží sa do IFC. BimCraft si ju pre každé podlažie pamätá v tomto prehliadači.

## Perá podľa pohľadu

Vyberte {{ui:Perá}}. Povedzte, na čo pero slúži: všetky múry, všetky dvere, všetky okná, typ vybraného prvku alebo vybrané prvky. Zvoľte hrúbku, čiaru (plná, prerušovaná, bodkovaná) a farbu, potom kliknite na {{ui:Použiť}}. Zmena platí iba pre pôdorys tohto podlažia. Výber má prednosť pred typom a typ pred celou kategóriou. {{ui:Vymazať všetko}} ich odstráni. Uchovávajú sa v tomto prehliadači. Zaškrtnite **Farby pier v 3D**, ak chcete farebné perá vykresliť na modeli v 3D zobrazení (hrúbka alebo čiara patrí čiare, takže sa tam zobrazí iba farba); odškrtnutím sa vrátite späť. {{ui:Tlačiť}} ich vykreslí do PDF pôdorysu: hrúbka sa škáluje podľa obrazovky (predvolené pero múru 1.75 pixela zodpovedá 0.5 mm), prerušované čiary zostanú prerušované a farba sa vytlačí v hodnote farebného motívu papiera.

## Schodisko z náčrtu

Vyberte {{ui:Náčrt schodiska}} a kliknite na rohy chôdzovej čiary, najskôr na spodný schod. Jedna čiara je priame schodisko, dve čiary stretávajúce sa v pravom uhle sú L a tri čiary (hore, cez, späť) sú U. Stlačením {{key:L}} nakreslíte podestu: kliknite na jej rohy a stlačte {{key:Enter}}; jej krátka strana určí šírku schodiska. Stlačením {{key:Enter}} schodisko umiestnite. Každý stupeň sa vypočíta z dĺžky vašej čiary a počtu podstupníc, ktorý výška vyžaduje. Potom je to bežné schodisko: zmeňte ho vo **Vlastnostiach** a schodisková šachta aj zábradlia sa prispôsobia.

Zaškrtnite **Urobiť z toho rodinu** v riadku nástroja (alebo stlačte {{key:F}}) pred stlačením {{key:Enter}}, ak chcete schodisko umiestniť ako rodinu (priame, L alebo U schodisko). Vloží sa ako jeden prvok a otvorí sa v editore rodiny so svojou šírkou, stupňom, celkovou výškou, počtom stupňov v každom ramene a medzerou U ako parametrami, takže môžete pridať rozmery, symbol v pôdoryse alebo aktívne body. Stupne a výška podstupnice sa z nich odvodia. Nemá zábradlia ani schodiskovú šachtu: tie patria bežnému schodisku.

## Otvorenie OBJ

Otvorte súbor `.obj` ako ktorýkoľvek iný súbor. OBJ nemá jednotky, takže BimCraft číta metre s osou Y smerujúcou nahor, ako to zvyčajne zapisuje väčšina programov. Každý objekt alebo skupina sa stane jedným prvkom siete na jednom podlaží a potom ho môžete zobraziť, merať, rezať, umiestniť do modelu a uložiť ako IFC. Čiary, krivky a plochy sa vynechajú a stavový riadok to uvedie.

Objekt, ktorý je presne rovný hranol (uzavretá sieť s dvoma rovnobežnými, zhodnými koncovými plochami a rovnými bočnými stenami kolmými na ne: doska, stĺp, blok múru, plech s dierami), sa uloží do IFC ako vlastné vytlačené teleso IFC s obrysom a hĺbkou, nie ako zoznam trojuholníkov. Iné programy ho čítajú ako skutočné teleso, zostáva malé a jeho hĺbku a obrys možno neskôr upraviť. Stavový riadok uvedie, koľko objektov sa takto zachovalo. Čokoľvek, čo nie je presne hranol (zúžený tvar, sieť s jedným posunutým vrcholom, sieť s medzerou), zostane ako trojuholníky. Súbor STEP sa číta rovnako.
