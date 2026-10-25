---
layout: default
title: Lecture Notes
---

# Activity 

## DFVS in servers

### STEP 1

Open the [dashboard](https://paolo-giaccone.github.io/edu-visuals/datacenter-energy/cmos_energy_tradeoff.html) and check the following settings (they should default)
- Workload $N = 5 \times 10^9$ cycles
- Threshold voltage $V_{th}=0.35~V$
- Leakage current $I_{leak}=0.45~A$

Now move the slides of the supply voltage to verify that the data in the following table is correct.

 | Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
 | :---: | :---: | :---: | :---: | :---: |
 | S1 | 1.00 V | 2.20 GHz | 2.27 s | 7.2 J |
 | S2 | 1.00 V | 2.60 GHz | *not working* | — |
 | S3 | 0.75 V | 2.20 GHz | *not working* | — |

**Q1:** Why scenario S2 is not working?

**Q2:** Why scenario S3 is not working?

**Q3:** Consider scenario S1 and modify *only* clock frequency to obtain an execution time equal to 5.0 s. Let S4 be the new scenario. Fill the following:

 | Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
 | :---: | :---: | :---: | :---: | :---: |
 | S4 | 1.0 V | ... GHz | 5.0 s | ... J |

> 1 GHz, 8.25 J

Did you experience a reduction in task energy? Why?

> No






