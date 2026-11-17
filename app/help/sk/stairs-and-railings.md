---
title: Schodiská a zábradlia
summary: Nakreslite priame, L, U a vejárové schodiská, ktoré podľa výšky medzi podlažiami určia výšku a hĺbku stupňov, s madlami a tyčkami a s výrezom schodiskovej šachty v podlaží nad nimi; nakreslite ochranné zábradlia pozdĺž terás a okolo otvorov.
keywords: točité, okrúhle schodisko, schodisko, schodiská, schodište, rameno, výška stupňa, nášľap, podesta, vejárový stupeň, L schodisko, U schodisko, zalomené schodisko, madlo, ochranné zábradlie, zábradlie, tyčka, balustráda, nosný stĺpik, stĺpik, schodisková šachta, voľná výška, terasa, balkón
from: 16e5ace4
---

## Čo budete robiť

Pridávajte schodiská medzi úrovňami a zábradlia tam, kde ich ľudia potrebujú. Schodisko si vypočíta vlastné stupne z výšky medzi úrovňami, udrží ich v obvyklých obytných limitoch, umiestni madlá na svoje otvorené strany a vyreže schodiskovú šachtu v podlaží nad ním.

## Nakreslenie schodiska

1. Na úrovni, z ktorej schodisko začína, otvorte {{ui:Zostava}} a zvoľte {{ui:Schodisko}}.
2. Zvoľte druh — **Priame**, **L s podestou**, **U s podestou** alebo **L s vejárovými stupňami** —, **smer otáčania**, jeho **šírku** a kde budú jeho **madlá**.
3. Kliknite na miesto, kde schodisko začína: na stred prednej hrany spodného nášľapu.
4. Posuňte ukazovateľ smerom, ktorým schodisko stúpa; stupne ho budú nasledovať, s počtom stupníc a nášľapov. Prichytáva sa k stenám a k uhlom po 15°; podržte {{key:Shift}}, ak ho chcete mať kolmo.
5. Kliknite. {{key:Esc}} začne znova.

## Nakreslenie točitého schodiska

1. Otvorte {{ui:Zostava}}, zvoľte {{ui:Schodisko}} a potom ako druh zvoľte **Točité**.
2. Nastavte **Otočenie**, ktorým smerom sa točí nahor (vľavo je proti smeru hodinových ručičiek).
3. Kliknite na stred jeho nosného stĺpika.
4. Kliknite na smer, ktorým ukazuje spodný nášľap.

Začína sa šírkou 30" (nášľap od stĺpika po vonkajšiu stranu) a stĺpikom 4½". Stupnice sa vypočítajú z výšky medzi podlažiami, najviac predvolene 9½". Nášľapy sú hlboké 7½" na chôdzovej čiare a 12" od stĺpika. Madlo vedie na vonkajšej strane.

Vo **Vlastnostiach** točité schodisko pridáva **Stred stĺpika**, jeho priemer. Pole **Nášľap** sa meria na chôdzovej čiare. Jeho kontroly sú označené ako predvolené hodnoty pre točité schodiská: 26" čistá šírka, najmenej 6¾" nášľapu na chôdzovej čiare, stupnice najviac 9½" a madlá 34"–38". Nie sú to inžinierske údaje; o tom rozhodne stavebný úrad.

## Ako sa počítajú stupne

Výška medzi podlahou úrovne a úrovňou nad ňou sa rozdelí na rovnaké stupnice, každá najviac 7¾", a každý nášľap je hlboký 10" (obe hodnoty sa dajú zmeniť vo **Vlastnostiach**). Podesta sa počíta ako jeden stupeň; vejárové stupne sú tri stupne rozvejárené okolo vnútorného rohu. Ak zmeníte výšku úrovne, každé schodisko na nej sa prepočíta.

:::warning
7¾" stupnice, 10" nášľapy, 36" šírka, 6'-8" voľná výška a madlá 34"–38" sú predvolené hodnoty podľa obvyklého obytného predpisu, nie inžinierske údaje. **Vlastnosti** ukazujú, ktoré sú splnené; o tom, čo platí, rozhoduje stavebný úrad.
:::

## Zmena schodiska

Vyberte ho (kliknite na neho v pôdoryse alebo v 3D zobrazení) a zmeňte vo **Vlastnostiach** jeho druh a otočenie, šírku, najvyššiu stupnicu, hĺbku nášľapu, madlá a ich výšku a **Vyrezať podlažie nad ním** pre schodiskovú šachtu. Stupnice a nášľapy, ktoré nakoniec má, sú zobrazené pod ním.

## Schodisková šachta

Keď má úroveň nad ním podlahu, schodisko ju vyreže tam, kde by stupne mali menej ako 6'-8" voľnej výšky. Výrez sa pohybuje spolu so schodiskom a zmizne, keď sa schodisko zmaže.

## Nakreslenie zábradlia

1. Otvorte {{ui:Zostava}} a zvoľte {{ui:Zábradlie}}.
2. Zvoľte **Ochranné zábradlie** (výška 36") alebo **Madlo** a jeho výšku.
3. Kliknite pozdĺž hrany — terasy, balkónu, okolo schodiskovej šachty — a dvojitým kliknutím alebo stlačením {{key:Enter}} dokončite.

Zábradlia dostanú stĺpiky na koncoch a rohoch a tyčky s medzerami pod 4". Vyberte jedno, ak chcete zmeniť jeho druh, výšku alebo to, ako ďaleko nad podlahou začína.

## Nakreslenie plota

Zvoľte **Plot** v tom istom nástroji Zábradlie, nastavte jeho výšku (zo začiatku 1800 mm), kliknite pozdĺž čiary plota a stlačte {{key:Enter}}.

- Plot dostane stĺpik na každom konci a na každom rohu a stĺpik najviac každých 2.4 m medzi nimi. Panelový plot má panel medzi stĺpikmi; plot s priečľami má dve priečle. Tieto rozmery sú bežné voľby, nie požiadavka predpisu: miestne predpisy obmedzujú výšku plota.
- Je to jeden prvok v modeli (IfcRailing pomenovaný Fence) so sadou vlastností {{ui:CadCraft_Fence}}: štýl, výška, stĺpiky, panely, priečle, brány, dĺžka a plocha panelov. Jeden krok späť.
- Tu sa nekreslí: brány (generátor v CivilCraft ich rozloží), latky, terén (plot stojí na podlaží) a výber jedného stĺpika.

## Čo sa ukladá

Schodisko sa ukladá ako schodisko IFC zložené z ramien (s ich stupnicami, nášľapmi, výškou stupnice a dĺžkou nášľapu), podest, vejárových stupňov a madiel; schodisková šachta je otvor v stropnej doske nad ním. Zábradlia sú zábradlia IFC s ich dĺžkou a počtom tyčiek a stĺpikov.
