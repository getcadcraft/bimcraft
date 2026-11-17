---
title: Uchovávejte údaje o majetku a záznam údržby v modelu
summary: Použijte předaný model IFC pro provoz budovy: výrobce, model, sériové číslo, záruku a životnost zařízení a vybavení, plus záznam o provedené údržbě, to vše zapsané do IFC.
keywords: předání, kolaudace, kolaudační souhlas, skutečné provedení, předávací balíček, majetek, evidence majetku, facility management, fm, provoz, údržba, servis, záruka, sériové číslo, čárový kód, výrobce, producent, model, životnost, předání, cobie, digitální dvojče, po termínu, termín, pracovní příkaz
from: b84ac492
---

Záložka {{ui:Podklady}} v pravém panelu promění otevřený model IFC v záznam vybavení budovy. Vše se zapisuje přímo do IFC, do vlastních sad vlastností a úkolů IFC, takže je přečte i další program, který soubor otevře. Nic se nenahrává a žádný server není potřeba: stačí soubor IFC uložit.

## Co je evidováno

- Vybavení a zařízení: nábytek, sanitární zařízení, svítidla, spotřebiče, vzduchotechnické koncové prvky, ventily, čerpadla, ventilátory, kotle, nádrže, zásuvky, rozvaděče, výtahy a další podobné prvky, a položky knihovny s údaji o vybavení.
- Libovolný jiný prvek, který **sledujete**: vyberte jej v modelu (dveře, stěnu, čerpadlo nakreslené jako obyčejný objekt) a klikněte na {{ui:Sledovat vybrané}}.
- Cokoli, co už má údaje o majetku nebo úkol údržby, ať je zapsán zde, nebo jiným programem.

Nejdříve jsou položky po termínu, potom ty, jejichž termín nastává do 30 dnů. Filtrujte podle názvu, označení, výrobce, modelu nebo sériového čísla, podle podlaží, nebo zaškrtněte {{ui:Jen po termínu nebo do 30 dnů}}.

## Údaje o majetku

Klikněte na položku v seznamu (nebo ji vyberte v modelu) a otevřete její údaje: výrobce, model, odkaz na model, sériové číslo, čárový kód, den instalace, číslo záruky a její začátek a konec, a životnost v letech. {{ui:Uložit údaje}} je zapíše jedním krokem ({{key:Mod+Z}} to vrátí). Prázdné pole hodnotu odstraní.

## Dokumenty

Pod údaji {{ui:Dokumenty}} vypisuje návody, záruky, fotografie, certifikáty a výkresy připojené k majetku. Vyberte druh, zadejte název (nebo ho nechte prázdný: použije se název souboru) a napište, kde je:

- **webová adresa** (`https://…`): bude mít odkaz Otevřít, který se otevře v nové záložce;
- nebo **název souboru nebo cesta** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, síťové sdílení): ponechte soubory vedle IFC, ve stejné složce nebo v podsložce, aby názvy fungovaly i po předání složky. BimCraft ukáže název; soubor otevřete ze složky.

Soubory samotné se nikdy nenahrávají ani nekopírují do IFC: zapíše se jen odkaz. Webová adresa, která obsahuje heslo, a každý odkaz, který není webovou adresou ani souborem (například `javascript:`), se odmítne. {{ui:Odebrat}} sejme dokument z majetku (jeden krok; {{key:Mod+Z}} to vrátí).

Dokumenty, které na prvek připojil jiný program, se vypisují také. Dokumenty na **typu** prvku se zobrazí u každého prvku daného typu a jsou označeny jako takové; měňte je tam, kde byl typ vytvořen.

V IFC je každý dokument odkazem na dokument IFC navázaným na prvek; jeho druh se uchovává na této vazbě, a to stejně v IFC4 i IFC2X3.

## Záznam údržby

Pod dokumenty klikněte na {{ui:Zapsat provedenou práci}}: den provedení, práce, kdo ji provedl, kdy je příští termín, a poznámky. Každý záznam je jeden krok; {{ui:Úpravy}} a {{ui:Smazat}} ho změní později. Termín příštího úkonu u nejnovějšího záznamu rozhodne, zda je majetek po termínu, nebo se k němu blíží.

