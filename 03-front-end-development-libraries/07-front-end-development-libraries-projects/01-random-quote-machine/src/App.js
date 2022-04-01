import React, {useState} from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function App() {
  const colorsArray = [
    "#66ccff",
    "##99ff99",
    "#0033cc",
    "#ff0066",
    "#333399",
    "#660066",
    "#ff6600",
    "#FF8000",
    "#210B61",
    "#2E2E2E",
    "#9F81F7",
    "#58FA58",
    "#0B6138",
    "#A9E2F3"
  ]

    const quotesArray = [
      {quote:"Life isn’t about getting and having, it’s about giving and being.", author:"Kevin Kruse"},
      {quote:"Whatever the mind of man can conceive and believe, it can achieve.", author:"Napoleon Hill"},
      {quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},
      {quote:"We become what we think about.",author:"Earl Nightingale"},
      {quote:"The mind is everything. What you think you become.",author:"Buddha"},
      {quote:"Winning isn’t everything, but wanting to win is.",author:"Vince Lombardi"},
      {quote:"Life shrinks or expands in proportion to one’s courage.",author:"Anais Nin"},
      {quote:"Believe you can and you’re halfway there.",author:"Theodore Roosevelt"},
      {quote:"Everything you’ve ever wanted is on the other side of fear.",author:"George Addair"},
      {quote:"Fall seven times and stand up eight.",author:"Japanese Proverb"},
      {quote:"When I let go of what I am, I become what I might be.",author:"Lao Tzu"},
      {quote:"Happiness is not something readymade.  It comes from your own actions.",author:"Dalai Lama"},
      {quote:"A person who never made a mistake never tried anything new.",author:" Albert Einstein"},
      {quote:"It is never too late to be what you might have been.",author:"George Eliot"},
      {quote:"You become what you believe.",author:"Oprah Winfrey"},
      {quote:"Build your own dreams, or someone else will hire you to build theirs.",author:"Farrah Gray"},
      {quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius"},
      {quote:"Dream big and dare to fail.",author:"Norman Vaughan"},
      {quote:"Change your thoughts and you change your world.",author:"Norman Vincent Peale"},
      {quote:"If you can dream it, you can achieve it.",author:"Zig Ziglar"} 
    ];
    const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being.");
    const [author,setAuthor] = useState("Kevin Kruse");
    const [randomNumber, setRandomNumber] = useState(0);
    const [changeColor, setChangeColor] = useState('#66ccff');
    
    const getRandomNumber = () => {
      let random = Math.floor(Math.random()* quotesArray.length)
      let color = Math.floor(Math.random() * colorsArray.length);
  
      setRandomNumber(random)
      setQuote(quotesArray[random].quote)
      setAuthor(quotesArray[random].author)
      setChangeColor(colorsArray[color]);
    }
    



  return (
    <div className="App">
      <header className="App-header" style ={{backgroundColor: changeColor,  color:changeColor}}>
        <div id="quote-box">
          <p id="text" style={{color:changeColor}}>
            "{quote}"
          </p>
          <p id="author" style={{color:changeColor}}>
            - {author}
          </p>
          <div id="buttons">
          
            <a id="tweet-quote" href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote} - ${author}`)} title="Tweet htis quote!" style={{backgroundColor: changeColor}}>
              <i class="fa fa-twitter"></i>            
            </a>
            <button id="new-quote" onClick={() => getRandomNumber()} style={{backgroundColor: changeColor}}>New Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
