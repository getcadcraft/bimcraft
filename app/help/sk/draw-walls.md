---
title: Kreslenie stien
summary: Kreslite steny na pôdoryse úrovne kliknutím na ich rohy alebo zadávaním dĺžok; rohy sa spájajú samy a steny sa ukladajú ako IFC.
keywords: oblúk, zakrivená, čiara umiestnenia, zarovnanie, stena, steny, kresliť, pôdorys, pôdorys podlažia, miestnosť, roh, spojiť, typ steny, 2x6, 2x4, cmu, betón, výška, úroveň, úrovne, podlažie, zadaná dĺžka, ortogonálne, prichytávanie
from: 8269cd4b
---

## Čo budete robiť

Nakreslite steny budovy na pôdoryse každej úrovne. Kliknite, kde stena začína, a potom na každý roh; BimCraft spojí rohy za vás, každej stene pridelí jej vrstvy (obloženie, opláštenie, stojky, sadrokartón …) a vedie ju až po úroveň nad ňou. Ako kreslite, 3D zobrazenie ukazuje steny.

## Otvorenie pôdorysu

1. Začnite novú budovu ([Začať novú budovu](topic:start-a-new-building)) alebo otvorte model IFC.
2. Kliknite na {{ui:Draw}} na paneli nástrojov. Otvorí sa nová budova, ktorá už je zapnutá.
3. Pôdorys úrovne sa zobrazí vľavo a 3D zobrazenie vpravo. Úroveň vyberte v zozname nad pôdorysom alebo okrúhlym tlačidlom vedľa neho na paneli **Úrovne**.
4. {{ui:Plan}}, {{ui:Split}} a {{ui:3D}} sú nástroje v riadku {{ui:View}} na paneli nástrojov (príkazy PLAN, SPLIT a klávesy fungujú ako predtým). Použite {{ui:Plan}} na samotný pôdorys, {{ui:Split}} na oba zobrazenia a {{ui:3D}} na zatvorenie pôdorysu. Keď je okno úzke (alebo je veľkosť rozhrania veľká), {{ui:Split}} umiestni pôdorys nad 3D zobrazenie namiesto vedľa neho.

Pôdorys reže úroveň vo výške 4'-0" (1200 mm) nad jej podlahou, ako to robí pôdorys podlažia. Kolieskom myši priblížte; ťahaním stredným alebo pravým tlačidlom (alebo podržaním {{key:Space}} a ťahaním) posúvate pohľad; keď je zapnutý {{ui:Select}}, aj obyčajné ťahanie posúva. {{key:F}} so ukazovateľom nad pôdorysom ho prispôsobí zobrazeniu.

## Kreslenie miestnosti

1. Kliknite na {{ui:Wall}} (alebo stlačte {{key:W}}).
2. V prvom zozname vyberte typ steny, napríklad **Vonkajšia 2×6** alebo **Vnútorná 2×4**.
3. Vyberte jej výšku: **Až po úroveň nad ňou** (stena nasleduje, ak sa tá úroveň posunie), **Až po** vyššiu úroveň pre stenu, ktorá prechádza cez viacero úrovní (schodisková hala, dvojpodlažná miestnosť, vysoký štít), alebo **Pevná výška** a zadajte ju. Takáto stena patrí úrovni, na ktorej ste ju nakreslili; pôdorysy úrovní, ktorými prechádza, ju zobrazujú svetlejšie, miestnosti sa k nej na nich pripájajú a z týchto pôdorysov môžete do nej klikaním umiestniť dvere a okná (dvere stoja na podlahe danej úrovne). Ak chcete samotnú stenu presunúť alebo upraviť, prejdite na úroveň, na ktorej začína.
4. Kliknite, kde začína prvá stena.
5. Kliknite na každý roh. Každé kliknutie vytvorí stenu; ďalšia začína tam, kde predchádzajúca skončila. Dĺžka a uhol sa zobrazujú vedľa ukazovateľa.
6. Kliknutím na prvý bod znova uzavrite miestnosť. Stavový riadok ukazuje, koľko stien má miestnosť, a v režime osovej čiary dostane každá stena svoju vonkajšiu vrstvu na vonkajšej strane miestnosti.
7. Stlačte {{key:Esc}} (alebo kliknite pravým tlačidlom, alebo dvakrát kliknite), ak chcete skončiť bez uzavretia.