## Jak se to uchovává v IFC

- Výrobce a model v `Pset_ManufacturerTypeInformation`, sériové číslo, čárový kód a den instalace v `Pset_ManufacturerOccurrence`, záruka v `Pset_Warranty`, životnost v `Pset_ServiceLife`, vše na samotném prvku. Pokud typ prvku už nese výrobce nebo model, zobrazí se, dokud nenapíšete vlastní.
- Každý záznam údržby je úkol IFC druhu údržba, navázaný na prvek, s termíny (v IFC4 také jako vlastní časy úkolu) a sadou `CadCraft_Maintenance` s dnem, kdo ji provedl, a dnem příštího termínu.
- Hodnoty sdílené s jinými prvky se nejprve zkopírují: změna jednoho majetku nikdy nezmění jeho sousedy.
- Ve starších souborech IFC2X3 se data zapisují jako text (YYYY-MM-DD); tato verze tam vyžaduje samostatný záznam data, který BimCraft nezapisuje.

## Údaje ze senzorů

Otevřete {{ui:Hodnoty senzorů}} a {{ui:Otevřít hodnoty (CSV)…}} a načtěte hodnoty exportované ze systému řízení budovy, datového zapisovače nebo tabulky:

- **První sloupec je čas**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00`, nebo sekundy Unixu. Čas bez pásma se čte v časovém pásmu vašeho počítače. Data den-první, jako `23/10/2026`, se nečtou (jsou nejednoznačná); exportujte data ve formátu ISO.
- **Každý další sloupec je jeden senzor**, pojmenovaný podle **označení**, **názvu** nebo **GlobalId** jeho majetku. Záhlaví, které neodpovídá žádnému majetku, nebo odpovídá více, se vypíše a vynechá. Sloupce oddělte čárkami, středníky nebo tabulátory; u středníků nebo tabulátorů se čte i desetinná čárka (`21,5`).
- Časy nebo hodnoty, které nejdou přečíst (slovo, jednotka napsaná do buňky), se započítají a vynechají, nikdy se nehádají.

Nejnovější hodnota se zobrazí ve sloupci {{ui:Hodnota}} seznamu a v bloku {{ui:Senzor}} majetku, s **grafem** všech hodnot (v telefonu se grafy zobrazí až po klepnutí na {{ui:Zobrazit graf}}). Nastavte na majetku **dolní a horní limit** a jednotku a klikněte na {{ui:Uložit limity}}: hodnota mimo ně majetek označí. Zaškrtněte {{ui:Zobrazit na modelu}}, aby se každý majetek obarvil podle své hodnoty — modře pod dolním limitem, zeleně v mezích, červeně nad horním limitem a u majetku bez limitů jednou modrou škálou od nejnižší k nejvyšší hodnotě — se svou hodnotou jako popiskem (až 60 popisků, označené nejdříve).

**Hodnoty zůstávají v této záložce prohlížeče**: neukládají se do IFC a nikam se neodesílají; příště otevřete CSV znovu. **Limity se ukládají do IFC** (sada `CadCraft_Sensor` na prvku: Low, High, Unit), takže další osoba, která soubor otevře, uvidí stejná označení.

## Živé hodnoty

{{ui:Živý přenos}} čte hodnoty v okamžiku jejich vzniku, **přímo z tohoto prohlížeče do vašeho vlastního systému**. Nic neprochází naším serverem a nic se neukládá jinde než v této záložce prohlížeče. Při otevření souboru se nic nepřipojuje: připojí jen {{ui:Připojit}}.

- **MQTT přes WebSockets**: adresa posluchače WebSocket vašeho brokeru (`wss://broker.example.com:8884/mqtt`) a jedno nebo více témat s `{tag}` na místě, kam patří označení majetku, například `site/{tag}/temperature` (BimCraft se přihlásí k `site/+/temperature` a z tématu každé zprávy přečte označení). Témata bez `{tag}` pojmenovávají senzor sama. Zpráva je buď prosté číslo (`21.5`), nebo JSON, například `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (nastavte {{ui:Pole s hodnotou v JSON}}, pokud se vaše pole jmenuje jinak).
- **Dotaz na adresu (HTTP)**: webová adresa, na kterou odpovídá systém řízení budovy nebo váš malý skript, dotazovaná každých několik sekund (nejméně každých 5). Může odpovědět JSON s klíči podle označení (`{"AHU-1": 21.5}`), seznamem JSON (`[{"tag": "AHU-1", "value": 21.5}]`), nebo CSV hodnot jako výše. Pokud neodpoví, BimCraft před dalším dotazem počká dvojnásobnou dobu, nejvýše pět minut.

