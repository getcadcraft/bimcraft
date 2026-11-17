---
title: Ein Bild des Modells rendern
summary: Erstellen Sie ein Tageslichtbild der 3D-Ansicht: Himmel, Sonne am Breitengrad Ihres Standorts, weiche Schatten, Glasfenster; mit WebGPU pfadverfolgt auf der Grafikkarte, mit Himmeln, einer Kamera, Lichtmischung, Farbkorrektur, Nebel und einer Renderwarteschlange.
keywords: rendern, Voreinstellung, Voreinstellungen, Szenenvoreinstellung, Innen, Außen, Schnittansicht, Nacht, ein Klick, Rendering, Path Tracing, pfadverfolgt, Raytracing, globale Beleuchtung, Spiegelungen, Brechung, hohe Qualität, Foto, fotorealistisch, realistisch, Bild, png, Standbild, Himmel, Sonne, Tageslicht, Schatten, weiche Schatten, Ambient Occlusion, Glas, Fenster, Metall, Materialien, Belichtung, Helligkeit, bedeckt, Dämmerung, Studio, Präsentation, Visualisierung, WebGPU, Entrauschen, physikalischer Himmel, HDRI, IES, Schärfentiefe, Panorama, Weißabgleich, Lichtmischung, Renderelemente, EXR, 16-Bit-PNG, Nebel, Kaustiken, Renderwarteschlange
from: beb74cc7
---

{{ui:Render}} in der Symbolleiste erstellt ein Bild der 3D-Ansicht, das wie Tageslicht aussieht: ein Himmel, die Sonne dort, wo der Breitengrad des Standorts sie hinsetzt, weiche Schatten, Licht vom ganzen Himmel, das Ecken abdunkelt, und Farben, die wie Glas oder Metall wirken können. Das Modell und die Datei werden nicht verändert.

## Die Ansicht rendern

