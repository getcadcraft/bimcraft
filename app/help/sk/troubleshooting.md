---
title: Riešenie problémov
summary: Hlásenia, ktoré BimCraft zobrazuje, ich príčiny a čo robiť pri otváraní súborov, priečinkov, 3D modelov, výkresov a úprav.
keywords: problém, chyba, nefunguje, nedá sa otvoriť, zlyhalo, neúplné, poškodené, pomalé, zlyhanie, prázdne, chýbajúce, hlásenie, pomocník
from: 1e5a79fc
---

Hlásenia sa zobrazujú v stavovom riadku na spodku scény, pri zlyhaní červenou farbou. Nájdite hlásenie nižšie.

## Otváranie súborov

**"*name* nie je súbor IFC, RVT, RFA, DWG ani DXF."**
BimCraft súbor nerozpoznal. Skontrolujte príponu a či súbor nie je prázdny. PDF, obrázky a kancelárske súbory sa neotvárajú.

**".ifczip nie je zatiaľ podporovaný. Uložte alebo exportujte model ako obyčajný súbor .ifc."** (rovnako pre `.ifcxml`)
Rozbaľte `.ifczip` (je to bežný zip obsahujúci `.ifc`) alebo exportujte obyčajný IFC.

**"… je projektový súbor, ktorý BimCraft zatiaľ nečíta."**
Súbor `.pln`, `.pla`, `.tpl` alebo `.bpn`. Exportujte z neho IFC alebo DWG a otvorte ten: pozri [Otvorenie projektových súborov .pln a .pla](topic:pln-project-files).

**"Tento súbor IFC sa nepodarilo prečítať."**
Súbor IFC je poškodený alebo to nie je naozaj IFC. Otvorte ho v textovom editore: skutočný súbor IFC začína `ISO-10303-21;`. Exportujte ho znova.

**"Tento súbor je neúplný: má … MB, ale jeho vlastný index ukazuje na údaje aspoň … MB v …"**
Projektový alebo rodinný súbor bol pri kopírovaní, nahrávaní alebo synchronizácii prerušený. Súbor v cloudovom disku, ktorý je „iba online“, vyzerá rovnako. Súbor otvorený samostatne sa stále otvorí, s týmto hlásením v hornej časti karty a s textom "Zobrazujú sa obnovené časti; pre úplný model skopírujte pôvodný súbor znova.": karta ukazuje iba časti, ktorých každý bajt je v súbore, a ostatné uvedie pod **Nie je v súbore**. Sprístupnite súbor offline vo svojom cloudovom disku alebo skopírujte pôvodný súbor znova a otvorte ho. V priečinku BimCraft zobrazí najnovšiu úplnú zálohu.

**"… Zoznam obsahu súboru je tiež v chýbajúcej časti, takže nič z neho sa nedá otvoriť."**
Súbor bol prerušený tak skoro, že tu nie je ani jeho zoznam obsahu. Z tejto kópie sa nedá nič obnoviť. Skopírujte pôvodný súbor znova a otvorte ho.

**"Tento zložený súbor nemá tok BasicFileInfo, takže nie je súbor Revit."**
Súbor je zložený súbor iného druhu (rovnaký kontajner používajú aj staré kancelárske dokumenty). Skontrolujte, či ste vybrali správny súbor.

**"Ešte pracujeme na poslednom…"**
BimCraft ešte spracúva predchádzajúci súbor alebo priečinok. Počkajte, kým stavový riadok skončí, a potom to skúste znova.

**Výber súborov mi môj súbor neponúka.**
Výber ponúka iba `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` a `.dxf`. Namiesto toho presuňte ostatné súbory na stránku a BimCraft vám povie, či ich dokáže prečítať.

## Otváranie priečinkov

**"Tento priečinok má viac ako 20 000 súborov. Vyberte menší priečinok, napríklad jeden projekt."**
Vybrali ste priečinok príliš vysoko, napríklad celý disk. Vyberte jeden priečinok projektu.

