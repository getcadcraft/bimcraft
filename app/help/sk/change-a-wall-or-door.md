---
title: Zmena steny, dverí alebo okna
summary: Kliknite na nakreslenú stenu, dvere alebo okno a zmeňte ich typ, veľkosť, výšku alebo miesto vo Vlastnostiach, alebo ich potiahnite v pôdoryse; každá zmena je jeden krok na vrátenie.
keywords: zarovnať do pravého uhla, štvorec, 90, pravý uhol, šikmý, uhol, ortogonálne, veľkosť miestnosti, vnútorná plocha, vonkajšia plocha, merať od, posun o vzdialenosť, zadaná vzdialenosť, zakrivená, oblúk, výška oblúka, polomer, čiara umiestnenia, zarovnanie, zmena, úprava, vlastnosti, typ steny, hrúbka, dĺžka, výška, odsadenie základne, vrch, úroveň, prevrátiť, vonkajšok, veľkosť dverí, veľkosť okna, parapet, vzdialenosť, posun, úchyt, potiahnutie, zmena typu, viac
from: 63052d5d
---

## Čo budete robiť

Zmeňte to, čo ste nakreslili: vyberte stenu, dvere alebo okno a zadajte nové číslo vo **Vlastnostiach**, alebo ich potiahnite v pôdoryse. Pôdorys a 3D pohľad nasledujú, rohy sa znova spoja a dvere a okná zostanú vo svojich stenách.

## Zmena steny

1. S zapnutým {{ui:Draw}} a {{ui:Select}} kliknite na stenu v pôdoryse (alebo v 3D pohľade).
2. **Vlastnosti** zobrazia okno s číslami steny. Zmeňte jedno a stlačte {{key:Enter}}:
   - **Typ steny**: iný zo základných typov. Hrúbka a vrstvy sa menia s ním.
   - **Hrúbka**: ľubovoľná hrúbka. Typ si zachová ostatné vrstvy a jeho hlavná vrstva (stojky alebo blok) zoberie rozdiel, napríklad „Exterior 2×6, 200 mm“.
   - **Merať od**: **Stredová čiara**, **Vnútorná plocha** alebo **Vonkajšia plocha**. **Dĺžka** a **Veľkosť miestnosti** sa z nej čítajú a nastavujú. Vonkajšia plocha je to, čo ukazujú kóty pôdorysu.
   - **Dĺžka**: koniec steny sa posunie pozdĺž jej čiary. Stena spojená na tom konci sa posunie kolmo k sebe a zachová svoj uhol.
   - **Veľkosť miestnosti** (keď je cez miestnosť rovnobežná stena): zadajte požadovanú veľkosť. Táto stena sa posunie kolmo a spojené steny sa natiahnu, aby išli za ňou.
   - **Posunúť kolmo**: zadajte, o koľko sa stena posunie kolmo k sebe: holé číslo ju posunie von, záporné dovnútra.
   - **Uhol k spojenej stene**: uhol k stene spojenej na jej začiatku. Zadajte 90, aby bola kolmo. Stena nespojená s ničím zobrazí **Smer** v stupňoch od východu.
   - {{ui:Square up}}: otočí steny spojené s touto do pravých uhlov, pozdĺž smeru, v ktorom väčšina ich dĺžky beží. Pracuje na celej spojenej miestnosti alebo rozložení, nech vyberiete ktorúkoľvek z jeho stien. Stena viac ako 10 stupňov mimo pravého uhla zostane, ako je, takže stena nastavená na 45 stupňov je bezpečná. Jedno {{ui:Undo}} všetko vráti späť.
   - **Výška steny**: **Až po úroveň nad** nasleduje túto úroveň; **Až po úroveň 3** (a ľubovoľnú vyššiu) vytvorí stenu, ktorá prechádza úrovňami medzi nimi; zadanie výšky potom nastaví, ako ďaleko pod alebo nad touto úrovňou je vrch. **Pevná výška** zachová číslo, ktoré zadáte. **Prechádza** vypíše úrovne, ktorými takáto stena prechádza: v ich pôdorysoch sa kreslí svetlejšie, miestnosti sa k nej tam uzavrú a dvere a okná sa do nej dajú umiestniť z týchto pôdorysov. Premiestňuje sa a tvaruje na úrovni, na ktorej začína.
   - **Odsadenie základne**: ako vysoko nad úrovňou sa stena začína. Jej vrch zostane, kde bol.
   - **Vonkajšok**: {{ui:Flip}} dá vonkajšie vrstvy na druhú plochu.
   - **Čiara umiestnenia**: **Stredová čiara**, **Vonkajšia plocha**, **Vnútorná plocha**, **Ľavá plocha** alebo **Pravá plocha**. Zmena nič nepohne. Neskôr, keď sa stena zhrubne (podľa typu alebo **Hrúbky**) alebo sa jej vonkajšok prevráti, čiara umiestnenia zostane na mieste a stena vyrastie alebo sa prevráti okolo nej. Rovná stena, ktorá sa s ňou stretáva v rohu, nasleduje, takže roh sa stále uzavrie. Čiara umiestnenia vybranej steny sa v pôdoryse kreslí čiarkovane. Vyberte viac stien, ak ju chcete nastaviť pre všetky.
   - **Výška oblúka** (zakrivené steny): ako ďaleko sa stred vyklenie od rovnej čiary. 0 ju urobí rovnú; záporná hodnota ju vyklení na opačnú stranu. Polomer sa zobrazí vedľa nej.