1. Stellen Sie die 3D-Ansicht so ein, wie Sie das Bild möchten: drehen und zoomen, Geschosse oder Bauteile ausblenden, die Sie nicht wollen, und einen [Schnitt](topic:section-plane) setzen, wenn das Bild einen Schnitt zeigen soll.
2. Klicken Sie in der Symbolleiste auf {{ui:Render}}.
3. Wählen Sie eine {{ui:Scene}}, falls die gedrückte nicht die gewünschte ist (siehe [Szenenvoreinstellungen](topic:render#scene-presets-a-good-picture-in-one-click)), wählen Sie die {{ui:Size}} und klicken Sie dann im Dialog auf {{ui:Render}}.

   Das Bild baut sich während des Renderns auf und wird mit jedem Durchgang glatter. {{ui:Stop}} (oder {{key:Esc}}) beendet es früher und behält das bisherige Bild.

4. Klicken Sie auf {{ui:Save}}, um es als PNG herunterzuladen, oder auf {{ui:Save as}} für ein anderes Format (siehe [Das Bild speichern](topic:render#save-the-picture)). Es wird nach der Datei des Modells benannt.

:::tip
Beginnen Sie mit {{ui:Entwurf}} in {{ui:Größe der Ansicht}}, um die Kamera zu prüfen, und rendern Sie dann {{ui:Gut}} oder {{ui:Beste}} in einer größeren Größe für das endgültige Bild.
:::

## Szenenvoreinstellungen: ein gutes Bild mit einem Klick

Der obere Teil des Dialogs hat vier Schaltflächen {{ui:Scene}}. Jede stellt Himmel, Helligkeit, Boden, Kantenlinien, Qualität und Sonne mit einem Klick ein, sodass man vor dem ersten Bild nichts lernen muss. Klicken Sie eine an und dann {{ui:Render}}.

| Szene | Was sie einstellt | Wofür sie gedacht ist |
|---|---|---|
| {{ui:Exterior}} | Klarer Himmel, die eigene Sonne des Modells, Boden an | Das Gebäude von außen |
| {{ui:Interior}} | Bedeckter Himmel (gleichmäßiges Licht, keine harten Sonnenflecken), eine halbe Blendenstufe heller | Eine Ansicht aus einem Raum |
| {{ui:Section view}} | Weißes Studio, kein Boden, Kantenlinien im schnellen Rendern | Ein Modell, das durch einen Schnitt geteilt ist |
| {{ui:Night}} | Die Sonne untergegangen (Mitternacht im Winter für die Hemisphäre des Standorts), eine Blendenstufe heller | Lampen, die das Modell beleuchten. Ohne Lampen ist das Bild dunkel |

- {{ui:Pick for this view}} wählt für Sie: {{ui:Section view}}, wenn ein Schnitt aktiv ist, {{ui:Interior}}, wenn die Kamera im Modell steht, sonst {{ui:Exterior}}. Beim ersten Öffnen des Dialogs startet es automatisch so.
- Jede Einstellung darunter bleibt und kann geändert werden. Sobald Sie eine ändern, ist keine Szene mehr gedrückt, und die Zeile unter den Schaltflächen sagt, dass die Einstellungen Ihre eigenen sind. Klicken Sie die Szene erneut an, um ihre Werte wiederherzustellen.
- Eine Szene berührt nicht die Engine, den Modus, die Größe, die Materialien, die Kamera oder die Lampen.

:::note
Die Szenen geben in ModelCraft und BimCraft dieselben Werte. Wie das fertige Bild aussieht, hängt von Ihrem Modell und Ihrer Grafikkarte ab.
:::

## Was im Bild erscheint

Was die 3D-Ansicht massiv zeigt: Ausgeblendete und durchsichtige Bauteile, ausgeblendete Geschosse und ausgeblendete Modelle werden weggelassen, und Räume erscheinen nur, wenn {{ui:Spaces}} eingeschaltet ist. Eine Schnittebene oder ein Schnittkasten schneidet das Bild, wie er die Ansicht schneidet. Bauteile erscheinen in ihren eigenen Farben: Färbung nach Eigenschaft (die Registerkarte {{ui:Color}}) wird nicht verwendet.

## Einstellungen

| Einstellung | Was sie tut |
|---|---|
| {{ui:Size}} | Die Größe der Ansicht, die doppelte Größe der Ansicht, Full HD, 4K oder ein Quadrat |
| {{ui:Mode}} | {{ui:Fast}} oder {{ui:High quality (path traced)}} (unten) mit seinem {{ui:Time limit}} |
| {{ui:Quality}} | Wie viele Durchgänge (oder im Modus hohe Qualität Samples) gemittelt werden: {{ui:Entwurf}} 16, {{ui:Gut}} 64, {{ui:Beste}} 256. Mehr Durchgänge ergeben weichere Schatten und Kanten, dauern aber länger |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} oder {{ui:White studio}} (ein schlichter weißer Hintergrund) |
| {{ui:Sun}} | 21. Juni um 15:00 Uhr am Breitengrad, den die Datei für ihren Standort angibt (IfcSite), gedreht zum wahren Norden des Modells. Setzen Sie den Haken bei {{ui:Use another date and time for this picture}} für eine andere Zeit |
| {{ui:Brightness}} | Heller oder dunkler, in Stufen (Blendenstufen) |
| {{ui:Ground under the model}} | Ein Boden am tiefsten Punkt des Modells, der die Schatten aufnimmt und in den Horizont übergeht |
| {{ui:Draw edges}} | Zeichnet die Kanten der Bauteile dünn über das Bild |

Steht die Sonne zur gewählten Zeit unter dem Horizont, ist es Nacht: Der Himmel wird dunkel, und die Lampen des Modells beleuchten es.

## Lampen

Jede Leuchte im Modell ist im Bild eine Lampe: die Leuchten in einer IFC-Datei (IfcLightFixture oder ein als Leuchte typisiertes Element), auch solche, die Sie aus der Bibliothek platzieren. Jede strahlt von knapp unter der Leuchte nach unten. Gibt die Datei die Leistung einer Leuchte an, folgt ihre Helligkeit daraus; sonst sind es 800 Lumen, warmweißes Licht.

Der Dialog listet die Lampen unter {{ui:Lamps}}: Haken Sie eine ab, um sie auszuschalten, oder tragen Sie ihre Helligkeit in Lumen ein. Diese Änderungen werden in der IFC-Datei gespeichert (im Eigenschaftssatz `CadCraft_Light` der Leuchte, wo Sie sie auch in den Eigenschaften ändern können), und {{key:Ctrl+Z}} macht sie rückgängig.

Gibt eine Datei nicht an, wo ihr Standort liegt, wird die Sonne auf 40° Nord gesetzt, und der Dialog sagt das. Die Zeit ist die Ortszeit des Standorts, aus seiner Länge berechnet, daher kann sie dort, wo Uhren anders eingestellt sind, eine Stunde abweichen.

Diese Einstellungen werden für das nächste Bild in diesem Browser gespeichert. Sie werden nicht in der IFC-Datei gespeichert.

## Glas und andere Materialien

Unter {{ui:Materials}} hat jede Farbe auf dem Bildschirm eine Optik: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} oder {{ui:Frosted glass}}. Farben, die die IFC-Datei durchsichtig macht (zum Beispiel Fensterverglasung), beginnen als {{ui:Glass}}.

:::note
Im Modus {{ui:Fast}} spiegeln Glas und Metall den Himmel, nicht den Rest des Modells, und Licht bricht sich nicht im Glas. Der unten beschriebene Modus {{ui:High quality (path traced)}} tut beides.
:::

## Hohe Qualität

Wählen Sie {{ui:Mode}} › {{ui:High quality (path traced)}} für ein Bild, das dem Licht so folgt, wie eine Kamera es sieht:

- Licht wird zwischen Flächen reflektiert, sodass ein Raum, der durch ein Fenster oder von einer Lampe beleuchtet wird, ringsum beleuchtet ist und Farben auf ihre Nachbarn abstrahlen;
- Glas ist echtes Glas: Licht bricht sich darin, und es spiegelt das Modell;
- Metall und polierte Flächen spiegeln den Rest des Modells;
- Flächenlichter leuchten als Flächen, mit weichen Schatten.

Er ist viel langsamer als {{ui:Fast}}: Jeder Durchgang verfolgt das Licht jedes Pixels neu. Das Bild beginnt körnig und klärt sich, wenn sich die Samples addieren. Fangen Sie daher klein an ({{ui:Größe der Ansicht}}, {{ui:Entwurf}}) und wählen Sie ein {{ui:Time limit}}: Ist es abgelaufen, bleibt das bisherige Bild erhalten. {{ui:Stop}} behält es ebenfalls. Der erste Durchgang wartet, während der Browser den Path Tracer vorbereitet.

Hat der Browser WebGPU, ist der Path Tracer der eigene von CadCraft und läuft auf der Grafikkarte; die Zeile unter dem Bild sagt es. Nach {{ui:Stop}} oder dem Zeitlimit führt {{ui:Resume}} dasselbe Bild weiter, bis alle Samples da sind; eine Änderung einer Einstellung oder erneutes Drücken von {{ui:Render}} beginnt von vorn. Ohne WebGPU wird das Bild mit WebGL pfadverfolgt (die Zeile sagt es), und {{ui:Resume}} wird nicht angeboten.

:::linux
Firefox und die meisten Chrome-Einrichtungen unter Linux haben noch kein WebGPU, daher nutzt die hohe Qualität dort WebGL.
:::

In diesem Modus werden keine Kanten gezeichnet, Texturen zeigen ihre Farbe und Rauheit, aber nicht ihre Unebenheiten, und ein Schnitt wird am Modell ausgeführt, bevor das Bild beginnt.

{{ui:Denoise (clears the grain left after the samples)}} ist standardmäßig eingeschaltet: Ist das Bild fertig oder angehalten, wird das verbleibende Korn von einem dafür gebauten neuronalen Netz entfernt (dem veröffentlichten Netz von Intel Open Image Denoise, auf Ihrem eigenen Computer ausgeführt: auf der Grafikkarte, sonst auf dem Prozessor). {{ui:Show}} › {{ui:The picture before denoising}} zeigt es so, wie es gerendert wurde.

## Himmel und Lichtprofile auf der Grafikkarte

Mit WebGPU hat die hohe Qualität zwei weitere Himmel:

- {{ui:Physical sky}} berechnet das Tageslicht aus der Höhe der Sonne: ein tiefes Blau über dem Kopf, ein blasser Streifen am Horizont und eine Sonne, die wärmer und dunkler wird, je tiefer sie steht. {{ui:Haze}} reicht von einem sehr klaren Tag (2) bis zu einem diesigen (10).
- {{ui:Sky picture (HDRI)}} beleuchtet das Modell mit einem Panoramabild eines echten Ortes. {{ui:Choose a picture…}} nimmt eine equirektangulare Datei `.hdr` oder `.exr`; {{ui:Turn}} dreht sie um das Modell, und {{ui:Picture brightness}} macht sie heller oder dunkler. Das Bild hat seine eigene Sonne, daher wird die Sonne des Modells nicht hinzugefügt. Es wird nur gehalten, solange die Seite offen ist: Nach dem erneuten Öffnen wählen Sie es erneut.

Jede Lampe in der Liste {{ui:Lamps}} kann ein Lichtprofil eines Herstellers übernehmen: {{ui:IES profile…}} liest eine IES-Datei (LM-63), und die Lampe wirft dann ihr Licht so, wie es diese Leuchte tut (ein enger Downlight, ein Wandfluter). Jede Lampe mit diesem Namen nutzt es, und die Lampe behält ihre eigene Helligkeit. Klicken Sie auf den Namen des Profils, um es nicht mehr zu verwenden.

Fenster aus klarem Glas helfen dem Licht des Himmels, in einen Raum zu finden.

Der Modus {{ui:Fast}} und der WebGL-Path-Tracer zeigen {{ui:Physical sky}} und {{ui:Sky picture (HDRI)}} als klaren Himmel und ignorieren Lichtprofile.

## Die Kamera

{{ui:Camera}} stellt das Bild wie eine Fotografie ein:

- {{ui:Exposure}}: Behalten Sie den {{ui:Brightness slider}}, oder wählen Sie {{ui:Camera settings}} und stellen {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} und {{ui:ISO}} wie an einer Kamera ein; der EV-Wert daneben ist der übliche Belichtungswert. f/16 bei 1/100 s und ISO 100 passt zu einem sonnigen Tag; eine dunklere Szene braucht eine größere Blendenöffnung, eine längere Verschlusszeit oder einen höheren ISO-Wert. Das funktioniert in jedem Modus.
- {{ui:Depth of field}} macht unscharf, was näher oder weiter als die {{ui:Focus distance (m)}} liegt, wie ein Objektiv dieser Blende es täte (lassen Sie das Feld leer, um auf das zu fokussieren, was in der Mitte der Ansicht ist); {{ui:Aperture shape}} gibt unscharfen Glanzlichtern eine runde oder lamellierte Form.
- {{ui:Two-point perspective (vertical lines stay vertical)}} richtet die Kamera aus und verschiebt das Bild, wie ein architektonisches Shift-Objektiv es tut, damit Wände nicht schief wirken, wenn Sie an einem Gebäude nach oben oder unten schauen.
- {{ui:White balance}} legt fest, welche Lichtfarbe als Weiß erscheint: niedriger (zum Beispiel 3000 K) für warmes Lampenlicht, höher für Schatten und bedeckte Tage.
- {{ui:Projection}}: {{ui:360° panorama}} macht ein 2:1-Bild von allem rund um die Kamera für Panorama-Viewer; {{ui:360° stereo panorama}} stapelt ein Panorama für das linke und eines für das rechte Auge für Headsets übereinander; {{ui:Cube map (6 faces)}} macht sechs quadratische Ansichten in einem Raster von 3 × 2. Die Breite kommt aus {{ui:Size}}.

Projektion, Schärfentiefe, Zweipunktperspektive und Weißabgleich brauchen den Path Tracer auf der Grafikkarte (WebGPU), daher werden sie nur in {{ui:High quality (path traced)}} angezeigt.

## Das Bild fertigstellen

{{ui:Picture}} bearbeitet das Bild in hoher Qualität wie eine Fotografie, und jede Regelung ändert das fertige Bild sofort, ohne erneut zu rendern:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (das Bild wie zuvor), {{ui:AgX}} (weicher, bewahrt Farbe bei sehr hellem Licht), {{ui:Filmic}} (eine sanfte Filmkurve) oder {{ui:Standard}} (schlicht, helles Licht wird zu Weiß abgeschnitten).
- {{ui:Contrast}} und {{ui:Highlight compression}} (holt Details in sehr hellen Stellen zurück).
- {{ui:Bloom}} (ein weiches Leuchten um helles Licht), {{ui:Glare}} mit seinen {{ui:Glare streaks}} (Sternstrahlen von den hellsten Punkten) und {{ui:Vignette}} (dunklere Ecken).
- {{ui:Colour table (.cube)…}} wendet eine Farbkorrektur aus einer `.cube`-Datei an, mit ihrer {{ui:Colour table strength}}; wie ein Himmelsbild wird sie nur gehalten, solange die Seite offen ist.

## Das Bild speichern

{{ui:Save as}} neben {{ui:Save}} wählt die Datei: {{ui:PNG}}, {{ui:JPEG}} oder {{ui:WebP}} zum Teilen (JPEG und WebP nur, wo der Browser sie schreiben kann), und nach einem Rendering in hoher Qualität auf der Grafikkarte auch:

- {{ui:PNG, 16 bits}}: das bearbeitete Bild mit feineren Abstufungen zwischen den Tönen, für den Druck oder die weitere Bearbeitung.
- {{ui:EXR, every layer (32-bit float)}}: das Bild, wie es gerendert wurde (lineares Licht, ohne Farbkorrektur), mit jedem Renderelement und jeder Lichtgruppe als eigener Ebene, für Compositing-Programme.
- {{ui:Render file (.ccrender, to grade again later)}}: alles, was der Dialog braucht, um das Bild erneut zu mischen und zu bearbeiten. {{ui:Open a render file…}} holt es zurück, mit seiner Mischung und seiner Bearbeitung, ohne zu rendern.

## Die Lichter nach dem Rendern mischen

Schalten Sie {{ui:Light mixing (change each light's colour and brightness after the render)}} ein, bevor Sie {{ui:Render}} drücken. Ist das Bild fertig (oder angehalten), listet {{ui:Mix the picture}} seine Lichter in Gruppen: den Himmel, die Sonne und die Lampen nach Namen (jede Lampe mit demselben Namen ist eine Gruppe). Schalten Sie eine Gruppe aus, geben Sie ihr eine Farbe oder machen Sie sie heller oder dunkler, und das Bild ändert sich sofort, ohne erneut zu rendern. {{ui:Save mix}} behält die Mischung unter einem Namen, um sie später wieder zu wählen; {{ui:As rendered}} führt zurück zum Bild, wie es entstanden ist. {{ui:Save}} speichert das gemischte Bild.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} behält außerdem die Teile des Bildes. {{ui:Show}} schaltet die Ansicht auf eines davon um: die Oberflächenfarben (Albedo), die Normalen, die Tiefe, das diffuse, spiegelnde und durchgelassene Licht (jeweils direkt und indirekt), was leuchtet und den Himmel, sowie eine Farbe pro Objekt oder pro Material zum Erstellen von Masken.

Beide halten zusätzliche Ebenen auf der Grafikkarte. Bei großen Größen hat eine Grafikkarte unter Umständen nicht genug Platz; der Dialog sagt es, und eine kleinere Größe funktioniert.

## Nebel, Rauch, Rauschen und Kaustiken

Diese liegen in {{ui:Fog, smoke and noise}} und funktionieren in {{ui:High quality (path traced)}} auf der Grafikkarte; die anderen Engines lassen sie weg.

- {{ui:Fog and haze}} füllt die Luft bis zu einer Höhe mit einem Dunst, den Sonne, Himmel und Lampen beleuchten. {{ui:How far you can see, in meters}} legt fest, wie dicht er ist (etwa 100 m ist leichter Dunst, 20 m ein dichter Nebel), {{ui:Fog height above the ground, in meters}} ist, wo er endet, und {{ui:Light shafts}} bestimmt, wie stark der Dunst zum Licht hin glüht. Sonnenlicht verlässt den Nebel an seiner Oberseite, daher sehen Sie dort, wo Sonne durch ein Fenster oder zwischen Gebäuden kommt, Lichtstrahlen.
- {{ui:Smoke or cloud}} fügt ein Volumen aus Rauch oder Wolke hinzu, beleuchtet wie der Nebel. {{ui:Kind}} ist eine {{ui:Cloud}}, eine {{ui:Smoke column}} oder {{ui:From a volume file (.ccvol)}}, das eigene Rasterformat von CadCraft. {{ui:Detail}} und {{ui:Variation}} ändern eine erzeugte Wolke oder Säule, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} und {{ui:Turn}} platzieren sie (sie beginnt in der Mitte des Modells), {{ui:Thickness}} macht sie dichter, {{ui:Forward glow}} lässt sie zum Licht hin heller werden, und {{ui:Color}} färbt sie. Eine Volumendatei wird nur gehalten, solange die Seite offen ist, wie ein Himmelsbild.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} gibt Pixeln, die sich beruhigt haben, keine weiteren Samples. {{ui:Noise to accept}} ist, wie viel Korn bleibt, wenn ein Pixel aufhört. Die Zeile unter dem Bild sagt, wie viele Samples ein Pixel im Schnitt erhalten hat.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} verfolgt Licht von den Lampen und der Sonne, sodass der helle Fleck unter einer Glaskugel oder das Spiegellicht an einer Wand sauber statt körnig herauskommt. Er ist aus, solange Nebel, Rauch, Lichtmischung oder Renderelemente an sind, und er ist für Bilder gemacht, nicht für 360°-Bilder.

## Die Renderwarteschlange

{{ui:Render queue}} im Dialog: {{ui:Add this picture to the queue}} behält die Einstellungen und die Ansicht des Bildes, und {{ui:Start the queue}} rendert, was wartet, nacheinander auf diesem Computer. Das Schließen der Seite behält die Warteschlange; öffnen Sie dasselbe Modell, um weiterzumachen. {{ui:Save}} lädt ein fertiges Bild herunter; {{ui:Remove}} und {{ui:Clear finished}} räumen die Liste auf. Die Warteschlange rendert in hoher Qualität und braucht daher WebGPU.

## Wie lange es dauert

Das Bild entsteht auf Ihrem eigenen Computer durch seine Grafikkarte; nichts wird hochgeladen. Die Zeit wächst mit den Durchgängen und den Pixeln: {{ui:Beste}} hat das 16-Fache der Durchgänge von {{ui:Entwurf}}, und ein 4K-Bild hat etwa das Vierfache der Pixel von Full HD. Große Modelle brauchen pro Durchgang länger.
