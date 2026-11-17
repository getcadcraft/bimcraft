---
title: Kontrola modelu vo VR okuliaroch
summary: Prejdite model IFC v plnej veľkosti vo VR okuliaroch: skákajte, otáčajte sa, merajte, rezajte ho, umiestňujte problémy BCF s obrázkom, zobrazte ho ako model na stole a stretnite sa s ostatnými z živej relácie.
keywords: vr, virtuálna realita, okuliare, webxr, xr, imerzívne, quest, oculus, vive, index, pico, prechádzka, teleport, kontrola návrhu, koordinácia, kontrola, meranie, rez, rezanie, problém, problémy, bcf, model na stole, mierkový model, prítomnosť, avatary, naživo, spolu
from: 8994b36d
---

{{ui:VR}} na lište vás dá do modelu s VR okuliarmi, v plnej veľkosti. Stojíte tam, kde je kamera 3D pohľadu, na podlahe pod ňou, a pozeráte rovnakým smerom. Okuliare zobrazujú to, čo 3D pohľad: skryté podlažia, prvky a modely zostávajú skryté a namaľované materiály sa prenesú. Nič sa nenahráva: prehliadač to kreslí na tomto počítači (alebo v prehliadači samotných okuliarov).

## Čo potrebujete

- Okuliare, ktoré prehliadač dokáže ovládať (WebXR): vlastný prehliadač samostatných okuliarov, alebo Chrome či Edge na PC s pripojenými okuliarmi.
- Otvorený model IFC na zabezpečenej stránke (https), ako je táto stránka.

Keď nie sú okuliare, {{ui:VR}} je sivé a hovorí prečo.

## Začiatok

1. Nastavte 3D pohľad tam, kde chcete začať: v miestnosti alebo vonku s pohľadom na budovu.
2. Kliknite na {{ui:VR}} na lište.
3. Nasaďte si okuliare.

Ponuka je na chrbte vašej ľavej ruky. Namierte na ňu pravým ovládačom a stlačte spúšť, aby ste vybrali tlačidlo. (Pri jednej ruke sa ponuka zobrazí pred miestom, kde ste začali.)

## Pohyb

- **Skok:** v {{ui:Presunúť}} namierte na podlahu a stlačte spúšť; pristanete tam. Alebo zatlačte páčku dopredu, aby ste mierili, a pustite ju, aby ste skočili. Môžete pristáť iba na podlahách, doskách a zemi (plochy smerujúce nahor), nikdy na stene.
- **Otočenie:** zatlačte páčku doľava alebo doprava: otočíte sa o 30° pri každom zatlačení.
- **Chôdza:** vo vašej hracej zóne jednoducho choďte.

## Meranie

Vyberte {{ui:Merať}} a potom stlačte spúšť na dvoch bodoch. Vzdialenosť sa zobrazí medzi nimi, v metroch. Bod blízko rohu sa prichytí k rohu.

## Rezanie

Vyberte {{ui:Rez}} a stlačte spúšť na povrchu:

- na stene (alebo na niečom, čo nie je podlaha): všetko medzi vami a týmto povrchom sa odreže, takže vidíte dovnútra. Toto funguje najlepšie zvonku alebo cez miestnosť;
- na podlahe, zhora: pôdorysný rez 1,2 m nad touto podlahou, takže steny ukážu svoju spodnú časť.

{{ui:Vymazať}} odstráni rez a merania. Ak [reznú rovinu](topic:section-plane) model reže, keď začnete, okuliare začnú s ňou.

## Umiestnenie problému

Vyberte {{ui:Problém}} a stlačte spúšť tam, kde je problém. Očíslovaný kolík ho označí a problém sa dostane na kartu {{ui:Problémy}} ako téma BCF, s obrázkom toho, čo ste videli, a kamerou tam, kde ste stáli, v súradniciach samotného modelu. Uložte ich spolu s ostatnými [problémami](topic:issues-bcf) ako súbor BCF; ostatné koordinačné nástroje ich otvoria v tom istom pohľade.

Komentár k problému pridajte po odchode z VR, na karte **Problémy**: písanie v okuliaroch zatiaľ nie je hotové.

## Zobrazenie ako model na stole

{{ui:Stolový model}} zmenší model tak, aby sa zmestil na stôl pred vami; obchádzajte ho alebo ho otáčajte páčkou. {{ui:V plnej veľkosti}} vás vráti tam, kde ste boli.

## S ostatnými, naživo

V [živej relácii](topic:work-live) každý vo VR vidí ostatných ako hlavu a dve ruky vo svojej farbe, s ich menom, a bodkou tam, kam každý ukazuje. Úpravy, ktoré ktokoľvek urobí, sa k vašim okuliarom dostanú do chvíľky. Ľudia pri stole sa v okuliaroch zatiaľ nezobrazujú.

## Odchod

Vyberte {{ui:Opustiť VR}} (alebo si okuliare zložte a ukončite to tam). 3D pohľad na obrazovke sa presunie tam, kde bola vaša hlava.

:::note
Testované s emulátorom okuliarov, zatiaľ nie na každých okuliaroch. Veľký model môže spôsobiť trhanie obrazu v okuliaroch: najprv skryte podlažia alebo modely, ktoré nepotrebujete ([skrytie a izolácia](topic:hide-and-isolate)).
:::
