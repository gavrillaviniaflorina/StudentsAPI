fetch('https://randomuser.me/api/?results=100')
    .then(data1 => data1.json())
    .then(data1 => {
        data = data1.results;

    })
    .then(data1 => {
        setHome();


    })