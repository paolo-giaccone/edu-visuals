---
layout: default
title: Lecture Notes
---

# Activity 

## DFVS in servers

### STEP 1

Open the [dashboard](https://paolo-giaccone.github.io/edu-visuals/datacenter-energy/cmos_energy_tradeoff.html) and check the following settings (they should default)
- Task workload $N = 5 \times 10^9$ cycles
- Threshold voltage $V_{th}=0.35~V$
- Leakage current $I_{leak}=0.45~A$

Now move the slides of the supply voltage to verify that the data in the following table is correct.

 | Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
 | :---: | :---: | :---: | :---: | :---: |
 | S1 | 1.00 V | 2.20 GHz | 2.27 s | 7.2 J |
 | S2 | 1.00 V | 2.60 GHz | *unfeasible* | — |
 | S3 | 0.75 V | 2.20 GHz | *unfeasible* | — |

**Q1:** Why scenario S2 is unfeasible?

**Q2:** Why scenario S3 is unfeasible?

**Q3:** Consider scenario S1 and modify *only* clock frequency to obtain an execution time equal to 5.0 s. Let S4 be the new scenario. Fill the following:

 | Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
 | :---: | :---: | :---: | :---: | :---: |
 | S4 | 1.0 V | ... GHz | 5.0 s | ... J |

> 1 GHz, 8.25 J

Did you experience a reduction in task energy? Why?

> No, due to the static power

**Q4:** Consider scenario S4 and modify *only* supply voltage to reduce as much as possible the task energy. Let S5 be the new scenario. Fill the following:

 | Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
 | :---: | :---: | :---: | :---: | :---: |
 | S5 | ... V | ... GHz | 5.0 s | ... J |


Did you experience a reduction in task energy with respect to S3 and S4? Why?
> 0.58V, 1 GHz, 3.32J
> reduced with respect to S4 (40%)
> reduced with respect to S1 (46%)

**Q5:** Consider scenario S1 and modify *only* the clock frequency to minimize the overall task energy.
Let S6 be the new scenario. Fill the following:

| Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
 | :---: | :---: | :---: | :---: | :---: |
 | S6 | 1.00 V | ... GHz | ... s | ... J |
> 2.35GHz, 2.13s, 6.96J
> This almost the same as S1

**Q6 (Min execution time policy):**  Consider scenario S1 and modify *only* the clock frequency and the supply voltage to minimize the task execution time.
Let S7 be the new scenario. Fill the following:

| Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
| :---: | :---: | :---: | :---: | :---: |
| S7 | ... V | ... GHz | ... s | ... J |

Compare the execution time and the task energy with respect to S1.
> 3.25GHz, 1.54s, 13.62J

**Q7 (Min energy policy):** Consider scenario S1 and modify *only* the clock frequency and the supply voltage to minimize the task execution time across . (Hint: Use voltage around 0.4-0.5 V)

Let S8 be the new scenario. Fill the following:

| Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
| :---: | :---: | :---: | :---: | :---: |
| S8 | ... V | ... GHz | ... s | ... J |

> 0.48V, 0.45 GHz, 11s, 3.78J

**Q8:** Summarize the results in the following table:

| Scenario | Supply voltage $V$ | Clock Frequency $f$ | Execution time | Task energy |
| :--- | :---: | :---: | :---: | :---: |
| S7 (Min execution time policy)| ... V | ... GHz | ... s | ... J |
| S8 (Min energy policy) | ... V | ... GHz | ... s | ... J |

Compare the different energy vs execution time tradeoff.





