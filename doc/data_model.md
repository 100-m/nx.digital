# Enjeux des données et Data model

L'objectif de ce document est de présenter le data model Impress.
Il se compose de 5 grands types de données:
  - Données comptables (Accounting Book of records ABOR)
  - Données benchmarks
  - Référentiel Valeur (Security Master File SMF)
  - Référentiel Produit
  - Données complémentaires


# Généralités sur les données

Impress préférera la donnée la plus brute possible, directement telle que transmise par un fournisseur ou un valorisateur et telle qu’exportée par un système tierce.
Pour assurer une qualité optimale, il est nécessaire que l’ensemble de la chaîne de traitement soit automatisé et ne comporte pas de saisie manuelle.

Les formats supportés sont ‘.csv’. / '.xls' / '.xlsx'

La reception des données peut se faire via SFTP ou via Mail.

# Données comptables (ABOR) via fichier Valorisateur

Impress propose et recommande d'interfacer l'application directement sur les valorisateurs.
Impress gère nativement les connecteurs suivants:
  - CACEIS
  - BPSS
  - SGSS

Lorsque NeoXam est interfacé directement sur les fichiers bruts des valorisateurs, nous garantissons:
  - Intégration et l'uniformation des données
  - Mise en qualité (via une base de tests évolutives: Présense / formats / Cohérence)
  - Gestions des évolutions des formats (Ex Changement format des dates...)

## BPSS
Fichiers "Nav Pack" quotidiens bruts pour tous les fonds, au format excel. (BPSS diffuse ces fichiers également dans un format xml supporté par Excel, ce format ne sera pas supporté)

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

Impress peut également s'interfacer directement sur un connecteur propriétaire sous reserve qu'il corresponde à notre Data Model.

Le connecteur devra être en mesure de fournir les éléments suivants:
  - vl_parts :La VL des parts du fonds
  - Inventaire: Le positions valorisées (inventaire) du fonds
  - fluctuation_vl: Une justification des fluctuation de VL (PNL généré par ligne de l'inventaire)
  - journal_operations: Un journal des opérations
  - justificatif_frais: Les frais du fonds et les frais des parts
  - journal_souscription_rachat: Souscription / Rachat dans le fonds

La fréquence d'emission devra suivre la fréquence de valorisation du fonds.

// TODO Gestion des codes valeurs

## cohérence entre les fichiers

Dans le cas d'un connecteur spécifique, il appartient au client de s'assurer que les égalités suivantes seront toujours respectés:
  - Somme((VLt * VLt-1) * Nombre part t) = Somme PMV fluctuation VL t - Somme PM justificatif_frais t

## vl_parts
Un fichier contenant les informations des VLs respectant le format ci dessous:
  - identification_du_portefeuille
  - devise_du_portefeuille
  - code_isin_de_la_part
  - devise_de_la_part
  - date_de_valeur_liquidative
  - actif_net_de_la_part
  - valeur_liquidative
  - nombre_de_parts
  - actif_net_part_en_dev_du_port
  - taux_de_change_de_la_part
  - montant_dividende_distribue
  - dividende_unitaire

## Inventaire
Un fichier contenant les informations d'inventaire respectant le format ci dessous:
  - date_valorisation
  - identification_du_portefeuille
  - code_valeur
  - libelle_valeur
  - categorie_valeur (Asset class: Valeur mobilière, CASH, Option, Futur ...)
  - devise
  - quantite
  - cours
  - fixing
  - vl_boursiere (En devise de portefeuille)

// TODO: Non fongibilité ?
  - statut_detention
  - Contrepartie ?
  - Place cotation

## fluctuation_vl
Un fichier justifiant le pnl entre 2 VL respectant le format ci dessous:
  - identification_du_portefeuille
  - date_prev_valorisation
  - date_valorisation
  - code_valeur
  - libelle_valeur
  - categorie_valeur (Asset class: Valeur mobilière, CASH, Option, Futur ...)
  - quantite
  - cours
  - vl_boursiere
  - pmv (@Clem: pmv = pmv_latente + réalisé)

  @clem Dividende?

// TODO: Non fongibilité ?
  - statut_detention
  - Contrepartie ?
  - Place cotation

## journal_operations
Un journal des opérations respectant le format ci dessous:
  - identification_du_portefeuille
  - code_valeur
  - categorie_valeur
  - quantite_exercee
  - type_transaction
  - date_comptable
  - date_valeur
  - date_effet
  - montant_brut
  - montant_net (<= montant de règlement)


## justificatif_frais
Un journal des frais respectant le format ci dessous:
  - identification_du_portefeuille
  - code_isin_de_la_part
  - date
  - identifiant_frais
  - libelle_frais
  - montant

## justificatif_souscriptio_rachat
TODO


# Security Master file
Impress se charge uniquement d'integrer ce fichier, l'adminisatration est à la charge du client.

Ce fichier peut être envoyé sous forme de csv ou de .xls/.xlsx.
Impress travaille sur le référentiel valeur complet (pas en delta)

Il doit contenir les colonnes:
  - code_valeur afin de pouvoir faire le lien avec les fichiers comptables
  - label libellé de la valeur

Des caractéristiques statiques des titres:
  - Secteur
  - Sous Secteur
  - Pays
  - Devise
  - ...

Pas de contraintes sur les noms de colonnes.
Dans le cas de reporting multilangues, nous recommandons mettre une 'clé' dans le referentiel puis de venir traduire cette clé dans toutes les langues souhaités dans le référentiel translation.

Exemple: colonne Sector_GICS_1 de l'onglet 'Assets_Referential' du nx-pack en exemple.
Les valeurs renseignés sont des clés et leurs traductions se trouvent dans l'onglet translation

Des caractéristiques dynamiques des titres:
  - rating_moodys
  - rating_XXX
  - note_esg
  - sensitaux
  - ...

L'archivage pour la gestion du reporting ASOF est géré par Impress.

# Données benchmarks
NX impress travaille avec un flux benchmark normalisé. Tous les benchmarks doivent arriver dans le même format.
Les indices composites ne sont pas calculé dans Impress.

Impress peut s'interfacer directement avec RIMES

Dans le cas de de comparaisons fines (ligne à ligne / attribution) avec le benchmark. Il faudra s'assurer de définir et normaliser les instruments du benchmark dans le référentiel valeur.

# Référentiel produit
  1) Référentiel fonds / Pars:
  Ce fichier/onglet doit contenir toutes les caractéristiques nécessaires au reporting.
  Les colonnes obligatoires sont:
    - Fund id => doit correspondre à l'identifiant portefeuille des données comptamtables
    - Fund Name
    - Benchmark Id =>
    - Fund Currency
    - Axis of Analysis => Doit référencer des colonnes de l'onglet Assets_Referentiel
    - Orientation
    - Share Id
    - Share Letter
    - Share Currency

  2) Traduction
  Ce fichier/onglet doit contenir les clés de traductions utilisées dans le référentiel et le référiel valeurs.
  On peut également ajouter des clés de traduction qui pourront être utilisées dans l'application / builder.

  La gestion des juridictions se fait via la traduction. Il suffit de renseigner les traductions qui différent de la langue.


  3) Commentaire de Gestion
  Ce fichier/onglet contient les commentaires de gestions

  Voir nx-pack en PJ.

# Data complémentaires
  - Historiques
  - Indicateurs de fonds

  A disucter avec l'équipe projet pour le format.
