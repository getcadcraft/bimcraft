---
title: Registrace více skenů do jednoho
summary: Umístěte skeny pořízené z různých pozic do jednoho rámce podle vybraných dvojic bodů nebo zadaných cílů, zpřesněte je pomocí ICP, uložte registraci jako projekt a exportujte zaregistrované mračno jako LAS nebo E57.
keywords: registrace, skeny, mračno bodů, icp, iterativní nejbližší bod, cíle, dvojice bodů, tuhá transformace, zarovnání, sloučení, e57, las, sken na bim
from: e8e270db
---

## Co uděláte

Několik skenů stejného místa (každý z vlastní pozice skeneru) začíná ve vlastních souřadnicích. Zaregistrujte je: dejte každému skenu jedno umístění, aby všechny ležely v jednom rámci, pak to uložte jako projekt a zapište zaregistrované mračno jako jeden soubor LAS nebo E57.

## Umístění skenů

1. Otevřete dialog ({{ui:Registrace skenů…}} na úvodním panelu, nebo {{ui:Zobrazit}} › {{ui:Registrace skenů…}}, jakmile je model otevřený). {{ui:Přidat skeny…}} přijme soubory LAS, LAZ, E57, PLY, PCD, PTX, PTS nebo XYZ, nebo je přetáhněte na dialog. Skeny s různými jednotkami se odmítnou s poznámkou: nejprve jeden převeďte.
2. Zvolte {{ui:Sken k přesunutí}} a {{ui:Umístit vůči}}. Obrázek ukazuje každý sken v rámci tak, jak je nyní, každý jednou barvou: {{ui:Půdorys}}, {{ui:Zepředu}} nebo {{ui:Z boku}}; tažením posouváte, kolečkem přibližujete.
3. **Podle dvojic bodů.** Klikněte na {{ui:Vybrat dvojici}}, pak na bod na skenu, který se má přesunout, a pak na stejné místo na jiném skenu (roh, cíl, patu sloupu). Opakujte to alespoň třikrát, s body, které neleží v jedné přímce a jsou od sebe rozmístěny. Klikněte na {{ui:Umístit podle dvojic}}: sken se umístí metodou nejmenších čtverců a **Zbývá** ukazuje, o kolik každá dvojice ještě mine. Dvojice s velkým číslem je špatný výběr: odeberte ji křížkem a umístěte znovu.
4. **Podle cílů.** Pokud jsou známé souřadnice bodu (zaměřené cíle), klikněte na {{ui:Vybrat, pak zadat cíl}}, klikněte na bod na jeho skenu a do řádku zadejte X, Y a Z cíle. Dvojice a zadané cíle lze volně kombinovat.

## Zpřesnění pomocí ICP

Dvojice dají hrubé umístění. {{ui:Zpřesnit}} posouvá sken, dokud jeho plochy nesedí na plochách druhého skenu: nejprve **bod k bodu**, potom **bod k rovině**. Tabulka uvádí každý krok s jeho chybou a počtem shodných bodů; řádek nad ní ukazuje, jak chyba klesá. {{ui:Zastavit}} ukončí běh po aktuálním kroku a ponechá to, čeho dosáhl. {{ui:Zpět}} vrátí zpět celý běh (nebo poslední umístění); {{ui:Obnovit}} vrátí sken do souřadnic v souboru.

Pro rychlost na notebooku pracuje ICP nad zředěným podílem bodů ({{ui:Použité body}}, 5,000 až 60,000) a ignoruje shody vzdálenější než {{ui:Největší vzdálenost shody}} (ve výchozím nastavení 5% velikosti skenu, s postupným zmenšováním, jak se ustaluje). Potřebuje nejprve hrubé umístění: skeny, které se sotva překrývají, hlásí, že je nelze spárovat. Plochy, které jsou jen rovné nebo jen přímé, nemohou opravit polohu podél sebe; v takovém případě přidejte dvojice.

## Uložení a export

- {{ui:Uložit projekt}} zapíše malý soubor `.ccscans.json`: název každého skenu, velikost a otisk jeho prvních 64 KB spolu s jeho transformací. Neobsahuje žádné body. {{ui:Otevřít projekt…}} najde soubory skenů podle těchto odkazů (soubory musí být nejprve přidány) a vrátí všechny transformace na místo.
- {{ui:Exportovat LAS}} a {{ui:Exportovat E57}} zapíšou jeden soubor se všemi skeny na jejich zaregistrovaném místě. Originály se nikdy nepřepisují; transformace se aplikuje při výstupu. Je-li zapnuto {{ui:Číst všechny body ze souborů}}, každý soubor se pro každý bod přečte znovu (až 20 milionů na sken); je-li vypnuto, zapíší se jen body zobrazené v prohlížeči.
- {{ui:Zobrazit zaregistrované mračno}} (BimCraft) zapíše LAS a otevře ho ve 3D pohledu vedle modelu jako jakékoli jiné mračno.

:::note
Nic se nenahrává. Registrace pracuje v jednotkách souborů a zachovává milimetry: LAS se zapíše s měřítkem, které se hodí (až do 0.1 mm), E57 s typem double. Souřadnicový systém se přenese do LAS jen tehdy, když všechny skeny uvádějí stejný kód EPSG. Zapisovač E57 je náš vlastní; ověřuje se tím, že jeho soubory čte zpět tento čtenář i libE57Format.
:::
