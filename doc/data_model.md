# Enjeux des données et Data model

L'objectif de ce document est de présenter le data model Impress.
On peut le décomposer en 5 grandes parties:
  - Données comptables (Accounting Book of records ABOR)
  - Données benchmarks
  - Référentiel Valeur (Security Master File SMF)
  - Référentiel Produit (Fonds / Parts / Traduction)
  - Données complémentaires


# Généralités sur les données

Impress préférera la donnée la plus brute possible, directement telle que transmise par un fournisseur ou un valorisateur et telle qu’exportée par un système tierce.

Pour assurer une qualité optimale, il est nécessaire que l’ensemble de la chaîne de traitement soit automatisé et ne comporte pas de saisie manuelle.

Les formats supportés sont ‘.csv’. / '.xls' / '.xlsx'

La réception des données peut se faire via SFTP ou via Mail. ([Plus d'informations](https://nx.digital/doc?transfer))

# Données comptables (ABOR) via fichier Valorisateur

Impress propose et recommande d'interfacer l'application directement avec les valorisateurs.
Impress gère nativement les connecteurs suivants:
  - CACEIS
  - BPSS
  - SGSS

Lorsque NeoXam est interfacé directement avec les fichiers des valorisateurs, nous garantissons:
  - Intégration et uniformisation des données
  - Mise en qualité (via une base de tests évolutives: Présence des fichiers / formats / Cohérence inter-flux)
  - Gestions des évolutions des formats (Changement format des dates, Gestions nouveaux types instruments...)

## BPSS
Fichiers "Nav Pack" quotidiens bruts pour tous les fonds, au format excel. (BPSS diffuse ces fichiers également dans un format xml non supporté par NeoXam)

## CACEIS
Les rapports quotidiens pour toutes les parts de fonds, au format ‘.csv’:
- HISINV.csv
- ESPVL.csv
- HISTOVL.csv
- JOUROP.csv
- JUSCOM.csv
- FLUVAL2.csv
- JOURSR.csv

## SGSS
Les rapports quotidiens pour toutes les parts de fonds, au format ‘.csv’:
- F7.csv
- F2.csv
- F1.csv
- F5.csv

# Données comptables (ABOR) via connecteur client

Impress peut également s'interfacer directement sur un connecteur propriétaire. Il devra respecter la structure décrite ci dessous.

Le connecteur devra être en mesure de fournir les éléments suivants:
  - Rapport des VL : La VL des parts du fonds
  - Inventaire: Les positions valorisées (inventaire) du fonds
  - Fluctuations des VL: Une justification des fluctuations de VL (PNL généré par ligne)
  - Journal des opérations: Un journal des opérations
  - Justificatif des frais: Les frais du fonds et les frais des parts
  - Justificatif des souscriptions et rachats: Souscription / Rachat dans le fonds

La fréquence d'émission devra suivre la fréquence de valorisation du fonds.

## Cohérence entre les fichiers

Dans le cas d'un connecteur spécifique, il appartient au client de s'assurer que les égalités suivantes seront toujours respectées:
  - Somme((VLt * VLt-1) * Nombre part t) = Somme PMV fluctuation VL t - Somme PM justificatif_frais t

## Rapport des VL
Un fichier contenant les informations des VLs respectant la structure ci dessous:
  - fund_id
  - fund_currency
  - isin_share
  - share_currency
  - nav_date
  - aum_share
  - nav
  - share_number
  - aum_fund_currency
  - fixing
  - amount_dividend
  - unit_dividend

## Inventaire
Un fichier contenant les informations d'inventaire respectant la structure ci dessous:
  - nav_date
  - fund_id
  - isin
  - label
  - asset_class (Asset class: Valeur mobilière, CASH, Option, Futur ...)
  - currency
  - quantity
  - price
  - fixing
  - market_value (En currency de portefeuille)

## Fluctuation des VL
Un fichier justifiant le pnl entre 2 VL respectant la structure ci dessous:
  - fund_id
  - prev_nav_date
  - nav_date
  - isin
  - label
  - asset_class (Asset class: Valeur mobilière, CASH, Option, Futur ...)
  - quantity
  - price
  - market_value
  - pmv

## Journal des operations
Un journal des opérations respectant la structure ci dessous:
  - fund_id
  - isin
  - asset_class
  - quantity_exercee
  - transaction_type
  - accounting_date
  - value_date
  - effect_date
  - gross_amount
  - net_amount (<= settlement amount)

## Justificatif des frais
Un journal des frais respectant la structure ci dessous:
  - fund_id
  - isin_share
  - nav_date
  - identifiant_frais
  - libelle_frais
  - montant

Les frais impactant toute les parts n'auront pas d'isin_share renseingé.

## Justificatif des souscriptions et rachats
Gérer via le nombre du Rapport des VL


# Security Master file
Impress se charge uniquement d'intégrer ce fichier, l'administration est à la charge du client.

Ce fichier peut être envoyé sous forme de csv ou de .xls/.xlsx.
Impress travaille sur le référentiel valeur complet (pas en delta)

Il doit contenir les colonnes:
  - isin (ou identifiant unique) afin de pouvoir faire le lien avec les fichiers comptables
  - label libellé de la valeur

Des caractéristiques statiques des titres:
  - Secteur
  - Sous Secteur
  - Pays
  - Devise
  - ...


Pas de contraintes sur les noms de colonnes.
Dans le cas de reporting multilangues, nous recommandons de définir une 'clé' dans le référentiel puis de venir traduire cette clé dans toutes les langues souhaitées dans le référentiel translation.

Exemple: colonne Sector_GICS_1 de l'onglet 'Assets_Referential' du nx-pack en exemple.
Les valeurs renseignées sont des clés et leurs traductions se trouvent dans l'onglet translation  ([Télécharger](http://platform.100m.io/dist/greenrock/nx-pack_demo.xlsx))

Des caractéristiques dynamiques des titres:
  - rating_moodys
  - rating_XXX
  - note_esg
  - sensitaux
  - ...

L'archivage pour la gestion du reporting 'ASOF' est géré par Impress.

# Données benchmarks
NX impress travaille avec un flux benchmark normalisé. Tous les benchmarks doivent arriver dans le même format.
Les indices composites ne sont pas calculés dans Impress.

Impress peut s'interfacer directement avec RIMES

Dans le cas de comparaisons fines (ligne à ligne / attribution) avec le benchmark. Il faudra s'assurer de définir et normaliser les instruments du benchmark dans le référentiel valeur.

# Référentiel produit
  ## Référentiel fonds / Parts:
  Ce fichier/onglet doit contenir toutes les caractéristiques nécessaires au reporting.
  Les colonnes obligatoires sont:
    - Fund id => doit correspondre à l'identifiant portefeuille des données comptables
    - Fund Name
    - Benchmark Id => doit correspondre à un id de benchmark du flux benchmark
    - Fund Currency
    - Axis of Analysis => doit référencer des colonnes de l'onglet Assets_Referentiel
    - Orientation
    - Share Id
    - Share Letter
    - Share Currency

  ## Traduction
  Ce fichier/onglet doit contenir les clés de traductions utilisées dans le référentiel et le référiel valeurs.
  On peut également ajouter des clés de traduction qui pourront être utilisées dans l'application / builder.

  La gestion des juridictions se fait via la traduction. Il suffit de renseigner les traductions qui différent de la langue.


  ## Commentaire de Gestion
  Ce fichier/onglet contient les commentaires de gestions

  Voir nx-pack ([Télécharger](http://platform.100m.io/dist/greenrock/nx-pack_demo.xlsx))

# Données complémentaires

Impress peut intégrer d'autres sources de données: à discuter avec l'équipe projet
  - Historiques
  - Indicateurs de fonds (esg, sensitaux, deltas...)
