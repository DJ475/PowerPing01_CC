# PowerPing01_CC

This repository is the frontend interface for a personal IoT web application that enables the remote startup of a PC using an ESP32 microcontroller and relay module. It uses server-side logic (private) and a public-facing UI to interact with the API.

This repository contains all the client-side logic, including the React/TypeScript components and user interface that facilitates communication with the backend.

This Interface was manually converted from Figma design to React (JSX), Tailwind CSS, and TypeScript:  
[PowerPing01 Figma Design](https://www.figma.com/file/LP8CeeLqkG6kTHzpqxCiAR/PowerPing01-UI-UX)

## Dev Branch Log  
**January 2, 2026**  
Work completed on [`DevBranch_Frontend`](https://github.com/DJ475/PowerPing01_CC/tree/DevBranch_Frontend):
- FSM diagram prototype
- Hardware research on using tap splices for parallel connection to 22–18 AWG motherboard wires connected to the PWR_SW pins. The main idea is that the relay module taps into the PC case power button wires, allowing both the ESP32’s relay and the physical power button to control the PC’s power state (ON/OFF).
- Circuit prototype of relay module interacting with a simple LED
- FreeRTOS code started — tasks implemented so far: BLE Task, WiFi Task, Main Controller Task
- Planned BLE provisioning flow for WiFi credentials, including storing credentials in Non‑Volatile Storage for secure retrieval on boot
- Research on WebSockets for ESP32-to-server communication
