class Ticker {

    async getTicker() {
        const res = await fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GE', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0a02637f96mshe0bfc0976dd3c81p134fa8jsnd9bd884eaae8',
                'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
                'useQueryString': true,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (res) {
                console.log(res);
                return res.json()
            })
            .then(function (stocks) {
                console.log(stocks);
                return stocks.quoteResponse.result[0]
            })
            .catch(function (err) {
                console.log(err.message);;
            });

        return res
    }

}

const api = new Ticker();

export { api }

// regularMarketPrice