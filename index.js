// JavaScript Code Proposal
// Problem Statement
// Viewing interesting information about network devices can be cumbersome using individual devices graphical user interface (GUI) web pages or command line interfaces (CLIs). Interesting data includes things like…
// VLAN assignments (integer values traditionally assigned based on equipment type, computers = 100, voice over Internet protocol (VoIP) phones = 101, printers = 102, etc.
// Packet or byte count in and out of ports

// Proposed Solution
// Build a dynamic web page that displays integers from an aggregate of multiple network devices depending on what a user clicks in my user interface. Integers will initially be provided by statically set variables until such time as we learn how to dynamically pull them via Application Programming Interface (API) calls.

// A rough sketch below shows the general idea. Styling and layout TBD.


// 24 Port Switch diagram
// *Click*

// Operational Status: UP (green background) 	

// Port Description: Jims Desk Phone

// VLAN Assignment: 101 (VoIP Phone) (purple background)

// Data Input/Output: 1,242 megabytes / 204 megabytes


// Solution Benefits and Implementation Overview
// The eventual goal of this solution will be to update the data in the web page every 1-2 seconds by API call in the background.
// We will implement functions and variables to accomplish the following goals…
// 1)	Display Port operational status, change color based on up or down (green and red)
// 2)	Display Port description
// 3)	Display VLAN integer variable (changes based on device connected)
// 4)	Change color of the VLAN background based on integer value
// 5)	Convert raw bit counts to use the mega prefixes by dividing the bits by 8 to get bytes (B), then 1024 to get kilobytes (kB), then by 1024 to get megabytes (mB).

// Solution Limitations and Possible Extensions
// This solution is completely reliant on pulling interesting data via API. The initial goals of this project will be somewhat dissatisfying to see fixed variables used as data sources. Eventual extension of the code to support the display of dynamic content is a must.


// Objective 1 - Function to show port operational status
let portStatus = "Down" // Assume we can parse the API to get a variable we assign to portStatus
if (portStatus.match("Down")){
    console.log (`Port Status: ${portStatus}`) // Log our output.
    console.log (`GUI: Return white text "Down" with red background to GUI`)// return white text "Down" with red background to GUI
}

if (portStatus.match("Up")){
    console.log (`Port Status: ${portStatus}`) // Log our output.
    console.log (`GUI: Return white text "Up" with green background TO GUI`)// return white text "up" with green background TO GUI
}

// Need a way to check the portStatus variable. If neither Down OR Up then return error
// if (portStatus.match("Down")) || (portStatus.match("Up")){
//     console.log (`Port Status: ERROR: ${portStatus}`); // Log our output.
//     // return white text "ERROR: variable" with black background (port SHOULD always be up or down but can be in an error state)
// }

// Objective 2 - Show our port description
let portDesc = "NONE" // Assume we can parse the API to get a variable we assign to portDesc
console.log (`Port Description: ${portDesc}`) // Log our output.

// Objective 5 - Function to do bit to MByte conversion
let dataInBits = 12030543323 // Assume we can parse the API to get a variable we assign to dataInBits
const dataInMBytes = dataInMBytes => dataInMBytes / 8 / 1024 / 1024; // convert bits (1b) to bytes (1B) (8b = 1B) to kiliobytes (1024B = 1kB) to megabytes (1024kB = 1mB)
console.log (`Port shows ${dataInBits} bits passed. That is ${dataInMBytes(12030543323)}mB megabytes.`) // Log our output.


