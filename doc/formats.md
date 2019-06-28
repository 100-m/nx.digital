# Schema des données brutes

NX Digital préférera la donnée la plus brute possible, directement telle que transmise par un fournisseur ou un valorisateur et telle qu’exportée par un système tierce.
Pour assurer une qualité optimale, il est nécessaire que l’ensemble de la chaîne de traitement soit automatisé et ne comporte pas de saisie manuelle.

Les données sont à transmettre au format ‘.csv’.

## Référentiels

Nous rassemblons toutes les données référentielles dans un document excel que nous appelons “nx-pack”. Ce document vous permet d’avoir la main sur les données référentielles de vos fonds et des valeurs, de gérer leurs traductions, tout en centralisant l’information. C’est l’unique source de vérité du référentiel de l’application digitale. La flexibilité du nx-pack vous donne un contrôle précis et la liberté d’actualiser facilement les informations référentielles de l’application.

Ce fichier nx-pack.xlsx est constitué de 5 onglets:
- funds_referential
- assets_referential
- management_comment
- managers
- translation

Un exemple de fichier nx-pack.xlsx vous sera fourni en début de projet.

### Funds referential

L'onglet 'funds_referential' contient le référentiel des fonds et de leurs parts.

Les informations sont par exemple le nom du fonds, sa catégorie, son id, les gérants, l’axe de gestion, le nom de la part, son ISIN, sa catégorie, sa devise, etc…
Les colonnes de cet onglet sont gérées dynamiquement, et peuvent être modifiée au besoin du client.

### Assets referential


L’onglet 'asset_referential' contient le référentiel valeurs. Ce sont les données qui nous permettent d'agréger par catégories dans l'application : pays, classe d'actif, horizon de liquidité, devise, secteur, type, notation, industrie etc.
Les colonnes de cet onglet sont flexibles. Peuvent apparaître autant de colonnes que souhaité. Il faut cependant que les colonnes ISIN et libellé de l'instrument apparaissent.

### Management comment

Cet onglet contient les commentaires de gestion, traduits et historisé
Cet onglet est composé des colonnes : 'Date', 'Fund ID' et d'autant de colonne qu'on a de langues. La colonne 'Date' doit avoir comme format: mois-année (exemple: Jan-19).

### Managers

Cet onglet contient les informations de présentation des gérants, traduites dans chaque langue.

### Translation

L’onglet ‘translation’ accueille les traductions de tous les champs du référentiel qui ont besoin d’être traduits.

Les onglets funds_referential et assets_referential sont typiquement rempli dans une unique langue. C’est dans cet onglet que vous pourrez renseigner les traductions dont vous avez besoin.
Par exemple, si vous souhaitez traduire une catégorie Pays, il suffit de référencer les traductions de cette catégorie dans cet onglet. Ceci permet de centraliser les informations dans un seul document.


## Données comptables (Gestion Collective)
L’application 100M est basée sur les données comptables. Vous devrez transmettre à 100M l’ensemble des données d’inventaires valorisés, de mouvements, de souscription rachats, de pnl ligne-à-ligne, ainsi que les séries temporelles de la valorisation de chacune des parts, du nombre de parts, et des dividendes. Selon les valorisateurs, ces données vont se trouver dans différents rapports qui sont détaillés ci-dessous.

### BPSS
Fichiers "Nav Pack" quotidiens bruts pour tous les fonds, au format excel
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
