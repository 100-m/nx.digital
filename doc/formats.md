# Schema des données brutes

100M préférera la donnée la plus brute possible, directement telle que transmise par un fournisseur ou un valorisateur et telle qu’exportée par un système tierce.
Pour assurer une qualité optimale, il est nécessaire que l’ensemble de la chaîne de traitement soit automatisé et ne comporte pas de saisie manuelle.

Les données sont à transmettre au format ‘.csv’.

## Référentiels

### Référentiel fonds (Gestion Collective)
Nous devons recevoir un référentiel au format .csv qui liste toutes les parts avec pour chaque part les informations suivantes en colonne: isin de la part, nom de la part, nom du fonds, id du fonds, valorisateur, benchmark, date de création (champ optionnel), catégorie (champ optionnel), nom des gérants (champ optionnel), commentaire de gestion (champ optionnel), axe analyse graph 1 (référence à une colonne du référentiel valeur), axe analyse graph 2 (référence à une colonne du référentiel valeur), axe analyse graph 3 (référence à une colonne du référentiel valeur), axe analyse graph 4 (référence à une colonne du référentiel valeur).

### Référentiel Valeurs
Le référentiel valeurs est le fichier qui nous permet d'agréger par catégories dans l’application : pays, classe d’actif, horizon de liquidité, devise, secteur, type, industrie etc.
Le model de données du référentiel est flexible. Peuvent apparaître autant de colonnes que voulu. Il faut cependant que les colonnes isin de la ligne et libellé de l’instrument apparaissent.

Le référentiel valeurs est à nous transmettre au format csv.

### Référentiel Valeurs Indices
Le référentiel des instruments de l’indice n’est pas traité différemment du référentiel valeurs des instruments des fonds. L’ensemble des valeurs et instruments présents dans l’indice doivent figurer dans le référentiel valeurs.


### Référentiel Clients (Gestion Privée)
Le référentiel client contient les données associant une ID client final à son email et à ses informations telles qu’elles seront affichées dans l’application.

### Référentiel Comptes (Gestion Privée)
Le référentiel comptes contient les informations qui lient un compte client à ses attributs : teneur de compte, gestionnaire etc.

## Données comptables (Gestion Collective)
L’application 100M est basée sur les données comptables. Vous devrez transmettre à 100M l’ensemble des données d’inventaires valorisés, de mouvements, de souscription rachats, de pnl ligne-à-ligne, ainsi que les séries temporelles de la valorisation de chacune des parts, du nombre de parts, et des dividendes. Selon les valorisateurs, ces données vont se trouver dans différents rapports qui sont détaillés ci-dessous.

### BPSS
Fichiers "Rapport de Validation VL" quotidiens bruts pour tous les fonds, au format excel
### Caceis
Les rapports quotidiens pour toutes les parts de fonds, au format ‘.csv’:
- HISINV.csv
- ESPVL.csv
- JOUROP.csv
- JUSCOM.csv
- FLUVAL2.csv
- JOURSR.csv

## Données de Portefeuilles (Gestion Privée)

### Données d’allocations valorisées
Le data model attendu correspond à un fichier .csv pour chaque portefeuille, avec les champs suivants :

date, isin, price, quantity, pnl, pnl_realized, pnl_latent, pnl_wallet_shares (P&L per day per line per ‘share’ of the portfolio).
Ce fichier .csv sera intitulé allocation.csv

### Données de performance
Le data model attendu correspond à un fichier .csv pour chaque portefeuille, avec les champs suivants : date, aum, pnl, benchmark, nav, quantity.

Ce fichier .csv sera intitulé performance.csv.

### Données de transaction
Le data model attendu correspond à un fichier .csv pour chaque portefeuille, avec les champs suivants : date_start, date_end, isin, price_start, price_end, quantity, transaction_fee_start, transaction_fee_end

Ce fichier .csv sera intitulé trades.csv

## Données benchmark

### Niveaux des indices
Les niveaux des indices doivent nous être transmis avec les valeurs liquidatives des parts de fonds, au sein d’un fichier .csv sous forme d’une série temporelle.

### Composition des indices
Pour que nous effectuions les attributions de performance, vous devrez nous fournir les compositions des indices ou benchmarks que vous utilisez. Ces compositions doivent faire apparaître le détail du portefeuille, avec pour chaque ligne l’isin (ou I.D.), le poids, le rendement total ajusté de la ligne depuis le dernier état.

## Meta données
Les autres indicateurs, et notamment les données extra-financières, nous sont communiqués via un fichier .csv dédié contenant un nombre de séries temporelles arbitraire.

## Système de Fichiers

### Données de Gestion Collective
Vous devrez organiser le dossier ‘raw’ en sous-dossiers correspondants aux données qu'ils contiennent en respectant l’arborescence suivante :
- raw
- reference_data
  - instrument_reference
  - funds_reference
- accounting_data
  - FR-caceis
    - rapport .csv tel que transmis par le valorisateur.
  - LU-caceis
  - FR-bpss
  - LU-bpss
  - FR-sgss
  - FR-cmcic
  - FR-statestreet
  - …
- benchmark_data
  - benchmark1
    - Fichier de composition tel que transmis par le fournisseur d’indices.
- other_timeseries
  - Fichiers comportant les séries temporelles des indices, des valorisations des fonds, etc. au format .csv

### Données de Gestion Privée
Vous devrez organiser le dossier ‘app’ en sous-dossiers correspondants aux données qu'ils contiennent en respectant l’arborescence suivante :
- app
  - accounts.csv
  - clients.csv
  - pf-idclient1
    - performance.csv
    - allocation.csv
    - trades.csv
  - pf-idclient2
