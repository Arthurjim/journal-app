export default ()=>({
    isLoading:true,
    entries:[{
        id:new Date().getTime(),
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto omnis fugit officia incidunt temporibus dolorem distinctio itaque dolore alias explicabo nulla, totam adipisci debitis dicta quae, reprehenderit modi! Pariatur, nostrum!',
        picture:null
    },{
        id:new Date().getTime()+1000,
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla repellendus modi quas ducimus tempora, quasi suscipit amet libero, ad, quibusdam voluptates voluptas provident quod dignissimos. Ratione quidem excepturi esse?',
        picture:null
    },
    {
        id:new Date().getTime()+2000,
        date: new Date().toDateString(),
        text: 'Lorem 123 sit amet consectetur adipisicing elit. Iusto omnis fugit officia incidunt temporibus dolorem distinctio itaque dolore alias explicabo nulla, totam adipisci debitis dicta quae, reprehenderit modi! Pariatur, nostrum!',
        picture:null
    },]
})