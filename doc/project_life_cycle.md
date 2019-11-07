# Project Life Cycle & Generalities

The aim of this document is to describe the life cycle of POC or a Production.

![project life cycle Schema](https://platform.100m.io/dist/nx-digital/project-life-cycle.png)

Each phase is composed of :

* ***A Definition of Ready***: When a phase is ready to start.
* ***A sprint*** is a period of time during which specific work has to be completed and made ready for review
* ***A Definition of Done***: What is expected during this phase

A new phase can start if and only if all Definition of Ready are Verified.

Two dedicated moments will be allowed for feedbacks:
* ***ROUND1***: End of phase 2 (Complementary data)
* ***ROUND2***: End of phase 3 (Reporting)

All feedback must be centralized on Trello. FeedBacks send by mail won't be processed.

# Project Setup

## Overview
The implementation of the project starts with a meeting that will present the tools used (Trello / Slack) and will identify the main fund profiles.

Trello must be linked to the support channel.

## Definition of done
  * Kick off meeting
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

  * Example of factsheet (1 year of factsheet for the Main fund profiles)

## Sprint
During this phase developper will:
  * Process custodian data and referential data
  * Deploy Application and enable daily update

## Definition of done
  * Digital App updated every day on all shares and all funds
  * Application is lived and first user can use application.
  * No customer feedback expected

# Complementary data

## Definition of ready

  * Historic fund & Benchmark
  * Benchmark
  * Indicators (Delta, Sensitaux / Exposure ...)
  * Spreadsheet with formulae with real data: Volatility, drawdown... (If specific computes needed:)
  * Benchmark referential (if attribution needed)

## Sprint

During this phase developper will:
  * Add the new indicators and check all the
  * Check all the computers on the main funds profile thanks to the examples

##  Definition of done
  * Digital App updated with History / benchmark / Indicators
  * Feedbacks round 1

# Digital Report

## Definition of ready
* Feedbacks round 1 closed
* New Factsheet Design (according to contract)
* Nx-pack updated with reporting data (Disclaimer, funds characteristics)

## Sprint
During this phase developper will:
 * Create the PDF Reporting of the factsheet

##  Definition of done
 * Feedbacks round 2

## Custom Design

If you have chosen a custom design, our team needs a template filled with real data. (Indeed false data does not allow to see the true size of the blocks (disclaimers ...)).
Moreover the template won't be reproduce exactly (pixel by pixel), some corrections will be added due to implementation constraints.

# Add others funds (Only for production, not realized for POC)

## Definition of ready
* Feedbacks round 2 closed
* Nx-pack filled for all the funds
* History / benchmarks / indicators available for all the funds

## Sprint
During this phase developper will:
  * Add the others funds

## Definition of done:
* All funds are added
