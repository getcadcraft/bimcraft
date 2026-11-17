---
title: Conserver les données des équipements et un registre de maintenance dans le modèle
summary: Utilisez le modèle IFC remis pour exploiter le bâtiment : fabricant, modèle, numéro de série, garantie et durée de vie des équipements et appareillages, et un registre des travaux de maintenance effectués, le tout écrit dans l'IFC.
keywords: remise, certificat d'achèvement, certificat de conformité, récolement, dossier de remise, ressources, registre des ressources, gestion des installations, fm, exploitation, maintenance, service, garantie, numéro de série, code-barres, fabricant, constructeur, modèle, durée de vie, cobie, jumeau numérique, en retard, échéance, ordre de travail
from: b84ac492
---

L'onglet {{ui:Ressources}} du panneau de droite transforme le modèle IFC ouvert en registre des équipements du bâtiment. Tout est écrit dans l'IFC lui-même, dans les ensembles de propriétés et les tâches propres à IFC, de sorte que le prochain programme qui ouvrira le fichier les lira aussi. Rien n'est téléversé et aucun serveur n'est nécessaire : enregistrez l'IFC pour le conserver.

## Ce qui est listé

- Équipements et appareillages : mobilier, appareils sanitaires, luminaires, appareils électroménagers, bouches de soufflage, vannes, pompes, ventilateurs, chaudières, réservoirs, prises, tableaux, ascenseurs et autres éléments de ce type, ainsi que les éléments de bibliothèque comportant des données d'équipement.
- Tout autre élément que vous **suivez** : choisissez-le dans le modèle (une porte, un mur, une pompe dessinée comme un simple objet) et cliquez sur {{ui:Suivre la sélection}}.
- Tout ce qui possède déjà des données d'équipement ou une tâche de maintenance, écrites ici ou par un autre programme.

Ce qui est en retard vient en premier, puis ce qui est à échéance dans les 30 jours. Filtrez par nom, repère, fabricant, modèle ou numéro de série, par niveau, ou cochez {{ui:Seulement en retard ou à échéance sous 30 jours}}.

## Données d'équipement

Cliquez sur un équipement dans la liste (ou choisissez-le dans le modèle) pour ouvrir ses données : fabricant, modèle, référence du modèle, numéro de série, code-barres, date d'installation, numéro de garantie, dates de début et de fin de garantie, et durée de vie en années. {{ui:Enregistrer les données}} les écrit en une seule étape ({{key:Mod+Z}} l'annule). Laissez une case vide pour supprimer cette valeur.

## Documents

Sous les données, {{ui:Documents}} liste les manuels, garanties, photos, certificats et plans liés à l'équipement. Choisissez le type, donnez-lui un titre (ou laissez-le vide : le nom du fichier sert alors) et indiquez où il se trouve :

- une **adresse web** (`https://…`) : elle reçoit un lien Ouvrir, qui s'ouvre dans un nouvel onglet ;
- ou un **nom ou chemin de fichier** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, un partage réseau) : gardez les fichiers à côté de l'IFC, dans le même dossier ou un sous-dossier, pour que les noms restent valides lorsque vous remettez le dossier. BimCraft affiche le nom ; ouvrez le fichier depuis le dossier.

Les fichiers eux-mêmes ne sont jamais téléversés ni copiés dans l'IFC : seul le lien est écrit. Une adresse web contenant un mot de passe, et tout lien qui n'est ni une adresse web ni un fichier (comme `javascript:`), sont refusés. {{ui:Supprimer}} retire un document de l'équipement (une étape ; {{key:Mod+Z}} l'annule).

Les documents qu'un autre programme a placés sur l'élément sont aussi listés. Les documents placés sur le **type** de l'élément apparaissent sur chaque élément de ce type et l'indiquent ; modifiez-les là où le type a été créé.

Dans l'IFC, chaque document est une référence de document IFC liée à l'élément, son type étant conservé sur ce lien, en IFC4 comme en IFC2X3.

## Le registre de maintenance

Sous les documents, {{ui:Enregistrer un travail effectué}} : la date d'exécution, le travail, la personne qui l'a effectué, l'échéance suivante et des notes. Chaque entrée est une étape ; {{ui:Édition}} et {{ui:Supprimer}} permettent de la modifier ensuite. La date d'échéance suivante de la dernière entrée détermine si l'équipement est en retard ou bientôt à échéance.

