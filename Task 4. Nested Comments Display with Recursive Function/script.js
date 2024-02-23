const comments = [
    {
        id: 1,
        text: "This is the first comment",
        parentId: null,
        replies: [
            {
                id: 2,
                text: "This is a reply to the first comment",
                parentId: 1,
                replies: [
                    {
                        id: 3,
                        text: "This is a nested reply",
                        parentId: 2,
                        replies: [] // Further nesting possible
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "This is an independent comment",
        parentId: null,
        replies: []
    },
    // Additional comment objects...
];

function genCom(com, lvl) {

    const div = document.createElement('div');
    document.body.appendChild(div);
    div.textContent = com['text'];
    div.style.background = `rgba(0, 255, 0, ${1 / (lvl + 1)})`
    div.style.width = '400px';
    div.style.padding = '10px';
    div.style.marginTop = '20px';
    if (com['parentId']) div.style.margin = '0';
    if (com['replies'].length) {
        com['replies'].forEach(r => {
            genCom(r, r['parentId']);
        });
    }
}

comments.forEach(com => {
    genCom(com, com['parentId']);
})