**"Prehliadač neudelil prístup k *name*. Vyberte ho znova pomocou možnosti Otvoriť priečinok."**
Kliknuli ste na {{ui:Znova otvoriť}} pri nedávnom priečinku a povolenie prehliadača bolo zamietnuté alebo vypršalo. Vyberte priečinok znova alebo ho presuňte.

**Prehliadač hovorí, že bude "nahrávať" súbory.**
To je vlastné znenie prehliadača pre odovzdanie súborov stránke. BimCraft ich nikam neposiela. Aby ste sa tejto otázke vyhli, presuňte priečinok.

**Na telefóne alebo tablete sa nič nedeje.**
Mnohé mobilné prehliadače nedokážu vybrať priečinky. Otvorte jednotlivé súbory alebo použite počítač.

## Prvé načítanie motora IFC

**Stavový riadok zostáva na "Spúšťa sa motor IFC…" alebo zobrazí chybu, napríklad "Failed to fetch".**
Motor IFC sa nepodarilo stiahnuť. Môžete byť offline, alebo ho blokuje firewall či blokovač obsahu.

:::offline
Ste offline. Ak tlačidlo v hornej lište nehovorí {{ui:Pripravené offline}}, motor IFC sa v tomto prehliadači nikdy neuložil. Znova sa pripojte, otvorte súbor znova a potom kliknite na {{ui:Uložiť na offline použitie}}, aby fungoval aj offline nabudúce. Pozri [Online a offline](topic:online-offline).
:::

:::online
Načítajte stránku znova a skúste to znova. V pracovnej sieti požiadajte svoj IT tím, aby povolil súbory `.wasm` tejto stránky.
:::

## Ukladanie na offline použitie

**Tlačidlo hovorí {{ui:Nepodarilo sa uložiť}}.**
Niektoré súbory sa nestiahli, zvyčajne preto, že sa spojenie prerušilo. Skontrolujte pripojenie a kliknite na tlačidlo znova. Každá predchádzajúca offline kópia sa zachová, kým nebude hotová nová úplná.

**Tlačidlo hovorí {{ui:Offline nie je k dispozícii}}.**
Toto okno nedokáže uchovať offline kópiu, napríklad súkromné okno alebo spravovaný pracovný počítač. Pozri [Práca offline](common:offline).

**Tlačidlo dlho zostáva na "Ukladá sa *n* z *m*".**
Kópia BimCraftu má približne 11 MB, väčšinu z nich tvorí motor IFC. Nechajte kartu otvorenú, kým nebude hovoriť {{ui:Pripravené offline}}.

**BimCraft sa otvoril offline, ale vyzerá zastarane.**
Vaša uložená kópia je z predchádzajúcej návštevy. Keď ste online, kliknite na {{ui:Pripravené offline}} a vyberte {{ui:Uložiť znova (získať najnovšiu verziu)}}.

## 3D zobrazenie

**Model nie je tam, kde čakám, alebo je drobný.**
Stlačte {{key:F}} alebo kliknite na {{ui:Prispôsobiť}}. Prispôsobenie vždy zarámuje všetko v modeli vrátane podlaží, ktoré ste odškrtli, a prvkov ďaleko od budovy, takže budova môže pôsobiť malá. Odtiaľ priblížte.

**Klikanie nič nevyberá.**
Držte myš pri klikaní nehybne: malé potiahnutie otáča. Prvky na odškrtnutých podlažiach sa nedajú vybrať. Keď je zapnuté {{ui:Priestory}}, priehľadné priestory sa vyberú skôr ako to, čo je v nich.

**Tlačidlo {{ui:Hrany}} je sivé: "Hrany sú pre veľmi veľké modely vypnuté".**
Model má viac ako 1.5 milióna trojuholníkov. Hrany sú vypnuté, aby sa ušetrila pamäť.

