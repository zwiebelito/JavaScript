// створити карту користувача (User Card)

class userAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        let i = this.cards.length + 1;
        if(i > 3){
            console.error('Е, альо, спробуй цифру 1, 2 або 3');
        } else{
            let newCard = userCard(i);
            this.cards.push(newCard);
            return newCard;
        }
    }

    getCardByKey(key) {
        return this.cards.find(value => value.getCardInfo().key === key);
    }
}


function userCard (number) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }

    function historyArray(operationType, credits) {
        let history = {
            operationType, credits, operationTime: new Date()
        };
        card.historyLogs.push(history)
    }

    return {
        getCardInfo() {
            return card;
        },

        putCredits(credits) {
            card.balance += credits;
            historyArray('Received credits', credits)
        },

        takeCredits(credits) {
            if (credits > card.transactionLimit) {
                console.error('Ви перевищили ліміт транзакцій');
            } else if (credits > card.balance) {
                console.error('Поповніть рахунок для здійснення операції');
            } else {
                card.balance -= credits;
            }
        },

        setTransactionLimit(limit) {
            card.transactionLimit = limit;
            historyArray('Transaction limit change', limit)
        },

        transferCredits(credits, transferUser) {
            this.takeCredits(credits + (credits * 0.5));
            transferUser.putCredits(credits);
        }
    }
}

let user1 = new userAccount('Bob');
user1.addCard();
user1.addCard();

const card1 = user1.getCardByKey(1);
const card2 = user1.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

console.log(card1.getCardInfo());
console.log(card2.getCardInfo());