Rohy sa spájajú samy: dve steny sa stretnú na pokos, stena, ktorá končí na inej, sa zastaví na jej líci (spoj T) a tri alebo viac stien v jednom bode zdieľa roh. Steny, ktoré sa križujú, zostávajú tak, ako sú.

Celú miestnosť naraz: otvorte {{ui:Shapes}} pre obdĺžnik, pootočený obdĺžnik, mnohouholník, oblúky, steny na vybraných čiarach alebo okolo obrysu (pozri [Tvary stien, rozdelenie, odsadenie, natiahnutie a uzamknutie](topic:wall-tools)).

## Výber referencie kreslenia

Pred prvým kliknutím zvoľte **Osová čiara**, **Vnútorný líc** alebo **Vonkajší líc**. Keď je zvolený líc, vaše kliknutia a zadané dĺžky popisujú tento líc; BimCraft odsadí osovú čiaru steny o polovicu celkovej hrúbky a spojí po sebe idúce rohy. Vzhľadom na smer kreslenia zvoľte **Vonkajšia strana vľavo** alebo **Vonkajšia strana vpravo**. Pre uzavretý obrys nakreslený proti smeru hodinových ručičiek je vonkajšia strana vpravo; v smere hodinových ručičiek vľavo. Pri **Vnútornom líci** telo steny smeruje na vonkajšiu stranu vašej čiary; pri **Vonkajšom líci** na druhú stranu. Kreslenie podľa líca zachová zvolenú vonkajšiu stranu aj pri uzavretí slučky. Na osovej čiare steny, ktoré neuzatvárajú miestnosť, dostanú vonkajšiu stranu, ktorú ste zvolili; uzavretie miestnosti nastaví vonkajšiu stranu každej steny na vonkajšiu stranu miestnosti samo, bez ohľadu na to, ako ste kreslili.

Zmena typu steny, referencie alebo vonkajšej strany ukončí aktuálny reťazec. Pri blízkom obrátenom rohu sa dlhé pokosy zastavia zanechaním rovných koncov.

Počas kreslenia sa koncový bod v prázdnom priestore môže zarovnať vodorovne alebo zvisle s koncovým bodom steny alebo so skorším rohom. Prerušovaná vodiaca čiara spája tento bod s prichytením ukazovateľa. {{key:Shift}} udrží smer kreslenia v pravom uhle; zarovnanie sa potom zastaví pozdĺž tohto smeru. Blízke koncové body, stredy a priesečníky stien majú prednosť pred vzdialeným zarovnaním.

## Čiara umiestnenia

Keď je **Referencia** nastavená na **Vonkajší líc** alebo **Vnútorný líc**, stena si tento líc ponechá ako čiaru umiestnenia. Ak sa neskôr stena zhrubne alebo sa jej vonkajšia strana prevráti, tento líc zostane na mieste a stena rastie alebo sa otáča okolo neho. Rovná stena, ktorá sa k nemu pripája v rohu, ho nasleduje, takže roh sa stále uzavrie. Čiaru umiestnenia môžete neskôr zmeniť v **Vlastnostiach**: pozri [Zmena steny, dverí alebo okna](topic:change-a-wall-or-door).

## Kreslenie zakrivenej steny

1. Kliknite na {{ui:Wall}} a potom v riadku možností v zozname **Tvar** vyberte **Zakrivená**.
2. Kliknite, kde stena začína, a potom, kde končí.
3. Kliknite na bod na jej oblúku. Alebo zadajte výšku oblúka a stlačte {{key:Enter}}.
4. Reťazec pokračuje od konca steny. Ukončite ho stlačením {{key:Esc}}.

Zakrivená stena sa spája so stenami na svojich koncoch (fungujú rohy a spoje T), vytvára miestnosti a drží dvere a okná pozdĺž svojho oblúka. Tieto zostávajú rovnými jednotkami, kolmými na stenu v strede, a ich vzdialenosť sa meria po oblúku. Stena sa môže otočiť najviac o tri štvrtiny kruhu. Prichytáva sa ku svojim koncom a k stredu svojho oblúka.

Zatiaľ ešte nie je hotové pre zakrivené steny: {{ui:Trim / extend}} a {{ui:Corner}}, rámovanie, automatické kóty pôdorysu a prichytávanie pozdĺž oblúka. Pozri [Čo ešte nie je hotové](topic:not-built-yet).

