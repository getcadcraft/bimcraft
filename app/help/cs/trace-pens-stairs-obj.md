---
title: Obkreslení podlaží, pera podle pohledu, skica schodiště, otevření OBJ
summary: Zobrazte jiné podlaží přerušovaně pod půdorysem a zarovnejte je, dejte stěnám, dveřím a oknům vlastní pero v jednom pohledu, nakreslete pochozí čáru pro vytvoření schodiště a otevřete síť Wavefront OBJ.
keywords: referenční obkreslení, duch, podklad, pero, tloušťka čáry, typ čáry, přepsání, schodiště, skica, podesta, OBJ, síť, import, Wavefront
from: 333ebbde
---

## Obkreslení podlaží

Vyberte {{ui:Obkreslit}} v nabídce {{ui:Sestavení}} a pak pohled v seznamu: půdorys jiného podlaží, půdorys stropu podlaží nebo výřez (oříznutý na svůj rámeček). Jeho stěny, sloupy a podlahy se zobrazí přerušovaně pod půdorysem, který kreslíte. Posunete jej klikem na základní bod na podkladu a pak na místo, kam má bod patřit, nebo zadejte X, Y a úhel (otočí se kolem svého středu). {{ui:Obnovit}} jej vrátí zpět, {{ui:Skrýt}} jej odstraní. Je pouze podkladem: nic jej nevybere, netiskne se a neukládá se do IFC. BimCraft si jej pro každé podlaží pamatuje v tomto prohlížeči.

## Pera podle pohledu

Vyberte {{ui:Pera}}. Určete, k čemu pero slouží: všechny stěny, všechny dveře, všechna okna, typ vybraného prvku, nebo vybrané prvky. Zvolte tloušťku, čáru (plná, čárkovaná, tečkovaná) a barvu, pak {{ui:Použít}}. Změna platí jen pro půdorys tohoto podlaží. Výběr má přednost před typem a typ před celou kategorií. {{ui:Vymazat vše}} je odstraní. Uchovávají se v tomto prohlížeči. Zaškrtněte **Barvy per v 3D**, chcete-li v 3D pohledu obarvit na modelu barevná pera (tloušťka nebo čárkování patří čáře, takže se tam ukáže jen barva); odškrtněte ji pro návrat. {{ui:Tisk}} je vykreslí do PDF půdorysu: tloušťka se škáluje podle obrazovky (výchozí pero stěny 1.75 pixelu je 0.5 mm), čárkované zůstanou čárkované a barva se vytiskne ve své hodnotě podle motivu papíru.

## Schodiště ze skici

Vyberte {{ui:Nakreslit schodiště}} a klikejte na rohy pochozí čáry, od nejnižšího schodu. Jedna čára je přímé schodiště, dvě čáry stýkající se v pravém úhlu jsou L a tři čáry (nahoru, napříč, zpět) jsou U. Stiskněte {{key:L}} pro nakreslení podesty: klikněte na její rohy a stiskněte {{key:Enter}}; její kratší strana určí šířku schodiště. Stiskněte {{key:Enter}} pro umístění schodiště. Každý stupeň se vypočítá z délky vaší čáry a počtu stupnic, které výška vyžaduje. Poté je to běžné schodiště: změníte je ve Vlastnostech a šachta schodiště i zábradlí se přizpůsobí.

Zaškrtněte **Vytvořit jako rodinu** v řádku nástroje (nebo stiskněte {{key:F}}) před {{key:Enter}}, chcete-li umístit schodiště jako rodinu (přímé, L nebo U). Přijde jako jeden prvek a v editoru rodin se otevře s parametry šířky, stupně, celkové výšky, stupňů v každém rameni a mezery u U; můžete tak přidat velikosti, značku na půdorysu nebo hotspoty. Kroky a výška stupnice z nich vycházejí. Nemá zábradlí ani šachtu: ty patří běžnému schodišti.

## Otevření OBJ

Otevřete soubor `.obj` jako jakýkoli jiný soubor. OBJ nemá jednotky, takže BimCraft čte metry s osou Y nahoru, jak je většina programů zapisuje. Každý objekt nebo skupina se stane jedním prvkem sítě na jediném podlaží; pak jej můžete prohlížet, měřit, řezat, umístit do modelu a uložit jako IFC. Čáry, křivky a plochy se vynechají a stavový řádek to oznámí.

Objekt, který je přesně přímým hranolem (uzavřená síť se dvěma rovnoběžnými, shodnými čelními plochami a rovnými boky kolmými k nim: deska, sloup, zdicí blok, plech s otvory), se uloží do IFC jako vlastní vytlačené těleso IFC s obrysem a hloubkou, ne jako seznam trojúhelníků. Jiné programy jej načtou jako skutečné těleso, zůstane malé a jeho hloubku a obrys lze později upravit. Stavový řádek ukáže, kolik objektů se tak zachovalo. Cokoli, co není přesně hranol (kuželovitý tvar, síť s jedním posunutým vrcholem, síť s mezerou), zůstane jako trojúhelníky. Soubor STEP se čte stejně.
