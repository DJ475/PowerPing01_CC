This repository is the frontend interface for a personal IoT web application that enables the remote startup of a PC using an ESP32 microcontroller and relay module. It uses server-side logic (private) and a public-facing UI to interact with the API.

This repository contains all the client-side logic, including the React/TypeScript components and user interface that facilitates communication with the backend.

Purpose: I ran into repeated issues trying to configure Wake‑on‑LAN for remote PC access, since it requires specific BIOS settings and network configurations. To avoid those limitations, I decided to build my own customizable tool that lets me remotely power on my PC using an ESP32 and relay module. Giving me a reliable way to start the machine from anywhere, with the primary goal being, so I can use Windows Remote Desktop without depending on Wake‑on‑LAN.

This Interface was manually converted from Figma design to React (JSX), CSS, and TypeScript: https://www.figma.com/design/LP8CeeLqkG6kTHzpqxCiAR/PowerPing01-UI-UX?node-id=0-1&t=38wsl8wtPaoa6JVN-1
