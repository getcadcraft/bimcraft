---
title: Sehen, was sich über fünfzig Jahre abnutzt
summary: Die Fenster, Türen, Oberflächen und das Dach des Modells, ihre Nutzungsdauern, die Jahre, in denen jedes ersetzt wird, und die Kosten je Jahr sowie ihr Barwert, sobald Sie je Einheit einen Preis eingeben.
keywords: Lebenszyklus, Lebensdauer, Nutzungsdauer, Ersatz, Instandhaltung, Kosten, Barwert, Diskontierung, Inflation, 50 Jahre, Fenster, Anstrich, Dach, Oberflächen, Gesamtlebenszyklus
from: 1b849545
---

Der Abschnitt {{ui:Lebenszyklusansicht}} im linken Bereich listet auf, was das Modell an Abnutzbarem enthält und wann es über den Betrachtungszeitraum (zunächst 50 Jahre) ersetzt wird. Am Modell wird nichts verändert.

## Lesen

Jeder Teil zeigt seine Menge (aus dem Modell gemessen: Fensterfläche, Außen- und Innentüren, Außenwandoberfläche, Innenanstrich, Boden- und Deckenbelag, Grundfläche des Dachs, Treppen), eine **Nutzungsdauer in Jahren** und einen **Preis je Einheit**. Ein Teil wird nach seiner Nutzungsdauer ersetzt, dann nach dem Doppelten usw., solange dies vor dem Ende des Betrachtungszeitraums liegt. Ein 30-jähriges Fenster in einer 50-jährigen Betrachtung wird also einmal, im Jahr 30, ersetzt. Die Nutzungsdauern sind typische Planungswerte: Ändern Sie sie auf Ihre Produkte und Ihr Klima. Es wird kein Preis angenommen; geben Sie einen ein, um die Kosten je Jahr, die Summe und ihren Barwert zu sehen. Wenn Sie möchten, fügen Sie einen Diskontierungssatz und eine Inflationsrate hinzu.

{{ui:Plan speichern (CSV)}} schreibt die Bauteile und die Jahre. Auch Rohrleitungen, Kanäle, Leitungen und Geräte sind aufgeführt (siehe unten).

## Rohrleitungen, Kanäle, Leitungen und Geräte

- **Rohrleitungen und Kanäle** sind die Meter jeder gezeichneten Strecke. **Geräte** (Pumpen, Ventilatoren, Armaturen, Anschlüsse, Leuchten, Steckdosen, Schalter, Verteiler und die übrigen Dinge, die der Reiter Assets erfasst) werden nach Art gezählt, jede Art mit einer Planungsnutzungsdauer. Ein Gerät, dessen eigene *Nutzungsdauer* im Reiter Assets festgelegt ist, erhält eine eigene Zeile mit dieser Dauer. Hat es ein Einbaudatum, beginnt es mit seinem Alter: Eine 16 Jahre alte Pumpe mit 10 Jahren Nutzungsdauer ist jetzt fällig, danach alle zehn Jahre.
- **Leitungen** sind eine **Schätzung**: die Entfernung im Plan von der Verteilung entlang der Geräte jedes Stromkreises, der nächste zuerst, mal 1.25 für die Leitungsführung. Das Modell zeichnet kein Kabel; prüfen Sie es daher anhand Ihres eigenen Aufmaßes.
- Nutzungsdauern sind Planungswerte zur Prüfung, keine Quelle.

## Graue Emissionen je Ersatz

Setzen Sie ein Häkchen bei {{ui:Die grauen Emissionen (Embodied Carbon) jedes Ersatzes einbeziehen}}. Ein neues Fenster, eine Tür, Treppe, Dach, Rohrleitung oder ein Gerät wird mit den Emissionen angesetzt, die die eigenen Elemente des Modells dieser Art tragen (die Faktoren des Reiters Carbon, je Einheit). Ein Teil ohne Element oder Faktor, etwa Anstrich, Oberflächen und Leitungen, zeigt einen Strich und wird aufgeführt. Das Lebensende des alten Teils und der Aufwand für seinen Austausch werden nicht berücksichtigt.