**Karta spomaľuje, zbelie alebo zobrazí stránku pádu prehliadača.**
Model je príliš veľký pre pamäť, ktorú prehliadač dáva karte. Zatvorte ostatné karty a stránku načítajte znova. Exportujte menší IFC: jednu budovu, jednu disciplínu alebo menej podlaží. Pozri [Prehliadače, zariadenia a pamäť](topic:platforms).

**3D zobrazenie zostáva prázdne.**
WebGL môže byť vypnuté alebo blokované. V nastaveniach prehliadača zapnite hardvérovú akceleráciu (alebo akceleráciu grafiky) a prehliadač reštartujte.

## Úprava IFC

**"Použite číslo."** Hodnota je číselná. Napíšte obyčajné číslo bez jednotiek, napríklad `2.4`.

**"Použite celé číslo."** Hodnota je počet alebo celé číslo. Odstráňte desatinné miesta.

**"Upraviť je možné iba vlastnosti s jednou hodnotou."** Zoznamy, výčty a množstvá sú iba na čítanie.

**{{key:Mod+S}} otvorí okno prehliadača "Uložiť stránku".**
Nie sú žiadne neuložené zmeny, takže BimCraft kláves nechal prehliadaču. Zatvorte okno.

**{{key:Mod+Z}} nerobí nič.**
Funguje iba vtedy, keď máte neuložené zmeny a nepíšete do poľa. Po uložení už nie je čo vrátiť späť.

**Zoznam {{ui:Zmeny}} stále zobrazuje úpravy, aj keď ste ich zahodili a otvorili výkres alebo priečinok.**
Ak na otázku "Zahodiť ich?" odpoviete OK a potom otvoríte niečo iné než model IFC, staré úpravy zostanú v pamäti a {{ui:Uložiť ako IFC}} by ich stále uložilo. Ak chcete naozaj začať odznova, otvorte pôvodný IFC znova alebo načítajte stránku.

**Moja úprava zmenila viac prvkov, než som vybral.**
Zmenili ste vlastnosť v sade označenej "(type)". Vlastnosti typu sa uplatnia na každý prvok daného typu. Kliknite na {{ui:Späť}}. Pozri [Zmena vlastnosti typu pre každý prvok typu](topic:type-vs-instance).

## Výkresy

**"*name* sa nepodarilo prečítať. Môže byť poškodený alebo uložený vo formáte, ktorý čítač zatiaľ nespracúva (…)."**
Uložte výkres z programu, ktorý ho vytvoril, ako staršie DWG (2018 alebo staršie) alebo ako DXF, a skúste to znova.

**"Tento výkres nemá čo zobraziť."** alebo **"*name* je prázdny výkres: neobsahuje čiary, text ani bloky."**
Výkres je prázdny alebo obsahuje iba veci, ktoré BimCraft zatiaľ nekreslí (pozri **Zatiaľ nie je nakreslené** vpravo).

**"Tento výkres je veľmi veľký; zobrazuje sa iba jeho časť."**
BimCraft prestal kresliť, aby zostal citlivý. Vypnite vrstvy, ktoré nepotrebujete, alebo otvorte potrebné listy z menšieho výkresu.

**Chýbajú časti listu.**
Prepojené výkresy môžu chýbať: pozrite sa vpravo pod **Prepojené výkresy**. Pozri [Nájdenie prepojených výkresov a obrázkov](topic:dwg-linked-files). Vrstvy môžu byť tiež vypnuté: kliknite na {{ui:Všetky zapnúť}}.

**Obrázok sa zobrazuje ako prázdny rámček.**
Jeho súbor sa nenašiel alebo je to TIFF ("TIFF sa nedá zobraziť v prehliadači"). Pridajte kópiu vo formáte PNG alebo JPEG pomocou {{ui:Pridať obrázky…}}.

**Posúvanie touchpadom zväčšuje namiesto posunu výkresu.**
Takto výkresy fungujú v BimCraft. Kliknite a potiahnite na posun.

## Ešte stále potrebujete pomoc

Prečítajte si [Čo ešte nie je hotové](topic:not-built-yet): to, čo hľadáte, nemusí byť v tejto verzii.