Každá hodnota jde k majetku, jehož označení, název nebo GlobalId uvádí, přesně jako sloupec CSV; názvy, které neodpovídají žádnému majetku, se vypíší. Hodnoty se připojí k {{ui:Hodnoty senzorů}}: seznam, grafy, limity a barvy na modelu fungují stejně.

**Vaše heslo nebo token** se zadává pro jedno připojení: předá se připojení a pole se vyprázdní; nikdy se neuloží v tomto prohlížeči ani v IFC. Token se odesílá jako standardní hlavička `Authorization: Bearer` a nejsou posílány žádné cookies.

{{ui:Ponechat tato nastavení v IFC}} zapíše adresu, témata, pole hodnoty a to, jak často se dotazovat, do modelu (sada `CadCraft_Feed` na projektu; pro heslo pole není), takže další osoba, která soubor otevře, zadá jen své přihlášení a klikne na {{ui:Připojit}}. Nevkládejte heslo ani klíč přímo do adresy: adresa s uživatelským jménem a heslem se odmítne.

:::note
**Co váš broker nebo adresa potřebuje.** Stránka v prohlížeči se může připojit jen k serveru, který to dovolí:
- Stránka je zabezpečená (https), takže se prohlížeč připojí jen k adresám `wss://` a `https://` — kromě vašeho počítače (`localhost`), kde `ws://` a `http://` fungují pro zkoušení.
- Adresa HTTP musí povolit požadavky z této stránky (CORS: hlavička `Access-Control-Allow-Origin` a `Authorization` mezi povolenými hlavičkami, pokud používáte token).
- Většina brokerů (Mosquitto, EMQX, HiveMQ a další) nabízí posluchač WebSocket; bývá vypnutý, dokud ho nezapnete. BimCraft komunikuje přes MQTT 3.1.1.
:::

Když je BimCraft zavřený, **žádná upozornění nejsou**: limity označují majetek jen tehdy, je-li model otevřený a připojený živý přenos. Nepřetržité sledování budovy potřebuje server, který BimCraft neprovozuje.

## Tabulka COBie

**COBie** je předávací tabulka, kterou mnozí vlastníci a týmy správy budov vyžadují (publikovaná National BIM Standard v USA; BS 1192-4 ve Velké Británii). Otevřete {{ui:Tabulka COBie}} v záložce:

- {{ui:Uložit jako COBie (.xlsx)}} zapíše listy COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document a Attribute — z modelu a údajů o majetku: budovu, její podlaží a místnosti (plochy z výměr modelu), každý majetek jako komponentu s jeho sériovým číslem, dnem instalace, začátkem záruky, označením a čárovým kódem, jeho typ s výrobcem, modelem, životností a délkou záruky, systémy, do kterých patří, záznam údržby jako úlohy a připojené dokumenty. Každá komponenta nese GlobalId IFC prvku. Do sloupce "created by" napište svůj e-mail, nebo ho nechte prázdný (pak se napíše n/a). Hodnoty, které model nemá, mají **n/a**; sloupce kategorií nesou třídu IFC, ne kód OmniClass.
- {{ui:Načíst tabulku COBie…}} ji načte zpět, ať ji zapsal BimCraft nebo jiný program, a **nejdříve vypíše každou změnu**: který majetek, která hodnota, z čeho na co, a nové dokumenty. {{ui:Použít}} je zapíše všechny jedním krokem ({{key:Mod+Z}} to vrátí). Řádky se párují podle GlobalId, potom podle názvu komponenty. Řádky, které neodpovídají ničemu v modelu, se vypíší, ale nepřidají.

