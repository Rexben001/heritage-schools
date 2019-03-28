const prepolutatedQuestions = [
  (q1Basic1 = {
    questions: "CPU can also be called Processor",
    options: ["True", "False", "Maybe", "I do'nt think so"],
    answer: "True",
    classes: "SS 1"
  }),
  (q1Basic2 = {
    questions: "Letter C is to Hard Disk Drive while Letter A and B is to? ",
    options: ["CD ROM", "RAM", "Floppy Disk", "Heat Sink"],
    answer: "Floppy Disk",
    classes: "SS 1"
  }),
  (q1Basic3 = {
    questions: "Which of the following is not a type of network? ",
    options: ["M.A.N", "T.A.N", "W.L.A.N", "W.A.N"],
    answer: "T.A.N",
    classes: "SS 1"
  }),
  (q1Basic4 = {
    questions: "The Full meaning of W.L.A.N",
    options: [
      "Wide Local Network",
      "Wireless Local Network",
      "Winged Large Network",
      "World Local Network"
    ],
    answer: "Wireless Local Network",
    classes: "SS 1"
  }),
  (q1Basic5 = {
    questions: "RAM is for?",
    options: [
      "Temporary storage",
      "Permanent Storage",
      "Temporary and permanent storage",
      "Video games"
    ],
    answer: "Temporary storage",
    classes: "SS 1"
  }),
  (q2Basic1 = {
    questions: "Power supply converts from what to what?",
    options: ["AC to DC", "DC to AC", "AD to AC", "DC to AD"],
    answer: "DC to AC",
    classes: "SS 1"
  }),
  (q2Basic2 = {
    questions: "OS stands for",
    options: [
      "Operating System",
      "Order System",
      "Ordinary System",
      "Oedering Services"
    ],
    answer: "Operating System",
    classes: "SS 1"
  }),
  (q2Basic3 = {
    questions: "cmd stands for",
    options: [
      "command password",
      "calculate point",
      "computer media dialog",
      "command prompt"
    ],
    answer: "command prompt",
    classes: "SS 1"
  }),
  (q2Basic4 = {
    questions: "HDD partitioning means",
    options: [
      "create a new HDD",
      "Format HDD",
      "Split HDD into different volumes",
      "Destroy HDD"
    ],
    answer: "Split HDD into different volumes",
    classes: "SS 1"
  }),
  (q2Basic5 = {
    questions: "What is the full meaning of IP",
    options: [
      "Internet Provider",
      "Internet Payment",
      "Internet Protocol",
      "Internet Password"
    ],
    answer: "Internet Protocol",
    classes: "SS 1"
  }),
  (q3Basic1 = {
    questions: "HDD partitioning means",
    options: [
      "create a new HDD",
      "Format HDD",
      "Split HDD into different volumes",
      "Destroy HDD"
    ],
    answer: "Split HDD into different volumes",
    classes: "SS 1"
  }),
  (q3Basic2 = {
    questions: "One of the following is a type of OS",
    options: ["Windows OS", "Microsoft Word", "Adobe Reader", "Chrome"],
    answer: "Windows OS",
    classes: "SS 1"
  }),
  (q3Basic3 = {
    questions: "PC stands for?",
    options: [
      "Packet Controller",
      "Personal Computer",
      "Private Computer",
      "Personal Calculator"
    ],
    answer: "Personal Computer",
    classes: "SS 1"
  }),
  (q3Basic4 = {
    questions: "To check my M.A.C address, what command will i use on cmd",
    options: ["ipconfig", "netsh wlan show profiles", "mac address", "config"],
    answer: "ipconfig",
    classes: "SS 1"
  }),
  (q3Basic5 = {
    questions:
      "The following are things that needs to be in place before you can replace an HDD except?",
    options: ["Storage space", "Size", "Type", "color"],
    answer: "color",
    classes: "SS 1"
  }),
  (q4Basic1 = {
    questions: "Which of these is a type of ROM",
    options: ["DIMM", "DDR2", "EROM", "EPROM"],
    answer: "DIMM",
    classes: "SS 1"
  }),
  (q4Basic2 = {
    questions: "Which fire extinguisher class is for electrical equipment?",
    options: ["D", "A", "C", "Z"],
    answer: "A",
    classes: "SS 1"
  }),
  (q4Basic3 = {
    questions: "What should be done before installing a new program?",
    options: ["Run away", "Go for a jog", "Reverse", "Back up"],
    answer: "Back up",
    classes: "SS 1"
  }),
  (q4Basic4 = {
    questions: "Which of these is a graphic file?",
    options: [".doc", ".ppt", ".gif", ".zip"],
    answer: ".gif",
    classes: "SS 1"
  }),
  (q4Basic5 = {
    questions: "Wide Area Network is the same thing as ",
    options: ["Intranet", "Wireless", "Internet", "Peer-to-peer"],
    answer: "Internet",
    classes: "SS 1"
  }),
  (q5Basic1 = {
    questions: "HDD partitioning means",
    options: [
      "create a new HDD",
      "Format HDD",
      "Split HDD into different volumes",
      "Destroy HDD"
    ],
    answer: "Split HDD into different volumes",
    classes: "SS 2"
  }),
  (q5Basic2 = {
    questions: "PC stands for?",
    options: [
      "Packet Controller",
      "Personal Computer",
      "Private Computer",
      "Personal Calculator"
    ],
    answer: "Personal Computer",
    classes: "SS 2"
  }),
  (q5Basic3 = {
    questions: "What should be done before installing a new program?",
    options: ["Run away", "Go for a jog", "Reverse", "Back up"],
    answer: "Back up",
    classes: "SS 2"
  }),
  (q5Basic4 = {
    questions: "Which of these is a graphic file?",
    options: [".doc", ".ppt", ".gif", ".zip"],
    answer: ".gif",
    classes: "SS 2"
  }),
  (q5Basic5 = {
    questions: "What is the first action in the boot sequence?",
    options: ["POST", "BIOS", "MBR", "None of the above"],
    answer: "POST",
    classes: "SS 2"
  }),
  (q51Basic1 = {
    questions: "Which fire extinguisher class is for electrical equipment?",
    options: ["D", "A", "C", "Z"],
    answer: "A",
    classes: "SS 2"
  }),
  (q51Basic2 = {
    questions: "Which of these is a type of ROM",
    options: ["DIMM", "DDR2", "EROM", "EPROM"],
    answer: "DIMM",
    classes: "SS 2"
  }),
  (q51Basic3 = {
    questions: "What is the full meaning of IP",
    options: [
      "Internet Provider",
      "Internet Payment",
      "Internet Protocol",
      "Internet Password"
    ],
    answer: "Internet Protocol",
    classes: "SS 2"
  }),
  (q51Basic4 = {
    questions:
      "The following are things that needs to be in place before you can replace an HDD except?",
    options: ["Storage space", "Size", "Type", "color"],
    answer: "color",
    classes: "SS 2"
  }),
  (q51Basic5 = {
    questions: "Power supply converts from what to what?",
    options: ["AC to DC", "DC to AC", "AD to AC", "DC to AD"],
    answer: "DC to AC",
    classes: "SS 2"
  }),
  (q52Basic1 = {
    questions: "RAM is for?",
    options: [
      "Temporary storage",
      "Permanent Storage",
      "Temporary and permanent storage",
      "Video games"
    ],
    answer: "Temporary storage",
    classes: "SS 2"
  }),
  (q52Basic2 = {
    questions: "Which one is more effiecient? BIOS or UEFI?",
    options: ["None", "Both ", "BIOS", "UEFI"],
    answer: "UEFI",
    classes: "SS 2"
  }),
  (q52Basic3 = {
    questions: "Wide Area Network is the same thing as ",
    options: ["Intranet", "Wireless", "Internet", "Peer-to-peer"],
    answer: "Internet",
    classes: "SS 2"
  }),
  (q52Basic4 = {
    questions: "To check my M.A.C address, what command will i use on cmd",
    options: ["ipconfig", "netsh wlan show profiles", "mac address", "config"],
    answer: "ipconfig",
    classes: "SS 2"
  }),
  (q52Basic5 = {
    questions: "The Full meaning of W.L.A.N",
    options: [
      "Wide Local Network",
      "Wireless Local Network",
      "Winged Large Network",
      "World Local Network"
    ],
    answer: "Wireless Local Network",
    classes: "SS 2"
  }),
  (q53Basic1 = {
    questions: "Which of the following is not a type of network? ",
    options: ["M.A.N", "T.A.N", "W.L.A.N", "W.A.N"],
    answer: "T.A.N",
    classes: "SS 2"
  }),
  (q53Basic2 = {
    questions: "CPU can also be called Processor",
    options: ["True", "False", "Maybe", "I do'nt think so"],
    answer: "True",
    classes: "SS 2"
  }),
  (q53Basic3 = {
    questions: "Letter C is to Hard Disk Drive while Letter A and B is to? ",
    options: ["CD ROM", "RAM", "Floppy Disk", "Heat Sink"],
    answer: "Floppy Disk",
    classes: "SS 2"
  }),
  (q53Basic4 = {
    questions: "One of the following is not a valid command in command prompt",
    options: ["ls", "dir", "taskmgr.exe", "taskbar.exe"],
    answer: "taskbar.exe",
    classes: "SS 2"
  }),
  (q53Basic5 = {
    questions: "What is the full meaning of mkdir",
    options: [
      "Directory",
      "Make Directory",
      "Make Direction",
      "None of the Above"
    ],
    answer: "Make Directory",
    classes: "SS 2"
  })
];
if (localStorage.getItem("cisco") === null) {
  var cisco = [];
  prepolutatedQuestions.forEach(questions => {
    cisco.push(questions);
  });
  localStorage.setItem("cisco", JSON.stringify(cisco));
}

document.getElementById("myForm").addEventListener("submit", save);

function save(e) {
  e.preventDefault();

  //Retrieve the value of the input firlds
  var name = document.getElementById("inputName").value;
  var classs = document.getElementById("inputClass").value;
  console.log(classs.toLowerCase());

  if (classs.toLowerCase() === "ss 1" || classs.toLowerCase() === "ss 2") {
    //Store the retrieved inside an object
    var login = {
      name: name,
      classs: classs
    };

    //save the object into local storage
    localStorage.setItem("login", JSON.stringify(login));

    //go to the quiz's page
    location.href = "quiz.html";
  } else {
    alert("Pls, enter a valid class");
    return;
  }
}
