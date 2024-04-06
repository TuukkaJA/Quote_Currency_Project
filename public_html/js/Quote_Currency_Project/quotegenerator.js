function shareOnTwitter () {
    const quote = document.querySelector(".quote-box blockquote").textContent;
    const author = document.querySelector(".quote-box span").textContent;
    const tweetText = quote + ' -' + author;
  
    const urlToShare = window.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;;
    window.open(urlToShare, "x-post");
  }
  
  
  //this is getQuote2 because the first one stopped working THIS IS FROM api-ninjas.com
  
  const url = "https://api.api-ninjas.com/v1/quotes?category=";
  
  async function getQuote2(url) {
    const headers = new Headers({
      'X-Api-Key': 'RylRlqXFMgGInIYXdt2IcA==gNiKEFiWcAxq9LW4'
    });
  
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });
  
    let data = await response.json();
  
    const quoteObject = data[0];
    const quote = quoteObject.quote;
    const author = quoteObject.author;
    document.querySelector(".quote-box blockquote").textContent = `"${quote}"`;
    document.querySelector(".quote-box span").textContent = `${author}`;
    console.log(data);
  };
  
  getQuote2(url); 
  