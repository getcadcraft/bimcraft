---
title: Audit modelu: miestnosti, značky, LOD, kolízie a rozhrania
summary: Spustite pripravené kontroly nepomenovaných miestností, chýbajúcich značiek, prvkov pod úrovňou vypracovania (LOD), ktorú žiada štádium projektu, kolízií medzi profesiami a rozhraní LOD 350. Iba odporúčanie: nič sa neblokuje.
keywords: audit, kontrola, nepomenovaná miestnosť, chýbajúca značka, značka, lod, úroveň vypracovania, míľnik, štádium, kolízia, profesia, koordinácia, rozhranie, lod 350, otvor, preklad, nadpražie, prestup, chránička, potrubie, kanál, problémy, protokol o kontrole, odporúčanie
from: cc83a14d
---

## Čo budete robiť

Prejdite celý model naraz, skôr než ho vydáte. Audit spustí pripravené sady pravidiel a zapíše, čo nájde, do zoznamu {{ui:Problems}} ako odporúčanie. Nič sa neblokuje: nález opravíte alebo ho prijmete s dôvodom, ako každý iný problém.

## Postup

1. Otvorte {{ui:Model checks}} › {{ui:Audit}} v ľavom paneli, alebo {{ui:Tools}} › {{ui:Audit the model…}} (napísané: `AUDIT`).
2. Vyberte {{ui:Project stage}}. Je to to isté štádium ako v detailoch výkresu.
3. Zaškrtnite sady pravidiel, ktoré chcete spustiť.
4. Kliknite na {{ui:Run the audit}}.
5. Prečítajte riadok pre každú sadu pravidiel, potom otvorte {{ui:Open the Problems list}}. Kliknutie na nález vyberie jeho prvok.
6. {{ui:The check report}} stiahne protokol: každý nález, kto čo prijal a prečo, a sady pravidiel, ktoré bežali.

## Sady pravidiel

- **Nepomenované miestnosti**: miestnosť bez názvu alebo stále nazvaná tak, ako ju nazval program (napríklad „Room 3“).
- **Chýbajúce značky**: dvere alebo okno bez označenia, miestnosť bez čísla, elektrické zariadenie bez značky.
- **Prvky pod LOD štádia**: každá stena, podlaha, strop, strecha, dvere a okno, ktorých LOD je nižšie, než štádium žiada. Prvok načíta značku LOD svojho typu; prvok overený na stavbe má LOD 500. Prvky bez značky sa spočítajú v jednej poznámke, lebo sa nedajú skontrolovať.
- **Kolízie medzi profesiami**: prvky dvoch profesií (architektúra, konštrukcie, strojné, zdravotechnika, elektro, podľa triedy IFC), ktoré do seba zasahujú. Strecha, ktorá leží na svojich stenách, sa nerátá.
- **Rozhrania LOD 350**: každé dvere a okno sú v otvore svojej steny, otvor sa zmestí do steny, dva otvory sa neprekrývajú, otvor širší ako limit má preklad alebo nadpražie (prvok nad ním alebo poznámku na dverách či okne), a potrubie, kanál alebo kábelový žľab, ktorý prechádza stenou alebo doskou, má tam otvor. Nálezy sa spočítajú pre každú dvojicu profesií.
- **Rozpoznané prvky, ktoré nikto neoveril**: steny, dvere, okná a miestnosti načítané z PDF, skenu alebo výkresu, ktoré sú ešte neoverené. Pozri [Označte prvky ako skontrolované alebo overené na stavbe](topic:verification).

## LOD, ktoré každé štádium žiada

Otvorte {{ui:The LOD each stage asks for}}, aby ste videli alebo zmenili tabuľku.

:::note
Tabuľka a šírka prekladu sú počiatočné hodnoty CadCraft. Nie sú prevzaté zo štandardu: projekt nastavuje LOD podľa štádia vo svojom pláne BIM. Nastavte ich podľa svojho. Kancelária môže nastaviť tabuľku pre všetkých v Nastavenia › Default Policies › Audit; zmena v sekcii Audit sa uchová na tomto počítači.
:::

## Dobré vedieť

- Preklad možno uviesť poznámkou namiesto modelovania: vyberte dvere alebo okno a vyplňte {{ui:Lintel or header note}} pod {{ui:Verification}} vo Vlastnostiach.
- Potrubie, ktoré prechádza skutočným otvorom, neprekračuje žiadny povrch a nehlási sa. To, ktoré je modelované rovno cez stenu, sa hlási.
- Kontrola kolízií sa na veľmi veľkom modeli po niekoľkých sekundách zastaví, a povie to. Pre úplnú kontrolu dvoch zvolených sád použite [Nájdenie kolízií medzi prvkami](topic:clash-check).
- Po zmene modelu audit spustite znova. Prijaté nálezy zostanú prijaté, kým sa ich čísla nezmenia.
- Audit číta model. Nenahrádza koordinačnú kontrolu zodpovedných ľudí.

## Ďalej

- [Kontrola modelu na bežné problémy](topic:model-checks)
- [Nájdenie kolízií medzi prvkami](topic:clash-check)
- [Označte prvky ako skontrolované alebo overené na stavbe](topic:verification)
