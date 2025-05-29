# MineralIntake_DataExchan (DB3)

The following table lists OT addresses used in the `MineralIntake_DataExchan` data block (DB3) of the SIMATIC S7 controller.

| Address | Name | Type | Initial Value | Comment |
|--------:|------|------|--------------|---------|
| 0.0 | BadgeNo | INT | 1 | Badge Number |
| 2.0 | SourceRawMaterialCode | STRING[16] | '' | Truck Raw Material Code |
| 20.0 | DeclaredQuantity_KG | REAL | 0.000 | Truck Declared Quantity in KG |
| 24.0 | DestinationSilo1 | INT | 401 | Destination Silo1 |
| 26.0 | DestinationSilo2 | INT | 402 | Destination Silo2 |
| 28.0 | MatCode_S401 | STRING[16] | '' | Material Code for Silo 401 |
| 46.0 | MatName_S401 | STRING[32] | '' | Material Name for Silo 401 |
| 80.0 | MatCode_S402 | STRING[16] | '' | Material Code for Silo 402 |
| 98.0 | MatName_S402 | STRING[32] | '' | Material Name for Silo 402 |
| 132.0 | MatCode_S403 | STRING[16] | '' | Material Code for Silo 403 |
| 150.0 | MatName_S403 | STRING[32] | '' | Material Name for Silo 403 |
| 184.0 | MatCode_S404 | STRING[16] | '' | Material Code for Silo 404 |
| 202.0 | MatName_S404 | STRING[32] | '' | Material Name for Silo 404 |
| 236.0 | MatCode_S405 | STRING[16] | '' | Material Code for Silo 405 |
| 254.0 | MatName_S405 | STRING[32] | '' | Material Name for Silo 405 |
| 288.0 | MatCode_S406 | STRING[16] | '' | Material Code for Silo 406 |
| 306.0 | MatName_S406 | STRING[32] | '' | Material Name for Silo 406 |
| 340.0 | MatCode_S407 | STRING[16] | '' | Material Code for Silo 407 |
| 358.0 | MatName_S407 | STRING[32] | '' | Material Name for Silo 407 |
| 392.0 | MatCode_S408 | STRING[16] | '' | Material Code for Silo 408 |
| 410.0 | MatName_S408 | STRING[32] | '' | Material Name for Silo 408 |
| 444.0 | HL_S401 | BOOL | FALSE | High Level for Silo 401 |
| 444.1 | LOCK_S401 | BOOL | FALSE | Lock for Silo 401 |
| 444.2 | HL_S402 | BOOL | FALSE | High Level for Silo 402 |
| 444.3 | LOCK_S402 | BOOL | FALSE | Lock for Silo 402 |
| 444.4 | HL_S403 | BOOL | FALSE | High Level for Silo 403 |
| 444.5 | LOCK_S403 | BOOL | FALSE | Lock for Silo 403 |
| 444.6 | HL_S404 | BOOL | FALSE | High Level for Silo 404 |
| 444.7 | LOCK_S404 | BOOL | FALSE | Lock for Silo 404 |
| 445.0 | HL_S405 | BOOL | FALSE | High Level for Silo 405 |
| 445.1 | LOCK_S405 | BOOL | FALSE | Lock for Silo 405 |
| 445.2 | HL_S406 | BOOL | FALSE | High Level for Silo 406 |
| 445.3 | LOCK_S406 | BOOL | FALSE | Lock for Silo 406 |
| 445.4 | HL_S407 | BOOL | FALSE | High Level for Silo 407 |
| 445.5 | LOCK_S407 | BOOL | FALSE | Lock for Silo 407 |
| 445.6 | HL_S408 | BOOL | FALSE | High Level for Silo 408 |
| 445.7 | LOCK_S408 | BOOL | FALSE | Lock for Silo 408 |
| 446.0 | RFID_BadgeReading | REAL | 0.000 | The reading of the card in RFID of Line 1 |
| 450.0 | ActiveBadge | INT | 1 | Running order Badge Number |
| 452.0 | ActiveDestination | INT | 1 | Active Destination Silo Number |
| 454.0 | StatusWord | INT | 0 | status: (1->IDLE) (2->STARTING) (6->RUNNING) (8->STOPPING) |
| 456.0 | Spare | INT | 0 | |
| 458.0 | Spare1 | INT | 0 | |
| 460.0 | Spare2 | INT | 0 | |
| 462.0 | Spare3 | INT | 0 | |
| 464.0 | Spare4 | INT | 0 | |
| 466.0 | Spare5 | INT | 0 | |
| 468.0 | Spare6 | INT | 0 | |
| 470.0 | Spare7 | INT | 0 | |
| 472.0 | Spare8 | INT | 0 | |
| 474.0 | Spare9 | INT | 0 | |
| 476.0 | Spare10 | INT | 0 | |
| 478.0 | Spare11 | INT | 0 | |
| 480.0 | Spare12 | INT | 0 | |
| 482.0 | Spare13 | INT | 0 | |
| 484.0 | Spare14 | INT | 0 | |
| 486.0 | Spare15 | INT | 0 | |
| 488.0 | Spare16 | INT | 0 | |
| 490.0 | Spare17 | INT | 0 | |
| 492.0 | Spare18 | INT | 0 | |
| 494.0 | Spare19 | INT | 0 | |
| 496.0 | Spare20 | INT | 0 | |
| 498.0 | Spare21 | INT | 0 | |
| 500.0 | Spare22 | INT | 0 | |
| 502.0 | Spare23 | INT | 0 | |
| 504.0 | Spare24 | INT | 0 | |
| 506.0 | Spare25 | INT | 0 | |
| 508.0 | Spare26 | INT | 0 | |
| 510.0 | Spare27 | INT | 0 | |
| 512.0 | Spare28 | INT | 0 | |
| 514.0 | Spare29 | INT | 0 | |
| 516.0 | Spare30 | INT | 0 | |
| 518.0 | Spare31 | INT | 0 | |
| 520.0 | Spare32 | INT | 0 | |
| 522.0 | Spare33 | INT | 0 | |
| 524.0 | Spare34 | INT | 0 | |
| 526.0 | Spare35 | INT | 0 | |
| 528.0 | Spare36 | INT | 0 | |
| 530.0 | Spare37 | INT | 0 | |
| 532.0 | Spare38 | INT | 0 | |
| 534.0 | Spare39 | INT | 0 | |
| 536.0 | Spare40 | INT | 0 | |
| 538.0 | Spare41 | INT | 0 | |
| 540.0 | Spare42 | INT | 0 | |
| 542.0 | Spare43 | INT | 0 | |
| 544.0 | Spare44 | INT | 0 | |
| 546.0 | Spare45 | INT | 0 | |
| 548.0 | Spare46 | INT | 0 | |
| 550.0 | Spare47 | INT | 0 | |
| 552.0 | Spare48 | INT | 0 | |
| 554.0 | Spare49 | INT | 0 | |
| 556.0 | Spare50 | INT | 0 | |
| 558.0 | Spare51 | INT | 0 | |
| 560.0 | Spare52 | INT | 0 | |
| 562.0 | Spare53 | INT | 0 | |
| 564.0 | Spare54 | INT | 0 | |
| 566.0 | Spare55 | INT | 0 | |
| 568.0 | Spare56 | INT | 0 | |
| 570.0 | Spare57 | INT | 0 | |
| 572.0 | Spare58 | INT | 0 | |
| 574.0 | Spare59 | INT | 0 | |
| 576.0 | Spare60 | INT | 0 | |
| 578.0 | Spare61 | INT | 0 | |
| 580.0 | Spare62 | INT | 0 | |
| 582.0 | Spare63 | INT | 0 | |
| 584.0 | Spare64 | INT | 0 | |
| 586.0 | Spare65 | INT | 0 | |
| 588.0 | Spare66 | INT | 0 | |
| 590.0 | Spare67 | INT | 0 | |
| 592.0 | Spare68 | INT | 0 | |
| 594.0 | Spare69 | INT | 0 | |
| 596.0 | Spare70 | INT | 0 | |

The structure ends at address 598.0 (End of DB3).