## Comment cela est conservé dans l'IFC

- Fabricant et modèle dans `Pset_ManufacturerTypeInformation`, numéro de série, code-barres et jour d'installation dans `Pset_ManufacturerOccurrence`, garantie dans `Pset_Warranty`, durée de vie dans `Pset_ServiceLife`, sur l'élément lui-même. Lorsque le type de l'élément porte déjà un fabricant ou un modèle, celui-ci s'affiche jusqu'à ce que vous saisissiez le vôtre.
- Chaque entrée de maintenance est une **tâche** IFC de type maintenance, liée à l'élément, avec ses dates (en IFC4 aussi comme heures propres de la tâche) et un ensemble `CadCraft_Maintenance` contenant le jour, la personne qui l'a effectuée et le jour de l'échéance suivante.
- Les valeurs partagées avec d'autres éléments sont d'abord copiées : modifier un équipement ne change jamais ses voisins.
- Dans les anciens fichiers IFC2X3, les dates sont écrites en texte (YYYY-MM-DD) ; cette version exige un enregistrement de date distinct, que BimCraft n'écrit pas.

## Relevés de capteurs

Ouvrez {{ui:Valeurs de capteurs}} puis {{ui:Ouvrir des relevés (CSV)…}} pour importer des relevés exportés d'un système de gestion technique du bâtiment, d'un enregistreur de données ou d'un tableur :

- La **première colonne est l'heure** : `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ou des secondes Unix. Une heure sans fuseau est lue dans le fuseau horaire de votre ordinateur. Les dates jour en premier, comme `23/10/2026`, ne sont pas lues (elles sont ambiguës) ; exportez des dates ISO.
- **Chaque autre colonne est un capteur**, dont l'en-tête porte le **repère**, le **nom** ou le **GlobalId** de son équipement. Un en-tête qui ne correspond à aucun équipement, ou à plusieurs, est listé et ignoré. Les virgules, points-virgules ou tabulations séparent les colonnes ; avec des points-virgules ou des tabulations, une virgule décimale (`21,5`) est aussi lue.
- Les heures ou valeurs illisibles (un mot, une unité saisie dans la cellule) sont comptées et ignorées, jamais devinées.

Le dernier relevé apparaît dans la colonne {{ui:Relevé}} de la liste et dans le bloc {{ui:Capteur}} de l'équipement, avec un **graphique** de tous les relevés (sur téléphone, les graphiques attendent que vous touchiez {{ui:Afficher le graphique}}). Définissez une **limite basse et une limite haute** ainsi qu'une unité sur un équipement, puis {{ui:Enregistrer les limites}} : un relevé hors de ces limites signale l'équipement. Cochez {{ui:Afficher sur le modèle}} pour colorer chaque équipement selon son relevé : bleu sous sa limite basse, vert dans ses limites, rouge au-dessus de sa limite haute ; pour les équipements sans limites, une échelle bleue unique du relevé le plus bas au plus haut. Chacun affiche son relevé en étiquette (jusqu'à 60 étiquettes, les équipements signalés en premier).

