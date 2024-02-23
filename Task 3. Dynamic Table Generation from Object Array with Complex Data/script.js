const employees = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "Engineering",
        role: { title: "Frontend Developer", level: "Mid" },
        contact: { email: "john.doe@example.com", phone: "123-456-7890" },
        skills: ["JavaScript", "React", "CSS"]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "Design",
        role: { title: "UI/UX Designer", level: "Senior" },
        contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
        skills: ["Figma", "Sketch", "Adobe XD"]
    },
    // Additional employee objects...
];

const theadTr = document.querySelector('.theadTr')
const tbody = document.querySelector('tbody');

for(let i = 0; i < employees.length; i++){
    function createTableRows(obj) {  
        for (let key in obj) {
            if (typeof obj[key] === 'object' && !obj[key].length) {
                createTableRows(obj[key]);
            }else {
                const tr = tbody.appendChild(document.createElement('tr'));
                const th = tr.appendChild(document.createElement('th'));
                const td = tr.appendChild(document.createElement('td'));
                th.textContent = key;
                td.textContent = obj[key];
            }
        }
    }
    createTableRows(employees[i]);
}
