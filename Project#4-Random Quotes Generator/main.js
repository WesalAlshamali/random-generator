const quotes=[{
    quote:`“Everybody lies.”`,
    writer:`- Dr.House`
},
{
    quote:`“They say every day’s a gift, but why does it have to be a pair of socks?”`,
    writer:`– Tony Soprano`
},
 
{
quote:`“I have spent my whole life scared, frightened of things that could happen, might happen, might not happen, 50-years I spent like that.”`,
writer:`– Walter White`
},
{
    quote:`“Be careful what you wish for, you just might get it”`,
    writer:`- Tony Soprano`
},
{
    quote:`“I did it for me.I liked it.i was good at it and, i was really.. I was alive.”`,
    writer:`– Walter White`
},
{
    quote:`“ I mean, it’s just..it’s the constant, it’s the cycle. It’s solution, dissolution, just over and over and over. It is growth, then decay, then transformation. It is fascinating, really.”`,
    writer:`– Walter White`
},
{
    quote:`“People only see what you allow them to see.” .`,
    writer:`- Dr.Jennifer Melfi `
},
{
    quote:`“What kind of person can I be, where his own mother wants him dead?” `,
    writer:`- Tony Soprano`
},
{
    quote:`“I think human consciousness is a tragic misstep in evolution. We became too self-aware, We are creatures that should not exist by natural law.” `,
    writer:`- Rust Cohle`
}
]
let btn=document.querySelector("#Qbtn");
let quote=document.querySelector(".Quotes");
let writer=document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()* quotes.length);

    quote.innerHTML=quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
})