**Les relevés restent dans cet onglet du navigateur** : ils ne sont ni enregistrés dans l'IFC ni envoyés nulle part ; rouvrez le CSV la prochaine fois. Les **limites sont enregistrées dans l'IFC** (un ensemble `CadCraft_Sensor` sur l'élément : Low, High, Unit), de sorte que la personne suivante qui ouvrira le fichier voie les mêmes signalements.

## Relevés en direct

{{ui:Flux en direct}} lit les valeurs au moment où elles surviennent, **directement de ce navigateur vers votre propre système**. Rien ne transite par notre serveur, et rien n'est stocké ailleurs que dans cet onglet. Rien ne se connecte à l'ouverture d'un fichier : seul {{ui:Connecter}} le fait.

- **MQTT sur WebSockets** : l'adresse de l'écouteur WebSocket de votre broker (`wss://broker.example.com:8884/mqtt`), et un ou plusieurs sujets contenant `{tag}` à l'endroit où va le repère de l'équipement, par exemple `site/{tag}/temperature` (BimCraft s'abonne à `site/+/temperature` et lit le repère dans le sujet de chaque message). Les sujets sans `{tag}` désignent eux-mêmes le capteur. Un message est soit un simple nombre (`21.5`), soit du JSON tel que `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (réglez {{ui:Champ de valeur dans le JSON}} si le vôtre porte un autre nom).
- **Interroger une adresse (HTTP)** : une adresse web à laquelle répond votre système de gestion technique ou un petit script à vous, interrogée toutes les quelques secondes (5 au minimum). Elle peut répondre par du JSON indexé par repère (`{"AHU-1": 21.5}`), une liste JSON (`[{"tag": "AHU-1", "value": 21.5}]`), ou un CSV de relevés comme celui ci-dessus. Si elle ne répond pas, BimCraft attend deux fois plus longtemps avant de réinterroger, jusqu'à cinq minutes.

Chaque relevé va à l'équipement dont il porte le repère, le nom ou le GlobalId, exactement comme une colonne de CSV ; les noms qui ne correspondent à aucun équipement sont listés. Les relevés rejoignent les {{ui:Valeurs de capteurs}} : la liste, les graphiques, les limites et les couleurs du modèle fonctionnent de la même façon.

**Votre mot de passe ou votre jeton** est saisi pour une seule connexion : il est transmis à la connexion et la case est vidée ; il n'est jamais enregistré dans ce navigateur ni dans l'IFC. Un jeton est envoyé dans un en-tête standard `Authorization: Bearer`, et aucun cookie n'est envoyé.

{{ui:Conserver ces paramètres dans l'IFC}} écrit l'adresse, les sujets, le champ de valeur et la fréquence d'interrogation dans le modèle (un ensemble `CadCraft_Feed` sur le projet ; il n'existe pas de champ pour un mot de passe). Ainsi, la personne suivante qui ouvre le fichier n'a plus qu'à saisir son propre identifiant et cliquer sur {{ui:Connecter}}. Ne mettez jamais de mot de passe ni de clé dans l'adresse elle-même : une adresse contenant un nom d'utilisateur et un mot de passe est refusée.

:::note
**Ce dont votre broker ou votre adresse ont besoin.** Une page de navigateur ne peut parler qu'à un serveur qui l'y autorise :
- La page est sécurisée (https), donc le navigateur ne se connecte qu'à des adresses `wss://` et `https://` — sauf sur votre propre ordinateur (`localhost`), où `ws://` et `http://` fonctionnent pour les essais.
- Une adresse HTTP doit autoriser les requêtes venant de cette page (CORS : l'en-tête `Access-Control-Allow-Origin`, et `Authorization` parmi les en-têtes autorisés si vous utilisez un jeton).
- La plupart des brokers (Mosquitto, EMQX, HiveMQ et d'autres) proposent un écouteur WebSocket ; il est souvent désactivé tant qu'on ne l'active pas. BimCraft parle MQTT 3.1.1.
:::

Il n'y a **aucune alerte** lorsque BimCraft est fermé : les limites ne signalent un équipement que pendant que le modèle est ouvert avec un flux connecté. Surveiller un bâtiment en permanence nécessite un serveur, que BimCraft n'exécute pas.

## Tableur COBie

**COBie** est le tableur de remise que de nombreux maîtres d'ouvrage et équipes d'exploitation demandent (publié par le National BIM Standard aux États-Unis ; BS 1192-4 au Royaume-Uni). Ouvrez {{ui:Tableur COBie}} dans l'onglet :

- {{ui:Enregistrer au format COBie (.xlsx)}} écrit les feuilles COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document et Attribute — à partir du modèle et des données d'équipement : le bâtiment, ses niveaux et pièces (surfaces issues des quantités du modèle), chaque équipement en composant avec son numéro de série, son jour d'installation, le début de sa garantie, son repère et son code-barres, son type avec fabricant, modèle, durée de vie et durée de garantie, les systèmes auxquels il appartient, l'historique de maintenance sous forme de travaux, et les documents liés. Chaque composant porte le GlobalId IFC de l'élément. Saisissez votre adresse e-mail pour la colonne « créé par » de COBie, ou laissez-la vide (il est alors écrit n/a). Les valeurs que le modèle ne possède pas s'affichent **n/a** ; les colonnes de catégorie portent la classe IFC, et non un code OmniClass.
- {{ui:Lire un tableur COBie…}} le relit, depuis BimCraft ou un autre programme, et **liste d'abord chaque modification** : quel équipement, quelle valeur, de quoi à quoi, et les nouveaux documents. {{ui:Appliquer}} les écrit toutes en une seule étape ({{key:Mod+Z}} l'annule). Les lignes sont rapprochées par le GlobalId, puis par le nom du composant. Les lignes qui ne correspondent à rien dans le modèle sont listées, et non ajoutées.

Un tableur est traité comme non fiable : les formules ne sont jamais lues ni exécutées (seule la valeur enregistrée en dernier dans la cellule est prise), une valeur qui ferait se terminer une garantie avant son début et un lien de document qui n'est ni une adresse web ni un nom de fichier sont laissés de côté et comptés, et les très gros classeurs sont refusés. Les travaux de COBie correspondent aux travaux prévus d'un type : ils sont écrits mais ne sont pas relus. Dans le tableur que BimCraft écrit, un texte qu'un tableur pourrait prendre pour une formule (commençant par `=`, `+`, `-` ou `@`) est marqué comme texte.

Le classeur est vérifié dans nos tests avec un lecteur de tableur indépendant ; il n'a pas été soumis à un validateur COBie. Si une équipe destinataire en utilise un, dites-nous ce qu'il indique.

## Documents de remise

Les documents remis au maître d'ouvrage avec le bâtiment terminé appartiennent au projet, et non à un seul équipement. Dans l'onglet {{ui:Ressources}}, ouvrez {{ui:Documents de remise}} :

1. {{ui:Ajouter un document}}, choisissez son type (certificat d'achèvement, certificat de conformité, garantie, manuel, plans de récolement, autre), puis saisissez son titre, sa date d'émission, son émetteur et son numéro de référence.
2. Indiquez où il se trouve : une adresse web, un nom de fichier conservé à côté de l'IFC, ou {{ui:Joindre un fichier}}.
3. {{ui:Ajouter à la liste}}. {{ui:Édition}} et {{ui:Supprimer}} modifient la liste ; chacune de ces actions est une étape que vous pouvez annuler.

{{ui:Constituer le dossier de remise}} télécharge une archive zip : une page de garde listant chaque document, la même liste que dans un tableur, le classeur COBie (les documents figurent sur sa feuille Document, en lignes portant sur la Facility), le modèle et chaque fichier joint. Un certificat d'achèvement ou de conformité qui ne figure pas encore dans la liste est signalé sur la page de garde ; le dossier est tout de même constitué.

Le modèle du dossier est le **modèle de récolement** : il indique quels éléments ont été mesurés sur le chantier. Avec lui, dans le dossier `as-built` : la déclaration, une liste de chaque élément avec son état de vérification, le jeu de dessins tel qu'il est maintenant en un seul PDF (les plans de récolement), et le journal des modifications de dessins lorsque le modèle a émis des jeux. Voir [Marquer des éléments comme vérifiés ou contrôlés sur site](topic:verification).

- Dans le fichier IFC, chaque document est un IfcDocumentInformation lié au projet (IfcRelAssociatesDocument), avec son titre, sa référence, sa date, son émetteur et son lieu, de sorte que les autres programmes puissent le lister.
- Un fichier joint est enregistré par son nom, sa taille et son SHA-256. Pour conserver le fichier lui-même avec le projet, utilisez {{ui:Enregistrer le projet sous forme de bundle}} (un .ccbundle contient le modèle et les fichiers joints ; à l'ouverture, ils sont restitués, chacun étant vérifié par rapport à son enregistrement). Un enregistrement ordinaire demande lequel vous souhaitez.
- Un simple .ifc conserve l'enregistrement, et non le fichier : après l'avoir ouvert, utilisez {{ui:Joindre à nouveau le fichier}}. Le même fichier est reconnu ; un fichier différent remplace l'enregistrement.

## CSV

{{ui:CSV}} enregistre chaque équipement avec ses données, chaque entrée de maintenance et chaque document, une ligne chacun, pour un tableur ou un autre programme de maintenance.

:::note
Pas encore disponible : un service hébergé qui conserve les relevés et envoie des alertes lorsque BimCraft est fermé, ainsi que la relecture des travaux COBie. Voir [Pas encore disponible](topic:not-built-yet).
:::
