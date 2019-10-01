#Déroulement d'un projet

# Project Life Cycle & Generalities:

The aim of this document is to describe the life cycle of POC or a Production.
(A production will be processed like a POC)

Each phase is composed of D.O.R., a sprint  and D.O.D.

Definition of Ready: When a phase is ready to start.
A phase will start if and only if all conditions are Verified

A sprint is a period of time (5 days) during which specific work has to be completed and made ready for review

Definition of Done: What is expected during this phase

2 dedicated moments will be allowed for FeedBacks:
  -> ROUND1: End of phase 2 (Complementary data)
  -> ROUND2: End of phase 3 (Reporting)

About the feedbacks:
  All feedback must be centralized on Trello. FeedBacks send by mail won't be processed.

# 1) Project Setup
  -> Trello
  -> Slack
  -> Identify main fund profiles (FCPE / Bonds ...)

## Definition of done :
  -> The customer can access slack and Trello
  -> Main fund profiles identified

# 2) Referential and custodian data

## Definition of ready:
  -> SFTP connection OK
  -> nx_pack:
      -> asset referential with at least (Currency, Asset_Class, Country, Sector)
      -> Fund referential
      -> translation for at least 1 language
  -> Custudian data:
      -> Send to SFTP or by mail
  -> Example of factsheet (1 years of factsheet for the Main fund profiles)

## Sprint
During this phase developper will:
  -> Process custodian data and referential data
  -> Deploy Application and enable daily update

## Definition of done :
  -> Digital App updated every day on all shares and all funds
  -> Application is lived and firt user can use application.
  -> No customer feedback expected

# 3) Complementary data

## Definition of ready:
    -> Historic fund & Benchmark
    -> Benchmark
    -> Indicators (sensitaux / Expo ...)
    If specific computes neeeded:
      -> Spreadsheet with formulae with real data. (Volatility, drawdown...)

## Sprint (5 days)
During this phase developper will:
  -> add the new indicators and check all the
  -> check all the computers on the main funds profile thanks to the examples

##  Definition of done:
    -> Digital App updated with History / benchmark / Indicators
    -> Feedbacks round 1


# 4) Factsheet

## Definition of ready:
    -> Feedbacks round 1 closed
    -> Template of the new factsheet (according to contract)

## Sprint
During this phase developper will:
  -> Create the PDF Reporting of the factsheet

##  Definition of done:
  -> Feedbacks round 2

# 5) Add others funds (Only for production, not realized for POC)

## Definition of ready:
  -> Feedbacks round 2 closed
  -> Nx-pack filled for all the funds
  -> History / benchmarks / indicators available for all the funds

## Sprint
During this phase developper will:
  -> add the others funds

## Definition of done:
  -> All funds are added.
