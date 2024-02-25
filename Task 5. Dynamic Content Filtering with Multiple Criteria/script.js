const form = document.querySelector('form')
const select = document.createElement('select');
const select2 = document.createElement('select');
const productDiv = document.createElement('div');
const input = document.createElement('input');
const label = document.createElement('label');
const allTags = []

const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    // More products...
];


products.forEach(product => {
    const option = document.createElement('option');
    option.innerHTML = product['category']
    select.appendChild(option);
    form.appendChild(select);

    product['tags'].forEach(tag => {
        if (!allTags.includes(tag)) allTags.push(tag);
    })

    for (let key in product) {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = key + ': ' + product[key];
        document.body.appendChild(productDiv);
        productDiv.style.display = 'none';
        productDiv.classList.add(`${product['id']}`)
        select.addEventListener('click', function (event) {
            products.forEach(product => {
                switch (event.target.value) {
                    case product['category']:
                        if (productDiv.classList.contains(`${product['id']}`)) {
                            productDiv.style.display = 'block'
                        } else {
                            productDiv.style.display = 'none'
                        }
                }
            })
        })
    }
})

allTags.forEach(tag => {
    const input = document.createElement('input');
    const label = document.createElement('label');
    form.appendChild(label)
    form.appendChild(input)
    label.for = 'checkbox';
    input.type = 'checkbox';
    input.classList.add(tag)
    label.innerHTML = tag;
})

