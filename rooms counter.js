// Define a function to create a room
function createRoom(roomNumber, type) {
    return {
        roomNumber: roomNumber, // Unique room number
        type: type,             // Room type (1: single, 2: double, 3: triple, 4: quadruple)
        state: true,            // true: free, false: occupied
        clients: []             // List of clients (empty if the room is free)
    };
}

// Define a function to create a client
function createClient(id, name, nationality, age) {
    return {
        id: id,                 // Client's identity number
        name: name,             // Client's name
        nationality: nationality, // Client's nationality (1 to 30)
        age: age                // Client's age
    };
}

// Define a function to count the number of free rooms
function countFreeRooms(hotelRooms) {
    let freeRooms = 0;
    for (let i = 0; i < hotelRooms.length; i++) {
        if (hotelRooms[i].state === true) {
            freeRooms++;
        }
    }
    return freeRooms;
}

// Define a function to count the number of clients with a specific nationality
function countClientsByNationality(hotelRooms, nationality) {
    let count = 0;
    for (let i = 0; i < hotelRooms.length; i++) {
        if (hotelRooms[i].state === false) {  // Check only occupied rooms
            for (let j = 0; j < hotelRooms[i].clients.length; j++) {
                if (hotelRooms[i].clients[j].nationality === nationality) {
                    count++;
                }
            }
        }
    }
    return count;
}

// Example usage:

// Create clients
let client1 = createClient(101, "John Doe", 1, 30);
let client2 = createClient(102, "Jane Smith", 2, 25);
let client3 = createClient(103, "Carlos Alvarez", 1, 28);

// Create rooms
let room1 = createRoom(1, 1); // Single room
let room2 = createRoom(2, 2); // Double room
let room3 = createRoom(3, 3); // Triple room

// Assign clients to rooms
room1.clients.push(client1);  // Room 1 is occupied by John Doe
room1.state = false;          // Room 1 is now occupied

room2.clients.push(client2, client3); // Room 2 is occupied by Jane and Carlos
room2.state = false;               // Room 2 is now occupied

// Create an array to hold the hotel rooms
let hotelRooms = [room1, room2, room3];

// Count free rooms
console.log("Number of free rooms:", countFreeRooms(hotelRooms));  // Expected output: 1

// Count clients from nationality 1
console.log("Number of clients from nationality 1:", countClientsByNationality(hotelRooms, 1));  // Expected output: 2 (John and Carlos)