S tabulkou se zachází jako s nedůvěryhodnou: vzorce se nikdy nečtou ani nespouštějí (čte se jen hodnota uložená naposledy v buňce); hodnota, která by způsobila konec záruky dříve, než začne, a odkaz na dokument, který není webovou adresou ani názvem souboru, se vynechají a započítají; velmi velké sešity se odmítnou. Úlohy COBie jsou plánované práce typu, proto se zapisují, ale nečtou zpět. V tabulce, kterou zapisuje BimCraft, je text, který by tabulkový editor mohl vzít za vzorec (začínající `=`, `+`, `-` nebo `@`), označen jako text.

Sešit ověřujeme v našich testech nezávislou čtečkou tabulek; neprošel validátorem COBie. Pokud jej přijímající tým použije, napište nám, co hlásí.

## Předávací dokumenty

Papíry, které se po dokončení budovy předávají vlastníkovi, patří k projektu, ne k jednomu majetku. Na záložce {{ui:Podklady}} otevřete {{ui:Předávací dokumenty}}:

1. Klikněte na {{ui:Přidat dokument}}, zvolte jeho druh (kolaudační rozhodnutí, kolaudační souhlas, záruka, návod, skutečné provedení výkresy, jiné) a zadejte název, datum vydání, kdo jej vydal a jeho referenční číslo.
2. Určete, kde je: webová adresa, název souboru uložený vedle IFC, nebo klikněte na {{ui:Přiložit soubor}}.
3. Klikněte na {{ui:Přidat do seznamu}}. {{ui:Úpravy}} a {{ui:Odebrat}} seznam mění; každá změna je jeden krok, který lze vrátit.

{{ui:Sestavit předávací balíček}} stáhne jeden zip: titulní stranu se seznamem každého dokumentu (stejný seznam jako v tabulce), sešit COBie (dokumenty jsou na jeho listu Document jako řádky o Facility), model a každý přiložený soubor. Kolaudační rozhodnutí nebo souhlas, který v seznamu ještě není, je na titulní straně uveden jako chybějící; balíček se sestaví i tak.

Model v balíčku je **model skutečného provedení**: uvádí, které prvky byly změřeny na stavbě. Spolu s ním je ve složce `as-built` prohlášení, seznam každého prvku se stavem ověření, sada výkresů v aktuální podobě jako jedno PDF (výkresy skutečného provedení) a záznam změn výkresů, pokud model vydal sady. Viz [Označení prvků jako zkontrolovaných nebo ověřených na stavbě](topic:verification).

- V souboru IFC je každý dokument IfcDocumentInformation navázaný na projekt (IfcRelAssociatesDocument), s názvem, referenčním číslem, datem, vydavatelem a místem, takže jej ostatní programy vypíšou.
- Přiložený soubor se eviduje podle názvu, velikosti a SHA-256. Chcete-li uchovat samotný soubor s projektem, použijte {{ui:Uložit projekt jako balíček}} (.ccbundle obsahuje model a přiložené soubory; po otevření se vrátí, každý ověřen podle svého záznamu). Běžné uložení se zeptá, kterou variantu chcete.
- Samotný soubor .ifc uchovává záznam, ne soubor: po otevření použijte {{ui:Přiložit soubor znovu}}. Stejný soubor se pozná; jiný soubor nahradí záznam.

## CSV

{{ui:CSV}} uloží každý majetek s jeho údaji, každý záznam údržby a každý dokument, po jednom řádku, pro tabulku nebo jiný program údržby.

:::note
Ještě není hotovo: hostovaná služba, která uchovává hodnoty a posílá upozornění, když je BimCraft zavřený, a čtení úloh COBie zpět. Viz [Ještě není hotovo](topic:not-built-yet).
:::
