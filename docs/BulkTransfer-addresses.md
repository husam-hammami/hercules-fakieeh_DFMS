# Bulk Transfer Communication Addresses

The following table summarises the OT addresses exchanged with the SIMATIC S7 controller. These values come from DB4 (`BulkTransfer_DataExchang`).

| Address | Name | Type | Initial Value | Comment |
|--------:|------|------|--------------|---------|
| 0.0 | BulkLine_Source_Silo | INT | 101 | Source Silo Number either from (101 ->115) or (201->203) |
| 2.0 | BulkLine_DEST_1 | INT | 301 | Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 4.0 | BulkLine_DEST_2 | INT | 301 | Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 6.0 | BulkLine_CC25_Sel | INT | 1 | Conveyor Selection either 1 or 2 (if 1 display CC25(1) if 2 display CC25(2)) |
| 8.0 | BulkLine_Weight_Quantity | REAL | 0.000 | Quantity to be transferred by the job |
| 12.0 | BulkLine_Scale_Selection | INT | 1 | Scale Selection either 1 or 2 (if 1 display W3) (if 2 display W4) |
| 14.0 | PitLine_Pit_Number | INT | 1 | Pit Selection either 1 or 2 (if 1 display Pit 1) (if 2 display Pit 2) |
| 16.0 | PitLine_RawMaterialCode | STRING[16] | '' | Raw material code for pit Line |
| 34.0 | PitLine_DEST_1 | INT | 301 | Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 36.0 | PitLine_DEST_2 | INT | 302 | Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 38.0 | PitLine_Weight_Quantity | REAL | 0.000 | Quantity to be transferred by the job |
| 42.0 | PitLine_Scale_Selection | INT | 2 | Scale Selection either 1 or 2 (if 1 display W3) (if 2 display W4) |
| 44.0 | ActiveBulk_Source_Silo | INT | 101 | ActiveData: Source Silo Number either from (101 ->115) or (201->203) |
| 46.0 | ActiveBulk_DEST_1 | INT | 301 | ActiveData: Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 48.0 | ActiveBulk_DEST_2 | INT | 301 | ActiveData: Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 50.0 | ActiveBulk_CC25_Sel | INT | 1 | ActConveyor Selection either 1 or 2 (if 1 display CC25(1) if 2 display CC25(2)) |
| 52.0 | ActiveBulk_weightQuant | REAL | 0.000 | ActiveData: Quantity to be transferred by the job |
| 56.0 | ActiveBulk_ScaleSelect | INT | 1 | ActiveData: Scale Selection either 1 or 2 (if 1 display W3) (if 2 display W4) |
| 58.0 | ActivePit_Pit_Number | INT | 1 | ActiveDataPit Selection either 1 or 2 (if 1 display Pit 1) (if 2 display Pit 2) |
| 60.0 | ActivePit_RawMaterialCod | STRING[16] | '' | ActiveData: Raw material code for pit Line |
| 78.0 | ActivePit_DEST_1 | INT | 301 | ActiveData: Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 80.0 | ActivePit_DEST_2 | INT | 302 | ActiveData: Destination Silo Number from (301 -> 322) EXCEPT 313 |
| 82.0 | ActivePit_Weight_Quant | REAL | 0.000 | ActiveData: Quantity to be transferred by the job |
| 86.0 | ActivePit_Scale_Select | INT | 2 | ActiveData: Scale Selection either 1 or 2 (if 1 display W3) (if 2 display W4) |
| 88.0 | BulkLine_Status | INT | 1 | line status: (1 -> IDLE)(2 -> STARTING)(6 -> RUNNING)(8 -> STOPPING) |
| 90.0 | PitLine_Status | INT | 1 | line status: (1 -> IDLE)(2 -> STARTING)(6 -> RUNNING)(8 -> STOPPING) |

The structure ends at address 92.0 (End of DB4).
