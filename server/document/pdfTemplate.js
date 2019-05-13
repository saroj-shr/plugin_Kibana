module.exports = (data) => {    
    const date = new Date();

    let table = '';
    
    for(let i = 0; i < data.body.length; i++){
        let items = Object.values(data.body[i]);
        let cols = Object.keys(data.body[i]);
        table += `<h3>${items[2]}</h3>`;
        for(let i = 0; i < items.length; i++){            
            table += '<table>';
            table += `<tr><td>${cols[i]}: </td><td>${items[i]}</td></tr>`;
            table += '</table>';

        }
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>${date}</h1>
        
            ${table}
        
    </body>
    </html> 
    `;
}