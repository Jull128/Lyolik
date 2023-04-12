class Ticker {
    // constructor() {
    //     this.url = `https://query2.finance.yahoo.com/v10/finance/quoteSummary/GE?modules=price`;
    // }

    async getTicker() {
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://query2.finance.yahoo.com/v10/finance/quoteSummary/GE?modules=price`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'https://query2.finance.yahoo.com',
            },
        })

        return res.json()
    }

}

const api = new Ticker();

export { api }

// regularMarketPrice