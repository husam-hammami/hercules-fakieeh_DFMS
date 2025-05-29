# PLC Data Block 1 (DB1)

This document explains the layout of the simulated PLC data block used by the Hercules demo. Each entry lists the address within DB1, the offset in bytes from the start of the block and a short description of its purpose. The layout mirrors common S7 conventions but can be adjusted to fit the real installation.

| Address      | Offset (bytes) | Description                      |
|--------------|---------------|----------------------------------|
| `DB1.DBX0.0` | 0.0           | System run command               |
| `DB1.DBX0.1` | 0.1           | System stop command              |
| `DB1.DBX0.2` | 0.2           | Emergency stop status            |
| `DB1.DBB2`   | 2             | Current batch ID                 |
| `DB1.DBB3`   | 3             | Order type                       |
| `DB1.DBD4`   | 4             | Current weight (REAL)            |
| `DB1.DBD8`   | 8             | Target weight (REAL)             |
| `DB1.DBB12`  | 12            | Material code                    |
| `DB1.DBB13`  | 13            | Material status                  |
| `DB1.DBD14`  | 14            | Temperature (REAL)               |
| `DB1.DBD18`  | 18            | Pressure (REAL)                  |
| `DB1.DBB22`  | 22            | Alarm code                       |
| `DB1.DBB23`  | 23            | Alarm acknowledgement flag       |
| `DB1.DBD24`  | 24            | Timestamp (DWORD)                |
| `DB1.DBB28`  | 28            | Quality check result             |

These addresses are meant as a starting point. Additional fields can be appended as required for the project.