3. Každá zmena je jeden krok v **Zmeny**; {{ui:Undo}} ju vráti späť.

## Potiahnutie steny v pôdoryse

Keď je vybraná jedna stena, zobrazí tri úchyty: štvorček na každom konci a kruh v strede.

- Potiahnite koniec, aby sa stena predĺžila, skrátila alebo otočila. Zachytáva sa ako nástroj Stena a pripne sa kolmo k stene spojenej na jej druhom konci, keď ste do 3 stupňov; {{key:Shift}} ju drží na osiach pôdorysu.
- Steny spojené na konci, ktorý ťaháte, zachovajú svoj uhol: ich konce kĺzu pozdĺž ich vlastných čiar, kým sa nestretnú s novou čiarou steny, takže nič sa nesklopí. Podržte {{key:Mod}} pre voľné potiahnutie (koniec spojenej steny ide s vaším a tá stena sa otočí), alebo {{key:Alt}} na zrušenie spojení v tejto stene.
- Potiahnite stred, aby sa celá stena posunula kolmo k sebe, nech ťaháte akýmkoľvek smerom. Jej rohy kĺžu pozdĺž spojených stien, takže tie zachovajú svoj uhol.
- Podržte {{key:Mod}} pri ťahaní stredu pre voľné posunutie, keď naozaj chcete zrušiť uhol. {{ui:Square up}} ho vráti.
- Kým držíte úchyt, zadajte vzdialenosť a stlačte {{key:Enter}} (alebo pustite): stena pôjde presne tak ďaleko, ako ste ťahali. {{key:Esc}} posun zruší.
- Vybraná zakrivená stena zobrazí úchyty na koncoch a okrúhly úchyt v strede oblúka. Potiahnutím okrúhleho úchytu ju ohnete.
- Dvere a okná zostanú v stene. Stena, ktorá je pre to, čo drží, príliš krátka, sa odmietne s hláškou „Do tej steny sa to nezmestí.“

## Zmena dverí alebo okna

1. Kliknite na dvere alebo okno v pôdoryse.
2. Vo **Vlastnostiach**: **Typ** (iné dvere alebo okno rovnakého druhu), **Šírka**, **Výška**, **Parapet** (okná), **Od začiatku** a **Od konca** (vzdialenosť od každého konca steny po jej hranu), **Závesy** {{ui:Flip}} (dvere s jedným krídlom a otváravé okná; posuvné, zasúvacie, stodolové a skladacie dvere namiesto toho uvádzajú **Otvára sa do**; pevné, zavesené a obrazové okná a dvojkrídlové dvere nemajú nič), a **Smer otvárania** (dvere) alebo **Strana rámu** (okná) {{ui:Flip}}.
3. Alebo ho potiahnite pozdĺž steny alebo na inú stenu: pozri [Dvere a okná](topic:doors-and-windows).

## Zmena viacerých naraz

Vyberte viac stien (alebo viac dverí, alebo viac okien) s {{key:Shift}}+kliknutie alebo {{key:Mod}}+kliknutie. **Vlastnosti** ponúknu, čo majú spoločné: **Zmeniť typ…**, výšku, veľkosť. Jedna zmena nastaví všetky a jedno {{ui:Undo}} vráti všetko späť.

## Dobré vedieť

- Čísla sa zobrazujú v {{ui:Units}} zvolených na paneli nástrojov.
- Steny, dvere a okná z iných programov zobrazujú svoje údaje IFC vo **Vlastnostiach** ako predtým, bez tohto okna.
