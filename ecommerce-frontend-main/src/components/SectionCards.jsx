import Samllcard from "./SmallCard";



const Sectioncards = () => {
    const List = [
        {
            src:"https://www.cnet.com/a/img/resize/21a8a4070c09b9df1816a404b48de5a2998b466e/hub/2013/11/11/ed201021-6797-11e3-846b-14feb5ca9861/Sony_PS4_35618167_02.jpg?auto=webp&width=1092", 
            status: 'On Sale',
            text: 'With Fjord Tours you can explore more of the magical',
        },
        {
            src:"https://www.videogameschronicle.com/files/2020/06/EaQ6nRmXsAExS22.jpg", 
            status: 'On Sale',
            text: 'With Fjord Tours you can explore more of the magical',
        },
        {
            src:"https://st4.depositphotos.com/1032577/28744/i/600/depositphotos_287443646-stock-photo-poznan-poland-july-23-2019.jpg", 
            status: 'On Sale',
            text: 'With Fjord Tours you can explore more of the magical',
        },
        {
            src:"https://images.pushsquare.com/f8a09c883a6c7/1280x720.jpg", 
            status: 'On Sale',
            text: 'With Fjord Tours you can explore more of the magical',
        },
        {
            src:"https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2019/11/disney-plus-mandalorian-ex6k-ex6k.jpg", 
            status: 'On Sale',
            text: 'With Fjord Tours you can explore more of the magical',
        },
    ]
    return (  
        <Samllcard List= {List} />
    );
}

export default Sectioncards;