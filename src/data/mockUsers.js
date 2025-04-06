const mockUsers = [
    { id: 1, name: "Vishal", points: 1050, rank: 1 },
    { id: 2, name: "Riya", points: 990, rank: 2 },
    { id: 3, name: "Karan", points: 950, rank: 3 },
    { id: 4, name: "Anjali", points: 900, rank: 4 },
    { id: 5, name: "Sumit", points: 850, rank: 5 },
    { id: 6, name: "Neha", points: 845, rank: 6 },
    { id: 7, name: "Rahul", points: 840, rank: 7 },
    { id: 8, name: "Sneha", points: 835, rank: 8 },
    { id: 9, name: "Deepak", points: 830, rank: 9 },
    { id: 10, name: "Priya", points: 825, rank: 10 },
    { id: 11, name: "Rakesh", points: 820, rank: 11 },
    { id: 12, name: "Meena", points: 815, rank: 12 },
    { id: 13, name: "Arjun", points: 810, rank: 13 },
    { id: 14, name: "Tina", points: 805, rank: 14 },
    { id: 15, name: "Aman", points: 800, rank: 15 },
    { id: 16, name: "Kavya", points: 795, rank: 16 },
    { id: 17, name: "Nikhil", points: 790, rank: 17 },
    { id: 18, name: "Pooja", points: 785, rank: 18 },
    { id: 19, name: "Harsh", points: 780, rank: 19 },
    { id: 20, name: "Divya", points: 775, rank: 20 },
    { id: 21, name: "Suresh", points: 770, rank: 21 },
    { id: 22, name: "Ankita", points: 765, rank: 22 },
    { id: 23, name: "Rohit", points: 760, rank: 23 },
    { id: 24, name: "Bhavna", points: 755, rank: 24 },
    { id: 25, name: "Ishaan", points: 750, rank: 25 },
    { id: 26, name: "Aarti", points: 745, rank: 26 },
    { id: 27, name: "Yash", points: 740, rank: 27 },
    { id: 28, name: "Tanvi", points: 735, rank: 28 },
    { id: 29, name: "Kabir", points: 730, rank: 29 },
    { id: 30, name: "Naina", points: 725, rank: 30 },
    { id: 31, name: "Gaurav", points: 720, rank: 31 },
    { id: 32, name: "Simran", points: 715, rank: 32 },
    { id: 33, name: "Aditya", points: 710, rank: 33 },
    { id: 34, name: "Sakshi", points: 705, rank: 34 },
    { id: 35, name: "Raj", points: 700, rank: 35 },
    { id: 36, name: "Pallavi", points: 695, rank: 36 },
    { id: 37, name: "Dev", points: 690, rank: 37 },
    { id: 38, name: "Isha", points: 685, rank: 38 },
    { id: 39, name: "Tarun", points: 680, rank: 39 },
    { id: 40, name: "Kirti", points: 675, rank: 40 },
    { id: 41, name: "Vinay", points: 670, rank: 41 },
    { id: 42, name: "Monika", points: 665, rank: 42 },
    { id: 43, name: "Akash", points: 660, rank: 43 },
    { id: 44, name: "Disha", points: 655, rank: 44 },
    { id: 45, name: "Manoj", points: 650, rank: 45 },
    { id: 46, name: "Komal", points: 645, rank: 46 },
    { id: 47, name: "Farhan", points: 640, rank: 47 },
    { id: 48, name: "Nandini", points: 635, rank: 48 },
    { id: 49, name: "Ravi", points: 630, rank: 49 },
    { id: 50, name: "Alisha", points: 625, rank: 50 },
    { id: 51, name: "Lakshay", points: 620, rank: 51 },
    { id: 52, name: "Preeti", points: 615, rank: 52 },
    { id: 53, name: "Mohit", points: 610, rank: 53 },
    { id: 54, name: "Zoya", points: 605, rank: 54 },
    { id: 55, name: "Vivek", points: 600, rank: 55 },
    { id: 56, name: "Ayesha", points: 595, rank: 56 },
    { id: 57, name: "Parth", points: 590, rank: 57 },
    { id: 58, name: "Jhanvi", points: 585, rank: 58 },
    { id: 59, name: "Varun", points: 580, rank: 59 },
    { id: 60, name: "Swati", points: 575, rank: 60 },
    { id: 61, name: "Uday", points: 570, rank: 61 },
    { id: 62, name: "Ritika", points: 565, rank: 62 },
    { id: 63, name: "Sahil", points: 560, rank: 63 },
    { id: 64, name: "Kriti", points: 555, rank: 64 },
    { id: 65, name: "Aakash", points: 550, rank: 65 },
    { id: 66, name: "Lavanya", points: 545, rank: 66 },
    { id: 67, name: "Aryan", points: 540, rank: 67 },
    { id: 68, name: "Mansi", points: 535, rank: 68 },
    { id: 69, name: "Dhruv", points: 530, rank: 69 },
    { id: 70, name: "Anushka", points: 525, rank: 70 },
    { id: 71, name: "Raghav", points: 520, rank: 71 },
    { id: 72, name: "Shreya", points: 515, rank: 72 },
    { id: 73, name: "Kunal", points: 510, rank: 73 },
    { id: 74, name: "Nikita", points: 505, rank: 74 },
    { id: 75, name: "Sanjay", points: 500, rank: 75 },
    { id: 76, name: "Pinky", points: 495, rank: 76 },
    { id: 77, name: "Om", points: 490, rank: 77 },
    { id: 78, name: "Geeta", points: 485, rank: 78 },
    { id: 79, name: "Abhay", points: 480, rank: 79 },
    { id: 80, name: "Reena", points: 475, rank: 80 },
    { id: 81, name: "Naresh", points: 470, rank: 81 },
    { id: 82, name: "Kiran", points: 465, rank: 82 },
    { id: 83, name: "Bharat", points: 460, rank: 83 },
    { id: 84, name: "Lata", points: 455, rank: 84 },
    { id: 85, name: "Hemant", points: 450, rank: 85 },
    { id: 86, name: "Megha", points: 445, rank: 86 },
    { id: 87, name: "Naveen", points: 440, rank: 87 },
    { id: 88, name: "Chitra", points: 435, rank: 88 },
    { id: 89, name: "Imran", points: 430, rank: 89 },
    { id: 90, name: "Payal", points: 425, rank: 90 },
    { id: 91, name: "Siddharth", points: 420, rank: 91 },
    { id: 92, name: "Aastha", points: 415, rank: 92 },
    { id: 93, name: "Harshit", points: 410, rank: 93 },
    { id: 94, name: "Jaya", points: 405, rank: 94 },
    { id: 95, name: "Ajay", points: 400, rank: 95 },
    { id: 96, name: "Sonia", points: 395, rank: 96 },
    { id: 97, name: "Umesh", points: 390, rank: 97 },
    { id: 98, name: "Rupal", points: 385, rank: 98 },
    { id: 99, name: "Sunny", points: 380, rank: 99 },
    { id: 100, name: "Aman", points: 375, rank: 100 }
  ];
  
  export default mockUsers;
  