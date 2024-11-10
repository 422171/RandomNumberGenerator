        function rollDice() {
            const numDice = document.getElementById('numDice').value;
            const diceType = document.getElementById('diceType').value;
            const results = [];
            let total = 0;

            for (let i = 0; i < numDice; i++) {
                const roll = Math.floor(Math.random() * diceType) + 1;
                results.push(roll);
                total += roll;
            }

            document.getElementById('results').innerHTML = `
                <h2>Dice Roll Result -</h2>
                <p style="font-weight:bold;">Number: ${total}</p>
            `;
        }
    
