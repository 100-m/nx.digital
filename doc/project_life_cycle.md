# Project Life Cycle & Generalities

The aim of this document is to describe the life cycle of both POC and Production.

![project life cycle Schema](https://platform.100m.io/dist/nx-digital/project-life-cycle.png)

Each phase is composed of 3 main steps:

* ***Definition of Ready (DoR)***: When a phase is ready to start.
* ***Sprint***: The period of time during which specific work has to be completed and ready for review
* ***Definition of Done (DoD)***: What is expected during this phase (awaited result)


A new phase can start if, and only if all Definition of Ready are verified.

Two dedicated moments will be allowed for feedbacks:
* ***ROUND1***: End of phase 2 (Complementary data)
* ***ROUND2***: End of phase 3 (Reporting)

All feedbacks must be centralized on Trello. Feedbacks sent by mail will not be processed.

# Project Setup

## Overview
The implementation of the project starts with a meeting that will present the tools used (Trello / Slack) and will identify the main fund profiles.

Trello must be linked to the support channel.

## Definition of done
  * Kick-off meeting
  * The customer can access slack and Trello
  * Main fund profiles identified

# Referential and custodian data

## Definition of ready

  * SFTP connection ([More informations](https://nx.digital/doc?transfer))

  * Nx Pack ([Example](http://platform.100m.io/dist/greenrock/nx-pack_greenrock.xlsx)):
      - Asset referential with at least: (Currency, Asset_Class, Country, Sector)
      - Fund referential with at least:
        - fund_id (From custodian file)
        - fund_name (Traduction key: used in url)
        - axis_of_analysis: (Graphs used in digital app, must reference a column of Asset referential tab)
        - category (Used in slash screen for select a fund)
        - orientation
        - share_id
        - share_letter
      - Translation for at least 1 language

  * Custudian data available by email or Sftp
      - Received via sftp or email
      - Caceis data: ESPVL / HISTOVL / HISINV / FLUVAL2 / JUSCOM / JOURSR
      - BPSS data: BPSS Nav pack
      - SGSS data: F7 / F2 / F1 / F5 / F43 / F35

  * Example of factsheet (1 year of factsheet for the main fund profiles)

## Sprint
During this phase, developers will:
  * Process custodian and referential data
  * Deploy the application and enable daily updates

## Definition of done
  * Digital app is updated on a daily basis on all shares and funds
  * Application is live and can be used by users
  * No customer feedback expected

# Complementary data

## Definition of ready

  * Historic fund & Benchmark
  * Benchmark (Benchmark provider)
  * Indicators (Delta, Sensitaux / Exposure ...)
  * Detailed example: Excel spreadsheet filled with real data and where we can clearly see the method or formula that has been used to get the awaited result (Just in case the client wants a specific formula to be used)
  * Benchmark referential (In case the client need to display the attribution analysis)

## Sprint
  
During this phase, developers will:
  * Add the new indicators
  * Check that all values are correct based on examples sent by the client previously

##  Definition of done
  * Digital App updated with History / benchmark / Indicators
  * Feedbacks round 1

# Digital Report

## Definition of ready
* Feedbacks round 1 closed
* New Factsheet Design (according to contract)
* Nx-pack updated with reporting data (Disclaimer, funds characteristics)

## Sprint
During this phase, developers will:
 * Create the PDF Reporting of the factsheet

##  Definition of done
 * Feedbacks round 2

## Custom Design

If you have chosen a custom design, our team will need a template filled with real data. (False data does not allow us to see the true size of blocks (disclaimers ...)).
Moreover, template will not be reproduced pixel-wise, some corrections will be added due to implementation constraints.

# Add others funds (Only for production, not realized for POC)

## Definition of ready
* Feedbacks round 2 closed
* Nx-pack filled for all funds
* History / benchmarks / indicators available for all funds

## Sprint
During this phase, developers will:
  * Add the rest of the funds

## Definition of done:
* All funds are added