## Zadanie dĺžky namiesto klikania

Po prvom kliknutí zadajte a stlačte {{key:Enter}}:

| Zadanie | Nakreslí |
|---|---|
| `12'6"` alebo `3810` | stenu takej dĺžky v smere, ktorý ukazuje ukazovateľ |
| `12'6"<90` | takú dĺžku, pod takým uhlom (stupne, proti smeru hodinových ručičiek od pravej strany) |
| `@3000,0` | do bodu vo vzdialenosti takej od posledného, do strany a nahor |
| `1200,3400` | do tohto bodu na pôdoryse |

Ak je nástroj Stena zapnutý a začnete písať číslo, zapíše sa priamo do poľa {{ui:Length}}. Pri stopách a palcoch je obyčajné číslo v palcoch; v milimetroch v milimetroch. Jednotku môžete vždy napísať: `3.5 m`, `10 ft`, `6 1/2"`.

## Prichytávanie

- Koncové body stien, rohy ich lícov a stredy stien sa prichytia, keď je ukazovateľ blízko nich (štvorec, trojuholník).
- Ukazovateľ sa prichytí na osovú čiaru steny alebo na ktorýkoľvek líc (kríž).
- Od posledného bodu sa smer udrží po každých 15°, keď je blízko; podržte {{key:Shift}}, aby ostal na 0°, 90°, 180° alebo 270°.
- Voľné smery zaokrúhľujú dĺžku na 1/2" (alebo 10 mm).

## Zmena, späť, zmazanie

- Každá stena je jeden krok v {{ui:Changes}}: {{ui:Undo}} a {{ui:Redo}} steny vezmú späť a vrátia ich.
- Keď je zapnutý {{ui:Select}}, kliknutím na stenu v pôdoryse ju vyberiete; 3D zobrazenie a **Vlastnosti** sa prispôsobia. {{key:Delete}} zmaže vybrané steny a steny, s ktorými boli spojené, sa znova vyčistia.

## Úrovne

Panel **Úrovne** vypisuje každú úroveň s jej výškou a výškovou kótou.

- Zadajte nový názov, výškovú kótu alebo výšku a stlačte {{key:Enter}}. Zmena výšky úrovne (alebo jej výškovej kóty) posunie úrovne nad ňou o rovnakú hodnotu a steny, ktoré siahajú po úroveň, sa prispôsobia.
- {{ui:Add a level on top}} pridá úroveň nad najvyššiu, rovnako vysokú.
- {{ui:Add a level below}} pridá úroveň pod najnižšiu (suterén), rovnako vysokú: jej výšková kóta je záporná, keď je najnižšia úroveň na 0, a žiadna iná úroveň sa nepohne. {{ui:Undo}} ju odstráni.
- {{ui:Copy this level…}} znova nakreslí to, čo je na úrovni, na ktorú sa pozeráte, na inú úroveň alebo na novú úroveň navrchu: jej steny aj s dverami a oknami, podlahy a stropy (nie strechy). Steny, ktoré siahali po úroveň nad ňou, siahajú po úroveň nad novou; miestnosti sa objavia samy. Jedným {{ui:Undo}} sa všetko vráti späť. Ak druhá úroveň už má steny, kópia sa k nim pridá.
- {{ui:Units}} na paneli nástrojov zvolí jednotky (stopy a palce, palce, desatinné stopy, milimetre, centimetre alebo metre) pre všetko, čo nástroje kreslenia zobrazujú a čítajú.

## Uloženie

Kliknite na {{ui:Save as IFC}}. Každá stena je stenou IFC so svojou osovou čiarou, spojeným tvarom, typom a vrstvami, `Pset_WallCommon` a základnými množstvami (dĺžka, výška, plochy a objemy), takže ju otvoria iné BIM programy a zaradia do tabuľky.

## Dobré vedieť

- Steny sa kreslia na svojej osovej čiare. Hrúbka vyplýva z typu steny.
- Pôdorys zobrazuje tu nakreslené steny vyplnené a všetko ostatné (položky knižnice, modely z iných programov) rezané tou istou rovinou, s tým, čo leží pod rezom, v tenkých čiarach.
- Steny vytvorené inými programami sa v pôdoryse zobrazujú, ale zatiaľ ich nie je možné týmito nástrojmi zmeniť.
